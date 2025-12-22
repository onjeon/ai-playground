// イベント企画タイプ診断 - あなたのイベント企画スタイルは？
export const questions = [
  {
    id: 1,
    text: '友達の誕生日パーティーを企画するなら？',
    options: [
      { text: 'サプライズで驚かせたい！', type: 'creative' },
      { text: '本人の希望を聞いて完璧に準備', type: 'perfectionist' },
      { text: 'みんなで相談して決める', type: 'collaborative' },
      { text: 'シンプルに集まって楽しめればOK', type: 'casual' },
    ],
  },
  {
    id: 2,
    text: 'イベントの準備期間は？',
    options: [
      { text: '直前にバーッと準備する', type: 'casual' },
      { text: '1週間前からリストを作って準備', type: 'perfectionist' },
      { text: 'アイデアが浮かんだらすぐ動く', type: 'creative' },
      { text: 'みんなと相談しながら少しずつ', type: 'collaborative' },
    ],
  },
  {
    id: 3,
    text: 'イベントで一番大切にしたいことは？',
    options: [
      { text: '「すごい！」と言われる演出', type: 'creative' },
      { text: 'スムーズな進行と段取り', type: 'perfectionist' },
      { text: '参加者全員が楽しめること', type: 'collaborative' },
      { text: '気軽に参加できる雰囲気', type: 'casual' },
    ],
  },
  {
    id: 4,
    text: '予算が限られている時は？',
    options: [
      { text: '手作りやDIYでクリエイティブに', type: 'creative' },
      { text: '優先順位をつけて必要なものに集中', type: 'perfectionist' },
      { text: 'みんなで持ち寄りにする', type: 'collaborative' },
      { text: '最低限でいい、気持ちが大事', type: 'casual' },
    ],
  },
  {
    id: 5,
    text: 'イベント当日、予定通りにいかないことがあったら？',
    options: [
      { text: 'アドリブで面白く乗り切る', type: 'creative' },
      { text: 'バックアッププランを発動', type: 'perfectionist' },
      { text: 'みんなで協力して対応', type: 'collaborative' },
      { text: '「まあいっか」と流す', type: 'casual' },
    ],
  },
  {
    id: 6,
    text: '会場選びで重視するのは？',
    options: [
      { text: '雰囲気や映えるかどうか', type: 'creative' },
      { text: 'アクセス、設備、コスパ', type: 'perfectionist' },
      { text: 'みんなが来やすい場所', type: 'collaborative' },
      { text: 'どこでも楽しめればいい', type: 'casual' },
    ],
  },
  {
    id: 7,
    text: '招待状や告知はどうする？',
    options: [
      { text: 'オリジナルデザインで凝ったものを', type: 'creative' },
      { text: '必要情報を網羅した丁寧なものを', type: 'perfectionist' },
      { text: 'グループLINEでみんなに相談', type: 'collaborative' },
      { text: '口頭やシンプルなメッセージで', type: 'casual' },
    ],
  },
  {
    id: 8,
    text: 'イベントの成功基準は？',
    options: [
      { text: 'SNSで話題になるくらい盛り上がる', type: 'creative' },
      { text: '予定通り完璧に進行できた', type: 'perfectionist' },
      { text: '参加者が「楽しかった」と言ってくれる', type: 'collaborative' },
      { text: '特に問題なく終わればOK', type: 'casual' },
    ],
  },
  {
    id: 9,
    text: 'イベント後の振り返りは？',
    options: [
      { text: '次はもっとすごいことをしたい！', type: 'creative' },
      { text: '反省点を洗い出して次に活かす', type: 'perfectionist' },
      { text: 'みんなの感想を聞いて共有', type: 'collaborative' },
      { text: '終わったらあまり考えない', type: 'casual' },
    ],
  },
  {
    id: 10,
    text: '幹事を頼まれたら？',
    options: [
      { text: '喜んで！企画するの大好き', type: 'creative' },
      { text: '責任を持ってしっかりやる', type: 'perfectionist' },
      { text: 'みんなで分担しよう！と提案', type: 'collaborative' },
      { text: '正直面倒だけど引き受ける', type: 'casual' },
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
  creative: {
    type: 'creative',
    title: 'クリエイティブ演出家タイプ',
    emoji: '🎨',
    percentage: '企画力 90%',
    description: 'サプライズや演出にこだわる、エンターテイナー気質の企画者。「驚き」や「感動」を届けることに喜びを感じます。アイデアが豊富で、普通じゃつまらない！という姿勢。',
    characteristics: ['創造的', 'サプライズ好き', '演出力', 'アイデアマン', '情熱的'],
    advice: '素晴らしい企画力！ただし凝りすぎて準備に追われないよう、時にはシンプルさも大切に。',
  },
  perfectionist: {
    type: 'perfectionist',
    title: '完璧主義プランナータイプ',
    emoji: '📋',
    percentage: '企画力 85%',
    description: '綿密な計画と準備で、完璧なイベントを目指すタイプ。リスト作りや段取りが得意で、当日のスムーズな進行に全力を注ぎます。頼りになる幹事として信頼されています。',
    characteristics: ['計画的', '段取り上手', '責任感', '細部へのこだわり', '信頼される'],
    advice: '素晴らしい準備力！完璧を求めすぎてストレスを溜めないよう、「8割でOK」の心も持って。',
  },
  collaborative: {
    type: 'collaborative',
    title: 'みんなで作る協調タイプ',
    emoji: '🤝',
    percentage: '企画力 70%',
    description: '一人で抱え込まず、みんなで作り上げるイベントを大切にするタイプ。参加者の意見を聞き、全員が楽しめることを第一に考えます。チームワークを重視する民主的な企画者。',
    characteristics: ['協調性', '聞き上手', 'チームワーク', '民主的', '参加者目線'],
    advice: 'みんなを巻き込む力は素晴らしい！時にはリーダーシップを発揮して、方向性を示すのも大切。',
  },
  casual: {
    type: 'casual',
    title: 'ゆるふわカジュアルタイプ',
    emoji: '☕',
    percentage: '企画力 50%',
    description: '肩の力を抜いた、気軽なイベントを好むタイプ。「集まって楽しければOK」という姿勢で、過度な準備やプレッシャーは苦手。その気楽さが逆に参加しやすい雰囲気を作ります。',
    characteristics: ['気楽', 'ストレスフリー', '自然体', '柔軟', 'ゆるい雰囲気'],
    advice: 'その気軽さは参加者にとって心地よい！たまには少し凝った企画にチャレンジしてみても面白いかも。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { creative: 0, perfectionist: 0, collaborative: 0, casual: 0 };

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
