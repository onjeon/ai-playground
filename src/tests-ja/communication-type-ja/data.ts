// コミュニケーションタイプ診断 (소통 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '会話をする時、どんなスタイル？',
    options: [
      { text: '自分から積極的に話す', type: 'assertive' },
      { text: '相手の話をよく聞く', type: 'listener' },
      { text: '論理的に説明する', type: 'logical' },
      { text: '感情や雰囲気を大切にする', type: 'emotional' },
    ],
  },
  {
    id: 2,
    text: '意見が合わない時は？',
    options: [
      { text: 'はっきり自分の意見を言う', type: 'assertive' },
      { text: 'まず相手の意見を聞く', type: 'listener' },
      { text: 'データや根拠で説得する', type: 'logical' },
      { text: '空気を読んで対応する', type: 'emotional' },
    ],
  },
  {
    id: 3,
    text: '初対面の人との会話は？',
    options: [
      { text: '自分から話題を振る', type: 'assertive' },
      { text: '質問して相手のことを知る', type: 'listener' },
      { text: '共通点を見つけて話す', type: 'logical' },
      { text: '雰囲気を和ませる', type: 'emotional' },
    ],
  },
  {
    id: 4,
    text: 'プレゼンや発表は？',
    options: [
      { text: '堂々と自信を持って', type: 'assertive' },
      { text: '聞き手の反応を見ながら', type: 'listener' },
      { text: '準備した内容を正確に', type: 'logical' },
      { text: '熱意を込めて伝える', type: 'emotional' },
    ],
  },
  {
    id: 5,
    text: 'メッセージやメールの書き方は？',
    options: [
      { text: '簡潔にストレートに', type: 'assertive' },
      { text: '丁寧で相手を気遣う内容', type: 'listener' },
      { text: '整理された構成で', type: 'logical' },
      { text: '絵文字やスタンプを使って温かく', type: 'emotional' },
    ],
  },
  {
    id: 6,
    text: 'グループでの議論では？',
    options: [
      { text: 'リーダーシップを取る', type: 'assertive' },
      { text: 'みんなの意見をまとめる', type: 'listener' },
      { text: '問題点を分析する', type: 'logical' },
      { text: '雰囲気を良くする', type: 'emotional' },
    ],
  },
  {
    id: 7,
    text: '相手に何かを頼む時は？',
    options: [
      { text: 'ストレートにお願いする', type: 'assertive' },
      { text: '相手の状況を確認してから', type: 'listener' },
      { text: '理由をしっかり説明して', type: 'logical' },
      { text: 'お願い上手に頼む', type: 'emotional' },
    ],
  },
  {
    id: 8,
    text: '誤解が生じた時は？',
    options: [
      { text: 'すぐに訂正する', type: 'assertive' },
      { text: 'まず相手の話を聞く', type: 'listener' },
      { text: '事実を整理して説明', type: 'logical' },
      { text: '関係性を優先して対応', type: 'emotional' },
    ],
  },
  {
    id: 9,
    text: '褒められた時の反応は？',
    options: [
      { text: '素直に受け取る', type: 'assertive' },
      { text: '謙遜する', type: 'listener' },
      { text: '具体的に何が良かったか聞く', type: 'logical' },
      { text: '嬉しさを表現する', type: 'emotional' },
    ],
  },
  {
    id: 10,
    text: 'コミュニケーションで大切にしていることは？',
    options: [
      { text: '明確に伝えること', type: 'assertive' },
      { text: '相手を理解すること', type: 'listener' },
      { text: '正確な情報交換', type: 'logical' },
      { text: '良好な関係を築くこと', type: 'emotional' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  commStyle: string;
  description: string;
  characteristics: string[];
  tips: string[];
}> = {
  assertive: {
    type: 'assertive',
    title: 'リーダー型コミュニケーター',
    emoji: '👑💬',
    commStyle: '発信力：★★★★★',
    description: '自分の意見をはっきり伝えられるリーダータイプ。堂々とした態度で周りを引っ張ります。主張が明確で、説得力のあるコミュニケーションが得意です。',
    characteristics: ['自己主張が得意', 'リーダーシップ', '説得力がある', '決断力がある'],
    tips: ['相手の意見にも耳を傾けて', '押しすぎに注意', '柔軟性も大切に'],
  },
  listener: {
    type: 'listener',
    title: '傾聴型コミュニケーター',
    emoji: '👂💖',
    commStyle: '傾聴力：★★★★★',
    description: '相手の話を丁寧に聞くことができる聞き上手タイプ。共感力が高く、周りから信頼される存在です。相談相手として頼られることが多いでしょう。',
    characteristics: ['傾聴力が高い', '共感力がある', '信頼される', '思いやりがある'],
    tips: ['自分の意見も伝えて', '聞きすぎて疲れないように', '自己表現も大切に'],
  },
  logical: {
    type: 'logical',
    title: '論理型コミュニケーター',
    emoji: '🧠📊',
    commStyle: '論理力：★★★★★',
    description: '論理的で分かりやすいコミュニケーションが得意なタイプ。データや根拠に基づいて説明でき、複雑な内容も整理して伝えられます。',
    characteristics: ['論理的', '分析力がある', '正確', '冷静'],
    tips: ['感情面にも配慮を', '相手のペースに合わせて', '時には直感も大切に'],
  },
  emotional: {
    type: 'emotional',
    title: '感性型コミュニケーター',
    emoji: '🌈🤗',
    commStyle: '共感力：★★★★★',
    description: '感情や雰囲気を大切にするタイプ。温かいコミュニケーションで場を和ませ、人間関係を円滑にします。周りに安心感を与える存在です。',
    characteristics: ['感性豊か', '雰囲気作りが得意', '親しみやすい', '直感的'],
    tips: ['論理的な説明も時には必要', '感情的になりすぎないで', '客観性も大切に'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { assertive: 0, listener: 0, logical: 0, emotional: 0 };

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
