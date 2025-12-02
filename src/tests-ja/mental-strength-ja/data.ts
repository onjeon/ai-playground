// メンタル強度診断 (멘탈 강도 테스트)
export const questions = [
  {
    id: 1,
    text: '失敗した時の反応は？',
    options: [
      { text: 'すぐ切り替えて次へ', type: 'steel' },
      { text: '原因を分析して対策を立てる', type: 'resilient' },
      { text: '少し落ち込むけど立ち直る', type: 'flexible' },
      { text: 'かなり引きずる', type: 'sensitive' },
    ],
  },
  {
    id: 2,
    text: '批判や否定的な意見を受けた時は？',
    options: [
      { text: '気にしない', type: 'steel' },
      { text: '参考になる部分は取り入れる', type: 'resilient' },
      { text: '少し傷つくけど受け止める', type: 'flexible' },
      { text: 'かなりショックを受ける', type: 'sensitive' },
    ],
  },
  {
    id: 3,
    text: 'プレッシャーのかかる状況では？',
    options: [
      { text: 'むしろ燃える', type: 'steel' },
      { text: '冷静に対処できる', type: 'resilient' },
      { text: '緊張するけどなんとかこなす', type: 'flexible' },
      { text: 'かなり緊張して実力を出せない', type: 'sensitive' },
    ],
  },
  {
    id: 4,
    text: '嫌なことがあった日の夜は？',
    options: [
      { text: 'すぐ忘れて眠れる', type: 'steel' },
      { text: '少し考えるけど切り替えて寝る', type: 'resilient' },
      { text: '寝付きが悪くなることも', type: 'flexible' },
      { text: 'ずっと考えてしまう', type: 'sensitive' },
    ],
  },
  {
    id: 5,
    text: '他人と自分を比較することは？',
    options: [
      { text: 'ほとんどしない', type: 'steel' },
      { text: '比較しても気にしない', type: 'resilient' },
      { text: '時々気になる', type: 'flexible' },
      { text: 'よく比較して落ち込む', type: 'sensitive' },
    ],
  },
  {
    id: 6,
    text: '予想外のトラブルが起きたら？',
    options: [
      { text: '冷静に対処する', type: 'steel' },
      { text: '解決策を考える', type: 'resilient' },
      { text: '焦るけどなんとかする', type: 'flexible' },
      { text: 'パニックになりやすい', type: 'sensitive' },
    ],
  },
  {
    id: 7,
    text: '長期間のストレスには？',
    options: [
      { text: '耐えられる、問題ない', type: 'steel' },
      { text: 'うまくコントロールできる', type: 'resilient' },
      { text: '少しずつ疲れてくる', type: 'flexible' },
      { text: 'かなり消耗する', type: 'sensitive' },
    ],
  },
  {
    id: 8,
    text: '自分への自信は？',
    options: [
      { text: '揺るがない自信がある', type: 'steel' },
      { text: '基本的にある', type: 'resilient' },
      { text: '状況によって変わる', type: 'flexible' },
      { text: 'あまり自信がない', type: 'sensitive' },
    ],
  },
  {
    id: 9,
    text: '過去の嫌な出来事は？',
    options: [
      { text: '思い出さない', type: 'steel' },
      { text: '教訓として活かす', type: 'resilient' },
      { text: '時々思い出す', type: 'flexible' },
      { text: 'よく思い出して辛くなる', type: 'sensitive' },
    ],
  },
  {
    id: 10,
    text: 'メンタルの強さの源は？',
    options: [
      { text: '生まれつき強い', type: 'steel' },
      { text: '経験と学びで鍛えた', type: 'resilient' },
      { text: '周りのサポート', type: 'flexible' },
      { text: 'まだ探している', type: 'sensitive' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  mentalLevel: string;
  description: string;
  characteristics: string[];
  advice: string[];
}> = {
  steel: {
    type: 'steel',
    title: '鋼のメンタル',
    emoji: '🛡️💪',
    mentalLevel: 'メンタル強度：★★★★★',
    description: '何があっても動じない鋼のメンタルの持ち主！批判も失敗もプレッシャーも、全て跳ね返す強さがあります。周りの支えになれる頼もしい存在です。',
    characteristics: ['ストレス耐性が高い', 'ブレない', 'ポジティブ', '自信がある'],
    advice: ['周りの気持ちにも配慮を', '時には弱さを見せてもOK', '他の人の悩みも理解しよう'],
  },
  resilient: {
    type: 'resilient',
    title: 'レジリエンス型',
    emoji: '🌱✨',
    mentalLevel: 'メンタル強度：★★★★☆',
    description: '困難から立ち直る力が強いタイプ。落ち込んでも、そこから学び、より強くなって復活できます。しなやかで折れない心の持ち主です。',
    characteristics: ['回復力が高い', '成長志向', '柔軟', '学びを活かす'],
    advice: ['その姿勢を続けて', '自分を褒めることも忘れずに', '無理しすぎないで'],
  },
  flexible: {
    type: 'flexible',
    title: 'しなやかメンタル',
    emoji: '🌿💫',
    mentalLevel: 'メンタル強度：★★★☆☆',
    description: '普通に傷つくこともあるけど、なんとか乗り越えられるタイプ。感受性豊かで、人の気持ちがわかる優しさがあります。バランスの取れた心の持ち主。',
    characteristics: ['感受性豊か', 'バランスが良い', '共感力がある', '適応力がある'],
    advice: ['自分を守る方法を知っておこう', 'ストレス発散法を見つけて', '頼れる人を持っておこう'],
  },
  sensitive: {
    type: 'sensitive',
    title: '繊細センシティブ',
    emoji: '🦋💕',
    mentalLevel: 'メンタル強度：★★☆☆☆',
    description: '繊細で傷つきやすいタイプ。でもそれは、感受性が豊かで人の痛みがわかる素敵な長所でもあります。自分を大切にしながら、少しずつ強くなっていきましょう。',
    characteristics: ['繊細', '感受性豊か', '優しい', '共感力が高い'],
    advice: ['自分を責めないで', '小さな成功体験を積もう', '信頼できる人に頼ることも大切'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { steel: 0, resilient: 0, flexible: 0, sensitive: 0 };

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
