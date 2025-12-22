// How Much Do You Complain? - Viral personality test for American English users

export const testData = {
  id: "personality-complainer-level",
  title: "How Much Do You Complain?",
  description: "Are you spreading sunshine or sharing the struggle? Let's measure your complain-o-meter!",
  questions: [
    {
      id: 1,
      text: "Your food order comes out wrong. You:",
      options: [
        { text: "Eat it anyway. It's fine, not worth mentioning", type: "stoic" },
        { text: "Politely ask if they can fix it", type: "reasonable" },
        { text: "Express frustration but let it go eventually", type: "venter" },
        { text: "Full review of everything wrong with this experience", type: "olympic" }
      ]
    },
    {
      id: 2,
      text: "Monday morning. How do you greet the week?",
      options: [
        { text: "Every day is a fresh start! Let's go", type: "stoic" },
        { text: "It's Monday. Not thrilled but not complaining", type: "reasonable" },
        { text: "'Ugh, Monday' is my personality from 6-10am", type: "venter" },
        { text: "Vocal hatred of Mondays starting Sunday evening", type: "olympic" }
      ]
    },
    {
      id: 3,
      text: "The weather is bad (hot/cold/rainy/etc.). Your response:",
      options: [
        { text: "Weather is weather. I adapt", type: "stoic" },
        { text: "Might comment once but that's it", type: "reasonable" },
        { text: "Regular updates on how much I hate this weather", type: "venter" },
        { text: "Weather is my primary personality trait right now", type: "olympic" }
      ]
    },
    {
      id: 4,
      text: "Someone asks 'How are you?' Your honest inner response:",
      options: [
        { text: "Genuinely good! Life is fine", type: "stoic" },
        { text: "Fine, the usual mix of stuff", type: "reasonable" },
        { text: "Where do I even begin...", type: "venter" },
        { text: "Buckle up, because I have THOUGHTS", type: "olympic" }
      ]
    },
    {
      id: 5,
      text: "Traffic is terrible today. In your car, you're:",
      options: [
        { text: "Vibing to music. Can't control it anyway", type: "stoic" },
        { text: "Annoyed but dealing with it quietly", type: "reasonable" },
        { text: "Narrating my frustration to no one", type: "venter" },
        { text: "Texting everyone about how bad this traffic is", type: "olympic" }
      ]
    },
    {
      id: 6,
      text: "A friend asks about your job. What percentage of your answer is complaints?",
      options: [
        { text: "0-10%. I focus on the positives", type: "stoic" },
        { text: "20-30%. Normal work gripes", type: "reasonable" },
        { text: "50-60%. There's a lot to say", type: "venter" },
        { text: "90%+. It's basically a venting session", type: "olympic" }
      ]
    },
    {
      id: 7,
      text: "Your phone battery dies. Your reaction:",
      options: [
        { text: "Oh well. Enjoy the digital detox", type: "stoic" },
        { text: "Inconvenient but I'll manage", type: "reasonable" },
        { text: "Multiple sighs and complaints to anyone nearby", type: "venter" },
        { text: "Crisis mode. Everyone needs to hear about this tragedy", type: "olympic" }
      ]
    },
    {
      id: 8,
      text: "Plans change unexpectedly. Your verbal response:",
      options: [
        { text: "Cool, going with the flow", type: "stoic" },
        { text: "A little bummed but adjusting", type: "reasonable" },
        { text: "Extended discussion of how annoying this is", type: "venter" },
        { text: "This ruins EVERYTHING and you will all hear about it", type: "olympic" }
      ]
    },
    {
      id: 9,
      text: "Be honest: what percentage of your conversations are complaints?",
      options: [
        { text: "Less than 10%. I try to be positive", type: "stoic" },
        { text: "Maybe 20-30%. Normal amount", type: "reasonable" },
        { text: "Honestly, probably 50%+", type: "venter" },
        { text: "Complaining IS the conversation", type: "olympic" }
      ]
    },
    {
      id: 10,
      text: "When something minor goes wrong, your brain:",
      options: [
        { text: "Barely registers it. Moving on", type: "stoic" },
        { text: "Notes it, maybe mentions it, forgets it", type: "reasonable" },
        { text: "Loops on it for a while, needs to express it", type: "venter" },
        { text: "Composes an essay about systemic failures in my head", type: "olympic" }
      ]
    }
  ],
  results: {
    stoic: {
      type: "The Zen Master",
      description: "Complaining? Can't relate. You roll with the punches and don't see the point in vocalized frustration. Positivity is your default setting. Either you've achieved enlightenment or you're suppressing a lot - either way, your friends probably find your calm either inspiring or slightly concerning.",
      traits: ["Positive", "Unbothered", "Calm", "Potentially suppressing things"],
      advice: "Your positive attitude is genuinely refreshing! Just make sure you're not bottling things up. It's healthy to express frustration sometimes. You're allowed to be annoyed - it doesn't make you negative, it makes you human."
    },
    reasonable: {
      type: "The Balanced Expressionist",
      description: "You complain a normal, healthy amount. You vent when needed, move on after, and don't let negativity consume you. You've found the sweet spot between toxic positivity and constant whining. Your friends can relate to your gripes without drowning in them.",
      traits: ["Balanced", "Healthy", "Relatable", "Appropriately expressive"],
      advice: "You've nailed the healthy balance of expression! Keep acknowledging frustrations without letting them define your personality. Your measured approach makes you easy to be around."
    },
    venter: {
      type: "The Enthusiastic Venter",
      description: "Complaining is how you process life. Every frustration needs to be verbalized, examined, and shared. You're not negative per se - you just have a lot of THOUGHTS about how things could be better. Your friends know to budget extra time for your updates on everything that's wrong.",
      traits: ["Expressive", "Processing through words", "Detail-oriented about problems", "Passionate"],
      advice: "Venting is valid and can be therapeutic! But constant complaining can be draining for you AND others. Try the 5-minute rule: vent for 5 minutes max, then redirect to solutions or positives. Balance is key!"
    },
    olympic: {
      type: "The Gold Medal Complainer",
      description: "If complaining were an Olympic sport, you'd be taking home gold. EVERYTHING is discussable, and by discussable, you mean complainable. Your running commentary on life's failures is legendary. Some call it negative; you call it observant. Your friends... might need a break sometimes.",
      traits: ["Expert-level venter", "Observant", "Passionate", "Potentially exhausting"],
      advice: "Your ability to identify problems is... impressive? But constant negativity affects your mood AND your relationships. Challenge yourself to a complaint-free hour, then day. Find one thing to appreciate for every complaint. Your happiness might depend on it!"
    }
  }
};
