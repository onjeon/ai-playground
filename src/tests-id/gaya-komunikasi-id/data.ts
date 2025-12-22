// Tes Gaya Komunikasi Kamu
// Temukan cara berkomunikasimu yang unik!

export const questions = [
  {
    id: 1,
    question: "Saat ada masalah dengan teman, kamu lebih suka...",
    options: [
      { text: "Langsung bicara face to face", type: "A" },
      { text: "Chat panjang lebar menjelaskan", type: "B" },
      { text: "Kirim voice note biar lebih jelas", type: "C" },
      { text: "Diam dulu, baru bicara kalau sudah tenang", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Di grup WhatsApp keluarga, kamu biasanya...",
    options: [
      { text: "Aktif membalas dan memulai obrolan", type: "A" },
      { text: "Balas seperlunya dengan teks singkat", type: "B" },
      { text: "Lebih sering kirim stiker atau emoji", type: "C" },
      { text: "Silent reader, baca tapi jarang komen", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cara kamu menyampaikan ketidaksetujuan...",
    options: [
      { text: "Bilang langsung dengan tegas tapi sopan", type: "A" },
      { text: "Jelaskan alasan detail kenapa tidak setuju", type: "B" },
      { text: "Pakai humor biar tidak tegang", type: "C" },
      { text: "Mengalah atau diam saja", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat presentasi atau ngomong di depan umum...",
    options: [
      { text: "Percaya diri dan energik", type: "A" },
      { text: "Siap dengan data dan fakta lengkap", type: "B" },
      { text: "Banyak cerita dan interaksi dengan audiens", type: "C" },
      { text: "Gugup tapi berusaha selesaikan dengan baik", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kalau teman curhat masalah berat...",
    options: [
      { text: "Kasih solusi dan saran konkret", type: "A" },
      { text: "Analisis masalahnya dan bantu cari akar penyebab", type: "B" },
      { text: "Dengarkan dengan empati dan hibur", type: "C" },
      { text: "Temani dan peluk, tidak perlu banyak kata", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Reaksi kamu saat dapat kritik...",
    options: [
      { text: "Terima, tapi akan jelaskan sudut pandangku", type: "A" },
      { text: "Minta penjelasan lebih detail untuk perbaikan", type: "B" },
      { text: "Ambil positifnya, lupakan yang negatif", type: "C" },
      { text: "Diam dan refleksi sendiri", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cara kamu kenalan dengan orang baru...",
    options: [
      { text: "Sapa duluan dan ajak ngobrol", type: "A" },
      { text: "Tanya-tanya tentang latar belakang mereka", type: "B" },
      { text: "Cari common interest dan bercanda", type: "C" },
      { text: "Tunggu disapa dan respon seadanya", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat meeting atau rapat, kamu cenderung...",
    options: [
      { text: "Aktif berpendapat dan memimpin diskusi", type: "A" },
      { text: "Catat poin penting dan bertanya jika perlu", type: "B" },
      { text: "Cair suasana dan jaga mood tim", type: "C" },
      { text: "Dengarkan dan bicara hanya kalau ditanya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Emoji atau stiker favoritmu di chat...",
    options: [
      { text: "👍 atau ✅ - singkat dan jelas", type: "A" },
      { text: "🤔 atau 📝 - serius dan thoughtful", type: "B" },
      { text: "😂 atau 🎉 - fun dan ceria", type: "C" },
      { text: "🙏 atau ❤️ - lembut dan sopan", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau ada salah paham dengan orang lain...",
    options: [
      { text: "Konfrontasi langsung untuk meluruskan", type: "A" },
      { text: "Jelaskan dengan detail agar tidak salah paham lagi", type: "B" },
      { text: "Buat situasi santai dulu baru bahas", type: "C" },
      { text: "Biarkan waktu yang menyelesaikan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Cara kamu memuji orang...",
    options: [
      { text: "Langsung bilang 'Bagus!' atau 'Hebat!'", type: "A" },
      { text: "Jelaskan spesifik apa yang bagus", type: "B" },
      { text: "Pakai pujian yang lucu atau unik", type: "C" },
      { text: "Pujian lewat tindakan, bukan kata-kata", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Status WhatsApp atau IG Story kamu biasanya...",
    options: [
      { text: "Update kegiatan dan prestasi", type: "A" },
      { text: "Share artikel atau informasi bermanfaat", type: "B" },
      { text: "Meme lucu atau quotes aesthetic", type: "C" },
      { text: "Jarang update, private person", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Komunikator Asertif",
    emoji: "🎯",
    description: "Kamu adalah komunikator yang tegas dan percaya diri! Kamu tidak takut menyampaikan pendapat dan selalu to the point. Orang-orang menghargai kejujuran dan keberanianmu.",
    traits: ["Tegas", "Percaya diri", "Langsung", "Memimpin"],
    strengths: ["Efektif menyampaikan maksud", "Natural leader", "Tidak bertele-tele"],
    weaknesses: ["Kadang terkesan dominan", "Perlu belajar lebih sabar mendengar"],
    tips: ["Beri ruang orang lain untuk bicara", "Softkan nada bicara di situasi sensitif"],
  },
  B: {
    type: "B",
    title: "Komunikator Analitis",
    emoji: "📊",
    description: "Kamu adalah tipe yang detail dan sistematis dalam berkomunikasi. Setiap kata dipilih dengan hati-hati dan selalu berdasarkan fakta. Orang percaya padamu karena keakuratanmu.",
    traits: ["Detail", "Sistematis", "Akurat", "Thoughtful"],
    strengths: ["Informasi selalu lengkap", "Jarang salah paham", "Dipercaya"],
    weaknesses: ["Kadang terlalu panjang", "Over-explain"],
    tips: ["Belajar menyederhanakan pesan", "Tidak semua orang butuh detail"],
  },
  C: {
    type: "C",
    title: "Komunikator Ekspresif",
    emoji: "🎭",
    description: "Kamu adalah soul of the party! Cara berkomunikasimu penuh warna, humor, dan kehangatan. Orang-orang merasa nyaman dan terhibur di sekitarmu.",
    traits: ["Ekspresif", "Hangat", "Humoris", "Kreatif"],
    strengths: ["Mudah bergaul", "Mencairkan suasana", "Menyenangkan"],
    weaknesses: ["Kadang tidak serius", "Bisa off-topic"],
    tips: ["Tau kapan harus serius", "Jaga keseimbangan fun dan fokus"],
  },
  D: {
    type: "D",
    title: "Komunikator Reflektif",
    emoji: "🌙",
    description: "Kamu adalah pendengar yang luar biasa. Lebih banyak mengamati dan berpikir sebelum bicara. Kata-katamu sedikit tapi bermakna dan orang menghargai kedalaman pikiranmu.",
    traits: ["Pendengar baik", "Thoughtful", "Tenang", "Bijaksana"],
    strengths: ["Empati tinggi", "Kata-kata bermakna", "Tidak asal bicara"],
    weaknesses: ["Kadang terlalu pasif", "Susah mengekspresikan diri"],
    tips: ["Belajar lebih vokal", "Pendapatmu berharga, jangan disimpan sendiri"],
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
