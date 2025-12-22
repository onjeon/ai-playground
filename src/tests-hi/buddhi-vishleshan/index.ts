// विश्लेषण क्षमता टेस्ट - Analytical Ability Test
// 분석력 테스트

export const questions = [
  {
    id: 1,
    text: 'किसी समस्या का सामना होने पर आप सबसे पहले क्या करते हैं?',
    options: [
      { text: 'समस्या को छोटे हिस्सों में बांटता हूँ', type: 'A' },
      { text: 'पूरी situation समझने की कोशिश करता हूँ', type: 'B' },
      { text: 'दूसरों से सलाह लेता हूँ', type: 'C' },
      { text: 'जो मन में आए वो करता हूँ', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Data या information देखते समय आप?',
    options: [
      { text: 'Patterns और trends ढूंढता हूँ', type: 'A' },
      { text: 'Main points note करता हूँ', type: 'B' },
      { text: 'Overall picture देखता हूँ', type: 'C' },
      { text: 'ज्यादा analysis नहीं करता', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'निर्णय लेने से पहले आप?',
    options: [
      { text: 'सभी options का comparison करता हूँ', type: 'A' },
      { text: 'Pros और cons सोचता हूँ', type: 'B' },
      { text: 'Gut feeling पर भरोसा करता हूँ', type: 'C' },
      { text: 'जल्दी decide कर लेता हूँ', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'जब कोई argument हो तो?',
    options: [
      { text: 'दोनों sides के points analyze करता हूँ', type: 'A' },
      { text: 'Facts check करता हूँ', type: 'B' },
      { text: 'जो सही लगे उसका support करता हूँ', type: 'C' },
      { text: 'बहस से बचता हूँ', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Complex instructions समझने में?',
    options: [
      { text: 'Step by step break down करता हूँ', type: 'A' },
      { text: 'कुछ बार पढ़कर समझ आ जाता है', type: 'B' },
      { text: 'थोड़ी मुश्किल होती है', type: 'C' },
      { text: 'किसी से पूछना पड़ता है', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'News या article पढ़ते समय?',
    options: [
      { text: 'Source और facts verify करता हूँ', type: 'A' },
      { text: 'Main points समझता हूँ', type: 'B' },
      { text: 'Headlines ही पढ़ता हूँ', type: 'C' },
      { text: 'जो लिखा है मान लेता हूँ', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'जब कोई plan बनाना हो?',
    options: [
      { text: 'सभी possibilities analyze करता हूँ', type: 'A' },
      { text: 'Basic framework बनाता हूँ', type: 'B' },
      { text: 'दूसरों के ideas लेता हूँ', type: 'C' },
      { text: 'बिना plan चलता हूँ', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Spreadsheet या data tables के साथ काम करने में?',
    options: [
      { text: 'Expert हूँ, formulas बना सकता हूँ', type: 'A' },
      { text: 'Basic काम कर सकता हूँ', type: 'B' },
      { text: 'थोड़ा मुश्किल लगता है', type: 'C' },
      { text: 'पसंद नहीं है', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'जब कुछ गलत हो जाए तो?',
    options: [
      { text: 'Root cause find करता हूँ', type: 'A' },
      { text: 'क्या गलत हुआ सोचता हूँ', type: 'B' },
      { text: 'Fix करने की कोशिश करता हूँ', type: 'C' },
      { text: 'आगे बढ़ जाता हूँ', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'नई technology या concept सीखते समय?',
    options: [
      { text: 'पूरी detail में समझता हूँ', type: 'A' },
      { text: 'जितना जरूरी है उतना सीखता हूँ', type: 'B' },
      { text: 'Basic use करना सीख लेता हूँ', type: 'C' },
      { text: 'दूसरों पर depend करता हूँ', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Budget planning में?',
    options: [
      { text: 'Detailed breakdown करता हूँ', type: 'A' },
      { text: 'Main categories बनाता हूँ', type: 'B' },
      { text: 'Approximate estimate रखता हूँ', type: 'C' },
      { text: 'जब जरूरत हो तब देखता हूँ', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'जब कोई recommendation दे तो?',
    options: [
      { text: 'खुद research करके verify करता हूँ', type: 'A' },
      { text: 'Reviews check करता हूँ', type: 'B' },
      { text: 'Trust कर लेता हूँ', type: 'C' },
      { text: 'जो मन करे वो करता हूँ', type: 'D' },
    ],
  },
  {
    id: 13,
    text: 'Report या presentation बनाते समय?',
    options: [
      { text: 'Data और analysis पर focus करता हूँ', type: 'A' },
      { text: 'Main points highlight करता हूँ', type: 'B' },
      { text: 'Visuals पर ज्यादा ध्यान देता हूँ', type: 'C' },
      { text: 'जल्दी से बना लेता हूँ', type: 'D' },
    ],
  },
  {
    id: 14,
    text: 'Risk evaluate करने में?',
    options: [
      { text: 'सभी scenarios analyze करता हूँ', type: 'A' },
      { text: 'Major risks सोचता हूँ', type: 'B' },
      { text: 'Risk लेने को तैयार रहता हूँ', type: 'C' },
      { text: 'ज्यादा नहीं सोचता', type: 'D' },
    ],
  },
  {
    id: 15,
    text: 'Scientific या logical puzzles में?',
    options: [
      { text: 'बहुत मजा आता है, solve कर लेता हूँ', type: 'A' },
      { text: 'Try करता हूँ, कभी-कभी solve होता है', type: 'B' },
      { text: 'थोड़ा मुश्किल लगता है', type: 'C' },
      { text: 'पसंद नहीं है', type: 'D' },
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
    title: 'विश्लेषण विशेषज्ञ',
    emoji: '🔬',
    description: 'आपकी विश्लेषण क्षमता उत्कृष्ट है! आप data और information को गहराई से समझ सकते हैं और सही निष्कर्ष निकाल सकते हैं।',
    traits: ['गहन विश्लेषक', 'detail-oriented', 'logical', 'systematic'],
    strengths: ['complex problems solve करना', 'data interpretation', 'critical thinking'],
    weaknesses: ['over-analysis का risk'],
    tips: ['अपनी skills को data science या research में use करें'],
  },
  B: {
    type: 'B',
    title: 'अच्छा विश्लेषक',
    emoji: '📊',
    description: 'आपकी विश्लेषण क्षमता अच्छी है। आप situations को समझ सकते हैं और practical decisions ले सकते हैं।',
    traits: ['practical analyzer', 'balanced approach', 'good judgment'],
    strengths: ['important details catch करना', 'reasonable conclusions'],
    weaknesses: ['कभी-कभी deep analysis miss'],
    tips: ['analytical tools सीखें, जैसे Excel या data visualization'],
  },
  C: {
    type: 'C',
    title: 'सहज विश्लेषक',
    emoji: '💡',
    description: 'आप intuition पर ज्यादा depend करते हैं। Analysis skills develop करने से आप और effective हो सकते हैं।',
    traits: ['intuitive', 'quick thinker', 'practical'],
    strengths: ['fast decisions', 'gut feeling'],
    weaknesses: ['detailed analysis में कठिनाई'],
    tips: ['problems को लिखकर analyze करने की habit बनाएं'],
  },
  D: {
    type: 'D',
    title: 'Action-Oriented',
    emoji: '🚀',
    description: 'आप analysis से ज्यादा action पर focus करते हैं। कभी-कभी रुककर सोचना helpful हो सकता है।',
    traits: ['action-oriented', 'spontaneous', 'quick mover'],
    strengths: ['तुरंत action लेना', 'overthinking नहीं'],
    weaknesses: ['जल्दबाजी में गलतियां हो सकती हैं'],
    tips: ['important decisions से पहले 5 minute सोचने की habit बनाएं'],
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
