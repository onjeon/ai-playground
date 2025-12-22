// What Type of Partner Are You? - Viral relationship test for American English users

export const testData = {
  id: "relationship-partner-type",
  title: "What Type of Partner Are You?",
  description: "Everyone brings something different to relationships. What's YOUR relationship energy?",
  questions: [
    {
      id: 1,
      text: "Your partner had a long day. How do you help?",
      options: [
        { text: "Plan something fun to cheer them up", type: "hype" },
        { text: "Listen to them vent without trying to fix it", type: "emotional" },
        { text: "Take care of practical stuff so they can rest", type: "practical" },
        { text: "Physical comfort - cuddles, massage, etc.", type: "physical" }
      ]
    },
    {
      id: 2,
      text: "In relationships, you're usually the one who...",
      options: [
        { text: "Keeps the energy fun and exciting", type: "hype" },
        { text: "Creates emotional depth and connection", type: "emotional" },
        { text: "Handles the logistics and planning", type: "practical" },
        { text: "Initiates physical intimacy and affection", type: "physical" }
      ]
    },
    {
      id: 3,
      text: "How do you typically show love?",
      options: [
        { text: "Planning dates and creating experiences", type: "hype" },
        { text: "Deep conversations and emotional support", type: "emotional" },
        { text: "Acts of service and taking care of things", type: "practical" },
        { text: "Touch, closeness, and physical presence", type: "physical" }
      ]
    },
    {
      id: 4,
      text: "Your partner is stressed about work. You...",
      options: [
        { text: "Distract them with something fun", type: "hype" },
        { text: "Help them talk through their feelings", type: "emotional" },
        { text: "Offer practical solutions or help", type: "practical" },
        { text: "Offer a back rub and closeness", type: "physical" }
      ]
    },
    {
      id: 5,
      text: "What's your ideal quality time?",
      options: [
        { text: "Going on adventures and trying new things", type: "hype" },
        { text: "Deep talks about life and feelings", type: "emotional" },
        { text: "Doing tasks or projects together", type: "practical" },
        { text: "Cuddling and being physically close", type: "physical" }
      ]
    },
    {
      id: 6,
      text: "Your partner appreciates you most for...",
      options: [
        { text: "Keeping the relationship exciting", type: "hype" },
        { text: "Being emotionally present and supportive", type: "emotional" },
        { text: "Being reliable and handling stuff", type: "practical" },
        { text: "Being affectionate and physically loving", type: "physical" }
      ]
    },
    {
      id: 7,
      text: "Something bothering your partner. What's your first instinct?",
      options: [
        { text: "Cheer them up and change the vibe", type: "hype" },
        { text: "Ask them to share how they're feeling", type: "emotional" },
        { text: "Figure out what needs to be fixed", type: "practical" },
        { text: "Hold them and be physically there", type: "physical" }
      ]
    },
    {
      id: 8,
      text: "Your relationship superpower is...",
      options: [
        { text: "Never letting things get boring", type: "hype" },
        { text: "Creating emotional safety", type: "emotional" },
        { text: "Being someone they can count on", type: "practical" },
        { text: "Physical chemistry and connection", type: "physical" }
      ]
    },
    {
      id: 9,
      text: "If your relationship were a movie, it would be...",
      options: [
        { text: "An adventure film - exciting and full of life", type: "hype" },
        { text: "A deep drama - emotional and meaningful", type: "emotional" },
        { text: "A comfort film - reliable and steady", type: "practical" },
        { text: "A romance - passionate and intimate", type: "physical" }
      ]
    },
    {
      id: 10,
      text: "What do partners usually say they love about you?",
      options: [
        { text: "'You make life more fun'", type: "hype" },
        { text: "'You really understand me'", type: "emotional" },
        { text: "'I can always count on you'", type: "practical" },
        { text: "'I love how affectionate you are'", type: "physical" }
      ]
    }
  ],
  results: {
    hype: {
      type: "The Energy Keeper",
      description: "You're the fun one in relationships. You keep things exciting, plan adventures, and make sure the spark never dies. Boredom is your enemy and you fight it constantly. Your partner is never going to say the relationship got 'stale' because you won't let it.",
      traits: ["Adventurous spirit", "Keeps things fresh", "Plans fun dates", "High energy presence"],
      advice: "Your energy is a gift, but remember that not every moment needs to be exciting. Sometimes the quiet moments are where real intimacy grows."
    },
    emotional: {
      type: "The Deep Connector",
      description: "You're the emotionally intelligent one. You create deep bonds, have meaningful conversations, and make your partner feel truly seen. Your relationships have DEPTH. You're not here for surface-level love - you want souls connecting.",
      traits: ["Emotionally present", "Great listener", "Creates safe space", "Values vulnerability"],
      advice: "Your depth is beautiful, but don't forget to have fun too. Not every conversation needs to be deep - sometimes lightness is its own kind of intimacy."
    },
    practical: {
      type: "The Reliable Rock",
      description: "You show love through action. You're the one who remembers things, handles logistics, and makes sure everything runs smoothly. Your love might not be loud, but it's consistent and dependable. You're the backbone of the relationship.",
      traits: ["Reliable and consistent", "Shows love through actions", "Problem-solver", "Steady presence"],
      advice: "Your dependability is your strength, but don't forget to express feelings verbally too. Sometimes your partner needs to HEAR how you feel, not just see it in actions."
    },
    physical: {
      type: "The Affection Giver",
      description: "Physical touch is your love language and it shows. You're naturally affectionate, prioritize physical intimacy, and believe that sometimes a hug says more than words. Your presence is warm, close, and comforting.",
      traits: ["Naturally affectionate", "Values physical closeness", "Warm and comforting", "Prioritizes intimacy"],
      advice: "Physical affection is powerful, but remember that emotional intimacy matters too. Make sure you're also connecting on other levels, not just physical."
    }
  }
};
