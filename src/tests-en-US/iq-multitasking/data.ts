// How Good Are You at Multitasking? - Viral IQ test for American English users

export const testData = {
  id: "iq-multitasking",
  title: "How Good Are You at Multitasking?",
  description: "Can you juggle multiple things at once, or does your brain prefer one thing at a time? Find out!",
  questions: [
    {
      id: 1,
      text: "You're on a work call and an urgent email comes in. You:",
      options: [
        { text: "Read and respond to the email while listening to the call", type: "juggler" },
        { text: "Quickly scan the email, respond after the call", type: "switcher" },
        { text: "Ignore the email completely until the call ends", type: "focused" },
        { text: "Feel stressed and distracted by both", type: "single" }
      ]
    },
    {
      id: 2,
      text: "Cooking a complex meal with multiple dishes. Your approach:",
      options: [
        { text: "All burners going, timers set, moving seamlessly", type: "juggler" },
        { text: "Prep everything first, then cook methodically", type: "switcher" },
        { text: "Focus on one dish at a time, fully", type: "focused" },
        { text: "Something always burns or gets forgotten", type: "single" }
      ]
    },
    {
      id: 3,
      text: "How many browser tabs do you typically have open?",
      options: [
        { text: "15+ and I know exactly what's in each one", type: "juggler" },
        { text: "5-10, organized in some way", type: "switcher" },
        { text: "Just a few - I close what I'm not using", type: "focused" },
        { text: "Too many and it stresses me out", type: "single" }
      ]
    },
    {
      id: 4,
      text: "Someone interrupts you while you're working. Getting back on track takes:",
      options: [
        { text: "No time - I can pick up exactly where I left off", type: "juggler" },
        { text: "A minute to reorient myself", type: "switcher" },
        { text: "Several minutes to regain my focus", type: "focused" },
        { text: "Ugh, my whole flow is ruined", type: "single" }
      ]
    },
    {
      id: 5,
      text: "Driving while having a conversation (hands-free). How does it affect you?",
      options: [
        { text: "No problem, I drive just as well", type: "juggler" },
        { text: "Slightly distracted on complex roads", type: "switcher" },
        { text: "I turn down the music and ask them to wait at tricky parts", type: "focused" },
        { text: "I really shouldn't talk while driving", type: "single" }
      ]
    },
    {
      id: 6,
      text: "You're texting while watching TV. How much of each are you absorbing?",
      options: [
        { text: "Both fully - I never miss plot points or typos", type: "juggler" },
        { text: "Mostly both, might rewind occasionally", type: "switcher" },
        { text: "I pause the TV to respond properly", type: "focused" },
        { text: "I mess up both - typos and 'wait, what happened?'", type: "single" }
      ]
    },
    {
      id: 7,
      text: "At work, how do you handle your task list?",
      options: [
        { text: "Work on several projects simultaneously", type: "juggler" },
        { text: "Switch between tasks throughout the day", type: "switcher" },
        { text: "Block time for each task, deep focus on one", type: "focused" },
        { text: "Get overwhelmed when there's too much", type: "single" }
      ]
    },
    {
      id: 8,
      text: "A friend is talking to you while you're scrolling your phone. You:",
      options: [
        { text: "Can genuinely do both and remember the conversation", type: "juggler" },
        { text: "Put the phone down occasionally to give full attention", type: "switcher" },
        { text: "Put the phone away to fully listen", type: "focused" },
        { text: "Keep scrolling and miss most of what they said", type: "single" }
      ]
    },
    {
      id: 9,
      text: "How do you feel about open office environments with constant noise?",
      options: [
        { text: "Thrive in them - the energy helps me", type: "juggler" },
        { text: "Can work in them with headphones", type: "switcher" },
        { text: "Struggle to concentrate, prefer quiet", type: "focused" },
        { text: "Impossible to get real work done", type: "single" }
      ]
    },
    {
      id: 10,
      text: "Honestly, how do you perform under pressure with multiple deadlines?",
      options: [
        { text: "I actually work better - it energizes me", type: "juggler" },
        { text: "I manage by prioritizing and time-blocking", type: "switcher" },
        { text: "I work late to focus on each one properly", type: "focused" },
        { text: "I get stressed and less effective", type: "single" }
      ]
    }
  ],
  results: {
    juggler: {
      type: "Master Multitasker",
      description: "You're a rare breed! True multitasking is extremely difficult for the human brain, but you seem to handle it better than most. You thrive in chaos, can track multiple threads simultaneously, and actually perform better with more stimulation. Emergency rooms, trading floors, and newsrooms need people like you!",
      traits: ["High cognitive bandwidth", "Chaos-thriving", "Rapid context-switching", "Stimulation-seeking"],
      advice: "Your multitasking ability is valuable! Just remember that even you might benefit from occasional deep focus sessions for complex creative work."
    },
    switcher: {
      type: "Efficient Task Switcher",
      description: "You're great at managing multiple responsibilities! While true simultaneous multitasking isn't your thing, you switch between tasks quickly and efficiently. You keep many balls in the air through smart prioritization and quick transitions.",
      traits: ["Quick transitions", "Good prioritization", "Balanced approach", "Organized workflow"],
      advice: "Your task-switching is efficient! Try to minimize unnecessary switches though - each one costs a bit of mental energy."
    },
    focused: {
      type: "Deep Focus Champion",
      description: "You perform best when you can give your full attention to one thing. This isn't a weakness - research shows that deep focus produces higher quality work! You might not be great at juggling, but what you produce during focused time is exceptional.",
      traits: ["High-quality output", "Deep concentration", "One task excellence", "Distraction-averse"],
      advice: "Protect your focus time! Use time-blocking, turn off notifications, and don't apologize for needing uninterrupted work periods."
    },
    single: {
      type: "Single-Tasker",
      description: "Multitasking isn't your thing - and science says that's actually normal! The human brain isn't designed for true multitasking, and you feel that strongly. You do your best work when you can give something your complete, undivided attention.",
      traits: ["Need for quiet", "Sequential processing", "Easily overwhelmed", "Quality-focused"],
      advice: "Create an environment that supports your style: quiet spaces, minimal interruptions, and clear single priorities. Don't force yourself to multitask!"
    }
  }
};
