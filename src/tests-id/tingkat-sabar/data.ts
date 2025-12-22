// Seberapa Sabar Kamu?
// Tes ini mengukur tingkat kesabaran dalam kehidupan sehari-hari!

export const questions = [
  {
    id: 1,
    question: "Antri panjang di kasir, reaksimu?",
    options: [
      { text: "Sabar nunggu sambil main HP", type: "A" },
      { text: "Agak gelisah tapi masih bisa kontrol", type: "B" },
      { text: "Mulai kesal, cek jam terus", type: "C" },
      { text: "Langsung tinggal, cari tempat lain", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Makanan yang dipesan lama datangnya...",
    options: [
      { text: "Santai, pasti sedang dimasak", type: "A" },
      { text: "Tanya sopan sudah sampai mana", type: "B" },
      { text: "Mulai kesal, panggil pelayan", type: "C" },
      { text: "Cancel order, pergi ke tempat lain", type: "D" },
    ],
  },
  {
    id: 3,
    question: "WiFi atau internet lambat, kamu...",
    options: [
      { text: "Tunggu dengan tenang, coba refresh", type: "A" },
      { text: "Coba beberapa kali, lalu cari alternatif", type: "B" },
      { text: "Kesal, komplain ke provider", type: "C" },
      { text: "Marah-marah, gak bisa kerja!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Orang lain membuat kesalahan yang berdampak ke kamu...",
    options: [
      { text: "Maklum, semua orang bisa salah", type: "A" },
      { text: "Tegur dengan baik-baik", type: "B" },
      { text: "Kesal, tapi berusaha tidak marah", type: "C" },
      { text: "Langsung protes keras", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Belajar skill baru yang sulit, kamu...",
    options: [
      { text: "Enjoy prosesnya, pelan-pelan", type: "A" },
      { text: "Tetap berusaha walau frustrasi", type: "B" },
      { text: "Mulai kesal kalau gagal terus", type: "C" },
      { text: "Menyerah dan coba yang lain", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Orang terus-terusan interupsi saat kamu bicara...",
    options: [
      { text: "Tunggu mereka selesai, lanjut bicara", type: "A" },
      { text: "Minta sopan untuk tidak interupsi", type: "B" },
      { text: "Mulai kesal, berhenti bicara", type: "C" },
      { text: "Langsung marah dan protes", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Rencana mendadak berubah karena faktor eksternal...",
    options: [
      { text: "Fleksibel, bikin rencana baru", type: "A" },
      { text: "Sedikit kecewa tapi adaptasi", type: "B" },
      { text: "Kesal tapi berusaha terima", type: "C" },
      { text: "Sangat frustasi, mood rusak", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Mengajar atau menjelaskan sesuatu ke orang yang lambat paham...",
    options: [
      { text: "Sabar ulangi sampai mereka mengerti", type: "A" },
      { text: "Coba cara lain untuk menjelaskan", type: "B" },
      { text: "Mulai tidak sabar setelah beberapa kali", type: "C" },
      { text: "Menyerah, 'sudahlah gak usah'", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Terjebak macet tanpa tujuan jelas kapan selesai...",
    options: [
      { text: "Nikmati waktu, dengarkan musik/podcast", type: "A" },
      { text: "Agak gelisah tapi masih oke", type: "B" },
      { text: "Frustasi, tekan klakson sesekali", type: "C" },
      { text: "Stress berat, mood rusak total", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tunggu balasan chat penting yang tidak kunjung datang...",
    options: [
      { text: "Santai, mereka pasti sibuk", type: "A" },
      { text: "Cek sesekali tapi tidak obsesif", type: "B" },
      { text: "Gelisah, cek terus-terusan", type: "C" },
      { text: "Kesal, kirim chat follow-up banyak", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Proses birokrasi yang berbelit-belit...",
    options: [
      { text: "Ikuti prosedur dengan tenang", type: "A" },
      { text: "Sedikit frustrasi tapi tetap jalani", type: "B" },
      { text: "Komplain ke petugas", type: "C" },
      { text: "Marah-marah, birokrasi Indonesia!", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Menunggu hasil yang tidak pasti (tes, interview, dll)...",
    options: [
      { text: "Tenang, apa yang terjadi terjadilah", type: "A" },
      { text: "Agak cemas tapi bisa kontrol", type: "B" },
      { text: "Gelisah, susah fokus hal lain", type: "C" },
      { text: "Stress berat, gak bisa tidur", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Sabar Level Dewa",
    emoji: "🧘",
    description: "Wah, kesabaranmu luar biasa! Kamu bisa menghadapi situasi apapun dengan ketenangan. Sifat ini adalah anugerah yang langka. Banyak orang bisa belajar darimu.",
    traits: ["Sangat sabar", "Tenang", "Zen", "Filosofis"],
    strengths: ["Tidak mudah stress", "Decision maker yang baik", "Aura menenangkan"],
    weaknesses: ["Bisa terkesan tidak peduli", "Kadang terlalu pasif"],
    tips: ["Tetap express perasaan walau sabar", "Sabar bukan berarti diam saja"],
  },
  B: {
    type: "B",
    title: "Sabar Normal Sehat",
    emoji: "😌",
    description: "Tingkat kesabaranmu sehat dan seimbang! Kamu bisa menahan diri tapi juga tau kapan harus speak up. Balance yang bagus antara sabar dan assertive.",
    traits: ["Seimbang", "Adaptif", "Reasonable", "Stabil"],
    strengths: ["Bisa handle stress dengan baik", "Tau batas", "Komunikator yang baik"],
    weaknesses: ["Kadang bisa lebih sabar lagi", "Sesekali masih terpancing"],
    tips: ["Terus latih kesabaran", "Teknik pernapasan bisa membantu"],
  },
  C: {
    type: "C",
    title: "Sabar Terbatas",
    emoji: "😤",
    description: "Kesabaranmu ada batasnya dan itu normal! Kamu masih bisa kontrol tapi perlu effort lebih. Mengenali trigger adalah langkah pertama yang baik.",
    traits: ["Ekspresif", "Reaktif", "Punya batas jelas", "Emosional"],
    strengths: ["Tidak memendam perasaan", "Jujur dengan emosi", "Tau mau apa"],
    weaknesses: ["Mudah frustrasi", "Bisa meledak sewaktu-waktu"],
    tips: ["Latih teknik self-soothing", "Ambil jeda sebelum bereaksi"],
  },
  D: {
    type: "D",
    title: "Sabar Perlu Dilatih",
    emoji: "🔥",
    description: "Jujur, kesabaran adalah area yang perlu kamu kembangkan. Tapi jangan khawatir, kesabaran bisa dilatih! Awareness adalah langkah pertama yang penting.",
    traits: ["Impulsif", "Ekspresif", "Tidak suka menunggu", "Action-oriented"],
    strengths: ["Tidak suka buang waktu", "Tau apa yang mau", "Tegas"],
    weaknesses: ["Mudah marah", "Bisa menyesal kemudian", "Stress tinggi"],
    tips: ["Coba meditasi atau yoga", "Hitung sampai 10 sebelum bereaksi", "Terapi bisa membantu"],
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
