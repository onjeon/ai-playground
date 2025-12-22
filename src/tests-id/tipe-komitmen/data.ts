// Tes Tipe Komitmen Kamu
// Bagaimana kamu menghadapi komitmen dalam hubungan?

export const questions = [
  {
    id: 1,
    question: "Definisi 'komitmen' dalam hubungan menurutmu...",
    options: [
      { text: "All in, 100% dedicated selamanya", type: "A" },
      { text: "Serius tapi dengan healthy boundaries", type: "B" },
      { text: "Tergantung fase dan situasi hubungan", type: "C" },
      { text: "Scary word, lebih suka go with flow", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Timeline ideal dari PDKT sampai official...",
    options: [
      { text: "Secepatnya kalau sudah yakin", type: "A" },
      { text: "2-3 bulan untuk kenal lebih dalam", type: "B" },
      { text: "Flexible, biar natural aja", type: "C" },
      { text: "Tidak buru-buru, bisa berbulan-bulan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tentang DTR (Define The Relationship)...",
    options: [
      { text: "Penting, harus clear dari awal", type: "A" },
      { text: "Penting di waktu yang tepat", type: "B" },
      { text: "Biar mengalir, tidak perlu dipaksa", type: "C" },
      { text: "Avoid kalau bisa, too much pressure", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ketika mulai serius sama seseorang...",
    options: [
      { text: "All in, cut off semua options lain", type: "A" },
      { text: "Fokus tapi tetap punya life sendiri", type: "B" },
      { text: "Masih keep options sampai benar-benar yakin", type: "C" },
      { text: "Nervous dan kadang mau mundur", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Long term plans dengan pasangan...",
    options: [
      { text: "Sudah plan dari awal: nikah, anak, etc", type: "A" },
      { text: "Discuss tapi flexible", type: "B" },
      { text: "Fokus present, future nanti aja", type: "C" },
      { text: "Overwhelmed kalau bahas terlalu jauh", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat relationship mulai 'boring'...",
    options: [
      { text: "Work on it together, komitmen tetap", type: "A" },
      { text: "Evaluate dan coba improve", type: "B" },
      { text: "Question apakah ini masih right fit", type: "C" },
      { text: "Might be sign untuk move on", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tentang label 'pacar'...",
    options: [
      { text: "Very important, mau official ASAP", type: "A" },
      { text: "Penting tapi bukan segalanya", type: "B" },
      { text: "Nice to have, actions lebih penting", type: "C" },
      { text: "Pressure, prefer tanpa label", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Ide tentang pernikahan...",
    options: [
      { text: "Dream goal, ingin menikah suatu hari", type: "A" },
      { text: "Open to it dengan orang yang tepat", type: "B" },
      { text: "Belum sure, lihat nanti", type: "C" },
      { text: "Not a priority atau not for me", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau ada issues besar dalam relationship...",
    options: [
      { text: "Fight for it, komitmen tetap", type: "A" },
      { text: "Work on it, tapi ada limit", type: "B" },
      { text: "Evaluate worth-nya untuk stay", type: "C" },
      { text: "Easier to walk away", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kenapa orang takut komitmen menurutmu?",
    options: [
      { text: "Belum ketemu orang yang tepat", type: "A" },
      { text: "Bad experiences atau fear of failure", type: "B" },
      { text: "Fear of missing out on others", type: "C" },
      { text: "Komitmen itu memang overwhelming", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sacrifices dalam committed relationship...",
    options: [
      { text: "Worth it untuk orang yang dicintai", type: "A" },
      { text: "Perlu, tapi harus balance", type: "B" },
      { text: "Reluctant, prioritize self", type: "C" },
      { text: "Red flag kalau terlalu banyak sacrifice", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Komitmen terbesar yang siap kamu berikan...",
    options: [
      { text: "Everything - time, energy, future", type: "A" },
      { text: "Significant tapi dengan boundaries", type: "B" },
      { text: "Moderate, masih jaga diri", type: "C" },
      { text: "Limited, takut terlalu invest", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "All-In Committer",
    emoji: "💍",
    description: "Kamu tipe yang full commitment! Kalau sudah yakin, all in tanpa ragu. Marriage material dan selalu think long term dalam relationship.",
    traits: ["Committed", "Loyal", "Future oriented", "All-in"],
    strengths: ["Stability", "Reliability", "Deep investment", "Clear intentions"],
    weaknesses: ["Might rush", "High expectations", "Hard to let go"],
    tips: ["Take time to really know someone", "Commitment bukan rush decision"],
  },
  B: {
    type: "B",
    title: "Healthy Committer",
    emoji: "⚖️",
    description: "Kamu commit dengan healthy dan balanced! Serius tapi dengan boundaries yang jelas. Tau kapan harus fight dan kapan harus evaluate.",
    traits: ["Balanced", "Realistic", "Mature", "Thoughtful"],
    strengths: ["Healthy approach", "Self-aware", "Good judgment"],
    weaknesses: ["Might overthink", "Can seem cautious"],
    tips: ["Trust your judgment", "Balance is key"],
  },
  C: {
    type: "C",
    title: "Cautious Committer",
    emoji: "🐢",
    description: "Kamu slow to commit dan prefer go with flow! Butuh waktu lama untuk sure dan kadang masih keep options. Present focused daripada future oriented.",
    traits: ["Cautious", "Present focused", "Non-committal", "Option keeper"],
    strengths: ["Doesn't rush", "Protects self", "Realistic"],
    weaknesses: ["Might miss good ones", "Indecisive", "Partner might feel insecure"],
    tips: ["Sometimes you gotta take the leap", "Being too cautious can be a loss too"],
  },
  D: {
    type: "D",
    title: "Commitment-Phobe",
    emoji: "🦋",
    description: "Komitmen adalah scary word! Kamu prefer freedom dan go with flow. Serious relationship feels overwhelming dan kamu tend to run when things get too real.",
    traits: ["Freedom loving", "Avoidant", "Fear of commitment", "Non-attached"],
    strengths: ["Independent", "Doesn't settle", "Self-protective"],
    weaknesses: ["Missing deep connections", "Running from intimacy", "Fear-driven"],
    tips: ["Explore why you fear commitment", "Right person might change perspective"],
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
