// Gaya Tidur Kau
// Kau ni early bird, night owl, atau tidur je 24/7?

export const questions = [
  {
    id: 1,
    question: "Weekday biasa, kau tidur pukul berapa?",
    options: [
      { text: "10-11pm, early to bed!", type: "A" },
      { text: "11pm-12am, normal timing", type: "B" },
      { text: "1-2am, night owl sikit", type: "C" },
      { text: "3am onwards, sleep schedule hancur!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Alarm bunyi pagi. Kau...",
    options: [
      { text: "Bangun terus, fresh and ready!", type: "A" },
      { text: "Snooze sekali dua, then bangun", type: "B" },
      { text: "Snooze unlimited, struggle bangun", type: "C" },
      { text: "What alarm? Aku tak dengar pun!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pukul 10pm, kau rasa macam mana?",
    options: [
      { text: "Dah sleepy, ready nak tidur", type: "A" },
      { text: "Okay je, boleh tidur atau lepak lagi", type: "B" },
      { text: "Baru nak start productive!", type: "C" },
      { text: "Peak hours ni! Night is young!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Weekend, kau bangun pukul berapa?",
    options: [
      { text: "Still early, 7-8am sebab habit", type: "A" },
      { text: "Around 9-10am, normal", type: "B" },
      { text: "12 tengahari onwards", type: "C" },
      { text: "Petang, kadang evening! Full nocturnal!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sebelum tidur, kau buat apa?",
    options: [
      { text: "Read buku/relax routine, proper wind down", type: "A" },
      { text: "Scroll phone sikit then sleep", type: "B" },
      { text: "Phone sampai tertidur dengan phone atas muka", type: "C" },
      { text: "Netflix marathon sampai tak perasan tertidur!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kau paling productive bila?",
    options: [
      { text: "Pagi early morning, fresh mind!", type: "A" },
      { text: "Mid day, after properly awake", type: "B" },
      { text: "Malam, less distraction", type: "C" },
      { text: "2-4am, everyone else asleep, peace!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tidur siang (nap) - kau macam mana?",
    options: [
      { text: "Jarang, tak perlu usually", type: "A" },
      { text: "Sometimes kalau penat", type: "B" },
      { text: "Often, cannot function without", type: "C" },
      { text: "Nap je whole day sebab tak tidur malam!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Hari kerja/sekolah, kau function macam mana pagi-pagi?",
    options: [
      { text: "Good! Pagi is my time!", type: "A" },
      { text: "Okay after coffee", type: "B" },
      { text: "Zombie mode until afternoon", type: "C" },
      { text: "Literally cannot brain until evening!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sleep schedule kau consistent tak?",
    options: [
      { text: "Very! Same time every day", type: "A" },
      { text: "Mostly consistent, sikit variation", type: "B" },
      { text: "Quite inconsistent actually", type: "C" },
      { text: "What schedule? Every day different!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ideal situation, berapa jam kau nak tidur?",
    options: [
      { text: "6-7 jam, enough for me", type: "A" },
      { text: "8 jam, sweet spot", type: "B" },
      { text: "9-10 jam, I love sleep", type: "C" },
      { text: "12+ jam kalau boleh, sleep is life!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Early Bird - Matahari Terbit Gang 🌅",
    emoji: "🌅",
    description: "Kau ni EARLY BIRD sejati! Bangun pagi tak payah dipaksa, tidur malam proper time. Sleep schedule kau on point! Kau probably yang paling productive dalam bilik meeting pagi-pagi. Morning person goals!",
    traits: ["Early riser", "Consistent sleep schedule", "Morning productive", "Good sleep hygiene"],
    strengths: ["Catches the worm!", "Productive mornings", "Good energy throughout day"],
    weaknesses: ["Die at late night events", "Sleepy by 9pm"],
    tips: ["Your schedule is healthy!", "Don't feel guilty for early bedtime"],
  },
  B: {
    type: "B",
    title: "Normal Sleeper - Balanced Gang ⚖️",
    emoji: "⚖️",
    description: "Kau ni ada healthy sleep pattern! Not too early, not too late. Boleh adapt to most schedules. Normal functioning human being dalam masyarakat. The balanced lifestyle!",
    traits: ["Normal schedule", "Adaptable", "Reasonable bedtime", "Can function any time"],
    strengths: ["Flexible with schedules", "Good balance", "Fits into society"],
    weaknesses: ["Not peak at any specific time", "Average energy levels"],
    tips: ["Keep it up!", "Consistency is key"],
  },
  C: {
    type: "C",
    title: "Night Owl - Burung Hantu Gang 🦉",
    emoji: "🦉",
    description: "KAU NI NIGHT OWL! Malam adalah prime time kau. Creativity flows when everyone else is asleep. Morning adalah enemy, dan coffee adalah bestfriend. Nocturnal lifestyle!",
    traits: ["Night person", "Late sleeper", "Struggles with mornings", "Peak at night"],
    strengths: ["Creative at night", "Less distractions", "Peaceful working hours"],
    weaknesses: ["Struggle with 9-5", "Tired during day events", "Inconsistent schedule"],
    tips: ["Try to sleep before 2am!", "Morning light helps reset circadian rhythm"],
  },
  D: {
    type: "D",
    title: "Sleep Schedule Hancur - Chaos Gang 😵",
    emoji: "😵",
    description: "SLEEP SCHEDULE KAU TIDAK WUJUD! Tidur bila-bila, bangun bila-bila. 3am tu pukul berapa? Time is a construct! Kau function on chaos energy dan probably running on caffeine and dreams!",
    traits: ["No fixed schedule", "Extreme night owl", "Sleep whenever", "Chaos lifestyle"],
    strengths: ["Very flexible", "Can handle any shift", "No rules!"],
    weaknesses: ["Health impact", "Hard to schedule with others", "Always tired actually"],
    tips: ["PLEASE fix your sleep schedule!", "Health is wealth!", "Blackout curtains and phone away!"],
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
