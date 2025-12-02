// 失恋回復タイプ診断 (이별 회복 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '失恋直後、まず何をする？',
    options: [
      { text: '友達に電話して話を聞いてもらう', type: 'social' },
      { text: '一人で静かに泣く', type: 'introspective' },
      { text: 'すぐに新しい出会いを探す', type: 'active' },
      { text: '仕事や趣味に没頭する', type: 'distraction' },
    ],
  },
  {
    id: 2,
    text: '元恋人の写真やプレゼントは？',
    options: [
      { text: '友達と一緒に整理する', type: 'social' },
      { text: '時間をかけて一人で向き合う', type: 'introspective' },
      { text: 'すぐに捨てる・売る', type: 'active' },
      { text: '見えない場所にしまっておく', type: 'distraction' },
    ],
  },
  {
    id: 3,
    text: '失恋の辛さを和らげる方法は？',
    options: [
      { text: '人と話して気を紛らわす', type: 'social' },
      { text: '日記を書いて気持ちを整理', type: 'introspective' },
      { text: 'イメチェンや新しいことを始める', type: 'active' },
      { text: '映画やゲームで現実逃避', type: 'distraction' },
    ],
  },
  {
    id: 4,
    text: '元恋人のSNSを見てしまう？',
    options: [
      { text: '見てしまったら友達に報告', type: 'social' },
      { text: '見て、自分の気持ちを分析する', type: 'introspective' },
      { text: 'ブロック・ミュートして見ない', type: 'active' },
      { text: '見ないふりして別のことをする', type: 'distraction' },
    ],
  },
  {
    id: 5,
    text: '失恋後、恋愛映画を見ると？',
    options: [
      { text: '友達と一緒に見て感想を話す', type: 'social' },
      { text: '一人で見て、泣いてスッキリ', type: 'introspective' },
      { text: '恋愛映画は避ける', type: 'active' },
      { text: 'アクション映画に変更', type: 'distraction' },
    ],
  },
  {
    id: 6,
    text: '失恋から回復するのに必要なものは？',
    options: [
      { text: '友達や家族のサポート', type: 'social' },
      { text: '自分と向き合う時間', type: 'introspective' },
      { text: '新しい恋や挑戦', type: 'active' },
      { text: '時間と気晴らし', type: 'distraction' },
    ],
  },
  {
    id: 7,
    text: '失恋を乗り越えるコツは？',
    options: [
      { text: '辛い気持ちを誰かに話す', type: 'social' },
      { text: '原因を振り返り、学びを得る', type: 'introspective' },
      { text: '前を向いて行動する', type: 'active' },
      { text: '考えすぎないようにする', type: 'distraction' },
    ],
  },
  {
    id: 8,
    text: '失恋後の週末の過ごし方は？',
    options: [
      { text: '友達と出かける', type: 'social' },
      { text: '家で一人で過ごす', type: 'introspective' },
      { text: '新しい習い事を始める', type: 'active' },
      { text: '好きな動画を見て過ごす', type: 'distraction' },
    ],
  },
  {
    id: 9,
    text: '元恋人との思い出の場所は？',
    options: [
      { text: '新しい友達との思い出で上書き', type: 'social' },
      { text: 'あえて一人で訪れて区切りをつける', type: 'introspective' },
      { text: '行かないようにする', type: 'active' },
      { text: '特に気にせず普通に過ごす', type: 'distraction' },
    ],
  },
  {
    id: 10,
    text: '完全に立ち直ったと感じる瞬間は？',
    options: [
      { text: '友達に「元気になったね」と言われた時', type: 'social' },
      { text: '元恋人のことを冷静に振り返れた時', type: 'introspective' },
      { text: '新しい恋が始まった時', type: 'active' },
      { text: '気づいたら考えなくなっていた時', type: 'distraction' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  recoveryStyle: string[];
  strengths: string[];
  advice: string[];
}> = {
  social: {
    type: 'social',
    title: '人との繋がり回復型',
    emoji: '👥',
    description: 'あなたは人との繋がりで傷を癒すタイプ。友達や家族に話を聞いてもらうことで、気持ちを整理し前に進めます。一人で抱え込まず、周りの人の力を借りられるのが強み。',
    recoveryStyle: ['友達に話して発散', '人と過ごして気を紛らわす', 'サポートを受け入れられる'],
    strengths: ['孤立しない', '客観的な意見をもらえる', '早期に回復しやすい'],
    advice: ['頼りすぎて相手を疲れさせないように', '一人の時間も大切に', '自分の気持ちにも向き合おう'],
  },
  introspective: {
    type: 'introspective',
    title: '内省・自己分析型',
    emoji: '📝',
    description: 'あなたは自分と向き合うことで回復するタイプ。失恋の原因や自分の感情をじっくり分析し、学びを得て成長します。深い自己理解につながる回復プロセス。',
    recoveryStyle: ['日記や振り返りで整理', '感情を味わいきる', '原因分析をする'],
    strengths: ['自己成長につながる', '同じ失敗を繰り返さない', '深い気づきを得られる'],
    advice: ['考えすぎて落ち込みすぎないで', '時には気晴らしも必要', '完璧な答えを求めすぎないで'],
  },
  active: {
    type: 'active',
    title: 'アクティブ前進型',
    emoji: '🚀',
    description: 'あなたは行動することで回復するタイプ。イメチェン、新しい趣味、新しい出会いなど、積極的に動くことで過去を断ち切ります。前向きなエネルギーが強み。',
    recoveryStyle: ['すぐに行動を起こす', '新しいことを始める', '過去より未来を見る'],
    strengths: ['回復が早い', '成長の機会に変える', 'エネルギッシュ'],
    advice: ['感情を押し殺していないか確認', '焦って次の恋に進まないで', 'たまには立ち止まることも大切'],
  },
  distraction: {
    type: 'distraction',
    title: '気晴らし・時間解決型',
    emoji: '🎮',
    description: 'あなたは時間と気晴らしで回復するタイプ。無理に向き合わず、好きなことをして過ごすうちに自然と傷が癒えていきます。ストレスをためない回復法。',
    recoveryStyle: ['好きなことに没頭', '時間が解決すると信じる', '無理に考えない'],
    strengths: ['ストレスをためない', 'マイペースに回復', '日常生活を維持できる'],
    advice: ['逃避が長引かないように', 'いつか向き合う勇気も必要', '感情を押し込めすぎないで'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { social: 0, introspective: 0, active: 0, distraction: 0 };

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
