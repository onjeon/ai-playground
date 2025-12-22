// エネルギー管理診断 - あなたのエネルギーマネジメント術は？
export const questions = [
  {
    id: 1,
    text: '忙しい時期の乗り越え方は？',
    options: [
      { text: '気合と根性で突っ走る', type: 'burst' },
      { text: '優先順位をつけて効率よく', type: 'strategic' },
      { text: 'こまめに休憩を挟みながら', type: 'sustainable' },
      { text: 'できるだけ人に頼る・任せる', type: 'delegator' },
    ],
  },
  {
    id: 2,
    text: '1日の中でエネルギーが高い時間帯は？',
    options: [
      { text: '特に意識していない', type: 'burst' },
      { text: '朝！午前中に重要な仕事を入れる', type: 'strategic' },
      { text: '一定のペースを保つようにしている', type: 'sustainable' },
      { text: '人といる時にエネルギーが上がる', type: 'delegator' },
    ],
  },
  {
    id: 3,
    text: '疲れを感じた時の対処法は？',
    options: [
      { text: '無視して頑張り続ける', type: 'burst' },
      { text: '短時間の仮眠やストレッチ', type: 'strategic' },
      { text: 'その日は早めに切り上げる', type: 'sustainable' },
      { text: '誰かに話を聞いてもらう', type: 'delegator' },
    ],
  },
  {
    id: 4,
    text: '週末の過ごし方は？',
    options: [
      { text: '平日の疲れでぐったり寝てる', type: 'burst' },
      { text: '予定を入れつつリフレッシュ', type: 'strategic' },
      { text: '計画的に休息時間を確保', type: 'sustainable' },
      { text: '人と会ってエネルギー補給', type: 'delegator' },
    ],
  },
  {
    id: 5,
    text: 'タスクが山積みの時は？',
    options: [
      { text: '全部終わるまで休まない', type: 'burst' },
      { text: '重要なものから片付ける', type: 'strategic' },
      { text: '1日でできる量を見極めて翌日に回す', type: 'sustainable' },
      { text: '手伝ってくれる人を探す', type: 'delegator' },
    ],
  },
  {
    id: 6,
    text: 'エネルギー回復に効果的なのは？',
    options: [
      { text: '好きなものを食べる・飲む', type: 'burst' },
      { text: '運動や入浴で血行を良くする', type: 'strategic' },
      { text: '十分な睡眠を取る', type: 'sustainable' },
      { text: '友達とおしゃべりする', type: 'delegator' },
    ],
  },
  {
    id: 7,
    text: '長期プロジェクトへの取り組み方は？',
    options: [
      { text: '締め切り前に一気に追い込む', type: 'burst' },
      { text: 'マイルストーンを設定して計画的に', type: 'strategic' },
      { text: '毎日少しずつコツコツ進める', type: 'sustainable' },
      { text: 'チームで分担して進める', type: 'delegator' },
    ],
  },
  {
    id: 8,
    text: '自分のエネルギー状態を把握している？',
    options: [
      { text: '限界が来るまで気づかないことが多い', type: 'burst' },
      { text: '定期的にセルフチェックしている', type: 'strategic' },
      { text: '疲れたら休むシンプルなルール', type: 'sustainable' },
      { text: '周りの人に指摘されて気づく', type: 'delegator' },
    ],
  },
  {
    id: 9,
    text: '「無理しないで」と言われたら？',
    options: [
      { text: '「大丈夫！」と言って続ける', type: 'burst' },
      { text: '状況を見て判断する', type: 'strategic' },
      { text: '素直に休むことにする', type: 'sustainable' },
      { text: '「じゃあ手伝って」とお願いする', type: 'delegator' },
    ],
  },
  {
    id: 10,
    text: 'エネルギー管理で大切にしていることは？',
    options: [
      { text: '必要な時にMAXパワーを出せること', type: 'burst' },
      { text: '効率よくエネルギーを使うこと', type: 'strategic' },
      { text: '長期的に安定したパフォーマンス', type: 'sustainable' },
      { text: '一人で抱え込まないこと', type: 'delegator' },
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
  burst: {
    type: 'burst',
    title: '瞬発力全開タイプ',
    emoji: '🚀',
    percentage: '持続性 30%',
    description: '必要な時に一気にエネルギーを爆発させるタイプ。短期決戦には強いですが、燃え尽き症候群に注意。普段からのエネルギー管理を意識すると、もっと力を発揮できます。',
    characteristics: ['瞬発力', '集中力', '根性タイプ', '燃え尽きリスク', '短期決戦向き'],
    advice: '限界まで頑張る前に休息を。小さな休憩を習慣化すると、もっと長く高パフォーマンスを維持できます。',
  },
  strategic: {
    type: 'strategic',
    title: '戦略的配分タイプ',
    emoji: '🎯',
    percentage: '持続性 75%',
    description: 'エネルギーの使い方を計算して、効率的に配分できるタイプ。優先順位をつけて、重要なことに集中できます。自己管理能力が高く、安定したパフォーマンスを発揮。',
    characteristics: ['計画的', '効率重視', '優先順位明確', '自己管理上手', '冷静'],
    advice: '素晴らしい管理能力！ただし計画通りにいかない時の柔軟性も持っておくと、さらに安定します。',
  },
  sustainable: {
    type: 'sustainable',
    title: '持続可能運転タイプ',
    emoji: '🌱',
    percentage: '持続性 90%',
    description: '無理をせず、長期的に安定したエネルギーを維持できるタイプ。自分のペースを大切にし、休息の重要性をよく理解しています。マラソン型の人生に向いています。',
    characteristics: ['安定感', '持続力', 'セルフケア上手', 'バランス重視', '長期視点'],
    advice: '堅実なエネルギー管理ができています！たまには少し冒険して、新しい刺激を取り入れるのも良いかも。',
  },
  delegator: {
    type: 'delegator',
    title: '協力エネルギータイプ',
    emoji: '🤝',
    percentage: '持続性 65%',
    description: '人との関わりの中でエネルギーを得て、上手に人に頼ることもできるタイプ。一人で抱え込まず、チームで成果を出すのが得意。人間関係がエネルギーの源泉。',
    characteristics: ['協調性', '頼り上手', 'チームプレイヤー', 'コミュニケーション力', '外向的'],
    advice: '人との繋がりは大切！ただし一人の時間も意識的に作ると、エネルギーバランスがより良くなります。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { burst: 0, strategic: 0, sustainable: 0, delegator: 0 };

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
