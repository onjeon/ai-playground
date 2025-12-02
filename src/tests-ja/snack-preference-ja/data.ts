// おやつ好みタイプ診断
export const questions = [
  {
    id: 1,
    text: '小腹が空いた時、まず手が伸びるのは？',
    options: [
      { text: 'チョコレートやクッキー', type: 'sweet' },
      { text: 'ポテチやせんべい', type: 'salty' },
      { text: 'フルーツやナッツ', type: 'healthy' },
      { text: '特に食べない、我慢する', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: 'コンビニでおやつを買うなら？',
    options: [
      { text: 'スイーツコーナーへ直行', type: 'sweet' },
      { text: 'スナック菓子をチェック', type: 'salty' },
      { text: 'サラダやヨーグルト', type: 'healthy' },
      { text: '飲み物だけで済ます', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: '午後の仕事中、おやつタイムは？',
    options: [
      { text: '甘いもので脳に糖分補給', type: 'sweet' },
      { text: 'しょっぱいもので気分転換', type: 'salty' },
      { text: 'ヘルシーなものでリフレッシュ', type: 'healthy' },
      { text: 'おやつは食べない派', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: 'おやつの買い置きについて',
    options: [
      { text: 'お気に入りのスイーツは常備', type: 'sweet' },
      { text: 'スナック菓子はストックがち', type: 'salty' },
      { text: 'フルーツやナッツを用意', type: 'healthy' },
      { text: '買い置きはしない', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: '映画を見ながら食べるなら？',
    options: [
      { text: 'アイスクリームやケーキ', type: 'sweet' },
      { text: 'ポップコーンやチップス', type: 'salty' },
      { text: 'カットフルーツ', type: 'healthy' },
      { text: '何も食べずに集中', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: 'おやつに求めるものは？',
    options: [
      { text: '幸福感と癒し', type: 'sweet' },
      { text: '食感と満足感', type: 'salty' },
      { text: '健康と美容', type: 'healthy' },
      { text: '特に求めていない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: 'ストレスが溜まった時は？',
    options: [
      { text: '甘いものを食べて発散', type: 'sweet' },
      { text: 'バリバリ食べてスッキリ', type: 'salty' },
      { text: 'ハーブティーとナッツで落ち着く', type: 'healthy' },
      { text: '食以外で発散する', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: 'おやつの頻度は？',
    options: [
      { text: '毎日甘いものは欠かせない', type: 'sweet' },
      { text: '暇さえあれば何か食べてる', type: 'salty' },
      { text: '決まった時間に適量を', type: 'healthy' },
      { text: 'ほとんど食べない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: 'カフェでのおやつ選びは？',
    options: [
      { text: 'ケーキセット一択', type: 'sweet' },
      { text: 'サンドイッチやトースト', type: 'salty' },
      { text: 'アサイーボウルやグラノーラ', type: 'healthy' },
      { text: 'ドリンクだけで十分', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: 'おやつへの意識は？',
    options: [
      { text: '人生の楽しみ！我慢しない', type: 'sweet' },
      { text: '止められない、止まらない', type: 'salty' },
      { text: '体に良いものを選びたい', type: 'healthy' },
      { text: 'カロリーが気になるので控えめ', type: 'minimal' },
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
  sweet: {
    type: 'sweet',
    title: 'スイーツ大好きタイプ',
    emoji: '🍰',
    percentage: '甘党度 98%',
    description: '甘いものは心の栄養！チョコ、ケーキ、アイス…スイーツが幸せの源。疲れた時も、嬉しい時も、甘いもので気分アップ！',
    characteristics: ['甘党', '幸福感重視', '感情豊か', '自分へのご褒美上手', 'カフェ好き'],
    advice: '甘いものは心の味方！でも食べ過ぎには注意。適度に楽しみましょう♪',
  },
  salty: {
    type: 'salty',
    title: 'スナック愛好家タイプ',
    emoji: '🍿',
    percentage: 'スナック愛 95%',
    description: 'ポテチにせんべい、止まらない美味しさ！バリバリ食感がクセになる。甘いものより断然しょっぱい派。',
    characteristics: ['塩派', '食感重視', '気分転換上手', 'ストレス発散上手', 'ながら食べ派'],
    advice: '塩分の取りすぎに注意！たまにはヘルシースナックも試してみて。',
  },
  healthy: {
    type: 'healthy',
    title: 'ヘルシーおやつ派',
    emoji: '🍎',
    percentage: '健康意識 92%',
    description: 'おやつも体に良いものを選びたい！フルーツ、ナッツ、ヨーグルトがお気に入り。美容と健康を意識した賢い選択。',
    characteristics: ['健康志向', '美意識高い', '自制心あり', '知識豊富', 'セルフケア上手'],
    advice: '素晴らしい健康意識！たまには「美味しい」だけで選ぶのも良いですよ♪',
  },
  minimal: {
    type: 'minimal',
    title: 'おやつ控えめタイプ',
    emoji: '🍵',
    percentage: 'ミニマル度 90%',
    description: 'おやつはほとんど食べない派。三食しっかり食べれば十分！間食なしでも全然平気なストイックタイプ。',
    characteristics: ['自制心強い', 'ストイック', '規律正しい', '節約上手', '意志が強い'],
    advice: 'たまには自分へのご褒美おやつで、リラックスするのもおすすめ！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { sweet: 0, salty: 0, healthy: 0, minimal: 0 };

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
