// Are You Ready for Commitment? - Viral relationship test for American English users

export const testData = {
  id: "relationship-commitment-ready",
  title: "Are You Ready for Commitment?",
  description: "Do you want forever or are you still in your 'exploration era'? Let's find out!",
  questions: [
    {
      id: 1,
      text: "Someone amazing wants to be exclusive. Your honest gut reaction?",
      options: [
        { text: "FINALLY. Lock it down!", type: "ready" },
        { text: "Interested but need more time", type: "almost" },
        { text: "Immediate urge to run", type: "not-ready" },
        { text: "Depends entirely on who's asking", type: "situational" }
      ]
    },
    {
      id: 2,
      text: "How do you feel about deleting the dating apps?",
      options: [
        { text: "Already deleted, never looking back", type: "ready" },
        { text: "Would do it for the right person", type: "almost" },
        { text: "My profile is still active 'just in case'", type: "not-ready" },
        { text: "I delete and redownload constantly", type: "situational" }
      ]
    },
    {
      id: 3,
      text: "Your ideal Friday night is...",
      options: [
        { text: "Cozy night in with my person", type: "ready" },
        { text: "Varies - sometimes out, sometimes in", type: "situational" },
        { text: "Out with my friends, always", type: "not-ready" },
        { text: "Depends on who I'm dating at the moment", type: "almost" }
      ]
    },
    {
      id: 4,
      text: "The word 'forever' in a relationship context makes you feel...",
      options: [
        { text: "Warm and fuzzy", type: "ready" },
        { text: "Hopeful but also slightly terrified", type: "almost" },
        { text: "Suffocated. Why would anyone want that?", type: "not-ready" },
        { text: "It depends on who I'm imagining", type: "situational" }
      ]
    },
    {
      id: 5,
      text: "How much of your life are you willing to adjust for a partner?",
      options: [
        { text: "A lot - partnership means compromise", type: "ready" },
        { text: "Some things, but my core stays the same", type: "almost" },
        { text: "Very little - my life is already full", type: "not-ready" },
        { text: "For the right person, anything", type: "situational" }
      ]
    },
    {
      id: 6,
      text: "Someone asks where you see yourself in 5 years. Relationship-wise, you think...",
      options: [
        { text: "Married or seriously partnered", type: "ready" },
        { text: "With someone, hopefully", type: "almost" },
        { text: "Who can plan that far ahead?", type: "not-ready" },
        { text: "Completely depends on how life unfolds", type: "situational" }
      ]
    },
    {
      id: 7,
      text: "Meeting the parents: Your reaction?",
      options: [
        { text: "Exciting! I want to know their whole family", type: "ready" },
        { text: "Nervous but willing if we're serious", type: "almost" },
        { text: "WAY too intense too fast", type: "not-ready" },
        { text: "Only if I'm absolutely sure about them", type: "situational" }
      ]
    },
    {
      id: 8,
      text: "Your friends are all coupling up. How does that make you feel?",
      options: [
        { text: "I want that too - genuinely happy for them", type: "ready" },
        { text: "Mixed feelings - happy but also FOMO", type: "almost" },
        { text: "Fine? I'm living my own life", type: "not-ready" },
        { text: "Depends on if I'm seeing someone good", type: "situational" }
      ]
    },
    {
      id: 9,
      text: "What's your main dating focus right now?",
      options: [
        { text: "Finding my person and building a life together", type: "ready" },
        { text: "Getting to know myself through dating", type: "almost" },
        { text: "Having fun and keeping options open", type: "not-ready" },
        { text: "It changes based on who I meet", type: "situational" }
      ]
    },
    {
      id: 10,
      text: "Final answer: Do you WANT to be in a committed relationship?",
      options: [
        { text: "Yes, 100%, actively seeking it", type: "ready" },
        { text: "Yes, but I'm working on myself first", type: "almost" },
        { text: "Not really, I'm good where I am", type: "not-ready" },
        { text: "Only if the right person comes along", type: "situational" }
      ]
    }
  ],
  results: {
    ready: {
      type: "Commitment Ready",
      description: "You're not just ready for commitment - you're ACTIVELY SEEKING IT. You know what you want, you're emotionally available, and you're ready to share your life with someone. You've probably done the self-work, and now you're just looking for your match.",
      traits: ["Emotionally available", "Future-focused", "Values partnership", "Ready to compromise"],
      advice: "Your readiness is beautiful! Just don't let the desire for commitment make you settle for less than you deserve. The right person is worth the wait."
    },
    almost: {
      type: "Almost There",
      description: "You're commitment-curious. You like the IDEA of commitment and you're getting there, but something's still holding you back. Maybe it's fear, maybe it's timing, maybe you're still healing. You're close to ready, but not quite at the finish line.",
      traits: ["Open to commitment", "Working on personal growth", "Some unresolved stuff", "Cautiously optimistic"],
      advice: "You're on the right path. Keep doing the inner work and don't rush yourself. True readiness will feel peaceful, not pressured."
    },
    "not-ready": {
      type: "Free Spirit Era",
      description: "Commitment? In THIS economy? You're very much in your exploration phase and there's nothing wrong with that. You value your freedom, you're not looking to settle down, and the idea of 'forever' with one person feels more scary than appealing right now.",
      traits: ["Values independence", "Freedom over stability", "Living in the moment", "Commitment-averse"],
      advice: "There's no timeline for readiness. Just be honest with people about where you're at so no one gets hurt. Your era is valid."
    },
    situational: {
      type: "Person-Dependent",
      description: "Your commitment readiness isn't a fixed state - it changes based on who you're with. For the wrong person, you're emotionally unavailable. For the right person, you're all in. You don't want commitment for commitment's sake; you want to be inspired by someone specific.",
      traits: ["Selective about partners", "Intensity varies by person", "Knows chemistry is key", "Won't settle"],
      advice: "This flexibility is actually healthy - you shouldn't commit to just anyone. Just make sure 'waiting for the right person' doesn't become an excuse to never commit."
    }
  }
};
