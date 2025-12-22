// Tipe Anak Rumahan Kamu
// Tes ini mengungkap tipe anak rumahan seperti apa kamu!

export const questions = [
  {
    id: 1,
    question: "Weekend ideal menurutmu...",
    options: [
      { text: "Rebahan full, tidak keluar kamar sama sekali", type: "A" },
      { text: "Produktif di rumah, bersih-bersih atau masak", type: "B" },
      { text: "Hobi indoor, gaming atau nonton marathon", type: "C" },
      { text: "Me time dengan buku, musik, atau journaling", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kalau diajak keluar sama teman...",
    options: [
      { text: "Cari alasan untuk menolak dengan halus", type: "A" },
      { text: "Pertimbangkan dulu, lihat mood dan energi", type: "B" },
      { text: "Ajak ke rumah aja, lebih nyaman", type: "C" },
      { text: "Sesekali iya, tapi prefer di rumah", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pakaian favorit di rumah...",
    options: [
      { text: "Piyama atau daster seharian", type: "A" },
      { text: "Kaos dan celana pendek nyaman", type: "B" },
      { text: "Apa yang terakhir dipakai tidur", type: "C" },
      { text: "Tetap rapi walau di rumah", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Spot favorit di rumah...",
    options: [
      { text: "Kasur, paradise on earth", type: "A" },
      { text: "Sofa depan TV, comfort zone", type: "B" },
      { text: "Meja kerja atau sudut khusus", type: "C" },
      { text: "Berpindah-pindah, tergantung aktivitas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Stok makanan di rumah...",
    options: [
      { text: "Lengkap! Snack, frozen food, minuman", type: "A" },
      { text: "Basic, yang penting ada untuk masak", type: "B" },
      { text: "Order online kalau habis, males keluar", type: "C" },
      { text: "Minimalis, beli fresh lebih suka", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Aktivitas produktif di rumah...",
    options: [
      { text: "Jarang, rumah itu tempat istirahat", type: "A" },
      { text: "Bersih-bersih dan rapihkan rumah", type: "B" },
      { text: "Side project atau hobi kreatif", type: "C" },
      { text: "Belajar atau develop skill baru", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat listrik mati...",
    options: [
      { text: "Panik! Mau ngapain tanpa internet dan AC?", type: "A" },
      { text: "Tidur aja, kesempatan istirahat", type: "B" },
      { text: "Cari aktivitas manual, baca buku dll", type: "C" },
      { text: "Keluar rumah, cari tempat yang ada listrik", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Interaksi dengan keluarga di rumah...",
    options: [
      { text: "Minimal, lebih suka di kamar sendiri", type: "A" },
      { text: "Ngobrol dan quality time bareng", type: "B" },
      { text: "Tergantung mood, kadang rame kadang sendiri", type: "C" },
      { text: "Bareng untuk makan, sisanya masing-masing", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Hiburan favorit di rumah...",
    options: [
      { text: "Streaming film/series marathon", type: "A" },
      { text: "Gaming, solo atau online bareng teman", type: "B" },
      { text: "Scroll sosmed dan TikTok", type: "C" },
      { text: "Musik, podcast, atau audiobook", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau harus keluar rumah...",
    options: [
      { text: "Persiapan lama, mental juga perlu disiapkan", type: "A" },
      { text: "Cepat selesai urusannya, langsung pulang", type: "B" },
      { text: "Sekalian keluar, cari keperluan lain", type: "C" },
      { text: "Tidak masalah, asal tidak terlalu lama", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Dekorasi dan kenyamanan rumah...",
    options: [
      { text: "Sangat penting! Rumah harus cozy", type: "A" },
      { text: "Fungsional lebih penting dari aesthetic", type: "B" },
      { text: "Yang penting bersih dan rapi", type: "C" },
      { text: "Tidak terlalu peduli, asal nyaman", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Pandanganmu tentang jadi anak rumahan...",
    options: [
      { text: "Lifestyle terbaik! Hemat dan nyaman", type: "A" },
      { text: "Balance, sesekali keluar juga perlu", type: "B" },
      { text: "Pilihan personal, bukan antisosial", type: "C" },
      { text: "Lebih produktif di rumah sebenarnya", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Homebody Sejati",
    emoji: "🏠",
    description: "Kamu adalah anak rumahan level tertinggi! Rumah adalah surga, kasur adalah singgasana. Keluar rumah adalah mission impossible yang harus dihindari sebisa mungkin.",
    traits: ["Introver", "Nyaman sendiri", "Low energy social", "Pecinta kenyamanan"],
    strengths: ["Hemat uang", "Self-sufficient", "Tidak FOMO", "Mental stabil"],
    weaknesses: ["Bisa terlalu isolasi", "Kurang vitamin D", "Perlu push diri kadang"],
    tips: ["Sesekali keluar untuk kesehatan", "Balance antara comfort dan growth"],
  },
  B: {
    type: "B",
    title: "Productive Homebody",
    emoji: "📦",
    description: "Kamu anak rumahan yang produktif! Walau suka di rumah, kamu tidak cuma rebahan. Selalu ada yang dikerjakan, dari bersih-bersih sampai develop skill baru.",
    traits: ["Produktif", "Organized", "Self-motivated", "Balanced"],
    strengths: ["Rumah selalu rapi", "Skill berkembang", "Tidak buang waktu"],
    weaknesses: ["Kadang terlalu sibuk", "Susah fully relax"],
    tips: ["Rebahan juga penting", "Istirahat itu produktif juga"],
  },
  C: {
    type: "C",
    title: "Digital Homebody",
    emoji: "🎮",
    description: "Kamu anak rumahan era digital! Gaming, streaming, sosmed adalah hidupmu. Sosial? Online aja, lebih seru dan tidak perlu keluar rumah.",
    traits: ["Tech-savvy", "Online social", "Entertainment-oriented", "Night owl"],
    strengths: ["Terhubung virtual", "Up-to-date konten", "Community online aktif"],
    weaknesses: ["Screen time tinggi", "Sleep schedule chaos", "Perlu aktivitas fisik"],
    tips: ["Balance screen time", "Olahraga di rumah juga bisa"],
  },
  D: {
    type: "D",
    title: "Selective Homebody",
    emoji: "🌟",
    description: "Kamu anak rumahan yang selective! Bukan antisosial, tapi memilih kapan keluar dan untuk apa. Quality over quantity dalam aktivitas sosial.",
    traits: ["Selective", "Quality-focused", "Balanced", "Intentional"],
    strengths: ["Waktu terpakai optimal", "Hubungan berkualitas", "Mental sehat"],
    weaknesses: ["Kadang miss opportunities", "Bisa terlalu picky"],
    tips: ["Tetap open untuk hal baru", "Kadang spontanitas juga seru"],
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
