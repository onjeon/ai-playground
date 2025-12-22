// Your Winter Mode - Viral seasonal test for American English users

export const testData = {
  id: "seasonal-winter-mode",
  title: "Your Winter Mode",
  description: "Hibernation station or winter wonderland warrior? What's your cold weather personality?",
  questions: [
    {
      id: 1,
      text: "First snowfall of the year. You:",
      options: [
        { text: "Run outside like a golden retriever seeing snow", type: "winter_lover" },
        { text: "Grab hot cocoa and watch from my warm window", type: "cozy_hibernator" },
        { text: "Start checking flight prices to warm places", type: "winter_hater" },
        { text: "Stress about the commute and driving conditions", type: "practical" }
      ]
    },
    {
      id: 2,
      text: "Your ideal winter weekend:",
      options: [
        { text: "Skiing, snowboarding, or outdoor winter sports", type: "winter_lover" },
        { text: "Blanket fort, comfort shows, not moving", type: "cozy_hibernator" },
        { text: "Dreaming of summer while avoiding outside", type: "winter_hater" },
        { text: "Catching up on tasks and errands", type: "practical" }
      ]
    },
    {
      id: 3,
      text: "Winter fashion philosophy:",
      options: [
        { text: "Layering is an art form I've mastered", type: "winter_lover" },
        { text: "Maximum coziness, minimum effort", type: "cozy_hibernator" },
        { text: "The absolute minimum to survive", type: "winter_hater" },
        { text: "Functional and weather-appropriate", type: "practical" }
      ]
    },
    {
      id: 4,
      text: "Your relationship with the cold:",
      options: [
        { text: "Invigorating! I love that crisp winter air", type: "winter_lover" },
        { text: "Fine if I can retreat to warmth immediately after", type: "cozy_hibernator" },
        { text: "We are enemies. Winter is trying to kill me", type: "winter_hater" },
        { text: "It's just weather. I manage it appropriately", type: "practical" }
      ]
    },
    {
      id: 5,
      text: "Holiday season vibes:",
      options: [
        { text: "MAGICAL! Decorations, activities, peak season", type: "winter_lover" },
        { text: "Love it for the cozy, homey feelings", type: "cozy_hibernator" },
        { text: "Tolerate it for family but ready for January 2nd", type: "winter_hater" },
        { text: "Lots of obligations but I handle it efficiently", type: "practical" }
      ]
    },
    {
      id: 6,
      text: "Your winter drink rotation:",
      options: [
        { text: "Hot cocoa after outdoor adventures", type: "winter_lover" },
        { text: "All the warm drinks. Constantly. In my hands", type: "cozy_hibernator" },
        { text: "Mostly coffee because I'm tired and cold", type: "winter_hater" },
        { text: "Whatever keeps me functional and warm", type: "practical" }
      ]
    },
    {
      id: 7,
      text: "Building a snowman or having a snowball fight:",
      options: [
        { text: "ABSOLUTELY YES, I'm already putting on boots", type: "winter_lover" },
        { text: "Maybe if I can go inside immediately after", type: "cozy_hibernator" },
        { text: "In this economy? No. Too cold", type: "winter_hater" },
        { text: "If the conditions are right and I have time", type: "practical" }
      ]
    },
    {
      id: 8,
      text: "How much does sunlight (or lack of it) affect you?",
      options: [
        { text: "I make my own sunshine! Winter vibes!", type: "winter_lover" },
        { text: "SAD lamp is my best friend. I cope indoors", type: "cozy_hibernator" },
        { text: "It's devastating. I need light to function", type: "winter_hater" },
        { text: "I've adjusted my schedule to maximize daylight", type: "practical" }
      ]
    },
    {
      id: 9,
      text: "Your thermostat setting in winter:",
      options: [
        { text: "Lower - keeps me comfortable, saves money", type: "winter_lover" },
        { text: "Warm and toasty. Bills be damned", type: "cozy_hibernator" },
        { text: "As high as it goes. Still freezing", type: "winter_hater" },
        { text: "68°F - the optimal temperature for efficiency", type: "practical" }
      ]
    },
    {
      id: 10,
      text: "When March/spring finally arrives:",
      options: [
        { text: "A little sad actually - I'll miss winter", type: "winter_lover" },
        { text: "Relieved but will miss my cozy routine", type: "cozy_hibernator" },
        { text: "FINALLY. I HAVE SURVIVED. BRING THE SUN", type: "winter_hater" },
        { text: "Good. Time to shift to spring activities", type: "practical" }
      ]
    }
  ],
  results: {
    winter_lover: {
      type: "The Winter Warrior",
      description: "While everyone else is complaining, you're THRIVING. Snow? Beautiful. Cold? Bracing. Dark by 5pm? Cozy! You've probably described yourself as 'cold-blooded' or 'built for this' and you genuinely look forward to winter activities. You're the friend dragging people outside.",
      traits: ["Cold-resistant", "Adventurous", "Positive", "Outdoorsy"],
      advice: "Your winter enthusiasm is contagious! But have mercy on your cold-hating friends. Not everyone shares your superpower. Maybe offer them hand warmers before demanding they join your snow adventures."
    },
    cozy_hibernator: {
      type: "The Cozy Hibernator",
      description: "You've decided that winter is for staying in, and honestly? You've cracked the code. Your blanket collection is impressive, your comfort show rotation is perfect, and your hibernation game is strong. You emerge for necessities and cute winter activities, then retreat.",
      traits: ["Homebody", "Comfort-seeker", "Warm-blooded", "Introverted"],
      advice: "You've turned hibernation into an art form! Just remember that some sunlight and movement is important even in winter. Maybe a brief daily walk before retreating to your blanket fort?"
    },
    winter_hater: {
      type: "The Winter Sufferer",
      description: "You are SURVIVING, not thriving. Every day is a countdown to spring. Your relationship with winter is adversarial at best. You've seriously considered moving somewhere warm and you check the weather in San Diego just to hurt yourself. Winter is your villain origin story.",
      traits: ["Cold-sensitive", "Sun-seeking", "Dramatic", "Resilient"],
      advice: "Your suffering is valid! Consider investing in really good winter gear, a quality SAD lamp, and maybe therapy specializing in seasonal issues. Or just move somewhere warm - life is short and Florida exists."
    },
    practical: {
      type: "The Practical Winter-er",
      description: "Winter is just a season to you - not magical, not miserable, just something to manage. You prepare appropriately, adjust your routines, and get through it efficiently. No drama, no complaints, just practical adaptation. Very evolved of you.",
      traits: ["Pragmatic", "Adaptable", "Prepared", "Level-headed"],
      advice: "Your practical approach is admirable! But maybe let yourself feel something about winter? Either lean into the cozy vibes or let out one good complaint. It's okay to have an opinion on being cold."
    }
  }
};
