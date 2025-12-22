// Your Networking Style - Viral career test for American English users

export const testData = {
  id: "career-networking-style",
  title: "Your Networking Style",
  description: "Are you a LinkedIn power user or does 'networking event' give you hives? Let's find out!",
  questions: [
    {
      id: 1,
      text: "There's a work networking event. Your reaction:",
      options: [
        { text: "Excited! Great opportunity to meet new people", type: "natural" },
        { text: "I'll go and make an effort", type: "strategic" },
        { text: "Anxiety, but I'll survive with a friend", type: "reluctant" },
        { text: "Suddenly I have a conflict that night", type: "avoider" }
      ]
    },
    {
      id: 2,
      text: "Your approach to small talk with strangers:",
      options: [
        { text: "I genuinely enjoy it and can talk to anyone", type: "natural" },
        { text: "I prepare talking points and power through", type: "strategic" },
        { text: "Awkward but I try my best", type: "reluctant" },
        { text: "I'd rather do literally anything else", type: "avoider" }
      ]
    },
    {
      id: 3,
      text: "Your LinkedIn activity level:",
      options: [
        { text: "Active - posting, commenting, connecting regularly", type: "natural" },
        { text: "Strategic posts and curated connections", type: "strategic" },
        { text: "Lurker who occasionally accepts connection requests", type: "reluctant" },
        { text: "I have one but pretend it doesn't exist", type: "avoider" }
      ]
    },
    {
      id: 4,
      text: "Someone you don't know well asks to 'grab coffee.' You:",
      options: [
        { text: "Say yes! Always happy to connect", type: "natural" },
        { text: "Assess if it could be valuable, then decide", type: "strategic" },
        { text: "Agree but feel slightly anxious about it", type: "reluctant" },
        { text: "Politely deflect with vague scheduling issues", type: "avoider" }
      ]
    },
    {
      id: 5,
      text: "At a conference or industry event, you:",
      options: [
        { text: "Work the room and leave with 20 new contacts", type: "natural" },
        { text: "Target specific people I want to meet", type: "strategic" },
        { text: "Stick close to people I know and make one new contact", type: "reluctant" },
        { text: "Attend sessions only and avoid the networking parts", type: "avoider" }
      ]
    },
    {
      id: 6,
      text: "Following up after meeting someone new:",
      options: [
        { text: "Connect on LinkedIn with a personalized note within 24 hours", type: "natural" },
        { text: "Follow up if they could be valuable to my career", type: "strategic" },
        { text: "Mean to follow up but often forget", type: "reluctant" },
        { text: "Wait for them to follow up (they usually don't)", type: "avoider" }
      ]
    },
    {
      id: 7,
      text: "Asking someone for career advice or mentorship:",
      options: [
        { text: "No problem - I reach out to people all the time", type: "natural" },
        { text: "I research them first and make a strategic ask", type: "strategic" },
        { text: "Takes me weeks to work up the courage", type: "reluctant" },
        { text: "I could never. Too awkward", type: "avoider" }
      ]
    },
    {
      id: 8,
      text: "Your thoughts on 'networking' as a concept:",
      options: [
        { text: "Just building relationships - it's natural!", type: "natural" },
        { text: "A necessary career skill I've developed", type: "strategic" },
        { text: "Feels fake but I know it matters", type: "reluctant" },
        { text: "Performative and soul-crushing", type: "avoider" }
      ]
    },
    {
      id: 9,
      text: "You need to reach out to someone you haven't talked to in years for work reasons. You:",
      options: [
        { text: "No big deal - people do this all the time", type: "natural" },
        { text: "Craft a careful message explaining the ask", type: "strategic" },
        { text: "Agonize about it being weird before finally sending", type: "reluctant" },
        { text: "Find another way that doesn't involve contacting them", type: "avoider" }
      ]
    },
    {
      id: 10,
      text: "Your network has gotten you opportunities in the past:",
      options: [
        { text: "Absolutely - most of my career progress came from connections", type: "natural" },
        { text: "A few key connections have helped strategically", type: "strategic" },
        { text: "Occasionally, but I wish I was better at this", type: "reluctant" },
        { text: "Not really - I rely on applications and skills", type: "avoider" }
      ]
    }
  ],
  results: {
    natural: {
      type: "The Natural Connector",
      description: "You're a networking MACHINE and you don't even realize it. Meeting new people energizes you. Your LinkedIn is thriving, your contact list is massive, and opportunities come to you because you've built genuine relationships everywhere. People actually want to help you because you're authentically interested in them.",
      traits: ["Social", "Authentic", "Well-connected", "Relationship-builder"],
      advice: "Your networking superpower is real! Just make sure you're also nurturing existing relationships, not just collecting new ones. And remember: your network is for giving too, not just getting. Keep being generous with your connections."
    },
    strategic: {
      type: "The Calculated Networker",
      description: "You network with PURPOSE. Every connection is intentional, every coffee is evaluated for ROI. You might not love networking, but you've figured out how to do it effectively. You're not collecting business cards - you're building a strategic web of useful relationships.",
      traits: ["Strategic", "Intentional", "Effective", "Professionally connected"],
      advice: "Your strategic approach works! Just be careful not to seem transactional - people can sense when they're being 'worked.' Try to enjoy the human connection sometimes, not just the career potential. Authenticity makes strategic networking even more powerful."
    },
    reluctant: {
      type: "The Reluctant Networker",
      description: "You KNOW networking matters. You've read the articles, you've heard the advice. But actually doing it? Painful. You show up, you try, but it feels awkward and unnatural. You're not anti-social, you just wish relationships could form without all this... effort.",
      traits: ["Reluctant", "Aware but uncomfortable", "Trying their best", "Prefers organic connections"],
      advice: "Start small! One coffee a month, one LinkedIn comment a week. Networking gets easier with practice. Focus on helping others rather than 'networking' - that mindset shift makes it feel less transactional and more natural."
    },
    avoider: {
      type: "The Networking Avoider",
      description: "Networking? We don't know her. The word alone makes you cringe. You'd rather let your work speak for itself and hope for the best. Unfortunately, you know deep down this might be limiting your career. But is success really worth all those awkward conversations? Debatable.",
      traits: ["Avoidant", "Prefers solitude", "Relies on work quality", "Career limited by choice"],
      advice: "Here's the hard truth: in most industries, pure merit isn't enough. Relationships open doors that skills alone can't. You don't have to become a social butterfly, but developing SOME networking skills is a career investment. Start with low-stakes online interactions and build from there."
    }
  }
};
