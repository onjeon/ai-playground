// Tes Cara Kamu Menghadapi Deadline
// Bagaimana style-mu dalam menghadapi tenggat waktu?

export const questions = [
  {
    id: 1,
    question: "Saat dikasih project dengan deadline 2 minggu...",
    options: [
      { text: "Langsung mulai dan selesaikan lebih awal", type: "A" },
      { text: "Buat timeline dan ikuti secara sistematis", type: "B" },
      { text: "Start santai, intensify menjelang deadline", type: "C" },
      { text: "Tunggu sampai mendesak baru start", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Deadline besok dan belum selesai...",
    options: [
      { text: "Shouldn't happen, I plan ahead", type: "A" },
      { text: "Lembur dengan fokus, pasti beres", type: "B" },
      { text: "Kerja marathon, adrenaline kicks in", type: "C" },
      { text: "Panik dan minta extend kalau bisa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Progress tracking untuk project...",
    options: [
      { text: "Detailed milestones dan regular check-ins", type: "A" },
      { text: "Rough timeline dengan key checkpoints", type: "B" },
      { text: "Mental note, tidak formal tracking", type: "C" },
      { text: "Tidak track, lihat nanti aja", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Multiple deadlines di waktu bersamaan...",
    options: [
      { text: "Plan ahead, semua ter-manage dengan baik", type: "A" },
      { text: "Prioritize dan tackle strategically", type: "B" },
      { text: "Stressful tapi somehow get it done", type: "C" },
      { text: "Overwhelmed dan struggle", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Adrenaline dari deadline yang dekat...",
    options: [
      { text: "Tidak suka, prefer steady pace", type: "A" },
      { text: "Bisa handle tapi prefer tidak", type: "B" },
      { text: "Actually motivating, work best under pressure", type: "C" },
      { text: "Paralyzing, tidak bisa fokus", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quality vs deadline...",
    options: [
      { text: "Always maintain quality, plan for it", type: "A" },
      { text: "Balance keduanya", type: "B" },
      { text: "Good enough, deadline priority", type: "C" },
      { text: "Both often compromised", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Komunikasi tentang deadline dengan stakeholders...",
    options: [
      { text: "Regular updates, no surprises", type: "A" },
      { text: "Update kalau ada issues atau progress major", type: "B" },
      { text: "Kalau ditanya baru update", type: "C" },
      { text: "Avoid until done atau ada masalah", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Self-imposed deadlines...",
    options: [
      { text: "Set dan ikuti dengan disiplin", type: "A" },
      { text: "Set tapi flexible", type: "B" },
      { text: "Set tapi rarely follow", type: "C" },
      { text: "Tidak set, external deadlines saja", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Distraction saat ada deadline mendekat...",
    options: [
      { text: "Sangat fokus, minimize all distractions", type: "A" },
      { text: "Disciplined dengan scheduled breaks", type: "B" },
      { text: "Struggle, distraction is escape", type: "C" },
      { text: "Easily distracted, deadline stressful", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Setelah deadline selesai...",
    options: [
      { text: "Move to next task, always more to do", type: "A" },
      { text: "Brief celebration lalu lanjut", type: "B" },
      { text: "Relief besar, butuh recovery", type: "C" },
      { text: "Exhausted dan questioning life choices", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Buffer time dalam planning...",
    options: [
      { text: "Always factor in buffer", type: "A" },
      { text: "Usually, kalau memungkinkan", type: "B" },
      { text: "Rarely, optimistic planning", type: "C" },
      { text: "What buffer?", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Reputasi kamu soal deadline...",
    options: [
      { text: "Always on time atau early", type: "A" },
      { text: "Reliable, rarely miss", type: "B" },
      { text: "Usually make it, sometimes close calls", type: "C" },
      { text: "Known to struggle atau miss deadlines", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Deadline Master",
    emoji: "⏰",
    description: "Kamu adalah master dalam menghadapi deadline! Always ahead of schedule, well-planned, dan deliver with quality. Dependable dan professional.",
    traits: ["Organized", "Proactive", "Reliable", "Quality-focused"],
    strengths: ["Never miss deadlines", "Low stress", "High quality"],
    weaknesses: ["Might be too rigid", "Could relax a bit"],
    tips: ["Flexibility is okay sometimes", "Not everything needs perfection"],
  },
  B: {
    type: "B",
    title: "Strategic Planner",
    emoji: "📋",
    description: "Kamu strategis dalam menghadapi deadline! Good planning dengan flexibility. Meet deadlines dengan balance antara effort dan outcome.",
    traits: ["Strategic", "Balanced", "Flexible", "Reliable"],
    strengths: ["Good track record", "Sustainable pace", "Adaptable"],
    weaknesses: ["Occasional close calls"],
    tips: ["Keep the good habits", "Maybe add more buffer"],
  },
  C: {
    type: "C",
    title: "Pressure Performer",
    emoji: "🔥",
    description: "Kamu perform best under pressure! Last minute adalah ketika magic happens. Meet deadlines tapi dengan adrenaline-fueled sprints.",
    traits: ["Pressure-driven", "Last-minute", "Adrenaline junkie", "Clutch performer"],
    strengths: ["Gets it done", "Thrives under pressure"],
    weaknesses: ["Stressful", "Quality might suffer", "Unsustainable"],
    tips: ["Start earlier, less stress", "Last minute isn't always possible", "Health matters"],
  },
  D: {
    type: "D",
    title: "Deadline Struggler",
    emoji: "😰",
    description: "Kamu struggle dengan deadlines! Procrastination, poor planning, atau overwhelm. This affects performance dan reputation. Area to improve!",
    traits: ["Procrastinator", "Overwhelmed", "Disorganized", "Struggling"],
    strengths: ["Room for huge improvement"],
    weaknesses: ["Missed deadlines", "High stress", "Professional impact"],
    tips: ["Break tasks into smaller pieces", "Use productivity tools", "Start before you feel ready", "Seek help or coaching"],
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
