// What Does Your Inner Child Need? - Viral self-discovery test for American English users

export const testData = {
  id: "self-inner-child",
  title: "What Does Your Inner Child Need?",
  description: "That little version of you is still in there. What are they trying to tell you? Time for some gentle (but real) self-discovery.",
  questions: [
    {
      id: 1,
      text: "When you're stressed, you secretly want someone to:",
      options: [
        { text: "Tell me everything will be okay and hold me", type: "comfort" },
        { text: "Notice how hard I'm working and appreciate me", type: "validation" },
        { text: "Give me space to figure it out myself", type: "freedom" },
        { text: "Just let me play and forget about responsibilities", type: "play" }
      ]
    },
    {
      id: 2,
      text: "What triggers you more than it probably should?",
      options: [
        { text: "Feeling alone or abandoned when I need support", type: "comfort" },
        { text: "Being overlooked or my efforts going unnoticed", type: "validation" },
        { text: "Being controlled or told what to do", type: "freedom" },
        { text: "Being told to 'grow up' or 'be serious'", type: "play" }
      ]
    },
    {
      id: 3,
      text: "Your comfort movie/show probably features:",
      options: [
        { text: "Found family and unconditional love", type: "comfort" },
        { text: "An underdog who finally gets recognized", type: "validation" },
        { text: "A hero who breaks free and does their own thing", type: "freedom" },
        { text: "Pure joy, adventure, and silliness", type: "play" }
      ]
    },
    {
      id: 4,
      text: "What would've helped younger you the most?",
      options: [
        { text: "More hugs and reassurance that I was loved", type: "comfort" },
        { text: "Being told I was doing a good job more often", type: "validation" },
        { text: "More trust and less micromanaging", type: "freedom" },
        { text: "Permission to be a kid longer", type: "play" }
      ]
    },
    {
      id: 5,
      text: "When you achieve something big, your first feeling is:",
      options: [
        { text: "Wishing I had someone to share it with", type: "comfort" },
        { text: "Finally, maybe people will see I'm capable", type: "validation" },
        { text: "Pride that I did it my own way", type: "freedom" },
        { text: "Immediately looking for the next fun thing", type: "play" }
      ]
    },
    {
      id: 6,
      text: "What makes you tear up unexpectedly?",
      options: [
        { text: "Someone being genuinely kind and caring", type: "comfort" },
        { text: "Being publicly appreciated or acknowledged", type: "validation" },
        { text: "Stories of people escaping situations and being free", type: "freedom" },
        { text: "Pure, innocent joy - kids laughing, animals playing", type: "play" }
      ]
    },
    {
      id: 7,
      text: "Your people-pleasing tends to show up as:",
      options: [
        { text: "Doing whatever keeps people close to me", type: "comfort" },
        { text: "Working harder hoping someone will notice", type: "validation" },
        { text: "Pretending to agree when I actually don't", type: "freedom" },
        { text: "Being the 'fun one' so people want me around", type: "play" }
      ]
    },
    {
      id: 8,
      text: "A dream scenario that makes you feel at peace:",
      options: [
        { text: "Being held and told I'm safe and loved", type: "comfort" },
        { text: "Someone noticing my work and saying 'you're amazing'", type: "validation" },
        { text: "Total freedom to do whatever I want, wherever I want", type: "freedom" },
        { text: "An entire day with no responsibilities, just fun", type: "play" }
      ]
    },
    {
      id: 9,
      text: "What do you secretly resent about adulthood?",
      options: [
        { text: "Having to handle everything alone", type: "comfort" },
        { text: "No one grades you or tells you you're doing well anymore", type: "validation" },
        { text: "All the rules and expectations and obligations", type: "freedom" },
        { text: "There's no recess and everyone's so serious", type: "play" }
      ]
    },
    {
      id: 10,
      text: "If your inner child could talk, they'd probably say:",
      options: [
        { text: "Please don't leave me alone", type: "comfort" },
        { text: "See me. I'm trying so hard.", type: "validation" },
        { text: "Let me make my own choices", type: "freedom" },
        { text: "Can we please just have fun?", type: "play" }
      ]
    }
  ],
  results: {
    comfort: {
      type: "Craving Safety & Security",
      description: "Your inner child needs to know they're not alone. Somewhere along the way, you learned you had to handle things by yourself - that support wasn't guaranteed. Now adult-you craves connection, reassurance, and the simple comfort of being held (physically or emotionally).",
      traits: ["Deeply loyal", "Relationship-focused", "Fears abandonment", "Gives love to receive love"],
      advice: "You're allowed to need people. Start telling trusted people when you're struggling instead of pretending you're fine. Let yourself be taken care of sometimes. You don't have to earn love by being low-maintenance."
    },
    validation: {
      type: "Seeking Recognition",
      description: "Your inner child is still waiting for someone to notice. Maybe praise was rare growing up, or achievements went unacknowledged. Now you work hard - sometimes too hard - hoping someone will finally see how capable and worthy you are.",
      traits: ["High achiever", "Hard on yourself", "Seeks external approval", "Perfectionist tendencies"],
      advice: "The validation you're seeking has to come from within first. Start celebrating your own wins, out loud. You don't need permission to be proud of yourself. Try saying 'I did a good job' without waiting for someone else to say it first."
    },
    freedom: {
      type: "Yearning for Autonomy",
      description: "Your inner child was controlled too much. Decisions were made for you, boundaries weren't respected, or you had to grow up fast in ways that weren't your choice. Now you crave independence and bristle at anything that feels like someone's trying to control you.",
      traits: ["Fiercely independent", "Values autonomy", "Struggles with authority", "Needs personal space"],
      advice: "Your need for freedom is valid, but true freedom includes the freedom to let people in. Independence can become isolation. Practice letting trusted people influence you without feeling like you're losing yourself."
    },
    play: {
      type: "Needing Joy & Playfulness",
      description: "Your inner child didn't get to be a kid enough. Maybe responsibilities came early, or seriousness was expected. Now that playful part of you is starving for permission to be silly, spontaneous, and unproductive just for the joy of it.",
      traits: ["Creative spirit", "Secretly silly", "Feels guilty about fun", "Needs permission to play"],
      advice: "Joy is not optional - it's necessary. Schedule play into your life like you would anything important. Let yourself be silly without purpose. Buy the toy. Watch the cartoon. Dance badly. Your inner child has been waiting long enough."
    }
  }
};
