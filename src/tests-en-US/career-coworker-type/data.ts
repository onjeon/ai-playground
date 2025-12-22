// What Type of Coworker Are You? - Viral career test for American English users

export const testData = {
  id: "career-coworker-type",
  title: "What Type of Coworker Are You?",
  description: "Your colleagues already know. Time for you to find out what they REALLY think of you.",
  questions: [
    {
      id: 1,
      text: "Monday morning. You walk into the office (or log on). You:",
      options: [
        { text: "Greet everyone, make small talk, spread positive vibes", type: "social" },
        { text: "Quick hellos, then straight to my task list", type: "focused" },
        { text: "Minimal interaction until I've had caffeine", type: "independent" },
        { text: "Complain about Monday with whoever will listen", type: "venter" }
      ]
    },
    {
      id: 2,
      text: "A coworker asks for help with something not in your job description. You:",
      options: [
        { text: "Happy to help! That's what teammates are for", type: "social" },
        { text: "Help if I have time and it's reasonable", type: "focused" },
        { text: "Politely redirect them to someone else", type: "independent" },
        { text: "Help, but definitely vent about it later", type: "venter" }
      ]
    },
    {
      id: 3,
      text: "There's office drama happening. Your involvement:",
      options: [
        { text: "I know everything and I'm somehow Switzerland", type: "social" },
        { text: "I ignore it unless it affects my work", type: "focused" },
        { text: "What drama? I'm not paying attention", type: "independent" },
        { text: "I'm not IN the drama but I definitely discuss it", type: "venter" }
      ]
    },
    {
      id: 4,
      text: "The company organizes a team building event. Your reaction:",
      options: [
        { text: "I love these! Great for morale and bonding", type: "social" },
        { text: "I'll go, participate, and be pleasant", type: "focused" },
        { text: "Is this mandatory? Because I have work to do", type: "independent" },
        { text: "I'll go and critique everything about it later", type: "venter" }
      ]
    },
    {
      id: 5,
      text: "Lunch break ritual:",
      options: [
        { text: "Eating with coworkers, catching up, building relationships", type: "social" },
        { text: "Quick lunch, maybe a walk, then back to work", type: "focused" },
        { text: "Eating at my desk while doing something for myself", type: "independent" },
        { text: "Lunch rant session with my work bestie", type: "venter" }
      ]
    },
    {
      id: 6,
      text: "Someone takes credit for your work in a meeting. You:",
      options: [
        { text: "Let it go - the team wins together", type: "social" },
        { text: "Politely clarify my contribution afterward", type: "focused" },
        { text: "Seethe quietly and document it for later", type: "independent" },
        { text: "Vent about it for the next week", type: "venter" }
      ]
    },
    {
      id: 7,
      text: "Your desk/workspace vibes:",
      options: [
        { text: "Photos, plants, snacks for sharing, conversation starter decor", type: "social" },
        { text: "Organized and functional, minimal personal stuff", type: "focused" },
        { text: "Headphones on, do not disturb energy", type: "independent" },
        { text: "A mess that reflects my internal state about this job", type: "venter" }
      ]
    },
    {
      id: 8,
      text: "A coworker is clearly struggling. Your response:",
      options: [
        { text: "Check in on them, offer to help, be a friend", type: "social" },
        { text: "Offer specific help if it's something I can do", type: "focused" },
        { text: "Not my business unless they ask for help", type: "independent" },
        { text: "Bond over shared struggles and complain together", type: "venter" }
      ]
    },
    {
      id: 9,
      text: "How do people usually find out about your weekend?",
      options: [
        { text: "I tell everyone on Monday because sharing is fun", type: "social" },
        { text: "Only if someone asks directly", type: "focused" },
        { text: "They don't. Work and life are separate", type: "independent" },
        { text: "They hear about the bad parts for sure", type: "venter" }
      ]
    },
    {
      id: 10,
      text: "Your honest thoughts about your coworkers:",
      options: [
        { text: "They're like a second family! I genuinely care about them", type: "social" },
        { text: "Pleasant professionals I work well with", type: "focused" },
        { text: "Fine, but I don't need friends at work", type: "independent" },
        { text: "Some are great, some are... material for stories", type: "venter" }
      ]
    }
  ],
  results: {
    social: {
      type: "The Office Social Butterfly",
      description: "You know everyone's names, birthdays, and dog breeds. You're the one organizing happy hours, remembering to say 'happy Friday,' and making sure new people feel welcome. The office would be significantly less fun without you. You're basically HR but for vibes.",
      traits: ["Friendly", "Inclusive", "Relationship-focused", "Morale booster"],
      advice: "Your social energy is a gift to your workplace, but make sure you're also hitting your deliverables. Being likeable opens doors, but being excellent at your job keeps them open. Balance socializing with actually working."
    },
    focused: {
      type: "The Reliable Professional",
      description: "You're here to work, and work you do. Pleasant, professional, and productive. You contribute in meetings, help when asked, and never start drama. You're the coworker managers love because you're predictable in the best way. Steady, functional, and drama-free.",
      traits: ["Professional", "Reliable", "Consistent", "Team player"],
      advice: "Your professionalism is respected, but don't be so focused that you miss relationship-building opportunities. Some of your best career breaks will come from connections, not just output. Let people see the real you sometimes."
    },
    independent: {
      type: "The Headphones-On Worker",
      description: "You're at work to work. Socializing is optional and often skipped. You're not antisocial, you're just... focused. Your headphones are your boundary, and your productivity is your defense. You probably have a reputation for being mysterious or 'quiet' (you're just efficient).",
      traits: ["Independent", "Private", "Self-sufficient", "Focused"],
      advice: "Independence is great, but relationships matter for career growth. You don't have to become a social butterfly, but make small efforts to connect. A little visibility goes a long way - people can't champion what they don't know."
    },
    venter: {
      type: "The Office Commentator",
      description: "You have THOUGHTS. About the company, the processes, the meetings, the people. You're not negative, you're just... observant. And you share those observations. Frequently. With anyone who will listen. You're the one people go to when they need to vent too.",
      traits: ["Expressive", "Critical", "Honest", "Emotionally open"],
      advice: "Your honesty is refreshing, but chronic venting can damage your reputation and make you look negative - even when you're right. Choose your audience carefully and balance criticism with solutions. Be known for more than complaints."
    }
  }
};
