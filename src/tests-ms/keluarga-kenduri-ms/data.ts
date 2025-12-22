// Gaya Di Kenduri
// Test viral tentang kenduri behavior

export const questions = [
  {
    id: 1,
    question: "Bila dapat invitation kenduri, reaction kau?",
    options: [
      { text: "Excited! Free food dan socializing!", type: "A" },
      { text: "Okay, family duty", type: "B" },
      { text: "Find excuse to skip", type: "C" },
      { text: "Depends who's kenduri", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Arrival time kat kenduri?",
    options: [
      { text: "On time, sempat tolong setup!", type: "A" },
      { text: "Malaysian timing, 30 minit late", type: "B" },
      { text: "Late enough to avoid awkward early moments", type: "C" },
      { text: "Just in time for food", type: "D" },
    ],
  },
  {
    id: 3,
    question: "First thing kau buat sampai kenduri?",
    options: [
      { text: "Salam tuan rumah, mingle around!", type: "A" },
      { text: "Find seat, settle first", type: "B" },
      { text: "Scan where's the food", type: "C" },
      { text: "Find kawan yang kenal", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Makan kat kenduri style kau?",
    options: [
      { text: "Round 1, 2, 3! Lauk semua try!", type: "A" },
      { text: "One decent plate, respectful portion", type: "B" },
      { text: "Small portion, counting calories", type: "C" },
      { text: "Tapau game strong!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Socializing dengan orang tak kenal?",
    options: [
      { text: "No problem! Make new friends!", type: "A" },
      { text: "Small talk je basic", type: "B" },
      { text: "Stick dengan orang kenal je", type: "C" },
      { text: "Phone is my bestfriend", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila makcik-makcik tanya soalan...",
    options: [
      { text: "Answer happily, they're just caring!", type: "A" },
      { text: "Tolerate dengan senyuman", type: "B" },
      { text: "Strategic answers to avoid follow-up", type: "C" },
      { text: "Escape mission activated!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tolong kerja kenduri tak?",
    options: [
      { text: "Yes! Hidang, kemas, semua!", type: "A" },
      { text: "Sikit-sikit bila diminta", type: "B" },
      { text: "I'm a guest, bukan helper", type: "C" },
      { text: "Pretend busy with phone", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Berapa lama kau stay kat kenduri?",
    options: [
      { text: "Dari awal sampai kemas!", type: "A" },
      { text: "1-2 jam, standard visit", type: "B" },
      { text: "30-45 minit, quick appearance", type: "C" },
      { text: "Shortest time possible", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Door gift/buah tangan kau bagi?",
    options: [
      { text: "Thoughtful gift prepared!", type: "A" },
      { text: "Standard angpow/money", type: "B" },
      { text: "Whatever last minute found", type: "C" },
      { text: "Datang dengan tangan kosong", type: "D" },
    ],
  },
  {
    id: 10,
    question: "After kenduri, contact dengan tuan rumah?",
    options: [
      { text: "Thank you message dengan gambar!", type: "A" },
      { text: "Simple thank you text", type: "B" },
      { text: "Tak contact, dah berjumpa kan", type: "C" },
      { text: "Until next kenduri je contact", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Kenduri VIP",
    emoji: "👑",
    description: "Kau perfect kenduri guest! Helpful, social, dan appreciate every gathering. Hosts love having you!",
    traits: ["Social", "Helpful", "Appreciative", "Community-minded"],
    strengths: ["Great guest", "Help hosts", "Bring good energy"],
    weaknesses: ["Might overcommit", "Can't say no to invitations"],
    tips: ["It's okay to skip sometimes", "Energy conservation!"],
  },
  B: {
    type: "B",
    title: "Standard Guest",
    emoji: "🙂",
    description: "Kau fulfill kenduri obligations dengan moderate! Not too much, not too little. The reliable average guest!",
    traits: ["Reliable", "Moderate", "Respectful", "Normal"],
    strengths: ["No issues", "Meet expectations", "Dependable"],
    weaknesses: ["Could be more enthusiastic", "Just going through motions"],
    tips: ["Engage more", "Make it fun for yourself!"],
  },
  C: {
    type: "C",
    title: "Reluctant Attendee",
    emoji: "😅",
    description: "Kenduri bukan your thing! Go because have to, leave ASAP. Social gatherings drain your energy!",
    traits: ["Introverted", "Reluctant", "Quick visitor", "Energy saver"],
    strengths: ["Know your limits", "Efficient attendance", "Self-aware"],
    weaknesses: ["Miss family bonding", "Might seem antisocial"],
    tips: ["Try to enjoy more", "Family events matter!"],
  },
  D: {
    type: "D",
    title: "Food Hunter",
    emoji: "🍽️",
    description: "Kau datang kenduri untuk FOOD! Social aspects secondary, lauk sedap adalah priority. Honest about intentions!",
    traits: ["Food-focused", "Honest", "Practical", "Direct"],
    strengths: ["Know what you want", "Appreciate good food", "No pretense"],
    weaknesses: ["Miss social connections", "Might seem rude"],
    tips: ["Socializing can enhance the experience", "Food tastes better with friends!"],
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
