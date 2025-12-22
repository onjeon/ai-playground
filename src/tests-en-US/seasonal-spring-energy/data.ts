// Your Spring Energy - Viral seasonal test for American English users

export const testData = {
  id: "seasonal-spring-energy",
  title: "Your Spring Energy",
  description: "Fresh start queen or allergy sufferer? What's your spring personality?",
  questions: [
    {
      id: 1,
      text: "First warm day of spring. You're:",
      options: [
        { text: "Outside immediately, absorbing vitamin D", type: "rebirth" },
        { text: "Starting my spring cleaning rampage", type: "cleaner" },
        { text: "Already sneezing. Allergies have entered the chat", type: "allergy" },
        { text: "Cautiously optimistic but know winter might return", type: "skeptic" }
      ]
    },
    {
      id: 2,
      text: "Your spring energy is spent on:",
      options: [
        { text: "New hobbies, fresh starts, self-improvement", type: "rebirth" },
        { text: "Deep cleaning, organizing, decluttering everything", type: "cleaner" },
        { text: "Surviving pollen season with all the meds", type: "allergy" },
        { text: "Waiting to see if this weather actually sticks", type: "skeptic" }
      ]
    },
    {
      id: 3,
      text: "Flowers blooming makes you feel:",
      options: [
        { text: "Alive! Renewed! Ready to blossom too!", type: "rebirth" },
        { text: "Time to garden and beautify my space", type: "cleaner" },
        { text: "Betrayed. Those flowers are trying to kill me", type: "allergy" },
        { text: "Nice I guess, if they survive the late frost", type: "skeptic" }
      ]
    },
    {
      id: 4,
      text: "Spring fashion transition:",
      options: [
        { text: "Bright colors! Fresh looks! New wardrobe!", type: "rebirth" },
        { text: "Time to pack away winter clothes and organize", type: "cleaner" },
        { text: "Sunglasses to hide puffy allergy eyes", type: "allergy" },
        { text: "Layers because weather is unpredictable", type: "skeptic" }
      ]
    },
    {
      id: 5,
      text: "Your relationship with spring cleaning:",
      options: [
        { text: "Love it as part of my fresh start energy", type: "rebirth" },
        { text: "It's my FAVORITE. Deep clean everything mode", type: "cleaner" },
        { text: "Hard to clean when I can't breathe", type: "allergy" },
        { text: "I'll clean when the weather consistently cooperates", type: "skeptic" }
      ]
    },
    {
      id: 6,
      text: "Your spring social life:",
      options: [
        { text: "Emerging from hibernation ready to socialize!", type: "rebirth" },
        { text: "Inviting people to see my newly cleaned space", type: "cleaner" },
        { text: "Limited by my desire to stay away from pollen", type: "allergy" },
        { text: "Starting to make plans but staying flexible", type: "skeptic" }
      ]
    },
    {
      id: 7,
      text: "When it rains in spring:",
      options: [
        { text: "April showers bring May flowers! Love it!", type: "rebirth" },
        { text: "Natural deep clean for everything outside", type: "cleaner" },
        { text: "Blessed relief from the pollen", type: "allergy" },
        { text: "See? Can't trust spring weather", type: "skeptic" }
      ]
    },
    {
      id: 8,
      text: "Your spring goals usually involve:",
      options: [
        { text: "New Year's resolution 2.0 - fresh start vibes", type: "rebirth" },
        { text: "Home projects and organization goals", type: "cleaner" },
        { text: "Surviving without being miserable", type: "allergy" },
        { text: "Realistic expectations based on past springs", type: "skeptic" }
      ]
    },
    {
      id: 9,
      text: "Windows open or closed in spring?",
      options: [
        { text: "OPEN! Fresh air! Nature sounds!", type: "rebirth" },
        { text: "Open to air out while I clean", type: "cleaner" },
        { text: "Closed. Sealed. Air purifier running", type: "allergy" },
        { text: "Depends on the day - spring is unpredictable", type: "skeptic" }
      ]
    },
    {
      id: 10,
      text: "How do you feel about spring overall?",
      options: [
        { text: "Best season! Everything feels possible!", type: "rebirth" },
        { text: "Perfect for getting things done and reset", type: "cleaner" },
        { text: "Would enjoy it more without the allergies", type: "allergy" },
        { text: "It's fine. Summer is the real goal", type: "skeptic" }
      ]
    }
  ],
  results: {
    rebirth: {
      type: "The Spring Butterfly",
      description: "You emerge from winter ready to TRANSFORM. New goals, new energy, new you! Spring represents possibility and you're grabbing it with both hands. Your fresh start energy is contagious and you genuinely believe this is your season to bloom. Main character energy activated!",
      traits: ["Optimistic", "Renewed", "Motivated", "Growth-oriented"],
      advice: "Channel that spring energy! But pace yourself - not everything needs to change at once. Some of those goals can stretch into summer. You've got time to bloom."
    },
    cleaner: {
      type: "The Spring Cleaner",
      description: "Spring means PURGE. Clean. Organize. Reset your space and reset your life. You've been eyeing that closet all winter and now it's TIME. Marie Kondo would be proud. Your space is about to spark so much joy.",
      traits: ["Organized", "Motivated", "Detail-oriented", "Refresh-focused"],
      advice: "Your cleaning energy is impressive! Just don't burn out before you get to enjoy your freshly organized space. And maybe go outside occasionally - nature cleaned itself too."
    },
    allergy: {
      type: "The Allergy Survivor",
      description: "Spring would be great IF YOUR IMMUNE SYSTEM DIDN'T THINK TREES WERE THE ENEMY. You've got your Zyrtec, your eye drops, your tissues, and your complaints ready. You're surviving spring one antihistamine at a time. The flowers are beautiful through your watery eyes.",
      traits: ["Resilient", "Prepared", "Suffering", "Medicated"],
      advice: "Solidarity to you and your immune system's overreaction! Consider allergy shots, air purifiers, and moving to a location with fewer trees. Spring will end eventually. Hang in there!"
    },
    skeptic: {
      type: "The Spring Skeptic",
      description: "You've been hurt before. That nice 70-degree day followed by a random snowstorm? You remember. You're not falling for spring's tricks until you see consistent warmth. Trust is earned, and spring hasn't earned it yet.",
      traits: ["Realistic", "Cautious", "Weather-wise", "Patient"],
      advice: "Your caution is understandable! Spring IS unpredictable. But maybe enjoy the good days when they happen instead of waiting for betrayal? Even suspicious joy is still joy."
    }
  }
};
