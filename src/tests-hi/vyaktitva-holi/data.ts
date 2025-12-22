// होली व्यक्तित्व (Holi Personality)
export const questions = [
  {
    id: 1,
    text: 'होली में आप कैसे हैं?',
    options: [
      { text: 'सबसे पहले रंग लगाने वाला/वाली', type: 'A' },
      { text: 'enjoy करता/करती हूं controlled', type: 'B' },
      { text: 'बस थोड़ा गुलाल', type: 'C' },
      { text: 'होली नहीं खेलता/खेलती', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'रंगों के बारे में?',
    options: [
      { text: 'सब colors, पक्के भी चलेंगे', type: 'A' },
      { text: 'herbal और organic', type: 'B' },
      { text: 'सिर्फ गुलाल', type: 'C' },
      { text: 'रंग नहीं लगवाता/लगवाती', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'भांग/ठंडाई?',
    options: [
      { text: 'होली है तो जरूर', type: 'A' },
      { text: 'थोड़ी सी', type: 'B' },
      { text: 'plain ठंडाई', type: 'C' },
      { text: 'नहीं पीता/पीती', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'होली party में?',
    options: [
      { text: 'center of attraction', type: 'A' },
      { text: 'enjoy करता/करती हूं', type: 'B' },
      { text: 'थोड़ी देर के लिए', type: 'C' },
      { text: 'नहीं जाता/जाती', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'water balloons?',
    options: [
      { text: 'full on war!', type: 'A' },
      { text: 'fun है लेकिन limit में', type: 'B' },
      { text: 'नहीं पसंद', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'होली का खाना?',
    options: [
      { text: 'गुझिया, मिठाई, सब खाता/खाती हूं', type: 'A' },
      { text: 'favorite items', type: 'B' },
      { text: 'थोड़ा taste', type: 'C' },
      { text: 'diet नहीं तोड़ता/तोड़ती', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'होली का music?',
    options: [
      { text: 'DJ और loud music', type: 'A' },
      { text: 'होली songs enjoy', type: 'B' },
      { text: 'background music', type: 'C' },
      { text: 'noise लगता है', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'अजनबियों को रंग?',
    options: [
      { text: 'बुरा न मानो होली है!', type: 'A' },
      { text: 'पूछकर लगाता/लगाती हूं', type: 'B' },
      { text: 'known people को ही', type: 'C' },
      { text: 'नहीं लगाता/लगाती', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'होली के बाद?',
    options: [
      { text: 'थका हुआ लेकिन खुश', type: 'A' },
      { text: 'satisfied', type: 'B' },
      { text: 'रंग उतारने की चिंता', type: 'C' },
      { text: 'normal day', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'होली का मतलब?',
    options: [
      { text: 'रंग, मस्ती, खुशियां!', type: 'A' },
      { text: 'festival of colors और bonding', type: 'B' },
      { text: 'परंपरा निभाना', type: 'C' },
      { text: 'बस एक छुट्टी', type: 'D' },
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
    title: 'होली King/Queen',
    emoji: '🎨',
    description: 'आप होली के champion हैं! रंग, मस्ती, भांग - full celebration! आप जहां जाएं, होली वहां आए!',
    traits: ['fun-loving', 'energetic', 'social', 'celebratory', 'joyful'],
    weaknesses: ['over-enthusiastic', 'boundaries cross कर सकते हैं'],
    advice: 'मस्ती करें! लेकिन दूसरों की consent का ध्यान रखें।',
  },
  B: {
    type: 'B',
    title: 'Balanced Holi Lover',
    emoji: '🌈',
    description: 'आप होली को balance में enjoy करते हैं। Fun भी, control भी। Perfect celebration!',
    traits: ['balanced', 'fun-loving', 'respectful', 'joyful', 'moderate'],
    weaknesses: ['कभी-कभी let loose करें'],
    advice: 'great approach! Enjoy करते रहें।',
  },
  C: {
    type: 'C',
    title: 'Subtle Celebrator',
    emoji: '🌸',
    description: 'आप subtle होली prefer करते हैं। गुलाल और smile - शांत celebration।',
    traits: ['calm', 'subtle', 'clean', 'traditional', 'peaceful'],
    weaknesses: ['full fun miss', 'boring लग सकते हैं'],
    advice: 'कभी-कभी let go करें, होली साल में एक बार है!',
  },
  D: {
    type: 'D',
    title: 'Holi Skipper',
    emoji: '🚫',
    description: 'होली आपकी चीज़ नहीं। रंग, गंदगी, भीड़ - सब से दूर रहना चाहते हैं।',
    traits: ['clean-freak', 'introvert', 'different', 'independent'],
    weaknesses: ['festive fun miss', 'social से दूर'],
    advice: 'कम से कम family के साथ थोड़ा celebrate करें!',
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
