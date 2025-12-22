// Gaya Curhat Kamu
// Tes ini mengungkap bagaimana kamu berbagi dan memproses masalah!

export const questions = [
  {
    id: 1,
    question: "Saat punya masalah, hal pertama yang kamu lakukan?",
    options: [
      { text: "Langsung hubungi teman/keluarga untuk curhat", type: "A" },
      { text: "Dipendam dulu, proses sendiri", type: "B" },
      { text: "Tulis di jurnal atau notes HP", type: "C" },
      { text: "Distract diri, lakukan hal lain dulu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ke siapa biasanya kamu curhat?",
    options: [
      { text: "Sahabat terdekat yang udah tau semuanya", type: "A" },
      { text: "Berbeda-beda tergantung masalah", type: "B" },
      { text: "Keluarga, terutama ibu/saudara", type: "C" },
      { text: "Jarang curhat ke siapapun", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat curhat, kamu biasanya...",
    options: [
      { text: "Cerita detail dari A-Z", type: "A" },
      { text: "Kasih summary, poin pentingnya aja", type: "B" },
      { text: "Sambil nangis, emosi meluap", type: "C" },
      { text: "Minta saran langsung, gak banyak cerita", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ekspektasimu saat curhat?",
    options: [
      { text: "Didengarkan dan divalidasi perasaannya", type: "A" },
      { text: "Dapat solusi atau saran praktis", type: "B" },
      { text: "Dapat pelukan dan support", type: "C" },
      { text: "Just vent, gak perlu respons banyak", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kalau teman kasih saran yang gak sesuai harapan...",
    options: [
      { text: "Tetap appreciate, tapi ikuti instink sendiri", type: "A" },
      { text: "Pertimbangkan dengan serius", type: "B" },
      { text: "Agak kecewa, merasa gak dipahami", type: "C" },
      { text: "Gak masalah, emang gak expect saran", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Media curhat favoritmu?",
    options: [
      { text: "Ketemu langsung, tatap muka", type: "A" },
      { text: "Voice note atau telepon", type: "B" },
      { text: "Chat panjang via WhatsApp", type: "C" },
      { text: "Tulis di sosmed/anonim/jurnal", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Seberapa sering kamu curhat ke orang lain?",
    options: [
      { text: "Sering, hampir setiap masalah diceritakan", type: "A" },
      { text: "Kadang-kadang, masalah besar aja", type: "B" },
      { text: "Jarang, lebih suka solve sendiri", type: "C" },
      { text: "Hampir gak pernah", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Setelah curhat, perasaanmu biasanya?",
    options: [
      { text: "Lega banget, beban terangkat", type: "A" },
      { text: "Lumayan membantu", type: "B" },
      { text: "Tergantung respons lawan bicara", type: "C" },
      { text: "Kadang malah nyesel cerita", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat jadi pendengar curhat orang lain, kamu...",
    options: [
      { text: "Dengerin dengan empati, validasi perasaannya", type: "A" },
      { text: "Kasih saran dan solusi praktis", type: "B" },
      { text: "Support dan semangatin", type: "C" },
      { text: "Agak awkward, gak tau harus ngapain", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Masalah apa yang biasanya kamu ceritakan?",
    options: [
      { text: "Hampir semua, dari kecil sampai besar", type: "A" },
      { text: "Yang besar dan butuh perspektif lain", type: "B" },
      { text: "Yang emosional dan butuh support", type: "C" },
      { text: "Jarang cerita masalah pribadi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Reaksimu kalau rahasia curhatmu tersebar?",
    options: [
      { text: "Sangat marah dan trust issues naik", type: "A" },
      { text: "Kecewa tapi belajar lebih selektif", type: "B" },
      { text: "Sedih dan merasa dikhianati", type: "C" },
      { text: "Makanya jarang curhat, takut begini", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Menurutmu, curhat itu...",
    options: [
      { text: "Penting banget buat kesehatan mental", type: "A" },
      { text: "Kadang perlu, kadang bisa solve sendiri", type: "B" },
      { text: "Cara connect sama orang lain", type: "C" },
      { text: "Tidak selalu membantu", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Open Book",
    emoji: "📖",
    description: "Kamu adalah curhat queen/king! Berbagi adalah cara kamu memproses emosi dan connect dengan orang lain. Kamu percaya dengan kekuatan vulnerability.",
    traits: ["Terbuka", "Ekspresif", "Trusting", "Vulnerable"],
    strengths: ["Support system kuat", "Tidak memendam", "Koneksi dalam dengan orang"],
    weaknesses: ["Bisa oversharing", "Rentan kalau kepercayaan dikhianati"],
    tips: ["Pilih dengan bijak siapa yang diceritakan", "Tidak semua perlu diceritakan"],
  },
  B: {
    type: "B",
    title: "Selective Sharer",
    emoji: "🎯",
    description: "Kamu tau kapan dan apa yang perlu diceritakan. Curhat dengan tujuan jelas dan ke orang yang tepat. Balance antara mandiri dan minta bantuan.",
    traits: ["Selektif", "Purposeful", "Balanced", "Strategic"],
    strengths: ["Tau boundaries", "Efektif dalam mencari bantuan", "Mandiri tapi tidak isolated"],
    weaknesses: ["Kadang bisa lebih terbuka", "Bisa terkesan menjaga jarak"],
    tips: ["Sesekali curhat tanpa ekspektasi hasil", "Vulnerability juga bonding"],
  },
  C: {
    type: "C",
    title: "Emotional Processor",
    emoji: "💝",
    description: "Curhat adalah cara kamu melepas emosi! Kamu butuh didengar dan divalidasi. Koneksi emosional dengan pendengar sangat penting untukmu.",
    traits: ["Emosional", "Butuh validasi", "Genuine", "Heart-centered"],
    strengths: ["Koneksi emosional kuat", "Autentik dalam berbagi", "Deep relationships"],
    weaknesses: ["Bergantung pada respons orang lain", "Bisa overwhelming bagi pendengar"],
    tips: ["Belajar juga self-validate", "Journaling bisa jadi outlet tambahan"],
  },
  D: {
    type: "D",
    title: "Self-Solver",
    emoji: "🔐",
    description: "Kamu lebih suka menyelesaikan masalah sendiri. Curhat bukan preferensi utamamu. Kamu mandiri dan punya cara sendiri untuk memproses.",
    traits: ["Mandiri", "Private", "Self-sufficient", "Internal processor"],
    strengths: ["Tidak bergantung orang lain", "Strong sense of self", "Bisa diandalkan"],
    weaknesses: ["Bisa merasa isolated", "Memendam bisa tidak sehat"],
    tips: ["Berbagi kadang meringankan beban", "Trust seseorang cukup satu dua"],
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
