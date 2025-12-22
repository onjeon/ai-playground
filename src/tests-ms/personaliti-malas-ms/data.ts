// Level Malas Kau
// Kau ni rajin atau professional procrastinator?

export const questions = [
  {
    id: 1,
    question: "Pagi Sabtu, takde kerja. Kau?",
    options: [
      { text: "Bangun awal, productive day ahead!", type: "A" },
      { text: "Wake up reasonably, do some stuff", type: "B" },
      { text: "Sleep until noon, then lazy around", type: "C" },
      { text: "Tak bangun sampai petang/malam!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Remote in TV jauh. Kau nak tukar channel. Kau?",
    options: [
      { text: "Get up and get it, no problem", type: "A" },
      { text: "Get up reluctantly", type: "B" },
      { text: "Try reach without moving from spot", type: "C" },
      { text: "Watch whatever's on, not worth moving!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ada chores to do. Kau?",
    options: [
      { text: "Do them immediately, check off list!", type: "A" },
      { text: "Do them dalam masa reasonable", type: "B" },
      { text: "Procrastinate until really have to", type: "C" },
      { text: "Never do until emergency/someone yells!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Exercise/workout. Frequency kau?",
    options: [
      { text: "Regularly! Part of routine!", type: "A" },
      { text: "Few times a week, decent effort", type: "B" },
      { text: "Rarely, very occasional", type: "C" },
      { text: "Exercise? Walking to fridge counts ke?", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Food delivery vs cook at home. Kau?",
    options: [
      { text: "Cook most of the time, healthier!", type: "A" },
      { text: "Mix of both, depends on mood", type: "B" },
      { text: "Delivery mostly, malas masak", type: "C" },
      { text: "DELIVERY ALWAYS! Kitchen is decoration!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Reply messages/emails. Kau macam mana?",
    options: [
      { text: "Reply immediately or ASAP!", type: "A" },
      { text: "Reply dalam masa reasonable", type: "B" },
      { text: "Take days to reply sometimes", type: "C" },
      { text: "Read but never reply, too lazy!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Self-improvement activities. Kau?",
    options: [
      { text: "Always learning, reading, improving!", type: "A" },
      { text: "Sometimes, when motivated", type: "B" },
      { text: "Plan to but never start", type: "C" },
      { text: "Improve? I'm perfect as is! 😴", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Energy level typical day?",
    options: [
      { text: "High energy, always doing something!", type: "A" },
      { text: "Normal energy, gets things done", type: "B" },
      { text: "Low energy, need lots of motivation", type: "C" },
      { text: "Zero energy, horizontal life!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Weekday after work/school. Kau?",
    options: [
      { text: "Gym, hobbies, productive activities!", type: "A" },
      { text: "Some activities, some rest", type: "B" },
      { text: "Straight to bed/couch, exhausted", type: "C" },
      { text: "Merge with furniture until next day!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kalau boleh, ideal day kau?",
    options: [
      { text: "Full of activities and achievements!", type: "A" },
      { text: "Balanced activities and rest", type: "B" },
      { text: "Mostly relaxing, minimal effort", type: "C" },
      { text: "Literally do NOTHING! Bliss!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Rajin Legend - Productivity Machine 🚀",
    emoji: "🚀",
    description: "KAU NI RAJIN GILA! Energy macam Duracell bunny! Always doing something, resting feels weird. To-do lists adalah best friend. Orang pelik macam mana kau ada so much motivation. Teach us sensei!",
    traits: ["Super productive", "High energy", "Always active", "Gets things done"],
    strengths: ["Achieves a lot", "Disciplined", "Inspiring to others", "Never bored"],
    weaknesses: ["May burn out", "Hard to relax", "Makes others feel lazy"],
    tips: ["REST IS IMPORTANT TOO!", "Balance productivity with self-care"],
  },
  B: {
    type: "B",
    title: "Normal Human - Balanced Life ⚖️",
    emoji: "⚖️",
    description: "Kau ni NORMAL FUNCTIONING HUMAN! Rajin bila kena rajin, rehat bila boleh rehat. Balanced approach to life. Gets things done tanpa being obsessive. The sustainable lifestyle!",
    traits: ["Balanced", "Normal productivity", "Knows when to rest", "Reasonable pace"],
    strengths: ["Sustainable lifestyle", "Gets important things done", "Not burning out"],
    weaknesses: ["Could be more productive sometimes", "Normal human limitations"],
    tips: ["Good balance!", "Keep it sustainable!"],
  },
  C: {
    type: "C",
    title: "Malas Tendency - Couch Potato Vibes 🛋️",
    emoji: "🛋️",
    description: "KAU NI MALAS TENDENCY strong! Energy untuk leisure ada, energy untuk kerja... questionable. Procrastination adalah hobby. Couch dan bed adalah best friends. Doing minimum required!",
    traits: ["Lazy tendencies", "Low motivation", "Procrastinator", "Comfort seeker"],
    strengths: ["Relaxed life", "Low stress maybe?", "Expert at resting"],
    weaknesses: ["Misses opportunities", "Things pile up", "Potential wasted"],
    tips: ["Try small productive habits!", "Movement creates energy!", "You're capable of more!"],
  },
  D: {
    type: "D",
    title: "Professional Malas - Horizontal Lifestyle 😴",
    emoji: "😴",
    description: "KAU NI MALAS LEVEL PRO! Horizontal adalah natural state. Moving requires motivation yang tak wujud. If lazy was a sport, kau Olympic champion! Living life at minimum effort maximum comfort!",
    traits: ["Extremely lazy", "Horizontal lifestyle", "Zero motivation", "Maximum comfort seeker"],
    strengths: ["Expert relaxer", "Chill vibes", "Low maintenance", "Zero stress from ambition"],
    weaknesses: ["EVERYTHING could improve", "Health concerns", "Missing out on life", "Potential completely wasted"],
    tips: ["PLEASE start small!", "Even 10 minutes of activity helps!", "Life is more than bed!", "You have potential - USE IT!"],
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
