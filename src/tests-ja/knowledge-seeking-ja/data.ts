// 知識追求タイプ診断
export const questions = [
  {
    id: 1,
    text: '気になることがあった時は？',
    options: [
      { text: 'すぐに検索して徹底的に調べる', type: 'researcher' },
      { text: '実際にやってみて確かめる', type: 'experimenter' },
      { text: '詳しい人に聞いてみる', type: 'networker' },
      { text: '頭の中であれこれ考える', type: 'philosopher' },
    ],
  },
  {
    id: 2,
    text: '知識を得る目的は？',
    options: [
      { text: '真実を知りたい純粋な好奇心', type: 'researcher' },
      { text: '実生活で役立てたい', type: 'experimenter' },
      { text: '人との会話を豊かにしたい', type: 'networker' },
      { text: '物事の本質を理解したい', type: 'philosopher' },
    ],
  },
  {
    id: 3,
    text: '本を読む時のスタイルは？',
    options: [
      { text: '一冊を隅々まで読み込む', type: 'researcher' },
      { text: '使える部分だけピックアップ', type: 'experimenter' },
      { text: 'おすすめ本を読んでシェア', type: 'networker' },
      { text: '内容について深く考えながら読む', type: 'philosopher' },
    ],
  },
  {
    id: 4,
    text: '新しい分野に興味を持った時は？',
    options: [
      { text: '入門書から専門書まで読破', type: 'researcher' },
      { text: '手を動かしながら学ぶ', type: 'experimenter' },
      { text: 'セミナーや勉強会に参加', type: 'networker' },
      { text: '既存の知識と結びつけて考える', type: 'philosopher' },
    ],
  },
  {
    id: 5,
    text: '知識を整理する方法は？',
    options: [
      { text: 'ノートやデータベースに体系的に', type: 'researcher' },
      { text: '実践しながら身体で覚える', type: 'experimenter' },
      { text: '人に話すことで定着させる', type: 'networker' },
      { text: '頭の中で関連づけて考える', type: 'philosopher' },
    ],
  },
  {
    id: 6,
    text: '得意な知識の分野は？',
    options: [
      { text: '専門的で深い知識', type: 'researcher' },
      { text: '実践的で使える知識', type: 'experimenter' },
      { text: '幅広い雑学や話題', type: 'networker' },
      { text: '概念的・抽象的な知識', type: 'philosopher' },
    ],
  },
  {
    id: 7,
    text: '情報源として信頼するのは？',
    options: [
      { text: '学術論文や専門書', type: 'researcher' },
      { text: '実績や事例', type: 'experimenter' },
      { text: '信頼できる人の意見', type: 'networker' },
      { text: '論理的に筋が通っているもの', type: 'philosopher' },
    ],
  },
  {
    id: 8,
    text: '知識欲が満たされる瞬間は？',
    options: [
      { text: '全体像が見えた時', type: 'researcher' },
      { text: '知識が実際に役立った時', type: 'experimenter' },
      { text: '人に教えて喜ばれた時', type: 'networker' },
      { text: '深い洞察を得た時', type: 'philosopher' },
    ],
  },
  {
    id: 9,
    text: '知らないことがあると？',
    options: [
      { text: '知らないままでいられない', type: 'researcher' },
      { text: '必要になったら調べる', type: 'experimenter' },
      { text: '誰かに聞けばいいと思う', type: 'networker' },
      { text: '考える楽しみができた', type: 'philosopher' },
    ],
  },
  {
    id: 10,
    text: '知識を活かす場面は？',
    options: [
      { text: '資料作成や分析', type: 'researcher' },
      { text: '問題解決や改善', type: 'experimenter' },
      { text: '会話やアドバイス', type: 'networker' },
      { text: '意思決定や判断', type: 'philosopher' },
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
  researcher: {
    type: 'researcher',
    title: '研究者タイプ',
    emoji: '🔬',
    style: '知識追求スタイル：調査型',
    description: '徹底的に調べ上げて深い知識を得る研究者タイプ。一つのテーマを掘り下げて専門家レベルまで理解しようとします。知の探究者！',
    characteristics: ['調査力', '専門性', '正確さ', '体系的', '根気強い'],
    recommendation: 'たまにはアウトプットも意識して、知識を共有してみよう！',
  },
  experimenter: {
    type: 'experimenter',
    title: '実験者タイプ',
    emoji: '🧪',
    style: '知識追求スタイル：実験型',
    description: '知識を実践で試して理解する実験者タイプ。「やってみないとわからない」がモットー。実用的な知恵を身につけるのが得意！',
    characteristics: ['行動力', '応用力', '柔軟性', '実践的', '検証力'],
    recommendation: '理論も学ぶと、実験の精度がさらに上がるよ！',
  },
  networker: {
    type: 'networker',
    title: 'ネットワーカータイプ',
    emoji: '🌐',
    style: '知識追求スタイル：対話型',
    description: '人との交流を通じて知識を得るネットワーカー。情報交換が得意で、人脈が知識の源。集合知を活かすのが上手！',
    characteristics: ['社交性', '情報収集', 'シェア上手', '繋がり', 'コミュニケーション'],
    recommendation: '自分で深掘りする時間も作ると、独自の専門性が身につくよ！',
  },
  philosopher: {
    type: 'philosopher',
    title: '思考者タイプ',
    emoji: '🤔',
    style: '知識追求スタイル：思索型',
    description: '物事を深く考え、本質を追求する思考者タイプ。表面的な情報に満足せず、なぜ？を問い続けます。哲学的な視点の持ち主！',
    characteristics: ['洞察力', '思考力', '批判的思考', '本質志向', '独創性'],
    recommendation: '考えすぎる前に、まず情報収集してみるのも効果的！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { researcher: 0, experimenter: 0, networker: 0, philosopher: 0 };

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
