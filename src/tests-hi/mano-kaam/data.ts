export const questions = [
  {
    id: 1,
    text: 'अपने काम से कितने खुश हैं?',
    options: [
      { text: 'बहुत, passion है', type: 'A' },
      { text: 'खुश हूं', type: 'B' },
      { text: 'ठीक-ठाक', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'काम पर जाने का मन कैसा रहता है?',
    options: [
      { text: 'Excited', type: 'A' },
      { text: 'ठीक लगता है', type: 'B' },
      { text: 'Dreading', type: 'C' },
      { text: 'बहुत बुरा', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Work-life balance कैसा है?',
    options: [
      { text: 'बहुत अच्छा', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'Struggle', type: 'C' },
      { text: 'कोई balance नहीं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'काम में growth और learning कैसी है?',
    options: [
      { text: 'बहुत, हमेशा सीख रहा हूं', type: 'A' },
      { text: 'अच्छी है', type: 'B' },
      { text: 'कम है', type: 'C' },
      { text: 'कोई नहीं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Colleagues के साथ relationship कैसा है?',
    options: [
      { text: 'बहुत अच्छा', type: 'A' },
      { text: 'अच्छा', type: 'B' },
      { text: 'ठीक-ठाक', type: 'C' },
      { text: 'खराब', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'काम का stress कैसा है?',
    options: [
      { text: 'Manageable, healthy', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'बहुत ज्यादा', type: 'C' },
      { text: 'Unbearable', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'काम में recognition और appreciation कैसी है?',
    options: [
      { text: 'बहुत अच्छी', type: 'A' },
      { text: 'मिलती है', type: 'B' },
      { text: 'कम मिलती है', type: 'C' },
      { text: 'नहीं मिलती', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Salary और benefits से satisfaction कैसी है?',
    options: [
      { text: 'बहुत satisfied', type: 'A' },
      { text: 'Satisfied', type: 'B' },
      { text: 'थोड़ा unsatisfied', type: 'C' },
      { text: 'बहुत unsatisfied', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'काम meaningful लगता है?',
    options: [
      { text: 'बहुत, purpose है', type: 'A' },
      { text: 'हां', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Career growth की opportunities कैसी हैं?',
    options: [
      { text: 'बहुत अच्छी', type: 'A' },
      { text: 'हैं', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'नहीं हैं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Boss या manager के साथ relationship कैसा है?',
    options: [
      { text: 'बहुत अच्छा, supportive', type: 'A' },
      { text: 'अच्छा', type: 'B' },
      { text: 'ठीक-ठाक', type: 'C' },
      { text: 'खराब', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall work satisfaction कैसी है?',
    options: [
      { text: 'बहुत satisfied', type: 'A' },
      { text: 'Satisfied', type: 'B' },
      { text: 'Unsatisfied', type: 'C' },
      { text: 'बहुत unsatisfied', type: 'D' },
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
    title: 'कार्य संतुष्टि उच्च',
    emoji: '🌟',
    description: 'आप अपने काम से बहुत खुश हैं। Passion, growth, और satisfaction सब है।',
    traits: ['fulfilled', 'passionate', 'growing', 'balanced'],
    weaknesses: ['protect this, rare है'],
    advice: 'Amazing! इसे maintain करें और दूसरों को inspire करें।',
  },
  B: {
    type: 'B',
    title: 'अच्छी कार्य संतुष्टि',
    emoji: '😊',
    description: 'काम से satisfiction अच्छी है। कुछ areas better हो सकते हैं।',
    traits: ['satisfied', 'stable', 'growing'],
    weaknesses: ['room for improvement'],
    advice: 'जो areas weak हैं उन पर काम करें। Growth continue करें।',
  },
  C: {
    type: 'C',
    title: 'कम कार्य संतुष्टि',
    emoji: '😔',
    description: 'काम से खुश नहीं हैं। Stress, lack of growth, या dissatisfaction है।',
    traits: ['unsatisfied', 'stressed', 'stuck'],
    weaknesses: ['burnout risk', 'unhappiness', 'health effects'],
    advice: 'Change लाएं। Job change या internal changes। Upskill करें।',
  },
  D: {
    type: 'D',
    title: 'बहुत कम कार्य संतुष्टि',
    emoji: '💔',
    description: 'काम से बहुत unhappy हैं। यह mental health को affect कर रहा है।',
    traits: ['miserable', 'burnt out', 'hopeless'],
    weaknesses: ['severe stress', 'depression risk', 'health issues'],
    advice: 'Serious है। Career counseling लें। Job change consider करें। Mental health priority।',
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
