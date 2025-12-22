// काम का तरीका (Work Style)
export const questions = [
  {
    id: 1,
    text: 'ऑफिस में आप कैसे काम करते हैं?',
    options: [
      { text: 'प्लान बनाकर, organized तरीके से', type: 'A' },
      { text: 'टीम के साथ मिलकर', type: 'B' },
      { text: 'अकेले, अपनी पेस में', type: 'C' },
      { text: 'मल्टीटास्किंग, कई काम एक साथ', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'डेडलाइन के बारे में क्या सोचते हैं?',
    options: [
      { text: 'हमेशा समय से पहले पूरा करता/करती हूं', type: 'A' },
      { text: 'टीम के साथ मिलकर पूरा करता/करती हूं', type: 'B' },
      { text: 'अपनी पेस में काम करता/करती हूं', type: 'C' },
      { text: 'आखिरी वक्त में बेस्ट काम होता है', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'बॉस से feedback मिलने पर क्या करते हैं?',
    options: [
      { text: 'नोट करता/करती हूं और improve करता/करती हूं', type: 'A' },
      { text: 'टीम के साथ discuss करता/करती हूं', type: 'B' },
      { text: 'अपने तरीके से सोचता/सोचती हूं', type: 'C' },
      { text: 'जल्दी से implement करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'नई responsibility मिलने पर कैसा लगता है?',
    options: [
      { text: 'अच्छा, properly plan करता/करती हूं', type: 'A' },
      { text: 'excited, टीम के साथ करूंगा/करूंगी', type: 'B' },
      { text: 'थोड़ा nervous, लेकिन handle कर लूंगा/लूंगी', type: 'C' },
      { text: 'challenge अच्छा लगता है', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'ऑफिस politics के बारे में क्या सोचते हैं?',
    options: [
      { text: 'दूर रहता/रहती हूं, काम पर फोकस', type: 'A' },
      { text: 'सबसे अच्छे रिश्ते रखता/रखती हूं', type: 'B' },
      { text: 'ignore करता/करती हूं', type: 'C' },
      { text: 'smart तरीके से navigate करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'meeting में आप कैसे participate करते हैं?',
    options: [
      { text: 'prepared होकर आता/आती हूं, points रखता/रखती हूं', type: 'A' },
      { text: 'active discussion करता/करती हूं', type: 'B' },
      { text: 'सुनता/सुनती हूं, जरूरत पर बोलता/बोलती हूं', type: 'C' },
      { text: 'quick decisions लेता/लेती हूं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'काम में गलती होने पर क्या करते हैं?',
    options: [
      { text: 'analyze करता/करती हूं कि क्या गलत हुआ', type: 'A' },
      { text: 'टीम से मदद लेता/लेती हूं', type: 'B' },
      { text: 'खुद ठीक करने की कोशिश', type: 'C' },
      { text: 'जल्दी fix करता/करती हूं और आगे बढ़ता/बढ़ती हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'ideal work environment कैसा होना चाहिए?',
    options: [
      { text: 'structured और organized', type: 'A' },
      { text: 'collaborative और friendly', type: 'B' },
      { text: 'quiet और focused', type: 'C' },
      { text: 'dynamic और fast-paced', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'career growth के लिए क्या जरूरी है?',
    options: [
      { text: 'consistent performance', type: 'A' },
      { text: 'networking और relationships', type: 'B' },
      { text: 'expertise और skills', type: 'C' },
      { text: 'opportunities grab करना', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'work-life balance कैसे maintain करते हैं?',
    options: [
      { text: 'proper schedule follow करता/करती हूं', type: 'A' },
      { text: 'colleagues से बातचीत से relax होता/होती हूं', type: 'B' },
      { text: 'अपना personal time जरूर निकालता/निकालती हूं', type: 'C' },
      { text: 'जब काम है तब काम, बाद में आराम', type: 'D' },
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
    title: 'The Planner',
    emoji: '📋',
    description: 'आप organized और systematic worker हैं। हर काम plan करके करते हैं और deadlines से पहले पूरा करते हैं। आपकी consistency आपकी ताकत है।',
    traits: ['Organized', 'Reliable', 'Detail-oriented', 'Disciplined'],
    weaknesses: ['कभी-कभी over-plan कर देते हैं', 'flexibility में कमी'],
    advice: 'थोड़ा spontaneous होने की कोशिश करें, हर चीज plan के मुताबिक नहीं होती।',
  },
  B: {
    type: 'B',
    title: 'Team Player',
    emoji: '🤝',
    description: 'आप team के साथ सबसे बेहतर काम करते हैं। Collaboration आपकी ताकत है और आप office में सबके साथ अच्छे relations रखते हैं।',
    traits: ['Collaborative', 'Communicative', 'Supportive', 'Social'],
    weaknesses: ['अकेले काम करने में difficulty', 'दूसरों पर dependent'],
    advice: 'Independent work skills भी develop करें, हर जगह team नहीं होती।',
  },
  C: {
    type: 'C',
    title: 'The Expert',
    emoji: '🎯',
    description: 'आप deep work में expert हैं। अपने field में mastery आपका goal है और आप quality पर focus करते हैं। आपका काम खुद बोलता है।',
    traits: ['Focused', 'Expert', 'Quality-conscious', 'Independent'],
    weaknesses: ['team work में uncomfortable', 'communication कम'],
    advice: 'networking भी जरूरी है, skills के साथ relationships भी बनाएं।',
  },
  D: {
    type: 'D',
    title: 'The Hustler',
    emoji: '⚡',
    description: 'आप fast और dynamic worker हैं। Multiple tasks handle करना, quick decisions लेना - यही आपका स्टाइल है। Pressure में best perform करते हैं।',
    traits: ['Fast', 'Adaptable', 'Multi-tasker', 'Ambitious'],
    weaknesses: ['जल्दबाजी में गलतियां', 'burnout का risk'],
    advice: 'कभी-कभी slow down करें, quality भी जरूरी है speed के साथ।',
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
