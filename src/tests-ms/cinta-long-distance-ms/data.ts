// Boleh Handle LDR?
// Test kemampuan kau survive long distance relationship

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-long-distance-ms",
  title: "Boleh Handle LDR?",
  description: "Long Distance Relationship bukan untuk semua orang. Kau ada apa yang diperlukan untuk survive LDR?",
  category: "cinta",
  emoji: "🌍",
  color: "#3B82F6",
  questions: [
    {
      id: 1,
      question: "Partner kena pindah overseas untuk kerja. Response?",
      options: [
        { text: "Let's do LDR! We can make it work", type: "A" },
        { text: "Worried tapi willing to try", type: "B" },
        { text: "Very hesitant, prefer end things", type: "C" },
        { text: "No way, LDR will fail anyway", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Communication expectation dalam LDR?",
      options: [
        { text: "Daily video calls, constant texting!", type: "A" },
        { text: "Regular calls tapi flexible", type: "B" },
        { text: "When free je, no pressure", type: "C" },
        { text: "Hard to maintain, will fade", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Tak jumpa partner sebulan. Feel macam mana?",
      options: [
        { text: "Rindu gila tapi boleh handle!", type: "A" },
        { text: "Challenging tapi manageable", type: "B" },
        { text: "Really struggle, need physical presence", type: "C" },
        { text: "Probably dah cool down by then", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Trust level kau dalam LDR?",
      options: [
        { text: "100% trust, no doubts", type: "A" },
        { text: "High trust with occasional worries", type: "B" },
        { text: "Suspicious, hard to trust dari jauh", type: "C" },
        { text: "LDR = recipe for cheating", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Partner busy, tak dapat call for few days. Kau?",
      options: [
        { text: "Understand! Send love texts for later", type: "A" },
        { text: "Miss them tapi respect their time", type: "B" },
        { text: "Feel neglected dan worried", type: "C" },
        { text: "Probably start checking out", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Creative ways nak maintain connection?",
      options: [
        { text: "Movie nights online, games together, surprise gifts!", type: "A" },
        { text: "Some ideas, willing to try", type: "B" },
        { text: "Texting cukup la", type: "C" },
        { text: "Too much effort for LDR", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Time zone difference - problem ke?",
      options: [
        { text: "We'll figure out schedule!", type: "A" },
        { text: "Challenging tapi can adjust", type: "B" },
        { text: "Big problem honestly", type: "C" },
        { text: "Deal breaker", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Sanggup spend money untuk flights to visit?",
      options: [
        { text: "Save every penny untuk meet!", type: "A" },
        { text: "Budget carefully, prioritize visits", type: "B" },
        { text: "Expensive, limit visits", type: "C" },
        { text: "Too expensive, not worth it", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Independence dalam LDR - okay ke?",
      options: [
        { text: "Yes! Grow independently, love together", type: "A" },
        { text: "Good balance needed", type: "B" },
        { text: "Prefer to be together, share life", type: "C" },
        { text: "We'll drift apart for sure", type: "D" },
      ],
    },
    {
      id: 10,
      question: "End goal of LDR - apa?",
      options: [
        { text: "Eventually sama location, committed!", type: "A" },
        { text: "Work towards reunion, hopeful", type: "B" },
        { text: "Uncertain, see how it goes", type: "C" },
        { text: "Probably won't last that long", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "LDR Champion",
      emoji: "🏆",
      description: "Kau MADE for LDR! Strong trust, creative connection, dan clear end goal. Distance is just a test dan kau willing to ace it. Love conquers all for you!",
      traits: ["Committed", "Trusting", "Creative", "Goal-oriented"],
      strengths: ["Can maintain connection", "Independent yet devoted", "Long-term vision"],
      weaknesses: ["Might idealize relationship", "Physical distance still hurts"],
      tips: ["Stay realistic", "Plan regular visits"],
    },
    B: {
      type: "B",
      title: "LDR Capable",
      emoji: "💪",
      description: "Kau boleh handle LDR with effort! Not your preference tapi willing to make it work untuk right person. Realistic approach dengan healthy commitment.",
      traits: ["Adaptable", "Realistic", "Committed", "Balanced"],
      strengths: ["Practical approach", "Willing to try", "Good communication"],
      weaknesses: ["Might struggle during hard times", "Need consistent effort"],
      tips: ["Keep communication open", "Set milestones dan goals"],
    },
    C: {
      type: "C",
      title: "LDR Challenged",
      emoji: "😰",
      description: "LDR is really hard untuk kau. Need physical presence dan constant connection. Not impossible tapi really challenging. Know your limits!",
      traits: ["Needs presence", "Attachment-focused", "Insecure in distance", "Preference for proximity"],
      strengths: ["Know yourself", "Value physical connection", "Honest about needs"],
      weaknesses: ["LDR akan be struggle", "Trust issues possible", "Might end prematurely"],
      tips: ["Short-term LDR might be okay", "Work on trust dan independence"],
    },
    D: {
      type: "D",
      title: "Not For LDR",
      emoji: "🚫",
      description: "LDR bukan untuk kau, and that's okay! Kau need proximity, presence, dan tangible connection. Better to know this than force something yang tak suit you.",
      traits: ["Proximity-required", "Realistic", "Present-focused", "Physical connection needed"],
      strengths: ["Self-aware", "Won't drag unsuitable relationship", "Clear about needs"],
      weaknesses: ["Might miss opportunities", "Limited flexibility"],
      tips: ["That's valid!", "Find partners within reach", "Or try building LDR muscles slowly"],
    },
  },
};

export default data;
