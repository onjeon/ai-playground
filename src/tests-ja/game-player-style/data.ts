// ゲームプレイスタイル診断 (게임 플레이 스타일 테스트)
export const questions = [
  {
    id: 1,
    text: '新しいゲームを始める時は？',
    options: [
      { text: 'チュートリアルをスキップして即プレイ', type: 'speedster' },
      { text: '攻略サイトを事前にチェック', type: 'strategist' },
      { text: '友達と一緒にスタート', type: 'social' },
      { text: 'じっくり世界観を楽しむ', type: 'explorer' },
    ],
  },
  {
    id: 2,
    text: 'ゲームで一番楽しいのは？',
    options: [
      { text: 'ランキング上位を目指す', type: 'speedster' },
      { text: '最強キャラや装備を作る', type: 'strategist' },
      { text: 'フレンドとのマルチプレイ', type: 'social' },
      { text: '隠し要素やイースターエッグ発見', type: 'explorer' },
    ],
  },
  {
    id: 3,
    text: '難しいボスに負けたら？',
    options: [
      { text: '何度でも挑戦する', type: 'speedster' },
      { text: '攻略法を調べてから再戦', type: 'strategist' },
      { text: '上手い友達に助けてもらう', type: 'social' },
      { text: 'レベル上げしてから再挑戦', type: 'explorer' },
    ],
  },
  {
    id: 4,
    text: 'ゲーム内でアイテムを見つけたら？',
    options: [
      { text: 'すぐ使う', type: 'speedster' },
      { text: 'いつ使うか計算する', type: 'strategist' },
      { text: 'フレンドにあげる', type: 'social' },
      { text: 'コレクションに追加', type: 'explorer' },
    ],
  },
  {
    id: 5,
    text: 'ゲームをする時間帯は？',
    options: [
      { text: '時間があればいつでも', type: 'speedster' },
      { text: 'イベント時間に合わせて', type: 'strategist' },
      { text: '友達がオンラインの時', type: 'social' },
      { text: '夜、一人でじっくり', type: 'explorer' },
    ],
  },
  {
    id: 6,
    text: 'ゲームのアップデートがあったら？',
    options: [
      { text: 'すぐダウンロードして新機能を試す', type: 'speedster' },
      { text: 'パッチノートを熟読', type: 'strategist' },
      { text: '友達の反応を見てから', type: 'social' },
      { text: '新しいエリアやストーリーを期待', type: 'explorer' },
    ],
  },
  {
    id: 7,
    text: 'オンラインゲームでのコミュニケーションは？',
    options: [
      { text: '必要最低限', type: 'speedster' },
      { text: '戦略の共有が中心', type: 'strategist' },
      { text: 'チャットやボイチャで盛り上がる', type: 'social' },
      { text: 'のんびり雑談', type: 'explorer' },
    ],
  },
  {
    id: 8,
    text: 'ゲームクリア後は？',
    options: [
      { text: '次のゲームへ', type: 'speedster' },
      { text: 'やり込み要素を制覇', type: 'strategist' },
      { text: 'フレンドにおすすめする', type: 'social' },
      { text: '裏ボスや隠しエンディング探し', type: 'explorer' },
    ],
  },
  {
    id: 9,
    text: 'ゲーム内課金について？',
    options: [
      { text: '強くなれるなら課金', type: 'speedster' },
      { text: 'コスパを計算してから', type: 'strategist' },
      { text: 'フレンドとお揃いアイテムに', type: 'social' },
      { text: '気に入ったスキンやアイテムに', type: 'explorer' },
    ],
  },
  {
    id: 10,
    text: 'あなたにとってゲームとは？',
    options: [
      { text: '競争と達成感', type: 'speedster' },
      { text: '戦略と成長', type: 'strategist' },
      { text: '友達との絆', type: 'social' },
      { text: '冒険と発見', type: 'explorer' },
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
  speedster: {
    type: 'speedster',
    title: 'スピードスター',
    emoji: '⚡',
    percentage: 'スピード重視度 95%',
    description: 'とにかく速さと効率を追求するタイプ。ランキング上位、タイムアタック、最速クリアに燃えます。負けず嫌いで競争心が強い！',
    characteristics: ['競争心', '効率重視', '行動力', '負けず嫌い', '瞬発力'],
    recommendedGame: 'FPSやレースゲームで腕を磨こう！',
  },
  strategist: {
    type: 'strategist',
    title: '戦略家',
    emoji: '🧠',
    percentage: '戦略思考度 92%',
    description: '計画と分析を重視するタイプ。攻略情報を事前にチェックし、最適解を見つけてから行動。ミスを最小限に抑えるプロゲーマー気質。',
    characteristics: ['計画的', '分析力', '論理的', '情報収集', '効率追求'],
    recommendedGame: 'シミュレーションやRPGでじっくり育成！',
  },
  social: {
    type: 'social',
    title: 'ソーシャルゲーマー',
    emoji: '🎮',
    percentage: 'ソーシャル度 90%',
    description: 'ゲームは友達と楽しむもの派。マルチプレイ、ギルド活動、ボイスチャットでワイワイするのが至福の時間。ゲームは絆を深めるツール！',
    characteristics: ['社交的', '協調性', 'チームワーク', 'コミュ力', '楽しさ重視'],
    recommendedGame: 'COOPゲームやMMOで仲間と冒険！',
  },
  explorer: {
    type: 'explorer',
    title: '探検家タイプ',
    emoji: '🗺️',
    percentage: '探求度 88%',
    description: 'ゲームの世界を隅々まで楽しむタイプ。隠し要素、イースターエッグ、サブクエストを全制覇。ストーリーや世界観への没入度が高い。',
    characteristics: ['好奇心', '探求心', '没入型', 'こだわり', 'ストーリー重視'],
    recommendedGame: 'オープンワールドRPGで世界を冒険！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { speedster: 0, strategist: 0, social: 0, explorer: 0 };

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
