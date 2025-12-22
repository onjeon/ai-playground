// Tahap Gosip Kau
// Kau ni jenis simpan rahsia atau broadcasting station?

export const questions = [
  {
    id: 1,
    question: "Kawan cerita rahsia. 5 minit kemudian kau...",
    options: [
      { text: "Masih dalam otak, tak keluar", type: "A" },
      { text: "Simpan, but struggle sikit", type: "B" },
      { text: "Text bestie 'GIRL GUESS WHAT'", type: "C" },
      { text: "Dah bagitau 5 orang, now trending!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Ada drama kat office/school. Kau?",
    options: [
      { text: "Tak involve, bukan urusan aku", type: "A" },
      { text: "Listen tapi tak spread", type: "B" },
      { text: "Actively asking around for updates!", type: "C" },
      { text: "AKU ADALAH NEWS CENTER!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Kawan cerita pasal orang lain. Reaction kau?",
    options: [
      { text: "Not interested, change topic", type: "A" },
      { text: "Listen politely, tak add on", type: "B" },
      { text: "Ohh really? Tell me more!", type: "C" },
      { text: "SPILL THE TEA! I need ALL details!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Someone post something suspicious on social media. Kau?",
    options: [
      { text: "Scroll je, not my business", type: "A" },
      { text: "Notice tapi tak investigate", type: "B" },
      { text: "Stalk sikit, tanya kawan-kawan", type: "C" },
      { text: "FULL INVESTIGATION MODE! Screenshots, research!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Dengar rumor pasal someone. Kau?",
    options: [
      { text: "Tak percaya sampai confirmed", type: "A" },
      { text: "Interesting tapi tak spread", type: "B" },
      { text: "Share dengan close friends je", type: "C" },
      { text: "Must share! Viral potential ni!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Rate kepentingan 'tea time' dengan friends?",
    options: [
      { text: "Tak minat gossip sessions", type: "A" },
      { text: "Sometimes nice to catch up", type: "B" },
      { text: "Love it! Best part of hangouts!", type: "C" },
      { text: "ESSENTIAL! No tea no life!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ada cerita juicy yang kau promise tak bagitau sesiapa. Kau?",
    options: [
      { text: "Promise is promise, sealed!", type: "A" },
      { text: "Hard but I'll keep it", type: "B" },
      { text: "Okay tapi bestie doesn't count right?", type: "C" },
      { text: "Sorry but this is TOO good to keep!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Group chat tengah discuss orang. Kau?",
    options: [
      { text: "Leave atau mute, tak selesa", type: "A" },
      { text: "Read tapi tak contribute", type: "B" },
      { text: "Add comments dan opinions!", type: "C" },
      { text: "Leading the discussion dengan new tea!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Relationship status orang. Kau tahu tak?",
    options: [
      { text: "Tak ambil tahu unless they tell me", type: "A" },
      { text: "Know close friends' status je", type: "B" },
      { text: "Updated dengan most people around me", type: "C" },
      { text: "I know EVERYONE'S status, dating timeline, drama semua!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kau rasa diri kau macam mana dalam social circle?",
    options: [
      { text: "Private person, mind my own business", type: "A" },
      { text: "Normal friend, not particularly gossipy", type: "B" },
      { text: "The one people come to for updates", type: "C" },
      { text: "The NEWS STATION everyone tunes into!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Vault - Rahsia Selamat Dengan Kau 🔐",
    emoji: "🔐",
    description: "KAU NI VAULT! Rahsia selamat macam dalam bank! Gosip tak menarik untuk kau, dan kau mind your own business. Privacy adalah sacred. Orang trust kau 100% sebab kau LITERALLY cannot be bothered to gossip!",
    traits: ["Secret keeper", "Private person", "Not interested in drama", "Trustworthy"],
    strengths: ["People trust you", "No drama", "Clear conscience", "Respected"],
    weaknesses: ["May miss out on 'tea'", "Seem distant sometimes", "Out of the loop"],
    tips: ["Your discretion is valuable!", "Stay genuine to yourself"],
  },
  B: {
    type: "B",
    title: "Normal Human - Balanced Tea Consumer ☕",
    emoji: "☕",
    description: "Kau ni NORMAL level gosip! Listen bila ada cerita tapi tak actively cari. Boleh keep secrets bila serious. Human curiosity ada tapi controlled. The healthy middle ground!",
    traits: ["Balanced approach", "Can keep secrets", "Normal curiosity", "Selective listener"],
    strengths: ["Good friend", "Trustworthy enough", "Not drama-causing", "Balanced social life"],
    weaknesses: ["Sometimes tempted to share", "May slip occasionally"],
    tips: ["Good balance!", "Keep practicing discretion"],
  },
  C: {
    type: "C",
    title: "Tea Enthusiast - Aktif Dalam Updates 🫖",
    emoji: "🫖",
    description: "KAU NI TEA ENTHUSIAST! Suka dengar cerita, suka tahu what's happening. Share dengan select group je tapi... active participant in the grapevine! Knowledge is power kan?",
    traits: ["Loves tea", "Active in gossip circles", "Shares selectively", "Well-informed"],
    strengths: ["Always updated", "Good social connections", "Entertaining friend"],
    weaknesses: ["May spread things accidentally", "Trust issues possible", "Could hurt relationships"],
    tips: ["Be careful what you share!", "Someone's secret isn't your story to tell"],
  },
  D: {
    type: "D",
    title: "Broadcasting Station - Hot FM 24/7 📡",
    emoji: "📡",
    description: "KAU NI BROADCASTING STATION! Gosip masuk satu telinga, keluar through EVERY channel! Kau tahu semua orang punya business, dan sharing is caring! The unofficial news anchor of your social circle!",
    traits: ["Major gossip", "Cannot keep secrets", "Always has tea", "Social butterfly"],
    strengths: ["Super connected", "Everyone comes to you for news", "Never boring"],
    weaknesses: ["Trust issues MAJOR", "May hurt people", "Reputation risk", "Drama magnet"],
    tips: ["PLEASE consider people's feelings!", "Gossip can really hurt!", "Would you want YOUR secrets shared?"],
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
