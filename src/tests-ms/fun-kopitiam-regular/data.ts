// Jenis Pelanggan Kopitiam
// Fun test tentang personality di kopitiam

export const questions = [
  {
    id: 1,
    question: "Sampai kopitiam, kau order macam mana?",
    options: [
      { text: "Kopi O kosong satu! Order standard!", type: "A" },
      { text: "Tengok menu dulu, decide later", type: "B" },
      { text: "Tanya uncle/aunty apa best hari ni", type: "C" },
      { text: "Try something new setiap kali!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Meja favorite kau kat kopitiam?",
    options: [
      { text: "Corner seat yang quiet!", type: "A" },
      { text: "Dekat TV tengok news/football", type: "B" },
      { text: "Mana-mana ada seat", type: "C" },
      { text: "Outdoor kalau ada angin", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Uncle/Aunty kopitiam kenal kau tak?",
    options: [
      { text: "Mestilah! Regular customer!", type: "A" },
      { text: "Muka familiar tapi tak ingat nama", type: "B" },
      { text: "Tak kenal, jarang pergi same place", type: "C" },
      { text: "Kenal dan sembang panjang!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Roti kaya kena bakar macam mana?",
    options: [
      { text: "Garing crispy dengan butter banjir!", type: "A" },
      { text: "Normal je, standard toast", type: "B" },
      { text: "Soft sikit, tak suka garing", type: "C" },
      { text: "Skip roti, fokus kopi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kopi terlalu manis/tak sedap. Apa kau buat?",
    options: [
      { text: "Tegur baik-baik, minta buat baru", type: "A" },
      { text: "Minum je, malas komplen", type: "B" },
      { text: "Tak datang sini lagi", type: "C" },
      { text: "Tambah air kosong, DIY adjust", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kopitiam vs cafe hipster. Pilihan hati?",
    options: [
      { text: "Kopitiam forever! Authentic vibes!", type: "A" },
      { text: "Dua-dua okay, ikut occasion", type: "B" },
      { text: "Cafe hipster ada WiFi!", type: "C" },
      { text: "Kopitiam pagi, cafe petang", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pagi weekday, kopitiam untuk kau adalah?",
    options: [
      { text: "Rutin wajib! Coffee fix!", type: "A" },
      { text: "Kadang-kadang bila tak rush", type: "B" },
      { text: "Weekend je, weekday buat sendiri", type: "C" },
      { text: "Remote work spot yang budget!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Share meja dengan stranger. Okay tak?",
    options: [
      { text: "Normal! Part of kopitiam culture!", type: "A" },
      { text: "Okay tapi awkward sikit", type: "B" },
      { text: "Prefer avoid, cari meja sendiri", type: "C" },
      { text: "Best! Dapat kawan baru!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Newspaper kat kopitiam. Kau baca tak?",
    options: [
      { text: "Mestilah! Classic kopitiam experience!", type: "A" },
      { text: "Scroll phone je sekarang", type: "B" },
      { text: "Tak baca, sibuk makan", type: "C" },
      { text: "Read headlines je, skim through", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bila kau rasa kopitiam paling best?",
    options: [
      { text: "Pagi-pagi, fresh brew!", type: "A" },
      { text: "Tea time, 3-4 petang", type: "B" },
      { text: "Bila-bila je, anytime good", type: "C" },
      { text: "Lepas kerja, wind down", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Kopitiam Purist",
    emoji: "☕",
    description: "Kau ni hardcore kopitiam fan! Order sama setiap kali, meja favorite ada, uncle kenal. Kopitiam adalah sacred ritual untuk kau. Traditional vibes matter!",
    traits: ["Traditional", "Loyal", "Consistent", "Ritualistic"],
    strengths: ["Know the best spots", "Authentic experience", "Reliable taste"],
    weaknesses: ["Resistant to change", "Miss new experiences"],
    tips: ["Try new items sometimes", "Explore different kopitiams"],
  },
  B: {
    type: "B",
    title: "Casual Kopitiam Visitor",
    emoji: "🍵",
    description: "Kau enjoy kopitiam casually! Pergi bila convenient, order ikut mood. Tak obsess tapi appreciate. Balanced kopitiam relationship!",
    traits: ["Casual", "Flexible", "Moderate", "Easygoing"],
    strengths: ["No addiction", "Enjoy variety", "Balanced lifestyle"],
    weaknesses: ["Miss kopitiam culture depth", "Not recognized by staff"],
    tips: ["Become a regular somewhere", "Build relationships"],
  },
  C: {
    type: "C",
    title: "Modern Kopitiam User",
    emoji: "📱",
    description: "Kopitiam untuk kau adalah functional space. Coffee fix, quick breakfast, maybe work sikit. Practical approach, not sentimental. Efficiency first!",
    traits: ["Practical", "Efficient", "Modern", "Task-focused"],
    strengths: ["Time efficient", "Get things done", "No unnecessary lingering"],
    weaknesses: ["Miss the experience", "Too rushed"],
    tips: ["Slow down sometimes", "Enjoy the atmosphere"],
  },
  D: {
    type: "D",
    title: "Kopitiam Social Butterfly",
    emoji: "🦋",
    description: "Kopitiam adalah social hub untuk kau! Sembang dengan uncle, kenal strangers, explore new things. Every visit adalah adventure dan networking opportunity!",
    traits: ["Social", "Adventurous", "Friendly", "Curious"],
    strengths: ["Make connections", "Know everyone", "Fun experiences"],
    weaknesses: ["Sometimes too chatty", "Time flies too fast"],
    tips: ["Balance social and alone time", "Don't disturb others working"],
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
