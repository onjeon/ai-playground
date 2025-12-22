// Problem Solving Style - Viral IQ test for American English users

export const testData = {
  id: "iq-problem-solving",
  title: "Problem Solving Style",
  description: "How does your brain tackle challenges? Discover your unique problem-solving approach!",
  questions: [
    {
      id: 1,
      text: "You're assembling furniture without instructions. Your approach?",
      options: [
        { text: "Study all the pieces first, form a mental plan", type: "analytical" },
        { text: "Start building and figure it out as I go", type: "intuitive" },
        { text: "Look up a YouTube tutorial immediately", type: "resourceful" },
        { text: "Call someone who's good at this stuff", type: "collaborative" }
      ]
    },
    {
      id: 2,
      text: "Your car breaks down on a road trip. First instinct?",
      options: [
        { text: "Pop the hood and try to diagnose the issue", type: "analytical" },
        { text: "Trust my gut about what might be wrong", type: "intuitive" },
        { text: "Google symptoms and find a nearby mechanic", type: "resourceful" },
        { text: "Call AAA or a friend who knows cars", type: "collaborative" }
      ]
    },
    {
      id: 3,
      text: "A complex math problem appears on a test you didn't study for. You:",
      options: [
        { text: "Break it down into smaller, manageable steps", type: "analytical" },
        { text: "Go with my gut and work backwards from answers", type: "intuitive" },
        { text: "Try different formulas until something clicks", type: "resourceful" },
        { text: "See if I can get hints from nearby students", type: "collaborative" }
      ]
    },
    {
      id: 4,
      text: "You're lost in a new city without GPS. How do you navigate?",
      options: [
        { text: "Create a mental map using landmarks and logic", type: "analytical" },
        { text: "Follow my instincts about direction", type: "intuitive" },
        { text: "Find any map, sign, or resource available", type: "resourceful" },
        { text: "Ask locals for directions and recommendations", type: "collaborative" }
      ]
    },
    {
      id: 5,
      text: "A friend comes to you with a personal dilemma. You:",
      options: [
        { text: "Help them list pros and cons systematically", type: "analytical" },
        { text: "Share what my heart says they should do", type: "intuitive" },
        { text: "Research similar situations for insights", type: "resourceful" },
        { text: "Connect them with someone who faced this before", type: "collaborative" }
      ]
    },
    {
      id: 6,
      text: "You need to learn a completely new skill for work. Your method?",
      options: [
        { text: "Read documentation and understand theory first", type: "analytical" },
        { text: "Dive in and learn by making mistakes", type: "intuitive" },
        { text: "Find the best courses, tutorials, and tools", type: "resourceful" },
        { text: "Find a mentor or join a community to learn", type: "collaborative" }
      ]
    },
    {
      id: 7,
      text: "Your computer crashes right before a deadline. Panic mode! You:",
      options: [
        { text: "Systematically try recovery options one by one", type: "analytical" },
        { text: "Try the thing that 'feels' most likely to work", type: "intuitive" },
        { text: "Immediately search forums for this exact issue", type: "resourceful" },
        { text: "Call tech-savvy friends or IT support", type: "collaborative" }
      ]
    },
    {
      id: 8,
      text: "Planning a surprise party with a tight budget. Your strategy?",
      options: [
        { text: "Create a detailed spreadsheet of costs and logistics", type: "analytical" },
        { text: "Wing it creatively with what I have", type: "intuitive" },
        { text: "Hunt for deals, DIY ideas, and budget hacks", type: "resourceful" },
        { text: "Delegate tasks to friends based on their strengths", type: "collaborative" }
      ]
    },
    {
      id: 9,
      text: "You're debugging code (or any technical issue). Your process?",
      options: [
        { text: "Trace through logic step-by-step to find the error", type: "analytical" },
        { text: "Have a hunch about where the bug might be", type: "intuitive" },
        { text: "Stack Overflow and documentation deep dive", type: "resourceful" },
        { text: "Pair up with someone to rubber duck debug", type: "collaborative" }
      ]
    },
    {
      id: 10,
      text: "Life throws you a completely unexpected challenge. Generally, you:",
      options: [
        { text: "Analyze all angles before taking action", type: "analytical" },
        { text: "Trust my instincts and adapt quickly", type: "intuitive" },
        { text: "Gather all available information and tools", type: "resourceful" },
        { text: "Rally my support network for help", type: "collaborative" }
      ]
    }
  ],
  results: {
    analytical: {
      type: "The Strategic Analyst",
      description: "Your brain is a logic machine! You break down problems into components, analyze each piece, and construct solutions methodically. You rarely make impulsive decisions and prefer having all the data before acting. Engineers, scientists, and strategists think like you!",
      traits: ["Systematic approach", "Data-driven decisions", "Thorough planning", "Logical processing"],
      advice: "Your analytical skills are powerful, but don't let analysis paralysis slow you down. Sometimes 'good enough now' beats 'perfect later'!"
    },
    intuitive: {
      type: "The Gut-Trusting Solver",
      description: "You're a natural improviser who trusts your instincts! Your subconscious processes information faster than you realize, leading to those 'aha!' moments. You adapt quickly and thrive in unpredictable situations where rigid plans would fail.",
      traits: ["Quick instincts", "Adaptable mindset", "Creative solutions", "Comfort with uncertainty"],
      advice: "Your intuition is often right, but occasionally verify with data. The best problem-solvers combine gut feelings with evidence!"
    },
    resourceful: {
      type: "The Master Researcher",
      description: "If there's a tool, hack, or piece of information that helps, you WILL find it! You're incredibly skilled at leveraging external resources to solve problems. Why reinvent the wheel when someone's already posted the solution online?",
      traits: ["Research skills", "Tool optimization", "Information synthesis", "Efficiency-focused"],
      advice: "Your resourcefulness is invaluable! Just make sure you're also building core skills, not just relying on external solutions."
    },
    collaborative: {
      type: "The Team Player",
      description: "You know the secret to problem-solving: people! You tap into collective intelligence, delegate effectively, and aren't afraid to ask for help. Your strength lies in connecting the right people to the right challenges.",
      traits: ["Network-oriented", "Delegation skills", "Communication strength", "Community builder"],
      advice: "Your collaborative approach is powerful! Also develop solo problem-solving muscles for when you can't reach your network."
    }
  }
};
