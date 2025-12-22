// Kamu Akan Jadi Mertua Seperti Apa?
// Tes ini mengungkap tipe mertua yang akan kamu jadi di masa depan!

export const questions = [
  {
    id: 1,
    question: "Anak kamu bawa calon pacar/menantu ke rumah, reaksimu?",
    options: [
      { text: "Introgasi! Perlu tau background-nya", type: "A" },
      { text: "Welcome dengan hangat, kenal pelan-pelan", type: "B" },
      { text: "Biasa aja, biar anak yang nilai sendiri", type: "C" },
      { text: "Excited! Ajak ngobrol dan akrab-akraban", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kriteria menantu ideal menurutmu?",
    options: [
      { text: "Harus punya karir bagus dan mapan", type: "A" },
      { text: "Yang penting baik hati dan sayang anakku", type: "B" },
      { text: "Terserah anak, yang penting dia bahagia", type: "C" },
      { text: "Yang bisa jadi bagian keluarga dan seru", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Setelah anak menikah, ekspektasimu soal hubungan dengan menantu?",
    options: [
      { text: "Harus tetap hormati dan ikuti aturan keluarga", type: "A" },
      { text: "Dekat seperti anak sendiri", type: "B" },
      { text: "Jaga jarak yang sehat, beri privasi", type: "C" },
      { text: "Jadi teman dan confidant juga", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tentang urusan rumah tangga anak, kamu...",
    options: [
      { text: "Sering kasih nasihat dan arahan", type: "A" },
      { text: "Bantu kalau diminta, tidak ikut campur", type: "B" },
      { text: "Totally hands-off, bukan urusanku", type: "C" },
      { text: "Support dari belakang, ada kalau dibutuhkan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Anak dan menantu konflik, posisimu?",
    options: [
      { text: "Bela anak, dia tetap darah dagingku", type: "A" },
      { text: "Dengerin dua pihak, coba mediasi", type: "B" },
      { text: "Tidak ikut campur urusan mereka", type: "C" },
      { text: "Coba cairkan dengan humor dan kegiatan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Frekuensi ideal komunikasi dengan anak setelah menikah?",
    options: [
      { text: "Setiap hari, harus selalu tau kabar", type: "A" },
      { text: "Beberapa kali seminggu, cukup", type: "B" },
      { text: "Sesekali saja, mereka punya hidup sendiri", type: "C" },
      { text: "Sering tapi santai, kayak teman", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tentang punya cucu, ekspektasimu?",
    options: [
      { text: "Sangat berharap dan sering tanya", type: "A" },
      { text: "Senang kalau ada, tapi tidak pressure", type: "B" },
      { text: "Terserah mereka, bukan urusanku", type: "C" },
      { text: "Excited! Siap jadi kakek/nenek seru", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Menantu punya kebiasaan yang beda dari keluargamu, kamu...",
    options: [
      { text: "Koreksi dan arahkan sesuai tradisi keluarga", type: "A" },
      { text: "Terima, setiap orang beda backgroundnya", type: "B" },
      { text: "Bukan urusanku selama tidak ganggu", type: "C" },
      { text: "Anggap itu warna baru yang menarik", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Liburan atau hari raya, kamu berharap anak dan menantu...",
    options: [
      { text: "Wajib kumpul di rumah orangtua", type: "A" },
      { text: "Bergantian dengan keluarga menantu", type: "B" },
      { text: "Terserah mereka mau kemana", type: "C" },
      { text: "Liburan bareng, makin ramai makin seru", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Memberi nasihat ke anak/menantu, caramu...",
    options: [
      { text: "Langsung dan terus terang, demi kebaikan", type: "A" },
      { text: "Halus dan hanya kalau diminta", type: "B" },
      { text: "Hampir tidak pernah, biar mereka belajar sendiri", type: "C" },
      { text: "Share pengalaman, bukan menggurui", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Support finansial ke anak setelah menikah?",
    options: [
      { text: "Siap bantu kapanpun, apapun kebutuhannya", type: "A" },
      { text: "Bantu kalau emergency atau butuh", type: "B" },
      { text: "Mereka harus mandiri finansial", type: "C" },
      { text: "Kasih hadiah/treat sesekali, bukan kewajiban", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mertua ideal menurutmu adalah...",
    options: [
      { text: "Yang involved dan selalu ada untuk keluarga", type: "A" },
      { text: "Yang supportive tapi respect boundaries", type: "B" },
      { text: "Yang memberi space dan tidak ikut campur", type: "C" },
      { text: "Yang fun dan jadi bagian seru dari keluarga", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mertua Protektif",
    emoji: "🛡️",
    description: "Kamu akan jadi mertua yang sangat involved dan protective! Selalu ingin tau, selalu siap membantu, dan punya standar tinggi untuk kebahagiaan anakmu.",
    traits: ["Protective", "Involved", "High standards", "Caring"],
    strengths: ["Selalu support", "Generous", "Family-oriented"],
    weaknesses: ["Bisa controlling", "Sulit memberi space", "Ikut campur"],
    tips: ["Belajar let go", "Boundaries itu sehat", "Trust anak sudah dewasa"],
  },
  B: {
    type: "B",
    title: "Mertua Bijaksana",
    emoji: "🤗",
    description: "Kamu akan jadi mertua yang hangat tapi bijaksana! Tau kapan hadir, kapan memberi space. Balance antara care dan respect untuk privasi.",
    traits: ["Wise", "Warm", "Respectful", "Balanced"],
    strengths: ["Healthy relationship", "Trusted advisor", "Good boundaries"],
    weaknesses: ["Kadang terlalu reserved", "Bisa terkesan distant"],
    tips: ["Perfect balance! Maintain ini", "Tetap express love secukupnya"],
  },
  C: {
    type: "C",
    title: "Mertua Santai",
    emoji: "🏝️",
    description: "Kamu akan jadi mertua yang very hands-off. Beri full freedom dan almost never interfere. Kamu percaya anak sudah dewasa dan bisa handle sendiri.",
    traits: ["Hands-off", "Relaxed", "Non-interfering", "Trusting"],
    strengths: ["No drama", "Respect independence", "Low maintenance"],
    weaknesses: ["Bisa terkesan tidak peduli", "Miss bonding moments"],
    tips: ["Sesekali more involved juga baik", "Mereka juga butuh presence-mu"],
  },
  D: {
    type: "D",
    title: "Mertua Seru",
    emoji: "🎉",
    description: "Kamu akan jadi mertua yang fun dan jadi bagian seru dari keluarga besar! Lebih seperti teman daripada mertua tradisional.",
    traits: ["Fun", "Friendly", "Young at heart", "Inclusive"],
    strengths: ["Loved by menantu", "Great family vibes", "Memorable moments"],
    weaknesses: ["Kadang kurang serious", "Bisa terlalu casual"],
    tips: ["Balance fun dengan wisdom", "Ada kalanya perlu jadi 'orangtua'"],
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
