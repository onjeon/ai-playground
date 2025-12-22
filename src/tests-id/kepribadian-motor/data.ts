// Kepribadian dari Gaya Naik Motor
// Tes ini mengungkap kepribadianmu dari cara kamu naik motor!

export const questions = [
  {
    id: 1,
    question: "Gaya berkendara motor sehari-hari...",
    options: [
      { text: "Santai, nikmati perjalanan dan pemandangan", type: "A" },
      { text: "Cepat tapi tetap hati-hati, efisien", type: "B" },
      { text: "Agresif, slalom keluar masuk kendaraan", type: "C" },
      { text: "Defensive, utamakan keselamatan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat lampu merah masih jauh berubah kuning...",
    options: [
      { text: "Rem pelan-pelan, siap berhenti", type: "A" },
      { text: "Gas! Keburu lewat sebelum merah", type: "B" },
      { text: "Lihat situasi, kalau aman ya gas", type: "C" },
      { text: "Berhenti, tidak mau ambil risiko", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Helm yang biasa dipakai...",
    options: [
      { text: "Full face, safety first", type: "A" },
      { text: "Half face standar, praktis", type: "B" },
      { text: "Tergantung jarak, jauh full face, dekat half", type: "C" },
      { text: "Yang penting ada, kadang pinjam", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kondisi motor kamu sekarang...",
    options: [
      { text: "Terawat banget, service rutin, bersih", type: "A" },
      { text: "Standar, service kalau sudah waktunya", type: "B" },
      { text: "Agak kotor, yang penting jalan", type: "C" },
      { text: "Banyak modifikasi, motor adalah passion", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat macet parah...",
    options: [
      { text: "Sabar mengantri, nikmati sambil dengerin musik", type: "A" },
      { text: "Cari celah, yang penting maju", type: "B" },
      { text: "Nyalakan Waze/Google Maps, cari jalur alternatif", type: "C" },
      { text: "Naik trotoar kalau terpaksa dan aman", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Reaksi saat ada motor lain yang menyalip berbahaya...",
    options: [
      { text: "Biarin aja, berdoa dia selamat", type: "A" },
      { text: "Kesel, tapi tidak mau ribut", type: "B" },
      { text: "Klakson dan kasih tanda tidak setuju", type: "C" },
      { text: "Catch up dan kasih pelajaran", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Persiapan sebelum perjalanan jauh...",
    options: [
      { text: "Check motor lengkap, bawa toolkit dan ban serep", type: "A" },
      { text: "Isi bensin full, check ban dan oli", type: "B" },
      { text: "Bensin cukup, berangkat aja", type: "C" },
      { text: "Minimal prep, yang penting semangat", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat hujan tiba-tiba...",
    options: [
      { text: "Tepi dan pakai jas hujan, sudah siap", type: "A" },
      { text: "Cari tempat berteduh, tunggu reda", type: "B" },
      { text: "Gas terus, hujan-hujanan mantap", type: "C" },
      { text: "Panik, cari toko terdekat untuk beli jas hujan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Gaya parkir motor...",
    options: [
      { text: "Rapi, sesuai marka dan aturan", type: "A" },
      { text: "Yang penting muat dan tidak menghalangi", type: "B" },
      { text: "Cari yang strategis untuk keluar cepat", type: "C" },
      { text: "Asal parkir, yang penting sampai", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Boncengan dengan teman atau pasangan...",
    options: [
      { text: "Lebih hati-hati, tanggung jawab ada penumpang", type: "A" },
      { text: "Sama aja, sudah terbiasa", type: "B" },
      { text: "Sedikit lebih pelan, menyesuaikan", type: "C" },
      { text: "Malah lebih cepat, mau keren", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Pengetahuan tentang mesin motor...",
    options: [
      { text: "Paham banget, bisa servis sendiri hal basic", type: "A" },
      { text: "Tau dasar-dasar, cek oli dan tekanan ban", type: "B" },
      { text: "Minimalis, serahkan ke bengkel", type: "C" },
      { text: "Tidak paham, yang penting bisa jalan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Motor buat kamu adalah...",
    options: [
      { text: "Kebutuhan transportasi praktis", type: "A" },
      { text: "Kebebasan dan fleksibilitas", type: "B" },
      { text: "Lifestyle dan passion", type: "C" },
      { text: "Alat untuk sampai tujuan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pengendara Bijak",
    emoji: "🛵",
    description: "Kamu adalah pengendara motor yang paling aman dan bijak! Utamakan keselamatan, patuh aturan, dan motor selalu terawat. Kamu contoh pengendara yang baik di jalan.",
    traits: ["Hati-hati", "Disiplin", "Bertanggung jawab", "Terawat"],
    strengths: ["Minim kecelakaan", "Motor awet", "Tidak stress di jalan"],
    weaknesses: ["Kadang terlalu lambat", "Bisa miss kesempatan nyalip aman"],
    tips: ["Tetap konsisten dengan gaya aman", "Safety first selalu benar"],
  },
  B: {
    type: "B",
    title: "Pengendara Efisien",
    emoji: "⚡",
    description: "Kamu adalah pengendara yang balance antara cepat dan aman! Tau kapan harus gas dan kapan harus rem. Efisiensi adalah prinsipmu di jalan.",
    traits: ["Efisien", "Adaptif", "Cerdas", "Balance"],
    strengths: ["Sampai tepat waktu", "Tidak terlalu risky", "Baca situasi bagus"],
    weaknesses: ["Kadang terlalu optimis dengan timing", "Bisa lebih sabar"],
    tips: ["Tetap utamakan safety", "Waktu tidak sepenting keselamatan"],
  },
  C: {
    type: "C",
    title: "Pengendara Petualang",
    emoji: "🏍️",
    description: "Kamu adalah pengendara yang suka tantangan! Motor adalah passion dan naik motor adalah adventure. Jalan adalah arena dan kamu adalah pemainnya.",
    traits: ["Berani", "Adventurous", "Passionate", "Confident"],
    strengths: ["Skill tinggi", "Tidak takut kondisi sulit", "Enjoy riding"],
    weaknesses: ["Bisa terlalu berani", "Risiko tinggi", "Perlu lebih hati-hati"],
    tips: ["Safety tetap penting", "Skill bagus bukan alasan untuk ugal-ugalan"],
  },
  D: {
    type: "D",
    title: "Pengendara Praktis",
    emoji: "🔑",
    description: "Kamu naik motor karena praktis! Tidak terlalu passionate, yang penting bisa sampai tujuan. Motor adalah alat, bukan gaya hidup.",
    traits: ["Praktis", "Simple", "Tidak ribet", "Fungsional"],
    strengths: ["Tidak overthinking", "Fungsional approach", "Tidak stress soal motor"],
    weaknesses: ["Bisa lebih aware soal safety", "Perlu perhatian lebih ke motor"],
    tips: ["Tetap jaga keselamatan", "Perawatan dasar itu penting"],
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
