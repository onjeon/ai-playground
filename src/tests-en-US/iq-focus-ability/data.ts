// How Well Can You Focus? - Viral IQ test for American English users

export const testData = {
  id: "iq-focus-ability",
  title: "How Well Can You Focus?",
  description: "In a world of endless distractions, how strong is your ability to concentrate? Test your focus power!",
  questions: [
    {
      id: 1,
      text: "Your phone buzzes while you're working on something important. You:",
      options: [
        { text: "Don't even notice it until later", type: "laser" },
        { text: "Glance at it but don't pick it up", type: "strong" },
        { text: "Check it quickly, then get back to work", type: "average" },
        { text: "Can't resist checking it immediately", type: "scattered" }
      ]
    },
    {
      id: 2,
      text: "When reading a book, how often does your mind wander?",
      options: [
        { text: "Rarely - I get completely absorbed", type: "laser" },
        { text: "Occasionally, but I catch myself quickly", type: "strong" },
        { text: "Often - I re-read paragraphs regularly", type: "average" },
        { text: "Constantly - reading is a struggle", type: "scattered" }
      ]
    },
    {
      id: 3,
      text: "How long can you work on a single task without checking social media?",
      options: [
        { text: "Hours if I'm in the zone", type: "laser" },
        { text: "60-90 minutes usually", type: "strong" },
        { text: "30-45 minutes max", type: "average" },
        { text: "I check every 10-15 minutes honestly", type: "scattered" }
      ]
    },
    {
      id: 4,
      text: "Someone's talking to you while you're focused. Do you hear them?",
      options: [
        { text: "Sometimes genuinely don't hear until they touch me", type: "laser" },
        { text: "Hear them but need a second to switch gears", type: "strong" },
        { text: "Hear them and respond, slightly distracted", type: "average" },
        { text: "I'm rarely that focused anyway", type: "scattered" }
      ]
    },
    {
      id: 5,
      text: "During a long meeting or lecture, your attention typically:",
      options: [
        { text: "Stays engaged the whole time", type: "laser" },
        { text: "Holds for most of it, drifts occasionally", type: "strong" },
        { text: "Drifts regularly, need notes to stay on track", type: "average" },
        { text: "Wanders constantly, I zone out a lot", type: "scattered" }
      ]
    },
    {
      id: 6,
      text: "You sit down to write an email. The email is done in:",
      options: [
        { text: "One focused sitting, no distractions", type: "laser" },
        { text: "A few minutes, might check one other thing", type: "strong" },
        { text: "Longer because I keep getting sidetracked", type: "average" },
        { text: "Way too long - I open 5 other tabs first", type: "scattered" }
      ]
    },
    {
      id: 7,
      text: "How would you describe your inner monologue during tasks?",
      options: [
        { text: "Quiet - I'm fully present in what I'm doing", type: "laser" },
        { text: "Mostly focused, occasional unrelated thoughts", type: "strong" },
        { text: "Busy - lots of random thoughts competing", type: "average" },
        { text: "Chaotic - my mind is everywhere except here", type: "scattered" }
      ]
    },
    {
      id: 8,
      text: "When was the last time you experienced 'flow state' (complete absorption)?",
      options: [
        { text: "This week - it happens regularly", type: "laser" },
        { text: "Recently, when conditions are right", type: "strong" },
        { text: "It's been a while, rare for me", type: "average" },
        { text: "I don't know if I've ever experienced that", type: "scattered" }
      ]
    },
    {
      id: 9,
      text: "Background noise while working affects you how?",
      options: [
        { text: "Barely notice it once I'm focused", type: "laser" },
        { text: "Can tune it out with some effort", type: "strong" },
        { text: "Distracting - I need relative quiet", type: "average" },
        { text: "Every sound pulls my attention", type: "scattered" }
      ]
    },
    {
      id: 10,
      text: "After getting distracted, how long to get back to deep focus?",
      options: [
        { text: "Quickly - I can re-enter focus mode fast", type: "laser" },
        { text: "A few minutes to get back on track", type: "strong" },
        { text: "Takes a while, hard to get back in the zone", type: "average" },
        { text: "Sometimes I never get back to it that day", type: "scattered" }
      ]
    }
  ],
  results: {
    laser: {
      type: "Laser Focus Champion",
      description: "Your ability to concentrate is exceptional! You can enter deep focus states easily and sustain them for impressive periods. While the world around you gets distracted by notifications and shiny objects, you have the rare ability to truly lock in. This is a genuine cognitive superpower in the modern attention economy!",
      traits: ["Deep focus ability", "Distraction-resistant", "Flow state access", "Sustained concentration"],
      advice: "Your focus is a gift! Use it wisely on things that matter. Also make sure you take breaks - even lasers need to cool down."
    },
    strong: {
      type: "Strong Focuser",
      description: "You have above-average focus abilities! You can concentrate well when you need to and don't get distracted as easily as most people. With the right environment and mindset, you can achieve deep work states. You're well-equipped for demanding cognitive tasks.",
      traits: ["Good concentration", "Manageable distractions", "Recovers focus well", "Environment-aware"],
      advice: "Set yourself up for success: use focus apps, time-blocking, and distraction-free environments to maximize your natural ability."
    },
    average: {
      type: "Modern Mind",
      description: "Welcome to the club - you have a normal modern brain! Years of smartphones, social media, and constant notifications have trained your brain to seek stimulation. You CAN focus, but it requires more effort than you'd like. You're not alone; this is the new normal.",
      traits: ["Easily distracted", "Short attention bursts", "Needs external structure", "Notification-responsive"],
      advice: "Your focus can improve! Try: phone in another room, website blockers, Pomodoro technique, and gradually increasing focus sessions."
    },
    scattered: {
      type: "Scattered Thinker",
      description: "Focusing is genuinely hard for you - and modern technology has NOT helped. Your brain jumps between thoughts and stimuli constantly. This might be frustrating, but it also means you're often creative, notice things others miss, and can handle variety. Still, deep focus is a skill worth building.",
      traits: ["Racing thoughts", "High distractibility", "Creative connections", "Stimulation-seeking"],
      advice: "Consider: ADHD screening if you haven't, meditation practice, removing apps from your phone, and building focus in tiny increments. It CAN get better!"
    }
  }
};
