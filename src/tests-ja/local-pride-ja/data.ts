// 地元愛診断
export const questions = [
  {
    id: 1,
    text: '地元について聞かれたら？',
    options: [
      { text: '熱く語ってしまう', type: 'passionate' },
      { text: '良いところを紹介する', type: 'proud' },
      { text: '普通に答える', type: 'neutral' },
      { text: 'あまり話題にしない', type: 'distant' },
    ],
  },
  {
    id: 2,
    text: '地元の名産品について？',
    options: [
      { text: '全部知っていて自慢', type: 'passionate' },
      { text: '主なものは把握', type: 'proud' },
      { text: 'いくつかは知っている', type: 'neutral' },
      { text: 'あまり詳しくない', type: 'distant' },
    ],
  },
  {
    id: 3,
    text: '地元のイベントやお祭りには？',
    options: [
      { text: '毎年参加・運営側', type: 'passionate' },
      { text: '時々参加する', type: 'proud' },
      { text: 'たまに行く程度', type: 'neutral' },
      { text: 'ほとんど行かない', type: 'distant' },
    ],
  },
  {
    id: 4,
    text: '地元を離れることになったら？',
    options: [
      { text: '絶対に戻ってくる', type: 'passionate' },
      { text: 'いつか戻りたい', type: 'proud' },
      { text: '状況による', type: 'neutral' },
      { text: '新しい土地も楽しみ', type: 'distant' },
    ],
  },
  {
    id: 5,
    text: '地元の方言について？',
    options: [
      { text: '誇りを持って使う', type: 'passionate' },
      { text: '地元では使う', type: 'proud' },
      { text: '少し恥ずかしい', type: 'neutral' },
      { text: 'あまり使わない', type: 'distant' },
    ],
  },
  {
    id: 6,
    text: '地元のスポーツチームは？',
    options: [
      { text: '熱狂的に応援', type: 'passionate' },
      { text: '応援している', type: 'proud' },
      { text: '勝つと嬉しい程度', type: 'neutral' },
      { text: '特に興味なし', type: 'distant' },
    ],
  },
  {
    id: 7,
    text: '他県の人に地元を案内するなら？',
    options: [
      { text: '最高のコースを用意', type: 'passionate' },
      { text: '定番スポットを案内', type: 'proud' },
      { text: 'リクエストに応じる', type: 'neutral' },
      { text: 'あまり詳しくない', type: 'distant' },
    ],
  },
  {
    id: 8,
    text: '地元のニュースは？',
    options: [
      { text: '毎日チェック', type: 'passionate' },
      { text: '大きなニュースは見る', type: 'proud' },
      { text: 'たまに見る', type: 'neutral' },
      { text: 'あまり見ない', type: 'distant' },
    ],
  },
  {
    id: 9,
    text: '地元の将来について？',
    options: [
      { text: '活性化に貢献したい', type: 'passionate' },
      { text: '発展してほしい', type: 'proud' },
      { text: '特に考えない', type: 'neutral' },
      { text: '自分の生活が優先', type: 'distant' },
    ],
  },
  {
    id: 10,
    text: '「地元が一番」と思う？',
    options: [
      { text: '絶対にそう思う！', type: 'passionate' },
      { text: 'やっぱり地元がいい', type: 'proud' },
      { text: '他もいいところある', type: 'neutral' },
      { text: '比較は難しい', type: 'distant' },
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
  localAction: string;
}> = {
  passionate: {
    type: 'passionate',
    title: '地元愛MAX',
    emoji: '🔥',
    percentage: '地元愛度 100%',
    description: '地元を心から愛し、誇りに思っているあなた。地元のことなら何でも語れ、いつか恩返ししたいと思っています。地域の宝です！',
    characteristics: ['郷土愛', '誇り', '貢献意識', '地域活性化', 'アンバサダー'],
    localAction: '地元の魅力を発信して地域貢献を！',
  },
  proud: {
    type: 'proud',
    title: '地元愛高め',
    emoji: '💙',
    percentage: '地元愛度 75%',
    description: '地元の良さを理解し、適度に愛着を持っているあなた。離れても地元のことを忘れず、帰省を楽しみにしています。',
    characteristics: ['愛着', '帰省好き', '地元自慢', 'バランス', '思い出'],
    localAction: 'たまには地元の良さを再発見する旅を！',
  },
  neutral: {
    type: 'neutral',
    title: '地元愛普通',
    emoji: '😌',
    percentage: '地元愛度 50%',
    description: '地元に対して普通の感情を持っているあなた。特別に愛着があるわけではないけど、否定もしない。自然体で地元と付き合っています。',
    characteristics: ['普通', '自然体', '客観的', 'フラット', '柔軟'],
    localAction: '地元の隠れた魅力を探してみては？',
  },
  distant: {
    type: 'distant',
    title: '地元愛控えめ',
    emoji: '🌍',
    percentage: '地元愛度 25%',
    description: '地元よりも広い世界に目を向けているあなた。どこにいても自分らしく生きることを大切にしています。コスモポリタンタイプ。',
    characteristics: ['グローバル', '独立心', '新天地', '冒険心', '自由'],
    localAction: '新しい土地でも地元の良さを思い出してね',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { passionate: 0, proud: 0, neutral: 0, distant: 0 };

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
