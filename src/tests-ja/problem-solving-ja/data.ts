// 問題解決タイプ
export const questions = [
  {
    id: 1,
    text: '問題に直面した時、最初にすることは？',
    options: [
      { text: '情報を集めて分析する', type: 'analytical' },
      { text: 'とりあえず動いてみる', type: 'action' },
      { text: '周りの人に相談する', type: 'collaborative' },
      { text: '直感で解決策を考える', type: 'creative' },
    ],
  },
  {
    id: 2,
    text: '複雑な問題を解く時は？',
    options: [
      { text: '要素を分解して一つずつ検討', type: 'analytical' },
      { text: 'まず手を動かして試行錯誤', type: 'action' },
      { text: 'チームで議論してアイデアを出す', type: 'collaborative' },
      { text: 'ひらめきを待つ', type: 'creative' },
    ],
  },
  {
    id: 3,
    text: '解決策が見つからない時は？',
    options: [
      { text: '別の角度からデータを見直す', type: 'analytical' },
      { text: '違うアプローチで試してみる', type: 'action' },
      { text: '詳しい人にアドバイスを求める', type: 'collaborative' },
      { text: '一度離れて発想を変える', type: 'creative' },
    ],
  },
  {
    id: 4,
    text: '緊急のトラブルが発生したら？',
    options: [
      { text: '冷静に原因を特定してから対処', type: 'analytical' },
      { text: 'すぐに行動して被害を最小化', type: 'action' },
      { text: '関係者を集めて対策会議', type: 'collaborative' },
      { text: '過去の経験から直感で判断', type: 'creative' },
    ],
  },
  {
    id: 5,
    text: '問題解決に使うツールは？',
    options: [
      { text: 'フレームワークや分析ツール', type: 'analytical' },
      { text: 'プロトタイプやテスト環境', type: 'action' },
      { text: 'コミュニケーションツール', type: 'collaborative' },
      { text: 'ホワイトボードやマインドマップ', type: 'creative' },
    ],
  },
  {
    id: 6,
    text: '過去に成功した問題解決の方法は？',
    options: [
      { text: 'データ分析で根本原因を発見', type: 'analytical' },
      { text: 'スピード対応で乗り切った', type: 'action' },
      { text: 'チームの力を結集した', type: 'collaborative' },
      { text: '斬新なアイデアで解決', type: 'creative' },
    ],
  },
  {
    id: 7,
    text: '問題解決後の振り返りは？',
    options: [
      { text: '何が効果的だったかを分析', type: 'analytical' },
      { text: '次に活かせるノウハウを整理', type: 'action' },
      { text: 'チームで成功を共有', type: 'collaborative' },
      { text: '新しい発見があったか確認', type: 'creative' },
    ],
  },
  {
    id: 8,
    text: '人から問題を相談された時は？',
    options: [
      { text: '状況を整理して論理的にアドバイス', type: 'analytical' },
      { text: '具体的なアクションを提案', type: 'action' },
      { text: '一緒に考えて解決策を探る', type: 'collaborative' },
      { text: '違う視点からのアイデアを出す', type: 'creative' },
    ],
  },
  {
    id: 9,
    text: 'リスクへの対処方法は？',
    options: [
      { text: 'リスク分析をして事前に対策', type: 'analytical' },
      { text: '起きてから迅速に対応', type: 'action' },
      { text: 'チームでリスクを共有して備える', type: 'collaborative' },
      { text: '想定外のリスクにも柔軟に対応', type: 'creative' },
    ],
  },
  {
    id: 10,
    text: '問題解決で大切にしていることは？',
    options: [
      { text: '論理的で正確な分析', type: 'analytical' },
      { text: 'スピードと実行力', type: 'action' },
      { text: 'チームワークと協力', type: 'collaborative' },
      { text: '創造性と柔軟な発想', type: 'creative' },
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
  analytical: {
    type: 'analytical',
    title: '分析型ソルバー',
    emoji: '🔍',
    percentage: '分析力 95%',
    description: 'データと論理で問題を解き明かすアナリスト。根本原因を突き止め、確実な解決策を導き出します。「なぜ？」を5回繰り返す思考の達人！',
    characteristics: ['論理的', 'データ重視', '根本原因追求', '慎重', '確実性'],
    recommendation: '時にはスピードも意識してみて！',
  },
  action: {
    type: 'action',
    title: '行動型ソルバー',
    emoji: '⚡',
    percentage: '行動力 92%',
    description: 'まず動いてから考えるアクション派。試行錯誤を恐れず、スピード感を持って問題に立ち向かいます。「やってみないとわからない」精神！',
    characteristics: ['行動力', 'スピード', '試行錯誤', '実践的', '決断力'],
    recommendation: '時には立ち止まって分析する時間も！',
  },
  collaborative: {
    type: 'collaborative',
    title: '協調型ソルバー',
    emoji: '🤲',
    percentage: 'チームワーク力 90%',
    description: 'みんなの知恵を集めて問題を解決するコラボレーター。一人では思いつかない解決策もチームなら見つかると信じています。集合知の活用者！',
    characteristics: ['協調性', 'コミュニケーション', '傾聴力', 'チームビルディング', '巻き込み力'],
    recommendation: '自分一人でも解決できる力も養って！',
  },
  creative: {
    type: 'creative',
    title: '創造型ソルバー',
    emoji: '💡',
    percentage: '創造力 93%',
    description: '既存の枠にとらわれない発想で問題を解決するクリエイター。「そんな方法が！」と驚かせる斬新なアイデアを生み出します。イノベーターの素質あり！',
    characteristics: ['創造性', '柔軟性', '発想力', '直感', '型破り'],
    recommendation: '実現可能性の検証も忘れずに！',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { analytical: 0, action: 0, collaborative: 0, creative: 0 };

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
