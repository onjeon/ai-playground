// Gaya First Date Kau
// Macam mana kau bila first date?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-first-date-ms",
  title: "Gaya First Date Kau",
  description: "First date tu nervous gila kan? Tapi kau handle macam mana? Confident ke awkward? Jom check!",
  category: "cinta",
  emoji: "🌹",
  color: "#F43F5E",
  questions: [
    {
      id: 1,
      question: "Preparation untuk first date kau macam mana?",
      options: [
        { text: "Start prepare dari sehari before!", type: "A" },
        { text: "Normal je, pick outfit masa tu", type: "B" },
        { text: "Last minute rush biasanya", type: "C" },
        { text: "Tak banyak prepare, be myself je", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Sampai kat venue, first thing kau buat?",
      options: [
        { text: "Check mirror berkali-kali, nervous!", type: "A" },
        { text: "Deep breath, calm down", type: "B" },
        { text: "Terus scan for my date", type: "C" },
        { text: "Confident je walk in", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Conversation on first date?",
      options: [
        { text: "Aku prepare topics beforehand", type: "A" },
        { text: "Go with the flow, see what comes up", type: "B" },
        { text: "Usually dia yang banyak cakap", type: "C" },
        { text: "Aku lead conversation, quite talkative", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Awkward silence masa date. Kau?",
      options: [
        { text: "Panic! Quick, find something to say", type: "A" },
        { text: "Okay je, comfortable with silence", type: "B" },
        { text: "Check phone kejap cover awkwardness", type: "C" },
        { text: "Make joke pasal the silence", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Date kau tak macam expectation. Response?",
      options: [
        { text: "Disappointed, tapi stay polite", type: "A" },
        { text: "Give them a chance, maybe nervous", type: "B" },
        { text: "Cut short, no point waste time", type: "C" },
        { text: "Make the best of it anyway", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Who pays on first date?",
      options: [
        { text: "Offer to pay, tunjuk gentleman/lady", type: "A" },
        { text: "Expect them to pay honestly", type: "B" },
        { text: "Split! Fair for everyone", type: "C" },
        { text: "Siapa ajak, dia bayar", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Physical contact on first date?",
      options: [
        { text: "Minimal, handshake je", type: "A" },
        { text: "Light touches kalau vibe bagus", type: "B" },
        { text: "Comfortable dengan hug if click", type: "C" },
        { text: "Depends on chemistry yang night tu", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Lepas date habis, kau?",
      options: [
        { text: "Text terus \"I had fun!\"", type: "A" },
        { text: "Wait few hours then text", type: "B" },
        { text: "Wait for them to text first", type: "C" },
        { text: "Depends macam mana date pergi", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Kau cerita kat kawan pasal date?",
      options: [
        { text: "Every single detail!", type: "A" },
        { text: "Highlights je, not everything", type: "B" },
        { text: "Sikit-sikit, keep it private", type: "C" },
        { text: "Depends outcome good ke bad", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Second date - bila kau ready?",
      options: [
        { text: "ASAP if first date bagus!", type: "A" },
        { text: "Within the week", type: "B" },
        { text: "Bagi gap sikit, don't rush", type: "C" },
        { text: "Let them ask this time", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "The Nervous Planner",
      emoji: "😰",
      description: "First date buat kau nervous gila! Kau prepare everything - outfit, topics, perfect timing. Butterflies dalam perut dari pagi sampai date habis. Tapi effort kau sweet!",
      traits: ["Nervous", "Prepared", "Thoughtful", "Invested"],
      strengths: ["Show effort", "Rarely awkward moments", "Date feels special"],
      weaknesses: ["Over-prepare", "Can't relax fully", "Might seem too eager"],
      tips: ["Breathe and be yourself", "Imperfection is charming too"],
    },
    B: {
      type: "B",
      title: "The Easy Goer",
      emoji: "😊",
      description: "Kau chill je bila first date! Not too nervous, not too casual. Balance yang nice - show interest tapi tak overwhelming. Natural vibes all the way.",
      traits: ["Relaxed", "Natural", "Adaptable", "Pleasant"],
      strengths: ["Make date feel comfortable", "Good conversation", "Genuine connection"],
      weaknesses: ["Sometimes too laid-back", "Might miss signals"],
      tips: ["Show enthusiasm when needed", "Take initiative sometimes"],
    },
    C: {
      type: "C",
      title: "The Reserved One",
      emoji: "🤐",
      description: "Kau more quiet dan reserved on first dates. Take time to warm up dan prefer listen more than talk. Mystery is your appeal, tapi might seem shy.",
      traits: ["Reserved", "Observant", "Quiet", "Mysterious"],
      strengths: ["Good listener", "Don't overshare", "Thoughtful responses"],
      weaknesses: ["Hard to read", "Date might think you're not interested"],
      tips: ["Open up more", "Share about yourself too"],
    },
    D: {
      type: "D",
      title: "The Confident Charmer",
      emoji: "😎",
      description: "First date? No sweat! Kau confident, fun, dan know how to make things interesting. Lead conversations, crack jokes, dan leave good impression. Date pro!",
      traits: ["Confident", "Charming", "Fun", "Engaging"],
      strengths: ["Great first impression", "No awkward moments", "Memorable dates"],
      weaknesses: ["Might seem overconfident", "Can come on strong"],
      tips: ["Let date shine too", "Listen as much as talk"],
    },
  },
};

export default data;
