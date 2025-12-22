// Love Language Kau
// Macam mana kau express dan terima kasih sayang?

export const questions = [
  {
    id: 1,
    question: "Apa yang buat kau rasa paling disayangi?",
    options: [
      { text: "Bila orang cakap 'I love you' atau puji kau", type: "A" },
      { text: "Bila dapat hadiah atau surprise", type: "B" },
      { text: "Bila orang spend masa dengan kau", type: "C" },
      { text: "Bila orang tolong buat sesuatu untuk kau", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Macam mana kau tunjuk sayang dekat orang?",
    options: [
      { text: "Cakap terus, express dengan words", type: "A" },
      { text: "Beli hadiah atau buat surprise", type: "B" },
      { text: "Spend quality time together", type: "C" },
      { text: "Tolong dia dengan tasks dia", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila stress, kau nak orang...",
    options: [
      { text: "Dengar dan cakap supportive words", type: "A" },
      { text: "Bawa makanan atau belikan sesuatu", type: "B" },
      { text: "Temankan je, tak payah cakap banyak", type: "C" },
      { text: "Tolong selesaikan masalah kau", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Anniversary ideal kau macam mana?",
    options: [
      { text: "Love letter atau speech yang heartfelt", type: "A" },
      { text: "Hadiah yang meaningful", type: "B" },
      { text: "Full day date, no phones", type: "C" },
      { text: "Partner plan everything untuk kau", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Apa yang buat kau rasa unappreciated?",
    options: [
      { text: "Bila orang tak acknowledge effort kau", type: "A" },
      { text: "Bila orang tak ingat special occasions", type: "B" },
      { text: "Bila orang tak ada masa untuk kau", type: "C" },
      { text: "Bila orang tak tolong bila kau susah", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Dalam friendship, kau paling appreciate bila kawan...",
    options: [
      { text: "Selalu encourage dan support dengan words", type: "A" },
      { text: "Ingat birthday dan bagi hadiah", type: "B" },
      { text: "Always available untuk hangout", type: "C" },
      { text: "Help out bila kau need anything", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kalau boleh pilih satu je, kau nak...",
    options: [
      { text: "Partner yang always cakap dia sayang kau", type: "A" },
      { text: "Partner yang always bagi surprise gifts", type: "B" },
      { text: "Partner yang always ada masa untuk kau", type: "C" },
      { text: "Partner yang always bantu dalam apa-apa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila kau sedih, apa yang paling comfort?",
    options: [
      { text: "Kata-kata semangat dari loved ones", type: "A" },
      { text: "Comfort food atau small gift", type: "B" },
      { text: "Cuddles atau just being together", type: "C" },
      { text: "Orang tolong handle things untuk kau", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Kau rasa paling connected dengan partner bila...",
    options: [
      { text: "Deep conversation pasal feelings", type: "A" },
      { text: "Exchange thoughtful gifts", type: "B" },
      { text: "Undivided attention time together", type: "C" },
      { text: "Do chores atau tasks together", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Best way untuk apologize pada kau?",
    options: [
      { text: "Sincerely say sorry dan explain", type: "A" },
      { text: "Sorry gift atau gesture", type: "B" },
      { text: "Spend time untuk make up", type: "C" },
      { text: "Show through actions yang dia care", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Words of Affirmation",
    emoji: "💬",
    description: "Kau jenis yang nak dengar! Compliments, 'I love you', encouragement - semua ni buat kau rasa valued. Words really matter untuk kau!",
    traits: ["Value verbal expression", "Good listener", "Expressive", "Appreciate acknowledgment"],
    strengths: ["Great at giving compliments", "Expressive dengan feelings", "Remember kind words"],
    weaknesses: ["Harsh words hurt deep", "Need verbal reassurance", "Sensitive to criticism"],
    tips: ["Tell people you need words", "Write love notes to others", "Journal good things people say"],
  },
  B: {
    type: "B",
    title: "Receiving Gifts",
    emoji: "🎁",
    description: "Bukan materialistic ya! Kau appreciate the thought behind gifts. Bila orang ingat nak belikan kau sesuatu, kau rasa loved sebab dia fikir pasal kau!",
    traits: ["Sentimental", "Thoughtful", "Value symbolism", "Appreciate effort"],
    strengths: ["Great gift giver", "Remember special occasions", "Treasure meaningful items"],
    weaknesses: ["Hurt bila orang lupa occasions", "May seem materialistic (but not!)"],
    tips: ["Explain to others its the thought that counts", "Create wish lists untuk help others", "Treasure small gifts equally"],
  },
  C: {
    type: "C",
    title: "Quality Time",
    emoji: "⏰",
    description: "Untuk kau, presence > presents! Kau nak undivided attention. No phones, no distractions - just genuine time together. That's love untuk kau!",
    traits: ["Value presence", "Hate distractions", "Deep connector", "Relationship-focused"],
    strengths: ["Great at being present", "Deep conversations", "Create meaningful memories"],
    weaknesses: ["Feel neglected bila busy", "Phone usage bothers you", "Hard bila LDR"],
    tips: ["Schedule regular quality time", "Communicate about distractions", "Make the most of time together"],
  },
  D: {
    type: "D",
    title: "Acts of Service",
    emoji: "🤝",
    description: "Actions speak louder! Bila orang tolong kau tanpa diminta, kau rasa sangat loved. Kau appreciate effort dan thoughtfulness through deeds!",
    traits: ["Practical lover", "Helpful", "Action-oriented", "Appreciate effort"],
    strengths: ["Always there to help", "Reliable", "Show love through actions"],
    weaknesses: ["Feel unloved bila orang tak tolong", "May overwork untuk others"],
    tips: ["Ask for help bila need", "Appreciate small acts", "Dont keep score"],
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
