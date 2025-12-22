export const questions = [
  {
    id: 1,
    text: 'जब कोई goal set करते हैं तो उस पर कितने firm हैं?',
    options: [
      { text: 'बहुत firm, जब तक achieve न हो', type: 'A' },
      { text: 'काफी firm', type: 'B' },
      { text: 'थोड़ा बहुत', type: 'C' },
      { text: 'जल्दी छोड़ देता हूं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Obstacles आने पर क्या करते हैं?',
    options: [
      { text: 'और जोश से लड़ता हूं', type: 'A' },
      { text: 'तरीका बदलता हूं लेकिन continue करता हूं', type: 'B' },
      { text: 'Discouraged हो जाता हूं', type: 'C' },
      { text: 'छोड़ देता हूं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'New Year resolutions के साथ क्या होता है?',
    options: [
      { text: 'Follow करता हूं पूरा साल', type: 'A' },
      { text: 'ज्यादातर follow करता हूं', type: 'B' },
      { text: 'कुछ महीने चलता है', type: 'C' },
      { text: 'जनवरी में ही खत्म', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'जब मन न हो तो भी काम करने में आप कैसे हैं?',
    options: [
      { text: 'करता हूं, discipline है', type: 'A' },
      { text: 'ज्यादातर करता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Long-term commitments में आप कैसे हैं?',
    options: [
      { text: 'Excellent, निभाता हूं', type: 'A' },
      { text: 'अच्छा हूं', type: 'B' },
      { text: 'Struggle करता हूं', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Temptations का सामना कैसे करते हैं?',
    options: [
      { text: 'Resist कर लेता हूं', type: 'A' },
      { text: 'ज्यादातर resist करता हूं', type: 'B' },
      { text: 'अक्सर give in हो जाता हूं', type: 'C' },
      { text: 'Resist नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'जब results जल्दी न मिलें तो क्या करते हैं?',
    options: [
      { text: 'Continue करता हूं, patience है', type: 'A' },
      { text: 'थोड़ा frustrate होता हूं लेकिन continue', type: 'B' },
      { text: 'बहुत frustrate हो जाता हूं', type: 'C' },
      { text: 'छोड़ देता हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Promises निभाने में आप कैसे हैं?',
    options: [
      { text: 'हमेशा निभाता हूं', type: 'A' },
      { text: 'ज्यादातर निभाता हूं', type: 'B' },
      { text: 'कभी-कभी तोड़ देता हूं', type: 'C' },
      { text: 'अक्सर तोड़ देता हूं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Exercise या healthy habits में consistency कैसी है?',
    options: [
      { text: 'Very consistent', type: 'A' },
      { text: 'काफी consistent', type: 'B' },
      { text: 'On and off', type: 'C' },
      { text: 'नहीं रख पाता', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'जब सब कहें \"छोड़ दो\" तो क्या करते हैं?',
    options: [
      { text: 'और determination से continue', type: 'A' },
      { text: 'सोचता हूं लेकिन continue', type: 'B' },
      { text: 'Doubt होने लगता है', type: 'C' },
      { text: 'छोड़ देता हूं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'अपने decisions पर कितने firm हैं?',
    options: [
      { text: 'बहुत firm, बदलता नहीं', type: 'A' },
      { text: 'काफी firm', type: 'B' },
      { text: 'आसानी से बदल जाता है', type: 'C' },
      { text: 'Decide ही नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'आप खुद को कितना determined मानते हैं?',
    options: [
      { text: 'बहुत determined', type: 'A' },
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
    title: 'मजबूत संकल्प शक्ति',
    emoji: '💪',
    description: 'आपकी willpower बहुत strong है। जो ठान लेते हैं वो करके दिखाते हैं।',
    traits: ['determined', 'disciplined', 'focused', 'persistent'],
    weaknesses: ['कभी-कभी stubborn', 'flexible नहीं'],
    advice: 'अपनी strength बनाए रखें। Flexibility भी जरूरी है।',
  },
  B: {
    type: 'B',
    title: 'अच्छी संकल्प शक्ति',
    emoji: '⭐',
    description: 'आपकी willpower अच्छी है। ज्यादातर commitments निभाते हैं।',
    traits: ['reliable', 'committed', 'focused'],
    weaknesses: ['कभी-कभी wavering'],
    advice: 'Consistency और improve करें। Daily habits बनाएं।',
  },
  C: {
    type: 'C',
    title: 'कमजोर संकल्प शक्ति',
    emoji: '😔',
    description: 'आपकी willpower कम है। Goals set तो करते हैं लेकिन follow through मुश्किल है।',
    traits: ['inconsistent', 'easily distracted', 'weak commitment'],
    weaknesses: ['goals achieve नहीं होते', 'self-trust कम'],
    advice: 'छोटे goals से शुरू करें। Accountability partner रखें। Habits धीरे-धीरे build करें।',
  },
  D: {
    type: 'D',
    title: 'बहुत कमजोर संकल्प शक्ति',
    emoji: '😞',
    description: 'आपकी willpower बहुत कम है। Commitments निभाना बहुत मुश्किल है।',
    traits: ['no discipline', 'gives up easily', 'unreliable'],
    weaknesses: ['no achievements', 'low self-esteem', 'regrets'],
    advice: 'बहुत छोटे से शुरू करें। One tiny habit at a time। Professional help भी helpful हो सकती है।',
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
