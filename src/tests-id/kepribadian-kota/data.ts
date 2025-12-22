// Kepribadian Berdasarkan Kota Favoritmu
// Tes ini mengungkap kepribadianmu berdasarkan kota Indonesia yang kamu suka!

export const questions = [
  {
    id: 1,
    question: "Liburan ideal menurutmu?",
    options: [
      { text: "Kota metropolitan, banyak aktivitas dan mall", type: "A" },
      { text: "Kota budaya, banyak wisata sejarah", type: "B" },
      { text: "Kota pantai, santai dan chill", type: "C" },
      { text: "Kota pegunungan, sejuk dan tenang", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Suasana kota yang bikin kamu nyaman?",
    options: [
      { text: "Ramai, sibuk, dan penuh energi", type: "A" },
      { text: "Ada unsur tradisional dan modern", type: "B" },
      { text: "Santai, slow-paced, dan rileks", type: "C" },
      { text: "Tenang, asri, dan dekat alam", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kuliner kota yang paling menggoda?",
    options: [
      { text: "Street food beragam dari berbagai daerah", type: "A" },
      { text: "Makanan tradisional khas daerah", type: "B" },
      { text: "Seafood segar dan makanan laut", type: "C" },
      { text: "Makanan hangat khas pegunungan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Transportasi favorit saat jalan-jalan?",
    options: [
      { text: "MRT/Transjakarta, modern dan efisien", type: "A" },
      { text: "Becak atau delman, klasik dan unik", type: "B" },
      { text: "Motor atau mobil rental, bebas explore", type: "C" },
      { text: "Jalan kaki, nikmati udara segar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Spot favorit kamu di sebuah kota?",
    options: [
      { text: "Rooftop bar atau gedung tinggi", type: "A" },
      { text: "Keraton, museum, atau situs bersejarah", type: "B" },
      { text: "Pantai atau waterfront", type: "C" },
      { text: "Kebun teh atau area persawahan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Akomodasi pilihanmu saat traveling?",
    options: [
      { text: "Hotel bintang di pusat kota", type: "A" },
      { text: "Boutique hotel dengan nuansa lokal", type: "B" },
      { text: "Villa atau resort dekat pantai", type: "C" },
      { text: "Homestay atau penginapan sederhana", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Aktivitas malam yang kamu suka?",
    options: [
      { text: "Rooftop lounge atau cafe kekinian", type: "A" },
      { text: "Jalan-jalan di kawasan heritage", type: "B" },
      { text: "Dinner di tepi pantai", type: "C" },
      { text: "Duduk santai menikmati udara malam", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Oleh-oleh khas yang kamu cari?",
    options: [
      { text: "Barang branded atau produk modern", type: "A" },
      { text: "Kerajinan tangan dan batik", type: "B" },
      { text: "Makanan laut kering atau olahan", type: "C" },
      { text: "Teh, kopi, atau produk alam", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Weekend ideal di kota impianmu?",
    options: [
      { text: "Brunch di cafe hits, lanjut shopping", type: "A" },
      { text: "City tour ke tempat bersejarah", type: "B" },
      { text: "Snorkeling atau water sports", type: "C" },
      { text: "Trekking atau piknik di alam", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Orang-orang di kota ideal menurutmu?",
    options: [
      { text: "Ambisius, sibuk, dan profesional", type: "A" },
      { text: "Ramah, sopan, dan menjaga tradisi", type: "B" },
      { text: "Santai, friendly, dan easygoing", type: "C" },
      { text: "Sederhana, hangat, dan gotong royong", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau harus pindah, kota seperti apa?",
    options: [
      { text: "Penuh peluang karir dan bisnis", type: "A" },
      { text: "Kaya budaya dan komunitas kreatif", type: "B" },
      { text: "Dekat pantai dan nature", type: "C" },
      { text: "Sejuk, murah, dan tenang", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Apa yang paling penting dari sebuah kota?",
    options: [
      { text: "Infrastruktur dan fasilitas modern", type: "A" },
      { text: "Warisan budaya dan identitas kuat", type: "B" },
      { text: "Keindahan alam dan tempat healing", type: "C" },
      { text: "Kualitas hidup dan ketenangan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Jiwa Metropolitan",
    emoji: "🏙️",
    description: "Kamu adalah jiwa kota besar! Seperti Jakarta atau Surabaya, kamu penuh energi, ambisius, dan selalu on the go. Kamu berkembang di lingkungan yang dinamis dan kompetitif.",
    traits: ["Ambisius", "Energik", "Kompetitif", "Modern"],
    strengths: ["Adaptif dengan perubahan", "Networking luas", "Goal-oriented"],
    weaknesses: ["Mudah stress", "Kurang appreciate slow life"],
    tips: ["Sesekali escape ke tempat tenang", "Work-life balance itu penting"],
  },
  B: {
    type: "B",
    title: "Jiwa Budaya",
    emoji: "🏛️",
    description: "Kamu adalah pecinta budaya! Seperti Yogyakarta atau Solo, kamu menghargai tradisi, seni, dan warisan leluhur. Kamu punya kedalaman dan wisdom yang rare.",
    traits: ["Kultured", "Bijaksana", "Menghargai tradisi", "Artistik"],
    strengths: ["Berpengetahuan luas", "Menghargai heritage", "Punya depth"],
    weaknesses: ["Kadang terlalu idealis", "Kurang embrace modernisasi"],
    tips: ["Balance tradisi dan modernitas", "Share pengetahuanmu ke orang lain"],
  },
  C: {
    type: "C",
    title: "Jiwa Pantai",
    emoji: "🏖️",
    description: "Kamu adalah jiwa bebas! Seperti Bali atau Manado, kamu santai, easy-going, dan mencintai kebebasan. Hidupmu adalah tentang menikmati momen.",
    traits: ["Santai", "Free-spirited", "Chill", "Nature-lover"],
    strengths: ["Tidak mudah stress", "Menikmati hidup", "Kreatif"],
    weaknesses: ["Bisa terlalu santai", "Kurang disiplin"],
    tips: ["Set goals tetap penting", "Balance antara enjoy dan produktif"],
  },
  D: {
    type: "D",
    title: "Jiwa Pegunungan",
    emoji: "⛰️",
    description: "Kamu adalah jiwa yang tenang! Seperti Bandung atau Malang, kamu suka kesejukan, ketenangan, dan hidup yang sederhana. Inner peace adalah prioritasmu.",
    traits: ["Tenang", "Sederhana", "Introspektif", "Nature-loving"],
    strengths: ["Mindful", "Tidak materialistis", "Punya inner peace"],
    weaknesses: ["Bisa terlalu pasif", "Kurang ambisi"],
    tips: ["Ambisi sehat itu baik", "Sesekali keluar dari comfort zone"],
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
