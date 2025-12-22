// Your Valentine's Day Personality - Viral seasonal test for American English users

export const testData = {
  id: "seasonal-valentines-type",
  title: "Your Valentine's Day Personality",
  description: "Hopeless romantic or aggressively single by choice? What's your V-Day vibe?",
  questions: [
    {
      id: 1,
      text: "February 14th approaches. You feel:",
      options: [
        { text: "Excited! Planning romantic activities!", type: "romantic" },
        { text: "Nice! Time to celebrate love in some form", type: "appreciator" },
        { text: "Meh. It's just another day tbh", type: "neutral" },
        { text: "Annoyed. Corporate manipulation of emotions", type: "cynical" }
      ]
    },
    {
      id: 2,
      text: "Your ideal Valentine's Day involves:",
      options: [
        { text: "Grand romantic gestures and thoughtful gifts", type: "romantic" },
        { text: "Quality time with someone I care about", type: "appreciator" },
        { text: "Treating myself or hanging with friends", type: "neutral" },
        { text: "Pretending the day doesn't exist", type: "cynical" }
      ]
    },
    {
      id: 3,
      text: "Valentine's Day gifts are:",
      options: [
        { text: "Essential! I love giving AND receiving", type: "romantic" },
        { text: "Nice but not required - presence over presents", type: "appreciator" },
        { text: "Optional. Self-care purchases count", type: "neutral" },
        { text: "Commercially manufactured guilt products", type: "cynical" }
      ]
    },
    {
      id: 4,
      text: "Your relationship with rom-coms on Valentine's Day:",
      options: [
        { text: "MARATHON TIME! Pass the tissues", type: "romantic" },
        { text: "A good one sounds nice on the day", type: "appreciator" },
        { text: "I'll watch whatever I'm in the mood for", type: "neutral" },
        { text: "I actively avoid them out of principle", type: "cynical" }
      ]
    },
    {
      id: 5,
      text: "Valentine's Day dinner plans:",
      options: [
        { text: "Booked weeks in advance at a special place", type: "romantic" },
        { text: "Something nice together, homemade or out", type: "appreciator" },
        { text: "Whatever sounds good that day - maybe pizza", type: "neutral" },
        { text: "Nowhere crowded with couples. Takeout alone", type: "cynical" }
      ]
    },
    {
      id: 6,
      text: "Pink and red everywhere in stores. Reaction:",
      options: [
        { text: "Love it! So festive and romantic!", type: "romantic" },
        { text: "Cute! I appreciate the seasonal decor", type: "appreciator" },
        { text: "It exists. I neither love nor hate it", type: "neutral" },
        { text: "Aggressive reminder of a manufactured holiday", type: "cynical" }
      ]
    },
    {
      id: 7,
      text: "Single on Valentine's Day? Your approach:",
      options: [
        { text: "Treat myself romantically! Self-love day!", type: "romantic" },
        { text: "Galentine's/Palentine's with friends", type: "appreciator" },
        { text: "Just another day, no special plans needed", type: "neutral" },
        { text: "Relieved I don't have to participate", type: "cynical" }
      ]
    },
    {
      id: 8,
      text: "The pressure to make V-Day 'special':",
      options: [
        { text: "I love the excuse to be extra romantic!", type: "romantic" },
        { text: "Light pressure - nice to have a reminder to appreciate love", type: "appreciator" },
        { text: "No pressure here. It's not that deep", type: "neutral" },
        { text: "Proof that capitalism ruins everything pure", type: "cynical" }
      ]
    },
    {
      id: 9,
      text: "Your take on Valentine's Day proposals:",
      options: [
        { text: "ROMANTIC! One of the best days to do it!", type: "romantic" },
        { text: "Sweet if it's meaningful to the couple", type: "appreciator" },
        { text: "Feels kind of expected/predictable?", type: "neutral" },
        { text: "Unoriginal and overly traditional", type: "cynical" }
      ]
    },
    {
      id: 10,
      text: "Honestly, Valentine's Day is:",
      options: [
        { text: "A beautiful celebration of love and romance!", type: "romantic" },
        { text: "A nice excuse to appreciate the people you love", type: "appreciator" },
        { text: "Just February 14th. No big deal either way", type: "neutral" },
        { text: "A commercial holiday that exploits emotions", type: "cynical" }
      ]
    }
  ],
  results: {
    romantic: {
      type: "The Hopeless Romantic",
      description: "You LOVE love, and Valentine's Day is your time to SHINE. Grand gestures, heartfelt gifts, romantic dinners - you're here for ALL of it. You've probably planned Valentine's months in advance and you're not sorry. Love is beautiful and deserves celebration!",
      traits: ["Romantic", "Generous", "Sentimental", "Enthusiastic"],
      advice: "Your love of love is beautiful! Just make sure your partner (or yourself) is on the same page about expectations. And remember - showing love on other days matters too. But also keep being you!"
    },
    appreciator: {
      type: "The Love Appreciator",
      description: "You like Valentine's Day but keep it reasonable. It's a nice day to show appreciation, whether for a partner, friends, or family. You don't need grand gestures but you appreciate thoughtfulness. You've found the healthy Valentine's middle ground.",
      traits: ["Balanced", "Appreciative", "Thoughtful", "Grounded"],
      advice: "Your approach is perfect! You get the spirit of the day without the pressure. Maybe try one slightly romantic thing this year - you might enjoy leaning into it occasionally."
    },
    neutral: {
      type: "The V-Day Neutral",
      description: "Valentine's Day doesn't trigger strong feelings for you either way. It's... a day. On the calendar. People seem worked up about it and you just... aren't. And that's completely fine! Not every day needs to be special to everyone.",
      traits: ["Unbothered", "Practical", "Independent", "Low-key"],
      advice: "Your neutrality is valid! But if you have someone who DOES care about V-Day, maybe throw them a small bone. Meeting people where they are doesn't mean losing yourself. Or keep being neutral - also fine!"
    },
    cynical: {
      type: "The Valentine's Cynic",
      description: "You see Valentine's Day for what it is: a commercially manufactured guilt-fest designed to sell chocolate, flowers, and jewelry. You refuse to participate in holiday-mandated romance. Love (if you believe in it) doesn't follow a calendar.",
      traits: ["Skeptical", "Anti-commercial", "Independent", "Realistic"],
      advice: "Your points are valid! But behind the commercialism, showing appreciation for people you care about isn't inherently bad. Maybe find a non-commercial way to celebrate connection? Or keep your principles - also respectable."
    }
  }
};
