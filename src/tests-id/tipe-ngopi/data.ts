// Tipe Ngopi Kamu
// Tes ini mengungkap gaya ngopi dan budaya kopi kamu ala Indonesia!

export const questions = [
  {
    id: 1,
    question: "Tempat ngopi favorit kamu...",
    options: [
      { text: "Cafe aesthetic yang instagramable", type: "A" },
      { text: "Warkop atau warung kopi pinggir jalan", type: "B" },
      { text: "Di rumah, bikin sendiri lebih enak", type: "C" },
      { text: "Coffee shop brand ternama (Starbucks, Fore, dll)", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Jenis kopi yang biasa kamu minum...",
    options: [
      { text: "Kopi susu kekinian (es kopi susu, palm sugar latte)", type: "A" },
      { text: "Kopi hitam tubruk atau kopi sachet", type: "B" },
      { text: "Manual brew: V60, French press, atau pour over", type: "C" },
      { text: "Espresso based: americano, cappuccino, latte", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kapan biasanya kamu ngopi?",
    options: [
      { text: "Nongkrong bareng temen atau gebetan", type: "A" },
      { text: "Pagi sebelum beraktivitas, wajib!", type: "B" },
      { text: "Sore atau malam sambil me-time", type: "C" },
      { text: "Saat kerja atau meeting, butuh fokus", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Budget ngopi per cup biasanya...",
    options: [
      { text: "25-40rb, worth it kalau tempatnya enak", type: "A" },
      { text: "5-15rb, yang penting kafeinnya", type: "B" },
      { text: "Beli beans sendiri, lebih hemat jangka panjang", type: "C" },
      { text: "40rb+, premium coffee experience", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ngopi sambil ngapain?",
    options: [
      { text: "Foto-foto dan update social media", type: "A" },
      { text: "Ngobrol ngalor ngidul atau main catur", type: "B" },
      { text: "Baca buku atau journaling", type: "C" },
      { text: "Kerja atau bikin konten", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kalau kopi tidak sesuai selera...",
    options: [
      { text: "Kasih review jujur, feedback penting", type: "A" },
      { text: "Diminum aja, kopi ya kopi", type: "B" },
      { text: "Analisis apa yang kurang, note untuk next time", type: "C" },
      { text: "Komplain dan minta diganti", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Origin kopi yang kamu prefer...",
    options: [
      { text: "Yang penting enak, tidak terlalu pikirin origin", type: "A" },
      { text: "Lokal aja: Toraja, Gayo, Flores", type: "B" },
      { text: "Single origin specialty, tau prosesnya", type: "C" },
      { text: "House blend dari brand favorit", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Peralatan ngopi di rumah...",
    options: [
      { text: "Tidak ada, selalu ngopi di luar", type: "A" },
      { text: "Gelas dan air panas, simple", type: "B" },
      { text: "Lengkap: grinder, dripper, scale, gooseneck", type: "C" },
      { text: "Mesin espresso atau coffee maker", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Reaksi kalau sehari tidak ngopi...",
    options: [
      { text: "Biasa aja, ngopi cuma untuk social", type: "A" },
      { text: "Pusing dan tidak bisa konsentrasi", type: "B" },
      { text: "Tetap minum, sudah jadi ritual", type: "C" },
      { text: "Productivity drop drastis", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ngopi bareng siapa yang paling seru?",
    options: [
      { text: "Squad atau circle pertemanan", type: "A" },
      { text: "Siapa aja yang ada di warkop", type: "B" },
      { text: "Solo, me-time paling nikmat", type: "C" },
      { text: "Rekan kerja atau client, networking", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Social Coffee Butterfly",
    emoji: "🦋",
    description: "Buat kamu, ngopi adalah ajang social! Tempat aesthetic, foto-foto bagus, dan nongkrong bareng adalah prioritas. Kopi adalah excuse untuk hangout!",
    traits: ["Social", "Trendy", "Aesthetic-lover", "Extrovert"],
    strengths: ["Punya banyak teman ngopi", "Tau tempat-tempat kekinian", "Content creator potential"],
    weaknesses: ["Kurang fokus ke rasa kopinya", "Budget bisa bengkak"],
    tips: ["Sesekali appreciate kopinya juga", "Quality time tidak harus di tempat mahal"],
  },
  B: {
    type: "B",
    title: "Pecinta Kopi Tradisional",
    emoji: "☕",
    description: "Kamu adalah pecinta kopi sejati ala Indonesia! Warkop adalah rumah kedua, kopi tubruk adalah sahabat, dan ngobrol santai adalah ritual wajib.",
    traits: ["Traditional", "Simple", "Authentic", "Down-to-earth"],
    strengths: ["Appreciate kopi lokal", "Hemat budget", "Genuine coffee lover"],
    weaknesses: ["Kadang underestimate specialty coffee"],
    tips: ["Coba sesekali explore coffee shop", "Kopi Indonesia memang the best!"],
  },
  C: {
    type: "C",
    title: "Home Barista Enthusiast",
    emoji: "🏠",
    description: "Kamu adalah home barista yang passionate! Bikin kopi sendiri adalah ritual yang tidak bisa diganggu. Quality control ada di tanganmu sendiri.",
    traits: ["DIY", "Passionate", "Knowledge-seeker", "Perfectionist"],
    strengths: ["Tau proses kopi dalam-dalam", "Hemat jangka panjang", "Selalu dapat kopi sesuai selera"],
    weaknesses: ["Investasi awal besar", "Bisa terlalu nerdy"],
    tips: ["Share knowledge ke teman-teman!", "Balance antara hobby dan enjoyment"],
  },
  D: {
    type: "D",
    title: "Productivity Caffeine Warrior",
    emoji: "💼",
    description: "Buat kamu, kopi adalah fuel untuk produktivitas! Coffee shop adalah kantor kedua, dan kafein adalah partner kerja yang tidak pernah mengkhianati.",
    traits: ["Productive", "Professional", "Efficient", "Workaholic"],
    strengths: ["Highly productive", "Tau exactly apa yang dibutuhkan", "Efficient"],
    weaknesses: ["Kadang lupa enjoy momen ngopi", "Caffeine dependent"],
    tips: ["Sesekali ngopi tanpa laptop", "Me-time juga penting untuk recharge"],
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
