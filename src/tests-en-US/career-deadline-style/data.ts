// How Do You Handle Deadlines? - Viral career test for American English users

export const testData = {
  id: "career-deadline-style",
  title: "How Do You Handle Deadlines?",
  description: "Are you an early bird or a panic demon? Let's see what your deadline behavior says about you.",
  questions: [
    {
      id: 1,
      text: "A big project is due in two weeks. When do you start?",
      options: [
        { text: "Immediately - I like being ahead of schedule", type: "early" },
        { text: "This week, after I've planned my approach", type: "steady" },
        { text: "Next week... probably", type: "procrastinator" },
        { text: "The night before. I work best under pressure", type: "lastsecond" }
      ]
    },
    {
      id: 2,
      text: "How does your work quality vary with timing?",
      options: [
        { text: "Better with time to review and perfect", type: "early" },
        { text: "Consistent - I pace myself well", type: "steady" },
        { text: "Surprisingly good considering I rushed", type: "procrastinator" },
        { text: "Peak performance at 2 AM the night before", type: "lastsecond" }
      ]
    },
    {
      id: 3,
      text: "A deadline gets moved up by a week. Your reaction:",
      options: [
        { text: "Fine - I'm probably almost done anyway", type: "early" },
        { text: "Slight adjustment to my plan, manageable", type: "steady" },
        { text: "Stress spike, but I'll make it work", type: "procrastinator" },
        { text: "Pure panic followed by an intense work session", type: "lastsecond" }
      ]
    },
    {
      id: 4,
      text: "Your to-do list management style:",
      options: [
        { text: "Everything planned out with buffer time built in", type: "early" },
        { text: "Organized with priorities and target dates", type: "steady" },
        { text: "It exists but I don't always follow it", type: "procrastinator" },
        { text: "The deadline IS my to-do list", type: "lastsecond" }
      ]
    },
    {
      id: 5,
      text: "How do you feel the day before a deadline?",
      options: [
        { text: "Calm - everything's already submitted for review", type: "early" },
        { text: "Relaxed but doing final touches", type: "steady" },
        { text: "Increasingly anxious as reality sets in", type: "procrastinator" },
        { text: "This is my time to shine. Hyperfocus activated", type: "lastsecond" }
      ]
    },
    {
      id: 6,
      text: "Your relationship with extensions:",
      options: [
        { text: "Never need them - I'm always early", type: "early" },
        { text: "Rarely need them but will ask if necessary", type: "steady" },
        { text: "I appreciate when they're offered (often)", type: "procrastinator" },
        { text: "A lifeline I've definitely needed before", type: "lastsecond" }
      ]
    },
    {
      id: 7,
      text: "Multiple deadlines hit at once. Your strategy:",
      options: [
        { text: "Already done - I spread work out early", type: "early" },
        { text: "Prioritize by importance and work systematically", type: "steady" },
        { text: "Panic, then do the most urgent one first", type: "procrastinator" },
        { text: "Chaos mode. Everything at once at the last minute", type: "lastsecond" }
      ]
    },
    {
      id: 8,
      text: "What's your biggest deadline struggle?",
      options: [
        { text: "Over-preparing and spending too much time", type: "early" },
        { text: "Knowing when 'good enough' is actually enough", type: "steady" },
        { text: "Starting is the hardest part", type: "procrastinator" },
        { text: "Remembering deadlines exist until they're imminent", type: "lastsecond" }
      ]
    },
    {
      id: 9,
      text: "How do you feel after submitting something?",
      options: [
        { text: "Relieved, and already thinking about what's next", type: "early" },
        { text: "Satisfied - good work, on time, well done", type: "steady" },
        { text: "Exhausted but proud I pulled it off", type: "procrastinator" },
        { text: "Crash. Need recovery time after the adrenaline wears off", type: "lastsecond" }
      ]
    },
    {
      id: 10,
      text: "Be honest: what's your 'work mode' music?",
      options: [
        { text: "Lo-fi beats for consistent, calm productivity", type: "early" },
        { text: "Whatever helps me focus without being distracting", type: "steady" },
        { text: "Increasingly intense music as deadline approaches", type: "procrastinator" },
        { text: "Dramatic movie soundtracks at 2 AM like I'm saving the world", type: "lastsecond" }
      ]
    }
  ],
  results: {
    early: {
      type: "The Early Bird Finisher",
      description: "Done before it's due? That's your thing. While others are panicking, you're already proofreading your finished work with a cup of tea. Your stress levels are low, your quality is high, and you definitely judge people who submit at 11:59 PM.",
      traits: ["Prepared", "Organized", "Low-stress", "Possibly a robot"],
      advice: "Your early habits are admirable, but perfectionism can be a trap. Sometimes 'done' is better than 'perfect.' Also, try not to be smug around your panicking colleagues - they're doing their best."
    },
    steady: {
      type: "The Steady Planner",
      description: "You pace yourself like a pro. Start reasonably early, work consistently, finish with time to spare. You're not stressed, not rushed, just steady. You're the person group project partners dream of. Peak functional adult energy.",
      traits: ["Consistent", "Reliable", "Well-paced", "Functional"],
      advice: "Your approach is healthy and sustainable - keep it up! Just make sure you're also flexible when needed. Sometimes plans need to change, and that's okay."
    },
    procrastinator: {
      type: "The Optimistic Procrastinator",
      description: "You always think you have more time than you do. 'Future me will handle it!' is your mantra until future you becomes present you and is now stressed. Somehow you deliver, but the journey is chaotic. You know you should start earlier. You won't.",
      traits: ["Optimistic about time", "Stress-tolerant", "Surprisingly effective", "Always learning nothing"],
      advice: "Your confidence in future-you is touching but misplaced. Try the 'just 10 minutes' trick - start small to break the inertia. The starting is always the hardest part. Also, you KNOW you're going to do this again next time."
    },
    lastsecond: {
      type: "The Deadline Demon",
      description: "You don't work until the deadline is breathing down your neck - and then you're UNSTOPPABLE. The pressure unlocks superhuman focus. Your best work happens at 2 AM fueled by panic and caffeine. It's chaotic, it's unsustainable, and it somehow always works out.",
      traits: ["Pressure-powered", "Adrenaline-dependent", "Surprisingly clutch", "Definitely stressed"],
      advice: "Your brain needs deadlines to activate, but this is burning you out. Try setting fake early deadlines and treating them as real. Your future self (and your sleep schedule) will thank you. Also, this is not sustainable - please adjust before burnout hits."
    }
  }
};
