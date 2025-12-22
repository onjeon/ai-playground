// Tes Gaya Curhat Kamu
// Bagaimana cara kamu berbagi masalah dan perasaan?

export const questions = [
  {
    id: 1,
    question: "Saat ada masalah berat, kamu biasanya...",
    options: [
      { text: "Langsung cerita ke teman terdekat", type: "A" },
      { text: "Tulis di jurnal atau notes HP", type: "B" },
      { text: "Pendam sendiri sampai reda", type: "C" },
      { text: "Distraksi diri dengan aktivitas lain", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tempat curhat favorit kamu...",
    options: [
      { text: "Cafe atau tempat nyaman sambil ngopi", type: "A" },
      { text: "Chat atau voice call, kapan aja", type: "B" },
      { text: "Di rumah, private dan aman", type: "C" },
      { text: "Sambil jalan atau aktivitas", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Yang kamu harapkan saat curhat...",
    options: [
      { text: "Didengarkan dan divalidasi perasaannya", type: "A" },
      { text: "Dapat solusi dan perspektif baru", type: "B" },
      { text: "Just vent, tidak perlu respon banyak", type: "C" },
      { text: "Dihibur dan dialihkan mood-nya", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Jumlah orang yang kamu percaya untuk curhat...",
    options: [
      { text: "Banyak, tergantung topiknya", type: "A" },
      { text: "Beberapa orang terpilih", type: "B" },
      { text: "Satu atau dua orang saja", type: "C" },
      { text: "Tidak ada, lebih suka sendiri", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat teman tidak available untuk curhat...",
    options: [
      { text: "Cari teman lain yang bisa", type: "A" },
      { text: "Tunggu sampai dia available", type: "B" },
      { text: "Simpan sendiri, sudah biasa", type: "C" },
      { text: "Curhat ke sosmed atau strangers online", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Gaya bercerita kamu saat curhat...",
    options: [
      { text: "Ekspresif dan detail, dari A sampai Z", type: "A" },
      { text: "Terstruktur dan to the point", type: "B" },
      { text: "Singkat, hint-hint aja", type: "C" },
      { text: "Lewat jokes atau sarcasm", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Setelah curhat, biasanya kamu...",
    options: [
      { text: "Lega banget, beban terangkat", type: "A" },
      { text: "Lebih clear dan punya action plan", type: "B" },
      { text: "Sama aja, tapi at least udah ngomong", type: "C" },
      { text: "Kadang menyesal kenapa curhat", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Topik yang paling sering kamu curhatkan...",
    options: [
      { text: "Relationship dan perasaan", type: "A" },
      { text: "Kerjaan dan karir", type: "B" },
      { text: "Keluarga dan personal", type: "C" },
      { text: "Random life stuff", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat orang kasih saran yang tidak kamu mau dengar...",
    options: [
      { text: "Dengerin tapi tetap di pendirian", type: "A" },
      { text: "Consider dan evaluasi objektif", type: "B" },
      { text: "Sedikit defensif", type: "C" },
      { text: "Terima kasih tapi move on", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Curhat lewat chat vs ketemu langsung...",
    options: [
      { text: "Ketemu langsung lebih prefer", type: "A" },
      { text: "Chat dulu, ketemu kalau perlu", type: "B" },
      { text: "Chat aja cukup, lebih nyaman", type: "C" },
      { text: "Tergantung urgency", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat curhat, kamu cenderung...",
    options: [
      { text: "Emosional dan kadang nangis", type: "A" },
      { text: "Tenang dan analitis", type: "B" },
      { text: "Datar, hide emotions", type: "C" },
      { text: "Bercanda meski lagi sedih", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Menurutmu, curhat itu...",
    options: [
      { text: "Penting untuk kesehatan mental", type: "A" },
      { text: "Berguna untuk dapat perspektif", type: "B" },
      { text: "Pilihan, tidak wajib", type: "C" },
      { text: "Tanda kelemahan kalau terlalu sering", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Open Book",
    emoji: "📖",
    description: "Kamu adalah tipe yang sangat terbuka dalam sharing! Curhat adalah kebutuhan dan kamu tidak malu untuk vulnerable. Circle pertemananmu tau banyak tentang hidupmu.",
    traits: ["Open", "Expressive", "Emotionally connected", "Social"],
    strengths: ["Strong support system", "Emotional release", "Deep connections"],
    weaknesses: ["Oversharing risk", "Dependent on others"],
    tips: ["Pilih audience yang tepat", "Tidak semua perlu tau semua"],
  },
  B: {
    type: "B",
    title: "Strategic Sharer",
    emoji: "🎯",
    description: "Kamu curhat dengan purpose! Sharing untuk dapat insight dan solusi, bukan sekadar vent. Selective tentang apa yang dibagikan dan ke siapa.",
    traits: ["Strategic", "Thoughtful", "Solution oriented", "Selective"],
    strengths: ["Quality connections", "Productive venting", "Boundaries jelas"],
    weaknesses: ["Kadang terlalu analytical", "Kurang emotional release"],
    tips: ["Sesekali just vent tanpa expect solusi", "Emotions juga perlu diproses"],
  },
  C: {
    type: "C",
    title: "Private Processor",
    emoji: "🔒",
    description: "Kamu lebih suka proses masalah sendiri! Curhat sangat selective dan hanya ke orang yang sangat dipercaya. Privacy adalah prioritas.",
    traits: ["Private", "Independent", "Self-reliant", "Reserved"],
    strengths: ["Strong internal processing", "Independent", "Tidak drama"],
    weaknesses: ["Bisa bottled up", "Miss support from others"],
    tips: ["Belajar open up lebih", "Support system itu penting"],
  },
  D: {
    type: "D",
    title: "Deflective Sharer",
    emoji: "🃏",
    description: "Kamu cenderung mask emotions dengan humor atau distraksi! Curhat bukan style-mu dan lebih suka move on tanpa dwell on problems.",
    traits: ["Deflective", "Humorous", "Action oriented", "Independent"],
    strengths: ["Resilient", "Not dwelling", "Quick to move on"],
    weaknesses: ["Unprocessed emotions", "Miss emotional connection"],
    tips: ["Processing emotions itu penting", "Vulnerable itu bukan weakness"],
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
