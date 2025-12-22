// How Do You Pursue Promotions? - Viral career test for American English users

export const testData = {
  id: "career-promotion-style",
  title: "How Do You Pursue Promotions?",
  description: "Climbing the corporate ladder or quietly hoping someone notices? Let's see your promotion strategy!",
  questions: [
    {
      id: 1,
      text: "Your approach to getting promoted:",
      options: [
        { text: "Clear goals, regular conversations with my boss, advocating for myself", type: "active" },
        { text: "Do excellent work and trust the process", type: "worker" },
        { text: "Strategic visibility and relationship building", type: "political" },
        { text: "Wait for someone to notice my brilliance", type: "passive" }
      ]
    },
    {
      id: 2,
      text: "You want a promotion. Who knows about it?",
      options: [
        { text: "My boss, their boss, and probably HR", type: "active" },
        { text: "Maybe my boss during our occasional chats", type: "worker" },
        { text: "The right people at the right time", type: "political" },
        { text: "Just me and my journal", type: "passive" }
      ]
    },
    {
      id: 3,
      text: "A promotion opportunity opens up. Your move:",
      options: [
        { text: "Immediately express interest and make my case", type: "active" },
        { text: "Apply and let my work speak for itself", type: "worker" },
        { text: "Line up supporters before I even apply", type: "political" },
        { text: "Hope they consider me without me saying anything", type: "passive" }
      ]
    },
    {
      id: 4,
      text: "Your relationship with senior leadership:",
      options: [
        { text: "I actively cultivate it - they know who I am", type: "active" },
        { text: "Cordial when we interact, but I focus on my work", type: "worker" },
        { text: "Strategic - I'm visible where it matters", type: "political" },
        { text: "They might not know my name honestly", type: "passive" }
      ]
    },
    {
      id: 5,
      text: "Someone else gets the promotion you wanted. Your reaction:",
      options: [
        { text: "Ask for feedback and a clear path to the next one", type: "active" },
        { text: "Disappointed but I'll keep doing good work", type: "worker" },
        { text: "Analyze what they did politically that I didn't", type: "political" },
        { text: "Feel overlooked and question if I should stay", type: "passive" }
      ]
    },
    {
      id: 6,
      text: "The phrase 'self-promotion' makes you feel:",
      options: [
        { text: "That's just advocating for yourself - totally normal", type: "active" },
        { text: "Slightly uncomfortable, but I see why it's needed", type: "worker" },
        { text: "It's a skill like any other - I've developed it", type: "political" },
        { text: "Cringy and inauthentic - I hate it", type: "passive" }
      ]
    },
    {
      id: 7,
      text: "You accomplish something impressive at work. You:",
      options: [
        { text: "Make sure the right people know about it", type: "active" },
        { text: "Feel satisfied and move on to the next task", type: "worker" },
        { text: "Turn it into a visibility moment", type: "political" },
        { text: "Hope someone noticed without me saying anything", type: "passive" }
      ]
    },
    {
      id: 8,
      text: "During career conversations with your boss, you:",
      options: [
        { text: "Drive the agenda - I know exactly what I want", type: "active" },
        { text: "Listen to their feedback and act on it", type: "worker" },
        { text: "Plant seeds for future opportunities", type: "political" },
        { text: "Wait for them to tell me what's possible", type: "passive" }
      ]
    },
    {
      id: 9,
      text: "Your feelings about 'playing the game':",
      options: [
        { text: "It's reality - I play to win", type: "active" },
        { text: "I'd rather focus on actual work output", type: "worker" },
        { text: "Understanding the game IS a skill", type: "political" },
        { text: "I refuse to play - it feels fake", type: "passive" }
      ]
    },
    {
      id: 10,
      text: "Where do you think you'll be in 5 years?",
      options: [
        { text: "Exactly where I'm planning - I have a roadmap", type: "active" },
        { text: "Hopefully progressed based on my contributions", type: "worker" },
        { text: "Wherever my strategic moves take me", type: "political" },
        { text: "Honestly no idea - depends on external factors", type: "passive" }
      ]
    }
  ],
  results: {
    active: {
      type: "The Career Advocate",
      description: "You ask for what you want, loudly and often. Your boss knows your goals, their boss knows your goals, probably everyone knows your goals. You don't wait for opportunities - you create them. Self-promotion isn't cringe to you; it's survival. You're going places because you TELL people where you're going.",
      traits: ["Assertive", "Clear about goals", "Self-advocating", "Career-driven"],
      advice: "Your advocacy skills are powerful! Just make sure you're backing it up with results, not just talk. And balance self-promotion with team recognition - no one likes someone who takes all the credit. Keep asking, keep achieving."
    },
    worker: {
      type: "The Quiet Achiever",
      description: "You believe your work should speak for itself. Head down, deliverables out, results on the board. You're not ignoring career growth, you just think performance is the currency that matters. Sometimes this works. Sometimes you get overlooked while the self-promoters advance.",
      traits: ["Hardworking", "Results-focused", "Humble", "Prefers recognition through work"],
      advice: "Hard truth: in most organizations, pure merit isn't enough. Your work is excellent, but if no one knows about it, does it matter? Learn to highlight your achievements without feeling gross about it. You can be humble AND visible."
    },
    political: {
      type: "The Strategic Climber",
      description: "You understand that career advancement is a GAME, and you're playing it. You know who matters, when to be visible, and how to position yourself. Some might call it political. You call it strategic. Either way, you're usually the one getting promoted.",
      traits: ["Strategic", "Politically savvy", "Relationship-focused", "Calculated"],
      advice: "Your strategic skills are valuable, but don't lose your authenticity in the process. People can sense insincerity, and it catches up eventually. Combine your political awareness with genuine relationships and solid performance for sustainable success."
    },
    passive: {
      type: "The Recognition Wisher",
      description: "You quietly hope someone will notice your hard work and reward it. You're not comfortable asking for things, promoting yourself, or 'playing the game.' You believe in fairness and meritocracy. Unfortunately, most workplaces aren't that fair. Your promotion might be waiting for you to ask for it.",
      traits: ["Passive", "Uncomfortable with self-promotion", "Hoping to be discovered", "Career stagnant risk"],
      advice: "Here's the uncomfortable reality: no one is coming to give you what you don't ask for. Start small - one conversation with your boss about your goals. Career progression requires active participation. Your discomfort with self-promotion might be the biggest barrier to your success."
    }
  }
};
