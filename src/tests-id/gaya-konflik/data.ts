// Gaya Mengatasi Konflik
// Tes ini mengungkap bagaimana kamu menghadapi dan menyelesaikan konflik!

export const questions = [
  {
    id: 1,
    question: "Saat ada konflik dengan teman, respons pertamamu?",
    options: [
      { text: "Hadapi langsung, selesaikan di tempat", type: "A" },
      { text: "Menghindar dulu, tunggu reda", type: "B" },
      { text: "Cari jalan tengah yang adil", type: "C" },
      { text: "Mengalah agar tidak berkepanjangan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Menurutmu, konflik itu...",
    options: [
      { text: "Harus dihadapi dan diselesaikan", type: "A" },
      { text: "Sebaiknya dihindari kalau bisa", type: "B" },
      { text: "Kesempatan untuk saling memahami", type: "C" },
      { text: "Mengganggu keharmonisan, tidak suka", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Dalam argumen, kamu cenderung...",
    options: [
      { text: "Mempertahankan pendapat sampai menang", type: "A" },
      { text: "Diam dan menghindar dari debat", type: "B" },
      { text: "Mencari solusi yang memuaskan semua", type: "C" },
      { text: "Mengalah meski tidak setuju", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat orang menyerangmu secara verbal, kamu...",
    options: [
      { text: "Balas dengan argumen yang kuat", type: "A" },
      { text: "Pergi dari situasi tersebut", type: "B" },
      { text: "Coba tenangkan suasana dan bicara baik-baik", type: "C" },
      { text: "Diam dan menerima saja", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dalam grup yang sedang konflik, posisimu?",
    options: [
      { text: "Voice out pendapatku dengan tegas", type: "A" },
      { text: "Netral, tidak mau ikut campur", type: "B" },
      { text: "Jadi mediator, cari win-win solution", type: "C" },
      { text: "Ikut mayoritas untuk menjaga harmoni", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Setelah konflik selesai, hubunganmu dengan lawan konflik?",
    options: [
      { text: "Bisa normal lagi setelah clear", type: "A" },
      { text: "Jaga jarak, trauma konflik", type: "B" },
      { text: "Malah lebih dekat karena saling memahami", type: "C" },
      { text: "Tetap baik, tapi agak canggung", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Apa yang paling penting dalam menyelesaikan konflik?",
    options: [
      { text: "Kebenaran dan keadilan", type: "A" },
      { text: "Ketenangan dan kedamaian", type: "B" },
      { text: "Kesepakatan bersama", type: "C" },
      { text: "Menjaga hubungan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat pendapatmu jelas benar tapi ditolak, kamu...",
    options: [
      { text: "Bela terus sampai diterima", type: "A" },
      { text: "Ya sudah, tidak mau ribut", type: "B" },
      { text: "Jelaskan dengan cara berbeda", type: "C" },
      { text: "Terima keputusan mayoritas", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bagaimana kamu mengekspresikan ketidaksetujuan?",
    options: [
      { text: "Langsung dan tegas", type: "A" },
      { text: "Tidak mengekspresikan, simpan sendiri", type: "B" },
      { text: "Diplomatis tapi tetap jelas", type: "C" },
      { text: "Halus banget, kadang tidak tersampaikan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat ada masalah dengan atasan/senior, kamu...",
    options: [
      { text: "Tetap speak up dengan sopan tapi tegas", type: "A" },
      { text: "Diam saja, tidak berani konfrontasi", type: "B" },
      { text: "Cari waktu yang tepat untuk diskusi", type: "C" },
      { text: "Terima saja, mereka lebih berpengalaman", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Tingkat kenyamananmu dengan konflik?",
    options: [
      { text: "Nyaman, konflik itu normal", type: "A" },
      { text: "Tidak nyaman, berusaha menghindari", type: "B" },
      { text: "Tergantung bagaimana dikelola", type: "C" },
      { text: "Sangat tidak nyaman, bikin stress", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Setelah konflik, hal pertama yang kamu lakukan?",
    options: [
      { text: "Refleksi apakah aku benar", type: "A" },
      { text: "Lega karena sudah selesai", type: "B" },
      { text: "Pastikan semua pihak okay", type: "C" },
      { text: "Khawatir hubungan rusak", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Fighter/Kompetitor",
    emoji: "⚔️",
    description: "Kamu menghadapi konflik dengan tegas dan langsung! Tidak takut konfrontasi dan berani mempertahankan pendapat. Kamu percaya kebenaran harus ditegakkan.",
    traits: ["Tegas", "Berani", "Direct", "Kompetitif"],
    strengths: ["Tidak memendam", "Jelas dengan posisi", "Bisa defend diri"],
    weaknesses: ["Bisa menyakiti orang lain", "Kadang terlalu keras", "Win-lose mindset"],
    tips: ["Belajar pick your battles", "Tidak semua harus dimenangkan", "Empati dalam berkonflik"],
  },
  B: {
    type: "B",
    title: "Avoider/Penghindar",
    emoji: "🕊️",
    description: "Kamu cenderung menghindari konflik sebisa mungkin. Kedamaian dan ketenangan lebih penting dari memenangkan argumen. Tapi kadang penghindaran bisa memperburuk situasi.",
    traits: ["Peace-loving", "Non-confrontational", "Passive", "Menghindari"],
    strengths: ["Tidak escalate situasi", "Menjaga kedamaian", "Tenang"],
    weaknesses: ["Masalah tidak terselesaikan", "Memendam", "Bisa dimanfaatkan"],
    tips: ["Belajar assertiveness", "Ada konflik yang perlu dihadapi", "Express feelings dengan sehat"],
  },
  C: {
    type: "C",
    title: "Collaborator/Mediator",
    emoji: "🤝",
    description: "Kamu adalah master negosiasi! Selalu mencari solusi yang memuaskan semua pihak. Kamu percaya konflik bisa menjadi kesempatan untuk saling memahami.",
    traits: ["Diplomatis", "Problem-solver", "Fair", "Kolaboratif"],
    strengths: ["Win-win mindset", "Bisa jadi mediator", "Empati tinggi"],
    weaknesses: ["Tidak semua bisa dikompromikan", "Kadang butuh waktu lama"],
    tips: ["Kadang perlu tegas juga", "Tidak semua orang mau berkolaborasi"],
  },
  D: {
    type: "D",
    title: "Accommodator/Pengalah",
    emoji: "💝",
    description: "Kamu cenderung mengalah demi menjaga hubungan dan harmoni. Kebutuhan orang lain sering lebih diprioritaskan dari kebutuhanmu sendiri.",
    traits: ["Selfless", "Harmoni-oriented", "Mengalah", "People-pleaser"],
    strengths: ["Menjaga hubungan", "Tidak egois", "Mudah adaptasi"],
    weaknesses: ["Kebutuhan sendiri terabaikan", "Bisa dimanfaatkan", "Memendam resentment"],
    tips: ["Kebutuhanmu juga valid", "Belajar say no", "Self-advocacy penting"],
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
