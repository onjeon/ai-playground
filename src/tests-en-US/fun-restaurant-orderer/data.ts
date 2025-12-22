// How Do You Order at Restaurants? - Fun viral test

export const testData = {
  id: "fun-restaurant-orderer",
  title: "How Do You Order at Restaurants?",
  description: "Your ordering style reveals more than you think. Are you the easy customer or the server's nightmare?",
  questions: [
    {
      id: 1,
      text: "The server asks if you're ready to order. You've had the menu for 30 seconds. You:",
      options: [
        { text: "Need a few more minutes, please!", type: "overthinker" },
        { text: "Point to the first appealing thing and commit", type: "decisive" },
        { text: "Ask for their recommendation and go with it", type: "adventurous" },
        { text: "Have already memorized the menu from their website", type: "prepared" }
      ]
    },
    {
      id: 2,
      text: "How do you feel about menu modifications?",
      options: [
        { text: "I'll order it exactly as the chef intended", type: "adventurous" },
        { text: "Minor adjustments only - dressing on the side, that kind of thing", type: "prepared" },
        { text: "Significant customization - I know what I want", type: "decisive" },
        { text: "I basically create a new dish using theirs as a starting point", type: "overthinker" }
      ]
    },
    {
      id: 3,
      text: "Your friend orders something that sounds better than yours. You:",
      options: [
        { text: "Stick with mine - I made my choice", type: "decisive" },
        { text: "Change my order immediately", type: "overthinker" },
        { text: "Mentally note it for next time", type: "prepared" },
        { text: "Suggest sharing so I can try both", type: "adventurous" }
      ]
    },
    {
      id: 4,
      text: "The specials. What's your approach?",
      options: [
        { text: "Love them! That's what the chef is excited about", type: "adventurous" },
        { text: "Listen politely, stick with what I researched", type: "prepared" },
        { text: "Specials stress me out - too many new options", type: "overthinker" },
        { text: "Only if they're better than what I already wanted", type: "decisive" }
      ]
    },
    {
      id: 5,
      text: "Splitting the check. Your preference:",
      options: [
        { text: "Just split it evenly, it all works out", type: "adventurous" },
        { text: "I'd prefer to pay for exactly what I ordered", type: "prepared" },
        { text: "I'll pay for everything - I hate the check discussion", type: "decisive" },
        { text: "Spend 10 minutes calculating who owes what", type: "overthinker" }
      ]
    },
    {
      id: 6,
      text: "You can't decide between two dishes. You:",
      options: [
        { text: "Ask the server which they prefer", type: "adventurous" },
        { text: "Order both because life is short", type: "decisive" },
        { text: "Analyze ingredients, reviews, and nutritional content", type: "overthinker" },
        { text: "Go with whichever I can't easily make at home", type: "prepared" }
      ]
    },
    {
      id: 7,
      text: "The waiter brings the wrong dish. You:",
      options: [
        { text: "Politely correct it - mistakes happen", type: "prepared" },
        { text: "Eat it anyway if it looks good", type: "adventurous" },
        { text: "Say nothing and silently resent it", type: "overthinker" },
        { text: "Send it back immediately, no hesitation", type: "decisive" }
      ]
    },
    {
      id: 8,
      text: "How far in advance do you typically look at the menu?",
      options: [
        { text: "Days before - I like to plan my experience", type: "prepared" },
        { text: "In the car on the way there", type: "overthinker" },
        { text: "When it's handed to me at the table", type: "adventurous" },
        { text: "I already know what I want before looking", type: "decisive" }
      ]
    },
    {
      id: 9,
      text: "The server asks 'How is everything?' Your honest response style:",
      options: [
        { text: "Fine! (whether it is or not)", type: "overthinker" },
        { text: "Genuine feedback - good or constructive", type: "prepared" },
        { text: "Ask follow-up questions about dishes I see passing by", type: "adventurous" },
        { text: "Fine if good, direct if not", type: "decisive" }
      ]
    },
    {
      id: 10,
      text: "Dessert menu arrives. You:",
      options: [
        { text: "Already researched the best one online", type: "prepared" },
        { text: "Order something new to try", type: "adventurous" },
        { text: "Debate for 10 minutes, then say 'I'm too full'", type: "overthinker" },
        { text: "Know immediately if I want it or not", type: "decisive" }
      ]
    }
  ],
  results: {
    adventurous: {
      type: "The Culinary Explorer",
      description: "You treat every restaurant like an adventure. Specials? Yes. Chef's recommendation? Absolutely. That weird dish you can't pronounce? Order it. You're here for the experience, and your open mind has led to some incredible meals (and a few questionable ones). Servers love your energy.",
      traits: ["Open-minded", "Spontaneous", "Trusting", "Experience-driven"],
      advice: "Your adventurous spirit is a gift! Just maybe check for allergens before committing to that mystery special. And yes, it's okay to have a favorite dish too."
    },
    decisive: {
      type: "The Quick Decider",
      description: "You scan, you choose, you commit. No menu paralysis for you. While others are still reading, you're ready to order. Modifications? You make them with confidence. Wrong order? You handle it directly. You know what you want, and you're not afraid to get it.",
      traits: ["Confident", "Efficient", "Direct", "Self-assured"],
      advice: "Your decisiveness is impressive, but maybe occasionally let someone else pick? You might discover something you wouldn't have chosen. Just a thought."
    },
    prepared: {
      type: "The Research Expert",
      description: "You don't leave dining experiences to chance. Menu studied? Check. Reviews read? Absolutely. Best dishes identified? Obviously. You arrive at restaurants with a game plan and execute it flawlessly. Your friends consult you before dining out. You probably have a restaurant spreadsheet.",
      traits: ["Thorough", "Informed", "Strategic", "Detail-oriented"],
      advice: "Your preparation ensures great meals, but sometimes the magic is in the unexpected. Try ordering something completely unresearched once in a while. Live dangerously."
    },
    overthinker: {
      type: "The Menu Agonizer",
      description: "Every menu is a complex decision tree with no right answer. What if you pick wrong? What if that other thing is better? You've definitely held up a table asking 'what are you getting?' for the third time. The menu closes soon and you're still deciding.",
      traits: ["Thoughtful", "Indecisive", "Careful", "FOMO-prone"],
      advice: "Here's a secret: there's rarely a wrong choice. The stress of deciding often outweighs any difference between dishes. Pick something, enjoy it, and remember you can always come back!"
    }
  }
};
