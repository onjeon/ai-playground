// Gaya Jalan Kat Mall
// Fun test tentang personality bila pergi mall

export const questions = [
  {
    id: 1,
    question: "Sampai mall, first destination kau?",
    options: [
      { text: "Terus ke kedai yang nak pergi!", type: "A" },
      { text: "Jalan-jalan survey semua kedai dulu", type: "B" },
      { text: "Food court atau cafe dulu!", type: "C" },
      { text: "Ikut je flow, mana kaki bawa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sales assistant approach kau. Response?",
    options: [
      { text: "Terus cakap 'tengok-tengok je'", type: "A" },
      { text: "Dengar pitch dia, mana tau best", type: "B" },
      { text: "Avoid eye contact, jalan laju", type: "C" },
      { text: "Layan sembang, beli tak beli belakang", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Berapa lama biasanya kau spend kat mall?",
    options: [
      { text: "Quick 1 jam - in and out!", type: "A" },
      { text: "2-3 jam, moderate exploration", type: "B" },
      { text: "Half day! Full experience!", type: "C" },
      { text: "Ikut mood, kadang lama kadang kejap", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Window shopping vs purposeful shopping. Kau jenis mana?",
    options: [
      { text: "Purposeful! Pergi, beli, balik!", type: "A" },
      { text: "Mix of both, flexible", type: "B" },
      { text: "Window shopping is the best part!", type: "C" },
      { text: "Depends on the day", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Escalator ke lift? Preference?",
    options: [
      { text: "Escalator, enjoy the view!", type: "A" },
      { text: "Lift, faster!", type: "B" },
      { text: "Stairs for exercise!", type: "C" },
      { text: "Mana dekat, guna tu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Nampak kedai baru bukak. Apa kau buat?",
    options: [
      { text: "Masuk tengok! Curious!", type: "A" },
      { text: "Check dari luar je, kalau menarik baru masuk", type: "B" },
      { text: "Note untuk next time, tak masuk sekarang", type: "C" },
      { text: "Tak kisah, stick to usual kedai", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Mall crowded gila time weekend. Survival mode?",
    options: [
      { text: "Redah je! Part of experience!", type: "A" },
      { text: "Go early morning atau late night", type: "B" },
      { text: "Avoid weekend, weekday gang!", type: "C" },
      { text: "Online shopping better actually", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Food court atau restaurant proper?",
    options: [
      { text: "Food court! Variety and budget!", type: "A" },
      { text: "Restaurant untuk proper meal", type: "B" },
      { text: "Ikut occasion dan company", type: "C" },
      { text: "Grab and go, makan kat kereta", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Try fitting room, baju tak muat. Feeling?",
    options: [
      { text: "Try size lain! Kena beli something!", type: "A" },
      { text: "Takpe, cari design lain", type: "B" },
      { text: "Sedih sikit, tapi move on", type: "C" },
      { text: "Confirm tak beli, terus keluar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Balik dari mall, beg shopping kau?",
    options: [
      { text: "Penuh! Retail therapy success!", type: "A" },
      { text: "Ada sikit-sikit, planned purchases", type: "B" },
      { text: "Kosong, window shop je", type: "C" },
      { text: "Food only, tak beli benda lain", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mall Explorer",
    emoji: "🛍️",
    description: "Mall adalah playground kau! Explore semua kedai, try benda baru, retail therapy is real. Every visit adalah adventure, balik tangan tak pernah kosong!",
    traits: ["Adventurous", "Curious", "Shopaholic", "Enthusiastic"],
    strengths: ["Know all the shops", "Find best deals", "Always updated"],
    weaknesses: ["Impulse buying", "Overspending", "Time flies"],
    tips: ["Set a budget", "Make a list first"],
  },
  B: {
    type: "B",
    title: "Strategic Shopper",
    emoji: "🎯",
    description: "Kau ada plan bila pergi mall! Know what to buy, where to go, efficient shopping. Balance antara explore dan purposeful. Smart mall user!",
    traits: ["Strategic", "Efficient", "Planned", "Balanced"],
    strengths: ["Time efficient", "Budget controlled", "Goal achieved"],
    weaknesses: ["Might miss discoveries", "Too rigid sometimes"],
    tips: ["Allow some spontaneity", "Explore once in a while"],
  },
  C: {
    type: "C",
    title: "Window Shopping Pro",
    emoji: "👀",
    description: "Tengok, appreciate, tapi tak beli! Mall untuk kau adalah visual experience. Enjoy the atmosphere, AC free, exercise free. Money stays in wallet!",
    traits: ["Observant", "Budget-conscious", "Patient", "Content"],
    strengths: ["Save money", "No impulse", "Enjoy without buying"],
    weaknesses: ["Miss good deals", "Friends might get bored"],
    tips: ["Treat yourself sometimes", "Buying is okay too"],
  },
  D: {
    type: "D",
    title: "Chill Mall Visitor",
    emoji: "😎",
    description: "Mall? Go with the flow! Tak ada agenda, jalan ikut mood, beli kalau nak. Low pressure mall experience. Relaxed and easy-going!",
    traits: ["Relaxed", "Flexible", "No pressure", "Easy-going"],
    strengths: ["No stress shopping", "Enjoy the moment", "Adaptable"],
    weaknesses: ["Might waste time", "No clear purpose"],
    tips: ["Set small goals", "Make it productive too"],
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
