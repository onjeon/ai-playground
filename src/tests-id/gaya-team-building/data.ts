// Gaya Team Building Kamu
// Tes ini mengungkap style team building yang paling cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Team building activity yang paling appeal...",
    options: [
      { text: "Competitive games, escape room, sports", type: "A" },
      { text: "Workshops, learning sessions", type: "B" },
      { text: "Dinner, karaoke, casual hangout", type: "C" },
      { text: "Volunteer atau CSR activities", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Timing ideal untuk team building...",
    options: [
      { text: "During work hours, it's work activity", type: "A" },
      { text: "Mixed, some work some personal time", type: "B" },
      { text: "After work, more relaxed", type: "C" },
      { text: "Weekend retreat, full experience", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Group size yang prefer...",
    options: [
      { text: "Whole team/department together", type: "A" },
      { text: "Smaller groups, deeper connection", type: "B" },
      { text: "My close colleagues aja", type: "C" },
      { text: "Cross-functional, meet new people", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Purpose utama team building menurutmu...",
    options: [
      { text: "Build teamwork dan competitive spirit", type: "A" },
      { text: "Learn something new together", type: "B" },
      { text: "Strengthen personal relationships", type: "C" },
      { text: "Break routine dan have fun", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Budget untuk team building...",
    options: [
      { text: "Worth investing untuk good experience", type: "A" },
      { text: "Reasonable, ROI matters", type: "B" },
      { text: "Simple activities juga fun", type: "C" },
      { text: "Doesn't matter, spirit yang penting", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat team building activity...",
    options: [
      { text: "All in, competitive mode", type: "A" },
      { text: "Participate actively", type: "B" },
      { text: "Enjoy social aspect paling", type: "C" },
      { text: "Observe dan join when comfortable", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Virtual team building opinion...",
    options: [
      { text: "Okay tapi not as effective", type: "A" },
      { text: "Can be good dengan right activity", type: "B" },
      { text: "Prefer in-person honestly", type: "C" },
      { text: "Fine, less pressure actually", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Frequency team building ideal...",
    options: [
      { text: "Quarterly, big events", type: "A" },
      { text: "Monthly, smaller activities", type: "B" },
      { text: "Regular casual hangouts", type: "C" },
      { text: "Occasional, when needed", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kalau ga suka activity yang dipilih...",
    options: [
      { text: "Join anyway, team player", type: "A" },
      { text: "Suggest alternatives", type: "B" },
      { text: "Go tapi might not fully participate", type: "C" },
      { text: "Skip kalau bisa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Best team building memory...",
    options: [
      { text: "Winning competition together", type: "A" },
      { text: "Learning something cool", type: "B" },
      { text: "Deep conversations dan bonding", type: "C" },
      { text: "Random fun spontaneous moments", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Role kamu di team building...",
    options: [
      { text: "Leader, organizer, hype person", type: "A" },
      { text: "Active participant", type: "B" },
      { text: "Social connector", type: "C" },
      { text: "Go with flow, support role", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Post team building impact...",
    options: [
      { text: "Team works better together", type: "A" },
      { text: "Learned something applicable", type: "B" },
      { text: "Closer relationships", type: "C" },
      { text: "Good memories, reset", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Competitive Connector",
    emoji: "🏆",
    description: "Kamu love team building yang competitive dan high-energy! Games, competitions, dan activities yang push limits. You bond through shared challenges.",
    traits: ["Competitive", "Energetic", "Team-spirited", "Action-oriented"],
    strengths: ["Bring energy", "Rally the team", "Create memorable experiences"],
    weaknesses: ["May overwhelm quieter colleagues", "Competition not for everyone"],
    tips: ["Include non-competitive options", "Read the room", "Winning isn't everything"],
  },
  B: {
    type: "B",
    title: "The Learning Enthusiast",
    emoji: "📚",
    description: "Kamu prefer team building yang productive! Workshops, skill shares, dan learning experiences. Bond while growing together. Efficient use of time!",
    traits: ["Growth-minded", "Practical", "Productive", "Value-focused"],
    strengths: ["Team develops skills", "Meaningful activities", "ROI-positive"],
    weaknesses: ["May miss pure fun factor", "Work even at play"],
    tips: ["Balance learning dengan pure fun", "Not everything needs takeaway", "Relax sometimes"],
  },
  C: {
    type: "C",
    title: "The Social Butterfly",
    emoji: "🦋",
    description: "Kamu all about relationships di team building! Dinners, casual hangouts, dan heart-to-heart conversations. It's about connecting as humans.",
    traits: ["Social", "Relationship-focused", "Warm", "Connector"],
    strengths: ["Build deep bonds", "Create comfortable environment", "Remember personal details"],
    weaknesses: ["May exclude quieter people", "Clique forming"],
    tips: ["Include everyone", "Mix up groups", "Structured activities have place too"],
  },
  D: {
    type: "D",
    title: "The Chill Participant",
    emoji: "🌿",
    description: "Kamu appreciate team building tapi low-key! No pressure activities, optional participation, dan organic bonding. Quality over intensity.",
    traits: ["Relaxed", "Selective", "Authentic", "Low-pressure"],
    strengths: ["No fake enthusiasm", "Genuine connections", "Stress-free"],
    weaknesses: ["May seem disengaged", "Miss opportunities to connect"],
    tips: ["Push comfort zone occasionally", "Your presence matters to team", "Try to engage more"],
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
