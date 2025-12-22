// Kepribadian dari Sambal Favorit
// Tes ini mengungkap kepribadianmu berdasarkan sambal pilihanmu!

export const questions = [
  {
    id: 1,
    question: "Level pedas sambal yang kamu suka?",
    options: [
      { text: "Super pedas, harus bikin nangis!", type: "A" },
      { text: "Sedang, ada rasa pedes tapi masih nikmat", type: "B" },
      { text: "Dikit aja, lebih ke aroma cabe", type: "C" },
      { text: "Gak pake sambal, makanan asli aja", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Jenis sambal favorit kamu?",
    options: [
      { text: "Sambal terasi, klasik dan nendang", type: "A" },
      { text: "Sambal matah, fresh dan wangi", type: "B" },
      { text: "Sambal kecap, manis pedas", type: "C" },
      { text: "Sambal hijau, beda dari yang lain", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Makan tanpa sambal, reaksimu?",
    options: [
      { text: "Gak bisa! Hambar banget", type: "A" },
      { text: "Bisa tapi kurang lengkap", type: "B" },
      { text: "Gapapa, tergantung makanannya", type: "C" },
      { text: "Lebih sering tanpa sambal", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sambal di rumah makan habis, kamu...",
    options: [
      { text: "Minta tambah atau beli sambal sachet", type: "A" },
      { text: "Pakai saus lain sebagai pengganti", type: "B" },
      { text: "Ya sudah, makan tanpa sambal", type: "C" },
      { text: "Gak masalah, emang gak butuh", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bikin sambal sendiri atau beli?",
    options: [
      { text: "Bikin sendiri dong, lebih puas", type: "A" },
      { text: "Beli yang sudah jadi, praktis", type: "B" },
      { text: "Tergantung waktu dan mood", type: "C" },
      { text: "Gak pernah bikin atau beli khusus", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Cabe favorit untuk sambal?",
    options: [
      { text: "Cabe rawit, yang paling pedes!", type: "A" },
      { text: "Cabe merah besar, pedas tapi balance", type: "B" },
      { text: "Cabe hijau, lebih mild dan wangi", type: "C" },
      { text: "Gak tau bedanya, yang ada aja", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sambal dan gorengan, kombinasimu?",
    options: [
      { text: "Wajib! Gak lengkap tanpa sambal", type: "A" },
      { text: "Sering, tapi gak wajib", type: "B" },
      { text: "Jarang, gorengan udah enak sendiri", type: "C" },
      { text: "Gak pernah kombinasi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Reaksimu saat makan sambal yang kepedesan?",
    options: [
      { text: "Lanjut! Challenge accepted", type: "A" },
      { text: "Pelan-pelan, diselingi nasi/air", type: "B" },
      { text: "Stop, gak kuat", type: "C" },
      { text: "Makanya gak mau pake sambal", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sambal daerah mana yang paling kamu suka?",
    options: [
      { text: "Sambal Padang, santan dan pedes", type: "A" },
      { text: "Sambal Bali (matah/embe)", type: "B" },
      { text: "Sambal Jawa, ada manisnya", type: "C" },
      { text: "Gak tau sambal daerah-daerah", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Traveling ke luar negeri, soal sambal kamu...",
    options: [
      { text: "Bawa sambal atau cari restoran Indonesia", type: "A" },
      { text: "Adaptasi sama makanan lokal", type: "B" },
      { text: "Cari hot sauce atau chili lokal", type: "C" },
      { text: "Gak masalah tanpa sambal", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Menurut kamu, sambal itu...",
    options: [
      { text: "Nyawa makanan Indonesia!", type: "A" },
      { text: "Pelengkap yang bikin makanan lebih nikmat", type: "B" },
      { text: "Optional, tergantung selera", type: "C" },
      { text: "Makanan yang terlalu pedas gak sehat", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Stok sambal di rumahmu?",
    options: [
      { text: "Selalu ada berbagai jenis sambal", type: "A" },
      { text: "Ada satu-dua botol sambal", type: "B" },
      { text: "Kadang ada kadang habis", type: "C" },
      { text: "Jarang atau gak pernah stock", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Pecandu Sambal",
    emoji: "🌶️",
    description: "Sambal adalah nafasmu! Makan tanpa sambal bagaikan hidup tanpa warna. Kamu berani, intense, dan penuh passion dalam segala hal.",
    traits: ["Berani", "Intense", "Passionate", "Tidak setengah-setengah"],
    strengths: ["Penuh semangat", "Tidak takut tantangan", "Punya karakter kuat"],
    weaknesses: ["Bisa terlalu intense", "Kadang overwhelming"],
    tips: ["Sesekali enjoy yang mild", "Jaga kesehatan lambung juga"],
  },
  B: {
    type: "B",
    title: "Si Penikmat Seimbang",
    emoji: "⚖️",
    description: "Kamu suka sambal tapi dengan porsi yang pas. Balance adalah kuncimu. Kamu tau kapan harus intense, kapan harus kalem.",
    traits: ["Balanced", "Moderate", "Bijaksana", "Adaptif"],
    strengths: ["Tau batas", "Fleksibel", "Tidak ekstrem"],
    weaknesses: ["Kadang kurang decisive", "Terlalu safe"],
    tips: ["Sesekali ambil risiko lebih", "Explore hal-hal baru"],
  },
  C: {
    type: "C",
    title: "Si Lembut Hati",
    emoji: "🍃",
    description: "Kamu lebih menikmati kelembutan daripada kepedasan. Gentle dan thoughtful, kamu menghargai nuansa halus dalam segala hal.",
    traits: ["Gentle", "Sensitive", "Thoughtful", "Kalem"],
    strengths: ["Peka terhadap detail", "Tidak agresif", "Peaceful"],
    weaknesses: ["Bisa terlalu pasif", "Kurang berani"],
    tips: ["Sesekali coba hal yang lebih intense", "Keluar dari comfort zone"],
  },
  D: {
    type: "D",
    title: "Si Natural Purist",
    emoji: "🥗",
    description: "Kamu menghargai rasa asli tanpa tambahan. Authentic dan minimalis, kamu tidak butuh embel-embel untuk menikmati sesuatu.",
    traits: ["Minimalis", "Authentic", "Purist", "Simpel"],
    strengths: ["Appreciate hal-hal natural", "Tidak berlebihan", "Punya standar sendiri"],
    weaknesses: ["Bisa miss pengalaman baru", "Terkesan boring"],
    tips: ["Coba explore rasa baru", "Sambal bisa menambah pengalaman kuliner lho"],
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
