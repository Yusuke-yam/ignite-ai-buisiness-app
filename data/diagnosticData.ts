// ============================================================
// 自己機能タイプ定義（19種）
// ============================================================
export type SelfFunctionType =
  | "info_structure" // 情報の整理・構造化
  | "space_organization" // 空間・環境・モノの整頓
  | "process_efficiency" // 業務プロセスの効率化
  | "bottleneck_solving" // 課題/ボトルネックの解消
  | "strategy_design" // 戦略の設計
  | "essence_analysis" // 本質の分析・探究
  | "idea_realization" // アイデアの具現化
  | "unique_expression" // 独自の世界観・感性の表現
  | "complex_verbalization" // 複雑な内容の言語化
  | "visual_communication" // デザインで視覚化し伝達
  | "truth_extraction" // 本音を引き出し悩みを解消
  | "strength_discovery" // 魅力・強みの発見
  | "new_perspective" // 新しい視点・気づきを与える
  | "action_promotion" // 行動促進させる
  | "team_alignment" // チームの共通認識の醸成
  | "energy_elevation" // 場の熱量の向上
  | "right_placement" // 適材適所の配置
  | "intent_alignment" // 意図のすり合わせ・ズレの調整
  | "joy_creation"; // 驚き・笑顔・感動を与える

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
// Step 2: 業務選択（職業別・+1点）
// ============================================================
export interface Task {
  label: string;
  type: SelfFunctionType;
}

