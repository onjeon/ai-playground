// What Green Flags Do You Look For? - Viral relationship test for American English users

export const testData = {
  id: "relationship-green-flags",
  title: "What Green Flags Do You Look For?",
  description: "Forget the red flags - what makes your heart say 'oh, this one's a keeper'?",
  questions: [
    {
      id: 1,
      text: "They remember a small detail you mentioned weeks ago. Your reaction?",
      options: [
        { text: "Immediately falling a little bit in love", type: "attention" },
        { text: "Nice, but I need to see consistent effort", type: "reliability" },
        { text: "Heart eyes - they actually LISTEN", type: "communication" },
        { text: "Sweet! But are they still like this when stressed?", type: "emotional" }
      ]
    },
    {
      id: 2,
      text: "What makes you think 'okay, this person is different'?",
      options: [
        { text: "They handle conflict calmly instead of exploding", type: "emotional" },
        { text: "They follow through on what they say they'll do", type: "reliability" },
        { text: "They ask genuine questions about my life", type: "attention" },
        { text: "They're open about their feelings without me prying", type: "communication" }
      ]
    },
    {
      id: 3,
      text: "Early dating stage: What would make you feel most secure?",
      options: [
        { text: "They text back consistently, not hot and cold", type: "reliability" },
        { text: "They share their own vulnerabilities first", type: "emotional" },
        { text: "They bring up things I'm interested in", type: "attention" },
        { text: "They clearly state what they're looking for", type: "communication" }
      ]
    },
    {
      id: 4,
      text: "You've had a terrible day. Green flag behavior is...",
      options: [
        { text: "Showing up with my favorite comfort food without asking", type: "attention" },
        { text: "Asking what I need and actually doing it", type: "communication" },
        { text: "Being a calm, stable presence", type: "emotional" },
        { text: "Keeping a promise we made despite my bad mood", type: "reliability" }
      ]
    },
    {
      id: 5,
      text: "Biggest green flag in how they talk about their ex?",
      options: [
        { text: "Takes accountability for their part in the breakup", type: "emotional" },
        { text: "Speaks respectfully, even about rough endings", type: "communication" },
        { text: "Has clearly learned from past relationships", type: "reliability" },
        { text: "Doesn't bring up the ex constantly", type: "attention" }
      ]
    },
    {
      id: 6,
      text: "You disagree on something. What response makes you feel safe?",
      options: [
        { text: "They try to understand my perspective first", type: "communication" },
        { text: "They stay calm and don't escalate", type: "emotional" },
        { text: "They don't hold grudges after we resolve it", type: "reliability" },
        { text: "They remember my side even if they disagree", type: "attention" }
      ]
    },
    {
      id: 7,
      text: "They introduce you to their friends. Green flag vibes?",
      options: [
        { text: "They've clearly talked about me positively before", type: "attention" },
        { text: "They include me in conversations naturally", type: "communication" },
        { text: "Their friends seem emotionally healthy too", type: "emotional" },
        { text: "They told me when it would happen and followed through", type: "reliability" }
      ]
    },
    {
      id: 8,
      text: "Long-term green flag material is someone who...",
      options: [
        { text: "Still chooses to learn and grow", type: "emotional" },
        { text: "Is consistent, not just during the honeymoon phase", type: "reliability" },
        { text: "Still asks about my day after years together", type: "attention" },
        { text: "Can have hard conversations without shutting down", type: "communication" }
      ]
    },
    {
      id: 9,
      text: "They mess up. What makes you think 'okay, I can work with this'?",
      options: [
        { text: "They apologize AND change the behavior", type: "reliability" },
        { text: "They own it without getting defensive", type: "emotional" },
        { text: "They explain their side calmly", type: "communication" },
        { text: "They remember how it affected me in the future", type: "attention" }
      ]
    },
    {
      id: 10,
      text: "The ultimate green flag that makes you all in?",
      options: [
        { text: "I feel completely safe being myself around them", type: "emotional" },
        { text: "I never have to guess where we stand", type: "communication" },
        { text: "I can count on them, period", type: "reliability" },
        { text: "I feel truly seen and known by them", type: "attention" }
      ]
    }
  ],
  results: {
    attention: {
      type: "You Value Being Seen",
      description: "Your love language is attention to detail. You want someone who remembers the little things, notices when something's off, and makes you feel like you're the main character in their story. You've probably been overlooked before, and now you know your worth.",
      traits: ["Values being remembered", "Notices thoughtful gestures", "Wants a partner who's curious about you", "Craves being truly known"],
      advice: "You deserve someone who pays attention. Don't settle for someone who forgets the basics. Your need to be seen isn't 'too much' - it's essential."
    },
    reliability: {
      type: "You Value Consistency",
      description: "Words mean nothing to you without action. You need someone whose behavior matches their promises, who shows up when they say they will, and who's the same person in month 6 as they were in week 1. Stability is sexy to you.",
      traits: ["Actions over words", "Needs follow-through", "Values long-term thinking", "Trusts patterns over promises"],
      advice: "You're right to value consistency - it's the foundation of trust. Just remember that everyone slips sometimes. Look for patterns, not perfection."
    },
    communication: {
      type: "You Value Openness",
      description: "You need someone who can actually TALK. No guessing games, no mixed signals, no 'fine' when they mean 'I'm upset.' You want radical honesty, vulnerable conversations, and someone who can express their feelings like an adult.",
      traits: ["Needs clarity", "Values emotional articulation", "Hates mind games", "Wants deep conversations"],
      advice: "Clear communication is the ultimate green flag. Just make sure you're also creating space for them to be honest, even when it's hard to hear."
    },
    emotional: {
      type: "You Value Emotional Intelligence",
      description: "You're looking for someone who's done the work. Someone who can regulate their emotions, take accountability, and be a calm presence in chaos. You've probably dealt with enough emotionally immature people to know exactly what you DON'T want.",
      traits: ["Needs emotional maturity", "Values self-awareness", "Wants a regulated partner", "Attracted to growth mindset"],
      advice: "Emotional intelligence is rare and valuable. You're smart to prioritize it. Just remember that everyone's a work in progress - including you."
    }
  }
};
