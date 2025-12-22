// Tes Tipe First Date Ideal Kamu
// Bagaimana kencan pertama impianmu?

export const questions = [
  {
    id: 1,
    question: "Lokasi first date ideal kamu...",
    options: [
      { text: "Cafe atau restoran yang cozy", type: "A" },
      { text: "Tempat outdoor atau adventure", type: "B" },
      { text: "Mall atau nonton bioskop", type: "C" },
      { text: "Tempat unik atau hidden gem", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Durasi first date yang nyaman...",
    options: [
      { text: "2-3 jam, cukup untuk kenal", type: "A" },
      { text: "Seharian penuh kalau cocok", type: "B" },
      { text: "1-2 jam, singkat tapi berkesan", type: "C" },
      { text: "Flexible, lihat flow-nya", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Siapa yang harus bayar di first date?",
    options: [
      { text: "Yang ngajak atau cowok", type: "A" },
      { text: "Split bill, lebih fair", type: "B" },
      { text: "Gantian treat, yang ini aku besok kamu", type: "C" },
      { text: "Siapa yang nawarin duluan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Outfit yang kamu pilih untuk first date...",
    options: [
      { text: "Casual tapi tetap rapi", type: "A" },
      { text: "Sporty atau nyaman untuk gerak", type: "B" },
      { text: "Dress up lebih dari biasanya", type: "C" },
      { text: "Express personal style", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Topik obrolan di first date...",
    options: [
      { text: "Getting to know: hobi, kerja, keluarga", type: "A" },
      { text: "Tentang pengalaman dan petualangan", type: "B" },
      { text: "Light talk: film, musik, meme", type: "C" },
      { text: "Deep talk: dreams, values, philosophy", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Physical contact di first date...",
    options: [
      { text: "Jabat tangan atau salam sopan", type: "A" },
      { text: "Natural aja, kalau momen pas", type: "B" },
      { text: "Hindari dulu, masih baru kenal", type: "C" },
      { text: "Hug kalau vibes-nya cocok", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kalau first date canggung...",
    options: [
      { text: "Coba cari topik pemersatu", type: "A" },
      { text: "Ajak aktivitas bareng biar ga fokus ngobrol", type: "B" },
      { text: "Embrace awkwardness, itu normal", type: "C" },
      { text: "Jadi diri sendiri, yang penting genuine", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Setelah first date selesai...",
    options: [
      { text: "Chat bilang terima kasih dan senang ketemu", type: "A" },
      { text: "Langsung plan next date kalau cocok", type: "B" },
      { text: "Tunggu dia chat duluan", type: "C" },
      { text: "Share momen atau foto hari itu", type: "D" },
    ],
  },
  {
    id: 9,
    question: "First date yang memorable adalah...",
    options: [
      { text: "Yang ngobrolnya nyambung terus", type: "A" },
      { text: "Yang ada adventure atau unexpected moment", type: "B" },
      { text: "Yang romantic dan sweet", type: "C" },
      { text: "Yang unique dan beda dari yang lain", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Red flag di first date...",
    options: [
      { text: "Terlalu banyak main HP", type: "A" },
      { text: "Tidak ada rencana atau effort", type: "B" },
      { text: "Oversharing atau terlalu personal", type: "C" },
      { text: "Fake atau tidak genuine", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Expectations kamu sebelum first date...",
    options: [
      { text: "Hope for the best, prepare for anything", type: "A" },
      { text: "Excited dan optimis", type: "B" },
      { text: "Nervous tapi tetap semangat", type: "C" },
      { text: "No expectations, just enjoy", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Success indicator first date menurutmu...",
    options: [
      { text: "Waktu terasa cepat berlalu", type: "A" },
      { text: "Sudah plan date berikutnya", type: "B" },
      { text: "Butterfly in stomach feeling", type: "C" },
      { text: "Jadi diri sendiri dan tetap nyaman", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Classic Romantic",
    emoji: "🌹",
    description: "Kamu suka first date yang classic dan sweet! Dinner di restoran cozy, ngobrol yang meaningful, dan chemistry yang terasa. Simple tapi berkesan.",
    traits: ["Tradisional", "Romantic", "Conversationalist", "Warm"],
    strengths: ["Comfortable vibe", "Good listener", "Genuine interest"],
    weaknesses: ["Kadang terlalu safe", "Kurang spontan"],
    tips: ["Coba variasi tempat kadang-kadang", "Surprise element bisa bikin memorable"],
  },
  B: {
    type: "B",
    title: "Adventure Dater",
    emoji: "🎢",
    description: "First date harus seru dan penuh aktivitas! Kamu percaya bonding terbaik lewat pengalaman bareng. Hiking, escape room, atau coba hal baru - itu style-mu!",
    traits: ["Aktif", "Energetic", "Experience seeker", "Fun"],
    strengths: ["Tidak boring", "Memorable dates", "Natural bonding"],
    weaknesses: ["Kadang terlalu packed", "Kurang quality talk time"],
    tips: ["Sisakan waktu untuk ngobrol juga", "Balance aktivitas dan conversation"],
  },
  C: {
    type: "C",
    title: "Cautious Dater",
    emoji: "🦋",
    description: "Kamu approach first date dengan hati-hati dan excited! Dress up maksimal, tempat yang aman, dan jaga boundaries. Nervous tapi tetap enjoy prosesnya.",
    traits: ["Careful", "Prepared", "Proper", "Sweet"],
    strengths: ["First impression bagus", "Respectful", "Thoughtful"],
    weaknesses: ["Kadang terlalu nervous", "Susah relax"],
    tips: ["Rileks dan jadi diri sendiri", "Imperfection itu manusiawi"],
  },
  D: {
    type: "D",
    title: "Authentic Dater",
    emoji: "💫",
    description: "Yang penting genuine dan unique! Kamu tidak follow formula, lebih suka date yang organic dan beda. Tempat hidden gem dan conversation yang deep adalah preference-mu.",
    traits: ["Unique", "Genuine", "Deep", "Non-conformist"],
    strengths: ["Authentic vibes", "Memorable dates", "Real connections"],
    weaknesses: ["Kadang terlalu unconventional", "Intimidating buat some people"],
    tips: ["Balance antara unique dan comfortable", "Not everyone ready untuk deep talk langsung"],
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
