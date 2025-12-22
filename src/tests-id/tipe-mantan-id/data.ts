// Tes Tipe Mantan Kamu
// Bagaimana kamu sebagai mantan di mata orang?

export const questions = [
  {
    id: 1,
    question: "Setelah putus, kamu biasanya...",
    options: [
      { text: "Clean cut, block dan move on", type: "A" },
      { text: "Stay friends, mature approach", type: "B" },
      { text: "Still care, check up sesekali", type: "C" },
      { text: "Susah move on, masih berharap", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Barang-barang kenangan dari hubungan...",
    options: [
      { text: "Buang atau kembalikan semua", type: "A" },
      { text: "Simpan yang meaningful", type: "B" },
      { text: "Keep everything, hard to let go", type: "C" },
      { text: "Masih sering lihat dan sedih", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kalau mantan hubungi lagi...",
    options: [
      { text: "Ignore, sudah selesai", type: "A" },
      { text: "Respond politely tapi brief", type: "B" },
      { text: "Happy dan chat panjang", type: "C" },
      { text: "Excited dan berharap balikan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bicara tentang mantan ke teman atau pacar baru...",
    options: [
      { text: "Jarang, masa lalu bukan topik", type: "A" },
      { text: "Neutral, as part of past", type: "B" },
      { text: "Masih sering mention", type: "C" },
      { text: "Sering compare atau nostalgia", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kalau lihat mantan happy dengan orang baru...",
    options: [
      { text: "Good for them, genuinely happy", type: "A" },
      { text: "Slight pang tapi okay", type: "B" },
      { text: "Affected, compare dengan diri", type: "C" },
      { text: "Sangat sakit, susah terima", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Stalking sosmed mantan...",
    options: [
      { text: "Never, sudah unfollow/block", type: "A" },
      { text: "Rarely, occasionally curious", type: "B" },
      { text: "Sometimes, check updates", type: "C" },
      { text: "Often, keep tabs on them", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kalau ketemu mantan secara tidak sengaja...",
    options: [
      { text: "Ignore atau brief nod", type: "A" },
      { text: "Sapa singkat dan polite", type: "B" },
      { text: "Ngobrol dan catch up", type: "C" },
      { text: "Nervous dan emotional", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Mutual friends dengan mantan...",
    options: [
      { text: "Tidak masalah, life goes on", type: "A" },
      { text: "Keep friendship, avoid drama", type: "B" },
      { text: "Kadang tanya kabar mantan", type: "C" },
      { text: "Sering gali info tentang mantan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Closure setelah hubungan berakhir...",
    options: [
      { text: "Create own closure, tidak butuh dari dia", type: "A" },
      { text: "One final conversation, then done", type: "B" },
      { text: "Butuh tapi tidak selalu dapat", type: "C" },
      { text: "Never got closure, masih haunting", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pelajaran dari hubungan yang berakhir...",
    options: [
      { text: "Learn, apply, don't look back", type: "A" },
      { text: "Reflect dan grow from it", type: "B" },
      { text: "Still processing", type: "C" },
      { text: "Stuck dan sulit move forward", type: "D" },
    ],
  },
  {
    id: 11,
    question: "New relationship setelah putus...",
    options: [
      { text: "Ready relatively quickly", type: "A" },
      { text: "Take time, heal first", type: "B" },
      { text: "Compare dengan mantan terus", type: "C" },
      { text: "Not ready, still attached", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sebagai mantan, kamu mungkin dideskripsikan sebagai...",
    options: [
      { text: "The one who got away cleanly", type: "A" },
      { text: "The mature ex", type: "B" },
      { text: "The caring but attached ex", type: "C" },
      { text: "The one who couldn't let go", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Clean Break Ex",
    emoji: "✂️",
    description: "Kamu adalah tipe mantan yang clean cut! Sekali selesai, selesai. Move on dengan cepat dan tidak look back. Strong boundaries.",
    traits: ["Decisive", "Boundaried", "Quick to move on", "Independent"],
    strengths: ["Healthy detachment", "Quick healing", "No drama"],
    weaknesses: ["Might not process fully", "Could seem cold"],
    tips: ["Make sure you've actually healed", "Some reflection is healthy"],
  },
  B: {
    type: "B",
    title: "The Mature Ex",
    emoji: "🤝",
    description: "Kamu adalah tipe mantan yang mature! Bisa handle breakup dengan grace, maybe stay friends, dan learn from experience. Healthy approach.",
    traits: ["Mature", "Graceful", "Learning", "Balanced"],
    strengths: ["Healthy processing", "Can maintain dignity", "Growth oriented"],
    weaknesses: ["Sometimes too accommodating"],
    tips: ["Set boundaries if needed", "Not all exes need to be friends"],
  },
  C: {
    type: "C",
    title: "The Attached Ex",
    emoji: "💭",
    description: "Kamu adalah tipe mantan yang masih attached! Care deeply dan susah totally let go. Often check up dan think about them. Loving but struggling.",
    traits: ["Attached", "Caring", "Nostalgic", "Slow to let go"],
    strengths: ["Loving deeply", "Loyal"],
    weaknesses: ["Prolonged pain", "Might not move forward", "New relationship struggles"],
    tips: ["Distance helps healing", "Let go to grow", "Focus on yourself"],
  },
  D: {
    type: "D",
    title: "The Can't-Let-Go Ex",
    emoji: "💔",
    description: "Kamu adalah tipe mantan yang sangat susah move on! Still attached, stalking, dan hoping. This prevents you from healing dan finding new happiness.",
    traits: ["Stuck", "Obsessive", "Unable to let go", "Pining"],
    strengths: ["Loving capacity"],
    weaknesses: ["Not healing", "Missing opportunities", "Unhealthy attachment"],
    tips: ["Seek support", "Block for your own good", "Therapy can help", "You deserve to move forward"],
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
