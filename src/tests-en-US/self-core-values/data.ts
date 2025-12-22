// What Are Your Core Values? - Viral self-discovery test for American English users

export const testData = {
  id: "self-core-values",
  title: "What Are Your Core Values?",
  description: "Forget what you think you SHOULD value. What do you actually value? Time to discover what really drives you underneath it all.",
  questions: [
    {
      id: 1,
      text: "You'd be most upset if someone accused you of being:",
      options: [
        { text: "Dishonest or fake", type: "authenticity" },
        { text: "Selfish or uncaring", type: "connection" },
        { text: "Incompetent or unsuccessful", type: "achievement" },
        { text: "Boring or conventional", type: "freedom" }
      ]
    },
    {
      id: 2,
      text: "What makes you respect someone deeply?",
      options: [
        { text: "They're real - what you see is what you get", type: "authenticity" },
        { text: "They genuinely care about others' wellbeing", type: "connection" },
        { text: "They've accomplished meaningful things", type: "achievement" },
        { text: "They live life on their own terms", type: "freedom" }
      ]
    },
    {
      id: 3,
      text: "Your ideal life looks like:",
      options: [
        { text: "Living in alignment with who I truly am", type: "authenticity" },
        { text: "Surrounded by deep, meaningful relationships", type: "connection" },
        { text: "Making a real impact and leaving a legacy", type: "achievement" },
        { text: "Total freedom to do what I want, when I want", type: "freedom" }
      ]
    },
    {
      id: 4,
      text: "What's worth sacrificing comfort for?",
      options: [
        { text: "Standing up for what I believe, even if unpopular", type: "authenticity" },
        { text: "Being there for someone who needs me", type: "connection" },
        { text: "Pursuing a goal that matters to me", type: "achievement" },
        { text: "New experiences and adventures", type: "freedom" }
      ]
    },
    {
      id: 5,
      text: "When you die, you want people to say:",
      options: [
        { text: "They were always true to themselves", type: "authenticity" },
        { text: "They loved people so well", type: "connection" },
        { text: "They accomplished incredible things", type: "achievement" },
        { text: "They really lived - fully and freely", type: "freedom" }
      ]
    },
    {
      id: 6,
      text: "What feels like a personal failure?",
      options: [
        { text: "Compromising my integrity for acceptance", type: "authenticity" },
        { text: "Letting someone down who counted on me", type: "connection" },
        { text: "Not reaching my potential or goals", type: "achievement" },
        { text: "Living a life dictated by others' expectations", type: "freedom" }
      ]
    },
    {
      id: 7,
      text: "You'd take a pay cut for a job that offered:",
      options: [
        { text: "Work aligned with my values and beliefs", type: "authenticity" },
        { text: "Amazing people and genuine relationships", type: "connection" },
        { text: "Real growth and meaningful impact", type: "achievement" },
        { text: "Flexibility and autonomy", type: "freedom" }
      ]
    },
    {
      id: 8,
      text: "What keeps you up at night?",
      options: [
        { text: "Am I being true to myself?", type: "authenticity" },
        { text: "Am I being a good friend/partner/person?", type: "connection" },
        { text: "Am I achieving enough? Making progress?", type: "achievement" },
        { text: "Am I wasting my life doing things I don't want to do?", type: "freedom" }
      ]
    },
    {
      id: 9,
      text: "The hill you'd die on:",
      options: [
        { text: "Being honest, even when it's hard", type: "authenticity" },
        { text: "Being there for the people I love", type: "connection" },
        { text: "Giving everything to what I pursue", type: "achievement" },
        { text: "Never letting anyone cage me", type: "freedom" }
      ]
    },
    {
      id: 10,
      text: "Complete this: 'A meaningful life requires...'",
      options: [
        { text: "Living in alignment with your true self", type: "authenticity" },
        { text: "Deep love and genuine connection", type: "connection" },
        { text: "Purpose, goals, and real accomplishment", type: "achievement" },
        { text: "Adventure, choice, and independence", type: "freedom" }
      ]
    }
  ],
  results: {
    authenticity: {
      type: "Core Value: Authenticity",
      description: "Truth is your North Star. You value being real over being liked, integrity over convenience. You're allergic to fakeness and have a sixth sense for when people aren't being genuine. Your relationships might be fewer, but they're built on rock-solid truth.",
      traits: ["Honest to a fault", "Self-aware", "Values integrity", "Struggles with inauthenticity"],
      advice: "Your commitment to truth is rare and valuable, but remember: being authentic doesn't mean sharing everything with everyone. Vulnerability is a gift - be selective about who receives it. And give others grace; not everyone is ready for the level of realness you bring."
    },
    connection: {
      type: "Core Value: Connection",
      description: "Love is your language. You measure your life by the depth of your relationships, not your achievements. Being there for your people is non-negotiable. You'd rather have one ride-or-die than a hundred acquaintances. People feel truly seen around you.",
      traits: ["Deeply loyal", "Emotionally intelligent", "Relationship-prioritizing", "Sensitive to disconnection"],
      advice: "Your capacity for love is beautiful, but make sure you're not abandoning yourself for others. You matter too. Connection should be mutual - if you're always the one showing up, something's off. Pour into people who pour back."
    },
    achievement: {
      type: "Core Value: Achievement",
      description: "Impact is your meaning. You're driven to create, build, accomplish - to leave the world different than you found it. You set goals others think are crazy and then hit them. You're not motivated by money or status; you're motivated by knowing you did something that MATTERED.",
      traits: ["Driven", "Purpose-oriented", "High standards", "Sometimes forgets to rest"],
      advice: "Your ambition is inspiring, but remember: you are not your accomplishments. Your worth exists outside what you produce. Build in rest and relationships alongside your goals. The legacy you leave includes how you made people feel, not just what you built."
    },
    freedom: {
      type: "Core Value: Freedom",
      description: "Independence is your oxygen. You need room to breathe, choose, and be. Nothing kills your soul faster than feeling trapped - whether by a job, a relationship, or expectations. You'd rather have less and be free than have everything and be caged.",
      traits: ["Independent spirit", "Values autonomy", "Adventure-seeking", "Allergic to constraints"],
      advice: "Your need for freedom is valid, but watch that it doesn't become fear of commitment. Real freedom sometimes means choosing to stay, to commit, to be bound to something meaningful. The right constraints can actually set you free."
    }
  }
};
