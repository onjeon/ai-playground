// How Do You Fight in Relationships? - Viral relationship test for American English users

export const testData = {
  id: "relationship-fight-style",
  title: "How Do You Fight in Relationships?",
  description: "Conflict is inevitable. Your fighting style says everything about you. What's yours?",
  questions: [
    {
      id: 1,
      text: "Your partner just said something that hurt you. First instinct?",
      options: [
        { text: "Immediately call them out on it", type: "confronter" },
        { text: "Go quiet and process it internally", type: "avoider" },
        { text: "Make a sarcastic comment to deflect", type: "deflector" },
        { text: "Calmly explain how it made you feel", type: "communicator" }
      ]
    },
    {
      id: 2,
      text: "You're in a heated argument. What's your volume level?",
      options: [
        { text: "LOUD. They need to hear me!", type: "confronter" },
        { text: "Silent treatment activated", type: "avoider" },
        { text: "Deadly calm with cutting remarks", type: "deflector" },
        { text: "Firm but controlled", type: "communicator" }
      ]
    },
    {
      id: 3,
      text: "Your partner brings up something you did wrong. Your response?",
      options: [
        { text: "Get defensive and bring up their mistakes too", type: "confronter" },
        { text: "Shut down and say 'whatever you want'", type: "avoider" },
        { text: "Make a joke to lighten the mood", type: "deflector" },
        { text: "Listen first, respond second", type: "communicator" }
      ]
    },
    {
      id: 4,
      text: "After a fight, you need...",
      options: [
        { text: "To talk it out completely before moving on", type: "confronter" },
        { text: "Space. Don't talk to me for a while", type: "avoider" },
        { text: "To pretend it never happened honestly", type: "deflector" },
        { text: "A resolution that works for both of us", type: "communicator" }
      ]
    },
    {
      id: 5,
      text: "Your partner is upset but won't tell you why. You...",
      options: [
        { text: "Push until they tell me what's wrong", type: "confronter" },
        { text: "Give them space - they'll talk when ready", type: "avoider" },
        { text: "Make light conversation to break the tension", type: "deflector" },
        { text: "Let them know I'm here when they're ready", type: "communicator" }
      ]
    },
    {
      id: 6,
      text: "Be honest: Do you bring up old arguments?",
      options: [
        { text: "Sometimes, if they're relevant to the current issue", type: "confronter" },
        { text: "No, I just bottle it up until I explode", type: "avoider" },
        { text: "Only jokingly... kind of", type: "deflector" },
        { text: "I try not to - each issue deserves its own space", type: "communicator" }
      ]
    },
    {
      id: 7,
      text: "Your partner apologizes. Do you accept it?",
      options: [
        { text: "Depends on if I'm still heated", type: "confronter" },
        { text: "Say 'it's fine' even when it isn't", type: "avoider" },
        { text: "Make a snarky comment but then accept", type: "deflector" },
        { text: "Accept and also acknowledge my part", type: "communicator" }
      ]
    },
    {
      id: 8,
      text: "They text during an argument: 'Can we talk later?' You...",
      options: [
        { text: "NO. We're finishing this NOW", type: "confronter" },
        { text: "Relief. I needed space anyway", type: "avoider" },
        { text: "Send a meme and change the subject", type: "deflector" },
        { text: "Agree but set a specific time to continue", type: "communicator" }
      ]
    },
    {
      id: 9,
      text: "Post-fight: What does 'making up' look like for you?",
      options: [
        { text: "Deep conversation about what went wrong", type: "confronter" },
        { text: "Just act normal and move on", type: "avoider" },
        { text: "Physical affection, no words needed", type: "deflector" },
        { text: "Acknowledgment of feelings + quality time", type: "communicator" }
      ]
    },
    {
      id: 10,
      text: "Biggest fight issue you need to work on?",
      options: [
        { text: "Calming down before I respond", type: "confronter" },
        { text: "Actually expressing what's wrong", type: "avoider" },
        { text: "Taking things more seriously", type: "deflector" },
        { text: "Honestly, I think I handle it well", type: "communicator" }
      ]
    }
  ],
  results: {
    confronter: {
      type: "The Hot Reactor",
      description: "You fight with PASSION. When something's wrong, you need to address it immediately - waiting feels impossible. You're direct, sometimes too direct, and you've probably said things in the heat of the moment that you regret. Your fire comes from caring deeply.",
      traits: ["Addresses issues immediately", "High emotional intensity", "Struggles to cool down", "Can be overwhelming"],
      advice: "Your passion isn't the problem - your timing might be. Try the 24-hour rule before addressing heated topics. A cooler head makes for better conversations."
    },
    avoider: {
      type: "The Conflict Dodger",
      description: "Fighting? In THIS economy? You'd rather bottle it up, shut down, or pretend everything's fine than have an actual confrontation. You hate tension and will do anything to make it stop - even if that means not actually resolving anything.",
      traits: ["Shuts down under pressure", "Prefers peace over resolution", "Bottles emotions", "May passive-aggressively express frustration"],
      advice: "Avoiding conflict doesn't make it go away - it just delays the explosion. Practice expressing small frustrations before they become big ones. Your voice matters."
    },
    deflector: {
      type: "The Humor Shield",
      description: "You use jokes, sarcasm, and subject changes like weapons of mass deflection. Serious conversations make you uncomfortable, so you keep things light even when they shouldn't be. You're fun until real talk is needed, then you disappear behind humor.",
      traits: ["Uses humor as defense", "Uncomfortable with vulnerability", "Minimizes issues", "Can seem dismissive"],
      advice: "Humor is great, but not everything needs to be a bit. Some conversations require you to be fully present. Practice sitting in discomfort - that's where growth happens."
    },
    communicator: {
      type: "The Healthy Fighter",
      description: "Look at you, emotionally regulating like a functioning adult! You approach conflict as a problem to solve together, not a battle to win. You listen before responding, own your stuff, and genuinely want resolution. Therapy really worked for you, huh?",
      traits: ["Stays calm under pressure", "Focuses on resolution", "Validates partner's feelings", "Takes accountability"],
      advice: "You're doing great, but make sure you're not so focused on 'being healthy' that you suppress your real emotions. It's okay to be messy sometimes too."
    }
  }
};
