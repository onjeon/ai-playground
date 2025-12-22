// Tipe Nongkrong Kamu
// Tes ini mengungkap personality kamu saat nongkrong sama temen!

export const questions = [
  {
    id: 1,
    question: "Tempat nongkrong favorit...",
    options: [
      { text: "Cafe aesthetic, good for photos", type: "A" },
      { text: "Tempat makan enak, food-focused", type: "B" },
      { text: "Rumah teman, most comfortable", type: "C" },
      { text: "Mall, banyak pilihan", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Saat planning nongkrong...",
    options: [
      { text: "Gue yang biasa plan dan organize", type: "A" },
      { text: "Contribute ideas, decide bareng", type: "B" },
      { text: "Ikut aja, go with flow", type: "C" },
      { text: "Last minute decision", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Group size ideal...",
    options: [
      { text: "The more the merrier!", type: "A" },
      { text: "Core group, 4-6 orang", type: "B" },
      { text: "Small, 2-3 orang intimate", type: "C" },
      { text: "Depends on occasion", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Durasi nongkrong biasanya...",
    options: [
      { text: "5+ jam, sampai tutup", type: "A" },
      { text: "2-3 jam, quality time", type: "B" },
      { text: "1-2 jam, efficient catch up", type: "C" },
      { text: "Flexible, depends on vibe", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Topic obrolan favorit...",
    options: [
      { text: "Gossip dan life updates", type: "A" },
      { text: "Deep talks dan meaningful topics", type: "B" },
      { text: "Random fun stuff, jokes", type: "C" },
      { text: "Whatever comes up", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Saat nongkrong, HP kamu...",
    options: [
      { text: "Out, document moments", type: "A" },
      { text: "Mostly away, focus teman", type: "B" },
      { text: "Check occasionally", type: "C" },
      { text: "Scrolling in between convos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Budget untuk nongkrong...",
    options: [
      { text: "No limit, enjoying life", type: "A" },
      { text: "Reasonable, willing to spend untuk experience", type: "B" },
      { text: "Budget-conscious", type: "C" },
      { text: "Cheap spots preferred", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Saat teman telat...",
    options: [
      { text: "Start without them, they can catch up", type: "A" },
      { text: "Wait patiently, chat dengan yang udah datang", type: "B" },
      { text: "Annoyed tapi maklum", type: "C" },
      { text: "Gue juga sering telat sih", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Nongkrong saat weekday vs weekend...",
    options: [
      { text: "Both, anytime for friends", type: "A" },
      { text: "Weekend preferred, more relaxed", type: "B" },
      { text: "Weekday after work quick", type: "C" },
      { text: "Rarely honestly", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Activity saat nongkrong besides ngobrol...",
    options: [
      { text: "Games, karaoke, activities", type: "A" },
      { text: "Just ngobrol is enough", type: "B" },
      { text: "Eating is the main event", type: "C" },
      { text: "Whatever happens", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Frequency nongkrong...",
    options: [
      { text: "Multiple times a week", type: "A" },
      { text: "Weekly catch up", type: "B" },
      { text: "Monthly atau bi-weekly", type: "C" },
      { text: "Rarely, homebody", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Post-nongkrong feeling...",
    options: [
      { text: "Energized, love my friends!", type: "A" },
      { text: "Content, good time", type: "B" },
      { text: "Tired but happy", type: "C" },
      { text: "Need recovery time", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Social Butterfly",
    emoji: "🦋",
    description: "Nongkrong adalah life! Friends are everything dan you thrive on social energy. You're probably the one organizing group hangs dan keeping friend groups alive!",
    traits: ["Social", "Energetic", "Organizer", "Extroverted"],
    strengths: ["Strong friendships", "Fun to be around", "Great at organizing"],
    weaknesses: ["FOMO real", "Might spread thin", "Need to rest sometimes"],
    tips: ["Quality over quantity sometimes", "Solo time is healthy", "Not every invite needs yes"],
  },
  B: {
    type: "B",
    title: "The Quality Time Seeker",
    emoji: "💫",
    description: "Nongkrong untuk meaningful connections! Deep conversations dengan close friends > surface level hangouts. You value quality time dan real bonding.",
    traits: ["Deep", "Intentional", "Selective", "Meaningful"],
    strengths: ["Strong deep friendships", "Present when together", "Memorable hangouts"],
    weaknesses: ["Might seem exclusive", "Miss broader social circle"],
    tips: ["Casual hangouts have value too", "New friends can become close friends"],
  },
  C: {
    type: "C",
    title: "The Chill Hanger",
    emoji: "🌊",
    description: "Nongkrong with no pressure! Go with flow, enjoy company, dan keep it simple. Easy-going approach that makes everyone comfortable.",
    traits: ["Relaxed", "Flexible", "Easy-going", "Comfortable"],
    strengths: ["No drama", "Everyone comfortable around you", "Adaptable"],
    weaknesses: ["Might not initiate enough", "Passive in planning"],
    tips: ["Sometimes take initiative", "Your presence is valued, show up more!"],
  },
  D: {
    type: "D",
    title: "The Selective Socializer",
    emoji: "🏠",
    description: "Nongkrong when it matters! Quality rare hangouts > frequent surface ones. Homebody yang appreciate friends tapi also value alone time.",
    traits: ["Selective", "Introverted", "Homebody", "Independent"],
    strengths: ["Value friendships", "Well-rested", "Self-sufficient"],
    weaknesses: ["Might drift from friends", "Miss out on spontaneous fun"],
    tips: ["Push yourself occasionally", "Friends want to see you!", "Say yes more often"],
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
