// Boss Jenis Apa Kau Kelak?
// What kind of boss will you become?

export const questions = [
  {
    id: 1,
    question: "Staff kau buat silap. Kau akan...",
    options: [
      { text: "Panggil, explain mistake, guide macam mana nak fix", type: "A" },
      { text: "Email feedback professionally", type: "B" },
      { text: "Tegur depan orang ramai supaya jadi pengajaran", type: "C" },
      { text: "Buat sendiri je lah, faster", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Team kau achieve target besar! Celebration macam mana?",
    options: [
      { text: "Team dinner on me! Credit semua orang!", type: "A" },
      { text: "Email appreciation dan highlight dalam meeting", type: "B" },
      { text: "Good job team, sekarang aim higher!", type: "C" },
      { text: "Pat on back, move on ke next project", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Staff mintak cuti last minute. Reaksi?",
    options: [
      { text: "Check situation dulu, try accommodate", type: "A" },
      { text: "Ikut policy, kalau ada reason valid okay", type: "B" },
      { text: "Sorry, kerja dulu. Cuti boleh next time", type: "C" },
      { text: "Kau boss, kau decide ikut mood", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Cara kau assign work pada team...",
    options: [
      { text: "Discuss sama-sama, consider strength masing-masing", type: "A" },
      { text: "Fair distribution based on capability", type: "B" },
      { text: "Yang available, dia dapat. Simple", type: "C" },
      { text: "Siapa yang kau trust, dia dapat more", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Meeting dengan team, style kau...",
    options: [
      { text: "Open discussion, semua boleh voice out", type: "A" },
      { text: "Structured agenda, efficient", type: "B" },
      { text: "Kau talk, they listen. Clear direction", type: "C" },
      { text: "As needed je, tak suka meeting banyak", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Staff nak training/development. Kau...",
    options: [
      { text: "Support penuh! Growth important!", type: "A" },
      { text: "Approve kalau relevant dengan kerja", type: "B" },
      { text: "Later, sekarang fokus deliver dulu", type: "C" },
      { text: "Belajar on the job je, experience best teacher", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ada conflict antara 2 staff kau. Action?",
    options: [
      { text: "Jumpa both, mediate, find solution together", type: "A" },
      { text: "Dengar both sides, buat fair decision", type: "B" },
      { text: "Settle sendiri, don't bring drama to me", type: "C" },
      { text: "Ignore, kalau serius baru masuk", type: "D" },
    ],
  },
  {
    id: 8,
    question: "WFH request dari team, kau rasa...",
    options: [
      { text: "Flexible! Outcome yang penting", type: "A" },
      { text: "Ada guidelines, ikut proper process", type: "B" },
      { text: "Office presence penting untuk productivity", type: "C" },
      { text: "Depends kau percaya dia ke tak", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Promotion time. Criteria utama kau...",
    options: [
      { text: "Performance + attitude + team contribution", type: "A" },
      { text: "KPI achievement utama", type: "B" },
      { text: "Loyalty dan commitment", type: "C" },
      { text: "Gut feeling, kau kenal siapa deliver", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Staff resign. Exit interview, kau tanya...",
    options: [
      { text: "Honest feedback, apa boleh improve?", type: "A" },
      { text: "Standard questions ikut HR process", type: "B" },
      { text: "Good luck, next!", type: "C" },
      { text: "Why? Counter offer? No? Okay bye", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Boss Idaman Semua",
    emoji: "👑",
    description: "Kau bakal jadi boss yang semua orang impikan! Fair, supportive, dan genuinely care pasal team. Staff kau akan loyal sampai bila-bila!",
    traits: ["Empathetic leader", "Great mentor", "Team-first mentality", "Open communicator"],
    strengths: ["High team retention", "Strong loyalty", "Positive culture builder"],
    weaknesses: ["Mungkin terlalu soft sometimes", "Susah nak buat tough decisions"],
    tips: ["Balance kindness dengan firmness", "Don't let people take advantage"],
  },
  B: {
    type: "B",
    title: "Boss Professional",
    emoji: "💼",
    description: "By the book dan fair! Kau follow proper process, buat keputusan based on facts. Team tahu expect apa dari kau!",
    traits: ["Fair leader", "Process-oriented", "Consistent", "Professional"],
    strengths: ["Predictable dan stable", "No favoritism", "Clear expectations"],
    weaknesses: ["May seem distant", "Kurang personal touch"],
    tips: ["Add sikit warmth", "Connect personally dengan team juga"],
  },
  C: {
    type: "C",
    title: "Boss Garang Tapi Effective",
    emoji: "🔥",
    description: "Results matter! Kau push team untuk deliver, tak suka excuse. Mungkin tak popular tapi team kau memang perform!",
    traits: ["Results-driven", "High standards", "Direct feedback", "No-nonsense"],
    strengths: ["Team delivers consistently", "Clear direction", "No drama tolerated"],
    weaknesses: ["Staff burnout risk", "High turnover mungkin"],
    tips: ["Balance push dengan appreciation", "People bukan robot"],
  },
  D: {
    type: "D",
    title: "Boss 'Ikut Feel'",
    emoji: "🎲",
    description: "Unpredictable dan ikut mood! Sometimes best friend, sometimes susah nak approach. Team kau sentiasa teka-teki!",
    traits: ["Mood-based leadership", "Selective attention", "Trust-based decisions", "Hands-off mostly"],
    strengths: ["Not micromanaging", "Empower favorites", "Flexible approach"],
    weaknesses: ["Inconsistent treatment", "Team confusion", "Favoritism issues"],
    tips: ["Be more consistent", "Fair treatment untuk semua"],
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
