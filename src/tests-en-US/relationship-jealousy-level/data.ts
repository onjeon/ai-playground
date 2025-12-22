// What's Your Jealousy Level? - Viral relationship test for American English users

export const testData = {
  id: "relationship-jealousy-level",
  title: "What's Your Jealousy Level?",
  description: "A little jealousy is normal... but how much is too much? Find out where you land!",
  questions: [
    {
      id: 1,
      text: "Your partner likes their ex's photo. Your immediate thought?",
      options: [
        { text: "I'm checking the post history IMMEDIATELY", type: "high" },
        { text: "Hmm, that's a little weird but probably nothing", type: "moderate" },
        { text: "They're allowed to have a past", type: "low" },
        { text: "Already drafting the breakup text", type: "extreme" }
      ]
    },
    {
      id: 2,
      text: "They have a close friend of the gender they're attracted to. How do you feel?",
      options: [
        { text: "Totally fine - I have friends too", type: "low" },
        { text: "Fine, as long as I've met them", type: "moderate" },
        { text: "Suspicious. What's the REAL relationship there?", type: "high" },
        { text: "That's not going to work for me", type: "extreme" }
      ]
    },
    {
      id: 3,
      text: "You see an attractive person flirting with your partner. You...",
      options: [
        { text: "Trust my partner to handle it", type: "low" },
        { text: "Watch from afar with interest", type: "moderate" },
        { text: "Walk over and stake my claim", type: "high" },
        { text: "Lose my entire mind about it later", type: "extreme" }
      ]
    },
    {
      id: 4,
      text: "How often do you check your partner's social media activity?",
      options: [
        { text: "Rarely, I have my own life", type: "low" },
        { text: "Occasionally, just casually scrolling", type: "moderate" },
        { text: "Regularly. I like to stay informed", type: "high" },
        { text: "I know their activity better than my own", type: "extreme" }
      ]
    },
    {
      id: 5,
      text: "They get a text and flip their phone over. Your gut says...",
      options: [
        { text: "Probably just a random notification", type: "low" },
        { text: "Hmm, that was a quick flip", type: "moderate" },
        { text: "What are they hiding?!", type: "high" },
        { text: "This is the beginning of the end", type: "extreme" }
      ]
    },
    {
      id: 6,
      text: "A coworker keeps commenting on how 'lucky' your partner is. You...",
      options: [
        { text: "Agree, they ARE lucky", type: "low" },
        { text: "Notice it but don't overthink it", type: "moderate" },
        { text: "Subtly mark my territory", type: "high" },
        { text: "Research this coworker extensively", type: "extreme" }
      ]
    },
    {
      id: 7,
      text: "Your partner mentions someone was flirting with them. Your reaction?",
      options: [
        { text: "Glad they told me, moving on", type: "low" },
        { text: "Curious about the details", type: "moderate" },
        { text: "Need to know everything about this person", type: "high" },
        { text: "Why would they even tell me this?!", type: "extreme" }
      ]
    },
    {
      id: 8,
      text: "They want a solo night out with friends. You feel...",
      options: [
        { text: "Happy they have a social life", type: "low" },
        { text: "Fine, but I want the check-in texts", type: "moderate" },
        { text: "Anxious the whole night", type: "high" },
        { text: "That's suspicious. Who goes out without their partner?", type: "extreme" }
      ]
    },
    {
      id: 9,
      text: "Be honest: Have you ever snooped through a partner's phone?",
      options: [
        { text: "Never - that's a boundary I won't cross", type: "low" },
        { text: "Thought about it but didn't", type: "moderate" },
        { text: "Once or twice, just to ease my mind", type: "high" },
        { text: "I know their passwords for a reason", type: "extreme" }
      ]
    },
    {
      id: 10,
      text: "Your partner has celebrity crushes they're very vocal about. You...",
      options: [
        { text: "Joke about it with them - it's harmless", type: "low" },
        { text: "Slightly annoyed but whatever", type: "moderate" },
        { text: "Compare myself to the celebrity constantly", type: "high" },
        { text: "Take it as a personal attack on my appearance", type: "extreme" }
      ]
    }
  ],
  results: {
    low: {
      type: "Secure & Unbothered",
      description: "You're the 'I trust my partner' meme in human form. You don't sweat the small stuff, you have confidence in your relationship, and you understand that jealousy says more about you than them. Either you're extremely secure, or you simply don't care that much.",
      traits: ["Confident in relationship", "Trusts partner fully", "Has own life and interests", "Rarely overthinks"],
      advice: "Your trust is admirable! Just make sure your chill vibes don't cross into disengagement. Sometimes a little concern shows you care."
    },
    moderate: {
      type: "Reasonably Aware",
      description: "You experience normal, healthy levels of jealousy. You're not spiraling, but you're also not completely oblivious. You notice things, you might feel a twinge of something, and then you rationally assess. This is... actually mature?",
      traits: ["Normal jealousy levels", "Self-aware about insecurities", "Communicates concerns", "Doesn't act on every feeling"],
      advice: "You're in a healthy middle ground. Keep communicating with your partner when something bothers you instead of letting it fester."
    },
    high: {
      type: "The Vigilant Partner",
      description: "Let's just say... you're observant. You notice things others might miss, you have a mental file on potential threats, and you've definitely done some light investigation in your time. Your jealousy stems from caring deeply, but it might be doing more harm than good.",
      traits: ["Hyperaware of 'threats'", "Struggles with trust", "Comparison is your sport", "Needs constant reassurance"],
      advice: "Your jealousy is trying to protect you from pain, but it's also creating it. Work on the root causes - usually past hurt or insecurity. Your partner isn't your ex."
    },
    extreme: {
      type: "Defcon Level: Obsessed",
      description: "Bestie, we need to talk. Your jealousy has crossed into territory that's not healthy for you OR your partner. You're probably exhausted from all the mental energy you spend monitoring, comparing, and worrying. This isn't love - it's anxiety wearing a relationship costume.",
      traits: ["Constant surveillance mode", "Sees threats everywhere", "Controlling tendencies", "Relationships feel exhausting"],
      advice: "This level of jealousy often comes from deep wounds. Consider talking to a therapist about attachment and past trauma. You deserve peace, and so does your partner."
    }
  }
};
