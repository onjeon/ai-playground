// Your Relationship Texting Habits - Viral relationship test for American English users

export const testData = {
  id: "relationship-texting-habits",
  title: "Your Relationship Texting Habits",
  description: "Do you double text or leave them on read? Your texting says more than you think!",
  questions: [
    {
      id: 1,
      text: "They text you 'hey.' Your response time?",
      options: [
        { text: "Immediately - I was waiting by my phone anyway", type: "eager" },
        { text: "Strategic delay - can't seem too available", type: "strategic" },
        { text: "Whenever I see it, no games", type: "casual" },
        { text: "Never - 'hey' doesn't deserve a response", type: "selective" }
      ]
    },
    {
      id: 2,
      text: "Your typing style when texting your crush/partner:",
      options: [
        { text: "Perfect grammar, carefully crafted messages", type: "strategic" },
        { text: "Chaos - typos, stream of consciousness", type: "eager" },
        { text: "Short and simple, get to the point", type: "selective" },
        { text: "Chill and casual, lowercase energy", type: "casual" }
      ]
    },
    {
      id: 3,
      text: "They haven't responded in 4 hours. You...",
      options: [
        { text: "Double text because life is short", type: "eager" },
        { text: "Start manifesting their response", type: "strategic" },
        { text: "Assume they're busy and go about my day", type: "casual" },
        { text: "Consider them dead to me", type: "selective" }
      ]
    },
    {
      id: 4,
      text: "Good morning texts. Thoughts?",
      options: [
        { text: "Send them every single day", type: "eager" },
        { text: "Only sometimes, to keep them special", type: "strategic" },
        { text: "If I think of them, sure", type: "casual" },
        { text: "Not my thing - let's talk when there's something to say", type: "selective" }
      ]
    },
    {
      id: 5,
      text: "Emojis in romantic texts:",
      options: [
        { text: "Constant - I'm communicating through emojis", type: "eager" },
        { text: "Carefully placed for maximum effect", type: "strategic" },
        { text: "Here and there, nothing crazy", type: "casual" },
        { text: "Rarely - I'm not 14", type: "selective" }
      ]
    },
    {
      id: 6,
      text: "They leave you on read. Your reaction?",
      options: [
        { text: "Spiral and check if my message was weird", type: "eager" },
        { text: "Leave them on read next time to even the score", type: "strategic" },
        { text: "Meh, people get busy", type: "casual" },
        { text: "Make a mental note and lower investment", type: "selective" }
      ]
    },
    {
      id: 7,
      text: "Late night texts with someone you like:",
      options: [
        { text: "Stay up way too late talking to them", type: "eager" },
        { text: "End at a strategic time to leave them wanting more", type: "strategic" },
        { text: "Sleep when I'm tired, text when I'm not", type: "casual" },
        { text: "I have a strict bedtime, good night", type: "selective" }
      ]
    },
    {
      id: 8,
      text: "You see they're typing... then stop. You...",
      options: [
        { text: "WHAT WERE THEY GOING TO SAY?!", type: "eager" },
        { text: "Start typing too to create tension", type: "strategic" },
        { text: "Didn't notice honestly", type: "casual" },
        { text: "If they wanted to say something, they would", type: "selective" }
      ]
    },
    {
      id: 9,
      text: "Texting vs calling:",
      options: [
        { text: "Text all day, call sometimes too", type: "eager" },
        { text: "Text to build anticipation, call for connection", type: "strategic" },
        { text: "Whichever works, no preference", type: "casual" },
        { text: "Prefer calls - texting is inefficient", type: "selective" }
      ]
    },
    {
      id: 10,
      text: "Overall, how important is texting in your relationships?",
      options: [
        { text: "VERY - it's how we stay connected constantly", type: "eager" },
        { text: "Important, but the vibes matter most", type: "strategic" },
        { text: "Nice but not essential", type: "casual" },
        { text: "In-person connection matters more", type: "selective" }
      ]
    }
  ],
  results: {
    eager: {
      type: "The Enthusiastic Texter",
      description: "You text like you love - with your whole heart. You reply quickly, double text freely, and your phone is always in hand when you're into someone. You might worry you're 'too much' but honestly? The right person will match your energy.",
      traits: ["Quick responder", "Double texts freely", "Very available", "Wears heart on sleeve"],
      advice: "Your enthusiasm is cute, but make sure it's matched. If you're always the one initiating, that's information. Your energy deserves to be reciprocated."
    },
    strategic: {
      type: "The Calculated Texter",
      description: "You've read the articles about 'texting psychology' and you apply them. Response timing is an art, and you're the artist. You know how to create intrigue, build tension, and never seem too available. Dating is a game and you're playing to win.",
      traits: ["Strategic with timing", "Creates intrigue", "Thinks before texting", "Plays it cool"],
      advice: "Strategy is fine early on, but eventually you have to drop the act. Real connection requires authenticity - don't let the games become a barrier to intimacy."
    },
    casual: {
      type: "The Chill Texter",
      description: "You text like a normal, emotionally healthy person who doesn't overthink everything. You respond when you can, don't stress about timing, and don't read into every little detail. Your texting energy is low-key and sustainable.",
      traits: ["Laid-back approach", "No games", "Consistent but not constant", "Doesn't overthink"],
      advice: "Your chill energy is refreshing! Just make sure your partner knows you're interested - some people need more reassurance than your casual style provides."
    },
    selective: {
      type: "The Selective Texter",
      description: "You're not a texter by nature. You prefer quality conversations over constant back-and-forth, and you're not going to waste words on small talk. You'd rather have one meaningful conversation than a hundred 'wyd' texts.",
      traits: ["Values quality over quantity", "Not glued to phone", "Direct communicator", "Prefers meaningful convos"],
      advice: "Your selectivity is valid, but some people feel loved through consistent communication. Find a balance that works for you AND your partner."
    }
  }
};
