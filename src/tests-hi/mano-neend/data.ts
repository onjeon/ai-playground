export const questions = [
  {
    id: 1,
    text: 'रात को कितने घंटे सोते हैं?',
    options: [
      { text: '7-9 घंटे, perfect', type: 'A' },
      { text: '6-7 घंटे', type: 'B' },
      { text: '5-6 घंटे', type: 'C' },
      { text: '5 से कम या बहुत ज्यादा', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'नींद की quality कैसी है?',
    options: [
      { text: 'बहुत अच्छी, deep sleep', type: 'A' },
      { text: 'अच्छी है', type: 'B' },
      { text: 'ठीक-ठाक', type: 'C' },
      { text: 'खराब', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'सोने में कितना time लगता है?',
    options: [
      { text: '15 min से कम', type: 'A' },
      { text: '15-30 min', type: 'B' },
      { text: '30 min से ज्यादा', type: 'C' },
      { text: 'घंटों तक जागता रहता हूं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'रात में कितनी बार जागते हैं?',
    options: [
      { text: 'कभी नहीं या एक बार', type: 'A' },
      { text: '1-2 बार', type: 'B' },
      { text: 'कई बार', type: 'C' },
      { text: 'बार-बार', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'सुबह उठने पर कैसा feel होता है?',
    options: [
      { text: 'Fresh और energetic', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'थका हुआ', type: 'C' },
      { text: 'बहुत थका हुआ', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Sleep schedule कैसा है?',
    options: [
      { text: 'Fixed, consistent', type: 'A' },
      { text: 'Mostly consistent', type: 'B' },
      { text: 'Irregular', type: 'C' },
      { text: 'बहुत irregular', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'सोने से पहले phone/screen use कितना है?',
    options: [
      { text: 'नहीं या बहुत कम', type: 'A' },
      { text: 'थोड़ा', type: 'B' },
      { text: 'काफी', type: 'C' },
      { text: 'बहुत ज्यादा', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'दिन में नींद आती है?',
    options: [
      { text: 'नहीं', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'अक्सर', type: 'C' },
      { text: 'हर समय', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Stress/anxiety नींद को कितना affect करता है?',
    options: [
      { text: 'बहुत कम', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'अक्सर', type: 'C' },
      { text: 'हमेशा', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Sleep environment कैसा है?',
    options: [
      { text: 'Perfect - dark, quiet, comfortable', type: 'A' },
      { text: 'अच्छा है', type: 'B' },
      { text: 'ठीक-ठाक', type: 'C' },
      { text: 'खराब', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Snoring या breathing issues हैं?',
    options: [
      { text: 'नहीं', type: 'A' },
      { text: 'थोड़ी', type: 'B' },
      { text: 'हां', type: 'C' },
      { text: 'Serious', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall sleep से satisfaction कैसी है?',
    options: [
      { text: 'बहुत satisfied', type: 'A' },
      { text: 'Satisfied', type: 'B' },
      { text: 'Unsatisfied', type: 'C' },
      { text: 'बहुत unsatisfied', type: 'D' },
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
    title: 'उत्कृष्ट नींद',
    emoji: '😴',
    description: 'आपकी नींद excellent है। Quality, quantity, और schedule सब perfect है।',
    traits: ['well-rested', 'energetic', 'healthy sleep'],
    weaknesses: ['maintain करना जरूरी'],
    advice: 'Great! इसे maintain करें। Sleep hygiene continue करें।',
  },
  B: {
    type: 'B',
    title: 'अच्छी नींद',
    emoji: '🌙',
    description: 'नींद अच्छी है। कुछ areas better हो सकते हैं।',
    traits: ['fairly rested', 'managing'],
    weaknesses: ['improvement scope'],
    advice: 'Sleep hygiene improve करें। Screen time कम करें।',
  },
  C: {
    type: 'C',
    title: 'कमजोर नींद',
    emoji: '😫',
    description: 'नींद की issues हैं। Energy और health affect हो रही है।',
    traits: ['tired', 'struggling', 'sleep deprived'],
    weaknesses: ['health effects', 'productivity down', 'mood issues'],
    advice: 'Sleep schedule fix करें। Screen से दूर रहें। Doctor से मिलें अगर जरूरी हो।',
  },
  D: {
    type: 'D',
    title: 'गंभीर नींद समस्या',
    emoji: '😵',
    description: 'Serious sleep issues हैं। Health पर गंभीर असर हो रहा है।',
    traits: ['severely sleep deprived', 'exhausted', 'suffering'],
    weaknesses: ['health damage', 'accidents risk', 'mental health'],
    advice: 'Doctor से immediately मिलें। Sleep disorder हो सकता है। यह treatable है।',
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
