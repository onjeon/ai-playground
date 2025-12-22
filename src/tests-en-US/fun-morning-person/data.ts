// How Much of a Morning Person Are You? - Fun viral test

export const testData = {
  id: "fun-morning-person",
  title: "How Much of a Morning Person Are You?",
  description: "Are you chirpy at 6 AM or does sunlight before 10 feel like violence? Let's find out your true morning self.",
  questions: [
    {
      id: 1,
      text: "Your alarm goes off. Your first thought:",
      options: [
        { text: "Time to seize the day! (Actually excited)", type: "morning" },
        { text: "Okay, let me ease into this slowly", type: "neutral" },
        { text: "Who set this. Why would anyone do this", type: "night" },
        { text: "What day is it? What year is it? Who am I?", type: "zombie" }
      ]
    },
    {
      id: 2,
      text: "Before coffee/tea, you are capable of:",
      options: [
        { text: "Full conversations, maybe even productivity", type: "morning" },
        { text: "Basic human functions with minimal talking", type: "neutral" },
        { text: "Existing, barely", type: "night" },
        { text: "Violence if spoken to", type: "zombie" }
      ]
    },
    {
      id: 3,
      text: "Your ideal wake-up time on a free day:",
      options: [
        { text: "Same as always - 6-7 AM. Waste no daylight!", type: "morning" },
        { text: "Maybe 8-9 AM, a little sleep-in", type: "neutral" },
        { text: "10-11 AM, when I naturally wake up", type: "night" },
        { text: "Wake up? On a FREE day? 12 PM minimum", type: "zombie" }
      ]
    },
    {
      id: 4,
      text: "Someone suggests 8 AM brunch plans. You:",
      options: [
        { text: "Perfect! Then we have the whole day after", type: "morning" },
        { text: "Fine, I'll manage", type: "neutral" },
        { text: "Counter with 11 AM, negotiate from there", type: "night" },
        { text: "We're not friends anymore", type: "zombie" }
      ]
    },
    {
      id: 5,
      text: "The 'productive hours' of your day are:",
      options: [
        { text: "Early morning - I'm sharpest fresh from sleep", type: "morning" },
        { text: "Mid-morning to early afternoon", type: "neutral" },
        { text: "Evening, after the sun starts setting", type: "night" },
        { text: "2 AM when everything is quiet", type: "zombie" }
      ]
    },
    {
      id: 6,
      text: "How many alarms do you set?",
      options: [
        { text: "One. I wake up before it usually", type: "morning" },
        { text: "Two or three, just in case", type: "neutral" },
        { text: "At least five, strategically spaced", type: "night" },
        { text: "Infinite alarms AND I still snooze them all", type: "zombie" }
      ]
    },
    {
      id: 7,
      text: "The concept of 'sunrise watching' as an activity sounds:",
      options: [
        { text: "Lovely! I do this regularly, it's magical", type: "morning" },
        { text: "Nice for special occasions like travel", type: "neutral" },
        { text: "Only if I haven't gone to sleep yet", type: "night" },
        { text: "A form of torture I wouldn't wish on enemies", type: "zombie" }
      ]
    },
    {
      id: 8,
      text: "You have an important meeting at 7 AM. You:",
      options: [
        { text: "Love it! I'll be at my sharpest", type: "morning" },
        { text: "Set extra alarms, show up functional", type: "neutral" },
        { text: "Arrive physically but my brain is still sleeping", type: "night" },
        { text: "Reschedule, claim 'technical difficulties'", type: "zombie" }
      ]
    },
    {
      id: 9,
      text: "On weekends, the early morning hours are:",
      options: [
        { text: "My favorite - quiet, peaceful, all mine", type: "morning" },
        { text: "Nice if I happen to wake up, but no alarms", type: "neutral" },
        { text: "Something I only experience by accident", type: "night" },
        { text: "A myth. Those hours do not exist on weekends", type: "zombie" }
      ]
    },
    {
      id: 10,
      text: "A 'good morning' text at 6 AM would make you feel:",
      options: [
        { text: "Happy! I'm probably already up too", type: "morning" },
        { text: "Sweet thought, I'll respond when I wake up properly", type: "neutral" },
        { text: "Why is this person assaulting me with daylight", type: "night" },
        { text: "Unfriended, blocked, restraining order", type: "zombie" }
      ]
    }
  ],
  results: {
    morning: {
      type: "The True Morning Person",
      description: "You are the mythical creature others don't believe exists. You wake up HAPPY. Mornings are your power zone, your favorite time, your jam. While others zombie-walk to coffee, you've already exercised, journaled, and achieved things. You probably fall asleep at grandparent hours too.",
      traits: ["Energetic", "Optimistic", "Disciplined", "Early-rising"],
      advice: "Your morning energy is a gift! Just remember: not everyone shares it. Maybe don't text people before 8 AM unless you know they're also morning people. Your chirpy 6 AM energy can feel like violence to others."
    },
    neutral: {
      type: "The Flexible Riser",
      description: "You're adaptable! You can do mornings when you need to but don't actively seek them. You're not bouncing off walls at dawn, but you're also not non-functional. You're the healthy middle ground that scientists say is actually best. Boring? Maybe. Balanced? Definitely.",
      traits: ["Adaptable", "Balanced", "Reasonable", "Flexible"],
      advice: "Your flexibility is honestly enviable. Lean into it! You can hang with the morning people AND the night owls. You're the universal adapter of sleep schedules."
    },
    night: {
      type: "The Night Owl",
      description: "Mornings are an obstacle between you and your real life, which starts around 7 PM. Your brain kicks in when the sun goes down, and you've accepted that this is just who you are. Society is built for morning people, and you resent that deeply. Your peak hours are after dark.",
      traits: ["Creative", "Night-focused", "Resistant", "Nocturnal"],
      advice: "Your night owl tendencies are valid and probably genetic. But society does run on morning time, so maybe find a job with flexible hours? Your 2 AM brilliance deserves to be seen, even if no one's awake to see it."
    },
    zombie: {
      type: "The Anti-Morning Extremist",
      description: "Calling you 'not a morning person' is an understatement. You're actively hostile to the concept of early hours. Morning you is a different, scarier person than regular you. You've perfected the art of surviving mornings while being completely absent mentally. Your relationship with alarms is adversarial.",
      traits: ["Sleep-loving", "Grumpy", "Night-shift-ready", "Coffee-dependent"],
      advice: "Your morning hatred is legendary, but it might be worth checking if you're getting enough sleep? Sometimes this level of morning resistance is actually sleep deprivation. But also, maybe just embrace it and structure life around your truth."
    }
  }
};
