// What Kind of Fandom Member Are You? - Viral modern culture test for American English users

export const testData = {
  id: "culture-fandom-type",
  title: "What Kind of Fandom Member Are You?",
  description: "Whether it's K-pop, Marvel, or a random show from 2014 - what's your fandom personality? Let's find your stan identity.",
  questions: [
    {
      id: 1,
      text: "New content drops from your favorite thing. You:",
      options: [
        { text: "Already watched, analyzed, and written a thread about it", type: "analyst" },
        { text: "Creating fan art/fic/edits immediately", type: "creator" },
        { text: "Enjoying it quietly, smiling to myself", type: "casual" },
        { text: "In the group chat LOSING MY MIND", type: "enthusiast" }
      ]
    },
    {
      id: 2,
      text: "How do you engage with fandom discourse?",
      options: [
        { text: "Write detailed takes with evidence and analysis", type: "analyst" },
        { text: "Express feelings through my creative work", type: "creator" },
        { text: "Observe from a safe distance", type: "casual" },
        { text: "Jump into the chaos, opinions blazing", type: "enthusiast" }
      ]
    },
    {
      id: 3,
      text: "Your collection of fandom-related stuff:",
      options: [
        { text: "Digital archives - screenshots, saves, organized folders", type: "analyst" },
        { text: "References and inspiration for my work", type: "creator" },
        { text: "A few meaningful items", type: "casual" },
        { text: "My entire personality and bank account", type: "enthusiast" }
      ]
    },
    {
      id: 4,
      text: "Someone criticizes your fave. Response:",
      options: [
        { text: "Present a well-reasoned counter-argument with receipts", type: "analyst" },
        { text: "Channel my feelings into creating something", type: "creator" },
        { text: "Shrug it off, everyone has opinions", type: "casual" },
        { text: "DEFEND THEM WITH MY LIFE", type: "enthusiast" }
      ]
    },
    {
      id: 5,
      text: "Your fandom social media presence:",
      options: [
        { text: "Known for my takes and analysis threads", type: "analyst" },
        { text: "Known for my art/fic/edits", type: "creator" },
        { text: "Mostly a lurker who likes posts", type: "casual" },
        { text: "Known for being LOUD and enthusiastic", type: "enthusiast" }
      ]
    },
    {
      id: 6,
      text: "A new person wants to get into your fandom. You:",
      options: [
        { text: "Send them a comprehensive guide I probably wrote", type: "analyst" },
        { text: "Share my favorite fan content to welcome them", type: "creator" },
        { text: "Point them in the right direction, keep it chill", type: "casual" },
        { text: "Adopt them and overwhelm them with enthusiasm", type: "enthusiast" }
      ]
    },
    {
      id: 7,
      text: "The content ends/hiatus happens. You:",
      options: [
        { text: "Continue analyzing and discussing for years", type: "analyst" },
        { text: "Keep creating - the fandom lives on through us", type: "creator" },
        { text: "Move on while keeping fond memories", type: "casual" },
        { text: "Denial, bargaining, more denial, never let go", type: "enthusiast" }
      ]
    },
    {
      id: 8,
      text: "What's your role in fandom group chats?",
      options: [
        { text: "The one with all the information and theories", type: "analyst" },
        { text: "The one sharing works-in-progress and asking for input", type: "creator" },
        { text: "The one who surfaces for big moments then disappears", type: "casual" },
        { text: "The one keeping the energy UP", type: "enthusiast" }
      ]
    },
    {
      id: 9,
      text: "Your ideal fandom event:",
      options: [
        { text: "Deep dive discussions and analysis panels", type: "analyst" },
        { text: "Creator showcases and collaboration opportunities", type: "creator" },
        { text: "Casual hangout with fellow appreciators", type: "casual" },
        { text: "Meet-ups, concerts, screaming in crowds together", type: "enthusiast" }
      ]
    },
    {
      id: 10,
      text: "How has fandom impacted your life?",
      options: [
        { text: "Sharpened my critical thinking and writing skills", type: "analyst" },
        { text: "Developed my creative skills and built a portfolio", type: "creator" },
        { text: "Provided enjoyment and some nice moments", type: "casual" },
        { text: "Found my people, shaped my identity, changed everything", type: "enthusiast" }
      ]
    }
  ],
  results: {
    analyst: {
      type: "The Fandom Scholar",
      description: "You're basically an academic but make it fandom. Thread game immaculate. Analysis deep. Receipts organized. People come to you for the lore, the context, the understanding. You've probably written theses-length posts about fictional relationships. No regrets.",
      traits: ["Deep thinker", "Master researcher", "Theory crafter", "Context provider"],
      advice: "Your brain is a gift to fandom, but remember to just ENJOY things sometimes without analyzing them. Not every viewing needs to be a research session. Let yourself feel before you think."
    },
    creator: {
      type: "The Fandom Artist",
      description: "You're the reason fandom stays alive. Fan art, fan fiction, edits, memes - you make the content that keeps everyone fed. Your work has probably made strangers cry. You've turned hyperfixation into an art form, literally. The community is better because you're in it.",
      traits: ["Creative soul", "Community builder", "Skill sharpener", "Content creator"],
      advice: "Your contributions are invaluable, but don't forget to consume too. You don't always have to be producing to be a valid fan. Rest and enjoy others' work sometimes."
    },
    casual: {
      type: "The Peaceful Enjoyer",
      description: "You like what you like without making it your whole personality. You enjoy content, maybe engage a little, but keep healthy boundaries. You don't get into fandom wars. You just vibe. Some might call you 'not a real fan' but honestly? You're the healthiest one here.",
      traits: ["Balanced", "Low drama", "Quietly supportive", "Emotionally regulated"],
      advice: "Your ability to enjoy things without obsessing is genuinely impressive. Just make sure you're not so detached that you miss out on the community joy. Sometimes going a little feral is fun."
    },
    enthusiast: {
      type: "The Stan Supreme",
      description: "You don't just like things, you LOVE things. Fully, loudly, unashamedly. Your enthusiasm is contagious. Your excitement is content. You're the energy in the room, the hype in the group chat, the one making everyone else more excited just by existing. You make fandoms fun.",
      traits: ["Infectious enthusiasm", "All-in energy", "Community heart", "Zero shame"],
      advice: "Your passion is beautiful but watch the parasocial stuff and remember to have identity outside your interests. It's okay if your fave does something mid. You can still love them AND be objective."
    }
  }
};
