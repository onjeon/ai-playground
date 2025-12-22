// How Competitive Are You? - Viral personality test for American English users

export const testData = {
  id: "personality-competitive-level",
  title: "How Competitive Are You?",
  description: "Are you here to win or just here to have fun? Let's see how competitive you really are!",
  questions: [
    {
      id: 1,
      text: "It's board game night with friends. Your energy:",
      options: [
        { text: "I'm here to DOMINATE. Losing is not an option", type: "ultra" },
        { text: "I want to win but I'll still have fun if I don't", type: "competitive" },
        { text: "It's about the hangout, winning is just a bonus", type: "casual" },
        { text: "I genuinely don't care who wins, just happy to play", type: "chill" }
      ]
    },
    {
      id: 2,
      text: "Someone is better than you at something you're good at. Your reaction:",
      options: [
        { text: "Time to practice until I'm better than them", type: "ultra" },
        { text: "Motivated to improve! Healthy competition", type: "competitive" },
        { text: "Good for them! Maybe they can teach me something", type: "casual" },
        { text: "Cool, there's room for multiple talented people", type: "chill" }
      ]
    },
    {
      id: 3,
      text: "How do you feel about participation trophies?",
      options: [
        { text: "An insult to actual achievement. Winners earn recognition", type: "ultra" },
        { text: "I get the intent but it does diminish the meaning", type: "competitive" },
        { text: "Nice for kids, not necessary for adults", type: "casual" },
        { text: "Celebrating effort is wholesome, I support it", type: "chill" }
      ]
    },
    {
      id: 4,
      text: "You lose at something you really wanted to win. Your internal response:",
      options: [
        { text: "Replay every mistake in my head for the next week", type: "ultra" },
        { text: "Disappointed but analyzing what went wrong to do better", type: "competitive" },
        { text: "Bummed briefly, then move on. It's just a game", type: "casual" },
        { text: "Congrats to them! It was fun either way", type: "chill" }
      ]
    },
    {
      id: 5,
      text: "Your approach to workplace performance reviews:",
      options: [
        { text: "I need to be top ranked. Anything less is failure", type: "ultra" },
        { text: "I want strong feedback and a path to the top", type: "competitive" },
        { text: "Good enough to keep my job and get raises", type: "casual" },
        { text: "I focus on personal growth, not rankings", type: "chill" }
      ]
    },
    {
      id: 6,
      text: "Playing video games with friends. How serious are you?",
      options: [
        { text: "Headset on, callouts ready, playing to win", type: "ultra" },
        { text: "Trying to win but can laugh when things go wrong", type: "competitive" },
        { text: "Mostly button mashing and vibing", type: "casual" },
        { text: "I'm here for the chaos and the company", type: "chill" }
      ]
    },
    {
      id: 7,
      text: "Someone challenges you to something you've never tried. You:",
      options: [
        { text: "Accept and practice in secret until I can beat them", type: "ultra" },
        { text: "Accept! Excited for a new challenge", type: "competitive" },
        { text: "Sure, but no promises - I've never done this", type: "casual" },
        { text: "Pass. I don't need to prove anything", type: "chill" }
      ]
    },
    {
      id: 8,
      text: "Your relationship with leaderboards and rankings:",
      options: [
        { text: "I need to be #1 or what's the point?", type: "ultra" },
        { text: "I check them and aim for top 10 at least", type: "competitive" },
        { text: "Glance occasionally, not obsessed", type: "casual" },
        { text: "Never look. External validation isn't my thing", type: "chill" }
      ]
    },
    {
      id: 9,
      text: "You're playing a friendly game of pickup basketball. Your intensity:",
      options: [
        { text: "Full court press. Friendly doesn't mean I won't destroy you", type: "ultra" },
        { text: "Playing hard but keeping it fun", type: "competitive" },
        { text: "Light jog, maybe score if the opportunity's there", type: "casual" },
        { text: "I'm mostly here for the exercise and socializing", type: "chill" }
      ]
    },
    {
      id: 10,
      text: "How do you feel when you win something?",
      options: [
        { text: "VINDICATION. This is what I live for", type: "ultra" },
        { text: "Genuinely happy and proud of myself", type: "competitive" },
        { text: "Nice! Good feeling, then on to the next thing", type: "casual" },
        { text: "Happy, but I'd feel the same if I lost. Process over outcome", type: "chill" }
      ]
    }
  ],
  results: {
    ultra: {
      type: "The Ruthless Champion",
      description: "Second place is first loser, and you know it. Winning isn't everything - it's the ONLY thing. Your competitive fire burns with the intensity of a thousand suns. Board games have ended friendships in your presence. You're terrifying in the best way.",
      traits: ["Intense", "Driven", "Relentless", "Slightly terrifying"],
      advice: "Your drive is incredible and probably makes you very successful! But remember: sometimes the real win is the relationships along the way. Ease up occasionally so people still want to play with you. Winning alone isn't as sweet."
    },
    competitive: {
      type: "The Healthy Competitor",
      description: "You play to win but you're not losing sleep over losses. Competition motivates you without consuming you. You can celebrate others' victories while still wanting your own. You're the ideal sports teammate and probably good at team projects.",
      traits: ["Motivated", "Driven", "Good sport", "Balanced"],
      advice: "You've found the perfect balance of competitive fire and sportsmanship! Keep channeling that energy productively. Your healthy relationship with competition will serve you well in all areas of life."
    },
    casual: {
      type: "The Easygoing Participant",
      description: "You'll play to win, sure, but your happiness doesn't depend on it. You're there for the experience, the company, and the fun. You make game nights enjoyable for everyone because you don't flip tables when you lose. You're the vibes person.",
      traits: ["Relaxed", "Fun-loving", "Social", "Low-pressure"],
      advice: "Your chill energy makes you wonderful to be around! Don't let anyone tell you that you need to be more competitive. But if something does matter to you, it's okay to go hard for it. You can turn it on when needed."
    },
    chill: {
      type: "The Zen Non-Competitor",
      description: "Competition? In this economy? You're here for connection, joy, and personal growth - not arbitrary rankings. You've transcended the need to prove yourself through winning. Either you're incredibly enlightened or you just genuinely don't care. Either way, respect.",
      traits: ["Peaceful", "Unbothered", "Self-secure", "Process-focused"],
      advice: "Your inner peace is admirable and honestly enviable! Some competitive drive can be useful for motivation and achievement though. Find something you care enough about to push yourself - that fire can be channeled for good."
    }
  }
};
