// Would You Ghost Someone? - Fun viral test

export const testData = {
  id: "fun-ghosting-level",
  title: "Would You Ghost Someone?",
  description: "Be honest... are you a reliable responder or do messages go to die in your inbox? Let's find out your ghosting tendencies.",
  questions: [
    {
      id: 1,
      text: "Someone you're not that interested in asks you out. You:",
      options: [
        { text: "Politely decline with a clear 'no thank you'", type: "honest" },
        { text: "Make up an excuse but respond kindly", type: "avoidant" },
        { text: "Say 'maybe!' and then never follow up", type: "soft-ghost" },
        { text: "Just... don't respond. They'll get the message", type: "ghost" }
      ]
    },
    {
      id: 2,
      text: "A friend you've grown apart from keeps texting. You:",
      options: [
        { text: "Respond honestly about where the friendship is", type: "honest" },
        { text: "Reply occasionally, shorter each time", type: "avoidant" },
        { text: "Read the messages but rarely respond", type: "soft-ghost" },
        { text: "Let the conversation die a natural death", type: "ghost" }
      ]
    },
    {
      id: 3,
      text: "You see a message you don't want to deal with. You:",
      options: [
        { text: "Respond anyway - putting it off makes it worse", type: "honest" },
        { text: "Wait a 'reasonable' amount of time then respond", type: "avoidant" },
        { text: "Open it, mark as unread, forget about it", type: "soft-ghost" },
        { text: "It simply doesn't exist if I don't open it", type: "ghost" }
      ]
    },
    {
      id: 4,
      text: "Someone you went on one date with texts the next day. You:",
      options: [
        { text: "Respond based on how I genuinely felt about the date", type: "honest" },
        { text: "Respond politely regardless, assess from there", type: "avoidant" },
        { text: "Respond if interested, ignore if not", type: "soft-ghost" },
        { text: "One date doesn't mean I owe them responses", type: "ghost" }
      ]
    },
    {
      id: 5,
      text: "How do you feel about the concept of ghosting?",
      options: [
        { text: "It's cruel - people deserve closure", type: "honest" },
        { text: "Understandable sometimes but not my go-to", type: "avoidant" },
        { text: "Easier than confrontation, honestly", type: "soft-ghost" },
        { text: "Sometimes it's just cleaner for everyone", type: "ghost" }
      ]
    },
    {
      id: 6,
      text: "Your 'reply later' pile typically:",
      options: [
        { text: "Gets handled within 24 hours", type: "honest" },
        { text: "Eventually gets addressed, maybe a few days", type: "avoidant" },
        { text: "Becomes a 'reply never' pile over time", type: "soft-ghost" },
        { text: "Is basically a digital graveyard", type: "ghost" }
      ]
    },
    {
      id: 7,
      text: "Someone calls you out for not responding. You:",
      options: [
        { text: "Apologize genuinely and explain what happened", type: "honest" },
        { text: "Make up an excuse but feel guilty", type: "avoidant" },
        { text: "Feel attacked - messaging isn't mandatory", type: "soft-ghost" },
        { text: "Ghost harder. The audacity of this follow-up", type: "ghost" }
      ]
    },
    {
      id: 8,
      text: "You made plans with someone but now don't want to go. You:",
      options: [
        { text: "Tell them honestly, suggest rescheduling if genuine", type: "honest" },
        { text: "Create a reasonable excuse to cancel", type: "avoidant" },
        { text: "Keep saying 'something came up' until they stop asking", type: "soft-ghost" },
        { text: "Just... not show up. They'll figure it out", type: "ghost" }
      ]
    },
    {
      id: 9,
      text: "An old acquaintance reaches out wanting to reconnect. You:",
      options: [
        { text: "Respond warmly if I want to, decline kindly if not", type: "honest" },
        { text: "Respond once, then let it fade if uninterested", type: "avoidant" },
        { text: "Like the message but don't respond", type: "soft-ghost" },
        { text: "Ignore. Past is past for a reason", type: "ghost" }
      ]
    },
    {
      id: 10,
      text: "Be honest: how many unread messages do you have right now?",
      options: [
        { text: "Less than 10 - I stay on top of things", type: "honest" },
        { text: "10-30 - some I'm avoiding but I'll get to them", type: "avoidant" },
        { text: "30-100 - it's gotten out of control", type: "soft-ghost" },
        { text: "Lost count. Inbox is a black hole", type: "ghost" }
      ]
    }
  ],
  results: {
    honest: {
      type: "The Honest Communicator",
      description: "You're the rare person who just... says things directly. You respond, you communicate, you don't leave people hanging. Even when it's uncomfortable, you'd rather have an honest conversation than disappear. People can rely on you for clarity. You're emotionally mature and probably well-liked.",
      traits: ["Direct", "Reliable", "Mature", "Respectful"],
      advice: "Your honesty is a gift! Just remember: you don't owe everyone a response. Spam, weird strangers, and persistent people you've already declined can be safely ignored. Being honest doesn't mean being available to everyone."
    },
    avoidant: {
      type: "The Polite Avoider",
      description: "You're not a ghoster, but you're not exactly direct either. You'll respond eventually, make excuses when needed, and let things fade naturally rather than having uncomfortable conversations. You're trying to be nice, even if it sometimes just delays the inevitable.",
      traits: ["Polite", "Avoidant", "Well-meaning", "Indirect"],
      advice: "Your intentions are good, but sometimes a clear 'no' is kinder than a slow fade. People can handle direct honesty better than they can handle uncertainty. Try being a little more direct - it's actually easier for everyone."
    },
    "soft-ghost": {
      type: "The Soft Ghoster",
      description: "You don't fully ghost - you just... fade. Read receipts on, response never. 'Maybe!' means no. You're present enough to not feel guilty, absent enough to avoid commitment. It's ghosting with plausible deniability. The grey zone is your home.",
      traits: ["Passive", "Non-committal", "Evasive", "Guilt-adjacent"],
      advice: "The soft ghost is still a ghost, just slower. Consider: is fading better than a clear message? Usually not. Rip the bandaid off. A quick 'not interested' is kinder than weeks of diminishing responses."
    },
    ghost: {
      type: "The Professional Ghoster",
      description: "You've mastered the ancient art of disappearing. Messages don't get responded to, connections fade without explanation, and you're at peace with it. Some might call it rude; you call it setting boundaries without the confrontation. Your read receipts are OFF.",
      traits: ["Non-responsive", "Avoidant", "Unapologetic", "Mysterious"],
      advice: "Look, sometimes ghosting is valid. But for people who deserve closure - friends, dates, anyone you made actual plans with - a simple message goes a long way. Being direct is a muscle; maybe exercise it occasionally."
    }
  }
};
