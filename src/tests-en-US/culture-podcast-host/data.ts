// What Kind of Podcast Would You Host? - Viral modern culture test for American English users

export const testData = {
  id: "culture-podcast-host",
  title: "What Kind of Podcast Would You Host?",
  description: "Everyone has a podcast idea. But what's YOUR podcast personality? Let's find your audio calling.",
  questions: [
    {
      id: 1,
      text: "When you're in a group conversation, you usually:",
      options: [
        { text: "Share a wild story that derails everything (worth it)", type: "chaotic" },
        { text: "Ask follow-up questions - I want to UNDERSTAND", type: "interview" },
        { text: "Drop knowledge bombs on topics I know well", type: "educational" },
        { text: "Make everyone laugh with observations", type: "comedy" }
      ]
    },
    {
      id: 2,
      text: "Your ideal podcast episode length:",
      options: [
        { text: "3 hours. We go where the conversation goes.", type: "chaotic" },
        { text: "1 hour - enough to go deep but stays focused", type: "interview" },
        { text: "20-30 minutes - efficient, valuable, done", type: "educational" },
        { text: "However long it takes to land the jokes", type: "comedy" }
      ]
    },
    {
      id: 3,
      text: "You disagree with someone's hot take. You:",
      options: [
        { text: "Debate passionately - conflict is content", type: "chaotic" },
        { text: "Ask questions to understand their perspective first", type: "interview" },
        { text: "Cite research and data to counter their point", type: "educational" },
        { text: "Roast them lovingly and move on", type: "comedy" }
      ]
    },
    {
      id: 4,
      text: "Pick your podcast title vibe:",
      options: [
        { text: "'Unhinged and Unbothered'", type: "chaotic" },
        { text: "'Deep Dive Conversations'", type: "interview" },
        { text: "'Actually, Here's The Thing'", type: "educational" },
        { text: "'Crying Laughing Pod'", type: "comedy" }
      ]
    },
    {
      id: 5,
      text: "Your prep style before recording:",
      options: [
        { text: "Prep? We're just gonna talk.", type: "chaotic" },
        { text: "Research the guest thoroughly, prepare thoughtful questions", type: "interview" },
        { text: "Outline main points, fact-check everything twice", type: "educational" },
        { text: "Write some bits but leave room for improv", type: "comedy" }
      ]
    },
    {
      id: 6,
      text: "What makes you NEED to talk about something?",
      options: [
        { text: "Drama. Tea. Unhinged takes.", type: "chaotic" },
        { text: "Fascinating people and their stories", type: "interview" },
        { text: "Wanting people to actually understand something", type: "educational" },
        { text: "Finding the absurdity in everyday life", type: "comedy" }
      ]
    },
    {
      id: 7,
      text: "Your ideal co-host:",
      options: [
        { text: "My unhinged best friend who enables my chaos", type: "chaotic" },
        { text: "I'd rather fly solo or rotate guests", type: "interview" },
        { text: "Someone knowledgeable who adds different expertise", type: "educational" },
        { text: "Someone who can riff and yes-and me", type: "comedy" }
      ]
    },
    {
      id: 8,
      text: "You realize you've been talking for 20 minutes. Reaction:",
      options: [
        { text: "And I have 3 more tangents lined up", type: "chaotic" },
        { text: "Time to bring it back to my guest", type: "interview" },
        { text: "Wrap up this point and move to the next topic", type: "educational" },
        { text: "Has it been funny? If yes, keep going", type: "comedy" }
      ]
    },
    {
      id: 9,
      text: "Your audience would tune in because they:",
      options: [
        { text: "Never know what unhinged thing I'll say next", type: "chaotic" },
        { text: "Love my thoughtful, revealing conversations", type: "interview" },
        { text: "Actually learn something valuable", type: "educational" },
        { text: "Need to laugh and forget their problems", type: "comedy" }
      ]
    },
    {
      id: 10,
      text: "What's your podcast dream?",
      options: [
        { text: "Build a community of equally chaotic listeners", type: "chaotic" },
        { text: "Have meaningful conversations that go viral", type: "interview" },
        { text: "Become THE go-to source for my topic", type: "educational" },
        { text: "Make people's commutes actually enjoyable", type: "comedy" }
      ]
    }
  ],
  results: {
    chaotic: {
      type: "The Unfiltered Host",
      description: "Your podcast would be UNHINGED in the best way. No script, no filter, just vibes. Episodes would be 3 hours long and cover 47 topics. Your fans would say 'they're just like us' because you ARE. Warning: would definitely get cancelled for something taken out of context.",
      traits: ["Authentic chaos", "No filter needed", "Tangent king/queen", "Parasocial bestie energy"],
      advice: "Your authenticity is your superpower. Just maybe get someone to listen before you post to catch the career-ending stuff. Editing exists for a reason."
    },
    interview: {
      type: "The Deep Diver",
      description: "You'd be the host that gets guests to reveal things they've never told anyone. Your questions would go DEEP. Think Barbara Walters meets Joe Rogan but more emotionally intelligent. Your episodes would get shared with 'you HAVE to listen to this' energy.",
      traits: ["Emotionally intelligent", "Great listener", "Thoughtful questioner", "Trust-builder"],
      advice: "Your curiosity is genuine and people feel it. Just remember: you can have opinions too! Don't let guests run away with the conversation completely."
    },
    educational: {
      type: "The Knowledge Dropper",
      description: "Your podcast would make people smarter. Every episode = actually useful information. You'd be the one correcting misinformation on the internet (god's work). People would recommend your podcast saying 'I learned so much from this.'",
      traits: ["Research obsessed", "Clarity-focused", "Myth buster", "Actually helpful"],
      advice: "Your commitment to accuracy is rare and valuable. Just don't forget to keep it entertaining - being right AND boring means no one hears the message."
    },
    comedy: {
      type: "The Humor Machine",
      description: "Your podcast would be therapy disguised as entertainment. Making people laugh while also making them think? That's your whole thing. Your listeners would say 'I cried laughing on the bus and people stared.' That's a compliment.",
      traits: ["Quick wit", "Natural entertainer", "Finds absurdity everywhere", "Joy spreader"],
      advice: "Your ability to find humor is a gift. Just know when to get serious too - the funniest people often have the most important things to say when they stop joking."
    }
  }
};
