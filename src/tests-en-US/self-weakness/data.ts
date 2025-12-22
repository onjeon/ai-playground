// What's Your Secret Weakness? - Viral self-discovery test for American English users

export const testData = {
  id: "self-weakness",
  title: "What's Your Secret Weakness?",
  description: "We all have them. The things that trip us up again and again. Time to meet yours (so you can finally work with it, not against it).",
  questions: [
    {
      id: 1,
      text: "What pattern keeps showing up in your life?",
      options: [
        { text: "Saying yes when I should say no", type: "boundaries" },
        { text: "Starting strong then losing momentum", type: "consistency" },
        { text: "Overthinking until opportunities pass", type: "overthinking" },
        { text: "Avoiding hard conversations and conflict", type: "avoidance" }
      ]
    },
    {
      id: 2,
      text: "What would your ex/friend/boss say is your issue?",
      options: [
        { text: "You let people walk all over you", type: "boundaries" },
        { text: "You don't follow through on things", type: "consistency" },
        { text: "You think too much and act too little", type: "overthinking" },
        { text: "You shut down instead of communicating", type: "avoidance" }
      ]
    },
    {
      id: 3,
      text: "What frustrates you most about yourself?",
      options: [
        { text: "I keep sacrificing my needs for others", type: "boundaries" },
        { text: "I can't seem to stick with anything", type: "consistency" },
        { text: "I get stuck in my head instead of doing", type: "overthinking" },
        { text: "I run from problems instead of facing them", type: "avoidance" }
      ]
    },
    {
      id: 4,
      text: "What's your go-to excuse?",
      options: [
        { text: "'I can't let them down'", type: "boundaries" },
        { text: "'I'll get back to it tomorrow'", type: "consistency" },
        { text: "'I need more information first'", type: "overthinking" },
        { text: "'It's not that big of a deal'", type: "avoidance" }
      ]
    },
    {
      id: 5,
      text: "How do you typically self-sabotage?",
      options: [
        { text: "Overcommitting until I burn out", type: "boundaries" },
        { text: "Abandoning goals when they get hard", type: "consistency" },
        { text: "Researching forever instead of starting", type: "overthinking" },
        { text: "Pretending problems will solve themselves", type: "avoidance" }
      ]
    },
    {
      id: 6,
      text: "What's hardest for you to do?",
      options: [
        { text: "Disappoint someone, even for my own good", type: "boundaries" },
        { text: "Keep showing up when motivation dies", type: "consistency" },
        { text: "Make a decision with incomplete information", type: "overthinking" },
        { text: "Have an uncomfortable conversation", type: "avoidance" }
      ]
    },
    {
      id: 7,
      text: "Which sounds like your therapy topic?",
      options: [
        { text: "Why do I always put others first to my own detriment?", type: "boundaries" },
        { text: "Why can't I follow through on what I start?", type: "consistency" },
        { text: "Why do I overanalyze everything to death?", type: "overthinking" },
        { text: "Why do I run from confrontation and hard things?", type: "avoidance" }
      ]
    },
    {
      id: 8,
      text: "What would change your life if you fixed it?",
      options: [
        { text: "Learning to say 'no' without guilt", type: "boundaries" },
        { text: "Actually finishing what I start", type: "consistency" },
        { text: "Getting out of my head and into action", type: "overthinking" },
        { text: "Facing things head-on instead of running", type: "avoidance" }
      ]
    },
    {
      id: 9,
      text: "What's your stress response?",
      options: [
        { text: "Take on everyone else's stress too", type: "boundaries" },
        { text: "Give up and do nothing productive", type: "consistency" },
        { text: "Spiral into worst-case scenario planning", type: "overthinking" },
        { text: "Pretend nothing is wrong", type: "avoidance" }
      ]
    },
    {
      id: 10,
      text: "What would your best self do differently?",
      options: [
        { text: "Protect my energy and prioritize myself", type: "boundaries" },
        { text: "Show up consistently even when it's hard", type: "consistency" },
        { text: "Trust myself and take action", type: "overthinking" },
        { text: "Face reality instead of escaping it", type: "avoidance" }
      ]
    }
  ],
  results: {
    boundaries: {
      type: "Weakness: Boundary Setting",
      description: "You give until you're empty. Your 'yes' comes too easy and your 'no' barely exists. You're so focused on not disappointing others that you constantly disappoint yourself. Underneath, you might fear that setting limits means losing love. Spoiler: it doesn't.",
      traits: ["People-pleaser", "Over-giver", "Self-sacrificing", "Guilt-driven"],
      advice: "Start small. One 'no' this week. One request you don't immediately agree to. The people who leave when you set boundaries were only there for what you gave them. The right people will respect your limits - and actually like you more for having them."
    },
    consistency: {
      type: "Weakness: Consistency",
      description: "You're amazing at starting but struggle with sustaining. New project energy is your drug; the middle part where it gets hard? Not so much. Your graveyard of half-finished goals haunts you. You know what to do - you just can't seem to keep doing it.",
      traits: ["Shiny object syndrome", "Motivation-dependent", "Great starter", "Struggles to finish"],
      advice: "Motivation is a myth. Build systems, not inspiration. Small daily actions beat occasional bursts of productivity. Try: make it easier to continue than to stop. And forgive yourself for the false starts - this one could be the one that sticks."
    },
    overthinking: {
      type: "Weakness: Overthinking",
      description: "Your brain is busy. TOO busy. You've thought through every scenario, every potential problem, every way it could go wrong - and somewhere in there, the opportunity to act passed you by. Analysis paralysis is your home address. Your mind is powerful; it just needs direction.",
      traits: ["Analytical", "Perfectionist", "Risk-averse", "Decision-challenged"],
      advice: "Your brain wants certainty but life doesn't offer it. Practice: 'good enough, move on.' Set deadlines for decisions. Take action before you feel ready - you never will. The information you need often only comes from doing, not thinking."
    },
    avoidance: {
      type: "Weakness: Avoidance",
      description: "If you don't look at it, it doesn't exist, right? Wrong. But that's your coping mechanism. Hard conversations, scary emails, uncomfortable feelings - you have a PhD in pretending they're not there. But the thing about avoided problems? They grow.",
      traits: ["Conflict-avoidant", "Emotion-suppressing", "Escape artist", "Procrastinator"],
      advice: "What you avoid runs your life. Start with one thing you've been ducking - just one. Face it before it gets bigger. The anticipation is always worse than the thing. And the relief on the other side? That's the feeling you're actually chasing."
    }
  }
};
