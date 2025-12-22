// Gaya Kau Dalam Meeting
// Discover your meeting personality style!

export const questions = [
  {
    id: 1,
    question: "Meeting start pukul 10. Kau sampai pukul berapa?",
    options: [
      { text: "9:55 - Prepare slides lagi sekali", type: "A" },
      { text: "10:00 sharp - On time is on time", type: "B" },
      { text: "10:05 - Fashionably late sikit", type: "C" },
      { text: "10:15 - 'Sorry traffic!' (padahal bangun lambat)", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Dalam meeting, position duduk kau biasanya...",
    options: [
      { text: "Depan sekali, dekat dengan boss", type: "A" },
      { text: "Tengah-tengah, safe zone", type: "B" },
      { text: "Belakang sikit, senang nak escape", type: "C" },
      { text: "Dekat pintu - emergency exit strategy", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila boss tanya 'Any questions?'...",
    options: [
      { text: "Tangan naik - prepare soalan power!", type: "A" },
      { text: "Tengok sekeliling dulu, baru decide", type: "B" },
      { text: "Senyap je, harap orang lain tanya", type: "C" },
      { text: "Dah siap-siap nak tutup laptop", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Meeting dah 2 jam, still tak habis. Kau...",
    options: [
      { text: "Focus lagi! Important ni!", type: "A" },
      { text: "Start doodle kat notepad", type: "B" },
      { text: "Check phone bawah meja", type: "C" },
      { text: "Soul dah fly pergi lunch spot", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Laptop kau dalam meeting biasanya show...",
    options: [
      { text: "Notes app, rajin record minutes", type: "A" },
      { text: "Presentation deck yang relevant", type: "B" },
      { text: "Email - multitasking king/queen", type: "C" },
      { text: "Shopee tab yang minimize", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila colleague present boring topic...",
    options: [
      { text: "Still pay attention, respect la", type: "A" },
      { text: "Nod kepala tapi otak elsewhere", type: "B" },
      { text: "Minum kopi untuk stay awake", type: "C" },
      { text: "Power nap dengan mata terbuka", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kau kena present dalam meeting. Preparation?",
    options: [
      { text: "Slides cantik, rehearse 3 kali!", type: "A" },
      { text: "Prepare key points, wing the rest", type: "B" },
      { text: "Baca slides tu pagi meeting day", type: "C" },
      { text: "Ad-lib je, rezeki tak ke mana", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Virtual meeting, camera kau...",
    options: [
      { text: "On dengan background professional", type: "A" },
      { text: "On bila boss suruh je", type: "B" },
      { text: "Off - 'technical issue'", type: "C" },
      { text: "Off - still dalam selimut actually", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Meeting habis lambat dari schedule. Reaksi?",
    options: [
      { text: "Takpe, important discussion tadi", type: "A" },
      { text: "Okay la, at least productive", type: "B" },
      { text: "Sigh... bye bye lunch hour", type: "C" },
      { text: "This meeting could've been an email!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Bila ada controversial topic dalam meeting...",
    options: [
      { text: "Voice out opinion dengan confident!", type: "A" },
      { text: "Tunggu orang lain cakap dulu", type: "B" },
      { text: "Senyap je, tak nak masuk drama", type: "C" },
      { text: "Buat muka blur macam tak faham", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Meeting MVP",
    emoji: "⭐",
    description: "Kau ni meeting warrior sejati! Always prepared, always engaged. Boss probably screenshot attendance kau sebagai contoh!",
    traits: ["Super prepared", "Active participant", "Leadership material", "Note-taking champion"],
    strengths: ["Impress bosses easily", "Career trajectory naik", "Respected by peers"],
    weaknesses: ["Sometimes overkill", "Orang mungkin rasa threatened"],
    tips: ["Bagi chance orang lain shine juga", "Relax sikit, tak semua meeting life or death"],
  },
  B: {
    type: "B",
    title: "Professional Participant",
    emoji: "📋",
    description: "Kau balance antara engaged dan chill. Tahu bila nak contribute, tahu bila nak senyap. Meeting ninja yang underrated!",
    traits: ["Balanced approach", "Strategic speaker", "Good listener", "Efficient"],
    strengths: ["Never look bad in meetings", "Consistent performance", "Reliable contributor"],
    weaknesses: ["Sometimes too safe", "Miss opportunities to stand out"],
    tips: ["Speak up lebih sikit", "Ambil risk untuk share ideas"],
  },
  C: {
    type: "C",
    title: "Survival Mode Expert",
    emoji: "🎯",
    description: "Meeting untuk kau adalah something to survive, bukan enjoy. Master of looking engaged while planning dinner menu dalam kepala!",
    traits: ["Efficient presence", "Minimal effort maximum effect", "Escape artist", "Multitasking pro"],
    strengths: ["Save energy for actual work", "Never volunteer for extra tasks", "Work-life balance"],
    weaknesses: ["Miss networking chances", "May seem disengaged to bosses"],
    tips: ["Try engage lebih sikit", "Meetings ada politics value juga"],
  },
  D: {
    type: "D",
    title: "Meeting Allergic",
    emoji: "😴",
    description: "Kalau boleh skip meeting, kau skip. Kalau tak boleh, hadir body je - soul dah fly entah ke mana. Legend yang terkenal dengan 'technical difficulties'!",
    traits: ["Meeting minimalist", "Creative excuse maker", "Work > meetings", "Time optimizer"],
    strengths: ["Actually get work done", "Not caught in meeting trap", "Refreshingly honest (internally)"],
    weaknesses: ["Reputation as not committed", "Miss important updates", "Career visibility low"],
    tips: ["Some meetings actually important", "Visibility matters untuk promotion"],
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
