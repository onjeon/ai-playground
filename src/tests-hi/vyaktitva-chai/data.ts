// चाय व्यक्तित्व (Chai Personality)
export const questions = [
  {
    id: 1,
    text: 'दिन में कितनी चाय पीते हैं?',
    options: [
      { text: '1-2 cups', type: 'A' },
      { text: '3-4 cups', type: 'B' },
      { text: '5+ cups', type: 'C' },
      { text: 'चाय नहीं पीता/पीती', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'चाय कैसी पसंद है?',
    options: [
      { text: 'कड़क और मसालेदार', type: 'A' },
      { text: 'मीठी और creamy', type: 'B' },
      { text: 'हल्की और सादी', type: 'C' },
      { text: 'green tea/herbal', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'सुबह बिना चाय के?',
    options: [
      { text: 'दिन शुरू नहीं होता', type: 'A' },
      { text: 'थोड़ा अजीब लगता है', type: 'B' },
      { text: 'चल जाता है', type: 'C' },
      { text: 'कोई फर्क नहीं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'चाय बनाने का तरीका?',
    options: [
      { text: 'खुद बनाता/बनाती हूं, अपने style से', type: 'A' },
      { text: 'कोई भी बना दे चलता है', type: 'B' },
      { text: 'specific तरीके से ही पीता/पीती हूं', type: 'C' },
      { text: 'ready-made या café से', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'चाय के साथ क्या खाते हैं?',
    options: [
      { text: 'बिस्कुट', type: 'A' },
      { text: 'समोसा या पकोड़े', type: 'B' },
      { text: 'कुछ नहीं, सादी चाय', type: 'C' },
      { text: 'healthy snacks', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'मेहमान आए तो?',
    options: [
      { text: 'पहले चाय offer', type: 'A' },
      { text: 'पूछता/पूछती हूं क्या लेंगे', type: 'B' },
      { text: 'बस पानी', type: 'C' },
      { text: 'cold drinks या juice', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'चाय की tapri/stall पर?',
    options: [
      { text: 'regular जाता/जाती हूं', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'नहीं जाता/जाती, hygiene', type: 'C' },
      { text: 'café prefer करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'बारिश में चाय का मज़ा?',
    options: [
      { text: 'best combination ever!', type: 'A' },
      { text: 'अच्छा लगता है', type: 'B' },
      { text: 'weather से फर्क नहीं पड़ता', type: 'C' },
      { text: 'soup prefer करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'office में चाय break?',
    options: [
      { text: 'essential, productivity के लिए', type: 'A' },
      { text: 'social time, colleagues के साथ', type: 'B' },
      { text: 'जब time हो', type: 'C' },
      { text: 'coffee person हूं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'चाय आपके लिए क्या है?',
    options: [
      { text: 'जीवन का हिस्सा', type: 'A' },
      { text: 'comfort और relaxation', type: 'B' },
      { text: 'बस एक drink', type: 'C' },
      { text: 'prefer करता/करती हूं', type: 'D' },
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
    title: 'चाय का दीवाना/दीवानी',
    emoji: '☕',
    description: 'चाय आपकी जान है! सुबह से शाम तक, हर mood में चाय चाहिए। True Indian चाय lover!',
    traits: ['traditional', 'social', 'warm', 'hospitable', 'desi at heart'],
    weaknesses: ['caffeine addiction possible', 'बिना चाय irritable'],
    advice: 'चाय प्यारी है, लेकिन limit में रखें health के लिए!',
  },
  B: {
    type: 'B',
    title: 'संतुलित चाय प्रेमी',
    emoji: '🫖',
    description: 'आप चाय enjoy करते हैं लेकिन obsessed नहीं। Social bonding और comfort के लिए चाय perfect है!',
    traits: ['balanced', 'social', 'easy-going', 'moderate', 'flexible'],
    weaknesses: ['कभी-कभी चाय का मूड नहीं'],
    advice: 'perfect balance! Enjoy your chai moments!',
  },
  C: {
    type: 'C',
    title: 'Casual Tea Person',
    emoji: '🍵',
    description: 'चाय पीते हैं लेकिन जीवन नहीं है। Health conscious या बस preference कम है।',
    traits: ['health-conscious', 'moderate', 'practical', 'controlled', 'independent'],
    weaknesses: ['कभी-कभी traditional gatherings में odd one out'],
    advice: 'अपनी choice respect करें, forced चाय पीने की जरूरत नहीं!',
  },
  D: {
    type: 'D',
    title: 'Non-Chai Person',
    emoji: '🥤',
    description: 'चाय आपकी चीज़ नहीं! Coffee, green tea या कुछ और - आप different league में हैं।',
    traits: ['different', 'health-focused', 'modern', 'unique', 'individual'],
    weaknesses: ['Indian chai culture से disconnect', 'कभी-कभी judge होते हैं'],
    advice: 'कोई बात नहीं! हर किसी को चाय पसंद हो जरूरी नहीं।',
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
