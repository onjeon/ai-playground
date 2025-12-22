// Are You Having a Quarter-Life Crisis? - Viral life test for American English users

export const testData = {
  id: "life-quarter-life-crisis",
  title: "Are You Having a Quarter-Life Crisis?",
  description: "Existential dread in your 20s/30s? Let's diagnose your crisis level!",
  questions: [
    {
      id: 1,
      text: "How often do you question your entire life direction?",
      options: [
        { text: "Multiple times a week. What am I DOING?", type: "crisis" },
        { text: "Sometimes - normal life contemplation", type: "mild" },
        { text: "Occasionally, but I feel mostly on track", type: "stable" },
        { text: "Rarely - I'm pretty confident in my path", type: "thriving" }
      ]
    },
    {
      id: 2,
      text: "Seeing peers 'succeed' on social media makes you feel:",
      options: [
        { text: "Panic. Am I behind? What went wrong?", type: "crisis" },
        { text: "A little comparative, but I try not to", type: "mild" },
        { text: "Happy for them, secure in my own path", type: "stable" },
        { text: "Inspired, and confident in my own journey", type: "thriving" }
      ]
    },
    {
      id: 3,
      text: "Your current relationship with your career:",
      options: [
        { text: "Is this it? Did I choose wrong? Help", type: "crisis" },
        { text: "Some doubts but generally okay", type: "mild" },
        { text: "Satisfied with where I am and where I'm going", type: "stable" },
        { text: "Excited and engaged with my path", type: "thriving" }
      ]
    },
    {
      id: 4,
      text: "When you think about the future, you feel:",
      options: [
        { text: "Anxious and uncertain - no clear vision", type: "crisis" },
        { text: "A bit nervous but cautiously optimistic", type: "mild" },
        { text: "Reasonably clear about what I want", type: "stable" },
        { text: "Excited about goals and plans", type: "thriving" }
      ]
    },
    {
      id: 5,
      text: "Have you recently wanted to make a major life change?",
      options: [
        { text: "Change EVERYTHING. New career, new city, new me", type: "crisis" },
        { text: "Maybe one significant change would help", type: "mild" },
        { text: "Minor adjustments would be nice", type: "stable" },
        { text: "I'm happy with things as they are", type: "thriving" }
      ]
    },
    {
      id: 6,
      text: "Your current sense of identity:",
      options: [
        { text: "Who am I? Who do I want to be? No clue", type: "crisis" },
        { text: "Still figuring some things out", type: "mild" },
        { text: "Pretty clear on who I am, some growth ahead", type: "stable" },
        { text: "Strong sense of self and values", type: "thriving" }
      ]
    },
    {
      id: 7,
      text: "How do you feel about expectations (family, society, your own)?",
      options: [
        { text: "Crushed under the weight of them", type: "crisis" },
        { text: "Trying to balance them with what I want", type: "mild" },
        { text: "Managing them reasonably well", type: "stable" },
        { text: "Living authentically regardless", type: "thriving" }
      ]
    },
    {
      id: 8,
      text: "Your relationship with 'adulting':",
      options: [
        { text: "Failing. I'm an imposter pretending to be an adult", type: "crisis" },
        { text: "Struggling but surviving, mostly", type: "mild" },
        { text: "Have my stuff generally together", type: "stable" },
        { text: "Got this handled, actually feel like an adult", type: "thriving" }
      ]
    },
    {
      id: 9,
      text: "Late night existential thoughts frequency:",
      options: [
        { text: "Nightly. My anxiety has a bedtime show", type: "crisis" },
        { text: "Sometimes, especially when stressed", type: "mild" },
        { text: "Occasionally, but not disruptively", type: "stable" },
        { text: "Rare - I sleep well and think clearly", type: "thriving" }
      ]
    },
    {
      id: 10,
      text: "Honestly, how are you doing?",
      options: [
        { text: "Not great! Thanks for asking! Everything is on fire!", type: "crisis" },
        { text: "Could be better, could be worse", type: "mild" },
        { text: "Doing okay, room for improvement", type: "stable" },
        { text: "Actually good. Genuinely.", type: "thriving" }
      ]
    }
  ],
  results: {
    crisis: {
      type: "Full Quarter-Life Crisis Mode",
      description: "Congratulations! You're having a CLASSIC quarter-life crisis. Everything is uncertain, identity is unclear, and you're questioning every choice that led to this moment. You're not alone - this is extremely common in your 20s and 30s. The good news? Crises often lead to growth.",
      traits: ["Questioning everything", "Uncertain", "Searching", "Overwhelmed"],
      advice: "This feels awful but it's actually a sign of growth potential. Consider therapy, journaling, or talking to friends going through the same thing. The clarity you seek is on the other side of this discomfort. You WILL figure it out."
    },
    mild: {
      type: "Mild Quarter-Life Turbulence",
      description: "You're not in full crisis, but you're definitely feeling some turbulence. Some uncertainty, some questioning, some comparison spiral moments. This is normal! You're navigating the transition from 'young adult' to 'actual adult' and it's not always smooth.",
      traits: ["Slightly uncertain", "Comparative", "Growing", "Figuring it out"],
      advice: "You're in a very normal place! Keep working on the things that feel off, be patient with yourself, and limit social media comparison. You're doing better than you think. This is just the uncomfortable middle."
    },
    stable: {
      type: "Quarter-Life Manageable",
      description: "You've got things reasonably together! Sure, life isn't perfect and you have things to work on, but you're not in crisis. You have a general sense of direction, identity, and purpose. Whatever you're doing, it's working reasonably well.",
      traits: ["Stable", "Self-aware", "Growing steadily", "Mostly together"],
      advice: "You're in a good place! Don't take it for granted. Keep doing what works, stay curious about growth, and appreciate the stability you've built. Help your friends who are in crisis - they need you."
    },
    thriving: {
      type: "Quarter-Life Thriving",
      description: "You're... doing well? In THIS economy? With THIS level of existential uncertainty in the world? Impressive. You have clarity, confidence, and a sense of purpose. Either you've done serious work to get here, or you're naturally resilient. Either way, keep it up.",
      traits: ["Confident", "Clear direction", "Self-assured", "Grounded"],
      advice: "Whatever you're doing, keep doing it! Your stability is impressive. Consider sharing your approach with others - they need your energy. And stay humble - life can change. But for now, enjoy where you are."
    }
  }
};
