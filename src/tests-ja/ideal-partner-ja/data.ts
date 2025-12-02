// 理想のパートナー診断テスト (이상형 분석 테스트)
export const questions = [
  {
    id: 1,
    text: 'デートで一番大切にしたいことは？',
    options: [
      { text: '楽しい会話と笑い', type: 'humorous' },
      { text: '安心感とリラックスできる時間', type: 'stable' },
      { text: 'ドキドキするような刺激', type: 'passionate' },
      { text: '知的な会話や新しい発見', type: 'intellectual' },
    ],
  },
  {
    id: 2,
    text: 'パートナーに一番求める性格は？',
    options: [
      { text: '明るくてポジティブ', type: 'humorous' },
      { text: '優しくて思いやりがある', type: 'stable' },
      { text: '情熱的でアクティブ', type: 'passionate' },
      { text: '聡明で教養がある', type: 'intellectual' },
    ],
  },
  {
    id: 3,
    text: '理想の休日の過ごし方は？',
    options: [
      { text: '面白い映画やお笑いライブを観に行く', type: 'humorous' },
      { text: 'おうちでまったり料理を作る', type: 'stable' },
      { text: 'アウトドアや旅行に出かける', type: 'passionate' },
      { text: '美術館や読書カフェで過ごす', type: 'intellectual' },
    ],
  },
  {
    id: 4,
    text: 'ケンカした後、どうしてほしい？',
    options: [
      { text: 'ユーモアで雰囲気を和らげてほしい', type: 'humorous' },
      { text: '落ち着いて話し合いたい', type: 'stable' },
      { text: '素直に謝ってきてほしい', type: 'passionate' },
      { text: '冷静に原因を分析して解決したい', type: 'intellectual' },
    ],
  },
  {
    id: 5,
    text: 'サプライズについてどう思う？',
    options: [
      { text: '面白いサプライズが好き', type: 'humorous' },
      { text: '事前に知らせてほしい派', type: 'stable' },
      { text: 'ドキドキするサプライズ大歓迎', type: 'passionate' },
      { text: '意味のあるサプライズなら嬉しい', type: 'intellectual' },
    ],
  },
  {
    id: 6,
    text: '連絡の頻度はどのくらいがいい？',
    options: [
      { text: '楽しい時にたくさん連絡したい', type: 'humorous' },
      { text: '毎日少しずつで十分', type: 'stable' },
      { text: '会えない時はこまめに連絡したい', type: 'passionate' },
      { text: '必要な時だけでいい', type: 'intellectual' },
    ],
  },
  {
    id: 7,
    text: '結婚相手に重視することは？',
    options: [
      { text: '一緒にいて飽きない人', type: 'humorous' },
      { text: '経済的・精神的に安定している人', type: 'stable' },
      { text: 'いつまでもラブラブでいられる人', type: 'passionate' },
      { text: '価値観や考え方が合う人', type: 'intellectual' },
    ],
  },
  {
    id: 8,
    text: '相手の外見で気になるところは？',
    options: [
      { text: '笑顔が素敵かどうか', type: 'humorous' },
      { text: '清潔感があるかどうか', type: 'stable' },
      { text: 'スタイルやファッション', type: 'passionate' },
      { text: '知的な雰囲気があるかどうか', type: 'intellectual' },
    ],
  },
  {
    id: 9,
    text: '恋人との関係で一番大切なのは？',
    options: [
      { text: '楽しさと笑いのある日常', type: 'humorous' },
      { text: '信頼と安心感', type: 'stable' },
      { text: '情熱とロマンス', type: 'passionate' },
      { text: '互いの成長と刺激', type: 'intellectual' },
    ],
  },
  {
    id: 10,
    text: '恋に落ちる瞬間は？',
    options: [
      { text: '一緒に笑った時', type: 'humorous' },
      { text: 'そばにいると安心する時', type: 'stable' },
      { text: 'ドキッとする瞬間があった時', type: 'passionate' },
      { text: '深い話ができた時', type: 'intellectual' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  compatibility: string;
  description: string;
  characteristics: string[];
  idealPartnerTraits: string[];
  datingAdvice: string;
}> = {
  humorous: {
    type: 'humorous',
    title: 'ユーモア重視タイプ',
    emoji: '😄🎉',
    compatibility: '相性の良い相手：ムードメーカー',
    description: 'あなたは笑いと楽しさを大切にするタイプ。一緒にいて楽しい、笑顔が絶えないパートナーが理想です。',
    characteristics: ['楽しいことが好き', 'ポジティブ思考', 'コミュニケーション上手', '明るい雰囲気'],
    idealPartnerTraits: ['ユーモアセンスがある', '明るくて前向き', 'リアクションが良い', '笑わせてくれる'],
    datingAdvice: 'お笑いライブや楽しいイベントに一緒に行くと、相手との相性がわかりますよ！',
  },
  stable: {
    type: 'stable',
    title: '安定重視タイプ',
    emoji: '🏠💕',
    compatibility: '相性の良い相手：包容力のある人',
    description: 'あなたは安心感と穏やかな関係を求めるタイプ。信頼できて、一緒にいると落ち着けるパートナーが理想です。',
    characteristics: ['堅実で慎重', '思いやりがある', '長期的な視点', '落ち着いた性格'],
    idealPartnerTraits: ['誠実で信頼できる', '優しくて思いやりがある', '安定した生活力', '聞き上手'],
    datingAdvice: 'おうちデートや穏やかな時間を一緒に過ごすことで、相手の本質がわかります。',
  },
  passionate: {
    type: 'passionate',
    title: '情熱重視タイプ',
    emoji: '🔥💘',
    compatibility: '相性の良い相手：アクティブな人',
    description: 'あなたはドキドキと情熱を大切にするタイプ。刺激的で、いつまでもトキメキのある関係を求めています。',
    characteristics: ['情熱的', 'ロマンチスト', 'アクティブ', '恋愛体質'],
    idealPartnerTraits: ['積極的でリードしてくれる', 'サプライズが好き', 'アクティブで行動力がある', 'スキンシップが多い'],
    datingAdvice: 'アクティビティデートやサプライズを楽しめる相手を探してみてください！',
  },
  intellectual: {
    type: 'intellectual',
    title: '知性重視タイプ',
    emoji: '📚🧠',
    compatibility: '相性の良い相手：知的好奇心が旺盛な人',
    description: 'あなたは知的な会話と精神的な繋がりを大切にするタイプ。深い話ができ、互いに成長できるパートナーが理想です。',
    characteristics: ['知的好奇心旺盛', '深い会話が好き', '価値観を大切にする', '精神的な繋がり重視'],
    idealPartnerTraits: ['教養がある', '会話が面白い', '向上心がある', '考え方が合う'],
    datingAdvice: '美術館や読書会など、知的な刺激を共有できる場所がおすすめです。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { humorous: 0, stable: 0, passionate: 0, intellectual: 0 };

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
