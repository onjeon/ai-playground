// Your Movie Snacking Style - Viral entertainment test for American English users

export const testData = {
  id: "entertainment-movie-snack",
  title: "Your Movie Snacking Style",
  description: "Popcorn purist or full meal smuggler? What's your movie food personality?",
  questions: [
    {
      id: 1,
      text: "Your primary movie snack:",
      options: [
        { text: "Popcorn. Large. The classic for a reason", type: "classic" },
        { text: "Multiple things - snack variety is important", type: "maximizer" },
        { text: "Something I brought from outside", type: "smuggler" },
        { text: "Nothing usually - movies don't require food", type: "minimalist" }
      ]
    },
    {
      id: 2,
      text: "Your approach to concession prices:",
      options: [
        { text: "It's part of the experience. I pay it", type: "classic" },
        { text: "Go big or go home. Worth it for movies", type: "maximizer" },
        { text: "Absolutely not. That's why I bring my own", type: "smuggler" },
        { text: "I avoid concessions entirely", type: "minimalist" }
      ]
    },
    {
      id: 3,
      text: "When does your snacking happen during the movie?",
      options: [
        { text: "Spread out - pace myself throughout the whole film", type: "classic" },
        { text: "First half mostly, then I'm full", type: "maximizer" },
        { text: "Whenever I want - I brought plenty", type: "smuggler" },
        { text: "N/A - I'm focused on the movie", type: "minimalist" }
      ]
    },
    {
      id: 4,
      text: "Popcorn butter/seasoning preference:",
      options: [
        { text: "Butter. The right amount for perfection", type: "classic" },
        { text: "Extra everything. Drown it", type: "maximizer" },
        { text: "I make my own popcorn, my own seasonings", type: "smuggler" },
        { text: "Plain if anything - or skip popcorn entirely", type: "minimalist" }
      ]
    },
    {
      id: 5,
      text: "Candy at the movies:",
      options: [
        { text: "Maybe one box to complement the popcorn", type: "classic" },
        { text: "Definitely. Multiple types. Variety matters", type: "maximizer" },
        { text: "From the drugstore on the way, obviously", type: "smuggler" },
        { text: "Too sweet for me during movies", type: "minimalist" }
      ]
    },
    {
      id: 6,
      text: "Drinks during the movie:",
      options: [
        { text: "Medium soda - pairs with popcorn", type: "classic" },
        { text: "Large. Maybe even a refill if it's long", type: "maximizer" },
        { text: "Water bottle I brought from home", type: "smuggler" },
        { text: "Skip drinks - bathroom breaks during movies are the worst", type: "minimalist" }
      ]
    },
    {
      id: 7,
      text: "Sharing snacks with your movie companion:",
      options: [
        { text: "Get our own or share the large popcorn reasonably", type: "classic" },
        { text: "I got enough for both of us, don't worry", type: "maximizer" },
        { text: "Of course - I brought plenty to share", type: "smuggler" },
        { text: "Nothing to share since I didn't bring anything", type: "minimalist" }
      ]
    },
    {
      id: 8,
      text: "Movie night at home - snacks are:",
      options: [
        { text: "Homemade popcorn - movie night ritual", type: "classic" },
        { text: "A whole spread. Pizza, snacks, treats", type: "maximizer" },
        { text: "Whatever I have around that sounds good", type: "smuggler" },
        { text: "Optional. I'm here for the movie", type: "minimalist" }
      ]
    },
    {
      id: 9,
      text: "Hot dogs/nachos/actual food at movies:",
      options: [
        { text: "Sometimes for special occasions", type: "classic" },
        { text: "Yes! A whole meal while watching", type: "maximizer" },
        { text: "I'd bring real food before buying that", type: "smuggler" },
        { text: "That's a lot of eating during a movie", type: "minimalist" }
      ]
    },
    {
      id: 10,
      text: "By the end of the movie, your snack situation is:",
      options: [
        { text: "Finished right on time with the credits", type: "classic" },
        { text: "Some stuff left because I got too much", type: "maximizer" },
        { text: "Bag of evidence hidden in my purse/pocket", type: "smuggler" },
        { text: "Same as when I started - nothing", type: "minimalist" }
      ]
    }
  ],
  results: {
    classic: {
      type: "The Popcorn Purist",
      description: "You understand that movie snacking is about POPCORN. Classic, buttery, perfect popcorn. Maybe a soda, maybe a small candy - but popcorn is the star. You respect tradition and you don't overcomplicate things. The movie theater experience is incomplete without that iconic smell.",
      traits: ["Traditional", "Classic taste", "Experience-focused", "Reasonable portions"],
      advice: "Your appreciation for the classics is valid! Popcorn IS the perfect movie snack. Maybe try a wild topping sometime - jalapeño or white cheddar? - but also there's nothing wrong with the original butter."
    },
    maximizer: {
      type: "The Snack Maximizer",
      description: "If you're at the movies, you're EATING at the movies. Large popcorn, multiple candy options, a drink, maybe nachos - go big or go home. Movie night is an EVENT and the snacks are a major part of it. Your arms are full walking into the theater.",
      traits: ["Abundant", "Experience maximizer", "Variety seeker", "Full commitment"],
      advice: "Your snack enthusiasm is impressive! Just make sure you can actually eat it all and that you can still see the screen over your snack pile. Consider the value of sometimes choosing quality over quantity!"
    },
    smuggler: {
      type: "The Strategic Smuggler",
      description: "You're not paying $8 for candy that costs $1 at CVS. Your bag contains contraband snacks and you're not ashamed. Why give the theater your money when you can bring better snacks for a fraction of the price? This is just smart financial planning.",
      traits: ["Frugal", "Prepared", "Rule-bending", "Smart shopper"],
      advice: "Your economic approach is understandable! Just remember that concession sales are how many theaters survive. Maybe buy a small popcorn occasionally as tribute? Or keep smuggling - you're hardly alone."
    },
    minimalist: {
      type: "The Snack-Free Viewer",
      description: "You go to movies for MOVIES, not for snacks. The constant eating and crunching actually distracts from the experience. You're there to watch, not to munch. Plus, no bathroom breaks, no sticky hands, no distractions. Very focused cinema experience.",
      traits: ["Focused", "Minimalist", "Distraction-free", "Movie-purist"],
      advice: "Your focus on the actual movie is admirable! But sometimes snacks add to the experience rather than distract. One small indulgence might enhance rather than diminish your movie joy. Or keep being you - your approach is valid too!"
    }
  }
};
