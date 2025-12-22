// दिवाली व्यक्तित्व (Diwali Personality)
export const questions = [
  {
    id: 1,
    text: 'दिवाली की तैयारी कब से?',
    options: [
      { text: 'महीना पहले से', type: 'A' },
      { text: 'हफ्ता पहले से', type: 'B' },
      { text: 'आखिरी दिनों में', type: 'C' },
      { text: 'कोई खास तैयारी नहीं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'घर की सफाई में?',
    options: [
      { text: 'पूरा घर चमकाता/चमकाती हूं', type: 'A' },
      { text: 'important areas', type: 'B' },
      { text: 'जितना हो उतना', type: 'C' },
      { text: 'सफाई वाले से करवाता/करवाती हूं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'दिवाली shopping?',
    options: [
      { text: 'planned, सबके लिए gifts', type: 'A' },
      { text: 'कपड़े और कुछ items', type: 'B' },
      { text: 'minimal shopping', type: 'C' },
      { text: 'online order', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'पटाखों के बारे में?',
    options: [
      { text: 'full celebration, सब type के', type: 'A' },
      { text: 'कुछ फुलझड़ियां और अनार', type: 'B' },
      { text: 'eco-friendly या कम', type: 'C' },
      { text: 'नहीं जलाता/जलाती', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'दिवाली की पूजा?',
    options: [
      { text: 'पूरे विधि-विधान से', type: 'A' },
      { text: 'हां, properly', type: 'B' },
      { text: 'short पूजा', type: 'C' },
      { text: 'नहीं करता/करती', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'मिठाई और खाना?',
    options: [
      { text: 'घर की बनी मिठाई और dishes', type: 'A' },
      { text: 'मिठाई की दुकान से', type: 'B' },
      { text: 'जो मिले', type: 'C' },
      { text: 'diet conscious, limited', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'रिश्तेदारों से मिलना?',
    options: [
      { text: 'सबके घर जाता/जाती हूं', type: 'A' },
      { text: 'close relatives', type: 'B' },
      { text: 'video call', type: 'C' },
      { text: 'avoid करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'दिवाली decoration?',
    options: [
      { text: 'elaborate - रंगोली, lights, दीये', type: 'A' },
      { text: 'lights और कुछ items', type: 'B' },
      { text: 'simple', type: 'C' },
      { text: 'minimal', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'card party/gambling?',
    options: [
      { text: 'tradition है, खेलता/खेलती हूं', type: 'A' },
      { text: 'fun के लिए थोड़ा', type: 'B' },
      { text: 'देखता/देखती हूं बस', type: 'C' },
      { text: 'नहीं खेलता/खेलती', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'दिवाली का मतलब?',
    options: [
      { text: 'परंपरा, परिवार, खुशियां', type: 'A' },
      { text: 'छुट्टी और celebration', type: 'B' },
      { text: 'lights और festive feel', type: 'C' },
      { text: 'बस एक holiday', type: 'D' },
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
    title: 'दिवाली Champion',
    emoji: '🪔',
    description: 'आप दिवाली के राजा/रानी हैं! Full celebration, सारी परंपराएं, पूरे जोश से। आपके बिना दिवाली अधूरी!',
    traits: ['traditional', 'family-oriented', 'celebratory', 'organized', 'festive'],
    weaknesses: ['exhausting हो सकता है', 'expenses high'],
    advice: 'wonderful spirit! लेकिन खुद को भी rest दें।',
  },
  B: {
    type: 'B',
    title: 'Balanced Celebrator',
    emoji: '✨',
    description: 'आप balanced दिवाली मनाते हैं। परंपरा भी, practical भी। Perfect modern celebration!',
    traits: ['balanced', 'moderate', 'practical', 'festive', 'family-loving'],
    weaknesses: ['neither extreme'],
    advice: 'great balance! Enjoy करते रहें।',
  },
  C: {
    type: 'C',
    title: 'Minimalist Diwali',
    emoji: '🕯️',
    description: 'आप simple दिवाली prefer करते हैं। Eco-conscious, minimal, शांत celebration।',
    traits: ['minimalist', 'eco-conscious', 'simple', 'peaceful', 'modern'],
    weaknesses: ['family expectations से clash', 'कम festive feel'],
    advice: 'simple अच्छा है, लेकिन festive spirit भी रखें!',
  },
  D: {
    type: 'D',
    title: 'Diwali Neutral',
    emoji: '📱',
    description: 'दिवाली आपके लिए बस holiday है। Special celebration नहीं। Modern या different priorities।',
    traits: ['modern', 'practical', 'independent', 'different'],
    weaknesses: ['family से disconnect', 'cultural roots कम'],
    advice: 'अपनी roots से connect करें। Festivals memories देते हैं।',
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
