// Tingkat Kebutuhan Sosial
// Seberapa besar kebutuhan sosialmu dalam kehidupan sehari-hari?

export const questions = [
  {
    id: 1,
    question: "Berapa lama kamu bisa tanpa interaksi sosial?",
    options: [
      { text: "Maksimal sehari, setelah itu butuh ketemu orang", type: "A" },
      { text: "2-3 hari masih fine", type: "B" },
      { text: "Seminggu atau lebih no problem", type: "C" },
      { text: "Lebih lama lebih baik, enjoy solitude", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Weekend tanpa plan sama sekali...",
    options: [
      { text: "Cari aktivitas sosial segera!", type: "A" },
      { text: "Coba ajak 1-2 orang hangout", type: "B" },
      { text: "Enjoy alone time di rumah", type: "C" },
      { text: "Perfect, tidak perlu keluar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat kerja remote atau WFH...",
    options: [
      { text: "Butuh video call atau coworking space", type: "A" },
      { text: "Sesekali perlu interaksi", type: "B" },
      { text: "Comfortable sendirian", type: "C" },
      { text: "Prefer, tanpa gangguan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Jumlah teman yang kamu butuhkan...",
    options: [
      { text: "Banyak! More is better", type: "A" },
      { text: "Medium circle yang aktif", type: "B" },
      { text: "Sedikit tapi berkualitas", type: "C" },
      { text: "Minimal, 1-2 cukup atau zero", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kegiatan sosial dalam seminggu idealnya...",
    options: [
      { text: "Hampir setiap hari ada interaksi", type: "A" },
      { text: "3-4 kali seminggu", type: "B" },
      { text: "1-2 kali seminggu cukup", type: "C" },
      { text: "Optional, kalau ada yang mengajak", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat sendirian terlalu lama...",
    options: [
      { text: "Mulai lonely dan restless", type: "A" },
      { text: "Mulai merasa perlu orang", type: "B" },
      { text: "Masih nyaman, tapi sesekali rindu", type: "C" },
      { text: "Tidak masalah sama sekali", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Makan di restoran...",
    options: [
      { text: "Selalu dengan orang lain", type: "A" },
      { text: "Biasanya dengan teman", type: "B" },
      { text: "Bisa sendiri, bisa dengan orang", type: "C" },
      { text: "Prefer sendiri atau takeaway", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Traveling idealnya...",
    options: [
      { text: "Group trip, makin rame makin seru", type: "A" },
      { text: "Dengan beberapa teman dekat", type: "B" },
      { text: "Solo atau dengan 1 orang", type: "C" },
      { text: "Solo traveling, freedom total", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Di social media...",
    options: [
      { text: "Aktif posting dan interaksi", type: "A" },
      { text: "Moderate, share sesekali", type: "B" },
      { text: "Mostly lurker, jarang post", type: "C" },
      { text: "Minimal atau tidak punya", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat ada masalah pribadi...",
    options: [
      { text: "Cerita ke banyak orang untuk support", type: "A" },
      { text: "Share ke beberapa orang terdekat", type: "B" },
      { text: "Handle sendiri, share kalau perlu", type: "C" },
      { text: "Selesaikan sendiri completely", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Validasi dan feedback dari orang lain...",
    options: [
      { text: "Sangat penting untuk self-worth", type: "A" },
      { text: "Penting tapi tidak mutlak", type: "B" },
      { text: "Nice to have tapi bisa tanpa", type: "C" },
      { text: "Tidak terlalu butuh", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Definisi bahagia menurutmu...",
    options: [
      { text: "Dikelilingi orang-orang tersayang", type: "A" },
      { text: "Quality time dengan orang penting", type: "B" },
      { text: "Balance antara bersama dan sendiri", type: "C" },
      { text: "Peace dalam kesendirian", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Kebutuhan Sosial Tinggi",
    emoji: "🎊",
    description: "Kamu punya kebutuhan sosial yang tinggi! Interaksi dengan orang lain adalah sumber energi dan kebahagiaan. Kamu adalah social butterfly yang thrive di keramaian. Being alone is hard for you!",
    traits: ["Social butterfly", "Extroverted", "People-person", "Community-minded"],
    strengths: ["Large network", "Great connections", "Never alone"],
    weaknesses: ["Dependent on others", "FOMO", "Struggle in solitude"],
    tips: ["Learn to enjoy alone time", "Self-sufficiency is important too"],
  },
  B: {
    type: "B",
    title: "Kebutuhan Sosial Moderat",
    emoji: "☕",
    description: "Kamu punya kebutuhan sosial yang seimbang! Butuh interaksi tapi juga appreciate me time. Kamu tau kapan butuh orang dan kapan butuh sendiri. Healthy social appetite!",
    traits: ["Balanced", "Adaptable", "Moderate", "Flexible"],
    strengths: ["Good balance", "Self-aware", "Sustainable relationships"],
    weaknesses: ["Bisa flip-flop", "Sometimes unclear about needs"],
    tips: ["Trust your instincts", "Balance is your strength"],
  },
  C: {
    type: "C",
    title: "Kebutuhan Sosial Rendah",
    emoji: "📖",
    description: "Kamu punya kebutuhan sosial yang lebih rendah. Quality over quantity dalam hubungan. Kamu nyaman dengan solitude dan tidak butuh banyak interaksi untuk merasa happy.",
    traits: ["Independent", "Selective", "Self-sufficient", "Quality-focused"],
    strengths: ["Deep relationships", "Independent", "Low maintenance"],
    weaknesses: ["Bisa miss connections", "Dianggap dingin"],
    tips: ["Maintain some social ties", "Connection is still important"],
  },
  D: {
    type: "D",
    title: "Solitary by Nature",
    emoji: "🏠",
    description: "Kamu sangat nyaman dengan kesendirian dan hampir tidak butuh interaksi sosial regular. Solitude adalah happy place dan kamu fully self-sufficient secara emosional.",
    traits: ["Solitary", "Self-sufficient", "Independent", "Introspective"],
    strengths: ["Fully independent", "Rich inner world", "No social pressure"],
    weaknesses: ["Risk of isolation", "Missing human connection benefits"],
    tips: ["Some connection is healthy", "Don't isolate completely", "Quality relationships matter"],
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
