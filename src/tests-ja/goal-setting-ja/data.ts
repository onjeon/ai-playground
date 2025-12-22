// 目標設定タイプ診断 - あなたはどんな目標の立て方をする？
export const questions = [
  {
    id: 1,
    text: '新年の抱負を立てるとき、どうする？',
    options: [
      { text: '具体的な数値目標を設定する', type: 'strategic' },
      { text: '「なんとなくこうなりたい」くらい', type: 'flexible' },
      { text: '達成可能な小さな目標をいくつか', type: 'steady' },
      { text: '壮大な夢を掲げる', type: 'dreamer' },
    ],
  },
  {
    id: 2,
    text: 'ダイエットを始めるなら？',
    options: [
      { text: '「3ヶ月で5kg」など具体的に決める', type: 'strategic' },
      { text: '体重計に乗らず感覚で判断', type: 'flexible' },
      { text: '「毎日少し運動」など習慣化を優先', type: 'steady' },
      { text: '理想のボディを妄想してモチベーション', type: 'dreamer' },
    ],
  },
  {
    id: 3,
    text: '仕事で大きなプロジェクトを任されたら？',
    options: [
      { text: 'マイルストーンを設定して計画を立てる', type: 'strategic' },
      { text: 'とりあえず動きながら考える', type: 'flexible' },
      { text: '毎日コツコツ進める', type: 'steady' },
      { text: '完成形の理想像を明確にイメージ', type: 'dreamer' },
    ],
  },
  {
    id: 4,
    text: '目標を達成できなかったとき、どう感じる？',
    options: [
      { text: '原因を分析して次に活かす', type: 'strategic' },
      { text: '「まあいいか」と気にしない', type: 'flexible' },
      { text: '少し凹むけど続けることが大事', type: 'steady' },
      { text: '目標が大きすぎたかも、と夢を修正', type: 'dreamer' },
    ],
  },
  {
    id: 5,
    text: '1年後の自分をどう想像する？',
    options: [
      { text: '具体的なスキルや収入を想定', type: 'strategic' },
      { text: 'あまり考えない、なるようになる', type: 'flexible' },
      { text: '今の延長線上で少し成長した姿', type: 'steady' },
      { text: '理想の生活やキャリアを妄想', type: 'dreamer' },
    ],
  },
  {
    id: 6,
    text: '資格試験に挑戦するとき',
    options: [
      { text: '勉強スケジュールを細かく立てる', type: 'strategic' },
      { text: 'やる気が出たときに集中して勉強', type: 'flexible' },
      { text: '毎日30分など習慣を作る', type: 'steady' },
      { text: '合格後の自分を想像してワクワク', type: 'dreamer' },
    ],
  },
  {
    id: 7,
    text: '貯金の目標を立てるなら？',
    options: [
      { text: '「年間◯万円」と数字で管理', type: 'strategic' },
      { text: '余ったら貯金する感じ', type: 'flexible' },
      { text: '毎月定額を自動積立', type: 'steady' },
      { text: '「これを買うため」という夢で貯金', type: 'dreamer' },
    ],
  },
  {
    id: 8,
    text: '目標に対するモチベーションはどこから？',
    options: [
      { text: '進捗が見えることで維持', type: 'strategic' },
      { text: 'そのときの気分次第', type: 'flexible' },
      { text: '継続できている自分への満足感', type: 'steady' },
      { text: '夢を叶えた姿を想像すること', type: 'dreamer' },
    ],
  },
  {
    id: 9,
    text: '目標を人に話す？',
    options: [
      { text: '話して自分を追い込む', type: 'strategic' },
      { text: 'あまり話さない、変わるかもしれないし', type: 'flexible' },
      { text: '親しい人には話す', type: 'steady' },
      { text: '話すと夢が膨らんで楽しい', type: 'dreamer' },
    ],
  },
  {
    id: 10,
    text: '目標達成のために最も大切だと思うことは？',
    options: [
      { text: '計画と実行力', type: 'strategic' },
      { text: '柔軟性と臨機応変さ', type: 'flexible' },
      { text: '継続と習慣化', type: 'steady' },
      { text: 'ビジョンと情熱', type: 'dreamer' },
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
  strategic: {
    type: 'strategic',
    title: '戦略家タイプ',
    emoji: '📊',
    percentage: '計画力 95%',
    description: '目標を数値化し、計画的に達成するあなた。PDCAサイクルを回すのが得意で、ビジネスでも高い成果を出せるタイプ。データと論理で自分を動かす、現代的な目標達成者です。',
    characteristics: ['論理的', '計画性がある', '数字に強い', '分析力', '自己管理能力'],
    advice: '計画も大事だけど、たまには直感で動いてみるのも新しい発見があるかも。',
  },
  flexible: {
    type: 'flexible',
    title: '自由人タイプ',
    emoji: '🌊',
    percentage: '柔軟性 90%',
    description: '目標にこだわりすぎず、流れに身を任せるあなた。「なるようになる」精神で、ストレスなく人生を楽しめます。縛られない自由さが魅力ですが、時には目標があった方が力を発揮できるかも。',
    characteristics: ['柔軟', 'ストレスフリー', '臨機応変', '楽観的', '自然体'],
    advice: 'たまには小さな目標を立ててみて。達成感が新しい原動力になるかも。',
  },
  steady: {
    type: 'steady',
    title: 'コツコツ積み上げタイプ',
    emoji: '🐢',
    percentage: '継続力 95%',
    description: '派手な目標より日々の積み重ねを大切にするあなた。「継続は力なり」を体現し、気づいたら大きな成果を出しているタイプ。地道な努力ができるのは、実は最強のスキルです。',
    characteristics: ['継続力', '忍耐力', '真面目', '習慣化が得意', '信頼される'],
    advice: 'その継続力は最大の武器。たまには大きな夢も描いてみて、可能性が広がるかも。',
  },
  dreamer: {
    type: 'dreamer',
    title: 'ビジョナリータイプ',
    emoji: '🌟',
    percentage: '夢想力 100%',
    description: '大きな夢を描いてそれに向かって突き進むあなた。理想を語ることでモチベーションを高め、周りも巻き込む力があります。夢を持つことで人生が輝くことを知っているタイプです。',
    characteristics: ['情熱的', '影響力がある', '想像力豊か', 'カリスマ性', 'ポジティブ'],
    advice: '素敵な夢を持ち続けて。でも小さな一歩を忘れずに、夢は行動で実現するから。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { strategic: 0, flexible: 0, steady: 0, dreamer: 0 };

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
