// 台灣心理測驗
export const questions = [
  { id: 1, text: '問題 1：你平常的行為模式是？', options: [{ text: '選項A', type: 'A' }, { text: '選項B', type: 'B' }, { text: '選項C', type: 'C' }, { text: '選項D', type: 'D' }] },
  { id: 2, text: '問題 2：面對挑戰時你會？', options: [{ text: '選項A', type: 'A' }, { text: '選項B', type: 'B' }, { text: '選項C', type: 'C' }, { text: '選項D', type: 'D' }] },
  { id: 3, text: '問題 3：你的社交方式是？', options: [{ text: '選項A', type: 'A' }, { text: '選項B', type: 'B' }, { text: '選項C', type: 'C' }, { text: '選項D', type: 'D' }] },
  { id: 4, text: '問題 4：休息時你喜歡？', options: [{ text: '選項A', type: 'A' }, { text: '選項B', type: 'B' }, { text: '選項C', type: 'C' }, { text: '選項D', type: 'D' }] },
  { id: 5, text: '問題 5：做決定時你會？', options: [{ text: '選項A', type: 'A' }, { text: '選項B', type: 'B' }, { text: '選項C', type: 'C' }, { text: '選項D', type: 'D' }] },
  { id: 6, text: '問題 6：你的工作態度是？', options: [{ text: '選項A', type: 'A' }, { text: '選項B', type: 'B' }, { text: '選項C', type: 'C' }, { text: '選項D', type: 'D' }] },
  { id: 7, text: '問題 7：遇到壓力時你會？', options: [{ text: '選項A', type: 'A' }, { text: '選項B', type: 'B' }, { text: '選項C', type: 'C' }, { text: '選項D', type: 'D' }] },
  { id: 8, text: '問題 8：你的理想生活是？', options: [{ text: '選項A', type: 'A' }, { text: '選項B', type: 'B' }, { text: '選項C', type: 'C' }, { text: '選項D', type: 'D' }] },
  { id: 9, text: '問題 9：人際關係中你重視？', options: [{ text: '選項A', type: 'A' }, { text: '選項B', type: 'B' }, { text: '選項C', type: 'C' }, { text: '選項D', type: 'D' }] },
  { id: 10, text: '問題 10：形容自己你會說？', options: [{ text: '選項A', type: 'A' }, { text: '選項B', type: 'B' }, { text: '選項C', type: 'C' }, { text: '選項D', type: 'D' }] },
];

export const results: Record<string, { type: string; title: string; description: string; traits: string[]; strengths: string[]; weaknesses: string[]; advice: string; }> = {
  A: { type: 'A', title: '類型A - 穩重踏實型', description: '你是一個穩重踏實的人。', traits: ['穩重', '踏實'], strengths: ['可靠', '細心'], weaknesses: ['過於謹慎'], advice: '適時放鬆！' },
  B: { type: 'B', title: '類型B - 熱情活力型', description: '你充滿熱情和活力。', traits: ['熱情', '活力'], strengths: ['感染力強', '善於社交'], weaknesses: ['過於衝動'], advice: '學會沉澱！' },
  C: { type: 'C', title: '類型C - 細膩敏感型', description: '你細膩敏感，有同理心。', traits: ['細膩', '敏感'], strengths: ['善於傾聽', '情感豐富'], weaknesses: ['過於敏感'], advice: '建立自信！' },
  D: { type: 'D', title: '類型D - 理性分析型', description: '你理性冷靜，善於分析。', traits: ['理性', '冷靜'], strengths: ['分析能力強', '決策明智'], weaknesses: ['過於冷漠'], advice: '多關注情感！' },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      scores[question.options[answerIndex].type]++;
    }
  });
  return results[Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0]];
}
