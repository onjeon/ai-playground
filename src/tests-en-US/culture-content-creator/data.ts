// Your Content Creator Personality - Viral modern culture test for American English users

export const testData = {
  id: "culture-content-creator",
  title: "Your Content Creator Personality",
  description: "If you were a full-time content creator, what would your style be? Discover your creator archetype!",
  questions: [
    {
      id: 1,
      text: "What motivates you to create?",
      options: [
        { text: "I have knowledge to share with the world", type: "educator" },
        { text: "Making people laugh is literally my purpose", type: "entertainer" },
        { text: "I want to inspire people with my lifestyle", type: "lifestyle" },
        { text: "Building community and genuine connection", type: "community" }
      ]
    },
    {
      id: 2,
      text: "Your content planning style:",
      options: [
        { text: "Research-heavy, value-focused, educational outline", type: "educator" },
        { text: "Whatever's funny right now - trends move fast", type: "entertainer" },
        { text: "Aesthetic planning, mood boards, visual consistency", type: "lifestyle" },
        { text: "Based on what my audience asks for and needs", type: "community" }
      ]
    },
    {
      id: 3,
      text: "Your dream collab partner:",
      options: [
        { text: "An expert in my field for a deep-dive conversation", type: "educator" },
        { text: "Another comedian for chaos content", type: "entertainer" },
        { text: "A brand that matches my aesthetic perfectly", type: "lifestyle" },
        { text: "My followers - featuring them is the dream", type: "community" }
      ]
    },
    {
      id: 4,
      text: "Your content would be described as:",
      options: [
        { text: "Actually useful and informative", type: "educator" },
        { text: "Unhinged in the best way", type: "entertainer" },
        { text: "Aspirational and aesthetically pleasing", type: "lifestyle" },
        { text: "Warm, personal, and connective", type: "community" }
      ]
    },
    {
      id: 5,
      text: "How do you handle content burnout?",
      options: [
        { text: "Batch content when inspired so I always have value ready", type: "educator" },
        { text: "Lean into the chaos - my burnout is content too", type: "entertainer" },
        { text: "Take aesthetic breaks, recharge with inspiration", type: "lifestyle" },
        { text: "Be honest with my audience, they'll understand", type: "community" }
      ]
    },
    {
      id: 6,
      text: "What matters most to you as a creator?",
      options: [
        { text: "Actually helping people learn and improve", type: "educator" },
        { text: "The algorithm - I need those views", type: "entertainer" },
        { text: "Building a beautiful, cohesive brand", type: "lifestyle" },
        { text: "The relationships I build with my audience", type: "community" }
      ]
    },
    {
      id: 7,
      text: "Your editing style:",
      options: [
        { text: "Clean, clear, focused on delivering the message", type: "educator" },
        { text: "Chaotic zoom-ins, sound effects, meme energy", type: "entertainer" },
        { text: "Polished, color-graded, visually stunning", type: "lifestyle" },
        { text: "Raw and authentic - overproduction kills connection", type: "community" }
      ]
    },
    {
      id: 8,
      text: "Your relationship with brand deals:",
      options: [
        { text: "Only for products I genuinely use and recommend", type: "educator" },
        { text: "Turn them into content that's still entertaining", type: "entertainer" },
        { text: "Dream scenario - my whole aesthetic IS a brand deal", type: "lifestyle" },
        { text: "Careful - don't want to lose trust with my people", type: "community" }
      ]
    },
    {
      id: 9,
      text: "Your comment section vibe:",
      options: [
        { text: "Questions I can answer and provide more value", type: "educator" },
        { text: "People tagging friends saying 'this is you'", type: "entertainer" },
        { text: "Compliments on the aesthetic and lifestyle", type: "lifestyle" },
        { text: "Feels like a group chat with my friends", type: "community" }
      ]
    },
    {
      id: 10,
      text: "Success as a creator means:",
      options: [
        { text: "Becoming an authority in my space", type: "educator" },
        { text: "Making content that breaks the internet", type: "entertainer" },
        { text: "Living the life I'm curating online", type: "lifestyle" },
        { text: "Having a loyal audience who genuinely cares", type: "community" }
      ]
    }
  ],
  results: {
    educator: {
      type: "The Knowledge Guru",
      description: "You're the creator people TRUST. Your content actually helps. You've probably said 'let me explain' more times than you can count. Whether it's a skill, industry, or random niche you're obsessed with - you make people smarter. Your viewers come with questions and leave with answers.",
      traits: ["Expertise-driven", "Value-focused", "Trustworthy", "Genuinely helpful"],
      advice: "Your knowledge is your superpower, but don't forget personality matters too. The best educators are also entertaining. Let your quirks show through the education."
    },
    entertainer: {
      type: "The Chaos Agent",
      description: "You're here to make people LAUGH. Your content is pure serotonin. Trends bow to you, algorithms fear you, and your notification sounds never stop. You've turned being unhinged into an art form. People watch your content to feel something (mostly joy and confusion).",
      traits: ["Naturally funny", "Trend-savvy", "High energy", "Engagement magnet"],
      advice: "Your comedic instincts are gold, but comedy burns people out fast. Develop sustainable content habits and remember: you don't have to be 'on' 24/7. Rest is part of the job."
    },
    lifestyle: {
      type: "The Aesthetic Architect",
      description: "Your content is a VIBE. Every frame could be a wallpaper. Brands want to work with you because you make everything look good. You've mastered the art of making life look both aspirational AND somehow achievable. Your followers want to BE you.",
      traits: ["Visual genius", "Brand builder", "Aspirational energy", "Curated perfection"],
      advice: "Your aesthetic eye is rare, but don't lose authenticity in the curation. The best lifestyle creators show the mess sometimes. Perfection can feel distant - relatability keeps people loyal."
    },
    community: {
      type: "The Connection Cultivator",
      description: "You're not just a creator - you're a friend. Your followers feel like they KNOW you. Your content is a two-way conversation. You remember usernames, respond to comments, and make people feel seen. Your community would go to war for you (not that you'd ask).",
      traits: ["Genuine connector", "Audience-first", "Community builder", "Authentically caring"],
      advice: "Your connection is your superpower, but set boundaries. You can't pour from an empty cup. It's okay to step back sometimes - your community will understand and wait for you."
    }
  }
};
