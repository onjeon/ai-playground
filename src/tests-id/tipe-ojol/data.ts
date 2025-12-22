export const questions = [
  {
    id: 1,
    question: "Apa yang kamu lakukan saat menunggu driver?",
    options: [
      { text: "Chat driver untuk memastikan lokasi", type: "A" },
      { text: "Scroll sosmed sambil nunggu", type: "B" },
      { text: "Sudah siap di titik jemput", type: "C" },
      { text: "Masih bersiap-siap di dalam", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bagaimana caramu berkomunikasi dengan driver?",
    options: [
      { text: "Ramah dan banyak ngobrol", type: "A" },
      { text: "Seperlunya saja", type: "B" },
      { text: "Sopan dan to the point", type: "C" },
      { text: "Lebih suka chat daripada telepon", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Apa yang kamu lakukan selama perjalanan?",
    options: [
      { text: "Ngobrol dengan driver", type: "A" },
      { text: "Main HP atau dengar musik", type: "B" },
      { text: "Memperhatikan jalan", type: "C" },
      { text: "Tidur atau melamun", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Bagaimana sikapmu soal rute?",
    options: [
      { text: "Percaya saja pada driver", type: "A" },
      { text: "Diam saja meski tahu ada jalan lebih dekat", type: "B" },
      { text: "Kasih saran jika tahu jalan lebih cepat", type: "C" },
      { text: "Ikuti GPS saja", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bagaimana caramu kasih rating?",
    options: [
      { text: "Selalu kasih 5 bintang dan tip", type: "A" },
      { text: "Sesuai pelayanan, objektif", type: "B" },
      { text: "Hampir selalu 5 kecuali ada masalah besar", type: "C" },
      { text: "Kadang lupa kasih rating", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Apa yang kamu bawa saat naik ojol?",
    options: [
      { text: "Helm sendiri untuk safety", type: "A" },
      { text: "HP dan dompet saja", type: "B" },
      { text: "Tas dengan barang-barang esensial", type: "C" },
      { text: "Apapun yang perlu dibawa hari itu", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Apa yang kamu lakukan jika driver cancel?",
    options: [
      { text: "Maklum dan order lagi", type: "A" },
      { text: "Sedikit kesal tapi tetap order", type: "B" },
      { text: "Coba hubungi dulu untuk tanya alasannya", type: "C" },
      { text: "Langsung order yang baru", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bagaimana preferensi pembayaranmu?",
    options: [
      { text: "Selalu pakai e-wallet untuk cashback", type: "A" },
      { text: "Cash karena lebih praktis", type: "B" },
      { text: "Tergantung promo yang ada", type: "C" },
      { text: "Apapun yang lebih mudah saat itu", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kapan biasanya kamu pakai ojol?",
    options: [
      { text: "Hampir setiap hari", type: "A" },
      { text: "Saat cuaca tidak mendukung", type: "B" },
      { text: "Kalau buru-buru atau tidak ada kendaraan", type: "C" },
      { text: "Jarang, lebih suka kendaraan sendiri", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Apa yang paling penting dalam memilih driver?",
    options: [
      { text: "Rating dan review bagus", type: "A" },
      { text: "Jarak driver dari lokasimu", type: "B" },
      { text: "Harga dan promo", type: "C" },
      { text: "Accept aja siapapun yang datang duluan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Apa yang kamu lakukan saat sampai tujuan?",
    options: [
      { text: "Ucapkan terima kasih dan kasih tip", type: "A" },
      { text: "Langsung turun setelah bayar", type: "B" },
      { text: "Bilang terima kasih dan kasih rating", type: "C" },
      { text: "Turun dan langsung pergi", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Bagaimana reaksimu jika driver ngebut?",
    options: [
      { text: "Minta pelan-pelan dengan sopan", type: "A" },
      { text: "Diam tapi takut di dalam hati", type: "B" },
      { text: "Tegur langsung supaya tidak ngebut", type: "C" },
      { text: "Nikmati saja, yang penting cepat sampai", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Penumpang Ideal",
    emoji: "⭐",
    description: "Kamu adalah penumpang impian setiap driver! Ramah, komunikatif, dan selalu menghargai jasa driver. Kamu adalah tipe yang bikin driver senang karena attitude-mu yang baik. Rating 5 bintang + tip adalah standarmu!",
    traits: ["Ramah", "Menghargai", "Komunikatif", "Loyal customer"],
    strengths: ["Disukai driver", "Selalu dapat pelayanan terbaik", "Membuat perjalanan menyenangkan"],
    weaknesses: ["Kadang terlalu baik", "Bisa dimanfaatkan", "Sulit komplain meski ada masalah"],
    tips: ["Boleh tegas jika ada yang salah", "Kebaikanmu appreciated", "Jangan takut memberi feedback konstruktif"],
  },
  B: {
    type: "B",
    title: "Penumpang Introvert",
    emoji: "🎧",
    description: "Kamu adalah penumpang yang lebih suka ketenangan! Headphone sudah terpasang begitu naik, komunikasi seperlunya, dan lebih memilih menikmati perjalanan dengan dunia sendiri. Driver juga happy karena kamu tidak rewel!",
    traits: ["Tenang", "Low maintenance", "Independent", "Private"],
    strengths: ["Tidak bikin drama", "Easy to handle", "Menghargai personal space"],
    weaknesses: ["Bisa terkesan cuek", "Kadang tidak aware dengan situasi", "Sulit komplain"],
    tips: ["Sesekali ngobrol dengan driver bisa seru", "Tidak semua silence itu awkward", "Your comfort zone is valid"],
  },
  C: {
    type: "C",
    title: "Penumpang Aware",
    emoji: "🧠",
    description: "Kamu adalah penumpang yang sadar situasi! Tahu jalan, perhatian dengan keamanan, dan tidak segan memberi saran konstruktif. Kamu adalah tipe yang bikin perjalanan efisien karena awareness-mu yang tinggi.",
    traits: ["Aware", "Helpful", "Efisien", "Safety-conscious"],
    strengths: ["Bisa bantu driver dengan rute", "Perjalanan lebih efisien", "Selalu sampai dengan selamat"],
    weaknesses: ["Bisa terkesan sok tahu", "Kadang terlalu controlling", "Overthinking tentang perjalanan"],
    tips: ["Percaya juga pada driver", "Tidak semua harus dikontrol", "Relax sesekali"],
  },
  D: {
    type: "D",
    title: "Penumpang Santai",
    emoji: "😴",
    description: "Kamu adalah penumpang yang super santai! Naik, duduk, sampai, turun. Tidak banyak pikiran, tidak banyak drama. Kamu enjoy perjalanan sebagai waktu istirahat atau me-time sebelum aktivitas berikutnya.",
    traits: ["Santai", "Easygoing", "Adaptif", "Chill"],
    strengths: ["Tidak rewel", "Fleksibel dengan situasi", "Membuat driver nyaman"],
    weaknesses: ["Kadang terlalu pasif", "Bisa tidak aware dengan masalah", "Lupa kasih rating/feedback"],
    tips: ["Apresiasi driver dengan rating", "Sedikit awareness tidak ada salahnya", "Your chill vibe is appreciated"],
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
