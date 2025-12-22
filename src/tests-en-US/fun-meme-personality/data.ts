// What's Your Meme Personality? - Fun viral test

export const testData = {
  id: "fun-meme-personality",
  title: "What's Your Meme Personality?",
  description: "Memes are a language. What dialect do you speak? Are you a creator, curator, or confused consumer?",
  questions: [
    {
      id: 1,
      text: "Your relationship with meme trends:",
      options: [
        { text: "I know them before they're mainstream", type: "creator" },
        { text: "I catch them at peak popularity", type: "curator" },
        { text: "I understand them eventually, with context", type: "appreciator" },
        { text: "I send them to younger relatives asking 'what does this mean?'", type: "confused" }
      ]
    },
    {
      id: 2,
      text: "You see a perfect meme opportunity in real life. You:",
      options: [
        { text: "Create the meme immediately, post it, go viral", type: "creator" },
        { text: "Find an existing meme that fits and share it", type: "curator" },
        { text: "Laugh at the situation and move on", type: "appreciator" },
        { text: "Meme opportunity? What does that even mean?", type: "confused" }
      ]
    },
    {
      id: 3,
      text: "Your group chat meme contributions are:",
      options: [
        { text: "Legendary. I'm the meme supplier", type: "creator" },
        { text: "Solid - I share good ones I find", type: "curator" },
        { text: "Occasional - mostly reacting to others' memes", type: "appreciator" },
        { text: "Rare. I usually don't get the jokes", type: "confused" }
      ]
    },
    {
      id: 4,
      text: "A meme format is 'dead.' Your opinion:",
      options: [
        { text: "I already moved on to the next one weeks ago", type: "creator" },
        { text: "Time to retire it from my saved folder", type: "curator" },
        { text: "I just discovered it... is that bad?", type: "appreciator" },
        { text: "How does a meme 'die'? I don't understand", type: "confused" }
      ]
    },
    {
      id: 5,
      text: "Your meme folder on your phone is:",
      options: [
        { text: "Organized by format, vibe, and intended recipient", type: "curator" },
        { text: "Mostly OC I've created for various situations", type: "creator" },
        { text: "A chaotic collection of screenshots", type: "appreciator" },
        { text: "What meme folder?", type: "confused" }
      ]
    },
    {
      id: 6,
      text: "Someone uses a meme incorrectly. You:",
      options: [
        { text: "Cringe internally at their meme illiteracy", type: "creator" },
        { text: "Gently correct them with the proper usage", type: "curator" },
        { text: "Don't notice - a meme is a meme", type: "appreciator" },
        { text: "I can't tell the difference anyway", type: "confused" }
      ]
    },
    {
      id: 7,
      text: "How quickly do you 'get' a new meme format?",
      options: [
        { text: "Immediately - I speak fluent meme", type: "creator" },
        { text: "After seeing a few examples, I'm in", type: "curator" },
        { text: "Sometimes need it explained but then I enjoy it", type: "appreciator" },
        { text: "I usually need extensive explanation", type: "confused" }
      ]
    },
    {
      id: 8,
      text: "Your favorite meme type:",
      options: [
        { text: "Niche, absurdist humor that most won't get", type: "creator" },
        { text: "Relatable content that hits for everyone", type: "curator" },
        { text: "Whatever makes me laugh, I'm not picky", type: "appreciator" },
        { text: "The ones with animals being cute", type: "confused" }
      ]
    },
    {
      id: 9,
      text: "When someone says 'this is so meme-able,' you:",
      options: [
        { text: "Already have three ideas for how to meme it", type: "creator" },
        { text: "Know exactly what template would work", type: "curator" },
        { text: "Understand what they mean conceptually", type: "appreciator" },
        { text: "Smile and nod while being confused", type: "confused" }
      ]
    },
    {
      id: 10,
      text: "Years from now, how will you explain current memes?",
      options: [
        { text: "I'll write the academic papers on meme evolution", type: "creator" },
        { text: "I'll have archives to reference", type: "curator" },
        { text: "I'll vaguely remember they were funny", type: "appreciator" },
        { text: "I won't - I barely understand them now", type: "confused" }
      ]
    }
  ],
  results: {
    creator: {
      type: "The Meme Lord",
      description: "You don't just consume memes - you CREATE them. You see the matrix of internet humor and you manipulate it. Your original content has probably made someone snort-laugh unexpectedly. You're ahead of trends, speaking a language you helped develop. The internet thanks you for your service.",
      traits: ["Creative", "Trendy", "Original", "Chronically online"],
      advice: "Your meme powers are strong! Use them for good. And maybe touch grass occasionally - the outside world also has humor potential. Balance creating content with actually living life."
    },
    curator: {
      type: "The Meme Librarian",
      description: "You're the friend everyone sends memes to, and the one who always has the perfect meme for every situation. Your collection is vast, your timing is impeccable. You don't create the memes, but you DISTRIBUTE them. You're the middleman keeping internet culture alive.",
      traits: ["Organized", "Well-connected", "Tasteful", "Shareable"],
      advice: "Your curation skills are valuable! Keep building that library. Consider giving credit to creators when you share - and maybe try making one yourself sometime. You clearly understand what works."
    },
    appreciator: {
      type: "The Meme Enthusiast",
      description: "You enjoy memes without being consumed by them. You laugh, you share occasionally, you don't always get the latest ones immediately. You're proof that you can appreciate meme culture without making it your personality. A healthy relationship with internet humor.",
      traits: ["Casual", "Balanced", "Good-humored", "Normal"],
      advice: "Your balanced approach is refreshing! You get enough memes to participate but not so many that you're overwhelmed. Keep enjoying the fun parts without the pressure to keep up with every trend."
    },
    confused: {
      type: "The Meme Tourist",
      description: "You're visiting Meme Land as a tourist, not a resident. Things are strange here, references go over your head, and you're not sure why a picture of a cat is supposed to be funny. But you're trying! Your confusion is actually kind of endearing. Never stop asking questions.",
      traits: ["Curious", "Lost", "Trying", "Wholesome"],
      advice: "It's okay not to get every meme! The internet moves fast. Ask younger friends to explain things, and don't pretend to understand when you don't. Your honest confusion is actually more entertaining than fake meme literacy."
    }
  }
};
