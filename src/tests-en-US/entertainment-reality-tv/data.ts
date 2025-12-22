// What Reality TV Show Would You Be On? - Viral entertainment test for American English users

export const testData = {
  id: "entertainment-reality-tv",
  title: "What Reality TV Show Would You Be On?",
  description: "Drama starter or renovation star? Find your reality TV destiny!",
  questions: [
    {
      id: 1,
      text: "In a group conflict situation, you typically:",
      options: [
        { text: "I'm probably the one who started it tbh", type: "drama" },
        { text: "Stay out of it unless directly involved", type: "competition" },
        { text: "Try to mediate and find solutions", type: "dating" },
        { text: "Focus on my own goals while chaos happens", type: "talent" }
      ]
    },
    {
      id: 2,
      text: "Your response to being filmed 24/7:",
      options: [
        { text: "I'd perform. Camera loves me, I love drama", type: "drama" },
        { text: "Focus on the task, ignore the cameras", type: "competition" },
        { text: "Be authentic - people should see the real me", type: "dating" },
        { text: "Perfect opportunity to showcase my skills", type: "talent" }
      ]
    },
    {
      id: 3,
      text: "Your ideal prize for winning a show:",
      options: [
        { text: "Fame and social media following", type: "drama" },
        { text: "A significant cash prize or career opportunity", type: "competition" },
        { text: "Finding my person/meaningful relationships", type: "dating" },
        { text: "Recognition for my talent and abilities", type: "talent" }
      ]
    },
    {
      id: 4,
      text: "Living in close quarters with strangers:",
      options: [
        { text: "So much potential for alliances and enemies", type: "drama" },
        { text: "As long as everyone stays focused on goals", type: "competition" },
        { text: "Great way to form deep connections quickly", type: "dating" },
        { text: "I can work with anyone to reach my goals", type: "talent" }
      ]
    },
    {
      id: 5,
      text: "Your reaction to someone backstabbing you:",
      options: [
        { text: "Revenge plotline ACTIVATED. They'll regret this", type: "drama" },
        { text: "Adapt my strategy and outcompete them", type: "competition" },
        { text: "Hurt but I'd want to understand their perspective", type: "dating" },
        { text: "Rise above it - let my work speak for itself", type: "talent" }
      ]
    },
    {
      id: 6,
      text: "What would make you memorable on TV?",
      options: [
        { text: "My iconic moments, quotes, and feuds", type: "drama" },
        { text: "My competitive spirit and wins", type: "competition" },
        { text: "My genuine personality and connections", type: "dating" },
        { text: "My unique skills and impressive performances", type: "talent" }
      ]
    },
    {
      id: 7,
      text: "Confessional booth interviews would show:",
      options: [
        { text: "Me spilling tea and reading people for filth", type: "drama" },
        { text: "Strategic breakdown of my game plan", type: "competition" },
        { text: "Emotional processing and genuine reflection", type: "dating" },
        { text: "Insights about my craft and preparation", type: "talent" }
      ]
    },
    {
      id: 8,
      text: "Your biggest strength in a reality competition:",
      options: [
        { text: "Stirring the pot and staying relevant", type: "drama" },
        { text: "Physical/mental challenges and strategy", type: "competition" },
        { text: "Emotional intelligence and forming bonds", type: "dating" },
        { text: "Actual talent and skill I've developed", type: "talent" }
      ]
    },
    {
      id: 9,
      text: "After the show airs, you'd want:",
      options: [
        { text: "Followers, brand deals, influencer status", type: "drama" },
        { text: "Respect for how I played the game", type: "competition" },
        { text: "To stay in touch with cast, maybe find love", type: "dating" },
        { text: "Career opportunities based on showcased talent", type: "talent" }
      ]
    },
    {
      id: 10,
      text: "Your ideal show type:",
      options: [
        { text: "Housewives/Jersey Shore - bring the mess", type: "drama" },
        { text: "Survivor/Amazing Race - prove myself", type: "competition" },
        { text: "Bachelor/Love Island - find connection", type: "dating" },
        { text: "American Idol/MasterChef - show my skills", type: "talent" }
      ]
    }
  ],
  results: {
    drama: {
      type: "Real Housewives/Jersey Shore Energy",
      description: "You'd be on a DRAMA show. The ones where personalities clash, tea spills, and iconic moments are born. You're not there to be liked, you're there to be REMEMBERED. 'I said what I said' energy. You'd either be loved or hated, but never ignored.",
      traits: ["Dramatic", "Entertaining", "Memorable", "Unfiltered"],
      advice: "You'd make great TV! But real life needs less drama than reality TV. Channel this energy into entertainment and keep your personal life a little calmer. Unless you're actually auditioning - then GO OFF."
    },
    competition: {
      type: "Survivor/Amazing Race Material",
      description: "You're COMPETITIVE and you'd thrive in a show where strategy, skill, and endurance matter. You're not here for friends, you're here to WIN. You'd form strategic alliances, dominate challenges, and probably make it far based on actual ability.",
      traits: ["Strategic", "Competitive", "Focused", "Determined"],
      advice: "Your competitive spirit would serve you well! Just remember that even game shows value some personality and relationships. Pure strategy without charm makes for boring TV. Balance both and you'd go far."
    },
    dating: {
      type: "Bachelor/Love Island Candidate",
      description: "You'd be on a DATING show. You believe in connection, wear your heart on your sleeve, and you're genuinely there 'for the right reasons.' You'd form real bonds, have emotional conversations, and either find love or be a fan favorite for your vulnerability.",
      traits: ["Romantic", "Emotionally intelligent", "Genuine", "Connection-seeking"],
      advice: "Your emotional openness would resonate with viewers! Just be careful about manufactured situations designed to create drama. Stay authentic and you'd come out looking good regardless of relationship outcomes."
    },
    talent: {
      type: "American Idol/MasterChef Star",
      description: "You have SKILLS and you want a platform to show them. You'd be on a talent competition where ability actually matters. You've put in the work, you have something to demonstrate, and you want the opportunity to prove yourself on a big stage.",
      traits: ["Talented", "Dedicated", "Skill-focused", "Professional"],
      advice: "Your talent would shine through! These shows also reward backstory and personality, so don't be afraid to be human. Let people see the person behind the skill. Vulnerable talented people win hearts AND competitions."
    }
  }
};
