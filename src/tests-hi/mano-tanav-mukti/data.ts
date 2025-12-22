export const questions = [
  {
    id: 1,
    text: 'Stress relief के लिए क्या करते हैं?',
    options: [
      { text: 'Healthy activities - exercise, meditation', type: 'A' },
      { text: 'कुछ healthy तरीके', type: 'B' },
      { text: 'ज्यादातर unhealthy - eating, screen', type: 'C' },
      { text: 'कुछ नहीं करता', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Relaxation techniques जानते हैं?',
    options: [
      { text: 'हां, regularly use करता हूं', type: 'A' },
      { text: 'जानता हूं, कभी-कभी use', type: 'B' },
      { text: 'जानता हूं लेकिन use नहीं', type: 'C' },
      { text: 'नहीं जानता', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Stress को कितना recognize कर पाते हैं?',
    options: [
      { text: 'तुरंत पहचान लेता हूं', type: 'A' },
      { text: 'ज्यादातर', type: 'B' },
      { text: 'Late recognize करता हूं', type: 'C' },
      { text: 'पता नहीं चलता', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Work-life boundaries कैसी हैं?',
    options: [
      { text: 'Clear और maintained', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'Blurred', type: 'C' },
      { text: 'कोई boundaries नहीं', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Self-care के लिए time कितना देते हैं?',
    options: [
      { text: 'Daily, priority है', type: 'A' },
      { text: 'Regular', type: 'B' },
      { text: 'कभी-कभी', type: 'C' },
      { text: 'नहीं देता', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'कहने में \"ना\" बोल पाते हैं?',
    options: [
      { text: 'हां, जब जरूरी हो', type: 'A' },
      { text: 'ज्यादातर', type: 'B' },
      { text: 'मुश्किल है', type: 'C' },
      { text: 'नहीं बोल पाता', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Physical activity/exercise कितनी है?',
    options: [
      { text: 'Regular, weekly 3-4 times', type: 'A' },
      { text: 'कुछ है', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'कोई नहीं', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Support system कैसा है stress के लिए?',
    options: [
      { text: 'Strong, people हैं बात करने को', type: 'A' },
      { text: 'कुछ लोग हैं', type: 'B' },
      { text: 'कम', type: 'C' },
      { text: 'कोई नहीं', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Nature/outdoor time कितना है?',
    options: [
      { text: 'Regular, love it', type: 'A' },
      { text: 'कभी-कभी', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'कभी नहीं', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Hobbies और fun activities कितनी हैं?',
    options: [
      { text: 'Active hobbies, enjoy करता हूं', type: 'A' },
      { text: 'कुछ हैं', type: 'B' },
      { text: 'बहुत कम', type: 'C' },
      { text: 'कोई नहीं', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Sleep और rest को priority देते हैं?',
    options: [
      { text: 'हां, बहुत important', type: 'A' },
      { text: 'Try करता हूं', type: 'B' },
      { text: 'Often sacrifice', type: 'C' },
      { text: 'नहीं देता', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Overall stress management कैसी है?',
    options: [
      { text: 'बहुत अच्छी', type: 'A' },
      { text: 'अच्छी', type: 'B' },
      { text: 'Poor', type: 'C' },
      { text: 'बहुत खराब', type: 'D' },
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
    title: 'उत्कृष्ट तनाव प्रबंधन',
    emoji: '🧘',
    description: 'Stress management excellent है। Healthy coping mechanisms और good self-care है।',
    traits: ['balanced', 'healthy coping', 'self-aware', 'resilient'],
    weaknesses: ['continue करना जरूरी'],
    advice: 'Great! इसे maintain करें। दूसरों को भी सिखाएं।',
  },
  B: {
    type: 'B',
    title: 'अच्छा तनाव प्रबंधन',
    emoji: '😌',
    description: 'Stress management अच्छा है। कुछ areas और better हो सकते हैं।',
    traits: ['managing', 'trying', 'aware'],
    weaknesses: ['consistency improve हो सकती है'],
    advice: 'Healthy habits और consistent बनाएं। Self-care daily करें।',
  },
  C: {
    type: 'C',
    title: 'कमजोर तनाव प्रबंधन',
    emoji: '😰',
    description: 'Stress management में struggle है। Burnout risk है।',
    traits: ['stressed', 'poor coping', 'overwhelmed'],
    weaknesses: ['burnout risk', 'health effects', 'unhappy'],
    advice: 'Seriously improve करें। Professional help लें। Start small लेकिन start करें।',
  },
  D: {
    type: 'D',
    title: 'बहुत कमजोर तनाव प्रबंधन',
    emoji: '🔥',
    description: 'Stress management नहीं है। Burnout या breakdown risk है।',
    traits: ['burnt out', 'no coping', 'suffering'],
    weaknesses: ['serious health risk', 'breakdown possible'],
    advice: 'Urgent help लें। Doctor और therapist से मिलें। यह serious है।',
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
