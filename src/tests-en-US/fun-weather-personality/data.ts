// Your Weather Personality - Fun viral test

export const testData = {
  id: "fun-weather-personality",
  title: "Your Weather Personality",
  description: "Tell me how you feel about weather, and I'll tell you who you are. Are you a sunshine soul or a storm chaser?",
  questions: [
    {
      id: 1,
      text: "A rainy day means:",
      options: [
        { text: "Perfect excuse to stay in, cozy up, do nothing", type: "cozy" },
        { text: "My plans are ruined, mood is dropping", type: "sunshine" },
        { text: "Time to go jump in puddles like I'm 8 again", type: "storm" },
        { text: "Just another day, rain doesn't stop me", type: "adaptable" }
      ]
    },
    {
      id: 2,
      text: "Your ideal weather for a day off:",
      options: [
        { text: "Sunny, warm, perfect for being outside", type: "sunshine" },
        { text: "Cool and cloudy, perfect for existing without sweating", type: "cozy" },
        { text: "A dramatic thunderstorm I can watch from my window", type: "storm" },
        { text: "Honestly, any weather. I'll make it work", type: "adaptable" }
      ]
    },
    {
      id: 3,
      text: "Summer is:",
      options: [
        { text: "THE BEST. Sunshine, beach, warmth, happiness", type: "sunshine" },
        { text: "Too hot, too bright, too much", type: "cozy" },
        { text: "Good for dramatic summer storms", type: "storm" },
        { text: "Fine, like every other season", type: "adaptable" }
      ]
    },
    {
      id: 4,
      text: "A sudden snow day hits. Your reaction:",
      options: [
        { text: "COZY TIME. Hot cocoa, blankets, not moving", type: "cozy" },
        { text: "Annoyed - snow is just cold rain that sticks around", type: "sunshine" },
        { text: "Running outside immediately to experience it", type: "storm" },
        { text: "Check if I can still do what I planned, then adapt", type: "adaptable" }
      ]
    },
    {
      id: 5,
      text: "How do you feel about wind?",
      options: [
        { text: "Hate it. Ruins everything", type: "sunshine" },
        { text: "Annoying if I'm outside, don't notice otherwise", type: "cozy" },
        { text: "Love it! Nature's chaos energy", type: "storm" },
        { text: "It's just wind. I adjust and move on", type: "adaptable" }
      ]
    },
    {
      id: 6,
      text: "When the weather app says 'nice day ahead,' you picture:",
      options: [
        { text: "Warm sun, blue skies, outdoor activities", type: "sunshine" },
        { text: "60 degrees and partly cloudy - not too much of anything", type: "cozy" },
        { text: "Nice is boring. Give me something dramatic", type: "storm" },
        { text: "Any day I can go about my business", type: "adaptable" }
      ]
    },
    {
      id: 7,
      text: "Your relationship with umbrellas:",
      options: [
        { text: "Always have one. Preparation is key", type: "adaptable" },
        { text: "Own several cute ones - rain can be stylish", type: "cozy" },
        { text: "Umbrellas are for quitters. I embrace the rain", type: "storm" },
        { text: "Forget mine constantly and then complain about rain", type: "sunshine" }
      ]
    },
    {
      id: 8,
      text: "The power goes out during a storm. You:",
      options: [
        { text: "Light candles, grab blankets, peak cozy activated", type: "cozy" },
        { text: "Watch the storm from the window, fascinated", type: "storm" },
        { text: "Annoyed but I'll figure out how to manage", type: "adaptable" },
        { text: "This is literally my nightmare", type: "sunshine" }
      ]
    },
    {
      id: 9,
      text: "If you could control the weather, you'd choose:",
      options: [
        { text: "Permanent 75°F and sunny", type: "sunshine" },
        { text: "Cool, cloudy, with occasional rain", type: "cozy" },
        { text: "Weekly dramatic thunderstorms", type: "storm" },
        { text: "Perfect variety - the right weather for every occasion", type: "adaptable" }
      ]
    },
    {
      id: 10,
      text: "Your seasonal depression hits hardest in:",
      options: [
        { text: "Winter - I NEED sunlight to function", type: "sunshine" },
        { text: "Summer - it's too much, let me hibernate", type: "cozy" },
        { text: "Never - all weather has something to offer", type: "storm" },
        { text: "I'm pretty consistent regardless of season", type: "adaptable" }
      ]
    }
  ],
  results: {
    sunshine: {
      type: "The Sunshine Seeker",
      description: "You're solar powered, literally. Sunlight is your fuel, warmth is your love language, and anything below 70°F is an insult. Your ideal life involves year-round summer, outdoor activities, and never owning a proper winter coat. You're basically a human sunflower.",
      traits: ["Optimistic", "Energetic", "Warmth-loving", "Outdoor-oriented"],
      advice: "Your sunny disposition is lovely, but maybe make peace with the fact that weather varies. Invest in a good SAD lamp and learn to find joy in cloudy days too. Rainy days can be romantic!"
    },
    cozy: {
      type: "The Cozy Weather Lover",
      description: "You're not anti-nice weather - you're pro-atmosphere. Perfect day? Cool enough for layers, excuse to stay in, candles and blankets and absolutely no obligation to 'enjoy the nice weather.' You've turned weather-based coziness into an art form. Hygge is your personality.",
      traits: ["Homebody", "Comfort-seeking", "Atmospheric", "Introverted"],
      advice: "Your cozy approach is valid and honestly aspirational. But sometimes force yourself outside even when you don't want to - the sun is good for you, and you can be cozy inside later."
    },
    storm: {
      type: "The Weather Enthusiast",
      description: "Other people run from storms. You run toward them (metaphorically, please stay safe). There's something about dramatic weather that speaks to your soul. Thunderstorms, blizzards, wild wind - you see power and beauty where others see inconvenience. You might be part storm chaser.",
      traits: ["Adventurous", "Dramatic", "Nature-connected", "Intense"],
      advice: "Your appreciation for weather's raw power is beautiful, but please don't literally chase tornadoes. Channel that energy into storm photography or meteorology - you were born for it."
    },
    adaptable: {
      type: "The Weather-Neutral",
      description: "Weather is just... weather to you. It exists, you deal with it, life goes on. You don't understand people who let a little rain ruin their day or need perfect sunshine to function. You're the calm in the storm (and in the sunshine, and the snow). Nothing throws you off.",
      traits: ["Adaptable", "Practical", "Resilient", "Unbothered"],
      advice: "Your adaptability is a genuine superpower. But consider: maybe let yourself FEEL weather sometimes? A perfect sunny day or a dramatic storm can be an experience, not just a background event."
    }
  }
};
