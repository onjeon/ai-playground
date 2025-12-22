// What Historical Era Should You Live In? - Viral quirky test for American English users

export const testData = {
  id: "quirky-historical-era",
  title: "What Historical Era Should You Live In?",
  description: "Born in the wrong century? Let's find your true temporal home!",
  questions: [
    {
      id: 1,
      text: "Your ideal social scene:",
      options: [
        { text: "Lavish balls and formal gatherings", type: "victorian" },
        { text: "Jazz clubs and speakeasies", type: "roaring20s" },
        { text: "Free love and music festivals", type: "sixties" },
        { text: "Salons with philosophers and artists", type: "renaissance" }
      ]
    },
    {
      id: 2,
      text: "Your preferred fashion vibe:",
      options: [
        { text: "Elaborate, formal, layers and details", type: "victorian" },
        { text: "Glamorous, bold, Art Deco inspired", type: "roaring20s" },
        { text: "Colorful, expressive, unconventional", type: "sixties" },
        { text: "Artistic, flowing, dramatic", type: "renaissance" }
      ]
    },
    {
      id: 3,
      text: "Your ideal day involves:",
      options: [
        { text: "Letter writing, reading, afternoon tea", type: "victorian" },
        { text: "Dancing, champagne, staying out late", type: "roaring20s" },
        { text: "Protesting, making art, questioning everything", type: "sixties" },
        { text: "Intellectual debate, art appreciation, creation", type: "renaissance" }
      ]
    },
    {
      id: 4,
      text: "The arts you value most:",
      options: [
        { text: "Literature, poetry, classical music", type: "victorian" },
        { text: "Jazz, dance, emerging cinema", type: "roaring20s" },
        { text: "Rock music, psychedelic art, experimental everything", type: "sixties" },
        { text: "Painting, sculpture, architecture", type: "renaissance" }
      ]
    },
    {
      id: 5,
      text: "Your relationship with authority:",
      options: [
        { text: "I can work within structures while being clever", type: "victorian" },
        { text: "Rules are made to be broken (but stylishly)", type: "roaring20s" },
        { text: "Question everything! Fight the power!", type: "sixties" },
        { text: "I prefer systems that allow intellectual freedom", type: "renaissance" }
      ]
    },
    {
      id: 6,
      text: "Your ideal romance:",
      options: [
        { text: "Passionate letters, stolen glances, slow burn", type: "victorian" },
        { text: "Glamorous, exciting, a whirlwind affair", type: "roaring20s" },
        { text: "Free love, deep connection, unconventional", type: "sixties" },
        { text: "Intellectual equals, passionate discourse, art as love language", type: "renaissance" }
      ]
    },
    {
      id: 7,
      text: "What appeals most about the past:",
      options: [
        { text: "Manners, eloquence, and social rituals", type: "victorian" },
        { text: "The glamour, parties, and rebellion", type: "roaring20s" },
        { text: "The idealism and cultural revolution", type: "sixties" },
        { text: "The explosion of art, science, and ideas", type: "renaissance" }
      ]
    },
    {
      id: 8,
      text: "Your ideal circle of friends:",
      options: [
        { text: "Witty, educated, socially savvy", type: "victorian" },
        { text: "Artists, partygoers, rule-breakers", type: "roaring20s" },
        { text: "Activists, musicians, dreamers", type: "sixties" },
        { text: "Thinkers, creators, polymaths", type: "renaissance" }
      ]
    },
    {
      id: 9,
      text: "Your main criticism of modern life:",
      options: [
        { text: "Lack of decorum and meaningful connection", type: "victorian" },
        { text: "Not enough glamour and excitement", type: "roaring20s" },
        { text: "Too conformist and lacking in revolution", type: "sixties" },
        { text: "Not enough appreciation for art and ideas", type: "renaissance" }
      ]
    },
    {
      id: 10,
      text: "You'd thrive in a world where:",
      options: [
        { text: "Wit and social skill are power", type: "victorian" },
        { text: "Boldness and style are celebrated", type: "roaring20s" },
        { text: "Challenging norms is expected", type: "sixties" },
        { text: "Intellectual and creative pursuits are valued", type: "renaissance" }
      ]
    }
  ],
  results: {
    victorian: {
      type: "The Victorian Era (1837-1901)",
      description: "You belong in the era of corsets, calling cards, and careful social navigation! You'd thrive amid the formal rituals, elaborate manners, and hidden passions of Victorian society. Sure, there were problems (many), but you'd look great in the fashion and your wit would serve you well in those drawing rooms.",
      traits: ["Formal", "Eloquent", "Socially savvy", "Romantically inclined"],
      advice: "Channel your Victorian energy into modern life through beautiful stationery, afternoon tea rituals, and cultivating your wit. But be glad you have modern plumbing and rights."
    },
    roaring20s: {
      type: "The Roaring Twenties (1920s)",
      description: "You belong in the Jazz Age! Flappers, speakeasies, Art Deco glamour, and the defiant optimism after WWI. You'd be dancing till dawn, breaking rules in style, and living with the exuberance of people who decided life was for LIVING. The crash is coming but tonight? Tonight is perfect.",
      traits: ["Glamorous", "Bold", "Party-going", "Rule-breaking"],
      advice: "Bring 20s energy to modern life through jazz, cocktail parties, Art Deco aesthetics, and the willingness to have a GOOD TIME. But maybe keep an eye on your investments."
    },
    sixties: {
      type: "The 1960s",
      description: "You belong in the era of revolution! Civil rights, counterculture, psychedelic art, rock and roll - everything was changing and you'd be right there, questioning authority and expanding consciousness. You're an idealist who believes things CAN change. Peace, love, and protest signs.",
      traits: ["Revolutionary", "Idealistic", "Countercultural", "Music-loving"],
      advice: "Channel 60s energy into modern activism, music appreciation, and questioning systems. The revolution isn't over - it just needs you. But also appreciate the technology the hippies didn't have."
    },
    renaissance: {
      type: "The Renaissance (14th-17th century)",
      description: "You belong in the age of rebirth! Michelangelo, da Vinci, the explosion of art, science, and humanism. You'd be debating philosophy, commissioning art, and surrounded by polymaths pushing the boundaries of knowledge. Ideas are valued, creation is sacred, and beauty is pursued.",
      traits: ["Intellectual", "Artistic", "Polymathic", "Beauty-seeking"],
      advice: "Bring Renaissance energy to modern life through art appreciation, learning multiple disciplines, and valuing ideas over consumption. Be a modern polymath - the Renaissance person of now."
    }
  }
};
