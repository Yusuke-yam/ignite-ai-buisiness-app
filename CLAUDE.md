# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev    # 開発サーバー起動 → http://localhost:3000
npm run build  # プロダクションビルド（TypeScript型チェックも実行）
npm run start  # プロダクションサーバー起動
```

## Architecture

### 概要
Next.js 15 App Router / React 19 / TypeScript / Tailwind CSS v4 で構築されたAI副業マッチング診断アプリ。APIなし・データ保存なし・全選択式。

### データフロー
```
data/diagnosticData.ts  →  lib/diagnosticLogic.ts  →  components/DiagnosticApp.tsx
（マスターデータ）           （スコア計算）               （UI・状態管理）
```

### 診断ステップ
- Step 0: スタート画面（動画＋ロゴ＋CTA）
- Step 1: 職業選択（16職種）
- Step 2: 業務選択（職種別10項目）
- Step 3: 動作選択（9項目、+2点）
- Step 4: 欲求選択（7項目、+3点）
- Step 5: 結果表示

### スコアリングロジック（`lib/diagnosticLogic.ts`）
- Step2業務: +1点、Step3動作: +2点、Step4欲求: +3点
- 9つの `SelfFunctionType`（structure / bottleneck / solution / optimizer / gapfill / coach / harmonizer / creator / insight）のうち最高得点を結果とする
- 同点時: Step4 → Step3 の優先順

### 主要な型
- `SelfFunctionType`: 9種の自己機能タイプ
- `AiJob`: `{ title: string; detail: string }` — 各タイプ3候補を持ち、結果画面でランダムに1つ表示
- `Step`: `0 | 1 | 2 | 3 | 4 | 5`

### UIの注意点
- `QuestionCard` は `key={step}` で各ステップごとに再マウントされる（`confirmed` 状態リセットのため）
- 選択後350ms後に `onSelect` が呼ばれ次ステップへ遷移する
- `app/page.tsx` が最大幅640pxのコンテナを担い、左右余白には `public/bg.png` を背景表示
- Step0（スタート画面）のみ背景グラデーションを `StartScreen` 内で独自に持つ
- CTAボタンのリンク先: Google Forms（`components/DiagnosticApp.tsx` の `ResultScreen` 内 `href`）

### スタイル
- インラインスタイルで完結（Tailwindはアニメーション用クラスのみ `app/globals.css` に定義）
- カラー定数は `DiagnosticApp.tsx` 冒頭の `COLORS` オブジェクトで管理
- CTAカラー: 背景 `#022769`（ネイビー）、文字グラデーション `#E7A200` → `#FEE21C`（ゴールド）
