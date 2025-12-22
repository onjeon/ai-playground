// 夢解釈タイプ診断 - あなたは夢をどう読み解く？
export const questions = [
  {
    id: 1,
    text: '印象的な夢を見た朝、最初に思うことは？',
    options: [
      { text: '「これは何かの予兆かも…」', type: 'mystical' },
      { text: '「最近のストレスが原因かな」', type: 'psychological' },
      { text: '「面白い夢だったな」で終わり', type: 'casual' },
      { text: '「脳が情報を整理してるだけ」', type: 'scientific' },
    ],
  },
  {
    id: 2,
    text: '夢占いの本やサイトを見ることがある？',
    options: [
      { text: 'よく見る、当たると思う', type: 'mystical' },
      { text: '参考程度に見ることがある', type: 'psychological' },
      { text: '暇つぶしに見る程度', type: 'casual' },
      { text: 'まったく信じていない', type: 'scientific' },
    ],
  },
  {
    id: 3,
    text: '怖い夢を見た後は？',
    options: [
      { text: '何か悪いことが起きる予感…', type: 'mystical' },
      { text: '心に不安があるのかもと内省', type: 'psychological' },
      { text: '「夢でよかった」と安心して忘れる', type: 'casual' },
      { text: 'レム睡眠の影響だと割り切る', type: 'scientific' },
    ],
  },
  {
    id: 4,
    text: '夢に出てきた人について',
    options: [
      { text: 'その人との縁を感じる', type: 'mystical' },
      { text: 'その人に対する感情を分析する', type: 'psychological' },
      { text: '最近会ったか思い出す程度', type: 'casual' },
      { text: '記憶がランダムに再生されただけ', type: 'scientific' },
    ],
  },
  {
    id: 5,
    text: '同じ夢を繰り返し見たら？',
    options: [
      { text: '重要なメッセージがあるはず', type: 'mystical' },
      { text: '解決していない問題があるのかも', type: 'psychological' },
      { text: '「またか」と思うだけ', type: 'casual' },
      { text: '脳の記憶パターンの問題', type: 'scientific' },
    ],
  },
  {
    id: 6,
    text: '正夢（予知夢）についてどう思う？',
    options: [
      { text: '絶対にあると思う', type: 'mystical' },
      { text: '潜在意識が未来を予測しているのかも', type: 'psychological' },
      { text: '偶然の一致でしょ', type: 'casual' },
      { text: '確証バイアスで当たった時だけ覚えてる', type: 'scientific' },
    ],
  },
  {
    id: 7,
    text: '夢日記をつけることについて',
    options: [
      { text: 'つけている、または興味がある', type: 'mystical' },
      { text: '自己分析に役立ちそう', type: 'psychological' },
      { text: '面倒だからつけない', type: 'casual' },
      { text: '科学的な意味はないと思う', type: 'scientific' },
    ],
  },
  {
    id: 8,
    text: '夢の中で「これは夢だ」と気づいたことは？',
    options: [
      { text: 'ある！夢をコントロールしようとした', type: 'mystical' },
      { text: '気づいたけど、なぜか分析した', type: 'psychological' },
      { text: '気づいたらすぐ目が覚めた', type: 'casual' },
      { text: '明晰夢のメカニズムに興味がある', type: 'scientific' },
    ],
  },
  {
    id: 9,
    text: '「蛇の夢は金運アップ」と聞いたら？',
    options: [
      { text: '信じる！宝くじ買おうかな', type: 'mystical' },
      { text: '蛇が象徴するものを考える', type: 'psychological' },
      { text: 'へーそうなんだ、程度', type: 'casual' },
      { text: '統計的根拠がないから信じない', type: 'scientific' },
    ],
  },
  {
    id: 10,
    text: '夢を見ない（覚えていない）日が続くと？',
    options: [
      { text: 'メッセージを受け取れなくて少し不安', type: 'mystical' },
      { text: '心が穏やかな証拠かなと思う', type: 'psychological' },
      { text: '特に何も思わない', type: 'casual' },
      { text: '睡眠の質が良い証拠', type: 'scientific' },
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
  mystical: {
    type: 'mystical',
    title: 'スピリチュアル解釈タイプ',
    emoji: '🔮',
    percentage: '神秘度 90%',
    description: '夢を宇宙や潜在意識からのメッセージとして捉えるタイプ。直感を大切にし、夢から人生のヒントを得ようとします。想像力が豊かで、目に見えないものを信じる心を持っています。',
    characteristics: ['直感的', '神秘主義', '感受性が高い', 'ロマンチスト', '想像力豊か'],
    advice: '直感を大切にしつつも、現実とのバランスも意識してみて。夢をポジティブに活用する姿勢は素敵！',
  },
  psychological: {
    type: 'psychological',
    title: '深層心理分析タイプ',
    emoji: '🧠',
    percentage: '神秘度 60%',
    description: '夢を自分の心理状態を映す鏡として見るタイプ。フロイトやユングのように、夢には意味があると考えつつも、科学的・心理学的な視点で解釈しようとします。',
    characteristics: ['分析的', '内省的', '心理学に興味', '自己理解を重視', '知的好奇心旺盛'],
    advice: '夢を自己理解のツールにする姿勢はGood！ただし分析しすぎず、シンプルに楽しむことも大切に。',
  },
  casual: {
    type: 'casual',
    title: 'あっさりスルータイプ',
    emoji: '😴',
    percentage: '神秘度 25%',
    description: '夢は夢、現実は現実と割り切れるタイプ。深く考えすぎず、面白い夢は話のネタにする程度。良い意味で夢に振り回されない、地に足のついた人です。',
    characteristics: ['現実主義', 'さっぱり', '切り替え上手', 'ストレスを溜めない', '楽観的'],
    advice: 'その気軽さはストレス管理に最適！たまには夢の不思議さを楽しんでみるのも良いかも。',
  },
  scientific: {
    type: 'scientific',
    title: '科学的合理タイプ',
    emoji: '🔬',
    percentage: '神秘度 10%',
    description: '夢を脳の情報処理として科学的に捉えるタイプ。レム睡眠や記憶の整理など、夢のメカニズムに興味があります。論理的で、根拠のないことは信じない合理主義者。',
    characteristics: ['論理的', '懐疑的', '科学重視', '冷静', 'データ主義'],
    advice: '科学的な視点は大切！でもたまには理屈を離れて、夢の不思議を純粋に楽しんでみては？',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { mystical: 0, psychological: 0, casual: 0, scientific: 0 };

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
