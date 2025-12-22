// 瞑想タイプ診断
export const questions = [
  {
    id: 1,
    text: 'リラックスしたい時、どんな環境が好き？',
    options: [
      { text: '静かで何もない空間', type: 'zen' },
      { text: '自然の音が聞こえる場所', type: 'nature' },
      { text: '心地よい音楽が流れる場所', type: 'guided' },
      { text: '体を動かせる場所', type: 'active' },
    ],
  },
  {
    id: 2,
    text: '心を落ち着かせる方法として好みなのは？',
    options: [
      { text: '呼吸に集中する', type: 'zen' },
      { text: '自然の中を散歩する', type: 'nature' },
      { text: '誘導音声を聴く', type: 'guided' },
      { text: 'ヨガやストレッチをする', type: 'active' },
    ],
  },
  {
    id: 3,
    text: '集中力を高めたい時は？',
    options: [
      { text: '目を閉じて無になる', type: 'zen' },
      { text: '外の景色を眺める', type: 'nature' },
      { text: '集中力アップの音楽を聴く', type: 'guided' },
      { text: '軽い運動をしてから', type: 'active' },
    ],
  },
  {
    id: 4,
    text: 'ストレスを感じた時の対処法は？',
    options: [
      { text: '一人で静かに過ごす', type: 'zen' },
      { text: '自然の中で深呼吸', type: 'nature' },
      { text: 'リラックス音楽を聴く', type: 'guided' },
      { text: '運動で発散する', type: 'active' },
    ],
  },
  {
    id: 5,
    text: '朝の理想の過ごし方は？',
    options: [
      { text: '静かに座って心を整える', type: 'zen' },
      { text: '朝日を浴びながら深呼吸', type: 'nature' },
      { text: '瞑想アプリで朝瞑想', type: 'guided' },
      { text: '朝ヨガで体を目覚めさせる', type: 'active' },
    ],
  },
  {
    id: 6,
    text: '瞑想に求めるものは？',
    options: [
      { text: '心の静寂と悟り', type: 'zen' },
      { text: '自然とのつながり', type: 'nature' },
      { text: 'わかりやすいガイダンス', type: 'guided' },
      { text: '心身のバランス', type: 'active' },
    ],
  },
  {
    id: 7,
    text: '理想の瞑想の長さは？',
    options: [
      { text: '30分以上じっくり', type: 'zen' },
      { text: '時間を決めず自然に', type: 'nature' },
      { text: '10〜15分程度', type: 'guided' },
      { text: '動きと組み合わせて', type: 'active' },
    ],
  },
  {
    id: 8,
    text: '瞑想中に浮かぶ雑念への対処は？',
    options: [
      { text: '観察して手放す', type: 'zen' },
      { text: '自然の音に意識を向ける', type: 'nature' },
      { text: 'ガイドの声に戻る', type: 'guided' },
      { text: '体の感覚に集中する', type: 'active' },
    ],
  },
  {
    id: 9,
    text: '瞑想に興味を持ったきっかけは？',
    options: [
      { text: '禅や東洋思想への関心', type: 'zen' },
      { text: '自然や宇宙とのつながり', type: 'nature' },
      { text: 'マインドフルネスのブーム', type: 'guided' },
      { text: 'ヨガや運動から', type: 'active' },
    ],
  },
  {
    id: 10,
    text: '瞑想で得たい効果は？',
    options: [
      { text: '内なる平和と洞察', type: 'zen' },
      { text: '地球や生命との一体感', type: 'nature' },
      { text: 'ストレス解消と集中力', type: 'guided' },
      { text: '柔軟性と活力', type: 'active' },
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
  zen: {
    type: 'zen',
    title: '禅・静寂タイプ',
    emoji: '🧘‍♂️🪷',
    style: '瞑想タイプ：禅型',
    description: 'あなたは伝統的な禅瞑想に向いているタイプです。静かな環境で呼吸に集中し、無の境地を求めます。深い内省と精神的な成長を大切にする、本格派の瞑想者です。',
    characteristics: ['静寂を愛する', '深い内省', '伝統的なアプローチ', '精神的成長を重視'],
    tips: ['坐禅や呼吸瞑想がおすすめ', '静かな場所を確保して', '毎日少しずつ続けてみて'],
  },
  nature: {
    type: 'nature',
    title: '自然瞑想タイプ',
    emoji: '🌳🍃',
    style: '瞑想タイプ：自然志向型',
    description: 'あなたは自然の中で心を整えるタイプです。木々のざわめきや川のせせらぎを感じながら、大きな存在とのつながりを感じます。アウトドアでの瞑想が心に響きます。',
    characteristics: ['自然とのつながり', '五感を大切に', '開放的な空間が好き', 'エコロジカルな視点'],
    tips: ['森林浴や庭での瞑想を', '自然音を取り入れて', '季節の変化を感じながら'],
  },
  guided: {
    type: 'guided',
    title: 'ガイド瞑想タイプ',
    emoji: '🎧🧘',
    style: '瞑想タイプ：ガイド型',
    description: 'あなたは音声ガイドやアプリを活用した瞑想に向いているタイプです。わかりやすい指示に従って瞑想することで、効果的にリラックスできます。現代的なマインドフルネスの実践者です。',
    characteristics: ['わかりやすさを重視', 'テクノロジー活用', '効率的なアプローチ', '初心者にも優しい'],
    tips: ['瞑想アプリを活用して', '様々なプログラムを試して', '習慣化しやすいタイプ'],
  },
  active: {
    type: 'active',
    title: 'アクティブ瞑想タイプ',
    emoji: '🧘‍♀️💪',
    style: '瞑想タイプ：動的型',
    description: 'あなたは体を動かしながら瞑想するタイプです。ヨガ、太極拳、歩行瞑想など、動きの中で心を整えます。じっとしているより、体を使った瞑想が心地よく感じます。',
    characteristics: ['動きながら瞑想', '心身のバランス', '活動的なアプローチ', '体の感覚を重視'],
    tips: ['ヨガや太極拳がおすすめ', '歩行瞑想も試して', '運動後の静寂も味わって'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { zen: 0, nature: 0, guided: 0, active: 0 };

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
