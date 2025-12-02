// ファッションセンス診断 (패션 센스 진단)
export const questions = [
  {
    id: 1,
    text: '服を選ぶ基準は？',
    options: [
      { text: 'トレンドを取り入れる', type: 'trendy' },
      { text: 'シンプルで長く使えるもの', type: 'classic' },
      { text: '他の人と被らない個性的なもの', type: 'unique' },
      { text: '着心地と機能性重視', type: 'comfort' },
    ],
  },
  {
    id: 2,
    text: 'クローゼットの中は？',
    options: [
      { text: '今季のトレンドアイテムが多い', type: 'trendy' },
      { text: 'ベーシックカラーが中心', type: 'classic' },
      { text: '古着やヴィンテージも混在', type: 'unique' },
      { text: '動きやすい服ばかり', type: 'comfort' },
    ],
  },
  {
    id: 3,
    text: 'ファッション情報の収集は？',
    options: [
      { text: 'SNSやファッション誌をチェック', type: 'trendy' },
      { text: 'たまにチェック、参考程度', type: 'classic' },
      { text: '自分のセンスを信じる', type: 'unique' },
      { text: 'あまり見ない', type: 'comfort' },
    ],
  },
  {
    id: 4,
    text: 'セールでの買い物は？',
    options: [
      { text: 'トレンドアイテムをお得にゲット', type: 'trendy' },
      { text: '定番アイテムを買い足す', type: 'classic' },
      { text: '掘り出し物を探す', type: 'unique' },
      { text: '必要なものがあれば', type: 'comfort' },
    ],
  },
  {
    id: 5,
    text: '休日のコーデは？',
    options: [
      { text: 'おしゃれして出かけたい', type: 'trendy' },
      { text: 'きれいめカジュアル', type: 'classic' },
      { text: '自分らしいスタイル', type: 'unique' },
      { text: '楽な格好が一番', type: 'comfort' },
    ],
  },
  {
    id: 6,
    text: 'アクセサリーについて',
    options: [
      { text: 'トレンドものを取り入れる', type: 'trendy' },
      { text: 'シンプルで上品なもの', type: 'classic' },
      { text: '個性的で目を引くもの', type: 'unique' },
      { text: 'あまりつけない', type: 'comfort' },
    ],
  },
  {
    id: 7,
    text: '新しい服を買う頻度は？',
    options: [
      { text: 'シーズンごとに更新', type: 'trendy' },
      { text: '必要な時に良いものを', type: 'classic' },
      { text: '出会いがあれば', type: 'unique' },
      { text: '滅多に買わない', type: 'comfort' },
    ],
  },
  {
    id: 8,
    text: '人からコーデを褒められたら？',
    options: [
      { text: '嬉しい！どこで買ったか聞かれる', type: 'trendy' },
      { text: '素直に嬉しい', type: 'classic' },
      { text: '「でしょ？」と得意げ', type: 'unique' },
      { text: '褒められる機会が少ない…', type: 'comfort' },
    ],
  },
  {
    id: 9,
    text: 'ファッションで大切にしていることは？',
    options: [
      { text: '今っぽさ、鮮度', type: 'trendy' },
      { text: '清潔感、品の良さ', type: 'classic' },
      { text: '自己表現、オリジナリティ', type: 'unique' },
      { text: '機能性、実用性', type: 'comfort' },
    ],
  },
  {
    id: 10,
    text: '自分のファッションスタイルは？',
    options: [
      { text: 'トレンドを追いかけるのが好き', type: 'trendy' },
      { text: 'シンプルで飽きのこないスタイル', type: 'classic' },
      { text: '誰にも真似できない自分だけのスタイル', type: 'unique' },
      { text: '楽で動きやすいのが一番', type: 'comfort' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  percentage: string;
  description: string;
  characteristics: string[];
  advice: string;
}> = {
  trendy: {
    type: 'trendy',
    title: 'トレンドセッタータイプ',
    emoji: '✨',
    percentage: 'トレンド感度 95%',
    description: '流行に敏感でファッションが大好き！SNSやファッション誌を常にチェック、今季のトレンドは押さえてる。周りから「おしゃれ！」と言われることも多いはず。',
    characteristics: ['トレンド敏感', 'おしゃれ', '情報通', 'SNS映え', 'ショッピング好き'],
    advice: '素敵なファッションセンス！トレンドに加えて、自分らしさも大切にして。',
  },
  classic: {
    type: 'classic',
    title: 'タイムレスクラシックタイプ',
    emoji: '🎩',
    percentage: '上品度 90%',
    description: 'シンプルで飽きのこない、長く使える良いものを選ぶ目利き。流行に左右されず、自分に似合うものを知っている。清潔感と品の良さで好印象。',
    characteristics: ['シンプル', '品がある', '長く使う', 'ベーシック', '質重視'],
    advice: '素敵なセンス！たまにはトレンドを取り入れると、新鮮さが出ますよ。',
  },
  unique: {
    type: 'unique',
    title: 'オリジナルスタイリストタイプ',
    emoji: '🎨',
    percentage: '個性度 100%',
    description: '他の人と被らない、自分だけのスタイルを追求！古着やヴィンテージ、独自のミックスで個性を表現。ファッションは自己表現の手段。',
    characteristics: ['個性的', '自己表現', '独創的', 'ヴィンテージ好き', 'こだわり強い'],
    advice: 'その個性は最高の武器！自信を持ってスタイルを貫いて。',
  },
  comfort: {
    type: 'comfort',
    title: 'リラックスコンフォートタイプ',
    emoji: '👟',
    percentage: '快適度 98%',
    description: '見た目より着心地と機能性重視！動きやすく、楽な服が一番。ファッションにあまり興味がないわけじゃないけど、窮屈なのは苦手。',
    characteristics: ['機能性重視', '楽ちん', '実用的', 'ストレスフリー', 'シンプル'],
    advice: '快適さは大切！少しだけおしゃれを意識すると、気分も上がるかも。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { trendy: 0, classic: 0, unique: 0, comfort: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      scores[type]++;
    }
  });

  const resultType = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  return results[resultType];
}
