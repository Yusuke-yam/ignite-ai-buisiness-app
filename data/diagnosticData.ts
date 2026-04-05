// ============================================================
// 自己機能タイプ定義
// ============================================================
export type SelfFunctionType =
  | "structure"
  | "bottleneck"
  | "solution"
  | "optimizer"
  | "gapfill"
  | "coach"
  | "harmonizer"
  | "creator"
  | "insight";

// ============================================================
// Step 1: 職業選択
// ============================================================
export const occupations: string[] = [
  "営業",
  "マーケティング",
  "企画",
  "コンサル",
  "広報",
  "人事",
  "経理",
  "法務",
  "総務",
  "事務",
  "エンジニア",
  "デザイナー",
  "プロダクトマネージャー",
  "データアナリスト",
  "カスタマーサポート",
  "カスタマーサクセス",
];

// ============================================================
// Step 2: 業務選択（職業別）
// 各業務にタイプを割り当て（+1点スコアリング用）
// ============================================================
export interface Task {
  label: string;
  type: SelfFunctionType;
}

export const tasksByOccupation: Record<string, Task[]> = {
  営業: [
    { label: "アポイント取得", type: "harmonizer" },
    { label: "資料作成", type: "structure" },
    { label: "事前準備", type: "optimizer" },
    { label: "提案", type: "solution" },
    { label: "見積作成", type: "structure" },
    { label: "契約締結", type: "harmonizer" },
    { label: "顧客フォロー", type: "coach" },
    { label: "数字管理", type: "structure" },
    { label: "新規顧客開拓", type: "creator" },
    { label: "関係構築", type: "harmonizer" },
  ],
  マーケティング: [
    { label: "市場分析", type: "insight" },
    { label: "顧客分析", type: "insight" },
    { label: "競合分析", type: "bottleneck" },
    { label: "戦略立案", type: "solution" },
    { label: "広告運用", type: "optimizer" },
    { label: "コンテンツ制作", type: "creator" },
    { label: "SNS運用", type: "harmonizer" },
    { label: "SEO対策", type: "optimizer" },
    { label: "キャンペーン企画", type: "creator" },
    { label: "効果分析", type: "bottleneck" },
  ],
  企画: [
    { label: "市場調査", type: "insight" },
    { label: "競合分析", type: "bottleneck" },
    { label: "課題整理", type: "structure" },
    { label: "アイデア創出", type: "creator" },
    { label: "企画立案", type: "solution" },
    { label: "資料作成", type: "structure" },
    { label: "プレゼン", type: "harmonizer" },
    { label: "進行管理", type: "optimizer" },
    { label: "改善提案", type: "gapfill" },
    { label: "成果分析", type: "bottleneck" },
  ],
  コンサル: [
    { label: "現状分析", type: "bottleneck" },
    { label: "課題抽出", type: "bottleneck" },
    { label: "仮説構築", type: "insight" },
    { label: "戦略立案", type: "solution" },
    { label: "資料作成", type: "structure" },
    { label: "プレゼン", type: "harmonizer" },
    { label: "プロジェクト管理", type: "optimizer" },
    { label: "改善提案", type: "gapfill" },
    { label: "意思決定支援", type: "coach" },
    { label: "成果検証", type: "bottleneck" },
  ],
  広報: [
    { label: "情報発信", type: "creator" },
    { label: "プレスリリース作成", type: "structure" },
    { label: "メディア対応", type: "harmonizer" },
    { label: "取材対応", type: "harmonizer" },
    { label: "SNS運用", type: "creator" },
    { label: "イベント企画", type: "creator" },
    { label: "ブランド管理", type: "solution" },
    { label: "広報戦略立案", type: "solution" },
    { label: "記事作成", type: "creator" },
    { label: "効果測定", type: "bottleneck" },
  ],
  人事: [
    { label: "採用計画", type: "solution" },
    { label: "求人作成", type: "creator" },
    { label: "書類選考", type: "structure" },
    { label: "面接", type: "insight" },
    { label: "人材評価", type: "bottleneck" },
    { label: "研修企画", type: "coach" },
    { label: "研修実施", type: "coach" },
    { label: "労務管理", type: "optimizer" },
    { label: "制度設計", type: "solution" },
    { label: "組織開発", type: "gapfill" },
  ],
  経理: [
    { label: "仕訳入力", type: "structure" },
    { label: "帳簿管理", type: "structure" },
    { label: "請求処理", type: "optimizer" },
    { label: "支払処理", type: "optimizer" },
    { label: "経費精算", type: "optimizer" },
    { label: "月次決算", type: "structure" },
    { label: "年次決算", type: "structure" },
    { label: "資金管理", type: "solution" },
    { label: "財務分析", type: "insight" },
    { label: "税務対応", type: "solution" },
  ],
  法務: [
    { label: "契約書作成", type: "structure" },
    { label: "契約審査", type: "bottleneck" },
    { label: "法令調査", type: "insight" },
    { label: "リスク管理", type: "bottleneck" },
    { label: "コンプライアンス管理", type: "optimizer" },
    { label: "社内相談対応", type: "harmonizer" },
    { label: "トラブル対応", type: "solution" },
    { label: "規程整備", type: "structure" },
    { label: "知財管理", type: "optimizer" },
    { label: "法務チェック", type: "bottleneck" },
  ],
  総務: [
    { label: "備品管理", type: "optimizer" },
    { label: "施設管理", type: "optimizer" },
    { label: "文書管理", type: "structure" },
    { label: "社内連絡", type: "harmonizer" },
    { label: "イベント運営", type: "harmonizer" },
    { label: "福利厚生管理", type: "coach" },
    { label: "契約管理", type: "optimizer" },
    { label: "庶務対応", type: "optimizer" },
    { label: "社内環境整備", type: "gapfill" },
    { label: "安全管理", type: "bottleneck" },
  ],
  事務: [
    { label: "データ入力", type: "structure" },
    { label: "書類作成", type: "structure" },
    { label: "書類整理", type: "structure" },
    { label: "ファイリング", type: "optimizer" },
    { label: "スケジュール管理", type: "optimizer" },
    { label: "電話対応", type: "harmonizer" },
    { label: "メール対応", type: "harmonizer" },
    { label: "資料整理", type: "structure" },
    { label: "情報共有", type: "harmonizer" },
    { label: "来客対応", type: "harmonizer" },
  ],
  エンジニア: [
    { label: "要件定義", type: "solution" },
    { label: "設計", type: "solution" },
    { label: "コーディング", type: "creator" },
    { label: "コードレビュー", type: "bottleneck" },
    { label: "テスト", type: "bottleneck" },
    { label: "デバッグ", type: "bottleneck" },
    { label: "リリース", type: "optimizer" },
    { label: "運用保守", type: "optimizer" },
    { label: "環境構築", type: "optimizer" },
    { label: "技術調査", type: "insight" },
  ],
  デザイナー: [
    { label: "要件整理", type: "structure" },
    { label: "コンセプト設計", type: "creator" },
    { label: "ワイヤーフレーム作成", type: "solution" },
    { label: "UI設計", type: "solution" },
    { label: "ビジュアル制作", type: "creator" },
    { label: "素材制作", type: "creator" },
    { label: "デザイン調整", type: "optimizer" },
    { label: "プロトタイプ作成", type: "gapfill" },
    { label: "ユーザビリティ確認", type: "bottleneck" },
    { label: "品質確認", type: "bottleneck" },
  ],
  プロダクトマネージャー: [
    { label: "市場分析", type: "insight" },
    { label: "ユーザー調査", type: "insight" },
    { label: "課題定義", type: "bottleneck" },
    { label: "プロダクト戦略立案", type: "solution" },
    { label: "要件定義", type: "solution" },
    { label: "優先順位付け", type: "optimizer" },
    { label: "ロードマップ作成", type: "gapfill" },
    { label: "開発調整", type: "harmonizer" },
    { label: "KPI管理", type: "structure" },
    { label: "成果分析", type: "bottleneck" },
  ],
  データアナリスト: [
    { label: "データ収集", type: "optimizer" },
    { label: "データ整理", type: "structure" },
    { label: "データ加工", type: "optimizer" },
    { label: "統計分析", type: "insight" },
    { label: "データ可視化", type: "structure" },
    { label: "ダッシュボード作成", type: "structure" },
    { label: "レポート作成", type: "structure" },
    { label: "インサイト抽出", type: "insight" },
    { label: "改善提案", type: "gapfill" },
    { label: "データ管理", type: "optimizer" },
  ],
  カスタマーサポート: [
    { label: "問い合わせ対応", type: "harmonizer" },
    { label: "メール返信", type: "harmonizer" },
    { label: "電話対応", type: "harmonizer" },
    { label: "チャット対応", type: "harmonizer" },
    { label: "トラブル対応", type: "solution" },
    { label: "問題調査", type: "bottleneck" },
    { label: "エスカレーション", type: "harmonizer" },
    { label: "顧客フォロー", type: "coach" },
    { label: "FAQ作成", type: "structure" },
    { label: "対応記録", type: "structure" },
  ],
  カスタマーサクセス: [
    { label: "利用状況分析", type: "insight" },
    { label: "顧客オンボーディング", type: "coach" },
    { label: "利用促進", type: "coach" },
    { label: "課題ヒアリング", type: "bottleneck" },
    { label: "改善提案", type: "gapfill" },
    { label: "定例ミーティング", type: "harmonizer" },
    { label: "満足度管理", type: "optimizer" },
    { label: "資料作成", type: "structure" },
    { label: "Asis Tobeの明確化", type: "gapfill" },
    { label: "関係構築", type: "harmonizer" },
  ],
};

