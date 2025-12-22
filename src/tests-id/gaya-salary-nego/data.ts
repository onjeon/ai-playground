// Tes Gaya Negosiasi Gaji Kamu
// Bagaimana style kamu saat nego salary?

export const questions = [
  {
    id: 1,
    question: "Sebelum nego gaji, kamu...",
    options: [
      { text: "Research market rate dan prepare data", type: "A" },
      { text: "Punya angka target tapi flexible", type: "B" },
      { text: "Lihat aja nanti dikasih berapa", type: "C" },
      { text: "Nervous dan tidak terlalu prepare", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat ditanya expected salary...",
    options: [
      { text: "Kasih range dengan justify yang jelas", type: "A" },
      { text: "Tanya balik budget mereka dulu", type: "B" },
      { text: "Bilang negotiable atau sesuai standar", type: "C" },
      { text: "Sebut angka yang mungkin terlalu rendah", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Offer pertama dari company...",
    options: [
      { text: "Almost always negotiate untuk lebih", type: "A" },
      { text: "Negotiate kalau di bawah expectation", type: "B" },
      { text: "Terima kalau sudah reasonable", type: "C" },
      { text: "Terima aja, takut dicabut offer-nya", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Yang paling penting dalam package...",
    options: [
      { text: "Total compensation termasuk bonus dan benefit", type: "A" },
      { text: "Base salary yang solid", type: "B" },
      { text: "Work-life balance dan culture", type: "C" },
      { text: "Apapun yang dikasih, grateful", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kalau offer di bawah expectation...",
    options: [
      { text: "Counter dengan data dan alasan kuat", type: "A" },
      { text: "Nego tapi dengan sopan", type: "B" },
      { text: "Kecewa tapi mungkin terima", type: "C" },
      { text: "Terima karena butuh kerjaan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Leverage yang kamu pakai saat nego...",
    options: [
      { text: "Competing offers dan market data", type: "A" },
      { text: "Skills dan experience yang relevan", type: "B" },
      { text: "Enthusiasm dan cultural fit", type: "C" },
      { text: "Tidak punya leverage yang jelas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat company bilang 'budget sudah fixed'...",
    options: [
      { text: "Nego benefit lain: bonus, remote, dll", type: "A" },
      { text: "Ask untuk review setelah probation", type: "B" },
      { text: "Accept jika masih dalam range", type: "C" },
      { text: "Accept aja daripada lose opportunity", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Untuk salary increment tahunan...",
    options: [
      { text: "Prepare achievement list dan nego proactively", type: "A" },
      { text: "Discuss saat performance review", type: "B" },
      { text: "Tunggu company kasih", type: "C" },
      { text: "Tidak pernah nego increment", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Seberapa comfortable kamu bicara soal uang?",
    options: [
      { text: "Very comfortable, it's business", type: "A" },
      { text: "Cukup comfortable dengan preparation", type: "B" },
      { text: "Agak awkward tapi bisa", type: "C" },
      { text: "Very uncomfortable, avoid kalau bisa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Philosophy kamu soal salary negotiation...",
    options: [
      { text: "You don't get what you deserve, you get what you negotiate", type: "A" },
      { text: "Fair exchange, know your worth", type: "B" },
      { text: "Company knows best, trust them", type: "C" },
      { text: "Be grateful for any opportunity", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Kalau nego tidak berhasil...",
    options: [
      { text: "Walk away kalau tidak sesuai value", type: "A" },
      { text: "Consider total package dan opportunity", type: "B" },
      { text: "Accept dan prove worth later", type: "C" },
      { text: "Accept karena memang butuh", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tips nego yang paling kamu setuju...",
    options: [
      { text: "Always negotiate, worst case they say no", type: "A" },
      { text: "Be reasonable dan data-driven", type: "B" },
      { text: "Be flexible dan open minded", type: "C" },
      { text: "Be grateful dan humble", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Master Negotiator",
    emoji: "💪",
    description: "Kamu jago nego gaji! Research thorough, confidence tinggi, dan tau exactly your worth. Tidak takut walk away kalau offer tidak sesuai. Money talks, you listen AND respond.",
    traits: ["Confident", "Data driven", "Assertive", "Value aware"],
    strengths: ["Get what you deserve", "Strong positioning", "No regrets"],
    weaknesses: ["Might come off aggressive", "High expectations"],
    tips: ["Balance confidence dengan humility", "Relationship matters too"],
  },
  B: {
    type: "B",
    title: "Balanced Negotiator",
    emoji: "⚖️",
    description: "Kamu nego dengan balance dan reasonable! Tau worth kamu tapi juga consider company perspective. Professional approach yang respectful.",
    traits: ["Reasonable", "Professional", "Fair", "Prepared"],
    strengths: ["Good outcomes usually", "Maintains relationships", "Sustainable"],
    weaknesses: ["Might leave money on table", "Too accommodating sometimes"],
    tips: ["Push a little more sometimes", "You're worth more than you think"],
  },
  C: {
    type: "C",
    title: "Passive Negotiator",
    emoji: "🌊",
    description: "Kamu cenderung passive dalam nego gaji. Trust company untuk kasih yang fair dan fokus ke opportunity daripada compensation. Go with the flow style.",
    traits: ["Passive", "Trusting", "Opportunity focused", "Flexible"],
    strengths: ["Low conflict", "Easy to work with", "Grateful attitude"],
    weaknesses: ["Often underpaid", "Miss opportunities for more"],
    tips: ["Know your market value", "Negotiating is expected and normal"],
  },
  D: {
    type: "D",
    title: "Reluctant Negotiator",
    emoji: "😰",
    description: "Nego gaji bikin kamu uncomfortable! Nervous, underprepared, dan sering accept apa yang ditawarkan. Takut kehilangan opportunity kalau nego.",
    traits: ["Nervous", "Underprepared", "Fearful", "Grateful"],
    strengths: ["Humble", "Easy to please", "Low maintenance"],
    weaknesses: ["Significantly underpaid likely", "Undervalue yourself"],
    tips: ["Practice builds confidence", "You have more leverage than you think"],
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
