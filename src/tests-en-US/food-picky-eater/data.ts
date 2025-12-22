// How Picky of an Eater Are You? - Viral food test for American English users

export const testData = {
  id: "food-picky-eater",
  title: "How Picky of an Eater Are You?",
  description: "Adventurous foodie or chicken-tenders-only energy? Let's find out!",
  questions: [
    {
      id: 1,
      text: "Someone suggests trying a new restaurant with 'unique' cuisine. You:",
      options: [
        { text: "I'M IN! New food experiences are the best!", type: "adventurous" },
        { text: "Sure, I can usually find something I like", type: "open" },
        { text: "Can I see the menu first? Need to plan", type: "selective" },
        { text: "Can we just go somewhere I know I like?", type: "picky" }
      ]
    },
    {
      id: 2,
      text: "Your relationship with trying foods you've never had:",
      options: [
        { text: "Exciting! Life is too short for boring food!", type: "adventurous" },
        { text: "Happy to try, might not love everything", type: "open" },
        { text: "Cautiously willing if it looks safe", type: "selective" },
        { text: "Why fix what isn't broken? I know what I like", type: "picky" }
      ]
    },
    {
      id: 3,
      text: "Foods touching each other on your plate:",
      options: [
        { text: "The flavors mingling is part of the experience!", type: "adventurous" },
        { text: "Doesn't bother me at all", type: "open" },
        { text: "I prefer them separate but I'll manage", type: "selective" },
        { text: "NO. Different foods have different territories", type: "picky" }
      ]
    },
    {
      id: 4,
      text: "Your safe order at any restaurant:",
      options: [
        { text: "I don't have one - I always try something new!", type: "adventurous" },
        { text: "A few go-tos but I vary depending on mood", type: "open" },
        { text: "Yes, and it works, why change?", type: "selective" },
        { text: "Chicken fingers/plain pasta/grilled cheese vibes", type: "picky" }
      ]
    },
    {
      id: 5,
      text: "Texture issues with food:",
      options: [
        { text: "All textures are interesting to me!", type: "adventurous" },
        { text: "Minor preferences but nothing major", type: "open" },
        { text: "Some textures I really can't do", type: "selective" },
        { text: "MANY textures are unacceptable, don't get me started", type: "picky" }
      ]
    },
    {
      id: 6,
      text: "When the food arrives and it's not what you expected:",
      options: [
        { text: "Even better! A surprise culinary adventure!", type: "adventurous" },
        { text: "I'll try it anyway, might be good", type: "open" },
        { text: "Disappointed but I'll eat around the weird parts", type: "selective" },
        { text: "Send it back or don't eat. I can't do surprises", type: "picky" }
      ]
    },
    {
      id: 7,
      text: "Sauces and condiments situation:",
      options: [
        { text: "Bring them all! More flavor, more fun!", type: "adventurous" },
        { text: "I'll try recommended sauces", type: "open" },
        { text: "Standard condiments only, on the side", type: "selective" },
        { text: "No sauce. Plain is perfect. Nothing touching", type: "picky" }
      ]
    },
    {
      id: 8,
      text: "Your childhood eating habits compared to now:",
      options: [
        { text: "I've expanded massively - try everything now!", type: "adventurous" },
        { text: "Grown into a more adventurous eater", type: "open" },
        { text: "Some improvement but core preferences remain", type: "selective" },
        { text: "Same things I loved as a kid work just fine", type: "picky" }
      ]
    },
    {
      id: 9,
      text: "Eating at someone's house when you don't love the food:",
      options: [
        { text: "I probably DO love it - I'll eat anything!", type: "adventurous" },
        { text: "I eat it and express genuine gratitude", type: "open" },
        { text: "Strategic eating of acceptable parts", type: "selective" },
        { text: "This is my nightmare. I eat before I go anywhere", type: "picky" }
      ]
    },
    {
      id: 10,
      text: "Be honest: how would your friends describe your eating?",
      options: [
        { text: "They're amazed/slightly concerned by what I'll eat", type: "adventurous" },
        { text: "Pretty easy-going, few restrictions", type: "open" },
        { text: "Has preferences but manageable", type: "selective" },
        { text: "They KNOW to check with me about restaurants", type: "picky" }
      ]
    }
  ],
  results: {
    adventurous: {
      type: "The Fearless Foodie",
      description: "You'll try ANYTHING once (and usually twice). Bugs? Interesting. Fermented things? Bring it. Unidentifiable street food? Your favorite. Your Instagram is a culinary adventure and your friends are both impressed and slightly horrified by your willingness to eat first, ask questions never.",
      traits: ["Adventurous", "Open-minded", "Culturally curious", "Zero fear"],
      advice: "Your food bravery is admirable! Keep exploring! Just maybe make sure your travel insurance covers 'ate something questionable in an alley' situations. Your stomach is a champion."
    },
    open: {
      type: "The Flexible Eater",
      description: "You're easy-going about food without being extreme about it. You'll try new things, have preferences but not demands, and can find something to eat almost anywhere. You're the ideal dining companion - agreeable without being a doormat.",
      traits: ["Flexible", "Adaptable", "Easy-going", "Reasonable"],
      advice: "You've got a healthy relationship with food! Keep pushing slightly outside your comfort zone occasionally - your next favorite food might be hiding in a cuisine you haven't fully explored yet."
    },
    selective: {
      type: "The Careful Taster",
      description: "You have PREFERENCES and you're not ashamed of them. You know what you like, you'll cautiously try new things, and you've learned to navigate menus strategically. You're not picky, you're... selective. There's a difference. Probably.",
      traits: ["Particular", "Careful", "Strategic", "Self-aware"],
      advice: "Your preferences are valid! But maybe challenge yourself with one new food a month? You might be surprised. Or you'll confirm you hate it. Either way, growth!"
    },
    picky: {
      type: "The Selective Sovereign",
      description: "You know what you like, and it's a SHORT list. New foods are suspicious. Textures are IMPORTANT. Restaurants are research projects. Your friends have learned to factor in your preferences when planning meals. You're not picky, you're just... discerning. With a small menu.",
      traits: ["Highly selective", "Texture-sensitive", "Routine-loving", "Self-knowing"],
      advice: "Hey, at least you know yourself! But consider that your taste buds might have evolved since you last tried that food you hate. One small risk per year? No pressure. But maybe?"
    }
  }
};
