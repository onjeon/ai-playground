// Your Cooking Skill Level - Viral food test for American English users

export const testData = {
  id: "food-cooking-level",
  title: "Your Cooking Skill Level",
  description: "Gordon Ramsay energy or 'is cereal a meal?' Let's find out!",
  questions: [
    {
      id: 1,
      text: "Your go-to when you need to make dinner:",
      options: [
        { text: "Check what's in the fridge, improvise something good", type: "chef" },
        { text: "Follow a recipe for something I'm in the mood for", type: "capable" },
        { text: "Rotate through my 5 things I know how to make", type: "basic" },
        { text: "DoorDash or cereal. Cooking is not my thing", type: "non_cook" }
      ]
    },
    {
      id: 2,
      text: "Your knife skills:",
      options: [
        { text: "Proper technique, multiple types of cuts, fast", type: "chef" },
        { text: "Decent - I can dice and mince reasonably well", type: "capable" },
        { text: "Everything ends up roughly the same size-ish", type: "basic" },
        { text: "I've been injured. We don't talk about it", type: "non_cook" }
      ]
    },
    {
      id: 3,
      text: "When a recipe says 'season to taste':",
      options: [
        { text: "I know exactly what to do. I can build flavors", type: "chef" },
        { text: "I can figure it out - add, taste, adjust", type: "capable" },
        { text: "Nervous but I add salt and hope", type: "basic" },
        { text: "WHY DON'T THEY TELL ME HOW MUCH??", type: "non_cook" }
      ]
    },
    {
      id: 4,
      text: "Hosting dinner for friends. Your move:",
      options: [
        { text: "Create a menu, prep ahead, multiple courses", type: "chef" },
        { text: "Make something I'm confident in, it'll be good", type: "capable" },
        { text: "Order in or make something extremely simple", type: "basic" },
        { text: "Hosting never includes me cooking. It's for safety", type: "non_cook" }
      ]
    },
    {
      id: 5,
      text: "Your understanding of cooking science (why things work):",
      options: [
        { text: "I know WHY I'm doing each step. Temperature, timing, reactions", type: "chef" },
        { text: "General understanding of basics - enough to troubleshoot", type: "capable" },
        { text: "I follow recipes and hope for the best", type: "basic" },
        { text: "Magic? Alchemy? I have no idea how cooking works", type: "non_cook" }
      ]
    },
    {
      id: 6,
      text: "A recipe calls for an ingredient you don't have:",
      options: [
        { text: "I know substitutions, or can adjust the recipe", type: "chef" },
        { text: "Google a substitute or leave it out if minor", type: "capable" },
        { text: "Make something else or go to the store", type: "basic" },
        { text: "Recipe abandoned. Ordering food now", type: "non_cook" }
      ]
    },
    {
      id: 7,
      text: "Baking vs. cooking:",
      options: [
        { text: "Both! Though baking requires more precision", type: "chef" },
        { text: "Cooking is easier for me but I can bake basics", type: "capable" },
        { text: "One is hard enough. The other is basically impossible", type: "basic" },
        { text: "Neither. I don't discriminate - I avoid all of it", type: "non_cook" }
      ]
    },
    {
      id: 8,
      text: "Making a dish you've never made before:",
      options: [
        { text: "Exciting! I can apply techniques I know", type: "chef" },
        { text: "Find a good recipe and follow it carefully", type: "capable" },
        { text: "Stressful. Might turn out terrible", type: "basic" },
        { text: "I don't experiment. Stick to what works (nothing)", type: "non_cook" }
      ]
    },
    {
      id: 9,
      text: "Your opinion on meal prep:",
      options: [
        { text: "Do it regularly - efficient and I control quality", type: "chef" },
        { text: "Sometimes, when I have time and motivation", type: "capable" },
        { text: "Sounds nice in theory, never actually happens", type: "basic" },
        { text: "Prepping what? Delivery menus?", type: "non_cook" }
      ]
    },
    {
      id: 10,
      text: "Be honest - how often do you actually cook?",
      options: [
        { text: "Almost daily. I genuinely enjoy it", type: "chef" },
        { text: "Several times a week, mix of cooking and easy meals", type: "capable" },
        { text: "Couple times a week, mostly simple stuff", type: "basic" },
        { text: "Rarely to never. It's not my skill set", type: "non_cook" }
      ]
    }
  ],
  results: {
    chef: {
      type: "Kitchen Boss Level",
      description: "You've got SKILLS. Cooking is second nature - you understand technique, can improvise, and actually enjoy the process. You're the friend everyone wants to invite them to dinner. Gordon Ramsay would probably only yell at you a little.",
      traits: ["Skilled", "Confident", "Creative", "Knowledgeable"],
      advice: "Keep cooking! Consider challenging yourself with new cuisines or techniques. Maybe share your skills - teach a friend, start a cooking account? Your talent shouldn't be hoarded."
    },
    capable: {
      type: "Competent Home Cook",
      description: "You can cook! Not professional level, but solidly capable. You follow recipes, understand basics, and produce edible-to-good food regularly. You're self-sufficient in the kitchen and probably could get better if you pushed yourself.",
      traits: ["Capable", "Learning", "Reliable", "Practical"],
      advice: "You're in a great position to level up! Pick one technique to master, or one cuisine to explore deeply. The jump from capable to skilled is totally achievable for you."
    },
    basic: {
      type: "Survival Cook",
      description: "You cook to survive, not to thrive. You've got maybe 5 things you can make without disaster, and you stick to them. Adventurous cooking is not your vibe. But hey - you're feeding yourself! That counts!",
      traits: ["Basic", "Cautious", "Routine", "Functional"],
      advice: "Your cooking keeps you alive! Try adding ONE new recipe every month - something slightly more ambitious than your usual. Skill builds with practice, and you might discover you enjoy it."
    },
    non_cook: {
      type: "Kitchen Avoidant",
      description: "Cooking is not your thing and you've accepted it. The kitchen is where you store delivery menus and maybe make toast. You've outsourced food preparation and honestly? In the age of delivery apps? Valid life choice.",
      traits: ["Non-cook", "Delegator", "Self-aware", "Delivery-reliant"],
      advice: "Everyone has different skills! But maybe learn ONE simple thing - even just good eggs or pasta. Emergency self-sufficiency. The apps go down sometimes. Survival skills!"
    }
  }
};
