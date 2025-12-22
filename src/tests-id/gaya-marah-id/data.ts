// Tes Gaya Marah Kamu
// Bagaimana kamu mengekspresikan kemarahan?

export const questions = [
  {
    id: 1,
    question: "Saat ada orang yang bikin kesal banget...",
    options: [
      { text: "Langsung konfrontasi dan ungkapkan", type: "A" },
      { text: "Diam tapi pasang muka jutek", type: "B" },
      { text: "Curhat ke orang lain dulu", type: "C" },
      { text: "Pendam dan lupakan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat marah, volume suaramu...",
    options: [
      { text: "Naik tinggi, emosi terbawa", type: "A" },
      { text: "Rendah tapi tajam dan dingin", type: "B" },
      { text: "Biasa aja tapi nada berubah", type: "C" },
      { text: "Malah jadi diam", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Setelah marah-marah, kamu biasanya...",
    options: [
      { text: "Cepat reda dan bisa lanjut seperti biasa", type: "A" },
      { text: "Cold treatment untuk beberapa waktu", type: "B" },
      { text: "Minta maaf kalau kelewatan", type: "C" },
      { text: "Merasa bersalah dan overthinking", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Hal yang paling bikin kamu marah...",
    options: [
      { text: "Ketidakadilan atau dibohongi", type: "A" },
      { text: "Tidak dihargai atau diabaikan", type: "B" },
      { text: "Orang yang tidak bertanggung jawab", type: "C" },
      { text: "Hal-hal kecil yang menumpuk", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Cara kamu meluapkan emosi...",
    options: [
      { text: "Verbal, ungkapkan langsung", type: "A" },
      { text: "Non-verbal, sikap berubah", type: "B" },
      { text: "Physical, olahraga atau bersih-bersih", type: "C" },
      { text: "Internal, proses sendiri", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat bertengkar dengan orang terdekat...",
    options: [
      { text: "Debat sampai ada yang menang", type: "A" },
      { text: "Silent treatment", type: "B" },
      { text: "Cari waktu untuk bicara baik-baik", type: "C" },
      { text: "Mengalah biar cepat selesai", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Orang-orang bilang kalau kamu marah...",
    options: [
      { text: "Serem dan intense", type: "A" },
      { text: "Dingin dan menusuk", type: "B" },
      { text: "Jarang marah, kalau marah pasti serius", type: "C" },
      { text: "Tidak kelihatan marah, tapi menjauh", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Cara kamu calm down...",
    options: [
      { text: "Butuh ventilasi dulu, baru bisa tenang", type: "A" },
      { text: "Perlu waktu sendiri", type: "B" },
      { text: "Ngobrol atau curhat", type: "C" },
      { text: "Distraksi dengan aktivitas lain", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau marah dengan atasan atau orang lebih senior...",
    options: [
      { text: "Tetap ungkapkan meski takut konsekuensi", type: "A" },
      { text: "Tahan di depan, kesal di belakang", type: "B" },
      { text: "Sampaikan dengan sangat hati-hati", type: "C" },
      { text: "Simpan sendiri, tidak berani", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Saat kamu tahu dirimu salah tapi tetap marah...",
    options: [
      { text: "Tetap defensive dulu, acknowledge later", type: "A" },
      { text: "Diam dan refleksi", type: "B" },
      { text: "Langsung akui dan minta maaf", type: "C" },
      { text: "Merasa sangat tidak nyaman", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Duration marah kamu biasanya...",
    options: [
      { text: "Intense tapi cepat hilang", type: "A" },
      { text: "Lama, bisa berhari-hari", type: "B" },
      { text: "Tergantung situasi", type: "C" },
      { text: "Sebentar, tidak suka berkonflik lama", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Menurutmu, marah itu...",
    options: [
      { text: "Natural dan perlu diungkapkan", type: "A" },
      { text: "Sign bahwa batas sudah dilanggar", type: "B" },
      { text: "Perlu dikontrol dan diarahkan", type: "C" },
      { text: "Tidak baik dan harus dihindari", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ekspresif Meledak",
    emoji: "🌋",
    description: "Kamu mengekspresikan kemarahan secara langsung dan vocal! Tidak suka memendam, lebih baik keluar daripada disimpan. Intense tapi biasanya cepat reda.",
    traits: ["Direct", "Vocal", "Intense", "Quick to cool"],
    strengths: ["Clear about feelings", "Tidak memendam", "Authentic"],
    weaknesses: ["Bisa menyakiti orang", "Regret words said", "Intimidating"],
    tips: ["Count to 10 before speaking", "Choose words carefully when angry"],
  },
  B: {
    type: "B",
    title: "Silent but Deadly",
    emoji: "🥶",
    description: "Kamu marah dengan cara yang dingin dan menusuk! Cold treatment dan silent treatment adalah senjatamu. Less noise, more impact.",
    traits: ["Cold", "Calculated", "Long-lasting", "Non-verbal"],
    strengths: ["Controlled exterior", "Tidak meledak", "Space for reflection"],
    weaknesses: ["Passive aggressive", "Unresolved issues", "Tension lingers"],
    tips: ["Communicate eventually", "Don't let things fester too long"],
  },
  C: {
    type: "C",
    title: "Controlled Expression",
    emoji: "⚖️",
    description: "Kamu bisa marah dengan cara yang relatif controlled! Tau cara express tanpa terlalu destruktif. Balance antara merasakan dan mengungkapkan.",
    traits: ["Balanced", "Communicative", "Mature", "Reasonable"],
    strengths: ["Healthy expression", "Good at resolving", "Respectful"],
    weaknesses: ["Sometimes suppress too much", "Can be inconsistent"],
    tips: ["Keep being mindful", "It's okay to be angry sometimes"],
  },
  D: {
    type: "D",
    title: "Pemendam",
    emoji: "🫥",
    description: "Kamu cenderung memendam kemarahan! Tidak suka konflik dan lebih pilih mengalah atau melupakan. Tapi hati-hati, kemarahan yang dipendam bisa meledak suatu saat.",
    traits: ["Avoidant", "Peace-keeper", "Suppressive", "Non-confrontational"],
    strengths: ["No dramatic scenes", "Keeps peace", "Thoughtful"],
    weaknesses: ["Bottled up emotions", "Resentment builds", "Potential explosion"],
    tips: ["Learn to express healthily", "Your feelings matter too", "Small releases prevent big explosions"],
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
