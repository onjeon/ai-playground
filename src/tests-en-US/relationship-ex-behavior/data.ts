// How Do You Act Around Your Ex? - Viral relationship test for American English users

export const testData = {
  id: "relationship-ex-behavior",
  title: "How Do You Act Around Your Ex?",
  description: "Run into your ex at a party? Find out what YOUR behavior says about you!",
  questions: [
    {
      id: 1,
      text: "You see your ex at a party. First move?",
      options: [
        { text: "Pretend I didn't see them and look amazing", type: "unbothered" },
        { text: "Go say hi like a mature adult", type: "friendly" },
        { text: "Immediately leave or hide", type: "avoider" },
        { text: "Make sure they see me with someone attractive", type: "petty" }
      ]
    },
    {
      id: 2,
      text: "They text you out of nowhere. You...",
      options: [
        { text: "Respond when I feel like it, if at all", type: "unbothered" },
        { text: "Reply normally - we can be civil", type: "friendly" },
        { text: "Panic and screenshot for my group chat", type: "avoider" },
        { text: "Leave them on read for strategic hours", type: "petty" }
      ]
    },
    {
      id: 3,
      text: "Your ex started dating someone new. Your honest reaction?",
      options: [
        { text: "Good for them, doesn't affect me", type: "unbothered" },
        { text: "Happy they found someone", type: "friendly" },
        { text: "Hurts more than I want to admit", type: "avoider" },
        { text: "Immediately compare myself to the new person", type: "petty" }
      ]
    },
    {
      id: 4,
      text: "They want to get coffee and 'catch up.' You...",
      options: [
        { text: "Decline - I don't need that in my life", type: "unbothered" },
        { text: "Sure, why not? We can be friends", type: "friendly" },
        { text: "Make up an excuse - I'm not ready", type: "avoider" },
        { text: "Go looking incredible and act mysterious", type: "petty" }
      ]
    },
    {
      id: 5,
      text: "You're in a new relationship. How do you feel about your ex knowing?",
      options: [
        { text: "Don't care if they know or don't", type: "unbothered" },
        { text: "Would tell them myself if it came up", type: "friendly" },
        { text: "Hope they never find out somehow", type: "avoider" },
        { text: "Definitely want them to see I'm doing great", type: "petty" }
      ]
    },
    {
      id: 6,
      text: "Their name comes up in conversation. You...",
      options: [
        { text: "Talk about them neutrally, just another person", type: "unbothered" },
        { text: "Share good memories and move on", type: "friendly" },
        { text: "Change the subject quickly", type: "avoider" },
        { text: "Drop subtle shade disguised as 'concern'", type: "petty" }
      ]
    },
    {
      id: 7,
      text: "Social media policy with your ex:",
      options: [
        { text: "Still follow but rarely interact", type: "unbothered" },
        { text: "Follow and occasionally like their posts", type: "friendly" },
        { text: "Blocked or muted immediately", type: "avoider" },
        { text: "Keep tabs on them without interacting", type: "petty" }
      ]
    },
    {
      id: 8,
      text: "You have mutual friends. How do you handle group events?",
      options: [
        { text: "Go and act normal - they don't own social events", type: "unbothered" },
        { text: "Go and make sure we're both comfortable", type: "friendly" },
        { text: "Skip it if I know they'll be there", type: "avoider" },
        { text: "Go and be the best version of myself", type: "petty" }
      ]
    },
    {
      id: 9,
      text: "Your ex reaches out saying they miss you. Response?",
      options: [
        { text: "Politely acknowledge and move on", type: "unbothered" },
        { text: "Have an honest conversation about it", type: "friendly" },
        { text: "Don't respond - too complicated", type: "avoider" },
        { text: "'That's nice' and leave it at that", type: "petty" }
      ]
    },
    {
      id: 10,
      text: "Real talk: How do you actually feel about your ex right now?",
      options: [
        { text: "Neutral - they're just part of my past", type: "unbothered" },
        { text: "Warmly - we had good times", type: "friendly" },
        { text: "Uncomfortable - I'd rather not think about it", type: "avoider" },
        { text: "Want them to see what they lost", type: "petty" }
      ]
    }
  ],
  results: {
    unbothered: {
      type: "The Moved On One",
      description: "You're genuinely over it. Your ex is just someone from your past - no strong feelings either way. You don't need to prove anything, avoid anything, or perform anything. You've processed the relationship and moved on like a healthy, emotionally evolved human being.",
      traits: ["Truly indifferent", "Emotionally processed", "Secure in self", "No games needed"],
      advice: "You've done the healing work and it shows. Keep this energy. Not everyone gets to this place, and you should be proud of yourself."
    },
    friendly: {
      type: "The Friendly Ex",
      description: "You believe exes can be friends, and you actually mean it. You've processed the romantic feelings and genuinely wish them well. You can share space, have conversations, and even be happy for their new relationships. This is mature behavior (as long as it's real).",
      traits: ["Genuinely wishes them well", "Values the history", "Comfortable with contact", "No hidden agenda"],
      advice: "Being friends with an ex is possible but rare. Make sure you're actually friends and not just keeping a door open. And respect any new partner's boundaries about this friendship."
    },
    avoider: {
      type: "The 'I'm Fine' One",
      description: "You're not over it as much as you'd like to be. Seeing them, talking about them, or thinking about them still triggers something. Avoidance is your coping mechanism, and honestly? That's okay for now. Healing takes time.",
      traits: ["Still processing", "Avoids confrontation", "Needs more time", "Protecting own peace"],
      advice: "Avoidance is sometimes necessary, but it shouldn't be forever. At some point, you'll need to process these feelings rather than just dodge them. Take your time, but don't stay stuck."
    },
    petty: {
      type: "The 'Look What You Lost' One",
      description: "Let's be real: you still want your ex to see you thriving. Every glow-up is partially for their viewing. You're not fully over it, and a part of you is still performing for an audience of one. The best revenge is living well - but maybe don't make it a revenge?",
      traits: ["Still emotionally invested", "Performative behavior", "Comparison mode", "Wants to 'win' the breakup"],
      advice: "The energy you're spending on making them see what they lost? Put that into actually moving on. When you're truly over someone, you don't need them to witness your growth. Do it for you."
    }
  }
};
