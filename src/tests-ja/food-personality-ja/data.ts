// 食事性格診断 (식사 성격 진단)
export const questions = [
  {
    id: 1,
    text: 'レストランでメニューを選ぶとき',
    options: [
      { text: '新しいメニューに挑戦したい', type: 'adventurous' },
      { text: 'いつもの定番を頼む', type: 'traditional' },
      { text: '栄養バランスを考えて選ぶ', type: 'health' },
      { text: '写真映えするものを選ぶ', type: 'social' },
    ],
  },
  {
    id: 2,
    text: '食事中のスマホは？',
    options: [
      { text: '料理に集中、スマホは見ない', type: 'adventurous' },
      { text: '特に気にしない', type: 'traditional' },
      { text: '食事の記録アプリを使う', type: 'health' },
      { text: '写真撮ってSNSにアップ', type: 'social' },
    ],
  },
  {
    id: 3,
    text: '外食の頻度は？',
    options: [
      { text: '新しいお店を開拓するのが趣味', type: 'adventurous' },
      { text: '行きつけの店が何軒かある', type: 'traditional' },
      { text: '自炊が多い、外食は控えめ', type: 'health' },
      { text: '話題のお店はチェック', type: 'social' },
    ],
  },
  {
    id: 4,
    text: '苦手な食べ物について',
    options: [
      { text: '食わず嫌いは克服したい', type: 'adventurous' },
      { text: '無理して食べない', type: 'traditional' },
      { text: '体に良ければ頑張って食べる', type: 'health' },
      { text: '話題になれば挑戦してみる', type: 'social' },
    ],
  },
  {
    id: 5,
    text: '料理を作るとき',
    options: [
      { text: '新しいレシピに挑戦', type: 'adventurous' },
      { text: '得意料理をローテーション', type: 'traditional' },
      { text: '栄養バランスを考えた献立', type: 'health' },
      { text: 'おしゃれな盛り付けにこだわる', type: 'social' },
    ],
  },
  {
    id: 6,
    text: '食事で大切にしていることは？',
    options: [
      { text: '新しい味との出会い', type: 'adventurous' },
      { text: '安心できる味、慣れ親しんだ味', type: 'traditional' },
      { text: '健康的であること', type: 'health' },
      { text: '誰かと一緒に楽しむこと', type: 'social' },
    ],
  },
  {
    id: 7,
    text: '海外旅行での食事は？',
    options: [
      { text: '現地の珍しい料理に挑戦！', type: 'adventurous' },
      { text: '日本食が恋しくなる', type: 'traditional' },
      { text: '衛生面と栄養を気にする', type: 'health' },
      { text: '有名店やフォトジェニックな店へ', type: 'social' },
    ],
  },
  {
    id: 8,
    text: '辛いものについて',
    options: [
      { text: '激辛にチャレンジするのが好き', type: 'adventurous' },
      { text: '程よい辛さが好き', type: 'traditional' },
      { text: '刺激物は体に悪そうで控える', type: 'health' },
      { text: '話題の激辛は試してみる', type: 'social' },
    ],
  },
  {
    id: 9,
    text: '食べ残しについて',
    options: [
      { text: '好奇心で頼みすぎることも', type: 'adventurous' },
      { text: '食べきれる量を頼む', type: 'traditional' },
      { text: '適量を心がける', type: 'health' },
      { text: '見た目重視で量は二の次', type: 'social' },
    ],
  },
  {
    id: 10,
    text: 'あなたの食事スタイルを一言で',
    options: [
      { text: '冒険家、新しい味を求めて', type: 'adventurous' },
      { text: '安定志向、慣れた味が一番', type: 'traditional' },
      { text: '健康第一、体に良いものを', type: 'health' },
      { text: '食事は楽しく、誰かと一緒に', type: 'social' },
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
  adventurous: {
    type: 'adventurous',
    title: '食の冒険家タイプ',
    emoji: '🌍',
    percentage: '冒険心 95%',
    description: '新しい味との出会いを求める食のエクスプローラー！未知の料理にもどんどん挑戦。食わず嫌いせず、世界中の料理を楽しみたいタイプ。',
    characteristics: ['好奇心旺盛', '挑戦的', 'オープンマインド', '食通', '経験重視'],
    advice: '素晴らしい冒険心！ただ、たまには慣れ親しんだ味でホッとするのも良いですよ。',
  },
  traditional: {
    type: 'traditional',
    title: '安定グルメタイプ',
    emoji: '🍜',
    percentage: '安定度 90%',
    description: '「いつもの」が一番落ち着くあなた。行きつけのお店、定番メニューに安心感。新しいものより、確実に美味しいとわかるものを選ぶ堅実派。',
    characteristics: ['安定志向', '確実性重視', 'こだわりがある', 'リピーター', '伝統好き'],
    advice: '安心感は大切！でもたまには新しいお店も開拓してみると発見があるかも。',
  },
  health: {
    type: 'health',
    title: '健康意識タイプ',
    emoji: '🥗',
    percentage: '健康意識 92%',
    description: '食事は体を作る大切なもの。栄養バランスを考え、体に良いものを選ぶ健康意識の高いあなた。自炊派で、添加物も気になるタイプ。',
    characteristics: ['健康志向', '栄養重視', '自炊派', '知識豊富', 'セルフケア上手'],
    advice: '素晴らしい健康意識！たまには栄養を気にせず、純粋に「美味しい」を楽しむのも大切。',
  },
  social: {
    type: 'social',
    title: 'フードソーシャルタイプ',
    emoji: '📸',
    percentage: 'SNS映え度 98%',
    description: '食事は見た目も大事！話題のお店やフォトジェニックな料理をチェック。食事を通じて人とつながることを楽しむソーシャル派。',
    characteristics: ['トレンド敏感', '写真好き', '社交的', '情報収集上手', '共有好き'],
    advice: '食事を楽しくシェアする姿勢は素敵！たまにはスマホを置いて、味に集中してみては？',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { adventurous: 0, traditional: 0, health: 0, social: 0 };

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
