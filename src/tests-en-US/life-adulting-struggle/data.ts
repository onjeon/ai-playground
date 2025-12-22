// What Adulting Struggle Are You? - Viral life test for American English users

export const testData = {
  id: "life-adulting-struggle",
  title: "What Adulting Struggle Are You?",
  description: "We're all failing at something. Which adulting fail is your specialty?",
  questions: [
    {
      id: 1,
      text: "Your biggest source of adulting anxiety:",
      options: [
        { text: "Money - budgets, savings, retirement, ugh", type: "finances" },
        { text: "Health - doctor appointments, exercise, eating right", type: "health" },
        { text: "Organization - keeping track of everything", type: "organization" },
        { text: "Social obligations - maintaining relationships", type: "social" }
      ]
    },
    {
      id: 2,
      text: "The thing you most often procrastinate:",
      options: [
        { text: "Financial stuff - bills, budgeting, taxes", type: "finances" },
        { text: "Health appointments and self-care", type: "health" },
        { text: "Cleaning, organizing, admin tasks", type: "organization" },
        { text: "Responding to messages, planning hangouts", type: "social" }
      ]
    },
    {
      id: 3,
      text: "When you think 'I should really...' it's usually about:",
      options: [
        { text: "Start saving more / check my credit score", type: "finances" },
        { text: "Go to the gym / schedule that appointment", type: "health" },
        { text: "Clean my space / organize my life", type: "organization" },
        { text: "Call someone back / make plans with friends", type: "social" }
      ]
    },
    {
      id: 4,
      text: "The adulting skill you feel most behind on:",
      options: [
        { text: "Understanding money, investing, retirement", type: "finances" },
        { text: "Consistent health and wellness habits", type: "health" },
        { text: "Keeping my life and spaces organized", type: "organization" },
        { text: "Maintaining friendships and relationships", type: "social" }
      ]
    },
    {
      id: 5,
      text: "Your parents probably worry about your:",
      options: [
        { text: "Financial stability and decisions", type: "finances" },
        { text: "Health habits and self-care", type: "health" },
        { text: "Living situation and organization", type: "organization" },
        { text: "Social life and relationships", type: "social" }
      ]
    },
    {
      id: 6,
      text: "The adulting thing that stresses you most at 3am:",
      options: [
        { text: "Do I have enough saved? Can I afford [thing]?", type: "finances" },
        { text: "Should I have gotten that checked? When's my last physical?", type: "health" },
        { text: "I have so much to do, everything is a mess", type: "organization" },
        { text: "When did I last reach out to [person]?", type: "social" }
      ]
    },
    {
      id: 7,
      text: "If you had a personal assistant, they'd mostly help with:",
      options: [
        { text: "Managing my finances and reminding me about money", type: "finances" },
        { text: "Scheduling health stuff and keeping me on track", type: "health" },
        { text: "Organizing everything and keeping spaces clean", type: "organization" },
        { text: "Coordinating social plans and remembering birthdays", type: "social" }
      ]
    },
    {
      id: 8,
      text: "Your relationship with apps that help adults:",
      options: [
        { text: "I need budgeting apps but don't use them consistently", type: "finances" },
        { text: "I have fitness/health apps I've abandoned", type: "health" },
        { text: "I have to-do/organization apps I don't maintain", type: "organization" },
        { text: "I forget birthdays despite having calendar reminders", type: "social" }
      ]
    },
    {
      id: 9,
      text: "The area where 'future me' is counting on current me:",
      options: [
        { text: "Saving for retirement and being financially responsible", type: "finances" },
        { text: "Taking care of my body so it works later", type: "health" },
        { text: "Getting organized so things run smoothly", type: "organization" },
        { text: "Nurturing relationships so I'm not alone", type: "social" }
      ]
    },
    {
      id: 10,
      text: "Your adulting failure feels most like:",
      options: [
        { text: "I should understand money by now", type: "finances" },
        { text: "I should take better care of myself", type: "health" },
        { text: "I should have my life more together", type: "organization" },
        { text: "I should be better at maintaining connections", type: "social" }
      ]
    }
  ],
  results: {
    finances: {
      type: "The Financial Flounderer",
      description: "Money stuff is your kryptonite. Budgets feel like suggestions, savings are... aspirational, and you're not entirely sure what a 401k is doing. Every adult is supposed to understand finance but where was that class? You're surviving financially but not thriving.",
      traits: ["Money-confused", "Budget-averse", "Retirement-anxious", "Learning"],
      advice: "You're not alone - financial literacy isn't taught well! Start small: one budget app, one automatic transfer to savings, one hour learning about investing. Future you is begging present you to figure this out. It's learnable!"
    },
    health: {
      type: "The Health Procrastinator",
      description: "You know you should go to the doctor. And the dentist. And exercise. And eat better. But somehow it just... doesn't happen. Your body is working fine so far, so future problems seem distant. You're playing chicken with your own health.",
      traits: ["Health-neglecting", "Appointment-avoiding", "Invincibility-feeling", "Procrastinating"],
      advice: "Schedule ONE thing today - a checkup, a dental appointment, anything. Put it on the calendar. Then gradually add one healthy habit at a time. Your body is the only one you get, and it will eventually present a bill for neglect."
    },
    organization: {
      type: "The Organizational Chaos Agent",
      description: "Your life exists in a state of beautiful chaos. Things get done eventually but there's no system. Emails pile up, tasks slip through cracks, and your space reflects your mental state (cluttered but functional?). Organization is for people who have time you don't have.",
      traits: ["Chaotic", "System-resistant", "Functional mess", "Overwhelmed"],
      advice: "You don't need a perfect system, you need ONE system that works for you. Start with just one area - maybe a simple to-do list or a weekly clean. Organization creates mental space. You might actually have more time if things were organized."
    },
    social: {
      type: "The Connection Struggler",
      description: "Maintaining friendships as an adult is WORK and you're behind on it. Messages go unreturned, plans fall through, and you realize it's been months since you've seen people you care about. Adulting got busy and relationships became optional.",
      traits: ["Socially stretched", "Connection-poor", "Isolation-prone", "Well-intentioned"],
      advice: "Relationships don't maintain themselves and loneliness is a real health risk. Schedule regular check-ins like they're appointments. Reach out even when you have nothing to say. The effort of connection pays dividends in support and happiness."
    }
  }
};
