// Gaya Handle Breakup
// Macam mana kau deal dengan breakup?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-breakup-ms",
  title: "Gaya Handle Breakup",
  description: "Breakup memang sakit. Tapi semua orang handle differently. Kau jenis yang menangis seminggu ke terus delete semua gambar?",
  category: "cinta",
  emoji: "💔",
  color: "#6B7280",
  questions: [
    {
      id: 1,
      question: "First thing kau buat lepas breakup?",
      options: [
        { text: "Cry my heart out, release semua", type: "A" },
        { text: "Call bestie, need to vent", type: "B" },
        { text: "Delete semua gambar dan unfollow", type: "C" },
        { text: "Pretend I'm fine, act normal", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Social media lepas breakup?",
      options: [
        { text: "Post sad quotes dan songs", type: "A" },
        { text: "Go silent, disappear kejap", type: "B" },
        { text: "Glow up posts, show I'm thriving", type: "C" },
        { text: "Business as usual, tak tunjuk affected", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Barang-barang ex - apa kau buat?",
      options: [
        { text: "Simpan, tak sampai hati buang", type: "A" },
        { text: "Pack dalam box, out of sight", type: "B" },
        { text: "Burn atau throw semua!", type: "C" },
        { text: "Return je, no drama", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Lagu sedih lepas breakup?",
      options: [
        { text: "On repeat 24/7, embrace the pain", type: "A" },
        { text: "Sometimes, bila mood sedih", type: "B" },
        { text: "Avoid at all costs, lagu hype je", type: "C" },
        { text: "Don't really care about songs", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Kawan ajak keluar lepas breakup. Kau?",
      options: [
        { text: "Taknak, nak duduk rumah menangis", type: "A" },
        { text: "Okay, distraction bagus", type: "B" },
        { text: "Yes! Time untuk party dan move on", type: "C" },
        { text: "Maybe later, kena process dulu", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Kau stalk ex tak lepas breakup?",
      options: [
        { text: "Every day, nak tahu dia okay ke", type: "A" },
        { text: "Sometimes bila weak moment", type: "B" },
        { text: "Block terus, tak nak tahu", type: "C" },
        { text: "Tak interested, move forward", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Bila ex text \"Hey, apa khabar?\". Response?",
      options: [
        { text: "Reply dengan hope untuk reconcile", type: "A" },
        { text: "Reply casual, tengok apa dia nak", type: "B" },
        { text: "Ignore atau blue tick je", type: "C" },
        { text: "Reply short and friendly, nothing more", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Rebound relationship - thoughts?",
      options: [
        { text: "No way, need time to heal", type: "A" },
        { text: "Depends macam mana breakup tu", type: "B" },
        { text: "Why not? Best way to move on", type: "C" },
        { text: "Not actively looking tapi kalau jadi, jadi la", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Berapa lama kau ambil untuk pulih?",
      options: [
        { text: "Months, aku attach gila", type: "A" },
        { text: "Few weeks, depends on relationship length", type: "B" },
        { text: "Days, aku cepat move on", type: "C" },
        { text: "Hard to say, process in my own way", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Lesson dari breakup biasanya apa untuk kau?",
      options: [
        { text: "I loved too much", type: "A" },
        { text: "Red flags aku should have noticed", type: "B" },
        { text: "Their loss, I'm amazing", type: "C" },
        { text: "It wasn't meant to be, simple", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "The Emotional Processor",
      emoji: "😭",
      description: "Kau feel everything DEEPLY. Breakup hits hard dan kau tak takut tunjuk emotions. Menangis, sedih, rindu - all valid! Kau process dengan feel semua the feels.",
      traits: ["Emotional", "Deep feeler", "Attached", "Expressive"],
      strengths: ["Process emotions healthily", "Don't bottle up feelings", "Eventually heal completely"],
      weaknesses: ["Recovery takes longer", "Might get stuck in sadness"],
      tips: ["Set timeline untuk healing", "Balance feeling dengan doing"],
    },
    B: {
      type: "B",
      title: "The Balanced Healer",
      emoji: "🌱",
      description: "Kau ada healthy balance dalam handle breakup. Allow yourself to feel tapi also take steps to move forward. Support system penting untuk kau.",
      traits: ["Balanced", "Self-aware", "Seeks support", "Gradual healing"],
      strengths: ["Healthy coping mechanisms", "Learn from experiences", "Good support network"],
      weaknesses: ["Sometimes suppress for others", "Might not fully process"],
      tips: ["Take your time", "Don't rush the healing"],
    },
    C: {
      type: "C",
      title: "The Quick Mover",
      emoji: "🚀",
      description: "Breakup? What breakup? Kau cepat gila move on. Delete, block, next! Kau fokus pada future dan tak nak dwell on the past. Some call it avoidance, kau call it efficiency.",
      traits: ["Fast mover", "Future-focused", "Decisive", "Action-oriented"],
      strengths: ["Don't waste time mourning", "Quick bounce back", "Stay productive"],
      weaknesses: ["Might not fully process emotions", "Could repeat patterns"],
      tips: ["Make sure you actually healed", "Reflect on what went wrong"],
    },
    D: {
      type: "D",
      title: "The Stoic One",
      emoji: "🗿",
      description: "Kau keep it cool on the outside. Process internally dan tak show much emotion publicly. Life goes on dan kau handle things privately, in your own time.",
      traits: ["Reserved", "Private", "Internal processor", "Composed"],
      strengths: ["Maintain stability", "Don't burden others", "Handle stress well"],
      weaknesses: ["Might bottle up too much", "Others don't know you need support"],
      tips: ["Open up to someone trusted", "It's okay to show vulnerability"],
    },
  },
};

export default data;