export const tasksByOccupation: Record<string, Task[]> = {
  営業: [
    { label: "アポイント取得", type: "action_promotion" },
    { label: "資料作成", type: "info_structure" },
    { label: "事前準備", type: "strategy_design" },
    { label: "提案", type: "strategy_design" },
    { label: "見積作成", type: "info_structure" },
    { label: "契約締結", type: "intent_alignment" },
    { label: "顧客フォロー", type: "truth_extraction" },
    { label: "数字管理", type: "process_efficiency" },
    { label: "新規顧客開拓", type: "action_promotion" },
    { label: "関係構築", type: "team_alignment" },
  ],
  マーケティング: [
    { label: "市場分析", type: "essence_analysis" },
    { label: "顧客分析", type: "essence_analysis" },
    { label: "競合分析", type: "bottleneck_solving" },
    { label: "戦略立案", type: "strategy_design" },
    { label: "広告運用", type: "process_efficiency" },
    { label: "コンテンツ制作", type: "idea_realization" },
    { label: "SNS運用", type: "team_alignment" },
    { label: "SEO対策", type: "process_efficiency" },
    { label: "キャンペーン企画", type: "idea_realization" },
    { label: "効果分析", type: "bottleneck_solving" },
  ],
  企画: [
    { label: "市場調査", type: "essence_analysis" },
    { label: "競合分析", type: "bottleneck_solving" },
    { label: "課題整理", type: "info_structure" },
    { label: "アイデア創出", type: "idea_realization" },
    { label: "企画立案", type: "strategy_design" },
    { label: "資料作成", type: "info_structure" },
    { label: "プレゼン", type: "team_alignment" },
    { label: "進行管理", type: "process_efficiency" },
    { label: "改善提案", type: "intent_alignment" },
    { label: "成果分析", type: "bottleneck_solving" },
  ],
  コンサル: [
    { label: "現状分析", type: "bottleneck_solving" },
    { label: "課題抽出", type: "bottleneck_solving" },
    { label: "仮説構築", type: "essence_analysis" },
    { label: "戦略立案", type: "strategy_design" },
    { label: "資料作成", type: "info_structure" },
    { label: "プレゼン", type: "team_alignment" },
    { label: "プロジェクト管理", type: "process_efficiency" },
    { label: "改善提案", type: "intent_alignment" },
    { label: "意思決定支援", type: "strength_discovery" },
    { label: "成果検証", type: "bottleneck_solving" },
  ],
  広報: [
    { label: "情報発信", type: "idea_realization" },
    { label: "プレスリリース作成", type: "info_structure" },
    { label: "メディア対応", type: "team_alignment" },
    { label: "取材対応", type: "team_alignment" },
    { label: "SNS運用", type: "idea_realization" },
    { label: "イベント企画", type: "energy_elevation" },
    { label: "ブランド管理", type: "strategy_design" },
    { label: "広報戦略立案", type: "strategy_design" },
    { label: "記事作成", type: "complex_verbalization" },
    { label: "効果測定", type: "bottleneck_solving" },
  ],
  人事: [
    { label: "採用計画", type: "strategy_design" },
    { label: "求人作成", type: "complex_verbalization" },
    { label: "書類選考", type: "info_structure" },
    { label: "面接", type: "essence_analysis" },
    { label: "人材評価", type: "right_placement" },
    { label: "研修企画", type: "strength_discovery" },
    { label: "研修実施", type: "action_promotion" },
    { label: "労務管理", type: "process_efficiency" },
    { label: "制度設計", type: "strategy_design" },
    { label: "組織開発", type: "intent_alignment" },
  ],
  経理: [
    { label: "仕訳入力", type: "info_structure" },
    { label: "帳簿管理", type: "info_structure" },
    { label: "請求処理", type: "process_efficiency" },
    { label: "支払処理", type: "process_efficiency" },
    { label: "経費精算", type: "process_efficiency" },
    { label: "月次決算", type: "info_structure" },
    { label: "年次決算", type: "info_structure" },
    { label: "資金管理", type: "strategy_design" },
    { label: "財務分析", type: "essence_analysis" },
    { label: "税務対応", type: "strategy_design" },
  ],
  法務: [
    { label: "契約書作成", type: "info_structure" },
    { label: "契約審査", type: "bottleneck_solving" },
    { label: "法令調査", type: "essence_analysis" },
    { label: "リスク管理", type: "bottleneck_solving" },
    { label: "コンプライアンス管理", type: "process_efficiency" },
    { label: "社内相談対応", type: "team_alignment" },
    { label: "トラブル対応", type: "strategy_design" },
    { label: "規程整備", type: "info_structure" },
    { label: "知財管理", type: "process_efficiency" },
    { label: "法務チェック", type: "bottleneck_solving" },
  ],
  総務: [
    { label: "備品管理", type: "process_efficiency" },
    { label: "施設管理", type: "space_organization" },
    { label: "文書管理", type: "info_structure" },
    { label: "社内連絡", type: "team_alignment" },
    { label: "イベント運営", type: "energy_elevation" },
    { label: "福利厚生管理", type: "strength_discovery" },
    { label: "契約管理", type: "process_efficiency" },
    { label: "庶務対応", type: "process_efficiency" },
    { label: "社内環境整備", type: "space_organization" },
    { label: "安全管理", type: "bottleneck_solving" },
  ],
  事務: [
    { label: "データ入力", type: "info_structure" },
    { label: "書類作成", type: "info_structure" },
    { label: "書類整理", type: "info_structure" },
    { label: "ファイリング", type: "space_organization" },
    { label: "スケジュール管理", type: "process_efficiency" },
    { label: "電話対応", type: "team_alignment" },
    { label: "メール対応", type: "team_alignment" },
    { label: "資料整理", type: "info_structure" },
    { label: "情報共有", type: "team_alignment" },
    { label: "来客対応", type: "energy_elevation" },
  ],
  エンジニア: [
    { label: "要件定義", type: "strategy_design" },
    { label: "設計", type: "strategy_design" },
    { label: "コーディング", type: "idea_realization" },
    { label: "コードレビュー", type: "bottleneck_solving" },
    { label: "テスト", type: "bottleneck_solving" },
    { label: "デバッグ", type: "bottleneck_solving" },
    { label: "リリース", type: "process_efficiency" },
    { label: "運用保守", type: "process_efficiency" },
    { label: "環境構築", type: "process_efficiency" },
    { label: "技術調査", type: "essence_analysis" },
  ],
  デザイナー: [
    { label: "要件整理", type: "info_structure" },
    { label: "コンセプト設計", type: "unique_expression" },
    { label: "ワイヤーフレーム作成", type: "strategy_design" },
    { label: "UI設計", type: "visual_communication" },
    { label: "ビジュアル制作", type: "unique_expression" },
    { label: "素材制作", type: "idea_realization" },
    { label: "デザイン調整", type: "process_efficiency" },
    { label: "プロトタイプ作成", type: "idea_realization" },
    { label: "ユーザビリティ確認", type: "bottleneck_solving" },
    { label: "品質確認", type: "bottleneck_solving" },
  ],
  プロダクトマネージャー: [
    { label: "市場分析", type: "essence_analysis" },
    { label: "ユーザー調査", type: "essence_analysis" },
    { label: "課題定義", type: "bottleneck_solving" },
    { label: "プロダクト戦略立案", type: "strategy_design" },
    { label: "要件定義", type: "strategy_design" },
    { label: "優先順位付け", type: "process_efficiency" },
    { label: "ロードマップ作成", type: "intent_alignment" },
    { label: "開発調整", type: "team_alignment" },
    { label: "KPI管理", type: "info_structure" },
    { label: "成果分析", type: "bottleneck_solving" },
  ],
  データアナリスト: [
    { label: "データ収集", type: "process_efficiency" },
    { label: "データ整理", type: "info_structure" },
    { label: "データ加工", type: "process_efficiency" },
    { label: "統計分析", type: "essence_analysis" },
    { label: "データ可視化", type: "visual_communication" },
    { label: "ダッシュボード作成", type: "info_structure" },
    { label: "レポート作成", type: "complex_verbalization" },
    { label: "インサイト抽出", type: "essence_analysis" },
    { label: "改善提案", type: "intent_alignment" },
    { label: "データ管理", type: "process_efficiency" },
  ],
  カスタマーサポート: [
    { label: "問い合わせ対応", type: "team_alignment" },
    { label: "メール返信", type: "team_alignment" },
    { label: "電話対応", type: "team_alignment" },
    { label: "チャット対応", type: "team_alignment" },
    { label: "トラブル対応", type: "strategy_design" },
    { label: "問題調査", type: "bottleneck_solving" },
    { label: "エスカレーション", type: "intent_alignment" },
    { label: "顧客フォロー", type: "truth_extraction" },
    { label: "FAQ作成", type: "info_structure" },
    { label: "対応記録", type: "info_structure" },
  ],
  カスタマーサクセス: [
    { label: "利用状況分析", type: "essence_analysis" },
    { label: "顧客オンボーディング", type: "action_promotion" },
    { label: "利用促進", type: "action_promotion" },
    { label: "課題ヒアリング", type: "truth_extraction" },
    { label: "改善提案", type: "intent_alignment" },
    { label: "定例ミーティング", type: "team_alignment" },
    { label: "満足度管理", type: "process_efficiency" },
    { label: "資料作成", type: "info_structure" },
    { label: "AsIsTobeの明確化", type: "intent_alignment" },
    { label: "関係構築", type: "team_alignment" },
  ],
};

