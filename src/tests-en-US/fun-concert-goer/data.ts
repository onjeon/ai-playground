// What Kind of Concert-Goer Are You? - Fun viral test

export const testData = {
  id: "fun-concert-goer",
  title: "What Kind of Concert-Goer Are You?",
  description: "The way you experience live music says everything about you. Are you front row chaos or back row vibes?",
  questions: [
    {
      id: 1,
      text: "Where do you prefer to be during a concert?",
      options: [
        { text: "Front row, barrier - I want to feel the stage sweat", type: "fanatic" },
        { text: "Close-ish but with room to move and dance", type: "energy" },
        { text: "Back or sides - better sound, less crowding", type: "chill" },
        { text: "Wherever I can record the best videos", type: "documenter" }
      ]
    },
    {
      id: 2,
      text: "The artist plays your absolute favorite song. You:",
      options: [
        { text: "Sing every word, tears streaming, full spiritual experience", type: "fanatic" },
        { text: "Dance like nobody's watching (they definitely are)", type: "energy" },
        { text: "Smile, nod, enjoy the moment internally", type: "chill" },
        { text: "Immediately start recording for posterity", type: "documenter" }
      ]
    },
    {
      id: 3,
      text: "Someone tall stands right in front of you. You:",
      options: [
        { text: "Aggressively maneuver around them, vision is crucial", type: "fanatic" },
        { text: "Move to a different spot with better vibes", type: "energy" },
        { text: "Accept it. I can still hear, that's what matters", type: "chill" },
        { text: "Stand on my toes and hold my phone higher", type: "documenter" }
      ]
    },
    {
      id: 4,
      text: "How early do you arrive for a general admission show?",
      options: [
        { text: "Hours early. I'm getting that rail", type: "fanatic" },
        { text: "Early-ish. Good spot but not camping out", type: "energy" },
        { text: "Right before the main act. Skip the waiting", type: "chill" },
        { text: "Whenever the lighting is best", type: "documenter" }
      ]
    },
    {
      id: 5,
      text: "Your phone battery situation at concerts:",
      options: [
        { text: "Who cares? I'm LIVING the experience", type: "fanatic" },
        { text: "Check occasionally, mostly enjoying the moment", type: "energy" },
        { text: "Fine because I barely use it during the show", type: "chill" },
        { text: "Brought a portable charger, can't risk missing footage", type: "documenter" }
      ]
    },
    {
      id: 6,
      text: "The opening act is... not great. You:",
      options: [
        { text: "Support them anyway - they're living their dream", type: "fanatic" },
        { text: "Use the energy to socialize and warm up", type: "energy" },
        { text: "Get drinks, find my spot, chill until main act", type: "chill" },
        { text: "Perfect time to test my camera settings", type: "documenter" }
      ]
    },
    {
      id: 7,
      text: "Concert merch. What's your approach?",
      options: [
        { text: "Buying EVERYTHING. This moment must be memorialized", type: "fanatic" },
        { text: "One nice piece that I'll actually wear", type: "energy" },
        { text: "Nah, I'll remember the experience without a $50 hoodie", type: "chill" },
        { text: "Only if it photographs well", type: "documenter" }
      ]
    },
    {
      id: 8,
      text: "The crowd starts a mosh pit near you. You:",
      options: [
        { text: "DIVE IN, this is what live music is about!", type: "fanatic" },
        { text: "Circle the edges, catching the energy", type: "energy" },
        { text: "Smoothly relocate to calmer waters", type: "chill" },
        { text: "Try to capture it on video from a safe distance", type: "documenter" }
      ]
    },
    {
      id: 9,
      text: "After the concert, you:",
      options: [
        { text: "Wait by the stage door hoping for a glimpse or autograph", type: "fanatic" },
        { text: "Still buzzing with energy, want to do something after", type: "energy" },
        { text: "Head out, happy and ready for a quiet wind-down", type: "chill" },
        { text: "Immediately start editing and posting content", type: "documenter" }
      ]
    },
    {
      id: 10,
      text: "What matters most to you at a concert?",
      options: [
        { text: "Connection with the artist - that one moment of eye contact", type: "fanatic" },
        { text: "The collective energy of the crowd", type: "energy" },
        { text: "Just good sound and a good time", type: "chill" },
        { text: "Capturing moments to relive and share later", type: "documenter" }
      ]
    }
  ],
  results: {
    fanatic: {
      type: "The Die-Hard Fan",
      description: "Concerts aren't events for you - they're pilgrimages. You know every song, every lyric, every B-side. You've got stories about that time the artist definitely looked at you. Your dedication is intense and absolutely valid. You didn't just attend the show; you EXPERIENCED it on a molecular level.",
      traits: ["Passionate", "Dedicated", "Emotional", "Intense"],
      advice: "Your passion is beautiful, but remember to eat and hydrate while waiting for that rail spot. And other fans are not your competition - share the joy!"
    },
    energy: {
      type: "The Energy Amplifier",
      description: "You're there for the VIBE. Dancing, singing, connecting with strangers who become friends for three hours. You're the person who makes the crowd feel alive. Whether it's your favorite band or someone you just discovered, you bring the same energy. You ARE the party.",
      traits: ["Energetic", "Social", "Enthusiastic", "Free-spirited"],
      advice: "Your energy is infectious! Keep spreading it. Just maybe check on your friends occasionally - not everyone has your stamina."
    },
    chill: {
      type: "The Zen Enjoyer",
      description: "You appreciate live music without needing to prove anything. No shoving to the front, no screaming until you're hoarse. You're there for quality sound, a good atmosphere, and the simple pleasure of music. You'll remember the experience without needing a TikTok about it.",
      traits: ["Relaxed", "Appreciative", "Low-maintenance", "Present"],
      advice: "Your chill approach is refreshing, but don't be afraid to let loose sometimes! That one time you lose yourself in the music might become your favorite memory."
    },
    documenter: {
      type: "The Content Curator",
      description: "If you didn't post it, did it even happen? You've got concert documentation down to a science: best angles, good lighting, strategic positioning. Your camera roll is a treasure trove of live music moments. You're basically a one-person concert archive.",
      traits: ["Prepared", "Detail-oriented", "Nostalgic", "Share-focused"],
      advice: "Your videos are appreciated, but maybe watch one full song without your phone up? The screen will never capture how it actually feels to be there. Balance is key!"
    }
  }
};
