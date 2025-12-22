// What Red Flags Do You Ignore? - Viral relationship test for American English users

export const testData = {
  id: "relationship-red-flags",
  title: "What Red Flags Do You Ignore?",
  description: "We all have that ONE type of red flag we let slide. What's yours?",
  questions: [
    {
      id: 1,
      text: "They're 'not looking for anything serious' but treat you like a partner. You...",
      options: [
        { text: "Think you can change their mind with time", type: "emotionally-unavailable" },
        { text: "Appreciate the honesty and keep it casual", type: "realistic" },
        { text: "Get frustrated but stay because the chemistry is fire", type: "chemistry-blind" },
        { text: "Stay because at least they're honest about it", type: "bare-minimum" }
      ]
    },
    {
      id: 2,
      text: "Your person is charming to everyone BUT their exes are all 'crazy.' Red flag?",
      options: [
        { text: "Maybe they just have bad luck in dating?", type: "emotionally-unavailable" },
        { text: "Huge red flag - running immediately", type: "realistic" },
        { text: "The charm makes up for it honestly", type: "chemistry-blind" },
        { text: "At least they're being 'honest' about their past", type: "bare-minimum" }
      ]
    },
    {
      id: 3,
      text: "They take forever to text back but have amazing in-person energy. Deal breaker?",
      options: [
        { text: "Nope, I'm a quality over quantity person", type: "bare-minimum" },
        { text: "Yes, consistency matters. I'm out", type: "realistic" },
        { text: "The in-person chemistry makes up for it", type: "chemistry-blind" },
        { text: "Maybe they just have 'attachment issues' - I can help", type: "emotionally-unavailable" }
      ]
    },
    {
      id: 4,
      text: "Hot take: You find yourself making excuses for someone because...",
      options: [
        { text: "They had a hard childhood/past relationship", type: "emotionally-unavailable" },
        { text: "I don't make excuses - behavior is behavior", type: "realistic" },
        { text: "The physical connection is just too good", type: "chemistry-blind" },
        { text: "They're trying, and that's what matters... right?", type: "bare-minimum" }
      ]
    },
    {
      id: 5,
      text: "They never initiate plans but always show up when you do. Thoughts?",
      options: [
        { text: "At least they show up! That counts for something", type: "bare-minimum" },
        { text: "Nah, I need someone who WANTS to see me", type: "realistic" },
        { text: "When we're together it's magic, so it's fine", type: "chemistry-blind" },
        { text: "They're just not 'planners' - I can be the planner", type: "emotionally-unavailable" }
      ]
    },
    {
      id: 6,
      text: "Your friends don't like your person. But you feel a 'connection.' You...",
      options: [
        { text: "Trust the connection over outside opinions", type: "chemistry-blind" },
        { text: "Actually listen to my friends - they see what I can't", type: "realistic" },
        { text: "Think my friends just don't understand them", type: "emotionally-unavailable" },
        { text: "My friends have high standards, not everyone's perfect", type: "bare-minimum" }
      ]
    },
    {
      id: 7,
      text: "They only want to hang out late at night. But the vibe is immaculate. You...",
      options: [
        { text: "A booty call by any other name... bye", type: "realistic" },
        { text: "Night owl energy! We're just both busy people", type: "bare-minimum" },
        { text: "The late night talks ARE intimate though", type: "chemistry-blind" },
        { text: "Maybe they're just more comfortable at night?", type: "emotionally-unavailable" }
      ]
    },
    {
      id: 8,
      text: "They've never introduced you to their friends after months of dating. Red flag?",
      options: [
        { text: "They probably just have a small social circle", type: "bare-minimum" },
        { text: "Major red flag. What are they hiding?", type: "realistic" },
        { text: "Our world together is enough for now", type: "chemistry-blind" },
        { text: "They might have trust issues from the past", type: "emotionally-unavailable" }
      ]
    },
    {
      id: 9,
      text: "Pattern check: In past relationships, what did you overlook most?",
      options: [
        { text: "Emotional unavailability - I can 'fix' them", type: "emotionally-unavailable" },
        { text: "Physical chemistry over compatibility", type: "chemistry-blind" },
        { text: "Low effort because at least it was 'something'", type: "bare-minimum" },
        { text: "I've learned to trust my instincts now", type: "realistic" }
      ]
    },
    {
      id: 10,
      text: "Final gut check: They're not meeting your needs but 'have potential.' You...",
      options: [
        { text: "Give them more time to reach that potential", type: "emotionally-unavailable" },
        { text: "Potential doesn't pay the bills. I'm gone", type: "realistic" },
        { text: "When it's good, it's SO good though", type: "chemistry-blind" },
        { text: "They're better than being single at least", type: "bare-minimum" }
      ]
    }
  ],
  results: {
    "emotionally-unavailable": {
      type: "The Fixer",
      description: "Your kryptonite is the emotionally unavailable person with 'potential.' You see the wounded soul underneath and think your love can heal them. Spoiler: it can't. You're attracted to projects, not partners, and you mistake emotional chaos for depth.",
      traits: ["Drawn to 'broken' people", "Makes excuses for distant behavior", "Believes love conquers all", "Stays too long"],
      advice: "You cannot love someone into being ready for you. Their healing is their job, not yours. Start choosing people who are already doing the work."
    },
    "chemistry-blind": {
      type: "The Chemistry Chaser",
      description: "If the spark is there, you'll ignore basically everything else. Bad texter? Great kisser. Inconsistent? But the tension! You confuse intensity for intimacy and let physical chemistry blind you to major incompatibilities.",
      traits: ["Prioritizes attraction over compatibility", "Overlooks red flags for 'the vibe'", "Mistakes intensity for love", "Gets swept up easily"],
      advice: "Chemistry is just the entry fee, not the whole relationship. Someone can be attractive AND treat you right. Stop settling for one or the other."
    },
    "bare-minimum": {
      type: "The Low Bar Accepter",
      description: "Your standards have been slowly lowering without you realizing it. You've convinced yourself that 'at least they do X' is enough, when really you're accepting crumbs and calling it a meal. Being alone isn't worse than being with the wrong person.",
      traits: ["Grateful for basic effort", "Scared of being 'too demanding'", "Settles to avoid being alone", "Minimizes own needs"],
      advice: "Raise. Your. Standards. The right person won't make you feel like wanting basic respect is 'asking for too much.' You deserve more than someone who just 'shows up sometimes.'"
    },
    realistic: {
      type: "The Boundary Keeper",
      description: "Look at you with your healthy standards! You actually recognize red flags AND leave when you see them. You've probably done some healing work because you're not out here accepting nonsense. Your bar is where it should be.",
      traits: ["Knows their worth", "Trusts instincts", "Won't settle", "Values consistency"],
      advice: "Keep doing what you're doing. Just remember that high standards don't mean no grace - sometimes good people have bad days. Balance is key."
    }
  }
};
