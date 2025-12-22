// What's Your Comedy Style? - Viral humor test for American English users

export const testData = {
  id: "humor-comedy-style",
  title: "What's Your Comedy Style?",
  description: "Everyone's funny in their own way (some of us). What's YOUR comedic flavor? Time to analyze your humor like an annoying comedy nerd.",
  questions: [
    {
      id: 1,
      text: "Your go-to move to make people laugh:",
      options: [
        { text: "Tell an elaborate story that builds to a punchline", type: "storyteller" },
        { text: "Quick wit - snap back with something clever", type: "wit" },
        { text: "Physical comedy or dramatic reactions", type: "physical" },
        { text: "Find the absurdity in normal situations", type: "absurd" }
      ]
    },
    {
      id: 2,
      text: "Your comedic hero:",
      options: [
        { text: "Someone who tells great stories (John Mulaney, Taylor Tomlinson)", type: "storyteller" },
        { text: "Someone quick and clever (Mitch Hedberg, Nate Bargatze)", type: "wit" },
        { text: "Someone physical and expressive (Jim Carrey, Kate McKinnon)", type: "physical" },
        { text: "Someone weird and out there (Bo Burnham, Reggie Watts)", type: "absurd" }
      ]
    },
    {
      id: 3,
      text: "At a party, you're the one:",
      options: [
        { text: "Telling the same story you've perfected over years", type: "storyteller" },
        { text: "Making quick comments under your breath that kill", type: "wit" },
        { text: "Physically acting out what someone just said", type: "physical" },
        { text: "Saying something so random it somehow lands", type: "absurd" }
      ]
    },
    {
      id: 4,
      text: "Your humor gets you in trouble when:",
      options: [
        { text: "The story goes too long and people lose interest", type: "storyteller" },
        { text: "The joke's too quick/smart and no one gets it", type: "wit" },
        { text: "I'm too much and people are overwhelmed", type: "physical" },
        { text: "It's too weird and people just stare at me", type: "absurd" }
      ]
    },
    {
      id: 5,
      text: "What makes YOU laugh hardest?",
      options: [
        { text: "A well-crafted story with perfect timing", type: "storyteller" },
        { text: "A perfect one-liner or comeback", type: "wit" },
        { text: "Someone fully committing to a bit physically", type: "physical" },
        { text: "Something so weird I can't explain why it's funny", type: "absurd" }
      ]
    },
    {
      id: 6,
      text: "Your sense of humor in text/chat:",
      options: [
        { text: "Long messages with detailed funny stories", type: "storyteller" },
        { text: "Quick, perfectly-timed responses", type: "wit" },
        { text: "Lots of gifs and reaction images", type: "physical" },
        { text: "Random non-sequiturs that confuse and delight", type: "absurd" }
      ]
    },
    {
      id: 7,
      text: "When a joke bombs, you:",
      options: [
        { text: "Explain the context because clearly they didn't get it", type: "storyteller" },
        { text: "Move on quick - jokes are like punches, keep swinging", type: "wit" },
        { text: "Double down with even bigger energy", type: "physical" },
        { text: "The bomb IS the joke now, embrace the awkward", type: "absurd" }
      ]
    },
    {
      id: 8,
      text: "Your comedic timing is best described as:",
      options: [
        { text: "Slow burn - building to a big payoff", type: "storyteller" },
        { text: "Instant - strike while the iron's hot", type: "wit" },
        { text: "Reactive - responding to the moment", type: "physical" },
        { text: "Unpredictable - comedy is chaos", type: "absurd" }
      ]
    },
    {
      id: 9,
      text: "Your friends would describe your humor as:",
      options: [
        { text: "Entertaining - you always have a good story", type: "storyteller" },
        { text: "Sharp - quick and clever", type: "wit" },
        { text: "Animated - you're basically a cartoon", type: "physical" },
        { text: "Weird - in the best way possible", type: "absurd" }
      ]
    },
    {
      id: 10,
      text: "If you had a Netflix special, the style would be:",
      options: [
        { text: "Lots of personal anecdotes woven together", type: "storyteller" },
        { text: "Rapid-fire jokes, one after another", type: "wit" },
        { text: "Lots of movement, characters, and impressions", type: "physical" },
        { text: "An experimental art piece that confuses your parents", type: "absurd" }
      ]
    }
  ],
  results: {
    storyteller: {
      type: "The Storyteller",
      description: "You're a narrative comedian. Your humor comes from the way you TELL things, not just what you say. You've probably told the same five stories 100 times, and they get funnier every time because you've perfected them. You are the bard of your friend group.",
      traits: ["Narrative builder", "Timing master", "Detail-oriented", "Crowd engagement pro"],
      advice: "Your storytelling is a gift - but read the room on length. Not every story needs to be 10 minutes. Learn to edit and know when to wrap. A tight story beats a rambling one, even if you love all the details."
    },
    wit: {
      type: "The Quick Wit",
      description: "You're a sniper. Quick, precise, deadly. Your brain processes setups and delivers punchlines in real-time. People often miss your best jokes because they're too fast. You've made someone spit their drink out from something you said under your breath. Peak performance.",
      traits: ["Lightning fast", "Clever", "Low-key delivery", "Timing sniper"],
      advice: "Your quickness is impressive but make sure you're not just saying things to say them. Quality over quantity. And slow down occasionally - some people need time to catch up to your brain, and they deserve to laugh too."
    },
    physical: {
      type: "The Physical Comedian",
      description: "Your whole body is a comedy instrument. Faces, voices, movements - you commit FULLY. You're basically a live-action cartoon. When you tell a story, you become every character. Your friends have probably said 'you should be on SNL' at least once.",
      traits: ["Full commitment", "Expressive", "Animated", "Character work champion"],
      advice: "Your energy is infectious but know when to dial it back. Not every moment needs the full performance. Subtlety can be funny too. Save the big guns for the big moments - it makes them land harder."
    },
    absurd: {
      type: "The Absurdist",
      description: "You're weird. Wonderfully, gloriously weird. Your humor doesn't always make sense - and that's the point. You find funny in places others don't even look. You've definitely made someone laugh and confused at the same time. You are chaos, and chaos is funny.",
      traits: ["Unconventional", "Unpredictable", "Genre-bending", "Comedy alien"],
      advice: "Your unique brain is a gift, but remember: absurdism works best with people who get you. With new people, maybe start with something they can hold onto before you get weird. Build trust, then unleash the chaos."
    }
  }
};
