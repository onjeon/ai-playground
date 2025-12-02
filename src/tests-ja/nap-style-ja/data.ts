// 昼寝スタイル診断
export const questions = [
  {
    id: 1,
    text: '昼寝の頻度は？',
    options: [
      { text: 'ほぼ毎日する', type: 'nap_lover' },
      { text: '週に数回', type: 'strategic' },
      { text: 'たまにする', type: 'occasional' },
      { text: 'ほとんどしない', type: 'non_napper' },
    ],
  },
  {
    id: 2,
    text: '昼寝の長さは？',
    options: [
      { text: '1時間以上ガッツリ', type: 'nap_lover' },
      { text: '20〜30分の適度な昼寝', type: 'strategic' },
      { text: '10〜15分の短い仮眠', type: 'occasional' },
      { text: '昼寝すると逆に疲れる', type: 'non_napper' },
    ],
  },
  {
    id: 3,
    text: '昼寝する場所は？',
    options: [
      { text: 'ベッドでしっかり', type: 'nap_lover' },
      { text: 'ソファやリクライニングチェア', type: 'strategic' },
      { text: 'デスクで突っ伏して', type: 'occasional' },
      { text: '場所がないからしない', type: 'non_napper' },
    ],
  },
  {
    id: 4,
    text: '昼寝後の気分は？',
    options: [
      { text: 'スッキリ最高！', type: 'nap_lover' },
      { text: 'リフレッシュできる', type: 'strategic' },
      { text: 'まあまあスッキリ', type: 'occasional' },
      { text: 'ぼんやりして逆効果', type: 'non_napper' },
    ],
  },
  {
    id: 5,
    text: '午後の眠気は？',
    options: [
      { text: '毎日眠くなる、昼寝必須', type: 'nap_lover' },
      { text: '眠くなることがある', type: 'strategic' },
      { text: 'たまに眠くなる', type: 'occasional' },
      { text: 'あまり眠くならない', type: 'non_napper' },
    ],
  },
  {
    id: 6,
    text: '昼寝と夜の睡眠の関係は？',
    options: [
      { text: '昼寝しても夜も眠れる', type: 'nap_lover' },
      { text: '短い昼寝なら大丈夫', type: 'strategic' },
      { text: '昼寝すると夜眠れなくなることも', type: 'occasional' },
      { text: '夜の睡眠に影響するからしない', type: 'non_napper' },
    ],
  },
  {
    id: 7,
    text: '休日の昼寝は？',
    options: [
      { text: '至福の時間、たっぷり寝る', type: 'nap_lover' },
      { text: '昼食後に少し', type: 'strategic' },
      { text: '気が向いたら', type: 'occasional' },
      { text: '休日でもしない', type: 'non_napper' },
    ],
  },
  {
    id: 8,
    text: 'カフェインナップ（コーヒー後の昼寝）は？',
    options: [
      { text: '知っているし実践している', type: 'strategic' },
      { text: '聞いたことある、興味がある', type: 'occasional' },
      { text: '昼寝にカフェインは関係ない', type: 'nap_lover' },
      { text: '昼寝自体しない', type: 'non_napper' },
    ],
  },
  {
    id: 9,
    text: '仕事中の昼寝について',
    options: [
      { text: '仕事効率のために必要', type: 'nap_lover' },
      { text: 'パワーナップは効果的', type: 'strategic' },
      { text: 'できる環境なら', type: 'occasional' },
      { text: '仕事中は寝ない', type: 'non_napper' },
    ],
  },
  {
    id: 10,
    text: '昼寝の理想的なタイミングは？',
    options: [
      { text: '眠くなったらいつでも', type: 'nap_lover' },
      { text: '午後1〜3時頃', type: 'strategic' },
      { text: '特に意識していない', type: 'occasional' },
      { text: '昼寝の必要を感じない', type: 'non_napper' },
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
  nap_lover: {
    type: 'nap_lover',
    title: '昼寝愛好家',
    emoji: '😴💕',
    style: '昼寝度：★★★★★',
    description: '昼寝が大好きで、日々の生活に欠かせないタイプ。長めの昼寝でしっかりリフレッシュし、午後からも元気に活動できます。シエスタ文化を愛するタイプ！',
    characteristics: ['昼寝が日課', '長めに寝る', '昼寝後スッキリ', '睡眠欲が強い'],
    tips: ['夜の睡眠に影響しないか確認して', '昼寝の時間を決めると良いかも', '昼寝環境を整えて'],
  },
  strategic: {
    type: 'strategic',
    title: '戦略的パワーナッパー',
    emoji: '⚡😌',
    style: '昼寝度：★★★★☆',
    description: '科学的に効果的な昼寝を実践するタイプ。20〜30分の適度な昼寝で、午後のパフォーマンスを最大化。効率を重視する賢い昼寝スタイル！',
    characteristics: ['適度な長さの昼寝', 'タイミングを意識', '効率重視', 'パワーナップ実践者'],
    tips: ['今のスタイルは理想的', 'カフェインナップも試してみて', 'アイマスクや耳栓も効果的'],
  },
  occasional: {
    type: 'occasional',
    title: 'たまに昼寝派',
    emoji: '🌤️💤',
    style: '昼寝度：★★★☆☆',
    description: '必要に応じて昼寝するタイプ。疲れた時や眠い時には短い仮眠を取りますが、習慣化はしていません。バランスの取れた昼寝スタイル。',
    characteristics: ['気分で昼寝する', '短めの仮眠', '必要な時だけ', '柔軟なスタイル'],
    tips: ['眠気を感じたら短い仮眠を', '午後3時以降は避けて', '昼寝の効果を試してみて'],
  },
  non_napper: {
    type: 'non_napper',
    title: '昼寝しないタイプ',
    emoji: '☀️💪',
    style: '昼寝度：★★☆☆☆',
    description: '昼寝をほとんどしないタイプ。夜の睡眠が十分で、日中眠くならないか、昼寝が合わない体質かもしれません。それでOK！',
    characteristics: ['昼寝の必要を感じない', '夜の睡眠で十分', '日中眠くならない', '昼寝が苦手'],
    tips: ['夜の睡眠を大切に', '無理に昼寝する必要はない', '疲れた時は短い休憩を'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { nap_lover: 0, strategic: 0, occasional: 0, non_napper: 0 };

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
