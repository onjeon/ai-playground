// レストラン選びタイプ診断
export const questions = [
  {
    id: 1,
    text: 'レストランを選ぶとき、最初にチェックするのは？',
    options: [
      { text: '口コミ評価や星の数', type: 'review' },
      { text: '料理の写真や見た目', type: 'visual' },
      { text: '価格やコスパ', type: 'value' },
      { text: '雰囲気や立地', type: 'atmosphere' },
    ],
  },
  {
    id: 2,
    text: '新しいレストランを見つける方法は？',
    options: [
      { text: 'グルメサイトでリサーチ', type: 'review' },
      { text: 'SNSで話題のお店をチェック', type: 'visual' },
      { text: '友人のおすすめ', type: 'value' },
      { text: '街を歩いて発見', type: 'atmosphere' },
    ],
  },
  {
    id: 3,
    text: '予約する前に必ず確認することは？',
    options: [
      { text: '評価とレビュー内容', type: 'review' },
      { text: '料理の写真', type: 'visual' },
      { text: 'メニューの価格帯', type: 'value' },
      { text: '店内の雰囲気', type: 'atmosphere' },
    ],
  },
  {
    id: 4,
    text: '初めてのお店で重視するのは？',
    options: [
      { text: '評判通りか確認したい', type: 'review' },
      { text: '映える料理を期待', type: 'visual' },
      { text: '値段に見合った満足感', type: 'value' },
      { text: '居心地の良さ', type: 'atmosphere' },
    ],
  },
  {
    id: 5,
    text: 'デートのお店選びは？',
    options: [
      { text: '失敗しない高評価店', type: 'review' },
      { text: 'おしゃれで映えるお店', type: 'visual' },
      { text: '相手に合わせた予算で', type: 'value' },
      { text: 'ロマンチックな雰囲気', type: 'atmosphere' },
    ],
  },
  {
    id: 6,
    text: '行列のできるお店について',
    options: [
      { text: '並ぶ価値があるか調べる', type: 'review' },
      { text: '話題なら並んでみたい', type: 'visual' },
      { text: '並ぶ時間がもったいない', type: 'value' },
      { text: '空いてる時間を狙う', type: 'atmosphere' },
    ],
  },
  {
    id: 7,
    text: '期待外れだった時の反応は？',
    options: [
      { text: 'レビューを参考にしたのに…', type: 'review' },
      { text: '写真と違う…', type: 'visual' },
      { text: 'コスパが悪い…', type: 'value' },
      { text: '雰囲気が想像と違った', type: 'atmosphere' },
    ],
  },
  {
    id: 8,
    text: 'お店の「売り」として惹かれるのは？',
    options: [
      { text: 'ミシュラン星付き、受賞歴', type: 'review' },
      { text: 'インスタ映え、フォトジェニック', type: 'visual' },
      { text: 'コスパ最強、お得', type: 'value' },
      { text: '隠れ家的、特別な空間', type: 'atmosphere' },
    ],
  },
  {
    id: 9,
    text: 'リピートする決め手は？',
    options: [
      { text: '期待通りの質だった', type: 'review' },
      { text: '写真を撮りたくなる', type: 'visual' },
      { text: '満足度が高い', type: 'value' },
      { text: '居心地が良かった', type: 'atmosphere' },
    ],
  },
  {
    id: 10,
    text: 'レストラン選びで大切なのは？',
    options: [
      { text: '確実な美味しさの保証', type: 'review' },
      { text: '見た目の楽しさ', type: 'visual' },
      { text: '納得のコストパフォーマンス', type: 'value' },
      { text: '特別な時間を過ごせること', type: 'atmosphere' },
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
  review: {
    type: 'review',
    title: '口コミ重視派',
    emoji: '⭐',
    percentage: 'リサーチ力 95%',
    description: '失敗したくない！だから口コミや評価をしっかりチェック。高評価のお店なら安心して行ける。情報収集力バツグンのグルメ研究家。',
    characteristics: ['慎重', 'リサーチ好き', '失敗を避ける', '信頼重視', '効率的'],
    advice: '口コミも大切ですが、たまには直感を信じた冒険も楽しいですよ♪',
  },
  visual: {
    type: 'visual',
    title: 'ビジュアル重視派',
    emoji: '📸',
    percentage: '映え度 92%',
    description: '料理は見た目も大事！SNSで話題のお店、フォトジェニックな料理に惹かれる。食べる前にまず写真、が日常のビジュアル系グルメ。',
    characteristics: ['トレンド敏感', 'SNS好き', '美意識高い', '新しいもの好き', '発信力'],
    advice: '見た目も大切ですが、味や雰囲気も楽しんでみてくださいね♪',
  },
  value: {
    type: 'value',
    title: 'コスパ重視派',
    emoji: '💰',
    percentage: 'コスパ意識 90%',
    description: '美味しさと価格のバランスが大事！お得に美味しいものを食べたい堅実派。財布の紐はしっかり、でも満足度は高く！',
    characteristics: ['堅実', '計算上手', '満足度重視', '賢い消費者', 'バランス感覚'],
    advice: 'たまには贅沢して、特別な食体験もしてみては♪',
  },
  atmosphere: {
    type: 'atmosphere',
    title: '雰囲気重視派',
    emoji: '🕯️',
    percentage: '空間感度 88%',
    description: '料理だけじゃない、その空間で過ごす時間が大切。居心地の良さ、雰囲気、特別感を求める。食事は体験の一部と考えるロマンチスト。',
    characteristics: ['感性豊か', 'ロマンチスト', '体験重視', '空間を大切に', 'こだわり派'],
    advice: '素敵な感性ですね！雰囲気と料理、両方揃ったお店を見つけましょう♪',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { review: 0, visual: 0, value: 0, atmosphere: 0 };

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
