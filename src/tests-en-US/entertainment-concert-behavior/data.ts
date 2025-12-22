// Your Concert Personality - Viral entertainment test for American English users

export const testData = {
  id: "entertainment-concert-behavior",
  title: "Your Concert Personality",
  description: "Front row fanatic or chill observer? What kind of concert-goer are you?",
  questions: [
    {
      id: 1,
      text: "Where do you want to be at a concert?",
      options: [
        { text: "As close to the stage as humanly possible", type: "front_row" },
        { text: "Good view, some space, can still feel energy", type: "balanced" },
        { text: "Back/sides where I can breathe and see everything", type: "chill" },
        { text: "Seated if available - I want comfort", type: "comfort" }
      ]
    },
    {
      id: 2,
      text: "Your phone usage during the concert:",
      options: [
        { text: "Recording everything! I need to remember this!", type: "front_row" },
        { text: "Some photos/videos but mostly enjoying live", type: "balanced" },
        { text: "Minimal - trying to be present and experience it", type: "chill" },
        { text: "A few clips for stories, that's it", type: "comfort" }
      ]
    },
    {
      id: 3,
      text: "How early do you arrive for a concert?",
      options: [
        { text: "Hours early. Maybe camping. I want THAT spot", type: "front_row" },
        { text: "Early enough to get decent positioning", type: "balanced" },
        { text: "On time - I don't need to fight for spots", type: "chill" },
        { text: "Maybe even a bit late, after the opening act", type: "comfort" }
      ]
    },
    {
      id: 4,
      text: "During the set, you're:",
      options: [
        { text: "Singing every word, dancing, full energy", type: "front_row" },
        { text: "Into it! Moving, singing choruses, enjoying", type: "balanced" },
        { text: "Vibing, head nodding, taking it all in", type: "chill" },
        { text: "Enjoying from my spot, maybe some light movement", type: "comfort" }
      ]
    },
    {
      id: 5,
      text: "Your reaction to crowd pushers:",
      options: [
        { text: "Part of the experience! I'm pushing back!", type: "front_row" },
        { text: "Annoying but I hold my ground", type: "balanced" },
        { text: "Exactly why I stay in the back", type: "chill" },
        { text: "Unacceptable. I'm in the seated section", type: "comfort" }
      ]
    },
    {
      id: 6,
      text: "Merch situation:",
      options: [
        { text: "Getting it before the show, wearing it during", type: "front_row" },
        { text: "If I see something I like, sure", type: "balanced" },
        { text: "Maybe after if the lines aren't crazy", type: "chill" },
        { text: "Not usually a merch person at shows", type: "comfort" }
      ]
    },
    {
      id: 7,
      text: "You hear your favorite song start. You:",
      options: [
        { text: "LOSE IT. Screaming, crying, having an experience", type: "front_row" },
        { text: "Get hyped! This is what I came for!", type: "balanced" },
        { text: "Nice! Appreciate it, get more into it", type: "chill" },
        { text: "Oh cool, I like this one", type: "comfort" }
      ]
    },
    {
      id: 8,
      text: "After the concert you're:",
      options: [
        { text: "Posting everything, reliving it, emotionally wrecked", type: "front_row" },
        { text: "Happy, tired, talking about favorite moments", type: "balanced" },
        { text: "Satisfied with a good show, ready to decompress", type: "chill" },
        { text: "Glad I went, ready for my bed", type: "comfort" }
      ]
    },
    {
      id: 9,
      text: "Concert frequency:",
      options: [
        { text: "As many as possible! I live for live music", type: "front_row" },
        { text: "Multiple per year for artists I really want to see", type: "balanced" },
        { text: "Occasional - for special artists/occasions", type: "chill" },
        { text: "Rarely - concerts are a lot of effort", type: "comfort" }
      ]
    },
    {
      id: 10,
      text: "What matters most at a concert?",
      options: [
        { text: "The energy, the experience, being THERE", type: "front_row" },
        { text: "Hearing the music well and enjoying with friends", type: "balanced" },
        { text: "The music itself - I want to actually listen", type: "chill" },
        { text: "Comfort and convenience of the experience", type: "comfort" }
      ]
    }
  ],
  results: {
    front_row: {
      type: "The Front Row Fanatic",
      description: "You're not just attending a concert, you're EXPERIENCING IT at maximum intensity. Front row, full volume, singing every word, recording everything, living your best life. You'll wait hours, push through crowds, and leave emotionally destroyed. This is your religion.",
      traits: ["Intense", "Dedicated", "Full energy", "Experience-maximizer"],
      advice: "Your concert passion is beautiful! Just stay hydrated, wear comfortable shoes, and maybe occasionally let yourself enjoy a show from further back. Same music, less physical trauma. But also keep being you!"
    },
    balanced: {
      type: "The Sweet Spot Seeker",
      description: "You want the concert experience WITHOUT the chaos. Good spot, good view, good energy - but also breathing room and reasonable humanity. You're there to enjoy, not to survive. You've found the perfect balance of intensity and sanity.",
      traits: ["Balanced", "Strategic", "Enjoyment-focused", "Practical"],
      advice: "You've figured out concerts! Your approach maximizes enjoyment while minimizing discomfort. Keep finding that sweet spot. Maybe challenge yourself with one front-row experience sometime - just for the story."
    },
    chill: {
      type: "The Back Viber",
      description: "You're at the concert for the MUSIC, not the chaos. You stay back where you can breathe, see everything, and actually hear the sound. You don't understand why people crush at the front when the sound is better further back. Very evolved, honestly.",
      traits: ["Chill", "Music-focused", "Crowd-avoidant", "Relaxed"],
      advice: "Your approach is smart and comfortable! Just make sure you're still feeling some energy from the show. Music is also about atmosphere. But also, the sound IS often better in the back, so keep doing your thing."
    },
    comfort: {
      type: "The Comfort-First Attendee",
      description: "Concerts are nice but they're also WORK. You prefer seated options, arrive when convenient, and prioritize comfort over proximity. You're there to enjoy music, not to suffer for it. Very reasonable approach to what can be an exhausting experience.",
      traits: ["Comfort-oriented", "Practical", "Low-effort", "Selective"],
      advice: "Your preference for comfort is valid! Consider that some concerts are worth the discomfort though. And the right show might awaken some front-row energy you didn't know you had. But also, seats exist for a reason."
    }
  }
};
