// Green Flag Apa Yang Kau Cari
// Apa qualities yang paling penting untuk kau dalam partner?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-green-flag-ms",
  title: "Green Flag Apa Yang Kau Cari",
  description: "Semua orang cari benda berbeza dalam partner. Apa green flags yang paling attract kau?",
  category: "cinta",
  emoji: "💚",
  color: "#10B981",
  questions: [
    {
      id: 1,
      question: "Quality mana yang paling penting dalam partner?",
      options: [
        { text: "Communicate well dan honest", type: "A" },
        { text: "Ambitious dan driven", type: "B" },
        { text: "Funny dan entertaining", type: "C" },
        { text: "Caring dan supportive", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Kau nak partner yang macam mana dengan family kau?",
      options: [
        { text: "Respect dan polite dengan family", type: "A" },
        { text: "Buat family impressed dengan achievement", type: "B" },
        { text: "Boleh vibe dengan family, macam kawan", type: "C" },
        { text: "Sayang family kau macam family sendiri", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Bila ada conflict, kau nak partner yang?",
      options: [
        { text: "Boleh discuss calmly dan find solution", type: "A" },
        { text: "Admit mistake dan improve", type: "B" },
        { text: "Buat lawak untuk ease tension", type: "C" },
        { text: "Peluk dan reassure sayang", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Green flag terbesar untuk kau?",
      options: [
        { text: "Dia ingat small details pasal kau", type: "A" },
        { text: "Dia ada goals dan work hard", type: "B" },
        { text: "Dia buat kau gelak non-stop", type: "C" },
        { text: "Dia always check on kau", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Macam mana dia patut treat kawan-kawan kau?",
      options: [
        { text: "Respectful dan inclusive", type: "A" },
        { text: "Impressive dan charming", type: "B" },
        { text: "Fun dan blend in well", type: "C" },
        { text: "Friendly dan genuine", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Kau appreciate bila partner?",
      options: [
        { text: "Dengar kau vent tanpa judge", type: "A" },
        { text: "Push kau untuk jadi lebih baik", type: "B" },
        { text: "Plan surprise dan buat hidup exciting", type: "C" },
        { text: "Sentiasa ada bila kau perlukan", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Sign yang dia serious dengan kau?",
      options: [
        { text: "Dia transparent pasal everything", type: "A" },
        { text: "Dia include kau dalam future plans", type: "B" },
        { text: "Dia introduce kau kat semua orang", type: "C" },
        { text: "Dia prioritize masa dengan kau", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Bila kau sakit, kau nak partner yang?",
      options: [
        { text: "Update status dan tanya apa perlu", type: "A" },
        { text: "Terus ambil cuti dan bawak jumpa doctor", type: "B" },
        { text: "Buat kau gelak walaupun tak sihat", type: "C" },
        { text: "Jaga kau 24/7 sampai sihat", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Apa yang buat kau rasa valued?",
      options: [
        { text: "Dia dengar opinion kau dan consider", type: "A" },
        { text: "Dia proud dan show off pasal kau", type: "B" },
        { text: "Dia always include kau dalam activities", type: "C" },
        { text: "Dia express sayang consistently", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Long-term, kau nak partner yang?",
      options: [
        { text: "Boleh grow together dan communicate", type: "A" },
        { text: "Build empire sama-sama", type: "B" },
        { text: "Keep relationship fun dan spontaneous", type: "C" },
        { text: "Create warm, loving home", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "Communication Champion",
      emoji: "💬",
      description: "Untuk kau, communication is EVERYTHING! Kau cari partner yang boleh talk about anything, honest, dan good listener. Emotional intelligence paling attract kau.",
      traits: ["Value honesty", "Need open communication", "Appreciate EQ", "Logical approach"],
      strengths: ["Build strong foundation", "Avoid misunderstandings", "Healthy conflict resolution"],
      weaknesses: ["Might overthink conversations", "Can be too analytical about feelings"],
      tips: ["Actions matter too", "Balance talking dengan doing"],
    },
    B: {
      type: "B",
      title: "Ambition Admirer",
      emoji: "🚀",
      description: "Kau suka partner yang ada drive! Goal-oriented, ambitious, dan constantly improving. Power couple vibes is your thing. Together to the top!",
      traits: ["Value ambition", "Attracted to success", "Goal-oriented", "Growth mindset"],
      strengths: ["Motivate each other", "Build successful future", "Never settle for less"],
      weaknesses: ["Might prioritize achievement over emotions", "Can be too competitive"],
      tips: ["Remember to slow down", "Appreciate present moments"],
    },
    C: {
      type: "C",
      title: "Fun Finder",
      emoji: "🎉",
      description: "Life's too short untuk boring relationship! Kau cari someone yang buat kau gelak, spontaneous, dan make every day an adventure. Good vibes only!",
      traits: ["Value humor", "Love spontaneity", "Seek excitement", "Social butterfly"],
      strengths: ["Never dull", "Create happy memories", "Keep relationship fresh"],
      weaknesses: ["Might avoid serious topics", "Can struggle with deep conversations"],
      tips: ["Balance fun dengan depth", "Build emotional connection too"],
    },
    D: {
      type: "D",
      title: "Care Craver",
      emoji: "🤗",
      description: "Kau nak partner yang truly CARE about kau! Someone yang prioritize kau, always there, dan buat kau feel safe dan loved. Quality time is everything.",
      traits: ["Value care", "Need attention", "Appreciate effort", "Emotionally driven"],
      strengths: ["Deep emotional bond", "Feel truly loved", "Secure relationship"],
      weaknesses: ["Can be too dependent", "Might need constant reassurance"],
      tips: ["Maintain some independence", "Learn to self-soothe too"],
    },
  },
};

export default data;
