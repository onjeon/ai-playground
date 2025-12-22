// Perfect Match Kau
// Jenis orang macam mana yang perfect untuk kau?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-match-made-ms",
  title: "Perfect Match Kau",
  description: "Semua orang ada jodoh masing-masing. Tapi jenis orang macam mana yang sesuai dengan kau? Jom discover!",
  category: "cinta",
  emoji: "💞",
  color: "#EC4899",
  questions: [
    {
      id: 1,
      question: "Weekend ideal dengan partner?",
      options: [
        { text: "Adventure! Hiking, travel, explore", type: "A" },
        { text: "Productive! Gym, projects, self-improvement", type: "B" },
        { text: "Chill! Netflix, food, cuddle", type: "C" },
        { text: "Social! Parties, friends, events", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Kau prefer partner yang?",
      options: [
        { text: "Spontaneous dan fun-loving", type: "A" },
        { text: "Ambitious dan driven", type: "B" },
        { text: "Caring dan nurturing", type: "C" },
        { text: "Outgoing dan popular", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Communication style yang kau suka?",
      options: [
        { text: "Fun banter, jokes, light-hearted", type: "A" },
        { text: "Deep discussions, intellectual talks", type: "B" },
        { text: "Sweet, supportive, emotionally open", type: "C" },
        { text: "Social, expressive, energetic", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Apa yang buat kau fall for someone?",
      options: [
        { text: "Sense of adventure dan spontaneity", type: "A" },
        { text: "Intelligence dan ambition", type: "B" },
        { text: "Kindness dan warmth", type: "C" },
        { text: "Confidence dan charisma", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Future dengan partner, kau imagine?",
      options: [
        { text: "Travel the world together!", type: "A" },
        { text: "Build empire, achieve goals", type: "B" },
        { text: "Cozy home, family vibes", type: "C" },
        { text: "Active social life, always surrounded by friends", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Partner's hobby yang kau appreciate?",
      options: [
        { text: "Extreme sports, outdoor activities", type: "A" },
        { text: "Reading, learning, self-development", type: "B" },
        { text: "Cooking, arts, homey activities", type: "C" },
        { text: "Music, events, social activities", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Conflict resolution style yang match kau?",
      options: [
        { text: "Laugh it off, don't dwell", type: "A" },
        { text: "Logical discussion, find solution", type: "B" },
        { text: "Heart-to-heart, emotional understanding", type: "C" },
        { text: "Talk it out openly, involve trusted friends if needed", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Love language yang kau respond to?",
      options: [
        { text: "Quality time - adventures together", type: "A" },
        { text: "Acts of service - help me grow", type: "B" },
        { text: "Physical touch - cuddles and affection", type: "C" },
        { text: "Words of affirmation - public appreciation", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Partner's social circle - preference?",
      options: [
        { text: "Small but adventurous crew", type: "A" },
        { text: "Successful, motivated people", type: "B" },
        { text: "Close, warm family and friends", type: "C" },
        { text: "Wide network, knows everyone", type: "D" },
      ],
    },
    {
      id: 10,
      question: "What seals the deal untuk kau?",
      options: [
        { text: "They make life exciting!", type: "A" },
        { text: "We grow together and motivate each other", type: "B" },
        { text: "I feel safe and loved with them", type: "C" },
        { text: "Life is never boring, always happening", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "The Adventure Partner",
      emoji: "🏔️",
      description: "Perfect match kau adalah orang yang adventurous! Someone yang spontaneous, fun-loving, dan always ready for new experiences. Together, life is one big adventure!",
      traits: ["Need excitement", "Value spontaneity", "Love adventure", "Free spirit"],
      idealPartner: ["Adventurous", "Spontaneous", "Fun-loving", "Open-minded"],
      strengths: ["Never boring together", "Create amazing memories", "Push each other's limits"],
      tips: ["Balance dengan stability sometimes", "Routine can be grounding too"],
    },
    B: {
      type: "B",
      title: "The Power Partner",
      emoji: "💼",
      description: "Kau need someone yang ambitious dan driven! Perfect match adalah partner yang ada goals, motivated, dan constantly improving. Power couple goals!",
      traits: ["Goal-oriented", "Value ambition", "Growth mindset", "Success-driven"],
      idealPartner: ["Ambitious", "Intelligent", "Driven", "Supportive of goals"],
      strengths: ["Motivate each other", "Build empire together", "Respect each other's hustle"],
      tips: ["Remember to slow down together", "Success isn't everything"],
    },
    C: {
      type: "C",
      title: "The Comfort Partner",
      emoji: "🏠",
      description: "Perfect match kau adalah orang yang warm dan nurturing! Someone yang make you feel safe, loved, dan comfortable. Home is where they are.",
      traits: ["Value security", "Need emotional connection", "Homebody vibes", "Nurturing needed"],
      idealPartner: ["Caring", "Supportive", "Emotionally available", "Family-oriented"],
      strengths: ["Deep emotional bond", "Feel truly loved", "Build beautiful home together"],
      tips: ["Try new things together sometimes", "Growth happens outside comfort zone too"],
    },
    D: {
      type: "D",
      title: "The Social Partner",
      emoji: "🎉",
      description: "Kau need someone yang outgoing dan social! Perfect match adalah partner yang confident, popular, dan knows how to have a good time. Life of the party!",
      traits: ["Social butterfly", "Value popularity", "Love events", "Extroverted"],
      idealPartner: ["Charismatic", "Outgoing", "Confident", "Well-connected"],
      strengths: ["Active social life", "Never lonely", "Always something happening"],
      tips: ["Quality time alone matters too", "Deep connection beyond social scene"],
    },
  },
};

export default data;
