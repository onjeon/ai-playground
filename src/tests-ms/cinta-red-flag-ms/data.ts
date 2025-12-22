// Red Flag Detector Kau
// Berapa bagus kau detect red flags dalam relationship?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-red-flag-ms",
  title: "Red Flag Detector Kau",
  description: "Test sensitivity kau detect red flags! Kau jenis yang cepat perasan ke buta cinta?",
  category: "cinta",
  emoji: "🚩",
  color: "#DC2626",
  questions: [
    {
      id: 1,
      question: "Partner kau check phone kau without permission. Kau?",
      options: [
        { text: "HUGE RED FLAG! Trust issues tu", type: "A" },
        { text: "Tak okay, tapi bagi chance explain", type: "B" },
        { text: "Kalau takde apa nak hide, okay je", type: "C" },
        { text: "Normal la tu, couples share everything", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Dia selalu cancel plans last minute. Reaction kau?",
      options: [
        { text: "Red flag! Tak respect masa aku", type: "A" },
        { text: "Tanya sebab, kalau valid okay la", type: "B" },
        { text: "Biasa je, life happens", type: "C" },
        { text: "It's fine, aku pun busy jugak", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Ex dia still text, dia tak block. Kau rasa?",
      options: [
        { text: "Major red flag! Block sekarang!", type: "A" },
        { text: "Suspicious, nak tahu context", type: "B" },
        { text: "Depends macam mana conversation tu", type: "C" },
        { text: "Trust je, ex is ex", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Dia tak pernah post kau kat social media. Thoughts?",
      options: [
        { text: "Hidden relationship? RED FLAG!", type: "A" },
        { text: "Weird sikit, tapi maybe dia private", type: "B" },
        { text: "Social media bukan everything", type: "C" },
        { text: "Aku pun tak kesah sangat", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Partner kau compare kau dengan orang lain. Response?",
      options: [
        { text: "INSTANT RED FLAG! Disrespectful gila", type: "A" },
        { text: "Confront terus, tak boleh accept", type: "B" },
        { text: "Tanya dia maksud apa", type: "C" },
        { text: "Maybe dia just joking kot", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Dia marah bila kau keluar dengan kawan sendiri. Okay ke?",
      options: [
        { text: "CONTROLLING! Big red flag", type: "A" },
        { text: "Tak healthy, kena discuss", type: "B" },
        { text: "Maybe dia just insecure sikit", type: "C" },
        { text: "Tanda dia sayang la tu", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Kau tahu dia pernah curang dengan ex. Kau akan?",
      options: [
        { text: "Once a cheater, always a cheater", type: "A" },
        { text: "Proceed with caution", type: "B" },
        { text: "People can change", type: "C" },
        { text: "Past is past", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Dia tak pernah introduce kau kat family. After setahun?",
      options: [
        { text: "Something wrong! Major red flag", type: "A" },
        { text: "Perlu serious talk", type: "B" },
        { text: "Maybe family dia complicated", type: "C" },
        { text: "Tak rush, bila ready nanti", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Partner kau selalu buat kau rasa guilty. Normal?",
      options: [
        { text: "MANIPULATION! Run away", type: "A" },
        { text: "Toxic trait, kena address", type: "B" },
        { text: "Self-reflect dulu, maybe ada point", type: "C" },
        { text: "Normal la gaduh sometimes", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Dia cakap \"kalau sayang, buktikan\". Pressure tak?",
      options: [
        { text: "RED FLAG! Emotional blackmail tu", type: "A" },
        { text: "Not cool, boundaries exist", type: "B" },
        { text: "Depends apa dia suruh buat", type: "C" },
        { text: "Kalau sayang, apa salahnya", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "Red Flag Expert",
      emoji: "🔍",
      description: "Wah, radar kau sharp gila! Kau boleh detect red flags dari jauh. Tak senang orang nak tipu kau. Standards tinggi dan kau tahu self-worth kau.",
      traits: ["Highly alert", "Strong boundaries", "Self-aware", "Protective"],
      strengths: ["Tak senang kena manipulate", "Protect diri sendiri", "Make smart choices"],
      weaknesses: ["Sometimes terlalu suspicious", "Might miss genuine people"],
      tips: ["Balance caution dengan trust", "Give people benefit of doubt sometimes"],
    },
    B: {
      type: "B",
      title: "Cautious but Fair",
      emoji: "⚖️",
      description: "Kau careful tapi tak paranoid. Suka verify dulu sebelum judge. Pendekatan balanced - bagi chance tapi ada limits.",
      traits: ["Balanced", "Fair", "Communicative", "Thoughtful"],
      strengths: ["Good at communication", "Give fair chances", "Rational decision maker"],
      weaknesses: ["Sometimes terlalu bagi chance", "Might delay red flag response"],
      tips: ["Trust instinct kau lebih", "Faster action bila perlu"],
    },
    C: {
      type: "C",
      title: "Benefit of Doubt Giver",
      emoji: "💭",
      description: "Kau optimistic dan percaya orang boleh explain everything. Suka dengar both sides dulu. Tapi careful, sometimes red flag memang red flag.",
      traits: ["Optimistic", "Understanding", "Patient", "Trusting"],
      strengths: ["Open-minded", "Good listener", "Tidak jump to conclusions"],
      weaknesses: ["Might ignore obvious signs", "Too forgiving sometimes"],
      tips: ["Strengthen boundaries", "Trust gut feeling lebih"],
    },
    D: {
      type: "D",
      title: "Rose-Colored Glasses",
      emoji: "🌹",
      description: "Kau percaya yang terbaik dalam orang! Tapi hmm, sometimes kau miss red flags yang obvious. Love is blind sangat ni. Kena be more careful!",
      traits: ["Very trusting", "Optimistic", "Forgiving", "Innocent"],
      strengths: ["Loving unconditionally", "Give many chances", "See good in people"],
      weaknesses: ["Vulnerable to manipulation", "Miss obvious warnings"],
      tips: ["Learn about red flags", "Protect your heart more", "Listen to friends' warnings"],
    },
  },
};

export default data;
