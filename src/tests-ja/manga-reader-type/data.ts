// 漫画読者タイプ診断 (만화 독서 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '新刊が出たらどうする？',
    options: [
      { text: '発売日に書店で即購入', type: 'collector' },
      { text: '電子書籍で即ダウンロード', type: 'binge' },
      { text: '友達に借りる', type: 'social' },
      { text: '完結してからまとめ買い', type: 'analyst' },
    ],
  },
  {
    id: 2,
    text: '漫画を読む時のスタイルは？',
    options: [
      { text: '紙の本をめくる感触が好き', type: 'collector' },
      { text: '一気読みで徹夜もOK', type: 'binge' },
      { text: '友達と感想を言い合いながら', type: 'social' },
      { text: '考察しながらじっくり', type: 'analyst' },
    ],
  },
  {
    id: 3,
    text: '好きな漫画の単行本は？',
    options: [
      { text: '全巻揃えて本棚に並べる', type: 'collector' },
      { text: 'とにかく読めればOK', type: 'binge' },
      { text: '友達と貸し借りする', type: 'social' },
      { text: '特別な巻だけ購入', type: 'analyst' },
    ],
  },
  {
    id: 4,
    text: '漫画の話題で盛り上がるのは？',
    options: [
      { text: '限定版や特典の話', type: 'collector' },
      { text: '「昨日3巻まで読んだ！」の報告', type: 'binge' },
      { text: 'キャラや展開の感想会', type: 'social' },
      { text: '伏線や作者の意図の考察', type: 'analyst' },
    ],
  },
  {
    id: 5,
    text: '漫画を選ぶ基準は？',
    options: [
      { text: '装丁や表紙のデザイン', type: 'collector' },
      { text: '話題作や人気作', type: 'binge' },
      { text: '友達のおすすめ', type: 'social' },
      { text: 'あらすじやレビューを熟読', type: 'analyst' },
    ],
  },
  {
    id: 6,
    text: '漫画の中で気になるのは？',
    options: [
      { text: '作画の美しさ', type: 'collector' },
      { text: 'ストーリーの面白さ', type: 'binge' },
      { text: '推しキャラの活躍', type: 'social' },
      { text: '世界観や設定の深さ', type: 'analyst' },
    ],
  },
  {
    id: 7,
    text: '漫画が原作のアニメ化については？',
    options: [
      { text: '原作との違いが気になる', type: 'collector' },
      { text: '「アニメも見なきゃ！」と忙しい', type: 'binge' },
      { text: '友達と一緒に視聴', type: 'social' },
      { text: 'アニメオリジナル展開を分析', type: 'analyst' },
    ],
  },
  {
    id: 8,
    text: '漫画の最終回を読んだ後は？',
    options: [
      { text: '丁寧に本棚にしまう', type: 'collector' },
      { text: '次に読む漫画を探す', type: 'binge' },
      { text: 'SNSで感想をシェア', type: 'social' },
      { text: '結末の意味を考え続ける', type: 'analyst' },
    ],
  },
  {
    id: 9,
    text: '漫画喫茶に行ったら？',
    options: [
      { text: '普段買えない作品をチェック', type: 'collector' },
      { text: '制限時間ギリギリまで読み漁る', type: 'binge' },
      { text: '友達と一緒に行く', type: 'social' },
      { text: '静かに集中して読む', type: 'analyst' },
    ],
  },
  {
    id: 10,
    text: '漫画との付き合い方は？',
    options: [
      { text: '大切なコレクション', type: 'collector' },
      { text: '最高の娯楽', type: 'binge' },
      { text: 'コミュニケーションツール', type: 'social' },
      { text: '知的探求の対象', type: 'analyst' },
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
  recommendation: string;
}> = {
  collector: {
    type: 'collector',
    title: 'コレクター型読者',
    emoji: '📚',
    percentage: 'コレクター度 95%',
    description: '漫画は所有することに意味がある派。限定版、特装版、サイン本など、本棚に並ぶコレクションが宝物。紙の質感と装丁にこだわります。',
    characteristics: ['収集癖', '几帳面', 'こだわり派', '物を大切にする', '審美眼'],
    recommendation: '特装版や限定カバーの情報をチェック！',
  },
  binge: {
    type: 'binge',
    title: '一気読み派',
    emoji: '🔥',
    percentage: '没頭度 92%',
    description: '面白い漫画に出会ったら止まらない！徹夜してでも読破するタイプ。次々と新しい作品を開拓し、常に何かを読んでいます。',
    characteristics: ['熱中型', '好奇心旺盛', '行動力', 'トレンド好き', '情熱的'],
    recommendation: '話題の新作をチェックして次のターゲットを！',
  },
  social: {
    type: 'social',
    title: 'ソーシャル型読者',
    emoji: '💬',
    percentage: 'ソーシャル度 88%',
    description: '漫画は共有してこそ楽しい派。友達との感想会、SNSでの考察、推しキャラ語りが至福の時間。コミュニティ活動も積極的です。',
    characteristics: ['社交的', '共感力', 'おしゃべり好き', '発信力', 'つながり重視'],
    recommendation: 'ファンコミュニティやSNSで仲間を見つけよう！',
  },
  analyst: {
    type: 'analyst',
    title: '分析型読者',
    emoji: '🔍',
    percentage: '分析度 90%',
    description: '漫画を深く読み込むタイプ。伏線、作者のメッセージ、時代背景まで考察。一冊を何度も読み返し、新たな発見を楽しみます。',
    characteristics: ['分析的', '知的好奇心', '洞察力', '批評眼', '深掘り派'],
    recommendation: '考察サイトや評論を読んで理解を深めよう！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { collector: 0, binge: 0, social: 0, analyst: 0 };

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
