// Kepribadian dari Motif Batik Favoritmu
// Tes ini mengungkap kepribadianmu berdasarkan pilihan motif batik!

export const questions = [
  {
    id: 1,
    question: "Kalau beli batik, motif apa yang langsung menarik perhatianmu?",
    options: [
      { text: "Parang - klasik dan elegan", type: "A" },
      { text: "Mega Mendung - warna cerah dan berani", type: "B" },
      { text: "Kawung - simpel dan geometris", type: "C" },
      { text: "Sekar Jagad - ramai dan penuh detail", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Warna batik yang paling kamu suka?",
    options: [
      { text: "Coklat sogan - tradisional dan hangat", type: "A" },
      { text: "Biru indigo - tegas dan menenangkan", type: "B" },
      { text: "Hitam putih - minimalis dan timeless", type: "C" },
      { text: "Warna-warni cerah - ceria dan ekspresif", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kapan kamu biasanya pakai batik?",
    options: [
      { text: "Acara resmi dan formal saja", type: "A" },
      { text: "Setiap hari Jumat di kantor", type: "B" },
      { text: "Casual aja, mix sama jeans", type: "C" },
      { text: "Setiap ada kesempatan, batik is life!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Model batik favoritmu?",
    options: [
      { text: "Kemeja batik formal/lengan panjang", type: "A" },
      { text: "Batik modern potongan slim fit", type: "B" },
      { text: "Kaos batik atau outer batik casual", type: "C" },
      { text: "Dress/gamis batik kombinasi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dari daerah mana batik yang paling kamu suka?",
    options: [
      { text: "Solo - halus dan klasik", type: "A" },
      { text: "Pekalongan - warna cerah modern", type: "B" },
      { text: "Yogyakarta - filosofis dan dalam", type: "C" },
      { text: "Cirebon - unik dan khas pesisir", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat beli batik, hal pertama yang kamu lihat?",
    options: [
      { text: "Kualitas kain dan teknik pembuatan", type: "A" },
      { text: "Keunikan dan originalitas motif", type: "B" },
      { text: "Kenyamanan dipakai sehari-hari", type: "C" },
      { text: "Keindahan warna dan kombinasinya", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Budget untuk beli satu potong batik?",
    options: [
      { text: "Rela mahal untuk batik tulis asli", type: "A" },
      { text: "Yang penting berkualitas, budget fleksibel", type: "B" },
      { text: "Cari yang affordable tapi tetap bagus", type: "C" },
      { text: "Suka koleksi banyak, jadi cari yang murah", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kalau dikasih batik sebagai hadiah...",
    options: [
      { text: "Senang banget, apalagi kalau batik tulis", type: "A" },
      { text: "Appreciate, langsung kepikiran mau dipake kapan", type: "B" },
      { text: "Suka, tapi harus cocok sama selera", type: "C" },
      { text: "Excited! Langsung foto dan upload!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Menurutmu, batik itu...",
    options: [
      { text: "Warisan budaya yang harus dilestarikan", type: "A" },
      { text: "Fashion statement yang keren", type: "B" },
      { text: "Baju nyaman untuk berbagai occasion", type: "C" },
      { text: "Identitas dan kebanggaan Indonesia", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Reaksimu saat lihat orang pakai batik dengan style unik?",
    options: [
      { text: "Apresiasi, tapi prefer style tradisional", type: "A" },
      { text: "Keren! Jadi inspirasi style baru", type: "B" },
      { text: "Netral, yang penting nyaman", type: "C" },
      { text: "Excited, pengen coba style itu juga!", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Batik warisan keluarga, kamu akan...",
    options: [
      { text: "Simpan rapi sebagai harta berharga", type: "A" },
      { text: "Pakai di momen-momen spesial", type: "B" },
      { text: "Modif jadi sesuatu yang lebih modern", type: "C" },
      { text: "Pakai sering-sering, biar selalu dikenang", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Impianmu tentang batik?",
    options: [
      { text: "Punya koleksi batik tulis dari berbagai daerah", type: "A" },
      { text: "Design batik sendiri yang unik", type: "B" },
      { text: "Bisa pakai batik setiap hari dengan nyaman", type: "C" },
      { text: "Bikin batik terkenal di kancah internasional", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pecinta Batik Klasik",
    emoji: "👑",
    description: "Kamu adalah pribadi yang menghargai tradisi dan nilai-nilai luhur. Seperti motif Parang yang bermakna keberanian, kamu memiliki karakter yang teguh dan bijaksana. Kamu menghormati warisan budaya dan memiliki selera yang refined.",
    traits: ["Tradisionalis", "Bijaksana", "Elegan", "Berkelas"],
    strengths: ["Menghargai kualitas", "Berpendirian teguh", "Memiliki selera tinggi"],
    weaknesses: ["Kurang fleksibel dengan perubahan", "Bisa terkesan kaku"],
    tips: ["Coba eksplorasi batik modern sesekali", "Tetap terbuka dengan inovasi batik"],
  },
  B: {
    type: "B",
    title: "Trendsetter Batik Modern",
    emoji: "✨",
    description: "Kamu adalah innovator dalam berbatik! Seperti Mega Mendung yang berani dengan warnanya, kamu tidak takut tampil beda. Kamu pandai memadukan tradisi dengan modernitas.",
    traits: ["Kreatif", "Berani", "Trendy", "Inovatif"],
    strengths: ["Visioner", "Adaptif", "Stylish"],
    weaknesses: ["Bisa terlalu fokus pada tren", "Kadang kurang appreciate tradisi"],
    tips: ["Pelajari filosofi di balik motif batik", "Balance antara modern dan tradisional"],
  },
  C: {
    type: "C",
    title: "Minimalis Batik Casual",
    emoji: "🍃",
    description: "Kamu praktis dan tidak ribet! Seperti Kawung yang simpel namun bermakna, kamu menghargai kesederhanaan. Batik buatmu adalah bagian natural dari keseharian.",
    traits: ["Praktis", "Simpel", "Nyaman", "Easy-going"],
    strengths: ["Fleksibel", "Tidak ribet", "Autentik"],
    weaknesses: ["Kurang adventurous", "Bisa terlalu plain"],
    tips: ["Coba koleksi batik dari berbagai daerah", "Eksplorasi motif yang lebih beragam"],
  },
  D: {
    type: "D",
    title: "Ekspresionis Batik Ekspresif",
    emoji: "🎨",
    description: "Kamu penuh warna dan energi! Seperti Sekar Jagad yang kaya akan detail, kamu memiliki kepribadian yang hangat dan ekspresif. Kamu bangga menjadi duta batik Indonesia.",
    traits: ["Ekspresif", "Antusias", "Bangga", "Sosial"],
    strengths: ["Penuh semangat", "Menyebarkan cinta batik", "Kreatif"],
    weaknesses: ["Bisa overwhelming", "Terlalu banyak koleksi"],
    tips: ["Fokus pada kualitas, bukan kuantitas", "Share pengetahuan batik ke orang lain"],
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
