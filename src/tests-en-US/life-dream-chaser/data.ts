// Are You a Dream Chaser? - Viral life test for American English users

export const testData = {
  id: "life-dream-chaser",
  title: "Are You Actually Chasing Your Dreams?",
  description: "Big plans or all talk? Let's see if you're really pursuing what you want!",
  questions: [
    {
      id: 1,
      text: "How clear are your dreams/goals?",
      options: [
        { text: "Crystal clear and I think about them constantly", type: "chaser" },
        { text: "I know what I want but haven't mapped it out", type: "dreamer" },
        { text: "Vague ideas but nothing concrete", type: "searcher" },
        { text: "I've stopped dreaming and just focus on today", type: "grounded" }
      ]
    },
    {
      id: 2,
      text: "What are you doing TODAY to move toward your dreams?",
      options: [
        { text: "Active daily work toward my goals", type: "chaser" },
        { text: "Occasional steps when I have time/energy", type: "dreamer" },
        { text: "Thinking about it but not much action", type: "searcher" },
        { text: "Not focused on 'dreams' - just living my life", type: "grounded" }
      ]
    },
    {
      id: 3,
      text: "When obstacles appear:",
      options: [
        { text: "They're puzzles to solve on the way to my goal", type: "chaser" },
        { text: "They slow me down but don't stop me", type: "dreamer" },
        { text: "They often stop me or make me reconsider", type: "searcher" },
        { text: "I deal with life as it comes, not chasing anything specific", type: "grounded" }
      ]
    },
    {
      id: 4,
      text: "Your comfort zone and your dreams:",
      options: [
        { text: "I push past my comfort zone regularly for my goals", type: "chaser" },
        { text: "I know I need to leave it but it's hard", type: "dreamer" },
        { text: "My comfort zone mostly wins", type: "searcher" },
        { text: "I'm content within my comfort zone", type: "grounded" }
      ]
    },
    {
      id: 5,
      text: "When someone asks about your five-year plan:",
      options: [
        { text: "I have a clear vision and can articulate it", type: "chaser" },
        { text: "I have ideas but they're not fully formed", type: "dreamer" },
        { text: "I really don't know - it stresses me out", type: "searcher" },
        { text: "I don't plan that far ahead - too much changes", type: "grounded" }
      ]
    },
    {
      id: 6,
      text: "Sacrifices for your dreams:",
      options: [
        { text: "I've made real sacrifices and I'm okay with it", type: "chaser" },
        { text: "I want to but struggle to give things up", type: "dreamer" },
        { text: "I haven't been willing to sacrifice much", type: "searcher" },
        { text: "Sacrificing present for future dreams seems unbalanced", type: "grounded" }
      ]
    },
    {
      id: 7,
      text: "Fear of failure affects you:",
      options: [
        { text: "It exists but I move forward anyway", type: "chaser" },
        { text: "It slows me down but doesn't fully stop me", type: "dreamer" },
        { text: "It often keeps me from starting", type: "searcher" },
        { text: "I don't have big dreams to fail at", type: "grounded" }
      ]
    },
    {
      id: 8,
      text: "Your relationship with 'realistic' expectations:",
      options: [
        { text: "I believe in ambitious dreams despite skeptics", type: "chaser" },
        { text: "I try to dream big but get pulled back to 'realistic'", type: "dreamer" },
        { text: "I've scaled back to what seems achievable", type: "searcher" },
        { text: "I prefer realistic goals to big dreams", type: "grounded" }
      ]
    },
    {
      id: 9,
      text: "If you never achieved your biggest dream:",
      options: [
        { text: "I'd regret not trying more than failing", type: "chaser" },
        { text: "I'd be disappointed but okay", type: "dreamer" },
        { text: "I'm not sure I have a 'biggest dream' to fail at", type: "searcher" },
        { text: "I find meaning in the life I have, not dreams", type: "grounded" }
      ]
    },
    {
      id: 10,
      text: "Honestly, are you chasing your dreams?",
      options: [
        { text: "Yes - actively, consistently, despite fear", type: "chaser" },
        { text: "Sort of - I think about them more than I chase them", type: "dreamer" },
        { text: "No - I'm not really sure what my dreams are", type: "searcher" },
        { text: "I don't believe in 'dream chasing' - I live now", type: "grounded" }
      ]
    }
  ],
  results: {
    chaser: {
      type: "The Active Dream Chaser",
      description: "You're not just dreaming, you're DOING. Your goals are clear, your actions are consistent, and you're willing to sacrifice comfort for pursuit. You're the person who actually goes after what they want instead of just talking about it. That's rare and powerful.",
      traits: ["Action-oriented", "Persistent", "Vision-driven", "Brave"],
      advice: "Keep chasing! But also appreciate the journey, not just the destination. And make sure your dreams are still YOUR dreams - not ones you inherited or feel obligated to pursue. Authentic dreams are worth chasing."
    },
    dreamer: {
      type: "The Dreamer In Progress",
      description: "You have dreams and you care about them, but action isn't matching ambition. You think about goals more than you work toward them. This is VERY common - the gap between dreaming and doing is where most people live. The question is: will you close it?",
      traits: ["Imaginative", "Aspirational", "Inconsistent", "Potential-filled"],
      advice: "Your dreams are valid! But dreams without action are just wishes. Pick ONE thing you can do this week toward your biggest goal. Small consistent action beats occasional motivation. The only thing between you and 'chaser' is doing."
    },
    searcher: {
      type: "The Dream Searcher",
      description: "You're still figuring out what you really want. Dreams feel vague or you've been too afraid to commit to one. That's okay - not everyone knows their purpose early. But searching is different from hiding. Make sure you're actively exploring, not just avoiding.",
      traits: ["Exploring", "Uncertain", "Open", "Searching"],
      advice: "Keep searching, but ACTIVELY. Try things. Experiment. Your dreams might not be found through thinking - they might be found through doing. Give yourself permission to want things, even if they seem unrealistic. What would you do if you couldn't fail?"
    },
    grounded: {
      type: "The Present-Focused Realist",
      description: "You've either made peace with not chasing big dreams, or you genuinely find meaning in everyday life rather than future goals. This isn't failure - it's a different philosophy. Some people chase dreams; others cultivate contentment. Neither is wrong.",
      traits: ["Present-focused", "Content", "Realistic", "Grounded"],
      advice: "Your groundedness is valid if it comes from peace, not resignation. Make sure you're choosing contentment, not settling out of fear. If you're genuinely happy living in the now, that's wisdom. If you've just given up, that's worth examining."
    }
  }
};
