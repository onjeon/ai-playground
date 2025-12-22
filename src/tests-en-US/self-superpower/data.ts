// What's Your Secret Superpower? - Viral self-discovery test for American English users

export const testData = {
  id: "self-superpower",
  title: "What's Your Secret Superpower?",
  description: "Everyone has a hidden strength - something that comes so naturally you might not even notice it. Time to discover what makes you extraordinary.",
  questions: [
    {
      id: 1,
      text: "What do people come to you for?",
      options: [
        { text: "Advice when they're struggling or confused", type: "wisdom" },
        { text: "Energy when they need motivation or hype", type: "energy" },
        { text: "Solutions when they have a problem to solve", type: "problem" },
        { text: "Calm when everything feels chaotic", type: "calm" }
      ]
    },
    {
      id: 2,
      text: "What feels easy to you that others find hard?",
      options: [
        { text: "Understanding complex emotions and situations", type: "wisdom" },
        { text: "Getting excited and bringing enthusiasm", type: "energy" },
        { text: "Breaking down problems into solutions", type: "problem" },
        { text: "Staying grounded when things go wrong", type: "calm" }
      ]
    },
    {
      id: 3,
      text: "In a crisis, you automatically:",
      options: [
        { text: "See the bigger picture and what it all means", type: "wisdom" },
        { text: "Rally everyone and boost morale", type: "energy" },
        { text: "Start troubleshooting and finding solutions", type: "problem" },
        { text: "Stay cool and help others stay calm", type: "calm" }
      ]
    },
    {
      id: 4,
      text: "People have told you that you're:",
      options: [
        { text: "Insightful - you see things others miss", type: "wisdom" },
        { text: "Magnetic - you light up a room", type: "energy" },
        { text: "Clever - you figure things out fast", type: "problem" },
        { text: "Steady - you're the rock when things shake", type: "calm" }
      ]
    },
    {
      id: 5,
      text: "What role do you naturally fall into in groups?",
      options: [
        { text: "The sage - offering perspective and understanding", type: "wisdom" },
        { text: "The hype person - bringing energy and enthusiasm", type: "energy" },
        { text: "The fixer - solving problems and removing obstacles", type: "problem" },
        { text: "The anchor - keeping everyone grounded and steady", type: "calm" }
      ]
    },
    {
      id: 6,
      text: "Your ideal way to help someone:",
      options: [
        { text: "Help them understand themselves and their situation", type: "wisdom" },
        { text: "Remind them of their potential and cheer them on", type: "energy" },
        { text: "Give them a practical solution or next step", type: "problem" },
        { text: "Just be there, steady and present", type: "calm" }
      ]
    },
    {
      id: 7,
      text: "What do you undervalue about yourself?",
      options: [
        { text: "My ability to understand deep truths", type: "wisdom" },
        { text: "My ability to energize and inspire others", type: "energy" },
        { text: "My ability to fix things and find solutions", type: "problem" },
        { text: "My ability to stay calm and create peace", type: "calm" }
      ]
    },
    {
      id: 8,
      text: "If you were an X-Men character, your power would be:",
      options: [
        { text: "Mind-reading / Understanding people deeply", type: "wisdom" },
        { text: "Energy projection / Transmitting positive force", type: "energy" },
        { text: "Super intelligence / Solving any problem", type: "problem" },
        { text: "Unshakeable force field / Nothing rattles you", type: "calm" }
      ]
    },
    {
      id: 9,
      text: "What's the best compliment you've received?",
      options: [
        { text: "'You understood exactly what I needed to hear'", type: "wisdom" },
        { text: "'You made me feel like I could do anything'", type: "energy" },
        { text: "'I couldn't have solved this without you'", type: "problem" },
        { text: "'You made me feel safe when everything was falling apart'", type: "calm" }
      ]
    },
    {
      id: 10,
      text: "What would the world lose if you weren't in it?",
      options: [
        { text: "Deep understanding and perspective", type: "wisdom" },
        { text: "Contagious enthusiasm and joy", type: "energy" },
        { text: "Creative solutions and forward momentum", type: "problem" },
        { text: "Grounding presence and peaceful energy", type: "calm" }
      ]
    }
  ],
  results: {
    wisdom: {
      type: "Superpower: Deep Understanding",
      description: "You see what others miss. While everyone's reacting to the surface, you're reading the undercurrents. Your gift is perception - understanding people, situations, and truths that aren't obvious. People feel truly seen around you because you actually SEE them.",
      traits: ["Perceptive", "Emotionally intelligent", "Pattern-recognizer", "Wisdom-holder"],
      advice: "Your insight is rare - but don't forget to share it. Sometimes you see so much you stay quiet, thinking others must see it too. They don't. Your perspective matters. Speak up, especially when someone needs truth delivered with love."
    },
    energy: {
      type: "Superpower: Contagious Energy",
      description: "You're a human battery. Your enthusiasm is CONTAGIOUS. When you walk into a room, the energy shifts. People feel more alive, more hopeful, more capable around you. You don't just bring vibes - you transmit possibility. That's incredibly rare.",
      traits: ["Energizing presence", "Natural motivator", "Joy-bringer", "Enthusiasm amplifier"],
      advice: "Your energy is a gift, but make sure you're filling your own cup too. You give so much light to others - where does yours come from? Protect your sources of joy. Burned out, you can't light anyone up."
    },
    problem: {
      type: "Superpower: Solution Mind",
      description: "While others panic, you problem-solve. Your brain is wired to break down challenges and find paths forward. You see obstacles as puzzles, not dead ends. People bring you their messes because they know you'll find a way through. You're the ultimate 'figure it out' person.",
      traits: ["Strategic thinker", "Practical genius", "Calm under pressure", "Solution-oriented"],
      advice: "Your problem-solving is powerful, but not everything is a problem to solve. Some things just need to be felt, witnessed, or held without fixing. Practice asking 'do you want solutions or support?' before jumping into fix-it mode."
    },
    calm: {
      type: "Superpower: Grounding Presence",
      description: "You're the eye of the storm. When everything's chaos, you're the calm that helps others breathe. Your steadiness isn't passive - it's powerful. People feel safer just being near you. You absorb anxiety and radiate peace. In a world of panic, you're an anchor.",
      traits: ["Emotionally steady", "Peace-bringer", "Anchor energy", "Safe presence"],
      advice: "Your calm is invaluable, but make sure you're not suppressing rather than truly being at peace. Steadiness shouldn't mean disconnection. Let yourself feel deeply even as you hold space for others. The best anchors are rooted, not numb."
    }
  }
};
