// Tipe Hybrid Work Kamu
// Tes ini mengungkap gaya hybrid work yang paling cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Ideal split WFH vs WFO menurutmu...",
    options: [
      { text: "Mostly WFO (4-5 hari), WFH sesekali", type: "A" },
      { text: "Balanced 50-50", type: "B" },
      { text: "Mostly WFH (3-4 hari), WFO untuk key meetings", type: "C" },
      { text: "Full remote, WFO cuma kalau perlu banget", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Hari yang prefer untuk WFO...",
    options: [
      { text: "Senin-Jumat, consistency is key", type: "A" },
      { text: "Mid-week (Selasa-Kamis), avoid commute rush", type: "B" },
      { text: "Depends on meetings dan collaboration needs", type: "C" },
      { text: "Random, based on mood", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Biggest benefit WFO buatmu...",
    options: [
      { text: "Face-to-face collaboration", type: "A" },
      { text: "Separation kerja dan rumah", type: "B" },
      { text: "Social interaction sama colleagues", type: "C" },
      { text: "Free coffee dan snacks honestly", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Biggest benefit WFH buatmu...",
    options: [
      { text: "No commute, save time", type: "A" },
      { text: "Deep focus work", type: "B" },
      { text: "Flexibility dan comfort", type: "C" },
      { text: "Everything, WFH is the best", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Komunikasi saat hybrid...",
    options: [
      { text: "Prefer in-person, more effective", type: "A" },
      { text: "Mix sesuai kebutuhan", type: "B" },
      { text: "Virtual mostly works fine", type: "C" },
      { text: "Async communication FTW", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Challenge terbesar hybrid work...",
    options: [
      { text: "Missing out on office dynamics", type: "A" },
      { text: "Coordinating schedules dengan tim", type: "B" },
      { text: "Maintaining work-life boundaries", type: "C" },
      { text: "Being forced to come to office", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Equipment setup kamu...",
    options: [
      { text: "Office setup better, prefer kerja di sana", type: "A" },
      { text: "Good setup di both places", type: "B" },
      { text: "Home setup lebih nyaman", type: "C" },
      { text: "Laptop enough, work from anywhere", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Team bonding di era hybrid...",
    options: [
      { text: "Important, plan regular in-person events", type: "A" },
      { text: "Mix virtual dan in-person activities", type: "B" },
      { text: "Virtual bonding cukup effective", type: "C" },
      { text: "Not really priority, we're here to work", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Productivity di WFH vs WFO...",
    options: [
      { text: "More productive di office", type: "A" },
      { text: "Depends on type of work", type: "B" },
      { text: "More productive di rumah", type: "C" },
      { text: "Way more productive WFH", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau company mandate WFO full...",
    options: [
      { text: "Fine, I prefer office anyway", type: "A" },
      { text: "Negotiate untuk some flexibility", type: "B" },
      { text: "Disappointed tapi comply", type: "C" },
      { text: "Start looking for new job", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Visibility dan career di hybrid setting...",
    options: [
      { text: "Concerned, presence matters", type: "A" },
      { text: "Manage it strategically", type: "B" },
      { text: "Results speak louder than presence", type: "C" },
      { text: "Don't care about office politics", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Long-term, work arrangement ideal...",
    options: [
      { text: "Traditional office dengan some flex", type: "A" },
      { text: "Structured hybrid (set days)", type: "B" },
      { text: "Flexible hybrid (my choice)", type: "C" },
      { text: "Full remote forever please", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Office Enthusiast",
    emoji: "🏢",
    description: "Kamu thrive di office! Energy dari colleagues, face-to-face collaboration, dan clear separation kerja-rumah work best for you. Hybrid boleh, tapi office-first.",
    traits: ["Social", "Collaborative", "Traditional", "Structure-loving"],
    strengths: ["Strong office relationships", "Clear work boundaries", "Visible presence"],
    weaknesses: ["May struggle with full remote", "Dependent on office", "Commute costs"],
    tips: ["Appreciate WFH benefits too", "Build remote work skills", "Flexibility is valuable"],
  },
  B: {
    type: "B",
    title: "The True Hybrid",
    emoji: "⚖️",
    description: "Kamu adalah true hybrid worker! Appreciate both worlds dan know how to optimize each. Balanced approach suits your style perfectly.",
    traits: ["Balanced", "Adaptable", "Strategic", "Flexible"],
    strengths: ["Best of both worlds", "Adaptable", "Good work-life balance"],
    weaknesses: ["May lack consistency", "Context switching", "Need good planning"],
    tips: ["Establish clear routines", "Communicate schedule to team", "Optimize each environment"],
  },
  C: {
    type: "C",
    title: "The Remote-Preferred",
    emoji: "🏠",
    description: "Kamu prefer WFH tapi appreciate occasional office time! Remote adalah default, office untuk specific purposes. Freedom dengan connection.",
    traits: ["Independent", "Focused", "Freedom-valuing", "Self-motivated"],
    strengths: ["High WFH productivity", "Good boundaries", "Appreciate flexibility"],
    weaknesses: ["May miss social connections", "Career visibility", "Isolation risk"],
    tips: ["Make office days count", "Stay connected virtually", "Don't fully isolate"],
  },
  D: {
    type: "D",
    title: "The Digital Native",
    emoji: "🌐",
    description: "Office? No thanks! Full remote is your jam. You've mastered remote work dan see little value in commuting. Location freedom is everything.",
    traits: ["Remote-first", "Independent", "Digital-native", "Freedom-prioritizing"],
    strengths: ["Remote work mastery", "Location flexibility", "Self-sufficient"],
    weaknesses: ["May struggle if forced to office", "Career in traditional companies", "Social isolation"],
    tips: ["Build remote-first network", "Create social connections outside work", "Some in-person has value"],
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
