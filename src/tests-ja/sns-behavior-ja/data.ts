// SNS行動パターン診断 (SNS 행동 패턴 진단)
export const questions = [
  {
    id: 1,
    text: 'SNSを開く頻度は？',
    options: [
      { text: '暇さえあれば見てる', type: 'heavy' },
      { text: '1日数回チェック', type: 'balanced' },
      { text: '通知が来たら見る程度', type: 'passive' },
      { text: 'ほとんど見ない', type: 'minimal' },
    ],
  },
  {
    id: 2,
    text: '投稿の頻度は？',
    options: [
      { text: 'ほぼ毎日投稿', type: 'heavy' },
      { text: '週に数回', type: 'balanced' },
      { text: '月に1〜2回', type: 'passive' },
      { text: 'ほとんど見る専', type: 'minimal' },
    ],
  },
  {
    id: 3,
    text: 'いいね・リアクションは？',
    options: [
      { text: '目についたものはどんどん押す', type: 'heavy' },
      { text: '良いと思ったら押す', type: 'balanced' },
      { text: '本当に良いものだけ', type: 'passive' },
      { text: 'あまり押さない', type: 'minimal' },
    ],
  },
  {
    id: 4,
    text: 'フォロワー数について',
    options: [
      { text: '増やしたい、気になる', type: 'heavy' },
      { text: '自然に増えればOK', type: 'balanced' },
      { text: '特に気にしない', type: 'passive' },
      { text: '少ない方が気楽', type: 'minimal' },
    ],
  },
  {
    id: 5,
    text: 'プロフィール写真は？',
    options: [
      { text: '自撮り、こだわりの一枚', type: 'heavy' },
      { text: '自分らしい写真', type: 'balanced' },
      { text: '後ろ姿や風景', type: 'passive' },
      { text: '設定していない', type: 'minimal' },
    ],
  },
  {
    id: 6,
    text: 'ストーリーズ機能は？',
    options: [
      { text: '毎日更新', type: 'heavy' },
      { text: '面白いことがあれば', type: 'balanced' },
      { text: 'たまに見る程度', type: 'passive' },
      { text: '使わない', type: 'minimal' },
    ],
  },
  {
    id: 7,
    text: '友達の投稿にコメントは？',
    options: [
      { text: 'よくコメントする', type: 'heavy' },
      { text: '気が向いたら', type: 'balanced' },
      { text: 'いいねで済ませる', type: 'passive' },
      { text: 'ほぼしない', type: 'minimal' },
    ],
  },
  {
    id: 8,
    text: 'SNSでの自己表現は？',
    options: [
      { text: '積極的に発信、自分を見せたい', type: 'heavy' },
      { text: '適度に、自分らしく', type: 'balanced' },
      { text: '控えめ、プライベートは守る', type: 'passive' },
      { text: '見せる必要性を感じない', type: 'minimal' },
    ],
  },
  {
    id: 9,
    text: 'SNS疲れを感じる？',
    options: [
      { text: '時々感じるけど見ちゃう', type: 'heavy' },
      { text: 'バランス取れてる', type: 'balanced' },
      { text: '深入りしないから大丈夫', type: 'passive' },
      { text: 'そもそもあまり使わない', type: 'minimal' },
    ],
  },
  {
    id: 10,
    text: 'SNSとの付き合い方は？',
    options: [
      { text: '生活の一部、なくては困る', type: 'heavy' },
      { text: '便利なコミュニケーションツール', type: 'balanced' },
      { text: '情報収集程度', type: 'passive' },
      { text: 'なくても困らない', type: 'minimal' },
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
  heavy: {
    type: 'heavy',
    title: 'SNSネイティブタイプ',
    emoji: '📱',
    percentage: 'SNS依存度 90%',
    description: 'SNSが生活の一部になっているデジタルネイティブ！トレンドに敏感で発信力も抜群。フォロワーとのつながりを大切にする、ソーシャルの達人。',
    characteristics: ['発信力高い', 'トレンド敏感', 'つながり重視', '影響力あり', 'アクティブ'],
    advice: 'SNSは楽しいけど、たまにはデジタルデトックスも大切。リアルな時間も楽しんで。',
  },
  balanced: {
    type: 'balanced',
    title: 'バランスユーザータイプ',
    emoji: '⚖️',
    percentage: 'バランス度 85%',
    description: 'SNSを楽しみつつ、振り回されない絶妙なバランス感覚の持ち主。必要な時に使い、プライベートとの境界線もしっかり引ける大人のSNS術。',
    characteristics: ['バランス型', '自制心あり', '適度な発信', '健全な使い方', '柔軟'],
    advice: '理想的なSNSとの付き合い方！そのバランスを維持して楽しんで。',
  },
  passive: {
    type: 'passive',
    title: '観察者タイプ',
    emoji: '👀',
    percentage: 'ロム専度 80%',
    description: '見る専門、発信は控えめな慎重派。情報収集やつながりの確認がメイン。プライベートを守りつつ、必要な情報だけをキャッチする賢い使い方。',
    characteristics: ['慎重', 'プライバシー重視', '観察者', '情報収集型', '控えめ'],
    advice: 'プライバシーを守る姿勢は素敵。たまには自分も発信してみると新しい発見があるかも。',
  },
  minimal: {
    type: 'minimal',
    title: 'デジタルミニマリストタイプ',
    emoji: '🌿',
    percentage: 'オフライン度 95%',
    description: 'SNSに縛られない自由人！リアルな人間関係やオフラインの時間を大切にする。SNSがなくても充実した日々を送れる、ある意味最強タイプ。',
    characteristics: ['自由', 'リアル重視', 'ストレスフリー', '自分軸', 'ミニマリスト'],
    advice: '素晴らしい価値観！でもSNSで得られる情報や繋がりも時には役立ちますよ。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { heavy: 0, balanced: 0, passive: 0, minimal: 0 };

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
