// Your Burnout Level - Viral life test for American English users

export const testData = {
  id: "life-burnout-level",
  title: "Your Burnout Level",
  description: "Running on empty or just a bit tired? Let's check your burnout status!",
  questions: [
    {
      id: 1,
      text: "When you think about work/responsibilities, you feel:",
      options: [
        { text: "Dread. Deep, existential dread", type: "severe" },
        { text: "Exhausted before I even start", type: "moderate" },
        { text: "Mixed - some days better than others", type: "mild" },
        { text: "Generally okay, manageable stress", type: "healthy" }
      ]
    },
    {
      id: 2,
      text: "Your energy levels lately:",
      options: [
        { text: "Non-existent. Running on fumes", type: "severe" },
        { text: "Low but I push through", type: "moderate" },
        { text: "Variable - some tired periods", type: "mild" },
        { text: "Generally good with normal ups and downs", type: "healthy" }
      ]
    },
    {
      id: 3,
      text: "How do you feel about things you used to enjoy?",
      options: [
        { text: "Can't enjoy anything. Nothing sounds good", type: "severe" },
        { text: "Less interested but occasionally enjoy things", type: "moderate" },
        { text: "Still enjoy them, just less time/energy for them", type: "mild" },
        { text: "Still find joy in my hobbies and interests", type: "healthy" }
      ]
    },
    {
      id: 4,
      text: "Your cynicism about work/people/life:",
      options: [
        { text: "Everything feels pointless and I'm detached", type: "severe" },
        { text: "More cynical than I used to be", type: "moderate" },
        { text: "Occasional cynicism but generally hopeful", type: "mild" },
        { text: "Realistic but not cynical", type: "healthy" }
      ]
    },
    {
      id: 5,
      text: "Your productivity compared to before:",
      options: [
        { text: "Crashed. Doing the bare minimum if that", type: "severe" },
        { text: "Noticeably lower, struggling to focus", type: "moderate" },
        { text: "Slightly reduced but still functional", type: "mild" },
        { text: "Normal levels, getting things done", type: "healthy" }
      ]
    },
    {
      id: 6,
      text: "Physical symptoms (headaches, sleep issues, tension):",
      options: [
        { text: "Multiple physical issues that won't go away", type: "severe" },
        { text: "Some stress-related symptoms", type: "moderate" },
        { text: "Occasional when very stressed", type: "mild" },
        { text: "Rarely - generally feel physically okay", type: "healthy" }
      ]
    },
    {
      id: 7,
      text: "Your ability to disconnect from work/responsibilities:",
      options: [
        { text: "Can't. Even when off, I'm thinking/worrying", type: "severe" },
        { text: "Difficult. Guilt when I try to rest", type: "moderate" },
        { text: "Sometimes hard but I manage some breaks", type: "mild" },
        { text: "Healthy boundaries - I can unplug", type: "healthy" }
      ]
    },
    {
      id: 8,
      text: "Your emotional state recently:",
      options: [
        { text: "Numb, irritable, or on the verge of tears", type: "severe" },
        { text: "Emotionally drained, quick to frustration", type: "moderate" },
        { text: "Some emotional fatigue but mostly stable", type: "mild" },
        { text: "Generally balanced emotionally", type: "healthy" }
      ]
    },
    {
      id: 9,
      text: "Sunday night/before work feelings:",
      options: [
        { text: "Anxiety spiral, dread, can't sleep", type: "severe" },
        { text: "Definite 'Sunday scaries' - significant unease", type: "moderate" },
        { text: "Mild reluctance but manageable", type: "mild" },
        { text: "Normal - ready for the week ahead", type: "healthy" }
      ]
    },
    {
      id: 10,
      text: "If you could take a month off, you'd feel:",
      options: [
        { text: "I need it desperately. Like, medically", type: "severe" },
        { text: "I really need it and I'm dreaming about it", type: "moderate" },
        { text: "It would be nice but I'm okay", type: "mild" },
        { text: "Nice but not urgent - I feel balanced", type: "healthy" }
      ]
    }
  ],
  results: {
    severe: {
      type: "Severe Burnout Alert",
      description: "You're not just tired, you're BURNT OUT. This isn't normal stress - it's a crisis. Your body, mind, and spirit are running on empty and sending every possible warning signal. This needs attention NOW, not 'when things calm down' (they won't).",
      traits: ["Exhausted", "Depleted", "Detached", "Crisis mode"],
      advice: "This is serious. Talk to a doctor or therapist. Consider FMLA, medical leave, or a significant change. You cannot pour from an empty cup and you're past empty. Your health is more important than any job or obligation. Something has to change."
    },
    moderate: {
      type: "Moderate Burnout",
      description: "You're experiencing real burnout. Not crisis level yet, but heading that direction if nothing changes. You're pushing through but at a cost. Your energy is depleted, your joy is diminished, and your body is complaining. Time to take this seriously.",
      traits: ["Drained", "Pushing through", "Warning signs", "Needs intervention"],
      advice: "You're not at crisis yet but you're close. Start setting boundaries NOW. Take time off if possible. Reduce what you can. Talk to someone about what's depleting you. Burnout doesn't fix itself - it requires active intervention."
    },
    mild: {
      type: "Mild Burnout/Tired",
      description: "You're tired and stressed but not fully burnt out. Normal workplace fatigue with some burnout symptoms. You're still functional and enjoying things sometimes. This is a warning sign, not a crisis - a good time to make adjustments before it gets worse.",
      traits: ["Tired", "Stressed", "Functional", "Warning stage"],
      advice: "Good time to prevent escalation! Look at what's draining you and make small changes. Prioritize rest and things that recharge you. Set one new boundary. You're at the stage where small changes can prevent major burnout."
    },
    healthy: {
      type: "Healthy Stress Levels",
      description: "You're managing! Normal stress exists but it's not consuming you. You have energy, enjoy things, and can disconnect. Either you've built good systems, have manageable demands, or you're naturally resilient. Whatever it is, keep doing it.",
      traits: ["Balanced", "Resilient", "Boundaries working", "Sustainable"],
      advice: "You're in a good place! Maintain what's working. Support colleagues who are struggling - they need your energy. And stay vigilant - burnout can sneak up if circumstances change. Protect the balance you've built."
    }
  }
};
