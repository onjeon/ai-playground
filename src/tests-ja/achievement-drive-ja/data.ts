// 達成欲診断 - 目標を追いかける力
export const questions = [
  {
    id: 1,
    text: '目標を達成したとき、どう感じる？',
    options: [
      { text: '「終わった」と安心する', type: 'low' },
      { text: '達成感を味わう', type: 'moderate' },
      { text: 'すぐ次の目標を考える', type: 'high' },
      { text: '「もっと上を」と燃える', type: 'extreme' },
    ],
  },
  {
    id: 2,
    text: '競争について',
    options: [
      { text: 'できれば避けたい', type: 'low' },
      { text: '必要なら参加する', type: 'moderate' },
      { text: '勝つと気持ちいい', type: 'high' },
      { text: '負けると眠れない', type: 'extreme' },
    ],
  },
  {
    id: 3,
    text: 'To-Doリストについて',
    options: [
      { text: 'あまり使わない', type: 'low' },
      { text: '一応作る程度', type: 'moderate' },
      { text: '消すのが快感', type: 'high' },
      { text: 'びっしり埋まってないと落ち着かない', type: 'extreme' },
    ],
  },
  {
    id: 4,
    text: '自分より優秀な人を見ると？',
    options: [
      { text: '「すごいな」で終わり', type: 'low' },
      { text: '少し刺激を受ける', type: 'moderate' },
      { text: '負けたくないと思う', type: 'high' },
      { text: '絶対追い抜きたい', type: 'extreme' },
    ],
  },
  {
    id: 5,
    text: '休日の過ごし方は？',
    options: [
      { text: 'ゆっくり何もしない', type: 'low' },
      { text: 'まあまあ充実させる', type: 'moderate' },
      { text: '予定を詰め込む', type: 'high' },
      { text: '休みでも目標に向けて行動', type: 'extreme' },
    ],
  },
  {
    id: 6,
    text: '評価されることについて',
    options: [
      { text: 'あまり気にしない', type: 'low' },
      { text: 'されると嬉しい', type: 'moderate' },
      { text: '正当に評価されたい', type: 'high' },
      { text: '一番じゃないと意味がない', type: 'extreme' },
    ],
  },
  {
    id: 7,
    text: '失敗したとき',
    options: [
      { text: '落ち込んで終わり', type: 'low' },
      { text: 'しばらく引きずる', type: 'moderate' },
      { text: '悔しくて次こそはと思う', type: 'high' },
      { text: '絶対に取り返してやる', type: 'extreme' },
    ],
  },
  {
    id: 8,
    text: 'ゲームで勝つことについて',
    options: [
      { text: '勝ち負けは気にしない', type: 'low' },
      { text: '勝てると嬉しい', type: 'moderate' },
      { text: '勝つためにかなり頑張る', type: 'high' },
      { text: '勝つまでやめられない', type: 'extreme' },
    ],
  },
  {
    id: 9,
    text: '他人の成功を聞いたとき',
    options: [
      { text: '「よかったね」と思う', type: 'low' },
      { text: '刺激になる', type: 'moderate' },
      { text: '「自分も」と火がつく', type: 'high' },
      { text: '「負けてられない」と焦る', type: 'extreme' },
    ],
  },
  {
    id: 10,
    text: '人生の成功とは？',
    options: [
      { text: '平和に暮らすこと', type: 'low' },
      { text: 'やりたいことができること', type: 'moderate' },
      { text: '目標を達成すること', type: 'high' },
      { text: '誰よりも上に立つこと', type: 'extreme' },
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
  low: {
    type: 'low',
    title: 'マイペース型',
    emoji: '🐢',
    percentage: '達成欲 20%',
    description: 'ゆったり自分のペースを大切にするタイプ。競争より調和を好み、焦らず着実に進みます。無理をしない生き方が心地よい。',
    characteristics: ['穏やか', 'マイペース', 'ストレスフリー', 'のんびり', '平和主義'],
    advice: 'そのマイペースさが魅力。無理に急ぐ必要はありません。',
  },
  moderate: {
    type: 'moderate',
    title: 'バランス型',
    emoji: '⚖️',
    percentage: '達成欲 50%',
    description: '適度な目標意識を持ちつつ、無理はしないタイプ。頑張るときは頑張り、休むときは休む。バランスの取れた生き方ができます。',
    characteristics: ['バランス', '柔軟', '現実的', '適度', '安定'],
    advice: 'バランス感覚が素晴らしい。今のペースを大切に。',
  },
  high: {
    type: 'high',
    title: '目標達成型',
    emoji: '🎯',
    percentage: '達成欲 80%',
    description: '目標に向かって突き進む力を持つタイプ。達成感を原動力に、次々と新しい挑戦をします。常に成長を求める向上心の塊。',
    characteristics: ['目標志向', '向上心', '行動力', '努力家', '成長志向'],
    advice: '素晴らしい達成欲！でも、たまには休むことも大切。',
  },
  extreme: {
    type: 'extreme',
    title: '野心家型',
    emoji: '🔥',
    percentage: '達成欲 98%',
    description: '常にトップを目指す野心家タイプ。「一番じゃなければ意味がない」という強い信念を持っています。その情熱は周りを圧倒するほど。',
    characteristics: ['野心家', '競争心', '不屈', '情熱的', 'トップ志向'],
    advice: 'その情熱は武器！でも、周りも巻き込んで一緒に成長しよう。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { low: 0, moderate: 0, high: 0, extreme: 0 };

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
