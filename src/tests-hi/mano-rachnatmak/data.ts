export const questions = [
  {
    id: 1,
    text: 'Creative expression कितना important है आपके लिए?',
    options: [
      { text: 'बहुत, life का हिस्सा है', type: 'A' },
      { text: 'Important है', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'नहीं है', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'कोई art form practice करते हैं?',
    options: [
      { text: 'हां, actively', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'पहले करता था', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'New ideas generate करना कैसा लगता है?',
    options: [
      { text: 'Love it, naturally होता है', type: 'A' },
      { text: 'Enjoy करता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं आती ideas', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Problems को creative तरीके से solve करते हैं?',
    options: [
      { text: 'हां, innovative solutions', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'Standard ways', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Daydreaming और imagination कैसी है?',
    options: [
      { text: 'Rich और vivid', type: 'A' },
      { text: 'अच्छी है', type: 'B' },
      { text: 'कम है', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'चीजों को different angle से देखते हैं?',
    options: [
      { text: 'हां, naturally', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Creative work करने पर कैसा feel होता है?',
    options: [
      { text: 'Alive, fulfilled', type: 'A' },
      { text: 'Good', type: 'B' },
      { text: 'Okay', type: 'C' },
      { text: 'कुछ नहीं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Creativity के लिए time निकालते हैं?',
    options: [
      { text: 'हां, priority है', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Fear of judgment creativity को रोकता है?',
    options: [
      { text: 'नहीं, freely create करता हूं', type: 'A' },
      { text: 'थोड़ा', type: 'B' },
      { text: 'काफी', type: 'C' },
      { text: 'बहुत, इसलिए नहीं करता', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Beauty और aesthetics में interest है?',
    options: [
      { text: 'बहुत, important है', type: 'A' },
      { text: 'हां', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'नहीं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Creative block आने पर क्या करते हैं?',
    options: [
      { text: 'Different approaches try करता हूं', type: 'A' },
      { text: 'Wait करता हूं', type: 'B' },
      { text: 'Frustrated हो जाता हूं', type: 'C' },
      { text: 'Creative ही नहीं हूं', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'अपनी creativity को कैसे rate करेंगे?',
    options: [
      { text: 'बहुत creative', type: 'A' },
      { text: 'Creative', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'नहीं हूं', type: 'D' },
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
    title: 'उच्च रचनात्मकता',
    emoji: '🎨',
    description: 'बहुत creative हैं। Ideas flow करती हैं और creative expression life का हिस्सा है।',
    traits: ['highly creative', 'imaginative', 'artistic', 'innovative'],
    weaknesses: ['sometimes impractical'],
    advice: 'Share your creativity! Teach others। Keep creating।',
  },
  B: {
    type: 'B',
    title: 'अच्छी रचनात्मकता',
    emoji: '✨',
    description: 'अच्छी creativity है। और develop हो सकती है।',
    traits: ['creative', 'capable', 'potential'],
    weaknesses: ['not fully utilized'],
    advice: 'More time दें creativity को। Practice करें।',
  },
  C: {
    type: 'C',
    title: 'सामान्य रचनात्मकता',
    emoji: '😐',
    description: 'Creativity average है या dormant है।',
    traits: ['conventional', 'practical', 'unexplored'],
    weaknesses: ['missing out on creative fulfillment'],
    advice: 'Everyone is creative। Start exploring। No judgment।',
  },
  D: {
    type: 'D',
    title: 'रचनात्मकता का अभाव',
    emoji: '📦',
    description: 'Creative नहीं feel करते। यह limiting belief हो सकता है।',
    traits: ['blocked', 'limited thinking'],
    weaknesses: ['missing life enrichment'],
    advice: 'Everyone can be creative। Start with anything - doodle, sing, write। Judgment छोड़ें।',
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
