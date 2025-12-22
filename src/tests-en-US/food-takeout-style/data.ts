// Your Takeout Ordering Style - Viral food test for American English users

export const testData = {
  id: "food-takeout-style",
  title: "Your Takeout Ordering Style",
  description: "Creature of habit or app-browsing adventurer? What's your delivery personality?",
  questions: [
    {
      id: 1,
      text: "Opening the delivery app, you typically:",
      options: [
        { text: "Go straight to my recent orders and reorder", type: "creature" },
        { text: "Browse by craving - whatever sounds good today", type: "mood" },
        { text: "Check what's new or has good deals", type: "explorer" },
        { text: "Spend 45 minutes browsing and then order the usual", type: "paralyzed" }
      ]
    },
    {
      id: 2,
      text: "Your delivery app order history shows:",
      options: [
        { text: "The same 3 restaurants over and over", type: "creature" },
        { text: "Variety based on what I was craving", type: "mood" },
        { text: "Different places constantly - trying new spots", type: "explorer" },
        { text: "Lots of abandoned carts and one actual order", type: "paralyzed" }
      ]
    },
    {
      id: 3,
      text: "New restaurant opens with delivery. You:",
      options: [
        { text: "Stick with my trusted spots, thanks", type: "creature" },
        { text: "Maybe try it if I'm in the mood for that cuisine", type: "mood" },
        { text: "Have to try it! New restaurant excitement!", type: "explorer" },
        { text: "Add it to the list of places I'll research forever", type: "paralyzed" }
      ]
    },
    {
      id: 4,
      text: "How do you decide what to order?",
      options: [
        { text: "I already know - same order every time", type: "creature" },
        { text: "Based on my mood and cravings right now", type: "mood" },
        { text: "Reviews, ratings, what looks interesting", type: "explorer" },
        { text: "Extensive internal debate that takes forever", type: "paralyzed" }
      ]
    },
    {
      id: 5,
      text: "Delivery fees and minimums:",
      options: [
        { text: "Know my places well enough to optimize", type: "creature" },
        { text: "Factor in but don't obsess over", type: "mood" },
        { text: "Use them to discover new places with good deals", type: "explorer" },
        { text: "Part of why ordering is so stressful for me", type: "paralyzed" }
      ]
    },
    {
      id: 6,
      text: "Someone asks 'what should we order?' You:",
      options: [
        { text: "My usual place. Here's the menu, here's my order", type: "creature" },
        { text: "What are you in the mood for? I can work with that", type: "mood" },
        { text: "Let me suggest somewhere new I've been wanting to try!", type: "explorer" },
        { text: "Don't ask me that. Too much pressure", type: "paralyzed" }
      ]
    },
    {
      id: 7,
      text: "Your order usually includes:",
      options: [
        { text: "Exact same items. Comfort in consistency", type: "creature" },
        { text: "Whatever matches today's specific craving", type: "mood" },
        { text: "Something I haven't tried before from the menu", type: "explorer" },
        { text: "Too many things because I couldn't decide", type: "paralyzed" }
      ]
    },
    {
      id: 8,
      text: "Tracking your delivery:",
      options: [
        { text: "Know exactly how long my usual spots take", type: "creature" },
        { text: "Check occasionally, not stressed", type: "mood" },
        { text: "Excited to see where driver is, anticipating new food", type: "explorer" },
        { text: "Anxiously watching the whole time", type: "paralyzed" }
      ]
    },
    {
      id: 9,
      text: "Order arrives wrong or missing items:",
      options: [
        { text: "Annoyed because I know EXACTLY what I ordered", type: "creature" },
        { text: "Frustrating but I'll contact support if needed", type: "mood" },
        { text: "Adventure! Accidental menu discovery?", type: "explorer" },
        { text: "Devastating. This is why ordering is stressful", type: "paralyzed" }
      ]
    },
    {
      id: 10,
      text: "How would friends describe your ordering style?",
      options: [
        { text: "Predictable. They know what I'm getting", type: "creature" },
        { text: "Depends on the day and their mood", type: "mood" },
        { text: "Always finding new places and recommendations", type: "explorer" },
        { text: "The one who takes forever to decide", type: "paralyzed" }
      ]
    }
  ],
  results: {
    creature: {
      type: "The Creature of Habit",
      description: "Why fix what isn't broken? You've found your spots, you know your orders, and consistency is COMFORTING. Your delivery driver probably recognizes your address. Your favorites are saved and you use them. This is efficient loyalty, not boring.",
      traits: ["Consistent", "Efficient", "Loyal", "Risk-averse"],
      advice: "Your favorites are great! But maybe once a month, try something new? You might discover your next go-to. Or you'll confirm your usual is superior. Either way, data!"
    },
    mood: {
      type: "The Mood-Based Orderer",
      description: "Your delivery orders are based on VIBES. What sounds good RIGHT NOW? What cuisine matches today's energy? You're flexible, craving-driven, and your order history is a diary of your emotional food journey.",
      traits: ["Intuitive", "Flexible", "Craving-driven", "Variety-seeker"],
      advice: "Trust your cravings! They know things. Just make sure you're also occasionally eating something nutritious when your mood says 'entire pizza.' Balance is a mood too."
    },
    explorer: {
      type: "The Delivery Adventurer",
      description: "Every order is an OPPORTUNITY. New restaurant? Yes. Different cuisine? Absolutely. You're building a mental map of the best delivery in your area through rigorous research (eating). Your recommendations are trusted because you've DONE THE WORK.",
      traits: ["Adventurous", "Curious", "Recommendable", "Research-oriented"],
      advice: "Your exploration is admirable! Make sure you also circle back to the gems you've found. First-visit good is different from regular good. Build a rotation of discoveries!"
    },
    paralyzed: {
      type: "The Decision Struggler",
      description: "Ordering should be simple but for you it's a JOURNEY. Browse, compare, reconsider, look at photos, check reviews, almost order, change mind, start over... Eventually food arrives but the process was AN EXPERIENCE. Decision fatigue is real.",
      traits: ["Overthinking", "Thorough", "Anxious", "Research-heavy"],
      advice: "Your thoroughness is admirable but you're hungry! Try setting a timer - 10 minutes to decide, then commit. Or just save a 'when I can't decide' go-to order. Decision fatigue has a cure: fewer decisions."
    }
  }
};
