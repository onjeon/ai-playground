// 自発性度診断
export const questions = [
  {
    id: 1,
    text: '突然の誘いがあったら？',
    options: [
      { text: '即OK！行きたい', type: 'high' },
      { text: '予定がなければ行く', type: 'medium_high' },
      { text: 'ちょっと考える', type: 'medium_low' },
      { text: '事前に予定を立てたい', type: 'low' },
    ],
  },
  {
    id: 2,
    text: '旅行先での過ごし方は？',
    options: [
      { text: 'その場で決める', type: 'high' },
      { text: '大枠だけ決めて自由に', type: 'medium_high' },
      { text: '主要な予定は立てる', type: 'medium_low' },
      { text: '詳細に計画を立てる', type: 'low' },
    ],
  },
  {
    id: 3,
    text: '面白そうなイベントを見つけたら？',
    options: [
      { text: '即参加！', type: 'high' },
      { text: '予定が空いていれば', type: 'medium_high' },
      { text: '事前に調べてから', type: 'medium_low' },
      { text: '計画に入れてから', type: 'low' },
    ],
  },
  {
    id: 4,
    text: '買い物のスタイルは？',
    options: [
      { text: '衝動買いすることも', type: 'high' },
      { text: 'いいものがあれば買う', type: 'medium_high' },
      { text: 'ある程度考えてから', type: 'medium_low' },
      { text: '計画的に購入', type: 'low' },
    ],
  },
  {
    id: 5,
    text: '週末の予定は？',
    options: [
      { text: 'その日の気分で決める', type: 'high' },
      { text: 'ざっくりとは決めている', type: 'medium_high' },
      { text: '前もって決めておく', type: 'medium_low' },
      { text: '詳細に計画する', type: 'low' },
    ],
  },
  {
    id: 6,
    text: '新しいことを始める時は？',
    options: [
      { text: '思い立ったらすぐ行動', type: 'high' },
      { text: 'タイミングが合えば', type: 'medium_high' },
      { text: '少し準備してから', type: 'medium_low' },
      { text: 'しっかり準備してから', type: 'low' },
    ],
  },
  {
    id: 7,
    text: '食事の場所を決める時は？',
    options: [
      { text: '歩きながら決める', type: 'high' },
      { text: 'その時の気分で', type: 'medium_high' },
      { text: 'いくつか候補を考えておく', type: 'medium_low' },
      { text: '事前に予約する', type: 'low' },
    ],
  },
  {
    id: 8,
    text: 'アイデアが浮かんだら？',
    options: [
      { text: 'すぐに実行に移す', type: 'high' },
      { text: '早めに試してみる', type: 'medium_high' },
      { text: 'よく考えてから', type: 'medium_low' },
      { text: '計画を立ててから', type: 'low' },
    ],
  },
  {
    id: 9,
    text: '予定外のことが起きた時は？',
    options: [
      { text: '楽しい！どうなるかワクワク', type: 'high' },
      { text: '柔軟に対応できる', type: 'medium_high' },
      { text: '少し戸惑うけど対応', type: 'medium_low' },
      { text: '計画が崩れて困る', type: 'low' },
    ],
  },
  {
    id: 10,
    text: '自分の性格は？',
    options: [
      { text: '思いつきで行動する', type: 'high' },
      { text: '直感を大切にする', type: 'medium_high' },
      { text: 'バランス型', type: 'medium_low' },
      { text: '計画的に行動する', type: 'low' },
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
  high: {
    type: 'high',
    title: '超自発的タイプ',
    emoji: '⚡🎉',
    level: '自発性度：★★★★★',
    description: '思いついたら即行動！自発性が非常に高く、人生を自由に楽しむタイプです。予定外の展開もワクワクに変え、新しい経験を次々と積んでいきます。',
    characteristics: ['即行動', '自由な発想', '新しいもの好き', '柔軟性が高い'],
    tips: ['その自発性は大きな魅力', '重要なことは少し考えて', '勢いだけでなく継続も意識して'],
  },
  medium_high: {
    type: 'medium_high',
    title: '自発性高めタイプ',
    emoji: '🌟💨',
    level: '自発性度：★★★★☆',
    description: '自発的に行動できるタイプ。直感を大切にしながらも、ある程度の判断はできます。チャンスを掴む力と適度な慎重さを兼ね備えています。',
    characteristics: ['直感的', '行動力がある', 'チャンスを掴む', '柔軟'],
    tips: ['バランスの良い自発性', '直感を信じて', '時には計画も役立つ'],
  },
  medium_low: {
    type: 'medium_low',
    title: 'バランス型',
    emoji: '🎯⚖️',
    level: '自発性度：★★★☆☆',
    description: '自発性と計画性のバランスが取れたタイプ。状況に応じて即断することも、じっくり考えることもできます。堅実でありながら柔軟性もあります。',
    characteristics: ['バランスが良い', '状況対応型', '堅実', '適度な柔軟性'],
    tips: ['バランスは強み', 'もう少し自発的になっても大丈夫', '直感を信じる練習を'],
  },
  low: {
    type: 'low',
    title: '計画重視タイプ',
    emoji: '📋🔍',
    level: '自発性度：★★☆☆☆',
    description: '計画を立ててから行動するタイプ。慎重で失敗が少なく、着実に目標を達成できます。予測可能な環境で最高のパフォーマンスを発揮します。',
    characteristics: ['計画的', '慎重', '着実', '予測を重視'],
    tips: ['計画性は大きな強み', '小さなことから自発的に試して', '予定外も楽しめるように'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { high: 0, medium_high: 0, medium_low: 0, low: 0 };

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
