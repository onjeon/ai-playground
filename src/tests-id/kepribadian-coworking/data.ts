// Kepribadian Coworking Space
// Tes ini mengungkap tipe kamu di coworking space!

export const questions = [
  {
    id: 1,
    question: "Spot favorit kamu di coworking...",
    options: [
      { text: "Hot desk area, different spot tiap hari", type: "A" },
      { text: "Fixed desk, my own territory", type: "B" },
      { text: "Communal area, bisa ngobrol", type: "C" },
      { text: "Phone booth/quiet room, privacy please", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat ada orang duduk di sebelah...",
    options: [
      { text: "Great! Potential networking", type: "A" },
      { text: "Fine, mind my own business", type: "B" },
      { text: "Start conversation!", type: "C" },
      { text: "Hope they're quiet", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Community events di coworking...",
    options: [
      { text: "Love it! Great untuk networking", type: "A" },
      { text: "Join yang relevant", type: "B" },
      { text: "Fun! Suka meet people", type: "C" },
      { text: "Skip, here to work", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Free coffee/snacks situation...",
    options: [
      { text: "Nice perk, networking opportunity di pantry", type: "A" },
      { text: "Convenient, save time", type: "B" },
      { text: "Love the pantry chats!", type: "C" },
      { text: "Grab and go back to work", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Noise level preference...",
    options: [
      { text: "Buzz of activity, energizing", type: "A" },
      { text: "Moderate, background noise okay", type: "B" },
      { text: "Don't mind, can tune out", type: "C" },
      { text: "Quiet as possible please", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Meeting rooms di coworking...",
    options: [
      { text: "Use often untuk client meetings", type: "A" },
      { text: "Book when needed untuk calls", type: "B" },
      { text: "Casual meetings di common area", type: "C" },
      { text: "Essential untuk privacy", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Relationship dengan coworking community...",
    options: [
      { text: "Know lots of people, regular connections", type: "A" },
      { text: "Few acquaintances", type: "B" },
      { text: "Friends dengan banyak members", type: "C" },
      { text: "Anonymous, just here to work", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Alasan utama pilih coworking...",
    options: [
      { text: "Professional environment dan networking", type: "A" },
      { text: "Better setup than home", type: "B" },
      { text: "Social environment, not alone", type: "C" },
      { text: "Focus, no home distractions", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Phone calls handling...",
    options: [
      { text: "Take calls di desk, normal", type: "A" },
      { text: "Quick calls di desk, long ones in booth", type: "B" },
      { text: "Walk around sambil calls", type: "C" },
      { text: "Always use phone booth", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Staying late di coworking...",
    options: [
      { text: "Sometimes, events atau deadlines", type: "A" },
      { text: "Stick to normal hours", type: "B" },
      { text: "After hours hangouts fun", type: "C" },
      { text: "In and out, efficient", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Personalizing workspace...",
    options: [
      { text: "Professional items, business cards visible", type: "A" },
      { text: "Minimal, functional items", type: "B" },
      { text: "Photos, plants, personal touch", type: "C" },
      { text: "Nothing, clean desk", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Ideal coworking vibe...",
    options: [
      { text: "Professional, business-focused", type: "A" },
      { text: "Balanced, work-friendly", type: "B" },
      { text: "Creative, social, fun culture", type: "C" },
      { text: "Quiet, library-like", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Networker",
    emoji: "🤝",
    description: "Coworking is networking opportunity for you! Professional environment, business connections, dan visibility. You maximize the social capital.",
    traits: ["Networker", "Professional", "Strategic", "Social"],
    strengths: ["Build valuable connections", "Business opportunities", "Community leader"],
    weaknesses: ["May neglect deep work", "Transactional relationships"],
    tips: ["Balance networking dengan actual work", "Quality connections > quantity", "Some focus time needed"],
  },
  B: {
    type: "B",
    title: "The Efficient Worker",
    emoji: "💻",
    description: "Coworking provides what you need: good setup, professional environment, dan functional space. You're here to work efficiently.",
    traits: ["Efficient", "Practical", "Focused", "Functional"],
    strengths: ["High productivity", "Professional image", "Good balance"],
    weaknesses: ["May miss community benefits", "Underutilize networking"],
    tips: ["Explore community occasionally", "Some networking valuable", "Don't isolate completely"],
  },
  C: {
    type: "C",
    title: "The Community Member",
    emoji: "🎉",
    description: "Coworking is your second home! Love the community, friendships, dan social aspect. Working alongside others makes work more enjoyable.",
    traits: ["Social", "Friendly", "Community-oriented", "Energetic"],
    strengths: ["Rich social life", "Enjoyable work experience", "Part of community"],
    weaknesses: ["May get distracted", "Blur work-social lines"],
    tips: ["Protect focus time", "Balance social dengan productivity", "Work still needs to get done"],
  },
  D: {
    type: "D",
    title: "The Focused Individual",
    emoji: "🎧",
    description: "Coworking provides focus environment away from home. Here for the setup dan productivity, not the social scene. Headphones on, work mode.",
    traits: ["Focused", "Independent", "Private", "Productive"],
    strengths: ["High focus", "No distractions", "Efficient work"],
    weaknesses: ["Miss community benefits", "May seem unfriendly"],
    tips: ["Occasional interaction is healthy", "Community has benefits", "Small connections can help"],
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
