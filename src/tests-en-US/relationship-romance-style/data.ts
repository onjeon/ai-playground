// Your Romance Style - Viral relationship test for American English users

export const testData = {
  id: "relationship-romance-style",
  title: "Your Romance Style",
  description: "How do you love? Grand gestures or quiet moments? Let's find your romance signature!",
  questions: [
    {
      id: 1,
      text: "Your ideal romantic gesture from a partner?",
      options: [
        { text: "Surprise trip or grand public declaration", type: "grand" },
        { text: "Handwritten letter or thoughtful gift", type: "thoughtful" },
        { text: "Quality time just being together", type: "quiet" },
        { text: "Random daily texts saying they're thinking of me", type: "consistent" }
      ]
    },
    {
      id: 2,
      text: "Valentine's Day vibes:",
      options: [
        { text: "Go BIG or go home", type: "grand" },
        { text: "Something meaningful and personal", type: "thoughtful" },
        { text: "Low-key night in together", type: "quiet" },
        { text: "Just another day to show love like any other", type: "consistent" }
      ]
    },
    {
      id: 3,
      text: "How do you tell someone you love them?",
      options: [
        { text: "Dramatic, memorable moment", type: "grand" },
        { text: "Heartfelt, carefully chosen words", type: "thoughtful" },
        { text: "Quietly, in an intimate moment", type: "quiet" },
        { text: "Often, in everyday moments", type: "consistent" }
      ]
    },
    {
      id: 4,
      text: "Anniversary plans:",
      options: [
        { text: "Something they'll never forget", type: "grand" },
        { text: "Recreation of a meaningful moment", type: "thoughtful" },
        { text: "Simple but intimate celebration", type: "quiet" },
        { text: "Acknowledge it but no huge deal", type: "consistent" }
      ]
    },
    {
      id: 5,
      text: "You find the perfect gift for your partner. You...",
      options: [
        { text: "Create a whole presentation around it", type: "grand" },
        { text: "Write a note explaining why it's perfect", type: "thoughtful" },
        { text: "Give it casually, no big production", type: "quiet" },
        { text: "Save it for whenever the moment feels right", type: "consistent" }
      ]
    },
    {
      id: 6,
      text: "The most romantic thing someone could do for you?",
      options: [
        { text: "Public declaration or surprise event", type: "grand" },
        { text: "Remember something small I mentioned months ago", type: "thoughtful" },
        { text: "Just hold me and be present", type: "quiet" },
        { text: "Show up for me, every single day", type: "consistent" }
      ]
    },
    {
      id: 7,
      text: "Your romance aesthetic is...",
      options: [
        { text: "Movie-level dramatic love story", type: "grand" },
        { text: "Indie film with meaningful details", type: "thoughtful" },
        { text: "Cozy, domestic, everyday love", type: "quiet" },
        { text: "Long-term partnership goals", type: "consistent" }
      ]
    },
    {
      id: 8,
      text: "What makes you feel most loved?",
      options: [
        { text: "Being shown off and celebrated", type: "grand" },
        { text: "Being deeply known and understood", type: "thoughtful" },
        { text: "Comfortable silence together", type: "quiet" },
        { text: "Daily check-ins and presence", type: "consistent" }
      ]
    },
    {
      id: 9,
      text: "Romance, to you, is really about...",
      options: [
        { text: "Making memories that last forever", type: "grand" },
        { text: "The little things that show they're paying attention", type: "thoughtful" },
        { text: "Feeling at home with someone", type: "quiet" },
        { text: "Building a life together, day by day", type: "consistent" }
      ]
    },
    {
      id: 10,
      text: "Your relationship motto:",
      options: [
        { text: "'Go big or go home'", type: "grand" },
        { text: "'It's the thought that counts'", type: "thoughtful" },
        { text: "'Just you and me is enough'", type: "quiet" },
        { text: "'Love is a verb, every day'", type: "consistent" }
      ]
    }
  ],
  results: {
    grand: {
      type: "The Dramatic Romantic",
      description: "You want the fairy tale, the movie moment, the unforgettable gesture. Love, to you, should be FELT in big ways. You're not interested in quiet - you want passion, drama, and moments that take your breath away. Rom-coms are your inspiration.",
      traits: ["Loves big gestures", "Creates memorable moments", "Thrives on passion", "Wants to be swept off feet"],
      advice: "Grand gestures are beautiful, but don't overlook the small things. Sometimes the quiet, consistent love is what sustains a relationship long-term."
    },
    thoughtful: {
      type: "The Intentional Romantic",
      description: "You're about quality over quantity. You notice the details, remember the small things, and believe that a thoughtful gesture beats a generic grand one every time. Your love is personalized, intentional, and meaningful.",
      traits: ["Detail-oriented", "Values meaning over size", "Gives thoughtful gifts", "Remembers everything"],
      advice: "Your thoughtfulness is a gift, but don't forget to be spontaneous sometimes too. Not everything needs to be perfectly planned - imperfect moments can be magical too."
    },
    quiet: {
      type: "The Intimate Romantic",
      description: "Forget the flash - you want real, quiet intimacy. Your romance lives in the comfortable silences, the shared glances, the feeling of home with another person. You don't need grand gestures when you have genuine connection.",
      traits: ["Values presence over performance", "Loves quiet moments", "Finds romance in simplicity", "Prioritizes comfort"],
      advice: "Your gentle love is beautiful, but sometimes your partner might need to SEE and HEAR your feelings more explicitly. Don't assume they know - show them too."
    },
    consistent: {
      type: "The Steady Romantic",
      description: "You believe love is a daily choice, not a one-time event. Romance, for you, is in the everyday - the morning texts, the reliability, the showing up. You're building something lasting, and that's romantic in the truest sense.",
      traits: ["Values consistency", "Everyday expressions of love", "Long-term focused", "Reliable and present"],
      advice: "Your steady love is the foundation of lasting relationships. Just remember to surprise your partner sometimes - a little spontaneity keeps things fresh."
    }
  }
};
