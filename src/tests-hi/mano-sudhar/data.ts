export const questions = [
  {
    id: 1,
    text: 'Self-improvement में आपकी कितनी interest है?',
    options: [
      { text: 'बहुत, हमेशा better बनना है', type: 'A' },
      { text: 'काफी interest है', type: 'B' },
      { text: 'थोड़ी', type: 'C' },
      { text: 'कोई नहीं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Feedback लेने में आप कैसे हैं?',
    options: [
      { text: 'Welcome करता हूं, सीखता हूं', type: 'A' },
      { text: 'Accept करता हूं', type: 'B' },
      { text: 'Defensive हो जाता हूं', type: 'C' },
      { text: 'बिल्कुल नहीं सुनता', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'अपनी कमियां accept करने में कैसे हैं?',
    options: [
      { text: 'आसानी से, work on them', type: 'A' },
      { text: 'Accept करता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'कोई कमी नहीं / नहीं मानता', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Books/courses for self-improvement कैसे हैं?',
    options: [
      { text: 'Regular पढ़ता/करता हूं', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'कभी नहीं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'जब गलती हो तो क्या करते हैं?',
    options: [
      { text: 'Analyze करता हूं, सुधारता हूं', type: 'A' },
      { text: 'सीखने की कोशिश करता हूं', type: 'B' },
      { text: 'बुरा लगता है, वही repeat हो जाती है', type: 'C' },
      { text: 'कुछ नहीं करता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Bad habits छोड़ने में कैसे हैं?',
    options: [
      { text: 'Actively काम करता हूं', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं छोड़ता', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Goals set करके achieve करना कैसा है?',
    options: [
      { text: 'Regular करता हूं', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'Set तो करता हूं, achieve नहीं होते', type: 'C' },
      { text: 'Goals नहीं रखता', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Past self से compare करें तो?',
    options: [
      { text: 'बहुत improve हुआ हूं', type: 'A' },
      { text: 'काफी improve', type: 'B' },
      { text: 'थोड़ा बहुत', type: 'C' },
      { text: 'Same हूं या worse', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Uncomfortable truth सुनने में कैसे हैं?',
    options: [
      { text: 'Open हूं, जानना है', type: 'A' },
      { text: 'सुन लेता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं सुनता', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'अपनी growth track करते हैं?',
    options: [
      { text: 'हां, regularly', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'नहीं', type: 'C' },
      { text: 'Growth ही नहीं हो रही', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Mentors या role models हैं?',
    options: [
      { text: 'हां, actively learn करता हूं', type: 'A' },
      { text: 'कुछ हैं', type: 'B' },
      { text: 'नहीं हैं', type: 'C' },
      { text: 'जरूरत नहीं', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Self-improvement की journey कैसी है?',
    options: [
      { text: 'Exciting और continuous', type: 'A' },
      { text: 'चल रही है', type: 'B' },
      { text: 'Struggle', type: 'C' },
      { text: 'कोई journey नहीं', type: 'D' },
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
    title: 'सक्रिय स्व-सुधार',
    emoji: '🚀',
    description: 'आप actively self-improvement में लगे हैं। Growth mindset है और continuously better हो रहे हैं।',
    traits: ['growth mindset', 'learner', 'humble', 'improving'],
    weaknesses: ['कभी-कभी perfectionism'],
    advice: 'Keep going! Balance भी रखें, आप already great हैं।',
  },
  B: {
    type: 'B',
    title: 'अच्छा स्व-सुधार',
    emoji: '⭐',
    description: 'आप self-improvement में interested हैं और काम कर रहे हैं।',
    traits: ['open', 'learning', 'growing'],
    weaknesses: ['consistency में improvement scope'],
    advice: 'More consistent बनें। Daily habits बनाएं।',
  },
  C: {
    type: 'C',
    title: 'कम स्व-सुधार',
    emoji: '😐',
    description: 'Self-improvement में effort कम है। Same patterns repeat हो रहे हैं।',
    traits: ['stuck', 'repeating patterns', 'resistant'],
    weaknesses: ['no growth', 'same mistakes', 'stagnant'],
    advice: 'छोटे से शुरू करें। एक habit improve करें। Books पढ़ें।',
  },
  D: {
    type: 'D',
    title: 'कोई स्व-सुधार नहीं',
    emoji: '😔',
    description: 'आप self-improvement में interested नहीं हैं। यह growth रोक रहा है।',
    traits: ['fixed mindset', 'resistant', 'stuck'],
    weaknesses: ['no growth', 'falling behind', 'unfulfilled'],
    advice: 'एक छोटा change try करें। देखें कैसा लगता है। Growth possible है।',
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
