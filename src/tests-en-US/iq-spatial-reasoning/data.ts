// Spatial Reasoning Test - Viral IQ test for American English users

export const testData = {
  id: "iq-spatial-reasoning",
  title: "Spatial Reasoning Test",
  description: "How well can your brain visualize and manipulate objects in 3D? Test your spatial intelligence!",
  questions: [
    {
      id: 1,
      text: "When giving directions, you naturally tend to:",
      options: [
        { text: "Create a mental map and navigate using cardinal directions", type: "master" },
        { text: "Use landmarks and visual references", type: "strong" },
        { text: "Rely on street names and addresses", type: "average" },
        { text: "Just use GPS, I get lost easily", type: "developing" }
      ]
    },
    {
      id: 2,
      text: "You're packing a car trunk for a road trip with lots of luggage. You:",
      options: [
        { text: "Visualize exactly how everything will fit before starting", type: "master" },
        { text: "Have a general idea and adjust as needed", type: "strong" },
        { text: "Trial and error until it works", type: "average" },
        { text: "Stuff things in wherever they fit", type: "developing" }
      ]
    },
    {
      id: 3,
      text: "If you mentally rotate a letter 'L' 90 degrees clockwise, it looks like:",
      options: [
        { text: "I can visualize this instantly in my head", type: "master" },
        { text: "Takes me a moment but I can figure it out", type: "strong" },
        { text: "I'd need to physically rotate something", type: "average" },
        { text: "This is really difficult for me", type: "developing" }
      ]
    },
    {
      id: 4,
      text: "How are you at parallel parking?",
      options: [
        { text: "One smooth motion, nailed it every time", type: "master" },
        { text: "Pretty good, might need one adjustment", type: "strong" },
        { text: "Takes a few tries but I get there", type: "average" },
        { text: "Avoid it at all costs, will walk blocks instead", type: "developing" }
      ]
    },
    {
      id: 5,
      text: "Looking at a flat furniture assembly diagram, can you visualize the 3D result?",
      options: [
        { text: "Yes, I can rotate it in my mind and see all angles", type: "master" },
        { text: "Mostly, some complex parts take effort", type: "strong" },
        { text: "Sort of, I prefer step-by-step pictures", type: "average" },
        { text: "I need to build it to understand it", type: "developing" }
      ]
    },
    {
      id: 6,
      text: "You're in a new building. After exploring, can you find your way back?",
      options: [
        { text: "Easily, I create a mental map automatically", type: "master" },
        { text: "Usually, using visual landmarks I noticed", type: "strong" },
        { text: "Sometimes, depends on how complex it is", type: "average" },
        { text: "I frequently get turned around in new places", type: "developing" }
      ]
    },
    {
      id: 7,
      text: "Playing video games with 3D environments (like Minecraft or Zelda):",
      options: [
        { text: "I naturally navigate and build with ease", type: "master" },
        { text: "I'm comfortable after learning the controls", type: "strong" },
        { text: "It takes me a while to get oriented", type: "average" },
        { text: "I get lost and disoriented constantly", type: "developing" }
      ]
    },
    {
      id: 8,
      text: "If a cube is unfolded flat, can you identify which face is opposite to which?",
      options: [
        { text: "Yes, I can fold it back up in my mind", type: "master" },
        { text: "With some thought, I can figure it out", type: "strong" },
        { text: "I'd need to draw or use paper", type: "average" },
        { text: "This is very difficult for me", type: "developing" }
      ]
    },
    {
      id: 9,
      text: "When reading a map, do you need to rotate it to match your direction?",
      options: [
        { text: "No, I can read any orientation easily", type: "master" },
        { text: "Sometimes helps but not necessary", type: "strong" },
        { text: "Yes, it's much easier when aligned", type: "average" },
        { text: "Maps confuse me regardless of orientation", type: "developing" }
      ]
    },
    {
      id: 10,
      text: "Estimating if furniture will fit in a space before measuring:",
      options: [
        { text: "I'm usually accurate within inches", type: "master" },
        { text: "I have a decent sense, close enough", type: "strong" },
        { text: "I've been wrong enough times to always measure", type: "average" },
        { text: "I have no spatial sense for this", type: "developing" }
      ]
    }
  ],
  results: {
    master: {
      type: "Spatial Genius",
      description: "Your brain is a 3D modeling program! You can mentally rotate objects, navigate complex spaces, and visualize structures with incredible accuracy. Architects, engineers, surgeons, and pilots share your exceptional spatial abilities. Your brain literally thinks in dimensions others can't access!",
      traits: ["3D visualization", "Mental rotation", "Navigation mastery", "Spatial estimation"],
      advice: "Your spatial skills are rare! Consider careers in architecture, engineering, surgery, or game design where these abilities shine."
    },
    strong: {
      type: "Spatial Pro",
      description: "You've got strong spatial reasoning skills! You can navigate, visualize, and manipulate objects mentally with good accuracy. Most spatial tasks come naturally to you, though the most complex ones might require a bit more effort.",
      traits: ["Good visualization", "Solid navigation", "Practical spatial skills", "Above-average processing"],
      advice: "Keep challenging yourself with 3D puzzles, building games, and real-world spatial tasks to reach master level!"
    },
    average: {
      type: "Spatial Learner",
      description: "Your spatial reasoning is developing! You can handle everyday spatial tasks but might struggle with more complex visualization. Good news: spatial skills improve significantly with practice, unlike many other cognitive abilities.",
      traits: ["Growing spatial skills", "Tool-assisted visualization", "Practical approach", "Learning mindset"],
      advice: "Play building games (LEGO, Minecraft), do jigsaw puzzles, and practice giving directions to strengthen these skills!"
    },
    developing: {
      type: "2D Thinker",
      description: "Spatial reasoning isn't your natural strength - and that's okay! Many brilliant people think in other ways. You might be more verbal, logical, or emotionally intelligent. Your brain just processes information differently, focusing on other types of intelligence.",
      traits: ["Alternative thinking style", "Other cognitive strengths", "Practical workarounds", "Verbal/logical focus"],
      advice: "Use tools that help: GPS for navigation, measuring tape for spaces, and step-by-step guides for assembly. No shame in playing to your strengths!"
    }
  }
};
