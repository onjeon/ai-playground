// 第一印象診断 (첫인상 진단)
export const questions = [
  {
    id: 1,
    text: '初対面の人と話すとき、あなたは？',
    options: [
      { text: '自分から積極的に話しかける', type: 'friendly' },
      { text: '相手の話をじっくり聞く', type: 'calm' },
      { text: '面白い話で場を盛り上げる', type: 'funny' },
      { text: '様子を見ながら慎重に', type: 'mysterious' },
    ],
  },
  {
    id: 2,
    text: '普段の表情は？',
    options: [
      { text: 'よく笑う、明るい', type: 'friendly' },
      { text: '穏やか、落ち着いている', type: 'calm' },
      { text: 'ニヤニヤ、何か企んでそう', type: 'funny' },
      { text: 'クール、何を考えてるかわからない', type: 'mysterious' },
    ],
  },
  {
    id: 3,
    text: '服装のスタイルは？',
    options: [
      { text: '明るい色、カジュアル', type: 'friendly' },
      { text: 'シンプル、清潔感重視', type: 'calm' },
      { text: '個性的、ユニーク', type: 'funny' },
      { text: 'ダーク系、モード系', type: 'mysterious' },
    ],
  },
  {
    id: 4,
    text: 'グループ内での立ち位置は？',
    options: [
      { text: 'ムードメーカー', type: 'friendly' },
      { text: '聞き役、相談役', type: 'calm' },
      { text: 'いじられキャラ or ツッコミ', type: 'funny' },
      { text: '一歩引いた位置', type: 'mysterious' },
    ],
  },
  {
    id: 5,
    text: '初対面で言われがちなことは？',
    options: [
      { text: '「話しやすい」「親しみやすい」', type: 'friendly' },
      { text: '「落ち着いてる」「大人っぽい」', type: 'calm' },
      { text: '「面白そう」「変わってる」', type: 'funny' },
      { text: '「クール」「近寄りがたい」', type: 'mysterious' },
    ],
  },
  {
    id: 6,
    text: 'パーティーや飲み会では？',
    options: [
      { text: 'いろんな人と話して回る', type: 'friendly' },
      { text: '落ち着いた場所で深い話', type: 'calm' },
      { text: '一発芸やモノマネで盛り上げる', type: 'funny' },
      { text: '隅で観察してる', type: 'mysterious' },
    ],
  },
  {
    id: 7,
    text: '話し方の特徴は？',
    options: [
      { text: 'テンション高め、リアクション大', type: 'friendly' },
      { text: 'ゆっくり、丁寧', type: 'calm' },
      { text: 'ボケやツッコミが入る', type: 'funny' },
      { text: '言葉少なめ、核心をつく', type: 'mysterious' },
    ],
  },
  {
    id: 8,
    text: 'LINEやメッセージの雰囲気は？',
    options: [
      { text: 'スタンプ多め、絵文字たくさん', type: 'friendly' },
      { text: '丁寧で分かりやすい文章', type: 'calm' },
      { text: '独特のセンス、笑える内容', type: 'funny' },
      { text: '短め、シンプル', type: 'mysterious' },
    ],
  },
  {
    id: 9,
    text: '初対面の相手に求めることは？',
    options: [
      { text: '楽しく話せること', type: 'friendly' },
      { text: '誠実さ、信頼感', type: 'calm' },
      { text: 'ノリが合うこと', type: 'funny' },
      { text: '表面的じゃない深さ', type: 'mysterious' },
    ],
  },
  {
    id: 10,
    text: '自分の第一印象はどうだと思う？',
    options: [
      { text: '明るくて親しみやすい', type: 'friendly' },
      { text: '落ち着いていて信頼できそう', type: 'calm' },
      { text: '面白くて個性的', type: 'funny' },
      { text: 'ミステリアスで読めない', type: 'mysterious' },
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
  friendly: {
    type: 'friendly',
    title: '太陽のような親しみやすさ',
    emoji: '☀️',
    percentage: '親しみやすさ 100%',
    description: '初対面でも「話しやすい！」と言われるあなた。明るい笑顔とオープンな雰囲気で、誰とでもすぐに打ち解けられます。人を惹きつける魅力の持ち主。',
    characteristics: ['明るい', 'オープン', '社交的', '笑顔が素敵', 'ムードメーカー'],
    advice: 'その明るさは最高の武器！でも、たまには聞き役に回ると相手も嬉しいかも。',
  },
  calm: {
    type: 'calm',
    title: '信頼感のある落ち着きオーラ',
    emoji: '🌊',
    percentage: '信頼感 95%',
    description: '落ち着いた雰囲気で、初対面でも安心感を与えるあなた。大人っぽく知的な印象で、「この人なら信頼できそう」と思われます。聞き上手で頼りにされるタイプ。',
    characteristics: ['落ち着き', '知的', '信頼感', '聞き上手', '大人っぽい'],
    advice: 'その安定感は魅力的！時には自分から話しかけてみると、意外な出会いがあるかも。',
  },
  funny: {
    type: 'funny',
    title: '愛されキャラの個性派',
    emoji: '😂',
    percentage: 'エンタメ性 98%',
    description: '「あの人面白い！」と一発で覚えられるユニークなあなた。独特のセンスと笑いで場を盛り上げる、愛されキャラ。初対面でも距離を縮めるのが得意。',
    characteristics: ['面白い', '個性的', '記憶に残る', 'センス抜群', 'エンターテイナー'],
    advice: '最高のエンターテイナー！真剣な一面を見せると、さらにギャップで魅力アップ。',
  },
  mysterious: {
    type: 'mysterious',
    title: 'ミステリアスな魅力',
    emoji: '🌙',
    percentage: 'ミステリアス度 90%',
    description: '「あの人、何考えてるんだろう？」と興味を引くミステリアスなあなた。クールで読めない雰囲気が、かえって人を惹きつけます。知れば知るほど魅力的なタイプ。',
    characteristics: ['クール', 'ミステリアス', '独特の存在感', '深みがある', '興味を引く'],
    advice: 'そのミステリアスさは武器！でも、たまには笑顔を見せると意外な反応が返ってくるかも。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { friendly: 0, calm: 0, funny: 0, mysterious: 0 };

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
