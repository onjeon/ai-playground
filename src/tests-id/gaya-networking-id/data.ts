// Tes Gaya Networking Kamu
// Bagaimana cara kamu membangun koneksi profesional?

export const questions = [
  {
    id: 1,
    question: "Di networking event atau conference...",
    options: [
      { text: "Work the room, kenalan banyak orang", type: "A" },
      { text: "Quality conversations dengan beberapa orang", type: "B" },
      { text: "Stick dengan orang yang sudah dikenal", type: "C" },
      { text: "Awkward dan ingin pulang cepat", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Following up setelah kenalan baru...",
    options: [
      { text: "Connect di LinkedIn dan follow up chat", type: "A" },
      { text: "Add kalau memang ada potential value", type: "B" },
      { text: "Maybe add, probably forget", type: "C" },
      { text: "Rarely follow up", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Approach untuk networking...",
    options: [
      { text: "Strategic, target specific people/industries", type: "A" },
      { text: "Organic, build genuine relationships", type: "B" },
      { text: "Reactive, when opportunities come", type: "C" },
      { text: "Minimal, networking is uncomfortable", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Small talk dengan strangers...",
    options: [
      { text: "Easy dan enjoy", type: "A" },
      { text: "Can do dengan effort", type: "B" },
      { text: "Struggle tapi try", type: "C" },
      { text: "Very uncomfortable", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Maintaining professional relationships...",
    options: [
      { text: "Regular check-ins dan engagement", type: "A" },
      { text: "Occasional touch points", type: "B" },
      { text: "Kalau ada keperluan", type: "C" },
      { text: "Rarely maintain", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Asking untuk bantuan dari network...",
    options: [
      { text: "Comfortable, that's what networks are for", type: "A" },
      { text: "Can ask kalau sudah ada relationship", type: "B" },
      { text: "Hesitant, don't want to bother", type: "C" },
      { text: "Very uncomfortable asking", type: "D" },
    ],
  },
  {
    id: 7,
    question: "LinkedIn activity...",
    options: [
      { text: "Active poster dan engager", type: "A" },
      { text: "Regular engagement, occasional posts", type: "B" },
      { text: "Lurker, consume tapi tidak post", type: "C" },
      { text: "Barely use it", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Industry events dan communities...",
    options: [
      { text: "Active member dan participant", type: "A" },
      { text: "Join relevant ones, participate sometimes", type: "B" },
      { text: "Aware tapi tidak join", type: "C" },
      { text: "Not involved at all", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Giving help atau referrals ke network...",
    options: [
      { text: "Frequently, love helping connections", type: "A" },
      { text: "When I can dan it's appropriate", type: "B" },
      { text: "Rarely think about it", type: "C" },
      { text: "Not in position to help much", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Introducing yourself secara profesional...",
    options: [
      { text: "Polished elevator pitch ready", type: "A" },
      { text: "Can articulate what I do clearly", type: "B" },
      { text: "Struggle to explain effectively", type: "C" },
      { text: "Very awkward about it", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Network size vs depth...",
    options: [
      { text: "Large network, many connections", type: "A" },
      { text: "Moderate size, mix of depth", type: "B" },
      { text: "Small, deep connections only", type: "C" },
      { text: "Very limited network", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Value of networking menurutmu...",
    options: [
      { text: "Essential untuk career success", type: "A" },
      { text: "Important dan worthwhile", type: "B" },
      { text: "Nice to have tapi not priority", type: "C" },
      { text: "Overrated atau not for me", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Super Networker",
    emoji: "🔗",
    description: "Kamu adalah networking pro! Large network, active engagement, dan understand the power of connections. Career opportunities come to you.",
    traits: ["Networker", "Connected", "Strategic", "Active"],
    strengths: ["Great opportunities", "Known in industry", "Valuable connections"],
    weaknesses: ["Might seem transactional", "Hard to maintain all"],
    tips: ["Quality matters too", "Deepen some relationships"],
  },
  B: {
    type: "B",
    title: "Balanced Networker",
    emoji: "🤝",
    description: "Kamu memiliki approach networking yang balanced! Build genuine connections tanpa being too strategic. Good mix of breadth dan depth.",
    traits: ["Balanced", "Genuine", "Professional", "Sustainable"],
    strengths: ["Authentic connections", "Good reputation", "Sustainable"],
    weaknesses: ["Could expand more"],
    tips: ["Keep building", "Push slightly out of comfort zone"],
  },
  C: {
    type: "C",
    title: "Reluctant Networker",
    emoji: "🌱",
    description: "Kamu reluctant tentang networking! Understand value tapi struggle dengan execution. Small network tapi bisa develop.",
    traits: ["Reluctant", "Introverted", "Selective", "Genuine"],
    strengths: ["Authentic when connecting", "Deep when do connect"],
    weaknesses: ["Limited network", "Miss opportunities"],
    tips: ["Start small", "Quality connections count", "It gets easier with practice"],
  },
  D: {
    type: "D",
    title: "Non-Networker",
    emoji: "🏝️",
    description: "Kamu avoid networking! Very uncomfortable atau not seeing value. This significantly limits career opportunities dan growth.",
    traits: ["Avoidant", "Isolated", "Uncomfortable", "Limited"],
    strengths: ["Self-reliant"],
    weaknesses: ["Career limitations", "Miss opportunities", "Professional isolation"],
    tips: ["Networking is career investment", "Start with 1:1", "Your skills need visibility too"],
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
