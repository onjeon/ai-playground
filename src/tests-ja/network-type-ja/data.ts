// ネットワーキングタイプ診断
export const questions = [
  {
    id: 1,
    text: '新しい出会いの場（交流会など）で？',
    options: [
      { text: '積極的に名刺交換・連絡先交換', type: 'hunter' },
      { text: '気の合う人とじっくり話す', type: 'cultivator' },
      { text: '知り合いに紹介してもらう', type: 'bridge' },
      { text: '様子を見てから動く', type: 'observer' },
    ],
  },
  {
    id: 2,
    text: '人脈を広げる目的は？',
    options: [
      { text: '仕事やビジネスチャンスのため', type: 'hunter' },
      { text: '信頼できる仲間を増やすため', type: 'cultivator' },
      { text: '情報やリソースの共有のため', type: 'bridge' },
      { text: '新しい視点や刺激を得るため', type: 'observer' },
    ],
  },
  {
    id: 3,
    text: '連絡先を交換した後は？',
    options: [
      { text: 'すぐにフォローアップの連絡', type: 'hunter' },
      { text: '定期的に連絡を取り続ける', type: 'cultivator' },
      { text: '必要な時に連絡する', type: 'bridge' },
      { text: '相手から連絡が来たら返す', type: 'observer' },
    ],
  },
  {
    id: 4,
    text: 'SNSでのつながり方は？',
    options: [
      { text: '積極的にフォロー・友達申請', type: 'hunter' },
      { text: '厳選した人だけとつながる', type: 'cultivator' },
      { text: '共通の知人を通じてつながる', type: 'bridge' },
      { text: 'あまり使わない・見る専門', type: 'observer' },
    ],
  },
  {
    id: 5,
    text: 'ネットワークの規模は？',
    options: [
      { text: '広く浅く、とにかく多く', type: 'hunter' },
      { text: '狭く深く、質を重視', type: 'cultivator' },
      { text: '異なるコミュニティをつなぐ', type: 'bridge' },
      { text: '自然に任せている', type: 'observer' },
    ],
  },
  {
    id: 6,
    text: '人を紹介することは？',
    options: [
      { text: 'よくする。紹介が得意', type: 'bridge' },
      { text: '信頼できる人同士なら紹介する', type: 'cultivator' },
      { text: '紹介してもらうことが多い', type: 'hunter' },
      { text: 'あまりしない', type: 'observer' },
    ],
  },
  {
    id: 7,
    text: '異業種・異分野の人との交流は？',
    options: [
      { text: '積極的に機会を作る', type: 'hunter' },
      { text: '興味があれば参加する', type: 'cultivator' },
      { text: '違う世界の人をつなげるのが好き', type: 'bridge' },
      { text: '同じ分野の人の方が落ち着く', type: 'observer' },
    ],
  },
  {
    id: 8,
    text: '関係性の維持方法は？',
    options: [
      { text: 'まめに連絡・情報提供', type: 'hunter' },
      { text: '定期的な食事や飲み会', type: 'cultivator' },
      { text: '人と人をつなげることで維持', type: 'bridge' },
      { text: '会った時に話せればいい', type: 'observer' },
    ],
  },
  {
    id: 9,
    text: 'ネットワークから得たいものは？',
    options: [
      { text: '仕事の機会や情報', type: 'hunter' },
      { text: '信頼できるパートナー', type: 'cultivator' },
      { text: 'シナジーや協力関係', type: 'bridge' },
      { text: '知識や視野の拡大', type: 'observer' },
    ],
  },
  {
    id: 10,
    text: '理想のネットワークは？',
    options: [
      { text: '影響力のある人とつながりたい', type: 'hunter' },
      { text: '困った時に頼れる仲間', type: 'cultivator' },
      { text: '多様な人が交わるコミュニティ', type: 'bridge' },
      { text: '居心地のいい少人数のグループ', type: 'observer' },
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
  hunter: {
    type: 'hunter',
    title: 'ハンター型ネットワーカー',
    emoji: '🎯',
    style: 'ネットワーキングスタイル：狩猟型',
    description: '積極的に人脈を広げ、機会を掴むハンタータイプ！目的意識が明確で、戦略的にネットワークを構築します。',
    characteristics: ['積極性', '目的志向', '行動力', '戦略的', '機会創出'],
    recommendation: '量だけでなく質も意識すると、より強いネットワークに！',
  },
  cultivator: {
    type: 'cultivator',
    title: '農耕型ネットワーカー',
    emoji: '🌱',
    style: 'ネットワーキングスタイル：育成型',
    description: '時間をかけて信頼関係を育てる農耕型！深いつながりを大切にし、困った時に頼れる仲間を持っています。',
    characteristics: ['信頼構築', '長期視点', '誠実', '深い関係', '相互扶助'],
    recommendation: '新しい人との出会いも少しずつ広げてみると、世界が広がるよ！',
  },
  bridge: {
    type: 'bridge',
    title: 'ブリッジ型ネットワーカー',
    emoji: '🌉',
    style: 'ネットワーキングスタイル：架け橋型',
    description: '異なるコミュニティをつなぐ架け橋！人と人の化学反応を生み出すのが得意で、ハブ的存在として活躍します。',
    characteristics: ['接続力', '多様性', 'マッチング', 'ハブ役', '視野の広さ'],
    recommendation: '自分の専門分野も深めると、紹介の説得力がアップ！',
  },
  observer: {
    type: 'observer',
    title: '観察者型ネットワーカー',
    emoji: '👀',
    style: 'ネットワーキングスタイル：観察型',
    description: 'じっくり観察してから関係を築く観察者タイプ。慎重だからこそ、本当に気の合う人との関係が深い！',
    characteristics: ['慎重', '観察力', '選択眼', '本質重視', '居心地の良さ'],
    recommendation: '時には積極的に動いてみると、思わぬ出会いがあるかも！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { hunter: 0, cultivator: 0, bridge: 0, observer: 0 };

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
