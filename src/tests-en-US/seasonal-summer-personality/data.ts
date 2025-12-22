// Your Summer Personality - Viral seasonal test for American English users

export const testData = {
  id: "seasonal-summer-personality",
  title: "Your Summer Personality",
  description: "Beach bum or summer workaholic? What kind of summer person are you REALLY?",
  questions: [
    {
      id: 1,
      text: "First day of summer. You're:",
      options: [
        { text: "Already at the beach before sunrise", type: "beach_bum" },
        { text: "Organizing my summer bucket list", type: "planner" },
        { text: "Sleeping in because the AC is perfect", type: "indoor" },
        { text: "Planning which parties and festivals to hit", type: "social" }
      ]
    },
    {
      id: 2,
      text: "Your ideal summer day involves:",
      options: [
        { text: "Sand between my toes and waves in my ears", type: "beach_bum" },
        { text: "A perfectly scheduled adventure", type: "planner" },
        { text: "Air conditioning and cold drinks indoors", type: "indoor" },
        { text: "BBQs, pool parties, and good vibes", type: "social" }
      ]
    },
    {
      id: 3,
      text: "Summer fashion for you means:",
      options: [
        { text: "Swimsuit as a lifestyle", type: "beach_bum" },
        { text: "Weather-appropriate outfits for each activity", type: "planner" },
        { text: "Whatever's cool enough to survive in", type: "indoor" },
        { text: "Festival fits and cute summer looks", type: "social" }
      ]
    },
    {
      id: 4,
      text: "Your relationship with the sun:",
      options: [
        { text: "We're best friends. Tan is a personality trait", type: "beach_bum" },
        { text: "I respect it with SPF 50 and scheduled shade", type: "planner" },
        { text: "We have a restraining order", type: "indoor" },
        { text: "Love a good golden hour photo op", type: "social" }
      ]
    },
    {
      id: 5,
      text: "Summer reading/entertainment:",
      options: [
        { text: "Books get sandy and waterlogged", type: "beach_bum" },
        { text: "A curated reading list with goals", type: "planner" },
        { text: "Binge-watching shows in the dark", type: "indoor" },
        { text: "Who has time? I'm socializing!", type: "social" }
      ]
    },
    {
      id: 6,
      text: "Your summer hydration strategy:",
      options: [
        { text: "Coconut water and ocean saltwater balance", type: "beach_bum" },
        { text: "64oz minimum, tracked on an app", type: "planner" },
        { text: "Iced coffee counts as water, right?", type: "indoor" },
        { text: "Whatever drink is in my hand at the party", type: "social" }
      ]
    },
    {
      id: 7,
      text: "When invited to a summer activity you:",
      options: [
        { text: "I'm in if it's near water", type: "beach_bum" },
        { text: "Check my calendar and respond appropriately", type: "planner" },
        { text: "Is it indoors with AC? Then maybe", type: "indoor" },
        { text: "Absolutely yes, when and where?", type: "social" }
      ]
    },
    {
      id: 8,
      text: "Your summer soundtrack:",
      options: [
        { text: "Beach vibes playlist on repeat", type: "beach_bum" },
        { text: "Different playlists for different activities", type: "planner" },
        { text: "Whatever's trending while I'm inside", type: "indoor" },
        { text: "Whatever the DJ is playing", type: "social" }
      ]
    },
    {
      id: 9,
      text: "Summer nights are for:",
      options: [
        { text: "Bonfires on the beach", type: "beach_bum" },
        { text: "The evening activities I've planned", type: "planner" },
        { text: "Finally going outside when it's cooler", type: "indoor" },
        { text: "Rooftop bars and late-night hangouts", type: "social" }
      ]
    },
    {
      id: 10,
      text: "When summer ends, you feel:",
      options: [
        { text: "Devastated. Already counting down to next year", type: "beach_bum" },
        { text: "Satisfied I completed my summer goals", type: "planner" },
        { text: "Relief. Sweater weather is coming", type: "indoor" },
        { text: "Nostalgic for all the memories made", type: "social" }
      ]
    }
  ],
  results: {
    beach_bum: {
      type: "The Beach Bum",
      description: "You ARE summer. Sand in your car, salt in your hair, and a permanent tan line. From Memorial Day to Labor Day, you're basically a mermaid who occasionally touches land. You've considered making 'professional beach-goer' a career.",
      traits: ["Sun-worshipper", "Ocean-obsessed", "Laid-back", "Vitamin D powered"],
      advice: "You're living the dream! Just maybe check in with your friends who don't own swimsuits. And wear sunscreen - your future skin will thank you."
    },
    planner: {
      type: "The Summer Strategist",
      description: "You don't just have summers, you OPTIMIZE them. Bucket list? Check. Google doc with activities by category? Obviously. You squeeze every ounce of joy from June-August with military precision. Summer is too short to waste!",
      traits: ["Organized", "Goal-oriented", "Efficient", "Adventure-seeking"],
      advice: "Your summers are impressive! But sometimes the best memories come from unplanned moments. Try leaving one weekend totally agenda-free. Chaos can be fun!"
    },
    indoor: {
      type: "The AC Appreciator",
      description: "You have a complicated relationship with summer. Sure, it's 'nice' outside, but it's PERFECT inside where the air is cold and the vibes are controlled. You emerge at sunset like a well-cooled vampire. And honestly? You're onto something.",
      traits: ["Cool-seeker", "Indoor enthusiast", "Comfort-first", "Night owl"],
      advice: "No shame in your AC game! But your Vitamin D might be struggling. Try a sunrise or sunset adventure when it's not oppressively hot. The outside world misses you occasionally."
    },
    social: {
      type: "The Social Butterfly",
      description: "Summer is your SEASON. Every weekend is booked, every party has your name on the list, and your Instagram stories are 57 frames of pure summer vibes. You have more summer plans than there are summer days. FOMO? Never met her - you're AT everything.",
      traits: ["Energetic", "Connected", "FOMO-immune", "Memory-maker"],
      advice: "You're creating memories and connections! But also... rest exists. A solo beach day or quiet evening won't ruin your social status. Even social butterflies need to land sometimes."
    }
  }
};
