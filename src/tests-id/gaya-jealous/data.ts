// Tes Gaya Cemburu Kamu
// Bagaimana kamu mengelola rasa cemburu?

export const questions = [
  {
    id: 1,
    question: "Pasangan like foto orang lain yang attractive...",
    options: [
      { text: "No problem, itu cuma like", type: "A" },
      { text: "Notice tapi tidak terlalu peduli", type: "B" },
      { text: "Sedikit ga enak tapi diam aja", type: "C" },
      { text: "Kesal dan bakal tanya kenapa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Pasangan cerita tentang teman kantor baru yang asyik...",
    options: [
      { text: "Senang dia punya teman baru", type: "A" },
      { text: "Curious orangnya kayak gimana", type: "B" },
      { text: "Sedikit wary, apalagi kalau lawan jenis", type: "C" },
      { text: "Already suspicious, mau detail lengkap", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kamu termasuk tipe yang cemburu?",
    options: [
      { text: "Hampir tidak pernah cemburu", type: "A" },
      { text: "Kadang-kadang, tapi wajar", type: "B" },
      { text: "Cukup sering tapi coba kontrol", type: "C" },
      { text: "Ya, dan itu tanda sayang", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara express cemburu ke pasangan...",
    options: [
      { text: "Jarang cemburu, jadi jarang express", type: "A" },
      { text: "Ngobrol dengan tenang tentang perasaan", type: "B" },
      { text: "Hints atau sedikit moody", type: "C" },
      { text: "Langsung bilang dengan emosi", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Pasangan pergi hangout tanpa kamu...",
    options: [
      { text: "Great, dia punya life sendiri", type: "A" },
      { text: "Fine, asal kasih tau aja", type: "B" },
      { text: "Okay tapi mau update sesekali", type: "C" },
      { text: "Prefer dia ajak atau stay connected terus", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Mantan pasangan kamu reach out ke dia...",
    options: [
      { text: "Trust dia handle dengan baik", type: "A" },
      { text: "Ask what they want, just curious", type: "B" },
      { text: "Uncomfortable dan mau dia block", type: "C" },
      { text: "Big issue, why masih connect?", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Yang trigger cemburu kamu paling...",
    options: [
      { text: "Hampir tidak ada", type: "A" },
      { text: "Kalau ada yang flirty ke pasangan", type: "B" },
      { text: "Pasangan terlalu dekat sama orang tertentu", type: "C" },
      { text: "Banyak hal bisa trigger", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Menurutmu cemburu dalam hubungan...",
    options: [
      { text: "Tidak perlu kalau sudah trust", type: "A" },
      { text: "Natural tapi harus dikontrol", type: "B" },
      { text: "Tanda sayang dalam batas wajar", type: "C" },
      { text: "Penting supaya pasangan tidak macam-macam", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Pasangan muji orang lain di depan kamu...",
    options: [
      { text: "Setuju kalau emang bagus", type: "A" },
      { text: "Okay aja, no issue", type: "B" },
      { text: "Sedikit ga enak sih", type: "C" },
      { text: "Kenapa muji orang lain di depan aku?", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Social media pasangan full dengan foto bareng teman...",
    options: [
      { text: "Bagus, dia sosial dan happy", type: "A" },
      { text: "Normal, as long as ada foto kita juga", type: "B" },
      { text: "Wish ada lebih banyak foto couple", type: "C" },
      { text: "Kok jarang upload sama aku?", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Cara handle saat cemburu...",
    options: [
      { text: "Process sendiri karena tau tidak valid", type: "A" },
      { text: "Talk it out dengan pasangan calmly", type: "B" },
      { text: "Struggle tapi coba kontrol", type: "C" },
      { text: "Confrontation atau detective mode", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Root cause dari cemburu biasanya...",
    options: [
      { text: "Tidak terlalu cemburu, so no cause", type: "A" },
      { text: "Normal human emotion, everyone has it", type: "B" },
      { text: "Insecurity atau past experience", type: "C" },
      { text: "Pasangan yang tidak reassuring", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cemburu-Proof",
    emoji: "😎",
    description: "Kamu hampir tidak pernah cemburu! Trust level tinggi dan secure dengan diri sendiri. Percaya pasangan tanpa perlu check atau monitor terus.",
    traits: ["Secure", "Trusting", "Confident", "Independent"],
    strengths: ["Healthy relationship dynamics", "No unnecessary drama", "Giving freedom"],
    weaknesses: ["Kadang terkesan tidak care", "Might miss red flags"],
    tips: ["Balance trust dengan awareness", "Show you care juga sesekali"],
  },
  B: {
    type: "B",
    title: "Cemburu Sehat",
    emoji: "💚",
    description: "Kamu punya level cemburu yang normal dan healthy! Kadang jealous tapi bisa manage dengan baik. Communicate perasaan tanpa drama.",
    traits: ["Balanced", "Communicative", "Self-aware", "Reasonable"],
    strengths: ["Healthy expression", "Good communication", "Emotional intelligence"],
    weaknesses: ["Kadang still overthink", "Occasional doubts"],
    tips: ["Keep communicating openly", "Trust your judgment"],
  },
  C: {
    type: "C",
    title: "Cemburu Tersembunyi",
    emoji: "😶",
    description: "Kamu sering cemburu tapi coba hide atau suppress. Struggle dengan feelings ini dan kadang keluar lewat cara tidak langsung seperti moody atau hints.",
    traits: ["Suppressive", "Insecure inside", "Passive", "Struggling"],
    strengths: ["Trying to control", "Aware of feelings", "Non-confrontational"],
    weaknesses: ["Bottled up emotions", "Passive aggressive tendencies"],
    tips: ["Express feelings lebih openly", "It's okay to voice concerns"],
  },
  D: {
    type: "D",
    title: "Cemburu Eksplosif",
    emoji: "🌋",
    description: "Cemburu kamu intense dan sering keluar dengan emosi! Protective tapi kadang borderline possessive. Perlu work on trust dan managing emotions.",
    traits: ["Jealous", "Possessive", "Emotional", "Vigilant"],
    strengths: ["Protective", "Caring deeply", "Invested"],
    weaknesses: ["Trust issues", "Can be overwhelming", "Controlling tendencies"],
    tips: ["Work on root insecurities", "Trust is essential", "Consider why you feel this way"],
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
