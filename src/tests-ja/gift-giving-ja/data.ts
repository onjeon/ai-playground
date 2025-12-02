// プレゼント選びタイプ
export const questions = [
  {
    id: 1,
    text: 'プレゼントを選ぶ時に重視することは？',
    options: [
      { text: '相手の趣味や好みに合うもの', type: 'thoughtful' },
      { text: '実用的で使ってもらえるもの', type: 'practical' },
      { text: 'サプライズ感があるもの', type: 'surprise' },
      { text: '無難で失敗しないもの', type: 'safe' },
    ],
  },
  {
    id: 2,
    text: 'プレゼントの予算は？',
    options: [
      { text: '相手のことを考えて柔軟に', type: 'thoughtful' },
      { text: 'コスパを考えて適切に', type: 'practical' },
      { text: 'インパクト重視で奮発も', type: 'surprise' },
      { text: '相場に合わせて', type: 'safe' },
    ],
  },
  {
    id: 3,
    text: 'プレゼントを探す場所は？',
    options: [
      { text: '相手が好きそうなお店', type: 'thoughtful' },
      { text: '品揃えの良いデパート', type: 'practical' },
      { text: 'ユニークな雑貨屋やネット', type: 'surprise' },
      { text: 'カタログギフトが便利', type: 'safe' },
    ],
  },
  {
    id: 4,
    text: 'プレゼントを渡すタイミングは？',
    options: [
      { text: '二人きりの特別な瞬間に', type: 'thoughtful' },
      { text: '会った時に自然に', type: 'practical' },
      { text: '予想外のタイミングで', type: 'surprise' },
      { text: 'イベント当日に', type: 'safe' },
    ],
  },
  {
    id: 5,
    text: 'ラッピングについて？',
    options: [
      { text: '手作りや相手の好きな色で', type: 'thoughtful' },
      { text: 'お店のラッピングで十分', type: 'practical' },
      { text: 'ユニークな包装でインパクトを', type: 'surprise' },
      { text: 'シンプルで上品に', type: 'safe' },
    ],
  },
  {
    id: 6,
    text: 'メッセージカードは？',
    options: [
      { text: '心を込めた手書きの手紙', type: 'thoughtful' },
      { text: '簡潔に感謝の言葉を', type: 'practical' },
      { text: '面白いカードでインパクト', type: 'surprise' },
      { text: '定番のメッセージで', type: 'safe' },
    ],
  },
  {
    id: 7,
    text: 'プレゼント選びにかける時間は？',
    options: [
      { text: '何週間も前からリサーチ', type: 'thoughtful' },
      { text: '必要な時間だけ効率よく', type: 'practical' },
      { text: 'ピンと来るまで探し続ける', type: 'surprise' },
      { text: 'ギリギリでサッと決める', type: 'safe' },
    ],
  },
  {
    id: 8,
    text: 'もらって嬉しいプレゼントは？',
    options: [
      { text: '自分のことを考えて選んでくれたもの', type: 'thoughtful' },
      { text: '使いやすい実用的なもの', type: 'practical' },
      { text: '予想外で驚くもの', type: 'surprise' },
      { text: '何をもらっても嬉しい', type: 'safe' },
    ],
  },
  {
    id: 9,
    text: '相手の反応が薄かった時は？',
    options: [
      { text: '次はもっと良いものを選ぼうと反省', type: 'thoughtful' },
      { text: '好みじゃなかったのかなと分析', type: 'practical' },
      { text: '滑ったな〜と笑い飛ばす', type: 'surprise' },
      { text: 'まあ仕方ないと割り切る', type: 'safe' },
    ],
  },
  {
    id: 10,
    text: 'プレゼントに対する考え方は？',
    options: [
      { text: '愛情を形にしたもの', type: 'thoughtful' },
      { text: '相手の生活を便利にするもの', type: 'practical' },
      { text: '思い出に残る体験', type: 'surprise' },
      { text: 'マナーとしての贈り物', type: 'safe' },
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
  recommendation: string;
}> = {
  thoughtful: {
    type: 'thoughtful',
    title: '心配りギフター',
    emoji: '💝',
    percentage: '思いやり度 98%',
    description: '相手のことを深く考えて、心のこもったプレゼントを選ぶタイプ。好みや欲しいものをリサーチし、世界に一つの特別な贈り物を届けます。愛情深いギフト名人！',
    characteristics: ['思いやり', 'リサーチ力', '愛情深い', '記憶力', 'パーソナライズ'],
    recommendation: '自分へのご褒美プレゼントも忘れないで！',
  },
  practical: {
    type: 'practical',
    title: '実用派ギフター',
    emoji: '🎁',
    percentage: '実用性 92%',
    description: '相手が本当に使えるものを選ぶ実用派。無駄にならない、喜ばれるプレゼントを効率よく選びます。コスパも考える堅実なギフト選び！',
    characteristics: ['実用的', '効率的', '堅実', 'コスパ重視', '合理的'],
    recommendation: '時には実用性より「ときめき」を優先してみては？',
  },
  surprise: {
    type: 'surprise',
    title: 'サプライズギフター',
    emoji: '🎉',
    percentage: 'サプライズ度 95%',
    description: '予想を裏切るサプライズプレゼントが得意！ユニークなアイテムや体験型ギフトで、相手の心に残る思い出を作ります。エンターテイナー気質！',
    characteristics: ['サプライズ', 'ユニーク', '演出上手', 'エンターテイナー', '冒険心'],
    recommendation: '相手の好みもリサーチするとヒット率アップ！',
  },
  safe: {
    type: 'safe',
    title: '安定派ギフター',
    emoji: '🎀',
    percentage: '安定度 88%',
    description: '失敗しない定番ギフトを選ぶ堅実タイプ。カタログギフトや人気商品など、誰にでも喜ばれるものを選びます。マナーを大切にする礼儀正しいギフト選び！',
    characteristics: ['安定', '無難', '礼儀正しい', 'マナー重視', '失敗しない'],
    recommendation: '相手の個性に合わせたチョイスにも挑戦してみて！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { thoughtful: 0, practical: 0, surprise: 0, safe: 0 };

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
