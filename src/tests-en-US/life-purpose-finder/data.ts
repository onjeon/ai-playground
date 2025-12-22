// What's Your Purpose? - Viral life test for American English users

export const testData = {
  id: "life-purpose-finder",
  title: "What's Your Life Purpose?",
  description: "Still searching for meaning? Let's explore what drives your sense of purpose!",
  questions: [
    {
      id: 1,
      text: "What activities make you lose track of time?",
      options: [
        { text: "Creating, building, or making something", type: "creator" },
        { text: "Helping others solve problems or grow", type: "helper" },
        { text: "Learning, discovering, or exploring ideas", type: "seeker" },
        { text: "Leading, organizing, or rallying people", type: "leader" }
      ]
    },
    {
      id: 2,
      text: "What would you want your legacy to be?",
      options: [
        { text: "Something I built or created that lasts", type: "creator" },
        { text: "The lives I helped improve along the way", type: "helper" },
        { text: "Knowledge or wisdom I contributed", type: "seeker" },
        { text: "Change I led or movements I started", type: "leader" }
      ]
    },
    {
      id: 3,
      text: "When you imagine your ideal life, you're:",
      options: [
        { text: "Creating art, products, or experiences", type: "creator" },
        { text: "Supporting and nurturing others' growth", type: "helper" },
        { text: "Constantly learning and understanding more", type: "seeker" },
        { text: "Leading initiatives and creating change", type: "leader" }
      ]
    },
    {
      id: 4,
      text: "What frustrates you most about the world?",
      options: [
        { text: "Lack of beauty, innovation, or creativity", type: "creator" },
        { text: "People not getting the help they need", type: "helper" },
        { text: "Ignorance, closed-mindedness, or lack of curiosity", type: "seeker" },
        { text: "Inefficiency, poor leadership, lack of progress", type: "leader" }
      ]
    },
    {
      id: 5,
      text: "What makes you feel most fulfilled?",
      options: [
        { text: "Seeing something I made come to life", type: "creator" },
        { text: "Knowing I made a difference in someone's life", type: "helper" },
        { text: "Understanding something deeply or finding truth", type: "seeker" },
        { text: "Moving people toward a goal or vision", type: "leader" }
      ]
    },
    {
      id: 6,
      text: "If you could have any superpower for 'purpose':",
      options: [
        { text: "Ability to create anything I can imagine", type: "creator" },
        { text: "Ability to heal or help anyone who needs it", type: "helper" },
        { text: "Ability to understand anything instantly", type: "seeker" },
        { text: "Ability to inspire anyone to take action", type: "leader" }
      ]
    },
    {
      id: 7,
      text: "Your natural role in group situations:",
      options: [
        { text: "The one with creative ideas and solutions", type: "creator" },
        { text: "The one who supports and connects with everyone", type: "helper" },
        { text: "The one who asks questions and seeks understanding", type: "seeker" },
        { text: "The one who takes charge and moves things forward", type: "leader" }
      ]
    },
    {
      id: 8,
      text: "The work that feels most meaningful:",
      options: [
        { text: "Making things that didn't exist before", type: "creator" },
        { text: "Being there for people in their struggles", type: "helper" },
        { text: "Uncovering truth or creating understanding", type: "seeker" },
        { text: "Building teams and achieving big goals", type: "leader" }
      ]
    },
    {
      id: 9,
      text: "What do people most often come to you for?",
      options: [
        { text: "Creative ideas or unique perspectives", type: "creator" },
        { text: "Advice, support, or a listening ear", type: "helper" },
        { text: "Knowledge or thoughtful analysis", type: "seeker" },
        { text: "Direction, decisions, or motivation", type: "leader" }
      ]
    },
    {
      id: 10,
      text: "Your version of 'making the world better':",
      options: [
        { text: "Creating beauty, innovation, or new possibilities", type: "creator" },
        { text: "Helping individuals and communities thrive", type: "helper" },
        { text: "Contributing to understanding and wisdom", type: "seeker" },
        { text: "Leading change and inspiring collective action", type: "leader" }
      ]
    }
  ],
  results: {
    creator: {
      type: "The Creator",
      description: "Your purpose is CREATION. You're meant to make things - art, products, experiences, ideas that didn't exist before. When you're creating, you're in flow. Your contribution to the world is bringing new things into existence. Whether it's a painting, a business, or a new approach - you're a builder.",
      traits: ["Creative", "Innovative", "Builder", "Visionary"],
      advice: "Keep creating! But also ship - perfectionism can kill creation. Share your work even before it feels ready. The world needs what you make. Find environments that let you create without too many constraints."
    },
    helper: {
      type: "The Helper",
      description: "Your purpose is SERVICE. You're meant to help people - supporting them through struggles, celebrating their growth, being there when needed. Your fulfillment comes from making a difference in individual lives. Whether as a parent, friend, teacher, or healer - you're a nurturer.",
      traits: ["Caring", "Supportive", "Empathetic", "Service-oriented"],
      advice: "Keep helping! But also take care of yourself - helpers often neglect their own needs. You can't pour from an empty cup. Set boundaries and let others help you sometimes. Your capacity to help grows when you're whole."
    },
    seeker: {
      type: "The Seeker",
      description: "Your purpose is UNDERSTANDING. You're meant to learn, discover, and seek truth. When you're exploring ideas and understanding deeply, you're in your element. Your contribution is wisdom and insight. Whether as a researcher, philosopher, or lifelong learner - you're an explorer of ideas.",
      traits: ["Curious", "Thoughtful", "Wisdom-seeking", "Analytical"],
      advice: "Keep seeking! But also share what you learn - knowledge hoarded isn't purpose fulfilled. Teach, write, discuss. Your insights are valuable to others. And remember that experience teaches differently than study - live as well as learn."
    },
    leader: {
      type: "The Leader",
      description: "Your purpose is MOVEMENT. You're meant to lead - rallying people, creating change, moving groups toward goals. When you're inspiring action and building momentum, you're in your power. Your contribution is direction and transformation. Whether in business, community, or movements - you're a catalyst.",
      traits: ["Inspiring", "Decisive", "Vision-casting", "Mobilizing"],
      advice: "Keep leading! But also listen - the best leaders are also followers sometimes. Servant leadership multiplies your impact. Build other leaders rather than followers. Your legacy is the leaders you develop, not just what you lead."
    }
  }
};
