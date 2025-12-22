// Gaya Healing Kamu
// Tes ini mengungkap cara kamu menyembuhkan diri dan recharge energy!

export const questions = [
  {
    id: 1,
    question: "Saat merasa lelah dan butuh istirahat, kamu prefer...",
    options: [
      { text: "Sendiri di rumah, recharge dalam ketenangan", type: "A" },
      { text: "Keluar rumah, ganti suasana", type: "B" },
      { text: "Bersama orang-orang tersayang", type: "C" },
      { text: "Aktivitas fisik atau olahraga", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Weekend healing ideal menurutmu...",
    options: [
      { text: "Rebahan, nonton, dan self-care di rumah", type: "A" },
      { text: "Trip ke tempat baru, explore", type: "B" },
      { text: "Quality time dengan keluarga atau teman", type: "C" },
      { text: "Gym, jogging, atau aktivitas outdoor", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Musik atau media yang kamu pilih saat butuh healing...",
    options: [
      { text: "Lo-fi, ambient, atau instrumen tenang", type: "A" },
      { text: "Podcast atau audiobook, belajar sesuatu baru", type: "B" },
      { text: "Playlist nostalgic atau lagu-lagu kenangan", type: "C" },
      { text: "Upbeat music yang bikin semangat", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Makanan untuk heal diri sendiri...",
    options: [
      { text: "Comfort food, makanan favorit sejak kecil", type: "A" },
      { text: "Mencoba kuliner baru dan exciting", type: "B" },
      { text: "Masak sendiri atau makan bareng orang tersayang", type: "C" },
      { text: "Healthy food, junk food bikin makin down", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tempat healing favorit...",
    options: [
      { text: "Kamar atau sudut nyaman di rumah", type: "A" },
      { text: "Cafe, pantai, atau tempat dengan view bagus", type: "B" },
      { text: "Rumah keluarga atau tempat penuh kenangan", type: "C" },
      { text: "Gym, taman, atau alam terbuka", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Aktivitas yang paling effective untuk heal...",
    options: [
      { text: "Journaling, meditasi, atau self-reflection", type: "A" },
      { text: "Shopping, jalan-jalan, atau retail therapy", type: "B" },
      { text: "Curhat atau ngobrol deep dengan orang dekat", type: "C" },
      { text: "Olahraga atau aktivitas fisik yang intens", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat sedih atau down, kamu butuh...",
    options: [
      { text: "Waktu sendiri untuk proses perasaan", type: "A" },
      { text: "Distraksi dan aktivitas baru", type: "B" },
      { text: "Pelukan dan support dari orang dekat", type: "C" },
      { text: "Release energy lewat aktivitas fisik", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Budget untuk healing biasanya...",
    options: [
      { text: "Minimal, healing tidak harus mahal", type: "A" },
      { text: "Invest untuk experience yang worth it", type: "B" },
      { text: "Tergantung, kadang treat diri kadang hemat", type: "C" },
      { text: "Gym membership atau aktivitas rutin", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Durasi healing yang kamu butuhkan...",
    options: [
      { text: "Lama, perlu waktu untuk benar-benar recover", type: "A" },
      { text: "Cukup sehari atau weekend", type: "B" },
      { text: "Tergantung seberapa down", type: "C" },
      { text: "Cepat, aktivitas fisik langsung refresh", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Social media saat healing...",
    options: [
      { text: "Detox, jauh dari sosmed", type: "A" },
      { text: "Share journey healing, dokumentasi", type: "B" },
      { text: "Chat sama orang-orang dekat", type: "C" },
      { text: "Consume konten motivational atau fitness", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Setelah healing, tanda kamu sudah recharge...",
    options: [
      { text: "Pikiran lebih jernih dan tenang", type: "A" },
      { text: "Excited untuk aktivitas baru", type: "B" },
      { text: "Feel loved dan supported", type: "C" },
      { text: "Badan segar dan energized", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Healing buat kamu adalah...",
    options: [
      { text: "Reconnect dengan diri sendiri", type: "A" },
      { text: "Experience dan adventure baru", type: "B" },
      { text: "Reconnect dengan orang tersayang", type: "C" },
      { text: "Reset fisik dan mental lewat gerakan", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Introspective Healer",
    emoji: "🧘",
    description: "Kamu heal dengan cara introspeksi dan ketenangan. Waktu sendiri, journaling, dan self-reflection adalah cara terbaikmu untuk recover. Kamu memproses emosi dari dalam.",
    traits: ["Introspektif", "Self-aware", "Independent", "Reflektif"],
    strengths: ["Deep healing", "Self-sufficient", "Tidak dependent pada orang lain"],
    weaknesses: ["Bisa terlalu isolasi", "Kadang terlalu lama sendirian"],
    tips: ["Balance dengan interaksi sosial", "Sharing kadang juga healing"],
  },
  B: {
    type: "B",
    title: "Adventure Healer",
    emoji: "🌍",
    description: "Kamu heal lewat pengalaman dan petualangan baru! Ganti suasana, explore tempat baru, dan aktivitas exciting adalah cara terbaikmu untuk reset. Movement adalah medicine.",
    traits: ["Adventurous", "Spontan", "Experience-seeker", "Dynamic"],
    strengths: ["Fresh perspectives", "Memorable healing", "Not dwelling"],
    weaknesses: ["Bisa avoiding dalam emotions", "Expensive kadang"],
    tips: ["Sesekali stay dan reflect", "Healing tidak selalu harus pergi"],
  },
  C: {
    type: "C",
    title: "Social Healer",
    emoji: "💕",
    description: "Kamu heal lewat koneksi dengan orang tersayang! Quality time, curhat, dan pelukan adalah medicine terbaikmu. Kamu energized oleh love dan support dari circle-mu.",
    traits: ["Social", "Emotionally connected", "Warm", "Supportive"],
    strengths: ["Strong support system", "Heal while helping others", "Feel loved"],
    weaknesses: ["Dependent pada orang lain", "Susah kalau sendirian"],
    tips: ["Develop self-soothing skills", "Learn to be alone sometimes"],
  },
  D: {
    type: "D",
    title: "Physical Healer",
    emoji: "💪",
    description: "Kamu heal lewat aktivitas fisik! Exercise, olahraga, dan gerakan adalah cara terbaikmu untuk release stress dan reset mental. Body and mind connected untuk kamu.",
    traits: ["Active", "Energetic", "Physical", "Disciplined"],
    strengths: ["Healthy coping mechanism", "Double benefit (mental+fisik)", "Quick recovery"],
    weaknesses: ["Bisa over-exercise", "Avoiding emotional processing"],
    tips: ["Balance dengan rest days", "Emotional processing juga penting"],
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
