// खाने की पसंद (Food Personality)
export const questions = [
  {
    id: 1,
    text: 'खाने में सबसे पसंद क्या है?',
    options: [
      { text: 'घर का बना traditional खाना', type: 'A' },
      { text: 'variety - आज कुछ, कल कुछ', type: 'B' },
      { text: 'healthy और nutritious', type: 'C' },
      { text: 'fast food और street food', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'नया restaurant try करने के बारे में?',
    options: [
      { text: 'पहले reviews देखता/देखती हूं', type: 'A' },
      { text: 'हमेशा excited रहता/रहती हूं', type: 'B' },
      { text: 'healthy options हों तो जाऊंगा/जाऊंगी', type: 'C' },
      { text: 'famous हो तो try करूंगा/करूंगी', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'मसालेदार खाना कैसा लगता है?',
    options: [
      { text: 'moderate - न ज्यादा न कम', type: 'A' },
      { text: 'जितना तीखा उतना अच्छा', type: 'B' },
      { text: 'कम मसाला prefer करता/करती हूं', type: 'C' },
      { text: 'depends करता है mood पर', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'खाना बनाने में कैसे हैं?',
    options: [
      { text: 'अच्छा बनाता/बनाती हूं, traditional recipes', type: 'A' },
      { text: 'experiment करता/करती हूं नई dishes', type: 'B' },
      { text: 'simple और healthy बनाता/बनाती हूं', type: 'C' },
      { text: 'बनाना नहीं आता, order करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'मिठाई के बारे में?',
    options: [
      { text: 'Indian sweets best हैं', type: 'A' },
      { text: 'सब try करता/करती हूं', type: 'B' },
      { text: 'कम खाता/खाती हूं, sugar avoid', type: 'C' },
      { text: 'chocolate और ice cream fan', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'breakfast कैसा होता है?',
    options: [
      { text: 'proper Indian breakfast', type: 'A' },
      { text: 'जो मन करे', type: 'B' },
      { text: 'healthy - oats, fruits', type: 'C' },
      { text: 'skip कर देता/देती हूं mostly', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'बाहर खाने की frequency?',
    options: [
      { text: 'कभी-कभी, special occasions पर', type: 'A' },
      { text: 'हफ्ते में 2-3 बार', type: 'B' },
      { text: 'healthy options मिलें तो', type: 'C' },
      { text: 'almost daily', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'चाय या कॉफी?',
    options: [
      { text: 'चाय - दिन में कई बार', type: 'A' },
      { text: 'दोनों, mood के हिसाब से', type: 'B' },
      { text: 'green tea या herbal', type: 'C' },
      { text: 'कॉफी addict', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'diet follow करते हैं?',
    options: [
      { text: 'balanced diet, घर का खाना', type: 'A' },
      { text: 'नहीं, जो मन करे खाता/खाती हूं', type: 'B' },
      { text: 'हां, strict diet', type: 'C' },
      { text: 'try करता/करती हूं लेकिन टिकता नहीं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'खाने में सबसे important क्या है?',
    options: [
      { text: 'taste और tradition', type: 'A' },
      { text: 'variety और experience', type: 'B' },
      { text: 'health और nutrition', type: 'C' },
      { text: 'convenience और speed', type: 'D' },
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
    title: 'देसी फूडी',
    emoji: '🍛',
    description: 'आप दिल से देसी हैं! घर का खाना, माँ के हाथ का स्वाद, traditional recipes - यही आपकी पहचान है। दाल-चावल से लेकर पराठे तक, सब पसंद!',
    traits: ['traditional', 'homely', 'rooted', 'appreciative', 'simple'],
    weaknesses: ['new cuisine try करने में hesitation', 'comfort zone में रहते हैं'],
    advice: 'कभी-कभी नई dishes भी try करें, दुनिया में बहुत कुछ है!',
  },
  B: {
    type: 'B',
    title: 'खाने के शौकीन',
    emoji: '🍽️',
    description: 'आप true foodie हैं! हर cuisine, हर restaurant, हर new dish try करने को तैयार। खाना आपके लिए adventure है!',
    traits: ['adventurous', 'open-minded', 'experimental', 'social', 'enthusiastic'],
    weaknesses: ['budget का ध्यान नहीं', 'health second priority'],
    advice: 'थोड़ा budget और health का भी ध्यान रखें!',
  },
  C: {
    type: 'C',
    title: 'हेल्थ कॉन्शियस',
    emoji: '🥗',
    description: 'आपके लिए खाना fuel है। Nutrition, calories, proteins - सब calculate करके खाते हैं। Health first!',
    traits: ['health-conscious', 'disciplined', 'informed', 'fit', 'careful'],
    weaknesses: ['कभी-कभी overthink', 'social eating में problem'],
    advice: 'कभी-कभी छूट लें, एक samosa से कुछ नहीं होगा!',
  },
  D: {
    type: 'D',
    title: 'फास्ट फूड फैन',
    emoji: '🍔',
    description: 'आप modern foodie हैं! Quick, tasty, convenient - यही आपका mantra है। Zomato और Swiggy आपके best friends हैं!',
    traits: ['convenient', 'modern', 'fast-paced', 'trendy', 'busy'],
    weaknesses: ['health ignore', 'cooking skills कम'],
    advice: 'थोड़ा घर का खाना भी खाएं, health important है!',
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
