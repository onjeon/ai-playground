// Your New Year's Resolution Type - Viral seasonal test for American English users

export const testData = {
  id: "seasonal-new-years-resolution",
  title: "Your New Year's Resolution Type",
  description: "Gym on January 2nd or philosophically opposed to resolutions? What's your style?",
  questions: [
    {
      id: 1,
      text: "Your typical approach to New Year's resolutions:",
      options: [
        { text: "Detailed goals with action plans and timelines", type: "planner" },
        { text: "A few meaningful intentions I try to pursue", type: "intentional" },
        { text: "Vibes-based goals, no pressure", type: "casual" },
        { text: "Resolutions are a scam. I refuse to participate", type: "skeptic" }
      ]
    },
    {
      id: 2,
      text: "By February 1st, your resolutions are usually:",
      options: [
        { text: "Tracked and progressing according to schedule", type: "planner" },
        { text: "Still being worked on, some adjustments made", type: "intentional" },
        { text: "I remember having them... that counts right?", type: "casual" },
        { text: "See? This is why I don't make them", type: "skeptic" }
      ]
    },
    {
      id: 3,
      text: "Your resolution topics usually involve:",
      options: [
        { text: "Specific metrics: fitness, finances, skills", type: "planner" },
        { text: "Growth areas: relationships, mindset, health", type: "intentional" },
        { text: "Whatever feels right in the moment", type: "casual" },
        { text: "I focus on improvement year-round, not January 1st", type: "skeptic" }
      ]
    },
    {
      id: 4,
      text: "The gym on January 2nd situation:",
      options: [
        { text: "I'm there! New year, new routine, let's go!", type: "planner" },
        { text: "I might join the crowd, fresh start energy", type: "intentional" },
        { text: "I'll start 'soon' which means maybe never", type: "casual" },
        { text: "I either go year-round or not at all", type: "skeptic" }
      ]
    },
    {
      id: 5,
      text: "Your relationship with 'New Year, New Me':",
      options: [
        { text: "I believe in transformation! This could be THE year", type: "planner" },
        { text: "Hopeful but realistic about incremental change", type: "intentional" },
        { text: "Fun energy but I'm not putting too much pressure on it", type: "casual" },
        { text: "Cringe. You're the same person on January 1st", type: "skeptic" }
      ]
    },
    {
      id: 6,
      text: "How do you feel when you don't keep a resolution?",
      options: [
        { text: "Disappointed and motivated to restart with better planning", type: "planner" },
        { text: "Reflect on why and adjust my approach", type: "intentional" },
        { text: "Eh, there's always next year", type: "casual" },
        { text: "This is exactly why I don't make promises to myself", type: "skeptic" }
      ]
    },
    {
      id: 7,
      text: "Do you share your resolutions with others?",
      options: [
        { text: "Yes! Accountability partners are key to success", type: "planner" },
        { text: "Select people who'll support without judgment", type: "intentional" },
        { text: "If it comes up in conversation, sure", type: "casual" },
        { text: "No, because I don't make them / they're personal", type: "skeptic" }
      ]
    },
    {
      id: 8,
      text: "Your view on why most resolutions fail:",
      options: [
        { text: "Poor planning and lack of systems", type: "planner" },
        { text: "Goals too big or not personally meaningful", type: "intentional" },
        { text: "Life happens, no big deal", type: "casual" },
        { text: "The concept itself is flawed", type: "skeptic" }
      ]
    },
    {
      id: 9,
      text: "A resolution you'd actually consider keeping:",
      options: [
        { text: "Something measurable with weekly checkpoints", type: "planner" },
        { text: "A value-based intention that guides decisions", type: "intentional" },
        { text: "Something fun and low-stakes", type: "casual" },
        { text: "Making no resolutions IS my resolution", type: "skeptic" }
      ]
    },
    {
      id: 10,
      text: "Honestly, do New Year's resolutions work?",
      options: [
        { text: "Yes! With proper structure and commitment", type: "planner" },
        { text: "Sometimes, when they align with real desires", type: "intentional" },
        { text: "They're just for fun, not actual life change", type: "casual" },
        { text: "Statistically and philosophically, no", type: "skeptic" }
      ]
    }
  ],
  results: {
    planner: {
      type: "The Resolution Optimizer",
      description: "You approach resolutions like a project manager - goals, milestones, metrics, accountability. You've read the productivity books and you're READY. January is your Super Bowl. You probably have a vision board and you're not ashamed of it.",
      traits: ["Structured", "Goal-oriented", "Disciplined", "System-builder"],
      advice: "Your commitment is impressive! But leave room for flexibility - life doesn't always follow spreadsheets. And be kind to yourself if things shift. Progress isn't always linear, even with great planning."
    },
    intentional: {
      type: "The Mindful Goal-Setter",
      description: "You make resolutions that actually mean something to you, not just what you 'should' want. You're realistic about change taking time and gentle with yourself in the process. Your resolutions are more like compass directions than strict destinations.",
      traits: ["Thoughtful", "Self-aware", "Flexible", "Growth-focused"],
      advice: "You've found the healthy middle ground! Trust your approach and don't let the pressure of 'resolution season' rush your genuine growth. Your pace is perfect for you."
    },
    casual: {
      type: "The Low-Stakes Dreamer",
      description: "Resolutions are fun! In theory! You like the idea of fresh starts without the pressure of actually following through. And honestly? That's fine. Maybe you'll do the thing, maybe you won't. Life goes on either way.",
      traits: ["Relaxed", "Low-pressure", "Present-focused", "Easy-going"],
      advice: "Your chill approach is valid! But consider that one small, specific thing you actually want might be worth some commitment. Not everything needs to be hard - maybe there's a fun goal hiding in there."
    },
    skeptic: {
      type: "The Resolution Realist",
      description: "You see through the 'New Year, New You' marketing complex. Why January 1st? Why arbitrary timelines? You either work on yourself year-round or you don't - no special date required. Very evolved (or very avoidant, you decide).",
      traits: ["Analytical", "Non-conformist", "Year-round grower", "Skeptical"],
      advice: "Your logic is sound! But there's something to be said for collective fresh start energy - even if the date is arbitrary. Consider that rituals and timing CAN create motivation. Or don't. You've clearly thought this through."
    }
  }
};
