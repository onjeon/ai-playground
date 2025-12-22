export const questions = [
  {
    id: 1,
    text: 'Life में higher power या God में आपका विश्वास कैसा है?',
    options: [
      { text: 'बहुत strong, पूर्ण विश्वास', type: 'A' },
      { text: 'विश्वास है', type: 'B' },
      { text: 'Uncertain', type: 'C' },
      { text: 'नहीं है', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Prayer या प्रार्थना में आप कैसे हैं?',
    options: [
      { text: 'रोज करता हूं, connection feel होता है', type: 'A' },
      { text: 'कभी-कभी करता हूं', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Karma या कर्म में आपका विश्वास कैसा है?',
    options: [
      { text: 'पूर्ण विश्वास, जो करोगे वो पाओगे', type: 'A' },
      { text: 'काफी हद तक मानता हूं', type: 'B' },
      { text: 'थोड़ा बहुत', type: 'C' },
      { text: 'नहीं मानता', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'मुश्किल समय में faith कैसा रहता है?',
    options: [
      { text: 'और strong हो जाता है', type: 'A' },
      { text: 'बना रहता है', type: 'B' },
      { text: 'Shaky हो जाता है', type: 'C' },
      { text: 'खत्म हो जाता है', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Life में purpose या meaning के बारे में क्या सोचते हैं?',
    options: [
      { text: 'Clear है, divine plan है', type: 'A' },
      { text: 'कुछ purpose है', type: 'B' },
      { text: 'पता नहीं', type: 'C' },
      { text: 'कोई purpose नहीं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Spiritual practices कितनी करते हैं?',
    options: [
      { text: 'Regular, daily', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'कभी नहीं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Death या मृत्यु के बारे में क्या सोचते हैं?',
    options: [
      { text: 'आत्मा अमर है, transition है', type: 'A' },
      { text: 'कुछ है beyond', type: 'B' },
      { text: 'पता नहीं', type: 'C' },
      { text: 'Nothing, end है', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Gratitude या कृतज्ञता के बारे में कैसे हैं?',
    options: [
      { text: 'रोज feel करता हूं, धन्यवाद देता हूं', type: 'A' },
      { text: 'अक्सर grateful रहता हूं', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'बहुत कम', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'जब अच्छा होता है तो किसका credit देते हैं?',
    options: [
      { text: 'God/Universe का, blessed feel करता हूं', type: 'A' },
      { text: 'Luck और effort दोनों', type: 'B' },
      { text: 'अपनी मेहनत का', type: 'C' },
      { text: 'Random है, कोई credit नहीं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Life में coincidences या संयोग के बारे में क्या सोचते हैं?',
    options: [
      { text: 'Divine signs हैं', type: 'A' },
      { text: 'कुछ meaning हो सकता है', type: 'B' },
      { text: 'Just coincidence', type: 'C' },
      { text: 'Random events', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Inner peace के लिए spirituality कितनी important है?',
    options: [
      { text: 'बहुत, core है', type: 'A' },
      { text: 'Important है', type: 'B' },
      { text: 'थोड़ी बहुत', type: 'C' },
      { text: 'नहीं है', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'आप खुद को कितना spiritual मानते हैं?',
    options: [
      { text: 'बहुत spiritual', type: 'A' },
      { text: 'काफी', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
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
    title: 'गहरी श्रद्धा',
    emoji: '🙏',
    description: 'आपकी श्रद्धा बहुत गहरी है। Spirituality आपके जीवन का core part है और आपको peace देती है।',
    traits: ['spiritual', 'faithful', 'peaceful', 'grateful'],
    weaknesses: ['कभी-कभी over-reliance on faith'],
    advice: 'अपनी श्रद्धा बनाए रखें। यह आपकी strength है।',
  },
  B: {
    type: 'B',
    title: 'अच्छी श्रद्धा',
    emoji: '✨',
    description: 'आपकी श्रद्धा अच्छी है। Faith है लेकिन practical भी हैं।',
    traits: ['balanced', 'spiritual', 'grounded'],
    weaknesses: ['कभी-कभी faith कम होता है'],
    advice: 'Spiritual practice regular करें। Connection और deep होगा।',
  },
  C: {
    type: 'C',
    title: 'Uncertain श्रद्धा',
    emoji: '🤔',
    description: 'आप spiritual रूप से uncertain हैं। Questions हैं और clear नहीं है।',
    traits: ['questioning', 'seeking', 'uncertain'],
    weaknesses: ['no anchor', 'searching'],
    advice: 'Explore करें। Different paths देखें। आपका answer मिलेगा।',
  },
  D: {
    type: 'D',
    title: 'कम/कोई श्रद्धा नहीं',
    emoji: '🔬',
    description: 'आप spiritual नहीं हैं। यह ठीक है अगर आप खुश हैं, लेकिन अगर emptiness feel हो तो explore करें।',
    traits: ['rational', 'scientific', 'secular'],
    weaknesses: ['possible emptiness', 'no existential anchor'],
    advice: 'अगर life meaningful लगती है तो ठीक है। अगर emptiness है तो spirituality explore करें।',
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
