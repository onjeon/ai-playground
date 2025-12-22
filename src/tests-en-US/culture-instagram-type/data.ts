// What Type of Instagram User Are You? - Viral modern culture test for American English users

export const testData = {
  id: "culture-instagram-type",
  title: "What Type of Instagram User Are You?",
  description: "From ghost followers to story addicts - what's your Instagram identity? Let's expose you.",
  questions: [
    {
      id: 1,
      text: "How many photos do you take before posting ONE?",
      options: [
        { text: "47 minimum. Lighting matters.", type: "aesthetic" },
        { text: "2-3. It's not that deep.", type: "casual" },
        { text: "I screenshot and meme. I don't post.", type: "lurker" },
        { text: "Every second of my life is content", type: "influencer" }
      ]
    },
    {
      id: 2,
      text: "Your Stories currently contain:",
      options: [
        { text: "Aesthetic reposts that match my grid energy", type: "aesthetic" },
        { text: "Random stuff - food, dog, whatever", type: "casual" },
        { text: "Nothing. I watch but don't post.", type: "lurker" },
        { text: "Polls, Q&As, swipe-ups, content content content", type: "influencer" }
      ]
    },
    {
      id: 3,
      text: "How do you feel about your feed's aesthetic?",
      options: [
        { text: "Curated within an inch of its life", type: "aesthetic" },
        { text: "It's giving 'random phone dump'", type: "casual" },
        { text: "I have like 3 posts from 2019", type: "lurker" },
        { text: "Consistent brand identity with cohesive color story", type: "influencer" }
      ]
    },
    {
      id: 4,
      text: "Someone you just met wants to follow you. Reaction:",
      options: [
        { text: "Let me archive 17 posts first", type: "aesthetic" },
        { text: "Sure whatever, it's just Instagram", type: "casual" },
        { text: "Bold of them to assume I'm active", type: "lurker" },
        { text: "New follower! Engagement opportunity!", type: "influencer" }
      ]
    },
    {
      id: 5,
      text: "You take an amazing photo. Now what?",
      options: [
        { text: "Save it for when my feed needs it", type: "aesthetic" },
        { text: "Post it immediately who cares", type: "casual" },
        { text: "Send it to friends. Not posting.", type: "lurker" },
        { text: "Schedule it for optimal engagement time", type: "influencer" }
      ]
    },
    {
      id: 6,
      text: "Your relationship with filters and editing:",
      options: [
        { text: "I have a preset I apply to everything for ~cohesion~", type: "aesthetic" },
        { text: "Maybe brightness up? That's it.", type: "casual" },
        { text: "I don't post so irrelevant", type: "lurker" },
        { text: "Lightroom presets, specific editing workflow, consistent look", type: "influencer" }
      ]
    },
    {
      id: 7,
      text: "Someone posts an unflattering photo of you. Your move:",
      options: [
        { text: "Politely request removal because it ruins everything", type: "aesthetic" },
        { text: "Eh, it's fine, no one cares that much", type: "casual" },
        { text: "I untag but honestly I'm barely on here anyway", type: "lurker" },
        { text: "That better not be on my tagged photos messing up my brand", type: "influencer" }
      ]
    },
    {
      id: 8,
      text: "Your caption strategy:",
      options: [
        { text: "Short, mysterious, lowercase", type: "aesthetic" },
        { text: "Whatever I'm feeling in the moment", type: "casual" },
        { text: "I don't post so n/a", type: "lurker" },
        { text: "Strategic with CTAs and relevant hashtags in comments", type: "influencer" }
      ]
    },
    {
      id: 9,
      text: "How often do you actually check Instagram?",
      options: [
        { text: "Daily but mainly to lurk and curate inspiration", type: "aesthetic" },
        { text: "When I'm bored, on and off", type: "casual" },
        { text: "Maybe check DMs once a week", type: "lurker" },
        { text: "Constantly. It's my job.", type: "influencer" }
      ]
    },
    {
      id: 10,
      text: "Your close friends story:",
      options: [
        { text: "The unhinged content my main can't handle", type: "aesthetic" },
        { text: "I don't really use it", type: "casual" },
        { text: "I watch other people's. Mine's empty.", type: "lurker" },
        { text: "Behind-the-scenes content for my engaged community", type: "influencer" }
      ]
    }
  ],
  results: {
    aesthetic: {
      type: "The Curated Queen",
      description: "Your feed is a VIBE. Every post is intentional. Colors match, themes connect, and you've definitely archived photos that 'no longer fit.' Your Instagram is basically a mood board come to life. You've spent 30 minutes on a caption before and you're not ashamed.",
      traits: ["Detail-oriented", "Aesthetic visionary", "Possibly unhinged in Close Friends", "Archive happy"],
      advice: "Your feed is gorgeous but remember: imperfection is also a vibe. Let yourself post something random once in a while. The grid will survive."
    },
    casual: {
      type: "The Normal Poster",
      description: "You use Instagram like a normal person. Photo dump of your vacation? Sure. Random food pic? Why not. You don't overthink it, you just live. Your feed is 'messy' in the way that real life is messy. You're doing great sweetie.",
      traits: ["Authentically chill", "No algorithm anxiety", "Living in the moment", "Healthy relationship with app"],
      advice: "Keep being unbothered. The rest of us are stressed about our feeds and you're out here just vibing. Respect."
    },
    lurker: {
      type: "The Ghost Account",
      description: "You're watching. Always watching. You haven't posted since Obama's first term but you see EVERYTHING. You know what everyone's doing without them knowing you know. Your follow-to-post ratio is concerning and that's exactly how you like it.",
      traits: ["Expert observer", "Minimal digital footprint", "Knows everyone's business", "Possibly a FBI agent"],
      advice: "Valid life choice honestly. But maybe throw a story up once a year so people know you're still alive?"
    },
    influencer: {
      type: "The Brand Builder",
      description: "This isn't Instagram. This is your PLATFORM. Every post is strategic. You know your best angles, optimal posting times, and have a content calendar. You've said 'link in bio' unironically. Your screen time is technically work.",
      traits: ["Strategic mind", "Content machine", "Algorithm expert", "Possibly exhausted"],
      advice: "You're killing it but also... are you okay? Remember to post something just because you want to, not because it's optimized. Your followers will still love you."
    }
  }
};
