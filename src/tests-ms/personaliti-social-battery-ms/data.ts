// Level Social Battery Kau
// Berapa lama kau boleh tahan socializing?

export const questions = [
  {
    id: 1,
    question: "Lepas party 3 jam, kau rasa macam mana?",
    options: [
      { text: "Dah habis battery, nak balik SEKARANG", type: "A" },
      { text: "Penat tapi boleh tahan lagi sikit", type: "B" },
      { text: "Okay je, masih boleh lepak", type: "C" },
      { text: "Baru warm up! Mana after party?!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Berapa kali seminggu kau sanggup keluar dengan kawan?",
    options: [
      { text: "Sekali pun dah banyak sangat", type: "A" },
      { text: "1-2 kali, max!", type: "B" },
      { text: "3-4 kali boleh handle", type: "C" },
      { text: "Everyday pun no problem!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Dalam gathering, bila kau mula rasa 'okay dah cukup ni'?",
    options: [
      { text: "30 minit pertama dah rasa nak balik", type: "A" },
      { text: "Dalam 1-2 jam", type: "B" },
      { text: "3-4 jam baru rasa tired", type: "C" },
      { text: "Takde limit! Boleh terus sampai subuh", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Kawan ajak video call. Reaction kau?",
    options: [
      { text: "Decline, text je boleh tak?", type: "A" },
      { text: "Okay tapi 15 minit je ah", type: "B" },
      { text: "Sure, boleh call lama", type: "C" },
      { text: "YES! Jom call semua orang sekali!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Hari tu packed dengan meetings/classes. Petang kau nak...",
    options: [
      { text: "TERUS balik rumah, no detours", type: "A" },
      { text: "Quick dinner dengan sorang kawan", type: "B" },
      { text: "Boleh je lepak kejap dengan geng", type: "C" },
      { text: "Perfect time untuk catch up dengan semua orang!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Family gathering CNY/Raya style. Kau boleh tahan berapa lama?",
    options: [
      { text: "1 jam max, lepas tu hide dalam bilik", type: "A" },
      { text: "2-3 jam, then perlukan break", type: "B" },
      { text: "Seharian boleh, dengan breaks", type: "C" },
      { text: "The whole time! Aku suka family chaos!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kawan text dalam group chat nak meet up. Kau?",
    options: [
      { text: "Seen tapi tak reply, pretend busy", type: "A" },
      { text: "Reply 'tengok dulu' sambil hope orang lain cancel", type: "B" },
      { text: "Check calendar, if free then yes", type: "C" },
      { text: "TERUS confirm! Count me in!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Berapa lama kau perlukan untuk 'recharge' lepas socializing?",
    options: [
      { text: "Minimum 2-3 hari sorang-sorang", type: "A" },
      { text: "Sehari full rest", type: "B" },
      { text: "Few hours je", type: "C" },
      { text: "Recharge? Socializing IS my recharge!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Office/class outing team building. Kau...",
    options: [
      { text: "Cari excuse untuk skip", type: "A" },
      { text: "Pergi tapi balik awal", type: "B" },
      { text: "Participate fully, enjoy je", type: "C" },
      { text: "Volunteer jadi organizer!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Ideal ratio socializing vs alone time untuk kau?",
    options: [
      { text: "90% alone, 10% social", type: "A" },
      { text: "70% alone, 30% social", type: "B" },
      { text: "50-50 balance", type: "C" },
      { text: "80% social, 20% alone (untuk tidur je)", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Battery 5% - Low Power Mode 🪫",
    emoji: "🪫",
    description: "Social battery kau macam phone lama - cepat habis! Kau perlukan banyak masa sorang untuk recharge. Small talk is DRAINING, dan kau expert dalam Irish exit (cabut tak bagitau). Tapi bila kau choose untuk spend energy dengan orang, kau all in!",
    traits: ["Quick to drain", "Needs lots of recharge", "Selective socializing", "Irish exit champion"],
    strengths: ["Self-aware about limits", "Quality interactions", "Value alone time"],
    weaknesses: ["May miss social opportunities", "Hard to commit to plans"],
    tips: ["Plan recovery time after events", "It's okay to leave early!"],
  },
  B: {
    type: "B",
    title: "Battery 40% - Power Saving Mode 🔋",
    emoji: "🔋",
    description: "Social battery kau moderate - boleh function tapi kena manage carefully! Kau enjoy socializing dalam doses yang appropriate. Kau pandai set boundaries dan tahu bila nak tap out. Balanced approach to social life!",
    traits: ["Moderate capacity", "Good at boundaries", "Calculated socializing", "Strategic rest"],
    strengths: ["Know your limits", "Sustainable social life", "Good friend to close circle"],
    weaknesses: ["Sometimes overthink social plans", "May seem flaky"],
    tips: ["Trust your gut on social events", "Quality over quantity!"],
  },
  C: {
    type: "C",
    title: "Battery 75% - Normal Mode ⚡",
    emoji: "⚡",
    description: "Social battery kau decent! Boleh handle most social situations dengan comfortable. Kau enjoy both alone time dan hanging out. Tak extreme either way - the balanced approach to life!",
    traits: ["Good capacity", "Adaptable", "Flexible socializer", "Quick recharge"],
    strengths: ["Can handle most situations", "Good energy management", "Versatile friend"],
    weaknesses: ["Sometimes overcommit", "May ignore exhaustion signs"],
    tips: ["Listen to your body", "Schedule some downtime!"],
  },
  D: {
    type: "D",
    title: "Battery 100% - Unlimited Power! ⚡⚡",
    emoji: "⚡⚡",
    description: "SOCIAL BATTERY KAU INFINITE! Orang lain drain, kau CHARGE dari socializing! Kau thrive dalam crowds, parties, dan gatherings. Being alone too long actually makes you restless. Kau adalah human equivalent of solar panel - more exposure, more energy!",
    traits: ["Unlimited social energy", "Charges from people", "Party machine", "Never wants to leave"],
    strengths: ["Amazing networker", "Always available for friends", "Brings energy everywhere"],
    weaknesses: ["May not understand introverts", "Can be overwhelming"],
    tips: ["Respect others' need for space", "Alone time is healthy too!"],
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
