// 紛争解決タイプ診断
export const questions = [
  {
    id: 1,
    text: '意見の対立が起きた時、最初にすることは？',
    options: [
      { text: '自分の意見をはっきり主張する', type: 'competitive' },
      { text: '相手の話をじっくり聞く', type: 'collaborative' },
      { text: '争いを避けて様子を見る', type: 'avoiding' },
      { text: '中間点を探る', type: 'compromising' },
    ],
  },
  {
    id: 2,
    text: 'チーム内で対立が起きた時は？',
    options: [
      { text: '正しいと思う方を支持する', type: 'competitive' },
      { text: '双方の意見を聞いて解決策を探る', type: 'collaborative' },
      { text: '巻き込まれないようにする', type: 'avoiding' },
      { text: 'お互いが少しずつ譲れるよう調整', type: 'compromising' },
    ],
  },
  {
    id: 3,
    text: '自分と相手の意見が真っ向から対立した時は？',
    options: [
      { text: '自分の意見を通すために説得する', type: 'competitive' },
      { text: '両方の意見を活かす第三の案を探す', type: 'collaborative' },
      { text: '今は話し合わない方がいいと判断', type: 'avoiding' },
      { text: 'お互いが譲れるポイントを見つける', type: 'compromising' },
    ],
  },
  {
    id: 4,
    text: '相手が感情的になっている時は？',
    options: [
      { text: '冷静に事実を突きつける', type: 'competitive' },
      { text: '相手の気持ちを受け止めてから話す', type: 'collaborative' },
      { text: '落ち着くまで距離を置く', type: 'avoiding' },
      { text: 'こちらも少し譲歩の姿勢を見せる', type: 'compromising' },
    ],
  },
  {
    id: 5,
    text: '解決に時間がかかりそうな対立では？',
    options: [
      { text: '早期決着を目指して押す', type: 'competitive' },
      { text: '時間をかけても根本解決を目指す', type: 'collaborative' },
      { text: '一旦棚上げにする', type: 'avoiding' },
      { text: '暫定的な合意点を探す', type: 'compromising' },
    ],
  },
  {
    id: 6,
    text: '対立の原因について？',
    options: [
      { text: '相手に問題があることが多い', type: 'competitive' },
      { text: '双方に原因があるはず', type: 'collaborative' },
      { text: '原因を追求しても仕方ない', type: 'avoiding' },
      { text: 'どちらが悪いかは重要ではない', type: 'compromising' },
    ],
  },
  {
    id: 7,
    text: '対立を解決した後の関係は？',
    options: [
      { text: '勝てば関係なし', type: 'competitive' },
      { text: '対立前より関係を深めたい', type: 'collaborative' },
      { text: '距離を置くことが多い', type: 'avoiding' },
      { text: '元の関係に戻れればOK', type: 'compromising' },
    ],
  },
  {
    id: 8,
    text: 'グループ内の対立を見ている時は？',
    options: [
      { text: 'どちらが正しいか判断する', type: 'competitive' },
      { text: '仲裁に入って解決を手伝う', type: 'collaborative' },
      { text: '関わらないようにする', type: 'avoiding' },
      { text: '落としどころを提案する', type: 'compromising' },
    ],
  },
  {
    id: 9,
    text: '対立を避けられないと感じた時は？',
    options: [
      { text: '全力で自分の立場を守る', type: 'competitive' },
      { text: '対話で乗り越えようとする', type: 'collaborative' },
      { text: 'できるだけダメージを減らす', type: 'avoiding' },
      { text: '早めに妥協点を探る', type: 'compromising' },
    ],
  },
  {
    id: 10,
    text: '理想的な対立解決とは？',
    options: [
      { text: '自分の意見が通ること', type: 'competitive' },
      { text: '双方が成長できる解決', type: 'collaborative' },
      { text: 'そもそも対立しないこと', type: 'avoiding' },
      { text: '双方が納得できる妥協点を見つけること', type: 'compromising' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  style: string;
  description: string;
  characteristics: string[];
  recommendation: string;
}> = {
  competitive: {
    type: 'competitive',
    title: '競争型解決者',
    emoji: '🏆',
    style: '紛争解決スタイル：競争型',
    description: '自分の立場を守り、勝利を目指すあなた！主張がはっきりしていて、信念を曲げません。リーダーシップを発揮する場面で強い！',
    characteristics: ['主張力', '決断力', '自信', 'リーダーシップ', '勝負強さ'],
    recommendation: '相手の立場も理解すると、より良い解決策が見つかるかも！',
  },
  collaborative: {
    type: 'collaborative',
    title: '協調型解決者',
    emoji: '🤝',
    style: '紛争解決スタイル：協調型',
    description: '対話を通じて双方が満足できる解決を目指すあなた！問題の根本に向き合い、関係を深める対立解決ができます。',
    characteristics: ['傾聴力', '創造性', '忍耐力', '関係構築', 'Win-Win志向'],
    recommendation: '時間が限られている時は、素早い判断も必要だよ！',
  },
  avoiding: {
    type: 'avoiding',
    title: '回避型解決者',
    emoji: '🕊️',
    style: '紛争解決スタイル：回避型',
    description: '対立を避けて平和を保つあなた！争いよりも調和を重んじ、時間が解決してくれることを知っています。',
    characteristics: ['平和主義', '忍耐', '冷静', 'ストレス回避', '穏やか'],
    recommendation: '時には意見を言うことで、より良い関係が築けるよ！',
  },
  compromising: {
    type: 'compromising',
    title: '妥協型解決者',
    emoji: '⚖️',
    style: '紛争解決スタイル：妥協型',
    description: 'バランスを取って中間点を見つけるあなた！効率的に解決策を導き、双方が受け入れられる結果を出します。',
    characteristics: ['バランス感覚', '効率性', '現実的', '柔軟性', '公平'],
    recommendation: '時には根本的な解決を目指すことで、より良い結果に！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { competitive: 0, collaborative: 0, avoiding: 0, compromising: 0 };

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
