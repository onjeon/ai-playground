// What Level Foodie Are You? - Viral food test for American English users

export const testData = {
  id: "food-foodie-level",
  title: "What Level Foodie Are You?",
  description: "Casual eater or full-blown food obsessed? Let's rate your foodie status!",
  questions: [
    {
      id: 1,
      text: "How do you decide where to eat?",
      options: [
        { text: "Extensive research, reviews, reservations weeks ahead", type: "expert" },
        { text: "Check Instagram/reviews for interesting spots", type: "enthusiast" },
        { text: "Ask friends or pick from familiar options", type: "casual" },
        { text: "Whatever's close and open. Food is fuel", type: "practical" }
      ]
    },
    {
      id: 2,
      text: "Your food photography habits:",
      options: [
        { text: "Full production - lighting, angles, multiple shots", type: "expert" },
        { text: "Quick photo before eating for the gram", type: "enthusiast" },
        { text: "Occasionally if something looks really good", type: "casual" },
        { text: "Never. The food is for eating, not photographing", type: "practical" }
      ]
    },
    {
      id: 3,
      text: "When traveling, how important is the food scene?",
      options: [
        { text: "It's WHY I travel. Meals are planned first", type: "expert" },
        { text: "Major factor - I research best restaurants", type: "enthusiast" },
        { text: "Nice bonus but not the main focus", type: "casual" },
        { text: "I'll eat whatever's available", type: "practical" }
      ]
    },
    {
      id: 4,
      text: "Your kitchen equipment situation:",
      options: [
        { text: "Semi-professional setup. Named my KitchenAid", type: "expert" },
        { text: "Well-stocked with quality basics and some upgrades", type: "enthusiast" },
        { text: "Standard stuff that gets the job done", type: "casual" },
        { text: "Microwave and a couple pans. Works fine", type: "practical" }
      ]
    },
    {
      id: 5,
      text: "Your cooking at home is:",
      options: [
        { text: "Complex recipes, homemade everything, hours of prep", type: "expert" },
        { text: "Regular cooking with some ambitious projects", type: "enthusiast" },
        { text: "Basic cooking, some favorites I make well", type: "casual" },
        { text: "Survival cooking or delivery, mostly", type: "practical" }
      ]
    },
    {
      id: 6,
      text: "When a new restaurant opens, you:",
      options: [
        { text: "Already know about it, have reservations, checking menu", type: "expert" },
        { text: "Want to try it! Will go when hype dies down", type: "enthusiast" },
        { text: "Might check it out eventually if reviews are good", type: "casual" },
        { text: "Didn't notice. Will probably never go", type: "practical" }
      ]
    },
    {
      id: 7,
      text: "Your grocery shopping approach:",
      options: [
        { text: "Specialty stores, farmers markets, specific ingredients", type: "expert" },
        { text: "Regular store plus some special items for recipes", type: "enthusiast" },
        { text: "Standard weekly shop, same basic items", type: "casual" },
        { text: "Quick runs for essentials. In and out", type: "practical" }
      ]
    },
    {
      id: 8,
      text: "Food content consumption (shows, accounts, etc.):",
      options: [
        { text: "Multiple food accounts, cooking shows, YouTube rabbit holes", type: "expert" },
        { text: "Follow some food content I enjoy", type: "enthusiast" },
        { text: "Occasional recipe video or review", type: "casual" },
        { text: "Why would I watch other people eat?", type: "practical" }
      ]
    },
    {
      id: 9,
      text: "Your willingness to wait for amazing food:",
      options: [
        { text: "Hours. Worth it for exceptional experience", type: "expert" },
        { text: "Reasonable wait for a place I really want to try", type: "enthusiast" },
        { text: "If there's a wait, maybe another time", type: "casual" },
        { text: "Wait? I'll go somewhere else", type: "practical" }
      ]
    },
    {
      id: 10,
      text: "Honestly, how much do you think about food?",
      options: [
        { text: "Constantly. What I'm eating, what I'll eat, what I ate", type: "expert" },
        { text: "Often! Meals are highlights of my day", type: "enthusiast" },
        { text: "Around mealtimes, mostly", type: "casual" },
        { text: "Only when hungry. Then I handle it", type: "practical" }
      ]
    }
  ],
  results: {
    expert: {
      type: "Level 100 Foodie Boss",
      description: "Food isn't just sustenance to you - it's ART, CULTURE, and LIFE. You know the difference between sous vide and poached, you have opinions on omakase, and your food photography could be published. Your restaurant list is longer than some novels. You don't eat to live, you live to eat.",
      traits: ["Food-obsessed", "Knowledgeable", "Adventurous", "Dedicated"],
      advice: "Your food passion is impressive and probably delicious! Just remember that sometimes a simple meal can be perfect too. And maybe let others choose the restaurant occasionally? (But we know that's hard.)"
    },
    enthusiast: {
      type: "Solid Foodie Energy",
      description: "You genuinely love food and put effort into eating well. You're not obsessive but you definitely care more than average. Good restaurants matter to you, cooking is enjoyable, and food is a source of pleasure and exploration. A very healthy foodie level!",
      traits: ["Engaged", "Curious", "Appreciative", "Balanced"],
      advice: "You've got great foodie energy! Maybe push into one new area - a cuisine you haven't explored, a cooking technique to master. You're ready for the next level if you want it!"
    },
    casual: {
      type: "Casual Food Appreciator",
      description: "You like good food but it's not your whole personality. You have favorites, can appreciate a nice meal, and cook enough to survive. Food is nice! But so are other things. You're a normal eater who occasionally enjoys something fancy.",
      traits: ["Balanced", "Practical", "Easygoing", "Not obsessed"],
      advice: "Nothing wrong with this approach! But consider that food can be a great hobby and social connector. Maybe try one foodie activity - a cooking class, a fancy restaurant, a new cuisine. You might discover hidden passion!"
    },
    practical: {
      type: "Food is Fuel Gang",
      description: "You eat to live, not the other way around. Food serves a purpose: keeping you alive and functioning. You're not anti-food, you just don't see why everyone makes it so complicated. Efficient eating is still eating. Calories are consumed. Mission accomplished.",
      traits: ["Efficient", "Practical", "Unbothered", "Time-conscious"],
      advice: "Respect the efficiency! But food can also be joy and connection. Maybe try one 'special' food experience - not for the food, but for what it adds to relationships or memories. Or don't. You've got things to do."
    }
  }
};
