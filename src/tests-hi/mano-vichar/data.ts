export const questions = [
  {
    id: 1,
    text: 'आपके मन में आमतौर पर कैसे विचार आते हैं?',
    options: [
      { text: 'ज्यादातर positive और constructive', type: 'A' },
      { text: 'Mixed, दोनों तरह के', type: 'B' },
      { text: 'ज्यादातर negative', type: 'C' },
      { text: 'लगातार negative और disturbing', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Negative thoughts आने पर आप क्या करते हैं?',
    options: [
      { text: 'Replace कर देता हूं positive से', type: 'A' },
      { text: 'Acknowledge करके जाने देता हूं', type: 'B' },
      { text: 'उनमें फंस जाता हूं', type: 'C' },
      { text: 'Control नहीं होता, सोचता रहता हूं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'खुद के बारे में आपके विचार कैसे हैं?',
    options: [
      { text: 'Positive, खुद को अच्छा मानता हूं', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'Negative, कमियां ज्यादा दिखती हैं', type: 'C' },
      { text: 'बहुत negative, खुद से नफरत', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Future के बारे में क्या सोचते हैं?',
    options: [
      { text: 'Bright और hopeful', type: 'A' },
      { text: 'अच्छा होगा', type: 'B' },
      { text: 'Uncertain, worried', type: 'C' },
      { text: 'Hopeless, कुछ अच्छा नहीं होगा', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'दूसरों के बारे में आपके विचार कैसे हैं?',
    options: [
      { text: 'ज्यादातर अच्छे लोग हैं', type: 'A' },
      { text: 'कुछ अच्छे, कुछ बुरे', type: 'B' },
      { text: 'ज्यादातर selfish हैं', type: 'C' },
      { text: 'किसी पर trust नहीं करना चाहिए', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Overthinking कितना करते हैं?',
    options: [
      { text: 'बहुत कम', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'अक्सर', type: 'C' },
      { text: 'हर समय', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Past की mistakes के बारे में क्या सोचते हैं?',
    options: [
      { text: 'सीखा और आगे बढ़ा', type: 'A' },
      { text: 'कभी-कभी याद आती हैं', type: 'B' },
      { text: 'बहुत regret होता है', type: 'C' },
      { text: 'हर समय सोचता रहता हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Problems के बारे में कैसे सोचते हैं?',
    options: [
      { text: 'Solutions पर focus', type: 'A' },
      { text: 'Analyze करके solve करता हूं', type: 'B' },
      { text: 'Problems पर stuck रहता हूं', type: 'C' },
      { text: 'कोई solution नहीं दिखता', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '\"क्या अगर...\" thoughts कितने आते हैं?',
    options: [
      { text: 'बहुत कम', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'अक्सर', type: 'C' },
      { text: 'हर समय', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'World के बारे में आपका view क्या है?',
    options: [
      { text: 'Good place है, opportunities हैं', type: 'A' },
      { text: 'Mixed, अच्छा-बुरा दोनों', type: 'B' },
      { text: 'ज्यादातर बुरा है', type: 'C' },
      { text: 'Terrible, कोई hope नहीं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Intrusive या unwanted thoughts कितने आते हैं?',
    options: [
      { text: 'बहुत कम', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'अक्सर', type: 'C' },
      { text: 'लगातार, परेशान करते हैं', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall अपने thinking patterns को कैसे describe करेंगे?',
    options: [
      { text: 'Positive और healthy', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'Negative tendency', type: 'C' },
      { text: 'Very negative, toxic', type: 'D' },
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
    title: 'सकारात्मक विचार पैटर्न',
    emoji: '☀️',
    description: 'आपके विचार ज्यादातर positive और healthy हैं। आप constructive सोचते हैं और solutions पर focus करते हैं।',
    traits: ['optimistic', 'solution-focused', 'healthy mindset'],
    weaknesses: ['कभी-कभी over-optimistic हो सकते हैं'],
    advice: 'अपना positive mindset बनाए रखें।',
  },
  B: {
    type: 'B',
    title: 'संतुलित विचार पैटर्न',
    emoji: '⚖️',
    description: 'आपके विचार balanced हैं। Positive और negative दोनों आते हैं लेकिन आप manage कर लेते हैं।',
    traits: ['realistic', 'balanced', 'aware'],
    weaknesses: ['कभी-कभी negative में slip हो जाते हैं'],
    advice: 'Positive thoughts को consciously cultivate करें।',
  },
  C: {
    type: 'C',
    title: 'नकारात्मक विचार प्रवृत्ति',
    emoji: '☁️',
    description: 'आपके विचार ज्यादातर negative हैं। Overthinking और worry common है।',
    traits: ['pessimistic', 'overthinking', 'anxious'],
    weaknesses: ['negative bias', 'stress', 'unhappiness'],
    advice: 'Cognitive Behavioral Therapy बहुत helpful है। Thoughts को challenge करना सीखें।',
  },
  D: {
    type: 'D',
    title: 'बहुत नकारात्मक विचार',
    emoji: '🌑',
    description: 'आपके विचार बहुत negative और disturbing हैं। यह anxiety या depression के signs हो सकते हैं।',
    traits: ['very negative', 'hopeless', 'intrusive thoughts'],
    weaknesses: ['mental health issues', 'suffering', 'isolation'],
    advice: 'कृपया professional help लें immediately। CBT therapy बहुत effective है। आप better feel कर सकते हैं।',
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
