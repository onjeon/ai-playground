// फिटनेस व्यक्तित्व (Fitness Personality)
export const questions = [
  {
    id: 1,
    text: 'exercise routine कैसी है?',
    options: [
      { text: 'daily workout, no excuse', type: 'A' },
      { text: 'हफ्ते में 3-4 बार', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'exercise? क्या है वो?', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'पसंदीदा workout type?',
    options: [
      { text: 'gym और weights', type: 'A' },
      { text: 'yoga और stretching', type: 'B' },
      { text: 'sports या dance', type: 'C' },
      { text: 'walking बस', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'diet के बारे में?',
    options: [
      { text: 'strict diet follow करता/करती हूं', type: 'A' },
      { text: 'healthy खाने की कोशिश', type: 'B' },
      { text: 'balance रखता/रखती हूं', type: 'C' },
      { text: 'जो मन करे खाता/खाती हूं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'fitness goals?',
    options: [
      { text: 'muscle building और strength', type: 'A' },
      { text: 'flexibility और wellness', type: 'B' },
      { text: 'weight management', type: 'C' },
      { text: 'कोई specific goal नहीं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'सुबह उठकर?',
    options: [
      { text: 'workout पहले', type: 'A' },
      { text: 'yoga या meditation', type: 'B' },
      { text: 'जब time हो', type: 'C' },
      { text: 'सोना prefer', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'cheat day के बारे में?',
    options: [
      { text: 'controlled, थोड़ा ही', type: 'A' },
      { text: 'हफ्ते में एक बार', type: 'B' },
      { text: 'जब मन करे', type: 'C' },
      { text: 'हर दिन cheat day', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'fitness apps use करते हैं?',
    options: [
      { text: 'हां, tracking जरूरी है', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'try किया, छोड़ दिया', type: 'C' },
      { text: 'नहीं use करता/करती', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'motivation कहां से आती है?',
    options: [
      { text: 'results देखकर', type: 'A' },
      { text: 'feeling good के लिए', type: 'B' },
      { text: 'friends या videos', type: 'C' },
      { text: 'motivation ही नहीं है', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'health checkup?',
    options: [
      { text: 'regular करवाता/करवाती हूं', type: 'A' },
      { text: 'yearly एक बार', type: 'B' },
      { text: 'जब problem हो', type: 'C' },
      { text: 'avoid करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'fitness का meaning?',
    options: [
      { text: 'lifestyle है', type: 'A' },
      { text: 'health और wellness', type: 'B' },
      { text: 'look good feel good', type: 'C' },
      { text: 'बस survive करना है', type: 'D' },
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
    title: 'Fitness Freak',
    emoji: '💪',
    description: 'आप dedicated fitness enthusiast हैं! Gym life, diet control, discipline - सब perfect! Body goals achieved!',
    traits: ['disciplined', 'dedicated', 'strong', 'focused', 'healthy'],
    weaknesses: ['obsessed कभी-कभी', 'social life miss', 'too strict'],
    advice: 'great dedication! लेकिन कभी-कभी relax भी करें।',
  },
  B: {
    type: 'B',
    title: 'Wellness Seeker',
    emoji: '🧘',
    description: 'आप holistic wellness में believe करते हैं। Body और mind दोनों important हैं। Yoga और meditation balanced lifestyle!',
    traits: ['balanced', 'mindful', 'healthy', 'calm', 'aware'],
    weaknesses: ['intense workout कम', 'कभी-कभी slow progress'],
    advice: 'beautiful approach! Keep the balance।',
  },
  C: {
    type: 'C',
    title: 'Casual Fitness',
    emoji: '🏃',
    description: 'आप fitness को casually लेते हैं। करते हैं, लेकिन obsessed नहीं। Life में और भी बहुत कुछ है!',
    traits: ['casual', 'balanced lifestyle', 'flexible', 'realistic', 'moderate'],
    weaknesses: ['consistency कम', 'goals achieve करना मुश्किल'],
    advice: 'थोड़ी consistency बढ़ाएं, results बेहतर होंगे!',
  },
  D: {
    type: 'D',
    title: 'Couch Champion',
    emoji: '🛋️',
    description: 'Fitness आपकी priority नहीं है। आराम प्यारा है, exercise boring। लेकिन health के लिए थोड़ा ध्यान जरूरी है!',
    traits: ['relaxed', 'comfort-loving', 'honest', 'easygoing'],
    weaknesses: ['health risks', 'low energy', 'weight issues possible'],
    advice: 'छोटी शुरुआत करें - daily walk से। Health important है!',
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
