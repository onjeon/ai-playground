// What Does Your Movie Taste Say? - Viral entertainment test for American English users

export const testData = {
  id: "entertainment-movie-taste",
  title: "What Does Your Movie Taste Say About You?",
  description: "Blockbuster lover or indie snob? What your movie choices reveal about you!",
  questions: [
    {
      id: 1,
      text: "Friday night, picking a movie. You choose:",
      options: [
        { text: "Whatever new blockbuster everyone's talking about", type: "mainstream" },
        { text: "Something well-reviewed with depth and meaning", type: "critic" },
        { text: "A hidden gem or foreign film I discovered", type: "indie" },
        { text: "A comfort rewatch of something I love", type: "nostalgic" }
      ]
    },
    {
      id: 2,
      text: "Your Letterboxd/movie ratings tend to be:",
      options: [
        { text: "Similar to popular opinion - I know what's good", type: "mainstream" },
        { text: "Based on craft - acting, directing, script quality", type: "critic" },
        { text: "Contrarian - I find merit in overlooked stuff", type: "indie" },
        { text: "High ratings for emotional connection and memories", type: "nostalgic" }
      ]
    },
    {
      id: 3,
      text: "Marvel/DC superhero movies are:",
      options: [
        { text: "Fun! Entertainment doesn't have to be deep", type: "mainstream" },
        { text: "Hit or miss - some are well-crafted, some are lazy", type: "critic" },
        { text: "Oversaturated and rarely interesting to me", type: "indie" },
        { text: "Great for nostalgia and the characters I love", type: "nostalgic" }
      ]
    },
    {
      id: 4,
      text: "You recommend movies based on:",
      options: [
        { text: "What's popular and likely to please everyone", type: "mainstream" },
        { text: "Quality and how much it affected me intellectually", type: "critic" },
        { text: "Unique vision and artistic merit", type: "indie" },
        { text: "How much the other person will emotionally connect", type: "nostalgic" }
      ]
    },
    {
      id: 5,
      text: "Your feelings about subtitles:",
      options: [
        { text: "Prefer to avoid them if possible - easier to watch", type: "mainstream" },
        { text: "Fine - won't avoid a good movie because of them", type: "critic" },
        { text: "No problem - some of the best films aren't in English", type: "indie" },
        { text: "Depends on the movie and my mood", type: "nostalgic" }
      ]
    },
    {
      id: 6,
      text: "When critics hate a movie audiences love:",
      options: [
        { text: "Audiences are right - entertainment value matters", type: "mainstream" },
        { text: "Depends - I evaluate on my own criteria", type: "critic" },
        { text: "Critics usually have a point about quality", type: "indie" },
        { text: "If people enjoy it, that matters too", type: "nostalgic" }
      ]
    },
    {
      id: 7,
      text: "Your movie watchlist includes:",
      options: [
        { text: "Upcoming releases and stuff trending on streaming", type: "mainstream" },
        { text: "Award contenders and critically acclaimed films", type: "critic" },
        { text: "Festival favorites and international cinema", type: "indie" },
        { text: "Rewatches and movies friends recommended", type: "nostalgic" }
      ]
    },
    {
      id: 8,
      text: "Movie theaters are:",
      options: [
        { text: "Best for the big blockbuster experience!", type: "mainstream" },
        { text: "Great for films that deserve the big screen", type: "critic" },
        { text: "Important for supporting cinema as art", type: "indie" },
        { text: "Special for the memories and experience", type: "nostalgic" }
      ]
    },
    {
      id: 9,
      text: "A 'good movie' to you is one that:",
      options: [
        { text: "Entertains and gives me a good time", type: "mainstream" },
        { text: "Is well-crafted with strong filmmaking elements", type: "critic" },
        { text: "Takes risks and does something original", type: "indie" },
        { text: "Makes me feel something and stays with me", type: "nostalgic" }
      ]
    },
    {
      id: 10,
      text: "People describe your movie taste as:",
      options: [
        { text: "Easy-going, fun, good for movie nights", type: "mainstream" },
        { text: "Refined, knowledgeable, a good resource", type: "critic" },
        { text: "Pretentious (but I have great recommendations)", type: "indie" },
        { text: "Sentimental, rewatcher, comfort-focused", type: "nostalgic" }
      ]
    }
  ],
  results: {
    mainstream: {
      type: "The Crowd Pleaser",
      description: "You watch movies to be ENTERTAINED, and there's nothing wrong with that! You're the ideal movie night companion because you're up for what's popular and fun. Not everything needs to be a masterpiece - sometimes popcorn movies are exactly what we need. Your taste is accessible and your energy is positive.",
      traits: ["Accessible", "Fun-seeking", "Trend-aware", "Easy-going"],
      advice: "Your approach to movies is valid and fun! Maybe occasionally challenge yourself with something outside your comfort zone - you might discover a new favorite. But also, keep enjoying what you enjoy!"
    },
    critic: {
      type: "The Discerning Viewer",
      description: "You appreciate the CRAFT of filmmaking. Acting, directing, cinematography, script - you notice quality and you value it. You're not a snob, you're just... informed. You can enjoy a blockbuster AND explain why it works or doesn't. Your recommendations are trustworthy because you've thought about them.",
      traits: ["Analytical", "Quality-focused", "Informed", "Thoughtful"],
      advice: "Your critical eye is valuable! Just remember that sometimes 'technically good' and 'enjoyable' are different things. Make room for both. Not every movie needs to be analyzed - some are just for fun."
    },
    indie: {
      type: "The Cinema Purist",
      description: "You seek out the unusual, the artistic, the overlooked gems. Mainstream cinema feels tired to you - you want vision, risk, and originality. Your friends either trust your recommendations implicitly or think you're pretentious. Probably both. You've definitely said 'actually, the original foreign version was better.'",
      traits: ["Artistic", "Adventurous", "Discerning", "Slightly pretentious"],
      advice: "Your dedication to cinema as art is admirable! But accessibility isn't the same as mediocrity. Sometimes popular things are popular because they're good. Try to enjoy things without ranking them."
    },
    nostalgic: {
      type: "The Comfort Rewatcher",
      description: "Movies for you are about FEELING something. You rewatch favorites, you connect emotionally, and a movie's impact on you matters more than objective quality. Your movie choices are a warm blanket. You're not afraid to watch the same film for the 47th time because it still makes you feel things.",
      traits: ["Sentimental", "Emotional", "Comfort-seeking", "Loyal"],
      advice: "Your emotional connection to movies is beautiful! But make sure you're also leaving room for new favorites. The next comfort movie might be one you haven't seen yet. Balance rewatches with discovery!"
    }
  }
};
