export const questions = [
  {
    id: 1,
    text: 'खुद को जैसे हैं वैसे accept करने में कैसे हैं?',
    options: [
      { text: 'पूरी तरह accept करता हूं', type: 'A' },
      { text: 'काफी हद तक', type: 'B' },
      { text: 'थोड़ा बहुत', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'अपनी कमियों के बारे में क्या सोचते हैं?',
    options: [
      { text: 'Part of me, accept करता हूं', type: 'A' },
      { text: 'Work on them लेकिन accept', type: 'B' },
      { text: 'बहुत bother करती हैं', type: 'C' },
      { text: 'खुद से नफरत होती है', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Past mistakes को कैसे देखते हैं?',
    options: [
      { text: 'Learning, forgiven myself', type: 'A' },
      { text: 'Accept किया है', type: 'B' },
      { text: 'Still bother करती हैं', type: 'C' },
      { text: 'Cannot forgive myself', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'जो नहीं बदल सकते उसे कैसे handle करते हैं?',
    options: [
      { text: 'Accept करके peace रखता हूं', type: 'A' },
      { text: 'Accept करने की कोशिश करता हूं', type: 'B' },
      { text: 'Struggle करता हूं', type: 'C' },
      { text: 'Cannot accept', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Life जैसी है उसे accept करना कैसा है?',
    options: [
      { text: 'Accept करता हूं, grateful हूं', type: 'A' },
      { text: 'ज्यादातर accept', type: 'B' },
      { text: 'Constantly complain करता हूं', type: 'C' },
      { text: 'Bitter हूं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'दूसरों को जैसे हैं वैसे accept करना कैसा है?',
    options: [
      { text: 'आसान है', type: 'A' },
      { text: 'ज्यादातर कर पाता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'जब चीजें plan के हिसाब से न हों तो?',
    options: [
      { text: 'Accept करके adjust', type: 'A' },
      { text: 'थोड़ा frustrated, फिर accept', type: 'B' },
      { text: 'बहुत disturbed', type: 'C' },
      { text: 'Cannot handle', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'अपनी body को कैसे accept करते हैं?',
    options: [
      { text: 'Love my body', type: 'A' },
      { text: 'Accept करता हूं', type: 'B' },
      { text: 'कई issues हैं', type: 'C' },
      { text: 'Hate my body', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'जब loss हो तो acceptance कैसी है?',
    options: [
      { text: 'Grieve करके accept करता हूं', type: 'A' },
      { text: 'Time लेकर accept', type: 'B' },
      { text: 'बहुत मुश्किल है', type: 'C' },
      { text: 'Cannot accept', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Imperfections के बारे में क्या सोचते हैं?',
    options: [
      { text: 'Part of being human', type: 'A' },
      { text: 'Normal हैं', type: 'B' },
      { text: 'बहुत bother करती हैं', type: 'C' },
      { text: 'Unacceptable हैं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '\"यही है\" - इस statement से कैसे relate करते हैं?',
    options: [
      { text: 'Peace देती है', type: 'A' },
      { text: 'Helpful है', type: 'B' },
      { text: 'Resignation जैसा लगता है', type: 'C' },
      { text: 'Negative लगता है', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall acceptance level कैसा है?',
    options: [
      { text: 'बहुत high', type: 'A' },
      { text: 'अच्छा', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'बहुत कम', type: 'D' },
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
    title: 'उच्च स्वीकार्यता',
    emoji: '🙏',
    description: 'आप बहुत accepting हैं। खुद को, दूसरों को, और life को जैसे हैं वैसे accept करते हैं। यह inner peace देता है।',
    traits: ['accepting', 'peaceful', 'wise', 'content'],
    weaknesses: ['कभी-कभी complacent लग सकते हैं'],
    advice: 'Beautiful quality! Accept करना और change करना दोनों balance में रखें।',
  },
  B: {
    type: 'B',
    title: 'अच्छी स्वीकार्यता',
    emoji: '😊',
    description: 'आपकी acceptance अच्छी है। ज्यादातर चीजें accept कर लेते हैं।',
    traits: ['mostly accepting', 'balanced', 'realistic'],
    weaknesses: ['कुछ areas में struggle'],
    advice: 'जहां resist करते हैं वहां awareness लाएं। Acceptance peace देती है।',
  },
  C: {
    type: 'C',
    title: 'कम स्वीकार्यता',
    emoji: '😤',
    description: 'Acceptance में struggle है। Resist करते हैं जो है उसे जो stress देता है।',
    traits: ['resistant', 'struggling', 'complaining'],
    weaknesses: ['inner conflict', 'stress', 'unhappiness'],
    advice: 'Acceptance को practice करें। जो नहीं बदल सकते उसे accept करें। Therapy helpful हो सकती है।',
  },
  D: {
    type: 'D',
    title: 'बहुत कम स्वीकार्यता',
    emoji: '💔',
    description: 'आप accept नहीं कर पाते - खुद को, life को, या situations को। यह suffering create कर रहा है।',
    traits: ['non-accepting', 'bitter', 'resentful'],
    weaknesses: ['deep unhappiness', 'stuck', 'self-hatred possible'],
    advice: 'Professional help जरूरी है। Self-compassion और acceptance सीखना possible है।',
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
