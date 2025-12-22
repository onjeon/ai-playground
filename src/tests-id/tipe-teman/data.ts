// Tipe Teman Kamu dalam Persahabatan
// Tes ini mengungkap peranmu dalam pertemanan!

export const questions = [
  {
    id: 1,
    question: "Dalam grup pertemanan, kamu biasanya...",
    options: [
      { text: "Yang ngumpulin dan organize hangout", type: "A" },
      { text: "Yang jadi tempat curhat semua orang", type: "B" },
      { text: "Yang bikin suasana seru dan ketawa", type: "C" },
      { text: "Yang kalem dan hadir saat dibutuhkan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat teman punya masalah, kamu...",
    options: [
      { text: "Langsung carikan solusi dan bantuan", type: "A" },
      { text: "Dengerin dengan sepenuh hati", type: "B" },
      { text: "Hibur dan ajak refreshing", type: "C" },
      { text: "Ada tanpa banyak kata, accompany", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kamu paling diapresiasi teman karena...",
    options: [
      { text: "Bisa diandalkan dan always come through", type: "A" },
      { text: "Pengertian dan tidak judgemental", type: "B" },
      { text: "Selalu bikin hari jadi lebih seru", type: "C" },
      { text: "Setia dan selalu ada", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara kamu menjaga pertemanan?",
    options: [
      { text: "Aktif ngajak ketemuan dan aktivitas", type: "A" },
      { text: "Check in dan tanya kabar regularly", type: "B" },
      { text: "Share meme, jokes, dan hal seru", type: "C" },
      { text: "Selalu ada kapanpun mereka butuh", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat ada konflik di antara teman-teman, kamu...",
    options: [
      { text: "Jadi mediator, selesaikan masalah", type: "A" },
      { text: "Dengerin semua pihak tanpa memihak", type: "B" },
      { text: "Coba cairkan suasana dengan humor", type: "C" },
      { text: "Netral, tidak mau ikut campur", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Jumlah close friends yang kamu punya?",
    options: [
      { text: "Banyak, networking luas", type: "A" },
      { text: "Beberapa yang sangat dekat", type: "B" },
      { text: "Cukup banyak, suka bergaul", type: "C" },
      { text: "Sedikit tapi sangat dalam", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Teman-temanmu biasanya datang ke kamu untuk...",
    options: [
      { text: "Minta bantuan atau koordinasi sesuatu", type: "A" },
      { text: "Curhat dan minta pendapat", type: "B" },
      { text: "Hangout dan bersenang-senang", type: "C" },
      { text: "Butuh ketenangan dan kehadiran", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat teman berhasil mencapai sesuatu, kamu...",
    options: [
      { text: "Bantu celebrate dan share ke orang lain", type: "A" },
      { text: "Kasih appreciation yang tulus dan dalam", type: "B" },
      { text: "Party time! Ajak rayakan bareng", type: "C" },
      { text: "Quietly proud dan supportive", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Jarak dan waktu terpisah dengan teman, menurutmu...",
    options: [
      { text: "Harus diakali, tetap connect aktif", type: "A" },
      { text: "Tidak masalah, koneksi tetap kuat", type: "B" },
      { text: "Agak susah, prefer sering ketemu", type: "C" },
      { text: "Quality over frequency, bisa handle", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau teman kamu buat keputusan yang menurutmu salah...",
    options: [
      { text: "Kasih tau langsung dengan cara yang baik", type: "A" },
      { text: "Support apapun keputusannya, itu hidupnya", type: "B" },
      { text: "Candain dulu, baru serius ngomongin", type: "C" },
      { text: "Diam saja kecuali diminta pendapat", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Hal yang paling kamu nilai dalam pertemanan?",
    options: [
      { text: "Saling support dan growth", type: "A" },
      { text: "Trust dan vulnerability", type: "B" },
      { text: "Fun dan memorable moments", type: "C" },
      { text: "Loyalty dan consistency", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Quote pertemanan yang paling relate...",
    options: [
      { text: "'Friends that do life together, stay together'", type: "A" },
      { text: "'A friend is someone who understands your past'", type: "B" },
      { text: "'Good times + crazy friends = great memories'", type: "C" },
      { text: "'True friends are never apart, maybe in distance but never in heart'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Leader Friend",
    emoji: "👑",
    description: "Kamu adalah teman yang bisa diandalkan untuk organize dan lead! Kalau ada yang butuh bantuan atau koordinasi, kamu orangnya. Grup butuh kamu untuk jalan.",
    traits: ["Reliable", "Organized", "Helpful", "Initiative-taker"],
    strengths: ["Bikin sesuatu terjadi", "Dependable", "Problem solver"],
    weaknesses: ["Bisa overwhelmed", "Kadang bossy"],
    tips: ["Delegate dan trust teman lain juga", "Istirahat dari jadi 'the responsible one'"],
  },
  B: {
    type: "B",
    title: "The Counselor Friend",
    emoji: "🤗",
    description: "Kamu adalah tempat curhat favorit! Safe space dan non-judgemental, teman-teman datang ke kamu untuk sharing beban. Kamu punya gift untuk listening.",
    traits: ["Empathetic", "Good listener", "Trustworthy", "Supportive"],
    strengths: ["Deep connections", "Trusted completely", "Emotional support"],
    weaknesses: ["Bisa emotionally drained", "Menyerap beban orang"],
    tips: ["Self-care penting", "Kamu juga boleh curhat ke orang lain"],
  },
  C: {
    type: "C",
    title: "The Fun Friend",
    emoji: "🎉",
    description: "Kamu adalah nyawa dari setiap gathering! Selalu ada cara untuk bikin seru dan ketawa. Tanpa kamu, hangout terasa kurang lengkap.",
    traits: ["Fun", "Energetic", "Entertaining", "Mood-booster"],
    strengths: ["Bikin happy", "Memorable moments", "Light up any room"],
    weaknesses: ["Kadang tidak serius", "Miss deep conversations"],
    tips: ["Balance fun dengan depth", "Teman kadang butuh kamu serius juga"],
  },
  D: {
    type: "D",
    title: "The Loyal Friend",
    emoji: "⚓",
    description: "Kamu adalah teman yang selalu ada, no matter what. Quiet tapi presence-mu terasa. Loyalty dan consistency adalah trademark-mu.",
    traits: ["Loyal", "Consistent", "Reliable", "Steady"],
    strengths: ["Always there", "Unconditional support", "Long-lasting friendships"],
    weaknesses: ["Kurang proactive", "Bisa terkesan distant"],
    tips: ["Lebih initiate contact", "Express care lebih vocal"],
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
