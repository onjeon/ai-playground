// Your Music Mood Type - Viral entertainment test for American English users

export const testData = {
  id: "entertainment-music-mood",
  title: "Your Music Mood Type",
  description: "How do you use music? Mood enhancer or vibe curator? Let's see!",
  questions: [
    {
      id: 1,
      text: "How do you typically choose what music to listen to?",
      options: [
        { text: "Match it to my current mood - enhance how I feel", type: "enhancer" },
        { text: "Use it to change my mood - music therapy style", type: "changer" },
        { text: "Curate the perfect vibe for the activity", type: "curator" },
        { text: "I have a playlist and I just press play", type: "autopilot" }
      ]
    },
    {
      id: 2,
      text: "You're feeling sad. Music choice:",
      options: [
        { text: "Sad songs - lean INTO the feeling", type: "enhancer" },
        { text: "Upbeat stuff to lift my spirits", type: "changer" },
        { text: "Whatever fits the specific type of sad I'm feeling", type: "curator" },
        { text: "Same stuff I always listen to", type: "autopilot" }
      ]
    },
    {
      id: 3,
      text: "Your Spotify Wrapped usually shows:",
      options: [
        { text: "Reflects my emotional journey through the year", type: "enhancer" },
        { text: "Lots of mood-boosting and energizing tracks", type: "changer" },
        { text: "Carefully chosen genres and artists I've explored", type: "curator" },
        { text: "The same stuff as last year honestly", type: "autopilot" }
      ]
    },
    {
      id: 4,
      text: "Making a playlist for a road trip:",
      options: [
        { text: "Songs that match road trip FEELINGS", type: "enhancer" },
        { text: "High energy to keep everyone awake and pumped", type: "changer" },
        { text: "Curated flow from chill to hype to sing-alongs", type: "curator" },
        { text: "My usual playlist. Why reinvent the wheel?", type: "autopilot" }
      ]
    },
    {
      id: 5,
      text: "How many playlists do you have?",
      options: [
        { text: "Multiple mood-based playlists", type: "enhancer" },
        { text: "Functional playlists - workout, focus, energy", type: "changer" },
        { text: "Extensive collection for every possible scenario", type: "curator" },
        { text: "A few that I actually use over and over", type: "autopilot" }
      ]
    },
    {
      id: 6,
      text: "Someone asks for a song recommendation. You:",
      options: [
        { text: "Ask what mood they're in to match it", type: "enhancer" },
        { text: "Recommend something energizing/uplifting", type: "changer" },
        { text: "Need context - for what occasion/vibe?", type: "curator" },
        { text: "Suggest whatever I've been listening to lately", type: "autopilot" }
      ]
    },
    {
      id: 7,
      text: "Your relationship with music discovery:",
      options: [
        { text: "Find new stuff that resonates with my feelings", type: "enhancer" },
        { text: "Always looking for new energy-boosting tracks", type: "changer" },
        { text: "Actively seek out new artists, genres, sounds", type: "curator" },
        { text: "Stick to what I know and like", type: "autopilot" }
      ]
    },
    {
      id: 8,
      text: "Music at a party you're hosting:",
      options: [
        { text: "Sets the emotional vibe I want people to feel", type: "enhancer" },
        { text: "High energy - keep the party going!", type: "changer" },
        { text: "Carefully crafted playlist with perfect flow", type: "curator" },
        { text: "Whatever's popular, or let someone else handle it", type: "autopilot" }
      ]
    },
    {
      id: 9,
      text: "When you hear a song you love in public:",
      options: [
        { text: "Immediate emotional response - this song gets me", type: "enhancer" },
        { text: "Energy boost! Let's go!", type: "changer" },
        { text: "Note how it fits the setting - good music placement", type: "curator" },
        { text: "Oh nice, I know this one", type: "autopilot" }
      ]
    },
    {
      id: 10,
      text: "Music is primarily for you:",
      options: [
        { text: "Emotional expression and feeling understood", type: "enhancer" },
        { text: "Energy management and mood improvement", type: "changer" },
        { text: "Atmosphere creation and vibe setting", type: "curator" },
        { text: "Background noise or entertainment", type: "autopilot" }
      ]
    }
  ],
  results: {
    enhancer: {
      type: "The Mood Enhancer",
      description: "Music is FEELINGS for you. Happy? Happy songs. Sad? Sad songs. You use music to validate, express, and intensify whatever you're experiencing. Your playlists are emotional journeys and you believe deeply in the power of music to help you feel understood.",
      traits: ["Emotional", "Expressive", "Mood-matching", "Deep-feeling"],
      advice: "Your emotional connection to music is beautiful! Just be careful about wallowing - sometimes music should help you move through feelings, not just stay in them. Balance enhancement with eventual healing."
    },
    changer: {
      type: "The Mood Manipulator",
      description: "Music is your TOOL. Feeling down? Music fixes that. Need energy? There's a playlist for that. You've weaponized music for productivity, mood management, and self-improvement. Your relationship with music is functional and effective.",
      traits: ["Strategic", "Functional", "Energy-focused", "Productive"],
      advice: "Your strategic use of music is smart! But sometimes feelings need to be felt, not bypassed. It's okay to sit in sadness occasionally instead of immediately pumping motivational beats. Feel, then fix."
    },
    curator: {
      type: "The Vibe Curator",
      description: "You don't just listen to music, you CURATE experiences. Every playlist has a purpose, every song earns its place, and you're always aware of how music shapes atmosphere. You've been described as 'the one with good music taste' and you take that seriously.",
      traits: ["Deliberate", "Taste-maker", "Atmospheric", "Quality-focused"],
      advice: "Your attention to musical detail is impressive! But don't let perfectionism stop you from just enjoying music sometimes. Not every playlist needs to be a masterpiece. Sometimes random shuffle is okay."
    },
    autopilot: {
      type: "The Steady Streamer",
      description: "You like what you like and you stick to it. No elaborate playlist systems, no mood-matching algorithms - just good music that you know works for you. Music is familiar and comforting, not an elaborate production. And that's valid!",
      traits: ["Consistent", "Low-maintenance", "Comfortable", "Reliable taste"],
      advice: "Your consistency is valid! But maybe venture outside your usual rotation occasionally. There might be a new favorite waiting to be discovered. The algorithm keeps recommending things for a reason."
    }
  }
};