// ============================================================
// Step 3: 動作選択（+2点）
// ============================================================
export interface ActionOption {
  label: string;
  type: SelfFunctionType;
}

export const actions: ActionOption[] = [
  { label: "情報を規則的にまとめる", type: "structure" },
  { label: "問題の原因を考え特定する", type: "bottleneck" },
  { label: "何か戦略を考え形にする", type: "solution" },
  { label: "より良い方法を探し出す", type: "optimizer" },
  { label: "理想の未来を考え明確にする", type: "gapfill" },
  { label: "誰かの相談に乗る", type: "coach" },
  { label: "人の間を取り持つ", type: "harmonizer" },
  { label: "何か新しいアイデアを考える", type: "creator" },
  { label: "より深く調べ込む", type: "insight" },
];

// ============================================================
// Step 4: 欲求選択（+3点）
// ============================================================
export interface DesireOption {
  label: string;
  type: SelfFunctionType;
}

export const desires: DesireOption[] = [
  { label: "構造化/整理したい", type: "structure" },
  { label: "より本質を追求し続けたい", type: "insight" },
  { label: "存在しない新しい価値を作りたい", type: "creator" },
  { label: "さらに効率化したい", type: "optimizer" },
  { label: "人を成長させたい", type: "coach" },
  { label: "人を助けたい", type: "harmonizer" },
  { label: "存在する差分を埋めたい", type: "gapfill" },
];

