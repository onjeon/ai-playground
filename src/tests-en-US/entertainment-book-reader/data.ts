// What Kind of Book Reader Are You? - Viral entertainment test for American English users

export const testData = {
  id: "entertainment-book-reader",
  title: "What Kind of Book Reader Are You?",
  description: "Speed reader or one-book-a-year struggler? Let's find your reading personality!",
  questions: [
    {
      id: 1,
      text: "Your current 'books in progress' situation:",
      options: [
        { text: "Multiple books going simultaneously", type: "voracious" },
        { text: "One book, focused, until I finish it", type: "dedicated" },
        { text: "One book... that I've been reading for months", type: "slow" },
        { text: "Book? I haven't finished a book in ages", type: "non_reader" }
      ]
    },
    {
      id: 2,
      text: "Your reading pace:",
      options: [
        { text: "Fast - I consume books like content", type: "voracious" },
        { text: "Steady - a book a month-ish, depending", type: "dedicated" },
        { text: "Glacial - I'm a slow, distracted reader", type: "slow" },
        { text: "What pace? I barely start books", type: "non_reader" }
      ]
    },
    {
      id: 3,
      text: "Your relationship with your TBR (to be read) pile:",
      options: [
        { text: "Massive and growing but I'm working through it!", type: "voracious" },
        { text: "Reasonable - I buy roughly what I can read", type: "dedicated" },
        { text: "Intimidating. It haunts me. So many unread books", type: "slow" },
        { text: "What pile? I don't accumulate books I won't read", type: "non_reader" }
      ]
    },
    {
      id: 4,
      text: "When you love a book:",
      options: [
        { text: "Immediately start recommending and read more by that author", type: "voracious" },
        { text: "Savor the ending, let it sit, then move on", type: "dedicated" },
        { text: "Feel accomplished that I actually finished something", type: "slow" },
        { text: "This happens so rarely I'm not sure", type: "non_reader" }
      ]
    },
    {
      id: 5,
      text: "Your reading environment:",
      options: [
        { text: "Anywhere. I read in any spare moment", type: "voracious" },
        { text: "Dedicated reading time - cozy, focused, intentional", type: "dedicated" },
        { text: "Has to be perfect or I can't focus", type: "slow" },
        { text: "Hasn't been established because I don't read much", type: "non_reader" }
      ]
    },
    {
      id: 6,
      text: "BookTok/Bookstagram/reading communities:",
      options: [
        { text: "My source for the next 50 books on my list", type: "voracious" },
        { text: "Enjoy them, take recommendations thoughtfully", type: "dedicated" },
        { text: "Make me feel guilty about my reading pace", type: "slow" },
        { text: "Not for me - I'm not really a 'reader'", type: "non_reader" }
      ]
    },
    {
      id: 7,
      text: "DNF (did not finish) - do you do it?",
      options: [
        { text: "Yes, life's too short and my TBR is too long", type: "voracious" },
        { text: "Rarely, I usually push through", type: "dedicated" },
        { text: "I DNF by accident - just stop reading and forget", type: "slow" },
        { text: "Most books I start are DNF honestly", type: "non_reader" }
      ]
    },
    {
      id: 8,
      text: "Your book format preference:",
      options: [
        { text: "Whatever gets the book in my hands fastest", type: "voracious" },
        { text: "Physical books, the reading experience matters", type: "dedicated" },
        { text: "Audio maybe? Easier than actually reading", type: "slow" },
        { text: "No strong preference since I rarely engage with any", type: "non_reader" }
      ]
    },
    {
      id: 9,
      text: "How often do you talk about books?",
      options: [
        { text: "Constantly. What I'm reading, what I've read", type: "voracious" },
        { text: "When I finish something good, I'll share", type: "dedicated" },
        { text: "Not much to report on my slow progress", type: "slow" },
        { text: "Not relevant to my conversations usually", type: "non_reader" }
      ]
    },
    {
      id: 10,
      text: "Your reading goal for the year:",
      options: [
        { text: "50+ books and I'm tracking it", type: "voracious" },
        { text: "A reasonable number I set for myself", type: "dedicated" },
        { text: "Any finished book would be a win", type: "slow" },
        { text: "I don't set reading goals", type: "non_reader" }
      ]
    }
  ],
  results: {
    voracious: {
      type: "The Voracious Reader",
      description: "Books are your OXYGEN. You devour them, you're always in the middle of something, and your TBR pile is a monument to ambition. You recommend books constantly, track your reading, and get twitchy if you don't have something to read. Being called 'a reader' is a personality trait for you.",
      traits: ["Prolific", "Passionate", "TBR-accumulating", "Book-obsessed"],
      advice: "Your reading habit is impressive! Just make sure you're actually absorbing and enjoying, not just consuming. Quality over quantity occasionally. And your TBR will never be complete - make peace with that."
    },
    dedicated: {
      type: "The Intentional Reader",
      description: "You read with PURPOSE. One book at a time, finish what you start, and choose your reads carefully. Reading is a valued part of your life but not an obsession. You're the healthy, balanced reader that everyone should aspire to be.",
      traits: ["Focused", "Intentional", "Balanced", "Thoughtful"],
      advice: "Your approach to reading is admirable! Keep making space for books in your life. Maybe try stepping outside your comfort genres occasionally - you have the discipline to push through even if it's different."
    },
    slow: {
      type: "The Perpetual Starter",
      description: "You WANT to read. You buy books, you start books, you have good intentions. But somehow that book has been on your nightstand for four months with the bookmark on page 47. Life gets in the way, attention wanders, and reading just... doesn't happen like you wish it would.",
      traits: ["Well-intentioned", "Distracted", "Aspirational", "Slow-going"],
      advice: "Your struggle is shared by many! Try shorter books, audiobooks while doing other things, or just accepting that you're not a heavy reader - and that's okay. One book a year is still reading!"
    },
    non_reader: {
      type: "The Honest Non-Reader",
      description: "Reading just isn't your thing and you're not pretending otherwise. You absorb information and stories through other means - TV, podcasts, articles, conversation. Books aren't essential to your life and you don't feel guilty about it. Very evolved honesty, actually.",
      traits: ["Self-aware", "Alternative-content-consumer", "Guilt-free", "Honest"],
      advice: "Your honesty is refreshing! Not everyone needs to be a book person. But maybe try audiobooks? Same content, no page turning required. Or just keep being yourself - books aren't morally superior to other content."
    }
  }
};
