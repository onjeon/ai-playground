// Kepribadian dari Gaya Makan di Warteg
// Tes ini mengungkap kepribadianmu dari cara kamu makan di warteg!

export const questions = [
  {
    id: 1,
    question: "Saat masuk warteg, kamu biasanya...",
    options: [
      { text: "Survey semua lauk dulu baru milih", type: "A" },
      { text: "Langsung ke lauk favorit, tidak perlu lihat-lihat", type: "B" },
      { text: "Tanya ibu warteg, 'Bu, hari ini yang enak apa?'", type: "C" },
      { text: "Pilih yang terlihat pertama, tidak mau lama-lama", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Jumlah lauk yang biasa kamu ambil...",
    options: [
      { text: "Minimal 3-4 lauk, harus lengkap", type: "A" },
      { text: "2 lauk cukup, yang penting porsinya nambah", type: "B" },
      { text: "1 lauk aja, hemat dan simple", type: "C" },
      { text: "Tergantung lapar dan budget hari itu", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Soal nasi...",
    options: [
      { text: "Porsi standar, seimbang dengan lauk", type: "A" },
      { text: "Nambah! Nasi banyak, lauk dikit gpp", type: "B" },
      { text: "Setengah porsi, lagi diet atau tidak terlalu lapar", type: "C" },
      { text: "Minta nasi anget yang baru dimasak", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sambal di warteg...",
    options: [
      { text: "Wajib banyak! Kurang pedas kurang nikmat", type: "A" },
      { text: "Secukupnya, biar balance rasanya", type: "B" },
      { text: "Tidak pakai sambal, tidak kuat pedas", type: "C" },
      { text: "Minta sambal terpisah, kontrol sendiri", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tempat duduk favorit di warteg...",
    options: [
      { text: "Dekat etalase lauk, mau lihat-lihat", type: "A" },
      { text: "Pojok, lebih private dan tenang", type: "B" },
      { text: "Mana aja yang kosong, tidak pilih-pilih", type: "C" },
      { text: "Dekat pintu, biar cepat kalau sudah selesai", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kalau lauk favorit habis...",
    options: [
      { text: "Kecewa, tapi tetap cari alternatif", type: "A" },
      { text: "Pindah ke warteg lain yang ada", type: "B" },
      { text: "Ya sudah, makan yang ada aja", type: "C" },
      { text: "Tanya kapan dimasak lagi, mau balik", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Makan di warteg biasanya...",
    options: [
      { text: "Cepat, makan langsung cabut", type: "A" },
      { text: "Santai, nikmati sambil scroll HP", type: "B" },
      { text: "Ngobrol sama yang makan di sebelah", type: "C" },
      { text: "Tergantung waktu, kalau buru-buru ya cepat", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Soal minum...",
    options: [
      { text: "Es teh manis, wajib!", type: "A" },
      { text: "Air putih aja, lebih sehat", type: "B" },
      { text: "Tidak minum di sini, bawa minum sendiri", type: "C" },
      { text: "Tergantung mood, kadang es jeruk atau teh anget", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bayar di warteg...",
    options: [
      { text: "Sudah hafal harga, siap uang pas", type: "A" },
      { text: "Tanya dulu totalnya, baru bayar", type: "B" },
      { text: "Percaya sama hitungan ibu warteg", type: "C" },
      { text: "Kadang hitung sendiri untuk cross-check", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Warteg favorit kamu...",
    options: [
      { text: "Satu aja, langganan setia", type: "A" },
      { text: "Beberapa, tergantung lokasi dan lauk", type: "B" },
      { text: "Explore terus, suka coba-coba baru", type: "C" },
      { text: "Yang paling dekat, praktis", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau makan di warteg bareng teman...",
    options: [
      { text: "Bayar sendiri-sendiri, lebih fair", type: "A" },
      { text: "Saling traktir, gantian", type: "B" },
      { text: "Patungan, bagi rata", type: "C" },
      { text: "Yang ngajak yang bayar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kesan terhadap warteg...",
    options: [
      { text: "Penyelamat hidup, murah dan enak", type: "A" },
      { text: "Comfort food, kayak masakan rumah", type: "B" },
      { text: "Praktis untuk makan cepat", type: "C" },
      { text: "Kuliner rakyat yang harus dilestarikan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Pecinta Warteg Sejati",
    emoji: "❤️",
    description: "Kamu adalah penggemar warteg sejati! Hafal semua lauk, kenal sama ibu warteg, dan punya ritual sendiri saat makan. Warteg bukan sekadar tempat makan, tapi bagian dari lifestyle-mu.",
    traits: ["Loyal", "Pecinta kuliner lokal", "Konsisten", "Tidak gengsi"],
    strengths: ["Hemat budget makan", "Selalu kenyang dan puas", "Mendukung UMKM"],
    weaknesses: ["Kadang kurang variasi", "Terlalu nyaman di zona aman"],
    tips: ["Sesekali coba warteg baru", "Explore lauk yang belum pernah dicoba"],
  },
  B: {
    type: "B",
    title: "Si Praktis",
    emoji: "⚡",
    description: "Kamu makan di warteg karena praktis dan efisien! Tidak ribet pilih-pilih, yang penting kenyang dan bisa lanjut aktivitas. Waktu adalah segalanya bagimu.",
    traits: ["Efisien", "Praktis", "Tidak ribet", "Fokus"],
    strengths: ["Hemat waktu", "Tidak overthinking", "Simple approach to life"],
    weaknesses: ["Kurang menikmati proses makan", "Bisa lebih mindful"],
    tips: ["Sesekali makan pelan-pelan", "Nikmati makanannya, bukan cuma kenyang"],
  },
  C: {
    type: "C",
    title: "Si Sosialis Warteg",
    emoji: "👋",
    description: "Kamu adalah penghuni warteg yang paling ramah! Suka ngobrol sama ibu warteg dan pengguna lain. Makan di warteg jadi ajang sosialisasi dan networking level grassroot.",
    traits: ["Ramah", "Sosial", "Friendly", "Humble"],
    strengths: ["Banyak kenalan", "Dapat info lauk terbaik", "Dikenal baik"],
    weaknesses: ["Kadang makan jadi lama", "Terlalu banyak ngobrol"],
    tips: ["Balance antara ngobrol dan makan", "Hormati waktu orang lain juga"],
  },
  D: {
    type: "D",
    title: "Si Fleksibel",
    emoji: "🔄",
    description: "Kamu adalah pengunjung warteg yang adaptif! Tidak terpaku pada satu gaya, fleksibel dengan situasi. Kalau lapar ya makan, kalau penuh ya cari tempat lain.",
    traits: ["Adaptif", "Fleksibel", "Easy going", "Tidak demanding"],
    strengths: ["Bisa makan dimana saja", "Tidak stress soal makanan", "Low maintenance"],
    weaknesses: ["Kurang punya preferensi kuat", "Bisa lebih decisive"],
    tips: ["Tentukan favorit supaya lebih mudah", "Eksplorasi untuk temukan yang terbaik"],
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
