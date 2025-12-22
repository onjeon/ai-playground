// Your TikTok Personality - Viral modern culture test for American English users

export const testData = {
  id: "culture-tiktok-personality",
  title: "Your TikTok Personality",
  description: "Are you the algorithm's favorite child or just scrolling at 3am? Let's find out who you really are on TikTok!",
  questions: [
    {
      id: 1,
      text: "What's your default TikTok scrolling position?",
      options: [
        { text: "In bed, phone 2 inches from my face at 2am", type: "lurker" },
        { text: "Showing my phone to whoever's near: 'Wait wait watch this'", type: "sharer" },
        { text: "In front of a ring light, ready to duet", type: "creator" },
        { text: "Standing in line somewhere killing time", type: "casual" }
      ]
    },
    {
      id: 2,
      text: "How many drafts do you have saved?",
      options: [
        { text: "Zero - I don't make TikToks", type: "lurker" },
        { text: "A few screen recordings of funny videos to send people", type: "sharer" },
        { text: "47 videos I'll never post because they're not perfect", type: "creator" },
        { text: "Like 3? I don't really check", type: "casual" }
      ]
    },
    {
      id: 3,
      text: "A trending sound is blowing up. Your move:",
      options: [
        { text: "Watch 500 versions of it until I'm sick of it", type: "lurker" },
        { text: "Send the best ones to everyone I know", type: "sharer" },
        { text: "Already filmed my version, scheduling it for optimal engagement", type: "creator" },
        { text: "I'll see it next week when it's already dead", type: "casual" }
      ]
    },
    {
      id: 4,
      text: "What does your For You Page look like?",
      options: [
        { text: "Extremely niche content the algorithm knows I can't resist", type: "lurker" },
        { text: "Viral videos I can share with specific friends", type: "sharer" },
        { text: "Content from my niche + analytics tips + ring light ads", type: "creator" },
        { text: "Random stuff - cooking, dogs, drama I don't understand", type: "casual" }
      ]
    },
    {
      id: 5,
      text: "Someone you know goes viral. You:",
      options: [
        { text: "Watch it 50 times analyzing why it worked", type: "lurker" },
        { text: "Share it everywhere and claim you knew them 'before'", type: "sharer" },
        { text: "Feel a mix of happiness and existential crisis about my own content", type: "creator" },
        { text: "Cool for them! *keeps scrolling*", type: "casual" }
      ]
    },
    {
      id: 6,
      text: "Your phone dies mid-scroll. Immediate reaction:",
      options: [
        { text: "Genuinely distressed - I was in a FLOW", type: "lurker" },
        { text: "Guess I'll actually talk to these people around me", type: "sharer" },
        { text: "Panicked - my engagement window for posting!", type: "creator" },
        { text: "Oh well, time to do literally anything else", type: "casual" }
      ]
    },
    {
      id: 7,
      text: "Your ideal TikTok fame level:",
      options: [
        { text: "None - I'm here to consume, not be consumed", type: "lurker" },
        { text: "I just want my friends to see my content", type: "sharer" },
        { text: "Full-time creator, brand deals, the whole thing", type: "creator" },
        { text: "I don't think about it really", type: "casual" }
      ]
    },
    {
      id: 8,
      text: "Your screen time report comes in. Reaction:",
      options: [
        { text: "We don't talk about that number", type: "lurker" },
        { text: "It's social! I'm connecting with people!", type: "sharer" },
        { text: "That's called WORKING, it doesn't count", type: "creator" },
        { text: "It's fine, maybe an hour a day", type: "casual" }
      ]
    },
    {
      id: 9,
      text: "What's your TikTok comment section energy?",
      options: [
        { text: "Silent observer - I like but never comment", type: "lurker" },
        { text: "Tag my friends so they can see this", type: "sharer" },
        { text: "Engage! Reply! Build community! The algorithm rewards interaction!", type: "creator" },
        { text: "Occasional 'lol' or fire emoji", type: "casual" }
      ]
    },
    {
      id: 10,
      text: "You have a genuinely good TikTok idea. What happens?",
      options: [
        { text: "It lives and dies in my head where it belongs", type: "lurker" },
        { text: "I tell my friends about it and show them who did it better", type: "sharer" },
        { text: "Scripted, filmed, edited, scheduled by end of day", type: "creator" },
        { text: "I forget it 10 seconds later", type: "casual" }
      ]
    }
  ],
  results: {
    lurker: {
      type: "The Deep Scroller",
      description: "You've been on BookTok, CleanTok, ADHD-tok, and 47 other sides of TikTok. Your algorithm knows you better than your therapist. You consume content like it's your job, but no one will ever see your face on anyone's FYP. Your screen time is a war crime.",
      traits: ["Professional consumer", "Algorithm's bestie", "Zero digital footprint", "Excellent taste"],
      advice: "Your commitment to consuming content is honestly impressive. Maybe touch grass occasionally? Or don't - the algorithm misses you after 2 hours."
    },
    sharer: {
      type: "The Human Algorithm",
      description: "You're the friend who shares the good TikToks. Your group chats are 90% TikTok links. You're like a content curator, but for your friends, and you take it personally when they don't watch what you send. You've said 'did you see that TikTok I sent?' at least twice today.",
      traits: ["Social connector", "Excellent taste", "Slightly offended no one watched your link", "Group chat MVP"],
      advice: "You're doing the lord's work sharing the good stuff. Just... maybe check if people actually watched your last 7 links before sending more?"
    },
    creator: {
      type: "The Content Machine",
      description: "You've got a ring light. You know what 'engagement rate' means. You've said 'sorry, the lighting in here is bad' unironically. Your friends are tired of being in your B-roll. You check your analytics more than your bank account. This is your Roman Empire.",
      traits: ["Creative entrepreneur", "Trend forecaster", "Chronically online", "Hustle culture victim"],
      advice: "Your dedication is unmatched but please remember: not everything needs to be content. Some moments can just... be moments. Also, your friends don't want to be in another video."
    },
    casual: {
      type: "The Normal One",
      description: "You use TikTok like a normal human being. You don't understand why everyone's so obsessed. You watch sometimes, you scroll sometimes, you put your phone down and do other things. Honestly? That's suspicious. How are you this well-adjusted?",
      traits: ["Healthy boundaries", "Suspiciously balanced", "Actually has hobbies", "Probably touches grass"],
      advice: "Keep doing whatever you're doing. You've cracked the code the rest of us can't figure out. Teach us your ways. How do you just... stop scrolling?"
    }
  }
};
