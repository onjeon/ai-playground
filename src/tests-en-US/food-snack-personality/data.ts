// Your Snacking Personality - Viral food test for American English users

export const testData = {
  id: "food-snack-personality",
  title: "Your Snacking Personality",
  description: "Strategic snacker or chaotic grazer? What's your snack style?",
  questions: [
    {
      id: 1,
      text: "Your snacking schedule is:",
      options: [
        { text: "Scheduled - I have designated snack times", type: "strategic" },
        { text: "When hunger strikes between meals", type: "moderate" },
        { text: "Constant low-level grazing throughout the day", type: "grazer" },
        { text: "What snacks? I just eat meals", type: "non_snacker" }
      ]
    },
    {
      id: 2,
      text: "Your snack drawer/cabinet situation:",
      options: [
        { text: "Organized, stocked with planned varieties", type: "strategic" },
        { text: "Some go-to snacks I keep around", type: "moderate" },
        { text: "Chaos. Whatever's been purchased or survived", type: "grazer" },
        { text: "Empty or non-existent, honestly", type: "non_snacker" }
      ]
    },
    {
      id: 3,
      text: "Late night snacking:",
      options: [
        { text: "Planned - I set aside something for later", type: "strategic" },
        { text: "Sometimes, if I'm genuinely hungry", type: "moderate" },
        { text: "My most reliable snacking hours", type: "grazer" },
        { text: "Rarely. I'm usually done eating by dinner", type: "non_snacker" }
      ]
    },
    {
      id: 4,
      text: "Your relationship with chip bags:",
      options: [
        { text: "Portioned out into reasonable servings", type: "strategic" },
        { text: "Eat some, clip it closed, save for later", type: "moderate" },
        { text: "Once it's open, it's getting finished", type: "grazer" },
        { text: "Don't usually have chips around", type: "non_snacker" }
      ]
    },
    {
      id: 5,
      text: "Snacks at the movies:",
      options: [
        { text: "Pre-planned - I know exactly what I'm getting", type: "strategic" },
        { text: "Popcorn and maybe a drink, classic combo", type: "moderate" },
        { text: "All of it. Large popcorn, candy, drink, more candy", type: "grazer" },
        { text: "I can wait till after, or skip", type: "non_snacker" }
      ]
    },
    {
      id: 6,
      text: "Road trip snack preparation:",
      options: [
        { text: "Curated snack bag with variety and balance", type: "strategic" },
        { text: "Grab some essentials from the gas station", type: "moderate" },
        { text: "Fill the car with snacks like it's a bunker", type: "grazer" },
        { text: "I'll just eat when we stop for meals", type: "non_snacker" }
      ]
    },
    {
      id: 7,
      text: "Sweet vs. savory snacks:",
      options: [
        { text: "Both - I strategically rotate between them", type: "strategic" },
        { text: "Preference for one but I'll eat either", type: "moderate" },
        { text: "Whatever is available, no discrimination", type: "grazer" },
        { text: "Not really a snack person either way", type: "non_snacker" }
      ]
    },
    {
      id: 8,
      text: "Someone offers you their snack. You:",
      options: [
        { text: "Accept if it fits my snack plan for the day", type: "strategic" },
        { text: "Sure, thanks! *eats one*", type: "moderate" },
        { text: "Yes please, and probably more than one", type: "grazer" },
        { text: "No thanks, I'm good", type: "non_snacker" }
      ]
    },
    {
      id: 9,
      text: "Healthy snacking:",
      options: [
        { text: "Prioritized - fruits, nuts, planned portions", type: "strategic" },
        { text: "Mix of healthy and treats, balanced", type: "moderate" },
        { text: "The healthiest snack is the one I'm eating", type: "grazer" },
        { text: "If I snack, I don't stress about it being healthy", type: "non_snacker" }
      ]
    },
    {
      id: 10,
      text: "Your ideal snacking situation:",
      options: [
        { text: "Pre-portioned, satisfying, part of my nutrition plan", type: "strategic" },
        { text: "A tasty thing that holds me over till the next meal", type: "moderate" },
        { text: "Unlimited access to all snacks at all times", type: "grazer" },
        { text: "Three solid meals - snacks optional", type: "non_snacker" }
      ]
    }
  ],
  results: {
    strategic: {
      type: "The Strategic Snacker",
      description: "You don't just snack, you PLAN snacks. Portions are measured, timing is considered, and your snack drawer is a well-organized operation. You've probably Googled 'optimal snacking for energy' and implemented the findings. Your snack game is intentional.",
      traits: ["Organized", "Planned", "Health-conscious", "Intentional"],
      advice: "Your snack strategy is impressive! But sometimes spontaneous snacking can be joyful. Try an unplanned treat occasionally - your plan won't fall apart, we promise."
    },
    moderate: {
      type: "The Balanced Snacker",
      description: "You have a healthy relationship with snacks. You enjoy them when appropriate, don't obsess over them, and can take them or leave them. You're the Goldilocks of snacking - not too much, not too little, just right.",
      traits: ["Balanced", "Reasonable", "Flexible", "Moderate"],
      advice: "You've achieved snacking enlightenment! Keep this balance. Maybe explore some new snack options - you're level-headed enough to try things without going overboard."
    },
    grazer: {
      type: "The Constant Grazer",
      description: "Are you ever NOT snacking? If food is available, you're probably eating it. Your hand-to-mouth motion is basically automated. Meals are just bigger snacks to you. You've never met a snack bowl you could ignore.",
      traits: ["Constant", "Food-motivated", "Opportunistic", "Enthusiastic"],
      advice: "Your commitment to snacking is admirable! But maybe check if you're actually hungry or just... eating because food exists. Either way, we're not judging. Snacks are great."
    },
    non_snacker: {
      type: "The Meal Purist",
      description: "Snacks? You eat MEALS. Three proper sit-down affairs, none of this nibbling business. You've somehow resisted the constant availability of snack foods and maintained meal boundaries. Impressive, honestly. Also slightly concerning? But mostly impressive.",
      traits: ["Disciplined", "Traditional", "Meal-focused", "Structured"],
      advice: "Your meal discipline is rare! But occasional snacking isn't a moral failing. Maybe try keeping one snack around for those rare hungry moments? It doesn't have to change your whole system."
    }
  }
};
