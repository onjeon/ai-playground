// Gaya Ambik Selfie
// Kau ni photogenic natural atau perlu 100 takes?

export const questions = [
  {
    id: 1,
    question: "Nak ambik selfie. Berapa shots kau ambik?",
    options: [
      { text: "1-3 shots je, first one usually okay", type: "A" },
      { text: "Around 10, pilih yang best", type: "B" },
      { text: "30-50 shots, serious business!", type: "C" },
      { text: "100+ dan masih tak puas hati!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Angle selfie favorite kau?",
    options: [
      { text: "Straight on, no special angle", type: "A" },
      { text: "Slight tilt, know my good side", type: "B" },
      { text: "Very specific angles only, kena perfect!", type: "C" },
      { text: "Spent hours finding THE angle, and it's complicated!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Lighting untuk selfie - importance level?",
    options: [
      { text: "Tak kisah sangat, anywhere boleh", type: "A" },
      { text: "Natural light preferred la", type: "B" },
      { text: "Hunt for perfect lighting spot!", type: "C" },
      { text: "Ring light, golden hour ONLY!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Edit selfie before post. Level editing kau?",
    options: [
      { text: "No edit/minimal, straight upload", type: "A" },
      { text: "Basic adjustments - brightness, contrast", type: "B" },
      { text: "Full edit - filters, touch up", type: "C" },
      { text: "Facetune level editing, major transformation!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Orang ajak ambik group selfie. Kau?",
    options: [
      { text: "Just smile and pose, simple", type: "A" },
      { text: "Get into position, know where to stand", type: "B" },
      { text: "Check mirror first, prepare face!", type: "C" },
      { text: "PANIC! Fix everything, find best spot!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Selfie with strangers/new people. Kau?",
    options: [
      { text: "Sure, no problem!", type: "A" },
      { text: "Okay tapi conscious sikit", type: "B" },
      { text: "Try avoid, tak confident", type: "C" },
      { text: "NO WAY! Unprepared photos are nightmare!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Expression dalam selfie kau usually?",
    options: [
      { text: "Whatever natural, genuine smile", type: "A" },
      { text: "Practiced smile, kena betul!", type: "B" },
      { text: "Duck face/specific pose every time", type: "C" },
      { text: "Multiple poses, create the PERFECT expression!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Camera front vs back quality. Kau kisah tak?",
    options: [
      { text: "Tak kisah, front camera cukup", type: "A" },
      { text: "Front okay, tapi back kalau boleh", type: "B" },
      { text: "Back camera ONLY untuk quality!", type: "C" },
      { text: "Pro camera/DSLR for serious selfies!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Rate confidence level selfie kau?",
    options: [
      { text: "High! Comfortable dengan face aku", type: "A" },
      { text: "Okay, depends on the day", type: "B" },
      { text: "Low, need perfect conditions", type: "C" },
      { text: "Very low! That's why perlu 100 shots!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Selfie kau mostly untuk?",
    options: [
      { text: "Memories je, tak kisah perfect", type: "A" },
      { text: "Share dengan close friends", type: "B" },
      { text: "Instagram/social media worthy!", type: "C" },
      { text: "Major content creation, serious business!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Natural Queen - Photogenic Without Trying 📸",
    emoji: "📸",
    description: "KAU NI NATURAL PHOTOGENIC! Selfie first take pun dah cantik. Tak perlu edit banyak, tak perlu perfect angle. Confidence level high, comfortable with your look. Orang lain jealous!",
    traits: ["Naturally photogenic", "Confident", "Minimal effort needed", "Authentic look"],
    strengths: ["Quick selfies", "Comfortable in photos", "No stress about appearance"],
    weaknesses: ["May not understand others' struggle", "Could enhance if wanted"],
    tips: ["Share your confidence secrets!", "Your natural look is your strength"],
  },
  B: {
    type: "B",
    title: "Smart Selfie-er - Know Your Angles 📱",
    emoji: "📱",
    description: "Kau ni SMART SELFIE person! Know your good angles, lighting preferences, dan edit game on point tapi tasteful. Perfect balance antara effort dan natural. Good selfies tanpa being obsessive!",
    traits: ["Knows good angles", "Tasteful editing", "Balanced effort", "Good selfie game"],
    strengths: ["Consistently good photos", "Understands photography basics", "Not obsessive"],
    weaknesses: ["May feel pressured sometimes", "Comparison with others"],
    tips: ["You've got great balance!", "Keep it authentic"],
  },
  C: {
    type: "C",
    title: "Selfie Perfectionist - 50 Shots Minimum 🔄",
    emoji: "🔄",
    description: "KAU NI SELFIE PERFECTIONIST! Bukan senang nak dapat THE shot. Lighting kena perfect, angle kena right, expression kena on point. 50 shots adalah minimum requirement. High standards!",
    traits: ["Perfectionist", "High standards", "Many takes needed", "Editing skills strong"],
    strengths: ["Great end result", "Good photography eye", "Quality over quantity"],
    weaknesses: ["Takes forever", "Self-critical", "Miss moments for getting 'the shot'"],
    tips: ["Sometimes imperfect is charming!", "Enjoy the moment too"],
  },
  D: {
    type: "D",
    title: "Selfie Obsessed - Professional Level 💫",
    emoji: "💫",
    description: "KAU NI SELFIE LEVEL PRO! 100+ shots adalah STANDARD. Ring light, golden hour, specific angles only! Every selfie adalah production. Social media presence adalah serious business!",
    traits: ["Extremely perfectionist", "Professional setup", "Heavy editing", "Content creator level"],
    strengths: ["Amazing final photos", "Could be influencer", "Strong visual aesthetics"],
    weaknesses: ["Takes SO long", "Self-esteem tied to photos", "Miss living in moment"],
    tips: ["Remember natural beauty!", "Unedited photos have charm too!", "Self-worth ≠ selfie likes"],
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
