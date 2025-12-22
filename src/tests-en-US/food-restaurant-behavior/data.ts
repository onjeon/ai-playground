// Your Restaurant Personality - Viral food test for American English users

export const testData = {
  id: "food-restaurant-behavior",
  title: "Your Restaurant Personality",
  description: "Perfect customer or server's nightmare? Let's find your dining style!",
  questions: [
    {
      id: 1,
      text: "You walk into a restaurant. First thing you do:",
      options: [
        { text: "Wait politely to be seated, scan the vibe", type: "polite" },
        { text: "Check the specials board, plan my order", type: "foodie" },
        { text: "Find the best table and claim it", type: "assertive" },
        { text: "Immediately get anxious about the whole situation", type: "anxious" }
      ]
    },
    {
      id: 2,
      text: "Your relationship with menu modifications:",
      options: [
        { text: "Order as-is. Chef knows best", type: "polite" },
        { text: "Ask about ingredients, maybe one small tweak", type: "foodie" },
        { text: "I modify to get exactly what I want", type: "assertive" },
        { text: "Too scared to ask for changes usually", type: "anxious" }
      ]
    },
    {
      id: 3,
      text: "The food arrives and it's not what you ordered:",
      options: [
        { text: "Politely mention it and let them fix it", type: "polite" },
        { text: "Discuss the error, interested in how it happened", type: "foodie" },
        { text: "Immediately flag it - this needs correction NOW", type: "assertive" },
        { text: "Probably just eat it and say nothing tbh", type: "anxious" }
      ]
    },
    {
      id: 4,
      text: "Server hasn't checked on you in a while:",
      options: [
        { text: "Wait patiently, they're busy", type: "polite" },
        { text: "Try to catch their eye casually", type: "foodie" },
        { text: "Flag them down - I need service!", type: "assertive" },
        { text: "Suffer in silence until they appear", type: "anxious" }
      ]
    },
    {
      id: 5,
      text: "Splitting the bill situation:",
      options: [
        { text: "Happy to split evenly for simplicity", type: "polite" },
        { text: "Split based on what each person ordered", type: "foodie" },
        { text: "I pay for what I ate, exactly", type: "assertive" },
        { text: "I'll just Venmo whatever someone tells me", type: "anxious" }
      ]
    },
    {
      id: 6,
      text: "Your ordering style:",
      options: [
        { text: "Order quickly, don't hold up the table", type: "polite" },
        { text: "Ask questions about dishes, make informed choice", type: "foodie" },
        { text: "Take my time, customize if needed", type: "assertive" },
        { text: "Panic-order whatever's first on the menu", type: "anxious" }
      ]
    },
    {
      id: 7,
      text: "Tipping philosophy:",
      options: [
        { text: "20% minimum, more for good service", type: "polite" },
        { text: "Based on quality of food AND service", type: "foodie" },
        { text: "Tip reflects the experience accurately", type: "assertive" },
        { text: "Always tip well because servers need it", type: "anxious" }
      ]
    },
    {
      id: 8,
      text: "The table next to you is LOUD:",
      options: [
        { text: "Ignore it and enjoy my company/food", type: "polite" },
        { text: "Mildly annoyed but what can you do", type: "foodie" },
        { text: "Might ask to move or mention it to staff", type: "assertive" },
        { text: "Internal screaming but external silence", type: "anxious" }
      ]
    },
    {
      id: 9,
      text: "There's a long wait for a table. You:",
      options: [
        { text: "Wait patiently, maybe grab a drink", type: "polite" },
        { text: "Scope out how busy it is, decide if worth waiting", type: "foodie" },
        { text: "Ask for realistic time estimate, might leave", type: "assertive" },
        { text: "Probably suggest going somewhere else", type: "anxious" }
      ]
    },
    {
      id: 10,
      text: "How servers probably describe you:",
      options: [
        { text: "Nice, easy, pleasant to serve", type: "polite" },
        { text: "Engaged, asks good questions, appreciates food", type: "foodie" },
        { text: "Knows what they want, direct communicator", type: "assertive" },
        { text: "Quiet, low-maintenance, overthinks ordering", type: "anxious" }
      ]
    }
  ],
  results: {
    polite: {
      type: "The Dream Customer",
      description: "You're the customer every server loves. Patient, polite, easy-going, and a solid tipper. You don't cause problems, you're pleasant to serve, and you let minor issues slide. Maybe TOO easy-going sometimes? But overall, you're restaurant gold.",
      traits: ["Polite", "Patient", "Easy-going", "Considerate"],
      advice: "You're wonderful! But it's okay to speak up when something's actually wrong. Being polite doesn't mean accepting bad service or food. Find that balance between doormat and dream customer."
    },
    foodie: {
      type: "The Engaged Diner",
      description: "You're there for the EXPERIENCE. You ask about dishes, appreciate the craft, notice the details. Servers who love their menu love you. You might be slightly high-maintenance but it comes from genuine food appreciation, not entitlement.",
      traits: ["Engaged", "Knowledgeable", "Curious", "Food-focused"],
      advice: "Your food enthusiasm is great! Just make sure your questions enhance the experience for everyone at the table, not just you. And remember servers aren't always food experts - be gracious with your knowledge."
    },
    assertive: {
      type: "The Direct Diner",
      description: "You know what you want and you're not shy about it. You'll modify orders, send things back, and expect proper service. Some might call you 'difficult' but you call it 'having standards.' You're paying for this experience, after all.",
      traits: ["Assertive", "Direct", "Standard-having", "No-nonsense"],
      advice: "Having standards is valid! But delivery matters. Being direct doesn't have to mean being demanding. Respect goes both ways - servers are people too. Find assertive AND kind."
    },
    anxious: {
      type: "The Anxious Eater",
      description: "Restaurants stress you out a little (or a lot). Ordering is pressure, modifications feel impossible, and sending food back is unthinkable. You'd rather eat something wrong than cause a scene. Dining should be relaxing but for you... it's an experience to survive.",
      traits: ["Anxious", "Conflict-avoidant", "Quiet", "Overthinking"],
      advice: "You deserve to enjoy dining out! Practice small assertive moments - asking one question, making one modification. It gets easier with practice. No one is judging you as much as you think. Promise."
    }
  }
};
