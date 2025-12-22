// Spontaneous or Planner? - Viral personality test for American English users

export const testData = {
  id: "personality-spontaneous-planner",
  title: "Spontaneous or Planner?",
  description: "Do you live by your calendar or fly by the seat of your pants? Time to find out!",
  questions: [
    {
      id: 1,
      text: "A friend texts 'Want to take a spontaneous road trip this weekend?' You:",
      options: [
        { text: "Already packing! Where are we going?!", type: "spontaneous" },
        { text: "Sounds fun! Let me check a few things first", type: "flexible" },
        { text: "Can we plan it for a few weekends from now instead?", type: "planner" },
        { text: "I need the full itinerary, budget, and timeline first", type: "ultra-planner" }
      ]
    },
    {
      id: 2,
      text: "Your calendar for the next month looks like:",
      options: [
        { text: "What calendar? I'll figure it out when I get there", type: "spontaneous" },
        { text: "Big things are noted, but lots of open space", type: "flexible" },
        { text: "Color-coded with most commitments scheduled", type: "planner" },
        { text: "Blocked down to the hour including 'free time'", type: "ultra-planner" }
      ]
    },
    {
      id: 3,
      text: "You're going on vacation. Your planning style:",
      options: [
        { text: "Book a flight, figure out the rest there!", type: "spontaneous" },
        { text: "Have a loose outline but leave room for adventure", type: "flexible" },
        { text: "Research activities, book key things in advance", type: "planner" },
        { text: "Full spreadsheet with backup plans for backup plans", type: "ultra-planner" }
      ]
    },
    {
      id: 4,
      text: "It's Friday night. How do you decide what to do?",
      options: [
        { text: "See what mood strikes and go from there", type: "spontaneous" },
        { text: "Text around and see what's happening", type: "flexible" },
        { text: "Check the plans I made earlier this week", type: "planner" },
        { text: "Consult my weekend schedule I planned last Sunday", type: "ultra-planner" }
      ]
    },
    {
      id: 5,
      text: "How do you feel about surprises?",
      options: [
        { text: "LOVE them! Life is more fun with surprises", type: "spontaneous" },
        { text: "Good surprises are great, bad surprises less so", type: "flexible" },
        { text: "Prefer a heads up, but I can roll with it", type: "planner" },
        { text: "Please no. I need time to mentally prepare for things", type: "ultra-planner" }
      ]
    },
    {
      id: 6,
      text: "Someone cancels plans at the last minute. Your reaction:",
      options: [
        { text: "Cool! Now I have unexpected free time to do anything", type: "spontaneous" },
        { text: "A little bummed but I'll find something else fun", type: "flexible" },
        { text: "Annoyed - I scheduled my week around this!", type: "planner" },
        { text: "Deeply frustrated. My entire timeline is now disrupted", type: "ultra-planner" }
      ]
    },
    {
      id: 7,
      text: "Your approach to meal planning:",
      options: [
        { text: "Eat when hungry, decide what when I'm staring at options", type: "spontaneous" },
        { text: "A general idea but flexible to cravings", type: "flexible" },
        { text: "Weekly meal plan with groceries bought accordingly", type: "planner" },
        { text: "Meals prepped for the week with scheduled eating times", type: "ultra-planner" }
      ]
    },
    {
      id: 8,
      text: "A great opportunity comes up but requires changing existing plans:",
      options: [
        { text: "Plans are meant to be changed! I'm in", type: "spontaneous" },
        { text: "Worth some reshuffling if it's good enough", type: "flexible" },
        { text: "Depends on what I have to cancel - I don't like flaking", type: "planner" },
        { text: "I committed to those plans. I'll catch the next opportunity", type: "ultra-planner" }
      ]
    },
    {
      id: 9,
      text: "Your morning routine:",
      options: [
        { text: "What routine? Every morning is different", type: "spontaneous" },
        { text: "Loose pattern but flexible based on the day", type: "flexible" },
        { text: "Same general routine with room for variation", type: "planner" },
        { text: "Timed down to the minute, deviation causes stress", type: "ultra-planner" }
      ]
    },
    {
      id: 10,
      text: "How far in advance do you make social plans?",
      options: [
        { text: "Same day usually. Maybe a day or two ahead", type: "spontaneous" },
        { text: "A few days to a week, depending on the thing", type: "flexible" },
        { text: "1-2 weeks minimum for anything significant", type: "planner" },
        { text: "I'm booking brunches months out. My calendar fills up", type: "ultra-planner" }
      ]
    }
  ],
  results: {
    spontaneous: {
      type: "The Free Spirit",
      description: "Schedules? Where you're going, you don't need schedules! You live in the moment and thrive on the unexpected. Your best stories start with 'so we randomly decided to...' and your flexibility is honestly enviable. Life is an adventure and you're along for the ride!",
      traits: ["Adventurous", "Adaptable", "Present-focused", "Excitement-seeking"],
      advice: "Your spontaneity is a gift that keeps life exciting! But some things do benefit from a little planning (like, maybe your taxes?). Find a balance where you can still be free-spirited without the occasional chaos-induced panic."
    },
    flexible: {
      type: "The Balanced Navigator",
      description: "You've mastered the art of planned spontaneity. You have enough structure to function but enough flexibility to say 'yes' to unexpected adventures. You're the friend who can both join the last-minute plans AND remember to make dinner reservations. Best of both worlds!",
      traits: ["Adaptable", "Balanced", "Easygoing", "Practical"],
      advice: "You've found the sweet spot! Your ability to flex between planning and spontaneity serves you well. Keep trusting your instincts about when to plan and when to wing it."
    },
    planner: {
      type: "The Organized Orchestrator",
      description: "Your calendar is your best friend and it's beautifully organized. You like knowing what's coming and having time to prepare. Spontaneity isn't your enemy, you just prefer adventures you can put in your planner. Your friends know to reach out early for your time!",
      traits: ["Organized", "Reliable", "Prepared", "Thoughtful"],
      advice: "Your planning superpower keeps life running smoothly! Challenge yourself occasionally to say 'yes' to something unplanned - some of life's best moments can't be scheduled. The unknown is scary, but it can also be magic."
    },
    "ultra-planner": {
      type: "The Master Architect",
      description: "You don't just plan, you PLAN. Your spreadsheets have spreadsheets. Your calendar is a work of art. Uncertainty makes you itchy and you've never met a backup plan you didn't love. You're the person everyone relies on because you've literally thought of everything.",
      traits: ["Meticulous", "Thorough", "Control-oriented", "Detail-obsessed"],
      advice: "Your preparation is impressive and genuinely useful! But life will always have variables you can't control. Practice being okay with uncertainty - sometimes the detours lead to the best destinations. Let a little controlled chaos in."
    }
  }
};
