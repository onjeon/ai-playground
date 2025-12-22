// What Kind of Sports Fan Are You? - Fun viral test

export const testData = {
  id: "fun-sports-fan",
  title: "What Kind of Sports Fan Are You?",
  description: "From casual watcher to face-painted superfan. Where do you fall on the sports dedication spectrum?",
  questions: [
    {
      id: 1,
      text: "Your team just lost a crucial game. Your reaction:",
      options: [
        { text: "Emotionally devastated, might need to talk about it for days", type: "superfan" },
        { text: "Disappointed but already analyzing what went wrong", type: "analyst" },
        { text: "Bummer. Anyway, what's for dinner?", type: "casual" },
        { text: "Wait, we lost? I was scrolling through my phone", type: "social" }
      ]
    },
    {
      id: 2,
      text: "Game day outfit choice:",
      options: [
        { text: "Full team gear, possibly face paint, definitely jersey", type: "superfan" },
        { text: "Subtle team colors or a classic team hat", type: "analyst" },
        { text: "Whatever I was already wearing", type: "casual" },
        { text: "Something cute that happens to match team colors", type: "social" }
      ]
    },
    {
      id: 3,
      text: "How do you watch games?",
      options: [
        { text: "Standing up, pacing, screaming at the TV", type: "superfan" },
        { text: "Watching intently, tracking stats on my phone", type: "analyst" },
        { text: "On in the background while I do other things", type: "casual" },
        { text: "At a bar/party because games are social events", type: "social" }
      ]
    },
    {
      id: 4,
      text: "Your sports knowledge includes:",
      options: [
        { text: "Every roster, stat, and trade for my teams", type: "superfan" },
        { text: "Deep understanding of strategy and player metrics", type: "analyst" },
        { text: "I know the major players and that's enough", type: "casual" },
        { text: "Enough to follow conversations at parties", type: "social" }
      ]
    },
    {
      id: 5,
      text: "Big game is at the same time as a friend's event. You:",
      options: [
        { text: "Sorry friend, we all knew this might happen", type: "superfan" },
        { text: "Ask if they can have the game on, or excuse myself strategically", type: "analyst" },
        { text: "Go to the event, catch highlights later", type: "casual" },
        { text: "Go to the event - more fun with people anyway", type: "social" }
      ]
    },
    {
      id: 6,
      text: "Someone at a party starts trash-talking your team. You:",
      options: [
        { text: "Take it personally and defend my team's honor vigorously", type: "superfan" },
        { text: "Counter with statistics and facts", type: "analyst" },
        { text: "Laugh it off, it's just sports", type: "casual" },
        { text: "Join in the banter, it's all for fun", type: "social" }
      ]
    },
    {
      id: 7,
      text: "Your team is playing a meaningless regular season game. You:",
      options: [
        { text: "Watch every minute. There are no meaningless games", type: "superfan" },
        { text: "Check in to see how young players are developing", type: "analyst" },
        { text: "Probably skip it unless nothing else is on", type: "casual" },
        { text: "Only watch if friends are watching too", type: "social" }
      ]
    },
    {
      id: 8,
      text: "Your approach to sports betting/fantasy:",
      options: [
        { text: "Fun but I'd never bet against my team, that's betrayal", type: "superfan" },
        { text: "Love fantasy - it's basically applied statistics", type: "analyst" },
        { text: "Occasionally, for major events only", type: "casual" },
        { text: "Only if it makes watching with friends more exciting", type: "social" }
      ]
    },
    {
      id: 9,
      text: "Going to a live game. Your priorities:",
      options: [
        { text: "Best seats possible, ready to be LOUD", type: "superfan" },
        { text: "Good sightlines to see plays develop", type: "analyst" },
        { text: "Reasonably priced seats with good vibes", type: "casual" },
        { text: "Who's going? That matters more than seats", type: "social" }
      ]
    },
    {
      id: 10,
      text: "When did you become a fan of your team?",
      options: [
        { text: "Born into it. It's in my blood. No choice in the matter", type: "superfan" },
        { text: "Followed them for their interesting playstyle/smart management", type: "analyst" },
        { text: "They're just the local team, made sense", type: "casual" },
        { text: "My friends/partner are fans so I joined in", type: "social" }
      ]
    }
  ],
  results: {
    superfan: {
      type: "The Die-Hard Superfan",
      description: "Your team isn't just a team - it's a way of life. You've got the gear, you've got the rituals, you've got the emotional investment that therapists would find concerning. Win or lose, you're there. Your loyalty is unwavering and your passion is INTENSE. You probably have a 'we' relationship with your team.",
      traits: ["Loyal", "Passionate", "Emotional", "Dedicated"],
      advice: "Your dedication is admirable! Just remember: your mental health shouldn't depend on people who don't know you exist scoring points. It's okay to take a breath sometimes."
    },
    analyst: {
      type: "The Stats Guru",
      description: "You don't just watch sports - you STUDY them. WAR, VORP, xG, win probability - these aren't just acronyms to you, they're poetry. You see plays developing before they happen. Your fantasy teams are spreadsheet-backed operations. You're basically a coach without the sideline access.",
      traits: ["Analytical", "Strategic", "Knowledgeable", "Detail-oriented"],
      advice: "Your brain is impressive! But sometimes just enjoy the chaos of sport without calculating the probability of it. The unexplainable moments are part of the magic."
    },
    casual: {
      type: "The Casual Watcher",
      description: "Sports are fine. You'll watch the big games, you have a team (sort of), and you know enough to not embarrass yourself. But your life doesn't revolve around the schedule. You've got other hobbies, other interests. Sports are a thing you enjoy, not your personality.",
      traits: ["Balanced", "Flexible", "Low-key", "Well-rounded"],
      advice: "Your healthy relationship with sports is honestly enviable. Maybe let yourself get a LITTLE more invested during playoffs? The highs are worth the risk of lows."
    },
    social: {
      type: "The Social Sports Fan",
      description: "You're here for the vibes, the friends, the snacks, and the collective experience. The game is almost secondary to the gathering. Super Bowl? More like Super Social Event. March Madness? March Hangout-ness. You turn every game into a party, and honestly, that's beautiful.",
      traits: ["Social", "Fun-focused", "Community-driven", "Easygoing"],
      advice: "Keep bringing people together! Just maybe learn a few player names so you can participate in the actual sports conversations happening at your excellent gatherings."
    }
  }
};
