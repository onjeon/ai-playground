// ルーティン好き度診断
export const questions = [
  {
    id: 1,
    text: '毎日のスケジュールは？',
    options: [
      { text: '決まったルーティンがある', type: 'routine_lover' },
      { text: 'ある程度パターン化', type: 'moderate' },
      { text: '日によって違う', type: 'flexible' },
      { text: '全く決まっていない', type: 'spontaneous' },
    ],
  },
  {
    id: 2,
    text: '朝のルーティンは？',
    options: [
      { text: '毎日同じ順番で進める', type: 'routine_lover' },
      { text: 'だいたい決まっている', type: 'moderate' },
      { text: 'その日の気分で', type: 'flexible' },
      { text: '特にない', type: 'spontaneous' },
    ],
  },
  {
    id: 3,
    text: '同じレストランに通うことは？',
    options: [
      { text: 'お気に入りの店に通う', type: 'routine_lover' },
      { text: '好きな店はリピート', type: 'moderate' },
      { text: '色々な店を試したい', type: 'flexible' },
      { text: '常に新しい店を開拓', type: 'spontaneous' },
    ],
  },
  {
    id: 4,
    text: 'ルーティンが崩れた時は？',
    options: [
      { text: '落ち着かない', type: 'routine_lover' },
      { text: '少し気になる', type: 'moderate' },
      { text: '特に問題ない', type: 'flexible' },
      { text: 'むしろ楽しい', type: 'spontaneous' },
    ],
  },
  {
    id: 5,
    text: '休日の過ごし方は？',
    options: [
      { text: 'いつもの過ごし方がある', type: 'routine_lover' },
      { text: 'だいたいパターンがある', type: 'moderate' },
      { text: 'その時やりたいことを', type: 'flexible' },
      { text: '毎週違うことをする', type: 'spontaneous' },
    ],
  },
  {
    id: 6,
    text: '仕事の進め方は？',
    options: [
      { text: '決まった手順で進める', type: 'routine_lover' },
      { text: 'ある程度パターン化', type: 'moderate' },
      { text: '状況に応じて変える', type: 'flexible' },
      { text: '毎回違うアプローチ', type: 'spontaneous' },
    ],
  },
  {
    id: 7,
    text: '運動やエクササイズは？',
    options: [
      { text: '決まった時間に同じ運動', type: 'routine_lover' },
      { text: 'ある程度定期的に', type: 'moderate' },
      { text: '気が向いた時に', type: 'flexible' },
      { text: '色々なことを試す', type: 'spontaneous' },
    ],
  },
  {
    id: 8,
    text: '就寝時間は？',
    options: [
      { text: '毎日同じ時間', type: 'routine_lover' },
      { text: 'だいたい同じ', type: 'moderate' },
      { text: '日によってバラバラ', type: 'flexible' },
      { text: '全く不規則', type: 'spontaneous' },
    ],
  },
  {
    id: 9,
    text: 'ルーティンについてどう思う？',
    options: [
      { text: '心の安定につながる', type: 'routine_lover' },
      { text: '効率的で良い', type: 'moderate' },
      { text: '退屈になりそう', type: 'flexible' },
      { text: '縛られたくない', type: 'spontaneous' },
    ],
  },
  {
    id: 10,
    text: '理想的な生活スタイルは？',
    options: [
      { text: '規則正しいルーティン生活', type: 'routine_lover' },
      { text: 'ある程度の規則性', type: 'moderate' },
      { text: '自由度の高い生活', type: 'flexible' },
      { text: '毎日が冒険', type: 'spontaneous' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  level: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  routine_lover: {
    type: 'routine_lover',
    title: 'ルーティン愛好家',
    emoji: '📅💕',
    level: 'ルーティン好き度：★★★★★',
    description: 'ルーティンを心から愛するタイプ！決まった習慣が心の安定をもたらし、効率的な毎日を送れます。継続力があり、目標達成能力が高い人です。',
    characteristics: ['規則正しい', '継続力がある', '安定志向', '効率的'],
    tips: ['ルーティンは大きな強み', 'たまには変化も取り入れて', '継続力を活かして目標達成を'],
  },
  moderate: {
    type: 'moderate',
    title: 'バランス型ルーティナー',
    emoji: '⚖️✨',
    level: 'ルーティン好き度：★★★★☆',
    description: '適度なルーティンを持ちつつ、柔軟性も兼ね備えたタイプ。基本的なパターンを持ちながら、変化にも対応できるバランスの良さがあります。',
    characteristics: ['バランスが良い', '柔軟性もある', '効率と変化の両立', '適応力がある'],
    tips: ['良いバランスを維持して', 'ルーティンと変化を楽しんで', '状況に応じて調整を'],
  },
  flexible: {
    type: 'flexible',
    title: '柔軟スタイル派',
    emoji: '🌊🎯',
    level: 'ルーティン好き度：★★★☆☆',
    description: '固定のルーティンより、状況に応じた柔軟な対応を好むタイプ。縛られず、その時々で最適な行動を選択できます。変化に強い適応力の持ち主。',
    characteristics: ['柔軟性が高い', '状況対応型', '変化に強い', '自由を好む'],
    tips: ['柔軟さは強み', 'いくつかの習慣を持つと安定感も', '自分のペースを大切に'],
  },
  spontaneous: {
    type: 'spontaneous',
    title: '自由気まま派',
    emoji: '🦋🌟',
    level: 'ルーティン好き度：★★☆☆☆',
    description: 'ルーティンに縛られず、自由に生きるタイプ！毎日を新鮮に過ごし、型にはまらない生き方を楽しみます。創造性が豊かで、新しい発見が多い人生。',
    characteristics: ['自由を愛する', '創造的', '縛られない', '新鮮さを求める'],
    tips: ['自由さは素晴らしい個性', '一つだけルーティンを作ってみて', '健康管理は意識して'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { routine_lover: 0, moderate: 0, flexible: 0, spontaneous: 0 };

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
