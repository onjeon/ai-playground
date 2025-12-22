// What Kind of Grocery Shopper Are You? - Fun viral test

export const testData = {
  id: "fun-grocery-shopper",
  title: "What Kind of Grocery Shopper Are You?",
  description: "Tell me how you shop, and I'll tell you who you are. The cart never lies.",
  questions: [
    {
      id: 1,
      text: "You're at the store. Do you have a list?",
      options: [
        { text: "Yes, organized by aisle because I respect my time", type: "efficient" },
        { text: "A mental list... I'll remember most of it", type: "wanderer" },
        { text: "List? I'm here to see what speaks to me", type: "impulse" },
        { text: "I have a list but I'll ignore 70% of it", type: "chaotic" }
      ]
    },
    {
      id: 2,
      text: "An item you wanted is out of stock. You:",
      options: [
        { text: "Already have a backup option planned", type: "efficient" },
        { text: "Wander around hoping to find an alternative", type: "wanderer" },
        { text: "Buy three completely different things instead", type: "impulse" },
        { text: "Stand there processing this betrayal for 2 minutes", type: "chaotic" }
      ]
    },
    {
      id: 3,
      text: "How do you feel about free samples?",
      options: [
        { text: "Nice, but I won't go out of my way", type: "efficient" },
        { text: "I'll definitely check them out during my wander", type: "wanderer" },
        { text: "FREE FOOD. I will find ALL of them", type: "impulse" },
        { text: "Take sample. Feel obligated to buy. Regret later", type: "chaotic" }
      ]
    },
    {
      id: 4,
      text: "You're in the checkout line. Your cart contains:",
      options: [
        { text: "Exactly what I came for, plus maybe one treat", type: "efficient" },
        { text: "About half planned items, half discoveries", type: "wanderer" },
        { text: "95% things I didn't know I needed until now", type: "impulse" },
        { text: "Ingredients for 5 recipes I'll never make", type: "chaotic" }
      ]
    },
    {
      id: 5,
      text: "The 'seasonal items' section appears. You:",
      options: [
        { text: "Stay focused - that's how they get you", type: "efficient" },
        { text: "Take a peek, maybe find something useful", type: "wanderer" },
        { text: "Suddenly need 4 Halloween-themed kitchen items in March", type: "impulse" },
        { text: "Block that aisle for 15 minutes examining everything", type: "chaotic" }
      ]
    },
    {
      id: 6,
      text: "You see something on sale that you don't need. You:",
      options: [
        { text: "Keep walking. Sales are a trap if you don't need it", type: "efficient" },
        { text: "Depends on how good the sale is", type: "wanderer" },
        { text: "It's practically free! Into the cart it goes", type: "impulse" },
        { text: "Buy 5, use 1, let 4 expire, feel bad", type: "chaotic" }
      ]
    },
    {
      id: 7,
      text: "Your typical grocery trip takes:",
      options: [
        { text: "20-30 minutes. Precision operation", type: "efficient" },
        { text: "45 minutes to an hour. I like to browse", type: "wanderer" },
        { text: "Who's counting? Shopping is self-care", type: "impulse" },
        { text: "2 hours because I went hungry and everything looked good", type: "chaotic" }
      ]
    },
    {
      id: 8,
      text: "Self-checkout or regular checkout?",
      options: [
        { text: "Self-checkout. Faster and I bag things correctly", type: "efficient" },
        { text: "Either works, depends on the lines", type: "wanderer" },
        { text: "Regular - I like chatting with the cashier", type: "impulse" },
        { text: "Self-checkout where I'll definitely trigger 'unexpected item in bagging area'", type: "chaotic" }
      ]
    },
    {
      id: 9,
      text: "You get home and realize you forgot something essential. You:",
      options: [
        { text: "Rarely happens, but I'll adapt and go tomorrow", type: "efficient" },
        { text: "Make do with what I have", type: "wanderer" },
        { text: "Immediately go back to the store (and buy more things)", type: "impulse" },
        { text: "Order delivery out of spite", type: "chaotic" }
      ]
    },
    {
      id: 10,
      text: "How does your fridge look after a grocery trip?",
      options: [
        { text: "Organized, restocked, everything in its place", type: "efficient" },
        { text: "Full-ish, with some random new additions", type: "wanderer" },
        { text: "Overflowing with optimism and snacks", type: "impulse" },
        { text: "Chaotic but at least there's food... somewhere", type: "chaotic" }
      ]
    }
  ],
  results: {
    efficient: {
      type: "The Strategic Shopper",
      description: "You treat grocery shopping like a military operation. In, out, mission complete. Your cart moves with purpose, your list is law, and impulse buys fear you. You've probably calculated the optimal route through every aisle. Honestly? Impressive.",
      traits: ["Organized", "Focused", "Budget-conscious", "Time-efficient"],
      advice: "Your efficiency is a superpower, but maybe let yourself grab that fancy cheese once in a while? Life's short. Treat yourself to an unplanned snack."
    },
    wanderer: {
      type: "The Explorer",
      description: "Grocery shopping is an adventure, not a chore. You have a general plan but leave room for discovery. That new international aisle? You're exploring it. You strike the perfect balance between purpose and spontaneity. The journey matters as much as the destination.",
      traits: ["Curious", "Flexible", "Open-minded", "Balanced"],
      advice: "You've found the sweet spot! Keep exploring those new products, but maybe set a loose time limit so you don't accidentally spend 2 hours debating olive oils."
    },
    impulse: {
      type: "The Impulse Buyer",
      description: "You came for milk. You left with artisanal crackers, a new cheese variety, seasonal cookies, and a plant. The grocery store is your happy place, and your cart reflects your optimistic belief that THIS week you'll eat all those vegetables. Your credit card is concerned.",
      traits: ["Spontaneous", "Optimistic", "Adventurous", "Easily tempted"],
      advice: "Your enthusiasm is delightful, but maybe eat before you shop? And that 'family size' bag is still a lot for one person, even if it IS a great deal."
    },
    chaotic: {
      type: "The Chaotic Forager",
      description: "Your grocery trips are unpredictable journeys that even you can't explain. You'll forget the one thing you came for but leave with ingredients for a cuisine you've never cooked. Your fridge is a mystery box. Your pantry tells a story of abandoned aspirations. It's chaos, but it's YOUR chaos.",
      traits: ["Unpredictable", "Distracted", "Creative", "Hopeful"],
      advice: "Consider: the notes app exists. A simple list might change your life. But also, never change completely - your 'accidental' discoveries probably lead to some great meals."
    }
  }
};
