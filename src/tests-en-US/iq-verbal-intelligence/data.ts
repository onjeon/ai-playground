// Verbal Intelligence Test - Viral IQ test for American English users

export const testData = {
  id: "iq-verbal-intelligence",
  title: "Verbal Intelligence Test",
  description: "How powerful is your way with words? Test your vocabulary, language skills, and verbal reasoning!",
  questions: [
    {
      id: 1,
      text: "Choose the word most similar in meaning to 'EPHEMERAL':",
      options: [
        { text: "Fleeting", type: "wordsmith" },
        { text: "Eternal", type: "developing" },
        { text: "Mysterious", type: "average" },
        { text: "Powerful", type: "developing" }
      ]
    },
    {
      id: 2,
      text: "'Serendipity' is to 'luck' as 'perseverance' is to:",
      options: [
        { text: "Determination", type: "wordsmith" },
        { text: "Success", type: "average" },
        { text: "Patience", type: "strong" },
        { text: "Talent", type: "developing" }
      ]
    },
    {
      id: 3,
      text: "Which word does NOT belong: verbose, laconic, succinct, concise?",
      options: [
        { text: "Verbose", type: "wordsmith" },
        { text: "Laconic", type: "developing" },
        { text: "Succinct", type: "developing" },
        { text: "Concise", type: "average" }
      ]
    },
    {
      id: 4,
      text: "Complete the analogy: Author is to Novel as Composer is to:",
      options: [
        { text: "Symphony", type: "wordsmith" },
        { text: "Music", type: "average" },
        { text: "Instrument", type: "developing" },
        { text: "Concert", type: "developing" }
      ]
    },
    {
      id: 5,
      text: "What does 'ubiquitous' mean?",
      options: [
        { text: "Found everywhere", type: "wordsmith" },
        { text: "Extremely unique", type: "developing" },
        { text: "Very confusing", type: "developing" },
        { text: "Somewhat ordinary", type: "average" }
      ]
    },
    {
      id: 6,
      text: "When you read, do you encounter unfamiliar words?",
      options: [
        { text: "Rarely - I know most words I come across", type: "wordsmith" },
        { text: "Occasionally, maybe once per book", type: "strong" },
        { text: "Sometimes, I look them up or skip them", type: "average" },
        { text: "Frequently, reading can be challenging", type: "developing" }
      ]
    },
    {
      id: 7,
      text: "'Ameliorate' most closely means:",
      options: [
        { text: "To improve or make better", type: "wordsmith" },
        { text: "To merge together", type: "developing" },
        { text: "To completely destroy", type: "developing" },
        { text: "To carefully examine", type: "average" }
      ]
    },
    {
      id: 8,
      text: "In Scrabble or word games, you typically:",
      options: [
        { text: "Dominate with obscure high-scoring words", type: "wordsmith" },
        { text: "Do pretty well, win my share", type: "strong" },
        { text: "Hold my own against most players", type: "average" },
        { text: "Struggle to find good words", type: "developing" }
      ]
    },
    {
      id: 9,
      text: "Choose the correct word: 'The politician's speech was full of _____ - saying much while meaning little.'",
      options: [
        { text: "Platitudes", type: "wordsmith" },
        { text: "Attitudes", type: "developing" },
        { text: "Magnitudes", type: "developing" },
        { text: "Gratitude", type: "average" }
      ]
    },
    {
      id: 10,
      text: "How would you rate your ability to explain complex ideas simply?",
      options: [
        { text: "Excellent - I can break down anything clearly", type: "wordsmith" },
        { text: "Good - I'm usually articulate", type: "strong" },
        { text: "Okay - depends on the topic", type: "average" },
        { text: "Challenging - I often struggle to find the right words", type: "developing" }
      ]
    }
  ],
  results: {
    wordsmith: {
      type: "Master Wordsmith",
      description: "Your verbal intelligence is absolutely elite! You have an extensive vocabulary, understand nuance and connotation, and wield language with precision. You'd excel in writing, law, teaching, or any field where communication is key. Shakespeare would be impressed!",
      traits: ["Extensive vocabulary", "Precise communication", "Language mastery", "Verbal reasoning"],
      advice: "Your verbal skills are top-tier! Consider writing, teaching, law, or any field where your way with words can shine."
    },
    strong: {
      type: "Verbal Pro",
      description: "You've got impressive verbal skills! Your vocabulary is above average and you communicate well in most situations. You can hold your own in word games and rarely feel at a loss for words.",
      traits: ["Strong vocabulary", "Good communication", "Clear articulation", "Verbal confidence"],
      advice: "Keep reading widely and challenging yourself with new genres to expand your verbal range even further!"
    },
    average: {
      type: "Everyday Communicator",
      description: "Your verbal skills are solid for everyday life! You communicate effectively and understand most of what you read. Some advanced vocabulary might trip you up, but you get by well in most situations.",
      traits: ["Functional vocabulary", "Practical communication", "Room for growth", "Clear enough expression"],
      advice: "Want to boost your verbal IQ? Read more challenging material, learn a word a day, and play word games!"
    },
    developing: {
      type: "Visual/Kinesthetic Learner",
      description: "Words aren't your primary mode of intelligence - and that's completely valid! You might be more visually oriented, hands-on, or numerically inclined. Many successful people aren't primarily verbal thinkers.",
      traits: ["Alternative learning style", "Non-verbal strengths", "Practical intelligence", "Different communication style"],
      advice: "Consider audiobooks, podcasts, and conversation to absorb language naturally. Your intelligence just expresses differently!"
    }
  }
};
