export const questions = [
  {
    id: 1,
    text: 'Time management कैसा है आपका?',
    options: [
      { text: 'Excellent, organized हूं', type: 'A' },
      { text: 'अच्छा है', type: 'B' },
      { text: 'Struggle करता हूं', type: 'C' },
      { text: 'बहुत खराब', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Time की value कितनी समझते हैं?',
    options: [
      { text: 'बहुत, most precious resource', type: 'A' },
      { text: 'Important मानता हूं', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'waste करता हूं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Priorities कैसे set करते हैं?',
    options: [
      { text: 'Clear priorities, follow करता हूं', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'Unclear priorities', type: 'C' },
      { text: 'कोई priorities नहीं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Procrastination कितना करते हैं?',
    options: [
      { text: 'बहुत कम', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'अक्सर', type: 'C' },
      { text: 'हमेशा', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Time कहां जाता है पता है?',
    options: [
      { text: 'हां, track करता हूं', type: 'A' },
      { text: 'Mostly पता है', type: 'B' },
      { text: 'कम पता है', type: 'C' },
      { text: 'कोई idea नहीं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Important vs urgent में balance कैसा है?',
    options: [
      { text: 'Important पहले', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'Urgent में फंसा रहता हूं', type: 'C' },
      { text: 'कोई distinction नहीं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Phone/social media पर कितना time जाता है?',
    options: [
      { text: 'Controlled, productive', type: 'A' },
      { text: 'Moderate', type: 'B' },
      { text: 'बहुत ज्यादा', type: 'C' },
      { text: 'घंटों, control नहीं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Day का end कैसा feel होता है?',
    options: [
      { text: 'Productive, satisfied', type: 'A' },
      { text: 'Okay', type: 'B' },
      { text: 'जैसे कुछ नहीं किया', type: 'C' },
      { text: 'Wasted', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Planning कैसी करते हैं?',
    options: [
      { text: 'Daily/weekly planning', type: 'A' },
      { text: 'Some planning', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'कोई planning नहीं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Self-care के लिए time निकाल पाते हैं?',
    options: [
      { text: 'हां, priority है', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं निकाल पाता', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Time related stress कितना है?',
    options: [
      { text: 'बहुत कम', type: 'A' },
      { text: 'Moderate', type: 'B' },
      { text: 'बहुत', type: 'C' },
      { text: 'Overwhelming', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'अगर ज्यादा time हो तो क्या करेंगे?',
    options: [
      { text: 'Clear ideas हैं, meaningful चीजें', type: 'A' },
      { text: 'कुछ अच्छा', type: 'B' },
      { text: 'पता नहीं', type: 'C' },
      { text: 'Same waste', type: 'D' },
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
    title: 'उत्कृष्ट समय प्रबंधन',
    emoji: '⏰',
    description: 'Time management excellent है। Organized, productive, और balanced हैं।',
    traits: ['organized', 'productive', 'disciplined', 'balanced'],
    weaknesses: ['कभी-कभी rigid'],
    advice: 'Amazing! Flexibility भी maintain करें।',
  },
  B: {
    type: 'B',
    title: 'अच्छा समय प्रबंधन',
    emoji: '📅',
    description: 'Time management अच्छा है। कुछ areas improve हो सकते हैं।',
    traits: ['fairly organized', 'working', 'aware'],
    weaknesses: ['procrastination sometimes'],
    advice: 'Systems और better करें। Consistency बढ़ाएं।',
  },
  C: {
    type: 'C',
    title: 'कमजोर समय प्रबंधन',
    emoji: '😰',
    description: 'Time management में struggle है। Productivity और satisfaction कम है।',
    traits: ['disorganized', 'procrastinator', 'stressed'],
    weaknesses: ['wasted time', 'stress', 'regrets'],
    advice: 'Small habits से शुरू करें। One change at a time। Tools use करें।',
  },
  D: {
    type: 'D',
    title: 'बहुत कमजोर समय प्रबंधन',
    emoji: '🌀',
    description: 'Time management serious issue है। Life को badly affect कर रहा है।',
    traits: ['chaotic', 'overwhelmed', 'unproductive'],
    weaknesses: ['wasted life', 'regrets', 'unfulfilled potential'],
    advice: 'Help लें। ADHD check करवाएं। Coach या therapist helpful होंगे।',
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
