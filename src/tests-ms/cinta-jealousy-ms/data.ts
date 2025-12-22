// Level Cemburu Dalam Relationship
// Seberapa cemburu kau dalam relationship?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-jealousy-ms",
  title: "Level Cemburu Dalam Relationship",
  description: "Semua orang ada cemburu sikit kan? Tapi level kau macam mana? Sikit je ke sampai stalk Instagram ex dia?",
  category: "cinta",
  emoji: "😤",
  color: "#EF4444",
  questions: [
    {
      id: 1,
      question: "Partner kau like gambar orang lain yang hot. Kau?",
      options: [
        { text: "MARAH! Screenshot terus confront", type: "A" },
        { text: "Rasa tak sedap hati, tapi diam", type: "B" },
        { text: "Biasa je, mata tengok hati jangan", type: "C" },
        { text: "Aku pun like jugak, fair la", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Ada orang flirt dengan partner kau depan mata. Reaction?",
      options: [
        { text: "Terus claim, tunjuk dia milik aku", type: "A" },
        { text: "Observe dulu, tengok dia respond macam mana", type: "B" },
        { text: "Trust partner aku handle", type: "C" },
        { text: "Tak perasan pun, sibuk dengan phone", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Partner kau keluar dengan colleague opposite gender. Kau?",
      options: [
        { text: "Minta location sharing sepanjang masa", type: "A" },
        { text: "Text selalu check in", type: "B" },
        { text: "Okay je, work things kan", type: "C" },
        { text: "Tak kisah langsung", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Kau pernah stalk ex partner kau tak?",
      options: [
        { text: "Stalk gila! Semua social media habis check", type: "A" },
        { text: "Kadang-kadang je bila rasa insecure", type: "B" },
        { text: "Sekali dua, curious sikit", type: "C" },
        { text: "Never, tak interested", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Partner kau sebut nama orang lain masa tidur. Kau?",
      options: [
        { text: "Wake up terus interrogate!", type: "A" },
        { text: "Simpan dalam hati, tanya esok", type: "B" },
        { text: "Mimpi je kot, ignore", type: "C" },
        { text: "Tak perasan, tidur lena", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Best friend partner kau lebih rapat dengan dia dari kau. Feel?",
      options: [
        { text: "Jealous gila! Nak jadi number one", type: "A" },
        { text: "Sikit uncomfortable, tapi try accept", type: "B" },
        { text: "Normal la, bestfriend memang rapat", type: "C" },
        { text: "Good for dia, aku pun ada bestfriend", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Partner kau puji orang lain cantik/handsome. Response?",
      options: [
        { text: "\"Eh cantik sangat ke? Lagi cantik dari aku?\"", type: "A" },
        { text: "Diam tapi dalam hati compare", type: "B" },
        { text: "\"Ha ah, memang cantik pun\"", type: "C" },
        { text: "\"Yelah, so? Aku lagi cantik\"", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Kau check phone partner kau tak?",
      options: [
        { text: "Selalu, kena tahu semua", type: "A" },
        { text: "Pernah sekali dua bila suspicious", type: "B" },
        { text: "Never, respect privacy", type: "C" },
        { text: "Tak pernah terfikir pun", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Partner kau lama reply text. First thought?",
      options: [
        { text: "Mesti tengah text orang lain!", type: "A" },
        { text: "Hmm pelik, biasanya cepat reply", type: "B" },
        { text: "Mungkin busy, nanti dia reply", type: "C" },
        { text: "Tak perasan pun lambat", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Ex partner kau message dia. Kau expect apa?",
      options: [
        { text: "Block terus! Tak perlu layan", type: "A" },
        { text: "Tunjuk kat aku dan discuss", type: "B" },
        { text: "Trust dia handle properly", type: "C" },
        { text: "Hal dia, bukan urusan aku", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "Green-Eyed Monster",
      emoji: "👹",
      description: "Weh, cemburu level 1000! Kau sangat protective (atau possessive?) dengan partner. Every little thing buat kau suspicious. Deep down, mungkin ada insecurity yang perlu address.",
      traits: ["Very jealous", "Possessive", "Need constant reassurance", "Suspicious"],
      strengths: ["Very attentive", "Notice everything", "Passionate about relationship"],
      weaknesses: ["Can be controlling", "Create unnecessary drama", "Push partner away"],
      tips: ["Work on self-confidence", "Trust is key", "Communicate insecurities openly"],
    },
    B: {
      type: "B",
      title: "Normal Jealous",
      emoji: "😒",
      description: "Kau ada jealousy yang normal dan healthy! Rasa cemburu sikit tapi tahu control. Kau aware bila rasa tak secure dan try handle dengan matang.",
      traits: ["Moderate jealousy", "Self-aware", "Try to be rational", "Communicate feelings"],
      strengths: ["Balance trust dan caution", "Express feelings appropriately", "Healthy boundaries"],
      weaknesses: ["Sometimes overthink", "Can bottle up feelings"],
      tips: ["Keep communicating", "Trust your partner more"],
    },
    C: {
      type: "C",
      title: "Chill Partner",
      emoji: "😌",
      description: "Kau secure dalam relationship! Trust level tinggi dan tak mudah jealous. Confident dengan diri sendiri dan percaya partner kau. Healthy mindset!",
      traits: ["Secure", "Trusting", "Confident", "Relaxed"],
      strengths: ["Create peaceful relationship", "Give partner space", "Low drama"],
      weaknesses: ["Might miss red flags sometimes", "Can seem too indifferent"],
      tips: ["Stay observant", "Balance trust dengan awareness"],
    },
    D: {
      type: "D",
      title: "Zero Jealousy Zone",
      emoji: "🧘",
      description: "Jealous? Apa tu? Kau langsung tak kisah! Ultra chill sampai kadang partner wonder if you care. Tapi careful, sometimes sikit jealousy shows you care.",
      traits: ["Very secure", "Independent", "Unbothered", "Trusting completely"],
      strengths: ["No drama", "Partner feels free", "Very trusting"],
      weaknesses: ["Might seem like don't care", "Can miss obvious problems"],
      tips: ["Show you care in other ways", "Be more attentive sometimes"],
    },
  },
};

export default data;
