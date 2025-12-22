// How Good Are You at Roasting? - Viral humor test for American English users

export const testData = {
  id: "humor-roast-level",
  title: "How Good Are You at Roasting?",
  description: "Can you deliver a burn that lands perfectly, or do your roasts fall flat? Time to assess your roast battle readiness.",
  questions: [
    {
      id: 1,
      text: "A friend playfully insults you. Your response speed:",
      options: [
        { text: "I laugh and move on, not really a clap-back person", type: "rookie" },
        { text: "Give me a second and I'll have something decent", type: "amateur" },
        { text: "Instant - I've already got the comeback loaded", type: "pro" },
        { text: "I'm returning fire before they finish speaking", type: "elite" }
      ]
    },
    {
      id: 2,
      text: "Your roast style tends to be:",
      options: [
        { text: "I don't really roast people", type: "rookie" },
        { text: "Surface level - nothing too deep", type: "amateur" },
        { text: "Targeted but still obviously loving", type: "pro" },
        { text: "Surgical precision - I know exactly where to hit", type: "elite" }
      ]
    },
    {
      id: 3,
      text: "When you roast someone, they usually:",
      options: [
        { text: "I avoid roasting so N/A", type: "rookie" },
        { text: "Chuckle politely - it's pretty mild", type: "amateur" },
        { text: "Genuinely laugh and try to get me back", type: "pro" },
        { text: "Need a moment to recover emotionally", type: "elite" }
      ]
    },
    {
      id: 4,
      text: "Your knowledge of your friends' insecurities is:",
      options: [
        { text: "Limited - I don't pay attention to that stuff", type: "rookie" },
        { text: "Some awareness but I don't weaponize it", type: "amateur" },
        { text: "Comprehensive - but I know what's off limits", type: "pro" },
        { text: "Encyclopedic - but I use this power responsibly", type: "elite" }
      ]
    },
    {
      id: 5,
      text: "Someone roasts you HARD. Your reaction:",
      options: [
        { text: "Probably hurt - I'm sensitive", type: "rookie" },
        { text: "Laugh it off, maybe try to respond", type: "amateur" },
        { text: "Appreciate the skill while planning revenge", type: "pro" },
        { text: "This is my favorite thing, game ON", type: "elite" }
      ]
    },
    {
      id: 6,
      text: "Your ability to find someone's roastable quality:",
      options: [
        { text: "I don't look for those things", type: "rookie" },
        { text: "I can find obvious stuff", type: "amateur" },
        { text: "I see angles others miss", type: "pro" },
        { text: "I notice roastable details within seconds of meeting someone", type: "elite" }
      ]
    },
    {
      id: 7,
      text: "A group is roasting one person. You:",
      options: [
        { text: "Stay quiet - feels mean to pile on", type: "rookie" },
        { text: "Throw in something mild if it's clearly friendly", type: "amateur" },
        { text: "Wait for my moment, then deliver the line of the night", type: "pro" },
        { text: "This is my Olympics. I've been training for this.", type: "elite" }
      ]
    },
    {
      id: 8,
      text: "Your delivery when roasting:",
      options: [
        { text: "Awkward - this isn't my strength", type: "rookie" },
        { text: "Decent - gets a laugh sometimes", type: "amateur" },
        { text: "Confident - I know how to land it", type: "pro" },
        { text: "Flawless - timing, tone, everything is perfect", type: "elite" }
      ]
    },
    {
      id: 9,
      text: "Have you ever gone too far with a roast?",
      options: [
        { text: "No, I keep it very safe", type: "rookie" },
        { text: "Maybe once, I learned from it", type: "amateur" },
        { text: "A few times, but I know how to recover", type: "pro" },
        { text: "Yes, and sometimes it was worth it", type: "elite" }
      ]
    },
    {
      id: 10,
      text: "Your friends would say your roasting is:",
      options: [
        { text: "Non-existent - not my thing", type: "rookie" },
        { text: "Cute attempts - I try", type: "amateur" },
        { text: "Actually good - they respect it", type: "pro" },
        { text: "Legendary - I'm feared and loved", type: "elite" }
      ]
    }
  ],
  results: {
    rookie: {
      type: "Roast Rookie",
      description: "Roasting isn't really your thing. You prefer your friendships without the verbal sparring, thank you very much. You might even find roast culture a bit uncomfortable. That's okay! Not everyone needs to be a comedian. Your kindness is also a vibe.",
      traits: ["Kind-hearted", "Non-confrontational", "Prefers positivity", "Sensitive"],
      advice: "You don't have to roast to be funny or loved. Your genuine, kind approach to friendship is valuable. But if you ever want to dip your toes in, start small with people who you KNOW can take it and won't take it personally."
    },
    amateur: {
      type: "Casual Roaster",
      description: "You can throw a jab when the moment's right, but you're not out here looking for battles. Your roasts are mild - you're not trying to destroy anyone. You prefer to keep the peace while still participating in the fun. Safe and respectable.",
      traits: ["Measured", "Friendly teasing", "Won't cross lines", "Balanced"],
      advice: "Your restraint is admirable. If you want to level up, work on timing and specificity. A good roast isn't just mean - it's observant and well-timed. Notice the details and wait for the perfect moment."
    },
    pro: {
      type: "Pro Roaster",
      description: "You've got skills. Your roasts land, your timing is solid, and you know how to read a room. You can be savage when needed but you also know when to hold back. Friends respect your game and might slightly fear group hangs with you. As they should.",
      traits: ["Sharp wit", "Good timing", "Knows the limits", "Respected roaster"],
      advice: "You're doing great. Keep sharpening that blade but remember: the best roasters also know how to build people up. Make sure your friends know the roasting comes from love. Balance the burns with genuine appreciation."
    },
    elite: {
      type: "Elite Roast Master",
      description: "You're DANGEROUS. Your roasts are surgical, devastating, and somehow still funny. People are a little scared of you and honestly? They should be. You notice things others miss and you're not afraid to use them. Your group chat probably has screenshots of your best work.",
      traits: ["Absolutely lethal", "Precision targeting", "Legendary among friends", "Feared and respected"],
      advice: "With great power comes great responsibility. You can DESTROY people - make sure you only do it to those who can handle it and want to play. Your skills are a weapon; wield them wisely. Also make sure people know you love them outside of roasting contexts."
    }
  }
};
