// Tipe Interview Kamu
// Tes ini mengungkap style kamu saat interview kerja!

export const questions = [
  {
    id: 1,
    question: "Sebelum interview, preparation kamu...",
    options: [
      { text: "Research company, prepare answers, mock interview", type: "A" },
      { text: "Review job desc dan company basics", type: "B" },
      { text: "Read some reviews, mentally prepare", type: "C" },
      { text: "Go with natural response, be authentic", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Outfit untuk interview...",
    options: [
      { text: "Formal dan polished, first impression counts", type: "A" },
      { text: "Smart casual sesuai company culture", type: "B" },
      { text: "Comfortable tapi presentable", type: "C" },
      { text: "Express my personality", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat ditanya 'Tell me about yourself'...",
    options: [
      { text: "Structured answer: background, skills, why here", type: "A" },
      { text: "Highlight relevant experience", type: "B" },
      { text: "Personal story yang authentic", type: "C" },
      { text: "Conversational, see where it goes", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Handling tricky/unexpected questions...",
    options: [
      { text: "Stay calm, structured response", type: "A" },
      { text: "Take moment to think, answer carefully", type: "B" },
      { text: "Be honest kalau ga tau", type: "C" },
      { text: "Turn it into conversation", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Body language saat interview...",
    options: [
      { text: "Confident posture, strong eye contact", type: "A" },
      { text: "Professional dan composed", type: "B" },
      { text: "Natural dan relaxed", type: "C" },
      { text: "Expressive dan animated", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat interviewer looks unimpressed...",
    options: [
      { text: "Double down, sell harder", type: "A" },
      { text: "Adjust approach, stay professional", type: "B" },
      { text: "Stay authentic, maybe not the fit", type: "C" },
      { text: "Lighten the mood if appropriate", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Salary expectation question...",
    options: [
      { text: "Research-based range dengan confidence", type: "A" },
      { text: "Ask their range first", type: "B" },
      { text: "Flexible, depends on overall package", type: "C" },
      { text: "Honest about my number", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Questions untuk interviewer...",
    options: [
      { text: "Strategic questions about growth, metrics", type: "A" },
      { text: "Practical questions about role", type: "B" },
      { text: "Culture dan team questions", type: "C" },
      { text: "Whatever comes to mind naturally", type: "D" },
    ],
  },
  {
    id: 9,
    question: "After interview, follow up...",
    options: [
      { text: "Thank you email same day", type: "A" },
      { text: "Brief thank you within 24 hours", type: "B" },
      { text: "Depends on vibe dari interview", type: "C" },
      { text: "Wait for them to reach out", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau ditanya weakness...",
    options: [
      { text: "Prepared answer dengan how I'm improving", type: "A" },
      { text: "Honest weakness yang ga critical", type: "B" },
      { text: "Genuinely share dan reflect", type: "C" },
      { text: "Turn it into a positive spin", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Multiple rounds interview...",
    options: [
      { text: "Prepared differently untuk each stage", type: "A" },
      { text: "Consistent approach, adjust as needed", type: "B" },
      { text: "Getting tired tapi push through", type: "C" },
      { text: "Same me throughout", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Post-interview reflection...",
    options: [
      { text: "Analyze what went well, areas to improve", type: "A" },
      { text: "Think about fit dan interest level", type: "B" },
      { text: "Trust my gut feeling", type: "C" },
      { text: "What happens, happens", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Strategic Interviewee",
    emoji: "🎯",
    description: "Kamu adalah interview pro! Prepared, strategic, dan know how to sell yourself. You treat interviews seperti business pitch dan usually nail them.",
    traits: ["Prepared", "Strategic", "Confident", "Polished"],
    strengths: ["High success rate", "Strong first impression", "Handle tough questions"],
    weaknesses: ["May seem scripted", "Less authentic", "Over-prepared"],
    tips: ["Balance prep dengan authenticity", "Let real you shine through", "Genuine connection matters too"],
  },
  B: {
    type: "B",
    title: "The Balanced Interviewee",
    emoji: "⚖️",
    description: "Kamu punya good balance di interview! Prepared enough tapi ga over-scripted. Professional yet personable. You adapt well ke different interview styles.",
    traits: ["Balanced", "Adaptable", "Professional", "Sensible"],
    strengths: ["Versatile", "Good judgment", "Realistic expectations"],
    weaknesses: ["May not stand out", "Middle of the road"],
    tips: ["Add memorable elements", "Show more personality", "Differentiate yourself"],
  },
  C: {
    type: "C",
    title: "The Authentic Interviewee",
    emoji: "💝",
    description: "Kamu interview dengan heart! Authentic, genuine, dan what you see is what you get. People who appreciate authenticity will love you. The right fit akan obvious.",
    traits: ["Authentic", "Honest", "Genuine", "Vulnerable"],
    strengths: ["Attract right companies", "No pretense", "Honest connections"],
    weaknesses: ["May seem underprepared", "Miss opportunities dengan formal companies"],
    tips: ["Some prep ga hurt authenticity", "Know your key messages", "Practice helps confidence"],
  },
  D: {
    type: "D",
    title: "The Natural Interviewee",
    emoji: "🌊",
    description: "Kamu go with the flow di interview! Natural, conversational, dan trust the process. You believe the right opportunity akan come naturally. Relaxed vibes!",
    traits: ["Relaxed", "Natural", "Go-with-flow", "Spontaneous"],
    strengths: ["Low stress", "Genuine interactions", "No fake vibes"],
    weaknesses: ["May seem unprepared", "Miss key selling points", "Too casual sometimes"],
    tips: ["Some structure helps", "Know your strengths to highlight", "Preparation is respect untuk interviewer"],
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
