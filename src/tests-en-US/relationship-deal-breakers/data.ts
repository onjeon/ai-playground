// What Are Your Deal Breakers? - Viral relationship test for American English users

export const testData = {
  id: "relationship-deal-breakers",
  title: "What Are Your Deal Breakers?",
  description: "Everyone has their non-negotiables. What's the ONE thing you absolutely can't tolerate?",
  questions: [
    {
      id: 1,
      text: "Which would make you end things immediately?",
      options: [
        { text: "They're rude to service workers", type: "character" },
        { text: "You catch them in a significant lie", type: "trust" },
        { text: "They dismiss your feelings when you're upset", type: "emotional" },
        { text: "They have completely different life goals", type: "compatibility" }
      ]
    },
    {
      id: 2,
      text: "Relationship red flag you notice first:",
      options: [
        { text: "How they treat people they don't 'need' anything from", type: "character" },
        { text: "Inconsistency between words and actions", type: "trust" },
        { text: "Inability to have deep conversations", type: "emotional" },
        { text: "Different values or lifestyle expectations", type: "compatibility" }
      ]
    },
    {
      id: 3,
      text: "What would make past you leave but present you knows better?",
      options: [
        { text: "Small instances of disrespect I used to ignore", type: "character" },
        { text: "Gut feelings I dismissed as paranoia", type: "trust" },
        { text: "Being emotionally neglected", type: "emotional" },
        { text: "Ignoring fundamental incompatibilities", type: "compatibility" }
      ]
    },
    {
      id: 4,
      text: "They do something that bothers you. Deal breaker status?",
      options: [
        { text: "Depends on if it shows their true character", type: "character" },
        { text: "Depends on if they're honest about it", type: "trust" },
        { text: "Depends on if they care about my feelings", type: "emotional" },
        { text: "Depends on if it affects our future together", type: "compatibility" }
      ]
    },
    {
      id: 5,
      text: "Non-negotiable trait in a partner:",
      options: [
        { text: "Kindness and respect for everyone", type: "character" },
        { text: "Complete honesty, even when it's hard", type: "trust" },
        { text: "Emotional intelligence and availability", type: "emotional" },
        { text: "Aligned vision for the future", type: "compatibility" }
      ]
    },
    {
      id: 6,
      text: "What ended your last relationship (or what would)?",
      options: [
        { text: "Realizing who they really were", type: "character" },
        { text: "Broken trust that couldn't be rebuilt", type: "trust" },
        { text: "Feeling emotionally alone in the relationship", type: "emotional" },
        { text: "We wanted different things", type: "compatibility" }
      ]
    },
    {
      id: 7,
      text: "You could forgive most things except...",
      options: [
        { text: "Cruelty or lack of integrity", type: "character" },
        { text: "Betrayal or deception", type: "trust" },
        { text: "Emotional abuse or neglect", type: "emotional" },
        { text: "Refusing to grow or change together", type: "compatibility" }
      ]
    },
    {
      id: 8,
      text: "What's the biggest relationship lesson you've learned?",
      options: [
        { text: "Believe people when they show you who they are", type: "character" },
        { text: "Trust your gut when something feels off", type: "trust" },
        { text: "Never settle for someone who doesn't meet your emotional needs", type: "emotional" },
        { text: "Love isn't enough if you want different things", type: "compatibility" }
      ]
    },
    {
      id: 9,
      text: "Instant ick that would make you walk away:",
      options: [
        { text: "Being mean or arrogant", type: "character" },
        { text: "Catching them in a lie", type: "trust" },
        { text: "Being dismissive of emotions", type: "emotional" },
        { text: "Saying they don't want what I want", type: "compatibility" }
      ]
    },
    {
      id: 10,
      text: "In the end, what matters most in a relationship?",
      options: [
        { text: "Being with a genuinely good person", type: "character" },
        { text: "Complete trust and transparency", type: "trust" },
        { text: "Emotional connection and support", type: "emotional" },
        { text: "Being on the same page about life", type: "compatibility" }
      ]
    }
  ],
  results: {
    character: {
      type: "Character is Everything",
      description: "You can forgive a lot, but you can't forgive bad character. How someone treats others - especially when they don't have to be nice - tells you everything. Kindness, integrity, and basic human decency are your non-negotiables. No amount of chemistry can make up for cruelty.",
      traits: ["Values integrity", "Notices how they treat others", "Character > attraction", "Believes actions reveal truth"],
      advice: "You're right to prioritize character - it's the foundation of everything. Just remember that everyone has flaws. Look for good hearts, not perfect people."
    },
    trust: {
      type: "Trust or Nothing",
      description: "Without trust, you have nothing. You've probably been burned before and you know how devastating broken trust can be. Honesty is your love language, and lies - even small ones - erode everything. You'd rather hear hard truths than comfortable lies.",
      traits: ["Needs honesty above all", "Has strong intuition", "Values transparency", "Can't rebuild broken trust"],
      advice: "Trust is essential, but so is allowing space for human imperfection. Not every inconsistency is betrayal. Communicate your needs and give people a chance to meet them."
    },
    emotional: {
      type: "Emotional Connection Required",
      description: "You need emotional depth and presence. Surface-level relationships don't work for you. Your deal breaker is a partner who can't or won't meet you emotionally - who dismisses feelings, avoids vulnerability, or leaves you feeling alone in the relationship.",
      traits: ["Needs emotional intimacy", "Values vulnerability", "Can't tolerate emotional neglect", "Seeks deep connection"],
      advice: "Emotional connection is crucial, but remember that people express emotions differently. Give partners space to learn your emotional language, and try to learn theirs."
    },
    compatibility: {
      type: "Future-Focused",
      description: "You know that love alone isn't enough - you need to be going the same direction. Your deal breaker is fundamental incompatibility: different life goals, values, or visions for the future. You're practical about love, and that's actually smart.",
      traits: ["Pragmatic about love", "Thinks long-term", "Values alignment", "Won't compromise on big things"],
      advice: "Looking ahead is wise, but don't forget to enjoy the present. Some things can be negotiated, and people do grow and change. Stay open while knowing your true non-negotiables."
    }
  }
};
