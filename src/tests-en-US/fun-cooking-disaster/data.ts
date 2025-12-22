// What Level of Cooking Disaster Are You? - Fun viral test

export const testData = {
  id: "fun-cooking-disaster",
  title: "What Level of Cooking Disaster Are You?",
  description: "Some people create culinary magic. Others create fire hazards. Where do you fall on the kitchen chaos spectrum?",
  questions: [
    {
      id: 1,
      text: "Your relationship with recipes:",
      options: [
        { text: "Follow them exactly - cooking is science", type: "safe" },
        { text: "Use them as guidelines, add my own flair", type: "capable" },
        { text: "Read them once, then wing it and hope", type: "chaotic" },
        { text: "What recipe? I just throw things together", type: "disaster" }
      ]
    },
    {
      id: 2,
      text: "Your smoke detector when you cook:",
      options: [
        { text: "Sits quietly, doing nothing", type: "capable" },
        { text: "Occasionally reminds me it exists", type: "safe" },
        { text: "Basically my kitchen timer at this point", type: "chaotic" },
        { text: "I've had to remove the batteries temporarily", type: "disaster" }
      ]
    },
    {
      id: 3,
      text: "Cooking a meal for friends/family. Your approach:",
      options: [
        { text: "Excited! I have a signature dish ready", type: "capable" },
        { text: "Stick to tried-and-true recipes, no risks", type: "safe" },
        { text: "Order backup pizza just in case", type: "chaotic" },
        { text: "Why would I put my loved ones through that?", type: "disaster" }
      ]
    },
    {
      id: 4,
      text: "Your kitchen after cooking looks like:",
      options: [
        { text: "Clean as I go - minimal mess", type: "capable" },
        { text: "Some dishes, manageable mess", type: "safe" },
        { text: "A bomb went off but the food exists", type: "chaotic" },
        { text: "Crime scene. Flour on the ceiling somehow", type: "disaster" }
      ]
    },
    {
      id: 5,
      text: "When a recipe says 'season to taste,' you:",
      options: [
        { text: "Know exactly what it needs from experience", type: "capable" },
        { text: "Add salt and pepper conservatively, taste a lot", type: "safe" },
        { text: "Dump various spices in and pray", type: "chaotic" },
        { text: "Skip it entirely, no idea what that means", type: "disaster" }
      ]
    },
    {
      id: 6,
      text: "Your most-used cooking method:",
      options: [
        { text: "Varies by dish - I use all techniques", type: "capable" },
        { text: "Baking or boiling - hard to mess up", type: "safe" },
        { text: "High heat everything. Speed > technique", type: "chaotic" },
        { text: "Microwave. Is that cooking?", type: "disaster" }
      ]
    },
    {
      id: 7,
      text: "You're making pasta. The noodles are:",
      options: [
        { text: "Al dente, perfectly seasoned water", type: "capable" },
        { text: "Cooked, maybe slightly overdone but fine", type: "safe" },
        { text: "Either crunchy or mush, no in between", type: "chaotic" },
        { text: "Currently stuck to the bottom of the pot", type: "disaster" }
      ]
    },
    {
      id: 8,
      text: "Someone offers to cook for you. Your reaction:",
      options: [
        { text: "Sweet! I love when others cook too", type: "capable" },
        { text: "Relieved I don't have to stress about it", type: "safe" },
        { text: "BLESSED. A night off from disaster", type: "chaotic" },
        { text: "This is the only way I eat real food", type: "disaster" }
      ]
    },
    {
      id: 9,
      text: "Your knife skills are:",
      options: [
        { text: "Solid - consistent cuts, safe technique", type: "capable" },
        { text: "Basic but functional", type: "safe" },
        { text: "Unpredictable - some pieces are huge, some tiny", type: "chaotic" },
        { text: "Dangerous. I've cut myself cutting bread", type: "disaster" }
      ]
    },
    {
      id: 10,
      text: "Your signature dish is:",
      options: [
        { text: "Something I've perfected over the years", type: "capable" },
        { text: "A reliable recipe I follow exactly", type: "safe" },
        { text: "Whatever doesn't catch fire that day", type: "chaotic" },
        { text: "Cereal, and I've messed that up too", type: "disaster" }
      ]
    }
  ],
  results: {
    capable: {
      type: "The Kitchen Competent",
      description: "Look at you, actually knowing how to cook! You can follow recipes AND improvise, your knife skills are respectable, and you've never had to explain burn marks to a landlord. You're the friend people ask for recipes. Your kitchen is a creative space, not a danger zone.",
      traits: ["Skilled", "Confident", "Creative", "Reliable"],
      advice: "Keep experimenting! With your solid foundation, you can try increasingly complex dishes. Maybe teach your disaster-level friends some basics - they need you."
    },
    safe: {
      type: "The Cautious Cook",
      description: "You can cook, but you're not taking any risks. Recipes are followed to the letter, tried-and-true dishes only, nothing too ambitious. You've never had a kitchen disaster because you've never attempted anything that could cause one. Safety first!",
      traits: ["Careful", "Reliable", "Consistent", "Risk-averse"],
      advice: "Your caution has served you well! But consider pushing your boundaries slightly. Try one new recipe a month - worst case, there's always takeout. You might discover hidden talents."
    },
    chaotic: {
      type: "The Chaotic Chef",
      description: "Every time you cook, it's an adventure. Will it be edible? Usually! Will the smoke alarm go off? Probably! Will the kitchen look like a disaster zone? Absolutely! You get points for enthusiasm, but maybe lose some for technique. Your meals are never boring.",
      traits: ["Enthusiastic", "Unpredictable", "Brave", "Messy"],
      advice: "Your chaos energy is entertaining, but maybe read the recipe ALL the way through before starting? And clean as you go - it prevents the 'bomb aftermath' aesthetic. You're close to competent, you just need focus."
    },
    disaster: {
      type: "The Kitchen Hazard",
      description: "The kitchen is not your domain. Cereal is challenging. Smoke detectors fear you. You've created dishes that technically count as war crimes. But you know what? At least you're honest about it. That's more than some people can say.",
      traits: ["Self-aware", "Humble", "Delivery app expert", "Survivor"],
      advice: "Start with the absolute basics: scrambled eggs, pasta with jar sauce. YouTube tutorials exist for a reason. Or just accept your fate and master the art of ordering food - there's no shame in knowing your limits."
    }
  }
};
