// How Much Do You Have Your Life Together? - Viral life test for American English users

export const testData = {
  id: "life-life-together",
  title: "How Much Do You Have Your Life Together?",
  description: "On a scale from 'disaster' to 'surprisingly functional' - where do you land?",
  questions: [
    {
      id: 1,
      text: "Your morning routine is:",
      options: [
        { text: "Consistent, intentional, sets me up for success", type: "together" },
        { text: "Works most days, occasional chaos", type: "mostly" },
        { text: "Exists in theory, rarely in practice", type: "barely" },
        { text: "What morning routine? I survive mornings", type: "chaos" }
      ]
    },
    {
      id: 2,
      text: "Your financial situation:",
      options: [
        { text: "Budget, savings, retirement - all handled", type: "together" },
        { text: "Generally okay, some areas could improve", type: "mostly" },
        { text: "Living paycheck to paycheck but surviving", type: "barely" },
        { text: "I don't look at my bank account for safety reasons", type: "chaos" }
      ]
    },
    {
      id: 3,
      text: "Your living space right now:",
      options: [
        { text: "Clean, organized, guest-ready", type: "together" },
        { text: "Presentable with some problem areas", type: "mostly" },
        { text: "I know where things are in the mess", type: "barely" },
        { text: "Would not want to be judged on this", type: "chaos" }
      ]
    },
    {
      id: 4,
      text: "Your health and wellness habits:",
      options: [
        { text: "Regular exercise, good diet, checkups scheduled", type: "together" },
        { text: "Some good habits, some areas I'm working on", type: "mostly" },
        { text: "I'm alive and that's something", type: "barely" },
        { text: "My body is held together by caffeine and hope", type: "chaos" }
      ]
    },
    {
      id: 5,
      text: "Your work/career situation:",
      options: [
        { text: "On a good path, feeling capable and growing", type: "together" },
        { text: "Stable, doing okay, room for improvement", type: "mostly" },
        { text: "It's a job. It pays bills. That's the bar", type: "barely" },
        { text: "Existential crisis about career choices", type: "chaos" }
      ]
    },
    {
      id: 6,
      text: "How's your calendar/scheduling game?",
      options: [
        { text: "Everything scheduled, reminders set, on top of it", type: "together" },
        { text: "Most things make it to the calendar", type: "mostly" },
        { text: "I remember important things... usually", type: "barely" },
        { text: "I've missed multiple important things this month", type: "chaos" }
      ]
    },
    {
      id: 7,
      text: "Your relationship with deadlines and obligations:",
      options: [
        { text: "Meet them comfortably with time to spare", type: "together" },
        { text: "Meet them but sometimes it's last minute", type: "mostly" },
        { text: "Often stressed and scrambling but usually make it", type: "barely" },
        { text: "Miss them more than I'd like to admit", type: "chaos" }
      ]
    },
    {
      id: 8,
      text: "Your social life and relationships:",
      options: [
        { text: "Healthy connections I actively maintain", type: "together" },
        { text: "Good friends, could reach out more", type: "mostly" },
        { text: "Isolated but I have some people", type: "barely" },
        { text: "Relationships? In this economy?", type: "chaos" }
      ]
    },
    {
      id: 9,
      text: "Your mental health and self-care:",
      options: [
        { text: "Good practices, therapy if needed, balanced", type: "together" },
        { text: "Doing okay, some ups and downs", type: "mostly" },
        { text: "Surviving day to day", type: "barely" },
        { text: "We don't talk about my mental health", type: "chaos" }
      ]
    },
    {
      id: 10,
      text: "Overall, how 'together' would you rate yourself?",
      options: [
        { text: "Actually doing well - most things work", type: "together" },
        { text: "Mostly functional adult with some gaps", type: "mostly" },
        { text: "Holding it together with tape and wishful thinking", type: "barely" },
        { text: "Honestly? Everything is barely functional", type: "chaos" }
      ]
    }
  ],
  results: {
    together: {
      type: "Suspiciously Functional",
      description: "You have your life TOGETHER. Like, actually together. Systems work, things are maintained, you're adulting at a high level. Either you've worked really hard for this or you're naturally organized. Either way, you're the friend everyone asks for advice.",
      traits: ["Organized", "Functional", "Adulting successfully", "Goals achieved"],
      advice: "Your functionality is impressive! Make sure you're enjoying life and not just optimizing it. Share your systems with struggling friends. And don't be too hard on yourself when things occasionally slip - you're still human."
    },
    mostly: {
      type: "Mostly Functional Human",
      description: "You're doing OKAY. Most things work, some things could be better. You're a functioning adult with normal struggles. This is actually where most people are - the 'together' people are rare and the 'chaos' people are suffering. You're in the healthy middle.",
      traits: ["Reasonably functional", "Normal struggles", "Trying", "Mostly succeeding"],
      advice: "You're doing better than you think! Pick one area to improve and focus there. You don't need to have everything perfect - 'mostly together' is actually a great place to be. Keep it up!"
    },
    barely: {
      type: "Barely Holding On",
      description: "Things are... happening. Not always well, not always on time, but you're still here and still trying. Life feels like a constant struggle against chaos and you're winning... barely. Every small victory counts and you should celebrate them.",
      traits: ["Struggling", "Surviving", "Resilient", "Figuring it out"],
      advice: "First: you're doing better than you feel like you are. The fact that you're still trying matters. Pick ONE thing to get more together - just one. Small improvements compound. And consider asking for help - you don't have to figure this out alone."
    },
    chaos: {
      type: "Beautiful Disaster",
      description: "You're in chaos mode and you know it. Nothing is as together as it should be and you're just trying to survive each day. The good news? You're self-aware about it. The other good news? This doesn't have to be permanent. Rock bottom is a foundation to build from.",
      traits: ["Chaotic", "Honest", "Struggling", "Potential for growth"],
      advice: "Hey - this is a hard place to be but it's also honest. Consider getting support: therapy, friends, family, something. Pick the SMALLEST thing you can actually do and do it. You don't need to fix everything at once. Just one tiny step forward."
    }
  }
};
