// Your Gamer Personality - Viral entertainment test for American English users

export const testData = {
  id: "entertainment-gamer-type",
  title: "Your Gamer Personality",
  description: "Casual mobile gamer or hardcore completionist? What's your gaming style?",
  questions: [
    {
      id: 1,
      text: "Your gaming time investment:",
      options: [
        { text: "Major hobby - multiple hours daily/weekly", type: "hardcore" },
        { text: "Regular hobby - consistent but balanced time", type: "dedicated" },
        { text: "Occasional - when I have time and feel like it", type: "casual" },
        { text: "Rare - games aren't really my thing", type: "non_gamer" }
      ]
    },
    {
      id: 2,
      text: "Your approach to game completion:",
      options: [
        { text: "100% everything. Achievements, side quests, ALL of it", type: "hardcore" },
        { text: "Main story plus content I enjoy, skip tedious stuff", type: "dedicated" },
        { text: "Just the fun parts, move on when bored", type: "casual" },
        { text: "Rarely finish games to be honest", type: "non_gamer" }
      ]
    },
    {
      id: 3,
      text: "Your gaming setup:",
      options: [
        { text: "Dedicated space, quality equipment, optimized", type: "hardcore" },
        { text: "Good setup but nothing crazy elaborate", type: "dedicated" },
        { text: "Phone, maybe a console, nothing fancy", type: "casual" },
        { text: "Whatever's around, not invested in equipment", type: "non_gamer" }
      ]
    },
    {
      id: 4,
      text: "How competitive are you in games?",
      options: [
        { text: "Very. I play to win and improve constantly", type: "hardcore" },
        { text: "Competitive but not tilted by losing", type: "dedicated" },
        { text: "Not really - I play for fun, winning is bonus", type: "casual" },
        { text: "Games aren't a competition to me", type: "non_gamer" }
      ]
    },
    {
      id: 5,
      text: "Your knowledge of gaming news/releases:",
      options: [
        { text: "Up to date on everything coming out", type: "hardcore" },
        { text: "Aware of major releases in genres I like", type: "dedicated" },
        { text: "Hear about stuff through friends or social media", type: "casual" },
        { text: "Don't follow gaming news", type: "non_gamer" }
      ]
    },
    {
      id: 6,
      text: "Difficulty settings:",
      options: [
        { text: "Hardest available. Challenge is the point", type: "hardcore" },
        { text: "Normal or hard, depending on game and mood", type: "dedicated" },
        { text: "Easy/normal - I want to enjoy, not suffer", type: "casual" },
        { text: "Whatever default is, I don't care to adjust", type: "non_gamer" }
      ]
    },
    {
      id: 7,
      text: "Gaming with others:",
      options: [
        { text: "Regular group/clan, coordinated sessions", type: "hardcore" },
        { text: "With friends when schedules align", type: "dedicated" },
        { text: "Mostly solo, occasional multiplayer if simple", type: "casual" },
        { text: "Don't really game with others", type: "non_gamer" }
      ]
    },
    {
      id: 8,
      text: "Your backlog of unplayed games:",
      options: [
        { text: "Massive. Sale purchases, bundles, too many games", type: "hardcore" },
        { text: "Some backlog, working through it reasonably", type: "dedicated" },
        { text: "Small - I only get games I'll actually play", type: "casual" },
        { text: "What backlog? I don't accumulate games", type: "non_gamer" }
      ]
    },
    {
      id: 9,
      text: "Someone disses your favorite game:",
      options: [
        { text: "Defensive essay incoming - let me explain why they're wrong", type: "hardcore" },
        { text: "Disagree but everyone has opinions", type: "dedicated" },
        { text: "Shrug. I don't care that deeply", type: "casual" },
        { text: "I don't have favorite games to defend", type: "non_gamer" }
      ]
    },
    {
      id: 10,
      text: "Gaming is for you:",
      options: [
        { text: "A major part of my identity and leisure time", type: "hardcore" },
        { text: "A valued hobby I make time for", type: "dedicated" },
        { text: "One of many ways I might spend free time", type: "casual" },
        { text: "Not really my form of entertainment", type: "non_gamer" }
      ]
    }
  ],
  results: {
    hardcore: {
      type: "The Hardcore Gamer",
      description: "Gaming is LIFE. You've got the setup, the skills, the knowledge, and the backlog to prove it. You don't just play games - you master them, discuss them, and make them a core part of your identity. Your Steam library is a monument. Your hours played are... concerning to outsiders.",
      traits: ["Dedicated", "Skilled", "Knowledgeable", "Completionist"],
      advice: "Your gaming commitment is impressive! Just make sure the other parts of life are getting attention too. Also maybe don't check your 'hours played' stats - ignorance is bliss. Keep gaming, but occasionally touch grass."
    },
    dedicated: {
      type: "The Balanced Gamer",
      description: "Gaming is important to you, but so are other things. You make time for games, enjoy them properly, and keep up with releases you care about. You're not casual, but you're also not letting games consume your life. A healthy gamer, if you will.",
      traits: ["Balanced", "Engaged", "Healthy habits", "Selective"],
      advice: "You've found the gaming sweet spot! Keep this balance. Maybe try one game outside your usual genres - you've got the bandwidth for experimentation without losing yourself to it."
    },
    casual: {
      type: "The Casual Player",
      description: "Games are fun when you play them, but they're not a priority. You might play mobile games, pick up something your friends are playing, or game occasionally when the mood strikes. You're not invested in gaming culture - you just play sometimes.",
      traits: ["Laid-back", "Low-investment", "Social gamer", "Flexible"],
      advice: "Your casual approach is valid! Games are meant to be fun, and if occasional play works for you, perfect. No need to level up to 'gamer' status if that's not your thing."
    },
    non_gamer: {
      type: "The Gaming Agnostic",
      description: "Games just aren't your thing, and that's fine. You have other hobbies, other entertainment, other things to do with your time. When your friends game, you do something else. You're not anti-gaming, you're just... elsewhere.",
      traits: ["Non-gamer", "Other interests", "Honest", "Alternative hobbies"],
      advice: "Your honesty is appreciated! No need to force gaming if it doesn't interest you. But if curious, try something casual and fun - not everything is competitive multiplayer. Or don't. You have other things to do."
    }
  }
};
