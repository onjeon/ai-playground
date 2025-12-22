// Tes Tingkat Kepo Kamu
// Seberapa kepo kamu dengan urusan orang lain?

export const questions = [
  {
    id: 1,
    question: "Saat teman upload story dengan orang baru...",
    options: [
      { text: "Langsung DM tanya 'siapa tuh?'", type: "A" },
      { text: "Stalking profil orang tersebut diam-diam", type: "B" },
      { text: "Lihat sekilas tapi tidak terlalu penasaran", type: "C" },
      { text: "Skip, bukan urusan saya", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ada gosip baru tentang artis atau influencer...",
    options: [
      { text: "Baca semua artikel dan komen netizen", type: "A" },
      { text: "Scroll-scroll thread Twitter tentang itu", type: "B" },
      { text: "Tau headline-nya aja", type: "C" },
      { text: "Tidak peduli gosip selebritis", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Teman cerita tentang crush baru...",
    options: [
      { text: "Interview detail: siapa, kerja apa, dari mana", type: "A" },
      { text: "Minta lihat fotonya dong!", type: "B" },
      { text: "Dengerin tapi tidak banyak tanya", type: "C" },
      { text: "Support aja, detailnya terserah dia", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Dengar tetangga ribut di sebelah...",
    options: [
      { text: "Denger-dengerin dari balik dinding", type: "A" },
      { text: "Penasaran tapi tetap jaga jarak", type: "B" },
      { text: "Cuek, privacy orang", type: "C" },
      { text: "Pakai headphone, tidak mau tau", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ada notification story teman yang jarang upload...",
    options: [
      { text: "Langsung buka, pasti ada yang spesial!", type: "A" },
      { text: "Lihat pas lagi scrolling", type: "B" },
      { text: "Skip kalau tidak terlalu dekat", type: "C" },
      { text: "Jarang lihat story orang", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat ngobrol dengan teman tentang orang lain...",
    options: [
      { text: "Excited ngobrolin dan analisis", type: "A" },
      { text: "Ikut nimbrung tapi tidak terlalu aktif", type: "B" },
      { text: "Dengerin tapi jarang komen", type: "C" },
      { text: "Ganti topik, tidak suka membicarakan orang", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Mantan teman upload foto dengan pasangan baru...",
    options: [
      { text: "Stalking sejauh mungkin ke belakang", type: "A" },
      { text: "Lihat beberapa foto terakhir", type: "B" },
      { text: "Scroll lewat aja", type: "C" },
      { text: "Sudah unfollow dari dulu", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Teman curhat tapi tidak cerita detail...",
    options: [
      { text: "Tanya terus sampai dia cerita semua", type: "A" },
      { text: "Kasih space tapi tetap penasaran", type: "B" },
      { text: "Tunggu dia siap cerita sendiri", type: "C" },
      { text: "Tidak perlu tau detail, yang penting support", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Ada drama di grup chat kantor/sekolah...",
    options: [
      { text: "Scroll ke atas baca dari awal!", type: "A" },
      { text: "Baca ringkasannya dari teman", type: "B" },
      { text: "Skip, males baca drama", type: "C" },
      { text: "Mute grup, tidak mau terlibat", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Orang yang baru kenal update relationship status...",
    options: [
      { text: "Langsung kabar-kabarin teman yang kenal juga", type: "A" },
      { text: "Penasaran tapi simpan sendiri", type: "B" },
      { text: "Oh ya udah, lanjut scroll", type: "C" },
      { text: "Tidak notice perubahan itu", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Reuni dengan teman lama, kamu pasti tanya...",
    options: [
      { text: "Semua detail: kerja apa, pacaran sama siapa, gaji berapa", type: "A" },
      { text: "Update general tentang kabar dan kehidupan", type: "B" },
      { text: "Ngobrol ringan, tidak perlu terlalu detail", type: "C" },
      { text: "Cerita tentang diri sendiri lebih banyak", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Filosofi kamu tentang urusan orang lain...",
    options: [
      { text: "Tahu banyak = banyak insight dan connections", type: "A" },
      { text: "Penasaran itu manusiawi", type: "B" },
      { text: "Yang penting fokus ke diri sendiri", type: "C" },
      { text: "Urusan orang bukan urusanku", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Super Kepo",
    emoji: "🔍",
    description: "Kamu adalah detective sosial! Tidak ada yang luput dari radarmu. Stalking level expert dan selalu up to date dengan kabar terbaru dari circle pertemanan.",
    traits: ["Curious", "Observant", "Social connector", "Information gatherer"],
    strengths: ["Banyak tau info", "Good networker", "Rarely surprised"],
    weaknesses: ["Bisa terkesan nosy", "Invade privacy", "Drama magnet"],
    tips: ["Respect boundaries", "Tidak semua perlu diketahui", "Fokus ke diri sendiri juga"],
  },
  B: {
    type: "B",
    title: "Kepo Moderat",
    emoji: "👀",
    description: "Kamu penasaran tapi masih bisa kontrol! Natural curiosity ada tapi tau batasan. Stalking sesekali okay, tapi tidak obsesif.",
    traits: ["Balanced curious", "Respectful", "Interested but controlled"],
    strengths: ["Aware of surroundings", "Not obsessive", "Healthy interest"],
    weaknesses: ["Kadang masih overstep", "FOMO sesekali"],
    tips: ["Keep the balance", "Curiosity bagus tapi jangan sampai mengganggu"],
  },
  C: {
    type: "C",
    title: "Low Key Kepo",
    emoji: "😌",
    description: "Kamu cukup cuek dengan urusan orang lain! Tau ada gossip atau drama tapi tidak terlalu terpengaruh. Focus on your own lane.",
    traits: ["Independent", "Private", "Focused", "Low drama"],
    strengths: ["No drama", "Peaceful", "Self-focused"],
    weaknesses: ["Kadang miss important info", "Bisa terkesan tidak peduli"],
    tips: ["Sesekali connect dengan orang lain", "Tau kabar teman juga penting"],
  },
  D: {
    type: "D",
    title: "Anti Kepo",
    emoji: "🙈",
    description: "Kamu benar-benar tidak peduli dengan urusan orang lain! Privacy adalah sacred dan kamu menghargai itu untuk diri sendiri dan orang lain.",
    traits: ["Very private", "Unbothered", "Self-contained", "Minimal drama"],
    strengths: ["Drama free", "Respectful of privacy", "Focused on self"],
    weaknesses: ["Bisa disconnect dari social circle", "Miss opportunities to help"],
    tips: ["Being connected is okay", "Tahu kabar orang bukan selalu kepo"],
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
