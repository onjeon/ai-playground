// What Type of Boss Would You Be? - Viral career test for American English users

export const testData = {
  id: "career-boss-type",
  title: "What Type of Boss Would You Be?",
  description: "Dream promotion incoming! What kind of leader would you actually become? (Be honest...)",
  questions: [
    {
      id: 1,
      text: "An employee misses a deadline. Your move:",
      options: [
        { text: "Private conversation to understand what happened and help", type: "supportive" },
        { text: "Document it but focus on how to fix and prevent next time", type: "balanced" },
        { text: "Performance improvement plan - standards are standards", type: "demanding" },
        { text: "Whatever, I'll just do it myself faster", type: "micromanager" }
      ]
    },
    {
      id: 2,
      text: "Your dream management style:",
      options: [
        { text: "Be there for my team emotionally and professionally", type: "supportive" },
        { text: "Set clear expectations and let them figure out the how", type: "balanced" },
        { text: "Drive excellence and hold everyone accountable", type: "demanding" },
        { text: "Closely guide every detail to ensure quality", type: "micromanager" }
      ]
    },
    {
      id: 3,
      text: "A team member wants to do something differently than you would. You:",
      options: [
        { text: "Encourage them! Different perspectives are valuable", type: "supportive" },
        { text: "Discuss the approach and align on the best path forward", type: "balanced" },
        { text: "Explain why my way is proven to work", type: "demanding" },
        { text: "Redirect them - I've already thought this through", type: "micromanager" }
      ]
    },
    {
      id: 4,
      text: "How would you handle 1:1 meetings with direct reports?",
      options: [
        { text: "Check in on them as people first, work second", type: "supportive" },
        { text: "Mix of career development, projects, and personal chat", type: "balanced" },
        { text: "Focus on performance, goals, and blockers", type: "demanding" },
        { text: "Detailed review of everything they're working on", type: "micromanager" }
      ]
    },
    {
      id: 5,
      text: "Giving critical feedback makes you feel:",
      options: [
        { text: "Uncomfortable - I'd rather focus on positives", type: "supportive" },
        { text: "Fine if it's constructive and helps them grow", type: "balanced" },
        { text: "Necessary - how else will they improve?", type: "demanding" },
        { text: "Frustrated that I have to say it again", type: "micromanager" }
      ]
    },
    {
      id: 6,
      text: "Your team presents work you don't love. Reaction:",
      options: [
        { text: "Find something to praise first, then gently suggest changes", type: "supportive" },
        { text: "Give honest feedback and ask questions to guide them", type: "balanced" },
        { text: "Be direct about what needs to change", type: "demanding" },
        { text: "Show them exactly how I would've done it", type: "micromanager" }
      ]
    },
    {
      id: 7,
      text: "A high performer wants to transfer to another team. You:",
      options: [
        { text: "Support their growth even though I'll miss them", type: "supportive" },
        { text: "Discuss options but ultimately support what's best for them", type: "balanced" },
        { text: "Try to negotiate - they're too valuable to lose", type: "demanding" },
        { text: "Feel personally betrayed after all I've invested in them", type: "micromanager" }
      ]
    },
    {
      id: 8,
      text: "How do you feel about work-life balance for your team?",
      options: [
        { text: "Priority one - I want them to have lives outside work", type: "supportive" },
        { text: "Important, but we need to meet our commitments too", type: "balanced" },
        { text: "Great if we hit our goals, otherwise we do what it takes", type: "demanding" },
        { text: "They should match my energy and availability", type: "micromanager" }
      ]
    },
    {
      id: 9,
      text: "Someone on your team gets credit for work you contributed to. You:",
      options: [
        { text: "Let them shine - their success reflects well on the team", type: "supportive" },
        { text: "Happy for them, might mention team effort later", type: "balanced" },
        { text: "Make sure my contribution is acknowledged", type: "demanding" },
        { text: "Annoyed - I should've done more of it myself", type: "micromanager" }
      ]
    },
    {
      id: 10,
      text: "Your biggest fear as a manager would be:",
      options: [
        { text: "My team not feeling supported or happy", type: "supportive" },
        { text: "Not developing my team's potential effectively", type: "balanced" },
        { text: "Missing goals and looking like a failure", type: "demanding" },
        { text: "Things going wrong when I'm not watching", type: "micromanager" }
      ]
    }
  ],
  results: {
    supportive: {
      type: "The Nurturing Leader",
      description: "You're the boss everyone wishes they had! Empathetic, supportive, and genuinely invested in your team's wellbeing. You lead with kindness and create psychological safety. Your team loves you - maybe too much. They might walk all over you if you're not careful.",
      traits: ["Empathetic", "Supportive", "People-first", "Approachable"],
      advice: "Your heart is your superpower, but being liked isn't the same as being respected. Learn to give tough feedback and hold people accountable. Being kind doesn't mean avoiding difficult conversations - it means having them with care."
    },
    balanced: {
      type: "The Strategic Guide",
      description: "You've cracked the code: high expectations WITH humanity. You develop talent, drive results, and still remember birthdays. You're the rare boss who can be both friend and leader without crossing lines. You should write a management book.",
      traits: ["Balanced", "Fair", "Developmental", "Respected"],
      advice: "You're doing it right! Keep learning, stay self-aware, and adjust to what each team member needs. Your balance is rare - don't let pressure from above or below push you to extremes."
    },
    demanding: {
      type: "The Results Driver",
      description: "You expect excellence and you get it. Standards exist for a reason, and yours are HIGH. Some might call you tough, but you call it 'having expectations.' Your team delivers under pressure - the ones who survive, anyway. You're the boss people respect (and slightly fear).",
      traits: ["High standards", "Demanding", "Goal-oriented", "Direct"],
      advice: "Results matter, but so do relationships. Pushing too hard burns people out and pushes top talent away. Learn to celebrate progress, not just perfection. A little warmth won't kill your standards - it might even improve results."
    },
    micromanager: {
      type: "The Control Enthusiast",
      description: "You're not micromanaging, you're just... very involved. Quality control! Attention to detail! You care about the work! (That's what you tell yourself.) Truth is, you struggle to let go and trust others to do things as well as you would. Your Slack is always open.",
      traits: ["Detail-oriented", "Controlling", "Hands-on", "Perfectionist"],
      advice: "Your high standards come from caring, but micromanaging kills trust, creativity, and motivation. Learn to delegate FULLY. Ask yourself: will this matter in a year? If not, let your team own it. Your job is to coach, not to control."
    }
  }
};
