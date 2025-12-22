// Decision Making Speed Test - Viral IQ test for American English users

export const testData = {
  id: "iq-decision-making",
  title: "Decision Making Speed Test",
  description: "Are you quick and decisive or do you overthink everything? Discover your decision-making style!",
  questions: [
    {
      id: 1,
      text: "The waiter asks what you want. The menu has 50 items. You:",
      options: [
        { text: "Know what I want within 30 seconds", type: "decisive" },
        { text: "Ask what's popular and decide from a few options", type: "strategic" },
        { text: "Need a few minutes to carefully consider", type: "careful" },
        { text: "Still deciding when the waiter comes back twice", type: "overthinker" }
      ]
    },
    {
      id: 2,
      text: "Netflix is asking 'Are you still watching?' because you've been browsing for:",
      options: [
        { text: "This doesn't happen - I pick something fast", type: "decisive" },
        { text: "Maybe 5-10 minutes of browsing", type: "strategic" },
        { text: "Probably 15-20 minutes comparing options", type: "careful" },
        { text: "An embarrassingly long time... then I give up", type: "overthinker" }
      ]
    },
    {
      id: 3,
      text: "You're shopping and find something you like. There are 5 colors. You:",
      options: [
        { text: "Immediately know which color is for me", type: "decisive" },
        { text: "Narrow to 2 and make a quick choice", type: "strategic" },
        { text: "Hold them all up, compare, ask for opinions", type: "careful" },
        { text: "Leave without buying because I can't decide", type: "overthinker" }
      ]
    },
    {
      id: 4,
      text: "A friend texts 'Wanna hang out? Where should we go?' You reply:",
      options: [
        { text: "With a specific plan within a minute", type: "decisive" },
        { text: "With 2-3 options for them to choose from", type: "strategic" },
        { text: "'What are you in the mood for?' back at them", type: "careful" },
        { text: "'Idk, what do you want to do?' endless loop begins", type: "overthinker" }
      ]
    },
    {
      id: 5,
      text: "You have a job offer. They need an answer by tomorrow. You:",
      options: [
        { text: "Already know if I want it or not", type: "decisive" },
        { text: "Make a quick pros/cons list tonight and decide", type: "strategic" },
        { text: "Barely sleep while weighing every factor", type: "careful" },
        { text: "Ask for more time because I'm spiraling", type: "overthinker" }
      ]
    },
    {
      id: 6,
      text: "Someone cuts you off in traffic. Your reaction time is:",
      options: [
        { text: "Instant response - brake, honk, move on", type: "decisive" },
        { text: "Quick assessment, measured response", type: "strategic" },
        { text: "React then second-guess if I overreacted", type: "careful" },
        { text: "Freeze for a moment, react late", type: "overthinker" }
      ]
    },
    {
      id: 7,
      text: "Planning a vacation. How long to pick a destination?",
      options: [
        { text: "I always know where I want to go next", type: "decisive" },
        { text: "A day or two of focused research", type: "strategic" },
        { text: "A week or more of comparison and planning", type: "careful" },
        { text: "Months... and sometimes I never book", type: "overthinker" }
      ]
    },
    {
      id: 8,
      text: "You're at a crossroads: stay at your job or take a risk on something new. You:",
      options: [
        { text: "Make the decision quickly and don't look back", type: "decisive" },
        { text: "Give myself a deadline to decide, stick to it", type: "strategic" },
        { text: "Agonize for weeks gathering every piece of info", type: "careful" },
        { text: "Avoid the decision until something forces it", type: "overthinker" }
      ]
    },
    {
      id: 9,
      text: "After making a big decision, how often do you second-guess yourself?",
      options: [
        { text: "Rarely - I trust my choices", type: "decisive" },
        { text: "Sometimes, but I move on quickly", type: "strategic" },
        { text: "Often, replaying the decision in my head", type: "careful" },
        { text: "Constantly - buyer's remorse is my middle name", type: "overthinker" }
      ]
    },
    {
      id: 10,
      text: "In group settings, when decisions need to be made, you're usually:",
      options: [
        { text: "The one making the call and moving things forward", type: "decisive" },
        { text: "Offering structured options for the group", type: "strategic" },
        { text: "Weighing in but happy for others to decide", type: "careful" },
        { text: "Quietly hoping someone else takes charge", type: "overthinker" }
      ]
    }
  ],
  results: {
    decisive: {
      type: "Lightning Decision Maker",
      description: "You make choices fast and don't look back! Your brain quickly weighs options and commits. This decisiveness is actually a huge advantage in life - while others are stuck in analysis paralysis, you're already moving forward. Leaders and entrepreneurs often share this trait!",
      traits: ["Quick judgment", "Action-oriented", "Confident choices", "Low regret tendency"],
      advice: "Your decisiveness is powerful! Just occasionally pause on very high-stakes decisions to ensure you're not missing something crucial."
    },
    strategic: {
      type: "Strategic Decision Maker",
      description: "You've found the sweet spot! You're quick enough to not get stuck, but thoughtful enough to make good choices. You use efficient decision-making frameworks and don't waste time on low-stakes choices. This balanced approach leads to consistently good outcomes.",
      traits: ["Efficient processing", "Balanced analysis", "Good time management", "Confident execution"],
      advice: "Your approach is optimal! Consider teaching others your decision-making frameworks - many people struggle with what comes naturally to you."
    },
    careful: {
      type: "Careful Deliberator",
      description: "You take your time to make thoughtful decisions. You consider angles others miss and rarely make impulsive mistakes. While this sometimes slows you down, it also means your choices are usually well-reasoned. Quality over speed is your motto.",
      traits: ["Thorough analysis", "Risk-aware", "Detail-oriented", "Considered approach"],
      advice: "For low-stakes decisions (restaurants, Netflix, etc.), try giving yourself a time limit. Save your careful analysis for decisions that really matter!"
    },
    overthinker: {
      type: "Analysis Paralysis Pro",
      description: "You're a world-class overthinker! Your brain wants to consider every possibility, which is exhausting but also shows you're intelligent and conscientious. The downside? Sometimes you miss opportunities while analyzing them to death, or you stress yourself out over small choices.",
      traits: ["Thorough but slow", "High anxiety potential", "Fear of wrong choices", "Perfectionist tendencies"],
      advice: "Try the '10-10-10 rule': Will this matter in 10 minutes? 10 months? 10 years? If not, make a quick choice and move on. Practice making small decisions faster!"
    }
  }
};
