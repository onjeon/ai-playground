// 変化への態度診断
export const questions = [
  {
    id: 1,
    text: '職場や学校での大きな変化があったら？',
    options: [
      { text: 'ワクワクする！チャンス', type: 'embracer' },
      { text: '前向きに受け入れる', type: 'adapter' },
      { text: '不安だけど適応する', type: 'cautious' },
      { text: '変わってほしくない', type: 'resistant' },
    ],
  },
  {
    id: 2,
    text: '引っ越しについて',
    options: [
      { text: '新しい環境が楽しみ', type: 'embracer' },
      { text: '良い機会かもしれない', type: 'adapter' },
      { text: '慣れるまで大変そう', type: 'cautious' },
      { text: '今の場所が落ち着く', type: 'resistant' },
    ],
  },
  {
    id: 3,
    text: 'スマホのOSアップデートは？',
    options: [
      { text: 'すぐにアップデート', type: 'embracer' },
      { text: '少し様子を見てから', type: 'adapter' },
      { text: '必要になるまで保留', type: 'cautious' },
      { text: '変えたくない', type: 'resistant' },
    ],
  },
  {
    id: 4,
    text: '新しい仕事のやり方を提案されたら？',
    options: [
      { text: '試してみたい！', type: 'embracer' },
      { text: 'メリットがあれば取り入れる', type: 'adapter' },
      { text: '今のやり方に慣れている', type: 'cautious' },
      { text: '変える必要を感じない', type: 'resistant' },
    ],
  },
  {
    id: 5,
    text: '予定が急に変わったら？',
    options: [
      { text: '面白い展開！', type: 'embracer' },
      { text: '柔軟に対応する', type: 'adapter' },
      { text: 'ちょっと困るけど対応', type: 'cautious' },
      { text: '計画通りにしたい', type: 'resistant' },
    ],
  },
  {
    id: 6,
    text: 'お気に入りの店がなくなったら？',
    options: [
      { text: '新しい店を探す楽しみ', type: 'embracer' },
      { text: '残念だけど代わりを探す', type: 'adapter' },
      { text: 'かなりショック', type: 'cautious' },
      { text: 'しばらく立ち直れない', type: 'resistant' },
    ],
  },
  {
    id: 7,
    text: '人生の転機について',
    options: [
      { text: 'どんどん来てほしい', type: 'embracer' },
      { text: '成長のチャンスと捉える', type: 'adapter' },
      { text: '不安と期待が半々', type: 'cautious' },
      { text: 'できれば避けたい', type: 'resistant' },
    ],
  },
  {
    id: 8,
    text: '新しいテクノロジーや流行について',
    options: [
      { text: 'いち早く試したい', type: 'embracer' },
      { text: '良さそうなら取り入れる', type: 'adapter' },
      { text: '周りの様子を見てから', type: 'cautious' },
      { text: '必要性を感じない', type: 'resistant' },
    ],
  },
  {
    id: 9,
    text: '生活習慣を変えることは？',
    options: [
      { text: '改善のために積極的に変える', type: 'embracer' },
      { text: '必要なら変えられる', type: 'adapter' },
      { text: '難しいけど努力する', type: 'cautious' },
      { text: '今の習慣を維持したい', type: 'resistant' },
    ],
  },
  {
    id: 10,
    text: '「変化」という言葉を聞いて思うことは？',
    options: [
      { text: 'チャンス、成長', type: 'embracer' },
      { text: '自然なこと', type: 'adapter' },
      { text: '少し不安', type: 'cautious' },
      { text: '落ち着かない', type: 'resistant' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  attitude: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  embracer: {
    type: 'embracer',
    title: '変化大歓迎タイプ',
    emoji: '🌈🚀',
    attitude: '変化への態度：積極的',
    description: '変化を心から歓迎するタイプ！新しいことへの適応力が高く、変化をチャンスと捉えます。時代の流れに乗り、常に進化し続けられる強さがあります。',
    characteristics: ['変化を楽しむ', '適応力が高い', '新しいもの好き', 'チャレンジ精神'],
    tips: ['その適応力は大きな強み', '変化についていけない人にも配慮を', '安定も時には必要'],
  },
  adapter: {
    type: 'adapter',
    title: '柔軟適応タイプ',
    emoji: '🌿✨',
    attitude: '変化への態度：柔軟',
    description: '変化に柔軟に対応できるタイプ。メリットを見極めながら適応し、バランスよく変化を取り入れます。安定と変化の両方を上手に扱えます。',
    characteristics: ['柔軟性がある', 'バランス感覚', '合理的に判断', '適応力あり'],
    tips: ['バランスの良さを活かして', 'もう一歩踏み出すと新しい発見が', '変化を楽しむ余裕も'],
  },
  cautious: {
    type: 'cautious',
    title: '慎重適応タイプ',
    emoji: '🔍🌱',
    attitude: '変化への態度：慎重',
    description: '変化に対して慎重に対応するタイプ。不安を感じながらも、必要な変化には適応できます。準備をしっかりしてから行動するスタイル。',
    characteristics: ['慎重派', '準備を大切にする', '徐々に適応', '安全を確認'],
    tips: ['慎重さは強み', '小さな変化から慣れていって', '変化の良い面も見てみて'],
  },
  resistant: {
    type: 'resistant',
    title: '安定志向タイプ',
    emoji: '🏠💕',
    attitude: '変化への態度：保守的',
    description: '変化より安定を好むタイプ。慣れた環境や方法を大切にし、必要以上の変化は避けたい。その安定志向は、継続や伝統を守る力にもなります。',
    characteristics: ['安定を好む', '変化に抵抗感', '伝統を大切に', '継続力がある'],
    tips: ['安定志向も大切な価値観', '小さな変化から試してみて', '変化が必要な時は周りの力を借りて'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { embracer: 0, adapter: 0, cautious: 0, resistant: 0 };

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
