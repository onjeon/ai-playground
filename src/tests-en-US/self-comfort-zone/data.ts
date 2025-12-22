// How Far Outside Your Comfort Zone Are You? - Viral self-discovery test for American English users

export const testData = {
  id: "self-comfort-zone",
  title: "How Far Outside Your Comfort Zone Are You?",
  description: "Growth happens at the edge of comfort. But are you playing it safe, pushing limits, or completely lost in unknown territory? Let's map your zone.",
  questions: [
    {
      id: 1,
      text: "How predictable is your average week?",
      options: [
        { text: "Same thing every day - I like routine", type: "comfort" },
        { text: "Mostly predictable with occasional surprises", type: "stretch" },
        { text: "Intentionally mixing it up - I get bored easily", type: "growth" },
        { text: "Every day is chaos - I don't know what's coming", type: "panic" }
      ]
    },
    {
      id: 2,
      text: "When's the last time you did something that scared you?",
      options: [
        { text: "It's been a while, honestly", type: "comfort" },
        { text: "Within the last month or so", type: "stretch" },
        { text: "Last week - I actively seek challenge", type: "growth" },
        { text: "Right now, everything feels scary", type: "panic" }
      ]
    },
    {
      id: 3,
      text: "How do you feel about your current growth rate?",
      options: [
        { text: "Stable - maybe too stable", type: "comfort" },
        { text: "Growing at a manageable pace", type: "stretch" },
        { text: "Pushing myself - uncomfortable but exciting", type: "growth" },
        { text: "Overwhelmed - too much change at once", type: "panic" }
      ]
    },
    {
      id: 4,
      text: "What's your relationship with risk right now?",
      options: [
        { text: "Playing it safe - I don't rock the boat", type: "comfort" },
        { text: "Calculated risks - nothing too crazy", type: "stretch" },
        { text: "Taking bigger risks - going for it", type: "growth" },
        { text: "Everything feels risky - I'm surviving, not thriving", type: "panic" }
      ]
    },
    {
      id: 5,
      text: "How often do you try new things?",
      options: [
        { text: "Rarely - I know what I like", type: "comfort" },
        { text: "Sometimes - when the opportunity arises", type: "stretch" },
        { text: "Often - I actively seek novel experiences", type: "growth" },
        { text: "Everything is new right now and it's a lot", type: "panic" }
      ]
    },
    {
      id: 6,
      text: "Your current stress level:",
      options: [
        { text: "Low - maybe too low (am I stagnating?)", type: "comfort" },
        { text: "Moderate - manageable challenge", type: "stretch" },
        { text: "High but exciting - I chose this", type: "growth" },
        { text: "Overwhelming - I need things to calm down", type: "panic" }
      ]
    },
    {
      id: 7,
      text: "If a friend described your current life situation:",
      options: [
        { text: "'Playing it safe but maybe too comfortable'", type: "comfort" },
        { text: "'Trying some new things, growing steadily'", type: "stretch" },
        { text: "'Really going for it, brave moves'", type: "growth" },
        { text: "'Going through a lot, needs support'", type: "panic" }
      ]
    },
    {
      id: 8,
      text: "How do you feel when you wake up most days?",
      options: [
        { text: "Same day, different calendar date", type: "comfort" },
        { text: "Generally good - mix of routine and new", type: "stretch" },
        { text: "Excited and a little nervous - big things happening", type: "growth" },
        { text: "Anxious about what I have to face", type: "panic" }
      ]
    },
    {
      id: 9,
      text: "What would make your life feel more balanced?",
      options: [
        { text: "More adventure and challenge", type: "comfort" },
        { text: "I'm pretty balanced right now", type: "stretch" },
        { text: "Maybe a little more stability", type: "growth" },
        { text: "Much more stability and safety", type: "panic" }
      ]
    },
    {
      id: 10,
      text: "Your internal monologue lately:",
      options: [
        { text: "'Should I be doing more? Is this enough?'", type: "comfort" },
        { text: "'This is good. Keep going.'", type: "stretch" },
        { text: "'Scary but exciting. I've got this.'", type: "growth" },
        { text: "'This is too much. I need to stabilize.'", type: "panic" }
      ]
    }
  ],
  results: {
    comfort: {
      type: "Deep in the Comfort Zone",
      description: "You're cozy. Maybe too cozy. Your life is predictable, safe, and... maybe a little stagnant? There's nothing wrong with comfort, but you might be trading growth for security. The question isn't whether you're safe - it's whether you're alive. What would happen if you shook things up?",
      traits: ["Safety-seeking", "Routine-lover", "Risk-averse", "Possibly understimulated"],
      advice: "Your comfort zone is a nice place to visit, but nothing grows there. Start small: one new thing a week. It doesn't have to be big - just different. Order something new, take a different route, say yes to something that scares you slightly. The muscle grows with use."
    },
    stretch: {
      type: "The Stretch Zone",
      description: "You're in the sweet spot. Challenged enough to grow, stable enough to handle it. You've got one foot in comfort and one foot in the unknown. This is where real development happens - the perfect balance of safety and growth. You're doing it right.",
      traits: ["Balanced growth", "Healthy challenge", "Self-aware", "Sustainable pace"],
      advice: "You've found the zone - now stay here intentionally. Keep pushing your edges, but respect your limits. Notice when you're sliding back into pure comfort or tipping into overwhelm. The stretch zone is maintenance, not just a destination."
    },
    growth: {
      type: "The Growth Edge",
      description: "You're pushing it. Big moves, scary choices, real discomfort. You're living where growth happens - the edge. It's uncomfortable, exciting, and probably a little exhausting. But this is where people transform. Just make sure you're not running yourself into the ground.",
      traits: ["Risk-taking", "Adventure-seeking", "Ambitious", "Possibly needs more rest"],
      advice: "Your courage is inspiring, but recovery is part of growth. You can't pour from an empty cup. Build in rest and stability alongside your adventures. The goal isn't to live in constant discomfort - it's to grow sustainably. Push, then rest. Push, then rest."
    },
    panic: {
      type: "The Panic Zone",
      description: "This is too much. Too much change, too much uncertainty, too much outside your capacity right now. You're not in the growth zone - you're in survival mode. This isn't weakness; sometimes life throws more than we can handle. What you need isn't more challenge - it's more support and stability.",
      traits: ["Overwhelmed", "Needs grounding", "Survival mode", "Seeking stability"],
      advice: "Stop pushing yourself. This isn't the time for growth - this is the time for stabilizing. Find one thing you can control and focus there. Ask for help. Create routine where you can. You'll grow again later; right now, just survive, stabilize, and be gentle with yourself."
    }
  }
};
