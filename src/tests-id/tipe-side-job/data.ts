// Tes Tipe Side Job Cocok Untukmu
// Temukan side hustle yang sesuai dengan kepribadianmu!

export const questions = [
  {
    id: 1,
    question: "Waktu luang yang bisa kamu dedikasikan untuk side job...",
    options: [
      { text: "Konsisten 10-20 jam per minggu", type: "A" },
      { text: "Flexible, tergantung main job load", type: "B" },
      { text: "Weekend atau malam hari only", type: "C" },
      { text: "Minimal, cari yang passive income", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Motivasi utama untuk side job...",
    options: [
      { text: "Extra income yang significant", type: "A" },
      { text: "Explore passion di luar main job", type: "B" },
      { text: "Build skills untuk future career", type: "C" },
      { text: "Financial freedom dan independence", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Skill set yang mau kamu leverage...",
    options: [
      { text: "Professional skills dari main job", type: "A" },
      { text: "Creative atau artistic abilities", type: "B" },
      { text: "Teaching atau consulting", type: "C" },
      { text: "Build something scalable", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Risk tolerance untuk side job...",
    options: [
      { text: "Low risk, consistent income prefer", type: "A" },
      { text: "Medium risk untuk higher reward", type: "B" },
      { text: "Minimal investment required", type: "C" },
      { text: "High risk okay kalau potential besar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Interaksi dengan client/customer...",
    options: [
      { text: "Comfortable, good communication skills", type: "A" },
      { text: "Okay dengan boundaries yang jelas", type: "B" },
      { text: "Prefer minimal direct interaction", type: "C" },
      { text: "Build systems, bukan serve individuals", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ideal timeline untuk see results...",
    options: [
      { text: "1-3 bulan, perlu income soon", type: "A" },
      { text: "3-6 bulan, building phase okay", type: "B" },
      { text: "Flexible, long term is fine", type: "C" },
      { text: "1-2 tahun untuk something big", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Modal awal yang bisa kamu invest...",
    options: [
      { text: "Minimal, mostly time investment", type: "A" },
      { text: "Beberapa juta untuk proper setup", type: "B" },
      { text: "Learning investment (courses, dll)", type: "C" },
      { text: "Significant untuk business proper", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Scalability preference...",
    options: [
      { text: "Trading time for money is okay", type: "A" },
      { text: "Some scalability nice to have", type: "B" },
      { text: "Prefer one-to-many model", type: "C" },
      { text: "Must be scalable, aim for passive", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Work style preference...",
    options: [
      { text: "Structured projects dengan clear scope", type: "A" },
      { text: "Creative freedom dan expression", type: "B" },
      { text: "Flexible, kerja kapan mau", type: "C" },
      { text: "Building systems dan automation", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Relationship dengan main job...",
    options: [
      { text: "Completely separate, different field", type: "A" },
      { text: "Related tapi tidak conflict", type: "B" },
      { text: "Complement dan enhance main job skills", type: "C" },
      { text: "Potential to replace main job someday", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Energy level setelah main job...",
    options: [
      { text: "Still have energy untuk work more", type: "A" },
      { text: "Moderate, untuk passion project bisa", type: "B" },
      { text: "Tired, perlu low effort side job", type: "C" },
      { text: "Variable, butuh flexibility", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Long term goal dengan side job...",
    options: [
      { text: "Consistent extra income stream", type: "A" },
      { text: "Turn passion into profit", type: "B" },
      { text: "Build portfolio atau reputation", type: "C" },
      { text: "Eventually bisa full time", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Freelancer/Consultant",
    emoji: "💼",
    description: "Kamu cocok jadi freelancer atau consultant! Leverage professional skills untuk project-based work. Consistent income dengan clear scope kerja.",
    recommendations: ["Freelance di bidang keahlian", "Konsultasi untuk UKM", "Project-based work di platform", "Virtual assistant"],
    traits: ["Professional", "Reliable", "Service oriented", "Skilled"],
    strengths: ["Quick income", "Use existing skills", "Clear deliverables"],
    tips: ["Build portfolio", "Set clear boundaries dengan main job"],
  },
  B: {
    type: "B",
    title: "Creative Entrepreneur",
    emoji: "🎨",
    description: "Kamu cocok untuk creative side hustle! Express passion lewat kreativitas dan turn it into income. Art, content, atau craft-based business.",
    recommendations: ["Content creator", "Handmade products", "Design services", "Photography/videography"],
    traits: ["Creative", "Passionate", "Expressive", "Artistic"],
    strengths: ["Fulfilling work", "Unique offering", "Personal brand building"],
    tips: ["Balance passion dengan profitability", "Find your niche audience"],
  },
  C: {
    type: "C",
    title: "Knowledge Sharer",
    emoji: "📚",
    description: "Kamu cocok untuk teaching atau knowledge sharing! Share expertise lewat courses, coaching, atau tutoring. One-to-many model yang scalable.",
    recommendations: ["Online courses", "Tutoring", "Coaching/mentoring", "Writing/blogging"],
    traits: ["Knowledgeable", "Patient", "Good communicator", "Helpful"],
    strengths: ["Scalable potential", "Build reputation", "Flexible schedule"],
    tips: ["Pick your niche", "Build credibility first"],
  },
  D: {
    type: "D",
    title: "Business Builder",
    emoji: "🚀",
    description: "Kamu cocok untuk build actual business! Thinking big dengan scalable models dan passive income potential. Side job yang bisa jadi main gig someday.",
    recommendations: ["E-commerce/dropship", "Digital products", "SaaS atau app", "Investment atau trading"],
    traits: ["Ambitious", "Scalability minded", "Risk tolerant", "Visionary"],
    strengths: ["High potential upside", "Passive income possible", "Can grow big"],
    tips: ["Be patient untuk results", "Reinvest profits untuk growth"],
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
