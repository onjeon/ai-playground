// 思い出の残し方診断
export const questions = [
  {
    id: 1,
    text: '旅行に行った時、どうやって記録を残す？',
    options: [
      { text: 'たくさん写真を撮る', type: 'visual' },
      { text: '日記やブログに書く', type: 'writing' },
      { text: 'お土産やチケットを集める', type: 'collector' },
      { text: '特に残さない、心に刻む', type: 'memory' },
    ],
  },
  {
    id: 2,
    text: '思い出の品についてどう思う？',
    options: [
      { text: '写真アルバムが宝物', type: 'visual' },
      { text: '手紙や日記を大切にしている', type: 'writing' },
      { text: '記念品やグッズを集めている', type: 'collector' },
      { text: '物より体験を重視', type: 'memory' },
    ],
  },
  {
    id: 3,
    text: 'SNSへの投稿頻度は？',
    options: [
      { text: '写真をよく投稿する', type: 'visual' },
      { text: '長文の投稿が多い', type: 'writing' },
      { text: '購入品や戦利品を投稿', type: 'collector' },
      { text: 'あまり投稿しない', type: 'memory' },
    ],
  },
  {
    id: 4,
    text: '子供の頃の思い出はどう残っている？',
    options: [
      { text: '家族写真のアルバム', type: 'visual' },
      { text: '作文や絵日記', type: 'writing' },
      { text: '大切にしているおもちゃ', type: 'collector' },
      { text: '記憶の中に鮮明に', type: 'memory' },
    ],
  },
  {
    id: 5,
    text: '大切な人との思い出をどう残したい？',
    options: [
      { text: 'ツーショット写真をたくさん', type: 'visual' },
      { text: '交換日記やメッセージ', type: 'writing' },
      { text: 'ペアグッズや記念品', type: 'collector' },
      { text: '一緒に過ごした時間が財産', type: 'memory' },
    ],
  },
  {
    id: 6,
    text: 'イベントや記念日の過ごし方は？',
    options: [
      { text: '写真映えするスポットへ', type: 'visual' },
      { text: '手紙やメッセージを書く', type: 'writing' },
      { text: '記念品を購入する', type: 'collector' },
      { text: '特別な体験を重視', type: 'memory' },
    ],
  },
  {
    id: 7,
    text: 'スマホのストレージは何で埋まっている？',
    options: [
      { text: '写真と動画でいっぱい', type: 'visual' },
      { text: 'メモやノートアプリ', type: 'writing' },
      { text: 'コレクションの写真', type: 'collector' },
      { text: 'あまり使っていない', type: 'memory' },
    ],
  },
  {
    id: 8,
    text: '引っ越しの時、捨てられないものは？',
    options: [
      { text: 'プリントした写真', type: 'visual' },
      { text: '手紙や日記', type: 'writing' },
      { text: '記念品やグッズ', type: 'collector' },
      { text: '特にない、身軽が好き', type: 'memory' },
    ],
  },
  {
    id: 9,
    text: '過去を振り返る時、何を見る？',
    options: [
      { text: 'フォトアルバムやカメラロール', type: 'visual' },
      { text: '日記や昔のブログ', type: 'writing' },
      { text: '集めたものを眺める', type: 'collector' },
      { text: '目を閉じて思い出す', type: 'memory' },
    ],
  },
  {
    id: 10,
    text: '思い出を共有する方法は？',
    options: [
      { text: '写真を見せながら話す', type: 'visual' },
      { text: '詳しくエピソードを語る', type: 'writing' },
      { text: '実物を見せて説明', type: 'collector' },
      { text: '感情を込めて話す', type: 'memory' },
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
  tips: string[];
}> = {
  visual: {
    type: 'visual',
    title: 'ビジュアル記録タイプ',
    emoji: '📷🖼️',
    style: '思い出の残し方：視覚型',
    description: 'あなたは写真や動画で思い出を残すタイプです。瞬間を映像として切り取り、後から見返すことで当時の感情を呼び起こします。視覚的な記憶力が優れています。',
    characteristics: ['写真好き', '視覚優位', '瞬間を大切に', 'アルバム作りが好き'],
    tips: ['定期的に写真を整理して', 'プリントして飾るのもおすすめ', '撮りすぎて今を見逃さないで'],
  },
  writing: {
    type: 'writing',
    title: '文章記録タイプ',
    emoji: '📝✍️',
    style: '思い出の残し方：文章型',
    description: 'あなたは言葉で思い出を残すタイプです。日記やブログ、手紙など、文章にすることで経験を深く味わいます。感情や考えを言葉にする力が優れています。',
    characteristics: ['日記を書く習慣', '言葉を大切に', '内省的', '手紙好き'],
    tips: ['書くことで記憶が定着', '感情も一緒に記録して', 'いつか読み返す楽しみ'],
  },
  collector: {
    type: 'collector',
    title: 'コレクター記録タイプ',
    emoji: '🎫📦',
    style: '思い出の残し方：収集型',
    description: 'あなたは物で思い出を残すタイプです。チケット、お土産、記念品など、有形のものを集めることで経験を形にします。コレクションを見るたびに思い出がよみがえります。',
    characteristics: ['コレクター気質', '物を大切にする', '記念品好き', '整理整頓が好き'],
    tips: ['スクラップブックもおすすめ', '厳選して集めると宝物に', '見せる収納で日常に'],
  },
  memory: {
    type: 'memory',
    title: '心に刻むタイプ',
    emoji: '💭💖',
    style: '思い出の残し方：体験型',
    description: 'あなたは物や記録より、体験そのものを大切にするタイプです。その瞬間を全身で感じ、心に深く刻みます。物質的なものに縛られない自由な生き方ができます。',
    characteristics: ['今この瞬間を重視', 'ミニマリスト的', '感受性豊か', '体験を大切に'],
    tips: ['心の記憶も素晴らしい財産', 'たまには形に残すのも', '大切な人と思い出を語り合って'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { visual: 0, writing: 0, collector: 0, memory: 0 };

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
