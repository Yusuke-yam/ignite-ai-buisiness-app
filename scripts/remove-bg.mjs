import sharp from "sharp";

const input =
  "/Users/yusukeyamamoto/Downloads/IgnAIte/サービスロゴ/ロゴ(タイトルつき).png";
const output =
  "/Users/yusukeyamamoto/Downloads/IgnAIte/診断アプリ/public/logo-with-title.png";

const img = sharp(input);
const { data, info } = await img
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const buf = Buffer.from(data);

// チェッカーボードの暗グレー(~153)も含め、背景色とみなす閾値
const THRESHOLD = 210;

// BFS: 画像の四辺から「背景色に近いピクセル」を塗り潰して透過にする
function isBg(offset) {
  const r = buf[offset];
  const g = buf[offset + 1];
  const b = buf[offset + 2];
  // グレースケール的に明るい or チェッカーの暗グレー(差が小さく彩度が低い)
  const maxCh = Math.max(r, g, b);
  const minCh = Math.min(r, g, b);
  const saturation = maxCh - minCh;
  return saturation < 30 && r > 100; // 彩度低くかつ極端に暗くない = 背景
}

const visited = new Uint8Array(width * height);
const queue = [];

// 四辺のピクセルをキューに追加
for (let x = 0; x < width; x++) {
  queue.push(x, 0);
  queue.push(x, height - 1);
}
for (let y = 1; y < height - 1; y++) {
  queue.push(0, y);
  queue.push(width - 1, y);
}

let qi = 0;
while (qi < queue.length) {
  const x = queue[qi++];
  const y = queue[qi++];
  const idx = y * width + x;
  if (visited[idx]) continue;
  visited[idx] = 1;
  const offset = idx * channels;
  if (!isBg(offset)) continue;
  buf[offset + 3] = 0; // 透明化
  if (x > 0) {
    queue.push(x - 1, y);
  }
  if (x < width - 1) {
    queue.push(x + 1, y);
  }
  if (y > 0) {
    queue.push(x, y - 1);
  }
  if (y < height - 1) {
    queue.push(x, y + 1);
  }
}

await sharp(buf, { raw: { width, height, channels } }).png().toFile(output);

console.log("Done:", output);
