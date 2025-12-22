// Tes Gaya Office Politics Kamu
// Bagaimana kamu navigate politik kantor?

export const questions = [
  {
    id: 1,
    question: "Pendapatmu tentang office politics...",
    options: [
      { text: "Realita yang harus dipahami dan dinavigasi", type: "A" },
      { text: "Perlu tapi tidak suka terlalu deep", type: "B" },
      { text: "Hindari sebisa mungkin", type: "C" },
      { text: "Toxic dan seharusnya tidak ada", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cara kamu build relationship dengan atasan...",
    options: [
      { text: "Strategic, manage up dengan baik", type: "A" },
      { text: "Professional dan respectful", type: "B" },
      { text: "Natural, tidak terlalu mikirin", type: "C" },
      { text: "Minimal, fokus hasil kerja aja", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Gosip di kantor...",
    options: [
      { text: "Dengarkan untuk tau situasi, tapi tidak spread", type: "A" },
      { text: "Tidak ikut-ikutan sama sekali", type: "B" },
      { text: "Kadang dengerin kalau interesting", type: "C" },
      { text: "Sangat menghindari lingkaran gossip", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ada credit kerjaan kamu diambil orang lain...",
    options: [
      { text: "Diplomatically claim back dengan bukti", type: "A" },
      { text: "Confront langsung tapi professional", type: "B" },
      { text: "Kesal tapi tidak do anything", type: "C" },
      { text: "Marah dan confrontational", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Network di kantor menurutmu...",
    options: [
      { text: "Essential untuk karir, actively build", type: "A" },
      { text: "Penting, maintain yang natural", type: "B" },
      { text: "Nice to have, bukan prioritas", type: "C" },
      { text: "Tidak suka networking, feels fake", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat ada conflict antar tim atau divisi...",
    options: [
      { text: "Jadi bridge dan cari win-win", type: "A" },
      { text: "Stay neutral dan fokus kerja", type: "B" },
      { text: "Support tim sendiri kalau benar", type: "C" },
      { text: "Avoid involvement sepenuhnya", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Visibility di depan management...",
    options: [
      { text: "Actively showcase work dan achievement", type: "A" },
      { text: "Let work speak for itself", type: "B" },
      { text: "Tidak terlalu effort untuk visible", type: "C" },
      { text: "Prefer low profile", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Ada orang yang backstab kamu...",
    options: [
      { text: "Noted, adjust strategy, keep close eye", type: "A" },
      { text: "Confront dan clear the air", type: "B" },
      { text: "Distance diri dan be careful", type: "C" },
      { text: "Trust broken, hard to forgive", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Meeting dengan big boss atau eksekutif...",
    options: [
      { text: "Opportunity untuk impress dan be seen", type: "A" },
      { text: "Professional dan prepare with care", type: "B" },
      { text: "Nervous tapi coba do my best", type: "C" },
      { text: "Prefer avoid spotlight", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Favoritism di kantor...",
    options: [
      { text: "Realita, cari cara untuk jadi favored juga", type: "A" },
      { text: "Annoying tapi fokus ke controllable", type: "B" },
      { text: "Unfair tapi nothing I can do", type: "C" },
      { text: "Very frustrating dan demotivating", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Aliansi atau clique di kantor...",
    options: [
      { text: "Part of several, strategically", type: "A" },
      { text: "Punya circle tapi tidak exclusive", type: "B" },
      { text: "Dekat sama beberapa orang aja", type: "C" },
      { text: "Avoid cliques, prefer solo", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kalau harus pilih: competent atau likeable...",
    options: [
      { text: "Both, dua-duanya penting dan achievable", type: "A" },
      { text: "Competent first, likeable follows", type: "B" },
      { text: "Competent, likeable bonus", type: "C" },
      { text: "Competent aja, tidak peduli likeable", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Office Politics Pro",
    emoji: "🎭",
    description: "Kamu master dalam navigate office politics! Paham power dynamics, strategic dalam networking, dan tau cara play the game. Career advancement adalah natural.",
    traits: ["Strategic", "Politically savvy", "Network builder", "Ambitious"],
    strengths: ["Career advancement", "Good relationships", "Influence builder"],
    weaknesses: ["Might seem calculating", "Trust issues from others"],
    tips: ["Stay authentic", "Don't forget substance over politics"],
  },
  B: {
    type: "B",
    title: "Office Politics Moderate",
    emoji: "⚖️",
    description: "Kamu navigate office politics dengan balance! Tidak naif tapi juga tidak terlalu political. Professional approach sambil maintain integrity.",
    traits: ["Balanced", "Professional", "Pragmatic", "Grounded"],
    strengths: ["Trusted", "Respected", "Sustainable approach"],
    weaknesses: ["Might miss some opportunities", "Not always top of mind"],
    tips: ["Little more visibility tidak ada salahnya", "Keep the balance"],
  },
  C: {
    type: "C",
    title: "Office Politics Passive",
    emoji: "🐢",
    description: "Kamu cenderung passive dalam office politics. Fokus ke kerjaan dan berharap hasil yang bicara. Politik kantor bukan arena yang nyaman untukmu.",
    traits: ["Passive", "Work focused", "Avoidant", "Hopeful"],
    strengths: ["Genuine", "Low drama", "Quality work"],
    weaknesses: ["Might get overlooked", "Vulnerable to politics"],
    tips: ["Little awareness helps protect yourself", "Visibility matters too"],
  },
  D: {
    type: "D",
    title: "Office Politics Avoider",
    emoji: "🚫",
    description: "Kamu sangat menghindari office politics! Prefer kerja sendiri dan stay out of drama. Politik kantor feels toxic dan tidak mau terlibat sama sekali.",
    traits: ["Avoidant", "Idealistic", "Solo player", "Anti-politics"],
    strengths: ["Integrity intact", "No drama", "Clear conscience"],
    weaknesses: ["Naive to power dynamics", "Career might stall"],
    tips: ["Awareness bukan sama dengan participation", "Some navigation is survival skill"],
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
