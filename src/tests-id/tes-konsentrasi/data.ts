export const questions = [
  {
    id: 1,
    question: "Hitung berapa kali huruf 'A' muncul: ABRAKADABRA",
    options: [
      { text: "5 kali", type: "A" },
      { text: "4 kali", type: "B" },
      { text: "6 kali", type: "C" },
      { text: "3 kali", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Dalam deret 7, 14, 21, 28, 35, 42, 49, angka mana yang TIDAK kelipatan 7?",
    options: [
      { text: "Semua adalah kelipatan 7", type: "A" },
      { text: "49", type: "B" },
      { text: "35", type: "C" },
      { text: "42", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Baca cepat: 'Ibu membeli mangga, apel, jeruk, pisang di pasar.' Buah apa yang TIDAK disebutkan?",
    options: [
      { text: "Anggur", type: "A" },
      { text: "Mangga", type: "B" },
      { text: "Jeruk", type: "C" },
      { text: "Pisang", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Hitung simbol berbeda: ★★●★●★★●●★★★●★. Berapa jumlah ●?",
    options: [
      { text: "5", type: "A" },
      { text: "4", type: "B" },
      { text: "6", type: "C" },
      { text: "7", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dalam kata KONSENTRASI, huruf apa yang muncul 2 kali?",
    options: [
      { text: "N dan S", type: "A" },
      { text: "K dan O", type: "B" },
      { text: "E dan A", type: "C" },
      { text: "R dan I", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Perhatikan: 12, 23, 34, 45, 56. Berapa jumlah digit satuan semua angka?",
    options: [
      { text: "20 (2+3+4+5+6)", type: "A" },
      { text: "15", type: "B" },
      { text: "25", type: "C" },
      { text: "18", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Baca: 'Andi pergi ke sekolah jam 7, pulang jam 2, les jam 4.' Berapa jam Andi tidak di rumah dari pergi sekolah sampai selesai les?",
    options: [
      { text: "9 jam (jam 7 sampai jam 4 selesai les)", type: "A" },
      { text: "7 jam", type: "B" },
      { text: "5 jam", type: "C" },
      { text: "8 jam", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Hitung cepat: 3 + 5 + 7 + 9 + 11 = ?",
    options: [
      { text: "35", type: "A" },
      { text: "30", type: "B" },
      { text: "33", type: "C" },
      { text: "37", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Dalam barisan MMNNOOPPQQRRSS, ada berapa pasang huruf yang sama?",
    options: [
      { text: "7 pasang", type: "A" },
      { text: "6 pasang", type: "B" },
      { text: "8 pasang", type: "C" },
      { text: "5 pasang", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Perhatikan pola: 2, 4, 8, 16, 32, ?. Angka selanjutnya adalah?",
    options: [
      { text: "64", type: "A" },
      { text: "48", type: "B" },
      { text: "40", type: "C" },
      { text: "36", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Dalam kalimat 'Dia tidak pernah tidak datang', apakah dia datang?",
    options: [
      { text: "Ya, dia selalu datang", type: "A" },
      { text: "Tidak, dia tidak datang", type: "B" },
      { text: "Kadang-kadang", type: "C" },
      { text: "Tidak bisa ditentukan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Temukan yang berbeda: 🔴🔴🔴🔴🔴🟠🔴🔴🔴🔴. Simbol berbeda ada di posisi ke-?",
    options: [
      { text: "6", type: "A" },
      { text: "5", type: "B" },
      { text: "7", type: "C" },
      { text: "4", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Fokus Laser",
    emoji: "🎯",
    description: "Incredible! Konsentrasimu luar biasa! Kamu bisa fokus pada detail kecil tanpa kehilangan gambaran besar. Kemampuan ini sangat berharga dalam banyak bidang profesional!",
    traits: ["Fokus tinggi", "Detail-oriented", "Teliti", "Tidak mudah terdistraksi"],
    strengths: ["Bisa bekerja dengan presisi tinggi", "Menangkap detail yang terlewat orang lain", "Produktivitas tinggi saat fokus"],
    weaknesses: ["Mungkin terlalu fokus sampai lupa hal lain"],
    tips: ["Gunakan teknik Pomodoro untuk menjaga fokus", "Istirahat teratur untuk optimal performance", "Bagikan tips fokusmu dengan tim"],
  },
  B: {
    type: "B",
    title: "Konsentrasi Baik",
    emoji: "👁️",
    description: "Bagus! Konsentrasimu cukup baik. Kamu bisa fokus pada sebagian besar tugas dengan efektif. Dengan teknik yang tepat, kamu bisa meningkatkan kapasitas ini lebih lanjut.",
    traits: ["Cukup fokus", "Berkembang", "Teliti", "Konsisten"],
    strengths: ["Bisa menangani tugas standar dengan baik", "Fondasi konsentrasi yang solid", "Berpotensi meningkat"],
    weaknesses: ["Kadang terdistraksi di tugas panjang"],
    tips: ["Kurangi distraksi saat kerja", "Break tugas besar jadi bagian kecil", "Latih dengan mindfulness"],
  },
  C: {
    type: "C",
    title: "Belajar Fokus",
    emoji: "📈",
    description: "Konsentrasimu masih dalam pengembangan. Di era digital yang penuh distraksi, ini sangat normal! Dengan latihan yang tepat, kamu bisa meningkatkan fokusmu.",
    traits: ["Perlu latihan", "Berpotensi", "Bisa berkembang"],
    strengths: ["Potensi untuk meningkat", "Fleksibel"],
    weaknesses: ["Mudah terdistraksi", "Kurang teliti di detail"],
    tips: ["Coba meditasi atau mindfulness", "Matikan notifikasi saat fokus", "Latih dengan membaca buku"],
  },
  D: {
    type: "D",
    title: "Perlu Latihan Fokus",
    emoji: "🌱",
    description: "Konsentrasi mungkin challenging untukmu di era digital ini. Tapi tidak masalah - fokus adalah skill yang bisa dilatih! Mulai dengan latihan kecil dan tingkatkan secara bertahap.",
    traits: ["Perlu fondasi", "Mudah terdistraksi", "Berpotensi"],
    strengths: ["Mungkin multi-tasking atau quick-thinking"],
    weaknesses: ["Fokus perlu dilatih"],
    tips: ["Mulai dari fokus 5 menit, tingkatkan perlahan", "Gunakan apps focus seperti Forest", "Ciptakan environment minimal distraksi"],
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
