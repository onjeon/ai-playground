// What's Your Shadow Self? - Viral self-discovery test for American English users

export const testData = {
  id: "self-shadow-self",
  title: "What's Your Shadow Self?",
  description: "The parts of yourself you hide from others (and maybe from yourself). Time to meet your shadow. Don't worry, it won't bite... probably.",
  questions: [
    {
      id: 1,
      text: "What trait do you judge HARDEST in other people?",
      options: [
        { text: "Selfishness - putting themselves first constantly", type: "selfish" },
        { text: "Weakness - not being able to handle things", type: "vulnerable" },
        { text: "Fakeness - being inauthentic or playing a role", type: "performer" },
        { text: "Chaos - being messy, unreliable, out of control", type: "chaotic" }
      ]
    },
    {
      id: 2,
      text: "What would HORRIFY you if people found out?",
      options: [
        { text: "How much I actually want and need for myself", type: "selfish" },
        { text: "How scared and insecure I actually feel", type: "vulnerable" },
        { text: "How calculated some of my behavior actually is", type: "performer" },
        { text: "How much I secretly want to burn it all down", type: "chaotic" }
      ]
    },
    {
      id: 3,
      text: "In your darkest moments, you've thought:",
      options: [
        { text: "Maybe I should stop sacrificing so much for others", type: "selfish" },
        { text: "Maybe I'm not as strong as everyone thinks", type: "vulnerable" },
        { text: "Maybe none of this is really me", type: "performer" },
        { text: "Maybe I want everything to fall apart", type: "chaotic" }
      ]
    },
    {
      id: 4,
      text: "What do you secretly envy in others?",
      options: [
        { text: "People who unapologetically put themselves first", type: "selfish" },
        { text: "People who can openly admit they're struggling", type: "vulnerable" },
        { text: "People who seem genuinely themselves all the time", type: "performer" },
        { text: "People who embrace uncertainty and disorder", type: "chaotic" }
      ]
    },
    {
      id: 5,
      text: "Your recurring nightmare probably involves:",
      options: [
        { text: "Being trapped serving others forever", type: "selfish" },
        { text: "Being exposed as weak and incapable", type: "vulnerable" },
        { text: "Being seen through - the mask coming off", type: "performer" },
        { text: "Everything being perfectly controlled and suffocating", type: "chaotic" }
      ]
    },
    {
      id: 6,
      text: "What do you overcompensate for?",
      options: [
        { text: "My wants and needs - I give too much to prove I'm not selfish", type: "selfish" },
        { text: "My fears - I act strong so no one sees the cracks", type: "vulnerable" },
        { text: "My true self - I perform to avoid being truly seen", type: "performer" },
        { text: "My desire for chaos - I control everything to not implode", type: "chaotic" }
      ]
    },
    {
      id: 7,
      text: "What fantasy do you never admit to having?",
      options: [
        { text: "Saying 'no' to everyone and finally choosing myself", type: "selfish" },
        { text: "Breaking down and having someone else handle everything", type: "vulnerable" },
        { text: "Dropping all the acts and being truly seen", type: "performer" },
        { text: "Destroying everything I've carefully built and starting over", type: "chaotic" }
      ]
    },
    {
      id: 8,
      text: "What would your shadow self tell you if it could speak?",
      options: [
        { text: "You deserve to take. Stop always giving.", type: "selfish" },
        { text: "It's okay to not be okay. Stop pretending.", type: "vulnerable" },
        { text: "Be real. Drop the performance.", type: "performer" },
        { text: "Let it burn. Embrace the beautiful mess.", type: "chaotic" }
      ]
    },
    {
      id: 9,
      text: "What's the shadow version of your best trait?",
      options: [
        { text: "Generous... but secretly resentful about it", type: "selfish" },
        { text: "Strong... but falling apart inside", type: "vulnerable" },
        { text: "Likeable... but not sure who I really am", type: "performer" },
        { text: "Put-together... but fantasizing about chaos", type: "chaotic" }
      ]
    },
    {
      id: 10,
      text: "To be whole, you probably need to accept that you can be:",
      options: [
        { text: "Selfish sometimes, without being a bad person", type: "selfish" },
        { text: "Weak sometimes, without falling apart", type: "vulnerable" },
        { text: "Strategic sometimes, without being fake", type: "performer" },
        { text: "Chaotic sometimes, without losing yourself", type: "chaotic" }
      ]
    }
  ],
  results: {
    selfish: {
      type: "The Hidden Wanting",
      description: "Your shadow holds all the needs and wants you've suppressed. You've learned that being 'good' means putting others first, so the part of you that wants, takes, and needs went into hiding. But she's in there, starving and a little resentful. And honestly? She deserves some space.",
      traits: ["Over-giver", "Secretly resentful", "Suppresses needs", "Fears being seen as selfish"],
      advice: "Wanting things doesn't make you selfish. Having needs doesn't make you greedy. Start practicing small asks and boundary-setting. Every 'no' you say creates room for a 'yes' to yourself. Feed your shadow before it demands everything at once."
    },
    vulnerable: {
      type: "The Hidden Weakness",
      description: "Your shadow holds all the fear, doubt, and fragility you've hidden to survive. You've built an identity on being strong, capable, handling it - so the part of you that's scared and needs help went underground. But pretending it doesn't exist is exhausting.",
      traits: ["Over-achiever", "Secret anxiety", "Struggles to ask for help", "Fear of weakness"],
      advice: "Showing vulnerability isn't weakness - hiding it is actually what's draining you. Let trusted people see the real you. You don't have to earn love by being indestructible. Your shadow is asking for permission to rest."
    },
    performer: {
      type: "The Hidden Authentic",
      description: "Your shadow holds the 'real you' you've learned to hide. Somewhere you learned that being accepted meant being a certain way, so your authentic self went into hiding. Now there's a performer running the show, and the real you is watching, exhausted, wondering when they can come out.",
      traits: ["Highly adaptable", "People-pleaser", "Identity confusion", "Fear of rejection"],
      advice: "You're not fake - you're protective. But the performance is costing you. Start letting your real opinions, real preferences, and real self show up with safe people. The mask has protected you, but it's also trapped you. Time to let the real one breathe."
    },
    chaotic: {
      type: "The Hidden Destroyer",
      description: "Your shadow holds all the chaos, destruction, and disorder you've suppressed. You've built a controlled, orderly life - but there's a part of you that wants to flip the table, burn the plans, and see what happens. That wildness isn't dangerous; it's creative energy needing an outlet.",
      traits: ["Over-controller", "Secret rebel", "Fears losing control", "Suppresses impulses"],
      advice: "Your desire for chaos isn't destructive - it's creative energy that needs release. Build sanctioned chaos into your life: spontaneous days, creative destruction projects, controlled risks. Your shadow doesn't want to destroy you; it wants to free you from the prison of perfection."
    }
  }
};
