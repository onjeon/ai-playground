// ゲーマーペルソナ診断 (게이머 페르소나 테스트)
export const questions = [
  {
    id: 1,
    text: 'ゲームをプレイする主な目的は？',
    options: [
      { text: '勝利・ランク上げ', type: 'achiever' },
      { text: 'ストーリーや世界観を楽しむ', type: 'explorer' },
      { text: '友達と一緒に遊ぶ', type: 'socializer' },
      { text: 'ストレス発散・暇つぶし', type: 'casual' },
    ],
  },
  {
    id: 2,
    text: '好みのゲームジャンルは？',
    options: [
      { text: '対戦・競技系（FPS、格闘）', type: 'achiever' },
      { text: 'RPG・アドベンチャー', type: 'explorer' },
      { text: 'パーティーゲーム・協力型', type: 'socializer' },
      { text: 'パズル・カジュアル', type: 'casual' },
    ],
  },
  {
    id: 3,
    text: 'ゲーム内での行動パターンは？',
    options: [
      { text: '効率的にレベル上げ・攻略', type: 'achiever' },
      { text: '隅々まで探索・収集', type: 'explorer' },
      { text: 'チームプレイ・助け合い', type: 'socializer' },
      { text: 'のんびりマイペース', type: 'casual' },
    ],
  },
  {
    id: 4,
    text: 'ゲームの難易度設定は？',
    options: [
      { text: '最高難易度でチャレンジ', type: 'achiever' },
      { text: 'ノーマルでじっくり', type: 'explorer' },
      { text: '友達と合わせる', type: 'socializer' },
      { text: 'イージーで気楽に', type: 'casual' },
    ],
  },
  {
    id: 5,
    text: 'ゲームに負けた時の反応は？',
    options: [
      { text: '悔しい！リベンジ！', type: 'achiever' },
      { text: '何が悪かったか分析', type: 'explorer' },
      { text: 'みんなで笑って終わり', type: 'socializer' },
      { text: 'まあいいか', type: 'casual' },
    ],
  },
  {
    id: 6,
    text: 'ゲームの攻略情報は？',
    options: [
      { text: '最適解を調べて実践', type: 'achiever' },
      { text: '詰まったら見る程度', type: 'explorer' },
      { text: '友達に聞く', type: 'socializer' },
      { text: 'あまり調べない', type: 'casual' },
    ],
  },
  {
    id: 7,
    text: 'ゲームにかける時間は？',
    options: [
      { text: '時間を忘れて没頭', type: 'achiever' },
      { text: '計画的にプレイ', type: 'explorer' },
      { text: '友達と予定を合わせて', type: 'socializer' },
      { text: '空いた時間にちょこっと', type: 'casual' },
    ],
  },
  {
    id: 8,
    text: 'ゲーム内課金について？',
    options: [
      { text: '強くなれるなら課金', type: 'achiever' },
      { text: 'コンテンツ追加なら課金', type: 'explorer' },
      { text: '友達と揃えるなら課金', type: 'socializer' },
      { text: '基本無課金', type: 'casual' },
    ],
  },
  {
    id: 9,
    text: 'マルチプレイでの役割は？',
    options: [
      { text: 'リーダー・エース', type: 'achiever' },
      { text: '情報収集・偵察', type: 'explorer' },
      { text: 'サポート・ヒーラー', type: 'socializer' },
      { text: '流れに任せる', type: 'casual' },
    ],
  },
  {
    id: 10,
    text: 'ゲームの醍醐味は？',
    options: [
      { text: '達成感・勝利の瞬間', type: 'achiever' },
      { text: '新しい発見・体験', type: 'explorer' },
      { text: '仲間との思い出', type: 'socializer' },
      { text: '気軽に楽しめること', type: 'casual' },
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
  recommendedGame: string;
}> = {
  achiever: {
    type: 'achiever',
    title: 'アチーバー（達成者）',
    emoji: '🏆',
    percentage: '競争心 95%',
    description: '勝利こそ全て！ランキング上位や高難度クリアを目指すガチゲーマー。負けず嫌いで常に上を目指します。',
    characteristics: ['勝負師', '向上心', '負けず嫌い', 'ストイック', '効率重視'],
    recommendedGame: 'Apex Legends、VALORANT、格闘ゲーム',
  },
  explorer: {
    type: 'explorer',
    title: 'エクスプローラー（探索者）',
    emoji: '🗺️',
    percentage: '探究心 90%',
    description: '隠し要素や世界観の深掘りが大好き！ゲームの隅々まで探索し、全ての秘密を解き明かしたいタイプ。',
    characteristics: ['好奇心旺盛', '収集癖', '分析力', 'コンプリート派', '没入型'],
    recommendedGame: 'ゼルダの伝説、エルデンリング、オープンワールドRPG',
  },
  socializer: {
    type: 'socializer',
    title: 'ソーシャライザー（社交家）',
    emoji: '🤝',
    percentage: '社交性 88%',
    description: 'ゲームは友達と楽しむもの！勝ち負けより一緒に遊ぶ時間が大切。みんなで盛り上がれるゲームが好き。',
    characteristics: ['協調性', 'チームプレイ', '友達思い', '盛り上げ上手', 'コミュニケーション'],
    recommendedGame: 'マリオパーティ、Among Us、協力型ゲーム',
  },
  casual: {
    type: 'casual',
    title: 'カジュアルゲーマー',
    emoji: '🎮',
    percentage: 'まったり度 85%',
    description: 'ゲームは気軽に楽しむもの！ストレス発散や暇つぶしにサクッとプレイ。ガチになりすぎない姿勢が魅力。',
    characteristics: ['マイペース', 'リラックス', '気楽', '楽しむ派', 'ライトユーザー'],
    recommendedGame: 'どうぶつの森、パズルゲーム、スマホゲーム',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { achiever: 0, explorer: 0, socializer: 0, casual: 0 };

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
