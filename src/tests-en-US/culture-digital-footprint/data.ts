// What Does Your Digital Footprint Say? - Viral modern culture test for American English users

export const testData = {
  id: "culture-digital-footprint",
  title: "What Does Your Digital Footprint Say?",
  description: "If someone searched you right now, what would they find? Let's audit your digital presence (scary, we know).",
  questions: [
    {
      id: 1,
      text: "You Google yourself. What comes up?",
      options: [
        { text: "Nothing - I'm a digital ghost and proud of it", type: "ghost" },
        { text: "Professional stuff - LinkedIn, maybe some old achievements", type: "professional" },
        { text: "A mix of chaos from various life eras", type: "chaotic" },
        { text: "A curated brand presence I've intentionally built", type: "curated" }
      ]
    },
    {
      id: 2,
      text: "Your social media privacy settings:",
      options: [
        { text: "Fort Knox. Private everything. Locked down.", type: "ghost" },
        { text: "Professional accounts public, personal private", type: "professional" },
        { text: "Honestly I haven't checked in years", type: "chaotic" },
        { text: "Intentionally public - I want to be found", type: "curated" }
      ]
    },
    {
      id: 3,
      text: "Someone from work follows you on Instagram. Reaction:",
      options: [
        { text: "They won't find me - private or under a fake name", type: "ghost" },
        { text: "That's fine, nothing embarrassing there", type: "professional" },
        { text: "Quick scroll to check what they'll see... oh no", type: "chaotic" },
        { text: "Great! More engagement on my carefully crafted content", type: "curated" }
      ]
    },
    {
      id: 4,
      text: "Your relationship with old posts:",
      options: [
        { text: "Deleted. All of it. Fresh slate.", type: "ghost" },
        { text: "Cleaned up the worst stuff, kept the acceptable", type: "professional" },
        { text: "They're still out there haunting me", type: "chaotic" },
        { text: "Part of my journey - I've intentionally curated what stays", type: "curated" }
      ]
    },
    {
      id: 5,
      text: "A potential employer searches for you online. They'll find:",
      options: [
        { text: "Literally nothing, good luck stalking me", type: "ghost" },
        { text: "LinkedIn and maybe a professional portfolio", type: "professional" },
        { text: "Things I should probably delete before job hunting", type: "chaotic" },
        { text: "Exactly what I want them to see", type: "curated" }
      ]
    },
    {
      id: 6,
      text: "Your email addresses include:",
      options: [
        { text: "Multiple aliases because privacy", type: "ghost" },
        { text: "firstname.lastname@something professional", type: "professional" },
        { text: "Some from 2007 that I'm still receiving mail on", type: "chaotic" },
        { text: "A branded email that matches my online presence", type: "curated" }
      ]
    },
    {
      id: 7,
      text: "Data brokers and those 'find anyone' sites:",
      options: [
        { text: "I've actively removed myself from as many as possible", type: "ghost" },
        { text: "I should probably check those sometime", type: "professional" },
        { text: "My entire life history is probably there", type: "chaotic" },
        { text: "I know what's there and it's intentional", type: "curated" }
      ]
    },
    {
      id: 8,
      text: "Your commenting/posting behavior online:",
      options: [
        { text: "Read-only. I don't leave traces.", type: "ghost" },
        { text: "Professional engagement only, nothing controversial", type: "professional" },
        { text: "Unhinged at 2am, probably regret it later", type: "chaotic" },
        { text: "Strategic - every interaction is part of my brand", type: "curated" }
      ]
    },
    {
      id: 9,
      text: "Childhood photos online:",
      options: [
        { text: "Scrubbed from existence", type: "ghost" },
        { text: "Maybe some my parents posted, not ideal", type: "professional" },
        { text: "MySpace era is fully documented and findable", type: "chaotic" },
        { text: "Cute throwbacks I share intentionally", type: "curated" }
      ]
    },
    {
      id: 10,
      text: "Your overall digital footprint strategy:",
      options: [
        { text: "Minimize, delete, privatize, disappear", type: "ghost" },
        { text: "Keep it clean and professional", type: "professional" },
        { text: "What strategy? I'm just living", type: "chaotic" },
        { text: "Build a deliberate, searchable personal brand", type: "curated" }
      ]
    }
  ],
  results: {
    ghost: {
      type: "The Digital Ghost",
      description: "You don't exist online and that's exactly how you want it. Finding you requires a private investigator and even then, good luck. You've deleted more accounts than most people have created. Privacy isn't paranoia - it's a lifestyle. Big Brother can't watch what doesn't exist.",
      traits: ["Privacy expert", "Deliberately unfindable", "Control enthusiast", "Security conscious"],
      advice: "Your commitment to privacy is admirable, but being completely invisible can have downsides too. Sometimes professional opportunities need you to be somewhat findable. Consider a small, controlled presence for when it matters."
    },
    professional: {
      type: "The Clean Slate",
      description: "Your digital footprint could be shown in a job interview. LinkedIn is polished. The embarrassing stuff is hidden. You're playing the long game - understanding that what's online stays online and potential employers will look. Smart, responsible, maybe slightly paranoid about the 2009 stuff.",
      traits: ["Career-conscious", "Appropriately curated", "Risk-aware", "Professionally strategic"],
      advice: "You've got the balance mostly right, but don't be so sanitized that you seem inhuman. A little personality online is okay - employers like to see you're a real person with interests beyond productivity."
    },
    chaotic: {
      type: "The Digital Mess",
      description: "Your online presence is... a journey. There's stuff from every era, every mood, every regrettable phase. Your Facebook memories are a daily anxiety attack. But honestly? It's authentic. It's real. It's very much you in all your human glory. The algorithm knows your entire history.",
      traits: ["Authentically messy", "Living in the moment", "Probably should do an audit", "Unbothered (mostly)"],
      advice: "Your authenticity is refreshing, but maybe do a quick audit? Delete the stuff that's actually harmful, keep the harmless chaos. You don't need to be perfect, but you shouldn't be sabotaging yourself either."
    },
    curated: {
      type: "The Personal Brand",
      description: "You ARE a brand and your digital presence proves it. Every platform tells a story. Every post is intentional. You know SEO. You know how to be found. When someone Googles you, they find exactly what you want. You're playing the internet like a instrument and winning.",
      traits: ["Strategically visible", "Brand builder", "Narrative controller", "Self-awareness champion"],
      advice: "Your intentionality is impressive, but don't lose yourself in the curation. Sometimes the best content comes from unplanned moments. Let yourself be human online occasionally - perfect brands can feel cold."
    }
  }
};
