// Tes Red Flag Detector dalam Hubungan
// Seberapa baik kamu mendeteksi tanda bahaya dalam hubungan?

export const questions = [
  {
    id: 1,
    question: "Pasangan mengecek HP kamu tanpa izin...",
    options: [
      { text: "Langsung red flag, tidak bisa diterima", type: "A" },
      { text: "Uncomfortable dan akan bicara serius", type: "B" },
      { text: "Tergantung, kalau tidak ada yang disembunyikan ya okay", type: "C" },
      { text: "Tidak masalah, tanda sayang kan?", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pasangan sering membandingkan kamu dengan mantannya...",
    options: [
      { text: "Immediate red flag, tidak respectful", type: "A" },
      { text: "Keberatan dan akan tegur", type: "B" },
      { text: "Annoying tapi bisa diabaikan", type: "C" },
      { text: "Jadi motivasi untuk lebih baik", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pasangan melarang kamu hangout dengan teman tertentu...",
    options: [
      { text: "Controlling behavior, red flag besar", type: "A" },
      { text: "Discuss dulu alasannya, tapi likely red flag", type: "B" },
      { text: "Mungkin dia punya alasan valid", type: "C" },
      { text: "Ikuti saja, untuk menjaga hubungan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat bertengkar, pasangan silent treatment berhari-hari...",
    options: [
      { text: "Toxic communication, perlu diaddress", type: "A" },
      { text: "Tidak sehat, akan push untuk bicara", type: "B" },
      { text: "Beri waktu, everyone needs space", type: "C" },
      { text: "Tunggu sampai dia siap bicara", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Pasangan memiliki mood swings extreme yang unpredictable...",
    options: [
      { text: "Red flag, need stability dalam hubungan", type: "A" },
      { text: "Concerning, suggest professional help", type: "B" },
      { text: "Try to understand dan support", type: "C" },
      { text: "Semua orang punya bad days", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Pasangan meremehkan pencapaian atau impian kamu...",
    options: [
      { text: "Tidak supportive, major red flag", type: "A" },
      { text: "Menyakitkan dan akan confront", type: "B" },
      { text: "Mungkin dia tidak bermaksud buruk", type: "C" },
      { text: "Mungkin dia lebih realistis", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pasangan berbohong tentang hal kecil...",
    options: [
      { text: "Kalau kecil bisa bohong, besar juga bisa", type: "A" },
      { text: "Concerning pattern, perlu dibicarakan", type: "B" },
      { text: "Mungkin tidak ingin bikin masalah", type: "C" },
      { text: "Hal kecil tidak masalah", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Pasangan tidak pernah mau mengakui kesalahan...",
    options: [
      { text: "Ego issue, sulit untuk hubungan sehat", type: "A" },
      { text: "Frustrating dan perlu diaddress", type: "B" },
      { text: "Try lebih sabar dan approach berbeda", type: "C" },
      { text: "Semua orang punya cara berbeda", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Pasangan mengkritik penampilan kamu di depan orang lain...",
    options: [
      { text: "Disrespectful, red flag besar", type: "A" },
      { text: "Menyakitkan, akan bicara private", type: "B" },
      { text: "Maybe itu candaan yang salah tempat", type: "C" },
      { text: "Mungkin untuk kebaikan saya", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pasangan mengeluarkan kata-kata kasar saat marah...",
    options: [
      { text: "Verbal abuse, tidak bisa ditoleransi", type: "A" },
      { text: "Sangat tidak sehat, need boundary", type: "B" },
      { text: "Orang saat marah memang kadang begitu", type: "C" },
      { text: "Setelah reda pasti minta maaf", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Pasangan selalu mengambil keputusan tanpa diskusi...",
    options: [
      { text: "Tidak menghargai partnership, red flag", type: "A" },
      { text: "Perlu establish better communication", type: "B" },
      { text: "Mungkin dia lebih decisive", type: "C" },
      { text: "Biar dia yang atur, lebih simpel", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Secara umum, kemampuanmu mendeteksi red flag...",
    options: [
      { text: "Sangat peka, langsung notice dan address", type: "A" },
      { text: "Cukup aware, evaluasi dulu baru act", type: "B" },
      { text: "Kadang miss atau rationalize", type: "C" },
      { text: "Sering tidak notice atau ignore", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Red Flag Detector Expert",
    emoji: "🚩",
    description: "Kamu sangat peka terhadap red flags! Strong boundaries dan tidak akan toleransi toxic behavior. Protect yourself well in relationships.",
    traits: ["Vigilant", "Strong boundaries", "Self-protective", "Aware"],
    strengths: ["Won't tolerate abuse", "Healthy standards", "Self-respect"],
    weaknesses: ["Might be too quick to judge", "Could miss growth opportunities"],
    tips: ["Give some benefit of doubt", "People can change with effort"],
  },
  B: {
    type: "B",
    title: "Balanced Red Flag Awareness",
    emoji: "⚠️",
    description: "Kamu memiliki awareness yang sehat tentang red flags! Notice tapi juga evaluate context. Good balance antara caution dan understanding.",
    traits: ["Balanced", "Evaluative", "Reasonable", "Communicative"],
    strengths: ["Fair assessment", "Open to discussion", "Healthy boundaries"],
    weaknesses: ["Sometimes needs more firm stance"],
    tips: ["Trust your gut more", "Some patterns don't change"],
  },
  C: {
    type: "C",
    title: "Tends to Rationalize",
    emoji: "🤔",
    description: "Kamu cenderung rationalize atau excuse red flag behaviors. Benefit of doubt tinggi tapi bisa miss serious warning signs. Be more careful.",
    traits: ["Rationalizing", "Forgiving", "Understanding", "Naive"],
    strengths: ["Not judgmental", "Patient"],
    weaknesses: ["Vulnerable to toxic relationships", "Might stay too long"],
    tips: ["Listen to friends' concerns", "Patterns are patterns", "You deserve better"],
  },
  D: {
    type: "D",
    title: "Red Flag Blind",
    emoji: "🙈",
    description: "Kamu struggle untuk recognize red flags! Cenderung normalize toxic behaviors atau ignore warning signs. This puts you at risk.",
    traits: ["Oblivious", "Low boundaries", "At risk", "Accommodating"],
    strengths: ["Very forgiving"],
    weaknesses: ["High vulnerability", "Toxic relationship risk", "Low self-protection"],
    tips: ["Learn about healthy relationships", "Your needs matter", "Seek support", "Boundaries are healthy"],
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
