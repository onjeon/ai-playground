// 夏祭りタイプ診断 (여름 축제 유형)
export const questions = [
  {
    id: 1,
    text: '夏祭りに行く時、まず何をする？',
    options: [
      { text: '浴衣に着替えて気合を入れる', type: 'traditional' },
      { text: '友達に連絡してグループを作る', type: 'energetic' },
      { text: '屋台のリサーチをしておく', type: 'gourmet' },
      { text: '花火の見えるベストスポットを確保', type: 'romantic' },
    ],
  },
  {
    id: 2,
    text: '夏祭りで一番楽しみなことは？',
    options: [
      { text: '浴衣姿で歩く非日常感', type: 'traditional' },
      { text: '友達や恋人とワイワイ過ごす時間', type: 'energetic' },
      { text: '屋台グルメを食べまくる', type: 'gourmet' },
      { text: '花火を見ながら過ごす時間', type: 'romantic' },
    ],
  },
  {
    id: 3,
    text: '屋台で何を買う？',
    options: [
      { text: 'りんご飴や金魚すくいなど定番', type: 'traditional' },
      { text: 'くじ引きや射的などゲーム系', type: 'energetic' },
      { text: 'たこ焼き、焼きそば、かき氷全部！', type: 'gourmet' },
      { text: '二人で分けられるものを選ぶ', type: 'romantic' },
    ],
  },
  {
    id: 4,
    text: '花火が上がった瞬間、あなたは？',
    options: [
      { text: '「たまや〜！」と叫ぶ', type: 'traditional' },
      { text: 'みんなで歓声を上げる', type: 'energetic' },
      { text: '花火を見ながら屋台フードを食べる', type: 'gourmet' },
      { text: '隣の人の顔をそっと見る', type: 'romantic' },
    ],
  },
  {
    id: 5,
    text: '夏祭りでの服装は？',
    options: [
      { text: '絶対浴衣！帯も髪型もこだわる', type: 'traditional' },
      { text: '動きやすい夏っぽいコーデ', type: 'energetic' },
      { text: '汚れてもいいカジュアルな服', type: 'gourmet' },
      { text: '相手とお揃いや雰囲気を合わせる', type: 'romantic' },
    ],
  },
  {
    id: 6,
    text: '祭りで友達とはぐれたらどうする？',
    options: [
      { text: '神社でお参りしながら待つ', type: 'traditional' },
      { text: '大声で名前を呼びながら探す', type: 'energetic' },
      { text: '屋台エリアで待ち合わせ', type: 'gourmet' },
      { text: '二人きりになれてラッキーと思う', type: 'romantic' },
    ],
  },
  {
    id: 7,
    text: '盆踊りが始まったら？',
    options: [
      { text: '伝統を感じながら一緒に踊る', type: 'traditional' },
      { text: '輪に入ってノリノリで踊る', type: 'energetic' },
      { text: '見ながら屋台グルメを楽しむ', type: 'gourmet' },
      { text: '二人で少し離れた場所から見る', type: 'romantic' },
    ],
  },
  {
    id: 8,
    text: '夏祭りの思い出といえば？',
    options: [
      { text: '神社の雰囲気と提灯の明かり', type: 'traditional' },
      { text: '友達と大笑いしたエピソード', type: 'energetic' },
      { text: '美味しかった屋台の味', type: 'gourmet' },
      { text: '花火の下での甘い思い出', type: 'romantic' },
    ],
  },
  {
    id: 9,
    text: '祭りの終わり際、あなたは？',
    options: [
      { text: '最後まで伝統行事を見届ける', type: 'traditional' },
      { text: '「もう終わり？もっと遊びたい！」', type: 'energetic' },
      { text: '最後にもう一品屋台で買う', type: 'gourmet' },
      { text: '帰り道を二人でゆっくり歩く', type: 'romantic' },
    ],
  },
  {
    id: 10,
    text: '理想の夏祭りデートは？',
    options: [
      { text: '地元の伝統的な祭りに参加', type: 'traditional' },
      { text: '大規模な花火大会でお祭り騒ぎ', type: 'energetic' },
      { text: '屋台グルメを食べ歩きデート', type: 'gourmet' },
      { text: '人混みを避けて穴場スポットで花火', type: 'romantic' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  festivalStyle: string[];
  luckyItem: string;
}> = {
  traditional: {
    type: 'traditional',
    title: '伝統派お祭り大好きタイプ',
    emoji: '🏮',
    description: 'あなたは日本の夏の風物詩を大切にする伝統派！浴衣を着て、神社にお参りして、盆踊りを踊る…そんな昔ながらのお祭りスタイルが大好き。風情を感じる心を持った素敵な人です。',
    traits: ['伝統を大切にする', '風情を感じる', '落ち着いている', '日本文化が好き', '趣がある'],
    festivalStyle: ['浴衣で参加', '神社へのお参り', '盆踊りに参加', '提灯の下を散策'],
    luckyItem: '手作りの団扇',
  },
  energetic: {
    type: 'energetic',
    title: 'お祭り騒ぎ大好きエネルギッシュタイプ',
    emoji: '🎆',
    description: 'あなたは祭りの熱気が大好きなエネルギッシュタイプ！人混みも暑さも何のその、ワイワイ騒いで夏を満喫します。あなたがいると場が盛り上がること間違いなし！',
    traits: ['エネルギッシュ', 'ムードメーカー', '楽しいことが大好き', '人懐っこい', 'テンションが高い'],
    festivalStyle: ['グループで参加', '射的やゲームに挑戦', '大声で花火を楽しむ', '最後まで遊び尽くす'],
    luckyItem: '光るブレスレット',
  },
  gourmet: {
    type: 'gourmet',
    title: '屋台グルメハンタータイプ',
    emoji: '🍧',
    description: 'あなたにとって夏祭りは屋台グルメの祭典！たこ焼き、焼きそば、かき氷…食べ歩きこそが祭りの醍醐味。美味しいものへの嗅覚は抜群です。',
    traits: ['食べることが大好き', '好奇心旺盛', '幸せそうな笑顔', 'グルメに詳しい', '食で人を幸せにする'],
    festivalStyle: ['屋台を全制覇', '食べ歩きメイン', '新作グルメに挑戦', '友達とシェア'],
    luckyItem: 'マイ箸',
  },
  romantic: {
    type: 'romantic',
    title: '花火ロマンチストタイプ',
    emoji: '🎇',
    description: 'あなたは夏祭りにロマンスを求めるタイプ。花火の下で過ごす特別な時間、浴衣姿の相手、少し切ない夏の終わり…そんな瞬間にときめきを感じる感受性豊かな人です。',
    traits: ['ロマンチスト', '感受性豊か', 'ムードを大切にする', '二人の時間を重視', '思い出を大切にする'],
    festivalStyle: ['穴場スポットで花火鑑賞', '二人でゆっくり散策', '帰り道も大切な時間', '写真より記憶に残す'],
    luckyItem: '線香花火',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { traditional: 0, energetic: 0, gourmet: 0, romantic: 0 };

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
