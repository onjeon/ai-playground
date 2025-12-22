// What Type of Influencer Would You Be? - Viral modern culture test for American English users

export const testData = {
  id: "culture-influencer-type",
  title: "What Type of Influencer Would You Be?",
  description: "If you became Internet Famous tomorrow, what would your brand be? Time to discover your influencer destiny.",
  questions: [
    {
      id: 1,
      text: "What would your followers come to you for?",
      options: [
        { text: "Aesthetic inspiration and life goals", type: "lifestyle" },
        { text: "Laughs and relatable content", type: "comedy" },
        { text: "Hot takes and opinions", type: "commentary" },
        { text: "Actually useful information", type: "educational" }
      ]
    },
    {
      id: 2,
      text: "Your ideal brand deal:",
      options: [
        { text: "Luxury hotel stay and designer clothes", type: "lifestyle" },
        { text: "Anything I can make funny content about", type: "comedy" },
        { text: "Nothing - I'd rather stay authentic", type: "commentary" },
        { text: "Products I actually use and believe in", type: "educational" }
      ]
    },
    {
      id: 3,
      text: "What would your content voice be?",
      options: [
        { text: "Aspirational but relatable", type: "lifestyle" },
        { text: "Chaotic and unhinged", type: "comedy" },
        { text: "Honest and unapologetic", type: "commentary" },
        { text: "Clear and informative", type: "educational" }
      ]
    },
    {
      id: 4,
      text: "Your response to haters:",
      options: [
        { text: "Kill them with unbothered energy", type: "lifestyle" },
        { text: "Turn their comments into content", type: "comedy" },
        { text: "Clap back or call them out", type: "commentary" },
        { text: "Ignore or respond with facts", type: "educational" }
      ]
    },
    {
      id: 5,
      text: "What's your filming vibe?",
      options: [
        { text: "Golden hour lighting, curated background", type: "lifestyle" },
        { text: "Phone selfie camera, chaos in the background", type: "comedy" },
        { text: "Talking directly to camera, raw and real", type: "commentary" },
        { text: "Clean setup with good audio", type: "educational" }
      ]
    },
    {
      id: 6,
      text: "Your dream 'day in my life' content:",
      options: [
        { text: "Morning routine, aesthetic meals, golden moments", type: "lifestyle" },
        { text: "Everything going wrong in hilarious ways", type: "comedy" },
        { text: "Reacting to stuff while going about my day", type: "commentary" },
        { text: "Actually teaching something useful", type: "educational" }
      ]
    },
    {
      id: 7,
      text: "What would cause your follower count to spike?",
      options: [
        { text: "Going viral for a beautiful moment or transformation", type: "lifestyle" },
        { text: "An unhinged video that captures the zeitgeist", type: "comedy" },
        { text: "A controversial take that divides the internet", type: "commentary" },
        { text: "A video that actually helps people", type: "educational" }
      ]
    },
    {
      id: 8,
      text: "Your ideal follower relationship:",
      options: [
        { text: "They're inspired by my life choices", type: "lifestyle" },
        { text: "We're all unhinged together", type: "comedy" },
        { text: "They respect my opinions and engage in discourse", type: "commentary" },
        { text: "They learn from me and trust my expertise", type: "educational" }
      ]
    },
    {
      id: 9,
      text: "What would you NEVER post?",
      options: [
        { text: "Anything off-brand or aesthetically offensive", type: "lifestyle" },
        { text: "Boring content that doesn't land", type: "comedy" },
        { text: "An opinion I don't actually believe", type: "commentary" },
        { text: "Misinformation or unverified claims", type: "educational" }
      ]
    },
    {
      id: 10,
      text: "Your influencer goal:",
      options: [
        { text: "Build a beautiful brand and live a curated dream", type: "lifestyle" },
        { text: "Make people laugh and forget their problems", type: "comedy" },
        { text: "Be a voice that matters and shift perspectives", type: "commentary" },
        { text: "Genuinely help and educate my audience", type: "educational" }
      ]
    }
  ],
  results: {
    lifestyle: {
      type: "The Lifestyle Aspirant",
      description: "You'd be the influencer people want to BE. Morning routines that make people question their own lives. Aesthetic feeds that belong in a museum. Brand trips to Bali. Your followers would screenshot your outfits and recreate your coffee orders. The vibes? Immaculate.",
      traits: ["Curated perfection", "Aesthetic visionary", "Brand magnet", "Aspiration goals"],
      advice: "Your eye for beauty is a gift, but don't lose yourself in the curation. The most successful lifestyle influencers show real moments too. Perfection gets tiring - relatability keeps people around."
    },
    comedy: {
      type: "The Chaos Comedian",
      description: "You'd be the influencer people watch to feel SEEN. Unhinged content that makes people snort-laugh in public. Your comment section would be 'STOP I'M IN PUBLIC' and 'why is this so accurate.' You'd turn brand deals into comedy gold. Brands would be scared and excited to work with you.",
      traits: ["Naturally funny", "Relatable chaos", "Timing genius", "Internet best friend"],
      advice: "Your humor is your superpower but comedy is exhausting. Make sure you're actually having fun, not just performing fun. Burnout hits comedians hard - protect your peace."
    },
    commentary: {
      type: "The Hot Take Host",
      description: "You'd be the influencer people come to for OPINIONS. Think pieces on pop culture, call-outs of problematic behavior, the takes everyone's thinking but afraid to say. Your comments would be a war zone (in a good way). You'd either be loved or blocked - no in-between.",
      traits: ["Fearlessly opinionated", "Culturally aware", "Discourse driver", "Thought leader"],
      advice: "Your voice matters and people want to hear it. Just remember: not every take needs to be shared immediately. Sometimes the hottest take is the one you sleep on and still believe tomorrow."
    },
    educational: {
      type: "The Knowledge Creator",
      description: "You'd be the influencer people TRUST. The one correcting misinformation. The one with actually useful content. Your followers would share your videos saying 'everyone needs to see this.' You'd be the reason someone learned something new today.",
      traits: ["Credibly informed", "Genuinely helpful", "Trust-building", "Value-adding"],
      advice: "Your commitment to being useful is admirable. Just don't forget to let your personality shine through the education. The best teachers are memorable AND informative."
    }
  }
};
