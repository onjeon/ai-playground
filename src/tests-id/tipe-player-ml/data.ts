// Tipe Player Mobile Legends Kamu
// Tes ini mengungkap tipe player Mobile Legends seperti apa kamu!

export const questions = [
  {
    id: 1,
    question: "Role favorit di game...",
    options: [
      { text: "Marksman/Mage - carry team!", type: "A" },
      { text: "Tank/Support - protect and setup", type: "B" },
      { text: "Fighter/Assassin - solo lane warrior", type: "C" },
      { text: "Flex, bisa semua role sesuai kebutuhan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat draft pick...",
    options: [
      { text: "Pilih hero andalan, tidak mau ganti", type: "A" },
      { text: "Adjust sama team composition", type: "B" },
      { text: "Counter pick enemy", type: "C" },
      { text: "Ambil yang lagi meta", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Reaksi saat team kalah fight...",
    options: [
      { text: "Blame teammates, harusnya bisa menang", type: "A" },
      { text: "Analyze apa yang salah, improve", type: "B" },
      { text: "Diam aja, fokus next fight", type: "C" },
      { text: "Type 'good game' dan move on", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Chat in-game biasanya...",
    options: [
      { text: "Aktif shotcall dan coordinate", type: "A" },
      { text: "Quick chat aja, 'Attack Lord', 'Retreat'", type: "B" },
      { text: "Mute all, fokus main", type: "C" },
      { text: "Toxic kalau tilted, supportive kalau menang", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Mindset saat ranked...",
    options: [
      { text: "Must win, rank adalah segalanya", type: "A" },
      { text: "Do my best, win or learn", type: "B" },
      { text: "Have fun, rank bukan priority", type: "C" },
      { text: "Tergantung mood, kadang tryhard kadang santai", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Farming dan gold management...",
    options: [
      { text: "Greedy, semua gold harus ke saya", type: "A" },
      { text: "Share sesuai priority role", type: "B" },
      { text: "Take what I can, give what I can", type: "C" },
      { text: "Tidak terlalu mikirin, main aja", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat punya winning streak...",
    options: [
      { text: "Terus main! Hot hand theory", type: "A" },
      { text: "Stop, jaga win rate", type: "B" },
      { text: "Main sampai kalah, baru stop", type: "C" },
      { text: "Tergantung waktu dan energi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Nonton MPL atau esports ML...",
    options: [
      { text: "Dedicated fan, nonton semua match", type: "A" },
      { text: "Sesekali kalau tim favorit main", type: "B" },
      { text: "Highlight aja di YouTube", type: "C" },
      { text: "Jarang, lebih suka main sendiri", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Skin dan cosmetics...",
    options: [
      { text: "Koleksi lengkap hero favorit!", type: "A" },
      { text: "Beli yang worth it aja", type: "B" },
      { text: "Free skin cukup, tidak mau bayar", type: "C" },
      { text: "Tidak peduli skin, yang penting skill", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Main ML biasanya...",
    options: [
      { text: "Solo queue, trust no one", type: "A" },
      { text: "Full squad dengan teman", type: "B" },
      { text: "Mix, kadang solo kadang squad", type: "C" },
      { text: "Duo dengan satu partner andalan", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau ada AFK atau feeder di team...",
    options: [
      { text: "Report dan move on", type: "A" },
      { text: "Try hard tetap, miracle bisa terjadi", type: "B" },
      { text: "Surrender, hemat waktu", type: "C" },
      { text: "Tilted, main jadi tidak optimal", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Mobile Legends buat kamu adalah...",
    options: [
      { text: "Hidup! Main setiap hari", type: "A" },
      { text: "Hiburan utama, tapi ada batasan", type: "B" },
      { text: "Casual gaming untuk kill time", type: "C" },
      { text: "Social activity bareng teman", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tryhard Warrior",
    emoji: "🏆",
    description: "Kamu adalah tryhard player sejati! Rank adalah segalanya, setiap game harus menang. Competitive spirit tinggi dan selalu ingin jadi yang terbaik. Mythical Glory is the goal!",
    traits: ["Competitive", "Dedicated", "Skilled", "Intense"],
    strengths: ["High skill ceiling", "Good game knowledge", "Never give up"],
    weaknesses: ["Bisa toxic saat kalah", "Tilted easily", "Game jadi stress"],
    tips: ["Ingat ini cuma game", "Take breaks untuk mental health", "Toxicity tidak bikin menang"],
  },
  B: {
    type: "B",
    title: "Team Player",
    emoji: "🤝",
    description: "Kamu adalah team player sejati! Adjust role, support teammates, dan prioritize team success over personal glory. MVP bukan target, WINRATE adalah!",
    traits: ["Supportive", "Flexible", "Team-oriented", "Humble"],
    strengths: ["Great teammate", "Adaptable", "Win-focused", "Not toxic"],
    weaknesses: ["Kadang terlalu passive", "Rely on team too much"],
    tips: ["Kadang carry juga perlu", "Your contribution matters"],
  },
  C: {
    type: "C",
    title: "Casual Gamer",
    emoji: "🎮",
    description: "Kamu adalah casual player yang main untuk fun! Tidak terlalu serius soal rank, yang penting enjoy. Mobile Legends adalah hiburan, bukan kerjaan.",
    traits: ["Relaxed", "Fun-oriented", "No pressure", "Balanced"],
    strengths: ["Game tetap fun", "No stress", "Healthy relationship with gaming"],
    weaknesses: ["Might not improve much", "Teammates might expect more"],
    tips: ["Your approach is healthy!", "Try ranked sesekali untuk challenge"],
  },
  D: {
    type: "D",
    title: "Social Gamer",
    emoji: "👥",
    description: "ML adalah tentang bonding dengan teman bagimu! Menang atau kalah tidak penting, yang penting main bareng dan ketawa-ketawa. Gaming sebagai social activity.",
    traits: ["Social", "Fun-loving", "Connection-focused", "Relaxed"],
    strengths: ["Great gaming buddy", "No toxicity", "Enjoy the experience"],
    weaknesses: ["Might not take game seriously", "Skill might plateau"],
    tips: ["Perfect balance!", "Keep gaming fun for everyone"],
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
