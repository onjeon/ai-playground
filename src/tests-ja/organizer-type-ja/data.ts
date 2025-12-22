// 整理整頓タイプ診断
export const questions = [
  {
    id: 1,
    text: 'デスクの上の状態は？',
    options: [
      { text: '常にきれいに整理されている', type: 'perfectionist' },
      { text: '定期的に整理している', type: 'practical' },
      { text: '使いやすければOK', type: 'functional' },
      { text: '散らかっているけど場所は把握', type: 'creative' },
    ],
  },
  {
    id: 2,
    text: 'クローゼットの整理方法は？',
    options: [
      { text: '色別・種類別に完璧に分類', type: 'perfectionist' },
      { text: '季節や用途で分けている', type: 'practical' },
      { text: '取り出しやすければOK', type: 'functional' },
      { text: 'あまり分類していない', type: 'creative' },
    ],
  },
  {
    id: 3,
    text: 'スマホのアプリの整理は？',
    options: [
      { text: 'フォルダ分け完璧、ホーム画面も美しく', type: 'perfectionist' },
      { text: 'よく使うものは整理している', type: 'practical' },
      { text: '探せれば問題ない', type: 'functional' },
      { text: 'そのまま放置', type: 'creative' },
    ],
  },
  {
    id: 4,
    text: '引っ越しの荷造りはどうする？',
    options: [
      { text: '計画的に、ラベルを貼って完璧に', type: 'perfectionist' },
      { text: 'カテゴリごとに分けて梱包', type: 'practical' },
      { text: '必要なものだけまとめる', type: 'functional' },
      { text: 'とりあえず詰め込む', type: 'creative' },
    ],
  },
  {
    id: 5,
    text: '書類や資料の管理方法は？',
    options: [
      { text: 'ファイリングして完璧に分類', type: 'perfectionist' },
      { text: '重要なものは整理している', type: 'practical' },
      { text: '必要な時に見つかればOK', type: 'functional' },
      { text: '山積みだが自分はわかる', type: 'creative' },
    ],
  },
  {
    id: 6,
    text: '物を捨てることについては？',
    options: [
      { text: '定期的に断捨離、不要なものは即処分', type: 'perfectionist' },
      { text: '使わなくなったら処分', type: 'practical' },
      { text: '壊れたら捨てる', type: 'functional' },
      { text: 'もったいなくて捨てられない', type: 'creative' },
    ],
  },
  {
    id: 7,
    text: 'キッチンの調味料の並べ方は？',
    options: [
      { text: '同じ容器に詰め替え、ラベル付き', type: 'perfectionist' },
      { text: '使う頻度で配置', type: 'practical' },
      { text: '手に取りやすければOK', type: 'functional' },
      { text: '特に決まっていない', type: 'creative' },
    ],
  },
  {
    id: 8,
    text: 'パソコンのデスクトップは？',
    options: [
      { text: 'アイコンは最小限、壁紙が見える', type: 'perfectionist' },
      { text: 'フォルダで整理している', type: 'practical' },
      { text: '多少散らかっているが把握している', type: 'functional' },
      { text: 'ファイルでいっぱい', type: 'creative' },
    ],
  },
  {
    id: 9,
    text: '収納グッズについての考えは？',
    options: [
      { text: '統一感のあるもので揃えたい', type: 'perfectionist' },
      { text: '機能的なものを選ぶ', type: 'practical' },
      { text: '必要な分だけあればいい', type: 'functional' },
      { text: 'あまり使わない', type: 'creative' },
    ],
  },
  {
    id: 10,
    text: '整理整頓についてどう思う？',
    options: [
      { text: '整理された空間でないと落ち着かない', type: 'perfectionist' },
      { text: '効率のために必要', type: 'practical' },
      { text: '必要最低限できていればOK', type: 'functional' },
      { text: '散らかっていても創造性が大事', type: 'creative' },
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
  perfectionist: {
    type: 'perfectionist',
    title: '完璧整理タイプ',
    emoji: '✨📦',
    style: '整理整頓タイプ：完璧主義型',
    description: 'あなたは整理整頓を完璧に行うタイプです。すべてに定位置があり、美しく機能的な空間を維持します。その几帳面さは仕事にも良い影響を与えています。',
    characteristics: ['完璧主義', '几帳面', '美しさと機能性の両立', '計画的'],
    tips: ['整理力は大きな強み', '完璧を求めすぎないで', '時には「良い加減」も'],
  },
  practical: {
    type: 'practical',
    title: '実用整理タイプ',
    emoji: '🗂️✅',
    style: '整理整頓タイプ：実用型',
    description: 'あなたは実用性を重視して整理するタイプです。見た目より機能を優先し、効率的に物を管理します。必要なものがすぐ見つかる、バランスの取れた整理スタイルです。',
    characteristics: ['実用重視', '効率的', 'バランスが良い', '合理的'],
    tips: ['理想的な整理スタイル', '定期的な見直しを続けて', '効率をさらに追求しても'],
  },
  functional: {
    type: 'functional',
    title: '最低限整理タイプ',
    emoji: '📁👍',
    style: '整理整頓タイプ：機能重視型',
    description: 'あなたは必要最低限の整理で済ませるタイプです。完璧な整理より、実際に使えることを優先します。効率的で、整理に時間をかけすぎない合理的なスタイルです。',
    characteristics: ['必要最低限', '時間効率重視', '合理的', 'ストレスフリー'],
    tips: ['その効率性は一つの才能', '少しの整理で快適度UP', '重要なものだけ管理して'],
  },
  creative: {
    type: 'creative',
    title: 'クリエイティブ散らかしタイプ',
    emoji: '🎨🌀',
    style: '整理整頓タイプ：創造型',
    description: 'あなたは整理整頓より創造性を優先するタイプです。一見散らかって見えても、自分なりの秩序があります。アイデアや発想を重視する、アーティスト気質な面があります。',
    characteristics: ['創造性重視', '独自の秩序', 'アーティスト気質', '自由な発想'],
    tips: ['創造性は大きな強み', '大事なものの場所だけは把握を', 'たまには整理で気分転換'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { perfectionist: 0, practical: 0, functional: 0, creative: 0 };

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
