// Tahap On Time Kau
// Kau ni jenis 10 minit awal atau Malaysian time?

export const questions = [
  {
    id: 1,
    question: "Meeting kawan pukul 3pm. Kau sampai pukul berapa?",
    options: [
      { text: "2:45pm - 2:50pm, always early!", type: "A" },
      { text: "3pm sharp atau few minit before", type: "B" },
      { text: "3:10pm - 3:15pm, 'on the way!'", type: "C" },
      { text: "3:30pm onwards, they know me already!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Flight pukul 10am. Kau kat airport pukul berapa?",
    options: [
      { text: "7am, better safe than sorry!", type: "A" },
      { text: "8am, standard 2 hours before", type: "B" },
      { text: "9am, cutting it close!", type: "C" },
      { text: "9:30am, RUNNING to gate!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Job interview esok 9am. Preparation time kau?",
    options: [
      { text: "Semalam dah siap semua, tidur awal!", type: "A" },
      { text: "Pagi tu prepare, still on time", type: "B" },
      { text: "Rush sikit tapi make it!", type: "C" },
      { text: "Terlambat interview... bukan first time!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "'On the way' kau actually means...",
    options: [
      { text: "Literally on the way, ETA accurate!", type: "A" },
      { text: "Getting ready to leave dalam 5 minit", type: "B" },
      { text: "Still in shower/getting dressed", type: "C" },
      { text: "Still in bed, haven't moved yet!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Deadline kerja/assignment. Kau submit?",
    options: [
      { text: "Days before deadline, peace of mind!", type: "A" },
      { text: "On time or slightly early", type: "B" },
      { text: "Last hour, sometimes last minute!", type: "C" },
      { text: "After deadline, request extension!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Alarm kau pagi-pagi macam mana?",
    options: [
      { text: "One alarm, wake up immediately!", type: "A" },
      { text: "Few alarms, wake up on second or third", type: "B" },
      { text: "10+ alarms, snooze marathon!", type: "C" },
      { text: "Sleep through ALL alarms!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kawan describe kau regarding punctuality...",
    options: [
      { text: "The one yang selalu first sampai!", type: "A" },
      { text: "Reliable, usually on time", type: "B" },
      { text: "The one yang kena tunggu", type: "C" },
      { text: "The LEGENDARY late comer!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Ada event important dalam 1 jam. Kau?",
    options: [
      { text: "Dah siap ready 30 minit ago!", type: "A" },
      { text: "On track, comfortable timing", type: "B" },
      { text: "RUSHING, should've started earlier!", type: "C" },
      { text: "Still deciding what to wear!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila kau plan to leave, kau actually leave?",
    options: [
      { text: "Exact time atau earlier!", type: "A" },
      { text: "Around that time, give or take 5 min", type: "B" },
      { text: "15-20 min later than planned", type: "C" },
      { text: "30 min+ later, something always comes up!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Rate anxiety level kau bila late?",
    options: [
      { text: "VERY anxious, that's why I'm never late!", type: "A" },
      { text: "Uncomfortable, try to avoid being late", type: "B" },
      { text: "Sikit je, people understand", type: "C" },
      { text: "Zero anxiety, everyone's used to it!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Punctual King/Queen - Swiss Watch 🕐",
    emoji: "🕐",
    description: "KAU NI PUNCTUAL GILA! Swiss watch pun jealous! 10 minit awal adalah on time, on time adalah late untuk kau. Orang boleh sync jam dengan kedatangan kau. Reliability level 100%!",
    traits: ["Always early", "Extremely reliable", "Time conscious", "Anxious about lateness"],
    strengths: ["Never miss anything", "Respected for punctuality", "Less stress", "Professional"],
    weaknesses: ["May stress when others are late", "Too rigid sometimes", "Wait for others often"],
    tips: ["Your punctuality is admirable!", "Be patient with others!"],
  },
  B: {
    type: "B",
    title: "Responsible Adult - On Time Most Time ⏰",
    emoji: "⏰",
    description: "Kau ni ON TIME person! Maybe not super early tapi definitely tak late. Responsible adult yang understands time management. Normal functioning member of society!",
    traits: ["Generally punctual", "Responsible", "Good time management", "Reliable"],
    strengths: ["Trusted by others", "Balanced approach", "Rarely causes delays"],
    weaknesses: ["Occasional slip ups", "Could be earlier sometimes"],
    tips: ["You're doing great!", "Keep it up!"],
  },
  C: {
    type: "C",
    title: "Malaysian Time Expert - 15 Min Grace Period 🏃",
    emoji: "🏃",
    description: "KAU NI MALAYSIAN TIME EXPERT! 'On the way' is a lifestyle. Grace period 15-20 minit adalah standard. Kawan dah expect kau late, they tell you earlier timing than actual!",
    traits: ["Chronically slightly late", "Always rushing", "Underestimates time", "Malaysian time user"],
    strengths: ["Relaxed about time", "Friends adjusted to it", "Gets there eventually"],
    weaknesses: ["Stress from rushing", "May miss things", "Not professional in formal settings"],
    tips: ["Try leaving 15 min earlier!", "Being on time shows respect!"],
  },
  D: {
    type: "D",
    title: "Legendary Late Comer - Time is Relative 😅",
    emoji: "😅",
    description: "KAU NI LEGENDARY dalam being late! 30 minit late adalah early untuk standard kau. Friends dah give up on expecting you on time. Time is a social construct! You'll get there... eventually!",
    traits: ["Always late", "Zero time awareness", "Expert excuse maker", "Relaxed about everything"],
    strengths: ["Never stressed about time", "Creative excuses", "Friends still love you somehow"],
    weaknesses: ["Miss important things", "Disrespectful to others' time", "Professional consequences"],
    tips: ["PLEASE respect people's time!", "Being late = disrespect!", "Set alarms, LOTS of them!"],
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
