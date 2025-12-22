// रचनात्मक बुद्धि टेस्ट - Creative Intelligence Test
// 창의력 테스트

export const questions = [
  {
    id: 1,
    text: 'एक ईंट के कितने अलग-अलग उपयोग सोच सकते हैं?',
    options: [
      { text: '10 से ज्यादा', type: 'A' },
      { text: '5-10', type: 'B' },
      { text: '3-5', type: 'C' },
      { text: '1-2 (सिर्फ building)', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'नई problems solve करते समय आप?',
    options: [
      { text: 'अलग-अलग approaches try करता हूँ', type: 'A' },
      { text: 'कुछ नए ideas सोचता हूँ', type: 'B' },
      { text: 'पुराने methods से शुरू करता हूँ', type: 'C' },
      { text: 'जो सबने किया वही करता हूँ', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Brainstorming में आप?',
    options: [
      { text: 'बहुत सारे ideas देता हूँ', type: 'A' },
      { text: 'कुछ अच्छे ideas देता हूँ', type: 'B' },
      { text: 'दूसरों के ideas पर build करता हूँ', type: 'C' },
      { text: 'सुनता हूँ, कम बोलता हूँ', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Daydreaming करते हैं?',
    options: [
      { text: 'अक्सर, imagination rich है', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'कभी नहीं, practical रहता हूँ', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Art, music, या writing में interest?',
    options: [
      { text: 'बहुत ज्यादा, actively करता हूँ', type: 'A' },
      { text: 'Interest है, कभी-कभी करता हूँ', type: 'B' },
      { text: 'देखना/सुनना पसंद है, करना नहीं', type: 'C' },
      { text: 'कोई interest नहीं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'अगर rules न हों तो आप?',
    options: [
      { text: 'नए तरीके खोजूंगा/खोजूंगी', type: 'A' },
      { text: 'कुछ experiments करूंगा/करूंगी', type: 'B' },
      { text: 'थोड़ा confused हो जाऊंगा/जाऊंगी', type: 'C' },
      { text: 'Rules बनाऊंगा/बनाऊंगी पहले', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Failure को आप कैसे देखते हैं?',
    options: [
      { text: 'सीखने का मौका', type: 'A' },
      { text: 'थोड़ा निराशाजनक पर आगे बढ़ता हूँ', type: 'B' },
      { text: 'बुरा लगता है', type: 'C' },
      { text: 'Failure से बचता हूँ', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'नई चीजें try करने में?',
    options: [
      { text: 'हमेशा excited रहता हूँ', type: 'A' },
      { text: 'अक्सर try करता हूँ', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'जो जानता हूँ वही करता हूँ', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '"What if?" questions सोचते हैं?',
    options: [
      { text: 'हर समय', type: 'A' },
      { text: 'अक्सर', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'शायद ही कभी', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'दूसरों से अलग होने में?',
    options: [
      { text: 'मजा आता है', type: 'A' },
      { text: 'ठीक है, पर balance रखता हूँ', type: 'B' },
      { text: 'थोड़ा uncomfortable', type: 'C' },
      { text: 'पसंद नहीं, fit in करना चाहता हूँ', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Problems को देखने का नजरिया?',
    options: [
      { text: 'हर problem में opportunity दिखती है', type: 'A' },
      { text: 'Positive रहने की कोशिश करता हूँ', type: 'B' },
      { text: 'Problem पर focus करता हूँ', type: 'C' },
      { text: 'Problems से बचता हूँ', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Creative work (art, writing, design) करते समय?',
    options: [
      { text: 'Time का पता नहीं चलता, flow में रहता हूँ', type: 'A' },
      { text: 'Enjoy करता हूँ', type: 'B' },
      { text: 'थोड़ा effort लगता है', type: 'C' },
      { text: 'Struggle होता है', type: 'D' },
    ],
  },
  {
    id: 13,
    text: 'Curiosity level?',
    options: [
      { text: 'बहुत ज्यादा, सब जानना है', type: 'A' },
      { text: 'Curious हूँ important चीजों में', type: 'B' },
      { text: 'जो जरूरी है वो जानता हूँ', type: 'C' },
      { text: 'Extra जानने की जरूरत नहीं', type: 'D' },
    ],
  },
  {
    id: 14,
    text: 'Boring tasks को interesting बनाने में?',
    options: [
      { text: 'हमेशा कोई तरीका खोज लेता हूँ', type: 'A' },
      { text: 'कभी-कभी try करता हूँ', type: 'B' },
      { text: 'Boring है तो boring है', type: 'C' },
      { text: 'जल्दी से खत्म करता हूँ', type: 'D' },
    ],
  },
  {
    id: 15,
    text: 'Imagination को reality में लाने में?',
    options: [
      { text: 'अक्सर try करता हूँ और succeed भी', type: 'A' },
      { text: 'कभी-कभी try करता हूँ', type: 'B' },
      { text: 'Imagination में ही रहता है', type: 'C' },
      { text: 'Practical चीजों पर focus करता हूँ', type: 'D' },
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
    title: 'रचनात्मक जीनियस',
    emoji: '🎨',
    description: 'आप अत्यंत रचनात्मक हैं! नए ideas और unique solutions आपकी विशेषता है। आप out of the box सोचते हैं।',
    traits: ['highly creative', 'innovative', 'imaginative', 'original thinker'],
    strengths: ['new ideas generate करना', 'problem solving', 'artistic expression'],
    weaknesses: ['practical execution में कभी-कभी कठिनाई'],
    tips: ['अपनी creativity को art, writing, या innovation में channel करें'],
  },
  B: {
    type: 'B',
    title: 'अच्छी रचनात्मकता',
    emoji: '💡',
    description: 'आपमें अच्छी creativity है। आप नए ideas सोच सकते हैं और उन्हें implement भी कर सकते हैं।',
    traits: ['creative', 'balanced', 'practical innovator'],
    strengths: ['ideas और execution दोनों', 'adaptable thinking'],
    weaknesses: ['बहुत radical ideas से बचते हैं'],
    tips: ['Creative risks लेने की habit बनाएं'],
  },
  C: {
    type: 'C',
    title: 'विकासशील रचनात्मकता',
    emoji: '🌱',
    description: 'आपकी creativity develop हो रही है। थोड़ी practice से और बेहतर होगी।',
    traits: ['developing creativity', 'learning', 'potential'],
    strengths: ['existing ideas को improve करना'],
    weaknesses: ['new ideas generate करने में कठिनाई'],
    tips: ['Creative activities try करें, जैसे drawing, writing, या music'],
  },
  D: {
    type: 'D',
    title: 'Practical Thinker',
    emoji: '⚙️',
    description: 'आप creativity से ज्यादा practical approach रखते हैं। दोनों का balance अच्छा होता है।',
    traits: ['practical', 'logical', 'structured'],
    strengths: ['execution', 'following processes'],
    weaknesses: ['new ideas में कठिनाई'],
    tips: ['Brainstorming exercises करें, "What if?" questions पूछें'],
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
