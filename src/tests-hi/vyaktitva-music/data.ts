// संगीत व्यक्तित्व (Music Personality)
export const questions = [
  {
    id: 1,
    text: 'पसंदीदा music genre?',
    options: [
      { text: 'Bollywood classics और old songs', type: 'A' },
      { text: 'Latest Bollywood hits', type: 'B' },
      { text: 'Indie, rock, English', type: 'C' },
      { text: 'Devotional और spiritual', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'music सुनने का time?',
    options: [
      { text: 'सुबह शांत music से', type: 'A' },
      { text: 'gym/workout में', type: 'B' },
      { text: 'हमेशा headphones लगे रहते हैं', type: 'C' },
      { text: 'पूजा या meditation में', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'गाना सुनते समय?',
    options: [
      { text: 'lyrics पर ध्यान देता/देती हूं', type: 'A' },
      { text: 'dance करने लगता/लगती हूं', type: 'B' },
      { text: 'music और beats feel करता/करती हूं', type: 'C' },
      { text: 'शांति से सुनता/सुनती हूं', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'karaoke में?',
    options: [
      { text: 'classic songs गाता/गाती हूं', type: 'A' },
      { text: 'party songs, sab dance करें', type: 'B' },
      { text: 'English या unique songs', type: 'C' },
      { text: 'नहीं गाता/गाती', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'sad होने पर?',
    options: [
      { text: 'sad songs सुनता/सुनती हूं', type: 'A' },
      { text: 'upbeat music से mood change', type: 'B' },
      { text: 'intense music', type: 'C' },
      { text: 'silence prefer करता/करती हूं', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'concert जाने के बारे में?',
    options: [
      { text: 'legends के concert देखना है', type: 'A' },
      { text: 'हर बड़े concert में होता/होती हूं', type: 'B' },
      { text: 'indie gigs और small concerts', type: 'C' },
      { text: 'नहीं जाता/जाती', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'instrument बजाना?',
    options: [
      { text: 'harmonium या classical', type: 'A' },
      { text: 'नहीं, लेकिन सीखना है', type: 'B' },
      { text: 'guitar या modern instrument', type: 'C' },
      { text: 'no interest', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'playlist कैसी है?',
    options: [
      { text: 'organized by mood और era', type: 'A' },
      { text: 'trending और party songs', type: 'B' },
      { text: 'eclectic mix, unique', type: 'C' },
      { text: 'small, specific purpose', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'music का impact life पर?',
    options: [
      { text: 'emotional connection और memories', type: 'A' },
      { text: 'energy और motivation', type: 'B' },
      { text: 'identity और expression', type: 'C' },
      { text: 'peace और calm', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'music discovery कैसे?',
    options: [
      { text: 'पुराने songs explore', type: 'A' },
      { text: 'charts और trending', type: 'B' },
      { text: 'friends से, indie discoveries', type: 'C' },
      { text: 'specific need के लिए search', type: 'D' },
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
    title: 'Melody Lover',
    emoji: '🎵',
    description: 'आप classic music lover हैं! Lyrics, melody, emotions - सब feel करते हैं। Kishore Kumar और Lata ji के fan!',
    traits: ['emotional', 'nostalgic', 'lyric-focused', 'deep', 'appreciative'],
    weaknesses: ['new music से disconnect', 'stuck in past'],
    advice: 'classics great हैं, लेकिन new music भी explore करें!',
  },
  B: {
    type: 'B',
    title: 'Party Animal',
    emoji: '🎉',
    description: 'आप trending music के साथ चलते हैं! Party songs, dance numbers - सब याद हैं। DJ आप हैं friend group के!',
    traits: ['trendy', 'social', 'energetic', 'fun-loving', 'upbeat'],
    weaknesses: ['depth कम', 'fast trends change'],
    advice: 'party music fun है, लेकिन कभी meaningful music भी try करें!',
  },
  C: {
    type: 'C',
    title: 'Music Connoisseur',
    emoji: '🎸',
    description: 'आप unique music taste रखते हैं! Indie, rock, international - mainstream से परे। Music आपकी identity है!',
    traits: ['unique', 'exploratory', 'indie-lover', 'expressive', 'artistic'],
    weaknesses: ['snobbish कभी-कभी', 'relate करना मुश्किल'],
    advice: 'unique taste great है! Share करें दूसरों के साथ।',
  },
  D: {
    type: 'D',
    title: 'Spiritual Soul',
    emoji: '🕉️',
    description: 'Music आपके लिए meditation है। Bhajans, mantras, peaceful music - inner peace के लिए।',
    traits: ['peaceful', 'spiritual', 'calm', 'focused', 'grounded'],
    weaknesses: ['limited variety', 'social music से दूर'],
    advice: 'spiritual music beautiful है, लेकिन variety भी explore करें!',
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
