// 先輩後輩関係タイプ診断 (선배후배 관계 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '新入社員が仕事でミスをしたら？',
    options: [
      { text: '「大丈夫、次は頑張ろう」と優しくフォロー', type: 'yasashii' },
      { text: '「なぜミスしたか」を一緒に分析する', type: 'mentaa' },
      { text: '「こうすれば良かったな」と具体的に指導', type: 'shidou' },
      { text: '「俺の時代は…」と自分の経験を話す', type: 'jibun' },
    ],
  },
  {
    id: 2,
    text: '後輩から飲み会に誘われたら？',
    options: [
      { text: '「いいね！」と二つ返事でOK', type: 'yasashii' },
      { text: '予定を確認してから返事する', type: 'mentaa' },
      { text: '「今度は俺がおごるよ」と言う', type: 'shidou' },
      { text: '「俺に付き合いたいなら…」と条件を出す', type: 'jibun' },
    ],
  },
  {
    id: 3,
    text: '後輩が先に昇進したら？',
    options: [
      { text: '心から「おめでとう！」と祝福する', type: 'yasashii' },
      { text: '「頑張ったね」と認めつつ自分も頑張る', type: 'mentaa' },
      { text: '「これからも一緒に頑張ろう」と言う', type: 'shidou' },
      { text: '正直ちょっと複雑な気持ちになる', type: 'jibun' },
    ],
  },
  {
    id: 4,
    text: '先輩として後輩に教える時は？',
    options: [
      { text: '後輩のペースに合わせて丁寧に', type: 'yasashii' },
      { text: '質問を投げかけて考えさせる', type: 'mentaa' },
      { text: 'マニュアルを作って効率的に', type: 'shidou' },
      { text: '「見て覚えろ」スタイル', type: 'jibun' },
    ],
  },
  {
    id: 5,
    text: '後輩が悩んでいる時は？',
    options: [
      { text: 'じっくり話を聞いてあげる', type: 'yasashii' },
      { text: '解決策を一緒に考える', type: 'mentaa' },
      { text: '「こうしたら？」と具体的な提案をする', type: 'shidou' },
      { text: '「俺も昔そうだった」と共感する', type: 'jibun' },
    ],
  },
  {
    id: 6,
    text: '理想の先輩後輩関係は？',
    options: [
      { text: '友達みたいにフラットな関係', type: 'yasashii' },
      { text: '信頼し合えるパートナー関係', type: 'mentaa' },
      { text: '尊敬される頼れる先輩でいたい', type: 'shidou' },
      { text: '上下関係はしっかり守りたい', type: 'jibun' },
    ],
  },
  {
    id: 7,
    text: '後輩からタメ口で話されたら？',
    options: [
      { text: '全然気にしない', type: 'yasashii' },
      { text: '状況によっては注意する', type: 'mentaa' },
      { text: 'さりげなく敬語を使うよう促す', type: 'shidou' },
      { text: '「先輩だぞ」としっかり注意', type: 'jibun' },
    ],
  },
  {
    id: 8,
    text: '後輩の成功を見た時は？',
    options: [
      { text: '自分のことのように嬉しい', type: 'yasashii' },
      { text: '成長を感じて誇らしい', type: 'mentaa' },
      { text: '「教えた甲斐があった」と満足', type: 'shidou' },
      { text: '「俺のおかげだな」と思う', type: 'jibun' },
    ],
  },
  {
    id: 9,
    text: '後輩に仕事を頼む時は？',
    options: [
      { text: '「できれば頼みたいんだけど…」と控えめに', type: 'yasashii' },
      { text: '「これ任せていい？」と信頼を示す', type: 'mentaa' },
      { text: '「これ、期日までにお願い」と明確に', type: 'shidou' },
      { text: '「やっておいて」とさらっと', type: 'jibun' },
    ],
  },
  {
    id: 10,
    text: '自分が先輩として大切にしていることは？',
    options: [
      { text: '後輩が働きやすい雰囲気作り', type: 'yasashii' },
      { text: '後輩の成長をサポートすること', type: 'mentaa' },
      { text: '正しい知識と技術を伝えること', type: 'shidou' },
      { text: '先輩としての威厳を保つこと', type: 'jibun' },
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
  famousCharacter: string;
}> = {
  yasashii: {
    type: 'yasashii',
    title: '優しいお兄さん・お姉さん先輩',
    emoji: '🤗',
    percentage: '親しみやすさ 95%',
    description: '後輩から「話しやすい」「相談しやすい」と思われるタイプ。上下関係より人間関係を大切にし、フラットなコミュニケーションを好みます。後輩の気持ちに寄り添える優しい先輩です。',
    characteristics: ['話しやすい', '相談しやすい', 'フレンドリー', '気配り上手', '包容力がある'],
    famousCharacter: '代表例：理想の先輩として慕われる存在',
  },
  mentaa: {
    type: 'mentaa',
    title: 'メンター型先輩',
    emoji: '🎓',
    percentage: '指導力 90%',
    description: '後輩の成長を第一に考え、適切なアドバイスと機会を与えるタイプ。答えを教えるのではなく、考える力を育てます。バランスの取れた理想的なリーダーシップを発揮します。',
    characteristics: ['成長志向', '適切な距離感', '信頼を築く', '質問で導く', 'フィードバック上手'],
    famousCharacter: '代表例：人材育成のプロフェッショナル',
  },
  shidou: {
    type: 'shidou',
    title: 'しっかり指導型先輩',
    emoji: '📋',
    percentage: '責任感 85%',
    description: '後輩に正しいことをしっかり教えたいという責任感が強いタイプ。時に厳しく見えることもありますが、それは後輩のためを思ってのこと。頼れる存在として信頼されます。',
    characteristics: ['責任感が強い', '明確な指示', '結果重視', '効率的', '頼りがいがある'],
    famousCharacter: '代表例：部活の厳しくも優しい先輩',
  },
  jibun: {
    type: 'jibun',
    title: '俺流スタイル先輩',
    emoji: '😎',
    percentage: '自己主張度 80%',
    description: '自分の経験や価値観を大切にするタイプ。「昔は…」が口癖になりがちですが、それも後輩に伝えたい思いの表れ。自分のスタイルを持った個性的な先輩です。',
    characteristics: ['経験重視', '自分の価値観', '上下関係を大切に', '個性的', 'プライド高め'],
    famousCharacter: '代表例：昭和気質の熱血先輩',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { yasashii: 0, mentaa: 0, shidou: 0, jibun: 0 };

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
