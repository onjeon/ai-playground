// Berapa Lama Kau Move On?
// Test berapa lama kau ambil untuk move on dari ex

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-move-on-ms",
  title: "Berapa Lama Kau Move On?",
  description: "Move on ada yang cepat, ada yang lambat. Kau jenis yang mana? Test ni reveal semua!",
  category: "cinta",
  emoji: "⏰",
  color: "#8B5CF6",
  questions: [
    {
      id: 1,
      question: "Sebulan lepas breakup, kau still fikir dia?",
      options: [
        { text: "24/7, tak dapat nak stop", type: "A" },
        { text: "Sometimes, bila alone je", type: "B" },
        { text: "Sekali-sekala, makin kurang", type: "C" },
        { text: "Siapa? Dah lupa dah", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Scroll old photos dengan ex?",
      options: [
        { text: "Every night, sambil nangis", type: "A" },
        { text: "Kadang-kadang, nostalgia sikit", type: "B" },
        { text: "Dah delete semua honestly", type: "C" },
        { text: "What photos? Archive lama dah", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Nampak ex dengan orang baru. Feel?",
      options: [
        { text: "SAKIT HATI GILA, tak boleh handle", type: "A" },
        { text: "Uncomfortable sikit, tapi try be okay", type: "B" },
        { text: "Good for them, aku pun dah move on", type: "C" },
        { text: "Who cares? Their life", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Song yang remind kau of ex, kau?",
      options: [
        { text: "Listen on repeat, wallow in sadness", type: "A" },
        { text: "Skip bila mood sedih", type: "B" },
        { text: "Boleh dengar biasa je now", type: "C" },
        { text: "Tak ada special song pun", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Bila kau ready untuk date orang lain?",
      options: [
        { text: "Months atau years, need to heal", type: "A" },
        { text: "Few months, bila dah stable", type: "B" },
        { text: "Few weeks, moving forward", type: "C" },
        { text: "Immediately, best way to move on", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Kau compare new people dengan ex?",
      options: [
        { text: "Always, no one can compare", type: "A" },
        { text: "Sometimes, hard not to", type: "B" },
        { text: "Try not to, give fair chance", type: "C" },
        { text: "Never, everyone is different", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Tempat yang kau pernah pergi dengan ex?",
      options: [
        { text: "Avoid at all costs, too painful", type: "A" },
        { text: "Uncomfortable tapi boleh go if need", type: "B" },
        { text: "Can go, memories just memories", type: "C" },
        { text: "No issue, places are just places", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Kawan mention ex dalam conversation. Response?",
      options: [
        { text: "Change topic immediately, tak sanggup", type: "A" },
        { text: "Okay tapi prefer not to dwell", type: "B" },
        { text: "Can talk about it normally", type: "C" },
        { text: "Tak kisah, ancient history", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Dreams about ex, how often?",
      options: [
        { text: "Too often, wake up sad", type: "A" },
        { text: "Once in a while", type: "B" },
        { text: "Rarely now", type: "C" },
        { text: "Never, mind is clear", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Genuine feeling sekarang towards ex?",
      options: [
        { text: "Still love them honestly", type: "A" },
        { text: "Care for them, but moving on", type: "B" },
        { text: "Neutral, wish them well", type: "C" },
        { text: "Indifferent, no feelings", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "The Slow Healer",
      emoji: "🐢",
      description: "Kau ambil masa yang panjang untuk move on. Love runs deep dan letting go bukan senang. Tak ada yang salah - heal at your own pace. Tapi make sure progress ya!",
      traits: ["Deep attachment", "Emotional", "Nostalgic", "Slow processor"],
      strengths: ["Feel things deeply", "Loyal in love", "Thorough healing"],
      weaknesses: ["Stuck in past", "Miss new opportunities", "Prolonged pain"],
      tips: ["Set healing milestones", "Focus on self-growth", "Limit stalking ex online!"],
    },
    B: {
      type: "B",
      title: "The Gradual Mover",
      emoji: "🚶",
      description: "Kau move on secara gradually. Ada progress, tapi tidak rush. Healthy pace - acknowledge feelings sambil moving forward. Good balance!",
      traits: ["Balanced", "Self-aware", "Progressive", "Realistic"],
      strengths: ["Healthy processing", "Learn from relationship", "Stable recovery"],
      weaknesses: ["Sometimes plateau", "May hold on longer than needed"],
      tips: ["Keep momentum", "Celebrate small wins"],
    },
    C: {
      type: "C",
      title: "The Quick Recoverer",
      emoji: "🏃",
      description: "Kau cepat move on! Once decided it's over, kau focus on future. Efficient healing, tapi pastikan betul-betul processed, bukan just suppressed.",
      traits: ["Efficient", "Future-focused", "Resilient", "Practical"],
      strengths: ["Don't waste time grieving", "Open to new love", "Strong mindset"],
      weaknesses: ["Might not fully process", "Could miss lessons"],
      tips: ["Make sure you healed, not just moved on", "Reflect occasionally"],
    },
    D: {
      type: "D",
      title: "The Swift Forgetter",
      emoji: "💨",
      description: "Move on? Kau dah forget! Almost instantly ready untuk chapter baru. Either very strong atau... might want to check if kau actually processed. Either way, impressive!",
      traits: ["Detached", "Swift", "Forward-looking", "Unbothered"],
      strengths: ["Zero time wasted", "Always ready for new love", "Emotional resilience"],
      weaknesses: ["Might repeat patterns", "Could be avoiding emotions"],
      tips: ["Make sure it's real moving on", "Learn from each relationship"],
    },
  },
};

export default data;
