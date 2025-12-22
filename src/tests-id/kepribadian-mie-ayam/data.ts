// Kepribadian dari Mie Ayam Favorit Kamu
// Tes ini mengungkap kepribadianmu berdasarkan cara menikmati mie ayam!

export const questions = [
  {
    id: 1,
    question: "Mie ayam atau yamin?",
    options: [
      { text: "Mie ayam original, kuah pisah", type: "A" },
      { text: "Yamin, manis dan kering", type: "B" },
      { text: "Mie ayam kuah, semuanya jadi satu", type: "C" },
      { text: "Tergantung mood hari itu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Topping tambahan favorit...",
    options: [
      { text: "Ceker atau usus, yang authentic", type: "A" },
      { text: "Bakso atau pangsit goreng", type: "B" },
      { text: "Telur atau jamur", type: "C" },
      { text: "Semua topping! Makin banyak makin mantap", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saus dan sambal...",
    options: [
      { text: "Cuka dan kecap seimbang", type: "A" },
      { text: "Sambal banyak, harus pedas!", type: "B" },
      { text: "Original aja, tanpa tambahan", type: "C" },
      { text: "Custom mix sesuai selera", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Porsi mie ayam...",
    options: [
      { text: "Biasa, cukup mengenyangkan", type: "A" },
      { text: "Jumbo atau double, lapar besar", type: "B" },
      { text: "Kecil, sekedar cemilan", type: "C" },
      { text: "Tergantung lapar hari itu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Cara makan mie ayam...",
    options: [
      { text: "Aduk rata dulu baru makan", type: "A" },
      { text: "Makan langsung tanpa aduk", type: "B" },
      { text: "Makan mie dulu, ayam belakangan", type: "C" },
      { text: "Selingan mie-ayam-mie-ayam", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kuah atau pangsit rebus...",
    options: [
      { text: "Wajib ada! Satu kesatuan", type: "A" },
      { text: "Opsional, kalau dikasih dimakan", type: "B" },
      { text: "Prefer tanpa, fokus mie ayamnya", type: "C" },
      { text: "Minta extra kuah kalau enak", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tempat makan mie ayam favorit...",
    options: [
      { text: "Gerobak pinggir jalan, yang legendary", type: "A" },
      { text: "Resto atau tempat proper", type: "B" },
      { text: "Yang dekat dan praktis", type: "C" },
      { text: "Explore terus, hunting yang terbaik", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Waktu makan mie ayam...",
    options: [
      { text: "Sarapan, energi untuk mulai hari", type: "A" },
      { text: "Makan siang, menu utama", type: "B" },
      { text: "Makan malam, comfort food", type: "C" },
      { text: "Kapanpun craving muncul", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Menunggu mie ayam disiapkan...",
    options: [
      { text: "Sabar, proses adalah bagian dari experience", type: "A" },
      { text: "Lihat-lihat cara masaknya, interesting", type: "B" },
      { text: "Main HP sambil nunggu", type: "C" },
      { text: "Pilih tempat yang cepat penyajiannya", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Mie ayam bareng siapa...",
    options: [
      { text: "Solo, me time dengan mie ayam", type: "A" },
      { text: "Bareng teman atau keluarga", type: "B" },
      { text: "Dengan siapa aja yang mau", type: "C" },
      { text: "Tergantung situasi", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau mie ayam langganan tutup...",
    options: [
      { text: "Sedih, kehilangan makanan favorit", type: "A" },
      { text: "Cari pengganti yang mirip rasanya", type: "B" },
      { text: "Ya sudah, makan yang lain aja", type: "C" },
      { text: "Terus hunting sampai dapat yang seenak itu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mie ayam buat kamu adalah...",
    options: [
      { text: "Comfort food terbaik sepanjang masa", type: "A" },
      { text: "Makanan praktis dan memuaskan", type: "B" },
      { text: "Kuliner Indonesia yang harus dilestarikan", type: "C" },
      { text: "Salah satu opsi makan yang enak", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Purist Mie Ayam",
    emoji: "🍜",
    description: "Kamu adalah pecinta mie ayam sejati yang menghargai keaslian! Original recipe, gerobak legendaris, dan tidak perlu macam-macam. Kamu tau mana mie ayam yang authentic.",
    traits: ["Traditional", "Authentic seeker", "Quality-focused", "Loyal"],
    strengths: ["Know good mie ayam", "Appreciate craftsmanship", "Consistent taste"],
    weaknesses: ["Picky", "Might miss new places"],
    tips: ["Sesekali coba variasi baru", "Authentic is great tapi innovation juga menarik"],
  },
  B: {
    type: "B",
    title: "Adventurous Eater",
    emoji: "🌶️",
    description: "Kamu adalah pencinta mie ayam yang suka bereksperimen! Topping extra, level pedas tinggi, dan selalu explore tempat baru. Mie ayam adalah canvas untuk kreativitas.",
    traits: ["Adventurous", "Bold", "Explorer", "Open to new"],
    strengths: ["Discover new gems", "Full experience", "Not boring"],
    weaknesses: ["High expectations", "Budget bisa tinggi untuk extras"],
    tips: ["Kadang simple is beautiful", "Share discoveries dengan teman"],
  },
  C: {
    type: "C",
    title: "Practical Mie Lover",
    emoji: "⚡",
    description: "Mie ayam adalah solusi makan praktis bagimu! Yang penting enak, mengenyangkan, dan tidak ribet. Kamu orang yang efisien dan tidak overthink soal makanan.",
    traits: ["Practical", "Efficient", "Easy-going", "Adaptable"],
    strengths: ["Quick decisions", "Not picky", "Easy to satisfy"],
    weaknesses: ["Might miss nuances", "Too transactional"],
    tips: ["Slow down dan appreciate sesekali", "Culinary experience worth exploring"],
  },
  D: {
    type: "D",
    title: "Mood-based Eater",
    emoji: "🎭",
    description: "Pilihan mie ayammu tergantung mood dan situasi! Fleksibel dan tidak terpaku pada satu gaya. Setiap hari adalah kesempatan untuk variasi baru.",
    traits: ["Flexible", "Mood-driven", "Varied", "Spontaneous"],
    strengths: ["Never boring", "Adaptable", "Open to suggestions"],
    weaknesses: ["Indecisive kadang", "No signature order"],
    tips: ["Find your go-to untuk hari sibuk", "Embrace your flexibility"],
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
