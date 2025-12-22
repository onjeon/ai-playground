// Which Streaming Service Matches Your Personality? - Viral modern culture test for American English users

export const testData = {
  id: "culture-streaming-service",
  title: "Which Streaming Service Matches Your Personality?",
  description: "Are you Netflix chaotic, HBO prestige, or Disney nostalgic? Your streaming soul awaits.",
  questions: [
    {
      id: 1,
      text: "How do you pick what to watch?",
      options: [
        { text: "Whatever's trending - I need to be part of the conversation", type: "netflix" },
        { text: "I read reviews and only watch critically acclaimed stuff", type: "hbo" },
        { text: "Same comfort shows on repeat, don't @ me", type: "disney" },
        { text: "Whatever true crime or documentary rabbit hole I fall into", type: "prime" }
      ]
    },
    {
      id: 2,
      text: "Your ideal Friday night viewing:",
      options: [
        { text: "Binge a new series everyone's talking about", type: "netflix" },
        { text: "A prestige drama that makes me feel smarter", type: "hbo" },
        { text: "Nostalgic movie from my childhood", type: "disney" },
        { text: "A random movie I stumbled upon that's actually good", type: "prime" }
      ]
    },
    {
      id: 3,
      text: "A show ends on a cliffhanger. Your reaction:",
      options: [
        { text: "THEY BETTER RENEW THIS OR I'M RIOTING", type: "netflix" },
        { text: "I'll analyze the symbolism while I wait for next season", type: "hbo" },
        { text: "I prefer things wrapped up neatly tbh", type: "disney" },
        { text: "I'll forget and start something else", type: "prime" }
      ]
    },
    {
      id: 4,
      text: "Your guilty pleasure watch:",
      options: [
        { text: "Reality dating shows - I'm not ashamed", type: "netflix" },
        { text: "I don't do guilty pleasures, everything I watch has merit", type: "hbo" },
        { text: "Animated movies I'm 'too old' for", type: "disney" },
        { text: "Random B-movies with suspiciously low budgets", type: "prime" }
      ]
    },
    {
      id: 5,
      text: "How important is production quality to you?",
      options: [
        { text: "Variety matters more - give me options", type: "netflix" },
        { text: "Essential. If it looks cheap, I can't.", type: "hbo" },
        { text: "The magic is more important than the quality", type: "disney" },
        { text: "I'll watch anything if the plot's interesting", type: "prime" }
      ]
    },
    {
      id: 6,
      text: "Your attention span while watching:",
      options: [
        { text: "Phone in hand, half watching, that's fine", type: "netflix" },
        { text: "Full attention, this requires focus", type: "hbo" },
        { text: "Can quote every line while scrolling", type: "disney" },
        { text: "Depends - sometimes I'm invested, sometimes background noise", type: "prime" }
      ]
    },
    {
      id: 7,
      text: "You recommend a show to friends. Your pitch style:",
      options: [
        { text: "'Everyone's watching this, you HAVE to'", type: "netflix" },
        { text: "'It's so well-written, the themes are incredible'", type: "hbo" },
        { text: "'It's so wholesome, you'll love it'", type: "disney" },
        { text: "'Okay this is random but trust me'", type: "prime" }
      ]
    },
    {
      id: 8,
      text: "What makes you cancel a subscription?",
      options: [
        { text: "Nothing good to watch lately", type: "netflix" },
        { text: "Quality dropped or my shows ended", type: "hbo" },
        { text: "I would never, it has everything I need", type: "disney" },
        { text: "Wait, I'm still paying for this?", type: "prime" }
      ]
    },
    {
      id: 9,
      text: "Your rewatch behavior:",
      options: [
        { text: "Too much new stuff to rewatch old", type: "netflix" },
        { text: "I'll rewatch to catch things I missed", type: "hbo" },
        { text: "I've seen my favorites 47 times", type: "disney" },
        { text: "Sometimes I accidentally rewatch because I forgot I saw it", type: "prime" }
      ]
    },
    {
      id: 10,
      text: "Pick your content vibe:",
      options: [
        { text: "Quantity and variety - something for every mood", type: "netflix" },
        { text: "Quality over quantity - fewer but excellent", type: "hbo" },
        { text: "Comfort and nostalgia - safe and familiar", type: "disney" },
        { text: "Hidden gems - discovering something unexpected", type: "prime" }
      ]
    }
  ],
  results: {
    netflix: {
      type: "Netflix Energy",
      description: "You're plugged into the cultural moment. When something's trending, you're watching it. You've been hurt by sudden cancellations but you keep coming back. Your 'Continue Watching' row is chaotic but that's just who you are. Are you still watching? Yes. Always.",
      traits: ["Culturally connected", "FOMO susceptible", "Variety seeker", "Binge professional"],
      advice: "Not everything trending is worth your time. It's okay to skip the hot show everyone's talking about if it doesn't interest you. Your watch history doesn't need to be a pop culture resume."
    },
    hbo: {
      type: "HBO Prestige",
      description: "You have TASTE. If it's not well-reviewed, you're skeptical. You appreciate complex storytelling, nuanced characters, and high production value. You've definitely said 'it's not TV, it's HBO' either ironically or unironically. You probably have opinions about aspect ratios.",
      traits: ["Quality-focused", "Critically minded", "Attention to detail", "Slightly pretentious (but valid)"],
      advice: "Your standards are high and that's great, but sometimes a trashy show is what the soul needs. Let yourself watch something stupid occasionally. It's cleansing."
    },
    disney: {
      type: "Disney Comfort Soul",
      description: "You know what you like and you LIKE what you like. Comfort rewatches are your love language. You've seen your favorites so many times you could recreate them from memory. New stuff is fine but why risk it when the classics exist? You're probably humming a Disney song right now.",
      traits: ["Comfort-seeker", "Nostalgic soul", "Loyal rewatcher", "Optimistic energy"],
      advice: "Your commitment to joy is admirable. Just make sure you're occasionally challenging yourself with new content. Growth comes from trying new things! (But also it's totally valid to rewatch that movie again.)"
    },
    prime: {
      type: "Prime Wildcard",
      description: "You're chaotic in the best way. You find random stuff no one's heard of and somehow it's great. You've definitely watched something at 3am that you can't explain. Half your recommendations are unhinged. You might forget you have Prime until you need shipping.",
      traits: ["Discovery-driven", "Pleasantly unpredictable", "Hidden gem finder", "Forgetful subscriber"],
      advice: "Your willingness to try random content is a gift. Keep finding those hidden gems. But maybe check your subscriptions - you're definitely paying for something you forgot about."
    }
  }
};
