// Tipe Kamu Saat Mudik
// Tes ini mengungkap kepribadianmu berdasarkan gaya mudik!

export const questions = [
  {
    id: 1,
    question: "Kapan biasanya kamu mulai persiapan mudik?",
    options: [
      { text: "Sebulan sebelumnya, beli tiket dari jauh hari", type: "A" },
      { text: "Seminggu sebelumnya, cukup waktu", type: "B" },
      { text: "H-3 atau H-2, mepet tapi bisa", type: "C" },
      { text: "Dadakan! Spontan aja", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Transportasi mudik pilihanmu?",
    options: [
      { text: "Pesawat, cepat dan nyaman", type: "A" },
      { text: "Kereta api, pemandangan bagus", type: "B" },
      { text: "Mobil pribadi, bebas stop dimana aja", type: "C" },
      { text: "Bus, rame dan seru", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Oleh-oleh buat keluarga di kampung?",
    options: [
      { text: "Udah list dari awal, beli yang spesifik", type: "A" },
      { text: "Beli di toko terkenal, yang pasti enak", type: "B" },
      { text: "Beli dadakan di jalan atau rest area", type: "C" },
      { text: "Uang aja, biar mereka beli sendiri", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat macet di jalan, kamu...",
    options: [
      { text: "Sabar, sudah antisipasi dari awal", type: "A" },
      { text: "Cari jalur alternatif via GPS", type: "B" },
      { text: "Bete, tapi ya sudahlah", type: "C" },
      { text: "Malah senang, waktu bonding sama keluarga", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bekal perjalanan mudik kamu?",
    options: [
      { text: "Lengkap! Makanan, minuman, obat-obatan", type: "A" },
      { text: "Snack dan air minum cukup", type: "B" },
      { text: "Beli di jalan aja, lebih praktis", type: "C" },
      { text: "Masakan rumah yang banyak untuk sharing", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Di rest area, kamu pasti...",
    options: [
      { text: "Ke toilet dan lanjut perjalanan", type: "A" },
      { text: "Makan dan istirahat sebentar", type: "B" },
      { text: "Explore, beli oleh-oleh dan jajanan", type: "C" },
      { text: "Foto-foto dulu baru lanjut", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sampai di rumah, hal pertama yang kamu lakukan?",
    options: [
      { text: "Salam dan peluk orangtua", type: "A" },
      { text: "Istirahat dulu, capek perjalanan", type: "B" },
      { text: "Makan masakan ibu!", type: "C" },
      { text: "Video call teman, 'udah sampe nih!'", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Aktivitasmu selama di kampung?",
    options: [
      { text: "Quality time sama keluarga inti", type: "A" },
      { text: "Silaturahmi ke saudara dan tetangga", type: "B" },
      { text: "Rebahan, healing dari kerjaan", type: "C" },
      { text: "Jalan-jalan ke tempat nostalgia", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tentang pertanyaan 'kapan nikah/punya anak' dari saudara...",
    options: [
      { text: "Jawab diplomatik, senyum aja", type: "A" },
      { text: "Counter dengan pertanyaan lain", type: "B" },
      { text: "Kabur ke ruangan lain", type: "C" },
      { text: "Curhat panjang lebar, sekalian", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Berapa lama biasanya kamu mudik?",
    options: [
      { text: "Seminggu penuh, maksimalin libur", type: "A" },
      { text: "3-5 hari, cukup tapi tidak berlebihan", type: "B" },
      { text: "1-2 hari, express visit", type: "C" },
      { text: "Lebih dari seminggu, sekalian staycation", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kapan biasanya kamu balik ke kota?",
    options: [
      { text: "Sebelum arus balik puncak", type: "A" },
      { text: "Bareng arus balik, gapapa macet", type: "B" },
      { text: "Setelah arus balik reda", type: "C" },
      { text: "Last minute, gak mau pulang", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Perasaan setelah mudik selesai?",
    options: [
      { text: "Puas, misi terselesaikan", type: "A" },
      { text: "Bersyukur bisa kumpul keluarga", type: "B" },
      { text: "Lega, capek tapi worth it", type: "C" },
      { text: "Sedih, pengen balik lagi", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mudik Planner Pro",
    emoji: "📋",
    description: "Kamu adalah master planner mudik! Semua sudah direncanakan matang dari jauh hari. Tiket, oleh-oleh, itinerary - semua tercatat rapi. Kamu meminimalisir stress perjalanan.",
    traits: ["Terorganisir", "Planner", "Antisipatis", "Efisien"],
    strengths: ["Perjalanan lancar", "Tidak panik", "Hemat biaya dengan booking awal"],
    weaknesses: ["Kurang fleksibel", "Stress kalau ada perubahan rencana"],
    tips: ["Siapkan plan B untuk hal tak terduga", "Sesekali spontan juga tidak apa-apa"],
  },
  B: {
    type: "B",
    title: "Mudik Balanced",
    emoji: "⚖️",
    description: "Kamu punya keseimbangan sempurna dalam mudik! Tidak terlalu ribet tapi tetap prepared. Kamu tahu cara menikmati perjalanan tanpa stress berlebihan.",
    traits: ["Seimbang", "Adaptif", "Praktis", "Tenang"],
    strengths: ["Fleksibel", "Tidak mudah panik", "Enjoy the journey"],
    weaknesses: ["Kadang kurang anticipate", "Bisa ketinggalan tiket peak season"],
    tips: ["Untuk peak season, book lebih awal", "Tetap prepare essentials"],
  },
  C: {
    type: "C",
    title: "Mudik Santai",
    emoji: "😎",
    description: "Bagi kamu, mudik adalah waktu istirahat total! Tidak ribet soal persiapan, yang penting sampai dan bisa healing. Kampung adalah escape dari rutinitas.",
    traits: ["Santai", "Low-maintenance", "Praktis", "Rileks"],
    strengths: ["Tidak stress", "Hemat energi", "Full relaxation"],
    weaknesses: ["Bisa kurang siap", "Miss momen penting"],
    tips: ["Minimal prepare kebutuhan dasar", "Jangan sampai lupa oleh-oleh untuk orangtua"],
  },
  D: {
    type: "D",
    title: "Mudik Enthusiast",
    emoji: "🏠",
    description: "Kamu CINTA mudik! Bukan cuma kewajiban, tapi kebahagiaan sejati. Setiap momen perjalanan dan di kampung adalah precious. Kamu sangat family-oriented.",
    traits: ["Family-oriented", "Nostalgis", "Hangat", "Ekspresif"],
    strengths: ["Bonding kuat dengan keluarga", "Menghargai momen", "Menyebarkan kehangatan"],
    weaknesses: ["Susah move on dari kampung", "Bisa over-attached"],
    tips: ["Balance antara nostalgia dan present", "Bawa kebahagiaan kampung ke kota juga"],
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
