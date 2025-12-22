// How Do You Handle Breakups? - Viral relationship test for American English users

export const testData = {
  id: "relationship-breakup-style",
  title: "How Do You Handle Breakups?",
  description: "We all cope differently. What's YOUR breakup recovery era looking like?",
  questions: [
    {
      id: 1,
      text: "First 24 hours after a breakup. What are you doing?",
      options: [
        { text: "Crying while looking at old photos", type: "wallower" },
        { text: "Already texting other people", type: "mover" },
        { text: "Deactivating socials and going ghost", type: "disappearer" },
        { text: "Planning a complete life makeover", type: "reinventor" }
      ]
    },
    {
      id: 2,
      text: "Your ex's stuff is still at your place. You...",
      options: [
        { text: "Can't bring myself to touch it yet", type: "wallower" },
        { text: "Already in a trash bag, bye!", type: "mover" },
        { text: "Put it in a box and out of sight", type: "disappearer" },
        { text: "Donate it and declutter my whole life", type: "reinventor" }
      ]
    },
    {
      id: 3,
      text: "Friends ask if you want to talk about it. You say...",
      options: [
        { text: "Yes, I need to process out loud for hours", type: "wallower" },
        { text: "Briefly, then let's go OUT", type: "mover" },
        { text: "I'm fine. (I am not fine)", type: "disappearer" },
        { text: "Let's talk about my new goals instead", type: "reinventor" }
      ]
    },
    {
      id: 4,
      text: "Social media during a breakup:",
      options: [
        { text: "Posting sad quotes that are clearly about them", type: "wallower" },
        { text: "Posting my best revenge photos", type: "mover" },
        { text: "Completely inactive - I'm in hiding", type: "disappearer" },
        { text: "Documenting my glow-up transformation", type: "reinventor" }
      ]
    },
    {
      id: 5,
      text: "You see something that reminds you of your ex. Reaction?",
      options: [
        { text: "Emotional spiral for the rest of the day", type: "wallower" },
        { text: "Brief thought, then move on", type: "mover" },
        { text: "Avoid that thing forever now", type: "disappearer" },
        { text: "Create a new memory with that thing", type: "reinventor" }
      ]
    },
    {
      id: 6,
      text: "Your breakup playlist is mostly...",
      options: [
        { text: "Sad songs that make me cry harder", type: "wallower" },
        { text: "Breakup anthems and empowerment bangers", type: "mover" },
        { text: "No music. Silence is all I can handle", type: "disappearer" },
        { text: "New genres I'm exploring now that I'm 'new me'", type: "reinventor" }
      ]
    },
    {
      id: 7,
      text: "They text you a week later. What do you do?",
      options: [
        { text: "Respond immediately, heart racing", type: "wallower" },
        { text: "Leave them on read (power move)", type: "mover" },
        { text: "Panic and ignore it completely", type: "disappearer" },
        { text: "Respond politely but I'm clearly over it", type: "reinventor" }
      ]
    },
    {
      id: 8,
      text: "What's your timeline for getting 'over it'?",
      options: [
        { text: "Months, maybe longer. I process slowly", type: "wallower" },
        { text: "Already swiping, life goes on", type: "mover" },
        { text: "I just... shut down and wait", type: "disappearer" },
        { text: "I use the pain as fuel for self-improvement", type: "reinventor" }
      ]
    },
    {
      id: 9,
      text: "Your friends are worried about you post-breakup. Why?",
      options: [
        { text: "I haven't stopped crying in days", type: "wallower" },
        { text: "I'm going out TOO much", type: "mover" },
        { text: "They literally can't reach me", type: "disappearer" },
        { text: "I'm acting scarily productive", type: "reinventor" }
      ]
    },
    {
      id: 10,
      text: "Months later, how do you feel about the relationship?",
      options: [
        { text: "Still not fully over it, honestly", type: "wallower" },
        { text: "What relationship? I've moved on completely", type: "mover" },
        { text: "I've blocked those memories out", type: "disappearer" },
        { text: "Grateful for the growth it brought me", type: "reinventor" }
      ]
    }
  ],
  results: {
    wallower: {
      type: "The Deep Processor",
      description: "You feel breakups DEEPLY. You need time to sit in the sadness, process every memory, and grieve the relationship properly. You're not rushing to move on - you believe in honoring your feelings. Your friends are concerned but you're just... experiencing emotions.",
      traits: ["Emotionally intense", "Needs time to heal", "Processes through feeling", "Holds on to memories"],
      advice: "Feeling your feelings is healthy, but set a limit. At some point, processing becomes ruminating. Allow yourself to grieve, then give yourself permission to let go."
    },
    mover: {
      type: "The Quick Reboundeer",
      description: "Why sit in sadness when you could simply... not? You cope by staying busy, meeting new people, and keeping your schedule so full you don't have time to be sad. Some might call it avoidance. You call it efficiency.",
      traits: ["Fast recovery", "Action-oriented", "Avoids deep processing", "Always moving forward"],
      advice: "Moving on is valid, but make sure you're actually healing - not just distracting yourself. Unprocessed feelings have a way of catching up with you later."
    },
    disappearer: {
      type: "The Hermit Mode",
      description: "Your breakup strategy is simple: become invisible. You withdraw from social life, go dark on social media, and handle your pain in complete isolation. You'll emerge when you're ready, but right now? The cave is where you belong.",
      traits: ["Needs solitude to heal", "Goes off-grid", "Processes alone", "Avoids talking about it"],
      advice: "Solitude can be healing, but isolation can become depression. Let at least one person in. You don't have to process alone - even if that feels safer."
    },
    reinventor: {
      type: "The Glow-Up Era",
      description: "A breakup is just an excuse for a rebrand. New haircut, new gym membership, new hobbies, new YOU. You channel all that pain into productivity and emerge from the relationship as an upgraded version of yourself. Pain? Don't know her.",
      traits: ["Uses pain as fuel", "Self-improvement focused", "Emerges better than before", "Refuses to let them 'win'"],
      advice: "Your drive is admirable, but make sure you're not just burying feelings under productivity. Glow-ups are great, but so is sitting still and feeling sad sometimes."
    }
  }
};
