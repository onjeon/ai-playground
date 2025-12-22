// How Adventurous Are You? - Viral personality test for American English users

export const testData = {
  id: "personality-adventure-seeker",
  title: "How Adventurous Are You?",
  description: "Couch potato or globe-trotter? Let's discover your adventure appetite!",
  questions: [
    {
      id: 1,
      text: "Your ideal vacation involves:",
      options: [
        { text: "Backpacking through unknown territory with no fixed plans", type: "explorer" },
        { text: "A mix of exciting activities and relaxation time", type: "adventurous" },
        { text: "A nice resort with optional day trips", type: "moderate" },
        { text: "Staycation. My couch is my destination", type: "homebody" }
      ]
    },
    {
      id: 2,
      text: "Someone suggests a spontaneous weekend trip. Your reaction:",
      options: [
        { text: "Already packing! Where are we going?", type: "explorer" },
        { text: "Sounds fun! Give me an hour to figure things out", type: "adventurous" },
        { text: "Can we plan it for next month instead?", type: "moderate" },
        { text: "I had plans this weekend... with my couch", type: "homebody" }
      ]
    },
    {
      id: 3,
      text: "You're in a new city. How do you explore?",
      options: [
        { text: "Get lost intentionally and see what I discover", type: "explorer" },
        { text: "Hit the highlights but leave room for wandering", type: "adventurous" },
        { text: "Follow my carefully researched itinerary", type: "moderate" },
        { text: "Mostly stay near the hotel with short outings", type: "homebody" }
      ]
    },
    {
      id: 4,
      text: "Your dream bucket list includes:",
      options: [
        { text: "Skydiving, bungee jumping, swimming with sharks", type: "explorer" },
        { text: "Exciting trips and some thrilling experiences", type: "adventurous" },
        { text: "Seeing beautiful places and trying good food", type: "moderate" },
        { text: "Finishing my show queue and mastering my hobbies", type: "homebody" }
      ]
    },
    {
      id: 5,
      text: "How do you feel about trying new things?",
      options: [
        { text: "I actively seek out new experiences constantly", type: "explorer" },
        { text: "Open to it and usually enjoy it when I do", type: "adventurous" },
        { text: "Occasionally, when I'm in the right mood", type: "moderate" },
        { text: "I like what I like. Why change it?", type: "homebody" }
      ]
    },
    {
      id: 6,
      text: "You're offered a chance to live abroad for a year. Your response:",
      options: [
        { text: "When do I leave? Let's GO!", type: "explorer" },
        { text: "Exciting! I'd seriously consider it", type: "adventurous" },
        { text: "Intriguing but probably too disruptive", type: "moderate" },
        { text: "Hard pass. I'm happy where I am", type: "homebody" }
      ]
    },
    {
      id: 7,
      text: "Your ideal weekend looks like:",
      options: [
        { text: "A mini adventure - hiking, exploring, trying something new", type: "explorer" },
        { text: "Balance of activities and downtime", type: "adventurous" },
        { text: "Relaxing at home with maybe one outing", type: "moderate" },
        { text: "Pure couch time. Maybe not even changing out of pajamas", type: "homebody" }
      ]
    },
    {
      id: 8,
      text: "How do you feel about unfamiliar situations?",
      options: [
        { text: "Thrilled! That's where the magic happens", type: "explorer" },
        { text: "A little nervous but mostly excited", type: "adventurous" },
        { text: "Uncomfortable but I can manage if needed", type: "moderate" },
        { text: "Prefer to avoid them when possible", type: "homebody" }
      ]
    },
    {
      id: 9,
      text: "What draws you to travel (if anything)?",
      options: [
        { text: "The unknown! New cultures, experiences, perspectives", type: "explorer" },
        { text: "Seeing new places and making memories", type: "adventurous" },
        { text: "Good photos and a change of scenery", type: "moderate" },
        { text: "Honestly? The returning home part", type: "homebody" }
      ]
    },
    {
      id: 10,
      text: "You won a free trip anywhere. You choose:",
      options: [
        { text: "Somewhere I've never heard of - maximum adventure", type: "explorer" },
        { text: "Dream destination with exciting activities", type: "adventurous" },
        { text: "Somewhere beautiful with good infrastructure", type: "moderate" },
        { text: "Can I exchange it for store credit?", type: "homebody" }
      ]
    }
  ],
  results: {
    explorer: {
      type: "The Fearless Explorer",
      description: "You've got adventure running through your veins! The unknown doesn't scare you - it calls to you. Your passport is well-stamped and your stories are legendary. You're happiest when you're pushing boundaries and discovering something new. The world is your playground.",
      traits: ["Adventurous", "Curious", "Bold", "Experience-driven"],
      advice: "Your adventurous spirit makes life exciting! Just remember to build some stability too - roots can coexist with wings. Sometimes the deepest adventures are internal. Also, maybe save up for all those trips?"
    },
    adventurous: {
      type: "The Enthusiastic Adventurer",
      description: "You love adventure but you're not reckless about it. You say yes to exciting opportunities while maintaining a home base. Your life has great stories AND stability. You push your comfort zone without completely abandoning it. Best of both worlds!",
      traits: ["Open-minded", "Balanced", "Fun-loving", "Adaptable"],
      advice: "You've found a beautiful balance! Keep saying yes to adventures while honoring your need for rest. You prove that being adventurous doesn't mean being chaotic."
    },
    moderate: {
      type: "The Comfort-Zone Tourist",
      description: "You appreciate adventure... from a reasonable distance. You'll try new things occasionally, but you also deeply value comfort and routine. Your ideal adventure has good wifi and familiar food options nearby. Nothing wrong with being selective about your excitement!",
      traits: ["Selective", "Comfort-loving", "Cautious", "Practical"],
      advice: "Your selective approach is valid! But try pushing your comfort zone occasionally - growth often happens there. You might discover you're more adventurous than you think. Start small if big feels scary."
    },
    homebody: {
      type: "The Happy Homebody",
      description: "Adventure? In this economy? You know what you like: home. Your ideal excitement is a new show to binge or a comfy blanket. Travel is stressful and new things are overrated. Your couch loves you back, and that's the most important relationship.",
      traits: ["Content", "Comfort-focused", "Routine-loving", "Selective"],
      advice: "There's nothing wrong with loving home! But the world has amazing things you might be missing. Try one small adventure this year - even just a new restaurant or a day trip. You might surprise yourself. The couch will still be there when you get back."
    }
  }
};
