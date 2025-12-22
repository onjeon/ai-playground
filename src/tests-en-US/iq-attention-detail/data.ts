// Attention to Detail Test - Viral IQ test for American English users

export const testData = {
  id: "iq-attention-detail",
  title: "Attention to Detail Test",
  description: "Do you catch what others miss? Test how observant and detail-oriented your brain really is!",
  questions: [
    {
      id: 1,
      text: "When reading, how often do you notice typos or grammatical errors?",
      options: [
        { text: "Almost always - they jump out at me immediately", type: "eagle" },
        { text: "Pretty often, especially obvious ones", type: "sharp" },
        { text: "Sometimes, if they're really bad", type: "average" },
        { text: "Rarely - I focus on the overall message", type: "big_picture" }
      ]
    },
    {
      id: 2,
      text: "Someone in your life gets a subtle haircut. You:",
      options: [
        { text: "Notice immediately and comment on it", type: "eagle" },
        { text: "Notice but might not say anything", type: "sharp" },
        { text: "Might notice if someone points it out", type: "average" },
        { text: "Completely oblivious until they mention it", type: "big_picture" }
      ]
    },
    {
      id: 3,
      text: "You're looking at a 'spot the difference' puzzle. Typically you:",
      options: [
        { text: "Find all differences quickly, it's satisfying", type: "eagle" },
        { text: "Find most, might miss one or two tricky ones", type: "sharp" },
        { text: "Find the obvious ones, struggle with subtle differences", type: "average" },
        { text: "Get frustrated and give up pretty quickly", type: "big_picture" }
      ]
    },
    {
      id: 4,
      text: "When packing for a trip, how organized are you?",
      options: [
        { text: "Detailed list, everything checked twice", type: "eagle" },
        { text: "Mental checklist, usually remember everything", type: "sharp" },
        { text: "Pack the basics, figure out the rest later", type: "average" },
        { text: "Throw stuff in a bag and hope for the best", type: "big_picture" }
      ]
    },
    {
      id: 5,
      text: "At a restaurant, you notice the menu has a pricing error. You:",
      options: [
        { text: "Spotted it immediately while browsing", type: "eagle" },
        { text: "Noticed when comparing similar items", type: "sharp" },
        { text: "Probably wouldn't notice unless it affected my order", type: "average" },
        { text: "I just look at pictures and descriptions", type: "big_picture" }
      ]
    },
    {
      id: 6,
      text: "When assembling something, how closely do you follow instructions?",
      options: [
        { text: "Every step, every diagram, every warning label", type: "eagle" },
        { text: "Follow along but skip obvious steps", type: "sharp" },
        { text: "Skim instructions, reference when stuck", type: "average" },
        { text: "Instructions? I'll figure it out", type: "big_picture" }
      ]
    },
    {
      id: 7,
      text: "Someone slightly rearranges furniture in your home. You:",
      options: [
        { text: "Notice the moment you walk in", type: "eagle" },
        { text: "Notice fairly quickly, within minutes", type: "sharp" },
        { text: "Might notice eventually, maybe not", type: "average" },
        { text: "Wouldn't notice unless it's dramatically different", type: "big_picture" }
      ]
    },
    {
      id: 8,
      text: "How do you handle proofreading your own work (emails, documents)?",
      options: [
        { text: "Multiple reads, check every detail meticulously", type: "eagle" },
        { text: "One careful read-through before sending", type: "sharp" },
        { text: "Quick skim, trust spell-check", type: "average" },
        { text: "Send it, fix mistakes later if needed", type: "big_picture" }
      ]
    },
    {
      id: 9,
      text: "When watching movies, how often do you catch continuity errors?",
      options: [
        { text: "Constantly - different coffee cup levels, wrong hands...", type: "eagle" },
        { text: "Occasionally catch the more obvious ones", type: "sharp" },
        { text: "Rarely, unless someone points them out", type: "average" },
        { text: "I'm too absorbed in the story to notice", type: "big_picture" }
      ]
    },
    {
      id: 10,
      text: "Your friend sends you a photo with 'something wrong' and asks you to find it. You:",
      options: [
        { text: "Usually find it within seconds", type: "eagle" },
        { text: "Find it after studying the image carefully", type: "sharp" },
        { text: "Struggle and often need hints", type: "average" },
        { text: "Give up and ask them to just tell me", type: "big_picture" }
      ]
    }
  ],
  results: {
    eagle: {
      type: "Eagle Eye",
      description: "Nothing gets past you! Your attention to detail is absolutely exceptional. You notice things others miss completely - from tiny errors to subtle changes in your environment. You'd be incredible in fields requiring precision: editing, quality control, detective work, or surgery!",
      traits: ["Exceptional observation", "Precision-focused", "Error-catching ability", "Environmental awareness"],
      advice: "Your eye for detail is a gift! Just be careful not to get stuck on perfecting every little thing - sometimes 'good enough' is actually good enough."
    },
    sharp: {
      type: "Sharp Observer",
      description: "You've got keen observational skills! You catch most details while still being able to see the bigger picture. This balance makes you valuable in many situations - you can proofread, spot issues, and still move efficiently through tasks.",
      traits: ["Strong observation", "Balanced attention", "Reliable accuracy", "Quality-conscious"],
      advice: "Great balance! Keep sharpening your skills with observation games and mindfulness exercises."
    },
    average: {
      type: "Selective Noticer",
      description: "You notice details when they matter to you! Your brain filters out noise and focuses on what seems important. This is actually efficient - you're not getting distracted by every little thing, even if some details slip through.",
      traits: ["Priority-based attention", "Efficient processing", "Context-dependent focus", "Practical observation"],
      advice: "When detail matters (important emails, contracts), slow down and do an extra check. Your brain CAN see details when you ask it to!"
    },
    big_picture: {
      type: "Big Picture Thinker",
      description: "Details? Who needs them when you're focused on the grand vision! Your brain naturally gravitates toward overall concepts, themes, and the forest rather than the trees. You're probably great at strategy, creative thinking, and seeing connections others miss.",
      traits: ["Conceptual thinker", "Strategy-focused", "Pattern recognition", "Vision-oriented"],
      advice: "Embrace your big-picture strength! For detail work, partner with someone who complements your style or create checklists to catch what you might miss."
    }
  }
};
