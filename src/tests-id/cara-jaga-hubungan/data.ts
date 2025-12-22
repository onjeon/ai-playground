// Tes Cara Kamu Menjaga Hubungan
// Bagaimana style-mu dalam maintain relationship?

export const questions = [
  {
    id: 1,
    question: "Frekuensi komunikasi dengan pasangan idealnya...",
    options: [
      { text: "Sepanjang hari, constant contact", type: "A" },
      { text: "Beberapa kali sehari, meaningful check-ins", type: "B" },
      { text: "Sesekali, trust dan independence", type: "C" },
      { text: "Minimal, quality over quantity", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat ada masalah dalam hubungan...",
    options: [
      { text: "Langsung bahas sampai clear", type: "A" },
      { text: "Pilih waktu yang tepat untuk discuss", type: "B" },
      { text: "Beri waktu cooling off dulu", type: "C" },
      { text: "Avoid konflik, harap hilang sendiri", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Effort untuk menjaga relationship...",
    options: [
      { text: "High effort - dates, surprises, communication", type: "A" },
      { text: "Consistent effort yang sustainable", type: "B" },
      { text: "Moderate, tergantung situasi", type: "C" },
      { text: "Low effort, relationship harusnya natural", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tentang boundaries dalam hubungan...",
    options: [
      { text: "Share everything, no secrets", type: "A" },
      { text: "Open tapi tetap ada personal space", type: "B" },
      { text: "Clear boundaries, independence penting", type: "C" },
      { text: "Sangat private, many boundaries", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quality time dengan pasangan...",
    options: [
      { text: "Sebanyak mungkin, selalu mau bareng", type: "A" },
      { text: "Scheduled quality time yang meaningful", type: "B" },
      { text: "Balance dengan waktu sendiri", type: "C" },
      { text: "Sesekali saja, butuh banyak me time", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Grow together dalam relationship...",
    options: [
      { text: "Share goals dan grow together intensely", type: "A" },
      { text: "Support masing-masing sambil grow together", type: "B" },
      { text: "Individual growth, occasionally share", type: "C" },
      { text: "Grow sendiri-sendiri, meet in the middle", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat pasangan sibuk dan kurang waktu...",
    options: [
      { text: "Needy dan butuh reassurance", type: "A" },
      { text: "Understanding tapi still miss them", type: "B" },
      { text: "Okay, use time untuk sendiri", type: "C" },
      { text: "Prefer actually, butuh space", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Jealousy dan trust issues...",
    options: [
      { text: "Cemburu mudah, butuh constant reassurance", type: "A" },
      { text: "Normal jealousy tapi can control", type: "B" },
      { text: "Jarang cemburu, trust tinggi", type: "C" },
      { text: "Almost never jealous, very independent", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Expressing needs dan wants...",
    options: [
      { text: "Very vocal tentang semua kebutuhan", type: "A" },
      { text: "Express important needs with balance", type: "B" },
      { text: "Jarang express, takut demanding", type: "C" },
      { text: "Keep to myself, figure out sendiri", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Compromise dalam relationship...",
    options: [
      { text: "Sering compromise untuk partner happy", type: "A" },
      { text: "Fair compromise untuk keduanya", type: "B" },
      { text: "Compromise di hal penting saja", type: "C" },
      { text: "Jarang compromise, nilai autonomy", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Family dan friends involvement...",
    options: [
      { text: "Integrate fully, satu keluarga besar", type: "A" },
      { text: "Kenalan dan socialize dengan balance", type: "B" },
      { text: "Keep mostly separate", type: "C" },
      { text: "Very separate, privacy penting", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Long-term relationship maintenance...",
    options: [
      { text: "Constant nurturing dan attention", type: "A" },
      { text: "Consistent effort dengan routine", type: "B" },
      { text: "Periodic check-ins dan adjustments", type: "C" },
      { text: "Minimal, kalau cocok ya jalan sendiri", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "High Maintenance Partner",
    emoji: "💕",
    description: "Kamu adalah partner yang needs a lot of attention dan effort! High communication, constant togetherness, dan intensive care. Love intensely but can be demanding.",
    traits: ["Intensive", "Needy", "Loving", "High effort"],
    strengths: ["Fully invested", "Caring", "Never neglects relationship"],
    weaknesses: ["Can be exhausting", "Clingy tendency", "Hard to maintain"],
    tips: ["Give partner space too", "Independence is healthy", "Self-soothe sometimes"],
  },
  B: {
    type: "B",
    title: "Balanced Partner",
    emoji: "⚖️",
    description: "Kamu adalah partner yang balanced! Right amount of attention, effort, dan independence. Healthy relationship style yang sustainable long-term.",
    traits: ["Balanced", "Healthy", "Sustainable", "Mature"],
    strengths: ["Healthy dynamics", "Not overwhelming", "Long-term potential"],
    weaknesses: ["Might need to adjust for different partners"],
    tips: ["Keep the balance", "Adapt when needed"],
  },
  C: {
    type: "C",
    title: "Independent Partner",
    emoji: "🦅",
    description: "Kamu adalah partner yang independent! Value autonomy dan personal space dalam relationship. Low maintenance tapi still caring.",
    traits: ["Independent", "Self-sufficient", "Low maintenance", "Trusting"],
    strengths: ["Not clingy", "Self-reliant", "Gives space"],
    weaknesses: ["Might seem distant", "Partner might want more attention"],
    tips: ["Show love more explicitly sometimes", "Partner needs to feel valued too"],
  },
  D: {
    type: "D",
    title: "Detached Partner",
    emoji: "🏝️",
    description: "Kamu adalah partner yang sangat independent sampai detached! Very low maintenance dan high boundaries. Might struggle with intimacy.",
    traits: ["Detached", "Very independent", "Private", "Self-contained"],
    strengths: ["Self-reliant", "No drama", "Low demands"],
    weaknesses: ["Can feel distant", "Partner might feel unloved", "Intimacy issues"],
    tips: ["Relationship requires some vulnerability", "Connect more with partner", "Walls can be lonely"],
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
