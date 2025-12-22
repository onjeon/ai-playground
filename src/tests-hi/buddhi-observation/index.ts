// अवलोकन क्षमता टेस्ट - Observation Skills Test
// 관찰력 테스트

export const questions = [
  {
    id: 1,
    text: 'जब आप किसी नई जगह जाते हैं तो क्या notice करते हैं?',
    options: [
      { text: 'हर छोटी-बड़ी detail', type: 'A' },
      { text: 'Important चीजें', type: 'B' },
      { text: 'कुछ खास चीजें', type: 'C' },
      { text: 'ज्यादा ध्यान नहीं देता', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'किसी के haircut या नई चीज़ notice करने में?',
    options: [
      { text: 'तुरंत notice कर लेता हूँ', type: 'A' },
      { text: 'अक्सर notice करता हूँ', type: 'B' },
      { text: 'कभी-कभी miss हो जाता है', type: 'C' },
      { text: 'अक्सर miss हो जाता है', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Spot the difference games में?',
    options: [
      { text: 'सब differences जल्दी ढूंढ लेता हूँ', type: 'A' },
      { text: 'ज्यादातर ढूंढ लेता हूँ', type: 'B' },
      { text: 'कुछ ढूंढ पाता हूँ', type: 'C' },
      { text: 'मुश्किल लगता है', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'किसी की body language पढ़ने में?',
    options: [
      { text: 'बहुत अच्छा हूँ', type: 'A' },
      { text: 'ठीक-ठाक', type: 'B' },
      { text: 'कभी-कभी समझता हूँ', type: 'C' },
      { text: 'ध्यान नहीं देता', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Room में कोई चीज़ हिल जाए तो?',
    options: [
      { text: 'तुरंत notice करता हूँ', type: 'A' },
      { text: 'अक्सर notice होता है', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'शायद ही notice हो', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Movie में continuity errors (छोटी गलतियाँ) notice करते हैं?',
    options: [
      { text: 'हाँ, अक्सर', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'कभी नहीं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'लोगों के चेहरे याद रखने में?',
    options: [
      { text: 'बहुत अच्छा हूँ', type: 'A' },
      { text: 'अच्छा हूँ', type: 'B' },
      { text: 'Average', type: 'C' },
      { text: 'मुश्किल है', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Traffic में road signs और signals?',
    options: [
      { text: 'सब notice करता हूँ', type: 'A' },
      { text: 'Important ones देखता हूँ', type: 'B' },
      { text: 'कभी-कभी miss होते हैं', type: 'C' },
      { text: 'ध्यान नहीं देता', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'किसी document में typo या mistake?',
    options: [
      { text: 'तुरंत पकड़ लेता हूँ', type: 'A' },
      { text: 'अक्सर पकड़ लेता हूँ', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'अक्सर miss होती है', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'किसी की dress या accessories?',
    options: [
      { text: 'हर detail notice करता हूँ', type: 'A' },
      { text: 'Main things देखता हूँ', type: 'B' },
      { text: 'कुछ-कुछ', type: 'C' },
      { text: 'ज्यादा ध्यान नहीं देता', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Weather में बदलाव notice करने में?',
    options: [
      { text: 'हल्का सा बदलाव भी पता चल जाता है', type: 'A' },
      { text: 'बड़े बदलाव notice करता हूँ', type: 'B' },
      { text: 'जब बहुत बदले तब', type: 'C' },
      { text: 'ध्यान नहीं देता', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'किसी के mood में बदलाव?',
    options: [
      { text: 'तुरंत पता चल जाता है', type: 'A' },
      { text: 'अक्सर पता चलता है', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'जब बताएं तब', type: 'D' },
    ],
  },
  {
    id: 13,
    text: 'Nature में छोटे-छोटे details (पत्ते, फूल, कीड़े)?',
    options: [
      { text: 'सब observe करता हूँ', type: 'A' },
      { text: 'कुछ चीजें देखता हूँ', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'ध्यान नहीं जाता', type: 'D' },
    ],
  },
  {
    id: 14,
    text: 'Sound में बदलाव (जैसे car की आवाज, AC)?',
    options: [
      { text: 'हल्का सा बदलाव भी सुनाई देता है', type: 'A' },
      { text: 'बड़े बदलाव सुनता हूँ', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'ध्यान नहीं जाता', type: 'D' },
    ],
  },
  {
    id: 15,
    text: 'क्या आप अच्छे witness (गवाह) बन सकते हैं?',
    options: [
      { text: 'हाँ, सब याद रहेगा', type: 'A' },
      { text: 'Important details याद रहेंगी', type: 'B' },
      { text: 'कुछ-कुछ याद रहेगा', type: 'C' },
      { text: 'शायद नहीं', type: 'D' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  tips: string[];
}> = {
  A: {
    type: 'A',
    title: 'तीक्ष्ण अवलोकक',
    emoji: '🦅',
    description: 'आपकी observation skills अद्भुत हैं! आप छोटी से छोटी detail भी notice कर लेते हैं।',
    traits: ['sharp observer', 'detail-oriented', 'perceptive', 'attentive'],
    strengths: ['details catch करना', 'patterns recognize करना', 'changes notice करना'],
    weaknesses: ['कभी-कभी over-analyze करना'],
    tips: ['Detective work, quality control, या research में career explore करें'],
  },
  B: {
    type: 'B',
    title: 'अच्छी अवलोकन क्षमता',
    emoji: '👁️',
    description: 'आपकी observation skills अच्छी हैं। Important चीजें आप notice कर लेते हैं।',
    traits: ['good observer', 'attentive', 'aware'],
    strengths: ['important details देखना', 'situational awareness'],
    weaknesses: ['छोटी details miss हो सकती हैं'],
    tips: ['Mindfulness practice करें'],
  },
  C: {
    type: 'C',
    title: 'औसत अवलोकन क्षमता',
    emoji: '🔍',
    description: 'आपकी observation average है। Practice से improve हो सकती है।',
    traits: ['average observer', 'selective attention'],
    strengths: ['main things देखना'],
    weaknesses: ['details miss होना'],
    tips: ['Actively observe करने की habit बनाएं'],
  },
  D: {
    type: 'D',
    title: 'अवलोकन में सुधार की जरूरत',
    emoji: '👀',
    description: 'Observation skills में improvement की गुंजाइश है। Mindfulness मदद करेगी।',
    traits: ['needs improvement', 'often distracted'],
    strengths: ['focus on big picture'],
    weaknesses: ['details miss करना'],
    tips: ['Daily 5 minute observation exercise करें, surroundings को consciously देखें'],
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
