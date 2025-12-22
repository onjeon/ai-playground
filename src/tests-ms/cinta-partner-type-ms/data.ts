// Jenis Partner Apa Kau
// Kau jenis partner macam mana dalam relationship?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-partner-type-ms",
  title: "Jenis Partner Apa Kau",
  description: "Ada macam-macam jenis partner dalam relationship. Kau jenis yang clingy ke independent? Jom find out!",
  category: "cinta",
  emoji: "💑",
  color: "#F472B6",
  questions: [
    {
      id: 1,
      question: "Kau contact partner berapa kerap sehari?",
      options: [
        { text: "Non-stop! Good morning sampai good night", type: "A" },
        { text: "A few times, update pasal hari", type: "B" },
        { text: "Bila ada benda nak share je", type: "C" },
        { text: "Tak tentu, depends on mood", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Partner kau busy dengan kerja/study. Kau?",
      options: [
        { text: "Sedih, nak attention jugak", type: "A" },
        { text: "Support dia, tapi harap ada masa untuk kita", type: "B" },
        { text: "Perfect, aku pun boleh buat hal sendiri", type: "C" },
        { text: "Mixed feelings, depends how long", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Quality time untuk kau adalah?",
      options: [
        { text: "Setiap hari together, must", type: "A" },
        { text: "Regular dates, at least sekali seminggu", type: "B" },
        { text: "Bila-bila, no pressure", type: "C" },
        { text: "Quality over quantity", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Kau share everything dengan partner?",
      options: [
        { text: "EVERYTHING! No secrets langsung", type: "A" },
        { text: "Most things, some privacy okay", type: "B" },
        { text: "Important things je", type: "C" },
        { text: "Depends what it is", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Partner kau keluar dengan kawan tanpa kau. Feel?",
      options: [
        { text: "Sedih, kenapa tak ajak?", type: "A" },
        { text: "Okay, tapi miss dia la", type: "B" },
        { text: "Good for dia! Aku pun ada life", type: "C" },
        { text: "Fine, as long as they're not too often", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Cara kau show love?",
      options: [
        { text: "Words of affirmation, cakap sayang selalu", type: "A" },
        { text: "Acts of service, buat benda untuk dia", type: "B" },
        { text: "Quality time, be present bila together", type: "C" },
        { text: "Mix of everything depends on mood", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Decision making dalam relationship?",
      options: [
        { text: "Always together, discuss everything", type: "A" },
        { text: "Big decisions together, small ones independent", type: "B" },
        { text: "Mostly make own decisions", type: "C" },
        { text: "Whoever has stronger opinion leads", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Bila partner kau sedih, kau?",
      options: [
        { text: "Drop everything, be there 100%", type: "A" },
        { text: "Support dan comfort, give space if needed", type: "B" },
        { text: "Be there tapi let them process", type: "C" },
        { text: "Ask what they need, follow their lead", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Individual hobbies dalam relationship?",
      options: [
        { text: "Prefer buat semua together", type: "A" },
        { text: "Have some, tapi share most", type: "B" },
        { text: "Important! Need my own thing", type: "C" },
        { text: "Balance between together dan apart", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Future planning dengan partner?",
      options: [
        { text: "Plan every detail together", type: "A" },
        { text: "Discuss big goals, flexible on details", type: "B" },
        { text: "Have own goals, align where needed", type: "C" },
        { text: "Go with the flow, see how things develop", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "The Devoted Partner",
      emoji: "🥰",
      description: "Kau all-in bila dalam relationship! Partner adalah everything dan kau dedicate fully. Super loving, attentive, dan always there. Your love is intense!",
      traits: ["Devoted", "Attentive", "Loving", "Present"],
      strengths: ["Partner feels loved", "Never doubt your commitment", "Prioritize relationship"],
      weaknesses: ["Can be clingy", "Might lose self-identity", "Need constant reassurance"],
      tips: ["Maintain own interests", "Give partner space to breathe"],
    },
    B: {
      type: "B",
      title: "The Balanced Partner",
      emoji: "⚖️",
      description: "Kau balance between couple time dan me time. Healthy approach to relationship - committed tapi still maintain individuality. Best of both worlds!",
      traits: ["Balanced", "Supportive", "Healthy boundaries", "Committed"],
      strengths: ["Sustainable relationship", "Respect boundaries", "Grow together and apart"],
      weaknesses: ["Sometimes torn between choices", "Might seem not fully invested"],
      tips: ["Keep communicating needs", "Stay consistent"],
    },
    C: {
      type: "C",
      title: "The Independent Partner",
      emoji: "🦅",
      description: "Freedom dalam relationship penting untuk kau! Kau love partner tapi also value space dan independence. Partner adalah part of life, not whole life.",
      traits: ["Independent", "Self-sufficient", "Freedom-loving", "Secure"],
      strengths: ["No codependency", "Healthy self-identity", "Low maintenance"],
      weaknesses: ["Partner might feel neglected", "Can seem distant"],
      tips: ["Show affection more", "Make partner feel wanted"],
    },
    D: {
      type: "D",
      title: "The Adaptive Partner",
      emoji: "🌊",
      description: "Kau flexible dan adaptive dalam relationship. Style kau depends on partner dan situation. Chameleon of love - adjust to make things work!",
      traits: ["Flexible", "Adaptive", "Easy-going", "Accommodating"],
      strengths: ["Compatible dengan many types", "Go with the flow", "Low conflict"],
      weaknesses: ["Might lose own preferences", "Can be too accommodating"],
      tips: ["Know what you want", "Don't lose yourself in relationship"],
    },
  },
};

export default data;
