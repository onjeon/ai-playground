// Creative Thinking Test - Viral IQ test for American English users

export const testData = {
  id: "iq-creative-thinking",
  title: "Creative Thinking Test",
  description: "How creative is your brain? Test your ability to think outside the box and generate original ideas!",
  questions: [
    {
      id: 1,
      text: "How many uses can you think of for a brick (other than building)?",
      options: [
        { text: "10+ easily - doorstop, weapon, bookend, art, workout weight...", type: "genius" },
        { text: "5-9 different uses come to mind", type: "creative" },
        { text: "2-4 uses with some thought", type: "average" },
        { text: "Just building stuff, that's what bricks are for", type: "practical" }
      ]
    },
    {
      id: 2,
      text: "If animals could talk, which would be the rudest and why?",
      options: [
        { text: "I have an elaborate, hilarious answer ready", type: "genius" },
        { text: "Cats, obviously - their attitude says it all", type: "creative" },
        { text: "Never really thought about it before", type: "average" },
        { text: "This question doesn't make sense, animals can't talk", type: "practical" }
      ]
    },
    {
      id: 3,
      text: "You're stuck in traffic. Your mind tends to:",
      options: [
        { text: "Wander to wild scenarios, story ideas, or inventions", type: "genius" },
        { text: "Daydream about future plans or memories", type: "creative" },
        { text: "Listen to music/podcasts to pass time", type: "average" },
        { text: "Focus on the road and traffic patterns", type: "practical" }
      ]
    },
    {
      id: 4,
      text: "When solving a problem, you're most likely to:",
      options: [
        { text: "Come up with a completely unconventional approach", type: "genius" },
        { text: "Combine existing ideas in new ways", type: "creative" },
        { text: "Use tried-and-true methods that work", type: "average" },
        { text: "Follow the most logical, efficient path", type: "practical" }
      ]
    },
    {
      id: 5,
      text: "What would you invent if you had unlimited resources?",
      options: [
        { text: "Something wild that doesn't exist yet - I have the concept ready", type: "genius" },
        { text: "An improved version of something that frustrates me daily", type: "creative" },
        { text: "I'd need time to think about this one", type: "average" },
        { text: "Something practical that solves a real problem", type: "practical" }
      ]
    },
    {
      id: 6,
      text: "How often do you have 'shower thoughts' or random brilliant ideas?",
      options: [
        { text: "Constantly - I should start a notes app dedicated to them", type: "genius" },
        { text: "Pretty often, usually interesting connections", type: "creative" },
        { text: "Occasionally, when something triggers it", type: "average" },
        { text: "Rarely - I think about tasks and to-do lists", type: "practical" }
      ]
    },
    {
      id: 7,
      text: "If you wrote a book, it would probably be:",
      options: [
        { text: "A totally original genre-bending story no one's seen before", type: "genius" },
        { text: "A creative fiction with unique characters and plot", type: "creative" },
        { text: "Maybe a memoir or something based on real experiences", type: "average" },
        { text: "Non-fiction about something useful or informative", type: "practical" }
      ]
    },
    {
      id: 8,
      text: "Someone says 'purple elephant'. Your brain immediately:",
      options: [
        { text: "Creates an entire backstory, world, or scenario for it", type: "genius" },
        { text: "Visualizes a vivid image with details", type: "creative" },
        { text: "Thinks 'that's weird' and moves on", type: "average" },
        { text: "Wonders why someone would say something so random", type: "practical" }
      ]
    },
    {
      id: 9,
      text: "When learning something new, you prefer to:",
      options: [
        { text: "Experiment and discover your own methods", type: "genius" },
        { text: "Learn basics then add your own twist", type: "creative" },
        { text: "Follow tutorials and established methods", type: "average" },
        { text: "Master the proven techniques first", type: "practical" }
      ]
    },
    {
      id: 10,
      text: "How do you feel about rules and conventions?",
      options: [
        { text: "Rules are meant to be questioned and reimagined", type: "genius" },
        { text: "I follow most but bend some creatively", type: "creative" },
        { text: "Rules exist for a reason, I generally follow them", type: "average" },
        { text: "Structure and rules help society function", type: "practical" }
      ]
    }
  ],
  results: {
    genius: {
      type: "Creative Genius",
      description: "Your imagination is absolutely wild! Your brain makes connections others can't see and generates ideas at a rate that probably overwhelms you sometimes. You're the person who thinks 'what if?' constantly and could probably brainstorm for hours. Artists, innovators, and visionaries share your brain type!",
      traits: ["Boundless imagination", "Original thinking", "Idea generator", "Unconventional perspectives"],
      advice: "Your creativity is a superpower! Make sure to capture your ideas (voice memos, notes) and find ways to actually execute on them."
    },
    creative: {
      type: "Creative Thinker",
      description: "You've got a healthy creative mind that balances imagination with practicality! You come up with fresh ideas while still staying grounded. You're likely great at brainstorming sessions, creative projects, and finding elegant solutions to problems.",
      traits: ["Balanced creativity", "Fresh perspectives", "Idea connector", "Creative problem solver"],
      advice: "Keep exercising your creative muscles! Try new experiences, consume diverse content, and challenge yourself to think differently."
    },
    average: {
      type: "Adaptive Thinker",
      description: "You're creative when you need to be! You can think outside the box when the situation calls for it, but you don't spend your days in daydream mode. This balance actually makes you reliable and functional in most situations.",
      traits: ["Situational creativity", "Balanced approach", "Reliable thinking", "Practical imagination"],
      advice: "Try dedicated creative exercises - free writing, brainstorming, or creative hobbies can unlock more of your imaginative potential!"
    },
    practical: {
      type: "Practical Thinker",
      description: "You're grounded, logical, and results-oriented! While you might not be generating wild ideas constantly, you're incredibly valuable as the person who makes things actually work. Someone has to turn creative chaos into reality - that's you!",
      traits: ["Results-focused", "Efficient thinking", "Reality-based", "Implementation strength"],
      advice: "Creativity isn't just for 'artsy' people! Try small exercises like improvisation games or creative writing to flex those muscles."
    }
  }
};
