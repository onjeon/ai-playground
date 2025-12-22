// Tipe Gamer Indonesia
// Kamu tipe gamer Indonesia yang kayak gimana?

export const questions = [
  {
    id: 1,
    question: "Platform gaming utama...",
    options: [
      { text: "Mobile gaming, praktis!", type: "A" },
      { text: "PC Master Race!", type: "B" },
      { text: "Console, PlayStation atau Xbox", type: "C" },
      { text: "Semua platform, yang penting main", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Genre game favorit...",
    options: [
      { text: "Battle Royale atau FPS", type: "A" },
      { text: "MMORPG atau Strategy", type: "B" },
      { text: "RPG atau Adventure", type: "C" },
      { text: "Casual atau Puzzle", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Waktu bermain game...",
    options: [
      { text: "Setiap ada waktu luang", type: "A" },
      { text: "Scheduled, malam atau weekend", type: "B" },
      { text: "Marathon saat libur", type: "C" },
      { text: "Sesekali kalau bosan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Top-up atau in-app purchase...",
    options: [
      { text: "Sering, skins dan items penting!", type: "A" },
      { text: "Sesekali untuk game yang worth it", type: "B" },
      { text: "Beli game premium, F2P gratis", type: "C" },
      { text: "F2P sejati, tidak pernah bayar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Main game untuk...",
    options: [
      { text: "Competitive, rank dan achievement", type: "A" },
      { text: "Escape dan relaxation", type: "B" },
      { text: "Story dan experience", type: "C" },
      { text: "Social, main bareng teman", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat kalah atau game over...",
    options: [
      { text: "Rage quit atau rematch langsung", type: "A" },
      { text: "Analyze kesalahan, improve", type: "B" },
      { text: "Load save atau restart santai", type: "C" },
      { text: "Yaudah, main game lain", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Gaming setup...",
    options: [
      { text: "HP + earphone cukup", type: "A" },
      { text: "Proper setup, keyboard mechanical!", type: "B" },
      { text: "TV besar + console nyaman", type: "C" },
      { text: "Apa aja yang ada", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Multiplayer vs Single Player...",
    options: [
      { text: "Multiplayer dong, lebih seru!", type: "A" },
      { text: "Dua-duanya, tergantung mood", type: "B" },
      { text: "Single player, immersive", type: "C" },
      { text: "Co-op sama teman", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Mengikuti esports atau gaming scene...",
    options: [
      { text: "Aktif! Nonton turnamen, tau pro players", type: "A" },
      { text: "Sesekali nonton highlight", type: "B" },
      { text: "Tidak terlalu, fokus main sendiri", type: "C" },
      { text: "Tidak mengikuti sama sekali", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Game baru release...",
    options: [
      { text: "Day one! Harus coba duluan", type: "A" },
      { text: "Wait for reviews, baru decide", type: "B" },
      { text: "Tunggu sale atau discount", type: "C" },
      { text: "Main game lama dulu, no rush", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Guild atau clan dalam game...",
    options: [
      { text: "Active member, war bareng!", type: "A" },
      { text: "Casual member, ikut event aja", type: "B" },
      { text: "Tidak join, solo player", type: "C" },
      { text: "Bikin sendiri dengan teman IRL", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Game adalah...",
    options: [
      { text: "Passion! Bagian dari identitas", type: "A" },
      { text: "Hobby yang serius", type: "B" },
      { text: "Entertainment untuk relaxasi", type: "C" },
      { text: "Aktivitas sosial sama teman", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Hardcore Gamer",
    emoji: "🎮",
    description: "Kamu adalah Hardcore Gamer! Gaming adalah passion dan lifestyle. Kamu competitive, update dengan scene, dan invest serius dalam hobby ini. Rank tinggi adalah kebanggaan dan gaming adalah identitas!",
    traits: ["Competitive", "Passionate", "Dedicated", "Skilled"],
    strengths: ["High skill level", "Great reflexes", "Gaming knowledge"],
    weaknesses: ["Bisa obsessive", "Neglect other things"],
    tips: ["Balance dengan real life", "Gaming addiction is real"],
  },
  B: {
    type: "B",
    title: "Dedicated Gamer",
    emoji: "⚔️",
    description: "Kamu adalah Dedicated Gamer! Serius tapi tidak extreme. Kamu menghargai quality gaming experience dan punya taste yang bagus. Gaming adalah hobby yang kamu tekuni dengan baik!",
    traits: ["Dedicated", "Balanced", "Quality-focused", "Consistent"],
    strengths: ["Good taste", "Balanced life", "Loyal to good games"],
    weaknesses: ["FOMO pada trending games", "Picky kadang"],
    tips: ["Keep the balance", "Try new genres"],
  },
  C: {
    type: "C",
    title: "Story Gamer",
    emoji: "📖",
    description: "Kamu adalah Story Gamer! Gaming adalah tentang experience dan narrative. Kamu suka immerse dalam world yang rich dan storyline yang deep. Gaming adalah interactive entertainment yang bermakna!",
    traits: ["Immersive", "Appreciative", "Patient", "Story-focused"],
    strengths: ["Appreciate game art", "Patient gameplay", "Complete games"],
    weaknesses: ["Miss multiplayer fun", "Long time per game"],
    tips: ["Try multiplayer sometimes", "Not all games need to be finished"],
  },
  D: {
    type: "D",
    title: "Social Gamer",
    emoji: "👥",
    description: "Kamu adalah Social Gamer! Gaming adalah cara untuk connect dengan teman. Tidak terlalu serius tentang rank atau achievement, yang penting seru bareng. Gaming adalah aktivitas sosial!",
    traits: ["Social", "Casual", "Fun-focused", "Friendly"],
    strengths: ["Great gaming buddy", "Low toxicity", "Balanced perspective"],
    weaknesses: ["Might not improve skill", "Depend on friends"],
    tips: ["Develop individual gaming interest", "Solo games bisa fun juga"],
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
