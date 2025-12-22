// Tes Gaya Kamu dalam Mengejar Karir
// Bagaimana approach-mu untuk career advancement?

export const questions = [
  {
    id: 1,
    question: "Strategi untuk promosi...",
    options: [
      { text: "Active self-promotion dan visibility", type: "A" },
      { text: "Let work speak for itself", type: "B" },
      { text: "Build relationships dan networking", type: "C" },
      { text: "Wait for recognition", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Taking credit untuk achievements...",
    options: [
      { text: "Make sure atasan tau kontribusiku", type: "A" },
      { text: "Document tapi tidak boast", type: "B" },
      { text: "Share credit dengan tim", type: "C" },
      { text: "Shy about self-promotion", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Relationship dengan atasan...",
    options: [
      { text: "Actively manage upward", type: "A" },
      { text: "Professional dan respectful", type: "B" },
      { text: "Friendly dan collaborative", type: "C" },
      { text: "Minimal, fokus ke pekerjaan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Skill development untuk karir...",
    options: [
      { text: "Strategic, target skills yang advance career", type: "A" },
      { text: "Continuous learning yang relevan", type: "B" },
      { text: "Learn dari experiences dan mentors", type: "C" },
      { text: "Minimal, learn as needed", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Saat ada opening untuk posisi lebih tinggi...",
    options: [
      { text: "Apply langsung, seize opportunity", type: "A" },
      { text: "Evaluate fit lalu apply", type: "B" },
      { text: "Discuss dengan mentor dulu", type: "C" },
      { text: "Wait, maybe not ready", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Office politics...",
    options: [
      { text: "Play smart, understand dynamics", type: "A" },
      { text: "Aware tapi stay authentic", type: "B" },
      { text: "Build genuine relationships only", type: "C" },
      { text: "Totally avoid, just work", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Negotiating salary atau benefits...",
    options: [
      { text: "Confident, know my worth", type: "A" },
      { text: "Research dan prepare arguments", type: "B" },
      { text: "Accept what's offered mostly", type: "C" },
      { text: "Uncomfortable negotiating", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Career planning...",
    options: [
      { text: "Clear 5-10 year plan dengan milestones", type: "A" },
      { text: "General direction dengan flexibility", type: "B" },
      { text: "Organic, see where it goes", type: "C" },
      { text: "Don't really plan ahead", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Extra projects atau visibility opportunities...",
    options: [
      { text: "Volunteer untuk high-visibility ones", type: "A" },
      { text: "Take on kalau align dengan goals", type: "B" },
      { text: "Help out dimana dibutuhkan", type: "C" },
      { text: "Stick to my assigned work", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Asking untuk feedback atau guidance...",
    options: [
      { text: "Regularly, untuk improvement", type: "A" },
      { text: "Periodically, during reviews", type: "B" },
      { text: "When struggling atau need help", type: "C" },
      { text: "Rarely, figure out myself", type: "D" },
    ],
    },
  {
    id: 11,
    question: "LinkedIn dan professional branding...",
    options: [
      { text: "Active, curated professional presence", type: "A" },
      { text: "Updated, occasionally post", type: "B" },
      { text: "Basic profile, minimal activity", type: "C" },
      { text: "Not really using it", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Kalau passed over untuk promosi...",
    options: [
      { text: "Seek feedback dan strategize next", type: "A" },
      { text: "Evaluate dan keep working", type: "B" },
      { text: "Disappointed tapi accept", type: "C" },
      { text: "Discouraged, question everything", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Strategic Climber",
    emoji: "📈",
    description: "Kamu adalah career strategist! Very intentional tentang career advancement dengan clear plans dan active self-promotion. Knows how to play the game.",
    traits: ["Strategic", "Ambitious", "Self-promoting", "Planned"],
    strengths: ["Fast advancement", "Clear goals", "Visible"],
    weaknesses: ["Might seem too political", "Can burn out"],
    tips: ["Balance ambition dengan authenticity", "Relationships > transactions"],
  },
  B: {
    type: "B",
    title: "Steady Climber",
    emoji: "🪜",
    description: "Kamu adalah career builder yang steady! Work-focused dengan smart positioning. Let quality work shine while being strategic about visibility.",
    traits: ["Steady", "Quality-focused", "Balanced", "Professional"],
    strengths: ["Sustainable advancement", "Good reputation", "Authentic"],
    weaknesses: ["Might be slower", "Could be more assertive"],
    tips: ["Don't undervalue self-promotion", "Ask for what you want"],
  },
  C: {
    type: "C",
    title: "Relationship Builder",
    emoji: "🤝",
    description: "Kamu advance career melalui genuine relationships! Build connections naturally dan trust others to recognize value. Authentic tapi less strategic.",
    traits: ["Relationship-oriented", "Authentic", "Collaborative", "Trusting"],
    strengths: ["Genuine network", "Well-liked", "Trusted"],
    weaknesses: ["Might miss opportunities", "Too passive"],
    tips: ["Advocating for yourself is okay", "Relationships AND strategy work best"],
  },
  D: {
    type: "D",
    title: "Passive Career Path",
    emoji: "🌊",
    description: "Kamu take passive approach ke career! Wait for things to happen dan not actively pursuing advancement. This might limit growth.",
    traits: ["Passive", "Waiting", "Unplanned", "Reactive"],
    strengths: ["Low stress", "Content"],
    weaknesses: ["Limited advancement", "Might be overlooked", "No direction"],
    tips: ["Career management is your job", "Take initiative", "You have more power than you think"],
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
