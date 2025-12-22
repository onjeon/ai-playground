// What Supernatural Power Would You Have? - Viral quirky test for American English users

export const testData = {
  id: "quirky-supernatural-power",
  title: "What Supernatural Power Would You Have?",
  description: "If the universe granted you one power, what would it be? (And what does that say about you?)",
  questions: [
    {
      id: 1,
      text: "What frustrates you most about being human?",
      options: [
        { text: "Not knowing what others really think", type: "telepathy" },
        { text: "Time moves too fast and I can't control it", type: "time" },
        { text: "Physical limitations and vulnerability", type: "invincibility" },
        { text: "Not being able to help people enough", type: "healing" }
      ]
    },
    {
      id: 2,
      text: "If you had a superpower, you'd use it to:",
      options: [
        { text: "Understand people better and communicate deeply", type: "telepathy" },
        { text: "Relive moments or see the future", type: "time" },
        { text: "Protect myself and those I love from harm", type: "invincibility" },
        { text: "Help people who are suffering", type: "healing" }
      ]
    },
    {
      id: 3,
      text: "Your biggest fear in relationships:",
      options: [
        { text: "Not really knowing what someone thinks of me", type: "telepathy" },
        { text: "Running out of time with people I love", type: "time" },
        { text: "Not being able to protect people I care about", type: "invincibility" },
        { text: "Not being able to help when they're hurting", type: "healing" }
      ]
    },
    {
      id: 4,
      text: "The power fantasy you've had most often:",
      options: [
        { text: "Reading minds and knowing the truth", type: "telepathy" },
        { text: "Pausing, reversing, or traveling through time", type: "time" },
        { text: "Being completely unstoppable", type: "invincibility" },
        { text: "Magically fixing what's wrong", type: "healing" }
      ]
    },
    {
      id: 5,
      text: "What would make your life easiest right now?",
      options: [
        { text: "Knowing what everyone actually means", type: "telepathy" },
        { text: "More time or the ability to redo things", type: "time" },
        { text: "Not having to worry about bad things happening", type: "invincibility" },
        { text: "Being able to fix problems for people I love", type: "healing" }
      ]
    },
    {
      id: 6,
      text: "The hero archetype you relate to most:",
      options: [
        { text: "The psychic who sees truth others miss", type: "telepathy" },
        { text: "The time traveler who tries to get it right", type: "time" },
        { text: "The invulnerable protector who shields others", type: "invincibility" },
        { text: "The healer who cures what others can't", type: "healing" }
      ]
    },
    {
      id: 7,
      text: "What would you sacrifice for your power?",
      options: [
        { text: "Privacy - knowing minds means being known too", type: "telepathy" },
        { text: "Living in the present - always fixing the past or worrying about future", type: "time" },
        { text: "Emotional vulnerability - strength has a cost", type: "invincibility" },
        { text: "Personal boundaries - always being needed", type: "healing" }
      ]
    },
    {
      id: 8,
      text: "Your power's downside you could live with:",
      options: [
        { text: "Hearing things I don't want to know", type: "telepathy" },
        { text: "The responsibility of changing things", type: "time" },
        { text: "Never feeling vulnerable or truly challenged", type: "invincibility" },
        { text: "Feeling everyone's pain as I heal it", type: "healing" }
      ]
    },
    {
      id: 9,
      text: "What draws you to that power most:",
      options: [
        { text: "Understanding and connection", type: "telepathy" },
        { text: "Control and second chances", type: "time" },
        { text: "Safety and strength", type: "invincibility" },
        { text: "Helping and nurturing", type: "healing" }
      ]
    },
    {
      id: 10,
      text: "Honestly, if you had this power, you'd mostly use it for:",
      options: [
        { text: "Personal insight and relationship clarity", type: "telepathy" },
        { text: "Fixing my own mistakes and optimizing life", type: "time" },
        { text: "Feeling safe and protecting loved ones", type: "invincibility" },
        { text: "Helping anyone who needs it", type: "healing" }
      ]
    }
  ],
  results: {
    telepathy: {
      type: "Telepathy (Mind Reading)",
      description: "You crave UNDERSTANDING. Your power would be reading minds - knowing what people really think, cutting through lies and confusion to truth. This says you value connection and honesty deeply, but might not always trust that you're getting the full picture from people.",
      traits: ["Truth-seeking", "Connection-craving", "Perceptive", "Sometimes mistrusting"],
      advice: "Your desire for telepathy suggests you might struggle with uncertainty in relationships. Practice trusting people's words while also trusting your own intuition. You don't need to read minds - you're probably more perceptive than you think."
    },
    time: {
      type: "Time Manipulation",
      description: "You crave CONTROL. Your power would be controlling time - pausing, rewinding, traveling. This says you might dwell on past decisions, worry about the future, or wish you had more time. You're probably a bit of a perfectionist who wants to get things 'right.'",
      traits: ["Control-seeking", "Perfectionist", "Regret-prone", "Future-focused"],
      advice: "Your desire for time control suggests you might struggle with accepting things as they are. Practice presence - the moment you're in is the only one that's real. Mistakes are learning, not failures to be erased. Time moves forward for everyone."
    },
    invincibility: {
      type: "Invincibility/Super Strength",
      description: "You crave SAFETY. Your power would be being unstoppable - invulnerable, super strong, unable to be hurt. This says you might feel vulnerable or have experienced feeling powerless. You want to protect yourself and those you love from harm.",
      traits: ["Protection-oriented", "Safety-seeking", "Potentially anxious", "Guardian instinct"],
      advice: "Your desire for invincibility suggests you might carry anxiety about vulnerability. Strength isn't about being unhurtable - it's about being able to handle being hurt. Practice building resilience rather than avoiding all risk."
    },
    healing: {
      type: "Healing Powers",
      description: "You crave to HELP. Your power would be healing - taking away pain, curing illness, fixing what's broken. This says you're deeply empathetic and probably take on others' pain as your own. You feel the world's suffering and want to do something about it.",
      traits: ["Empathetic", "Nurturing", "Pain-absorbing", "Helper"],
      advice: "Your desire to heal suggests you might neglect your own needs while caring for others. You can't heal everyone and that's not your fault. Practice accepting that some pain isn't yours to fix. Heal yourself too."
    }
  }
};
