// Would You Survive a Survival Show? - Viral quirky test for American English users

export const testData = {
  id: "quirky-survival-skills",
  title: "Would You Survive a Survival Show?",
  description: "Dropped in the wilderness for TV - would you thrive or tap out? Let's find out!",
  questions: [
    {
      id: 1,
      text: "Your actual outdoor/survival experience:",
      options: [
        { text: "Significant - I've done camping, hiking, outdoor living", type: "prepared" },
        { text: "Some - I've camped but nothing extreme", type: "moderate" },
        { text: "Minimal - I've been outside but prefer not to be", type: "low" },
        { text: "None - I'm an indoor person through and through", type: "none" }
      ]
    },
    {
      id: 2,
      text: "Building a fire without matches:",
      options: [
        { text: "I could probably do it - I have some knowledge", type: "prepared" },
        { text: "I'd try but success is uncertain", type: "moderate" },
        { text: "No clue. That's what lighters are for", type: "low" },
        { text: "I'd die cold. Absolutely not possible", type: "none" }
      ]
    },
    {
      id: 3,
      text: "Your comfort with being hungry:",
      options: [
        { text: "I can function well without food for a while", type: "prepared" },
        { text: "I'd be uncomfortable but could push through", type: "moderate" },
        { text: "I get hangry after a few hours. Not good", type: "low" },
        { text: "I eat on schedule or I become non-functional", type: "none" }
      ]
    },
    {
      id: 4,
      text: "Sleeping outdoors with no bed:",
      options: [
        { text: "I've done it and can adapt to minimal comfort", type: "prepared" },
        { text: "I could manage but wouldn't sleep well", type: "moderate" },
        { text: "Sounds like a nightmare. I need my bed", type: "low" },
        { text: "Absolutely not. Sleep quality is non-negotiable", type: "none" }
      ]
    },
    {
      id: 5,
      text: "Your tolerance for bugs and wildlife:",
      options: [
        { text: "They're part of nature. I can handle it", type: "prepared" },
        { text: "I don't love them but I'd manage", type: "moderate" },
        { text: "Strong discomfort. Bugs are a no", type: "low" },
        { text: "I would genuinely panic. Cannot handle", type: "none" }
      ]
    },
    {
      id: 6,
      text: "Finding food in the wild:",
      options: [
        { text: "I have knowledge about foraging/hunting/fishing", type: "prepared" },
        { text: "Basic knowledge - I could figure out some things", type: "moderate" },
        { text: "I'd probably eat something poisonous by accident", type: "low" },
        { text: "Food comes from stores. End of knowledge", type: "none" }
      ]
    },
    {
      id: 7,
      text: "Your mental game under stress:",
      options: [
        { text: "Strong - I've been tested and I'm resilient", type: "prepared" },
        { text: "Pretty good - I can push through hard things", type: "moderate" },
        { text: "Questionable - I might break down", type: "low" },
        { text: "Weak - I'd want to quit immediately", type: "none" }
      ]
    },
    {
      id: 8,
      text: "Physical fitness for survival tasks:",
      options: [
        { text: "Good shape - I can handle physical demands", type: "prepared" },
        { text: "Decent - I'd struggle but push through", type: "moderate" },
        { text: "Not great - physical exertion is not my thing", type: "low" },
        { text: "Poor - I'd be exhausted immediately", type: "none" }
      ]
    },
    {
      id: 9,
      text: "Your reaction to days without modern conveniences:",
      options: [
        { text: "I could adapt - I've done digital detoxes", type: "prepared" },
        { text: "Hard but survivable - I'd miss some things", type: "moderate" },
        { text: "Very difficult - I'm attached to comfort", type: "low" },
        { text: "Unbearable - modern life is life", type: "none" }
      ]
    },
    {
      id: 10,
      text: "Honestly, would you volunteer for a survival show?",
      options: [
        { text: "Yes! I'd want to test myself", type: "prepared" },
        { text: "Maybe - depends on the show and stakes", type: "moderate" },
        { text: "Probably not - sounds miserable", type: "low" },
        { text: "Absolutely never. Pay me and I still wouldn't", type: "none" }
      ]
    }
  ],
  results: {
    prepared: {
      type: "Would Probably Survive",
      description: "You've got what it takes! Between actual outdoor experience, mental toughness, and adaptability, you'd probably make it through a survival show without tapping out. You might even enjoy parts of it. Bear Grylls would approve.",
      traits: ["Prepared", "Resilient", "Adaptable", "Nature-capable"],
      advice: "Your survival odds are good! If you actually want to test yourself, consider wilderness courses or extended outdoor challenges. You might discover you're even tougher than you think. Just don't get cocky - nature humbles everyone eventually."
    },
    moderate: {
      type: "Could Survive But Would Struggle",
      description: "You'd have a fighting chance! You're not fully prepared but you've got some skills and mental toughness to push through. You'd suffer, you'd struggle, but you MIGHT make it if conditions weren't too extreme. Mediocre survival odds - could go either way.",
      traits: ["Capable", "Untested", "Moderate tolerance", "Potential"],
      advice: "Your survival could go either way! Some outdoor skill-building would improve your odds significantly. You have the mental framework - you just need more practical experience. A few camping trips might reveal hidden resilience."
    },
    low: {
      type: "Would Tap Out Early",
      description: "Let's be real - you'd probably tap out within the first few days. You're not built for wilderness survival and that's OKAY. Modern civilization exists so we don't have to sleep on the ground and eat bugs. You've chosen comfort and there's no shame in that.",
      traits: ["Indoor person", "Comfort-needing", "Self-aware", "Honest about limits"],
      advice: "Your self-awareness is valuable! You know your limits. If you ever wanted to improve, start small - a night of camping, a challenging hike. But also, not everyone needs to be a survivalist. Your skills lie elsewhere."
    },
    none: {
      type: "First Day Elimination",
      description: "You're going home immediately. Before the first night, probably. You're a creature of comfort, indoor plumbing, and civilization - and that's completely fine! Survival shows are for specific people and you are NOT those people. Stay in your cozy lane.",
      traits: ["Indoors-only", "Comfort-dependent", "Not built for this", "Self-aware"],
      advice: "Don't feel bad! Not everyone is meant for the wilderness. Your survival skills are probably social, intellectual, or technological - equally valid in modern society. Let the outdoorsy people do the surviving. You contribute differently."
    }
  }
};
