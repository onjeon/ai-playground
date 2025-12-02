// 完璧主義度診断 (완벽주의 정도 진단)
export const questions = [
  {
    id: 1,
    text: '仕事や課題の仕上がりについて',
    options: [
      { text: '100点じゃないと気が済まない', type: 'extreme' },
      { text: '高いクオリティを目指す', type: 'high' },
      { text: 'まあまあでOK、提出優先', type: 'moderate' },
      { text: '終わればいい', type: 'relaxed' },
    ],
  },
  {
    id: 2,
    text: '小さなミスをした時は？',
    options: [
      { text: 'しばらく落ち込む、自分を責める', type: 'extreme' },
      { text: '気になるけど、次に活かす', type: 'high' },
      { text: '「まあいいか」と切り替える', type: 'moderate' },
      { text: 'あまり気にしない', type: 'relaxed' },
    ],
  },
  {
    id: 3,
    text: '部屋の整理整頓について',
    options: [
      { text: '物の位置が決まっていて乱れるとストレス', type: 'extreme' },
      { text: 'きれいな方が落ち着く', type: 'high' },
      { text: 'たまに片付ければOK', type: 'moderate' },
      { text: '散らかっていても平気', type: 'relaxed' },
    ],
  },
  {
    id: 4,
    text: '計画を立てる時は？',
    options: [
      { text: '細部まで詳細に計画', type: 'extreme' },
      { text: 'ある程度は計画を立てる', type: 'high' },
      { text: 'ざっくりとした計画', type: 'moderate' },
      { text: '計画はあまり立てない', type: 'relaxed' },
    ],
  },
  {
    id: 5,
    text: '他人に任せた仕事について',
    options: [
      { text: '自分でやった方が早いと思う', type: 'extreme' },
      { text: 'チェックはする', type: 'high' },
      { text: '信頼して任せる', type: 'moderate' },
      { text: '全然気にならない', type: 'relaxed' },
    ],
  },
  {
    id: 6,
    text: '締め切りへの対応は？',
    options: [
      { text: '余裕を持って早めに完成させたい', type: 'extreme' },
      { text: '計画的に進める', type: 'high' },
      { text: 'ギリギリでも間に合えばOK', type: 'moderate' },
      { text: '締め切りを忘れることも…', type: 'relaxed' },
    ],
  },
  {
    id: 7,
    text: '人からの評価について',
    options: [
      { text: 'とても気になる、批判が辛い', type: 'extreme' },
      { text: 'ある程度は気になる', type: 'high' },
      { text: '参考程度に聞く', type: 'moderate' },
      { text: 'あまり気にしない', type: 'relaxed' },
    ],
  },
  {
    id: 8,
    text: '新しいことを始める前は？',
    options: [
      { text: '完璧に準備してからでないと不安', type: 'extreme' },
      { text: 'ある程度準備してから', type: 'high' },
      { text: 'とりあえずやってみる', type: 'moderate' },
      { text: '思い立ったら即行動', type: 'relaxed' },
    ],
  },
  {
    id: 9,
    text: '「80点でいい」と言われたら？',
    options: [
      { text: '無理、100点を目指してしまう', type: 'extreme' },
      { text: '90点くらいは取りたい', type: 'high' },
      { text: '80点で十分、効率的', type: 'moderate' },
      { text: '60点でも問題ない', type: 'relaxed' },
    ],
  },
  {
    id: 10,
    text: '自分の完璧主義度は？',
    options: [
      { text: '自他ともに認める完璧主義者', type: 'extreme' },
      { text: '割と高い方だと思う', type: 'high' },
      { text: '普通、状況による', type: 'moderate' },
      { text: '全然完璧主義じゃない', type: 'relaxed' },
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
  extreme: {
    type: 'extreme',
    title: '究極の完璧主義者タイプ',
    emoji: '💎',
    percentage: '完璧主義度 100%',
    description: '100点以外は認められない究極の完璧主義者。仕事の質は高いけれど、自分を追い詰めがち。「完璧でなければ」というプレッシャーと常に戦っています。',
    characteristics: ['高い基準', '細部にこだわる', '自己批判的', '高品質', 'ストレス抱えがち'],
    advice: '80点でも十分素晴らしい！完璧より「十分良い」を目指すと心が楽になりますよ。',
  },
  high: {
    type: 'high',
    title: 'ハイスタンダードタイプ',
    emoji: '⭐',
    percentage: '完璧主義度 75%',
    description: '高い基準を持ちながらも、ある程度の妥協点は見つけられる健全なタイプ。質の高い成果を出しつつ、自分を追い詰めすぎない絶妙なバランス。',
    characteristics: ['高い基準', '質重視', '計画的', 'バランス取れる', '成果を出す'],
    advice: '理想的なバランス！そのスタンダードを維持しながら、時には休息も大切に。',
  },
  moderate: {
    type: 'moderate',
    title: 'フレキシブルタイプ',
    emoji: '🌿',
    percentage: '完璧主義度 40%',
    description: '状況に応じて柔軟に対応できるタイプ。「完璧」より「効率」や「完了」を重視。ストレスが少なく、サクサクと物事を進められる要領の良さ。',
    characteristics: ['柔軟', '効率重視', '割り切り上手', 'ストレス少ない', '現実的'],
    advice: '素晴らしい柔軟性！ただ、ここぞという時はこだわりを見せると印象アップ。',
  },
  relaxed: {
    type: 'relaxed',
    title: 'おおらかリラックスタイプ',
    emoji: '😌',
    percentage: '完璧主義度 10%',
    description: '細かいことは気にしないおおらかタイプ。完璧主義とは無縁で、ストレスフリーな毎日。「まあいいか」精神で、人生を楽しんでいます。',
    characteristics: ['おおらか', 'ストレスフリー', '楽観的', 'こだわらない', 'マイペース'],
    advice: 'そのリラックス感は素敵！でも、大事な場面では少しだけ気合いを入れて。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { extreme: 0, high: 0, moderate: 0, relaxed: 0 };

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
