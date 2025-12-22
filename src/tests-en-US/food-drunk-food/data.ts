// What's Your Drunk Food Personality? - Viral food test for American English users

export const testData = {
  id: "food-drunk-food",
  title: "What's Your Drunk Food Personality?",
  description: "Pizza at 2am or full kitchen takeover? What's your post-drinking food style?",
  questions: [
    {
      id: 1,
      text: "The night is ending, you're hungry. First thought:",
      options: [
        { text: "PIZZA. Or tacos. Classic drunk food. NOW.", type: "classic" },
        { text: "What's open at this hour? Diner? Fast food?", type: "opportunist" },
        { text: "Home to raid the fridge and make something chaotic", type: "home_chef" },
        { text: "I'm good, I'll eat tomorrow", type: "responsible" }
      ]
    },
    {
      id: 2,
      text: "Your go-to late night drunk order:",
      options: [
        { text: "Pizza/burgers/tacos - greasy classics", type: "classic" },
        { text: "Whatever's available and sounds edible", type: "opportunist" },
        { text: "I make my own creations at home", type: "home_chef" },
        { text: "Water and sleep tbh", type: "responsible" }
      ]
    },
    {
      id: 3,
      text: "You stumble upon a 24-hour diner at 3am:",
      options: [
        { text: "PANCAKES. Or everything on the menu", type: "classic" },
        { text: "Whatever the server recommends, I trust them", type: "opportunist" },
        { text: "Nah, I'd rather make something at home", type: "home_chef" },
        { text: "Just a coffee, I need to hydrate/sober up", type: "responsible" }
      ]
    },
    {
      id: 4,
      text: "Your drunk food budget:",
      options: [
        { text: "Whatever it costs. I NEED this food", type: "classic" },
        { text: "Whatever's available, money isn't the concern", type: "opportunist" },
        { text: "Free - whatever's in my fridge", type: "home_chef" },
        { text: "Zero - I don't spend money on drunk food", type: "responsible" }
      ]
    },
    {
      id: 5,
      text: "Morning after, you find remnants of last night's food:",
      options: [
        { text: "Half a pizza. Nice! Breakfast sorted", type: "classic" },
        { text: "Something questionable. What is this?", type: "opportunist" },
        { text: "A chaotic kitchen and a mystery meal I made", type: "home_chef" },
        { text: "Nothing food-related to clean up", type: "responsible" }
      ]
    },
    {
      id: 6,
      text: "Your friends know that drunk you will:",
      options: [
        { text: "Lead the charge to get pizza/tacos/food", type: "classic" },
        { text: "Eat literally anything available", type: "opportunist" },
        { text: "Host a chaotic cooking session in my kitchen", type: "home_chef" },
        { text: "Be the sensible one who doesn't need food", type: "responsible" }
      ]
    },
    {
      id: 7,
      text: "Delivery apps at 2am:",
      options: [
        { text: "My savior. I use them frequently", type: "classic" },
        { text: "If something's open and delivering, I'm in", type: "opportunist" },
        { text: "Why pay delivery when I have a kitchen?", type: "home_chef" },
        { text: "I don't make delivery decisions while drunk", type: "responsible" }
      ]
    },
    {
      id: 8,
      text: "The food you'd regret eating drunk but do anyway:",
      options: [
        { text: "That fourth slice of pizza. Worth it", type: "classic" },
        { text: "Whatever seemed like a good idea at the time", type: "opportunist" },
        { text: "My own experimental creation gone wrong", type: "home_chef" },
        { text: "I don't have food regrets because I don't eat drunk", type: "responsible" }
      ]
    },
    {
      id: 9,
      text: "You're at a house party and someone orders food:",
      options: [
        { text: "CONTRIBUTING and eating way more than my share", type: "classic" },
        { text: "Eating whatever arrives, grateful for food", type: "opportunist" },
        { text: "Probably trying to convince everyone I can cook instead", type: "home_chef" },
        { text: "Watching others eat while I stay hydrated", type: "responsible" }
      ]
    },
    {
      id: 10,
      text: "Your drunk food philosophy:",
      options: [
        { text: "Greasy food absorbs alcohol. It's science", type: "classic" },
        { text: "Any food is good food when you're hungry", type: "opportunist" },
        { text: "Drunk cooking is an underrated skill", type: "home_chef" },
        { text: "Food can wait until I'm sober and making good choices", type: "responsible" }
      ]
    }
  ],
  results: {
    classic: {
      type: "The Classic Drunk Eater",
      description: "You are a PURIST. Drunk food means greasy, satisfying, classic options - pizza, tacos, burgers, fries. You're not reinventing the wheel here, you're just feeding the beast. Your relationship with late-night food delivery is meaningful and reliable.",
      traits: ["Traditional", "Reliable", "Greasy-food-loving", "Late-night enthusiast"],
      advice: "Your classics are classic for a reason! Keep a water bottle nearby to balance out the grease. And maybe set a spending limit before you go out - drunk ordering can add up fast."
    },
    opportunist: {
      type: "The Opportunist Eater",
      description: "You'll eat WHATEVER is available when drunk. Diner? Fast food? Questionable food truck? Someone's leftover pizza? If it's edible and nearby, it's going in your mouth. You're not picky - you're HUNGRY and you'll make it work.",
      traits: ["Flexible", "Opportunistic", "Non-picky", "Survival-mode"],
      advice: "Your flexibility is admirable! Just maybe draw some food safety lines even while drunk. Is it actually food? Is it technically someone else's? These questions matter even at 3am."
    },
    home_chef: {
      type: "The Drunk Chef",
      description: "Why order food when you have a KITCHEN? Drunk you becomes a chaotic culinary artist - raiding the fridge, combining ingredients questionably, probably leaving a mess. Tomorrow you'll find evidence of your creations. Results vary from terrible to actually genius.",
      traits: ["Creative", "Chaotic", "Self-sufficient", "Experimental"],
      advice: "Your drunk cooking adventures are legendary! Maybe keep it simple though - drunk + knives + heat = risk. Stick to cold food assembly or things that don't require much coordination. Your sober self will thank you."
    },
    responsible: {
      type: "The Responsible Adult",
      description: "Drunk food? You? No. You drink water, make responsible choices, and wake up without food regrets. Either you're not getting drunk enough to want food, or you have INCREDIBLE self-control. Either way, your digestive system thanks you.",
      traits: ["Controlled", "Responsible", "Hydrated", "Regret-free"],
      advice: "Your self-control is impressive! But sometimes late-night food with friends is about the experience, not the nutrition. Let loose occasionally - a 2am taco won't ruin your life, and might make a great memory."
    }
  }
};
