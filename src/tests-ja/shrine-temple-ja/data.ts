// 神社仏閣タイプ診断
export const questions = [
  {
    id: 1,
    text: '神社とお寺、どちらに惹かれる？',
    options: [
      { text: '鳥居がある神社', type: 'shrine' },
      { text: '仏像があるお寺', type: 'temple' },
      { text: '両方同じくらい', type: 'balanced' },
      { text: 'あまり行かない', type: 'casual' },
    ],
  },
  {
    id: 2,
    text: '参拝する時の気持ちは？',
    options: [
      { text: '清らかな気持ちで祈る', type: 'shrine' },
      { text: '静かに心を落ち着ける', type: 'temple' },
      { text: '感謝と願いを込める', type: 'balanced' },
      { text: '観光気分で楽しむ', type: 'casual' },
    ],
  },
  {
    id: 3,
    text: 'お守りやお札について？',
    options: [
      { text: '必ず買って大切にする', type: 'shrine' },
      { text: '御朱印を集めている', type: 'temple' },
      { text: 'ご縁があれば買う', type: 'balanced' },
      { text: '記念に買う程度', type: 'casual' },
    ],
  },
  {
    id: 4,
    text: '好きな雰囲気は？',
    options: [
      { text: '凛とした空気感', type: 'shrine' },
      { text: 'お香の香りと静寂', type: 'temple' },
      { text: '自然に囲まれた場所', type: 'balanced' },
      { text: '観光客で賑わう場所', type: 'casual' },
    ],
  },
  {
    id: 5,
    text: 'お正月の初詣は？',
    options: [
      { text: '地元の神社に行く', type: 'shrine' },
      { text: '除夜の鐘を聞きにお寺へ', type: 'temple' },
      { text: '神社とお寺両方行く', type: 'balanced' },
      { text: '混雑を避けて後日', type: 'casual' },
    ],
  },
  {
    id: 6,
    text: '心に残る神社仏閣の思い出は？',
    options: [
      { text: '結婚式や七五三', type: 'shrine' },
      { text: 'お葬式や法事', type: 'temple' },
      { text: '旅行で訪れた名所', type: 'balanced' },
      { text: '特にない', type: 'casual' },
    ],
  },
  {
    id: 7,
    text: '神社仏閣で癒されるポイントは？',
    options: [
      { text: '神聖な空気感', type: 'shrine' },
      { text: '仏像や庭園の美しさ', type: 'temple' },
      { text: '歴史を感じる建築', type: 'balanced' },
      { text: '周辺の食べ歩き', type: 'casual' },
    ],
  },
  {
    id: 8,
    text: '知りたいのはどんな情報？',
    options: [
      { text: 'ご利益や祭神', type: 'shrine' },
      { text: '宗派や仏像の意味', type: 'temple' },
      { text: '歴史や建築様式', type: 'balanced' },
      { text: 'アクセスや所要時間', type: 'casual' },
    ],
  },
  {
    id: 9,
    text: '理想の参拝スタイルは？',
    options: [
      { text: '早朝の静かな時間', type: 'shrine' },
      { text: '座禅や写経体験', type: 'temple' },
      { text: 'ガイド付きツアー', type: 'balanced' },
      { text: '友達とワイワイ', type: 'casual' },
    ],
  },
  {
    id: 10,
    text: '神社仏閣に行く頻度は？',
    options: [
      { text: '月に一度は行く', type: 'shrine' },
      { text: '季節の行事ごと', type: 'temple' },
      { text: '旅行の時', type: 'balanced' },
      { text: '年に数回', type: 'casual' },
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
  recommendedPlace: string;
}> = {
  shrine: {
    type: 'shrine',
    title: '神社派',
    emoji: '⛩️',
    percentage: '神社愛 95%',
    description: '神道の神聖な空気感に惹かれるあなた。鳥居をくぐる瞬間の凛とした気持ちが好きで、神様との対話を大切にしています。',
    characteristics: ['清浄', '祈り', '感謝', '日本の心', '自然崇拝'],
    recommendedPlace: '伊勢神宮、出雲大社、明治神宮がおすすめ！',
  },
  temple: {
    type: 'temple',
    title: '寺院派',
    emoji: '🛕',
    percentage: '寺院愛 93%',
    description: '仏教の教えや美しい仏像に心惹かれるあなた。お香の香りと静寂の中で、心を落ち着けることを大切にしています。',
    characteristics: ['内省', '静寂', '悟り', '芸術性', '精神性'],
    recommendedPlace: '高野山、比叡山、東大寺がおすすめ！',
  },
  balanced: {
    type: 'balanced',
    title: '神仏習合派',
    emoji: '🙏',
    percentage: 'バランス度 90%',
    description: '神社もお寺も同じように大切にするあなた。日本古来の神仏習合の精神を自然と体現しています。',
    characteristics: ['調和', '柔軟', '敬虔', '歴史好き', '文化理解'],
    recommendedPlace: '日光東照宮、熊野三山、厳島神社がおすすめ！',
  },
  casual: {
    type: 'casual',
    title: 'カジュアル参拝派',
    emoji: '🎌',
    percentage: 'カジュアル度 88%',
    description: '観光やイベントとして神社仏閣を楽しむあなた。堅苦しく考えず、気軽に日本文化に触れるスタイルです。',
    characteristics: ['気軽', '観光好き', 'イベント重視', '写真好き', '食べ歩き'],
    recommendedPlace: '浅草寺、伏見稲荷、鎌倉の寺社がおすすめ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { shrine: 0, temple: 0, balanced: 0, casual: 0 };

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
