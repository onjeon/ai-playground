// What Are You in a Parallel Universe? - Viral quirky test for American English users

export const testData = {
  id: "quirky-parallel-universe",
  title: "What Are You in a Parallel Universe?",
  description: "Somewhere out there, another you is living a totally different life. Who are they?",
  questions: [
    {
      id: 1,
      text: "The road not taken you think about most:",
      options: [
        { text: "A creative path - art, music, performance", type: "artist" },
        { text: "A completely different career field", type: "professional" },
        { text: "A wild, unconventional lifestyle", type: "adventurer" },
        { text: "A simpler, quieter life somewhere remote", type: "hermit" }
      ]
    },
    {
      id: 2,
      text: "Your secret 'what if' career fantasy:",
      options: [
        { text: "Famous artist, musician, or performer", type: "artist" },
        { text: "Successful in a field I never pursued", type: "professional" },
        { text: "Professional traveler, explorer, or athlete", type: "adventurer" },
        { text: "Farmer, lighthouse keeper, or recluse", type: "hermit" }
      ]
    },
    {
      id: 3,
      text: "In your fantasy alternate life, your social status is:",
      options: [
        { text: "Recognized and admired for my creative work", type: "artist" },
        { text: "Respected professional in my field", type: "professional" },
        { text: "Known for my adventures and wild stories", type: "adventurer" },
        { text: "Mostly unknown and happy about it", type: "hermit" }
      ]
    },
    {
      id: 4,
      text: "The skill you wish you'd developed:",
      options: [
        { text: "An artistic or creative talent", type: "artist" },
        { text: "A technical or professional expertise", type: "professional" },
        { text: "Physical skills or outdoor abilities", type: "adventurer" },
        { text: "Self-sufficiency and simple living skills", type: "hermit" }
      ]
    },
    {
      id: 5,
      text: "Your parallel universe self lives in:",
      options: [
        { text: "A creative city full of art and culture", type: "artist" },
        { text: "A successful metropolitan area", type: "professional" },
        { text: "Constantly traveling or somewhere exotic", type: "adventurer" },
        { text: "A cabin in the woods or remote location", type: "hermit" }
      ]
    },
    {
      id: 6,
      text: "What drives your alternate self:",
      options: [
        { text: "Expression and creation", type: "artist" },
        { text: "Achievement and expertise", type: "professional" },
        { text: "Experience and freedom", type: "adventurer" },
        { text: "Peace and simplicity", type: "hermit" }
      ]
    },
    {
      id: 7,
      text: "Your parallel self's biggest accomplishment:",
      options: [
        { text: "Created something beautiful that touches people", type: "artist" },
        { text: "Rose to the top of their field", type: "professional" },
        { text: "Lived more than most people dream", type: "adventurer" },
        { text: "Found true contentment and peace", type: "hermit" }
      ]
    },
    {
      id: 8,
      text: "The lifestyle aspect you envy most:",
      options: [
        { text: "Creative freedom and artistic expression", type: "artist" },
        { text: "Professional success and recognition", type: "professional" },
        { text: "Adventure and lack of routine", type: "adventurer" },
        { text: "Quiet and escape from the chaos", type: "hermit" }
      ]
    },
    {
      id: 9,
      text: "Your alternate self's relationship with society:",
      options: [
        { text: "Part of creative communities and scenes", type: "artist" },
        { text: "Integrated and successful within systems", type: "professional" },
        { text: "Free from normal constraints and expectations", type: "adventurer" },
        { text: "Intentionally removed and independent", type: "hermit" }
      ]
    },
    {
      id: 10,
      text: "If you could visit your parallel universe self:",
      options: [
        { text: "I'd want to see their creative work and process", type: "artist" },
        { text: "I'd want to learn from their success path", type: "professional" },
        { text: "I'd want to hear their adventure stories", type: "adventurer" },
        { text: "I'd want to experience their peace and quiet", type: "hermit" }
      ]
    }
  ],
  results: {
    artist: {
      type: "The Celebrated Artist",
      description: "In a parallel universe, you're living your creative dreams! You're an artist, musician, writer, or performer who followed their passion and it worked out. You have creative freedom, your work touches people, and you've built a life around expression. Alternate you is probably very cool.",
      traits: ["Creative", "Expressive", "Artistic", "Recognized"],
      advice: "This version of you is a fantasy worth examining. What's stopping you from incorporating more creativity into your actual life? You don't have to become a full-time artist, but that creative itch exists for a reason."
    },
    professional: {
      type: "The Successful Professional",
      description: "In a parallel universe, you took a completely different career path and CRUSHED IT. Maybe it's the field you almost pursued, or one you never considered. But alternate you is successful, respected, and thriving in their expertise. Different choices, different wins.",
      traits: ["Successful", "Expertise", "Respected", "Different path"],
      advice: "This parallel self represents unexplored potential. While you can't undo choices, you CAN develop new skills and directions. Your current path isn't your only path. Expertise can be built at any age."
    },
    adventurer: {
      type: "The Wild Adventurer",
      description: "In a parallel universe, you said YES to everything wild. You're a traveler, explorer, or thrill-seeker living an unconventional life. No cubicle, no routine - just experiences and stories. Alternate you has less stability but WAY more stories.",
      traits: ["Free-spirited", "Adventurous", "Unconventional", "Story-rich"],
      advice: "This alternate life represents your desire for freedom and experience. You don't have to become a nomad, but maybe you need more adventure in your current life. When did you last do something for the first time?"
    },
    hermit: {
      type: "The Peaceful Recluse",
      description: "In a parallel universe, you checked out of the rat race entirely. Cabin in the woods, small farm, off-grid life - whatever it looks like, it's quiet, simple, and completely on your terms. Alternate you has escaped the chaos you're still navigating.",
      traits: ["Peaceful", "Simple", "Self-sufficient", "Escaped"],
      advice: "This fantasy says a lot about your relationship with modern life stress. You don't have to go full hermit, but you clearly need more quiet, simplicity, or nature. What small escapes can you build into your actual life?"
    }
  }
};
