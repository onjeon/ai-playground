// What Area of Life Needs Growth? - Viral self-discovery test for American English users

export const testData = {
  id: "self-growth-area",
  title: "What Area of Life Needs Growth?",
  description: "You're doing great in some areas. But where's the growth edge? Let's identify what's ready for your attention.",
  questions: [
    {
      id: 1,
      text: "What do you avoid thinking about?",
      options: [
        { text: "My body - exercise, health, how I feel physically", type: "physical" },
        { text: "My relationships - who I let in, how I show up", type: "relationships" },
        { text: "My career/purpose - what I'm actually doing with my life", type: "purpose" },
        { text: "My inner world - emotions, healing, self-awareness", type: "emotional" }
      ]
    },
    {
      id: 2,
      text: "Which excuse do you make most often?",
      options: [
        { text: "I'll start working out/eating better 'tomorrow'", type: "physical" },
        { text: "I'm too busy for socializing or dating right now", type: "relationships" },
        { text: "I need to figure out what I want first", type: "purpose" },
        { text: "I don't have time for therapy/journaling/processing", type: "emotional" }
      ]
    },
    {
      id: 3,
      text: "What drains you most?",
      options: [
        { text: "Feeling sluggish, tired, or disconnected from my body", type: "physical" },
        { text: "Lonely moments or relationship conflicts", type: "relationships" },
        { text: "Feeling stuck or purposeless in my work/life direction", type: "purpose" },
        { text: "Unprocessed emotions that keep surfacing", type: "emotional" }
      ]
    },
    {
      id: 4,
      text: "What would make the biggest difference in your life?",
      options: [
        { text: "Feeling strong, healthy, and energized", type: "physical" },
        { text: "Deeper connections and healthier relationships", type: "relationships" },
        { text: "Clarity on my direction and meaningful work", type: "purpose" },
        { text: "Inner peace and emotional regulation", type: "emotional" }
      ]
    },
    {
      id: 5,
      text: "What do you envy in others?",
      options: [
        { text: "Their discipline with health and fitness", type: "physical" },
        { text: "Their friendships or romantic relationship", type: "relationships" },
        { text: "Their passion and clear sense of purpose", type: "purpose" },
        { text: "Their emotional stability and self-awareness", type: "emotional" }
      ]
    },
    {
      id: 6,
      text: "Which area feels most 'stuck'?",
      options: [
        { text: "Health - I keep meaning to change but don't", type: "physical" },
        { text: "Relationships - patterns keep repeating", type: "relationships" },
        { text: "Career/Purpose - I'm going through the motions", type: "purpose" },
        { text: "Emotional health - same issues keep coming up", type: "emotional" }
      ]
    },
    {
      id: 7,
      text: "What would 'future you' thank you for starting today?",
      options: [
        { text: "Finally prioritizing my physical health", type: "physical" },
        { text: "Working on how I show up in relationships", type: "relationships" },
        { text: "Getting serious about my goals and direction", type: "purpose" },
        { text: "Doing the inner work I've been avoiding", type: "emotional" }
      ]
    },
    {
      id: 8,
      text: "Which feels most neglected?",
      options: [
        { text: "My body - I don't move it or fuel it well", type: "physical" },
        { text: "My connections - I've let relationships slide", type: "relationships" },
        { text: "My ambitions - I've put dreams on hold", type: "purpose" },
        { text: "My emotional needs - I push through instead of processing", type: "emotional" }
      ]
    },
    {
      id: 9,
      text: "What would your best friend say you need to work on?",
      options: [
        { text: "Taking better care of yourself physically", type: "physical" },
        { text: "Letting people in or setting better boundaries", type: "relationships" },
        { text: "Actually pursuing what you say you want", type: "purpose" },
        { text: "Dealing with your stuff instead of avoiding it", type: "emotional" }
      ]
    },
    {
      id: 10,
      text: "Which would feel most like a breakthrough?",
      options: [
        { text: "Waking up feeling healthy, strong, and energized", type: "physical" },
        { text: "Having relationships that feel truly secure and deep", type: "relationships" },
        { text: "Doing work that feels meaningful and aligned", type: "purpose" },
        { text: "Feeling emotionally stable and at peace with myself", type: "emotional" }
      ]
    }
  ],
  results: {
    physical: {
      type: "Growth Area: Physical Foundation",
      description: "Your body is calling for attention. Maybe you've been living in your head, neglecting movement, or treating your body like an afterthought. But here's the truth: everything is harder without physical foundation. Energy, mood, confidence - they all start with how you treat your body.",
      traits: ["Mind-body disconnect", "Health on the backburner", "Needs physical foundation", "Energy-seeking"],
      advice: "Start small, but start. Ten minutes of movement. One better meal. More water. Better sleep. You don't need a transformation - you need consistency. Your body wants to feel good; give it the basics and watch everything else improve."
    },
    relationships: {
      type: "Growth Area: Relationships",
      description: "Your connection zone needs attention. Maybe you've isolated, attracted the wrong people, or struggle with boundaries. Humans are wired for connection - when that area suffers, everything feels harder. This isn't about finding 'the one'; it's about becoming someone who can give and receive love well.",
      traits: ["Connection-deprived", "Relationship patterns", "Boundary work needed", "Seeking belonging"],
      advice: "Start with one relationship. Reach out to someone. Have a real conversation. Set a boundary that scares you. The relationship muscles get stronger with use. You don't need more people; you need more depth with the right people."
    },
    purpose: {
      type: "Growth Area: Purpose & Direction",
      description: "Your meaning-making center needs attention. Maybe you're going through the motions, unclear on what you want, or not aligned with your work. Purpose doesn't have to be grand - it just needs to feel meaningful to YOU. Without direction, even success feels empty.",
      traits: ["Direction-seeking", "Untapped potential", "Meaning-hungry", "Ready for alignment"],
      advice: "Get curious about what energizes you. What would you do even if no one paid you? What problems do you actually want to solve? Purpose is discovered through action, not overthinking. Try things. The clarity comes from moving, not waiting."
    },
    emotional: {
      type: "Growth Area: Emotional Wellbeing",
      description: "Your inner world needs attention. Maybe you've been powering through feelings, avoiding processing, or stuck in patterns you can't break. Emotional health isn't soft - it's the foundation for everything. Unprocessed emotions don't disappear; they drive behavior.",
      traits: ["Emotion-avoider", "Inner work needed", "Pattern recognition", "Healing-ready"],
      advice: "The feelings you're avoiding are the doorway to growth. Start journaling, find a therapist, or just let yourself feel without fixing. The stuff you're running from won't chase you forever if you turn around and face it. You're ready for this."
    }
  }
};
