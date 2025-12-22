// Transportasi yang Menggambarkanmu
// Kendaraan mana yang paling mencerminkan kepribadianmu?

export const questions = [
  {
    id: 1,
    question: "Cara kamu menjalani hidup...",
    options: [
      { text: "Cepat, efisien, ga suka buang waktu", type: "A" },
      { text: "Santai, nikmati perjalanan", type: "B" },
      { text: "Fleksibel, sesuai situasi dan kondisi", type: "C" },
      { text: "Praktis, yang penting sampai tujuan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Dalam kerja tim, kamu biasanya...",
    options: [
      { text: "Pemimpin yang membawa tim maju", type: "A" },
      { text: "Anggota yang supportive dan reliable", type: "B" },
      { text: "Fleksibel, bisa adapt peran apapun", type: "C" },
      { text: "Solo player yang efektif", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat menghadapi masalah...",
    options: [
      { text: "Terobos langsung, cari solusi cepat", type: "A" },
      { text: "Analisis pelan-pelan, cari cara aman", type: "B" },
      { text: "Cari alternatif, ada banyak jalan", type: "C" },
      { text: "Fokus ke solusi yang paling praktis", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Gaya socialmu...",
    options: [
      { text: "Punya circle kecil tapi eksklusif", type: "A" },
      { text: "Banyak teman, ramah ke semua orang", type: "B" },
      { text: "Fleksibel, bisa gaul sama siapa aja", type: "C" },
      { text: "Independen, ga terlalu butuh banyak teman", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Preferensi kenyamanan...",
    options: [
      { text: "Premium, yang terbaik yang dipilih", type: "A" },
      { text: "Standar tapi reliable", type: "B" },
      { text: "Tergantung budget dan situasi", type: "C" },
      { text: "Yang fungsional, ga perlu mewah", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Cara kamu menggunakan waktu...",
    options: [
      { text: "Terstruktur dan terjadwal", type: "A" },
      { text: "Mengalir, ga terlalu strict", type: "B" },
      { text: "Fleksibel sesuai kebutuhan", type: "C" },
      { text: "Efisien, minimize waste time", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Attitude terhadap aturan...",
    options: [
      { text: "Aturan penting tapi harus efisien", type: "A" },
      { text: "Ikuti aturan demi keamanan bersama", type: "B" },
      { text: "Fleksibel, situasional", type: "C" },
      { text: "Yang penting hasil, cara bisa kreatif", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat hujan deras dan harus pergi...",
    options: [
      { text: "Tetap berangkat, weather ga halangan", type: "A" },
      { text: "Tunggu reda dulu, safety first", type: "B" },
      { text: "Cari alternatif, pasti ada cara", type: "C" },
      { text: "Selesaikan dengan cara paling praktis", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ambisi dalam karir...",
    options: [
      { text: "Mau ke top, posisi tinggi", type: "A" },
      { text: "Stabil dan aman sudah cukup", type: "B" },
      { text: "Fleksibel, yang penting berkembang", type: "C" },
      { text: "Efektif dan praktis, ga perlu glamor", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cara kamu belajar hal baru...",
    options: [
      { text: "Intensif, fokus sampai mahir", type: "A" },
      { text: "Bertahap, step by step", type: "B" },
      { text: "Coba berbagai cara, lihat mana cocok", type: "C" },
      { text: "Langsung praktek, learning by doing", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Saat stuck di kemacetan...",
    options: [
      { text: "Frustrated, waktu terbuang", type: "A" },
      { text: "Sabar, bagian dari perjalanan", type: "B" },
      { text: "Cari jalan alternatif", type: "C" },
      { text: "Manfaatkan waktu dengan produktif", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Investasimu untuk mobilitas...",
    options: [
      { text: "Worth it kalau premium dan cepat", type: "A" },
      { text: "Moderate, yang penting nyaman", type: "B" },
      { text: "Flexible, sesuai kebutuhan saat itu", type: "C" },
      { text: "Minimal, yang penting sampai", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mobil Premium",
    emoji: "🚗",
    description: "Kamu seperti mobil premium - elegan, powerful, dan tidak mau kompromi dengan kualitas. Kamu suka kecepatan dan efisiensi, tapi tetap dengan style. Leadership dan ambisi adalah DNA-mu!",
    traits: ["Ambisius", "Efisien", "Premium", "Leader"],
    strengths: ["Goal-oriented", "High achiever", "Punya style"],
    weaknesses: ["Bisa sombong", "Impatient", "High maintenance"],
    tips: ["Sesekali slow down", "Appreciate perjalanan, bukan cuma tujuan"],
  },
  B: {
    type: "B",
    title: "Angkot/Bis",
    emoji: "🚌",
    description: "Kamu seperti angkot atau bis - reliable, ramah, dan selalu ada untuk banyak orang. Kamu tipe orang yang sabar dan inklusif. Perjalanan adalah tentang kebersamaan!",
    traits: ["Ramah", "Reliable", "Sabar", "Inklusif"],
    strengths: ["Team player hebat", "Banyak teman", "Down to earth"],
    weaknesses: ["Kadang terlalu lambat", "Bisa terlalu accommodate orang lain"],
    tips: ["Sesekali prioritaskan diri sendiri", "Kecepatan juga perlu kadang"],
  },
  C: {
    type: "C",
    title: "Ojek Online",
    emoji: "🛵",
    description: "Kamu seperti ojek online - fleksibel, adaptif, dan selalu ada solusi. Kamu bisa navigate situasi apapun dan punya banyak alternatif. Problem solver sejati!",
    traits: ["Fleksibel", "Adaptif", "Resourceful", "Problem solver"],
    strengths: ["Bisa handle situasi apapun", "Kreatif", "Multitasker"],
    weaknesses: ["Bisa tidak konsisten", "Jack of all trades"],
    tips: ["Kadang konsistensi penting", "Fokus pada expertise tertentu"],
  },
  D: {
    type: "D",
    title: "Sepeda",
    emoji: "🚲",
    description: "Kamu seperti sepeda - praktis, efisien, dan tidak bergantung pada siapapun. Kamu tipe independen yang mengandalkan diri sendiri. Simple tapi effective!",
    traits: ["Independen", "Praktis", "Mandiri", "Efisien"],
    strengths: ["Self-sufficient", "Hemat", "Fokus pada essential"],
    weaknesses: ["Bisa terlalu isolated", "Menolak bantuan"],
    tips: ["Sesekali terima bantuan", "Kolaborasi bisa lebih powerful"],
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
