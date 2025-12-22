// What Kind of Plant Parent Are You? - Fun viral test

export const testData = {
  id: "fun-plant-parent",
  title: "What Kind of Plant Parent Are You?",
  description: "Do your plants thrive or merely survive? Are you a green thumb or a serial plant killer? Let's find out.",
  questions: [
    {
      id: 1,
      text: "Your relationship with watering schedules:",
      options: [
        { text: "Consistent routine - same days, same time", type: "dedicated" },
        { text: "Check soil regularly, water when needed", type: "intuitive" },
        { text: "When I remember... which is occasionally", type: "forgetful" },
        { text: "Wait, you're supposed to have a schedule?", type: "killer" }
      ]
    },
    {
      id: 2,
      text: "Your plant collection currently includes:",
      options: [
        { text: "Multiple species, carefully researched for my home", type: "dedicated" },
        { text: "A few that seem to be doing well", type: "intuitive" },
        { text: "Some alive ones and some... less alive ones", type: "forgetful" },
        { text: "Plastic plants, and I'm not ashamed", type: "killer" }
      ]
    },
    {
      id: 3,
      text: "When you see a beautiful plant at the store, you:",
      options: [
        { text: "Research if it fits my light/humidity conditions first", type: "dedicated" },
        { text: "Buy it if it speaks to me, figure out care later", type: "intuitive" },
        { text: "Buy it, feel optimistic, probably kill it", type: "forgetful" },
        { text: "Admire it and keep walking - I know my limitations", type: "killer" }
      ]
    },
    {
      id: 4,
      text: "A plant in your care starts looking sad. You:",
      options: [
        { text: "Diagnose the issue - light? water? pests? root bound?", type: "dedicated" },
        { text: "Try moving it, adjusting water, see what helps", type: "intuitive" },
        { text: "Panic, overwater it, make things worse", type: "forgetful" },
        { text: "Apologize and accept the inevitable", type: "killer" }
      ]
    },
    {
      id: 5,
      text: "Your knowledge of your plants' specific needs:",
      options: [
        { text: "I know each plant's requirements by heart", type: "dedicated" },
        { text: "General idea - some need more light, some less water", type: "intuitive" },
        { text: "They're plants? They need water and sun?", type: "forgetful" },
        { text: "All I know is they die around me", type: "killer" }
      ]
    },
    {
      id: 6,
      text: "You're going on vacation. Plant care plan:",
      options: [
        { text: "Self-watering systems or detailed instructions for plant sitter", type: "dedicated" },
        { text: "Ask a friend to check on them occasionally", type: "intuitive" },
        { text: "Water them a lot before leaving and hope", type: "forgetful" },
        { text: "They probably won't survive, and that's on brand", type: "killer" }
      ]
    },
    {
      id: 7,
      text: "Your ideal plant is:",
      options: [
        { text: "Something challenging that rewards proper care", type: "dedicated" },
        { text: "Whatever fits my space and lifestyle", type: "intuitive" },
        { text: "Something virtually unkillable (snake plant, pothos)", type: "forgetful" },
        { text: "A succulent, and even that's risky", type: "killer" }
      ]
    },
    {
      id: 8,
      text: "How do your plants look right now?",
      options: [
        { text: "Thriving! New growth, healthy leaves", type: "dedicated" },
        { text: "Pretty good, mostly healthy", type: "intuitive" },
        { text: "Mixed reviews - some okay, some struggling", type: "forgetful" },
        { text: "What plants? You mean the dried sticks?", type: "killer" }
      ]
    },
    {
      id: 9,
      text: "When people compliment your plants, you feel:",
      options: [
        { text: "Proud! I've worked hard on these babies", type: "dedicated" },
        { text: "Happy - they do brighten up the place", type: "intuitive" },
        { text: "Surprised they're still alive, honestly", type: "forgetful" },
        { text: "This has literally never happened", type: "killer" }
      ]
    },
    {
      id: 10,
      text: "The phrase 'plant parent' describes you:",
      options: [
        { text: "Perfectly - my plants are my children", type: "dedicated" },
        { text: "Casually - I enjoy having plants around", type: "intuitive" },
        { text: "Aspirationally - I wish I was better at this", type: "forgetful" },
        { text: "Ironically - I'm more like a plant hospice worker", type: "killer" }
      ]
    }
  ],
  results: {
    dedicated: {
      type: "The Plant Whisperer",
      description: "Your plants don't just survive - they THRIVE. You know each one's needs, you track their growth, and you probably have a plant Instagram. Your home is a jungle in the best way. You talk to your plants and honestly, they seem to listen. You are living your botanical best life.",
      traits: ["Dedicated", "Knowledgeable", "Nurturing", "Patient"],
      advice: "Your plant care skills are impressive! Just make sure you have room for more growth (your plants AND your space). And maybe teach your friends - the plant-killing community needs your guidance."
    },
    intuitive: {
      type: "The Natural Nurturer",
      description: "You've got a vibe with plants - not super scientific, but it works. You trust your instincts, pay attention to what your plants tell you, and somehow things mostly turn out fine. You're proof that you don't need a horticultural degree to keep things alive.",
      traits: ["Intuitive", "Relaxed", "Observant", "Balanced"],
      advice: "Your natural approach is working! Consider learning a bit more about your specific plants' needs - your intuition plus knowledge would make you unstoppable. But don't stress, you're doing great."
    },
    forgetful: {
      type: "The Hopeful But Forgetful",
      description: "You genuinely want your plants to thrive - you just... forget they exist sometimes. You've killed your share of plants through neglect, overwatering when guilty, or simply forgetting they need actual attention. Your intentions are pure; your execution needs work.",
      traits: ["Well-meaning", "Distractible", "Optimistic", "Inconsistent"],
      advice: "Set phone reminders for watering! Stick to hardy plants like pothos, snake plants, and ZZ plants that forgive neglect. Your journey is relatable, and with a few adjustments, you can become a successful plant parent."
    },
    killer: {
      type: "The Accidental Plant Serial Killer",
      description: "Plants fear you, and honestly? Fair. You've killed succulents - the unkillable kind. Cacti have withered under your care. You're not malicious, just cosmically cursed in the plant department. The plant community has a missing poster of you.",
      traits: ["Self-aware", "Honest", "Hopeless", "Accepting"],
      advice: "Consider: fake plants exist and look great now. If you insist on trying, start with a single pothos and set weekly phone reminders. Or embrace your reality - not everyone is meant to keep things alive, and that's okay."
    }
  }
};
