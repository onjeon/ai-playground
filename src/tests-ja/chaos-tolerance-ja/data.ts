// カオス耐性診断 - 混乱にどれだけ強い？
export const questions = [
  {
    id: 1,
    text: '予定が急にキャンセルになったら？',
    options: [
      { text: '最悪…何で？イライラする', type: 'fragile' },
      { text: 'ちょっとモヤモヤするけど仕方ない', type: 'sensitive' },
      { text: '空いた時間で何しようかな', type: 'flexible' },
      { text: 'ラッキー！自由時間ゲット', type: 'chaotic' },
    ],
  },
  {
    id: 2,
    text: 'デスクの状態は？',
    options: [
      { text: '完璧に整理整頓されている', type: 'fragile' },
      { text: '基本的には整頓、たまに散らかる', type: 'sensitive' },
      { text: '必要なものは見つかる程度', type: 'flexible' },
      { text: 'カオスだけど自分はわかる', type: 'chaotic' },
    ],
  },
  {
    id: 3,
    text: '旅行の計画、どうする？',
    options: [
      { text: '分単位でスケジュールを組む', type: 'fragile' },
      { text: '大まかな予定は決めておく', type: 'sensitive' },
      { text: 'ホテルだけ決めて、あとは現地で', type: 'flexible' },
      { text: 'ノープラン！行き当たりばったり', type: 'chaotic' },
    ],
  },
  {
    id: 4,
    text: '会議中に議題が脱線したら？',
    options: [
      { text: '「本題に戻りましょう」と言う', type: 'fragile' },
      { text: '内心モヤモヤしながら様子を見る', type: 'sensitive' },
      { text: '面白い話ならついていく', type: 'flexible' },
      { text: '自分も脱線に参加する', type: 'chaotic' },
    ],
  },
  {
    id: 5,
    text: '料理中にレシピにない材料しかなかったら？',
    options: [
      { text: '買いに行く、レシピ通りに作りたい', type: 'fragile' },
      { text: '別の料理に変更する', type: 'sensitive' },
      { text: 'あるもので代用してみる', type: 'flexible' },
      { text: '創作料理の誕生だ！', type: 'chaotic' },
    ],
  },
  {
    id: 6,
    text: 'プロジェクトの仕様が何度も変わったら？',
    options: [
      { text: 'ストレスで爆発しそう', type: 'fragile' },
      { text: 'ため息をつきながらも対応', type: 'sensitive' },
      { text: '「よくあること」と割り切る', type: 'flexible' },
      { text: '変化に合わせて進化する楽しさ', type: 'chaotic' },
    ],
  },
  {
    id: 7,
    text: '満員電車で予定通りに着けなそうなとき',
    options: [
      { text: 'パニック！どうしよう', type: 'fragile' },
      { text: '連絡して謝りながら焦る', type: 'sensitive' },
      { text: '連絡して、できることをする', type: 'flexible' },
      { text: '仕方ない、人生こういうこともある', type: 'chaotic' },
    ],
  },
  {
    id: 8,
    text: 'グループ作業で役割分担が曖昧なとき',
    options: [
      { text: '耐えられない、すぐ整理したい', type: 'fragile' },
      { text: '不安だけど様子を見る', type: 'sensitive' },
      { text: 'なんとかなるでしょ', type: 'flexible' },
      { text: 'むしろ自由に動けていい', type: 'chaotic' },
    ],
  },
  {
    id: 9,
    text: '朝起きたらスマホの充電を忘れていた！',
    options: [
      { text: '一日のスタートが最悪', type: 'fragile' },
      { text: '焦るけど、モバイルバッテリーで対応', type: 'sensitive' },
      { text: '必要最低限の連絡だけすればいいや', type: 'flexible' },
      { text: 'スマホなし生活も悪くない', type: 'chaotic' },
    ],
  },
  {
    id: 10,
    text: '人生を一言で表すと？',
    options: [
      { text: '計画と実行', type: 'fragile' },
      { text: 'バランスが大事', type: 'sensitive' },
      { text: '臨機応変', type: 'flexible' },
      { text: '混沌こそ楽しい', type: 'chaotic' },
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
  fragile: {
    type: 'fragile',
    title: '秩序の守護者タイプ',
    emoji: '📋',
    percentage: 'カオス耐性 20%',
    description: '予定通りに物事が進むことで安心するタイプ。計画力と管理能力は抜群ですが、予想外の出来事には大きなストレスを感じます。日本のビジネスシーンでは重宝される存在。',
    characteristics: ['計画的', '几帳面', '責任感が強い', '完璧主義', '管理能力'],
    advice: '計画は大事。でも「想定外を想定内にする」心の余白を持つと、もっと楽になれるよ。',
  },
  sensitive: {
    type: 'sensitive',
    title: 'バランス調整タイプ',
    emoji: '⚖️',
    percentage: 'カオス耐性 45%',
    description: 'カオスには弱いけど、なんとか対応できるタイプ。ストレスを感じつつも、現実的に対処していく力があります。感情と理性のバランスを取りながら進みます。',
    characteristics: ['適応力', '常識的', '協調性', '現実的', '努力家'],
    advice: 'カオスに慣れなくても大丈夫。あなたのバランス感覚がチームを安定させています。',
  },
  flexible: {
    type: 'flexible',
    title: '柔軟対応タイプ',
    emoji: '🌊',
    percentage: 'カオス耐性 75%',
    description: '「なんとかなる」精神の持ち主！変化を受け入れ、状況に合わせて動ける柔軟性があります。ストレス耐性が高く、トラブルにも冷静に対処できます。',
    characteristics: ['柔軟性', 'ストレス耐性', '楽観的', '問題解決力', '器が大きい'],
    advice: 'その柔軟性は武器！でもたまには「ここは譲らない」という軸を持つことも大切。',
  },
  chaotic: {
    type: 'chaotic',
    title: '混沌のマエストロタイプ',
    emoji: '🌪️',
    percentage: 'カオス耐性 95%',
    description: 'カオスすら楽しめる最強タイプ！むしろ予定調和より予想外を好みます。創造性と適応力がずば抜けていて、混乱の中から新しい価値を生み出せる人。',
    characteristics: ['創造性', '冒険心', '即興力', 'エネルギッシュ', '自由人'],
    advice: 'カオスは得意でも、周りには秩序を求める人も。たまには周囲に合わせてあげてね。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { fragile: 0, sensitive: 0, flexible: 0, chaotic: 0 };

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
