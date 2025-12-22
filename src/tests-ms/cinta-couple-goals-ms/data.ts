// Couple Goals Level Kau
// Seberapa couple goals relationship kau?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-couple-goals-ms",
  title: "Couple Goals Level Kau",
  description: "Semua orang nak jadi couple goals! Tapi sebenarnya level couple goals kau dekat mana? Jom check!",
  category: "cinta",
  emoji: "👫",
  color: "#F472B6",
  questions: [
    {
      id: 1,
      question: "Matching outfits dengan partner - yay or nay?",
      options: [
        { text: "YAY! Sentiasa match bila keluar", type: "A" },
        { text: "Sometimes, bila special occasions", type: "B" },
        { text: "Rarely, subtle coordination je", type: "C" },
        { text: "Never, each to their own style", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Post pasal partner kat social media?",
      options: [
        { text: "All the time! Everyone must know", type: "A" },
        { text: "Regularly, tapi not everything", type: "B" },
        { text: "Special occasions je", type: "C" },
        { text: "Rarely atau never, keep private", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Surprise dates dan gestures?",
      options: [
        { text: "Plan elaborate surprises selalu!", type: "A" },
        { text: "Occasionally, bila feel romantic", type: "B" },
        { text: "Simple surprises je", type: "C" },
        { text: "Not really into surprises", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Pet names untuk each other?",
      options: [
        { text: "So many! Baby, sayang, honey, etc", type: "A" },
        { text: "A few cute ones", type: "B" },
        { text: "One atau two, simple", type: "C" },
        { text: "Just nama biasa", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Anniversary celebration level?",
      options: [
        { text: "GRAND! Trip, gifts, the whole thing", type: "A" },
        { text: "Nice dinner dan thoughtful gift", type: "B" },
        { text: "Simple celebration je", type: "C" },
        { text: "Acknowledge je, nothing big", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Couple activities together?",
      options: [
        { text: "Everything! Gym, hobbies, all together", type: "A" },
        { text: "Share some hobbies, have own too", type: "B" },
        { text: "A few activities together", type: "C" },
        { text: "Mostly do own things", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Meeting each other's family?",
      options: [
        { text: "Super close dengan both families!", type: "A" },
        { text: "Good relationship, regular visits", type: "B" },
        { text: "Met them, casual relationship", type: "C" },
        { text: "Minimal interaction", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Future planning together?",
      options: [
        { text: "Planned everything - wedding, house, kids!", type: "A" },
        { text: "Discussed major things, flexible on details", type: "B" },
        { text: "Some discussions, taking it slow", type: "C" },
        { text: "Not really discussed yet", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Support for each other's dreams?",
      options: [
        { text: "100% support, sacrifice if needed!", type: "A" },
        { text: "Very supportive dengan healthy boundaries", type: "B" },
        { text: "Supportive tapi prioritize own too", type: "C" },
        { text: "We have separate goals mostly", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Communication level?",
      options: [
        { text: "Share EVERYTHING, no secrets at all", type: "A" },
        { text: "Very open, some privacy okay", type: "B" },
        { text: "Share important things", type: "C" },
        { text: "Keep some things to self", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "Ultimate Couple Goals",
      emoji: "👑",
      description: "OMG maximum couple goals! Kau dan partner adalah THE couple yang semua orang jealous. Matching everything, grand gestures, total devotion. #RelationshipGoals AF!",
      traits: ["Super devoted", "Public couple", "All-in", "Romantic AF"],
      strengths: ["Strong visible bond", "Make memories", "Partner feels super loved"],
      weaknesses: ["Might lose individual identity", "Can seem too much", "Pressure to maintain image"],
      tips: ["Keep some things private", "Individual identity matters too"],
    },
    B: {
      type: "B",
      title: "Balanced Couple Goals",
      emoji: "💑",
      description: "Sweet spot of couple goals! Romantic bila perlu, practical bila sesuai. Kau ada good balance between couple life dan individual identity. Healthy dan sustainable!",
      traits: ["Balanced", "Healthy romance", "Practical", "Sustainable"],
      strengths: ["Long-lasting relationship", "Healthy boundaries", "Real connection"],
      weaknesses: ["Sometimes play it safe", "Could be more spontaneous"],
      tips: ["Push boundaries sometimes", "Surprise each other more"],
    },
    C: {
      type: "C",
      title: "Subtle Couple Goals",
      emoji: "🌸",
      description: "Low-key couple goals! Kau tak shout dari rooftop, tapi relationship kau solid. Quality over quantity, substance over show. Real love tak perlu prove to anyone.",
      traits: ["Private", "Genuine", "Subtle", "Quality-focused"],
      strengths: ["Authentic connection", "No pressure", "Real intimacy"],
      weaknesses: ["Partner might want more romance", "Miss cute moments"],
      tips: ["Express love more openly sometimes", "Little gestures go long way"],
    },
    D: {
      type: "D",
      title: "Independent Together",
      emoji: "🦅",
      description: "Kau value independence even dalam relationship! Together tapi not attached at hip. Each person maintain own identity. Modern relationship style!",
      traits: ["Independent", "Individual-focused", "Modern", "Space-respecting"],
      strengths: ["Healthy independence", "No codependency", "Personal growth"],
      weaknesses: ["Might seem disconnected", "Partner might want more togetherness"],
      tips: ["Show couple-y side sometimes", "Create shared experiences"],
    },
  },
};

export default data;
