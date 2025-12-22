// What's Your Cleanliness Level? - Viral personality test for American English users

export const testData = {
  id: "personality-cleanliness-level",
  title: "What's Your Cleanliness Level?",
  description: "Are you a neat freak or a beautiful disaster? Let's find out what your space says about you!",
  questions: [
    {
      id: 1,
      text: "Someone says they're coming over in 20 minutes. Your reaction:",
      options: [
        { text: "Great! My place is always guest-ready", type: "spotless" },
        { text: "Quick tidy of the main areas, we're good", type: "organized" },
        { text: "Panic clean - throw everything in closets", type: "chaotic" },
        { text: "They've seen worse. It is what it is", type: "feral" }
      ]
    },
    {
      id: 2,
      text: "Your relationship with doing dishes:",
      options: [
        { text: "Washed, dried, and put away immediately after use", type: "spotless" },
        { text: "Done daily, maybe sitting in the dish rack", type: "organized" },
        { text: "I have a system... eventually they get done", type: "chaotic" },
        { text: "I'll do them when I run out of clean ones", type: "feral" }
      ]
    },
    {
      id: 3,
      text: "How often do you actually change your sheets?",
      options: [
        { text: "Weekly, like a civilized human being", type: "spotless" },
        { text: "Every two weeks, maybe three", type: "organized" },
        { text: "When I remember... so monthly-ish?", type: "chaotic" },
        { text: "They still smell fine to me", type: "feral" }
      ]
    },
    {
      id: 4,
      text: "Your 'clean clothes' vs 'dirty clothes' system:",
      options: [
        { text: "Dirty goes straight to the hamper, clean is folded and put away", type: "spotless" },
        { text: "There's a system - I know where everything goes", type: "organized" },
        { text: "The Chair. You know the one", type: "chaotic" },
        { text: "Sniff test determines everything", type: "feral" }
      ]
    },
    {
      id: 5,
      text: "The state of your refrigerator right now:",
      options: [
        { text: "Organized, labeled containers, nothing expired", type: "spotless" },
        { text: "Pretty organized with maybe one mystery container", type: "organized" },
        { text: "A few questionable items I'm afraid to investigate", type: "chaotic" },
        { text: "Science experiments I've chosen to ignore", type: "feral" }
      ]
    },
    {
      id: 6,
      text: "Your approach to making your bed:",
      options: [
        { text: "Every single morning, hospital corners style", type: "spotless" },
        { text: "Most days, at least a quick straighten", type: "organized" },
        { text: "Only if someone might see it", type: "chaotic" },
        { text: "I'm just going to get back in it later??", type: "feral" }
      ]
    },
    {
      id: 7,
      text: "What does 'deep cleaning' mean to you?",
      options: [
        { text: "A regular weekend activity I actually enjoy", type: "spotless" },
        { text: "Something I do every month or so", type: "organized" },
        { text: "A rare event triggered by moving or guests", type: "chaotic" },
        { text: "A concept I've heard of but never truly experienced", type: "feral" }
      ]
    },
    {
      id: 8,
      text: "Your car's interior condition:",
      options: [
        { text: "Vacuumed regularly, no trash, smells fresh", type: "spotless" },
        { text: "Generally clean with a few receipts and water bottles", type: "organized" },
        { text: "A mobile storage unit with snack evidence", type: "chaotic" },
        { text: "I could survive several days with what's in there", type: "feral" }
      ]
    },
    {
      id: 9,
      text: "Someone spills something on your floor. Your response:",
      options: [
        { text: "Immediately cleaned with appropriate products", type: "spotless" },
        { text: "Paper towels now, proper clean later", type: "organized" },
        { text: "A few wipes and call it good", type: "chaotic" },
        { text: "It'll dry... or the dog will get it", type: "feral" }
      ]
    },
    {
      id: 10,
      text: "How do you feel about other people's cleaning standards?",
      options: [
        { text: "I notice everything and silently judge", type: "spotless" },
        { text: "Live and let live, but I have preferences", type: "organized" },
        { text: "Glass houses, you know? No judgment", type: "chaotic" },
        { text: "Wait, people actually clean regularly?", type: "feral" }
      ]
    }
  ],
  results: {
    spotless: {
      type: "The Pristine Palace Keeper",
      description: "Your space could be photographed for a magazine at any given moment. You have a place for everything and everything in its place. Cleaning is self-care for you, and a messy space genuinely stresses you out. Your friends are both impressed and slightly intimidated by your standards.",
      traits: ["Meticulous", "Organized", "Detail-oriented", "Possibly anxious about mess"],
      advice: "Your clean space brings you peace, and that's beautiful! Just remember to relax sometimes and let a dish sit in the sink without spiraling. Not everything has to be perfect all the time. Give yourself grace on the messy days."
    },
    organized: {
      type: "The Functional Adult",
      description: "You've found the sweet spot between chaos and obsession. Your place is clean enough to feel good but you're not losing sleep over a little clutter. You clean regularly but also have better things to do. You're the Goldilocks of cleanliness - just right.",
      traits: ["Balanced", "Practical", "Low-key tidy", "Reasonable"],
      advice: "You've cracked the code! Maintain this healthy balance between having standards and having a life. You're proof that you can be a functioning adult without being a neat freak. Keep doing you!"
    },
    chaotic: {
      type: "The Organized Chaos Champion",
      description: "Your space might look messy, but you have a system! You know exactly which pile has what you need. You clean in bursts of motivation and live comfortably in the in-between. Guests spark emergency cleaning energy, but otherwise? You're thriving in your beautiful disaster.",
      traits: ["Creative", "Spontaneous", "Comfort-focused", "Burst cleaner"],
      advice: "Your chaos works for you, and that's valid! Maybe establish one or two non-negotiables (dishes? bathroom?) to keep things from crossing into concerning territory. Remember: you deserve to live in a space that feels good, whatever that means for you."
    },
    feral: {
      type: "The Untamed Territory Dweller",
      description: "Cleaning is a social construct and you've chosen freedom. Your space is lived-in, to say the least. You're either a creative genius who doesn't have time for mundane tasks, going through something, or just genuinely unbothered by mess. Either way, you're living authentically.",
      traits: ["Free-spirited", "Unbothered", "Survival-focused", "Priorities elsewhere"],
      advice: "No judgment here, but a clean space can actually improve mental health and energy! Try the 2-minute rule: if it takes less than 2 minutes, do it now. Small wins add up. And maybe... check those leftovers. You deserve fresh food, friend."
    }
  }
};
