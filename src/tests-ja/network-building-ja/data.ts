// 人脈構築タイプ診断
export const questions = [
  {
    id: 1,
    text: '新しい人と知り合う場面での姿勢は？',
    options: [
      { text: '積極的に自分から話しかける', type: 'active' },
      { text: '共通の知人を介して紹介してもらう', type: 'strategic' },
      { text: '相手が話しかけてくれるのを待つ', type: 'passive' },
      { text: '深く付き合える人だけでいい', type: 'selective' },
    ],
  },
  {
    id: 2,
    text: '名刺交換やSNSでの繋がりについては？',
    options: [
      { text: 'どんどん繋がりを増やす', type: 'active' },
      { text: '仕事に役立ちそうな人と繋がる', type: 'strategic' },
      { text: '必要に迫られた時だけ', type: 'passive' },
      { text: '本当に親しい人だけ', type: 'selective' },
    ],
  },
  {
    id: 3,
    text: '異業種交流会への参加は？',
    options: [
      { text: '積極的に参加する', type: 'active' },
      { text: '目的があれば参加する', type: 'strategic' },
      { text: '誘われたら行くかも', type: 'passive' },
      { text: 'あまり興味がない', type: 'selective' },
    ],
  },
  {
    id: 4,
    text: '人脈を維持するための行動は？',
    options: [
      { text: '定期的に連絡や食事に誘う', type: 'active' },
      { text: '年賀状やお中元などで繋がりを保つ', type: 'strategic' },
      { text: '相手から連絡があれば対応', type: 'passive' },
      { text: '自然に続く関係を大切に', type: 'selective' },
    ],
  },
  {
    id: 5,
    text: '仕事で困った時、誰に相談する？',
    options: [
      { text: '幅広いネットワークから適任者を探す', type: 'active' },
      { text: '専門家や経験者を紹介してもらう', type: 'strategic' },
      { text: '身近な同僚や上司', type: 'passive' },
      { text: '信頼できる少数の人', type: 'selective' },
    ],
  },
  {
    id: 6,
    text: 'SNSでの情報発信は？',
    options: [
      { text: '積極的に発信して交流', type: 'active' },
      { text: '専門性をアピールする発信', type: 'strategic' },
      { text: '見る専門、あまり発信しない', type: 'passive' },
      { text: '限定した人にだけ公開', type: 'selective' },
    ],
  },
  {
    id: 7,
    text: '飲み会や懇親会での振る舞いは？',
    options: [
      { text: '色々な人と話して回る', type: 'active' },
      { text: 'キーパーソンに挨拶する', type: 'strategic' },
      { text: '近くの人と話す', type: 'passive' },
      { text: '気の合う人とじっくり話す', type: 'selective' },
    ],
  },
  {
    id: 8,
    text: '人脈についての考え方は？',
    options: [
      { text: '人脈は財産、多いほど良い', type: 'active' },
      { text: '質と量のバランスが大切', type: 'strategic' },
      { text: '自然にできるもの', type: 'passive' },
      { text: '少数精鋭で十分', type: 'selective' },
    ],
  },
  {
    id: 9,
    text: '紹介を頼まれた時の対応は？',
    options: [
      { text: '喜んで紹介する、繋ぐのが好き', type: 'active' },
      { text: '相性を考えて紹介する', type: 'strategic' },
      { text: '可能であれば紹介する', type: 'passive' },
      { text: '慎重に考えてから判断', type: 'selective' },
    ],
  },
  {
    id: 10,
    text: '理想の人間関係は？',
    options: [
      { text: '多くの人と広く繋がっている', type: 'active' },
      { text: '各分野にキーパーソンがいる', type: 'strategic' },
      { text: '自然体で心地よい関係', type: 'passive' },
      { text: '深く信頼できる少数の関係', type: 'selective' },
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
  active: {
    type: 'active',
    title: 'アクティブネットワーカー',
    emoji: '🌐🤝',
    style: '人脈構築タイプ：積極拡大型',
    description: 'あなたは積極的に人脈を広げていくタイプです。新しい出会いを楽しみ、多くの人と繋がることでチャンスを広げます。社交的で、どんな場でも馴染める適応力があります。',
    characteristics: ['社交的', '行動力がある', '顔が広い', 'コミュニケーション上手'],
    tips: ['広い人脈は大きな強み', '関係の深化も意識して', '一人一人を大切に'],
  },
  strategic: {
    type: 'strategic',
    title: '戦略的ネットワーカー',
    emoji: '🎯🤝',
    style: '人脈構築タイプ：戦略型',
    description: 'あなたは目的を持って人脈を構築するタイプです。質と量のバランスを考え、キーパーソンとの関係を大切にします。効率的に人脈を活かすビジネスセンスがあります。',
    characteristics: ['目的志向', '効率的', 'ビジネスセンス', '計画的'],
    tips: ['戦略的な姿勢は有効', '損得だけでない関係も', 'Give&Giveの精神で'],
  },
  passive: {
    type: 'passive',
    title: '自然体ネットワーカー',
    emoji: '🍀🤝',
    style: '人脈構築タイプ：自然型',
    description: 'あなたは無理に人脈を広げようとせず、自然な出会いを大切にするタイプです。縁を大切にし、心地よい関係を築きます。押しつけがましくない誠実さが魅力です。',
    characteristics: ['自然体', '誠実', '心地よさ重視', '無理をしない'],
    tips: ['自然な姿勢も魅力的', '時には一歩踏み出して', 'チャンスを逃さないで'],
  },
  selective: {
    type: 'selective',
    title: '選択的ネットワーカー',
    emoji: '💎🤝',
    style: '人脈構築タイプ：厳選型',
    description: 'あなたは深く信頼できる少数の人との関係を重視するタイプです。表面的な付き合いより、本当に分かり合える関係を求めます。一度築いた関係は長く続く傾向があります。',
    characteristics: ['深い関係を重視', '信頼を大切に', '質重視', '長期的な関係'],
    tips: ['深い関係は財産', '新しい出会いにも開いて', '信頼の輪を少しずつ広げて'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { active: 0, strategic: 0, passive: 0, selective: 0 };

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
