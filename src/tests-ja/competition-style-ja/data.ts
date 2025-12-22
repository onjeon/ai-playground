// 競争スタイル診断 - あなたの勝負への向き合い方は？
export const questions = [
  {
    id: 1,
    text: 'グループで何かを決めるとき、どうする？',
    options: [
      { text: '自分の意見を強く主張して通したい', type: 'aggressive' },
      { text: 'みんなの意見を聞いてから発言する', type: 'strategic' },
      { text: '対立を避けて流れに任せる', type: 'cooperative' },
      { text: '競争よりも全員の満足を優先', type: 'harmonious' },
    ],
  },
  {
    id: 2,
    text: '仕事で同僚と成果を比較されたら？',
    options: [
      { text: '絶対に負けたくない、燃える', type: 'aggressive' },
      { text: '冷静に分析して次に活かす', type: 'strategic' },
      { text: '比較されること自体が苦手', type: 'cooperative' },
      { text: 'お互いの良さを認め合いたい', type: 'harmonious' },
    ],
  },
  {
    id: 3,
    text: 'ゲームで友達と対戦するとき',
    options: [
      { text: '本気で勝ちにいく、手加減なし', type: 'aggressive' },
      { text: '相手の弱点を見つけて攻略', type: 'strategic' },
      { text: '勝ち負けより楽しさ重視', type: 'cooperative' },
      { text: '接戦になるように調整する', type: 'harmonious' },
    ],
  },
  {
    id: 4,
    text: '昇進のチャンスがライバルと同時に来たら？',
    options: [
      { text: '何としても自分が勝ち取る', type: 'aggressive' },
      { text: '自分の強みをアピールして差別化', type: 'strategic' },
      { text: '相手に譲ることも考える', type: 'cooperative' },
      { text: 'お互いが認められる道を探す', type: 'harmonious' },
    ],
  },
  {
    id: 5,
    text: '運動会や社内イベントでの勝負事',
    options: [
      { text: '勝つことが全て、練習も本気', type: 'aggressive' },
      { text: '効率よく勝てる作戦を立てる', type: 'strategic' },
      { text: '参加することに意義がある', type: 'cooperative' },
      { text: 'チームの雰囲気を大切にする', type: 'harmonious' },
    ],
  },
  {
    id: 6,
    text: '議論で意見が対立したとき',
    options: [
      { text: '絶対に自分の正しさを証明する', type: 'aggressive' },
      { text: '論理的に相手を説得する', type: 'strategic' },
      { text: '早めに折れて場を収める', type: 'cooperative' },
      { text: '双方の意見を統合する道を探す', type: 'harmonious' },
    ],
  },
  {
    id: 7,
    text: '負けた後の気持ちは？',
    options: [
      { text: '悔しくて仕方ない、リベンジ燃える', type: 'aggressive' },
      { text: '敗因を分析して次に活かす', type: 'strategic' },
      { text: 'まあ仕方ない、と割り切る', type: 'cooperative' },
      { text: '相手を素直に称えられる', type: 'harmonious' },
    ],
  },
  {
    id: 8,
    text: '限られたポジションを争う状況で',
    options: [
      { text: '他の候補者を出し抜いてでも獲得', type: 'aggressive' },
      { text: '自分の価値を効果的にアピール', type: 'strategic' },
      { text: '自分より適任者がいれば譲る', type: 'cooperative' },
      { text: '競争より協力で価値を生み出したい', type: 'harmonious' },
    ],
  },
  {
    id: 9,
    text: 'SNSでの「いいね」の数について',
    options: [
      { text: '他の人より多く欲しい', type: 'aggressive' },
      { text: '伸びる投稿の傾向を分析する', type: 'strategic' },
      { text: '比較せず自分のペースで', type: 'cooperative' },
      { text: '数より繋がりの質が大事', type: 'harmonious' },
    ],
  },
  {
    id: 10,
    text: '「勝ち組・負け組」という言葉について',
    options: [
      { text: '自分は絶対に勝ち組になる', type: 'aggressive' },
      { text: '定義によると思うが意識はする', type: 'strategic' },
      { text: 'そういう分け方が好きじゃない', type: 'cooperative' },
      { text: 'みんなが幸せならそれでいい', type: 'harmonious' },
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
  aggressive: {
    type: 'aggressive',
    title: 'ファイタータイプ',
    emoji: '🔥',
    percentage: '闘争心 90%',
    description: '勝利への執念が人一倍強いタイプ。負けず嫌いで、競争となると全力で挑みます。その情熱は周りを巻き込む力がある一方、時に対人関係で摩擦を生むことも。',
    characteristics: ['負けず嫌い', '情熱的', '行動力', '直接的', 'リーダーシップ'],
    advice: '勝利も大切だけど、一緒に戦う仲間との関係も大切に。',
  },
  strategic: {
    type: 'strategic',
    title: '戦略家タイプ',
    emoji: '🧠',
    percentage: '闘争心 70%',
    description: '冷静に状況を分析し、最適な戦略で勝利を目指すタイプ。感情的にならず、効率的に成果を出すのが得意。ビジネスシーンで特に強みを発揮します。',
    characteristics: ['分析力', '冷静', '計画的', '効率重視', '適応力'],
    advice: 'データだけでなく、直感や感情も時には大切な判断材料に。',
  },
  cooperative: {
    type: 'cooperative',
    title: 'マイペースタイプ',
    emoji: '🌿',
    percentage: '闘争心 40%',
    description: '競争よりも自分のペースを大切にするタイプ。勝ち負けにこだわらず、穏やかに過ごすことを好みます。周りからは癒し系と思われていることも。',
    characteristics: ['穏やか', 'マイペース', '平和主義', '受容的', 'ストレスフリー'],
    advice: '時には競争に参加することで、新しい自分を発見できるかも。',
  },
  harmonious: {
    type: 'harmonious',
    title: 'ハーモニータイプ',
    emoji: '🤝',
    percentage: '闘争心 20%',
    description: '競争よりも全員がWin-Winになることを追求するタイプ。対立を避け、調和を重んじます。チームの潤滑油として欠かせない存在です。',
    characteristics: ['協調性', '思いやり', '調整力', '公平', 'チームプレイヤー'],
    advice: '自分の意見や欲求を主張することも、時には必要ですよ。',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { aggressive: 0, strategic: 0, cooperative: 0, harmonious: 0 };

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
