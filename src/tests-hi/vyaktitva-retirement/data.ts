// रिटायरमेंट प्लानिंग (Retirement Planning)
export const questions = [
  {
    id: 1,
    text: 'retirement के बारे में सोचते हैं?',
    options: [
      { text: 'हां, planning कर रहा/रही हूं', type: 'A' },
      { text: 'थोड़ा-बहुत', type: 'B' },
      { text: 'अभी नहीं सोचता/सोचती', type: 'C' },
      { text: 'retirement? दूर की बात है', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'retirement savings?',
    options: [
      { text: 'proper fund बन रहा है', type: 'A' },
      { text: 'कुछ savings हैं', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'कोई savings नहीं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'retirement में क्या करेंगे?',
    options: [
      { text: 'travel और hobbies', type: 'A' },
      { text: 'family के साथ time', type: 'B' },
      { text: 'अभी नहीं पता', type: 'C' },
      { text: 'काम करते रहूंगा/रहूंगी शायद', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'health insurance और medical planning?',
    options: [
      { text: 'covered हूं अच्छे से', type: 'A' },
      { text: 'basic coverage है', type: 'B' },
      { text: 'सोचना है इसके बारे में', type: 'C' },
      { text: 'कुछ नहीं किया', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'retirement age expectation?',
    options: [
      { text: 'planned age पर retire', type: 'A' },
      { text: 'देखेंगे जब time आएगा', type: 'B' },
      { text: 'late retire होऊंगा/होऊंगी शायद', type: 'C' },
      { text: 'कभी retire नहीं कर पाऊंगा/पाऊंगी', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'retirement में रहना कहां?',
    options: [
      { text: 'planned है - hometown या hill station', type: 'A' },
      { text: 'यहीं रहूंगा/रहूंगी', type: 'B' },
      { text: 'बच्चों के साथ', type: 'C' },
      { text: 'पता नहीं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'passive income planning?',
    options: [
      { text: 'investments से income आएगी', type: 'A' },
      { text: 'pension और savings', type: 'B' },
      { text: 'बच्चों पर depend', type: 'C' },
      { text: 'कोई plan नहीं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'skills और hobbies develop कर रहे हैं?',
    options: [
      { text: 'हां, retirement के लिए', type: 'A' },
      { text: 'कुछ हैं', type: 'B' },
      { text: 'time नहीं मिलता', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'emergency fund?',
    options: [
      { text: '6+ months expenses covered', type: 'A' },
      { text: 'कुछ है', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'नहीं है', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'retirement के बारे में feeling?',
    options: [
      { text: 'excited और prepared', type: 'A' },
      { text: 'okay है', type: 'B' },
      { text: 'थोड़ा worried', type: 'C' },
      { text: 'बहुत anxious', type: 'D' },
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
    title: 'Retirement Ready',
    emoji: '🏖️',
    description: 'आप retirement के लिए well-prepared हैं! Savings, plans, vision - सब clear। Excellent!',
    traits: ['prepared', 'planned', 'secure', 'visionary', 'responsible'],
    weaknesses: ['over-planning?'],
    advice: 'wonderful preparation! Enjoy the journey भी।',
  },
  B: {
    type: 'B',
    title: 'On Track',
    emoji: '📊',
    description: 'आप retirement की तरफ अच्छे से बढ़ रहे हैं। कुछ और करना है, लेकिन ठीक है।',
    traits: ['progressing', 'aware', 'working on it', 'moderate'],
    weaknesses: ['gaps हैं', 'consistency needed'],
    advice: 'good progress! थोड़ा और focus बढ़ाएं।',
  },
  C: {
    type: 'C',
    title: 'Needs Attention',
    emoji: '⚠️',
    description: 'Retirement planning में काफी room for improvement। Start करना जरूरी है!',
    traits: ['delayed', 'unplanned', 'dependent', 'worried'],
    weaknesses: ['financial stress likely', 'dependent on others'],
    advice: 'अभी से start करें! देर हो गई तो मुश्किल होगी।',
  },
  D: {
    type: 'D',
    title: 'Red Alert',
    emoji: '🚨',
    description: 'Retirement planning critical है! कुछ नहीं किया है। Urgent action needed!',
    traits: ['unprepared', 'anxious', 'avoidant', 'in denial'],
    weaknesses: ['severe financial issues likely', 'stress', 'dependency'],
    advice: 'SERIOUSLY! आज से start करें। Professional help लें।',
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
