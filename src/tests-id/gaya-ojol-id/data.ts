// Gaya Ojol (Ojek Online) Kamu
// Tes ini mengungkap personality kamu sebagai user ojek online!

export const questions = [
  {
    id: 1,
    question: "Aplikasi ojol favorit...",
    options: [
      { text: "Gojek loyalist", type: "A" },
      { text: "Grab user", type: "B" },
      { text: "Compare prices dulu", type: "C" },
      { text: "Whatever available", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat pesan ojol, kamu...",
    options: [
      { text: "Udah ready di pickup point", type: "A" },
      { text: "Mulai siap-siap pas order", type: "B" },
      { text: "Still getting ready, driver waits", type: "C" },
      { text: "Sometimes cancel last minute", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Chat sama driver...",
    options: [
      { text: "Friendly, kasih detail lokasi jelas", type: "A" },
      { text: "Professional, straight to the point", type: "B" },
      { text: "Minimal chat, let GPS do the work", type: "C" },
      { text: "Only kalau ada masalah", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Rating dan review...",
    options: [
      { text: "Always 5 star unless really bad", type: "A" },
      { text: "Rate honestly based on service", type: "B" },
      { text: "5 star, skip review", type: "C" },
      { text: "Forget to rate often", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tipping driver...",
    options: [
      { text: "Regularly, appreciate their work", type: "A" },
      { text: "When service exceptional", type: "B" },
      { text: "Rarely, fare is enough", type: "C" },
      { text: "Never, sorry budget tight", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Conversation during ride...",
    options: [
      { text: "Chat friendly sama driver", type: "A" },
      { text: "Respond kalau diajak ngobrol", type: "B" },
      { text: "Headphones on, quiet ride please", type: "C" },
      { text: "Depends on mood", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Promo dan voucher...",
    options: [
      { text: "Hunt aktif, never pay full price", type: "A" },
      { text: "Use yang available", type: "B" },
      { text: "Forget to apply sometimes", type: "C" },
      { text: "Too lazy to check", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Order GoFood/GrabFood...",
    options: [
      { text: "Daily, cooking what's that", type: "A" },
      { text: "Regular, few times a week", type: "B" },
      { text: "Occasionally treat", type: "C" },
      { text: "Prefer cook atau dine out", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Surge pricing saat hujan/peak...",
    options: [
      { text: "Pay it, really need ride", type: "A" },
      { text: "Wait sampai normal", type: "B" },
      { text: "Find alternative", type: "C" },
      { text: "Frustrated tapi bayar juga", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pickup location accuracy...",
    options: [
      { text: "Pin exact, kasih landmark", type: "A" },
      { text: "Mostly accurate, minor adjustments", type: "B" },
      { text: "GPS does its thing", type: "C" },
      { text: "Driver finds me eventually", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Complaining about bad service...",
    options: [
      { text: "Report dan feedback officially", type: "A" },
      { text: "Low rating dengan catatan", type: "B" },
      { text: "Just don't order from them again", type: "C" },
      { text: "Let it go, not worth effort", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Life without ojol apps...",
    options: [
      { text: "Cannot function, dependent", type: "A" },
      { text: "Very inconvenient", type: "B" },
      { text: "Manageable dengan alternatives", type: "C" },
      { text: "Would adapt, not that dependent", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Ojol Power User",
    emoji: "🛵",
    description: "Ojol adalah lifeline! Multiple orders daily, know all the hacks, dan probably have platinum status di apps. Urban life essential!",
    traits: ["Dependent", "Savvy user", "Generous", "Frequent"],
    strengths: ["Maximum convenience", "Support gig economy", "Know the system"],
    weaknesses: ["Expensive habit", "Over-dependent", "Might forget how to commute normally"],
    tips: ["Budget check!", "Try walking sometimes", "Your driver appreciation is great!"],
  },
  B: {
    type: "B",
    title: "The Reasonable User",
    emoji: "📱",
    description: "Kamu use ojol dengan bijak! When needed, fair treatment, dan appreciate the service tanpa over-reliance. Balanced approach!",
    traits: ["Reasonable", "Fair", "Balanced", "Practical"],
    strengths: ["Good usage habits", "Fair customer", "Not addicted"],
    weaknesses: ["Could optimize more dengan promos"],
    tips: ["You're doing great!", "Hunt more promos untuk savings"],
  },
  C: {
    type: "C",
    title: "The Casual Orderer",
    emoji: "🌊",
    description: "Ojol when convenient! Not dependent, use sometimes, dan have other transportation options. Low-key user without stress.",
    traits: ["Casual", "Independent", "Flexible", "Low-maintenance"],
    strengths: ["Not dependent", "Have alternatives", "Save money"],
    weaknesses: ["Miss convenience sometimes", "Could be easier life"],
    tips: ["Ojol can make life easier", "Try GoFood for lazy days", "Balance is good!"],
  },
  D: {
    type: "D",
    title: "The Reluctant User",
    emoji: "🚶",
    description: "Ojol bukan prioritas! Prefer other transport, use only when no choice. Maybe old school atau just independent. Valid!",
    traits: ["Independent", "Traditional", "Thrifty", "Self-reliant"],
    strengths: ["Save money", "Not dependent on apps", "Exercise by commuting"],
    weaknesses: ["Miss convenience", "Harder during emergencies"],
    tips: ["Ojol is useful for emergencies", "Food delivery can save time", "But your independence is admirable"],
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
