// What Your Music Taste Says About You - Viral personality test for American English users

export const testData = {
  id: "personality-music-taste",
  title: "What Your Music Taste Says About You",
  description: "Your playlist is telling secrets about your personality! Let's decode it.",
  questions: [
    {
      id: 1,
      text: "Your ideal road trip soundtrack:",
      options: [
        { text: "High-energy bangers to sing along to", type: "mainstream" },
        { text: "A curated mix of genres and vibes", type: "eclectic" },
        { text: "Deep cuts and underground artists", type: "indie" },
        { text: "Chill lo-fi or acoustic vibes", type: "mellow" }
      ]
    },
    {
      id: 2,
      text: "When a friend shares a song, you usually:",
      options: [
        { text: "Already know it if it's popular enough", type: "mainstream" },
        { text: "Give anything a fair listen, might love it", type: "eclectic" },
        { text: "Hope it's something obscure and interesting", type: "indie" },
        { text: "Appreciate it if it matches my calm vibe", type: "mellow" }
      ]
    },
    {
      id: 3,
      text: "Your relationship with music charts and top hits:",
      options: [
        { text: "I keep up! They're popular for a reason", type: "mainstream" },
        { text: "Some hits are good, some I skip", type: "eclectic" },
        { text: "I find new music way before it charts, if ever", type: "indie" },
        { text: "I don't really follow charts", type: "mellow" }
      ]
    },
    {
      id: 4,
      text: "At a party, you're most likely to request:",
      options: [
        { text: "The hit everyone can dance and sing to", type: "mainstream" },
        { text: "Something that fits the vibe, could be anything", type: "eclectic" },
        { text: "Something they probably haven't heard but will love", type: "indie" },
        { text: "I don't usually request songs at parties", type: "mellow" }
      ]
    },
    {
      id: 5,
      text: "How do you discover new music?",
      options: [
        { text: "Radio, Spotify top playlists, social media trends", type: "mainstream" },
        { text: "All over - recommendations, algorithms, random finds", type: "eclectic" },
        { text: "Music blogs, underground playlists, word of mouth", type: "indie" },
        { text: "I mostly stick to what I already know and love", type: "mellow" }
      ]
    },
    {
      id: 6,
      text: "Your feelings when your favorite artist gets mainstream famous:",
      options: [
        { text: "Exciting! They deserve success", type: "mainstream" },
        { text: "Happy for them, music quality is what matters", type: "eclectic" },
        { text: "Complicated... glad for them but miss the old days", type: "indie" },
        { text: "I just hope they keep making the music I love", type: "mellow" }
      ]
    },
    {
      id: 7,
      text: "Your workout playlist is:",
      options: [
        { text: "Top 40 bangers, high energy", type: "mainstream" },
        { text: "A wild mix from metal to EDM to pop", type: "eclectic" },
        { text: "Alternative and indie rock deep cuts", type: "indie" },
        { text: "I don't really change music for workouts", type: "mellow" }
      ]
    },
    {
      id: 8,
      text: "Be honest: how judgmental are you about others' music taste?",
      options: [
        { text: "Not at all! People like what they like", type: "mainstream" },
        { text: "I appreciate all tastes, even if some confuse me", type: "eclectic" },
        { text: "A little... some tastes are more 'sophisticated'", type: "indie" },
        { text: "I don't judge, I just know what I like", type: "mellow" }
      ]
    },
    {
      id: 9,
      text: "Your Spotify Wrapped probably says:",
      options: [
        { text: "You listened to what everyone else did", type: "mainstream" },
        { text: "You're impossible to categorize", type: "eclectic" },
        { text: "Most people haven't heard of your top artists", type: "indie" },
        { text: "You listened to the same 50 songs 1000 times", type: "mellow" }
      ]
    },
    {
      id: 10,
      text: "Music, to you, is:",
      options: [
        { text: "Background for good times and shared experiences", type: "mainstream" },
        { text: "A vast world to explore endlessly", type: "eclectic" },
        { text: "Art that should challenge and surprise", type: "indie" },
        { text: "Comfort, peace, and emotional regulation", type: "mellow" }
      ]
    }
  ],
  results: {
    mainstream: {
      type: "The Cultural Connector",
      description: "You know what slaps and you're not ashamed of it! You enjoy music as a shared experience - the songs everyone knows, the tracks that fill dance floors, the hits that soundtrack parties. Music is about connection and good vibes, not indie cred. Keep dancing to the hits!",
      traits: ["Social", "Fun-loving", "Accessible", "Culturally connected"],
      advice: "Your love of popular music is totally valid - those songs are popular for a reason! Don't let music snobs make you feel basic. That said, occasionally diving into something different might surprise you. Popular doesn't mean your taste has to stay there."
    },
    eclectic: {
      type: "The Musical Explorer",
      description: "Your playlists could give people whiplash - classical to hip-hop to indie folk to EDM, sometimes in the same hour. You judge music by quality, not genre. Your open-mindedness means you discover gems everywhere. You're impossible to stereotype, and that's your superpower.",
      traits: ["Open-minded", "Curious", "Adventurous", "Genre-fluid"],
      advice: "Your musical openness reflects a beautifully curious mind! Keep exploring across genres and eras. You're probably an excellent person to ask for recommendations because you actually know what's good in every category."
    },
    indie: {
      type: "The Underground Curator",
      description: "You found them first. Before the hype, before the festival, before the sellout. Your taste is cultivated, intentional, and probably a bit obscure. You have strong opinions about what makes music 'good' and mainstream success is... complicated. Your playlists are a point of pride.",
      traits: ["Discerning", "Cultured", "Independent", "Taste-proud"],
      advice: "Your dedication to finding quality music is admirable! Just remember: gatekeeping kills joy. It's okay to enjoy a pop song sometimes. Musical snobbery can isolate you from shared experiences. The best music fans can appreciate craft everywhere."
    },
    mellow: {
      type: "The Comfort Listener",
      description: "Music is your emotional support system. You know what you like and you stick to it - those familiar songs that make you feel safe, calm, and understood. You're not chasing trends or seeking discoveries; you're building a soundtrack for your inner peace. Reliability over novelty.",
      traits: ["Comfortable", "Loyal", "Introspective", "Emotionally connected"],
      advice: "Your deep connection to your music is beautiful! Those songs are meaningful to you and that matters. But occasionally stepping outside your comfort zone might introduce you to a new favorite. Growth can happen in small doses."
    }
  }
};
