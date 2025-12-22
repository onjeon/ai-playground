// How Patient Are You? - Viral personality test for American English users

export const testData = {
  id: "personality-patience-level",
  title: "How Patient Are You?",
  description: "Are you zen incarnate or does waiting make you want to scream? Let's find out!",
  questions: [
    {
      id: 1,
      text: "You're in a slow-moving line at the grocery store. Your vibe:",
      options: [
        { text: "Perfect time to scroll my phone, no rush", type: "zen" },
        { text: "Slightly bored but fine, it'll move eventually", type: "patient" },
        { text: "Getting antsy, maybe eyeing other lines", type: "impatient" },
        { text: "Internal (or external) screaming. WHY is this so slow", type: "zero" }
      ]
    },
    {
      id: 2,
      text: "Someone is explaining something slowly when you already get it. You:",
      options: [
        { text: "Listen fully, maybe they have a point I'd miss", type: "zen" },
        { text: "Wait patiently even though I'm ready to move on", type: "patient" },
        { text: "Politely try to hurry them along", type: "impatient" },
        { text: "Jump in with 'Got it, let's move on'", type: "zero" }
      ]
    },
    {
      id: 3,
      text: "Your food delivery is 20 minutes late. Your reaction:",
      options: [
        { text: "These things happen, I'll snack on something", type: "zen" },
        { text: "Slightly annoyed but I'll wait it out", type: "patient" },
        { text: "Checking the app constantly and considering calling", type: "impatient" },
        { text: "Already drafting my angry review", type: "zero" }
      ]
    },
    {
      id: 4,
      text: "You're teaching someone something and they're struggling. You:",
      options: [
        { text: "Happy to explain as many times as needed", type: "zen" },
        { text: "Patient, but mentally noting where they're stuck", type: "patient" },
        { text: "Getting a bit frustrated but hiding it", type: "impatient" },
        { text: "Consider just doing it myself at this point", type: "zero" }
      ]
    },
    {
      id: 5,
      text: "You're waiting for important news (job, test results, etc.). How do you handle it?",
      options: [
        { text: "Peacefully - what will happen will happen", type: "zen" },
        { text: "Distract myself but check occasionally", type: "patient" },
        { text: "Checking constantly, hard to think about anything else", type: "impatient" },
        { text: "Absolute torture. Might reach out to ask about status", type: "zero" }
      ]
    },
    {
      id: 6,
      text: "Your computer is running slowly today. Your response:",
      options: [
        { text: "Good excuse to take a breath and stretch", type: "zen" },
        { text: "Mildly annoyed but I wait for it", type: "patient" },
        { text: "Clicking multiple times, getting frustrated", type: "impatient" },
        { text: "Ready to throw the whole computer away", type: "zero" }
      ]
    },
    {
      id: 7,
      text: "Someone keeps interrupting you while you're talking. You:",
      options: [
        { text: "Let them, they probably have something important to say", type: "zen" },
        { text: "Gently redirect back to my point when they pause", type: "patient" },
        { text: "Getting increasingly irritated but staying polite", type: "impatient" },
        { text: "About to snap at them to let me finish", type: "zero" }
      ]
    },
    {
      id: 8,
      text: "You've been put on hold for 15 minutes. Your state:",
      options: [
        { text: "Speakerphone on, doing other things, totally fine", type: "zen" },
        { text: "Annoyed but committed to waiting it out", type: "patient" },
        { text: "Checking the time constantly, considering hanging up", type: "impatient" },
        { text: "Furious and definitely mentioning the wait time when they answer", type: "zero" }
      ]
    },
    {
      id: 9,
      text: "You're stuck in traffic and late to something. Your energy:",
      options: [
        { text: "Podcast on, enjoying the bonus listening time", type: "zen" },
        { text: "Frustrated but accepting I can't control this", type: "patient" },
        { text: "Stressed, checking maps for alternatives constantly", type: "impatient" },
        { text: "Honking, yelling at other cars, full road rage", type: "zero" }
      ]
    },
    {
      id: 10,
      text: "A friend is chronically late to plans with you. How do you feel?",
      options: [
        { text: "Their time management is their journey", type: "zen" },
        { text: "Slightly annoyed but I plan around it now", type: "patient" },
        { text: "Increasingly frustrated each time it happens", type: "impatient" },
        { text: "Ready to end the friendship over it honestly", type: "zero" }
      ]
    }
  ],
  results: {
    zen: {
      type: "The Unshakeable Buddha",
      description: "Nothing ruffles your feathers. Time is a construct and you're above getting stressed about things you can't control. Your patience is almost supernatural - are you secretly meditating 8 hours a day? Your calm energy probably soothes everyone around you.",
      traits: ["Peaceful", "Accepting", "Unflappable", "Grounded"],
      advice: "Your zen nature is a gift in our chaotic world! Just make sure your patience isn't actually suppression. It's healthy to acknowledge frustration sometimes. And occasionally, impatience is appropriate - like when boundaries are being crossed."
    },
    patient: {
      type: "The Steady Waiter",
      description: "You've got solid patience reserves. Sure, you notice when things are slow or frustrating, but you handle it gracefully. You can wait when needed without spiraling, but you're not immune to the occasional eye roll. You're the functional adult of patience levels.",
      traits: ["Steady", "Tolerant", "Mature", "Reasonable"],
      advice: "Your patience level is healthy and balanced! You can handle life's delays without unnecessary stress but you're not a pushover either. Keep this equilibrium - it serves you well in relationships and work."
    },
    impatient: {
      type: "The Restless Rusher",
      description: "You've got places to be and things to do! Waiting feels like a personal attack on your productivity. You're not completely unable to be patient, but it requires EFFORT. Inside, you're always calculating how much time is being wasted.",
      traits: ["Energetic", "Efficient-minded", "Restless", "Time-conscious"],
      advice: "Your impatience often stems from valuing your time - that's not all bad! But constant rushing adds stress to your life. Practice being present in the wait. Some of life's best moments happen in the in-between times you're racing through."
    },
    zero: {
      type: "The Human Pressure Cooker",
      description: "Patience? Don't know her. Waiting makes you physically uncomfortable. Slow things feel like personal attacks. You've definitely honked at someone before the light even turned green. Your efficiency is admirable but your blood pressure might not be.",
      traits: ["Intense", "Reactive", "Efficiency-obsessed", "Quick-tempered"],
      advice: "Your need for speed is creating unnecessary stress! Life has waiting built in - fighting it only hurts you. Try deep breathing when forced to wait. Channel that energy into things you CAN control. Maybe some meditation wouldn't hurt?"
    }
  }
};
