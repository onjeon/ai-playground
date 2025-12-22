// Tipe Kamu di Tongkrongan
// Tes ini mengungkap peranmu saat nongkrong bareng teman-teman!

export const questions = [
  {
    id: 1,
    question: "Saat diajak nongkrong, responmu...",
    options: [
      { text: "Langsung gas! Siap kapanpun dimanapun", type: "A" },
      { text: "Tanya dulu siapa aja dan dimana", type: "B" },
      { text: "Pertimbangkan jadwal dan mood dulu", type: "C" },
      { text: "Cari alasan untuk menolak dengan halus", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Peranmu dalam menentukan tempat nongkrong...",
    options: [
      { text: "Leader! Biasanya yang propose dan decide", type: "A" },
      { text: "Kasih opsi, tapi terserah yang lain", type: "B" },
      { text: "Ikut aja, dimana aja boleh", type: "C" },
      { text: "Kritik tempat yang dipilih tapi tidak kasih alternatif", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat ngobrol di tongkrongan...",
    options: [
      { text: "Dominan, banyak cerita dan jokes", type: "A" },
      { text: "Balance, kadang ngomong kadang dengerin", type: "B" },
      { text: "Lebih suka dengerin, comment sesekali", type: "C" },
      { text: "Main HP, sesekali nimbrung", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kalau ada yang curhat di tongkrongan...",
    options: [
      { text: "Kasih solusi dan advice langsung", type: "A" },
      { text: "Dengerin dengan empati, support", type: "B" },
      { text: "Coba alihkan ke topik lebih ringan", type: "C" },
      { text: "Awkward, tidak tau harus gimana", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Soal bayar-bayaran...",
    options: [
      { text: "Sering traktir atau bayar duluan", type: "A" },
      { text: "Fair split, hitung yang adil", type: "B" },
      { text: "Bayar bagian sendiri, tidak lebih", type: "C" },
      { text: "Suka nebeng atau lupa bawa dompet", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat ada drama di circle...",
    options: [
      { text: "Mediator, coba damaikan", type: "A" },
      { text: "Dengerin semua pihak, netral", type: "B" },
      { text: "Stay away, bukan urusan", type: "C" },
      { text: "Ikut-ikutan gosip tanpa mau terlibat langsung", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Jokes dan humor di tongkrongan...",
    options: [
      { text: "Pelawak utama, suka bikin ketawa", type: "A" },
      { text: "Nimbrung jokes, kadang hit kadang miss", type: "B" },
      { text: "Penonton yang appreciate, ketawa aja", type: "C" },
      { text: "Sering tidak paham jokes-nya", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kalau nongkrong sudah malam banget...",
    options: [
      { text: "Tetap stay, until everyone goes", type: "A" },
      { text: "Pamit kalau sudah capek atau besok ada acara", type: "B" },
      { text: "Biasanya yang pertama pulang", type: "C" },
      { text: "Tergantung seru atau tidaknya", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Foto dan dokumentasi nongkrong...",
    options: [
      { text: "Fotografer group, suka inisiatif foto bareng", type: "A" },
      { text: "Ikut foto kalau diajak", type: "B" },
      { text: "Hindari foto, tidak suka didokumentasi", type: "C" },
      { text: "Selfie sendiri, jarang foto grup", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Topik obrolan favorit...",
    options: [
      { text: "Gossip, drama, dan cerita orang", type: "A" },
      { text: "Deep talk tentang hidup dan impian", type: "B" },
      { text: "Hal ringan, jokes, dan meme", type: "C" },
      { text: "Hobi dan interest spesifik", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau ada teman yang bawa pacar ke tongkrongan...",
    options: [
      { text: "Welcome! Ajak kenalan dan inclusive", type: "A" },
      { text: "Okay, tapi agak awkward awalnya", type: "B" },
      { text: "Prefer tongkrongan tanpa plus one", type: "C" },
      { text: "Tergantung orangnya cocok atau tidak", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tongkrongan buat kamu adalah...",
    options: [
      { text: "Kebutuhan, harus rutin untuk mental health", type: "A" },
      { text: "Quality time yang perlu dijaga", type: "B" },
      { text: "Opsional, ikut kalau mood", type: "C" },
      { text: "Kewajiban sosial yang kadang berat", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Life of The Party",
    emoji: "🎉",
    description: "Kamu adalah jiwa tongkrongan! Tanpa kamu, nongkrong terasa kurang seru. Selalu punya cerita, jokes yang hit, dan energy yang menular. Teman-teman selalu ingin kamu ada.",
    traits: ["Energetic", "Entertaining", "Social butterfly", "Leader"],
    strengths: ["Bikin suasana seru", "Connector", "Memorable presence"],
    weaknesses: ["Capek jadi entertainment", "Expectation tinggi", "Susah low-key"],
    tips: ["Istirahat juga penting", "Tidak harus selalu on"],
  },
  B: {
    type: "B",
    title: "The Reliable Friend",
    emoji: "🤝",
    description: "Kamu adalah teman yang bisa diandalkan! Selalu ada, supportive, dan menjadi penyeimbang di grup. Tidak dominan tapi presence-mu terasa.",
    traits: ["Reliable", "Supportive", "Balanced", "Empathetic"],
    strengths: ["Dipercaya", "Good listener", "Stabilizer grup"],
    weaknesses: ["Kadang overlooked", "Terlalu mengalah"],
    tips: ["Voice out lebih", "Kamu juga layak jadi center of attention"],
  },
  C: {
    type: "C",
    title: "The Chill One",
    emoji: "😎",
    description: "Kamu adalah yang paling santai di tongkrongan! Tidak banyak drama, tidak ribet, dan go with the flow. Presence-mu menenangkan.",
    traits: ["Chill", "Easy-going", "Low maintenance", "Observer"],
    strengths: ["Tidak drama", "Flexible", "Calming presence"],
    weaknesses: ["Bisa terlihat tidak engaged", "Miss deep connections"],
    tips: ["Engage lebih aktif kadang", "Share thoughts lebih banyak"],
  },
  D: {
    type: "D",
    title: "The Reluctant Member",
    emoji: "📱",
    description: "Kamu sebenarnya lebih nyaman sendiri atau small group! Tongkrongan besar kadang overwhelming, tapi kamu tetap ikut karena tidak mau miss out.",
    traits: ["Introvert", "Selective", "Reserved", "Independent"],
    strengths: ["Quality over quantity", "Not fake", "Deep connections preferred"],
    weaknesses: ["Miss group dynamics", "Bisa terlihat antisosial"],
    tips: ["Small groups might suit you better", "Tidak harus ikut semua tongkrongan"],
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
