export const questions = [
  {
    id: 1,
    text: 'अपनी creativity के बारे में क्या सोचते हैं?',
    options: [
      { text: 'बहुत creative हूं', type: 'A' },
      { text: 'काफी creative', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'बिल्कुल नहीं', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'New ideas कितनी आती हैं?',
    options: [
      { text: 'हमेशा, mind full है', type: 'A' },
      { text: 'अक्सर', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'बहुत कम', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Problems को solve करने का तरीका कैसा है?',
    options: [
      { text: 'Out of box, unique ways', type: 'A' },
      { text: 'Different approaches try करता हूं', type: 'B' },
      { text: 'Standard ways', type: 'C' },
      { text: 'Struggle करता हूं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Art, music, writing में interest कैसा है?',
    options: [
      { text: 'बहुत, actively करता हूं', type: 'A' },
      { text: 'Interest है, कभी-कभी करता हूं', type: 'B' },
      { text: 'थोड़ा', type: 'C' },
      { text: 'कोई नहीं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'चीजों को different angle से देखना कैसा है?',
    options: [
      { text: 'Natural है, always देखता हूं', type: 'A' },
      { text: 'कर पाता हूं', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं कर पाता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Daydreaming या imagination कैसी है?',
    options: [
      { text: 'बहुत rich, vivid', type: 'A' },
      { text: 'अच्छी है', type: 'B' },
      { text: 'कम है', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'जब नई चीज create करें तो कैसा feel होता है?',
    options: [
      { text: 'Amazing, alive', type: 'A' },
      { text: 'अच्छा लगता है', type: 'B' },
      { text: 'ठीक-ठाक', type: 'C' },
      { text: 'कुछ खास नहीं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Brainstorming में कैसे हैं?',
    options: [
      { text: 'बहुत ideas आती हैं', type: 'A' },
      { text: 'Contribute करता हूं', type: 'B' },
      { text: 'थोड़ा struggle', type: 'C' },
      { text: 'कुछ नहीं आता', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Routine vs variety में क्या पसंद है?',
    options: [
      { text: 'Variety, नई चीजें', type: 'A' },
      { text: 'Mix of both', type: 'B' },
      { text: 'Routine prefer', type: 'C' },
      { text: 'Only routine', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'अपने unique qualities के बारे में क्या सोचते हैं?',
    options: [
      { text: 'जानता हूं और use करता हूं', type: 'A' },
      { text: 'कुछ हैं', type: 'B' },
      { text: 'पता नहीं', type: 'C' },
      { text: 'कोई नहीं है', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Expressing yourself creatively कैसा लगता है?',
    options: [
      { text: 'जरूरी है, करता रहता हूं', type: 'A' },
      { text: 'अच्छा लगता है', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं करता', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'अपनी overall creativity को कैसे rate करेंगे?',
    options: [
      { text: '8-10', type: 'A' },
      { text: '6-7', type: 'B' },
      { text: '4-5', type: 'C' },
      { text: '1-3', type: 'D' },
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
    title: 'उच्च प्रतिभा',
    emoji: '🎨',
    description: 'आप बहुत creative और talented हैं। Ideas flow करती हैं और आप unique तरीके से सोचते हैं।',
    traits: ['creative', 'imaginative', 'innovative', 'artistic'],
    weaknesses: ['practical execution कभी-कभी कम'],
    advice: 'अपनी creativity को channel करें। Create करते रहें। Share करें।',
  },
  B: {
    type: 'B',
    title: 'अच्छी प्रतिभा',
    emoji: '⭐',
    description: 'आपमें अच्छी creativity है। Ideas आती हैं और आप different सोच सकते हैं।',
    traits: ['creative', 'flexible thinker', 'capable'],
    weaknesses: ['more practice से और better'],
    advice: 'Creative activities regularly करें। Practice से और बढ़ेगी।',
  },
  C: {
    type: 'C',
    title: 'सामान्य प्रतिभा',
    emoji: '😐',
    description: 'Creativity average है। ज्यादातर standard तरीकों से सोचते हैं।',
    traits: ['conventional', 'practical', 'standard thinking'],
    weaknesses: ['out of box thinking कम'],
    advice: 'Creativity सीखी जा सकती है। Try new things। Brainstorm। Art explore करें।',
  },
  D: {
    type: 'D',
    title: 'कम प्रतिभा',
    emoji: '📦',
    description: 'Creative thinking में struggle है। यह develop की जा सकती है।',
    traits: ['rigid thinking', 'following', 'routine-oriented'],
    weaknesses: ['limited perspective', 'missing creativity benefits'],
    advice: 'Everyone can be creative। Start small। Doodle, write, explore। Creativity is a muscle।',
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