// ============================================================
// Step 3: 動作選択（19項目・+3点）
// ============================================================
export interface ActionOption {
  label: string;
  type: SelfFunctionType;
}

export const actions: ActionOption[] = [
  {
    label: "散らばった情報を整理し、わかりやすくまとめること",
    type: "info_structure",
  },
  {
    label: "乱雑なモノや空間を整え、使いやすくすること",
    type: "space_organization",
  },
  {
    label: "無駄な作業や手間を減らし、効率化すること",
    type: "process_efficiency",
  },
  {
    label: "問題の原因や詰まりを見つけ、解決すること",
    type: "bottleneck_solving",
  },
  { label: "目標達成までの道筋や勝ち筋を考えること", type: "strategy_design" },
  {
    label: "物事の背景や本質を深く調べ、理解すること",
    type: "essence_analysis",
  },
  {
    label: "頭の中のアイデアや理想を、具体的な形にすること",
    type: "idea_realization",
  },
  { label: "自分らしい感性や世界観を表現すること", type: "unique_expression" },
  {
    label: "難しい内容や曖昧な考えを、わかりやすい言葉にすること",
    type: "complex_verbalization",
  },
  {
    label: "図解・資料・デザインで、直感的に伝わる形にすること",
    type: "visual_communication",
  },
  {
    label: "相手の本音や悩みを引き出し、安心させること",
    type: "truth_extraction",
  },
  {
    label: "相手自身も気づいていない魅力や強みを見つけること",
    type: "strength_discovery",
  },
  { label: "相手に新しい視点や気づきを与えること", type: "new_perspective" },
  {
    label: "迷っている人の背中を押し、行動を促すこと",
    type: "action_promotion",
  },
  {
    label: "チームの認識をそろえ、同じ方向に向かわせること",
    type: "team_alignment",
  },
  {
    label: "場を明るくし、チームや人の熱量を高めること",
    type: "energy_elevation",
  },
  {
    label: "人の特性を見極め、最適な役割や配置を考えること",
    type: "right_placement",
  },
  { label: "関係者同士の意図やズレを調整すること", type: "intent_alignment" },
  { label: "人を驚かせたり、喜ばせたり、感動させること", type: "joy_creation" },
];