// ============================================================
// 自己機能タイプ結果データ
// ============================================================
export interface AiJob {
  title: string;
  detail: string;
}

export interface TypeResult {
  name: string;
  description: string;
  aiJobs: [AiJob, AiJob, AiJob];
}

export const typeResults: Record<SelfFunctionType, TypeResult> = {
  structure: {
    name: "情報を整理し分かりやすくまとめるのが得意なタイプ",
    description:
      "複雑な情報を整理し、誰でも理解できる形に変換するのが得意なあなた。AIを活用すれば、そのスキルが何倍もの速さで価値を生み出せます。",
    aiJobs: [
      { title: "AI×スライド作成", detail: "営業資料やプレゼン資料をAIで構成から作成する" },
      { title: "AI×図解コンテンツ作成", detail: "本や記事の内容を図解にする" },
      { title: "AI×マニュアル作成", detail: "企業のマニュアルをわかりやすく整理し直す" },
    ],
  },
  bottleneck: {
    name: "問題の原因を見つけるのが得意なタイプ",
    description:
      "物事の本質的な問題を見抜き、根本原因を特定するのが得意なあなた。AIを組み合わせれば、高品質な分析レポートを短時間で届けられます。",
    aiJobs: [
      { title: "AI×SNS分析", detail: "伸びない原因をAI活用で分析" },
      { title: "AI×業務ボトルネック診断", detail: "AIで仕事の遅れや非効率の原因を見える化する" },
      { title: "AI×データ分析", detail: "AIを活用しデータからボトルネックをみつける" },
    ],
  },
  solution: {
    name: "課題の解決策を考えるのが得意なタイプ",
    description:
      "課題に対してベストな解決策を導き出すのが得意なあなた。AIを武器にすれば、企業の業務効率化や導入支援で即戦力として活躍できます。",
    aiJobs: [
      { title: "AI×SNS企画作成", detail: "投稿ネタや発信戦略をAIを活用して作る" },
      { title: "AI×業務改善アイデア出し", detail: "企業の課題に対して改善案を提案する" },
      { title: "AI×コピーライティング", detail: "広告やキャッチコピーをAIで作成する" },
    ],
  },
  optimizer: {
    name: "今ある業務を効率化するのが得意なタイプ",
    description:
      "無駄を省き、最短ルートを見つけるのが得意なあなた。AIツールを活用した業務効率化の提案は、企業から強く求められているスキルです。",
    aiJobs: [
      { title: "AI×資料作成自動化", detail: "面倒な資料作成をAIツールで自動化する" },
      { title: "AI×ルーティン業務削減", detail: "毎日の繰り返し業務をAIで時短する" },
      { title: "AI×業務効率化コンサル", detail: "企業の無駄な業務をAIで減らす改善提案" },
    ],
  },
  gapfill: {
    name: "理想と現状の差を埋めるのが得意なタイプ",
    description:
      "理想のゴールから逆算して行動できるあなた。AIを活用したコーチングや業務改善サービスで、クライアントの変化を力強くサポートできます。",
    aiJobs: [
      { title: "AI×副業ロードマップ設計", detail: "ゼロから収益化までの道筋をAIを活用して可視化する" },
      { title: "AI×目標達成プラン", detail: "目標から逆算した行動計画をAIを活用して設計する" },
      { title: "AI×戦略設計", detail: "現状から理想までの具体的な戦略をAIを活用して策定する" },
    ],
  },
  coach: {
    name: "人の可能性を引き出すのが得意なタイプ",
    description:
      "人の強みを見つけ、成長を後押しするのが得意なあなた。AIの知識を掛け合わせることで、唯一無二のコーチ・講師として活躍できます。",
    aiJobs: [
      { title: "AI×キャリア相談", detail: "将来の方向性をAIを使いながら一緒に整理する" },
      { title: "AI×副業コーチング", detail: "AIを活用した収益化まで伴走サポートする" },
      { title: "AI×行動サポート", detail: "行動できない人をAIを使いサポート" },
    ],
  },
  harmonizer: {
    name: "人間関係やチームを整えるのが得意なタイプ",
    description:
      "人と人をつなぎ、場の空気を整えるのが得意なあなた。AIを組み合わせたSNS運用やコンテンツ制作で、多くの人に価値を届けられます。",
    aiJobs: [
      { title: "AI×コミュニケーション改善", detail: "AIを活用してチームのやり取りをスムーズにする" },
      { title: "AI×1on1支援", detail: "AIで面談の質を上げるサポートをする" },
      { title: "AI×組織改革", detail: "AIで職場の課題を見える化し改善する" },
    ],
  },
  creator: {
    name: "新しい価値やアイデアを生むのが得意なタイプ",
    description:
      "ゼロから新しいものを生み出すのが得意なあなた。AI×クリエイティブの組み合わせで、記事・広告・動画と幅広い副業機会が広がります。",
    aiJobs: [
      { title: "AI×SNSコンテンツ制作", detail: "投稿や発信コンテンツをAIで作る" },
      { title: "AI×商品アイデア創出", detail: "AIで売れる商品やサービスを考える" },
      { title: "AI×画像・動画生成", detail: "AIでコンテンツを制作し販売する" },
    ],
  },
  insight: {
    name: "物事の本質を理解するのが得意なタイプ",
    description:
      "表面を超えて本質を掴む洞察力があるあなた。AIを活用した市場調査や競合分析は、経営者や事業会社から高く評価される付加価値サービスです。",
    aiJobs: [
      { title: "AI×市場リサーチ", detail: "業界や競合をAIで分析する" },
      { title: "AI×解説コンテンツ", detail: "難しい内容をAIでわかりやすく発信する" },
      { title: "AI×知識販売", detail: "専門知識をAIで教材やコンテンツにする" },
    ],
  },
};
