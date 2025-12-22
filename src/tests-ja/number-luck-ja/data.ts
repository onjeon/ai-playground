// 数字運診断
export const questions = [
  {
    id: 1,
    text: '直感で選ぶなら、どの数字が好き？',
    options: [
      { text: '1、3、9などの奇数', type: 'odd' },
      { text: '2、4、8などの偶数', type: 'even' },
      { text: '7、77などのラッキーナンバー', type: 'lucky' },
      { text: '誕生日や記念日の数字', type: 'personal' },
    ],
  },
  {
    id: 2,
    text: 'くじを引く時、番号をどう選ぶ？',
    options: [
      { text: '直感でパッと選ぶ', type: 'odd' },
      { text: 'パターンや規則性で選ぶ', type: 'even' },
      { text: 'ラッキーナンバーを入れる', type: 'lucky' },
      { text: '自分に縁のある数字', type: 'personal' },
    ],
  },
  {
    id: 3,
    text: '電話番号や車のナンバーを選べるなら？',
    options: [
      { text: '語呂合わせで面白い数字', type: 'odd' },
      { text: '覚えやすいゾロ目や連番', type: 'even' },
      { text: '縁起の良い数字', type: 'lucky' },
      { text: '誕生日や記念日', type: 'personal' },
    ],
  },
  {
    id: 4,
    text: '「4」や「13」などの数字についてどう思う？',
    options: [
      { text: '気にしない、ただの数字', type: 'odd' },
      { text: '少し気になるが合理的に考える', type: 'even' },
      { text: '避けたい、縁起を大切に', type: 'lucky' },
      { text: '自分に関係なければ気にしない', type: 'personal' },
    ],
  },
  {
    id: 5,
    text: '数字にまつわるジンクスはある？',
    options: [
      { text: '特にない、偶然の一致', type: 'odd' },
      { text: '統計的に考えている', type: 'even' },
      { text: 'ラッキーナンバーを信じている', type: 'lucky' },
      { text: '自分だけの特別な数字がある', type: 'personal' },
    ],
  },
  {
    id: 6,
    text: 'ゾロ目の時計（11:11など）を見た時は？',
    options: [
      { text: '「お、偶然」くらい', type: 'odd' },
      { text: '確率的に考える', type: 'even' },
      { text: '嬉しい、良いことありそう', type: 'lucky' },
      { text: '自分の数字だと特別に感じる', type: 'personal' },
    ],
  },
  {
    id: 7,
    text: '重要な決断をする日取りを選ぶなら？',
    options: [
      { text: '特に日にちは気にしない', type: 'odd' },
      { text: 'スケジュール的に最適な日', type: 'even' },
      { text: '大安や縁起の良い日', type: 'lucky' },
      { text: '自分にとって意味のある日', type: 'personal' },
    ],
  },
  {
    id: 8,
    text: '数字の持つ意味や運勢について？',
    options: [
      { text: '根拠がないと思う', type: 'odd' },
      { text: '興味深いが参考程度', type: 'even' },
      { text: '信じている、活用している', type: 'lucky' },
      { text: '自分の数字だけは特別', type: 'personal' },
    ],
  },
  {
    id: 9,
    text: 'よく目にする数字はある？',
    options: [
      { text: '特に意識していない', type: 'odd' },
      { text: '偶然の積み重ねだと思う', type: 'even' },
      { text: 'ある、メッセージだと思う', type: 'lucky' },
      { text: '自分の数字をよく見る', type: 'personal' },
    ],
  },
  {
    id: 10,
    text: '数字で運を味方につけるなら？',
    options: [
      { text: '実力が全て、数字は関係ない', type: 'odd' },
      { text: 'データや分析で勝負', type: 'even' },
      { text: 'ラッキーナンバーを活用', type: 'lucky' },
      { text: '自分だけの数字を大切に', type: 'personal' },
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
  tips: string[];
}> = {
  odd: {
    type: 'odd',
    title: '直感型ナンバー',
    emoji: '⚡🔢',
    style: '数字運タイプ：直感型',
    description: 'あなたは数字を深く考えず、直感で付き合うタイプです。ジンクスや縁起をあまり気にせず、合理的に物事を判断します。その自由な感覚が意外な幸運を引き寄せることも。',
    characteristics: ['直感的', '自由な発想', '縛られない', '合理的'],
    tips: ['直感を信じて', 'たまには遊び心で数字選びを', '意外な数字が幸運かも'],
    },
  even: {
    type: 'even',
    title: '分析型ナンバー',
    emoji: '📊🔢',
    style: '数字運タイプ：分析型',
    description: 'あなたは数字を論理的・統計的に捉えるタイプです。パターンや確率を重視し、データに基づいた判断を好みます。その冷静さが堅実な幸運を呼び込みます。',
    characteristics: ['論理的', 'パターン重視', 'データ志向', '堅実'],
    tips: ['分析力は強み', '時には直感も試して', '数字の面白さを楽しんで'],
  },
  lucky: {
    type: 'lucky',
    title: '開運型ナンバー',
    emoji: '🍀🔢',
    style: '数字運タイプ：開運型',
    description: 'あなたは数字の持つ運や縁起を大切にするタイプです。7や8などのラッキーナンバーを信じ、良い数字を意識的に取り入れます。そのポジティブな姿勢が幸運を引き寄せます。',
    characteristics: ['縁起を重視', 'ポジティブ', '開運意識', '伝統を大切に'],
    tips: ['信じる心が幸運を呼ぶ', 'ラッキーナンバーを活用して', '良い数字に囲まれて'],
  },
  personal: {
    type: 'personal',
    title: 'パーソナル型ナンバー',
    emoji: '💖🔢',
    style: '数字運タイプ：パーソナル型',
    description: 'あなたは自分だけの特別な数字を大切にするタイプです。誕生日や記念日など、個人的な意味を持つ数字に愛着があります。その数字があなただけの幸運を運んでくれます。',
    characteristics: ['個人的な意味を重視', '感情的なつながり', '記念日を大切に', '自分だけの運'],
    tips: ['自分の数字を大切に', 'その数字が守ってくれる', '思い出の数字を活用して'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { odd: 0, even: 0, lucky: 0, personal: 0 };

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
