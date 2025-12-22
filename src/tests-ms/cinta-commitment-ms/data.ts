// Ready Ke Untuk Commit?
// Test seberapa ready kau untuk serious relationship

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-commitment-ms",
  title: "Ready Ke Untuk Commit?",
  description: "Commitment bukan main-main. Kau dah ready ke untuk serious relationship atau masih nak explore?",
  category: "cinta",
  emoji: "💍",
  color: "#8B5CF6",
  questions: [
    {
      id: 1,
      question: "Bila fikir pasal future, kau nampak apa?",
      options: [
        { text: "Partner, rumah, family - the whole package", type: "A" },
        { text: "Career dulu, relationship later", type: "B" },
        { text: "Explore life, tak fikir jauh sangat", type: "C" },
        { text: "Depends siapa yang datang dalam hidup", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Someone ajak kau exclusive. Reaction?",
      options: [
        { text: "Yes! Finally, tunggu lama dah", type: "A" },
        { text: "Perlu fikir, ada pros and cons", type: "B" },
        { text: "Woah, too fast. Slow down", type: "C" },
        { text: "Depends macam mana chemistry", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Kau sanggup sacrifice apa untuk relationship?",
      options: [
        { text: "Almost everything untuk orang yang betul", type: "A" },
        { text: "Some things, tapi ada limits", type: "B" },
        { text: "Tak banyak, individuality penting", type: "C" },
        { text: "Depends apa yang kena sacrifice", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Partner kau dapat job offer overseas. Kau?",
      options: [
        { text: "Ikut sama, we're a team", type: "A" },
        { text: "Try LDR dulu, see how", type: "B" },
        { text: "Dia pergi, aku stay - tak sanggup relocate", type: "C" },
        { text: "Discuss properly, cari middle ground", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Pandangan kau tentang marriage?",
      options: [
        { text: "Dream! Tak sabar nak kahwin", type: "A" },
        { text: "Okay bila dah stable", type: "B" },
        { text: "Not a priority honestly", type: "C" },
        { text: "With the right person je", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Kau jenis share everything dengan partner?",
      options: [
        { text: "Yes! Password, location, everything", type: "A" },
        { text: "Most things, tapi ada privacy sikit", type: "B" },
        { text: "Some things je, boundaries penting", type: "C" },
        { text: "Depends trust level macam mana", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Financial planning dengan partner - thoughts?",
      options: [
        { text: "Joint account! What's mine is yours", type: "A" },
        { text: "Discuss budget tapi keep separate accounts", type: "B" },
        { text: "My money is my money", type: "C" },
        { text: "Mix of both, flexible", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Problem dalam relationship, kau approach macam mana?",
      options: [
        { text: "Work through it together, never give up", type: "A" },
        { text: "Solve if possible, tapi ada limits", type: "B" },
        { text: "If too hard, maybe not meant to be", type: "C" },
        { text: "Depends apa problem tu", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Meeting parents - bila yang sesuai?",
      options: [
        { text: "As soon as we're serious!", type: "A" },
        { text: "After 6 months to a year", type: "B" },
        { text: "Bila betul-betul nak kahwin je", type: "C" },
        { text: "Bila both parties ready", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Kalau kena pilih: dream job overseas atau stay dengan partner?",
      options: [
        { text: "Stay dengan partner, love comes first", type: "A" },
        { text: "Tough choice, perlu long discussion", type: "B" },
        { text: "Dream job, can find love anywhere", type: "C" },
        { text: "Find way to have both", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "Ready To Commit!",
      emoji: "💑",
      description: "Kau SANGAT ready untuk serious relationship! All in, no holding back. Commitment bukan scary untuk kau, it's exciting. Kau nak build future dengan someone special.",
      traits: ["Commitment ready", "Future-focused", "All-in mentality", "Romantic"],
      strengths: ["Loyal partner", "Clear intentions", "Willing to work hard"],
      weaknesses: ["Might rush into things", "Can be too dependent"],
      tips: ["Make sure partner is equally ready", "Keep some independence"],
    },
    B: {
      type: "B",
      title: "Cautiously Ready",
      emoji: "🤔",
      description: "Kau open untuk commitment tapi dengan conditions. Practical approach - nak make sure semua stable dulu. Smart thinking, tapi jangan terlalu overthink!",
      traits: ["Practical", "Thoughtful", "Balanced", "Careful planner"],
      strengths: ["Make informed decisions", "Stable approach", "Good boundaries"],
      weaknesses: ["Might overthink", "Can seem hesitant to partner"],
      tips: ["Sometimes leap of faith okay", "Don't let fear stop love"],
    },
    C: {
      type: "C",
      title: "Freedom First",
      emoji: "🦋",
      description: "Commitment? Not right now, thanks. Kau value freedom dan independence lebih. Exploring life masih priority. Nothing wrong dengan tu - just be honest dengan partners!",
      traits: ["Independent", "Freedom-loving", "Self-focused", "Not ready yet"],
      strengths: ["Know what you want", "Honest with yourself", "Self-development focused"],
      weaknesses: ["Might hurt partners who want more", "Could miss good opportunities"],
      tips: ["Be upfront about intentions", "Stay open to change"],
    },
    D: {
      type: "D",
      title: "It Depends",
      emoji: "⚖️",
      description: "Commitment level kau depends on the person dan situation. Flexible approach - boleh commit kalau semua feels right. Kau adaptable dan realistic.",
      traits: ["Flexible", "Adaptable", "Situational", "Open-minded"],
      strengths: ["Not forcing anything", "Go with the flow", "Realistic expectations"],
      weaknesses: ["Can seem wishy-washy", "Partners might want clearer answers"],
      tips: ["Know your non-negotiables", "Communicate clearly"],
    },
  },
};

export default data;
