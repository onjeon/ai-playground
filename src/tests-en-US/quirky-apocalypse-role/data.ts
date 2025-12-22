// Your Role in the Apocalypse - Viral quirky test for American English users

export const testData = {
  id: "quirky-apocalypse-role",
  title: "Your Role in the Apocalypse",
  description: "When the world ends, what will you become? Let's find your post-apocalyptic destiny!",
  questions: [
    {
      id: 1,
      text: "The apocalypse happens. Your first move:",
      options: [
        { text: "Gather people, form a group, take charge", type: "leader" },
        { text: "Inventory supplies and start planning survival", type: "survivor" },
        { text: "Find my people and make sure they're safe", type: "protector" },
        { text: "Start building/fixing things we'll need", type: "builder" }
      ]
    },
    {
      id: 2,
      text: "Your most useful apocalypse skill:",
      options: [
        { text: "Rallying people and making tough decisions", type: "leader" },
        { text: "Practical survival knowledge and adaptability", type: "survivor" },
        { text: "Combat skills or protective instincts", type: "protector" },
        { text: "Building, fixing, or creating solutions", type: "builder" }
      ]
    },
    {
      id: 3,
      text: "In your survivor group, you're the one who:",
      options: [
        { text: "Makes the final calls and sets direction", type: "leader" },
        { text: "Knows how to find food, water, and resources", type: "survivor" },
        { text: "Stands guard and handles threats", type: "protector" },
        { text: "Builds shelter and fixes equipment", type: "builder" }
      ]
    },
    {
      id: 4,
      text: "Your apocalypse moral compass:",
      options: [
        { text: "Do what's necessary for the group's survival", type: "leader" },
        { text: "Personal survival first, then help others", type: "survivor" },
        { text: "Protect the vulnerable at any cost", type: "protector" },
        { text: "Rebuild and create something from the chaos", type: "builder" }
      ]
    },
    {
      id: 5,
      text: "Your biggest apocalypse fear:",
      options: [
        { text: "Making wrong decisions that cost lives", type: "leader" },
        { text: "Running out of resources and dying slowly", type: "survivor" },
        { text: "Failing to protect those I care about", type: "protector" },
        { text: "Having nothing work and being useless", type: "builder" }
      ]
    },
    {
      id: 6,
      text: "When supplies are low:",
      options: [
        { text: "Make hard calls about rationing and priorities", type: "leader" },
        { text: "Know where to find more - scavenging is my thing", type: "survivor" },
        { text: "Volunteer to do without so others don't suffer", type: "protector" },
        { text: "Figure out how to make more or alternatives", type: "builder" }
      ]
    },
    {
      id: 7,
      text: "Strangers approach your camp:",
      options: [
        { text: "I decide whether to let them in based on group needs", type: "leader" },
        { text: "Assess what resources they bring vs. consume", type: "survivor" },
        { text: "Be ready for threat, but protect the innocent", type: "protector" },
        { text: "See if they have useful skills we need", type: "builder" }
      ]
    },
    {
      id: 8,
      text: "Your apocalypse living space:",
      options: [
        { text: "Command center where I can coordinate", type: "leader" },
        { text: "Optimized for resource storage and efficiency", type: "survivor" },
        { text: "Defensible position with clear sightlines", type: "protector" },
        { text: "Workshop where I can build and create", type: "builder" }
      ]
    },
    {
      id: 9,
      text: "Long-term apocalypse goal:",
      options: [
        { text: "Build a functioning community/society", type: "leader" },
        { text: "Ensure reliable food, water, and survival", type: "survivor" },
        { text: "Create safety for everyone under my protection", type: "protector" },
        { text: "Rebuild infrastructure and civilization basics", type: "builder" }
      ]
    },
    {
      id: 10,
      text: "Your apocalypse ending:",
      options: [
        { text: "Leading the new world or dying for my people", type: "leader" },
        { text: "Surviving against all odds until the end", type: "survivor" },
        { text: "Going down fighting to protect someone", type: "protector" },
        { text: "Leaving behind something I built that lasts", type: "builder" }
      ]
    }
  ],
  results: {
    leader: {
      type: "The Apocalypse Leader",
      description: "When the world ends, you STEP UP. You're the one making hard calls, rallying survivors, and building something from chaos. People will look to you for direction and you'll provide it - even when you're terrified. Every post-apocalyptic story needs someone like you.",
      traits: ["Decisive", "Commanding", "Responsible", "Visionary"],
      advice: "Your leadership instincts are strong! In non-apocalypse life, make sure you're leading not just controlling. Good leaders build other leaders. And the burden of command is heavy - make sure you have support too."
    },
    survivor: {
      type: "The Ultimate Survivor",
      description: "When the world ends, you ADAPT. You know how to find resources, stretch supplies, and stay alive when others don't. You're practical, resourceful, and have probably already mentally prepped for various scenarios. You'll be the one teaching others how to survive.",
      traits: ["Resourceful", "Practical", "Adaptable", "Prepared"],
      advice: "Your survival skills are valuable! In non-apocalypse life, this translates to problem-solving and preparedness. Just make sure you're not so focused on survival that you forget to actually live. Thriving beats surviving."
    },
    protector: {
      type: "The Fierce Protector",
      description: "When the world ends, you DEFEND. Your instinct is to stand between threats and the people you love. You'll take risks others won't if it means keeping someone safe. You're the guardian, the fighter, the one who stands watch while others sleep.",
      traits: ["Protective", "Self-sacrificing", "Brave", "Guardian"],
      advice: "Your protective instincts are noble! In non-apocalypse life, make sure you're protecting people who also protect you. You can't pour from an empty cup. And being a protector doesn't mean you can't be protected too."
    },
    builder: {
      type: "The Civilization Rebuilder",
      description: "When the world ends, you BUILD. While others fight or scavenge, you're figuring out how to get power back, build shelter, create tools, grow food. You're the foundation of any new civilization - the hands that rebuild what was lost.",
      traits: ["Creative", "Practical", "Future-focused", "Problem-solver"],
      advice: "Your builder energy is essential! In non-apocalypse life, you're probably already someone who creates solutions and makes things work. Just remember to appreciate what exists alongside building what's next."
    }
  }
};
