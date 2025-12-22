// बॉलीवुड व्यक्तित्व (Bollywood Personality)
export const questions = [
  {
    id: 1,
    text: 'पसंदीदा तरह की फिल्में?',
    options: [
      { text: 'रोमांटिक और emotional', type: 'A' },
      { text: 'action और thriller', type: 'B' },
      { text: 'comedy और light-hearted', type: 'C' },
      { text: 'meaningful और thought-provoking', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'फिल्म देखते समय आप?',
    options: [
      { text: 'emotional scenes में रो देता/देती हूं', type: 'A' },
      { text: 'action में involved हो जाता/जाती हूं', type: 'B' },
      { text: 'हंसता/हंसती हूं खूब', type: 'C' },
      { text: 'analyze करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Bollywood songs के बारे में?',
    options: [
      { text: 'romantic songs best', type: 'A' },
      { text: 'peppy और dance numbers', type: 'B' },
      { text: 'funny और quirky songs', type: 'C' },
      { text: 'meaningful lyrics वाले', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'शादी में dance करने का style?',
    options: [
      { text: 'romantic couple dance', type: 'A' },
      { text: 'energetic और show-off', type: 'B' },
      { text: 'funny moves, sab हंसाता/हंसाती हूं', type: 'C' },
      { text: 'observe करता/करती हूं ज्यादा', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'अगर Bollywood movie में होते तो कौन सा role?',
    options: [
      { text: 'romantic lead', type: 'A' },
      { text: 'action hero/heroine', type: 'B' },
      { text: 'comic relief', type: 'C' },
      { text: 'villain या grey shade', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'dialogues याद करना?',
    options: [
      { text: '"प्यार दोस्ती है..." type', type: 'A' },
      { text: '"Don ko pakadna mushkil..." type', type: 'B' },
      { text: '"All is well" type', type: 'C' },
      { text: 'Deep और meaningful', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'celebrity crush?',
    options: [
      { text: 'SRK/Deepika type - romantic', type: 'A' },
      { text: 'Hrithik/Priyanka type - stylish', type: 'B' },
      { text: 'Ranveer/Alia type - fun', type: 'C' },
      { text: 'Aamir/Vidya type - talented', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'movie देखने prefer करते हैं?',
    options: [
      { text: 'partner के साथ', type: 'A' },
      { text: 'friends के साथ', type: 'B' },
      { text: 'family के साथ', type: 'C' },
      { text: 'alone, peace में', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Bollywood का impact life पर?',
    options: [
      { text: 'romance की expectations बढ़ी', type: 'A' },
      { text: 'entertainment और style', type: 'B' },
      { text: 'humor और attitude', type: 'C' },
      { text: 'life lessons और inspiration', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Dream Bollywood scenario?',
    options: [
      { text: 'बारिश में dance, romantic scene', type: 'A' },
      { text: 'action sequence, saving everyone', type: 'B' },
      { text: 'comedy scene, everyone laughing', type: 'C' },
      { text: 'powerful monologue, impactful', type: 'D' },
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
    title: 'रोमांटिक दिलवाला/दिलवाली',
    emoji: '💕',
    description: 'आप Raj और Simran के बच्चे हैं! Romance, emotions, love stories - यही आपकी दुनिया है। DDLJ आपकी bible है!',
    traits: ['romantic', 'emotional', 'dreamy', 'loving', 'expressive'],
    weaknesses: ['unrealistic expectations', 'filmy expectations से real life में disappointment'],
    advice: 'romance अच्छी है, लेकिन real relationships different होते हैं films से!',
  },
  B: {
    type: 'B',
    title: 'Action Star',
    emoji: '💪',
    description: 'आप Bollywood के action hero/heroine हैं! Style, swag, energy - सब कुछ larger than life! Tiger Shroff vibes!',
    traits: ['energetic', 'stylish', 'confident', 'bold', 'impressive'],
    weaknesses: ['show-off tendency', 'over the top कभी-कभी'],
    advice: 'energy अच्छी है, लेकिन grounded भी रहें!',
  },
  C: {
    type: 'C',
    title: 'Comedy King/Queen',
    emoji: '😂',
    description: 'आप circuit और Baburao के spiritual successor हैं! Humor, fun और laughter - आप जहां जाते हैं, खुशियां वहां जाती हैं!',
    traits: ['funny', 'witty', 'light-hearted', 'entertaining', 'popular'],
    weaknesses: ['serious situations में भी joking', 'depth की कमी'],
    advice: 'humor weapon है, लेकिन कभी-कभी serious भी होना जरूरी है!',
  },
  D: {
    type: 'D',
    title: 'Thoughtful Viewer',
    emoji: '🎬',
    description: 'आप meaningful cinema appreciate करते हैं। Content matters, not just entertainment। Aamir Khan school of thought!',
    traits: ['intellectual', 'analytical', 'thoughtful', 'selective', 'deep'],
    weaknesses: ['too critical कभी-कभी', 'fun miss कर देते हैं'],
    advice: 'depth अच्छी है, लेकिन कभी-कभी just enjoy भी करें!',
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
