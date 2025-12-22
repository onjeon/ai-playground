// How Sarcastic Are You? - Viral humor test for American English users

export const testData = {
  id: "humor-sarcasm-level",
  title: "How Sarcastic Are You?",
  description: "Oh, ANOTHER quiz? How delightful. Let's measure just how fluent you are in the language of eye rolls and dry wit.",
  questions: [
    {
      id: 1,
      text: "Someone says something obvious. Your response:",
      options: [
        { text: "Nod and agree, keep it moving", type: "low" },
        { text: "Light joke, nothing too cutting", type: "moderate" },
        { text: "Deadpan: 'Wow, never thought of it that way'", type: "high" },
        { text: "Full performance of mock amazement", type: "extreme" }
      ]
    },
    {
      id: 2,
      text: "Your default tone when something goes wrong:",
      options: [
        { text: "Genuinely frustrated or concerned", type: "low" },
        { text: "Little joke to lighten the mood", type: "moderate" },
        { text: "'Oh good, exactly what I wanted'", type: "high" },
        { text: "Full dramatic monologue about how this is definitely fine", type: "extreme" }
      ]
    },
    {
      id: 3,
      text: "How often do people ask 'wait, are you serious?'",
      options: [
        { text: "Rarely - I'm pretty straightforward", type: "low" },
        { text: "Sometimes - but it's usually clear I'm joking", type: "moderate" },
        { text: "Often - they genuinely can't tell", type: "high" },
        { text: "Constantly - my whole personality is ambiguous", type: "extreme" }
      ]
    },
    {
      id: 4,
      text: "Your texts often include:",
      options: [
        { text: "Genuine reactions and straightforward messages", type: "low" },
        { text: "The occasional witty observation", type: "moderate" },
        { text: "Deadpan comments that could go either way", type: "high" },
        { text: "Messages that require a decoder ring", type: "extreme" }
      ]
    },
    {
      id: 5,
      text: "Someone compliments you. You say:",
      options: [
        { text: "'Thank you!' (sincerely)", type: "low" },
        { text: "'Thanks!' with a little deflecting joke", type: "moderate" },
        { text: "'Wow, I know, I'm amazing' (deadpan)", type: "high" },
        { text: "Full ironic acceptance speech", type: "extreme" }
      ]
    },
    {
      id: 6,
      text: "Your sarcasm has:",
      options: [
        { text: "Never really been an issue", type: "low" },
        { text: "Confused someone once or twice", type: "moderate" },
        { text: "Hurt feelings because they thought I was serious", type: "high" },
        { text: "Genuinely ended relationships because people don't get me", type: "extreme" }
      ]
    },
    {
      id: 7,
      text: "When people don't get your sarcasm:",
      options: [
        { text: "I don't really use much sarcasm anyway", type: "low" },
        { text: "I clarify - no big deal", type: "moderate" },
        { text: "Slightly annoyed but I explain", type: "high" },
        { text: "Let them stay confused, it's funnier that way", type: "extreme" }
      ]
    },
    {
      id: 8,
      text: "Reading sarcasm in texts - how good are you?",
      options: [
        { text: "I usually take things at face value", type: "low" },
        { text: "I can usually tell with context", type: "moderate" },
        { text: "I assume everything might be sarcastic", type: "high" },
        { text: "I've lived too long in irony to know what's real", type: "extreme" }
      ]
    },
    {
      id: 9,
      text: "Your workplace/school persona:",
      options: [
        { text: "Pretty much the same as my real personality", type: "low" },
        { text: "Slightly more filtered but still me", type: "moderate" },
        { text: "Significantly toned down - they can't handle me", type: "high" },
        { text: "Completely different person, for their safety", type: "extreme" }
      ]
    },
    {
      id: 10,
      text: "Honestly, is sincerity hard for you?",
      options: [
        { text: "No, I'm genuinely open and sincere", type: "low" },
        { text: "A little, but I can do it when it matters", type: "moderate" },
        { text: "Yes, I deflect with humor a lot", type: "high" },
        { text: "Sincerity feels physically uncomfortable", type: "extreme" }
      ]
    }
  ],
  results: {
    low: {
      type: "Sincere & Straightforward",
      description: "You say what you mean and mean what you say. Sarcasm isn't really your thing - and that's valid! You're refreshingly genuine in a world of irony. People always know where they stand with you, which is honestly its own superpower.",
      traits: ["Genuine", "Clear communicator", "Trustworthy", "What you see is what you get"],
      advice: "Your sincerity is a gift, but a LITTLE sarcasm can be a useful social tool. It's a way to address awkwardness, deflect tension, or just add flavor. Try it out - just make sure your tone matches."
    },
    moderate: {
      type: "Balanced Wit",
      description: "You've got sarcasm skills but you know when to deploy them. You can be witty and cutting when appropriate, but you don't default to irony for everything. You're probably the friend who can read a room and adjust your humor accordingly.",
      traits: ["Adaptable", "Socially aware", "Can code-switch", "Knows their audience"],
      advice: "You've found the sweet spot. Keep reading rooms and adjusting. Your ability to be both sincere AND sarcastic is actually rare - most people get stuck in one mode. Keep that flexibility."
    },
    high: {
      type: "Fluent in Sarcasm",
      description: "Sarcasm is basically your first language at this point. Deadpan delivery, dry wit, the whole arsenal. People often can't tell if you're serious, which is usually the goal. You're funny, but you might also be using humor to avoid sincerity. Just saying.",
      traits: ["Dry humor expert", "Deadpan master", "Probably British at heart", "May use humor as a shield"],
      advice: "Your wit is sharp - but make sure it's not cutting YOU off from connection. Sometimes people need to know you're being real. Practice letting the mask drop occasionally. Vulnerability is funny too, in its own way."
    },
    extreme: {
      type: "Chronically Ironic",
      description: "You've gone full post-ironic. At this point, you're not even sure what your genuine opinions ARE because everything is filtered through seventeen layers of sarcasm. People who don't know you are constantly confused. People who do know you are... also kind of confused.",
      traits: ["Irony poisoned", "Comedian brain", "Sincere? What's that?", "Living performance art"],
      advice: "Your commitment to irony is... impressive? But also maybe concerning. When did you last say something completely sincere without any protective layer of humor? Try it. It feels weird at first but connection requires dropping the act sometimes."
    }
  }
};
