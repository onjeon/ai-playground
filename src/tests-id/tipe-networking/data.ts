// Tipe Kamu Saat Networking
// Tes ini mengungkap gaya networking yang paling cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Saat masuk ke networking event...",
    options: [
      { text: "Langsung approach orang dan introduce diri", type: "A" },
      { text: "Observe dulu, identify target connections", type: "B" },
      { text: "Cari orang yang kenal dulu", type: "C" },
      { text: "Stand by makanan sambil wait approach", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Icebreaker favorit kamu...",
    options: [
      { text: "Direct intro dan share what you do", type: "A" },
      { text: "Ask thoughtful questions tentang mereka", type: "B" },
      { text: "Find common ground atau mutual connection", type: "C" },
      { text: "Comment on something casual (venue, food, etc)", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Follow up setelah networking event...",
    options: [
      { text: "LinkedIn connect dengan personalized message same day", type: "A" },
      { text: "Categorize contacts dan schedule follow ups", type: "B" },
      { text: "Casual message ke yang click", type: "C" },
      { text: "Wait for them to reach out first", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tujuan utama networking menurutmu...",
    options: [
      { text: "Build useful professional connections", type: "A" },
      { text: "Learn dan exchange knowledge", type: "B" },
      { text: "Find like-minded people", type: "C" },
      { text: "Social experience, enjoy the moment", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Di conversation, kamu lebih sering...",
    options: [
      { text: "Share achievements dan opportunities", type: "A" },
      { text: "Deep dive into topics yang interesting", type: "B" },
      { text: "Listen dan connect genuinely", type: "C" },
      { text: "Keep it light dan fun", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Networking platform favorit...",
    options: [
      { text: "LinkedIn - professional dan targeted", type: "A" },
      { text: "Industry-specific forums/communities", type: "B" },
      { text: "Twitter/X - casual professional vibes", type: "C" },
      { text: "Instagram - authentic connection", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat someone asks for help/referral...",
    options: [
      { text: "Help kalau ada clear mutual benefit", type: "A" },
      { text: "Help kalau mereka qualified dan fit", type: "B" },
      { text: "Happy to help genuine connections", type: "C" },
      { text: "Depends on mood dan relationship", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Networking event yang kamu prefer...",
    options: [
      { text: "Exclusive high-profile gatherings", type: "A" },
      { text: "Industry conferences dan seminars", type: "B" },
      { text: "Casual meetups dan community events", type: "C" },
      { text: "Small intimate gatherings", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Business card / LinkedIn profile kamu...",
    options: [
      { text: "Highlight achievements dan position", type: "A" },
      { text: "Detailed dengan expertise dan projects", type: "B" },
      { text: "Authentic dengan personality showing", type: "C" },
      { text: "Basic, let conversations speak", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Maintaining network jangka panjang...",
    options: [
      { text: "Strategic touchpoints saat ada opportunity", type: "A" },
      { text: "Regular value-add sharing (articles, insights)", type: "B" },
      { text: "Genuine catch ups dan check ins", type: "C" },
      { text: "Let it flow naturally", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Biggest networking challenge buatmu...",
    options: [
      { text: "Finding the right caliber connections", type: "A" },
      { text: "Small talk before getting to substance", type: "B" },
      { text: "Being strategic, prefer genuine only", type: "C" },
      { text: "The whole thing feels draining", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ideal outcome dari networking...",
    options: [
      { text: "Business opportunities dan deals", type: "A" },
      { text: "Knowledge exchange dan mentorship", type: "B" },
      { text: "Meaningful friendships", type: "C" },
      { text: "Just had a good time", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Strategic Networker",
    emoji: "🎯",
    description: "Kamu adalah networking pro! Strategic, goal-oriented, dan effective. You know how to work a room dan build valuable connections. Your network is your net worth!",
    traits: ["Strategic", "Ambitious", "Confident", "Resourceful"],
    strengths: ["High-value connections", "Clear objectives", "Follow-through"],
    weaknesses: ["Can seem transactional", "Miss genuine connections", "Exhausting for some"],
    tips: ["Add genuine interest in people", "Not everything needs ROI", "Quality over quantity"],
  },
  B: {
    type: "B",
    title: "The Knowledge Exchanger",
    emoji: "🧠",
    description: "Kamu network untuk knowledge! Substance over surface, deep conversations over small talk. You attract people dengan expertise dan thought leadership.",
    traits: ["Intellectual", "Curious", "Substantive", "Credible"],
    strengths: ["Meaningful exchanges", "Respected opinions", "Long-lasting connections"],
    weaknesses: ["Avoid casual networking", "Can be intimidating", "Miss broader network"],
    tips: ["Embrace light conversations too", "Everyone has something to teach", "Expand your circles"],
  },
  C: {
    type: "C",
    title: "The Genuine Connector",
    emoji: "💝",
    description: "Kamu network dengan heart! Authenticity first, connections naturally follow. People feel comfortable dengan kamu dan relationships jadi meaningful.",
    traits: ["Authentic", "Warm", "Genuine", "Trustworthy"],
    strengths: ["Deep relationships", "Trusted referrals", "Natural rapport"],
    weaknesses: ["May miss strategic opportunities", "Hard to be calculative", "Slow network growth"],
    tips: ["Some strategy helps", "Your network can help your goals", "Be intentional sometimes"],
  },
  D: {
    type: "D",
    title: "The Reluctant Networker",
    emoji: "🌿",
    description: "Kamu network dengan chill vibes! Low-pressure, natural, dan no-agenda approach. You prefer organic connections over forced networking events.",
    traits: ["Relaxed", "Authentic", "Low-key", "Selective"],
    strengths: ["No fake connections", "Low stress", "Genuine when you connect"],
    weaknesses: ["Limited network", "Miss opportunities", "May seem disinterested"],
    tips: ["Push comfort zone occasionally", "Networking is a skill", "Small steps count"],
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
