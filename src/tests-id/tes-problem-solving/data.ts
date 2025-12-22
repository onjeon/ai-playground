export const questions = [
  {
    id: 1,
    question: "Seorang petani punya 17 domba. Semua kecuali 9 mati. Berapa domba yang tersisa?",
    options: [
      { text: "9 domba", type: "A" },
      { text: "8 domba", type: "B" },
      { text: "17 domba", type: "C" },
      { text: "0 domba", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kamu berlari dalam lomba dan melewati orang di posisi kedua. Sekarang kamu di posisi ke-?",
    options: [
      { text: "Kedua", type: "A" },
      { text: "Pertama", type: "B" },
      { text: "Ketiga", type: "C" },
      { text: "Tergantung kecepatan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ayah Mary punya 5 anak: Nana, Nene, Nini, Nono. Siapa anak kelima?",
    options: [
      { text: "Mary", type: "A" },
      { text: "Nunu", type: "B" },
      { text: "Tidak disebutkan", type: "C" },
      { text: "Ayah", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sebuah lilin menyala selama 8 jam. Kamu memadamkannya setelah 3 jam. Berapa lama lilin masih bisa menyala?",
    options: [
      { text: "5 jam (jika dinyalakan lagi)", type: "A" },
      { text: "8 jam", type: "B" },
      { text: "3 jam", type: "C" },
      { text: "0 jam karena sudah padam", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dokter memberimu 3 pil untuk diminum setiap 30 menit. Berapa lama sampai semua pil habis?",
    options: [
      { text: "1 jam (minum pertama, tunggu 30 menit, minum kedua, tunggu 30 menit, minum ketiga)", type: "A" },
      { text: "1.5 jam", type: "B" },
      { text: "90 menit", type: "C" },
      { text: "30 menit", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tiga apel di meja, kamu ambil dua. Berapa apel yang kamu punya?",
    options: [
      { text: "Dua apel", type: "A" },
      { text: "Satu apel", type: "B" },
      { text: "Tiga apel", type: "C" },
      { text: "Tidak ada", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Jam 3 sore. Jika jarum jam panjang menunjuk angka 12 dan jarum pendek menunjuk angka 3, berapa derajat sudut antara keduanya?",
    options: [
      { text: "90 derajat", type: "A" },
      { text: "180 derajat", type: "B" },
      { text: "45 derajat", type: "C" },
      { text: "120 derajat", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Seorang pria menikahi 20 wanita di kotanya. Tidak ada yang bercerai dan semua masih hidup. Bagaimana ini bisa terjadi secara legal?",
    options: [
      { text: "Dia adalah pendeta/penghulu yang menikahkan mereka", type: "A" },
      { text: "Tidak mungkin legal", type: "B" },
      { text: "Dia poligami", type: "C" },
      { text: "Wanita-wanita itu saudaranya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bulan apa yang punya 28 hari?",
    options: [
      { text: "Semua bulan punya 28 hari (minimal)", type: "A" },
      { text: "Hanya Februari", type: "B" },
      { text: "Februari dan tahun kabisat", type: "C" },
      { text: "Tidak ada", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Berapa banyak huruf dalam 'alfabet'?",
    options: [
      { text: "8 huruf (dalam kata 'alfabet')", type: "A" },
      { text: "26 huruf", type: "B" },
      { text: "Tidak terhitung", type: "C" },
      { text: "7 huruf", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Seekor keong naik dinding 3 meter. Siang naik 3 meter, malam turun 2 meter. Berapa hari untuk sampai puncak?",
    options: [
      { text: "1 hari (naik 3 meter langsung sampai)", type: "A" },
      { text: "3 hari", type: "B" },
      { text: "2 hari", type: "C" },
      { text: "Tidak akan sampai", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Jika ada 3 apel dan kamu mengambil 2, berapa apel yang tersisa di meja?",
    options: [
      { text: "1 apel", type: "A" },
      { text: "2 apel", type: "B" },
      { text: "3 apel", type: "C" },
      { text: "0 apel", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Problem Solver Expert",
    emoji: "💡",
    description: "Brilliant! Kamu ahli dalam problem solving! Kamu tidak terjebak asumsi dan bisa melihat pertanyaan dari berbagai sudut. Lateral thinking-mu sangat kuat - kamu membaca pertanyaan dengan cermat dan tidak terburu-buru!",
    traits: ["Lateral thinker", "Kreatif", "Cermat", "Out of the box"],
    strengths: ["Tidak terjebak asumsi", "Membaca dengan teliti", "Solusi kreatif untuk masalah"],
    weaknesses: ["Mungkin overthinking untuk masalah sederhana"],
    tips: ["Gunakan skill ini untuk karir consulting atau strategy", "Bantu orang lain dengan perspektifmu", "Keep challenging assumptions"],
  },
  B: {
    type: "B",
    title: "Good Thinker",
    emoji: "🧩",
    description: "Bagus! Kamu punya kemampuan problem solving yang baik. Kamu sudah bisa menghindari beberapa jebakan tapi masih ada ruang untuk meningkatkan lateral thinking.",
    traits: ["Cukup cermat", "Berkembang", "Logis", "Teliti"],
    strengths: ["Fondasi problem solving yang baik", "Bisa menangkap beberapa trik", "Berpotensi meningkat"],
    weaknesses: ["Kadang terjebak asumsi umum"],
    tips: ["Baca pertanyaan lebih hati-hati", "Jangan langsung assume", "Latih dengan riddle dan puzzle"],
  },
  C: {
    type: "C",
    title: "Learning Problem Solver",
    emoji: "📈",
    description: "Kamu masih sering terjebak pada cara berpikir konvensional. Tidak masalah! Dengan latihan dan awareness, kamu bisa meningkatkan kemampuan lateral thinking.",
    traits: ["Konvensional", "Perlu latihan", "Berpotensi"],
    strengths: ["Berpikir logis", "Bisa belajar teknik baru"],
    weaknesses: ["Sering terjebak asumsi", "Kurang baca detail"],
    tips: ["Pertanyakan asumsi dalam setiap soal", "Baca pertanyaan 2x sebelum menjawab", "Latih dengan brain teasers"],
  },
  D: {
    type: "D",
    title: "Conventional Thinker",
    emoji: "🌱",
    description: "Kamu cenderung berpikir dalam pola konvensional. Ini tidak buruk untuk banyak situasi, tapi melatih lateral thinking akan sangat membantu untuk problem solving yang lebih kompleks.",
    traits: ["Konvensional", "Straightforward", "Perlu challenge"],
    strengths: ["Berpikir langsung dan sederhana"],
    weaknesses: ["Sering miss trik dalam pertanyaan"],
    tips: ["Challenge every assumption", "Coba lihat masalah dari sudut berbeda", "Practice makes perfect!"],
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
  
  const score = typeCount['A'];
  if (score >= 10) return results.A;
  if (score >= 7) return results.B;
  if (score >= 4) return results.C;
  return results.D;
}
