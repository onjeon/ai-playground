// Tes Tipe Situationship Kamu
// Bagaimana kamu handle hubungan yang tidak jelas?

export const questions = [
  {
    id: 1,
    question: "Definisi 'situationship' menurutmu...",
    options: [
      { text: "Nightmare, harus dihindari", type: "A" },
      { text: "Fase transisi sebelum jadi official", type: "B" },
      { text: "Comfortable grey area", type: "C" },
      { text: "Best of both worlds, no commitment", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Berapa lama kamu bisa bertahan di situationship?",
    options: [
      { text: "Tidak bisa sama sekali, butuh kejelasan", type: "A" },
      { text: "Maksimal 1-2 bulan, lalu harus clear", type: "B" },
      { text: "Beberapa bulan, selama masih nyaman", type: "C" },
      { text: "Selama masih seru, bisa lama", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Saat di situationship, kamu...",
    options: [
      { text: "Stres dan butuh DTR secepatnya", type: "A" },
      { text: "Enjoy tapi tetap push ke arah jelas", type: "B" },
      { text: "Go with the flow, see what happens", type: "C" },
      { text: "Love the freedom, no pressure", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tentang eksklusivitas di situationship...",
    options: [
      { text: "Harus ekslusif walau belum official", type: "A" },
      { text: "Prefer ekslusif tapi tidak bisa demand", type: "B" },
      { text: "Tergantung kesepakatan", type: "C" },
      { text: "Non-exclusive, bebas explore", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kalau dia juga PDKT sama orang lain...",
    options: [
      { text: "Deal breaker, langsung out", type: "A" },
      { text: "Sakit hati tapi tidak bisa complain", type: "B" },
      { text: "Understandable, kita belum official", type: "C" },
      { text: "Fair game, aku juga bisa gitu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Yang bikin situationship worth it...",
    options: [
      { text: "Nothing, always want clarity", type: "A" },
      { text: "Kesempatan kenal lebih dalam", type: "B" },
      { text: "No pressure dan expectations", type: "C" },
      { text: "Freedom tanpa tanggung jawab", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tentang label dan status...",
    options: [
      { text: "Super penting, must have", type: "A" },
      { text: "Penting tapi tidak harus buru-buru", type: "B" },
      { text: "Nice to have, bukan dealbreaker", type: "C" },
      { text: "Overrated, actions > labels", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Siapa yang harus initiate DTR (Define The Relationship)?",
    options: [
      { text: "Siapapun yang butuh, termasuk aku", type: "A" },
      { text: "Prefer dia duluan, tapi aku bisa", type: "B" },
      { text: "Biar natural aja, kapan waktunya tepat", type: "C" },
      { text: "Tidak perlu DTR kalau sudah nyaman", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Red flag di situationship...",
    options: [
      { text: "Situationship itu sendiri sudah red flag", type: "A" },
      { text: "Kalau sengaja avoid DTR terus", type: "B" },
      { text: "Hot and cold behavior", type: "C" },
      { text: "Tidak ada red flag kalau expectations clear", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kenapa orang masuk situationship?",
    options: [
      { text: "Karena salah satu pihak tidak serius", type: "A" },
      { text: "Masih tahap penjajakan", type: "B" },
      { text: "Belum ready untuk komitmen", type: "C" },
      { text: "Karena itu yang dikehendaki", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau situationship tidak berkembang...",
    options: [
      { text: "Cut off, tidak mau buang waktu", type: "A" },
      { text: "Last attempt untuk clarity", type: "B" },
      { text: "Stay kalau masih comfortable", type: "C" },
      { text: "Why fix what's not broken", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Situationship vs Single vs In Relationship...",
    options: [
      { text: "In Relationship > Single > Situationship", type: "A" },
      { text: "Situationship as stepping stone to relationship", type: "B" },
      { text: "Situationship bisa jadi pilihan valid", type: "C" },
      { text: "Situationship is the sweet spot", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Anti Situationship",
    emoji: "🚫",
    description: "Kamu butuh kejelasan dalam hubungan! Situationship adalah no-go zone. Lebih baik single daripada stuck di grey area yang tidak jelas arahnya.",
    traits: ["Clear-cut", "Direct", "Commitment seeking", "No nonsense"],
    strengths: ["Tidak buang waktu", "Tau apa yang mau", "Set clear expectations"],
    weaknesses: ["Kadang terlalu rushing", "Miss organic development"],
    tips: ["Balance antara kejelasan dan kesabaran", "Some good things take time"],
  },
  B: {
    type: "B",
    title: "Situationship Strategist",
    emoji: "🎯",
    description: "Kamu treat situationship sebagai trial period! Bisa enjoy prosesnya tapi dengan timeline yang jelas. Tidak mau stuck selamanya di zona abu-abu.",
    traits: ["Strategic", "Patient but purposeful", "Goal oriented", "Balanced"],
    strengths: ["Give chance to develop", "Not desperate", "Clear endgame"],
    weaknesses: ["Kadang terlalu calculated", "Missing spontaneity"],
    tips: ["Trust the process juga", "Tidak semua harus on schedule"],
  },
  C: {
    type: "C",
    title: "Situationship Comforter",
    emoji: "☁️",
    description: "Kamu cukup nyaman di situationship! Selama ada connection dan respect, label tidak terlalu penting. Go with the flow adalah mantra-mu.",
    traits: ["Flexible", "Easy going", "Non-demanding", "Present focused"],
    strengths: ["Low pressure vibes", "Enjoy the moment", "Not anxious"],
    weaknesses: ["Might settle for less", "Avoid necessary conversations"],
    tips: ["Jangan takut minta kejelasan", "Know your worth"],
  },
  D: {
    type: "D",
    title: "Situationship Lover",
    emoji: "🦋",
    description: "Situationship adalah sweet spot buatmu! Freedom tanpa commitment, connection tanpa pressure. Kamu tidak lihat itu sebagai masalah, tapi pilihan.",
    traits: ["Freedom lover", "Non-committal", "Independent", "Casual"],
    strengths: ["No strings attached", "Living in the moment", "No drama"],
    weaknesses: ["Fear of commitment mungkin", "Avoiding depth"],
    tips: ["Deep connection juga valuable", "Sometimes commitment is freeing"],
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
