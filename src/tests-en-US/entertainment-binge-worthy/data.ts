// Your Binge-Worthy Genre - Viral entertainment test for American English users

export const testData = {
  id: "entertainment-binge-worthy",
  title: "Your Binge-Worthy Genre",
  description: "What genre hooks you for 'just one more episode' until 3am? Find out!",
  questions: [
    {
      id: 1,
      text: "When you're stressed, you binge:",
      options: [
        { text: "Comfort shows I've seen before - familiar and safe", type: "comfort" },
        { text: "Drama/thriller - get absorbed in someone else's problems", type: "drama" },
        { text: "Comedy - I need to laugh and escape", type: "comedy" },
        { text: "True crime/documentary - learn while I zone out", type: "documentary" }
      ]
    },
    {
      id: 2,
      text: "The 'one more episode' hook that works on you:",
      options: [
        { text: "Knowing what happens next (even if I've seen it)", type: "comfort" },
        { text: "NEED to know what happens. That cliffhanger!", type: "drama" },
        { text: "Another episode that'll make me laugh", type: "comedy" },
        { text: "Fascinating information I can't stop learning", type: "documentary" }
      ]
    },
    {
      id: 3,
      text: "Your ideal binge-watching state:",
      options: [
        { text: "Cozy, nostalgic, brain off", type: "comfort" },
        { text: "Engaged, invested, emotionally committed", type: "drama" },
        { text: "Relaxed, entertained, laughing out loud", type: "comedy" },
        { text: "Curious, learning, mind engaged", type: "documentary" }
      ]
    },
    {
      id: 4,
      text: "What makes you commit to a new series?",
      options: [
        { text: "Good reviews and seems comforting/familiar", type: "comfort" },
        { text: "Gripping premise that hooks immediately", type: "drama" },
        { text: "Genuinely funny pilot that makes me laugh", type: "comedy" },
        { text: "Interesting subject I want to learn about", type: "documentary" }
      ]
    },
    {
      id: 5,
      text: "Your rewatch tendencies:",
      options: [
        { text: "I rewatch constantly. Same shows, always comforting", type: "comfort" },
        { text: "Rarely - once I know the plot, less interesting", type: "drama" },
        { text: "Rewatchable! Jokes are still funny", type: "comedy" },
        { text: "Sometimes revisit to refresh knowledge", type: "documentary" }
      ]
    },
    {
      id: 6,
      text: "When someone asks what you're watching:",
      options: [
        { text: "Probably something I've already watched 10 times", type: "comfort" },
        { text: "This INSANE show - let me tell you what happened", type: "drama" },
        { text: "This hilarious show - it's so funny", type: "comedy" },
        { text: "This documentary about [fascinating topic]", type: "documentary" }
      ]
    },
    {
      id: 7,
      text: "Your emotional investment level while binging:",
      options: [
        { text: "Light - I'm relaxing, not stressing", type: "comfort" },
        { text: "INTENSE - I care deeply about outcomes", type: "drama" },
        { text: "Cheerful - entertainment without emotional labor", type: "comedy" },
        { text: "Intellectually engaged but not emotionally drained", type: "documentary" }
      ]
    },
    {
      id: 8,
      text: "Background TV while doing other things:",
      options: [
        { text: "Comfort show that doesn't require full attention", type: "comfort" },
        { text: "No - I need to WATCH my shows properly", type: "drama" },
        { text: "Comedy works great as background", type: "comedy" },
        { text: "Documentary can fill the background nicely", type: "documentary" }
      ]
    },
    {
      id: 9,
      text: "After a binge session, you feel:",
      options: [
        { text: "Relaxed, comfortable, maybe sleepy", type: "comfort" },
        { text: "Emotionally exhausted but satisfied", type: "drama" },
        { text: "Happy, light, mood improved", type: "comedy" },
        { text: "Informed, interested, maybe down a Wikipedia hole", type: "documentary" }
      ]
    },
    {
      id: 10,
      text: "The show you've binged most in your life:",
      options: [
        { text: "Friends/The Office/Parks & Rec/comfort classic", type: "comfort" },
        { text: "Breaking Bad/Game of Thrones/intense drama", type: "drama" },
        { text: "Brooklyn 99/Schitt's Creek/something funny", type: "comedy" },
        { text: "Planet Earth/true crime/educational content", type: "documentary" }
      ]
    }
  ],
  results: {
    comfort: {
      type: "The Comfort Rewatcher",
      description: "You binge for COMFORT, not novelty. Your ideal binge is something you've seen before - familiar characters, predictable outcomes, warm feelings. You're not looking for surprises, you're looking for a hug in TV form. Your most-watched shows have triple-digit episode counts in your viewing history.",
      traits: ["Comfort-seeking", "Loyal", "Nostalgic", "Low-stress viewing"],
      advice: "Your comfort watching is valid and healthy! Just make sure you're occasionally letting new shows into your rotation. Your next comfort show might be waiting in something you haven't tried yet."
    },
    drama: {
      type: "The Drama Devotee",
      description: "You binge for the RIDE. Plot twists, cliffhangers, emotional devastation - you're here for it. You get INVESTED in characters and outcomes. Your binge sessions are intense and you emerge emotionally wrung out but satisfied. You've said 'I can't stop watching' and meant it.",
      traits: ["Invested", "Plot-driven", "Emotionally engaged", "Intensity-seeking"],
      advice: "Your dramatic taste keeps you engaged! Just balance the intensity with lighter content sometimes. Constant emotional investment is exhausting. Save the heavy stuff for when you can handle the feelings."
    },
    comedy: {
      type: "The Laugh Chaser",
      description: "You binge to LAUGH. Life is hard enough - TV should be fun. You seek out shows that make you genuinely laugh out loud, brighten your mood, and provide pure entertainment. You might rewatch funny scenes multiple times because they're still funny.",
      traits: ["Joy-seeking", "Humor-focused", "Mood-boosting", "Light-hearted"],
      advice: "Your comedy habit is great for mental health! Laughter is genuinely therapeutic. Maybe try some comedy-dramas for variety - funny AND emotional content exists and might give you the best of both worlds."
    },
    documentary: {
      type: "The Info-Binger",
      description: "You binge to LEARN. Whether it's true crime, nature docs, or educational series - you want your watching time to feel productive. You emerge from binge sessions with new knowledge, fun facts, and strong opinions on topics you didn't know about yesterday.",
      traits: ["Curious", "Intellectual", "Learning-focused", "Knowledge-seeking"],
      advice: "Your educational binging is excellent! You're constantly learning. Maybe try some well-written fictional drama too - storytelling can teach things documentaries can't. But also keep watching docs - your brain benefits!"
    }
  }
};
