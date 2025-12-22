// Deal Breaker Kau
// Apa benda yang instant turn off untuk kau dalam relationship?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-dealbreaker-ms",
  title: "Deal Breaker Kau",
  description: "Semua orang ada deal breakers. Apa yang instant turn off untuk kau? Jom discover!",
  category: "cinta",
  emoji: "🚫",
  color: "#EF4444",
  questions: [
    {
      id: 1,
      question: "Mana satu paling INSTANT deal breaker?",
      options: [
        { text: "Dishonesty dan pembohong", type: "A" },
        { text: "No ambition, tak ada goals", type: "B" },
        { text: "Boring, tiada sense of humor", type: "C" },
        { text: "Tak caring, selfish", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Communication style yang turn off kau?",
      options: [
        { text: "Suka silent treatment", type: "A" },
        { text: "Malas reply, effort zero", type: "B" },
        { text: "Too serious, tak boleh bahan", type: "C" },
        { text: "Tak supportive, dismissive", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Attitude dengan family kau - deal breaker bila?",
      options: [
        { text: "Fake nice depan family", type: "A" },
        { text: "Tak ambitious enough for family approval", type: "B" },
        { text: "Boring, family tak click", type: "C" },
        { text: "Disrespectful atau rude", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Social media behavior yang annoying?",
      options: [
        { text: "Hide relationship, mysterious pasal kita", type: "A" },
        { text: "No goals, scroll je 24/7", type: "B" },
        { text: "Boring posts, no personality", type: "C" },
        { text: "Thirst traps while in relationship", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Financial habits yang tak boleh accept?",
      options: [
        { text: "Lie about money situation", type: "A" },
        { text: "No savings, no financial plans", type: "B" },
        { text: "Too kedekut, tak enjoy life", type: "C" },
        { text: "Selfish dengan money, never treat", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Past relationship baggage yang deal breaker?",
      options: [
        { text: "Hid that they were married/engaged before", type: "A" },
        { text: "Still financially tied to ex", type: "B" },
        { text: "Ex everywhere, tak boleh escape drama", type: "C" },
        { text: "Compare aku dengan ex constantly", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Future plans incompatibility yang worry kau?",
      options: [
        { text: "Lie about wanting/not wanting kids", type: "A" },
        { text: "Zero career direction", type: "B" },
        { text: "Want boring, routine life", type: "C" },
        { text: "Don't prioritize relationship growth", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Personal habits yang instant turn off?",
      options: [
        { text: "Secretly smoke/drink bila cakap tak", type: "A" },
        { text: "Lazy, no self-improvement", type: "B" },
        { text: "No hobbies, nothing interesting", type: "C" },
        { text: "Poor hygiene, tak jaga diri", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Treatment towards others yang concern kau?",
      options: [
        { text: "Two-faced dengan different people", type: "A" },
        { text: "Look down on service workers", type: "B" },
        { text: "Party pooper, kill vibes", type: "C" },
        { text: "Rude dan unkind generally", type: "D" },
      ],
    },
    {
      id: 10,
      question: "In conflict, apa yang unacceptable?",
      options: [
        { text: "Gaslight dan twist facts", type: "A" },
        { text: "Give up easily, no fight for us", type: "B" },
        { text: "Too dramatic, blow things up", type: "C" },
        { text: "Emotionally abusive, say hurtful things", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "Honesty is Everything",
      emoji: "🪞",
      description: "Untuk kau, TRUST adalah foundation. Any form of lying atau dishonesty adalah instant deal breaker. Kau nak partner yang transparent, authentic, dan tak ada hidden agenda.",
      traits: ["Value honesty", "Trust-focused", "Hate deception", "Need transparency"],
      strengths: ["Build genuine relationships", "Clear standards", "Protect yourself from liars"],
      weaknesses: ["Sometimes too suspicious", "Small white lies might bother too much"],
      tips: ["Balance with understanding", "Not everything is black and white"],
    },
    B: {
      type: "B",
      title: "Ambition Required",
      emoji: "🎯",
      description: "No drive, no deal! Kau nak partner yang ambitious, ada goals, dan constantly improving. Comfort zone adalah enemy. Together to the top atau bye!",
      traits: ["Value ambition", "Goal-oriented", "Hate complacency", "Growth mindset"],
      strengths: ["Motivate each other", "Build successful future", "Power couple potential"],
      weaknesses: ["Might seem too demanding", "Not everyone expresses ambition same way"],
      tips: ["Different people, different paths", "Support also means accepting"],
    },
    C: {
      type: "C",
      title: "Fun or Nothing",
      emoji: "🎉",
      description: "Life's too short untuk boring! Kau nak partner yang fun, spontaneous, dan make life interesting. If they can't make you laugh, what's the point?",
      traits: ["Value fun", "Need excitement", "Hate boredom", "Seek adventure"],
      strengths: ["Never dull relationship", "Create memories", "Enjoy life together"],
      weaknesses: ["Might avoid serious moments", "Fun fades, depth matters too"],
      tips: ["Balance fun dengan substance", "Serious times will come"],
    },
    D: {
      type: "D",
      title: "Care or Bye",
      emoji: "💕",
      description: "Kau nak partner yang genuinely CARE. Selfish, unkind, inconsiderate behavior adalah instant turn off. Loving, supportive, kind partner atau nothing!",
      traits: ["Value care", "Need kindness", "Hate selfishness", "Seek support"],
      strengths: ["Build loving relationship", "High emotional standards", "Nurturing environment"],
      weaknesses: ["Might be too needy", "Care looks different for everyone"],
      tips: ["Communicate your needs", "Recognize different love languages"],
    },
  },
};

export default data;
