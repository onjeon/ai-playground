// How Do You Receive Feedback? - Viral career test for American English users

export const testData = {
  id: "career-feedback-receiver",
  title: "How Do You Receive Feedback?",
  description: "Your boss says 'Can we talk?' - what happens next? Let's see how you REALLY handle criticism.",
  questions: [
    {
      id: 1,
      text: "Your boss says 'Can I give you some feedback?' Your immediate reaction:",
      options: [
        { text: "Sure! I'm always looking to improve", type: "growth" },
        { text: "Slight nerves, but I'll listen", type: "defensive" },
        { text: "What did I do wrong NOW?", type: "sensitive" },
        { text: "Depends who's giving it", type: "selective" }
      ]
    },
    {
      id: 2,
      text: "Someone critiques your work. Internally you're thinking:",
      options: [
        { text: "How can I use this to get better?", type: "growth" },
        { text: "Let me explain why I did it that way...", type: "defensive" },
        { text: "I'm a failure and everyone knows it", type: "sensitive" },
        { text: "Is this person even qualified to critique me?", type: "selective" }
      ]
    },
    {
      id: 3,
      text: "After receiving critical feedback, you:",
      options: [
        { text: "Take notes, ask clarifying questions, make a plan", type: "growth" },
        { text: "Explain my perspective but take some points on board", type: "defensive" },
        { text: "Need time alone to process my emotions", type: "sensitive" },
        { text: "Consider the source before deciding if I'll change", type: "selective" }
      ]
    },
    {
      id: 4,
      text: "Your performance review is coming up. You feel:",
      options: [
        { text: "Eager to hear how I can improve", type: "growth" },
        { text: "Prepared to defend my work if needed", type: "defensive" },
        { text: "Anxious for days leading up to it", type: "sensitive" },
        { text: "Curious but only if my manager gives good feedback", type: "selective" }
      ]
    },
    {
      id: 5,
      text: "You receive a 'mixed' performance review. Your takeaway:",
      options: [
        { text: "Focus on the growth areas and create action items", type: "growth" },
        { text: "The negative feedback wasn't fully accurate", type: "defensive" },
        { text: "The criticism overshadows any positives mentioned", type: "sensitive" },
        { text: "Some of it's fair, some of it's their issue not mine", type: "selective" }
      ]
    },
    {
      id: 6,
      text: "A coworker gives you unsolicited advice. You:",
      options: [
        { text: "Thank them and consider if it's useful", type: "growth" },
        { text: "Explain that I had a reason for my approach", type: "defensive" },
        { text: "Wonder if everyone thinks I'm bad at my job", type: "sensitive" },
        { text: "Evaluate if they have standing to give that advice", type: "selective" }
      ]
    },
    {
      id: 7,
      text: "You made a mistake at work and someone points it out. Your response:",
      options: [
        { text: "Own it, fix it, learn from it", type: "growth" },
        { text: "Explain the circumstances that led to the mistake", type: "defensive" },
        { text: "Feel terrible and replay it mentally for days", type: "sensitive" },
        { text: "Acknowledge it if the criticism is fair", type: "selective" }
      ]
    },
    {
      id: 8,
      text: "Which phrase resonates most with you?",
      options: [
        { text: "Feedback is a gift", type: "growth" },
        { text: "Context matters more than critique", type: "defensive" },
        { text: "Criticism is hard no matter how it's delivered", type: "sensitive" },
        { text: "Good feedback comes from credible sources", type: "selective" }
      ]
    },
    {
      id: 9,
      text: "You receive positive feedback. Your reaction:",
      options: [
        { text: "Great! And what else can I improve?", type: "growth" },
        { text: "Finally, recognition for what I've been doing well", type: "defensive" },
        { text: "Happy but wondering if they're just being nice", type: "sensitive" },
        { text: "Accept it from people whose opinions I respect", type: "selective" }
      ]
    },
    {
      id: 10,
      text: "If you could change one thing about how you receive feedback:",
      options: [
        { text: "I'd want more of it, more often", type: "growth" },
        { text: "I'd want more context before jumping to criticism", type: "defensive" },
        { text: "I'd want it delivered more gently", type: "sensitive" },
        { text: "I'd want it only from qualified people", type: "selective" }
      ]
    }
  ],
  results: {
    growth: {
      type: "The Growth Mindset Master",
      description: "Feedback? You LIVE for it. Every critique is an opportunity, every suggestion is fuel for improvement. You genuinely view feedback as a gift and get excited about areas to develop. You're the person who says 'what else could I do better?' after a glowing review. Honestly? It's inspiring (and slightly intimidating).",
      traits: ["Open-minded", "Growth-oriented", "Resilient", "Self-aware"],
      advice: "Your openness to feedback is a superpower! Just make sure you're also celebrating wins, not just chasing improvement. And sometimes feedback says more about the giver than you - not everything needs to be internalized."
    },
    defensive: {
      type: "The Context Provider",
      description: "When feedback comes, your first instinct is to explain. 'Let me give you some context...' is your catchphrase. You're not ignoring feedback, you just need people to understand the FULL picture first. Sometimes this protects you, sometimes it prevents growth. It's a fine line.",
      traits: ["Protective", "Context-focused", "Selective listener", "Self-preserving"],
      advice: "The instinct to defend is natural, but try this: listen FULLY before responding. Let the feedback land before you explain. You might find that once you stop defending, you can actually learn. Not all criticism is an attack."
    },
    sensitive: {
      type: "The Tender Receiver",
      description: "Feedback hits DIFFERENT for you. Even constructive criticism can send you spiraling. You take things to heart, replay conversations, and struggle to separate your work from your worth. You're deeply self-aware but also deeply affected. The inner critic is LOUD.",
      traits: ["Sensitive", "Self-reflective", "Takes things personally", "Needs gentler delivery"],
      advice: "Your sensitivity means you care deeply about your work - that's not a flaw. But learning to separate critique of your work from critique of YOU is crucial. Try processing feedback after 24 hours, when emotions have settled. Your worth isn't your work quality."
    },
    selective: {
      type: "The Discerning Listener",
      description: "Not all feedback is created equal, and you know it. You evaluate the source before accepting the message. Feedback from someone you respect? You'll take it seriously. Feedback from someone you don't? Filed under 'their problem.' It's strategic, but maybe sometimes limiting.",
      traits: ["Discerning", "Source-focused", "Strategic", "Possibly missing blind spots"],
      advice: "Some selectivity is healthy - not all feedback is equally valid. But be careful not to dismiss everything that challenges you. Sometimes the most uncomfortable feedback comes from unexpected sources. Try to hear the message, not just judge the messenger."
    }
  }
};
