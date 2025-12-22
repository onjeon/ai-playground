// What Energy Do You Give Off? - Viral self-discovery test for American English users

export const testData = {
  id: "self-energy-type",
  title: "What Energy Do You Give Off?",
  description: "You walk into a room and the vibe shifts. But what vibe are you bringing? Let's discover your energetic signature.",
  questions: [
    {
      id: 1,
      text: "When you enter a party, people probably think:",
      options: [
        { text: "Things are about to get fun", type: "fire" },
        { text: "Oh good, someone chill is here", type: "earth" },
        { text: "Ooh, who's that? Interesting energy.", type: "air" },
        { text: "They seem really sweet and caring", type: "water" }
      ]
    },
    {
      id: 2,
      text: "How do you affect the energy of a room?",
      options: [
        { text: "I turn up the heat - more energy, more fun", type: "fire" },
        { text: "I ground it - things feel calmer, more stable", type: "earth" },
        { text: "I make it more interesting - new ideas, fresh perspective", type: "air" },
        { text: "I soften it - more intimate, more connected", type: "water" }
      ]
    },
    {
      id: 3,
      text: "Strangers probably assume you're:",
      options: [
        { text: "Confident and exciting", type: "fire" },
        { text: "Reliable and down-to-earth", type: "earth" },
        { text: "Smart and a little mysterious", type: "air" },
        { text: "Kind and emotionally intuitive", type: "water" }
      ]
    },
    {
      id: 4,
      text: "Your text messages probably give off:",
      options: [
        { text: "Excited, lots of caps, maybe too many emojis", type: "fire" },
        { text: "Chill, practical, no drama", type: "earth" },
        { text: "Witty, interesting, probably overthought", type: "air" },
        { text: "Warm, caring, lots of checking in", type: "water" }
      ]
    },
    {
      id: 5,
      text: "In a group project, you naturally bring:",
      options: [
        { text: "Enthusiasm and momentum", type: "fire" },
        { text: "Structure and follow-through", type: "earth" },
        { text: "Ideas and creative direction", type: "air" },
        { text: "Harmony and team wellbeing", type: "water" }
      ]
    },
    {
      id: 6,
      text: "What do people come to you for?",
      options: [
        { text: "Motivation and hype", type: "fire" },
        { text: "Practical help and steadiness", type: "earth" },
        { text: "Fresh perspectives and ideas", type: "air" },
        { text: "Emotional support and listening", type: "water" }
      ]
    },
    {
      id: 7,
      text: "Your ideal vibe to give off:",
      options: [
        { text: "Infectious, energetic, life of the party", type: "fire" },
        { text: "Grounded, trustworthy, comfortable", type: "earth" },
        { text: "Intriguing, intellectual, unique", type: "air" },
        { text: "Nurturing, safe, emotionally aware", type: "water" }
      ]
    },
    {
      id: 8,
      text: "When meeting someone new, you:",
      options: [
        { text: "Match their energy and turn it up", type: "fire" },
        { text: "Stay consistent - I am who I am", type: "earth" },
        { text: "Get curious about who they are", type: "air" },
        { text: "Make sure they feel comfortable", type: "water" }
      ]
    },
    {
      id: 9,
      text: "People have probably described you as:",
      options: [
        { text: "A force of nature", type: "fire" },
        { text: "Solid as a rock", type: "earth" },
        { text: "A breath of fresh air", type: "air" },
        { text: "Emotionally deep", type: "water" }
      ]
    },
    {
      id: 10,
      text: "Your presence feels like:",
      options: [
        { text: "A bonfire - warm, bright, magnetic", type: "fire" },
        { text: "A mountain - steady, reliable, calming", type: "earth" },
        { text: "A breeze - refreshing, light, inspiring", type: "air" },
        { text: "An ocean - deep, healing, intuitive", type: "water" }
      ]
    }
  ],
  results: {
    fire: {
      type: "Fire Energy",
      description: "You bring the HEAT. Your energy is infectious, exciting, and impossible to ignore. People feel more alive around you. You're a spark that lights up any room, sometimes to the point of burning it down (in a good way?). Your enthusiasm is your superpower - and occasionally your chaos agent.",
      traits: ["Magnetic", "Energizing", "Passionate", "Sometimes overwhelming"],
      advice: "Your fire is a gift, but remember: not everyone wants to be lit up all the time. Learn to read when people need calm, not hype. And make sure you're not burning yourself out trying to keep everyone else warm."
    },
    earth: {
      type: "Earth Energy",
      description: "You're the grounded one. Steady, reliable, comforting. People feel safe around you because you're consistent - you don't shift with every wind. Your energy says 'I've got this handled.' You're the rock that others lean on, the foundation that doesn't shake.",
      traits: ["Stable", "Trustworthy", "Calming", "Possibly too rigid"],
      advice: "Your steadiness is rare and valuable, but don't let it become stuckness. Stability is a gift; resistance to change is not. Let yourself be moved sometimes. The strongest trees still sway in the wind."
    },
    air: {
      type: "Air Energy",
      description: "You bring fresh perspective. Your energy is light, curious, and intellectually stimulating. You make things interesting. People feel inspired around you - like new ideas are suddenly possible. You're the breath of fresh air that prevents staleness.",
      traits: ["Inspiring", "Curious", "Refreshing", "Sometimes scattered"],
      advice: "Your ideas are electric, but don't forget to ground them. Air needs earth sometimes. Follow through on your brilliant thoughts. And remember: not everything needs to be new and novel - sometimes depth beats breadth."
    },
    water: {
      type: "Water Energy",
      description: "You flow with emotional depth. Your energy is nurturing, intuitive, and healing. People feel truly seen around you. You adapt to what others need, providing comfort and connection. Your presence is like being wrapped in a warm blanket - safe and understood.",
      traits: ["Empathetic", "Intuitive", "Nurturing", "Sometimes absorbs too much"],
      advice: "Your emotional intelligence is a superpower, but you absorb energy like a sponge. Protect yourself from drowning in others' feelings. Your empathy should flow both ways - direct some of that care inward."
    }
  }
};
