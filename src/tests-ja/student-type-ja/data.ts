// 生徒タイプ診断 (학생 유형 테스트)
export const questions = [
  {
    id: 1,
    text: '授業中のあなたは？',
    options: [
      { text: '積極的に質問や発言をする', type: 'active' },
      { text: 'ノートをきっちり取る', type: 'diligent' },
      { text: '興味がある話だけ集中', type: 'selective' },
      { text: '友達と話したり、別のことを考えたり', type: 'social' },
    ],
  },
  {
    id: 2,
    text: 'テスト勉強のスタイルは？',
    options: [
      { text: '先生に質問しまくる', type: 'active' },
      { text: '計画的にコツコツ', type: 'diligent' },
      { text: '得意科目を重点的に', type: 'selective' },
      { text: '友達と一緒に勉強', type: 'social' },
    ],
  },
  {
    id: 3,
    text: '分からないことがあったら？',
    options: [
      { text: 'すぐに先生に聞く', type: 'active' },
      { text: '教科書や参考書で調べる', type: 'diligent' },
      { text: 'ネットで検索', type: 'selective' },
      { text: '友達に聞く', type: 'social' },
    ],
  },
  {
    id: 4,
    text: 'グループ活動では？',
    options: [
      { text: 'リーダーシップを取る', type: 'active' },
      { text: '与えられた役割を真面目にこなす', type: 'diligent' },
      { text: '得意な部分だけ担当', type: 'selective' },
      { text: '雰囲気を盛り上げる', type: 'social' },
    ],
  },
  {
    id: 5,
    text: '学校生活で大切にしていることは？',
    options: [
      { text: '自分を成長させること', type: 'active' },
      { text: '勉強で結果を出すこと', type: 'diligent' },
      { text: '好きなことを極めること', type: 'selective' },
      { text: '友達との時間', type: 'social' },
    ],
  },
  {
    id: 6,
    text: '宿題への取り組みは？',
    options: [
      { text: 'さらに発展させて提出', type: 'active' },
      { text: '期限内にきっちり提出', type: 'diligent' },
      { text: '興味があるものだけ頑張る', type: 'selective' },
      { text: '友達と一緒にやる', type: 'social' },
    ],
  },
  {
    id: 7,
    text: '好きな科目と苦手な科目は？',
    options: [
      { text: '苦手も克服しようとする', type: 'active' },
      { text: 'バランスよく勉強', type: 'diligent' },
      { text: '好きな科目に全力投球', type: 'selective' },
      { text: '友達と一緒なら何でも楽しい', type: 'social' },
    ],
  },
  {
    id: 8,
    text: '先生との関係は？',
    options: [
      { text: '積極的にコミュニケーション', type: 'active' },
      { text: '礼儀正しく真面目', type: 'diligent' },
      { text: '好きな先生とだけ仲良し', type: 'selective' },
      { text: '友達を通じて関わる', type: 'social' },
    ],
  },
  {
    id: 9,
    text: '部活やクラブ活動は？',
    options: [
      { text: '複数掛け持ち、何でも挑戦', type: 'active' },
      { text: '一つに集中して継続', type: 'diligent' },
      { text: '好きなことだけやる', type: 'selective' },
      { text: '友達がいるところに入る', type: 'social' },
    ],
  },
  {
    id: 10,
    text: '学校生活の思い出になりそうなことは？',
    options: [
      { text: '挑戦したこと・成長したこと', type: 'active' },
      { text: '努力して結果を出したこと', type: 'diligent' },
      { text: '好きなことに没頭したこと', type: 'selective' },
      { text: '友達との楽しい時間', type: 'social' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  studentStyle: string[];
  strengths: string[];
  advice: string[];
}> = {
  active: {
    type: 'active',
    title: '積極参加型生徒',
    emoji: '🙋',
    description: 'あなたは授業に積極的に参加するアクティブな生徒！質問や発言を恐れず、自ら学びに向かいます。成長意欲が高く、何事にも挑戦するタイプ。',
    studentStyle: ['積極的に発言', '先生に質問', 'リーダーシップを取る'],
    strengths: ['成長が早い', '存在感がある', '先生に覚えられる'],
    advice: ['周りのペースも大切に', '出しゃばりすぎないで', '聞く姿勢も大切'],
  },
  diligent: {
    type: 'diligent',
    title: 'コツコツ努力型生徒',
    emoji: '📚',
    description: 'あなたは真面目にコツコツ取り組む優等生タイプ！計画的に勉強し、着実に成果を出します。先生からの信頼も厚い模範的な生徒。',
    studentStyle: ['計画的な勉強', 'ノートをきっちり', '提出物は期限厳守'],
    strengths: ['安定した成績', '信頼される', '継続力がある'],
    advice: ['たまには息抜きも', '完璧主義になりすぎないで', '楽しむことも大切'],
  },
  selective: {
    type: 'selective',
    title: '好奇心特化型生徒',
    emoji: '🔍',
    description: 'あなたは興味のあることに全力投球するタイプ！好きな分野では誰にも負けない知識と情熱を持っています。専門家タイプの生徒。',
    studentStyle: ['好きなことに集中', '得意科目を極める', '興味で動く'],
    strengths: ['深い知識', '情熱がある', '専門性が高い'],
    advice: ['苦手科目も最低限は', 'バランスも意識して', '視野を広げよう'],
  },
  social: {
    type: 'social',
    title: '交友関係重視型生徒',
    emoji: '👥',
    description: 'あなたは友達との時間を大切にする社交的な生徒！学校生活を楽しみ、友達と一緒に学ぶことで力を発揮します。ムードメーカータイプ。',
    studentStyle: ['友達と一緒に勉強', '雰囲気を盛り上げる', '人間関係重視'],
    strengths: ['友達が多い', '楽しい学校生活', 'コミュニケーション力'],
    advice: ['勉強時間も確保して', '一人でも頑張れるように', '友達に流されすぎないで'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { active: 0, diligent: 0, selective: 0, social: 0 };

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
