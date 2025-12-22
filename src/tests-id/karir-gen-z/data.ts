// Karir Gen-Z Kamu
// Tes ini mengungkap karir ideal untuk generasi Z!

export const questions = [
  {
    id: 1,
    question: "Platform yang paling sering kamu pakai untuk learn...",
    options: [
      { text: "YouTube dan podcast", type: "A" },
      { text: "Online courses (Coursera, Udemy)", type: "B" },
      { text: "TikTok dan Instagram reels", type: "C" },
      { text: "Twitter/X threads dan communities", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Work arrangement yang paling appeal...",
    options: [
      { text: "Full remote, work from anywhere", type: "A" },
      { text: "Hybrid, best of both", type: "B" },
      { text: "Co-working spaces, vibes matter", type: "C" },
      { text: "Office tapi aesthetic dan modern", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Definition of success untuk kamu...",
    options: [
      { text: "Freedom dan flexibility", type: "A" },
      { text: "Impact dan meaningful work", type: "B" },
      { text: "Fame dan influence", type: "C" },
      { text: "Financial security dan stability", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Skills yang paling kamu banggakan...",
    options: [
      { text: "Tech-savvy, learn tools fast", type: "A" },
      { text: "Creative thinking dan problem solving", type: "B" },
      { text: "Content creation dan communication", type: "C" },
      { text: "Analytical dan data-driven", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Side hustle yang appeal...",
    options: [
      { text: "Freelance tech/design work", type: "A" },
      { text: "Passion project atau startup idea", type: "B" },
      { text: "Content creator / influencer", type: "C" },
      { text: "Investing atau trading", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Company values yang paling penting...",
    options: [
      { text: "Work-life balance dan flexibility", type: "A" },
      { text: "Mission-driven dan sustainability", type: "B" },
      { text: "Creative freedom dan culture", type: "C" },
      { text: "Growth opportunities dan learning", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Communication style preferred...",
    options: [
      { text: "Async (Slack, email, docs)", type: "A" },
      { text: "Mix of sync dan async", type: "B" },
      { text: "Video calls dan voice notes", type: "C" },
      { text: "In-person conversations", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Ideal team size...",
    options: [
      { text: "Solo atau very small team", type: "A" },
      { text: "Small agile team (5-10)", type: "B" },
      { text: "Medium creative team", type: "C" },
      { text: "Larger organization dengan structure", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Learning preference...",
    options: [
      { text: "Self-taught, figure it out", type: "A" },
      { text: "Structured with mentorship", type: "B" },
      { text: "Learn by doing, trial error", type: "C" },
      { text: "Formal training dan certifications", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Dream work scenario...",
    options: [
      { text: "Laptop anywhere in the world", type: "A" },
      { text: "Building something meaningful", type: "B" },
      { text: "Creating content I love", type: "C" },
      { text: "Clear career ladder dan growth", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Dealing dengan job uncertainty...",
    options: [
      { text: "Build multiple income streams", type: "A" },
      { text: "Focus on transferable skills", type: "B" },
      { text: "Personal brand is security", type: "C" },
      { text: "Find stable company/industry", type: "D" },
    ],
  },
  {
    id: 12,
    question: "5 tahun dari sekarang ideally...",
    options: [
      { text: "Location independent, own schedule", type: "A" },
      { text: "Leading impactful projects", type: "B" },
      { text: "Recognized dalam my niche", type: "C" },
      { text: "Senior position dengan influence", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Digital Nomad",
    emoji: "🌍",
    description: "Karir ideal: Remote Tech Worker, Freelance Developer/Designer, Digital Marketing. Freedom adalah priority! Location-independent lifestyle suits you perfectly.",
    traits: ["Independent", "Tech-savvy", "Freedom-loving", "Self-sufficient"],
    strengths: ["Adaptable", "Self-motivated", "Global perspective"],
    weaknesses: ["May lack stability", "Isolation risk", "Career progression unclear"],
    tips: ["Build strong network remotely", "Create financial cushion", "Find community"],
  },
  B: {
    type: "B",
    title: "The Impact Builder",
    emoji: "🚀",
    description: "Karir ideal: Startup roles, Social Enterprise, Sustainability roles, Product Management. You want work yang matters dan make real difference di world.",
    traits: ["Purpose-driven", "Innovative", "Collaborative", "Idealistic"],
    strengths: ["Passionate", "Big picture thinking", "Motivated"],
    weaknesses: ["May burn out from caring too much", "Idealism vs reality clash"],
    tips: ["Balance passion dengan pragmatism", "Impact takes time", "Celebrate small wins"],
  },
  C: {
    type: "C",
    title: "The Creative Influencer",
    emoji: "🎬",
    description: "Karir ideal: Content Creator, Social Media Manager, Brand Strategist, Creative Director. Your creativity dan personal brand are your superpower!",
    traits: ["Creative", "Communicative", "Trendy", "Personable"],
    strengths: ["Strong personal brand", "Engagement skills", "Trend awareness"],
    weaknesses: ["Volatile income", "Algorithm dependency", "Mental health risks"],
    tips: ["Diversify platforms/income", "Protect mental health", "Build real skills beyond content"],
  },
  D: {
    type: "D",
    title: "The Strategic Climber",
    emoji: "📈",
    description: "Karir ideal: Consulting, Finance, Tech companies dengan clear progression. You want the stability dan growth opportunities of established paths.",
    traits: ["Ambitious", "Strategic", "Analytical", "Career-focused"],
    strengths: ["Clear goals", "Professional development", "Financial stability"],
    weaknesses: ["May sacrifice work-life balance", "Traditional path pressure"],
    tips: ["Balance ambition dengan life", "Not all success is climbing", "Define success on your terms"],
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
