// Pattern Recognition Test - Viral IQ test for American English users

export const testData = {
  id: "iq-pattern-recognition",
  title: "Pattern Recognition Test",
  description: "How quickly can your brain spot patterns? Test your visual and logical pattern recognition skills!",
  questions: [
    {
      id: 1,
      text: "What comes next in the sequence: 2, 6, 18, 54, ___?",
      options: [
        { text: "108", type: "average" },
        { text: "162", type: "genius" },
        { text: "72", type: "developing" },
        { text: "216", type: "developing" }
      ]
    },
    {
      id: 2,
      text: "Find the pattern: AB, CD, EF, ___, IJ",
      options: [
        { text: "GH", type: "genius" },
        { text: "FG", type: "developing" },
        { text: "HI", type: "average" },
        { text: "DE", type: "developing" }
      ]
    },
    {
      id: 3,
      text: "What number completes this: 1, 1, 2, 3, 5, 8, ___?",
      options: [
        { text: "13", type: "genius" },
        { text: "11", type: "average" },
        { text: "10", type: "developing" },
        { text: "16", type: "developing" }
      ]
    },
    {
      id: 4,
      text: "Pattern: Monday = 1, Wednesday = 3, Friday = ?",
      options: [
        { text: "5", type: "genius" },
        { text: "6", type: "average" },
        { text: "4", type: "developing" },
        { text: "7", type: "developing" }
      ]
    },
    {
      id: 5,
      text: "Complete: 3, 9, 27, 81, ___",
      options: [
        { text: "243", type: "genius" },
        { text: "162", type: "average" },
        { text: "108", type: "developing" },
        { text: "324", type: "sharp" }
      ]
    },
    {
      id: 6,
      text: "What comes next: Z, Y, X, W, ___?",
      options: [
        { text: "V", type: "genius" },
        { text: "U", type: "average" },
        { text: "T", type: "developing" },
        { text: "S", type: "developing" }
      ]
    },
    {
      id: 7,
      text: "Pattern: 100, 95, 85, 70, ___",
      options: [
        { text: "50", type: "genius" },
        { text: "55", type: "sharp" },
        { text: "60", type: "average" },
        { text: "65", type: "developing" }
      ]
    },
    {
      id: 8,
      text: "Find the odd one out: 2, 4, 6, 9, 10",
      options: [
        { text: "9", type: "genius" },
        { text: "10", type: "average" },
        { text: "2", type: "developing" },
        { text: "6", type: "developing" }
      ]
    },
    {
      id: 9,
      text: "Complete: A1, B2, C3, D4, ___",
      options: [
        { text: "E5", type: "genius" },
        { text: "F6", type: "average" },
        { text: "E4", type: "developing" },
        { text: "D5", type: "developing" }
      ]
    },
    {
      id: 10,
      text: "Pattern: 1, 4, 9, 16, 25, ___",
      options: [
        { text: "36", type: "genius" },
        { text: "30", type: "average" },
        { text: "49", type: "sharp" },
        { text: "34", type: "developing" }
      ]
    }
  ],
  results: {
    genius: {
      type: "Pattern Master",
      description: "Your brain is basically a supercomputer! You can spot patterns instantly and see connections others miss. You'd dominate at puzzles, code breaking, and probably could've been a spy in another life. Your pattern recognition puts you in the top tier!",
      traits: ["Lightning-fast processing", "Natural puzzle solver", "Exceptional visual intelligence", "Strong mathematical intuition"],
      advice: "Challenge yourself with advanced puzzles and cryptography - your brain craves complex patterns!"
    },
    sharp: {
      type: "Pattern Pro",
      description: "You've got serious pattern recognition skills! Your brain quickly processes sequences and finds the logic behind them. You might miss a tricky one occasionally, but overall you're sharper than most. Companies would love you for data analysis!",
      traits: ["Quick analytical mind", "Strong logical thinking", "Good visual processing", "Above-average intelligence"],
      advice: "Keep practicing with brain teasers - you're close to mastery level!"
    },
    average: {
      type: "Pattern Spotter",
      description: "You've got solid pattern recognition abilities! You can figure out most sequences with a bit of thought. Sometimes the trickier patterns take you a moment, but you get there. Your brain is well-equipped for everyday problem-solving.",
      traits: ["Reliable logical thinking", "Steady problem solver", "Good foundational skills", "Practical intelligence"],
      advice: "Daily brain games could sharpen these skills even more!"
    },
    developing: {
      type: "Pattern Apprentice",
      description: "Patterns aren't your natural strength yet, but that's totally fine! Your brain might process information differently - maybe you're more creative or emotionally intelligent. The good news? Pattern recognition is a skill you can develop with practice.",
      traits: ["Unique thinking style", "Room for growth", "Potential untapped", "Different cognitive strengths"],
      advice: "Start with simple number sequences and work your way up. Apps like Lumosity can help train your brain!"
    }
  }
};
