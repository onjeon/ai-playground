export const questions = [
  {
    id: 1,
    text: 'Decision लेने से पहले कितना सोचते हैं?',
    options: [
      { text: 'जरूरी analysis करके decide', type: 'A' },
      { text: 'सोचता हूं फिर decide', type: 'B' },
      { text: 'बहुत ज्यादा सोचता हूं', type: 'C' },
      { text: 'सोचे बिना या बहुत ज्यादा सोचकर', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Logical vs emotional thinking में कौन सा dominant है?',
    options: [
      { text: 'Balance है दोनों में', type: 'A' },
      { text: 'थोड़ा logical ज्यादा', type: 'B' },
      { text: 'Emotional ज्यादा', type: 'C' },
      { text: 'Extreme किसी एक तरफ', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Complex problems को कैसे approach करते हैं?',
    options: [
      { text: 'Break down करके systematically', type: 'A' },
      { text: 'Step by step try करता हूं', type: 'B' },
      { text: 'Overwhelmed हो जाता हूं', type: 'C' },
      { text: 'Avoid करता हूं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Information को कैसे process करते हैं?',
    options: [
      { text: 'Critically analyze करता हूं', type: 'A' },
      { text: 'Evaluate करता हूं', type: 'B' },
      { text: 'As it is accept करता हूं', type: 'C' },
      { text: 'Confused हो जाता हूं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Different perspectives को कैसे handle करते हैं?',
    options: [
      { text: 'Welcome करता हूं, consider करता हूं', type: 'A' },
      { text: 'सुनता हूं', type: 'B' },
      { text: 'अपनी बात पर अड़ा रहता हूं', type: 'C' },
      { text: 'Confuse हो जाता हूं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Overthinking की problem है?',
    options: [
      { text: 'नहीं, balanced thinking', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'अक्सर', type: 'C' },
      { text: 'हर समय, बहुत problem है', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'जब दो options हों तो decide करना कैसा है?',
    options: [
      { text: 'Pros cons देखकर decide', type: 'A' },
      { text: 'सोचकर decide कर लेता हूं', type: 'B' },
      { text: 'बहुत मुश्किल होता है', type: 'C' },
      { text: 'Paralyzed हो जाता हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'अपनी opinions को कितना question करते हैं?',
    options: [
      { text: 'Regularly, open to change', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'Never, I am always right', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Long term vs short term thinking में कैसे हैं?',
    options: [
      { text: 'Both balance करता हूं', type: 'A' },
      { text: 'ज्यादातर long term', type: 'B' },
      { text: 'ज्यादातर short term', type: 'C' },
      { text: 'No planning', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Biases के बारे में कितना aware हैं?',
    options: [
      { text: 'Very aware, try to overcome', type: 'A' },
      { text: 'Aware हूं', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'क्या bias?', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'जब गलत हों तो क्या करते हैं?',
    options: [
      { text: 'Accept करके view change करता हूं', type: 'A' },
      { text: 'Accept करता हूं', type: 'B' },
      { text: 'मुश्किल से accept', type: 'C' },
      { text: 'Never wrong', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'अपनी thinking quality को कैसे rate करेंगे?',
    options: [
      { text: 'Clear और balanced', type: 'A' },
      { text: 'अच्छी', type: 'B' },
      { text: 'Improvement need', type: 'C' },
      { text: 'Confused और unclear', type: 'D' },
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
    title: 'स्पष्ट और संतुलित सोच',
    emoji: '🧠',
    description: 'आपकी thinking clear, balanced, और effective है। Logic और emotion दोनों use करते हैं।',
    traits: ['clear thinker', 'balanced', 'analytical', 'open-minded'],
    weaknesses: ['कभी-कभी over-analyze'],
    advice: 'Great thinking! Keep questioning and learning।',
  },
  B: {
    type: 'B',
    title: 'अच्छी सोच',
    emoji: '💭',
    description: 'आपकी thinking अच्छी है। ज्यादातर समय clear और logical है।',
    traits: ['good thinker', 'reasonable', 'practical'],
    weaknesses: ['कभी-कभी biases'],
    advice: 'Biases के बारे में और aware बनें। Critical thinking practice करें।',
  },
  C: {
    type: 'C',
    title: 'सोच में समस्याएं',
    emoji: '🌀',
    description: 'Thinking में issues हैं - overthinking, biases, या unclear thinking।',
    traits: ['overthinking', 'biased', 'confused'],
    weaknesses: ['poor decisions', 'stress', 'stuck'],
    advice: 'Mindfulness practice करें। Critical thinking सीखें। Journaling helps।',
  },
  D: {
    type: 'D',
    title: 'गंभीर सोच समस्याएं',
    emoji: '😵',
    description: 'Thinking में serious issues हैं जो life affect कर रहे हैं।',
    traits: ['confused', 'rigid', 'unclear'],
    weaknesses: ['bad decisions', 'problems everywhere'],
    advice: 'Professional help लें। Therapy और coaching helpful होगी।',
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
