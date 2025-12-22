// Tipe Side Hustle Kamu
// Tes ini mengungkap side hustle yang cocok dengan kepribadianmu!

export const questions = [
  {
    id: 1,
    question: "Waktu yang bisa kamu dedicate untuk side hustle...",
    options: [
      { text: "Evenings dan weekends, quite flexible", type: "A" },
      { text: "A few hours per week, scheduled", type: "B" },
      { text: "Sporadic, when inspiration hits", type: "C" },
      { text: "Minimal, passive income preferred", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Modal awal yang willing untuk invest...",
    options: [
      { text: "Significant, if good opportunity", type: "A" },
      { text: "Moderate, calculated risk", type: "B" },
      { text: "Minimal, skills-based hustle", type: "C" },
      { text: "Zero, start with what I have", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Risk tolerance untuk side hustle...",
    options: [
      { text: "High, big potential = worth risk", type: "A" },
      { text: "Moderate, diversified approach", type: "B" },
      { text: "Low-medium, steady growth", type: "C" },
      { text: "Very low, safety first", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Primary motivation untuk side hustle...",
    options: [
      { text: "Build towards full-time business", type: "A" },
      { text: "Extra income stream", type: "B" },
      { text: "Pursue passion outside work", type: "C" },
      { text: "Financial safety net", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Skills yang paling confident...",
    options: [
      { text: "Business/entrepreneurship", type: "A" },
      { text: "Technical/professional skills", type: "B" },
      { text: "Creative/artistic abilities", type: "C" },
      { text: "Analytical/financial", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Dealing dengan uncertainty...",
    options: [
      { text: "Thrive on it, part of game", type: "A" },
      { text: "Manage with planning", type: "B" },
      { text: "Accept untuk passion projects", type: "C" },
      { text: "Prefer predictable outcomes", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Client/customer interaction preference...",
    options: [
      { text: "Love it, sales is fun", type: "A" },
      { text: "Professional boundaries", type: "B" },
      { text: "Enjoy creative clients", type: "C" },
      { text: "Minimal, automated if possible", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Growth ambition untuk side hustle...",
    options: [
      { text: "Scale it big, hire people", type: "A" },
      { text: "Grow steadily, manageable", type: "B" },
      { text: "Stay small, personal", type: "C" },
      { text: "Keep it simple, supplementary", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Content creation untuk marketing...",
    options: [
      { text: "Enjoy, will build brand", type: "A" },
      { text: "Will do what's needed", type: "B" },
      { text: "Love it! Expression outlet", type: "C" },
      { text: "Prefer word of mouth, less effort", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Balance dengan main job...",
    options: [
      { text: "Main job is temporary, hustle is future", type: "A" },
      { text: "Both important, balance carefully", type: "B" },
      { text: "Main job pays bills, hustle feeds soul", type: "C" },
      { text: "Main job priority, hustle is bonus", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ideal side hustle duration...",
    options: [
      { text: "Until it becomes main thing", type: "A" },
      { text: "Ongoing, part of life", type: "B" },
      { text: "As long as I enjoy it", type: "C" },
      { text: "Project-based, come and go", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Success measure untuk side hustle...",
    options: [
      { text: "Revenue dan growth metrics", type: "A" },
      { text: "Consistent additional income", type: "B" },
      { text: "Fulfillment dan creative output", type: "C" },
      { text: "Passive income generated", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Entrepreneur Hustler",
    emoji: "🚀",
    description: "Side hustle cocok: E-commerce business, Dropshipping, Agency, atau Product business. You're building towards something big! This isn't side, it's pre-main!",
    traits: ["Ambitious", "Risk-taking", "Growth-minded", "Entrepreneurial"],
    strengths: ["High potential upside", "Business builder mindset", "Driven"],
    weaknesses: ["Burnout risk", "Main job might suffer", "High risk"],
    tips: ["Don't neglect health", "Build runway before going full-time", "Validate before scaling"],
  },
  B: {
    type: "B",
    title: "The Professional Freelancer",
    emoji: "💼",
    description: "Side hustle cocok: Consulting, Freelance professional services, Coaching. Leverage your expertise untuk extra income. Smart dan sustainable!",
    traits: ["Professional", "Skilled", "Reliable", "Strategic"],
    strengths: ["Leverage existing skills", "Clear value proposition", "Scalable rates"],
    weaknesses: ["Time limited", "Burnout dari more same work"],
    tips: ["Productize your services", "Increase rates not hours", "Build systems"],
  },
  C: {
    type: "C",
    title: "The Creative Hustler",
    emoji: "🎨",
    description: "Side hustle cocok: Content creation, Art commissions, Teaching/Workshops, Creative freelance. Turn passion into profit while keeping it fun!",
    traits: ["Creative", "Passionate", "Expressive", "Authentic"],
    strengths: ["Love what you do", "Authentic content", "Unique offerings"],
    weaknesses: ["Income unpredictable", "Hard to monetize passion"],
    tips: ["Balance passion dengan business sense", "Multiple revenue streams", "Don't lose the joy"],
  },
  D: {
    type: "D",
    title: "The Passive Income Builder",
    emoji: "💰",
    description: "Side hustle cocok: Investments, Affiliate marketing, Digital products, Rental income. Build assets that work while you sleep. Smart long-term play!",
    traits: ["Strategic", "Patient", "Low-maintenance", "Long-term thinking"],
    strengths: ["Scalable without time", "Compound growth", "Doesn't interfere with job"],
    weaknesses: ["Slow start", "Upfront effort needed", "May lack excitement"],
    tips: ["Be patient, passive takes time", "Diversify income streams", "Learn about investing"],
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
