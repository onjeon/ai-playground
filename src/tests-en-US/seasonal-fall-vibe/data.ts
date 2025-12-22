// Your Fall Vibe - Viral seasonal test for American English users

export const testData = {
  id: "seasonal-fall-vibe",
  title: "Your Fall Vibe",
  description: "PSL obsessed or Halloween goth? What's your autumn energy?",
  questions: [
    {
      id: 1,
      text: "September 1st hits. You're immediately:",
      options: [
        { text: "Buying every pumpkin spice product in existence", type: "basic_fall" },
        { text: "Planning my Halloween costume(s)", type: "spooky" },
        { text: "Excited to wear hoodies without dying of heat", type: "cozy" },
        { text: "Sad that summer is ending tbh", type: "reluctant" }
      ]
    },
    {
      id: 2,
      text: "Your ideal fall activity:",
      options: [
        { text: "Apple picking and cute farm photo ops", type: "basic_fall" },
        { text: "Haunted houses and horror movie marathons", type: "spooky" },
        { text: "Reading by a fire with a warm drink", type: "cozy" },
        { text: "Holding onto outdoor activities while I still can", type: "reluctant" }
      ]
    },
    {
      id: 3,
      text: "Your fall drink of choice:",
      options: [
        { text: "Pumpkin Spice Latte, no apologies", type: "basic_fall" },
        { text: "Something black or blood-red themed", type: "spooky" },
        { text: "Hot apple cider or chai tea", type: "cozy" },
        { text: "Still drinking iced coffee, thanks", type: "reluctant" }
      ]
    },
    {
      id: 4,
      text: "Fall decorating philosophy:",
      options: [
        { text: "Pumpkins, gourds, and warm tones everywhere", type: "basic_fall" },
        { text: "Skeletons, spiderwebs, and year-round Halloween", type: "spooky" },
        { text: "Candles, blankets, and hygge vibes", type: "cozy" },
        { text: "I'll decorate when it's actually cold", type: "reluctant" }
      ]
    },
    {
      id: 5,
      text: "Your relationship with Halloween:",
      options: [
        { text: "Love it for the aesthetic and cute costumes", type: "basic_fall" },
        { text: "It's basically my religion", type: "spooky" },
        { text: "Low-key costumes and handing out candy", type: "cozy" },
        { text: "It's fine, I guess. I'll participate", type: "reluctant" }
      ]
    },
    {
      id: 6,
      text: "Fall fashion for you means:",
      options: [
        { text: "Boots, scarves, and #OOTD posts", type: "basic_fall" },
        { text: "Embracing my inner goth/witch energy", type: "spooky" },
        { text: "Oversized sweaters and ultimate comfort", type: "cozy" },
        { text: "Finally wearing the clothes I actually like", type: "reluctant" }
      ]
    },
    {
      id: 7,
      text: "Your fall playlist includes:",
      options: [
        { text: "Taylor Swift fall albums on repeat", type: "basic_fall" },
        { text: "Halloween soundtracks and spooky songs", type: "spooky" },
        { text: "Acoustic covers and chill vibes", type: "cozy" },
        { text: "Same music as always, seasons don't change my taste", type: "reluctant" }
      ]
    },
    {
      id: 8,
      text: "Leaf-peeping and fall foliage:",
      options: [
        { text: "I'll drive hours for the perfect photo backdrop", type: "basic_fall" },
        { text: "Dead leaves? Very on-brand for spooky season", type: "spooky" },
        { text: "Love a peaceful walk through crunchy leaves", type: "cozy" },
        { text: "Trees losing leaves is kind of depressing actually", type: "reluctant" }
      ]
    },
    {
      id: 9,
      text: "Fall means the holidays are coming. You feel:",
      options: [
        { text: "Excited! Planning and anticipation is half the fun", type: "basic_fall" },
        { text: "Meh about Thanksgiving but Halloween is LIFE", type: "spooky" },
        { text: "Warm and fuzzy about family time and traditions", type: "cozy" },
        { text: "Already stressed about holiday obligations", type: "reluctant" }
      ]
    },
    {
      id: 10,
      text: "When people call fall activities 'basic' you:",
      options: [
        { text: "Own it proudly. Basic fall is best fall!", type: "basic_fall" },
        { text: "Laugh because my vibe is NOT basic", type: "spooky" },
        { text: "Don't care - I just like being cozy", type: "cozy" },
        { text: "Agree that the hype is a bit much", type: "reluctant" }
      ]
    }
  ],
  results: {
    basic_fall: {
      type: "The Fall Fanatic",
      description: "You're not basic, you're CLASSIC. PSLs, apple picking, sweater weather, and #FallVibes on every post. You've been waiting since July and you are READY. Your Starbucks app started glowing in September. There's no shame in loving fall - you're living your best pumpkin-spiced life.",
      traits: ["Enthusiastic", "Aesthetic-focused", "Tradition-loving", "Instagram-ready"],
      advice: "Keep living your best fall life! Maybe try one non-pumpkin flavor this season just to mix it up. Or don't - you do you, boo(ts season)."
    },
    spooky: {
      type: "The Spooky Season Soul",
      description: "You've been waiting for October since November 1st. Halloween isn't a holiday, it's a lifestyle. Your decorations are up in September, your costumes are planned months in advance, and you strongly believe spooky season should be year-round. You're the friend everyone goes to for horror movie recommendations.",
      traits: ["Spooky", "Creative", "Halloween-obsessed", "Slightly dark"],
      advice: "Your commitment to spooky season is admirable! Remember that after Halloween, there's a whole rest of fall to enjoy before the darkness of winter. Maybe a cozy interlude?"
    },
    cozy: {
      type: "The Cozy Homebody",
      description: "Fall to you means comfort. Blankets, candles, warm drinks, good books, and zero obligation to be outside in the elements. You've perfected the art of hygge and your home becomes a cozy sanctuary. You're not antisocial, you're just really good at being comfortable.",
      traits: ["Comfort-focused", "Homebody", "Peaceful", "Self-care queen/king"],
      advice: "Your cozy fall sounds absolutely perfect. Maybe invite some friends into your cozy sanctuary occasionally - you've clearly figured out something they need to learn."
    },
    reluctant: {
      type: "The Reluctant Fall-er",
      description: "You're not anti-fall, you're just... not jumping on the bandwagon. Summer ended too soon, the hype feels excessive, and you'd rather experience fall naturally than perform it. You'll enjoy a nice autumn day, but you're not going to pretend it's magical.",
      traits: ["Realistic", "Non-conformist", "Summer-nostalgic", "Low-key"],
      advice: "Fair enough! But give fall a chance - there are genuine pleasures beyond the Instagram aesthetic. Or keep doing your thing. Not everyone needs to drink the (pumpkin spice) Kool-Aid."
    }
  }
};
