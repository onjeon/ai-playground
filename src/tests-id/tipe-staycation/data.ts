// Tipe Staycation Kamu
// Tes ini mengungkap style staycation yang cocok denganmu!

export const questions = [
  {
    id: 1,
    question: "Alasan staycation biasanya...",
    options: [
      { text: "Need real break dari routine", type: "A" },
      { text: "Anniversary, birthday, special occasion", type: "B" },
      { text: "Pool/facilities access", type: "C" },
      { text: "Content creation, aesthetic photos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Hotel selection criteria...",
    options: [
      { text: "Best room deal, value for money", type: "A" },
      { text: "Facilities: pool, spa, gym", type: "B" },
      { text: "Location dan views", type: "C" },
      { text: "Instagrammable, design hotel", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Budget untuk staycation...",
    options: [
      { text: "Mid-range, comfort is enough", type: "A" },
      { text: "Splurge untuk experience", type: "B" },
      { text: "Deal hunting, promo only", type: "C" },
      { text: "Worth it untuk content", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Duration staycation ideal...",
    options: [
      { text: "2+ nights, proper reset", type: "A" },
      { text: "1 night, quick escape", type: "B" },
      { text: "Day use aja cukup", type: "C" },
      { text: "Depends on occasion", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Activities during staycation...",
    options: [
      { text: "Full relaxation, literally nothing", type: "A" },
      { text: "Pool, spa, use all facilities", type: "B" },
      { text: "Still work/productive tapi in nice place", type: "C" },
      { text: "Photo session, explore hotel", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Breakfast situation...",
    options: [
      { text: "Buffet breakfast included, must!", type: "A" },
      { text: "Room service, lazy morning", type: "B" },
      { text: "Skip breakfast, sleep in", type: "C" },
      { text: "Aesthetic breakfast for photos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Going with...",
    options: [
      { text: "Partner, romantic getaway", type: "A" },
      { text: "Friends, fun weekend", type: "B" },
      { text: "Solo, me time", type: "C" },
      { text: "Family, quality time", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Check-in/check-out...",
    options: [
      { text: "Early check-in, late check-out maximize", type: "A" },
      { text: "Standard times fine", type: "B" },
      { text: "Check-in as late as possible", type: "C" },
      { text: "Depends on plans", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Room type preference...",
    options: [
      { text: "Standard comfortable, bed is bed", type: "A" },
      { text: "Suite atau upgrade kalau bisa", type: "B" },
      { text: "View room, city/pool/ocean", type: "C" },
      { text: "Unique room, themed, special", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Posting staycation ke socmed...",
    options: [
      { text: "Minimal, enjoy privately", type: "A" },
      { text: "Some stories, few photos", type: "B" },
      { text: "Full coverage!", type: "C" },
      { text: "That's half the point honestly", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Leaving the hotel during stay...",
    options: [
      { text: "Never, whole point is hotel", type: "A" },
      { text: "Maybe untuk makan di luar", type: "B" },
      { text: "Explore surrounding area", type: "C" },
      { text: "Depends on location", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Post-staycation feeling...",
    options: [
      { text: "Recharged, ready for life", type: "A" },
      { text: "Sad to leave, want more", type: "B" },
      { text: "Good memories made", type: "C" },
      { text: "Content collected successfully", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The True Relaxer",
    emoji: "🛁",
    description: "Staycation adalah REAL reset! Literally do nothing, disconnect completely, dan recharge properly. Hotel adalah sanctuary for you!",
    traits: ["Relaxation-focused", "Rejuvenating", "Escape-seeking", "Peaceful"],
    strengths: ["True mental reset", "Proper rest", "Come back refreshed"],
    weaknesses: ["Might waste facilities", "Could be more active"],
    tips: ["Your approach is valid!", "Maybe try spa once", "Rest is productive"],
  },
  B: {
    type: "B",
    title: "The Experience Maximizer",
    emoji: "🏊",
    description: "Staycation adalah experience! Pool, gym, spa, rooftop - use EVERYTHING. Get every rupiah's worth dari the stay!",
    traits: ["Value-maximizing", "Active", "Experience-seeking", "Thorough"],
    strengths: ["Full hotel experience", "Great value", "No regrets"],
    weaknesses: ["Might be exhausting", "Not fully relaxing"],
    tips: ["Leave time untuk actual rest", "Don't stress about using everything", "Quality > quantity experiences"],
  },
  C: {
    type: "C",
    title: "The Practical Staycationer",
    emoji: "💼",
    description: "Staycation dengan purpose! Change of scenery, maybe work in nicer place, atau just need hotel facilities. Functional approach!",
    traits: ["Practical", "Purposeful", "Functional", "Efficient"],
    strengths: ["Clear purpose", "Don't overspend", "Meet objectives"],
    weaknesses: ["Miss relaxation aspect", "Not true vacation"],
    tips: ["Allow yourself to truly rest sometimes", "Vacation should be vacation", "Work can wait"],
  },
  D: {
    type: "D",
    title: "The Content Creator Staycation",
    emoji: "📸",
    description: "Staycation adalah content opportunity! Aesthetic hotel, great photos, dan Instagram-worthy moments. Every corner is a photo op!",
    traits: ["Content-focused", "Aesthetic-driven", "Social media savvy", "Creative"],
    strengths: ["Great photos", "Memorable content", "Make the most visually"],
    weaknesses: ["Might not actually relax", "Performance over experience"],
    tips: ["Put phone down sometimes", "Experience the moment too", "Memories > content"],
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
