// Cara Kau Express Sayang
// Macam mana kau tunjuk sayang kat partner?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-express-love-ms",
  title: "Cara Kau Express Sayang",
  description: "Love language semua orang berbeza! Kau express love macam mana? Through words ke actions?",
  category: "cinta",
  emoji: "💗",
  color: "#F43F5E",
  questions: [
    {
      id: 1,
      question: "Partner kau stress dengan kerja. Kau akan?",
      options: [
        { text: "Cakap supportive words, remind how great they are", type: "A" },
        { text: "Buat kerja rumah untuk dia, masak ke apa", type: "B" },
        { text: "Beli something untuk cheer dia up", type: "C" },
        { text: "Duduk temankan dia, be present", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Best way untuk kau tunjuk appreciation?",
      options: [
        { text: "Say \"Thank you, you're amazing!\"", type: "A" },
        { text: "Do something nice for them", type: "B" },
        { text: "Surprise dengan hadiah kecil", type: "C" },
        { text: "Plan special time together", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Bila partner achieve something, kau?",
      options: [
        { text: "Puji dan hype dia up!", type: "A" },
        { text: "Celebrate dengan buatkan dia something", type: "B" },
        { text: "Get a gift to commemorate", type: "C" },
        { text: "Plan celebration outing together", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Random Tuesday, kau nak show love. How?",
      options: [
        { text: "Send sweet good morning text", type: "A" },
        { text: "Surprise dengan breakfast in bed", type: "B" },
        { text: "Buy their favourite snack on the way home", type: "C" },
        { text: "Plan impromptu date night", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Partner feeling insecure. Response kau?",
      options: [
        { text: "Reassure dengan words of affirmation", type: "A" },
        { text: "Show through actions that I care", type: "B" },
        { text: "Get something meaningful to show I'm thinking of them", type: "C" },
        { text: "Spend undivided attention time with them", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Anniversary coming up. What's your move?",
      options: [
        { text: "Write heartfelt card atau letter", type: "A" },
        { text: "Plan everything - dinner, setup, everything perfect", type: "B" },
        { text: "Find the perfect gift yang dia mention nak", type: "C" },
        { text: "Book trip atau experience together", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Partner sakit. Kau express care macam mana?",
      options: [
        { text: "Constant check-in texts, sweet words", type: "A" },
        { text: "Cook soup, ambil ubat, jaga sampai sihat", type: "B" },
        { text: "Buy medicines, fruits, things they need", type: "C" },
        { text: "Stay by their side, cancel all plans", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Long distance relationship, how kau maintain love?",
      options: [
        { text: "Daily calls, voice notes, love messages", type: "A" },
        { text: "Help dari jauh - pay bills, order food", type: "B" },
        { text: "Send care packages dan surprises", type: "C" },
        { text: "Plan visits, video dates every day", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Nak make partner feel special. Pilih mana?",
      options: [
        { text: "Tell them exactly why they're special", type: "A" },
        { text: "Do their chores atau errands", type: "B" },
        { text: "Surprise dengan something they've been wanting", type: "C" },
        { text: "Give them full day of your time", type: "D" },
      ],
    },
    {
      id: 10,
      question: "After a fight, how kau make up?",
      options: [
        { text: "Apologize dengan words, explain feelings", type: "A" },
        { text: "Make their favourite food as peace offering", type: "B" },
        { text: "Get apology gift atau flowers", type: "C" },
        { text: "Spend time together, reconnect", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "Words of Affirmation",
      emoji: "💬",
      description: "Kau express love through WORDS! Compliments, encouragement, \"I love you\"s - verbal expression adalah cara kau show sayang. Partner kau sentiasa dengar betapa special mereka.",
      traits: ["Verbal", "Expressive", "Encouraging", "Communicative"],
      strengths: ["Partner knows exactly how you feel", "Great at comforting with words", "Build emotional connection"],
      weaknesses: ["Actions might not match words sometimes", "Some prefer actions over words"],
      tips: ["Back up words dengan actions", "Remember actions speak too"],
    },
    B: {
      type: "B",
      title: "Acts of Service",
      emoji: "🛠️",
      description: "Actions speak louder than words untuk kau! Kau tunjuk love dengan BUAT things - masak, tolong, handle problems. Love is in the doing!",
      traits: ["Helpful", "Practical", "Reliable", "Action-oriented"],
      strengths: ["Tangible proof of love", "Make partner's life easier", "Dependable"],
      weaknesses: ["Might forget verbal affirmation", "Can seem like routine"],
      tips: ["Say I love you sometimes too", "Explain why you do things"],
    },
    C: {
      type: "C",
      title: "Gift Giving",
      emoji: "🎁",
      description: "Kau express love through GIFTS! Not about price - about thought. Kau pay attention apa partner suka dan surprise dengan meaningful presents.",
      traits: ["Thoughtful", "Generous", "Observant", "Celebratory"],
      strengths: ["Make partner feel remembered", "Good at surprises", "Tangible reminders of love"],
      weaknesses: ["Can seem materialistic", "Not everyone values gifts same way"],
      tips: ["Balance gifts dengan other expressions", "Quality time matters too"],
    },
    D: {
      type: "D",
      title: "Quality Time",
      emoji: "⏰",
      description: "Your love language adalah TIME! Being present, undivided attention, shared experiences - that's how you show love. When you love, you MAKE time.",
      traits: ["Present", "Attentive", "Experience-focused", "Dedicated"],
      strengths: ["Build deep connection", "Partner feels prioritized", "Create memories together"],
      weaknesses: ["Might struggle bila busy", "Could neglect other love languages"],
      tips: ["Express love verbally too", "Small gestures between quality time"],
    },
  },
};

export default data;
