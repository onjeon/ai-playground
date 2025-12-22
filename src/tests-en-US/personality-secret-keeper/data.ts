// Can You Keep Secrets? - Viral personality test for American English users

export const testData = {
  id: "personality-secret-keeper",
  title: "Can You Keep Secrets?",
  description: "Are you a vault or a sieve? Let's find out if people should trust you with their secrets!",
  questions: [
    {
      id: 1,
      text: "A friend tells you something juicy and says 'Don't tell anyone.' You:",
      options: [
        { text: "Take it to my grave. They said don't tell, so I won't", type: "vault" },
        { text: "Keep it unless it becomes absolutely necessary to share", type: "trustworthy" },
        { text: "Might tell my partner/best friend. They don't count, right?", type: "leaky" },
        { text: "Already composing the group chat message", type: "sieve" }
      ]
    },
    {
      id: 2,
      text: "You find out coworker gossip that everyone would want to know. You:",
      options: [
        { text: "Keep it completely to myself. Not my business to share", type: "vault" },
        { text: "Stay quiet unless directly asked about it", type: "trustworthy" },
        { text: "Might let it slip to one trusted person", type: "leaky" },
        { text: "This is too good not to share immediately", type: "sieve" }
      ]
    },
    {
      id: 3,
      text: "Your best friend is planning a surprise party for someone. You:",
      options: [
        { text: "Could be interrogated and wouldn't reveal it", type: "vault" },
        { text: "Keep it secret with zero issues", type: "trustworthy" },
        { text: "Keep it but might accidentally hint too hard", type: "leaky" },
        { text: "Have ruined surprises before honestly", type: "sieve" }
      ]
    },
    {
      id: 4,
      text: "Someone shares a secret about a mutual friend. Your reaction:",
      options: [
        { text: "Act completely normal around them, never let on I know", type: "vault" },
        { text: "Keep it secret but might be a little awkward", type: "trustworthy" },
        { text: "Struggle not to bring it up or drop hints", type: "leaky" },
        { text: "Probably going to ask them about it directly", type: "sieve" }
      ]
    },
    {
      id: 5,
      text: "You discover something embarrassing about a celebrity. You:",
      options: [
        { text: "Who cares? Still not my information to spread", type: "vault" },
        { text: "Maybe discuss with close friends but wouldn't post it", type: "trustworthy" },
        { text: "Definitely telling friends and maybe social media", type: "leaky" },
        { text: "IMMEDIATELY sharing everywhere", type: "sieve" }
      ]
    },
    {
      id: 6,
      text: "Your sibling tells you something your parents don't know. You:",
      options: [
        { text: "Their secret is safe with me, period", type: "vault" },
        { text: "Keep it unless it's putting them in danger", type: "trustworthy" },
        { text: "Might let it slip if directly questioned", type: "leaky" },
        { text: "Probably going to mention it eventually", type: "sieve" }
      ]
    },
    {
      id: 7,
      text: "How do you feel when you're holding a juicy secret?",
      options: [
        { text: "Completely fine. Secrets don't burn a hole in me", type: "vault" },
        { text: "A little antsy but I can handle it", type: "trustworthy" },
        { text: "Low-key dying to tell someone", type: "leaky" },
        { text: "Physical pain from not sharing", type: "sieve" }
      ]
    },
    {
      id: 8,
      text: "Someone explicitly says 'This stays between us.' In your head you think:",
      options: [
        { text: "Obviously. Why would they even need to say that?", type: "vault" },
        { text: "Understood. This is locked away", type: "trustworthy" },
        { text: "I'll try my best...", type: "leaky" },
        { text: "Challenge accepted... and probably failed", type: "sieve" }
      ]
    },
    {
      id: 9,
      text: "You accidentally find out about a surprise for yourself. You:",
      options: [
        { text: "Act completely shocked when it happens. Oscar-worthy", type: "vault" },
        { text: "Keep it to myself but might not be surprised enough", type: "trustworthy" },
        { text: "Might hint that I know to whoever planned it", type: "leaky" },
        { text: "Would probably just ask about it directly", type: "sieve" }
      ]
    },
    {
      id: 10,
      text: "Be honest: how many secrets have you told that you shouldn't have?",
      options: [
        { text: "Genuinely zero. I take confidentiality seriously", type: "vault" },
        { text: "Maybe one or two in my whole life", type: "trustworthy" },
        { text: "More than I'd like to admit", type: "leaky" },
        { text: "I've lost count honestly", type: "sieve" }
      ]
    }
  ],
  results: {
    vault: {
      type: "The Human Vault",
      description: "You are Fort Knox in human form. Secrets enter and never leave. You could be waterboarded and still not spill. People trust you with their deepest confessions because they know it's absolutely safe. You're the friend everyone needs but few deserve. Legendary secret-keeping energy.",
      traits: ["Trustworthy", "Loyal", "Disciplined", "Fort Knox energy"],
      advice: "Your trustworthiness is a rare gift! Just make sure you're not carrying burdens that aren't yours to carry. Some secrets are heavy, and you're allowed to set boundaries about what you're willing to hold."
    },
    trustworthy: {
      type: "The Reliable Confidant",
      description: "You're a safe person to trust with secrets. You take confidentiality seriously and people can count on you. You might slip up in extreme circumstances, but generally, your word is your bond. You're the friend people go to when they really need to talk.",
      traits: ["Reliable", "Trustworthy", "Responsible", "Good boundaries"],
      advice: "Your trustworthiness serves you well in relationships! Keep honoring that trust. Just make sure you're not becoming everyone's emotional dumping ground - you can be trustworthy AND have limits."
    },
    leaky: {
      type: "The Accidental Spiller",
      description: "You mean well! You really do! You have every intention of keeping secrets... but somehow they slip out. Maybe you told 'just one person' or 'accidentally' mentioned it. Your heart is in the right place, but your mouth has a mind of its own.",
      traits: ["Well-intentioned", "Talkative", "Sharing-prone", "Accidentally honest"],
      advice: "Time to work on that verbal filter! Before sharing anything sensitive, ask yourself: 'Was I supposed to tell this?' Consider secrets a sacred trust. If you can't keep them, gently tell people upfront so they can choose what to share."
    },
    sieve: {
      type: "The Open Book",
      description: "Secrets? What secrets? Information flows through you like water through a sieve. You're not malicious - you just don't see the point in keeping things private when sharing is so satisfying. Your friends probably know not to tell you anything sensitive at this point.",
      traits: ["Chatty", "Open", "Sharing-focused", "Questionable discretion"],
      advice: "Your openness is valid, but loose lips sink ships AND friendships! Consider why sharing feels so necessary. Practice the pause before speaking. And honestly? Just tell people upfront you can't keep secrets - they'll appreciate the honesty."
    }
  }
};
