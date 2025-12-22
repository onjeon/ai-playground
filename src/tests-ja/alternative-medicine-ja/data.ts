// 代替医療への態度診断 - あなたの代替医療観は？
export const questions = [
  {
    id: 1,
    text: '体調が悪いとき、まず何をする？',
    options: [
      { text: 'まず病院に行く', type: 'conventional' },
      { text: '市販薬で様子を見る', type: 'balanced' },
      { text: '漢方や民間療法を試す', type: 'alternative' },
      { text: '自然治癒力を信じて待つ', type: 'natural' },
    ],
  },
  {
    id: 2,
    text: '漢方薬についてどう思う？',
    options: [
      { text: '科学的根拠が弱いので信用しない', type: 'conventional' },
      { text: '西洋医学と併用するのはあり', type: 'balanced' },
      { text: '体質改善に効果的だと思う', type: 'alternative' },
      { text: '自然由来なので安心できる', type: 'natural' },
    ],
  },
  {
    id: 3,
    text: '整体やマッサージについて',
    options: [
      { text: 'リラクゼーション程度の効果', type: 'conventional' },
      { text: '疲れたときに行くことがある', type: 'balanced' },
      { text: '定期的にメンテナンスしている', type: 'alternative' },
      { text: '体の歪みを整えることが大切', type: 'natural' },
    ],
  },
  {
    id: 4,
    text: '鍼灸治療についてどう思う？',
    options: [
      { text: '効果があるか疑問', type: 'conventional' },
      { text: '症状によっては試してみてもいい', type: 'balanced' },
      { text: 'ツボを刺激することで効果がある', type: 'alternative' },
      { text: '気の流れを整えるのに効果的', type: 'natural' },
    ],
  },
  {
    id: 5,
    text: 'サプリメントについて',
    options: [
      { text: '医師に勧められたものだけ', type: 'conventional' },
      { text: '不足しがちな栄養素を補う程度', type: 'balanced' },
      { text: '積極的に取り入れている', type: 'alternative' },
      { text: '食事から自然に摂るべき', type: 'natural' },
    ],
  },
  {
    id: 6,
    text: 'アロマテラピーについて',
    options: [
      { text: 'ただの香り。医学的効果はない', type: 'conventional' },
      { text: 'リラックス効果はあると思う', type: 'balanced' },
      { text: '精油には様々な効能がある', type: 'alternative' },
      { text: '植物の力で心身を癒せる', type: 'natural' },
    ],
  },
  {
    id: 7,
    text: 'ヨガや瞑想について',
    options: [
      { text: 'エクササイズとしては良い', type: 'conventional' },
      { text: 'ストレス解消に効果的', type: 'balanced' },
      { text: '心身のバランスを整えられる', type: 'alternative' },
      { text: '精神性を高める重要な実践', type: 'natural' },
    ],
  },
  {
    id: 8,
    text: 'オーガニック食品について',
    options: [
      { text: '普通の食品と変わらない', type: 'conventional' },
      { text: '選べるなら選ぶ程度', type: 'balanced' },
      { text: '健康のために積極的に選ぶ', type: 'alternative' },
      { text: '化学物質を避けることが大切', type: 'natural' },
    ],
  },
  {
    id: 9,
    text: '「免疫力を上げる」という表現について',
    options: [
      { text: '科学的に曖昧な表現', type: 'conventional' },
      { text: '生活習慣は免疫に影響すると思う', type: 'balanced' },
      { text: '自然療法で免疫力は上がる', type: 'alternative' },
      { text: '自然の力で体を強くできる', type: 'natural' },
    ],
  },
  {
    id: 10,
    text: '医療に対する全体的な考えは？',
    options: [
      { text: 'エビデンスに基づいた西洋医学が最善', type: 'conventional' },
      { text: '西洋医学を基本に補完療法も活用', type: 'balanced' },
      { text: '様々な療法を組み合わせたい', type: 'alternative' },
      { text: '自然療法で体本来の力を引き出す', type: 'natural' },
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
  conventional: {
    type: 'conventional',
    title: '西洋医学重視タイプ',
    emoji: '🏥',
    percentage: '西洋医学志向 90%',
    description: '科学的根拠（エビデンス）に基づいた医療を重視するタイプ。医師の診断と処方を信頼し、代替療法には懐疑的。論理的で堅実な考え方の持ち主です。',
    characteristics: ['科学的思考', 'エビデンス重視', '論理的', '堅実', '専門家信頼'],
    advice: '堅実な姿勢は大切。補完療法の研究成果にも目を向けてみては？',
  },
  balanced: {
    type: 'balanced',
    title: '統合医療バランスタイプ',
    emoji: '⚖️',
    percentage: '統合医療志向 70%',
    description: '西洋医学を基本としながら、補完代替療法も上手に取り入れるバランス型。両方の良いところを活用しようとする柔軟な姿勢を持っています。',
    characteristics: ['バランス感覚', '柔軟', '現実的', 'オープンマインド', '実用主義'],
    advice: '良いバランス感覚！信頼できる情報源を見極めて。',
  },
  alternative: {
    type: 'alternative',
    title: '代替療法積極派タイプ',
    emoji: '🌿',
    percentage: '代替医療志向 75%',
    description: '漢方、鍼灸、整体など様々な代替療法に積極的なタイプ。体全体のバランスを整えることを重視し、予防医学的な考え方を持っています。',
    characteristics: ['ホリスティック思考', '予防意識', '自然志向', '体質改善重視', '探求心'],
    advice: '様々な療法への関心は良いこと。重篤な症状は必ず医師に相談を。',
  },
  natural: {
    type: 'natural',
    title: '自然治癒力重視タイプ',
    emoji: '🍃',
    percentage: '自然療法志向 85%',
    description: '人間本来の自然治癒力を信じ、なるべく医療介入を避けたいタイプ。オーガニックや自然派の生活を大切にし、薬に頼らない健康づくりを心がけています。',
    characteristics: ['自然志向', '自己治癒力信頼', 'オーガニック派', '薬に慎重', '全体論的'],
    advice: '自然を大切にする姿勢は素敵。ただし必要な医療は躊躇なく受けて。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { conventional: 0, balanced: 0, alternative: 0, natural: 0 };

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
