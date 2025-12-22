// Gaya Nge-Date Kamu
// Tes ini mengungkap bagaimana style kamu saat kencan!

export const questions = [
  {
    id: 1,
    question: "Tempat nge-date ideal menurut kamu...",
    options: [
      { text: "Cafe aesthetic yang instagramable", type: "A" },
      { text: "Tempat makan enak walau tempatnya biasa", type: "B" },
      { text: "Nonton bioskop, klasik tapi nyaman", type: "C" },
      { text: "Outdoor adventure: hiking, pantai, atau explore kota", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Siapa yang biasanya bayar saat nge-date?",
    options: [
      { text: "Gantian atau split bill, adil", type: "A" },
      { text: "Yang ngajak yang bayar", type: "B" },
      { text: "Aku yang bayar, treat pasangan", type: "C" },
      { text: "Tergantung situasi keuangan masing-masing", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Persiapan sebelum nge-date...",
    options: [
      { text: "Skincare, makeup/grooming, outfit on point!", type: "A" },
      { text: "Mandi, pakai baju bagus, wangi, cukup", type: "B" },
      { text: "Yang penting bersih dan rapi", type: "C" },
      { text: "Spontan aja, tidak perlu prepare berlebihan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "HP saat lagi nge-date...",
    options: [
      { text: "Silent mode, fokus sama pasangan", type: "A" },
      { text: "Sesekali cek, tapi tidak berlebihan", type: "B" },
      { text: "Foto-foto dulu untuk dokumentasi", type: "C" },
      { text: "Tetap aktif, biar tidak ketinggalan update", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Topik obrolan favorit saat nge-date...",
    options: [
      { text: "Deep talk tentang masa depan dan mimpi", type: "A" },
      { text: "Gosip dan cerita lucu sehari-hari", type: "B" },
      { text: "Hobi dan interest yang sama", type: "C" },
      { text: "Random aja, mengalir natural", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kalau pasangan telat datang...",
    options: [
      { text: "Maklum, yang penting ada kabar", type: "A" },
      { text: "Agak kesal tapi tidak ditunjukkan", type: "B" },
      { text: "Langsung komplain, waktu berharga!", type: "C" },
      { text: "Santai aja, sambil scroll HP", type: "D" },
    ],
  },
  {
    id: 7,
    question: "First date, ekspektasi kamu...",
    options: [
      { text: "Kenalan dan lihat chemistry", type: "A" },
      { text: "Seru dan memorable", type: "B" },
      { text: "Nyaman dan tidak awkward", type: "C" },
      { text: "Langsung tau ini orangnya atau bukan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Setelah nge-date, kamu biasanya...",
    options: [
      { text: "Chat bilang 'udah sampai rumah' dan terima kasih", type: "A" },
      { text: "Upload foto di story dengan caption romantis", type: "B" },
      { text: "Cerita ke bestie tentang date-nya", type: "C" },
      { text: "Langsung tidur, cape tapi happy", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Budget nge-date ideal menurut kamu...",
    options: [
      { text: "Tidak masalah mahal, yang penting quality time", type: "A" },
      { text: "Cari yang worth it, enak tapi tidak terlalu mahal", type: "B" },
      { text: "Hemat, yang penting bisa ketemu", type: "C" },
      { text: "Tergantung occasion, kalau spesial boleh splurge", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Red flag saat nge-date...",
    options: [
      { text: "Tidak sopan ke waiter/ojol", type: "A" },
      { text: "Terlalu banyak main HP", type: "B" },
      { text: "Tidak punya inisiatif sama sekali", type: "C" },
      { text: "Terlalu banyak ngomongin ex", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Romantic Planner",
    emoji: "💝",
    description: "Kamu adalah tipe yang serius soal nge-date! Setiap kencan direncanakan dengan matang untuk menciptakan momen romantis dan memorable.",
    traits: ["Romantis", "Thoughtful", "Detail-oriented", "Committed"],
    strengths: ["Date selalu berkesan", "Partner merasa spesial", "Effort yang terlihat"],
    weaknesses: ["Kadang terlalu serius", "Ekspektasi tinggi"],
    tips: ["Sesekali spontan juga seru", "Tidak semua date harus sempurna"],
  },
  B: {
    type: "B",
    title: "Si Casual Dater",
    emoji: "😊",
    description: "Kamu suka nge-date yang casual dan santai! Tidak perlu mewah atau ribet, yang penting quality time sama pasangan.",
    traits: ["Santai", "Easygoing", "Practical", "Down-to-earth"],
    strengths: ["Low maintenance", "Partner tidak merasa terbebani", "Flexible"],
    weaknesses: ["Kadang kurang effort", "Bisa terkesan cuek"],
    tips: ["Sesekali kasih surprise spesial", "Sedikit effort bisa berarti banyak"],
  },
  C: {
    type: "C",
    title: "Si Classic Traditionalist",
    emoji: "🎬",
    description: "Kamu suka nge-date dengan cara klasik yang sudah terbukti! Nonton, makan, jalan-jalan - simple tapi selalu works.",
    traits: ["Tradisional", "Reliable", "Predictable", "Comfortable"],
    strengths: ["Selalu tau apa yang diharapkan", "Nyaman dan familiar", "Tidak ribet"],
    weaknesses: ["Bisa monoton", "Kurang variasi"],
    tips: ["Coba hal baru sesekali", "Keluar dari comfort zone bisa menyenangkan"],
  },
  D: {
    type: "D",
    title: "Si Adventurous Dater",
    emoji: "🏃",
    description: "Kamu suka nge-date yang penuh petualangan dan hal baru! Setiap kencan adalah kesempatan untuk explore dan create memories unik.",
    traits: ["Adventurous", "Spontan", "Energetic", "Creative"],
    strengths: ["Date tidak pernah boring", "Banyak pengalaman seru", "Memorable moments"],
    weaknesses: ["Kadang terlalu impulsif", "Partner mungkin prefer yang lebih tenang"],
    tips: ["Balance dengan date yang chill", "Tidak semua orang suka adventure"],
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
