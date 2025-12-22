// What's Your Fashion Personality? - Viral personality test for American English users

export const testData = {
  id: "personality-fashion-style",
  title: "What's Your Fashion Personality?",
  description: "Trendsetter or comfort queen? Let's decode your personal style!",
  questions: [
    {
      id: 1,
      text: "Your go-to outfit for running errands:",
      options: [
        { text: "Something coordinated - you never know who you'll see", type: "trendy" },
        { text: "Casual but put-together basics", type: "classic" },
        { text: "Athleisure all day every day", type: "comfort" },
        { text: "Whatever was closest when I woke up", type: "minimal" }
      ]
    },
    {
      id: 2,
      text: "How do you approach shopping for clothes?",
      options: [
        { text: "I keep up with trends and update my wardrobe regularly", type: "trendy" },
        { text: "Invest in quality pieces that last and mix well", type: "classic" },
        { text: "If it's soft and comfy, I'm interested", type: "comfort" },
        { text: "I buy clothes when the old ones literally fall apart", type: "minimal" }
      ]
    },
    {
      id: 3,
      text: "Your relationship with accessories:",
      options: [
        { text: "Obsessed. Jewelry, bags, scarves - the works", type: "trendy" },
        { text: "A few signature pieces I wear regularly", type: "classic" },
        { text: "Does a scrunchie count?", type: "comfort" },
        { text: "What are accessories?", type: "minimal" }
      ]
    },
    {
      id: 4,
      text: "How much thought goes into your outfit each morning?",
      options: [
        { text: "Significant. Sometimes I plan the night before", type: "trendy" },
        { text: "A few minutes - I know what works", type: "classic" },
        { text: "Comfort check: soft? Not restricting? Good to go", type: "comfort" },
        { text: "Grab and go. Zero thought required", type: "minimal" }
      ]
    },
    {
      id: 5,
      text: "Your closet situation:",
      options: [
        { text: "Organized by color, category, and season", type: "trendy" },
        { text: "Curated collection of versatile pieces", type: "classic" },
        { text: "A comfortable chaos of soft things", type: "comfort" },
        { text: "Small. I don't need much", type: "minimal" }
      ]
    },
    {
      id: 6,
      text: "Someone compliments your outfit. Inside you think:",
      options: [
        { text: "Validation! I worked hard on this look", type: "trendy" },
        { text: "Nice! Quality pieces speak for themselves", type: "classic" },
        { text: "Thanks? I'm just wearing my usual comfy stuff", type: "comfort" },
        { text: "Wait, this outfit? I didn't even try", type: "minimal" }
      ]
    },
    {
      id: 7,
      text: "Your ideal fashion splurge:",
      options: [
        { text: "That trending piece everyone's been wearing", type: "trendy" },
        { text: "A timeless investment piece that'll last years", type: "classic" },
        { text: "The coziest loungewear known to mankind", type: "comfort" },
        { text: "I don't splurge on clothes really", type: "minimal" }
      ]
    },
    {
      id: 8,
      text: "Heels or uncomfortable-but-cute shoes:",
      options: [
        { text: "Worth it for the look! Beauty is pain", type: "trendy" },
        { text: "Sometimes, if the occasion calls for it", type: "classic" },
        { text: "My feet deserve better. Comfort always wins", type: "comfort" },
        { text: "I own like two pairs of shoes total", type: "minimal" }
      ]
    },
    {
      id: 9,
      text: "You have a big event coming up. Your approach:",
      options: [
        { text: "New outfit! This is what shopping is FOR", type: "trendy" },
        { text: "Elevate something I already have with good accessories", type: "classic" },
        { text: "Find the nicest version of my comfortable style", type: "comfort" },
        { text: "Slightly nicer version of what I always wear", type: "minimal" }
      ]
    },
    {
      id: 10,
      text: "What's your fashion philosophy?",
      options: [
        { text: "Express yourself! Fashion is art you wear", type: "trendy" },
        { text: "Quality over quantity, less is more", type: "classic" },
        { text: "If I'm not comfortable, what's the point?", type: "comfort" },
        { text: "Clothes serve a function. That's about it", type: "minimal" }
      ]
    }
  ],
  results: {
    trendy: {
      type: "The Fashion Forward Trendsetter",
      description: "You LIVE for fashion! Your Instagram could double as a lookbook. You know what's trending before everyone else and you're not afraid to make statements. Your closet is constantly evolving and you view getting dressed as an art form. Outfit repeating? Don't know her.",
      traits: ["Expressive", "Trend-aware", "Creative", "Fashion-focused"],
      advice: "Your passion for fashion is inspiring! Just make sure you're dressing for yourself, not just for others. Trends come and go - developing your personal signature within trends will make your style even more impactful."
    },
    classic: {
      type: "The Timeless Classic",
      description: "You've cracked the code: quality basics, versatile pieces, and timeless style that never goes out of fashion. Your closet may not be huge, but everything in it WORKS. You look polished without trying too hard. People probably ask where you got that simple-but-perfect piece.",
      traits: ["Elegant", "Quality-focused", "Practical", "Effortlessly stylish"],
      advice: "Your approach is genuinely smart and sustainable! You'll never look back at photos cringing at dated trends. Keep investing in quality pieces and don't be afraid to add a trend piece occasionally just for fun."
    },
    comfort: {
      type: "The Cozy Comfort Queen",
      description: "Life's too short for tight waistbands and pinchy shoes. You've prioritized comfort and honestly? You're winning. Soft fabrics, elastic waists, and roomy fits are your love language. Looking good is nice but FEELING good is the real flex. Athleisure for president.",
      traits: ["Practical", "Comfort-first", "Relaxed", "Cozy enthusiast"],
      advice: "Your priorities are valid! Comfort shouldn't require sacrifice. The good news: fashion is catching up - elevated loungewear is totally a thing. You can be comfortable AND polished when you want to be."
    },
    minimal: {
      type: "The No-Fuss Minimalist",
      description: "Fashion? You know it exists but you're simply not participating. You have better things to think about than what you're wearing. Your wardrobe is small, functional, and perfectly adequate. You might own five identical shirts and genuinely don't see the problem.",
      traits: ["Practical", "Unfussy", "Function-focused", "Priorities elsewhere"],
      advice: "Your lack of fashion concern is honestly freeing! But dressing intentionally can actually boost confidence and mood. You don't have to become a fashionista - just consider if your clothes make you feel good. A small upgrade might surprise you."
    }
  }
};
