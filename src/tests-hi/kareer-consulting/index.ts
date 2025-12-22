// कंसल्टिंग करियर टेस्ट
// Consulting Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'Problem-solving approach?',
    options: [
      { text: 'Framework से structured approach', type: 'A' },
      { text: 'Logical step-by-step', type: 'B' },
      { text: 'Intuition से solve करता हूं', type: 'C' },
      { text: 'Help लेता हूं दूसरों से', type: 'D' },
    ],
  },
  {
    id: 2,
    question: 'Client handling?',
    options: [
      { text: 'Professional, confident communication', type: 'A' },
      { text: 'Polite और helpful', type: 'B' },
      { text: 'Nervous होता हूं थोड़ा', type: 'C' },
      { text: 'Avoid करता हूं direct interaction', type: 'D' },
    ],
  },
  {
    id: 3,
    question: 'Presentation skills?',
    options: [
      { text: 'Excellent, love presenting', type: 'A' },
      { text: 'Good, can manage', type: 'B' },
      { text: 'Average, needs practice', type: 'C' },
      { text: 'Nervous, avoid presentations', type: 'D' },
    ],
  },
  {
    id: 4,
    question: 'Long working hours?',
    options: [
      { text: 'No problem, used to it', type: 'A' },
      { text: 'Manage कर लूंगा', type: 'B' },
      { text: 'Challenging होगा', type: 'C' },
      { text: 'Work-life balance जरूरी', type: 'D' },
    ],
  },
  {
    id: 5,
    question: 'Travel for work?',
    options: [
      { text: 'Love traveling, excited', type: 'A' },
      { text: 'Okay with occasional travel', type: 'B' },
      { text: 'Prefer limited travel', type: 'C' },
      { text: 'घर के पास काम चाहिए', type: 'D' },
    ],
  },
  {
    id: 6,
    question: 'Excel और PowerPoint skills?',
    options: [
      { text: 'Expert level', type: 'A' },
      { text: 'Good, proficient', type: 'B' },
      { text: 'Basic knowledge', type: 'C' },
      { text: 'सीखना पड़ेगा', type: 'D' },
    ],
  },
  {
    id: 7,
    question: 'Ambiguity में काम करना?',
    options: [
      { text: 'Thrive in uncertainty', type: 'A' },
      { text: 'Manage कर लेता हूं', type: 'B' },
      { text: 'Clear instructions चाहिए', type: 'C' },
      { text: 'बहुत uncomfortable होता हूं', type: 'D' },
    ],
  },
  {
    id: 8,
    question: 'Quick learning ability?',
    options: [
      { text: 'Fast learner, adapt quickly', type: 'A' },
      { text: 'Good at learning new things', type: 'B' },
      { text: 'Need time to learn', type: 'C' },
      { text: 'Prefer familiar areas', type: 'D' },
    ],
  },
  {
    id: 9,
    question: 'Team dynamics?',
    options: [
      { text: 'Lead teams naturally', type: 'A' },
      { text: 'Good team player', type: 'B' },
      { text: 'Prefer solo work', type: 'C' },
      { text: 'Teamwork uncomfortable', type: 'D' },
    ],
  },
  {
    id: 10,
    question: 'Business acumen?',
    options: [
      { text: 'Strong business understanding', type: 'A' },
      { text: 'Developing business sense', type: 'B' },
      { text: 'Learning about business', type: 'C' },
      { text: 'Technical focus prefer', type: 'D' },
    ],
  },
  {
    id: 11,
    question: 'Pressure में perform करना?',
    options: [
      { text: 'Best performance under pressure', type: 'A' },
      { text: 'Handle कर लेता हूं', type: 'B' },
      { text: 'Stress होता है', type: 'C' },
      { text: 'Pressure से बचना चाहता हूं', type: 'D' },
    ],
  },
  {
    id: 12,
    question: 'Networking skills?',
    options: [
      { text: 'Natural networker', type: 'A' },
      { text: 'Can network when needed', type: 'B' },
      { text: 'Networking is hard', type: 'C' },
      { text: 'Avoid networking', type: 'D' },
    ],
  },
];

export const results = {
  A: {
    type: 'A',
    title: 'कंसल्टिंग स्टार',
    emoji: '🌟',
    description: 'Excellent! आप consulting के लिए perfect fit हैं। Problem-solving, communication, और drive सब strong है।',
    traits: ['analytical', 'confident', 'driven', 'adaptable'],
    strengths: ['Strong problem-solving', 'Excellent communication'],
    weaknesses: ['Work-life balance challenge', 'High pressure environment'],
    tips: ['Top consulting firms में apply करें। Case interview preparation शुरू करें।'],
  },
  B: {
    type: 'B',
    title: 'कंसल्टिंग संभावना',
    emoji: '💼',
    description: 'Consulting possible है आपके लिए। कुछ skills develop करें और ready होंगे।',
    traits: ['potential', 'developing', 'capable', 'learning'],
    strengths: ['Good foundation', 'Willingness to learn'],
    weaknesses: ['Need more experience', 'Skills to develop'],
    tips: ['Case study practice करें। Excel/PPT skills improve करें। Networking बढ़ाएं।'],
  },
  C: {
    type: 'C',
    title: 'तैयारी जरूरी',
    emoji: '📈',
    description: 'Consulting challenging होगी अभी। Significant preparation चाहिए।',
    traits: ['developing', 'needs-work', 'potential', 'growing'],
    strengths: ['Room for growth', 'Can improve'],
    weaknesses: ['Multiple skills gaps', 'Experience needed'],
    tips: ['Internships try करें। Communication और presentation skills build करें।'],
  },
  D: {
    type: 'D',
    title: 'अन्य करियर बेहतर',
    emoji: '🎯',
    description: 'Consulting शायद आपके लिए best fit नहीं है। Other careers explore करें।',
    traits: ['different-path', 'alternative-focused', 'self-aware', 'practical'],
    strengths: ['Self-awareness', 'Know your preferences'],
    weaknesses: ['Consulting mismatch', 'Different interests'],
    tips: ['अपनी strengths के according career choose करें। Work-life balance important है।'],
  },
};

export function calculateResult(answers: number[]): typeof results.A {
  const typeCount: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeCount[type] = (typeCount[type] || 0) + 1;
    }
  });
  const dominantType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0][0];
  return results[dominantType as keyof typeof results];
}
