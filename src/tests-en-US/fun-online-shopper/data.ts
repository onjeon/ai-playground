// Your Online Shopping Personality - Fun viral test

export const testData = {
  id: "fun-online-shopper",
  title: "Your Online Shopping Personality",
  description: "Cart full or checkout complete? Impulse buyer or research expert? Let's analyze your digital shopping habits.",
  questions: [
    {
      id: 1,
      text: "Your current online shopping cart(s) contain:",
      options: [
        { text: "Nothing - I clear them after each session", type: "disciplined" },
        { text: "A few items I'm genuinely considering", type: "strategic" },
        { text: "So many items. So many abandoned carts", type: "hoarder" },
        { text: "Things I don't remember adding", type: "impulsive" }
      ]
    },
    {
      id: 2,
      text: "You see something you want online. Your process:",
      options: [
        { text: "Research reviews, compare prices, wait for sales", type: "strategic" },
        { text: "Add to cart, think about it, probably buy it eventually", type: "hoarder" },
        { text: "Buy now. Think later. No regrets (some regrets)", type: "impulsive" },
        { text: "Walk away. I don't need it. Stay strong", type: "disciplined" }
      ]
    },
    {
      id: 3,
      text: "Free shipping threshold. You're $15 away. You:",
      options: [
        { text: "Calculate if the extra item is worth the 'savings'", type: "strategic" },
        { text: "Add random items until I hit it, obviously", type: "impulsive" },
        { text: "Add stuff, remove them, add them again, spiral", type: "hoarder" },
        { text: "Just pay the shipping. It's a trap", type: "disciplined" }
      ]
    },
    {
      id: 4,
      text: "Sales and promotions make you:",
      options: [
        { text: "Strategic - I wait for them to buy planned purchases", type: "strategic" },
        { text: "Dangerous - I buy things just because they're on sale", type: "impulsive" },
        { text: "Overwhelmed - so many options, must add everything", type: "hoarder" },
        { text: "Unmoved - sales are psychological manipulation", type: "disciplined" }
      ]
    },
    {
      id: 5,
      text: "How often do you check package tracking?",
      options: [
        { text: "Obsessively. Where is my package RIGHT NOW", type: "impulsive" },
        { text: "A few times - excited but not obsessive", type: "strategic" },
        { text: "Sometimes I forget I ordered until it arrives", type: "hoarder" },
        { text: "When it comes, it comes", type: "disciplined" }
      ]
    },
    {
      id: 6,
      text: "Late-night shopping sessions are:",
      options: [
        { text: "My danger zone. I buy things I regret at 2 AM", type: "impulsive" },
        { text: "When I do my best 'window shopping' (filling carts)", type: "hoarder" },
        { text: "Rare - I'm not awake for that", type: "disciplined" },
        { text: "When I find the best deals after research", type: "strategic" }
      ]
    },
    {
      id: 7,
      text: "Your email inbox from online stores:",
      options: [
        { text: "Subscribed to my favorites for deal alerts", type: "strategic" },
        { text: "Complete chaos. So many promotional emails", type: "hoarder" },
        { text: "All unsubscribed. Peace and quiet", type: "disciplined" },
        { text: "They know me by name. We're in a relationship", type: "impulsive" }
      ]
    },
    {
      id: 8,
      text: "How many items have you returned in the last year?",
      options: [
        { text: "Almost none - I research before buying", type: "strategic" },
        { text: "A few - impulse buys that didn't work out", type: "impulsive" },
        { text: "Returns require effort. Things just... stay", type: "hoarder" },
        { text: "Zero because I barely buy anything", type: "disciplined" }
      ]
    },
    {
      id: 9,
      text: "A 'flash sale' notification pops up. You:",
      options: [
        { text: "Check if it's something on my wishlist", type: "strategic" },
        { text: "DROP EVERYTHING. Must see what's on sale", type: "impulsive" },
        { text: "Open 15 tabs and add 20 things to cart", type: "hoarder" },
        { text: "Ignore. Flash sales are just FOMO marketing", type: "disciplined" }
      ]
    },
    {
      id: 10,
      text: "Your honest relationship with 'add to cart':",
      options: [
        { text: "It's basically my hobby. I rarely buy", type: "hoarder" },
        { text: "I add things, evaluate, purchase thoughtfully", type: "strategic" },
        { text: "Add to cart and checkout are the same click", type: "impulsive" },
        { text: "I add sparingly and with intention", type: "disciplined" }
      ]
    }
  ],
  results: {
    strategic: {
      type: "The Strategic Shopper",
      description: "You've turned online shopping into an art form. Price tracking, review analysis, sale waiting - you do it all. Your purchases are calculated decisions, not impulses. You've probably saved hundreds with your patience and research. Your friends consult you before buying anything.",
      traits: ["Patient", "Researched", "Disciplined", "Deal-savvy"],
      advice: "Your strategy is impressive! Just remember: sometimes the perfect moment to buy is now. Analysis paralysis can cost you too. Trust your research and pull the trigger occasionally."
    },
    disciplined: {
      type: "The Minimalist Buyer",
      description: "You have iron willpower. Sales don't tempt you, carts stay empty, and you only buy what you truly need. Your bank account thanks you. Your closet is organized. You're basically a shopping Jedi, immune to marketing's dark side.",
      traits: ["Disciplined", "Minimal", "Intentional", "Unmoved"],
      advice: "Your discipline is admirable! But it's okay to treat yourself sometimes. Not every purchase needs to be strictly necessary. A little joy shopping is healthy - as long as you can afford it."
    },
    hoarder: {
      type: "The Digital Cart Collector",
      description: "Your carts across various websites are full of hopes, dreams, and items you'll never actually buy. You shop for the thrill of adding, not purchasing. Your wishlists are legendary. You have 47 tabs open right now. This is a lifestyle.",
      traits: ["Indecisive", "Dreamy", "Collector", "Overwhelmed"],
      advice: "Maybe commit to something? Those carts expire, you know. Try the rule: if it's still in your cart after a week and you still want it, buy it. Otherwise, let it go. Free yourself from cart purgatory."
    },
    impulsive: {
      type: "The Instant Gratification Shopper",
      description: "See it. Want it. Buy it. Your approach to online shopping is beautifully direct and financially terrifying. One-click purchasing is either your best friend or worst enemy. Your mailroom knows you by name. Regret is something you experience later.",
      traits: ["Spontaneous", "Decisive", "Enthusiastic", "Regretful"],
      advice: "Consider implementing a 24-hour rule: add to cart, wait a day, then decide. It won't kill the fun, but it might save you from receiving things you definitely don't need. Also, maybe check your bank account more often."
    }
  }
};