// ============================================================
// 自己機能タイプ結果データ
// ============================================================
export interface CaseItem {
  job: string;
  tool: string;
}

export interface TypeResult {
  name: string;
  description: string;
  cases: [CaseItem, CaseItem];
}

export const typeResults: Record<SelfFunctionType, TypeResult> = {
  info_structure: {
    name: "情報の整理・構造化",
    description: "散らばった情報を整理し構造化する",
    cases: [
      {
        job: "議事録作成・資料要約・マニュアル作成",
        tool: "Claude Code / ChatGPT / NotebookLM",
      },
      {
        job: "社内マニュアル・業務手順書作成",
        tool: "Claude Code / NotebookLM / ChatGPT",
      },
    ],
  },
  space_organization: {
    name: "空間・環境・モノの整頓",
    description: "乱雑なモノを物理的に整理し美しい空間をつくる",
    cases: [
      {
        job: "整理収納記事・店舗改善提案・インテリア提案",
        tool: "Claude Code / ChatGPT / Midjourney",
      },
      {
        job: "EC商品整理・カテゴリ設計・商品登録補助",
        tool: "Claude Code / ChatGPT / Make",
      },
    ],
  },
  process_efficiency: {
    name: "業務プロセスの効率化",
    description: "時間短縮や作業の効率化を図る",
    cases: [
      {
        job: "業務改善提案・自動化フロー構築",
        tool: "Claude Code / Make / ChatGPT",
      },
      {
        job: "Make構築・Dify構築・業務自動化案件",
        tool: "Claude Code / Make / Dify",
      },
    ],
  },
  bottleneck_solving: {
    name: "課題/ボトルネックの解消",
    description: "ボトルネックを特定し解決策を実行する",
    cases: [
      {
        job: "マーケティング分析・改善提案",
        tool: "Claude Code / ChatGPT / Perplexity",
      },
      {
        job: "顧客アンケート分析・レビュー分析",
        tool: "Claude Code / ChatGPT / NotebookLM",
      },
    ],
  },
  strategy_design: {
    name: "戦略の設計",
    description: "目標達成のために成功確率の高い道筋を組み立てる",
    cases: [
      {
        job: "集客戦略設計・SNS運用戦略",
        tool: "Claude Code / ChatGPT / Perplexity",
      },
      {
        job: "競合調査・市場調査レポート作成",
        tool: "Claude Code / Perplexity / ChatGPT",
      },
    ],
  },
  essence_analysis: {
    name: "本質の分析・探究",
    description:
      "一次情報やデータを集め、仮説検証を繰り返して事象の本質を解き明かす",
    cases: [
      {
        job: "リサーチ記事作成・業界調査",
        tool: "Claude Code / Perplexity / ChatGPT",
      },
      {
        job: "インタビュー分析・ユーザー調査",
        tool: "Claude Code / NotebookLM / ChatGPT",
      },
    ],
  },
  idea_realization: {
    name: "アイデアの具現化",
    description: "頭の中にあるイメージや理想を、現実の目に見える形に作り上げる",
    cases: [
      {
        job: "新規サービス企画・商品企画",
        tool: "Claude Code / ChatGPT / Manus",
      },
      {
        job: "LP制作・Webアプリ制作・プロトタイプ制作",
        tool: "Claude Code / Codex / ChatGPT",
      },
    ],
  },
  unique_expression: {
    name: "独自の世界観・感性の表現",
    description: "自分ならではの美意識や感性を用いて、独自の表現を生み出す",
    cases: [
      {
        job: "ロゴ・広告画像・SNS画像制作",
        tool: "Claude Code / Midjourney / ChatGPT",
      },
      {
        job: "ブランドコピー・コンセプト設計",
        tool: "Claude Code / ChatGPT / Gemini",
      },
    ],
  },
  complex_verbalization: {
    name: "複雑な内容の言語化",
    description:
      "難しい専門知識や、言葉にならない想いを、相手が理解しやすい言葉に言語化する",
    cases: [
      {
        job: "SEO記事作成・ブログ記事作成",
        tool: "Claude Code / ChatGPT / Perplexity",
      },
      {
        job: "営業資料・ホワイトペーパー作成",
        tool: "Claude Code / ChatGPT / NotebookLM",
      },
    ],
  },
  visual_communication: {
    name: "デザインで視覚化し伝達",
    description: "図解やデザインなどを用いて、直感的に伝わりやすい形を作る",
    cases: [
      { job: "図解作成・スライド作成", tool: "Claude Code / ChatGPT / Manus" },
      {
        job: "ショート動画・広告動画制作",
        tool: "Claude Code / Capcut / Kling AI",
      },
    ],
  },
  truth_extraction: {
    name: "本音を引き出し悩みを解消",
    description: "相手に安心感を与え、心の奥底にある本音や悩みを引き出す",
    cases: [
      {
        job: "インタビュー設計・アンケート設計",
        tool: "Claude Code / ChatGPT / NotebookLM",
      },
      {
        job: "カウンセリング系記事・相談コンテンツ作成",
        tool: "Claude Code / ChatGPT / Gemini",
      },
    ],
  },
  strength_discovery: {
    name: "魅力・強みの発見",
    description: "その人自身が気づいていない「魅力」「強み」を見つけ出す",
    cases: [
      {
        job: "自己PR作成・職務経歴書作成",
        tool: "Claude Code / ChatGPT / NotebookLM",
      },
      {
        job: "SNSプロフィール・個人ブランディング支援",
        tool: "Claude Code / ChatGPT / Manus",
      },
    ],
  },
  new_perspective: {
    name: "新しい視点・気づきを与える",
    description:
      "相手の既成概念を外し、新しい視点や選択肢を与えることで視野を広げる",
    cases: [
      {
        job: "SNS投稿作成・X投稿代行",
        tool: "Claude Code / ChatGPT / Perplexity",
      },
      {
        job: "セミナー資料・教育コンテンツ作成",
        tool: "Claude Code / ChatGPT / NotebookLM",
      },
    ],
  },
  action_promotion: {
    name: "行動促進させる",
    description:
      "立ち止まっている人の背中を押し、最初の一歩を踏み出させて前進させる",
    cases: [
      {
        job: "LINEステップ配信・メルマガ作成",
        tool: "Claude Code / ChatGPT / Manus",
      },
      {
        job: "タスク管理アプリ・進捗管理システム制作",
        tool: "Claude Code / Codex / Make",
      },
    ],
  },
  team_alignment: {
    name: "チームの共通認識の醸成",
    description: "チームの認識を揃え同じ方向を向かせる",
    cases: [
      {
        job: "会議議事録・プロジェクト資料作成",
        tool: "Claude Code / ChatGPT / NotebookLM",
      },
      {
        job: "社内ナレッジ整備・Notion構成設計",
        tool: "Claude Code / NotebookLM / ChatGPT",
      },
    ],
  },
  energy_elevation: {
    name: "場の熱量の向上",
    description: "場を盛り上げたりしてチームに活力を与える",
    cases: [
      {
        job: "イベント企画・ワークショップ設計",
        tool: "Claude Code / ChatGPT / Manus",
      },
      {
        job: "告知文・PR動画・SNS投稿制作",
        tool: "Claude Code / Capcut / Midjourney",
      },
    ],
  },
  right_placement: {
    name: "適材適所の配置",
    description: "人の特性を見極め、最も輝くポジションや組み合わせを見つける",
    cases: [
      {
        job: "採用支援・求人票作成",
        tool: "Claude Code / ChatGPT / Perplexity",
      },
      {
        job: "チーム編成・役割分担提案",
        tool: "Claude Code / ChatGPT / NotebookLM",
      },
    ],
  },
  intent_alignment: {
    name: "意図のすり合わせ・ズレの調整",
    description: "関係者間の意図や想いのズレをなくし、円滑に回るように調整する",
    cases: [
      {
        job: "ファシリテーション資料作成",
        tool: "Claude Code / ChatGPT / Manus",
      },
      {
        job: "クライアント要件整理・要件定義補助",
        tool: "Claude Code / ChatGPT / Codex",
      },
    ],
  },
  joy_creation: {
    name: "驚き・笑顔・感動を与える",
    description:
      "期待を超えるサプライズやエンターテインメントによって、ポジティブな感情を生み出す",
    cases: [
      {
        job: "広告画像・ビジュアル制作",
        tool: "Claude Code / Midjourney / ChatGPT",
      },
      {
        job: "ショート動画・AI動画・BGM制作",
        tool: "Claude Code / Kling AI / Capcut",
      },
    ],
  },
};
