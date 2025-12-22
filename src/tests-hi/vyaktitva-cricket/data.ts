// क्रिकेट व्यक्तित्व (Cricket Personality)
export const questions = [
  {
    id: 1,
    text: 'India का match देखते समय आप?',
    options: [
      { text: 'शांति से देखता/देखती हूं', type: 'A' },
      { text: 'चिल्लाता/चिल्लाती हूं support में', type: 'B' },
      { text: 'expert analysis करता/करती हूं', type: 'C' },
      { text: 'friends के साथ party mode', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'India हार जाए तो?',
    options: [
      { text: 'दुखी होता/होती हूं लेकिन move on', type: 'A' },
      { text: 'बहुत upset, mood off', type: 'B' },
      { text: 'analyze करता/करती हूं क्या गलत हुआ', type: 'C' },
      { text: 'अगला match देखो, कुछ नहीं होता', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'पसंदीदा format?',
    options: [
      { text: 'Test cricket - real cricket', type: 'A' },
      { text: 'ODI - balanced', type: 'B' },
      { text: 'T20 - exciting', type: 'C' },
      { text: 'IPL - entertainment', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'अगर cricketer होते तो कौन से role में?',
    options: [
      { text: 'reliable batsman, consistent', type: 'A' },
      { text: 'aggressive opener, fast runs', type: 'B' },
      { text: 'captain, strategic decisions', type: 'C' },
      { text: 'all-rounder, sab कर सकता हूं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'stadium में match देखना?',
    options: [
      { text: 'कभी-कभी, special matches', type: 'A' },
      { text: 'जब भी मौका मिले', type: 'B' },
      { text: 'TV better है, analysis समझ आती है', type: 'C' },
      { text: 'atmosphere के लिए जाता/जाती हूं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'cricket statistics और records?',
    options: [
      { text: 'basic पता है', type: 'A' },
      { text: 'favorite players के याद हैं', type: 'B' },
      { text: 'expert हूं, सब पता है', type: 'C' },
      { text: 'interesting facts पसंद हैं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Pakistan के साथ match में?',
    options: [
      { text: 'खेल की तरह देखता/देखती हूं', type: 'A' },
      { text: 'extra passionate हो जाता/जाती हूं', type: 'B' },
      { text: 'pressure match, strategy important', type: 'C' },
      { text: 'celebration ready रखता/रखती हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'gully cricket खेलते थे?',
    options: [
      { text: 'हां, regular', type: 'A' },
      { text: 'बहुत passionate था/थी', type: 'B' },
      { text: 'captain था/थी team का', type: 'C' },
      { text: 'fun के लिए', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'favorite cricketer choose करने का criteria?',
    options: [
      { text: 'consistency और dedication', type: 'A' },
      { text: 'aggressive और entertaining', type: 'B' },
      { text: 'smart और tactical', type: 'C' },
      { text: 'personality और charisma', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'cricket आपके लिए क्या है?',
    options: [
      { text: 'passion और pride', type: 'A' },
      { text: 'emotion और excitement', type: 'B' },
      { text: 'strategy और skill', type: 'C' },
      { text: 'entertainment और bonding', type: 'D' },
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
    title: 'सच्चा क्रिकेट प्रेमी',
    emoji: '🏏',
    description: 'आप genuine cricket lover हैं। Win या lose, आप खेल को respect करते हैं। Rahul Dravid जैसे - steady और dedicated!',
    traits: ['dedicated', 'patient', 'true fan', 'respectful', 'balanced'],
    weaknesses: ['sometimes too serious', 'fun miss कर देते हैं'],
    advice: 'great attitude! Cricket को enjoy करते रहें!',
  },
  B: {
    type: 'B',
    title: 'जोशीला फैन',
    emoji: '🔥',
    description: 'आप passionate fan हैं! Emotions high, celebrations loud, India जीते तो आप जीते! Virat Kohli energy!',
    traits: ['passionate', 'emotional', 'loud', 'patriotic', 'energetic'],
    weaknesses: ['losses में बहुत upset', 'over-emotional'],
    advice: 'passion अच्छी है, लेकिन health का भी ध्यान रखें matches में!',
  },
  C: {
    type: 'C',
    title: 'Cricket Expert',
    emoji: '📊',
    description: 'आप cricket के Harsha Bhogle हैं! Stats, strategy, analysis - सब आपके पास है। Armchair expert!',
    traits: ['analytical', 'knowledgeable', 'strategic', 'informed', 'critical'],
    weaknesses: ['over-analyze कर देते हैं', 'enjoy करना भूल जाते हैं'],
    advice: 'knowledge great है, लेकिन कभी-कभी बस enjoy करें!',
  },
  D: {
    type: 'D',
    title: 'Social Cricket Fan',
    emoji: '🎉',
    description: 'आपके लिए cricket social event है! Friends, food, fun - match तो बहाना है! Party animal!',
    traits: ['social', 'fun-loving', 'casual', 'entertaining', 'party mode'],
    weaknesses: ['actual cricket से ज्यादा party में interest', 'fair weather fan'],
    advice: 'fun अच्छा है, लेकिन actual game भी देखें कभी-कभी!',
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
