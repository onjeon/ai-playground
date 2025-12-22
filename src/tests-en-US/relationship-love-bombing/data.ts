// Can You Spot Love Bombing? - Viral relationship test for American English users

export const testData = {
  id: "relationship-love-bombing",
  title: "Can You Spot Love Bombing?",
  description: "Intense affection or manipulation tactic? Test your ability to spot the difference!",
  questions: [
    {
      id: 1,
      text: "They say 'I love you' on the third date. Your gut says...",
      options: [
        { text: "RED FLAG - way too fast", type: "aware" },
        { text: "Maybe they just feel things deeply?", type: "naive" },
        { text: "I'd be flattered honestly", type: "vulnerable" },
        { text: "Depends on how genuine it feels", type: "cautious" }
      ]
    },
    {
      id: 2,
      text: "They want to spend EVERY free moment together early on. You think...",
      options: [
        { text: "Obsessive behavior alert", type: "aware" },
        { text: "Aww, they really like me!", type: "naive" },
        { text: "Finally someone who matches my intensity", type: "vulnerable" },
        { text: "Sweet, but I need my space too", type: "cautious" }
      ]
    },
    {
      id: 3,
      text: "They shower you with expensive gifts after just a few dates. Thoughts?",
      options: [
        { text: "Trying to buy my affection - weird", type: "aware" },
        { text: "They're just generous!", type: "naive" },
        { text: "I deserve to be spoiled", type: "vulnerable" },
        { text: "Nice but makes me a little uncomfortable", type: "cautious" }
      ]
    },
    {
      id: 4,
      text: "They call you their 'soulmate' after knowing you two weeks. You feel...",
      options: [
        { text: "Creeped out - they don't even know me", type: "aware" },
        { text: "Special and chosen", type: "naive" },
        { text: "Like I finally found my person", type: "vulnerable" },
        { text: "Flattered but skeptical", type: "cautious" }
      ]
    },
    {
      id: 5,
      text: "They get upset when you want to see friends without them. Your reaction?",
      options: [
        { text: "Major red flag - controlling behavior", type: "aware" },
        { text: "They just love spending time with me", type: "naive" },
        { text: "I should probably include them more", type: "vulnerable" },
        { text: "That's... concerning actually", type: "cautious" }
      ]
    },
    {
      id: 6,
      text: "Every day there's a new grand gesture or proclamation of love. You think...",
      options: [
        { text: "This level of intensity isn't sustainable or healthy", type: "aware" },
        { text: "I'm finally being loved the way I deserve", type: "naive" },
        { text: "No one has ever loved me like this before", type: "vulnerable" },
        { text: "It's a lot, but maybe they're just expressive", type: "cautious" }
      ]
    },
    {
      id: 7,
      text: "They push to make the relationship 'official' very quickly. You...",
      options: [
        { text: "Pump the brakes - why the rush?", type: "aware" },
        { text: "Lock it down! They clearly know what they want", type: "naive" },
        { text: "Feel wanted for the first time in a while", type: "vulnerable" },
        { text: "Want to take more time to get to know them", type: "cautious" }
      ]
    },
    {
      id: 8,
      text: "Their ex was 'crazy' but you're 'not like other people.' How do you take this?",
      options: [
        { text: "Classic manipulation - I'm next on the 'crazy ex' list", type: "aware" },
        { text: "I AM different from their past relationships", type: "naive" },
        { text: "Feels good to be seen as special", type: "vulnerable" },
        { text: "Hmm, what happened with those exes exactly?", type: "cautious" }
      ]
    },
    {
      id: 9,
      text: "They talk about your future together constantly (moving in, marriage, kids) after a month. You...",
      options: [
        { text: "Get uncomfortable - this is way too fast", type: "aware" },
        { text: "Start planning too - we're on the same page!", type: "naive" },
        { text: "Finally someone who wants what I want", type: "vulnerable" },
        { text: "Slow down and see if actions match words", type: "cautious" }
      ]
    },
    {
      id: 10,
      text: "When you pull back slightly, their affection doubles. What do you think?",
      options: [
        { text: "They're love bombing harder to regain control", type: "aware" },
        { text: "They're scared of losing me - so sweet", type: "naive" },
        { text: "Maybe I was wrong to pull back", type: "vulnerable" },
        { text: "The intensity increase is suspicious", type: "cautious" }
      ]
    }
  ],
  results: {
    aware: {
      type: "Love Bomb Detective",
      description: "Your radar is EXCELLENT. You recognize love bombing for what it is: a manipulation tactic disguised as intense affection. You know that real love builds gradually, and you're not fooled by grand gestures that come too fast. Trust your instincts - they're serving you well.",
      traits: ["Strong boundaries", "Recognizes manipulation", "Trusts gut feelings", "Values healthy pacing"],
      advice: "Your awareness protects you, but don't become so guarded that you can't accept genuine affection. Some people ARE just expressive. Look for patterns over time."
    },
    cautious: {
      type: "Healthy Skeptic",
      description: "You're appropriately cautious without being cynical. You notice when things feel 'off' but you also give people the benefit of the doubt. You're learning to trust your gut while staying open to real connection. This balance is actually really healthy.",
      traits: ["Balanced perspective", "Learning to trust instincts", "Asks questions", "Takes things slow"],
      advice: "Keep trusting your gut and asking questions. If something feels too intense too fast, it probably is. Real love doesn't need to rush."
    },
    naive: {
      type: "Rose-Colored Glasses",
      description: "Bestie, we need to talk. You're seeing intensity as love and speed as certainty. When someone comes on extremely strong extremely fast, that's not passion - it's often a warning sign. You deserve real love that builds over time, not a whirlwind that burns out.",
      traits: ["Sees best in people", "Mistakes intensity for love", "Overlooks warning signs", "Wants to believe"],
      advice: "Your open heart is beautiful but please protect it. Real love doesn't need to rush. Anyone who truly cares will respect your pace and prove themselves over TIME, not days."
    },
    vulnerable: {
      type: "Love Bomb Target",
      description: "You might be especially susceptible to love bombing because you're craving the kind of love and attention it offers. Maybe you've felt overlooked before, or you're healing from something. Love bombers specifically target people who are longing to feel special.",
      traits: ["Craves validation", "May have low self-worth", "Attracted to intensity", "Wants to feel chosen"],
      advice: "You deserve real love, not someone's manipulation. Work on loving yourself first. When you know your worth, you won't be dazzled by excessive attention - you'll be suspicious of it."
    }
  }
};
