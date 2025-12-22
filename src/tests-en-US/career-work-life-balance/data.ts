// What's Your Work-Life Balance? - Viral career test for American English users

export const testData = {
  id: "career-work-life-balance",
  title: "What's Your Work-Life Balance?",
  description: "Be honest: is work bleeding into everything or have you actually figured this out?",
  questions: [
    {
      id: 1,
      text: "It's 7 PM and you get a work email. You:",
      options: [
        { text: "Answer it immediately - what if it's urgent?", type: "workaholic" },
        { text: "Check it quickly, respond if needed, otherwise tomorrow", type: "balanced" },
        { text: "Notifications are off. It can wait until morning", type: "boundary" },
        { text: "What's email? I'm living my life right now", type: "disconnected" }
      ]
    },
    {
      id: 2,
      text: "On vacation, your work involvement is:",
      options: [
        { text: "Still checking email daily, joining key calls", type: "workaholic" },
        { text: "Emergency contact only, mostly disconnected", type: "balanced" },
        { text: "Fully unplugged - that's the whole point", type: "boundary" },
        { text: "Vacation is a state of mind I achieve daily", type: "disconnected" }
      ]
    },
    {
      id: 3,
      text: "Your average work hours weekly:",
      options: [
        { text: "50+ hours, sometimes weekends", type: "workaholic" },
        { text: "Around 40-45, depending on the week", type: "balanced" },
        { text: "40 max - I protect my time fiercely", type: "boundary" },
        { text: "As few as possible while still employed", type: "disconnected" }
      ]
    },
    {
      id: 4,
      text: "When you're NOT working, you're thinking about work:",
      options: [
        { text: "Constantly - my brain never fully shuts off", type: "workaholic" },
        { text: "Sometimes, especially before big projects", type: "balanced" },
        { text: "Rarely - I'm good at compartmentalizing", type: "boundary" },
        { text: "Never. Work is a thing I do for money only", type: "disconnected" }
      ]
    },
    {
      id: 5,
      text: "A friend asks you to hang out on a weeknight. You:",
      options: [
        { text: "Check my work calendar first, probably can't", type: "workaholic" },
        { text: "Usually yes, unless something urgent is happening", type: "balanced" },
        { text: "Of course! Evenings are for living", type: "boundary" },
        { text: "Always - my personal life is the priority", type: "disconnected" }
      ]
    },
    {
      id: 6,
      text: "How do you feel about your current work-life situation?",
      options: [
        { text: "I know I should have more balance but I can't stop", type: "workaholic" },
        { text: "Pretty good, though always room to improve", type: "balanced" },
        { text: "Really solid - I've worked hard to protect it", type: "boundary" },
        { text: "Life is great, work is just a thing I have to do", type: "disconnected" }
      ]
    },
    {
      id: 7,
      text: "Your boss asks you to work this weekend. Your internal reaction:",
      options: [
        { text: "Sure, I was probably going to anyway", type: "workaholic" },
        { text: "Check if it's truly necessary, then decide", type: "balanced" },
        { text: "Negotiate for comp time or politely push back", type: "boundary" },
        { text: "No. Absolutely not. (May or may not say this out loud)", type: "disconnected" }
      ]
    },
    {
      id: 8,
      text: "Your work has a late-night networking event. You:",
      options: [
        { text: "Attend enthusiastically - great career opportunity!", type: "workaholic" },
        { text: "Show up for a bit, leave at a reasonable time", type: "balanced" },
        { text: "Go only if it's truly valuable, leave early", type: "boundary" },
        { text: "Skip it. My evening is mine", type: "disconnected" }
      ]
    },
    {
      id: 9,
      text: "Your phone situation at night:",
      options: [
        { text: "Work email and Slack notifications stay on", type: "workaholic" },
        { text: "DND with exceptions for true emergencies", type: "balanced" },
        { text: "Full Do Not Disturb, no exceptions", type: "boundary" },
        { text: "Work apps aren't even on my personal phone", type: "disconnected" }
      ]
    },
    {
      id: 10,
      text: "When people ask what you do for fun, you:",
      options: [
        { text: "Realize work is my main 'hobby' right now", type: "workaholic" },
        { text: "Have a few things I try to make time for", type: "balanced" },
        { text: "Have active hobbies I prioritize weekly", type: "boundary" },
        { text: "Light up! My real life is outside of work", type: "disconnected" }
      ]
    }
  ],
  results: {
    workaholic: {
      type: "The Always-On Achiever",
      description: "You're married to your job, and honestly, it's a toxic relationship. Work bleeds into everything - evenings, weekends, vacations, your dreams. You're probably successful, but at what cost? Your laptop is your emotional support animal.",
      traits: ["Driven", "Overworked", "High-achieving", "Probably tired"],
      advice: "This isn't sustainable, and deep down you know it. Start small - one evening with your phone off, one weekend without email. You're not lazy for having boundaries; you're human. The work will still be there tomorrow. Take care of yourself before burnout makes the choice for you."
    },
    balanced: {
      type: "The Healthy Hustler",
      description: "You've found the sweet spot: working hard when needed, but not letting it consume you. You flex when work demands it and protect your time when it doesn't. You're the person everyone thinks they are but few actually become. Teach us your ways.",
      traits: ["Balanced", "Self-aware", "Flexible", "Healthy boundaries"],
      advice: "You're doing it right! Keep monitoring your balance - it can slip when you're not paying attention. Don't let high-pressure seasons become your new normal. Protect what you've built and keep being the model of what work-life balance actually looks like."
    },
    boundary: {
      type: "The Boundary Boss",
      description: "You've built walls around your personal time and you DEFEND them. Work stays at work. Your notifications are off, your evenings are yours, and you're unapologetic about it. You might get side-eye from hustle culture, but you're the one actually living your life.",
      traits: ["Firm boundaries", "Self-protective", "Intentional", "Possibly judged by workaholics"],
      advice: "Your boundaries are healthy and admirable. Just make sure rigidity doesn't cost you growth opportunities. Sometimes flexibility serves you, but always on YOUR terms. Keep protecting your peace, but stay open to the occasional exception when it truly matters."
    },
    disconnected: {
      type: "The 'Work to Live' Champion",
      description: "Work? It's what you do for money so you can do the things you actually care about. You're not here to climb ladders or sacrifice weekends - you're here to get paid and live your actual life. Your job is a job, not your identity. You've opted out of hustle culture entirely.",
      traits: ["Life-focused", "Unbothered", "Detached from career", "Living their best life"],
      advice: "Your perspective is refreshing, but make sure you're still performing well enough to keep your income stable. There's a difference between healthy detachment and checked-out disengagement. Stay fulfilled in your work just enough to avoid career consequences."
    }
  }
};
