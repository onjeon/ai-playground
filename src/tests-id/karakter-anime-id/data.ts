// Karakter Anime Yang Cocok Denganmu
// Tes ini mengungkap karakter anime mana yang paling mirip denganmu!

export const questions = [
  {
    id: 1,
    question: "Saat menghadapi masalah besar, kamu...",
    options: [
      { text: "Pantang menyerah, terus berusaha sampai berhasil!", type: "A" },
      { text: "Analisis dulu situasinya, cari strategi terbaik", type: "B" },
      { text: "Minta bantuan teman-teman, kekuatan ada di kebersamaan", type: "C" },
      { text: "Diam-diam menyelesaikan sendiri dengan caraku", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Dalam kelompok pertemanan, kamu biasanya...",
    options: [
      { text: "Yang paling semangat dan bikin suasana rame", type: "A" },
      { text: "Yang jadi 'otak' dan kasih saran bijak", type: "B" },
      { text: "Yang selalu ada buat teman-teman", type: "C" },
      { text: "Yang cool dan mysterious di pojokan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kekuatan super yang kamu inginkan...",
    options: [
      { text: "Kekuatan fisik yang luar biasa", type: "A" },
      { text: "Kecerdasan super atau kemampuan strategi", type: "B" },
      { text: "Kemampuan healing atau melindungi orang lain", type: "C" },
      { text: "Kecepatan atau kemampuan stealth", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Motivasi terbesarmu dalam hidup...",
    options: [
      { text: "Jadi yang terbaik dan membuktikan diri!", type: "A" },
      { text: "Mencari kebenaran dan pengetahuan", type: "B" },
      { text: "Melindungi orang-orang yang kusayangi", type: "C" },
      { text: "Mencapai tujuan pribadi dengan caraku sendiri", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Makanan favorit kamu...",
    options: [
      { text: "Porsi besar, yang penting kenyang dan berenergi!", type: "A" },
      { text: "Yang sehat dan bergizi, untuk otak dan badan", type: "B" },
      { text: "Masakan rumah atau makanan yang comfort", type: "C" },
      { text: "Tidak terlalu picky, yang penting praktis", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat teman dalam kesulitan...",
    options: [
      { text: "Langsung bantu tanpa pikir panjang!", type: "A" },
      { text: "Bantu dengan cara yang paling efektif", type: "B" },
      { text: "Selalu ada untuk mendengarkan dan support", type: "C" },
      { text: "Bantu secara diam-diam tanpa banyak bicara", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kelemahan terbesarmu...",
    options: [
      { text: "Terlalu impulsif dan kadang ceroboh", type: "A" },
      { text: "Overthinking dan kurang spontan", type: "B" },
      { text: "Terlalu mementingkan orang lain sampai lupa diri", type: "C" },
      { text: "Sulit terbuka dan mengekspresikan perasaan", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Genre anime favorit kamu...",
    options: [
      { text: "Shonen action dengan pertarungan epic!", type: "A" },
      { text: "Mystery atau psychological thriller", type: "B" },
      { text: "Slice of life atau romance yang wholesome", type: "C" },
      { text: "Dark fantasy atau seinen yang deep", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Saat menghadapi musuh atau rival...",
    options: [
      { text: "Head-on battle! Aku tidak akan lari!", type: "A" },
      { text: "Pelajari kelemahannya dulu, serang dengan presisi", type: "B" },
      { text: "Coba bicara dan cari solusi damai", type: "C" },
      { text: "Strike fast, finish quick, move on", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cita-cita atau impianmu...",
    options: [
      { text: "Jadi nomor satu di bidangku!", type: "A" },
      { text: "Mengubah dunia dengan ide-ide cemerlang", type: "B" },
      { text: "Hidup bahagia dikelilingi orang-orang tersayang", type: "C" },
      { text: "Mencapai kebebasan dan hidup sesuai prinsipku", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Protagonist Penuh Semangat",
    emoji: "🔥",
    description: "Kamu seperti Naruto, Luffy, atau Deku! Penuh semangat, pantang menyerah, dan selalu percaya pada kekuatan persahabatan. Energimu menular ke orang-orang di sekitarmu!",
    traits: ["Bersemangat", "Pantang menyerah", "Optimis", "Loyal"],
    strengths: ["Tidak pernah give up", "Inspiratif", "Punya banyak teman"],
    weaknesses: ["Impulsif", "Kadang ceroboh"],
    tips: ["Pikir dulu sebelum bertindak", "Strategize kadang lebih efektif"],
  },
  B: {
    type: "B",
    title: "Si Strategist Jenius",
    emoji: "🧠",
    description: "Kamu seperti L (Death Note), Shikamaru, atau Senku! Otak cemerlang, selalu punya rencana, dan bisa melihat 10 langkah ke depan. Kecerdasanmu adalah senjata utamamu!",
    traits: ["Cerdas", "Strategis", "Analitis", "Calm under pressure"],
    strengths: ["Problem solver", "Visioner", "Dependable untuk strategi"],
    weaknesses: ["Overthinking", "Kurang spontan"],
    tips: ["Kadang intuisi juga penting", "Tidak semua harus dianalisis"],
  },
  C: {
    type: "C",
    title: "Si Pendukung Setia",
    emoji: "💖",
    description: "Kamu seperti Hinata, Uraraka, atau Maki! Selalu ada untuk orang lain, punya hati yang besar, dan kekuatanmu adalah cinta dan kebaikan. Dunia butuh lebih banyak orang sepertimu!",
    traits: ["Caring", "Supportive", "Gentle", "Strong-hearted"],
    strengths: ["Selalu ada untuk orang lain", "Empathetic", "Healing presence"],
    weaknesses: ["Terlalu selfless", "Sulit bilang tidak"],
    tips: ["Jangan lupa self-care", "Kebutuhanmu juga penting"],
  },
  D: {
    type: "D",
    title: "Si Lone Wolf Misterius",
    emoji: "🌙",
    description: "Kamu seperti Sasuke, Levi, atau Gojo! Cool, mysterious, dan punya kekuatan tersembunyi. Kamu tidak butuh banyak bicara, actions speak louder than words!",
    traits: ["Cool", "Independent", "Skilled", "Mysterious"],
    strengths: ["Self-reliant", "Highly capable", "Focused"],
    weaknesses: ["Sulit terbuka", "Kadang terlalu dingin"],
    tips: ["Buka hati untuk orang lain", "Kerja tim bisa memperkuat"],
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
