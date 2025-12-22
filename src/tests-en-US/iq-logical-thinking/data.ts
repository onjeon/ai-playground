// Logical Thinking Test - Viral IQ test for American English users

export const testData = {
  id: "iq-logical-thinking",
  title: "Logical Thinking Test",
  description: "Can your brain handle pure logic? Test your reasoning skills with these mind-bending questions!",
  questions: [
    {
      id: 1,
      text: "All roses are flowers. Some flowers fade quickly. Therefore:",
      options: [
        { text: "Some roses may fade quickly", type: "genius" },
        { text: "All roses fade quickly", type: "developing" },
        { text: "No roses fade quickly", type: "developing" },
        { text: "Roses never fade", type: "developing" }
      ]
    },
    {
      id: 2,
      text: "If it's raining, the ground is wet. The ground is wet. Therefore:",
      options: [
        { text: "It must be raining", type: "developing" },
        { text: "The ground could be wet for other reasons", type: "genius" },
        { text: "It's definitely not raining", type: "developing" },
        { text: "Someone spilled water", type: "average" }
      ]
    },
    {
      id: 3,
      text: "Tom is taller than Jake. Jake is taller than Sam. Who is shortest?",
      options: [
        { text: "Sam", type: "genius" },
        { text: "Jake", type: "developing" },
        { text: "Tom", type: "developing" },
        { text: "Can't determine", type: "average" }
      ]
    },
    {
      id: 4,
      text: "A bat and ball cost $1.10 together. The bat costs $1.00 more than the ball. How much is the ball?",
      options: [
        { text: "$0.05", type: "genius" },
        { text: "$0.10", type: "developing" },
        { text: "$0.15", type: "average" },
        { text: "$0.20", type: "developing" }
      ]
    },
    {
      id: 5,
      text: "If no A are B, and all C are B, then:",
      options: [
        { text: "No A are C", type: "genius" },
        { text: "All A are C", type: "developing" },
        { text: "Some A are C", type: "average" },
        { text: "All C are A", type: "developing" }
      ]
    },
    {
      id: 6,
      text: "A doctor gives you 3 pills, saying take one every 30 minutes. How long until all pills are taken?",
      options: [
        { text: "60 minutes", type: "genius" },
        { text: "90 minutes", type: "developing" },
        { text: "30 minutes", type: "developing" },
        { text: "120 minutes", type: "average" }
      ]
    },
    {
      id: 7,
      text: "If you overtake the person in 2nd place in a race, what position are you in?",
      options: [
        { text: "2nd place", type: "genius" },
        { text: "1st place", type: "developing" },
        { text: "3rd place", type: "average" },
        { text: "It depends", type: "sharp" }
      ]
    },
    {
      id: 8,
      text: "A farmer has 17 sheep. All but 9 die. How many are left?",
      options: [
        { text: "9", type: "genius" },
        { text: "8", type: "developing" },
        { text: "17", type: "developing" },
        { text: "0", type: "developing" }
      ]
    },
    {
      id: 9,
      text: "Which is heavier: a pound of feathers or a pound of bricks?",
      options: [
        { text: "They weigh the same", type: "genius" },
        { text: "Bricks", type: "developing" },
        { text: "Feathers", type: "developing" },
        { text: "Need more information", type: "average" }
      ]
    },
    {
      id: 10,
      text: "If there are 3 apples and you take away 2, how many apples do YOU have?",
      options: [
        { text: "2 (the ones you took)", type: "genius" },
        { text: "1 (what's left)", type: "developing" },
        { text: "3 (all of them)", type: "average" },
        { text: "0 (you don't have any)", type: "developing" }
      ]
    }
  ],
  results: {
    genius: {
      type: "Logic Genius",
      description: "Your logical reasoning is absolutely elite! You see through trick questions, understand complex syllogisms, and your brain processes logical statements like a philosopher. You'd absolutely crush the LSAT or any logic-based challenge!",
      traits: ["Exceptional reasoning", "Sees through tricks", "Systematic thinker", "Natural problem solver"],
      advice: "Your logical mind is a gift - consider fields like law, philosophy, programming, or research!"
    },
    sharp: {
      type: "Logic Whiz",
      description: "You've got strong logical thinking skills! Most puzzles and reasoning challenges don't stand a chance against your brain. You occasionally fall for a carefully designed trick, but your overall reasoning is impressive.",
      traits: ["Strong analytical skills", "Good critical thinking", "Solid reasoning", "Quick problem solver"],
      advice: "Challenge yourself with more complex logic puzzles to reach genius level!"
    },
    average: {
      type: "Logical Learner",
      description: "Your logical thinking is developing nicely! You can handle straightforward reasoning but might get caught by tricky wording or complex chains of logic. With practice, you can definitely improve your logical skills.",
      traits: ["Growing logical skills", "Good foundation", "Sometimes overthinks", "Practical reasoner"],
      advice: "Practice with logic puzzles daily - apps and brain games can really help sharpen these skills!"
    },
    developing: {
      type: "Intuitive Thinker",
      description: "Logic puzzles aren't your strongest suit, but that might mean you think more intuitively or creatively! Many geniuses throughout history relied more on gut feelings than pure logic. Your brain just works differently.",
      traits: ["Intuition-based thinking", "Creative approach", "Emotional intelligence", "Different cognitive style"],
      advice: "Try breaking down problems into smaller steps. Logic is like a muscle - it gets stronger with exercise!"
    }
  }
};
