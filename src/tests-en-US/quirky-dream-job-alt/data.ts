// What's Your Alternative Dream Job? - Viral quirky test for American English users

export const testData = {
  id: "quirky-dream-job-alt",
  title: "What's Your Alternative Dream Job?",
  description: "Forget your actual career - what would you do if money wasn't a factor?",
  questions: [
    {
      id: 1,
      text: "What do you daydream about doing during boring meetings?",
      options: [
        { text: "Creating art, music, or something creative", type: "artist" },
        { text: "Traveling and experiencing new places", type: "explorer" },
        { text: "Working with animals or nature", type: "nature" },
        { text: "Teaching or helping people directly", type: "helper" }
      ]
    },
    {
      id: 2,
      text: "Your secret 'I could do that' thought when watching TV:",
      options: [
        { text: "Creative shows - art, music, design competitions", type: "artist" },
        { text: "Travel shows - exploring amazing places", type: "explorer" },
        { text: "Nature documentaries - working with animals", type: "nature" },
        { text: "Feel-good shows - making a difference", type: "helper" }
      ]
    },
    {
      id: 3,
      text: "If you won the lottery, what would you 'do' all day?",
      options: [
        { text: "Create without pressure - art, music, writing", type: "artist" },
        { text: "Travel everywhere I've ever wanted to go", type: "explorer" },
        { text: "Live somewhere beautiful with animals and nature", type: "nature" },
        { text: "Volunteer and help causes I care about", type: "helper" }
      ]
    },
    {
      id: 4,
      text: "The part of any job you'd always want:",
      options: [
        { text: "Creative freedom to make things my way", type: "artist" },
        { text: "Variety and new experiences constantly", type: "explorer" },
        { text: "Connection to the natural world", type: "nature" },
        { text: "Meaningful impact on people's lives", type: "helper" }
      ]
    },
    {
      id: 5,
      text: "Your childhood dream job that still appeals:",
      options: [
        { text: "Artist, musician, performer, or creative", type: "artist" },
        { text: "Explorer, archaeologist, or adventurer", type: "explorer" },
        { text: "Marine biologist, vet, or park ranger", type: "nature" },
        { text: "Teacher, doctor, or someone who helps", type: "helper" }
      ]
    },
    {
      id: 6,
      text: "What YouTube rabbit hole do you fall into?",
      options: [
        { text: "Art tutorials, music, creative processes", type: "artist" },
        { text: "Travel vlogs, adventure content, world cultures", type: "explorer" },
        { text: "Animal rescues, nature content, outdoor life", type: "nature" },
        { text: "Heartwarming stories, volunteer work, making a difference", type: "helper" }
      ]
    },
    {
      id: 7,
      text: "Your 'I could see myself doing that' retirement:",
      options: [
        { text: "Finally dedicating time to creative pursuits", type: "artist" },
        { text: "Slow traveling and experiencing the world", type: "explorer" },
        { text: "Living somewhere peaceful with animals and gardens", type: "nature" },
        { text: "Volunteering and giving back to communities", type: "helper" }
      ]
    },
    {
      id: 8,
      text: "What would make Monday mornings not terrible?",
      options: [
        { text: "Going to a studio to create something", type: "artist" },
        { text: "Being somewhere new and exciting", type: "explorer" },
        { text: "Working outside with animals or nature", type: "nature" },
        { text: "Knowing I'll help someone today", type: "helper" }
      ]
    },
    {
      id: 9,
      text: "The job perk you'd trade your salary for:",
      options: [
        { text: "Unlimited creative freedom", type: "artist" },
        { text: "Travel to anywhere, anytime", type: "explorer" },
        { text: "Working outdoors with animals/nature", type: "nature" },
        { text: "Making real visible impact on lives", type: "helper" }
      ]
    },
    {
      id: 10,
      text: "If you could tell 18-year-old you one career thing:",
      options: [
        { text: "Take the creative path - it was worth pursuing", type: "artist" },
        { text: "Travel more and build a life of experiences", type: "explorer" },
        { text: "Follow the nature/animal passion - it was real", type: "nature" },
        { text: "Prioritize helping people over making money", type: "helper" }
      ]
    }
  ],
  results: {
    artist: {
      type: "The Secret Artist",
      description: "Your alternative dream job is CREATIVE. Deep down, you want to make things - art, music, writing, design. The creative path called to you and whether you answered or not, it's still calling. Your dream job involves expression, creation, and the freedom to make something beautiful.",
      traits: ["Creative", "Expressive", "Artistic soul", "Creation-driven"],
      advice: "Your creative dream doesn't have to replace your career - it can coexist. Start a creative practice, even small. Take a class. Make things. The artist in you needs expression, even if it's a hobby. Feed that part of yourself."
    },
    explorer: {
      type: "The Secret Explorer",
      description: "Your alternative dream job involves TRAVEL and ADVENTURE. You want to see the world, experience different cultures, have stories to tell. The conventional path feels limiting because you're meant for variety and discovery. Your dream job is professionally curious.",
      traits: ["Adventurous", "Curious", "Travel-oriented", "Experience-seeking"],
      advice: "You don't need to become a travel influencer to feed this need. Build travel into your life intentionally. Seek variety in your work. Choose employers with travel opportunities. The explorer in you needs new horizons regularly."
    },
    nature: {
      type: "The Secret Naturalist",
      description: "Your alternative dream job involves NATURE and ANIMALS. You're drawn to the outdoors, to creatures, to the natural world. Cubicle life feels wrong because you're meant to be outside, connected to something wilder. Your dream job has paws, leaves, or open skies.",
      traits: ["Nature-loving", "Animal-connected", "Outdoors-oriented", "Earth-grounded"],
      advice: "Find ways to bring nature into your life if your career can't change. Volunteer at animal shelters. Garden. Hike regularly. Plan trips to wild places. The naturalist in you needs connection to the non-human world."
    },
    helper: {
      type: "The Secret Helper",
      description: "Your alternative dream job involves HELPING PEOPLE. You want work that matters, that makes visible difference in real lives. Money is nice but impact is what you crave. Your dream job involves service, connection, and knowing you made things better for someone.",
      traits: ["Service-oriented", "Impact-driven", "Compassionate", "Meaning-seeking"],
      advice: "If your career can't be helping-focused, volunteer. Mentor someone. Choose employers with social impact. The helper in you needs to make a difference - find ways to do that alongside or within your current life."
    }
  }
};
