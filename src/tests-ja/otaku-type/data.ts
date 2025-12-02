// オタクタイプ診断テスト (오타쿠 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '推しができたら、まず何をする？',
    options: [
      { text: '過去作品を全部チェック', type: 'gachi' },
      { text: 'SNSでファンをフォロー', type: 'community' },
      { text: 'グッズを買い集める', type: 'goods' },
      { text: '友達に布教する', type: 'fukyo' },
    ],
  },
  {
    id: 2,
    text: '好きなコンテンツへの課金は？',
    options: [
      { text: '推しのためなら惜しまない', type: 'gachi' },
      { text: 'イベント参加費が中心', type: 'community' },
      { text: 'グッズ・フィギュアに全力', type: 'goods' },
      { text: '布教用に複数買い', type: 'fukyo' },
    ],
  },
  {
    id: 3,
    text: 'オタク活動の楽しみ方は？',
    options: [
      { text: '一人で深く掘り下げる', type: 'gachi' },
      { text: 'ファン同士で語り合う', type: 'community' },
      { text: 'コレクションを眺める', type: 'goods' },
      { text: '新規ファンを増やす', type: 'fukyo' },
    ],
  },
  {
    id: 4,
    text: 'SNSでのオタク活動は？',
    options: [
      { text: '考察や感想を長文で投稿', type: 'gachi' },
      { text: 'ファン仲間と交流メイン', type: 'community' },
      { text: '購入品を写真で紹介', type: 'goods' },
      { text: '布教用のおすすめ投稿', type: 'fukyo' },
    ],
  },
  {
    id: 5,
    text: 'ライブやイベントでは？',
    options: [
      { text: '全公演参加が目標', type: 'gachi' },
      { text: 'オタ友と一緒に参加', type: 'community' },
      { text: '限定グッズ目当て', type: 'goods' },
      { text: '初心者の友達を連れて行く', type: 'fukyo' },
    ],
  },
  {
    id: 6,
    text: '新しい沼にハマった時は？',
    options: [
      { text: 'Wikipedia級の知識を身につける', type: 'gachi' },
      { text: 'ファンコミュニティを探す', type: 'community' },
      { text: '関連グッズを調べまくる', type: 'goods' },
      { text: '即座に周りに広める', type: 'fukyo' },
    ],
  },
  {
    id: 7,
    text: '推しが炎上したら？',
    options: [
      { text: '情報を集めて冷静に判断', type: 'gachi' },
      { text: 'ファン仲間と情報共有', type: 'community' },
      { text: 'グッズは手放さない', type: 'goods' },
      { text: '布教活動は一時停止', type: 'fukyo' },
    ],
  },
  {
    id: 8,
    text: 'オタクとして誇りに思うことは？',
    options: [
      { text: '知識量と考察力', type: 'gachi' },
      { text: '仲間との絆', type: 'community' },
      { text: 'コレクションの充実度', type: 'goods' },
      { text: '布教した人数', type: 'fukyo' },
    ],
  },
  {
    id: 9,
    text: '部屋の様子は？',
    options: [
      { text: '資料や設定集がたくさん', type: 'gachi' },
      { text: 'イベントの思い出グッズ', type: 'community' },
      { text: 'フィギュア・ポスターだらけ', type: 'goods' },
      { text: '布教用の貸出グッズ完備', type: 'fukyo' },
    ],
  },
  {
    id: 10,
    text: 'あなたにとってオタクとは？',
    options: [
      { text: '好きを極める生き方', type: 'gachi' },
      { text: '同じ趣味の仲間との繋がり', type: 'community' },
      { text: 'コレクションする喜び', type: 'goods' },
      { text: '好きを広める使命', type: 'fukyo' },
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
  otakuMotto: string;
}> = {
  gachi: {
    type: 'gachi',
    title: 'ガチ勢オタク',
    emoji: '🔥',
    percentage: 'オタク濃度 100%',
    description: '知識量と情熱では誰にも負けない！推しのことなら何でも知っているガチ勢。考察や分析が得意で、ファンの中でも一目置かれる存在です。',
    characteristics: ['博識', '情熱的', '探究心旺盛', '考察力', '一途'],
    otakuMotto: '「にわかには負けない」',
  },
  community: {
    type: 'community',
    title: 'コミュニティ型オタク',
    emoji: '🤝',
    percentage: 'オタク濃度 80%',
    description: '同じ趣味を持つ仲間との交流が一番の楽しみ！イベントや集まりが大好きで、ファン同士の繋がりを大切にします。オタ友が多いのが自慢。',
    characteristics: ['社交的', '仲間思い', 'イベント好き', '情報通', '明るい'],
    otakuMotto: '「推しは分かち合うもの」',
  },
  goods: {
    type: 'goods',
    title: 'コレクター型オタク',
    emoji: '📦',
    percentage: 'オタク濃度 85%',
    description: 'グッズやフィギュアを集めることに喜びを感じるタイプ！部屋は推しのグッズで溢れています。限定品を手に入れた時の達成感は格別。',
    characteristics: ['収集癖', 'こだわり強い', '保存状態重視', '限定品ハンター', '整理上手'],
    otakuMotto: '「グッズは愛の形」',
  },
  fukyo: {
    type: 'fukyo',
    title: '布教型オタク',
    emoji: '📢',
    percentage: 'オタク濃度 90%',
    description: '好きなものを人に勧めずにはいられない！「これ見て！」「これ聴いて！」が口癖。新規ファンを増やすことに使命感を持つ伝道師タイプ。',
    characteristics: ['プレゼン上手', '熱意がすごい', '面倒見がいい', '話上手', '影響力がある'],
    otakuMotto: '「一人でも多くの人に届けたい」',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { gachi: 0, community: 0, goods: 0, fukyo: 0 };

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
