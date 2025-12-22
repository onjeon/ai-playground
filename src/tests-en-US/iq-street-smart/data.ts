// Are You Street Smart or Book Smart? - Viral IQ test for American English users

export const testData = {
  id: "iq-street-smart",
  title: "Are You Street Smart or Book Smart?",
  description: "There are different types of intelligence. Are you better in the classroom or in real life? Let's find out!",
  questions: [
    {
      id: 1,
      text: "You're at a party and don't know anyone. You typically:",
      options: [
        { text: "Read the room, find approachable people, work the crowd", type: "street" },
        { text: "Find a quiet corner and observe", type: "book" },
        { text: "Start interesting conversations about topics I know well", type: "balanced" },
        { text: "Leave early, parties aren't my thing", type: "book" }
      ]
    },
    {
      id: 2,
      text: "How would you prefer to learn a new skill?",
      options: [
        { text: "Jump in, make mistakes, figure it out hands-on", type: "street" },
        { text: "Read everything about it first, then practice", type: "book" },
        { text: "Watch tutorials, then try it myself", type: "balanced" },
        { text: "Take a structured class or course", type: "book" }
      ]
    },
    {
      id: 3,
      text: "You need to negotiate a better price. Your approach:",
      options: [
        { text: "I'm confident - I know how to read people and close deals", type: "street" },
        { text: "I'd research negotiation tactics first", type: "book" },
        { text: "I'd try but might feel uncomfortable", type: "balanced" },
        { text: "I'll probably just pay the listed price", type: "book" }
      ]
    },
    {
      id: 4,
      text: "Someone's being passive-aggressive to you. You:",
      options: [
        { text: "Immediately sense the energy and adjust my approach", type: "street" },
        { text: "Might not notice unless it's really obvious", type: "book" },
        { text: "Notice but analyze why before responding", type: "balanced" },
        { text: "Take things at face value usually", type: "book" }
      ]
    },
    {
      id: 5,
      text: "How comfortable are you with ambiguity and uncertainty?",
      options: [
        { text: "Thrive in it - I adapt quickly to changing situations", type: "street" },
        { text: "Prefer clear rules and expectations", type: "book" },
        { text: "Can handle it but prefer some structure", type: "balanced" },
        { text: "Find it stressful and uncomfortable", type: "book" }
      ]
    },
    {
      id: 6,
      text: "You need directions to somewhere new. You:",
      options: [
        { text: "Ask a local or figure it out as I go", type: "street" },
        { text: "Study the map thoroughly before leaving", type: "book" },
        { text: "Use GPS but pay attention to learn the area", type: "balanced" },
        { text: "Follow GPS step by step without really processing it", type: "book" }
      ]
    },
    {
      id: 7,
      text: "In school or work, you were/are better at:",
      options: [
        { text: "Practical projects, networking, and real-world applications", type: "street" },
        { text: "Exams, research papers, and theoretical concepts", type: "book" },
        { text: "Both equally, depending on the subject", type: "balanced" },
        { text: "Tests and memorization-based assessments", type: "book" }
      ]
    },
    {
      id: 8,
      text: "How quickly can you tell if someone is lying to you?",
      options: [
        { text: "Almost immediately - body language gives it away", type: "street" },
        { text: "Need time to analyze inconsistencies in their story", type: "book" },
        { text: "Sometimes I catch it, sometimes I don't", type: "balanced" },
        { text: "I'm often surprised when I find out later", type: "book" }
      ]
    },
    {
      id: 9,
      text: "If something breaks at home, your first instinct is to:",
      options: [
        { text: "Try to fix it myself first", type: "street" },
        { text: "Research the problem before touching anything", type: "book" },
        { text: "YouTube tutorial while I work on it", type: "balanced" },
        { text: "Call a professional immediately", type: "book" }
      ]
    },
    {
      id: 10,
      text: "How do you usually make important life decisions?",
      options: [
        { text: "Trust my gut - it's rarely wrong", type: "street" },
        { text: "Make pros/cons lists and analyze all data", type: "book" },
        { text: "Combination of research and intuition", type: "balanced" },
        { text: "Consult experts and follow best practices", type: "book" }
      ]
    }
  ],
  results: {
    street: {
      type: "Street Smart Savant",
      description: "You've got that real-world intelligence that can't be taught in classrooms! You read people like books, navigate social situations with ease, and your gut instincts are almost always right. You learn by doing, adapt quickly, and thrive in unpredictable situations. Entrepreneurs, salespeople, and leaders often share this intelligence style!",
      traits: ["Social intuition", "Adaptability", "Practical problem-solving", "People-reading skills"],
      advice: "Your street smarts are powerful! Consider pairing them with some structured learning in areas you're curious about - the combo is unstoppable."
    },
    book: {
      type: "Book Smart Intellectual",
      description: "You're a knowledge sponge! You love learning, research, and understanding things deeply. Your strength is in structured thinking, analysis, and absorbing information efficiently. You might overthink social situations, but when it comes to facts, theories, and understanding complex topics, you're exceptional!",
      traits: ["Deep knowledge", "Analytical thinking", "Research skills", "Structured learning"],
      advice: "Your book smarts are valuable! Try putting yourself in more unstructured social situations to develop complementary street smarts."
    },
    balanced: {
      type: "Balanced Brainiac",
      description: "You've got the best of both worlds! You can hold your own in academic discussions AND navigate the real world effectively. You know when to trust your gut and when to do research. This balanced intelligence makes you adaptable to almost any situation life throws at you.",
      traits: ["Versatile intelligence", "Situational awareness", "Flexible thinking", "Well-rounded skills"],
      advice: "You're rare! Keep developing both sides - your adaptability is your superpower in a world that values different kinds of intelligence."
    }
  }
};
