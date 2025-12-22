// Are You an Optimist or Pessimist? - Viral personality test for American English users

export const testData = {
  id: "personality-optimist-pessimist",
  title: "Are You an Optimist or Pessimist?",
  description: "Glass half full, half empty, or just asking who drank from it? Let's find out your outlook!",
  questions: [
    {
      id: 1,
      text: "You wake up to a rainy day. Your first thought:",
      options: [
        { text: "Perfect cozy weather! Great excuse to stay in", type: "optimist" },
        { text: "Might make traffic bad but could be nice later", type: "realist" },
        { text: "Great, my plans are probably ruined", type: "pessimist" },
        { text: "Definitely the start of a terrible week", type: "doom" }
      ]
    },
    {
      id: 2,
      text: "A friend cancels plans last minute. You think:",
      options: [
        { text: "Unexpected free time! What fun thing should I do?", type: "optimist" },
        { text: "Disappointing but I'll make the most of it", type: "realist" },
        { text: "Knew something would go wrong today", type: "pessimist" },
        { text: "They probably don't actually want to hang out with me", type: "doom" }
      ]
    },
    {
      id: 3,
      text: "You're starting a new project. Your mindset:",
      options: [
        { text: "This is going to be amazing! I can feel it", type: "optimist" },
        { text: "Could go well with the right effort and planning", type: "realist" },
        { text: "Expecting some problems along the way", type: "pessimist" },
        { text: "Preparing for failure so I'm not disappointed", type: "doom" }
      ]
    },
    {
      id: 4,
      text: "Something bad happens in the news. Your reaction:",
      options: [
        { text: "Sad, but humanity will find a way through", type: "optimist" },
        { text: "Acknowledge it, then focus on what I can control", type: "realist" },
        { text: "Just confirms things are getting worse", type: "pessimist" },
        { text: "We're all doomed honestly", type: "doom" }
      ]
    },
    {
      id: 5,
      text: "You're interviewing for a job you really want. You feel:",
      options: [
        { text: "Excited! I'd be great at this and they'll see it", type: "optimist" },
        { text: "Hopeful but preparing for either outcome", type: "realist" },
        { text: "There are probably better candidates", type: "pessimist" },
        { text: "Already expecting the rejection email", type: "doom" }
      ]
    },
    {
      id: 6,
      text: "When making plans, you typically:",
      options: [
        { text: "Assume everything will work out perfectly", type: "optimist" },
        { text: "Have a plan A and maybe a backup", type: "realist" },
        { text: "Prepare for multiple things to go wrong", type: "pessimist" },
        { text: "Expect the worst so I'm never disappointed", type: "doom" }
      ]
    },
    {
      id: 7,
      text: "Someone gives you unexpected feedback at work. You assume:",
      options: [
        { text: "It's going to be positive or helpful!", type: "optimist" },
        { text: "Could be anything, let's hear what they say", type: "realist" },
        { text: "Probably something I did wrong", type: "pessimist" },
        { text: "Definitely getting fired", type: "doom" }
      ]
    },
    {
      id: 8,
      text: "Your general belief about the future:",
      options: [
        { text: "Things are going to be even better than now", type: "optimist" },
        { text: "Some things will improve, some challenges will come", type: "realist" },
        { text: "Probably going to be harder than it is now", type: "pessimist" },
        { text: "Everything is trending downward, honestly", type: "doom" }
      ]
    },
    {
      id: 9,
      text: "You hear a strange noise in your house at night. First thought:",
      options: [
        { text: "Probably the cat or the house settling", type: "optimist" },
        { text: "Let me check it out, probably nothing", type: "realist" },
        { text: "Something's definitely wrong", type: "pessimist" },
        { text: "This is it. This is how it ends", type: "doom" }
      ]
    },
    {
      id: 10,
      text: "When you think about your life in 5 years:",
      options: [
        { text: "Better than now! Great things are coming", type: "optimist" },
        { text: "Different - hopefully improved in some ways", type: "realist" },
        { text: "Probably struggling with new problems", type: "pessimist" },
        { text: "Bold of you to assume we'll make it 5 years", type: "doom" }
      ]
    }
  ],
  results: {
    optimist: {
      type: "The Sunshine Optimist",
      description: "Your glass isn't just half full - it's overflowing with possibility! You see the silver lining in every cloud and genuinely believe good things are coming. Your energy is infectious and you're probably the friend everyone wants around when things get hard. The world needs your light!",
      traits: ["Hopeful", "Positive", "Resilient", "Uplifting"],
      advice: "Your optimism is a genuine superpower! Just make sure it's grounded in reality sometimes. Acknowledging negative feelings is healthy too - toxic positivity can suppress real emotions. Balance hope with realism for the best outcomes."
    },
    realist: {
      type: "The Grounded Realist",
      description: "You see things as they are - not better, not worse. You hope for the best while preparing for the rest. Your balanced outlook keeps you stable through life's ups and downs. You're the friend people go to for honest, practical advice.",
      traits: ["Balanced", "Practical", "Stable", "Clear-eyed"],
      advice: "Your realism serves you well! You navigate life with clarity and preparedness. Just don't let realistic thinking become a barrier to dreaming big sometimes. Occasionally, believing in magic makes magic happen."
    },
    pessimist: {
      type: "The Cautious Pessimist",
      description: "You're not negative, you're prepared. Why get your hopes up when disappointment is always possible? Your 'expect the worst' approach means you're rarely caught off guard. Sure, it's a little dark, but at least you're never unpleasantly surprised!",
      traits: ["Cautious", "Protective", "Realistic", "Prepared"],
      advice: "Your pessimism is probably a protective mechanism, and that's understandable. But expecting the worst can become a self-fulfilling prophecy. Try challenging negative assumptions occasionally - good things do happen, and you deserve to enjoy hoping for them."
    },
    doom: {
      type: "The Chaotic Doomer",
      description: "Everything is terrible and you've accepted it. Your dark humor about life's futility is both concerning and weirdly funny. You've made peace with the worst-case scenario being the most likely one. Are you okay? (Rhetorical - you'd say no anyway.)",
      traits: ["Darkly humorous", "Fatalistic", "Protective", "Accepting"],
      advice: "Your doomer energy might be a coping mechanism for anxiety or past disappointments - and that's valid! But constant negativity is exhausting and self-limiting. Things genuinely aren't always as bad as they seem. Maybe talk to someone about this outlook? A professional, not just Twitter."
    }
  }
};
