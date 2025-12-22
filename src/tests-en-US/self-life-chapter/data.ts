// What Life Chapter Are You In? - Viral self-discovery test for American English users

export const testData = {
  id: "self-life-chapter",
  title: "What Life Chapter Are You In?",
  description: "Life isn't linear. It's a book with very different chapters. What chapter are you currently living? Let's figure out where you are in your story.",
  questions: [
    {
      id: 1,
      text: "How do you feel about the current version of yourself?",
      options: [
        { text: "I don't really know who I am right now", type: "discovering" },
        { text: "I'm fighting for something important", type: "fighting" },
        { text: "I'm building something that matters", type: "building" },
        { text: "I'm at peace with who I've become", type: "thriving" }
      ]
    },
    {
      id: 2,
      text: "What's your relationship with change right now?",
      options: [
        { text: "Everything feels uncertain and shifting", type: "discovering" },
        { text: "I'm actively changing things that aren't working", type: "fighting" },
        { text: "I'm putting pieces together strategically", type: "building" },
        { text: "I'm enjoying the results of changes already made", type: "thriving" }
      ]
    },
    {
      id: 3,
      text: "When you think about the future, you feel:",
      options: [
        { text: "Confused - I'm not sure what I even want", type: "discovering" },
        { text: "Determined - I know what I need to overcome", type: "fighting" },
        { text: "Optimistic - I see what I'm working toward", type: "building" },
        { text: "Content - I'm already where I want to be", type: "thriving" }
      ]
    },
    {
      id: 4,
      text: "Your main life struggle right now:",
      options: [
        { text: "Finding myself and understanding what I want", type: "discovering" },
        { text: "Overcoming obstacles and fighting limitations", type: "fighting" },
        { text: "Working hard toward goals that aren't here yet", type: "building" },
        { text: "Maintaining what I've created and enjoying it", type: "thriving" }
      ]
    },
    {
      id: 5,
      text: "What would make this year meaningful?",
      options: [
        { text: "Gaining clarity on who I am and what I want", type: "discovering" },
        { text: "Breaking through something that's been holding me back", type: "fighting" },
        { text: "Making real progress on my goals", type: "building" },
        { text: "Deepening the good things I already have", type: "thriving" }
      ]
    },
    {
      id: 6,
      text: "How do you spend your mental energy?",
      options: [
        { text: "Questioning everything - identity, choices, direction", type: "discovering" },
        { text: "Problem-solving and strategizing through challenges", type: "fighting" },
        { text: "Planning and executing toward my vision", type: "building" },
        { text: "Being present and appreciating what is", type: "thriving" }
      ]
    },
    {
      id: 7,
      text: "What does your close circle look like?",
      options: [
        { text: "Shifting - some people no longer fit who I'm becoming", type: "discovering" },
        { text: "Small but tight - I need people in my corner", type: "fighting" },
        { text: "Growing - meeting people aligned with my direction", type: "building" },
        { text: "Stable and nourishing - my people are my people", type: "thriving" }
      ]
    },
    {
      id: 8,
      text: "Your self-talk sounds most like:",
      options: [
        { text: "Who am I? What do I actually want?", type: "discovering" },
        { text: "I can do this. I have to do this.", type: "fighting" },
        { text: "Keep going. It's coming together.", type: "building" },
        { text: "I'm proud of what I've created.", type: "thriving" }
      ]
    },
    {
      id: 9,
      text: "What's your relationship with your past self?",
      options: [
        { text: "I feel disconnected from who I used to be", type: "discovering" },
        { text: "I'm healing from and fighting against old patterns", type: "fighting" },
        { text: "I've learned from them and I'm applying lessons", type: "building" },
        { text: "I understand my journey and honor all versions of me", type: "thriving" }
      ]
    },
    {
      id: 10,
      text: "If this chapter of your life had a title, it would be:",
      options: [
        { text: "The Unbecoming: Finding Who I Really Am", type: "discovering" },
        { text: "The Battle: Fighting For What I Deserve", type: "fighting" },
        { text: "The Construction: Building My Life", type: "building" },
        { text: "The Harvest: Enjoying What I've Grown", type: "thriving" }
      ]
    }
  ],
  results: {
    discovering: {
      type: "The Discovering Chapter",
      description: "You're in an identity shift. The old version of you is dissolving, and the new one hasn't fully emerged yet. It's uncomfortable, confusing, and sometimes lonely - but it's also sacred. This is where people become who they're meant to be. The fog will lift. You're not lost; you're transforming.",
      traits: ["In transition", "Questioning everything", "Letting go of old identity", "Open to new possibilities"],
      advice: "This chapter is supposed to feel uncertain. Resist the urge to grab onto any identity just for stability. Sit with the not-knowing. The answers will come - not all at once, but gradually. Your only job right now is to stay curious and be gentle with yourself."
    },
    fighting: {
      type: "The Fighting Chapter",
      description: "You're in battle mode. There's something you're fighting for - or against. Maybe it's healing old wounds, breaking toxic patterns, overcoming external obstacles, or finally standing up for yourself. It's hard. It's exhausting. But this is the chapter where warriors are made.",
      traits: ["Determined", "Resilient", "Facing challenges", "Becoming stronger"],
      advice: "This chapter requires energy, so protect it fiercely. Cut what drains you. Rest when you can. You don't have to fight every battle - choose the ones that matter. And remember: this chapter has an end. You won't be fighting forever. The peace is coming."
    },
    building: {
      type: "The Building Chapter",
      description: "You're in construction mode. You know what you want (mostly), and you're working toward it. Each day is a brick. It's not glamorous - it's consistent, patient, sometimes tedious work. But you can feel something real taking shape. The harvest is coming; right now, you plant.",
      traits: ["Goal-oriented", "Patient", "Strategic", "Future-focused"],
      advice: "This chapter requires trust in the process. Not every day will feel like progress. Keep building anyway. The compound effect of consistent effort is more powerful than any single action. And celebrate the small wins - they're proof that it's working."
    },
    thriving: {
      type: "The Thriving Chapter",
      description: "You're in the harvest. The seeds you planted are blooming. You've done the work - the discovering, the fighting, the building - and now you get to enjoy some of what you've created. This chapter is about presence, gratitude, and deepening rather than chasing.",
      traits: ["Peaceful", "Grateful", "Present-focused", "Enjoying the fruits"],
      advice: "This chapter is a gift - don't rush through it. Let yourself actually enjoy what you've built. But stay humble and keep learning; thriving chapters don't last forever, and that's okay. New growth requires new seasons. For now, just be here."
    }
  }
};
