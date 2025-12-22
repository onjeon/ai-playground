// Your Role at Thanksgiving - Viral seasonal test for American English users

export const testData = {
  id: "seasonal-thanksgiving-role",
  title: "Your Role at Thanksgiving",
  description: "Host extraordinaire or strategic couch claimer? What's your Thanksgiving job?",
  questions: [
    {
      id: 1,
      text: "The day before Thanksgiving, you're:",
      options: [
        { text: "Prepping food, setting tables, full planning mode", type: "host" },
        { text: "Assigned a dish I'm perfecting at home", type: "contributor" },
        { text: "Packing my stretchy pants and nap pillow", type: "guest" },
        { text: "Trying to figure out how to avoid family drama", type: "survivor" }
      ]
    },
    {
      id: 2,
      text: "Your contribution to Thanksgiving dinner:",
      options: [
        { text: "I'm making most/all of it. This is my show", type: "host" },
        { text: "My signature dish that everyone expects", type: "contributor" },
        { text: "Wine. Napkins. Vibes. Maybe store-bought pie", type: "guest" },
        { text: "An appetite and the ability to change subjects", type: "survivor" }
      ]
    },
    {
      id: 3,
      text: "During the actual meal, you're:",
      options: [
        { text: "Making sure everyone has what they need", type: "host" },
        { text: "Proudly watching people eat my dish", type: "contributor" },
        { text: "Eating strategically to maximize enjoyment", type: "guest" },
        { text: "Navigating seating to avoid certain relatives", type: "survivor" }
      ]
    },
    {
      id: 4,
      text: "The conversation turns political/controversial. You:",
      options: [
        { text: "Redirect skillfully - dessert time!", type: "host" },
        { text: "Try to change the subject peacefully", type: "contributor" },
        { text: "Go get more food and avoid eye contact", type: "guest" },
        { text: "This is why I sit near the exit", type: "survivor" }
      ]
    },
    {
      id: 5,
      text: "Your relationship with leftovers:",
      options: [
        { text: "I package them for everyone to take home", type: "host" },
        { text: "I claim my fair share of my own dish at least", type: "contributor" },
        { text: "Leftovers are why I came. I want them ALL", type: "guest" },
        { text: "Take what I can and escape quickly", type: "survivor" }
      ]
    },
    {
      id: 6,
      text: "Post-dinner, you're found:",
      options: [
        { text: "Cleaning up and organizing leftovers", type: "host" },
        { text: "Helping with dishes while chatting", type: "contributor" },
        { text: "On the couch in a food coma, as intended", type: "guest" },
        { text: "Checking how early I can leave without being rude", type: "survivor" }
      ]
    },
    {
      id: 7,
      text: "The thing you look forward to most:",
      options: [
        { text: "Hosting people I love and creating memories", type: "host" },
        { text: "Compliments on my cooking contribution", type: "contributor" },
        { text: "The food. All of it. Every dish", type: "guest" },
        { text: "It being over tbh", type: "survivor" }
      ]
    },
    {
      id: 8,
      text: "Your Thanksgiving outfit:",
      options: [
        { text: "Nice but practical - I'm working today", type: "host" },
        { text: "Cute fall look for the gram", type: "contributor" },
        { text: "Stretchy waistband is the only requirement", type: "guest" },
        { text: "Whatever makes me least noticeable", type: "survivor" }
      ]
    },
    {
      id: 9,
      text: "Dealing with relatives you see once a year:",
      options: [
        { text: "I genuinely enjoy catching up with everyone", type: "host" },
        { text: "Polite conversations, some genuine connection", type: "contributor" },
        { text: "Mastered the art of vague friendly responses", type: "guest" },
        { text: "Prepared answers for invasive questions", type: "survivor" }
      ]
    },
    {
      id: 10,
      text: "Overall, Thanksgiving is:",
      options: [
        { text: "My time to shine as host/organizer", type: "host" },
        { text: "A nice tradition I contribute to meaningfully", type: "contributor" },
        { text: "A food holiday I fully embrace", type: "guest" },
        { text: "A family obligation I navigate carefully", type: "survivor" }
      ]
    }
  ],
  results: {
    host: {
      type: "The Thanksgiving Commander",
      description: "You run this holiday. The menu is planned, the seating chart is strategic, and you've been prepping for days. You orchestrate Thanksgiving like a military operation and the results are delicious. You might be exhausted, but you're also proud. This is your Super Bowl.",
      traits: ["Organized", "Generous", "In charge", "Slightly stressed"],
      advice: "You're amazing and everyone appreciates you! But please accept help and sit down occasionally. Martyrdom isn't required for a good holiday. And maybe let someone else host next year? Just once."
    },
    contributor: {
      type: "The Reliable Side Kick",
      description: "You show up with your signature dish and good vibes. You help where needed, clean when appropriate, and contribute without taking over. You've found the sweet spot between guest and host, and honestly? It's the ideal position. Your dish better be at every Thanksgiving.",
      traits: ["Helpful", "Reliable", "Team player", "Good guest"],
      advice: "You've mastered Thanksgiving! Keep bringing that dish everyone loves. Consider offering to help the host more - they might be drowning and too proud to ask."
    },
    guest: {
      type: "The Strategic Eater",
      description: "You're here for the food and the nap, in that order. You contribute minimally (wine? napkins? gratitude?) and eat maximally. Your only agenda is enjoying the holiday without too much responsibility. And honestly? That's a valid life choice. Someone needs to eat the food.",
      traits: ["Relaxed", "Food-focused", "Low maintenance", "Nap-ready"],
      advice: "Living the dream! But maybe offer to help with ONE thing next year. Hosts notice who disappears during cleanup. A little effort goes a long way for your leftovers privileges."
    },
    survivor: {
      type: "The Family Diplomat",
      description: "Thanksgiving for you is about strategic navigation. Where to sit, what to say, when to leave - all calculated for minimum drama, maximum survival. You've got deflection phrases ready and an exit strategy planned. You're not cynical, you're realistic about family dynamics.",
      traits: ["Strategic", "Cautious", "Prepared", "Diplomatic"],
      advice: "Your survival skills are impressive! But maybe this year, try to find one genuine moment of connection. Not every family interaction has to be combat. And if it does... maybe host your own friendsgiving instead?"
    }
  }
};
