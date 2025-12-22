export const questions = [
  {
    id: 1,
    text: 'सुबह उठने पर आप कैसा महसूस करते हैं?',
    options: [
      { text: 'Excited, दिन शुरू करने को ready', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'थका हुआ, मन नहीं', type: 'C' },
      { text: 'उठने का बिल्कुल मन नहीं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'नई चीजें सीखने में आप कैसे हैं?',
    options: [
      { text: 'बहुत excited, love it', type: 'A' },
      { text: 'अच्छा लगता है', type: 'B' },
      { text: 'ठीक है', type: 'C' },
      { text: 'मन नहीं करता', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'अपने goals के बारे में आप कितने passionate हैं?',
    options: [
      { text: 'बहुत, जोश से भरा हूं', type: 'A' },
      { text: 'काफी', type: 'B' },
      { text: 'थोड़ा बहुत', type: 'C' },
      { text: 'कोई goal नहीं / interest नहीं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Challenges आने पर आप कैसे feel करते हैं?',
    options: [
      { text: 'Excited, मौका है prove करने का', type: 'A' },
      { text: 'Ready हूं face करने को', type: 'B' },
      { text: 'थोड़ा डर लगता है', type: 'C' },
      { text: 'बचना चाहता हूं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'अपने work/hobby में आप कितना involve हैं?',
    options: [
      { text: 'पूरी तरह, passion है', type: 'A' },
      { text: 'काफी involve', type: 'B' },
      { text: 'बस करना पड़ता है', type: 'C' },
      { text: 'कोई interest नहीं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Life में energy level कैसा है आपका?',
    options: [
      { text: 'High, full of energy', type: 'A' },
      { text: 'अच्छा है', type: 'B' },
      { text: 'कम है', type: 'C' },
      { text: 'बहुत low', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Future के बारे में सोचकर आप कैसा feel करते हैं?',
    options: [
      { text: 'Excited, बहुत कुछ करना है', type: 'A' },
      { text: 'Positive', type: 'B' },
      { text: 'Uncertain', type: 'C' },
      { text: 'Hopeless', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'दूसरों को motivate करने में आप कैसे हैं?',
    options: [
      { text: 'बहुत अच्छा, energy spread करता हूं', type: 'A' },
      { text: 'कर पाता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'खुद unmotivated हूं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Weekends का plan करने में आप कैसे हैं?',
    options: [
      { text: 'Excited, बहुत plans हैं', type: 'A' },
      { text: 'कुछ न कुछ करता हूं', type: 'B' },
      { text: 'ज्यादातर आराम', type: 'C' },
      { text: 'कुछ करने का मन नहीं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Life में कितना curiosity है?',
    options: [
      { text: 'बहुत, हर चीज जानना है', type: 'A' },
      { text: 'काफी', type: 'B' },
      { text: 'थोड़ी', type: 'C' },
      { text: 'कोई curiosity नहीं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'काम शुरू करने में आप कैसे हैं?',
    options: [
      { text: 'तुरंत, procrastinate नहीं करता', type: 'A' },
      { text: 'थोड़ा time लेता हूं', type: 'B' },
      { text: 'बहुत procrastinate करता हूं', type: 'C' },
      { text: 'शुरू ही नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'आप खुद को कितना enthusiastic मानते हैं?',
    options: [
      { text: 'बहुत, हमेशा excited', type: 'A' },
      { text: 'काफी', type: 'B' },
      { text: 'थोड़ा कम', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
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
    title: 'उच्च उत्साह',
    emoji: '🔥',
    description: 'आप बहुत enthusiastic हैं। Life में जोश है, passion है। आप दूसरों को भी inspire करते हैं।',
    traits: ['passionate', 'energetic', 'inspiring', 'driven'],
    weaknesses: ['कभी-कभी burn out हो सकते हैं'],
    advice: 'अपना enthusiasm बनाए रखें लेकिन rest भी जरूरी है।',
  },
  B: {
    type: 'B',
    title: 'अच्छा उत्साह',
    emoji: '⭐',
    description: 'आपका enthusiasm अच्छा है। Life में interest है और motivated हैं।',
    traits: ['motivated', 'positive', 'engaged'],
    weaknesses: ['कभी-कभी motivation down होता है'],
    advice: 'अपने passions को और explore करें। New things try करें।',
  },
  C: {
    type: 'C',
    title: 'कम उत्साह',
    emoji: '😐',
    description: 'आपका enthusiasm कम है। Life में वो spark नहीं है। Routine में फंस गए हैं।',
    traits: ['unmotivated', 'stuck', 'low energy'],
    weaknesses: ['boredom', 'no passion', 'just existing'],
    advice: 'कुछ नया try करें। Passion find करें। Exercise शुरू करें। नए लोगों से मिलें।',
  },
  D: {
    type: 'D',
    title: 'बहुत कम उत्साह',
    emoji: '😔',
    description: 'आप में enthusiasm बिल्कुल नहीं है। यह depression के signs हो सकते हैं।',
    traits: ['no interest', 'hopeless', 'exhausted'],
    weaknesses: ['depression possible', 'no will to live fully'],
    advice: 'कृपया doctor से मिलें। यह serious है और treatment से better हो सकते हैं।',
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
