// Oleh-oleh yang Menggambarkanmu
// Oleh-oleh khas Indonesia mana yang paling menggambarkan kepribadianmu?

export const questions = [
  {
    id: 1,
    question: "Saat memberi hadiah, kamu prefer...",
    options: [
      { text: "Yang fancy dan impressive", type: "A" },
      { text: "Yang praktis dan berguna", type: "B" },
      { text: "Yang manis dan menyenangkan", type: "C" },
      { text: "Yang unik dan memorable", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Karakteristikmu dalam pergaulan...",
    options: [
      { text: "Premium dan classy", type: "A" },
      { text: "Reliable dan substantive", type: "B" },
      { text: "Sweet dan loveable", type: "C" },
      { text: "Unique dan distinctive", type: "D" },
    ],
  },
  {
    id: 3,
    question: "First impression yang kamu berikan...",
    options: [
      { text: "Impressive dan berkelas", type: "A" },
      { text: "Solid dan bisa diandalkan", type: "B" },
      { text: "Manis dan ramah", type: "C" },
      { text: "Menarik dan berbeda", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Nilai yang kamu bawa...",
    options: [
      { text: "Quality dan prestige", type: "A" },
      { text: "Value dan substance", type: "B" },
      { text: "Warmth dan sweetness", type: "C" },
      { text: "Uniqueness dan character", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Packaging dan presentasi...",
    options: [
      { text: "Harus premium dan bagus", type: "A" },
      { text: "Yang penting isi, packaging secondary", type: "B" },
      { text: "Cute dan inviting", type: "C" },
      { text: "Authentic dan karakteristik", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Cara kamu meninggalkan kesan...",
    options: [
      { text: "Lewat quality dan class", type: "A" },
      { text: "Lewat reliability dan value", type: "B" },
      { text: "Lewat kindness dan warmth", type: "C" },
      { text: "Lewat uniqueness dan character", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Orang menunggu kamu untuk...",
    options: [
      { text: "Bring the premium stuff", type: "A" },
      { text: "Deliver yang substantial", type: "B" },
      { text: "Share sweetness dan joy", type: "C" },
      { text: "Bring something different", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Shelf life kepribadian (konsistensi)...",
    options: [
      { text: "High quality, long lasting", type: "A" },
      { text: "Substantial dan enduring", type: "B" },
      { text: "Sweet tapi bisa change", type: "C" },
      { text: "Unique, one of a kind", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Occasion yang cocok untukmu...",
    options: [
      { text: "Special dan formal occasions", type: "A" },
      { text: "Everyday reliability", type: "B" },
      { text: "Celebrations dan sharing", type: "C" },
      { text: "Whenever uniqueness needed", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Price point kepribadianmu...",
    options: [
      { text: "Premium, you get what you pay for", type: "A" },
      { text: "Value for money", type: "B" },
      { text: "Accessible dan sharing-friendly", type: "C" },
      { text: "Priceless karena rare", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Yang orang ingat dari kamu...",
    options: [
      { text: "The quality dan class", type: "A" },
      { text: "The reliability dan substance", type: "B" },
      { text: "The sweetness dan warmth", type: "C" },
      { text: "The uniqueness dan character", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kamu adalah jenis hadiah yang...",
    options: [
      { text: "Impressive dan memorable", type: "A" },
      { text: "Practical dan appreciated", type: "B" },
      { text: "Sweet dan brings joy", type: "C" },
      { text: "Unique dan conversation starter", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Kain Batik",
    emoji: "🎨",
    description: "Kamu adalah Kain Batik! Premium, classy, dan penuh dengan nilai. Seperti batik yang merupakan warisan budaya tinggi, kamu adalah orang yang berkelas dan meninggalkan impression yang lasting!",
    traits: ["Classy", "Premium", "Valuable", "Impressive"],
    strengths: ["High quality", "Respected", "Lasting impression"],
    weaknesses: ["Might seem intimidating", "High expectations"],
    tips: ["Your quality speaks", "Not everyone appreciates art"],
  },
  B: {
    type: "B",
    title: "Keripik/Sambal",
    emoji: "🌶️",
    description: "Kamu adalah Keripik atau Sambal! Practical, flavorful, dan selalu memberikan value. Seperti oleh-oleh yang selalu habis duluan, kamu adalah orang yang substantial dan appreciated!",
    traits: ["Practical", "Valuable", "Reliable", "Flavorful"],
    strengths: ["Always appreciated", "Great value", "Dependable"],
    weaknesses: ["Might seem common", "Taken for granted"],
    tips: ["Your practicality is valued", "You're essential!"],
  },
  C: {
    type: "C",
    title: "Pie Susu/Bakpia",
    emoji: "🥧",
    description: "Kamu adalah Pie Susu atau Bakpia! Sweet, shareable, dan selalu bikin orang happy. Seperti kue yang dibagi-bagi dengan senang, kamu adalah sumber kebahagiaan yang generous!",
    traits: ["Sweet", "Shareable", "Generous", "Joy-bringer"],
    strengths: ["Loved by all", "Great for sharing", "Brings happiness"],
    weaknesses: ["Might be too sweet", "Consumed quickly"],
    tips: ["Your sweetness is gift", "Keep sharing joy!"],
  },
  D: {
    type: "D",
    title: "Kerajinan Unik",
    emoji: "🎭",
    description: "Kamu adalah Kerajinan Unik seperti wayang atau ukiran! Distinctive, memorable, dan punya character yang tidak bisa ditiru. Seperti oleh-oleh yang jadi display, kamu adalah conversation piece!",
    traits: ["Unique", "Memorable", "Distinctive", "Artistic"],
    strengths: ["One of a kind", "Conversation starter", "Lasting value"],
    weaknesses: ["Not for everyone", "Niche appeal"],
    tips: ["Your uniqueness is treasure", "Right people will appreciate you"],
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
