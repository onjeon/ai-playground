// ニュース消費タイプ診断
export const questions = [
  {
    id: 1,
    text: 'ニュースをチェックする頻度は？',
    options: [
      { text: '毎日複数回', type: 'intensive' },
      { text: '毎日1回程度', type: 'regular' },
      { text: '週に数回', type: 'casual' },
      { text: 'ほとんど見ない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '主なニュース源は？',
    options: [
      { text: '複数のメディアを比較', type: 'intensive' },
      { text: 'ニュースアプリやサイト', type: 'regular' },
      { text: 'SNSのタイムライン', type: 'casual' },
      { text: '人から聞く程度', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: 'ニュースを読む深さは？',
    options: [
      { text: '詳しく読み、関連記事も', type: 'intensive' },
      { text: '気になるものは読む', type: 'regular' },
      { text: '見出しだけ', type: 'casual' },
      { text: 'ほぼ読まない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: '国際ニュースへの関心は？',
    options: [
      { text: '非常に関心がある', type: 'intensive' },
      { text: 'ある程度関心がある', type: 'regular' },
      { text: 'あまり関心がない', type: 'casual' },
      { text: '関心がない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '経済ニュースは？',
    options: [
      { text: '毎日チェック', type: 'intensive' },
      { text: '時々見る', type: 'regular' },
      { text: 'あまり見ない', type: 'casual' },
      { text: '興味がない', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: 'ニュースについて議論することは？',
    options: [
      { text: 'よく議論する', type: 'intensive' },
      { text: '時々話題にする', type: 'regular' },
      { text: 'あまり話さない', type: 'casual' },
      { text: '話さない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: 'ニュースの信頼性をチェックする？',
    options: [
      { text: '複数ソースで確認する', type: 'intensive' },
      { text: '信頼できるメディアを選ぶ', type: 'regular' },
      { text: 'あまり考えない', type: 'casual' },
      { text: '考えたことがない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: 'ニュースの有料購読は？',
    options: [
      { text: '複数契約している', type: 'intensive' },
      { text: '1つは契約している', type: 'regular' },
      { text: '無料のみ', type: 'casual' },
      { text: 'ニュースを見ない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: '専門メディアの購読は？',
    options: [
      { text: '複数購読している', type: 'intensive' },
      { text: '興味ある分野は見る', type: 'regular' },
      { text: 'あまり見ない', type: 'casual' },
      { text: '見ない', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: 'ニュースを見る理由は？',
    options: [
      { text: '社会を理解するため', type: 'intensive' },
      { text: '情報を得るため', type: 'regular' },
      { text: '話題についていくため', type: 'casual' },
      { text: '特に理由はない', type: 'minimal' },
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
  intensive: {
    type: 'intensive',
    title: 'ニュースジャンキー',
    emoji: '📰',
    percentage: 'ニュース消費度 MAX',
    description: 'ニュースを深く広く追いかける情報通！複数のメディアを比較し、信頼性もチェック。社会の動きを誰よりも把握している。',
    characteristics: ['情報収集力', '批判的思考', '知識豊富', '社会意識が高い', '議論好き'],
    advice: '素晴らしい情報収集力！でも情報過多でストレスにならないようご注意を♪',
  },
  regular: {
    type: 'regular',
    title: '定期チェック派',
    emoji: '📱',
    percentage: 'ニュース消費度 70%',
    description: '毎日ニュースをチェックする習慣がある。主要なニュースは把握し、社会の動きについていける一般的な情報感度の持ち主。',
    characteristics: ['習慣的', 'バランス型', '基本的な情報収集', '社会性', '普通の関心'],
    advice: '良い習慣ですね！たまには深掘りして、背景まで調べてみると面白いですよ♪',
  },
  casual: {
    type: 'casual',
    title: 'カジュアルニュース派',
    emoji: '👀',
    percentage: 'ニュース消費度 40%',
    description: 'ニュースは見出し程度、SNSで流れてきたものを見る程度。詳しくは追わないけど、大きなニュースは知っているタイプ。',
    characteristics: ['カジュアル', '表面的', 'SNS依存', '効率重視', '深掘りしない'],
    advice: '興味あるニュースは元記事を読んでみると、理解が深まりますよ♪',
  },
  minimal: {
    type: 'minimal',
    title: 'ニュース無関心派',
    emoji: '😶',
    percentage: 'ニュース消費度 15%',
    description: 'ニュースにあまり関心がない状態。でも社会の動きを知ることは自分の生活にも関係している。少しずつ関心を持ってみては？',
    characteristics: ['無関心', '情報不足', '社会との距離', '変化の可能性', 'きっかけ待ち'],
    advice: '1日1つ、気になるニュースを読んでみることから始めてみませんか♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { intensive: 0, regular: 0, casual: 0, minimal: 0 };

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
