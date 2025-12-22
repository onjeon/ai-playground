// Tipe Penggemar Sepak Bola
// Kamu tipe suporter sepak bola yang kayak gimana?

export const questions = [
  {
    id: 1,
    question: "Saat tim favoritmu main...",
    options: [
      { text: "Nonton live! Beli tiket atau nobar", type: "A" },
      { text: "Streaming di rumah, fokus", type: "B" },
      { text: "Nonton kalau sempat, cek skor kalau tidak", type: "C" },
      { text: "Cek hasil aja setelah selesai", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Jersey dan merchandise...",
    options: [
      { text: "Punya koleksi! Original atau replica", type: "A" },
      { text: "Punya satu atau dua yang favorit", type: "B" },
      { text: "Jarang beli, pakai kaos biasa", type: "C" },
      { text: "Tidak punya", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pengetahuan tentang tim...",
    options: [
      { text: "Hafal semua pemain, formasi, stats!", type: "A" },
      { text: "Tau pemain utama dan sejarah dasar", type: "B" },
      { text: "Tau yang famous aja", type: "C" },
      { text: "Minimal, follow trending aja", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat tim kalah...",
    options: [
      { text: "Devastated! Mood rusak sehari", type: "A" },
      { text: "Kecewa tapi move on", type: "B" },
      { text: "Yah, ada pertandingan lain", type: "C" },
      { text: "Biasa aja, cuma game", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Liga yang paling diikuti...",
    options: [
      { text: "Liga besar Eropa dan Liga Indonesia!", type: "A" },
      { text: "Liga Eropa utama aja", type: "B" },
      { text: "Piala Dunia atau turnamen besar", type: "C" },
      { text: "Tidak terlalu mengikuti", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Debat sepak bola dengan teman...",
    options: [
      { text: "Sering! Defend tim sampai mati", type: "A" },
      { text: "Sesekali, kalau topiknya seru", type: "B" },
      { text: "Dengerin aja, ga terlalu passionate", type: "C" },
      { text: "Tidak ikut, tidak paham", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Transfer window dan berita tim...",
    options: [
      { text: "Follow closely! Rumors dan everything", type: "A" },
      { text: "Update berita besar aja", type: "B" },
      { text: "Tau kalau udah viral", type: "C" },
      { text: "Tidak mengikuti", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Fantasy league atau game bola...",
    options: [
      { text: "Active! FPL, FIFA, eFootball", type: "A" },
      { text: "Sesekali main", type: "B" },
      { text: "Jarang atau tidak pernah", type: "C" },
      { text: "Tidak main", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Nonton bareng (nobar)...",
    options: [
      { text: "Must! Atmosfer nobar yang seru", type: "A" },
      { text: "Kalau big match atau sama temen", type: "B" },
      { text: "Prefer sendiri, lebih fokus", type: "C" },
      { text: "Jarang nobar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pemain idola...",
    options: [
      { text: "Punya! Tau semua tentang dia", type: "A" },
      { text: "Ada beberapa yang dikagumi", type: "B" },
      { text: "Yang lagi bagus atau famous", type: "C" },
      { text: "Tidak punya idola spesifik", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Tim nasional Indonesia...",
    options: [
      { text: "Support penuh! Garuda in my blood", type: "A" },
      { text: "Support kalau ada turnamen", type: "B" },
      { text: "Sesekali nonton", type: "C" },
      { text: "Tidak terlalu mengikuti", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Sepak bola dalam hidupmu...",
    options: [
      { text: "Passion! Bagian dari identitas", type: "A" },
      { text: "Hobby yang disukai", type: "B" },
      { text: "Hiburan sesekali", type: "C" },
      { text: "Tidak terlalu penting", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ultras Sejati",
    emoji: "⚽",
    description: "Kamu adalah Ultras Sejati! Sepak bola adalah hidup. Kamu tau segalanya tentang tim, hadir di setiap pertandingan (live atau streaming), dan siap debat sampai pagi. True die-hard fan!",
    traits: ["Passionate", "Loyal", "Knowledgeable", "Dedicated"],
    strengths: ["True fan", "Community", "Emotional investment"],
    weaknesses: ["Bisa obsessive", "Mood tergantung hasil"],
    tips: ["Balance adalah kunci", "It's still just a game"],
  },
  B: {
    type: "B",
    title: "Penggemar Loyal",
    emoji: "🏆",
    description: "Kamu adalah Penggemar Loyal! Serius tentang sepak bola tapi tidak extreme. Kamu support tim dengan konsisten, update berita, dan enjoy pertandingan. Balanced fan!",
    traits: ["Loyal", "Balanced", "Consistent", "Knowledgeable"],
    strengths: ["Healthy fandom", "Good knowledge", "Enjoy the sport"],
    weaknesses: ["Kadang tidak sepassionate", "Miss big moments"],
    tips: ["Your balance is healthy", "Keep enjoying!"],
  },
  C: {
    type: "C",
    title: "Penonton Casual",
    emoji: "📺",
    description: "Kamu adalah Penonton Casual! Nonton kalau ada turnamen besar atau match seru. Tidak terlalu deep tapi bisa menikmati pertandingan yang exciting. Casual enjoyment!",
    traits: ["Casual", "Relaxed", "Selective", "Social viewer"],
    strengths: ["No stress", "Enjoy without pressure", "Flexible"],
    weaknesses: ["Miss good matches", "Out of loop"],
    tips: ["Try follow one team", "Football has great stories"],
  },
  D: {
    type: "D",
    title: "Non-Football Person",
    emoji: "😴",
    description: "Sepak bola bukan interest utamamu! Tidak apa-apa, dunia luas dan banyak hal menarik lain. Kamu mungkin punya passion di bidang lain yang sama intensnya!",
    traits: ["Indifferent", "Other interests", "Non-conformist", "Diverse"],
    strengths: ["No FOMO", "Other hobbies", "Independent interest"],
    weaknesses: ["Miss social connection via football", "Out of conversations"],
    tips: ["Football bisa fun kok", "Try watching one big match"],
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
