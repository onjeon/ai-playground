// Gaya Confess Feeling
// Macam mana kau confess bila suka someone?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-confession-ms",
  title: "Gaya Confess Feeling",
  description: "Confess feeling adalah benda paling scary! Kau jenis yang terus cakap ke tunggu sampai mati?",
  category: "cinta",
  emoji: "💝",
  color: "#EC4899",
  questions: [
    {
      id: 1,
      question: "Kau suka someone dah lama. Kau akan?",
      options: [
        { text: "Confess terus, tak tahan simpan!", type: "A" },
        { text: "Drop hints, hope dia catch on", type: "B" },
        { text: "Tunggu moment yang perfect", type: "C" },
        { text: "Simpan sampai mati, takut kena reject", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Confession style kau?",
      options: [
        { text: "Face to face, cakap terus terang", type: "A" },
        { text: "Through text, easier to express", type: "B" },
        { text: "Grand gesture, buat surprise!", type: "C" },
        { text: "Through kawan, suruh hint-hint", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Kau nak confess tapi nervous. Solution?",
      options: [
        { text: "Just do it! Nervous ke tidak", type: "A" },
        { text: "Practice in front of mirror dulu", type: "B" },
        { text: "Write script, prepare what to say", type: "C" },
        { text: "Postpone sampai next time (forever)", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Timing untuk confess, bila yang best?",
      options: [
        { text: "ASAP bila rasa dah cukup kuat", type: "A" },
        { text: "Bila ada signs dia interested jugak", type: "B" },
        { text: "Special occasion - birthday ke apa", type: "C" },
        { text: "Tunggu dia confess dulu, safe", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Lepas confess, expect response macam mana?",
      options: [
        { text: "Hope for the best, prepare for worst", type: "A" },
        { text: "Kinda expect yes based on vibes", type: "B" },
        { text: "Not sure, depends on delivery", type: "C" },
        { text: "Expect rejection, pleasantly surprised if yes", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Kena reject lepas confess. Response?",
      options: [
        { text: "Okay, at least I tried! Move on", type: "A" },
        { text: "Hurt tapi appreciate the honesty", type: "B" },
        { text: "Ask why, want to understand", type: "C" },
        { text: "Die inside, regret confessing", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Kawan suruh kau confess kat crush. Kau?",
      options: [
        { text: "They're right! Let's do this", type: "A" },
        { text: "Consider their advice, maybe soon", type: "B" },
        { text: "Think about it, not ready yet", type: "C" },
        { text: "Tak nak! Mind your business", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Paling takut apa bila nak confess?",
      options: [
        { text: "Takut nothing honestly, go for it", type: "A" },
        { text: "Takut friendship jadi awkward", type: "B" },
        { text: "Takut malu kalau kena reject", type: "C" },
        { text: "Takut semua - rejection, awkwardness, everything", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Crush bagi mixed signals. Still confess?",
      options: [
        { text: "Yes! Clarify sekali harung", type: "A" },
        { text: "Test water sikit lagi dulu", type: "B" },
        { text: "Wait for clearer signal", type: "C" },
        { text: "Probably not, too risky", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Regret tak confess to someone in the past?",
      options: [
        { text: "No regrets, I always confess!", type: "A" },
        { text: "A few, wish I was braver", type: "B" },
        { text: "Yes, quite a lot actually", type: "C" },
        { text: "Many... so many what ifs", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "The Bold Confessor",
      emoji: "🦁",
      description: "Kau berani gila bila confess! Suka, cakap. Simple. Tak takut rejection sebab at least kau tried. No regrets, no what ifs. Brave heart!",
      traits: ["Brave", "Direct", "Confident", "No regrets"],
      strengths: ["Clear intentions", "No time wasted", "Respect for self dan crush"],
      weaknesses: ["Can come on too strong", "Might not read the room"],
      tips: ["Timing matters too", "Read signals before diving in"],
    },
    B: {
      type: "B",
      title: "The Strategic Confessor",
      emoji: "🎯",
      description: "Kau strategic bila confess. Look for signs, build rapport dulu, then make your move. Smart approach - minimize rejection risk while still being brave.",
      traits: ["Strategic", "Observant", "Calculated", "Patient"],
      strengths: ["Higher success rate", "Build foundation first", "Read situations well"],
      weaknesses: ["Sometimes wait too long", "Might miss opportunities"],
      tips: ["Don't overthink", "Sometimes just go for it"],
    },
    C: {
      type: "C",
      title: "The Perfectionist Confessor",
      emoji: "✨",
      description: "Kau nak confession perfect! Right time, right place, right words. Romantic at heart dan want everything to be special. Tapi sometimes perfect moment tak datang...",
      traits: ["Perfectionist", "Romantic", "Planner", "Detail-oriented"],
      strengths: ["Memorable confessions", "Thoughtful approach", "Make crush feel special"],
      weaknesses: ["Procrastinate waiting for perfect moment", "Over-plan"],
      tips: ["Perfect is enemy of good", "Sometimes imperfect is cute too"],
    },
    D: {
      type: "D",
      title: "The Silent Admirer",
      emoji: "🤫",
      description: "Confess? What's that? Kau jenis simpan dalam hati. Fear of rejection too strong. Many crushes, few confessions. Kau loving dari jauh je most of the time.",
      traits: ["Reserved", "Fearful", "Secretive", "Risk-averse"],
      strengths: ["Protect yourself from rejection", "Treasure feelings privately"],
      weaknesses: ["Miss many chances", "Live with regrets", "Never know what could be"],
      tips: ["Take the leap sometimes!", "Rejection isn't the end of the world"],
    },
  },
};

export default data;
