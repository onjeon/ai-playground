// What's Your Empathy Level? - Viral personality test for American English users

export const testData = {
  id: "personality-empathy-level",
  title: "What's Your Empathy Level?",
  description: "How deeply do you feel what others feel? Let's explore your emotional attunement!",
  questions: [
    {
      id: 1,
      text: "You see someone crying in public. Your instinct:",
      options: [
        { text: "Immediately tear up myself and want to help", type: "empath" },
        { text: "Feel concerned and check if they need support", type: "high" },
        { text: "Notice it, hope they're okay, give them space", type: "moderate" },
        { text: "Not really my business, continue with my day", type: "low" }
      ]
    },
    {
      id: 2,
      text: "A friend shares that they're going through a hard time. You:",
      options: [
        { text: "Feel their pain so deeply it affects my whole week", type: "empath" },
        { text: "Really listen, validate, and offer support", type: "high" },
        { text: "Listen and offer practical solutions if I can", type: "moderate" },
        { text: "Sympathize but don't dwell on it", type: "low" }
      ]
    },
    {
      id: 3,
      text: "You watch a sad movie scene. Your reaction:",
      options: [
        { text: "Sobbing. Full tears. Need a moment to recover", type: "empath" },
        { text: "Definitely emotional, maybe misty-eyed", type: "high" },
        { text: "I can appreciate the emotion without feeling it deeply", type: "moderate" },
        { text: "It's acting. I don't really get emotional at fiction", type: "low" }
      ]
    },
    {
      id: 4,
      text: "Someone shares good news with you. How do you react?",
      options: [
        { text: "I feel genuinely AS excited as they are!", type: "empath" },
        { text: "Genuinely happy for them and show it", type: "high" },
        { text: "Congratulate them warmly", type: "moderate" },
        { text: "Happy for them but not particularly affected", type: "low" }
      ]
    },
    {
      id: 5,
      text: "You hear about a stranger's tragic story on the news. You:",
      options: [
        { text: "Can't stop thinking about it, might lose sleep", type: "empath" },
        { text: "Feel sad and wish you could help somehow", type: "high" },
        { text: "Feel a moment of sympathy, then move on", type: "moderate" },
        { text: "Acknowledge it's sad but not emotionally affected", type: "low" }
      ]
    },
    {
      id: 6,
      text: "Someone is being unfairly criticized. Your response:",
      options: [
        { text: "Feel personally defensive on their behalf, might intervene", type: "empath" },
        { text: "Feel uncomfortable and want to support them", type: "high" },
        { text: "Notice the unfairness but stay out of it", type: "moderate" },
        { text: "Not really my concern unless I'm close to them", type: "low" }
      ]
    },
    {
      id: 7,
      text: "How easily can you tell how someone is feeling?",
      options: [
        { text: "I sense it immediately, even if they're hiding it", type: "empath" },
        { text: "Pretty good at reading emotional cues", type: "high" },
        { text: "I can tell if it's obvious, but might miss subtle signs", type: "moderate" },
        { text: "Only if they explicitly tell me", type: "low" }
      ]
    },
    {
      id: 8,
      text: "Someone's energy is off but they say they're 'fine'. You:",
      options: [
        { text: "Absorb their mood and feel it in my own body", type: "empath" },
        { text: "Gently probe to see if they want to talk", type: "high" },
        { text: "Accept their answer but keep an eye out", type: "moderate" },
        { text: "Take them at their word and move on", type: "low" }
      ]
    },
    {
      id: 9,
      text: "After spending time with someone who's stressed, you feel:",
      options: [
        { text: "Completely drained, like I absorbed their stress", type: "empath" },
        { text: "A bit affected, need some time to decompress", type: "high" },
        { text: "Mostly fine, maybe a little tired", type: "moderate" },
        { text: "Unchanged, their stress is their stress", type: "low" }
      ]
    },
    {
      id: 10,
      text: "You witness someone achieve a lifelong dream. You:",
      options: [
        { text: "Cry happy tears even if I don't know them", type: "empath" },
        { text: "Feel genuinely moved and happy for them", type: "high" },
        { text: "Think 'good for them!' and feel pleased", type: "moderate" },
        { text: "Note it without much emotional response", type: "low" }
      ]
    }
  ],
  results: {
    empath: {
      type: "The Deep Empath",
      description: "You don't just understand feelings - you FEEL them. Other people's emotions become your emotions. You're basically an emotional sponge, absorbing the vibes of everyone around you. You're incredibly attuned to others, but it can be overwhelming. Crowded places probably drain you.",
      traits: ["Deeply feeling", "Intuitive", "Emotionally absorbent", "Sensitive"],
      advice: "Your empathy is a genuine superpower for connection and healing! But you need to protect your energy. Learn to distinguish your feelings from others'. Set boundaries, practice grounding, and don't forget that you can't pour from an empty cup."
    },
    high: {
      type: "The Compassionate Connector",
      description: "You're the friend everyone wants when things get hard. You genuinely feel for others and show up for them without losing yourself in their experience. Your empathy is strong but healthy - you connect deeply while maintaining your own emotional stability.",
      traits: ["Compassionate", "Supportive", "Emotionally intelligent", "Connected"],
      advice: "Your level of empathy is beautifully balanced! You make people feel seen and heard without sacrificing your own wellbeing. Keep being the compassionate presence you are, and make sure you receive the same care you give."
    },
    moderate: {
      type: "The Practical Supporter",
      description: "You care about others and can sympathize, but you don't get swept up in emotional currents. You're the friend who shows up with solutions rather than just feelings. Your more measured approach means you can help effectively without getting overwhelmed.",
      traits: ["Practical", "Stable", "Solution-oriented", "Caring but bounded"],
      advice: "Your balanced approach serves you well! Sometimes people need practical support more than emotional immersion. Just remember that occasionally, people just want to be heard rather than fixed. Practice active listening."
    },
    low: {
      type: "The Emotionally Independent",
      description: "You're not cold - you're just operating on your own emotional frequency. Other people's feelings don't particularly affect your inner state. You can sympathize intellectually without feeling it in your bones. This gives you stability in emotionally charged situations.",
      traits: ["Independent", "Stable", "Unbothered", "Emotionally self-contained"],
      advice: "Your emotional independence is actually a strength in many situations! You stay calm in chaos. But human connection often requires some emotional vulnerability. Practice active empathy - even if you don't feel it naturally, showing you care matters."
    }
  }
};
