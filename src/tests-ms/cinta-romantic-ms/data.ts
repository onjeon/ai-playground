// Level Romantik Kau
// Seberapa romantik kau dalam relationship?

import { TestData } from "../../types";

const data: TestData = {
  id: "cinta-romantic-ms",
  title: "Level Romantik Kau",
  description: "Ada yang hopeless romantic, ada yang zero romance. Kau kat mana dalam spectrum ni?",
  category: "cinta",
  emoji: "💘",
  color: "#F472B6",
  questions: [
    {
      id: 1,
      question: "Anniversary dengan partner, kau plan apa?",
      options: [
        { text: "Full surprise! Candles, flowers, dinner fancy", type: "A" },
        { text: "Nice dinner dan gift thoughtful", type: "B" },
        { text: "Casual celebration je, nothing too extra", type: "C" },
        { text: "Anniversary? Biasa je, another day", type: "D" },
      ],
    },
    {
      id: 2,
      question: "Kau bagi surprise kat partner tak?",
      options: [
        { text: "All the time! Love seeing them happy", type: "A" },
        { text: "Special occasions je", type: "B" },
        { text: "Rarely, not really my thing", type: "C" },
        { text: "Never, too much effort", type: "D" },
      ],
    },
    {
      id: 3,
      question: "Public display of affection (PDA) - okay ke?",
      options: [
        { text: "Yes! Kiss, peluk, semua okay", type: "A" },
        { text: "Holding hands, light kisses okay", type: "B" },
        { text: "Minimal, private person", type: "C" },
        { text: "Absolutely not, keep it private", type: "D" },
      ],
    },
    {
      id: 4,
      question: "Love letters atau romantic texts?",
      options: [
        { text: "Write them all the time!", type: "A" },
        { text: "Sometimes, bila feel romantic", type: "B" },
        { text: "Not really, express differently", type: "C" },
        { text: "Never, too cheesy", type: "D" },
      ],
    },
    {
      id: 5,
      question: "Romantic movie/drama - kau layan?",
      options: [
        { text: "LOVE THEM! Nangis pun nangis la", type: "A" },
        { text: "Enjoy kadang-kadang", type: "B" },
        { text: "Not my preference tapi boleh la", type: "C" },
        { text: "Avoid at all costs, boring", type: "D" },
      ],
    },
    {
      id: 6,
      question: "Valentine's Day untuk kau adalah?",
      options: [
        { text: "The BEST day! Plan besar-besaran", type: "A" },
        { text: "Nice to celebrate, do something special", type: "B" },
        { text: "Just another day honestly", type: "C" },
        { text: "Commercial nonsense, skip", type: "D" },
      ],
    },
    {
      id: 7,
      question: "Cakap \"I love you\" - how often?",
      options: [
        { text: "Every day, multiple times!", type: "A" },
        { text: "Regularly, when I feel it", type: "B" },
        { text: "Occasionally, bila special", type: "C" },
        { text: "Rarely, actions speak louder", type: "D" },
      ],
    },
    {
      id: 8,
      question: "Slow dance with partner?",
      options: [
        { text: "Romantic gila! Do it often", type: "A" },
        { text: "Nice bila ada occasion", type: "B" },
        { text: "Awkward sikit, but okay", type: "C" },
        { text: "Hard pass, not for me", type: "D" },
      ],
    },
    {
      id: 9,
      question: "Random flowers atau gifts?",
      options: [
        { text: "Love giving AND receiving!", type: "A" },
        { text: "Appreciate it, do it sometimes", type: "B" },
        { text: "Not necessary but nice", type: "C" },
        { text: "Waste of money honestly", type: "D" },
      ],
    },
    {
      id: 10,
      question: "Dream date scenario?",
      options: [
        { text: "Sunset beach dinner dengan live music", type: "A" },
        { text: "Nice restaurant dan walk under stars", type: "B" },
        { text: "Chill somewhere, good conversation", type: "C" },
        { text: "Whatever, as long as we're together", type: "D" },
      ],
    },
  ],
  results: {
    A: {
      type: "A",
      title: "Hopeless Romantic",
      emoji: "💖",
      description: "Kau MAXIMUM romance! Grand gestures, surprise dates, love letters - semua kau buat. Partner kau very lucky sebab kau treat love like a fairytale!",
      traits: ["Ultra romantic", "Expressive", "Grand gestures", "Love-focused"],
      strengths: ["Make partner feel special", "Create magical moments", "Never boring"],
      weaknesses: ["High expectations", "Might overwhelm partner", "Disappointed if not reciprocated"],
      tips: ["Match partner's love language", "Appreciate practical love too"],
    },
    B: {
      type: "B",
      title: "Balanced Romantic",
      emoji: "💝",
      description: "Kau romantic tapi dalam cara yang balanced. Sweet bila perlu, practical bila sesuai. Perfect mix of romance dan realism. Partner appreciate ni!",
      traits: ["Balanced", "Thoughtful", "Moderate romance", "Practical"],
      strengths: ["Sustainable romance", "Appropriate gestures", "Comfortable pace"],
      weaknesses: ["Sometimes play it too safe", "Could be more spontaneous"],
      tips: ["Surprise partner randomly sometimes", "Push boundaries occasionally"],
    },
    C: {
      type: "C",
      title: "Low-Key Lover",
      emoji: "😌",
      description: "Romance bukan strong suit kau, tapi you show love differently. Quality time, practical help, being there - that's how you express. Subtle but meaningful.",
      traits: ["Subtle", "Practical", "Low-key", "Action-oriented"],
      strengths: ["Genuine love", "No pressure", "Reliable"],
      weaknesses: ["Partner might feel under-appreciated", "Miss romantic moments"],
      tips: ["Step out of comfort zone sometimes", "Words matter too"],
    },
    D: {
      type: "D",
      title: "Romance? What Romance?",
      emoji: "🤷",
      description: "Kau sangat practical pasal love. Romance seems unnecessary atau awkward untuk kau. Love is shown through being together, not grand gestures. Simple is best.",
      traits: ["Very practical", "Minimal romance", "No-frills", "Straightforward"],
      strengths: ["Low maintenance", "Authentic", "No games"],
      weaknesses: ["Partner might feel unloved", "Miss connection opportunities"],
      tips: ["Try small romantic things", "It won't kill you to be cheesy once in a while!"],
    },
  },
};

export default data;
