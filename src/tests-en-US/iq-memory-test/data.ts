// Memory Challenge - Viral IQ test for American English users

export const testData = {
  id: "iq-memory-test",
  title: "Memory Challenge",
  description: "How powerful is your memory? Test your recall, retention, and memory techniques with this challenge!",
  questions: [
    {
      id: 1,
      text: "When you meet someone new, how well do you remember their name after one introduction?",
      options: [
        { text: "Almost always remember it perfectly", type: "elite" },
        { text: "Usually remember if I repeat it once", type: "strong" },
        { text: "Sometimes forget within minutes", type: "average" },
        { text: "Immediately forget and have to ask again", type: "needs_work" }
      ]
    },
    {
      id: 2,
      text: "Your friend rattles off a 7-digit phone number. Without writing it down, you:",
      options: [
        { text: "Can recall it perfectly minutes later", type: "elite" },
        { text: "Remember most of it, might mix up 1-2 digits", type: "strong" },
        { text: "Need to repeat it immediately or it's gone", type: "average" },
        { text: "Already forgot halfway through hearing it", type: "needs_work" }
      ]
    },
    {
      id: 3,
      text: "Think back to what you ate for dinner exactly one week ago. How clear is that memory?",
      options: [
        { text: "I can picture the meal clearly", type: "elite" },
        { text: "I remember the main dish but not details", type: "strong" },
        { text: "I have a vague idea, maybe", type: "average" },
        { text: "Absolutely no clue", type: "needs_work" }
      ]
    },
    {
      id: 4,
      text: "You watch a movie once. A year later, how much of the plot do you remember?",
      options: [
        { text: "Most scenes and key dialogue", type: "elite" },
        { text: "Main plot and major twists", type: "strong" },
        { text: "Basic storyline, fuzzy on details", type: "average" },
        { text: "Only if someone reminds me I watched it", type: "needs_work" }
      ]
    },
    {
      id: 5,
      text: "How often do you walk into a room and forget why you went there?",
      options: [
        { text: "Almost never happens to me", type: "elite" },
        { text: "Rarely, and I usually remember quickly", type: "strong" },
        { text: "Happens sometimes, pretty normal", type: "average" },
        { text: "This is basically my daily life", type: "needs_work" }
      ]
    },
    {
      id: 6,
      text: "If someone gives you a list of 10 grocery items verbally, how many can you buy without writing it down?",
      options: [
        { text: "All 10, easy", type: "elite" },
        { text: "7-8 items reliably", type: "strong" },
        { text: "4-6 items if I try hard", type: "average" },
        { text: "I'd need to call them from the store", type: "needs_work" }
      ]
    },
    {
      id: 7,
      text: "Do you remember childhood events in vivid detail?",
      options: [
        { text: "Yes, even small moments from age 4-5", type: "elite" },
        { text: "Major events and some specific memories", type: "strong" },
        { text: "Mostly big moments, details are fuzzy", type: "average" },
        { text: "Barely anything before age 10", type: "needs_work" }
      ]
    },
    {
      id: 8,
      text: "You're studying for an exam. How well do you retain information overnight?",
      options: [
        { text: "Almost everything sticks after one read", type: "elite" },
        { text: "Good retention with some review", type: "strong" },
        { text: "Need multiple reviews to remember", type: "average" },
        { text: "Morning brain = empty slate", type: "needs_work" }
      ]
    },
    {
      id: 9,
      text: "How good are you at remembering where you put your keys, phone, or wallet?",
      options: [
        { text: "Always know exactly where they are", type: "elite" },
        { text: "Usually remember my routine spots", type: "strong" },
        { text: "Lose them occasionally, normal stuff", type: "average" },
        { text: "Currently looking for at least one of these", type: "needs_work" }
      ]
    },
    {
      id: 10,
      text: "Can you remember birthdays and anniversaries without calendar reminders?",
      options: [
        { text: "Yes, I know dozens of dates by heart", type: "elite" },
        { text: "Close family and friends, yes", type: "strong" },
        { text: "Only the most important ones", type: "average" },
        { text: "Thank god for Facebook reminders", type: "needs_work" }
      ]
    }
  ],
  results: {
    elite: {
      type: "Memory Champion",
      description: "Your memory is absolutely incredible! You're like a human hard drive, storing and retrieving information with impressive accuracy. People probably come to you when they can't remember something. You'd crush it at memory competitions!",
      traits: ["Exceptional recall", "Strong retention", "Detail-oriented memory", "Mental filing system"],
      advice: "Your memory is a superpower! Consider memory sports or using techniques like memory palaces to push your limits even further."
    },
    strong: {
      type: "Memory Master",
      description: "You've got a solid, reliable memory! You remember what matters and can recall details when you need them. Sure, you might forget the occasional small thing, but overall your brain holds onto information well.",
      traits: ["Reliable recall", "Good long-term memory", "Above-average retention", "Practical memory skills"],
      advice: "Keep your memory sharp with mental exercises. Try memorizing poetry or learning a new language!"
    },
    average: {
      type: "Normal Memory",
      description: "Your memory is totally normal and functional! You remember important things and forget others - just like most people. This is actually healthy; your brain is filtering what it considers important.",
      traits: ["Typical memory function", "Priority-based recall", "Normal forgetfulness", "Balanced retention"],
      advice: "Want to boost your memory? Try techniques like spaced repetition, association, and getting better sleep!"
    },
    needs_work: {
      type: "Forgetful Friend",
      description: "Memory isn't your strongest suit, but hey, that's what smartphones are for! Your brain might be wired more for creativity, problem-solving, or living in the moment rather than storing past details.",
      traits: ["Present-focused thinking", "External memory tools", "Creative processor", "Selective retention"],
      advice: "Write things down, use reminders, and don't be too hard on yourself. Also: sleep, exercise, and hydration seriously help memory!"
    }
  }
};
