// What Motivates You? - Viral life test for American English users

export const testData = {
  id: "life-motivation-type",
  title: "What Really Motivates You?",
  description: "Fame, fortune, or something deeper? Discover your core motivation!",
  questions: [
    {
      id: 1,
      text: "What gets you out of bed on hard days?",
      options: [
        { text: "The goals I'm working toward and progress I'm making", type: "achievement" },
        { text: "The people counting on me and relationships I value", type: "connection" },
        { text: "Financial goals and the lifestyle I want", type: "security" },
        { text: "Curiosity and new things to learn or experience", type: "growth" }
      ]
    },
    {
      id: 2,
      text: "Your ideal recognition would be:",
      options: [
        { text: "Public acknowledgment of my accomplishments", type: "achievement" },
        { text: "Deep appreciation from people I care about", type: "connection" },
        { text: "Financial reward that reflects my value", type: "security" },
        { text: "Opportunities for more growth and learning", type: "growth" }
      ]
    },
    {
      id: 3,
      text: "You work hardest when:",
      options: [
        { text: "There's a clear goal or prize to achieve", type: "achievement" },
        { text: "I'm doing it for or with people I care about", type: "connection" },
        { text: "There's a clear financial or career benefit", type: "security" },
        { text: "I'm learning something new and expanding my skills", type: "growth" }
      ]
    },
    {
      id: 4,
      text: "What would make you feel most successful?",
      options: [
        { text: "Achieving ambitious goals and being recognized for it", type: "achievement" },
        { text: "Having strong, meaningful relationships", type: "connection" },
        { text: "Financial freedom and stability", type: "security" },
        { text: "Constantly learning and becoming better", type: "growth" }
      ]
    },
    {
      id: 5,
      text: "Your biggest fear is:",
      options: [
        { text: "Failing or not reaching my potential", type: "achievement" },
        { text: "Being alone or disconnected from others", type: "connection" },
        { text: "Financial instability or not having enough", type: "security" },
        { text: "Stagnating or stopping growing as a person", type: "growth" }
      ]
    },
    {
      id: 6,
      text: "When you fantasize about the future, you imagine:",
      options: [
        { text: "Major accomplishments and recognition", type: "achievement" },
        { text: "Being surrounded by people I love", type: "connection" },
        { text: "Financial comfort and security", type: "security" },
        { text: "Wisdom and skills I've developed", type: "growth" }
      ]
    },
    {
      id: 7,
      text: "Your ideal job would prioritize:",
      options: [
        { text: "Advancement opportunities and recognition", type: "achievement" },
        { text: "Great team and meaningful relationships", type: "connection" },
        { text: "Excellent pay and benefits", type: "security" },
        { text: "Learning opportunities and personal development", type: "growth" }
      ]
    },
    {
      id: 8,
      text: "What keeps you going when things get hard?",
      options: [
        { text: "The vision of success on the other side", type: "achievement" },
        { text: "The people I'm doing this for", type: "connection" },
        { text: "The financial or practical necessities", type: "security" },
        { text: "Knowing I'll learn from this regardless", type: "growth" }
      ]
    },
    {
      id: 9,
      text: "You feel most alive when:",
      options: [
        { text: "Winning or achieving something significant", type: "achievement" },
        { text: "Deeply connecting with other people", type: "connection" },
        { text: "Feeling financially secure and comfortable", type: "security" },
        { text: "Learning or experiencing something new", type: "growth" }
      ]
    },
    {
      id: 10,
      text: "If money wasn't a factor, you'd spend time on:",
      options: [
        { text: "Pursuing ambitious goals and building something", type: "achievement" },
        { text: "Relationships and community", type: "connection" },
        { text: "I can't imagine money not being a factor", type: "security" },
        { text: "Learning, traveling, experiencing new things", type: "growth" }
      ]
    }
  ],
  results: {
    achievement: {
      type: "Achievement-Driven",
      description: "You're powered by ACCOMPLISHMENT. Goals, milestones, recognition - these are your fuel. You're competitive (even with yourself), goal-oriented, and most alive when you're winning or achieving. Your resume is probably impressive and your to-do list is aggressive.",
      traits: ["Goal-oriented", "Ambitious", "Competitive", "Recognition-seeking"],
      advice: "Your drive is powerful! Just make sure achievements are YOUR goals, not just external metrics. And remember that rest and relationships matter too - achievement at the cost of everything else isn't success, it's exhaustion."
    },
    connection: {
      type: "Connection-Driven",
      description: "You're powered by PEOPLE. Relationships, community, belonging - these are your core motivators. You work for others as much as yourself. Success without people to share it with feels empty. You're the glue in many groups and the friend everyone calls.",
      traits: ["Relationship-focused", "Loyal", "Community-oriented", "Love-driven"],
      advice: "Your connection focus is beautiful! Just make sure you're not sacrificing your own needs for others constantly. You matter too. And some achievements are worth pursuing for yourself, not just for the people around you."
    },
    security: {
      type: "Security-Driven",
      description: "You're powered by STABILITY. Financial security, safety, predictability - these are your core motivators. You work to build a solid foundation and protect what you've created. In an uncertain world, your focus on security is actually pretty wise.",
      traits: ["Security-focused", "Practical", "Risk-aware", "Foundation-building"],
      advice: "Your security focus is understandable and smart! But make sure it doesn't become fear-based decision-making. Some risks are worth taking. And remember that no amount of money can buy back time or experiences you missed by playing it too safe."
    },
    growth: {
      type: "Growth-Driven",
      description: "You're powered by LEARNING. New skills, new experiences, personal development - these are your fuel. Stagnation is your nightmare. You're probably a lifelong learner with diverse interests. The journey matters more than the destination for you.",
      traits: ["Curious", "Growth-oriented", "Experience-seeking", "Learner"],
      advice: "Your growth mindset is valuable! Just remember to also apply what you learn, not just accumulate knowledge. And sometimes depth beats breadth - mastering one thing can be as valuable as knowing many things."
    }
  }
};
