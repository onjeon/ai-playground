// Jenis Coworker Apa Kau?
// Discover your coworker personality type in Malaysian office!

export const questions = [
  {
    id: 1,
    question: "Bila ada project baru, reaksi kau macam mana?",
    options: [
      { text: "Yes! Volunteer terus nak lead!", type: "A" },
      { text: "Okay, aku tolong behind the scenes", type: "B" },
      { text: "Tengok dulu siapa lagi yang join", type: "C" },
      { text: "Harap-harap tak kena assign kat aku", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Macam mana kau layan colleague baru?",
    options: [
      { text: "Terus ajak lunch, introduce semua orang!", type: "A" },
      { text: "Senyum je, tunggu dia approach dulu", type: "B" },
      { text: "Tolong kalau dia tanya soalan", type: "C" },
      { text: "Buat tak tau je, sibuk dengan kerja sendiri", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila ada office drama, kau...",
    options: [
      { text: "First to know, last to tell - simpan rahsia", type: "A" },
      { text: "Dengar je tapi tak involve", type: "B" },
      { text: "Tak kisah langsung, fokus kerja", type: "C" },
      { text: "Aku? Aku yang start drama tu!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "WhatsApp group office yang tak penting, kau...",
    options: [
      { text: "Reply semua, dengan emoji sekali!", type: "A" },
      { text: "Baca je, jarang reply", type: "B" },
      { text: "Mute terus, check sekali seminggu", type: "C" },
      { text: "Left group dah lama", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila colleague mintak tolong last minute...",
    options: [
      { text: "Takpe, aku tolong! Kita team kan", type: "A" },
      { text: "Okay, tapi next time bagitau awal ya", type: "B" },
      { text: "Hmm tengok dulu aku ada masa ke tak", type: "C" },
      { text: "Sorry, aku pun rushing deadline sendiri", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Lunch time biasanya kau...",
    options: [
      { text: "Ajak satu department pergi ramai-ramai!", type: "A" },
      { text: "Pergi dengan gang biasa je", type: "B" },
      { text: "Makan sorang, tengok phone", type: "C" },
      { text: "Skip lunch, siapkan kerja", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bila ada team building activity...",
    options: [
      { text: "Best! Aku yang organize game!", type: "A" },
      { text: "Okay je, join untuk bonding", type: "B" },
      { text: "Pergi sebab wajib je", type: "C" },
      { text: "MC je hari tu", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Colleague birthday, kau contribute...",
    options: [
      { text: "RM50! Plus aku yang order kek!", type: "A" },
      { text: "Standard contribution la", type: "B" },
      { text: "Minimum amount je", type: "C" },
      { text: "Eh ada collection ke? Tak perasan", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bila ada conflict antara colleagues...",
    options: [
      { text: "Jadi mediator, settle kan masalah", type: "A" },
      { text: "Dengar both sides, bagi nasihat", type: "B" },
      { text: "Jangan libatkan aku please", type: "C" },
      { text: "Grab popcorn, layan drama", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Apa yang colleagues selalu cakap pasal kau?",
    options: [
      { text: "Dia ni friendly gila, semua orang kenal", type: "A" },
      { text: "Reliable, boleh harap", type: "B" },
      { text: "Quiet je, tapi kerja bagus", type: "C" },
      { text: "Mysterious sikit, susah nak baca", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Si Sosial Butterfly",
    emoji: "🦋",
    description: "Kau ni macam unofficial HR department! Semua orang kenal kau, dan kau kenal semua orang. Office tanpa kau macam nasi tanpa lauk - hambar!",
    traits: ["Super friendly", "Natural connector", "Always ada untuk team", "Office gossip headquarters"],
    strengths: ["Networking power level 9000", "Boost team morale", "Everyone's favorite colleague"],
    weaknesses: ["Kadang terlalu sibuk socializing", "Susah nak focus bila ramai orang"],
    tips: ["Balance social time dengan work time", "Quality over quantity untuk friendship"],
  },
  B: {
    type: "B",
    title: "Si Reliable Backbone",
    emoji: "🏆",
    description: "Kau ni tulang belakang office! Tak bising, tapi semua orang depend kat kau. Kalau kau MC, satu office panik!",
    traits: ["Dependable", "Professional", "Balanced", "Team player sejati"],
    strengths: ["Boss's favorite (secretly)", "Go-to person for help", "Consistent performer"],
    weaknesses: ["Kadang orang take advantage", "Terlalu humble"],
    tips: ["Learn to say no sometimes", "Tunjuk achievement kau lebih sikit"],
  },
  C: {
    type: "C",
    title: "Si Lone Wolf Professional",
    emoji: "🐺",
    description: "Kau datang kerja untuk KERJA, bukan untuk bersosial. Headphones on, world off. Productivity kau? Level ninja!",
    traits: ["Focused", "Independent", "Efficient", "No drama zone"],
    strengths: ["Deep work champion", "Deadline slayer", "Zero office politics"],
    weaknesses: ["Orang ingat kau sombong", "Miss out networking opportunities"],
    tips: ["Sekali sekala join lunch sama colleagues", "Small talk pun ada manfaat"],
  },
  D: {
    type: "D",
    title: "Si Mysterious Enigma",
    emoji: "🎭",
    description: "Orang tak tau apa yang kau fikir, dan kau suka macam tu! Ada je excuse untuk skip social events. Legend yang jarang nampak!",
    traits: ["Unpredictable", "Independent", "Selective", "Boundary master"],
    strengths: ["Work-life separation expert", "Tak terjejas office drama", "Mysterious appeal"],
    weaknesses: ["Orang susah nak connect", "Miss team bonding moments"],
    tips: ["Cuba open up sikit", "Relationship di office pun penting untuk career"],
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
