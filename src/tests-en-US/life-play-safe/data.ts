// Do You Play It Safe or Take Risks? - Viral life test for American English users

export const testData = {
  id: "life-play-safe",
  title: "Do You Play It Safe or Take Risks?",
  description: "Comfort zone hugger or leap-of-faith taker? What's your risk profile?",
  questions: [
    {
      id: 1,
      text: "A risky opportunity appears. Your first instinct:",
      options: [
        { text: "YES! Opportunities like this don't come often!", type: "risk_taker" },
        { text: "Let me weigh the pros and cons carefully", type: "calculated" },
        { text: "Probably not... seems too uncertain", type: "cautious" },
        { text: "No thanks. I prefer what's familiar and safe", type: "safe" }
      ]
    },
    {
      id: 2,
      text: "Your relationship with your comfort zone:",
      options: [
        { text: "I push past it regularly - that's where growth is", type: "risk_taker" },
        { text: "I leave it when the potential reward is worth it", type: "calculated" },
        { text: "I venture out occasionally but prefer to stay close", type: "cautious" },
        { text: "My comfort zone is where I belong", type: "safe" }
      ]
    },
    {
      id: 3,
      text: "When making big life decisions:",
      options: [
        { text: "Trust my gut and go for it", type: "risk_taker" },
        { text: "Research, plan, but eventually take action", type: "calculated" },
        { text: "Think about it for a long time, often don't act", type: "cautious" },
        { text: "Avoid big decisions if I can maintain status quo", type: "safe" }
      ]
    },
    {
      id: 4,
      text: "Your fear of failure:",
      options: [
        { text: "Failure is just data. I learn and move on", type: "risk_taker" },
        { text: "I manage it by planning well before acting", type: "calculated" },
        { text: "It often holds me back from trying", type: "cautious" },
        { text: "I avoid situations where I might fail", type: "safe" }
      ]
    },
    {
      id: 5,
      text: "A friend wants you to invest in their startup. You:",
      options: [
        { text: "I'm in! Let's make something happen!", type: "risk_taker" },
        { text: "Need to see the business plan and numbers first", type: "calculated" },
        { text: "Probably decline - too risky", type: "cautious" },
        { text: "Definitely no. I don't risk money like that", type: "safe" }
      ]
    },
    {
      id: 6,
      text: "Your career path has been:",
      options: [
        { text: "Unconventional - I've taken big leaps", type: "risk_taker" },
        { text: "Strategic - calculated moves for advancement", type: "calculated" },
        { text: "Fairly traditional - staying in my lane", type: "cautious" },
        { text: "Very stable - security over advancement", type: "safe" }
      ]
    },
    {
      id: 7,
      text: "When traveling to new places:",
      options: [
        { text: "I seek out the unexpected and go off the beaten path", type: "risk_taker" },
        { text: "Mix of planned activities and spontaneous exploration", type: "calculated" },
        { text: "I prefer well-researched, popular destinations", type: "cautious" },
        { text: "I stick to familiar places or don't travel much", type: "safe" }
      ]
    },
    {
      id: 8,
      text: "Your biggest regrets tend to be:",
      options: [
        { text: "Things I did that didn't work out (but I tried!)", type: "risk_taker" },
        { text: "Mix of actions and inactions", type: "calculated" },
        { text: "Things I didn't do because I was scared", type: "cautious" },
        { text: "I don't regret much - I've kept things stable", type: "safe" }
      ]
    },
    {
      id: 9,
      text: "Your friends would describe you as:",
      options: [
        { text: "Adventurous, bold, maybe a little reckless", type: "risk_taker" },
        { text: "Thoughtful, strategic, good at weighing options", type: "calculated" },
        { text: "Careful, hesitant, but reliable", type: "cautious" },
        { text: "Stable, predictable, plays it safe", type: "safe" }
      ]
    },
    {
      id: 10,
      text: "On your deathbed, you'd most regret:",
      options: [
        { text: "Not taking even MORE risks", type: "risk_taker" },
        { text: "The calculated risks I didn't take", type: "calculated" },
        { text: "All the things fear stopped me from doing", type: "cautious" },
        { text: "I'll be content knowing I had a stable life", type: "safe" }
      ]
    }
  ],
  results: {
    risk_taker: {
      type: "The Bold Risk-Taker",
      description: "You LEAP. Life is too short for too much caution. You trust your gut, take chances, and believe that regret from inaction is worse than regret from failed attempts. Some might call you reckless; you call it living fully. You've got war stories.",
      traits: ["Bold", "Adventurous", "Gut-trusting", "Action-oriented"],
      advice: "Your boldness is a superpower! But occasionally pause before leaping. Not every risk is worth taking. Learn to distinguish between calculated gambles and reckless impulses. The best risk-takers know when to fold."
    },
    calculated: {
      type: "The Calculated Risk-Taker",
      description: "You take risks, but SMART ones. You weigh pros and cons, do your homework, then act with confidence. You're not paralyzed by fear, but you're not reckless either. You've probably had more successes than failures because you choose your risks wisely.",
      traits: ["Strategic", "Analytical", "Brave-when-warranted", "Prepared"],
      advice: "Your approach is ideal! Just make sure analysis doesn't become paralysis. Sometimes you have to act before you have all the information. Trust that your judgment has been good - you can handle uncertainty."
    },
    cautious: {
      type: "The Cautious Contender",
      description: "You want to take risks but fear often wins. You think about opportunities, analyze them to death, and often talk yourself out of action. Your caution has probably protected you from some bad outcomes, but it's also protected you from some great ones.",
      traits: ["Careful", "Analytical", "Fear-influenced", "Potential-unrealized"],
      advice: "Your caution isn't cowardice, but it might be holding you back. Try taking ONE small risk that scares you. Success there might build confidence for bigger ones. The thing you fear is rarely as bad as the fear itself."
    },
    safe: {
      type: "The Safe Harbor Seeker",
      description: "You value stability over adventure. Risk feels unnecessary when you can maintain what you have. Your life may be predictable but predictable isn't bad - it's secure. You've probably avoided a lot of pain that risk-takers have experienced.",
      traits: ["Stable", "Security-focused", "Risk-averse", "Consistent"],
      advice: "Stability has real value! But make sure you're choosing safety, not just avoiding fear. Sometimes the biggest risk is taking no risks at all. Life can change whether you take risks or not - at least with risks, you have some control."
    }
  }
};
