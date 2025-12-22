// फोन व्यक्तित्व (Phone Personality)
export const questions = [
  {
    id: 1,
    text: 'सुबह उठते ही?',
    options: [
      { text: 'phone check नहीं करता/करती', type: 'A' },
      { text: 'थोड़ी देर बाद देखता/देखती हूं', type: 'B' },
      { text: 'तुरंत check', type: 'C' },
      { text: 'alarm off करके scroll शुरू', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'screen time daily?',
    options: [
      { text: '2 घंटे से कम', type: 'A' },
      { text: '2-4 घंटे', type: 'B' },
      { text: '4-6 घंटे', type: 'C' },
      { text: '6+ घंटे', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'notifications के बारे में?',
    options: [
      { text: 'most off रखता/रखती हूं', type: 'A' },
      { text: 'important only', type: 'B' },
      { text: 'सब on हैं', type: 'C' },
      { text: 'हर notification check', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'बिना phone के एक दिन?',
    options: [
      { text: 'no problem', type: 'A' },
      { text: 'manage हो जाएगा', type: 'B' },
      { text: 'थोड़ा मुश्किल', type: 'C' },
      { text: 'impossible!', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'खाना खाते समय?',
    options: [
      { text: 'phone दूर रखता/रखती हूं', type: 'A' },
      { text: 'साथ रखता/रखती हूं, use कम', type: 'B' },
      { text: 'देखता/देखती हूं', type: 'C' },
      { text: 'video चलता रहता है', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'रात को सोने से पहले?',
    options: [
      { text: 'phone side में 1 घंटा पहले', type: 'A' },
      { text: 'थोड़ा देख लेता/लेती हूं', type: 'B' },
      { text: 'scroll करते सोता/सोती हूं', type: 'C' },
      { text: 'phone हाथ में ही सो जाता/जाती हूं', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'meeting/family time में?',
    options: [
      { text: 'phone silent/away', type: 'A' },
      { text: 'urgent check कर लेता/लेती हूं', type: 'B' },
      { text: 'साथ में check करता/करती हूं', type: 'C' },
      { text: 'full time phone पर', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'phone battery की चिंता?',
    options: [
      { text: 'नहीं, charger साथ नहीं रखता/रखती', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'हमेशा charger साथ', type: 'C' },
      { text: 'anxiety होती है low battery पर', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'phone upgrade?',
    options: [
      { text: 'जब जरूरत हो', type: 'A' },
      { text: '2-3 साल में', type: 'B' },
      { text: 'नया model आए तो', type: 'C' },
      { text: 'latest चाहिए always', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'phone का role life में?',
    options: [
      { text: 'tool है, use करता/करती हूं', type: 'A' },
      { text: 'important है', type: 'B' },
      { text: 'बहुत important', type: 'C' },
      { text: 'life का हिस्सा', type: 'D' },
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
    title: 'Digital Detoxer',
    emoji: '🌱',
    description: 'आप phone से healthy distance रखते हैं। Real life first, phone secondary। Rare species!',
    traits: ['balanced', 'present', 'mindful', 'in-control', 'healthy'],
    weaknesses: ['कभी-कभी out of touch', 'miss updates'],
    advice: 'excellent approach! Inspire others to do the same।',
  },
  B: {
    type: 'B',
    title: 'Balanced User',
    emoji: '📱',
    description: 'आप phone को smartly use करते हैं। जरूरत के लिए, addiction नहीं। Good balance!',
    traits: ['balanced', 'smart', 'controlled', 'aware', 'moderate'],
    weaknesses: ['कभी-कभी over-use'],
    advice: 'good job! बस awareness बनाए रखें।',
  },
  C: {
    type: 'C',
    title: 'Phone Dependent',
    emoji: '🔔',
    description: 'Phone आपके साथ हमेशा है। थोड़ा ज्यादा use, notifications का wait। Dependency developing!',
    traits: ['connected', 'informed', 'social', 'dependent', 'habitual'],
    weaknesses: ['real life से disconnect', 'productivity down', 'attention span कम'],
    advice: 'screen time reduce करें। Digital wellbeing apps use करें।',
  },
  D: {
    type: 'D',
    title: 'Phone Addict',
    emoji: '📵',
    description: 'Phone आपकी life है। बिना phone anxiety, constant checking। Addiction level!',
    traits: ['addicted', 'anxious without phone', 'always connected', 'dependent'],
    weaknesses: ['mental health impact', 'real relationships suffer', 'productivity affected', 'sleep issues'],
    advice: 'SERIOUSLY! Digital detox जरूरी है। Professional help भी consider करें।',
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
