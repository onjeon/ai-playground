// How Often Do You Think About Quitting? - Viral career test for American English users

export const testData = {
  id: "career-quit-fantasy",
  title: "How Often Do You Think About Quitting?",
  description: "We've all been there. How often do YOU daydream about your dramatic exit? (This is a safe space)",
  questions: [
    {
      id: 1,
      text: "Monday morning arrives. Your first thought about work:",
      options: [
        { text: "Let's do this! New week, new opportunities", type: "content" },
        { text: "It is what it is. Time to work", type: "neutral" },
        { text: "Already counting down to Friday", type: "daydreamer" },
        { text: "Maybe I'll just not show up today", type: "planner" }
      ]
    },
    {
      id: 2,
      text: "How often do you browse job listings 'just to see'?",
      options: [
        { text: "Rarely - I'm happy where I am", type: "content" },
        { text: "Occasionally, to know my market value", type: "neutral" },
        { text: "Weekly. It's my favorite hobby", type: "daydreamer" },
        { text: "I have job alerts set up permanently", type: "planner" }
      ]
    },
    {
      id: 3,
      text: "Your relationship with your LinkedIn profile:",
      options: [
        { text: "Updated occasionally, not actively looking", type: "content" },
        { text: "Keeping it fresh just in case", type: "neutral" },
        { text: "Optimized and ready to attract recruiters", type: "daydreamer" },
        { text: "Set to 'Open to Work' (visible to recruiters only)", type: "planner" }
      ]
    },
    {
      id: 4,
      text: "During a frustrating meeting, you're thinking:",
      options: [
        { text: "How to solve the problem at hand", type: "content" },
        { text: "This is annoying but manageable", type: "neutral" },
        { text: "What would I be doing if I quit tomorrow?", type: "daydreamer" },
        { text: "I wonder if that recruiter who messaged me is still interested", type: "planner" }
      ]
    },
    {
      id: 5,
      text: "The 'what if I won the lottery' fantasy for you:",
      options: [
        { text: "I'd probably still work, just with more freedom", type: "content" },
        { text: "I'd take time off, maybe come back part-time", type: "neutral" },
        { text: "Gone. Immediately. Two weeks notice is generous", type: "daydreamer" },
        { text: "I have the resignation speech already written in my head", type: "planner" }
      ]
    },
    {
      id: 6,
      text: "You see someone dramatically quit on social media. Your reaction:",
      options: [
        { text: "That seems extreme, why not just find another job first?", type: "content" },
        { text: "Interesting. I wonder what happened", type: "neutral" },
        { text: "Live vicariously through them for a moment", type: "daydreamer" },
        { text: "Take notes for my own future exit", type: "planner" }
      ]
    },
    {
      id: 7,
      text: "How detailed is your 'quitting fantasy'?",
      options: [
        { text: "I don't really have one", type: "content" },
        { text: "Vague thoughts when things get stressful", type: "neutral" },
        { text: "Fairly detailed - including what I'd say", type: "daydreamer" },
        { text: "A fully formed exit strategy with multiple scenarios", type: "planner" }
      ]
    },
    {
      id: 8,
      text: "Your emergency fund / financial runway situation:",
      options: [
        { text: "Enough for emergencies, not planning to use it for quitting", type: "content" },
        { text: "Building it up, nice to have options", type: "neutral" },
        { text: "Calculating exactly how long I could survive without a job", type: "daydreamer" },
        { text: "Strategically saving for my eventual escape", type: "planner" }
      ]
    },
    {
      id: 9,
      text: "The phrase 'work is work' makes you feel:",
      options: [
        { text: "It's true, but I genuinely enjoy what I do", type: "content" },
        { text: "Yeah, that's life. It could be worse", type: "neutral" },
        { text: "Sad, because it doesn't have to be this way... right?", type: "daydreamer" },
        { text: "Like a mantra to survive until I can leave", type: "planner" }
      ]
    },
    {
      id: 10,
      text: "Honestly, how close are you to actually quitting?",
      options: [
        { text: "Not at all - I'm in a good place", type: "content" },
        { text: "Not actively looking, but open to opportunities", type: "neutral" },
        { text: "One bad day away from doing something dramatic", type: "daydreamer" },
        { text: "Already have interviews scheduled or a plan in motion", type: "planner" }
      ]
    }
  ],
  results: {
    content: {
      type: "The Genuinely Satisfied",
      description: "Wait, you actually LIKE your job? You're not constantly fantasizing about escape? This is either genuine contentment or impressive denial - either way, cherish it! You're in the minority of workers who aren't secretly plotting their exit. Protect whatever you have because it's rare.",
      traits: ["Content", "Stable", "Secure", "Low flight risk"],
      advice: "Your satisfaction is a gift! Keep nurturing whatever makes your job work for you. But stay aware of your market value and don't get complacent - even happy employees should know their options."
    },
    neutral: {
      type: "The Realistic Worker",
      description: "You're not miserable, but you're not drinking the company Kool-Aid either. Work is work. It pays the bills, has its moments, and you deal with it. You're not plotting an exit, but you'd listen if a better opportunity came along. Peak healthy detachment.",
      traits: ["Realistic", "Stable", "Open-minded", "Balanced"],
      advice: "Your pragmatic approach is healthy. Keep your skills sharp and your options open without obsessing over escape. You've found a sustainable middle ground between loving and leaving."
    },
    daydreamer: {
      type: "The Fantasy Quitter",
      description: "You quit your job approximately 47 times a day... in your head. Every frustrating email, every pointless meeting, you're mentally walking out. You haven't left yet, but the fantasy is VIVID. Job listings are your comfort scrolling. You're not happy, but you're not quite unhappy enough to act.",
      traits: ["Daydreamer", "Frustrated", "Not quite ready to leap", "Fantasy escaper"],
      advice: "Those quit fantasies are telling you something. Either find ways to improve your current situation or start seriously planning your exit. Living in fantasy land without action just creates resentment. Time to either commit or actually leave."
    },
    planner: {
      type: "The Active Escape Artist",
      description: "This isn't fantasy - you're PLANNING. Resume updated, LinkedIn optimized, interviews happening, savings calculated. You're not just thinking about quitting, you're strategically engineering your exit. One foot is already out the door. It's not if, it's when.",
      traits: ["Strategic", "Ready to leave", "One foot out the door", "Planning actively"],
      advice: "Sounds like you've already made your decision. Execute your plan thoughtfully - don't burn bridges you might need later. Make sure you're running TO something, not just FROM your current situation. And when you leave, leave gracefully."
    }
  }
};
