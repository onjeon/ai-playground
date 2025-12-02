// カワイイ度診断 (카와이이 레벨 - 당신의 귀여움 지수)
export const questions = [
  {
    id: 1,
    text: 'お願い事をする時は？',
    options: [
      { text: '「お願い～♡」と甘えた声で', type: 'sweet' },
      { text: '「これやってくれない？」とさらっと', type: 'cool' },
      { text: '「お願いします！」と元気よく', type: 'genki' },
      { text: '「...お願い」と恥ずかしそうに', type: 'shy' },
    ],
  },
  {
    id: 2,
    text: '嬉しいことがあった時のリアクションは？',
    options: [
      { text: '「きゃー！嬉しい～♡」', type: 'sweet' },
      { text: 'クールに微笑む', type: 'cool' },
      { text: '「やったー！！」とジャンプ', type: 'genki' },
      { text: '顔を赤らめて俯く', type: 'shy' },
    ],
  },
  {
    id: 3,
    text: '好きな服のスタイルは？',
    options: [
      { text: 'フリルやリボンがついた可愛い系', type: 'sweet' },
      { text: 'シンプルでスタイリッシュ', type: 'cool' },
      { text: 'カラフルで元気が出る服', type: 'genki' },
      { text: 'ふんわり柔らかい雰囲気の服', type: 'shy' },
    ],
  },
  {
    id: 4,
    text: '写真を撮る時のポーズは？',
    options: [
      { text: 'ピースして「うさぎ」ポーズ', type: 'sweet' },
      { text: 'キメ顔でクールに', type: 'cool' },
      { text: '全力で変顔', type: 'genki' },
      { text: 'カメラを見れずにはにかむ', type: 'shy' },
    ],
  },
  {
    id: 5,
    text: '好きな言葉は？',
    options: [
      { text: '「大好き」「ありがとう」', type: 'sweet' },
      { text: '「かっこいい」「クール」', type: 'cool' },
      { text: '「最高！」「サイコー！」', type: 'genki' },
      { text: '「...うん」（言葉より行動）', type: 'shy' },
    ],
  },
  {
    id: 6,
    text: 'SNSの投稿スタイルは？',
    options: [
      { text: 'ピンクのフィルターで盛る', type: 'sweet' },
      { text: 'おしゃれな加工でスタイリッシュに', type: 'cool' },
      { text: '面白い瞬間をシェア', type: 'genki' },
      { text: 'あまり投稿しない、ROMがち', type: 'shy' },
    ],
  },
  {
    id: 7,
    text: '甘いものを食べる時は？',
    options: [
      { text: '「おいしい～♡」と幸せそうに', type: 'sweet' },
      { text: '「まあまあかな」とクールに評価', type: 'cool' },
      { text: '「うまっ！！」とテンション爆上げ', type: 'genki' },
      { text: '静かに味わう', type: 'shy' },
    ],
  },
  {
    id: 8,
    text: '失敗した時の反応は？',
    options: [
      { text: '「てへぺろ♡」で許してもらう', type: 'sweet' },
      { text: '何事もなかったかのように振る舞う', type: 'cool' },
      { text: '「あちゃー！」と笑い飛ばす', type: 'genki' },
      { text: '真っ赤になって固まる', type: 'shy' },
    ],
  },
  {
    id: 9,
    text: '理想のデートは？',
    options: [
      { text: 'テーマパークでペアルックデート', type: 'sweet' },
      { text: 'おしゃれなカフェ巡り', type: 'cool' },
      { text: 'アクティブに遊園地やスポーツ', type: 'genki' },
      { text: 'おうちでまったり映画鑑賞', type: 'shy' },
    ],
  },
  {
    id: 10,
    text: 'あなたの魅力を一言で言うと？',
    options: [
      { text: '愛嬌と甘え上手', type: 'sweet' },
      { text: 'ミステリアスな雰囲気', type: 'cool' },
      { text: '明るく元気なオーラ', type: 'genki' },
      { text: '純粋で一途な心', type: 'shy' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  kawaiiLevel: string;
  description: string;
  characteristics: string[];
  charmPoints: string[];
  animeCharacter: string;
}> = {
  sweet: {
    type: 'sweet',
    title: 'あざと可愛いタイプ',
    emoji: '🎀💕',
    kawaiiLevel: 'カワイイ度：★★★★★（MAX）',
    description: '計算された可愛さを持つあなた！「あざとい」と言われることもあるけど、それも含めて魅力です。周りを虜にする天性のモテオーラがあります。',
    characteristics: ['甘え上手', 'リアクション可愛い', '表情豊か', '愛嬌抜群'],
    charmPoints: ['上目遣い', 'おねだり上手', '可愛いわがまま', 'ぶりっ子（良い意味で）'],
    animeCharacter: '代表キャラ：一色いろは（俺ガイル）、佐藤愛子（かぐや様）',
  },
  cool: {
    type: 'cool',
    title: 'クール可愛いタイプ',
    emoji: '❄️✨',
    kawaiiLevel: 'カワイイ度：★★★★☆（ギャップ萌え）',
    description: 'クールな外見と時折見せる可愛いギャップが魅力のあなた。普段はクールなのに、ふとした瞬間に見せる笑顔が破壊力抜群！',
    characteristics: ['クールビューティー', 'ギャップ萌え', 'ミステリアス', '大人っぽい'],
    charmPoints: ['レアな笑顔', '不意打ちデレ', '守りたくなる雰囲気', 'かっこ可愛い'],
    animeCharacter: '代表キャラ：雪ノ下雪乃（俺ガイル）、リゼロのレム',
  },
  genki: {
    type: 'genki',
    title: '元気可愛いタイプ',
    emoji: '🌈⚡',
    kawaiiLevel: 'カワイイ度：★★★★☆（天真爛漫）',
    description: '太陽のように明るいあなた！その笑顔と元気さで周りを明るくします。一緒にいると楽しくなる、ムードメーカー的存在です。',
    characteristics: ['明るい', '元気いっぱい', 'ポジティブ', '笑顔が素敵'],
    charmPoints: ['全力の笑顔', '無邪気さ', '一緒にいて楽しい', '元気をもらえる'],
    animeCharacter: '代表キャラ：由比ヶ浜結衣（俺ガイル）、うまるちゃん',
  },
  shy: {
    type: 'shy',
    title: 'ピュア可愛いタイプ',
    emoji: '🌸💗',
    kawaiiLevel: 'カワイイ度：★★★★★（守りたい）',
    description: '純粋で恥ずかしがり屋なあなた。その一生懸命な姿や照れる表情が、思わず守りたくなる可愛さです。天然の可愛さNo.1！',
    characteristics: ['恥ずかしがり屋', '純粋', '一途', 'おっとり'],
    charmPoints: ['赤面', '照れ笑い', 'はにかみ', '守りたくなる'],
    animeCharacter: '代表キャラ：古河渚（CLANNAD）、小野寺小咲（ニセコイ）',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { sweet: 0, cool: 0, genki: 0, shy: 0 };

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
