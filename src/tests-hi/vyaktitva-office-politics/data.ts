// ऑफिस पॉलिटिक्स (Office Politics)
export const questions = [
  {
    id: 1,
    text: 'office politics के बारे में?',
    options: [
      { text: 'समझता/समझती हूं, carefully navigate', type: 'A' },
      { text: 'aware हूं, involved नहीं', type: 'B' },
      { text: 'दूर रहता/रहती हूं', type: 'C' },
      { text: 'नहीं समझता/समझती', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'colleague की gossip?',
    options: [
      { text: 'सुनता/सुनती हूं, participate नहीं', type: 'A' },
      { text: 'avoid करता/करती हूं', type: 'B' },
      { text: 'join कर लेता/लेती हूं', type: 'C' },
      { text: 'start करता/करती हूं कभी-कभी', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'credit चोरी हो जाए?',
    options: [
      { text: 'strategically reclaim करता/करती हूं', type: 'A' },
      { text: 'boss को बताता/बताती हूं', type: 'B' },
      { text: 'चुप रहता/रहती हूं', type: 'C' },
      { text: 'पता नहीं क्या करना है', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'boss की favoritism?',
    options: [
      { text: 'अपना work speak करने देता/देती हूं', type: 'A' },
      { text: 'frustrated होता/होती हूं लेकिन focus', type: 'B' },
      { text: 'बहुत affect होता है', type: 'C' },
      { text: 'politics में join', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'networking in office?',
    options: [
      { text: 'strategically करता/करती हूं', type: 'A' },
      { text: 'naturally होती है', type: 'B' },
      { text: 'uncomfortable है', type: 'C' },
      { text: 'नहीं करता/करती', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'office groups और cliques?',
    options: [
      { text: 'सबके साथ अच्छे relations', type: 'A' },
      { text: 'अपने group में', type: 'B' },
      { text: 'किसी group में नहीं', type: 'C' },
      { text: 'politics से दूर', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'promotion के लिए?',
    options: [
      { text: 'merit और visibility दोनों', type: 'A' },
      { text: 'just work hard', type: 'B' },
      { text: 'hope करता/करती हूं', type: 'C' },
      { text: 'politics खेलता/खेलती हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'office में difficult person?',
    options: [
      { text: 'professionally handle', type: 'A' },
      { text: 'avoid जितना हो सके', type: 'B' },
      { text: 'clash हो जाता है', type: 'C' },
      { text: 'complaint करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'information sharing?',
    options: [
      { text: 'strategic sharing', type: 'A' },
      { text: 'open, जो पूछे बता देता/देती हूं', type: 'B' },
      { text: 'अपने तक रखता/रखती हूं', type: 'C' },
      { text: 'पता नहीं क्या share करना है', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'office politics survival?',
    options: [
      { text: 'smart और balanced', type: 'A' },
      { text: 'work focus, politics ignore', type: 'B' },
      { text: 'struggle करता/करती हूं', type: 'C' },
      { text: 'victim feel होता है', type: 'D' },
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
    title: 'Political Pro',
    emoji: '🎯',
    description: 'आप office politics के expert हैं! Smart, strategic, balanced। Career growth on track!',
    traits: ['strategic', 'smart', 'aware', 'balanced', 'professional'],
    weaknesses: ['कभी-कभी calculating लग सकते हैं'],
    advice: 'excellent navigation! बस authentic रहें।',
  },
  B: {
    type: 'B',
    title: 'Work Focused',
    emoji: '💼',
    description: 'आप work पर focus करते हैं। Politics से दूर, merit पर भरोसा। Noble but risky!',
    traits: ['focused', 'hardworking', 'genuine', 'idealistic', 'professional'],
    weaknesses: ['overlooked हो सकते हैं', 'politics से unaware'],
    advice: 'work important है, लेकिन visibility भी। थोड़ा aware रहें।',
  },
  C: {
    type: 'C',
    title: 'Politics Struggler',
    emoji: '😰',
    description: 'Office politics आपके लिए मुश्किल है। Struggle है, stress है। Help needed!',
    traits: ['struggling', 'stressed', 'unaware', 'reactive', 'confused'],
    weaknesses: ['career affected', 'stress high', 'mistakes होती हैं'],
    advice: 'observe करें, mentor ढूंढें, politics समझें बिना dirty हुए।',
  },
  D: {
    type: 'D',
    title: 'Naive or Involved',
    emoji: '❓',
    description: 'आप या तो बहुत naive हैं या फिर politics में बहुत involved। Extreme position!',
    traits: ['extreme', 'unbalanced', 'either naive or involved'],
    weaknesses: ['career risk', 'reputation issues possible'],
    advice: 'balance ढूंढें। Professional रहें, aware रहें, clean रहें।',
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
