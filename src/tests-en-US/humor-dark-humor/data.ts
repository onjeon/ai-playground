// Do You Have Dark Humor? - Viral humor test for American English users

export const testData = {
  id: "humor-dark-humor",
  title: "Do You Have Dark Humor?",
  description: "Some people laugh at sunshine and rainbows. Others laugh at... well, the absence of those things. Where do you fall on the darkness spectrum?",
  questions: [
    {
      id: 1,
      text: "Something terrible happens. Your first instinct:",
      options: [
        { text: "Genuine concern and empathy", type: "light" },
        { text: "Process it, then maybe find humor later", type: "moderate" },
        { text: "Make a joke pretty quickly - it helps me cope", type: "dark" },
        { text: "I was making a joke before they finished telling me", type: "abyss" }
      ]
    },
    {
      id: 2,
      text: "Your favorite memes tend to be:",
      options: [
        { text: "Wholesome or relatable content", type: "light" },
        { text: "Mix of everything depending on mood", type: "moderate" },
        { text: "The ones that make me feel like a bad person for laughing", type: "dark" },
        { text: "The ones I can't share because they'd get me fired", type: "abyss" }
      ]
    },
    {
      id: 3,
      text: "When people are sad, you:",
      options: [
        { text: "Offer genuine comfort and support", type: "light" },
        { text: "Comfort first, maybe gentle humor if they're ready", type: "moderate" },
        { text: "Try to make them laugh through it - that's how I show care", type: "dark" },
        { text: "Our entire friendship is based on shared darkness", type: "abyss" }
      ]
    },
    {
      id: 4,
      text: "Your reaction to a funeral/serious event:",
      options: [
        { text: "Somber and appropriate", type: "light" },
        { text: "Respectful but might crack a tension-breaker with close people", type: "moderate" },
        { text: "Desperately suppressing inappropriate thoughts", type: "dark" },
        { text: "Already texting friends about the absurdity", type: "abyss" }
      ]
    },
    {
      id: 5,
      text: "Jokes about death make you:",
      options: [
        { text: "Uncomfortable - that's not funny to me", type: "light" },
        { text: "It depends on the context and delivery", type: "moderate" },
        { text: "Laugh - it's how I process mortality", type: "dark" },
        { text: "Those are my favorite kind", type: "abyss" }
      ]
    },
    {
      id: 6,
      text: "Your humor has made someone:",
      options: [
        { text: "Smile - I keep it pretty safe", type: "light" },
        { text: "Laugh uncomfortably once or twice", type: "moderate" },
        { text: "Question if I'm okay", type: "dark" },
        { text: "Walk away from me at a party", type: "abyss" }
      ]
    },
    {
      id: 7,
      text: "A friend sends you a REALLY dark meme. You:",
      options: [
        { text: "Don't really find it funny tbh", type: "light" },
        { text: "Chuckle but wouldn't share it", type: "moderate" },
        { text: "Send back something equally dark", type: "dark" },
        { text: "This is the foundation of our friendship", type: "abyss" }
      ]
    },
    {
      id: 8,
      text: "Your therapy sessions (real or imagined) would reveal:",
      options: [
        { text: "I process things pretty normally", type: "light" },
        { text: "Some humor as a coping mechanism", type: "moderate" },
        { text: "Extensive use of comedy to deal with trauma", type: "dark" },
        { text: "My therapist is also concerned AND laughing", type: "abyss" }
      ]
    },
    {
      id: 9,
      text: "Pick your comfort comedy:",
      options: [
        { text: "Feel-good sitcoms, lighthearted stuff", type: "light" },
        { text: "Mix of everything - variety is good", type: "moderate" },
        { text: "Dark comedies, gallows humor, uncomfortable laughs", type: "dark" },
        { text: "The bleaker the better - I need to feel something", type: "abyss" }
      ]
    },
    {
      id: 10,
      text: "Be honest: how dark do your thoughts get when you're alone?",
      options: [
        { text: "Pretty normal - I don't go too dark", type: "light" },
        { text: "Occasionally dark but I don't dwell", type: "moderate" },
        { text: "Dark thoughts turned into internal comedy routines", type: "dark" },
        { text: "If people could hear my thoughts I'd be institutionalized", type: "abyss" }
      ]
    }
  ],
  results: {
    light: {
      type: "Light & Bright",
      description: "You prefer your humor like you prefer your rooms - well lit. Dark humor isn't really your thing, and that's completely valid. You find joy in lighthearted content and probably have a very healthy relationship with processing difficult emotions through... not jokes.",
      traits: ["Genuinely optimistic", "Healthy coping skills", "Comfortable with sincerity", "Doesn't need edge"],
      advice: "Your lightness is genuinely refreshing. Not everything needs to be edgy to be funny. Just don't judge your friends who cope differently - sometimes dark humor is how people survive. Meet them where they are."
    },
    moderate: {
      type: "Context-Dependent Darkness",
      description: "You can go dark when appropriate but you don't live there. You read the room, assess the situation, and deploy dark humor strategically. You appreciate a well-crafted dark joke but you also know when it's too soon or too much. Balance.",
      traits: ["Socially calibrated", "Adaptable humor", "Knows the line", "Room reader"],
      advice: "Your ability to adjust is valuable. You can hang with the dark humor crowd and the sunshine crowd equally. Keep reading rooms and being a bridge between different humor styles."
    },
    dark: {
      type: "Comfortably Dark",
      description: "Dark humor is your native language. You process the scary, sad, and uncomfortable through comedy because... what else are you gonna do? Cry? That's not funny. Making jokes about difficult things is how you survive a chaotic world, and honestly? It's a valid strategy.",
      traits: ["Gallows humor expert", "Cope through comedy", "Surprisingly resilient", "Might concern others"],
      advice: "Your dark humor is probably hiding some real processing that needs to happen. Make sure the jokes aren't replacing actual emotional work. Laughing about something isn't the same as dealing with it. Do both."
    },
    abyss: {
      type: "The Void Gazer",
      description: "You've stared into the abyss and it told you a joke. Your humor lives in places that make normal people uncomfortable. You've probably been told you 'take it too far' more than once. But for the people who get you? You're their favorite person to laugh-cry with at 2am.",
      traits: ["Edge lord (affectionate)", "No topic off limits", "Concerning to outsiders", "Deeply understood by few"],
      advice: "Your capacity to find humor in darkness is actually a gift - but make sure it's not alienating you. The people who get you are precious, keep them close. And maybe do a vibe check before unleashing on new people. Not everyone can handle the void."
    }
  }
};
