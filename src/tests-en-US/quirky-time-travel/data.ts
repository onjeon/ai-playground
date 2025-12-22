// Where Would You Time Travel? - Viral quirky test for American English users

export const testData = {
  id: "quirky-time-travel",
  title: "Where Would You Time Travel?",
  description: "One trip, any time period. Past or future? Let's find your temporal destination!",
  questions: [
    {
      id: 1,
      text: "Your general time travel preference:",
      options: [
        { text: "Way back - ancient history fascinates me", type: "ancient" },
        { text: "Not too far - recent history I've heard about", type: "recent" },
        { text: "The future - I want to know what happens", type: "future" },
        { text: "Personal past - my own timeline", type: "personal" }
      ]
    },
    {
      id: 2,
      text: "What drives your time travel wish?",
      options: [
        { text: "Witnessing major historical events firsthand", type: "ancient" },
        { text: "Experiencing eras I've romanticized", type: "recent" },
        { text: "Curiosity about humanity's fate", type: "future" },
        { text: "Changing or reliving personal moments", type: "personal" }
      ]
    },
    {
      id: 3,
      text: "The era you daydream about most:",
      options: [
        { text: "Ancient civilizations - Egypt, Rome, Greece", type: "ancient" },
        { text: "20th century - roaring 20s, 60s, 80s", type: "recent" },
        { text: "Centuries ahead - space travel, technology", type: "future" },
        { text: "Specific moments from my own life", type: "personal" }
      ]
    },
    {
      id: 4,
      text: "What would you do there?",
      options: [
        { text: "Observe history as it happened", type: "ancient" },
        { text: "Experience the culture and vibe of the era", type: "recent" },
        { text: "Learn what humanity becomes", type: "future" },
        { text: "Fix something or relive a moment", type: "personal" }
      ]
    },
    {
      id: 5,
      text: "Your biggest time travel concern:",
      options: [
        { text: "Surviving without modern conveniences", type: "ancient" },
        { text: "Standing out or not fitting in", type: "recent" },
        { text: "What if the future is terrible?", type: "future" },
        { text: "What if I make things worse?", type: "personal" }
      ]
    },
    {
      id: 6,
      text: "The historical event you'd want to witness:",
      options: [
        { text: "Ancient wonders being built, empires rising", type: "ancient" },
        { text: "Major 20th century moments - moon landing, cultural shifts", type: "recent" },
        { text: "Whatever comes next for humanity", type: "future" },
        { text: "Moments from my own past I want to see again", type: "personal" }
      ]
    },
    {
      id: 7,
      text: "What would you bring back?",
      options: [
        { text: "Knowledge about ancient mysteries", type: "ancient" },
        { text: "The vibe and energy of that era", type: "recent" },
        { text: "Information about what works and what doesn't", type: "future" },
        { text: "Closure or changed outcomes", type: "personal" }
      ]
    },
    {
      id: 8,
      text: "Your time travel personality:",
      options: [
        { text: "The historian who wants to KNOW what really happened", type: "ancient" },
        { text: "The nostalgic who romanticizes certain periods", type: "recent" },
        { text: "The curious futurist who needs to know what's next", type: "future" },
        { text: "The fixer who wants to change personal history", type: "personal" }
      ]
    },
    {
      id: 9,
      text: "If you could only observe (not interact), you'd still go?",
      options: [
        { text: "Absolutely - witnessing is enough", type: "ancient" },
        { text: "Yes - I want to SEE that era", type: "recent" },
        { text: "Yes - I need to know what happens", type: "future" },
        { text: "Maybe not - the point is changing things", type: "personal" }
      ]
    },
    {
      id: 10,
      text: "The real reason you want time travel:",
      options: [
        { text: "Answers to historical mysteries that bug me", type: "ancient" },
        { text: "Escaping to an era I feel drawn to", type: "recent" },
        { text: "Certainty about whether we'll be okay", type: "future" },
        { text: "Regrets I want to address or moments to relive", type: "personal" }
      ]
    }
  ],
  results: {
    ancient: {
      type: "The Ancient History Explorer",
      description: "You'd travel to ANCIENT TIMES! Egypt, Rome, Greece, ancient China - you want to see history's mysteries firsthand. How were the pyramids really built? What was Julius Caesar actually like? Your time travel is about answering the questions that textbooks can't.",
      traits: ["History-obsessed", "Mystery-solver", "Ancient-curious", "Knowledge-seeking"],
      advice: "Your fascination with ancient history speaks to a desire for deep knowledge and truth. While you can't time travel, you CAN visit archaeological sites, study ancient languages, and get as close as possible to these mysteries. The ancient world left clues for you to find."
    },
    recent: {
      type: "The Recent Past Romantic",
      description: "You'd travel to RECENT HISTORY! The roaring 20s jazz clubs, Woodstock, 80s New York - you romanticize certain eras and want to experience their energy firsthand. You've watched the movies, heard the stories, but you want to LIVE it.",
      traits: ["Nostalgic", "Era-romantic", "Culture-seeking", "Experience-driven"],
      advice: "Your romanticization of recent history speaks to something you feel is missing now. Consider what specific qualities of those eras attract you - creativity? Freedom? Community? Find modern spaces that capture that energy. The vibe you seek still exists somewhere."
    },
    future: {
      type: "The Future Curious",
      description: "You'd travel to THE FUTURE! You need to know - do we make it? What happens? Flying cars? Mars colonies? Dystopia or utopia? Your time travel is driven by curiosity about humanity's trajectory and maybe some anxiety about how things turn out.",
      traits: ["Forward-focused", "Curious", "Future-anxious", "Progress-interested"],
      advice: "Your desire to see the future speaks to both curiosity and perhaps some uncertainty about the present. While you can't visit the future, you CAN help shape it. The future you want to see is partly your responsibility to build. What would future-you want you to do now?"
    },
    personal: {
      type: "The Personal Past Traveler",
      description: "You'd travel to YOUR OWN PAST! Not grand history, but personal history. To see lost loved ones again, to fix a regret, to relive a perfect moment. Your time travel is intimate and emotional - about your own story, not the world's.",
      traits: ["Nostalgic", "Regret-processing", "Emotionally-driven", "Personal-focused"],
      advice: "Your desire to revisit your personal past speaks to unfinished emotional business. While you can't change the past, you CAN process it. Grief, regret, and nostalgia are telling you something. Consider what you'd want to change - and what healing looks like without a time machine."
    }
  }
};
