// Tipe Player Free Fire
// Kamu tipe player FF yang kayak gimana?

export const questions = [
  {
    id: 1,
    question: "Landing spot favoritmu...",
    options: [
      { text: "Hot drop! Pochinok, Peak, tempat rame", type: "A" },
      { text: "Safe zone dulu, loot lengkap baru war", type: "B" },
      { text: "Follow tim, yang penting bareng", type: "C" },
      { text: "Random, tergantung mood", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Senjata andalan...",
    options: [
      { text: "Shotgun atau SMG, close combat!", type: "A" },
      { text: "Sniper, headshot dari jauh", type: "B" },
      { text: "AR all-rounder, balance", type: "C" },
      { text: "Apapun yang ketemu duluan", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Strategi main...",
    options: [
      { text: "Rush! Push musuh terus", type: "A" },
      { text: "Camp strategis, tunggu moment", type: "B" },
      { text: "Ikut tim, support", type: "C" },
      { text: "Improvise, no fixed strategy", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Saat tim dalam bahaya...",
    options: [
      { text: "All in! Revive atau mati bareng", type: "A" },
      { text: "Assess dulu, baru rescue kalau aman", type: "B" },
      { text: "Selalu prioritaskan selamatkan tim", type: "C" },
      { text: "Tergantung situasi, kadang sacrifice", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Reaksi saat kalah...",
    options: [
      { text: "REMATCH! Langsung main lagi", type: "A" },
      { text: "Review kesalahan, improve next game", type: "B" },
      { text: "Ga papa, yang penting seru sama tim", type: "C" },
      { text: "Yaudah, main game lain dulu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Komunikasi dengan tim...",
    options: [
      { text: "Loud dan commanding, kasih instruksi", type: "A" },
      { text: "Info penting aja, callout enemy", type: "B" },
      { text: "Dengerin aja, follow orders", type: "C" },
      { text: "Voice off, ping aja cukup", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Character dan skill favorit...",
    options: [
      { text: "Aggressive skills untuk push", type: "A" },
      { text: "Defensive atau healing skills", type: "B" },
      { text: "Support skills untuk bantu tim", type: "C" },
      { text: "Random, coba-coba aja", type: "D" },
    ],
  },
  {
    id: 8,
    question: "End game zone, tinggal beberapa tim...",
    options: [
      { text: "Hunt them down! Active push", type: "A" },
      { text: "Position strategic, let them fight", type: "B" },
      { text: "Stick with team, coordinate", type: "C" },
      { text: "Play it by ear", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bermain FF untuk...",
    options: [
      { text: "Adrenaline dan thrill of combat", type: "A" },
      { text: "Challenge dan improvement", type: "B" },
      { text: "Quality time sama teman", type: "C" },
      { text: "Killing time aja", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Rank push...",
    options: [
      { text: "Grind sampai Heroic atau Master!", type: "A" },
      { text: "Santai aja, naik kalau naik", type: "B" },
      { text: "Bareng squad, lebih seru", type: "C" },
      { text: "Casual aja, ga terlalu peduli rank", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Top-up diamond...",
    options: [
      { text: "Sering, skin harus keren!", type: "A" },
      { text: "Sesekali untuk item penting", type: "B" },
      { text: "Jarang, main aja cukup", type: "C" },
      { text: "F2P, ga pernah top-up", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Definisi booyah yang memuaskan...",
    options: [
      { text: "High kills, dominasi!", type: "A" },
      { text: "Win dengan strategi yang rapi", type: "B" },
      { text: "Win bareng squad yang solid", type: "C" },
      { text: "Win aja udah senang", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Rusher Aggresif",
    emoji: "🔥",
    description: "Kamu adalah Rusher Aggresif! Main FF tanpa rush bukan hidup. Hot drop, push terus, dan high kills adalah tujuanmu. Adrenaline junkie yang selalu cari action. Booyah dengan 10+ kills adalah kepuasan sejati!",
    traits: ["Aggressive", "Bold", "Action-oriented", "Competitive"],
    strengths: ["High kill potential", "Fearless", "Exciting to watch"],
    weaknesses: ["Sering mati awal", "Gambling playstyle"],
    tips: ["Sometimes patience wins", "Balance aggression with smart play"],
  },
  B: {
    type: "B",
    title: "Strategic Player",
    emoji: "🎯",
    description: "Kamu adalah Strategic Player! Setiap move terkalkulasi, setiap posisi diperhitungkan. Kamu main dengan otak, bukan cuma jari. Win rate tinggi karena smart decisions. Quality over quantity kills!",
    traits: ["Strategic", "Calculated", "Patient", "Smart"],
    strengths: ["High win rate", "Good positioning", "Clutch potential"],
    weaknesses: ["Bisa terlalu passive", "Kurang exciting"],
    tips: ["Sometimes you need to take risks", "Trust your skills more"],
  },
  C: {
    type: "C",
    title: "Team Player",
    emoji: "🤝",
    description: "Kamu adalah Team Player! FF adalah tentang squad. Revive tim, share loot, dan coordinate adalah prioritas. Menang sendiri tidak ada artinya kalau tim tidak menang. True brotherhood in battle!",
    traits: ["Supportive", "Loyal", "Cooperative", "Team-oriented"],
    strengths: ["Great teammate", "Good communication", "Squad MVP"],
    weaknesses: ["Depend on team", "Solo struggle"],
    tips: ["Develop individual skills too", "You can lead sometimes"],
  },
  D: {
    type: "D",
    title: "Casual Gamer",
    emoji: "🎮",
    description: "Kamu adalah Casual Gamer! FF adalah game, bukan hidup-mati. Main for fun tanpa pressure. Rank naik bagus, kalah juga ga masalah. Game adalah escapism, bukan stress tambahan!",
    traits: ["Relaxed", "Casual", "Fun-focused", "Easy-going"],
    strengths: ["No toxicity", "Enjoy the game", "Balanced life"],
    weaknesses: ["Might not improve fast", "Less competitive edge"],
    tips: ["Push yourself sometimes", "Competition bisa fun juga"],
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
