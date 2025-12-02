// 家族での役割診断 (가족 역할 테스트)
export const questions = [
  {
    id: 1,
    text: '家族が集まった時、あなたの立ち位置は？',
    options: [
      { text: '話をまとめたり、仕切ったりする', type: 'leader' },
      { text: '皆を和ませる雰囲気メーカー', type: 'peacemaker' },
      { text: '困っている人のサポート役', type: 'supporter' },
      { text: '静かに見守っている', type: 'observer' },
    ],
  },
  {
    id: 2,
    text: '家族の問題が起きた時は？',
    options: [
      { text: '解決策を考えて提案する', type: 'leader' },
      { text: '皆の話を聞いて調整する', type: 'peacemaker' },
      { text: '困っている人の側にいる', type: 'supporter' },
      { text: '冷静に状況を見極める', type: 'observer' },
    ],
  },
  {
    id: 3,
    text: '家族旅行の計画は？',
    options: [
      { text: '行き先やスケジュールを決める', type: 'leader' },
      { text: '皆の希望を聞いてまとめる', type: 'peacemaker' },
      { text: '荷物の準備など裏方を担当', type: 'supporter' },
      { text: '決まったことに従う', type: 'observer' },
    ],
  },
  {
    id: 4,
    text: '家族の中で頼られることは？',
    options: [
      { text: '決断を求められる', type: 'leader' },
      { text: '相談相手として', type: 'peacemaker' },
      { text: '実務的なサポート', type: 'supporter' },
      { text: '客観的な意見を求められる', type: 'observer' },
    ],
  },
  {
    id: 5,
    text: '家族の食事会で？',
    options: [
      { text: 'メニューやお店を決める', type: 'leader' },
      { text: '会話を盛り上げる', type: 'peacemaker' },
      { text: '料理を取り分けたり気を配る', type: 'supporter' },
      { text: '美味しく食べることに集中', type: 'observer' },
    ],
  },
  {
    id: 6,
    text: '家族の意見が割れた時は？',
    options: [
      { text: '最終決定を下す', type: 'leader' },
      { text: '間に入って調整する', type: 'peacemaker' },
      { text: '多数派についていく', type: 'supporter' },
      { text: '争いには関わらない', type: 'observer' },
    ],
  },
  {
    id: 7,
    text: '家族のイベント準備は？',
    options: [
      { text: '全体の指揮を取る', type: 'leader' },
      { text: '参加者の調整役', type: 'peacemaker' },
      { text: '買い出しや準備を担当', type: 'supporter' },
      { text: '当日参加するだけ', type: 'observer' },
    ],
  },
  {
    id: 8,
    text: '家族の秘密を知ったら？',
    options: [
      { text: '必要なら家族会議を開く', type: 'leader' },
      { text: '当事者の話を聞く', type: 'peacemaker' },
      { text: '黙って見守る', type: 'supporter' },
      { text: '関わらないようにする', type: 'observer' },
    ],
  },
  {
    id: 9,
    text: '家族からの評価は？',
    options: [
      { text: '頼りになる', type: 'leader' },
      { text: '優しい・話しやすい', type: 'peacemaker' },
      { text: '気が利く・助かる', type: 'supporter' },
      { text: 'マイペース・独立している', type: 'observer' },
    ],
  },
  {
    id: 10,
    text: '家族と離れて暮らすとしたら？',
    options: [
      { text: '定期的に連絡を取り管理する', type: 'leader' },
      { text: 'こまめに連絡して繋がりを維持', type: 'peacemaker' },
      { text: '必要な時にサポートできる距離で', type: 'supporter' },
      { text: '自分の生活を優先する', type: 'observer' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  familyRole: string[];
  strengths: string[];
  challenges: string[];
}> = {
  leader: {
    type: 'leader',
    title: '家族のリーダータイプ',
    emoji: '👑',
    description: 'あなたは家族をまとめるリーダー的存在！決断力があり、困った時に頼られます。責任感が強く、家族の幸せを第一に考えます。',
    familyRole: ['意思決定者', '問題解決者', '家族の代表'],
    strengths: ['決断力がある', '責任感が強い', '頼りになる'],
    challenges: ['一人で抱え込みがち', '支配的になりすぎないように', '他の意見も聞こう'],
  },
  peacemaker: {
    type: 'peacemaker',
    title: '家族の調整役タイプ',
    emoji: '🕊️',
    description: 'あなたは家族の潤滑油的存在！意見の違いを調整し、和やかな雰囲気を作ります。コミュニケーション能力が高く、皆から信頼されています。',
    familyRole: ['調整役', '相談相手', '雰囲気メーカー'],
    strengths: ['共感力が高い', '聞き上手', 'バランス感覚がある'],
    challenges: ['自分の意見も言おう', '板挟みにならないように', '時には争いを避けないで'],
  },
  supporter: {
    type: 'supporter',
    title: '縁の下の力持ちタイプ',
    emoji: '🤝',
    description: 'あなたは家族を裏から支える存在！目立たないけど、実務的なサポートで家族を助けます。気配り上手で、いなくてはならない存在。',
    familyRole: ['サポート役', '実務担当', '気配り上手'],
    strengths: ['気が利く', '実行力がある', '献身的'],
    challenges: ['自分も大切に', '褒められることを求めてもいい', 'たまには頼ってみて'],
  },
  observer: {
    type: 'observer',
    title: '独立観察者タイプ',
    emoji: '🦉',
    description: 'あなたは家族と適度な距離を保つ存在！客観的な視点を持ち、冷静に物事を見られます。自立していて、自分の世界を大切にします。',
    familyRole: ['観察者', '独立した存在', '客観的な意見役'],
    strengths: ['冷静な判断', '自立している', '干渉しない'],
    challenges: ['もう少し関わってみて', '孤立しないように', '家族との時間も大切に'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { leader: 0, peacemaker: 0, supporter: 0, observer: 0 };

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
