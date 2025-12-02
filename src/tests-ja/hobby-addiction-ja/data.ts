// 趣味への没頭度診断 (취미 몰입도 진단)
export const questions = [
  {
    id: 1,
    text: '趣味にかける時間は？',
    options: [
      { text: '毎日欠かさず、最優先', type: 'obsessed' },
      { text: '週末や空いた時間に', type: 'dedicated' },
      { text: '気が向いた時に', type: 'casual' },
      { text: '最近あまり時間取れてない', type: 'busy' },
    ],
  },
  {
    id: 2,
    text: '趣味への出費は？',
    options: [
      { text: '惜しみなく投資、収入のかなりを', type: 'obsessed' },
      { text: 'ある程度は使う、予算内で', type: 'dedicated' },
      { text: '必要最低限', type: 'casual' },
      { text: 'お金のかからない趣味が好き', type: 'busy' },
    ],
  },
  {
    id: 3,
    text: '趣味の話になると？',
    options: [
      { text: '止まらない、熱く語る', type: 'obsessed' },
      { text: '楽しそうに話す', type: 'dedicated' },
      { text: '聞かれたら話す程度', type: 'casual' },
      { text: 'あまり話題にしない', type: 'busy' },
    ],
  },
  {
    id: 4,
    text: '趣味のための予定は？',
    options: [
      { text: '他の予定より優先', type: 'obsessed' },
      { text: 'なるべく確保する', type: 'dedicated' },
      { text: '空いたら入れる', type: 'casual' },
      { text: '後回しになりがち', type: 'busy' },
    ],
  },
  {
    id: 5,
    text: '趣味に関する知識は？',
    options: [
      { text: 'プロ並み、誰にも負けない', type: 'obsessed' },
      { text: 'そこそこ詳しい', type: 'dedicated' },
      { text: '基本的なことは知ってる', type: 'casual' },
      { text: '詳しくなりたいけど時間が…', type: 'busy' },
    ],
  },
  {
    id: 6,
    text: '趣味仲間について',
    options: [
      { text: 'コミュニティに所属、オフ会も参加', type: 'obsessed' },
      { text: '同じ趣味の友達がいる', type: 'dedicated' },
      { text: '一人で楽しむ派', type: 'casual' },
      { text: '仲間がいたらいいな', type: 'busy' },
    ],
  },
  {
    id: 7,
    text: '趣味を始めたきっかけは？',
    options: [
      { text: '運命的な出会い、人生を変えた', type: 'obsessed' },
      { text: '興味を持って始めてハマった', type: 'dedicated' },
      { text: 'なんとなく、軽い気持ちで', type: 'casual' },
      { text: '誰かに勧められて', type: 'busy' },
    ],
  },
  {
    id: 8,
    text: '趣味の道具やグッズは？',
    options: [
      { text: '最高級品を揃える', type: 'obsessed' },
      { text: 'こだわりのものを選ぶ', type: 'dedicated' },
      { text: '使えればOK', type: 'casual' },
      { text: '特に持ってない', type: 'busy' },
    ],
  },
  {
    id: 9,
    text: '趣味がなかったら？',
    options: [
      { text: '人生の意味を見失う', type: 'obsessed' },
      { text: '物足りなく感じる', type: 'dedicated' },
      { text: '別のことをするだけ', type: 'casual' },
      { text: '今でもそこまで依存してない', type: 'busy' },
    ],
  },
  {
    id: 10,
    text: '趣味との関係を一言で',
    options: [
      { text: '生きがい、アイデンティティ', type: 'obsessed' },
      { text: '大切な楽しみ、リフレッシュ', type: 'dedicated' },
      { text: '暇つぶし、気分転換', type: 'casual' },
      { text: 'もっと時間を作りたい', type: 'busy' },
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
  obsessed: {
    type: 'obsessed',
    title: '趣味マニアタイプ',
    emoji: '🔥',
    percentage: '没頭度 100%',
    description: '趣味が人生の中心！時間もお金も惜しみなく投資する情熱家。その道のプロ並みの知識と技術を持ち、趣味を通じた仲間も多い。趣味がアイデンティティの一部。',
    characteristics: ['情熱的', 'プロ級', 'コミュニティ重視', '投資惜しまない', '知識豊富'],
    advice: '素晴らしい情熱！でも、趣味以外の人間関係や健康も大切にして。',
  },
  dedicated: {
    type: 'dedicated',
    title: 'バランス趣味人タイプ',
    emoji: '⭐',
    percentage: '没頭度 75%',
    description: '仕事や生活とのバランスを取りながら、しっかり趣味も楽しむ。程よくこだわり、程よく投資。趣味がリフレッシュになり、生活に彩りを与えている。',
    characteristics: ['バランス型', '程よいこだわり', 'リフレッシュ上手', '計画的', '充実'],
    advice: '理想的なバランス！趣味も生活も両立できているのは素晴らしい。',
  },
  casual: {
    type: 'casual',
    title: 'ライト趣味タイプ',
    emoji: '☘️',
    percentage: '没頭度 40%',
    description: '気軽に楽しむカジュアル派。深くはまらず、いろんな趣味をつまみ食い。こだわりすぎないからこそ、気楽に楽しめる。趣味は暇つぶし感覚。',
    characteristics: ['気軽', 'マルチ趣味', 'こだわらない', '気楽', 'フットワーク軽い'],
    advice: '気軽に楽しむのも素敵！一つ深掘りすると、新しい世界が見えるかも。',
  },
  busy: {
    type: 'busy',
    title: '趣味難民タイプ',
    emoji: '💼',
    percentage: '趣味時間 20%',
    description: '趣味をもっと楽しみたいけど、時間や余裕がない…。仕事や生活に追われて、趣味が後回しになりがち。本当は没頭したい気持ちはあるはず。',
    characteristics: ['多忙', '趣味不足', '時間なし', '潜在的興味あり', '優先順位悩み中'],
    advice: '短い時間でも趣味の時間を作ってみて。10分でもリフレッシュになりますよ。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { obsessed: 0, dedicated: 0, casual: 0, busy: 0 };

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
