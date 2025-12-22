// 批判への対応診断 - あなたは批判にどう向き合う？
export const questions = [
  {
    id: 1,
    text: '仕事で上司から指摘を受けたとき',
    options: [
      { text: '落ち込んで立ち直れない', type: 'sensitive' },
      { text: '内心モヤモヤするけど受け止める', type: 'processing' },
      { text: '改善点として前向きに捉える', type: 'constructive' },
      { text: 'むしろありがたい、成長の機会', type: 'resilient' },
    ],
  },
  {
    id: 2,
    text: 'SNSで自分の投稿に否定的なコメントがついたら？',
    options: [
      { text: 'ショックで投稿を消したくなる', type: 'sensitive' },
      { text: '気になるけど、気にしないようにする', type: 'processing' },
      { text: '一理あるか冷静に考える', type: 'constructive' },
      { text: '色んな意見があって当然と思える', type: 'resilient' },
    ],
  },
  {
    id: 3,
    text: '友達から「それ、ちょっと違うんじゃない？」と言われたら',
    options: [
      { text: '否定された気がして傷つく', type: 'sensitive' },
      { text: '言い返したいけど抑える', type: 'processing' },
      { text: '「どこが違う？」と聞いてみる', type: 'constructive' },
      { text: '違う視点をもらえてありがたい', type: 'resilient' },
    ],
  },
  {
    id: 4,
    text: 'プレゼンの後、厳しい質問を受けたとき',
    options: [
      { text: '頭が真っ白になる', type: 'sensitive' },
      { text: '緊張するけど、なんとか答える', type: 'processing' },
      { text: '良い質問ですね、と受け止める', type: 'constructive' },
      { text: '議論を深められるチャンスと捉える', type: 'resilient' },
    ],
  },
  {
    id: 5,
    text: '家族に自分のやり方を批判されたら？',
    options: [
      { text: 'イライラして口論になる', type: 'sensitive' },
      { text: 'ムッとするけど言い返さない', type: 'processing' },
      { text: '「なぜそう思う？」と理由を聞く', type: 'constructive' },
      { text: '心配してくれてるんだなと理解する', type: 'resilient' },
    ],
  },
  {
    id: 6,
    text: '自分の作品や成果物を酷評されたとき',
    options: [
      { text: '自分を全否定された気分', type: 'sensitive' },
      { text: '悲しいけど、時間が経てば大丈夫', type: 'processing' },
      { text: '具体的な改善点を探る', type: 'constructive' },
      { text: '成果物と自分の価値は別と割り切れる', type: 'resilient' },
    ],
  },
  {
    id: 7,
    text: '会議で自分の提案が却下されたとき',
    options: [
      { text: '恥ずかしくて発言できなくなる', type: 'sensitive' },
      { text: '残念だけど仕方ないと思う', type: 'processing' },
      { text: '却下の理由を分析して次に活かす', type: 'constructive' },
      { text: 'より良い案を考える機会と捉える', type: 'resilient' },
    ],
  },
  {
    id: 8,
    text: '批判を受けた後、どれくらい引きずる？',
    options: [
      { text: '何日も、何週間も忘れられない', type: 'sensitive' },
      { text: '数日は気になるけど、徐々に回復', type: 'processing' },
      { text: '学びを得たら切り替えられる', type: 'constructive' },
      { text: 'すぐに次に進める', type: 'resilient' },
    ],
  },
  {
    id: 9,
    text: '360度評価で厳しいフィードバックがあったら？',
    options: [
      { text: '誰が書いたか気になって仕方ない', type: 'sensitive' },
      { text: 'ショックだけど読み込む', type: 'processing' },
      { text: '改善計画を立てる材料にする', type: 'constructive' },
      { text: '貴重な客観的意見として感謝する', type: 'resilient' },
    ],
  },
  {
    id: 10,
    text: '批判と指摘の違いについて',
    options: [
      { text: 'どちらも攻撃に感じる', type: 'sensitive' },
      { text: '頭では分かっていても心は傷つく', type: 'processing' },
      { text: '建設的かどうかで判断できる', type: 'constructive' },
      { text: 'どんな批判からも学びを見出せる', type: 'resilient' },
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
  sensitive: {
    type: 'sensitive',
    title: '繊細ハートタイプ',
    emoji: '🥺',
    percentage: '批判耐性 20%',
    description: '批判にとても敏感で、傷つきやすいタイプ。それだけ感受性が豊かで、人の気持ちにも敏感なはず。自分を守る心の壁を少しずつ育てていこう。',
    characteristics: ['繊細', '感受性', '共感力', '傷つきやすい', '真面目'],
    advice: '批判は「あなた」への否定ではなく「行動」への指摘。自分の価値と分けて考えて。',
  },
  processing: {
    type: 'processing',
    title: '受け止め処理中タイプ',
    emoji: '🔄',
    percentage: '批判耐性 45%',
    description: '批判を受けると動揺するけど、時間をかけて処理できるタイプ。すぐには立ち直れなくても、着実に消化していく力があります。',
    characteristics: ['誠実', '内省的', '着実', '時間をかけて回復', '努力家'],
    advice: '自分のペースで大丈夫。処理できている時点で十分成長しています。',
  },
  constructive: {
    type: 'constructive',
    title: '建設的受容タイプ',
    emoji: '🔧',
    percentage: '批判耐性 75%',
    description: '批判を成長の材料として活用できるタイプ。感情的にならず、建設的に受け止める力があります。プロフェッショナルな姿勢の持ち主。',
    characteristics: ['成長志向', '冷静', 'プロ意識', '改善力', '客観的'],
    advice: '素晴らしい対応力！時には感情を認めることも、心の健康に大切ですよ。',
  },
  resilient: {
    type: 'resilient',
    title: 'レジリエンスマスタータイプ',
    emoji: '💎',
    percentage: '批判耐性 95%',
    description: 'どんな批判も糧にできる、鋼のメンタルの持ち主。批判を恐れず、むしろ成長のチャンスとして歓迎できます。リーダーに必要な資質です。',
    characteristics: ['強靭', '前向き', '自己肯定感', '成長マインド', 'リーダーシップ'],
    advice: 'その強さは大きな武器！でも他の人の繊細さにも配慮を忘れずに。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { sensitive: 0, processing: 0, constructive: 0, resilient: 0 };

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
