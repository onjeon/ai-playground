// Tipe Rekan Kerja Kamu
// Tes ini mengungkap karakteristikmu sebagai rekan kerja!

export const questions = [
  {
    id: 1,
    question: "Di kantor, kamu biasanya...",
    options: [
      { text: "Fokus kerja, minim sosialisasi", type: "A" },
      { text: "Balance antara kerja dan ngobrol", type: "B" },
      { text: "Suka ngobrol dan connect sama orang", type: "C" },
      { text: "Bantu rekan kerja yang butuh", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tentang gossip atau drama kantor, kamu...",
    options: [
      { text: "Tidak tertarik, fokus kerja aja", type: "A" },
      { text: "Dengerin tapi tidak ikut menyebarkan", type: "B" },
      { text: "Update terbaru? Spill the tea!", type: "C" },
      { text: "Coba netralisir atau damaikan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kerja tim, posisimu biasanya...",
    options: [
      { text: "Kerja sendiri-sendiri lebih efisien", type: "A" },
      { text: "Kolaborasi sewajarnya", type: "B" },
      { text: "Suka brainstorm dan diskusi bareng", type: "C" },
      { text: "Bantu organize dan koordinasi tim", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Rekan kerja minta bantuan saat kamu sibuk, kamu...",
    options: [
      { text: "Tolak dengan sopan, prioritas kerjaan sendiri", type: "A" },
      { text: "Bantu sebentar kalau memungkinkan", type: "B" },
      { text: "Bantu dengan senang hati walau sibuk", type: "C" },
      { text: "Bantu sepenuhnya, kerjaanku bisa nanti", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Makan siang, preferensimu?",
    options: [
      { text: "Sendiri atau makan di meja kerja", type: "A" },
      { text: "Kadang bareng, kadang sendiri", type: "B" },
      { text: "Selalu bareng rekan kerja", type: "C" },
      { text: "Ajak yang biasa makan sendiri supaya tidak lonely", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ada konflik dengan rekan kerja, kamu...",
    options: [
      { text: "Profesional aja, kerja tetap jalan", type: "A" },
      { text: "Coba selesaikan dengan bicara", type: "B" },
      { text: "Curhat ke rekan lain dulu", type: "C" },
      { text: "Mediasi dan cari solusi damai", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Meeting kantor, gayamu...",
    options: [
      { text: "Dengerin, kontribusi seperlunya", type: "A" },
      { text: "Aktif kalau topiknya relevan", type: "B" },
      { text: "Suka diskusi dan share ide", type: "C" },
      { text: "Pastikan semua orang dapat giliran bicara", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Rekan kerja baru, kamu...",
    options: [
      { text: "Sapa seperlunya, dia akan adaptasi sendiri", type: "A" },
      { text: "Kenalan dan bantu kalau ada pertanyaan", type: "B" },
      { text: "Ajak makan bareng dan perkenalkan ke semua", type: "C" },
      { text: "Jadi mentor dadakan, bantu adaptasi", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Acara kantor (gathering, outing), reaksimu?",
    options: [
      { text: "Skip kalau bisa, lebih suka waktu pribadi", type: "A" },
      { text: "Ikut kalau wajib atau sesekali", type: "B" },
      { text: "Selalu ikut, seru bonding sama tim!", type: "C" },
      { text: "Ikut dan bantu organize juga", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Rekan kerja sedang down atau stress, kamu...",
    options: [
      { text: "Beri space, tidak ikut campur urusan personal", type: "A" },
      { text: "Tanya apakah baik-baik saja", type: "B" },
      { text: "Ajak ngobrol atau makan untuk cheer up", type: "C" },
      { text: "Tawarkan bantuan konkret untuk meringankan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Bagaimana rekan kerja mendeskripsikan kamu?",
    options: [
      { text: "Profesional dan fokus", type: "A" },
      { text: "Easy-going dan bisa diajak kerja sama", type: "B" },
      { text: "Seru dan menyenangkan", type: "C" },
      { text: "Helpful dan bisa diandalkan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Hubungan ideal dengan rekan kerja menurutmu?",
    options: [
      { text: "Profesional, kerja beres sudah cukup", type: "A" },
      { text: "Friendly tapi ada boundaries", type: "B" },
      { text: "Dekat kayak teman, kerja jadi fun", type: "C" },
      { text: "Saling support dalam dan luar kerjaan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Professional",
    emoji: "💼",
    description: "Kamu adalah rekan kerja yang sangat profesional. Fokus pada pekerjaan, minim drama, dan boundaries jelas antara kerja dan personal. Efisien dan reliable.",
    traits: ["Professional", "Focused", "Efficient", "Independent"],
    strengths: ["Deliver results", "No drama", "Respected"],
    weaknesses: ["Bisa terkesan dingin", "Miss team bonding", "Isolating"],
    tips: ["Sesekali connect lebih personal", "Networking juga penting untuk karir"],
  },
  B: {
    type: "B",
    title: "The Balanced Colleague",
    emoji: "🤝",
    description: "Kamu adalah rekan kerja yang balanced! Bisa profesional sekaligus friendly. Tau kapan fokus kerja, kapan sosialisasi. Ideal colleague!",
    traits: ["Balanced", "Adaptable", "Friendly", "Professional"],
    strengths: ["Well-liked", "Good team player", "Versatile"],
    weaknesses: ["Kadang bisa lebih engaged", "Playing it safe"],
    tips: ["Great balance! Maybe take more initiative sometimes"],
  },
  C: {
    type: "C",
    title: "The Social Butterfly",
    emoji: "🦋",
    description: "Kamu adalah nyawa dari office! Social butterfly yang bikin suasana kerja jadi lebih seru. Banyak teman dan selalu tau yang terjadi di kantor.",
    traits: ["Social", "Fun", "Connected", "Energetic"],
    strengths: ["Great office culture", "Strong network", "Mood booster"],
    weaknesses: ["Bisa distract work", "Terlalu involved in drama", "Productivitynya?"],
    tips: ["Balance social dengan fokus kerja", "Not everything needs your involvement"],
  },
  D: {
    type: "D",
    title: "The Helper",
    emoji: "🙋",
    description: "Kamu adalah rekan kerja yang selalu siap membantu! Go-to person saat ada yang butuh bantuan. Supportive dan caring, tim beruntung punya kamu.",
    traits: ["Helpful", "Supportive", "Caring", "Reliable"],
    strengths: ["Loved by colleagues", "Great team contributor", "Trustworthy"],
    weaknesses: ["Bisa dimanfaatkan", "Own work terganggu", "Burnout potential"],
    tips: ["It's okay to say no sometimes", "Your work matters too"],
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
