// コンフォートゾーン診断 - あなたの安心領域はどのレベル？
export const questions = [
  {
    id: 1,
    text: '知らない人が多いパーティーに誘われたら？',
    options: [
      { text: '絶対行かない、知り合いがいないと無理', type: 'narrow' },
      { text: '仲の良い友達が一緒なら行く', type: 'moderate' },
      { text: 'ちょっと緊張するけど行ってみる', type: 'flexible' },
      { text: 'むしろ新しい出会いにワクワク！', type: 'wide' },
    ],
  },
  {
    id: 2,
    text: '海外一人旅についてどう思う？',
    options: [
      { text: '考えられない、怖すぎる', type: 'narrow' },
      { text: 'ツアーなら行けるかも', type: 'moderate' },
      { text: '準備すれば挑戦してみたい', type: 'flexible' },
      { text: '最高！一人旅こそ醍醐味', type: 'wide' },
    ],
  },
  {
    id: 3,
    text: '新しいスキルや資格の勉強、どう感じる？',
    options: [
      { text: '今の仕事で精一杯、余裕がない', type: 'narrow' },
      { text: '必要に迫られたらやる', type: 'moderate' },
      { text: 'キャリアアップのためなら頑張る', type: 'flexible' },
      { text: '常に何か新しいことを学びたい', type: 'wide' },
    ],
  },
  {
    id: 4,
    text: '行ったことのないお店に一人で入れる？',
    options: [
      { text: '無理、誰かと一緒じゃないと', type: 'narrow' },
      { text: 'カフェくらいなら…', type: 'moderate' },
      { text: '居酒屋やラーメン屋なら一人でOK', type: 'flexible' },
      { text: 'どんなお店でも一人で入れる', type: 'wide' },
    ],
  },
  {
    id: 5,
    text: '転職や部署異動について',
    options: [
      { text: '今の環境から動きたくない', type: 'narrow' },
      { text: '条件が良ければ考える', type: 'moderate' },
      { text: '成長できるなら挑戦したい', type: 'flexible' },
      { text: '変化は歓迎、むしろ求めてる', type: 'wide' },
    ],
  },
  {
    id: 6,
    text: '初めての趣味やスポーツに挑戦するとき',
    options: [
      { text: '恥ずかしくて無理', type: 'narrow' },
      { text: '友達と一緒なら始められる', type: 'moderate' },
      { text: '体験教室から試してみる', type: 'flexible' },
      { text: 'すぐに飛び込む！', type: 'wide' },
    ],
  },
  {
    id: 7,
    text: '会議で自分の意見を言うとき',
    options: [
      { text: 'ほとんど発言しない', type: 'narrow' },
      { text: '求められたら言う', type: 'moderate' },
      { text: '準備してきた意見は言える', type: 'flexible' },
      { text: '積極的に発言する', type: 'wide' },
    ],
  },
  {
    id: 8,
    text: '急な予定変更があったとき',
    options: [
      { text: 'パニックになる', type: 'narrow' },
      { text: 'ストレスを感じるけど対応する', type: 'moderate' },
      { text: 'まあ仕方ないと思える', type: 'flexible' },
      { text: 'むしろ面白い展開かも', type: 'wide' },
    ],
  },
  {
    id: 9,
    text: '自分の弱みや失敗を人に話せる？',
    options: [
      { text: '絶対無理、隠したい', type: 'narrow' },
      { text: '親しい人にだけなら', type: 'moderate' },
      { text: '学びとして話すことはできる', type: 'flexible' },
      { text: 'オープンに話せる', type: 'wide' },
    ],
  },
  {
    id: 10,
    text: '「コンフォートゾーンを出る」ことについて',
    options: [
      { text: '安全な場所にいたい', type: 'narrow' },
      { text: '必要なときだけ出る', type: 'moderate' },
      { text: '成長のために意識している', type: 'flexible' },
      { text: '常に新しい挑戦を求めている', type: 'wide' },
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
  narrow: {
    type: 'narrow',
    title: '安心基地重視タイプ',
    emoji: '🏠',
    percentage: 'コンフォートゾーン 狭め',
    description: '慣れた環境で力を発揮するタイプ。新しいことへの挑戦より、今ある環境を大切にします。日本人らしい慎重さと安定志向を持っています。',
    characteristics: ['慎重', '安定志向', '深い人間関係', '専門性', '堅実'],
    advice: '安心できる場所は大切。でも小さな挑戦から始めると、新しい自分に出会えるかも。',
  },
  moderate: {
    type: 'moderate',
    title: 'バランス重視タイプ',
    emoji: '⚖️',
    percentage: 'コンフォートゾーン 普通',
    description: '無理なく挑戦できる範囲を見極めるタイプ。安全圏と挑戦のバランスを取りながら、着実に成長していきます。日本の「中庸」の精神を体現！',
    characteristics: ['バランス感覚', '現実的', '計画的成長', '柔軟性', '協調性'],
    advice: 'バランス感覚は武器！たまにはその「ちょっと先」に踏み出してみると、新しい発見があるよ。',
  },
  flexible: {
    type: 'flexible',
    title: '挑戦志向タイプ',
    emoji: '🌱',
    percentage: 'コンフォートゾーン 広め',
    description: '成長のために新しいことに挑戦できるタイプ。緊張はあるけど、それを乗り越える価値を知っています。変化の時代にぴったりの適応力！',
    characteristics: ['成長志向', 'チャレンジ精神', '適応力', '自己啓発', '前向き'],
    advice: 'その挑戦心は素晴らしい！でも時には「今のままでもいい」と自分を認めることも大切だよ。',
  },
  wide: {
    type: 'wide',
    title: '冒険家タイプ',
    emoji: '🚀',
    percentage: 'コンフォートゾーン 超広い',
    description: '未知の領域にどんどん踏み込める最強タイプ！新しい環境や挑戦が大好きで、変化を恐れません。グローバルに活躍できるポテンシャル大！',
    characteristics: ['冒険心', '大胆', '好奇心旺盛', '自信', 'グローバル思考'],
    advice: '冒険心は最高の武器！でも時には立ち止まって、今ある幸せを味わうことも忘れずに。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { narrow: 0, moderate: 0, flexible: 0, wide: 0 };

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
