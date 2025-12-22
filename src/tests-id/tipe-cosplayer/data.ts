// Tipe Cosplayer Kamu
// Kamu tipe cosplayer atau pecinta cosplay yang kayak gimana?

export const questions = [
  {
    id: 1,
    question: "Tertarik cosplay karena...",
    options: [
      { text: "Suka transform jadi karakter favorit", type: "A" },
      { text: "Appreciate the artistry dan craftsmanship", type: "B" },
      { text: "Fun untuk event dan foto-foto", type: "C" },
      { text: "Kagum sama cosplayer lain", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kostum cosplay...",
    options: [
      { text: "Bikin sendiri, detail harus perfect", type: "A" },
      { text: "Mix beli dan DIY", type: "B" },
      { text: "Beli yang sudah jadi", type: "C" },
      { text: "Belum pernah punya", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Karakter yang dicosplay...",
    options: [
      { text: "Yang challenging dan iconic", type: "A" },
      { text: "Yang relate dengan personality", type: "B" },
      { text: "Yang populer dan recognizable", type: "C" },
      { text: "Yang simple dan gampang", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Di event cosplay...",
    options: [
      { text: "Full costume dari pagi sampai malam", type: "A" },
      { text: "Cosplay tapi juga explore event", type: "B" },
      { text: "Casual cosplay atau baju tematik aja", type: "C" },
      { text: "Datang sebagai pengunjung biasa", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Akurasi kostum...",
    options: [
      { text: "100% screen-accurate atau bust", type: "A" },
      { text: "Seakurat mungkin dengan budget", type: "B" },
      { text: "Vibe-nya dapet aja cukup", type: "C" },
      { text: "Yang penting fun", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Foto cosplay...",
    options: [
      { text: "Proper photoshoot dengan photographer", type: "A" },
      { text: "Mix casual dan proper shots", type: "B" },
      { text: "Selfie dan foto sama teman", type: "C" },
      { text: "Jarang difoto, enjoy aja", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Budget untuk cosplay...",
    options: [
      { text: "Invest serious, quality matters", type: "A" },
      { text: "Reasonable, value for money", type: "B" },
      { text: "Hemat, kreatif dengan budget", type: "C" },
      { text: "Minimal atau tidak ada", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Komunitas cosplay...",
    options: [
      { text: "Active member, banyak teman cosplayer", type: "A" },
      { text: "Part of beberapa grup", type: "B" },
      { text: "Follow dari jauh aja", type: "C" },
      { text: "Tidak terlalu terlibat", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Fandom yang disukai...",
    options: [
      { text: "Deep dive satu atau dua fandom", type: "A" },
      { text: "Beberapa fandom favorit", type: "B" },
      { text: "Apapun yang lagi suka", type: "C" },
      { text: "Casual fan beberapa series", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Makeup dan wig...",
    options: [
      { text: "Full transformation, unrecognizable", type: "A" },
      { text: "Character makeup tapi still me", type: "B" },
      { text: "Minimal, natural aja", type: "C" },
      { text: "Skip makeup/wig", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Posing dan acting...",
    options: [
      { text: "In-character, study poses dan expressions", type: "A" },
      { text: "Some signature poses", type: "B" },
      { text: "Just smile dan peace sign", type: "C" },
      { text: "Awkward, tidak biasa difoto", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Cosplay dalam hidupmu...",
    options: [
      { text: "Major hobby, invest time dan money", type: "A" },
      { text: "Fun hobby yang ditekuni", type: "B" },
      { text: "Sesekali untuk event", type: "C" },
      { text: "Appreciate from sidelines", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pro Cosplayer",
    emoji: "🌟",
    description: "Kamu adalah Pro Cosplayer! Cosplay adalah passion serius. Detail, accuracy, dan transformation adalah prioritas. Kamu invest time, skill, dan budget untuk create amazing costumes. True artist!",
    traits: ["Dedicated", "Perfectionist", "Skilled", "Passionate"],
    strengths: ["Amazing costumes", "Respected in community", "Artistic skill"],
    weaknesses: ["High pressure", "Expensive hobby", "Burnout risk"],
    tips: ["Enjoy the process", "Not everything needs to be perfect"],
  },
  B: {
    type: "B",
    title: "Hobby Cosplayer",
    emoji: "✨",
    description: "Kamu adalah Hobby Cosplayer! Balance antara passion dan fun. Kamu serius tentang cosplay tapi tidak stress. Menikmati proses create dan wear costumes dengan healthy approach!",
    traits: ["Balanced", "Creative", "Fun-loving", "Consistent"],
    strengths: ["Healthy hobby", "Good skills", "Enjoy community"],
    weaknesses: ["Might not reach pro level", "Limited time"],
    tips: ["Keep the fun", "Your balance is healthy"],
  },
  C: {
    type: "C",
    title: "Casual Cosplayer",
    emoji: "🎭",
    description: "Kamu adalah Casual Cosplayer! Cosplay untuk fun dan events. Tidak terlalu serius tentang accuracy, yang penting enjoy dan recognizable. Low pressure, high fun!",
    traits: ["Casual", "Fun-focused", "Relaxed", "Social"],
    strengths: ["No pressure", "Affordable", "Pure enjoyment"],
    weaknesses: ["Basic level", "Might not stand out"],
    tips: ["Try leveling up skills", "Casual is totally valid"],
  },
  D: {
    type: "D",
    title: "Cosplay Enthusiast",
    emoji: "👀",
    description: "Kamu adalah Cosplay Enthusiast! Appreciate cosplay dari sidelines. Kagum dengan cosplayer dan their work, attend events sebagai fan. Support system for the community!",
    traits: ["Appreciative", "Supportive", "Observer", "Fan"],
    strengths: ["Great audience", "Supportive", "No pressure"],
    weaknesses: ["Miss the experience", "Always spectator"],
    tips: ["Try simple cosplay sometime", "You might love it!"],
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
