// What's Your Vibe? - Viral self-discovery test for American English users

export const testData = {
  id: "self-vibe-check",
  title: "What's Your Vibe?",
  description: "Everyone has a vibe. That thing that makes you, YOU. What's yours? Time for the ultimate vibe check.",
  questions: [
    {
      id: 1,
      text: "Your ideal weekend looks like:",
      options: [
        { text: "Chaos and adventure - I'll sleep when I'm dead", type: "chaotic" },
        { text: "Cozy vibes - candles, books, soft things", type: "cozy" },
        { text: "Mysterious - night drives, new places, aesthetic moments", type: "mysterious" },
        { text: "Wholesome - friends, sunshine, simple pleasures", type: "wholesome" }
      ]
    },
    {
      id: 2,
      text: "Your aesthetic could be described as:",
      options: [
        { text: "Eclectic/chaotic/colorful", type: "chaotic" },
        { text: "Soft/warm/inviting", type: "cozy" },
        { text: "Dark/moody/atmospheric", type: "mysterious" },
        { text: "Bright/clean/genuine", type: "wholesome" }
      ]
    },
    {
      id: 3,
      text: "Your go-to drink order:",
      options: [
        { text: "Whatever's new/weird/recommended", type: "chaotic" },
        { text: "Something warm and comforting", type: "cozy" },
        { text: "Something specific and slightly pretentious", type: "mysterious" },
        { text: "Simple classic that always hits", type: "wholesome" }
      ]
    },
    {
      id: 4,
      text: "People are drawn to you because:",
      options: [
        { text: "I'm unpredictable and fun", type: "chaotic" },
        { text: "I make them feel comfortable and safe", type: "cozy" },
        { text: "There's something intriguing about me", type: "mysterious" },
        { text: "I'm genuine and make them feel good", type: "wholesome" }
      ]
    },
    {
      id: 5,
      text: "Your emotional baseline:",
      options: [
        { text: "Excited/scattered/all over the place", type: "chaotic" },
        { text: "Calm/content/peaceful", type: "cozy" },
        { text: "Contemplative/deep/intense", type: "mysterious" },
        { text: "Happy/optimistic/hopeful", type: "wholesome" }
      ]
    },
    {
      id: 6,
      text: "Your room probably has:",
      options: [
        { text: "Organized chaos - stuff everywhere but I know where everything is", type: "chaotic" },
        { text: "All the cozy things - blankets, pillows, warm lighting", type: "cozy" },
        { text: "Mood lighting and carefully curated decor", type: "mysterious" },
        { text: "Plants, photos of loved ones, natural light", type: "wholesome" }
      ]
    },
    {
      id: 7,
      text: "Your love language comes across as:",
      options: [
        { text: "Chaotic affection - intense, random, enthusiastic", type: "chaotic" },
        { text: "Physical comfort - cuddles, presence, warmth", type: "cozy" },
        { text: "Deep conversation - intensity, vulnerability, connection", type: "mysterious" },
        { text: "Acts of care - remembering things, showing up", type: "wholesome" }
      ]
    },
    {
      id: 8,
      text: "Your vibe anthem would be:",
      options: [
        { text: "Something hype that makes you want to do something wild", type: "chaotic" },
        { text: "Something soft and comforting like a warm hug", type: "cozy" },
        { text: "Something moody with deep lyrics", type: "mysterious" },
        { text: "Something feel-good that makes you smile", type: "wholesome" }
      ]
    },
    {
      id: 9,
      text: "On a dating app, your vibe would attract:",
      options: [
        { text: "People looking for adventure and spontaneity", type: "chaotic" },
        { text: "People looking for comfort and security", type: "cozy" },
        { text: "People who want to 'figure you out'", type: "mysterious" },
        { text: "People who want something real and genuine", type: "wholesome" }
      ]
    },
    {
      id: 10,
      text: "Complete the sentence: 'I just want to...'",
      options: [
        { text: "...do something crazy and feel alive", type: "chaotic" },
        { text: "...be cozy and comfortable with people I love", type: "cozy" },
        { text: "...experience something deep and meaningful", type: "mysterious" },
        { text: "...enjoy simple pleasures and genuine connection", type: "wholesome" }
      ]
    }
  ],
  results: {
    chaotic: {
      type: "Chaotic Good Vibe",
      description: "Your vibe is UNHINGED (affectionate). You're spontaneous, adventurous, and keep people on their toes. Boring is your enemy. Life with you is never predictable - and that's exactly how you like it. Your energy is a party that people want to be invited to.",
      traits: ["Spontaneous", "Exciting", "Unpredictable", "Main character energy"],
      advice: "Your chaos is part of your charm, but make sure you're not running from something by always moving. Stillness isn't death - sometimes the most rebellious thing you can do is be present. Chaotic moments, grounded foundation."
    },
    cozy: {
      type: "Cozy Soul Vibe",
      description: "Your vibe is a warm blanket. Comfort radiates from you. People feel safe, welcome, and at home in your presence. You've mastered the art of making things feel good - from your physical space to your emotional energy. You're the candle in a cold world.",
      traits: ["Comforting", "Warm", "Nurturing", "Safety-creating"],
      advice: "Your cozy energy is healing for others, but make sure you're not using comfort as avoidance. Growth sometimes requires discomfort. Step out of the warmth occasionally - you can always come back."
    },
    mysterious: {
      type: "Mysterious Depth Vibe",
      description: "Your vibe is intriguing. There's more to you than meets the eye, and people sense it. You're drawn to depth, meaning, and the spaces between words. You don't overshare - you reveal in layers. People want to understand you, and that's kind of the point.",
      traits: ["Intriguing", "Deep", "Intense", "Selectively vulnerable"],
      advice: "Your mystery is magnetic, but make sure it's not a wall. Let people in sometimes. Being known is scary but also necessary. Depth shared is depth doubled - you don't have to be an ocean alone."
    },
    wholesome: {
      type: "Wholesome Pure Vibe",
      description: "Your vibe is genuine. Uncomplicated. Real. You find joy in simple things and bring out the best in people. There's no pretense with you - what you see is what you get, and what you get is good. In a world of irony, you're refreshingly sincere.",
      traits: ["Genuine", "Joyful", "Simple", "Authentically good"],
      advice: "Your wholesomeness is rare and beautiful - protect it, but don't weaponize it. You can be good AND set boundaries. You can be kind AND call out harm. Wholesome doesn't mean pushover."
    }
  }
};
