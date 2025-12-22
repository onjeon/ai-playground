// Gaya Facebook Kau
// Test viral tentang Facebook personality style

export const questions = [
  {
    id: 1,
    question: "Facebook kau guna untuk apa mainly?",
    options: [
      { text: "Stalk orang dan baca drama!", type: "A" },
      { text: "Connect dengan family dan kawan lama", type: "B" },
      { text: "Join group hobi dan interest", type: "C" },
      { text: "Marketplace jual beli je", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila ada drama kat Facebook, kau...",
    options: [
      { text: "Baca semua comments dengan excited!", type: "A" },
      { text: "Tengok dari jauh je, tak comment", type: "B" },
      { text: "Ignore, tak berminat drama", type: "C" },
      { text: "Share dengan kawan 'korang tengok ni!'", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Profile picture kau update berapa kerap?",
    options: [
      { text: "Setiap bulan ada gambar baru!", type: "A" },
      { text: "Setahun sekali maybe", type: "B" },
      { text: "Sama je dari 5 tahun lepas", type: "C" },
      { text: "Ikut mood, random timing", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Birthday wishes kat Facebook, kau...",
    options: [
      { text: "Reply semua satu-satu dengan love!", type: "A" },
      { text: "Like je semua, malas reply", type: "B" },
      { text: "Ignore, birthday notification dah off", type: "C" },
      { text: "Post thank you general untuk semua", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Facebook memories muncul, apa reaction?",
    options: [
      { text: "Share balik dengan caption nostalgia!", type: "A" },
      { text: "Senyum tengok, tapi tak share", type: "B" },
      { text: "Cringe, delete terus!", type: "C" },
      { text: "Ignore je, tak check memories", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Group Facebook kau join berapa banyak?",
    options: [
      { text: "50+ groups semua jenis!", type: "A" },
      { text: "5-10 yang active je", type: "B" },
      { text: "1-2 je yang penting", type: "C" },
      { text: "Join banyak tapi mute semua", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kau share content jenis apa usually?",
    options: [
      { text: "News dan info penting", type: "A" },
      { text: "Memes dan benda funny", type: "B" },
      { text: "Jarang share, scroll je", type: "C" },
      { text: "Life updates dan achievements", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Friend request dari stranger, kau...",
    options: [
      { text: "Accept je, the more the merrier!", type: "A" },
      { text: "Check profile dulu baru decide", type: "B" },
      { text: "Ignore semua, kawan sebenar je", type: "C" },
      { text: "Let it pending forever", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila scroll Facebook, kau spend berapa lama?",
    options: [
      { text: "Berjam-jam tanpa sedar!", type: "A" },
      { text: "30 minit - 1 jam sehari", type: "B" },
      { text: "5 minit je, check notifications", type: "C" },
      { text: "Lupa bukak Facebook dah seminggu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Facebook status terakhir kau bila?",
    options: [
      { text: "Hari ni je ada update!", type: "A" },
      { text: "Bulan lepas rasanya", type: "B" },
      { text: "Tahun 2019 kot...", type: "C" },
      { text: "Tak ingat, lama sangat", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Facebook Veteran",
    emoji: "📘",
    description: "Kau OG Facebook user! Dari zaman Farmville sampai sekarang, Facebook is your second home. Tahu semua drama, semua birthday, semua gossip!",
    traits: ["Loyal user", "Social butterfly", "Connected", "Nostalgic"],
    strengths: ["Networking master", "Stay connected", "Information hub"],
    weaknesses: ["Addicted scrolling", "Too much time online", "Privacy concerns"],
    tips: ["Balance online time", "Protect your data!"],
  },
  B: {
    type: "B",
    title: "Moderate User",
    emoji: "👍",
    description: "Kau guna Facebook dengan balance! Tak obsess tapi masih connected. Keep in touch dengan important people tanpa overdo. Perfect equilibrium!",
    traits: ["Balanced", "Selective", "Practical", "Connected enough"],
    strengths: ["Healthy boundaries", "Quality connections", "Not addicted"],
    weaknesses: ["Sometimes miss updates", "Less engaged"],
    tips: ["Keep the balance", "You're doing great!"],
  },
  C: {
    type: "C",
    title: "Ghost Account",
    emoji: "👻",
    description: "Facebook kau ada tapi macam takde! Account untuk login je, jarang post atau engage. Mungkin dah move on ke platform lain!",
    traits: ["Private", "Minimal presence", "Evolved", "Low maintenance"],
    strengths: ["Not dependent on social media", "Real life focused", "Privacy protected"],
    weaknesses: ["Missing family updates", "Out of loop"],
    tips: ["Check sekali-sekala", "Family kat situ tau!"],
  },
  D: {
    type: "D",
    title: "Selective Engager",
    emoji: "🎯",
    description: "Kau guna Facebook untuk specific purposes je! Marketplace, certain groups, atau untuk kerja. Efficient dan targeted usage!",
    traits: ["Purposeful", "Practical", "Efficient", "Focused"],
    strengths: ["Use wisely", "Not wasting time", "Get what you need"],
    weaknesses: ["Miss social aspects", "Could be more connected"],
    tips: ["Sometimes social scrolling is okay", "Relax sikit!"],
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
