// デートプラン診断 (데이트 플래닝 테스트)
export const questions = [
  {
    id: 1,
    text: 'デートの計画はどうする？',
    options: [
      { text: '事前に完璧なプランを立てる', type: 'planner' },
      { text: 'その日の気分で決める', type: 'spontaneous' },
      { text: '相手の希望を優先する', type: 'accommodating' },
      { text: 'サプライズを仕込む', type: 'romantic' },
    ],
  },
  {
    id: 2,
    text: '理想のデートスポットは？',
    options: [
      { text: '話題のレストランや観光地', type: 'planner' },
      { text: '偶然見つけた穴場スポット', type: 'spontaneous' },
      { text: '相手が行きたい場所', type: 'accommodating' },
      { text: '夜景やイルミネーション', type: 'romantic' },
    ],
  },
  {
    id: 3,
    text: 'デート中のトラブルへの対応は？',
    options: [
      { text: '予備プランがあるから大丈夫', type: 'planner' },
      { text: 'トラブルも楽しむ', type: 'spontaneous' },
      { text: '相手の意見を聞いて決める', type: 'accommodating' },
      { text: 'ピンチをチャンスに変える', type: 'romantic' },
    ],
  },
  {
    id: 4,
    text: 'デートの時間配分は？',
    options: [
      { text: 'スケジュール通りに進める', type: 'planner' },
      { text: '時間を気にせず過ごす', type: 'spontaneous' },
      { text: '相手のペースに合わせる', type: 'accommodating' },
      { text: '最後にサプライズの時間を確保', type: 'romantic' },
    ],
  },
  {
    id: 5,
    text: 'デート中の食事選びは？',
    options: [
      { text: '事前に予約したお店', type: 'planner' },
      { text: '歩きながら良さそうな店に入る', type: 'spontaneous' },
      { text: '相手が食べたいものを聞く', type: 'accommodating' },
      { text: '雰囲気の良いお店を選ぶ', type: 'romantic' },
    ],
  },
  {
    id: 6,
    text: '記念日のデートは？',
    options: [
      { text: '数週間前から計画を練る', type: 'planner' },
      { text: '特別な日でも普段通りに', type: 'spontaneous' },
      { text: '相手の喜ぶことを最優先', type: 'accommodating' },
      { text: '忘れられないサプライズを', type: 'romantic' },
    ],
  },
  {
    id: 7,
    text: 'デートの待ち合わせは？',
    options: [
      { text: '時間厳守、早めに到着', type: 'planner' },
      { text: 'だいたいの時間で合流', type: 'spontaneous' },
      { text: '相手の都合に合わせる', type: 'accommodating' },
      { text: '花を持って待つ', type: 'romantic' },
    ],
  },
  {
    id: 8,
    text: 'デート後の連絡は？',
    options: [
      { text: '次のデートの約束をする', type: 'planner' },
      { text: '「また会おうね」とゆるく', type: 'spontaneous' },
      { text: '相手から連絡を待つ', type: 'accommodating' },
      { text: '「今日は最高だった」と感謝を伝える', type: 'romantic' },
    ],
  },
  {
    id: 9,
    text: 'デートの予算は？',
    options: [
      { text: '事前に決めて管理する', type: 'planner' },
      { text: '成り行きで使う', type: 'spontaneous' },
      { text: '相手の負担にならないように', type: 'accommodating' },
      { text: '大切な日はお金を惜しまない', type: 'romantic' },
    ],
  },
  {
    id: 10,
    text: '理想のデートの終わり方は？',
    options: [
      { text: '予定通りスムーズに解散', type: 'planner' },
      { text: '「もう少しいよう」と延長', type: 'spontaneous' },
      { text: '相手の帰りの時間に合わせる', type: 'accommodating' },
      { text: '夜景を見ながら告白', type: 'romantic' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  dateStyle: string[];
  strengths: string[];
  improvements: string[];
}> = {
  planner: {
    type: 'planner',
    title: '完璧プランナータイプ',
    emoji: '📋',
    description: 'あなたは計画的にデートを楽しむタイプ！事前リサーチと綿密なスケジュールで、失敗のないデートを演出。安心感と頼りがいがあります。',
    dateStyle: ['事前に計画を立てる', '予約必須', '時間管理が得意'],
    strengths: ['失敗が少ない', '相手を待たせない', '効率的なデート'],
    improvements: ['臨機応変さも大切に', 'ハプニングも楽しんで', '相手の意見も取り入れて'],
  },
  spontaneous: {
    type: 'spontaneous',
    title: '気まま冒険タイプ',
    emoji: '🎲',
    description: 'あなたはその場の流れを楽しむタイプ！計画に縛られず、偶然の出会いや発見を楽しみます。一緒にいるとワクワクする魅力があります。',
    dateStyle: ['その場で決める', '偶然を楽しむ', '時間に縛られない'],
    strengths: ['新鮮さがある', '柔軟に対応', '冒険心がある'],
    improvements: ['大事な日は計画も', '相手の不安も考慮して', '最低限の下調べはしよう'],
  },
  accommodating: {
    type: 'accommodating',
    title: '思いやり献身タイプ',
    emoji: '💕',
    description: 'あなたは相手を最優先にするタイプ！相手の希望や気持ちに寄り添い、喜ばせることに幸せを感じます。優しさと思いやりが魅力。',
    dateStyle: ['相手の希望を優先', '気遣いを忘れない', '相手のペースに合わせる'],
    strengths: ['相手が居心地良い', '気配り上手', '信頼される'],
    improvements: ['自分の希望も伝えて', '尽くしすぎに注意', 'リードする場面も作ろう'],
  },
  romantic: {
    type: 'romantic',
    title: 'ロマンチスト演出タイプ',
    emoji: '✨',
    description: 'あなたはロマンチックな演出が得意なタイプ！サプライズや特別な瞬間を大切にし、思い出に残るデートを創り出します。恋愛映画のような雰囲気。',
    dateStyle: ['サプライズを仕込む', 'ロマンチックな場所選び', '特別な瞬間を演出'],
    strengths: ['記憶に残るデート', '感動を与える', '恋愛上手'],
    improvements: ['日常のデートも大切に', '相手の好みを確認', '自己満足にならないように'],
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { planner: 0, spontaneous: 0, accommodating: 0, romantic: 0 };

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
