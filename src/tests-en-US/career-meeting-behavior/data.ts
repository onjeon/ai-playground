// Your Behavior in Meetings - Viral career test for American English users

export const testData = {
  id: "career-meeting-behavior",
  title: "Your Behavior in Meetings",
  description: "We all have a meeting persona. What's yours? (Your coworkers definitely have opinions)",
  questions: [
    {
      id: 1,
      text: "The meeting is starting. Where are you?",
      options: [
        { text: "Logged in 2 minutes early, camera on, ready to go", type: "eager" },
        { text: "Joining right on time, still settling in", type: "participant" },
        { text: "3 minutes late with a 'sorry, my last call ran over'", type: "multitasker" },
        { text: "Already internally calculating if I could skip this", type: "skeptic" }
      ]
    },
    {
      id: 2,
      text: "Someone asks 'any questions?' Your move:",
      options: [
        { text: "I have three questions prepared", type: "eager" },
        { text: "A genuine question if I have one", type: "participant" },
        { text: "Staying silent - I'll figure it out later", type: "multitasker" },
        { text: "'Can we take this offline?' to end the meeting faster", type: "skeptic" }
      ]
    },
    {
      id: 3,
      text: "Your camera during video calls:",
      options: [
        { text: "Always on, professional background, good lighting", type: "eager" },
        { text: "On most of the time, off when I'm eating", type: "participant" },
        { text: "Strategically toggled based on who's watching", type: "multitasker" },
        { text: "Off. My face adds nothing to this discussion", type: "skeptic" }
      ]
    },
    {
      id: 4,
      text: "During a boring meeting, you're actually:",
      options: [
        { text: "Engaged! All meetings have value if you look for it", type: "eager" },
        { text: "Taking notes on action items that relate to me", type: "participant" },
        { text: "Answering Slack messages on my phone", type: "multitasker" },
        { text: "Browsing the internet and waiting for my name", type: "skeptic" }
      ]
    },
    {
      id: 5,
      text: "The meeting could've been an email. Your reaction:",
      options: [
        { text: "But the collaboration was nice!", type: "eager" },
        { text: "Slightly annoyed but whatever", type: "participant" },
        { text: "At least I got other work done during it", type: "multitasker" },
        { text: "Internally screaming. 30 minutes of my life: gone", type: "skeptic" }
      ]
    },
    {
      id: 6,
      text: "Someone goes on a long tangent. You:",
      options: [
        { text: "Listen respectfully, they might make a point", type: "eager" },
        { text: "Wait it out patiently", type: "participant" },
        { text: "Mute and check emails until it's relevant again", type: "multitasker" },
        { text: "Interrupt to get us back on track (someone has to)", type: "skeptic" }
      ]
    },
    {
      id: 7,
      text: "You're asked to present something. Your prep level:",
      options: [
        { text: "Slides ready, talking points memorized, backup data prepared", type: "eager" },
        { text: "Organized slides and a clear narrative", type: "participant" },
        { text: "Winging it with a few bullet points", type: "multitasker" },
        { text: "Questioning why this needs a meeting at all", type: "skeptic" }
      ]
    },
    {
      id: 8,
      text: "The meeting is running over. Your energy:",
      options: [
        { text: "Happy to continue - this discussion is valuable!", type: "eager" },
        { text: "Checking the time but staying present", type: "participant" },
        { text: "Already messaging my next meeting that I'll be late", type: "multitasker" },
        { text: "Actively trying to wrap this up with pointed comments", type: "skeptic" }
      ]
    },
    {
      id: 9,
      text: "After the meeting, you usually:",
      options: [
        { text: "Send a follow-up email summarizing action items", type: "eager" },
        { text: "Check my notes and do my assigned tasks", type: "participant" },
        { text: "Immediately context-switch to my actual work", type: "multitasker" },
        { text: "Vent to a coworker about how unnecessary that was", type: "skeptic" }
      ]
    },
    {
      id: 10,
      text: "Your ideal meeting scenario:",
      options: [
        { text: "Brainstorming sessions with lots of collaboration", type: "eager" },
        { text: "Clear agenda, defined outcomes, reasonable length", type: "participant" },
        { text: "Optional attendance so I can choose", type: "multitasker" },
        { text: "A world where meetings don't exist", type: "skeptic" }
      ]
    }
  ],
  results: {
    eager: {
      type: "The Meeting MVP",
      description: "You LOVE meetings. The collaboration! The face time! The opportunity to contribute! You're early, engaged, and probably taking color-coded notes. You're the one keeping company culture alive while the rest of us check our phones. Your enthusiasm is admirable (and slightly baffling to the skeptics).",
      traits: ["Enthusiastic", "Prepared", "Engaged", "Team player"],
      advice: "Your energy is a gift, but read the room sometimes. Not everyone shares your meeting passion. Save some of that enthusiasm for the meetings that truly matter, and give others space to contribute too."
    },
    participant: {
      type: "The Solid Contributor",
      description: "You show up, you participate, you leave. Meetings are a work thing - you treat them professionally without letting them take over your life. You speak when you have value to add and otherwise listen respectfully. You're the functional adult of meeting culture.",
      traits: ["Professional", "Balanced", "Reliable", "Appropriate"],
      advice: "You've mastered the meeting game. Keep being the voice of reason and appropriate participation. Just make sure you're speaking up enough to be visible when it matters for your career."
    },
    multitasker: {
      type: "The Strategic Multitasker",
      description: "Camera off? Check. Muted? Check. Actually paying attention? Debatable. You've perfected the art of being 'present' while doing your actual work. You tune in when your name is mentioned and somehow still answer questions correctly. A true corporate survival skill.",
      traits: ["Efficient", "Clever", "Slightly checked out", "Productivity-focused"],
      advice: "Your multitasking skills are impressive, but you might be missing important context (and it's more obvious than you think). Balance efficiency with actual engagement - your distraction is often visible to others."
    },
    skeptic: {
      type: "The Meeting Minimalist",
      description: "Every meeting is guilty until proven necessary. You're mentally calculating wasted productivity while others chat. You're the one asking 'do we really need a meeting for this?' and honestly, you're often right. You're not being difficult - you're protecting everyone's time.",
      traits: ["Efficient", "Direct", "Skeptical", "Time-protective"],
      advice: "Your meeting skepticism is valid and sometimes heroic. But remember that not all meetings are pointless - some collaboration truly needs real-time discussion. Pick your battles and try not to alienate the eager beavers."
    }
  }
};
