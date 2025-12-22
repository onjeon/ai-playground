// Tes Gaya Interview Kerja Kamu
// Bagaimana style kamu saat interview kerja?

export const questions = [
  {
    id: 1,
    question: "Persiapan sebelum interview...",
    options: [
      { text: "Research company habis-habisan, siap jawab apapun", type: "A" },
      { text: "Prepare poin-poin penting, sisanya improvisasi", type: "B" },
      { text: "Santai, percaya diri bisa jawab", type: "C" },
      { text: "Nervous, latihan di depan cermin", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat diminta 'ceritakan tentang diri Anda'...",
    options: [
      { text: "Structured: background, skills, achievements", type: "A" },
      { text: "Highlight relevant experience dan passion", type: "B" },
      { text: "Casual, cerita naturally tentang diri", type: "C" },
      { text: "Nervous, sometimes rambling", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Outfit untuk interview...",
    options: [
      { text: "Formal dan professional banget", type: "A" },
      { text: "Smart casual, sesuai company culture", type: "B" },
      { text: "Yang penting rapi dan comfortable", type: "C" },
      { text: "Overthink outfit, ganti berkali-kali", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ketika ditanya kelemahan...",
    options: [
      { text: "Sudah prepare jawaban strategis", type: "A" },
      { text: "Jujur tapi dengan spin positif", type: "B" },
      { text: "Jawab apa adanya dengan honest", type: "C" },
      { text: "Bingung, takut jawaban salah", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Negosiasi gaji saat interview...",
    options: [
      { text: "Research range dulu, nego dengan data", type: "A" },
      { text: "Berani nego sesuai nilai diri", type: "B" },
      { text: "Terima aja yang ditawarkan", type: "C" },
      { text: "Nervous, takut ditolak kalau minta tinggi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Body language saat interview...",
    options: [
      { text: "Maintain eye contact, posture perfect", type: "A" },
      { text: "Natural dan relaxed confident", type: "B" },
      { text: "Cukup santai, tidak terlalu pikirin", type: "C" },
      { text: "Nervous, fidgeting atau kaku", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ketika tidak tau jawaban pertanyaan...",
    options: [
      { text: "Admit tidak tau tapi explain pendekatan untuk cari tau", type: "A" },
      { text: "Try to answer dengan perspektif sendiri", type: "B" },
      { text: "Jujur bilang tidak tau", type: "C" },
      { text: "Panik dan try to make up answer", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Pertanyaan untuk interviewer di akhir...",
    options: [
      { text: "Sudah siapkan list pertanyaan insightful", type: "A" },
      { text: "Tanya yang genuinely curious", type: "B" },
      { text: "Tanya basic tentang role dan tim", type: "C" },
      { text: "Bingung mau tanya apa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Setelah interview selesai...",
    options: [
      { text: "Kirim thank you email dengan follow up points", type: "A" },
      { text: "Evaluasi diri, apa yang bisa improve", type: "B" },
      { text: "Tunggu kabar aja", type: "C" },
      { text: "Overthink semua jawaban tadi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Interview online vs offline...",
    options: [
      { text: "Bisa handle keduanya dengan baik", type: "A" },
      { text: "Prefer offline, lebih bisa show personality", type: "B" },
      { text: "Prefer online, lebih santai di rumah", type: "C" },
      { text: "Dua-duanya nervous", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau interviewer terlihat tough atau intimidating...",
    options: [
      { text: "Stay composed, ini bagian dari tes", type: "A" },
      { text: "Try to connect dan cari common ground", type: "B" },
      { text: "Just be myself, hope for the best", type: "C" },
      { text: "Jadi lebih nervous dan lost confidence", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pengalaman interview terburuk biasanya karena...",
    options: [
      { text: "Jarang bad experience, usually prepared", type: "A" },
      { text: "Kurang cocok dengan interviewer/company", type: "B" },
      { text: "Pertanyaan unexpected", type: "C" },
      { text: "Nervous yang menganggu performance", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Interview Pro",
    emoji: "🎯",
    description: "Kamu adalah kandidat yang super prepared! Research mendalam, jawaban strategic, dan professional demeanor. Interview adalah medan pertempuran yang kamu kuasai.",
    traits: ["Prepared", "Strategic", "Professional", "Confident"],
    strengths: ["Well researched", "Great first impression", "Polished answers"],
    weaknesses: ["Kadang terkesan terlalu scripted", "Kurang spontan"],
    tips: ["Show genuine personality juga", "Not everything needs to be perfect"],
  },
  B: {
    type: "B",
    title: "Natural Charmer",
    emoji: "✨",
    description: "Kamu interview dengan confidence dan charm natural! Prepare yang penting-penting tapi shine through personality. Interviewer biasanya suka vibes kamu.",
    traits: ["Charismatic", "Adaptable", "Genuine", "Confident"],
    strengths: ["Likeable", "Good rapport builder", "Flexible"],
    weaknesses: ["Sometimes underprepared", "Too casual kadang"],
    tips: ["More prep tidak ada ruginya", "Balance charm dengan substance"],
  },
  C: {
    type: "C",
    title: "Laid Back Candidate",
    emoji: "😌",
    description: "Kamu santai dalam interview! Tidak terlalu stres tentang persiapan dan percaya diri bisa handle. What you see is what you get - authenticity adalah strength-mu.",
    traits: ["Relaxed", "Authentic", "Humble", "Easy going"],
    strengths: ["Genuine", "Not stressful", "Real personality shows"],
    weaknesses: ["Might miss opportunities", "Underprepared kadang"],
    tips: ["Sedikit prep bisa boost performance", "Know your worth dan sell yourself"],
  },
  D: {
    type: "D",
    title: "Nervous Candidate",
    emoji: "😰",
    description: "Interview bikin kamu nervous! Overthink sebelum, during, dan after interview. Skill sebenarnya bagus tapi kadang kehalang sama nerves.",
    traits: ["Anxious", "Overthinking", "Self-doubting", "Perfectionist"],
    strengths: ["Care about outcome", "Thorough", "Humble"],
    weaknesses: ["Performance anxiety", "Underselling yourself"],
    tips: ["Practice more builds confidence", "Nervous itu normal, learn to manage"],
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
