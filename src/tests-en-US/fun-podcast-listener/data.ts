// Your Podcast Listening Style - Fun viral test

export const testData = {
  id: "fun-podcast-listener",
  title: "Your Podcast Listening Style",
  description: "How you consume podcasts says a lot about you. Are you a devoted subscriber or a chaotic binger?",
  questions: [
    {
      id: 1,
      text: "Your podcast queue right now has:",
      options: [
        { text: "0-5 episodes, I stay current", type: "organized" },
        { text: "Like 30 episodes I'll definitely get to", type: "hoarder" },
        { text: "No queue - I just search whatever I'm in the mood for", type: "explorer" },
        { text: "What's a podcast queue?", type: "casual" }
      ]
    },
    {
      id: 2,
      text: "A podcast episode is 3 hours long. You:",
      options: [
        { text: "Perfect for a long drive or project", type: "hoarder" },
        { text: "Skip it - life is too short", type: "organized" },
        { text: "Listen if the topic grabs me, skip otherwise", type: "explorer" },
        { text: "Wait, people listen to 3-hour podcasts?", type: "casual" }
      ]
    },
    {
      id: 3,
      text: "Your podcast speed setting:",
      options: [
        { text: "1.5x-2x - efficiency is key", type: "organized" },
        { text: "1x like a normal person", type: "casual" },
        { text: "Depends on the podcast and my mood", type: "explorer" },
        { text: "Haven't touched it, didn't know you could change it", type: "hoarder" }
      ]
    },
    {
      id: 4,
      text: "When you find a new podcast you love, you:",
      options: [
        { text: "Binge the entire back catalog immediately", type: "hoarder" },
        { text: "Subscribe and add to rotation, no rush", type: "organized" },
        { text: "Listen to the most interesting episodes first", type: "explorer" },
        { text: "Listen to a few, forget about it, rediscover later", type: "casual" }
      ]
    },
    {
      id: 5,
      text: "When do you usually listen to podcasts?",
      options: [
        { text: "Scheduled times - commute, workouts, chores", type: "organized" },
        { text: "Whenever I remember I have a 50-hour backlog", type: "hoarder" },
        { text: "Random moments when I want something to listen to", type: "explorer" },
        { text: "Occasionally, when someone recommends something", type: "casual" }
      ]
    },
    {
      id: 6,
      text: "Ad breaks in podcasts. Your approach:",
      options: [
        { text: "Skip button ready, 30 seconds forward at the speed of light", type: "organized" },
        { text: "Let them play, I'm usually multitasking anyway", type: "hoarder" },
        { text: "Depends - sometimes they're entertaining", type: "explorer" },
        { text: "Wait, you can skip those?", type: "casual" }
      ]
    },
    {
      id: 7,
      text: "How many podcasts are you subscribed to?",
      options: [
        { text: "5-10, carefully curated", type: "organized" },
        { text: "Honestly lost count, subscribed to anything interesting", type: "hoarder" },
        { text: "A few favorites, but I explore a lot", type: "explorer" },
        { text: "I don't really subscribe, just listen occasionally", type: "casual" }
      ]
    },
    {
      id: 8,
      text: "Someone asks for podcast recommendations. You:",
      options: [
        { text: "Have a perfectly organized list ready", type: "organized" },
        { text: "Overwhelm them with 20 suggestions", type: "hoarder" },
        { text: "Ask what they're into and suggest based on that", type: "explorer" },
        { text: "Draw a blank because I barely listen to any", type: "casual" }
      ]
    },
    {
      id: 9,
      text: "You're behind on your favorite podcast. You:",
      options: [
        { text: "Catch up systematically before new episodes", type: "organized" },
        { text: "It joins the backlog - I'll get there eventually", type: "hoarder" },
        { text: "Jump to the most interesting recent episode", type: "explorer" },
        { text: "This is why I don't subscribe to things", type: "casual" }
      ]
    },
    {
      id: 10,
      text: "Your podcast genre preferences:",
      options: [
        { text: "Specific niches that I'm deeply into", type: "organized" },
        { text: "Everything - true crime, comedy, education, all of it", type: "hoarder" },
        { text: "Constantly trying new genres and topics", type: "explorer" },
        { text: "Whatever's popular or gets recommended", type: "casual" }
      ]
    }
  ],
  results: {
    organized: {
      type: "The Podcast Optimizer",
      description: "Podcasts are part of your productivity system. Queue managed, playback speed optimized, ads skipped with precision. You treat podcast listening like a skill to be mastered. Your 'listen later' list actually gets listened to. You're basically a professional podcast consumer.",
      traits: ["Efficient", "Methodical", "Selective", "Disciplined"],
      advice: "Your organization is impressive! But maybe slow down sometimes? Some podcasts are meant to be savored at 1x speed. Not everything needs to be optimized - sometimes it's okay to just enjoy."
    },
    hoarder: {
      type: "The Podcast Hoarder",
      description: "Your podcast app is basically a library of content you fully intend to consume... eventually. You subscribe to everything interesting, creating a digital pile of 'someday listening.' The backlog grows faster than you can listen. The guilt is real, but so is the optimism.",
      traits: ["Curious", "Optimistic", "Overwhelmed", "Collector"],
      advice: "You'll never catch up. Accept it. Maybe unsubscribe from things you haven't listened to in 3 months? Quality over quantity. That 200-episode backlog isn't serving you - it's haunting you."
    },
    explorer: {
      type: "The Podcast Explorer",
      description: "You treat podcasts like an adventure. No rigid schedule, no strict preferences - just following curiosity wherever it leads. You're equally likely to listen to a true crime deep dive or a random comedy episode someone mentioned. Your podcast history is beautifully chaotic.",
      traits: ["Curious", "Flexible", "Adventurous", "Spontaneous"],
      advice: "Your exploratory approach keeps things fresh! Consider occasionally committing to a series though - some podcasts reward loyalty with amazing payoffs. Balance exploration with depth."
    },
    casual: {
      type: "The Casual Listener",
      description: "Podcasts exist in your life but don't dominate it. You'll listen when someone recommends something or when you're in the mood, but you're not losing sleep over unfinished episodes. You have a healthy detachment that podcast obsessives envy.",
      traits: ["Relaxed", "Unbothered", "Balanced", "Recommendation-driven"],
      advice: "Your casual approach is honestly healthy. If you want to dive deeper, ask a podcast-obsessed friend for personalized recommendations. There might be a podcast out there that turns you into one of us..."
    }
  }
};
