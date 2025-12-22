// What's Your Dating Style? - Viral relationship test for American English users

export const testData = {
  id: "relationship-dating-style",
  title: "What's Your Dating Style?",
  description: "Are you a hopeless romantic or a calculated player? Find out how you really date!",
  questions: [
    {
      id: 1,
      text: "You match with someone on a dating app. What's your opening move?",
      options: [
        { text: "Comment on something specific from their profile", type: "genuine" },
        { text: "Send a flirty but low-effort message to test the waters", type: "casual" },
        { text: "Wait for them to message first... power move", type: "mysterious" },
        { text: "Already planning your wedding venue in your head", type: "romantic" }
      ]
    },
    {
      id: 2,
      text: "First date energy. Where are we going?",
      options: [
        { text: "Coffee or a walk - low stakes, easy exit if needed", type: "casual" },
        { text: "Dinner at a nice restaurant - I'm here for a real connection", type: "romantic" },
        { text: "Something fun and active - let's see if we vibe", type: "genuine" },
        { text: "Somewhere moody with good lighting... for the aesthetic", type: "mysterious" }
      ]
    },
    {
      id: 3,
      text: "You've been on three dates and they haven't texted today. Your reaction?",
      options: [
        { text: "Text them first, who cares about 'rules'", type: "genuine" },
        { text: "Spiral internally but act completely unbothered", type: "mysterious" },
        { text: "Meh, I'm talking to other people anyway", type: "casual" },
        { text: "Already writing sad poetry about being ghosted", type: "romantic" }
      ]
    },
    {
      id: 4,
      text: "How do you feel about 'the talking stage'?",
      options: [
        { text: "It's exhausting - can we just date or not?", type: "genuine" },
        { text: "I love it, the mystery and tension are *chef's kiss*", type: "mysterious" },
        { text: "Fine with me, no pressure, no labels", type: "casual" },
        { text: "Already thinking about anniversary gifts during it", type: "romantic" }
      ]
    },
    {
      id: 5,
      text: "Red flag alert: They take 6 hours to respond but are always online. You...",
      options: [
        { text: "Match their energy - you can wait too", type: "mysterious" },
        { text: "Call them out directly - communication is key", type: "genuine" },
        { text: "Start swiping again, you're not exclusive anyway", type: "casual" },
        { text: "Convince yourself they're just 'really busy'", type: "romantic" }
      ]
    },
    {
      id: 6,
      text: "They want to be 'exclusive' after 2 weeks. Your gut says...",
      options: [
        { text: "YES, I've been ready since date one", type: "romantic" },
        { text: "Let's keep getting to know each other first", type: "genuine" },
        { text: "Whoa, slow down there, partner", type: "casual" },
        { text: "I need to think about it (adds to my intrigue)", type: "mysterious" }
      ]
    },
    {
      id: 7,
      text: "Your friends ask about someone you've been seeing. You say...",
      options: [
        { text: "Full detailed analysis with screenshots", type: "romantic" },
        { text: "Just a chill update, nothing too deep", type: "casual" },
        { text: "They don't even know I'm dating someone", type: "mysterious" },
        { text: "The honest truth about how it's going", type: "genuine" }
      ]
    },
    {
      id: 8,
      text: "Date outfit: What's the vibe?",
      options: [
        { text: "Something that says 'I didn't try too hard but I look amazing'", type: "mysterious" },
        { text: "Comfortable but cute - I want to be myself", type: "genuine" },
        { text: "My main character fit, obviously", type: "romantic" },
        { text: "Whatever's clean and appropriate", type: "casual" }
      ]
    },
    {
      id: 9,
      text: "Post-date text etiquette. When do you reach out?",
      options: [
        { text: "Immediately if I had fun - why play games?", type: "genuine" },
        { text: "Wait exactly long enough to seem busy", type: "mysterious" },
        { text: "Whenever I remember, no strict timeline", type: "casual" },
        { text: "Draft, delete, draft, delete, send at 11:11 for luck", type: "romantic" }
      ]
    },
    {
      id: 10,
      text: "Honestly, what are you looking for right now?",
      options: [
        { text: "My person - I'm ready for something real", type: "romantic" },
        { text: "Good vibes, no pressure, see where it goes", type: "casual" },
        { text: "A genuine connection, whatever form that takes", type: "genuine" },
        { text: "Someone who can keep up with my energy", type: "mysterious" }
      ]
    }
  ],
  results: {
    romantic: {
      type: "The Hopeless Romantic",
      description: "You fall hard, fast, and with your whole heart. You're not afraid of love - you're actively searching for your person. Your dating apps are for finding 'the one,' not hookups. You believe in grand gestures, soulmates, and that the right relationship will just 'click.'",
      traits: ["Heart on your sleeve", "Future-focused", "Emotionally invested early", "Believes in 'the one'"],
      advice: "Your openness is beautiful, but protect your energy. Not everyone deserves access to your heart so quickly. Let people earn your depth."
    },
    casual: {
      type: "The Chill Dater",
      description: "You're keeping it light and breezy. Dating is fun for you, not a full-time job. You're not in a rush to settle down and you definitely don't catch feelings easily. You enjoy meeting new people without the pressure of 'where is this going?'",
      traits: ["Low-pressure energy", "Multiple options open", "Emotionally guarded", "Lives in the moment"],
      advice: "Keeping it casual is valid, but don't use it as armor. If something real comes along, don't run from it just because it's easier to stay surface-level."
    },
    genuine: {
      type: "The Authentic Connector",
      description: "You date like a normal human being - no games, no tricks. You say what you mean and mean what you say. You're looking for real connection over perfect timing and you'd rather be vulnerable than play it safe. Healthy king/queen behavior.",
      traits: ["Direct communicator", "Values authenticity", "Emotionally available", "Secure attachment vibes"],
      advice: "Your approach is refreshing! Just remember that not everyone operates at your level of emotional maturity. Be patient with people who are still learning."
    },
    mysterious: {
      type: "The Strategic Dater",
      description: "You've mastered the art of creating intrigue. You know when to pull back, when to lean in, and how to keep them guessing. You curate your image carefully and never reveal too much too soon. You date with your head as much as your heart.",
      traits: ["Calculated moves", "Alluring presence", "Emotionally controlled", "Keeps people guessing"],
      advice: "Mystery is attractive, but don't let it become emotional unavailability. Sometimes the strongest move is letting someone actually know you."
    }
  }
};
