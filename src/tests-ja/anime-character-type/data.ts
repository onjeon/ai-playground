// あなたのアニメキャラタイプ診断 (당신의 애니메이션 캐릭터 유형)
export const questions = [
  {
    id: 1,
    text: '物語の中であなたが担当するポジションは？',
    options: [
      { text: '主人公として成長していく', type: 'protagonist' },
      { text: '主人公を支えるライバル・友人', type: 'rival' },
      { text: '知恵で仲間を導く参謀役', type: 'strategist' },
      { text: '癒し担当のマスコット的存在', type: 'mascot' },
    ],
  },
  {
    id: 2,
    text: 'ピンチの時、あなたの行動は？',
    options: [
      { text: '仲間のために立ち上がる', type: 'protagonist' },
      { text: '自分の力で突破する', type: 'rival' },
      { text: '冷静に状況を分析する', type: 'strategist' },
      { text: '皆を励まして士気を上げる', type: 'mascot' },
    ],
  },
  {
    id: 3,
    text: '得意な能力は？',
    options: [
      { text: '無限の可能性と成長力', type: 'protagonist' },
      { text: '圧倒的な実力と才能', type: 'rival' },
      { text: '知識と戦略的思考', type: 'strategist' },
      { text: 'コミュニケーションと癒し', type: 'mascot' },
    ],
  },
  {
    id: 4,
    text: '仲間との関係性は？',
    options: [
      { text: '信頼で結ばれた熱い絆', type: 'protagonist' },
      { text: '切磋琢磨するライバル関係', type: 'rival' },
      { text: '互いの能力を認め合う仲間', type: 'strategist' },
      { text: '皆に愛される癒しの存在', type: 'mascot' },
    ],
  },
  {
    id: 5,
    text: '戦闘スタイルは？',
    options: [
      { text: '根性と仲間の想いで限界突破', type: 'protagonist' },
      { text: 'スマートに実力で圧倒', type: 'rival' },
      { text: '戦略と罠で勝利する', type: 'strategist' },
      { text: 'サポートや回復で貢献', type: 'mascot' },
    ],
  },
  {
    id: 6,
    text: '目標や夢は？',
    options: [
      { text: '世界を救う・最強になる', type: 'protagonist' },
      { text: '自分の力を証明する', type: 'rival' },
      { text: '理想の世界を実現する', type: 'strategist' },
      { text: '皆と一緒に幸せに暮らす', type: 'mascot' },
    ],
  },
  {
    id: 7,
    text: '弱点は？',
    options: [
      { text: '無鉄砲で考えなしに行動', type: 'protagonist' },
      { text: 'プライドが高く孤立しがち', type: 'rival' },
      { text: '感情より理屈を優先しすぎる', type: 'strategist' },
      { text: '戦闘力が低い', type: 'mascot' },
    ],
  },
  {
    id: 8,
    text: '必殺技を叫ぶなら？',
    options: [
      { text: '「うおおおお！！」と叫びながら', type: 'protagonist' },
      { text: 'クールに技名だけ呟く', type: 'rival' },
      { text: '「計画通り」と不敵に笑う', type: 'strategist' },
      { text: '「えいっ！」と可愛く', type: 'mascot' },
    ],
  },
  {
    id: 9,
    text: '敵キャラへの態度は？',
    options: [
      { text: '倒した後も手を差し伸べる', type: 'protagonist' },
      { text: '実力を認めつつ倒す', type: 'rival' },
      { text: '敵の心理を読んで利用', type: 'strategist' },
      { text: '敵とも仲良くなろうとする', type: 'mascot' },
    ],
  },
  {
    id: 10,
    text: '最終回での立ち位置は？',
    options: [
      { text: '世界を救って皆のヒーローに', type: 'protagonist' },
      { text: '主人公と並び立つ存在に', type: 'rival' },
      { text: '影で世界を動かす黒幕的存在', type: 'strategist' },
      { text: '皆に囲まれて幸せそう', type: 'mascot' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  weaknesses: string[];
  representativeCharacters: string[];
}> = {
  protagonist: {
    type: 'protagonist',
    title: '熱血主人公タイプ',
    emoji: '🔥',
    description: 'あなたは物語の中心で輝く主人公タイプ！仲間想いで正義感が強く、どんな困難も乗り越える熱い心の持ち主です。成長し続ける姿が周りを惹きつけます。',
    traits: ['正義感が強い', '仲間想い', '成長力が高い', '諦めない心', 'カリスマ性'],
    weaknesses: ['無鉄砲', '考えなしに行動', '単純'],
    representativeCharacters: ['孫悟空（ドラゴンボール）', 'ルフィ（ワンピース）', '炭治郎（鬼滅の刃）'],
  },
  rival: {
    type: 'rival',
    title: 'クールライバルタイプ',
    emoji: '⚡',
    description: '圧倒的な実力とプライドを持つライバルタイプ！クールで孤高な雰囲気がありますが、実は誰よりも熱い心を持っています。主人公と競い合うことで共に成長します。',
    traits: ['高い実力', 'クール', 'プライドが高い', '努力家', '負けず嫌い'],
    weaknesses: ['孤立しがち', '素直になれない', 'プライドが邪魔することも'],
    representativeCharacters: ['ベジータ（ドラゴンボール）', 'サスケ（NARUTO）', '爆豪勝己（僕のヒーローアカデミア）'],
  },
  strategist: {
    type: 'strategist',
    title: '天才軍師タイプ',
    emoji: '🧠',
    description: '知恵と戦略で仲間を導く参謀タイプ！冷静な分析力と先を読む力で、チームの頭脳として活躍します。「計画通り」が口癖になりそう。',
    traits: ['高い知性', '冷静', '戦略的思考', '先見の明', '分析力'],
    weaknesses: ['感情を軽視しがち', '体力面は弱い', '計画が狂うとパニック'],
    representativeCharacters: ['L（デスノート）', 'シカマル（NARUTO）', 'レロイ（約束のネバーランド）'],
  },
  mascot: {
    type: 'mascot',
    title: '愛されマスコットタイプ',
    emoji: '🌸',
    description: 'チームの癒し担当マスコットタイプ！明るい性格で皆を和ませ、ピンチの時も希望を失わない前向きさがあります。皆に愛される存在です。',
    traits: ['明るい', '癒し系', '前向き', 'コミュニケーション能力', '愛嬌がある'],
    weaknesses: ['戦闘力は低め', 'お調子者', '危機感が薄い'],
    representativeCharacters: ['ピカチュウ（ポケモン）', 'チョッパー（ワンピース）', '善逸（鬼滅の刃）'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { protagonist: 0, rival: 0, strategist: 0, mascot: 0 };

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
