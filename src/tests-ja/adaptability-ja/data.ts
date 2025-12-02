// 適応力診断
export const questions = [
  {
    id: 1,
    text: '急な予定変更があったとき、どう感じる？',
    options: [
      { text: 'かなりストレスを感じる', type: 'low' },
      { text: 'ちょっと戸惑うけど対応する', type: 'medium' },
      { text: '「まあいいか」と切り替えられる', type: 'high' },
      { text: 'むしろワクワクする', type: 'chameleon' },
    ],
  },
  {
    id: 2,
    text: '新しい環境（転職・転校など）に慣れるまでどのくらい？',
    options: [
      { text: '半年以上はかかる', type: 'low' },
      { text: '2〜3ヶ月くらい', type: 'medium' },
      { text: '1ヶ月くらいで馴染む', type: 'high' },
      { text: '数日あれば大丈夫', type: 'chameleon' },
    ],
  },
  {
    id: 3,
    text: '海外旅行で言葉が通じない国に行ったら？',
    options: [
      { text: '不安でツアーじゃないと無理', type: 'low' },
      { text: '翻訳アプリ頼りで何とか', type: 'medium' },
      { text: 'ジェスチャーで楽しめる', type: 'high' },
      { text: 'その状況を楽しめる冒険家', type: 'chameleon' },
    ],
  },
  {
    id: 4,
    text: '仕事のやり方が急に変わったら？',
    options: [
      { text: '「前のやり方が良かった」と不満', type: 'low' },
      { text: '慣れるまで時間がかかるけど従う', type: 'medium' },
      { text: '新しいやり方のメリットを探す', type: 'high' },
      { text: 'むしろ改善提案したくなる', type: 'chameleon' },
    ],
  },
  {
    id: 5,
    text: '初対面の人が多いパーティーに行くと？',
    options: [
      { text: '緊張して隅にいる', type: 'low' },
      { text: '知り合いの近くにいる', type: 'medium' },
      { text: '自分から話しかけられる', type: 'high' },
      { text: '主役みたいに楽しめる', type: 'chameleon' },
    ],
  },
  {
    id: 6,
    text: 'スマホの機種変更やPCの買い替え、どう思う？',
    options: [
      { text: '設定し直すのが面倒で嫌', type: 'low' },
      { text: '少し億劫だけど必要なら', type: 'medium' },
      { text: '新しい機能を試すのが楽しい', type: 'high' },
      { text: '最新機種は常にチェック、変化大好き', type: 'chameleon' },
    ],
  },
  {
    id: 7,
    text: 'いつも行くお店が閉店していたら？',
    options: [
      { text: 'ショックで他の店に行く気力なくす', type: 'low' },
      { text: '残念だけど別の店を探す', type: 'medium' },
      { text: 'これを機に新しい店を開拓', type: 'high' },
      { text: 'むしろ新しい出会いにワクワク', type: 'chameleon' },
    ],
  },
  {
    id: 8,
    text: '予定していたイベントが中止になったら？',
    options: [
      { text: 'かなり落ち込む、立ち直れない', type: 'low' },
      { text: '残念だけど家でゆっくりする', type: 'medium' },
      { text: 'すぐに別の予定を立てる', type: 'high' },
      { text: '「何しようかな」とむしろ楽しむ', type: 'chameleon' },
    ],
  },
  {
    id: 9,
    text: 'ルーティンを崩されることについて？',
    options: [
      { text: 'ルーティンが崩れるとペースが乱れる', type: 'low' },
      { text: 'できれば守りたいけど柔軟に', type: 'medium' },
      { text: 'ルーティンにこだわらない', type: 'high' },
      { text: 'ルーティン自体があまりない', type: 'chameleon' },
    ],
  },
  {
    id: 10,
    text: '「変化」という言葉を聞いてどう感じる？',
    options: [
      { text: '不安、できれば現状維持がいい', type: 'low' },
      { text: '必要なら受け入れる', type: 'medium' },
      { text: 'チャンスかもしれない', type: 'high' },
      { text: 'ワクワクする！大好き', type: 'chameleon' },
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
    title: '安定志向タイプ',
    emoji: '🏠',
    percentage: '適応力 30%',
    description: '安定した環境で最も力を発揮するタイプ。変化よりも継続を大切にし、慎重に物事を進めます。それは決して弱点ではなく、深く根を張る強さでもあります。',
    characteristics: ['安定志向', '慎重', '計画的', '継続力', '信頼性'],
    advice: '小さな変化から始めてみて。意外と楽しいかもしれません。',
  },
  medium: {
    type: 'medium',
    title: 'バランス適応タイプ',
    emoji: '🌿',
    percentage: '適応力 55%',
    description: '必要に応じて変化に対応できる柔軟性を持っています。急激な変化は苦手でも、段階的な変化には適応できます。安定と変化のバランスを大切にするタイプ。',
    characteristics: ['バランス感覚', '現実的', '段階的', '堅実', '柔軟'],
    advice: 'その柔軟性を大切に。無理に変わる必要はありません。',
  },
  high: {
    type: 'high',
    title: '柔軟適応タイプ',
    emoji: '🌊',
    percentage: '適応力 80%',
    description: '環境の変化を前向きに捉え、素早く適応できるタイプ。新しい状況を楽しめる余裕があり、どんな場所でも力を発揮できます。周りからは頼りにされる存在。',
    characteristics: ['柔軟', '前向き', 'ストレス耐性', 'オープンマインド', '楽観的'],
    advice: '素晴らしい適応力！でも、たまには立ち止まることも大切。',
  },
  chameleon: {
    type: 'chameleon',
    title: 'カメレオン型適応マスター',
    emoji: '🦎',
    percentage: '適応力 98%',
    description: 'どんな環境にも瞬時に適応できるカメレオンのような存在。変化を恐れるどころか、むしろ変化を求める冒険家。常に新しい刺激を求めています。',
    characteristics: ['変化を楽しむ', '冒険心', '順応性抜群', '好奇心旺盛', 'エネルギッシュ'],
    advice: '安定も時には必要。落ち着ける場所も持っておきましょう。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { low: 0, medium: 0, high: 0, chameleon: 0 };

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
