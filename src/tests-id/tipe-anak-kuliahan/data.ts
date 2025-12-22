// Tipe Anak Kuliahan Kamu
// Kamu tipe mahasiswa yang kayak gimana sih?

export const questions = [
  {
    id: 1,
    question: "Saat ada kelas jam 7 pagi...",
    options: [
      { text: "Datang on time, duduk depan", type: "A" },
      { text: "Mepet tapi masih masuk", type: "B" },
      { text: "Skip aja, minta catetan temen", type: "C" },
      { text: "Datang telat tapi tetap masuk", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tugasmu biasanya dikerjakan...",
    options: [
      { text: "Jauh-jauh hari sebelum deadline", type: "A" },
      { text: "H-2 atau H-1 deadline", type: "B" },
      { text: "SKS - Sistem Kebut Semalam", type: "C" },
      { text: "Kolaborasi sama temen (baca: nyontek)", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tempat favoritmu di kampus...",
    options: [
      { text: "Perpustakaan", type: "A" },
      { text: "Kantin atau foodcourt", type: "B" },
      { text: "Basecamp organisasi", type: "C" },
      { text: "Gazebo atau tempat nongkrong", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat dosen tanya 'Ada pertanyaan?'...",
    options: [
      { text: "Aktif nanya, biar dapat nilai plus", type: "A" },
      { text: "Diam aja biar cepet selesai", type: "B" },
      { text: "Cuma nanya kalau beneran bingung", type: "C" },
      { text: "Ngobrol sama temen sebelah", type: "D" },
    ],
  },
  {
    id: 5,
    question: "IPK targetmu...",
    options: [
      { text: "Cum laude minimal!", type: "A" },
      { text: "Di atas 3 cukup lah", type: "B" },
      { text: "Yang penting lulus", type: "C" },
      { text: "IPK ga semua-muanya dalam hidup", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kegiatan di luar kelas...",
    options: [
      { text: "Fokus akademik, jarang ikut organisasi", type: "A" },
      { text: "Balance kuliah dan organisasi", type: "B" },
      { text: "Aktivis, organisasi nomor satu", type: "C" },
      { text: "Hangout dan socializing", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat UAS tinggal seminggu lagi...",
    options: [
      { text: "Udah belajar dari sebulan lalu", type: "A" },
      { text: "Mulai cicil belajar sekarang", type: "B" },
      { text: "Ntar aja, masih lama", type: "C" },
      { text: "Cari bocoran soal ke senior", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Hubunganmu dengan dosen...",
    options: [
      { text: "Dekat, sering konsultasi", type: "A" },
      { text: "Professional, seperlunya aja", type: "B" },
      { text: "Kenal nama doang", type: "C" },
      { text: "Dosen mana? Yang ngajar hari apa?", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kerja kelompok menurutmu...",
    options: [
      { text: "Kesempatan belajar bareng", type: "A" },
      { text: "Tergantung kelompoknya siapa", type: "B" },
      { text: "Numpang nama aja kadang", type: "C" },
      { text: "Yang penting ada yang kerja", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Buku kuliahmu...",
    options: [
      { text: "Beli ori, lengkap semua", type: "A" },
      { text: "Fotokopi yang penting", type: "B" },
      { text: "Pinjam perpus atau temen", type: "C" },
      { text: "PDF bajakan solusinya", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau ada jam kosong...",
    options: [
      { text: "Belajar atau review materi", type: "A" },
      { text: "Istirahat di sekitar kampus", type: "B" },
      { text: "Pulang atau jalan-jalan", type: "C" },
      { text: "Nongkrong sama geng", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mimpimu setelah lulus...",
    options: [
      { text: "S2 atau karir professional", type: "A" },
      { text: "Kerja di perusahaan bagus", type: "B" },
      { text: "Entrepreneurship atau freelance", type: "C" },
      { text: "Yang penting happy dan cukup", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mahasiswa Kupu-Kupu",
    emoji: "🦋",
    description: "Kuliah Pulang Kuliah Pulang! Kamu tipe mahasiswa rajin yang fokus akademik. IPK tinggi adalah prioritas dan kamu jarang bolos. Perpustakaan adalah rumah keduamu!",
    traits: ["Rajin", "Fokus", "Disiplin", "Akademis"],
    strengths: ["IPK tinggi", "Dosen kenal baik", "Lulus cepat"],
    weaknesses: ["Kurang gaul", "Miss pengalaman organisasi", "Bisa boring"],
    tips: ["Sekali-kali ikut kegiatan sosial", "Networking juga penting untuk karir"],
  },
  B: {
    type: "B",
    title: "Mahasiswa Balance",
    emoji: "⚖️",
    description: "Kamu tipe mahasiswa yang balance! Kuliah oke, organisasi jalan, social life ada. Kamu tau kapan harus serius dan kapan santai. The ideal college life!",
    traits: ["Seimbang", "Adaptif", "All-rounder", "Fleksibel"],
    strengths: ["IPK decent", "Punya network", "Pengalaman lengkap"],
    weaknesses: ["Jack of all trades", "Kadang overwhelmed"],
    tips: ["Jaga keseimbanganmu", "Fokus di hal yang paling passion"],
  },
  C: {
    type: "C",
    title: "Mahasiswa Aktivis",
    emoji: "📢",
    description: "Organisasi adalah hidupmu! Kamu lebih kenal basecamp daripada kelas. IPK mungkin biasa aja tapi soft skill dan leadership kamu top. Kampus tanpamu sepi!",
    traits: ["Aktif", "Leader", "Passionate", "Networker"],
    strengths: ["Leadership skill", "Banyak koneksi", "Pengalaman real"],
    weaknesses: ["IPK bisa neglected", "Kuliah bisa lama"],
    tips: ["Jangan lupakan akademik", "Balance tetap penting"],
  },
  D: {
    type: "D",
    title: "Mahasiswa Santuy",
    emoji: "😎",
    description: "Kuliah? Yang penting lulus! Kamu tipe mahasiswa yang enjoy the journey. Prioritasmu adalah happy dan ga stress. Deadline adalah reminder, bukan kewajiban!",
    traits: ["Santai", "Easygoing", "Sosial", "Optimis"],
    strengths: ["Ga stress", "Banyak temen", "Happy vibes"],
    weaknesses: ["IPK bisa rendah", "Kuliah bisa lama", "Dosen ga kenal"],
    tips: ["Sesekali serius juga perlu", "Masa depan perlu dipikirkan"],
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
