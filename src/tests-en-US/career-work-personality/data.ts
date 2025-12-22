// What's Your Work Personality? - Viral career test for American English users

export const testData = {
  id: "career-work-personality",
  title: "What's Your Work Personality?",
  description: "Find out what type of worker you REALLY are. Your coworkers already know!",
  questions: [
    {
      id: 1,
      text: "It's 9 AM on a Monday. What does your desk look like?",
      options: [
        { text: "Spotless. Color-coded folders and a labeled calendar", type: "achiever" },
        { text: "Creative chaos - I know where everything is", type: "creative" },
        { text: "A few sticky notes and my coffee (the essential)", type: "steady" },
        { text: "Wait, I have a desk? I'm always in meetings", type: "connector" }
      ]
    },
    {
      id: 2,
      text: "A huge project just dropped on your plate. Your first move?",
      options: [
        { text: "Immediately create a detailed project plan with milestones", type: "achiever" },
        { text: "Brainstorm 47 innovative approaches before deciding", type: "creative" },
        { text: "Break it down into manageable daily tasks", type: "steady" },
        { text: "Call a meeting to align stakeholders", type: "connector" }
      ]
    },
    {
      id: 3,
      text: "Your email inbox situation right now:",
      options: [
        { text: "Inbox zero. Everything filed or deleted", type: "achiever" },
        { text: "Honestly unhinged - I search for what I need", type: "creative" },
        { text: "Under control with a few flagged for follow-up", type: "steady" },
        { text: "Overwhelmed with 'just looping you in' emails", type: "connector" }
      ]
    },
    {
      id: 4,
      text: "How do you prefer to receive feedback?",
      options: [
        { text: "Give me metrics, data, and actionable items", type: "achiever" },
        { text: "Focus on the vision and let me figure out the how", type: "creative" },
        { text: "Clear, direct, and with specific examples", type: "steady" },
        { text: "Let's have a conversation about it over coffee", type: "connector" }
      ]
    },
    {
      id: 5,
      text: "At a work happy hour, you're usually:",
      options: [
        { text: "Networking with senior leadership", type: "achiever" },
        { text: "In a deep conversation about wild ideas", type: "creative" },
        { text: "Catching up with my close work friends", type: "steady" },
        { text: "The one organizing it and making sure everyone's included", type: "connector" }
      ]
    },
    {
      id: 6,
      text: "Your dream work perk would be:",
      options: [
        { text: "A clear path to promotion with regular reviews", type: "achiever" },
        { text: "Unlimited creative freedom and innovation time", type: "creative" },
        { text: "Stable work-life balance and solid PTO", type: "steady" },
        { text: "A collaborative culture with great team dynamics", type: "connector" }
      ]
    },
    {
      id: 7,
      text: "When you disagree with a coworker's idea:",
      options: [
        { text: "Present data and logic to support my alternative", type: "achiever" },
        { text: "Suggest a completely different approach altogether", type: "creative" },
        { text: "Listen first, then share my perspective calmly", type: "steady" },
        { text: "Try to find common ground and compromise", type: "connector" }
      ]
    },
    {
      id: 8,
      text: "Your LinkedIn headline vibes:",
      options: [
        { text: "Specific title + impressive achievements + keywords", type: "achiever" },
        { text: "Something unconventional that shows personality", type: "creative" },
        { text: "Straightforward - just my role and company", type: "steady" },
        { text: "Focused on helping others and building communities", type: "connector" }
      ]
    },
    {
      id: 9,
      text: "The thing that drains you most at work:",
      options: [
        { text: "Lack of clear goals or direction", type: "achiever" },
        { text: "Rigid rules and 'that's how we've always done it'", type: "creative" },
        { text: "Constant chaos and changing priorities", type: "steady" },
        { text: "Politics and people not getting along", type: "connector" }
      ]
    },
    {
      id: 10,
      text: "If your coworkers described you in three words:",
      options: [
        { text: "Ambitious, driven, reliable", type: "achiever" },
        { text: "Innovative, unconventional, visionary", type: "creative" },
        { text: "Dependable, calm, thorough", type: "steady" },
        { text: "Friendly, collaborative, inclusive", type: "connector" }
      ]
    }
  ],
  results: {
    achiever: {
      type: "The Ambitious Achiever",
      description: "You're the person with the 5-year plan, the quarterly goals, and the color-coded calendar. You measure success in promotions, achievements, and that sweet, sweet recognition. Your drive is inspiring (and slightly intimidating). You're going places - probably to the CEO's office.",
      traits: ["Goal-oriented", "Competitive", "Organized", "Results-driven"],
      advice: "Remember that success isn't just promotions. Take time to celebrate small wins and don't burn out chasing the next milestone. Your ambition is a gift - just balance it with some humanity."
    },
    creative: {
      type: "The Creative Disruptor",
      description: "You're the one saying 'what if we did it completely differently?' in every meeting. Your desk is chaos, your ideas are genius, and you physically cannot follow a process that doesn't make sense to you. You see possibilities where others see problems. Innovation is your middle name.",
      traits: ["Innovative", "Non-conformist", "Big-picture thinker", "Idea machine"],
      advice: "Not every wheel needs reinventing. Sometimes the boring solution is the right one. Channel your creativity into projects that actually need disrupting, and learn to play the corporate game just enough to get your wild ideas heard."
    },
    steady: {
      type: "The Reliable Rock",
      description: "You're the one everyone counts on. Not flashy, not dramatic, just consistently excellent. You're the reason deadlines get met and chaos doesn't spread. When things get crazy, you're the calm voice of reason. Teams would literally fall apart without people like you.",
      traits: ["Dependable", "Consistent", "Calm under pressure", "Detail-oriented"],
      advice: "Your reliability is a superpower, but don't let others take advantage of it. It's okay to say no sometimes. Make sure you're getting recognized for all the invisible work you do holding everything together."
    },
    connector: {
      type: "The Social Glue",
      description: "You know everyone. EVERYONE. You're cc'd on every email, invited to every meeting, and the go-to person when anyone needs anything. You make work feel like a community, not just a job. You're basically holding the company culture together with your personality.",
      traits: ["Collaborative", "Empathetic", "Great communicator", "Team builder"],
      advice: "Your networking superpowers are amazing, but make sure you're also delivering individual results. Balance relationships with responsibilities, and don't spread yourself too thin trying to be everyone's work best friend."
    }
  }
};
