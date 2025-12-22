// Tipe Pengguna Twitter Indonesia Kamu
// Tes ini mengungkap tipe pengguna Twitter seperti apa kamu!

export const questions = [
  {
    id: 1,
    question: "Frekuensi nge-tweet...",
    options: [
      { text: "Aktif banget, timeline harus rame", type: "A" },
      { text: "Sesekali, kalau ada yang mau dishare", type: "B" },
      { text: "Jarang, lebih suka baca dan RT", type: "C" },
      { text: "Lurker, baca doang tidak pernah tweet", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Konten yang biasa kamu tweet...",
    options: [
      { text: "Opini dan pemikiran personal", type: "A" },
      { text: "Jokes dan meme", type: "B" },
      { text: "Update aktivitas dan curhat", type: "C" },
      { text: "Share artikel dan informasi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat ada trending topic kontroversial...",
    options: [
      { text: "Langsung ikut nimbrung dan kasih opini", type: "A" },
      { text: "Observe dulu, kalau perlu baru komen", type: "B" },
      { text: "Bikin jokes atau meme tentang itu", type: "C" },
      { text: "Skip, tidak mau terlibat drama", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Jumlah followers vs following...",
    options: [
      { text: "Followers lebih banyak, ada influence", type: "A" },
      { text: "Seimbang, give and take", type: "B" },
      { text: "Following lebih banyak, banyak yang menarik", type: "C" },
      { text: "Tidak peduli angka, yang penting konten", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat tweet kamu viral...",
    options: [
      { text: "Senang dan engage dengan semua reply", type: "A" },
      { text: "Kaget, tidak expect viral", type: "B" },
      { text: "Nervous, takut di-cancel", type: "C" },
      { text: "Belum pernah viral, tidak relate", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Reaksi saat ada yang tidak setuju dengan tweet kamu...",
    options: [
      { text: "Debate sampai menang atau block", type: "A" },
      { text: "Jelaskan perspektif, kalau tidak mau ya sudah", type: "B" },
      { text: "Ignore, tidak worth the energy", type: "C" },
      { text: "Reflect, mungkin memang salah", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Akun Twitter kamu...",
    options: [
      { text: "Real name/identity, nothing to hide", type: "A" },
      { text: "Pseudonym tapi close friends tau", type: "B" },
      { text: "Anonymous, total privacy", type: "C" },
      { text: "Professional/brand account", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Thread panjang...",
    options: [
      { text: "Sering bikin, suka elaborate thoughts", type: "A" },
      { text: "Baca sampai habis kalau topiknya menarik", type: "B" },
      { text: "Skip, terlalu panjang untuk Twitter", type: "C" },
      { text: "Bookmark untuk baca nanti (tapi tidak pernah dibaca)", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Twitter Space atau live audio...",
    options: [
      { text: "Sering ikut sebagai speaker", type: "A" },
      { text: "Join sebagai listener, interesting", type: "B" },
      { text: "Jarang, lebih suka baca", type: "C" },
      { text: "Tidak pernah, tidak tau caranya", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Mute dan block...",
    options: [
      { text: "Aktif, peace of mind penting", type: "A" },
      { text: "Sesekali, kalau sudah keterlaluan", type: "B" },
      { text: "Jarang, biar aja ada berbagai perspektif", type: "C" },
      { text: "Tidak pernah, malas ngurus", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Quote tweet vs reply...",
    options: [
      { text: "Quote tweet, biar followers juga lihat", type: "A" },
      { text: "Reply langsung, lebih personal", type: "B" },
      { text: "Tergantung context dan tujuan", type: "C" },
      { text: "Jarang keduanya, passive user", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Twitter buat kamu adalah...",
    options: [
      { text: "Platform untuk express dan discuss", type: "A" },
      { text: "Sumber berita dan informasi", type: "B" },
      { text: "Entertainment dan hiburan", type: "C" },
      { text: "Tempat observe tanpa participate", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Twitter Warrior",
    emoji: "⚔️",
    description: "Kamu adalah pengguna Twitter yang aktif dan vocal! Tidak takut express opini, engage dalam diskusi, dan timeline-mu selalu hidup. Twitter adalah arena tempat kamu bersuara.",
    traits: ["Vocal", "Opinionated", "Engaged", "Influential"],
    strengths: ["Suara didengar", "Good at discourse", "Build community"],
    weaknesses: ["Bisa exhausting", "Risk drama dan cancel", "Too invested"],
    tips: ["Pick your battles wisely", "Istirahat dari Twitter kadang"],
  },
  B: {
    type: "B",
    title: "Balanced Tweeter",
    emoji: "⚖️",
    description: "Kamu adalah pengguna Twitter yang seimbang! Tweet saat ada yang worth sharing, engage saat perlu, dan tau kapan harus diam. Healthy relationship dengan platform.",
    traits: ["Balanced", "Selective", "Thoughtful", "Moderate"],
    strengths: ["Quality over quantity", "Tidak burnout", "Respectful engagement"],
    weaknesses: ["Kadang kurang visible", "Miss viral moments"],
    tips: ["Konsistensi bisa boost presence", "Engage lebih aktif kadang"],
  },
  C: {
    type: "C",
    title: "Meme Lord",
    emoji: "😂",
    description: "Kamu adalah entertainer Twitter! Jokes, meme, dan konten lucu adalah kontribusimu. Timeline followers jadi lebih cerah karena kehadiranmu.",
    traits: ["Funny", "Creative", "Witty", "Light-hearted"],
    strengths: ["Mood booster", "Creative mind", "Relatable content"],
    weaknesses: ["Susah serius", "Kadang jokes miss", "Not taken seriously"],
    tips: ["Balance humor dengan substance", "Serious topics kadang perlu"],
  },
  D: {
    type: "D",
    title: "Silent Observer",
    emoji: "👀",
    description: "Kamu adalah pengamat Twitter! Lebih suka consume daripada produce content. Twitter adalah sumber informasi dan entertainment tanpa perlu aktif participate.",
    traits: ["Observer", "Passive", "Information-seeker", "Private"],
    strengths: ["No drama", "Well-informed", "Privacy maintained"],
    weaknesses: ["Miss connection opportunities", "Voice tidak terdengar"],
    tips: ["Sesekali engage, bisa dapat koneksi bagus", "Share perspective juga valuable"],
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
