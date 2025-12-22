// What's Your Flirting Style? - Viral relationship test for American English users

export const testData = {
  id: "relationship-flirting-style",
  title: "What's Your Flirting Style?",
  description: "Are you smooth operator or an awkward mess? Find out how you actually flirt!",
  questions: [
    {
      id: 1,
      text: "You see someone attractive across the room. First move?",
      options: [
        { text: "Walk over and introduce myself", type: "direct" },
        { text: "Strategically position myself near them", type: "subtle" },
        { text: "Stare intensely and hope they come to me", type: "awkward" },
        { text: "Make a joke loud enough for them to hear", type: "playful" }
      ]
    },
    {
      id: 2,
      text: "Your go-to flirting technique is...",
      options: [
        { text: "Eye contact and confident conversation", type: "direct" },
        { text: "Light teasing and playful banter", type: "playful" },
        { text: "Being extra nice and hoping they notice", type: "subtle" },
        { text: "Accidentally saying something weird and hoping they find it charming", type: "awkward" }
      ]
    },
    {
      id: 3,
      text: "How do you compliment someone you like?",
      options: [
        { text: "Directly - 'You're gorgeous and I had to tell you'", type: "direct" },
        { text: "Sarcastically - 'Oh cool, you're like... not terrible'", type: "playful" },
        { text: "Subtly - casually mentioning you like something about them", type: "subtle" },
        { text: "Nervously - 'I like your... face... area'", type: "awkward" }
      ]
    },
    {
      id: 4,
      text: "You're texting your crush. What's the vibe?",
      options: [
        { text: "Smooth operator - confident and witty", type: "direct" },
        { text: "All jokes and memes", type: "playful" },
        { text: "Overthinking every message for 30 minutes", type: "awkward" },
        { text: "Casual and mysterious - keep them guessing", type: "subtle" }
      ]
    },
    {
      id: 5,
      text: "They say something you disagree with. You...",
      options: [
        { text: "Playfully argue your point", type: "playful" },
        { text: "Charm them into seeing your side", type: "direct" },
        { text: "Agree to keep the vibes good", type: "subtle" },
        { text: "Accidentally start a real debate and panic", type: "awkward" }
      ]
    },
    {
      id: 6,
      text: "Physical flirting: How do you break the touch barrier?",
      options: [
        { text: "Confident arm touch or lean in", type: "direct" },
        { text: "Playful push or high five", type: "playful" },
        { text: "Wait for them to initiate", type: "subtle" },
        { text: "Accidentally bump into them and die inside", type: "awkward" }
      ]
    },
    {
      id: 7,
      text: "You want to ask them out. How do you do it?",
      options: [
        { text: "Clearly and directly - 'I want to take you on a date'", type: "direct" },
        { text: "'We should hang out sometime' - keep it casual", type: "subtle" },
        { text: "'Unless you're busy... which you probably are... never mind'", type: "awkward" },
        { text: "Make it a joke until they say yes", type: "playful" }
      ]
    },
    {
      id: 8,
      text: "They're not responding to your flirting. You...",
      options: [
        { text: "Turn up the charm - they'll come around", type: "direct" },
        { text: "Make jokes about being rejected", type: "playful" },
        { text: "Back off immediately and pretend I was never flirting", type: "subtle" },
        { text: "Assume I did something wrong and replay every interaction", type: "awkward" }
      ]
    },
    {
      id: 9,
      text: "When you're nervous around someone you like, you...",
      options: [
        { text: "Get MORE confident to compensate", type: "direct" },
        { text: "Make even more jokes", type: "playful" },
        { text: "Become mysteriously quiet", type: "subtle" },
        { text: "Say bizarre things I immediately regret", type: "awkward" }
      ]
    },
    {
      id: 10,
      text: "What do people usually say about your flirting?",
      options: [
        { text: "'You're so confident!'", type: "direct" },
        { text: "'You're hilarious!'", type: "playful" },
        { text: "'Wait, you were flirting?!'", type: "subtle" },
        { text: "'That was... adorable? I think?'", type: "awkward" }
      ]
    }
  ],
  results: {
    direct: {
      type: "The Confident Closer",
      description: "You don't play games - you see what you want and you go for it. Your energy is magnetic, your intentions are clear, and you'd rather shoot your shot than wonder 'what if.' You're the main character in your own rom-com and you know it.",
      traits: ["Bold moves", "Clear intentions", "Magnetic presence", "No fear of rejection"],
      advice: "Your confidence is attractive, but make sure to read the room. Not everyone is ready for your directness - sometimes building tension is part of the fun."
    },
    playful: {
      type: "The Banter Master",
      description: "Flirting is a SPORT and you're a professional athlete. You tease, you joke, you keep things light and fun. The person you're flirting with probably isn't sure if you actually like them or just enjoy the game - and that's exactly how you like it.",
      traits: ["Quick wit", "Loves the chase", "Keeps things light", "Master of tension"],
      advice: "Your humor is your superpower, but sometimes you need to be sincere too. Don't hide behind jokes forever - eventually, you'll have to be real."
    },
    subtle: {
      type: "The Slow Burn",
      description: "You're playing the long game. Your flirting is so subtle that the other person might not even realize it's happening. You prefer building connection gradually, leaving bread crumbs, and creating chemistry through proximity and patience.",
      traits: ["Mysterious energy", "Patience is key", "Flirts through presence", "Never too obvious"],
      advice: "Subtlety can be sexy, but sometimes people need clearer signals. If they don't know you're interested, they might move on. Don't be afraid to be a little more obvious."
    },
    awkward: {
      type: "The Adorable Disaster",
      description: "Your flirting style is... endearingly chaotic. You mean well, but words come out wrong, you overthink everything, and you've definitely said 'you too' when someone said 'enjoy your meal.' But honestly? The right person will find it absolutely adorable.",
      traits: ["Endearingly nervous", "Overthinks everything", "Accidentally charming", "Authentically awkward"],
      advice: "Your awkwardness is actually your secret weapon - it's genuine and relatable. Own it instead of fighting it. The right person will love your chaos."
    }
  }
};
