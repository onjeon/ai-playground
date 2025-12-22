export const questions = [
  {
    id: 1,
    text: 'दूसरों को समझने में कैसे हैं?',
    options: [
      { text: 'बहुत अच्छा, empathetic हूं', type: 'A' },
      { text: 'अच्छा', type: 'B' },
      { text: 'Average', type: 'C' },
      { text: 'मुश्किल है', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Different perspectives देख पाते हैं?',
    options: [
      { text: 'हां, easily', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Emotional intelligence कैसी है?',
    options: [
      { text: 'High, aware हूं', type: 'A' },
      { text: 'Good', type: 'B' },
      { text: 'Average', type: 'C' },
      { text: 'Low', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'जब कोई upset हो तो sense कर पाते हैं?',
    options: [
      { text: 'तुरंत', type: 'A' },
      { text: 'ज्यादातर', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Judging vs understanding में कौन पहले आता है?',
    options: [
      { text: 'Understanding always', type: 'A' },
      { text: 'Try करता हूं understand', type: 'B' },
      { text: 'Often judge first', type: 'C' },
      { text: 'Judge करता हूं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Cultural differences समझने में कैसे हैं?',
    options: [
      { text: 'बहुत open और respectful', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'थोड़ा struggle', type: 'C' },
      { text: 'Difficult', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Complex situations को समझना कैसा है?',
    options: [
      { text: 'Good at it', type: 'A' },
      { text: 'कर पाता हूं', type: 'B' },
      { text: 'Struggle', type: 'C' },
      { text: 'बहुत मुश्किल', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'खुद को कितना समझते हैं?',
    options: [
      { text: 'बहुत well, self-aware हूं', type: 'A' },
      { text: 'अच्छी तरह', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'नहीं समझता', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Patience रखते हैं समझने के लिए?',
    options: [
      { text: 'हां, जितना जरूरी हो', type: 'A' },
      { text: 'ज्यादातर', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Assumptions vs asking में क्या करते हैं?',
    options: [
      { text: 'Ask करता हूं, assumptions से बचता हूं', type: 'A' },
      { text: 'Try करता हूं ask', type: 'B' },
      { text: 'Often assume', type: 'C' },
      { text: 'Assume करता हूं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'जब समझ न आए तो क्या करते हैं?',
    options: [
      { text: 'Questions पूछता हूं', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'Leave it', type: 'C' },
      { text: 'Frustrated हो जाता हूं', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall understanding और empathy कैसी है?',
    options: [
      { text: 'बहुत अच्छी', type: 'A' },
      { text: 'अच्छी', type: 'B' },
      { text: 'Average', type: 'C' },
      { text: 'Poor', type: 'D' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  weaknesses: string[];
  advice: string;
}> = {
  A: {
    type: 'A',
    title: 'गहरी समझ',
    emoji: '🧠',
    description: 'बहुत understanding और empathetic हैं। दूसरों को और खुद को अच्छी तरह समझते हैं।',
    traits: ['empathetic', 'understanding', 'wise', 'patient'],
    weaknesses: ['may take on others\' emotions'],
    advice: 'Beautiful quality! Protect your energy।',
  },
  B: {
    type: 'B',
    title: 'अच्छी समझ',
    emoji: '💭',
    description: 'Good understanding है। Empathetic और patient हैं।',
    traits: ['understanding', 'empathetic', 'trying'],
    weaknesses: ['can improve more'],
    advice: 'Keep growing। Practice perspective-taking।',
  },
  C: {
    type: 'C',
    title: 'सामान्य समझ',
    emoji: '😐',
    description: 'Understanding average है। Sometimes misunderstandings होती हैं।',
    traits: ['average understanding', 'sometimes judging'],
    weaknesses: ['conflicts possible', 'missed connections'],
    advice: 'Practice empathy। Listen more। Ask questions।',
  },
  D: {
    type: 'D',
    title: 'समझ में कमी',
    emoji: '😔',
    description: 'Understanding में difficulty है। यह relationships affect कर रहा है।',
    traits: ['lacking empathy', 'judging', 'impatient'],
    weaknesses: ['relationship problems', 'isolation'],
    advice: 'Empathy develop करें। Therapy helpful हो सकती है।',
  },
};

export function calculateResult(answers: number[]) {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      scores[question.options[answerIndex].type]++;
    }
  });
  const resultType = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  return results[resultType];
}
