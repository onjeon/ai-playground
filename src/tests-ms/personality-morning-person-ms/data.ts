// Ujian Orang Pagi vs Orang Malam
// Adakah anda lebih produktif di pagi atau malam hari?

export const questions = [
  {
    id: 1,
    question: "Jam berapa biasa anda bangun pada hujung minggu?",
    options: [
      { text: "Sebelum 7 pagi - tak boleh tidur lewat!", type: "A" },
      { text: "7-9 pagi - normal timing", type: "B" },
      { text: "10-12 tengahari - tidur lewat malam", type: "C" },
      { text: "Lepas 12 - malam baru hidup!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila anda rasa paling produktif?",
    options: [
      { text: "Pagi awal - otak fresh!", type: "A" },
      { text: "Pagi sampai tengahari", type: "B" },
      { text: "Petang sampai malam", type: "C" },
      { text: "Tengah malam - sepi, fokus!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Alarm jam 6 pagi berbunyi. Reaksi anda?",
    options: [
      { text: "Bangun terus, ready for the day!", type: "A" },
      { text: "Snooze sekali, then bangun", type: "B" },
      { text: "Snooze banyak kali...", type: "C" },
      { text: "Matikan alarm, tidur balik", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Buat kerja penting. Bila anda prefer?",
    options: [
      { text: "First thing in the morning!", type: "A" },
      { text: "Tengahari selepas warm up", type: "B" },
      { text: "Petang atau lewat malam", type: "C" },
      { text: "2-3 pagi bila semua tidur", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Kawan ajak keluar malam Sabtu. Response?",
    options: [
      { text: "Okay tapi balik awal ya", type: "A" },
      { text: "Boleh, sampai 11-12 okay", type: "B" },
      { text: "Yes! Sampai 2-3 pagi!", type: "C" },
      { text: "Sampai subuh pun takpe!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Kalau tak set alarm, bila anda akan bangun naturally?",
    options: [
      { text: "5-6 pagi - body clock dah set", type: "A" },
      { text: "7-8 pagi - standard timing", type: "B" },
      { text: "9-10 pagi - lambat sikit", type: "C" },
      { text: "11 pagi ke atas - night owl!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Breakfast untuk anda adalah...",
    options: [
      { text: "Most important meal! Tak boleh skip!", type: "A" },
      { text: "Penting, selalu makan", type: "B" },
      { text: "Sometimes skip, depends", type: "C" },
      { text: "Brunch je, tak sempat breakfast", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Jam 10 malam anda biasanya...",
    options: [
      { text: "Dah nak tidur atau dah tidur", type: "A" },
      { text: "Winding down, relax", type: "B" },
      { text: "Baru nak start produktif!", type: "C" },
      { text: "Peak energy time!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Meeting pukul 8 pagi. Perasaan anda?",
    options: [
      { text: "Perfect! Best time for meetings!", type: "A" },
      { text: "Okay, manageable", type: "B" },
      { text: "Agak struggle sikit", type: "C" },
      { text: "Nightmare! Tak function lagi!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ideal weekend anda macam mana?",
    options: [
      { text: "Bangun awal, produktif all day!", type: "A" },
      { text: "Normal schedule, balanced", type: "B" },
      { text: "Tidur lewat, bangun lewat", type: "C" },
      { text: "Reverse schedule - malam aktif!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Early Bird",
    emoji: "🌅",
    description: "Anda adalah true morning person! Pagi adalah masa emas anda - produktif, energetic, dan focused. Tidur awal, bangun awal adalah motto anda!",
    traits: ["Produktif pagi", "Disiplin", "Energetic", "Organized"],
    strengths: ["Maximize daylight hours", "Good sleep schedule", "High morning productivity"],
    weaknesses: ["Susah untuk late night events", "Cepat mengantuk malam"],
    tips: ["Gunakan pagi untuk kerja penting", "Schedule meetings pagi"],
  },
  B: {
    type: "B",
    title: "Balanced Riser",
    emoji: "☀️",
    description: "Anda ada keseimbangan yang baik! Boleh function pagi dan malam, tapi prefer jadual yang moderate. Flexible dan adaptable!",
    traits: ["Balanced", "Flexible", "Adaptable", "Moderate"],
    strengths: ["Boleh adjust schedule", "Function at various times", "Good work-life balance"],
    weaknesses: ["Tak maximize peak hours", "Sometimes inconsistent"],
    tips: ["Find your most productive hours", "Maintain consistent schedule"],
  },
  C: {
    type: "C",
    title: "Afternoon Person",
    emoji: "🌤️",
    description: "Anda bukan morning person, tapi bukan full night owl. Petang dan malam adalah prime time anda. Slow start tapi strong finish!",
    traits: ["Late starter", "Night productive", "Creative", "Laid back"],
    strengths: ["Good for late meetings", "Creative at night", "Flexible schedule"],
    weaknesses: ["Struggle with early mornings", "May miss morning activities"],
    tips: ["Schedule important work for afternoon", "Get enough sleep"],
  },
  D: {
    type: "D",
    title: "Night Owl",
    emoji: "🦉",
    description: "Anda adalah true night owl! Malam adalah waktu anda bersinar - creative, productive, dan alive! Dunia yang sunyi malam hari adalah paradise anda!",
    traits: ["Night productive", "Creative", "Independent", "Non-conventional"],
    strengths: ["Peak creativity at night", "Focus in quiet hours", "Good for overnight work"],
    weaknesses: ["Susah bangun pagi", "Miss morning events", "Different schedule than others"],
    tips: ["Embrace your night schedule", "Find jobs dengan flexible hours"],
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
