// How Much of a Risk Taker Are You? - Viral personality test for American English users

export const testData = {
  id: "personality-risk-taker",
  title: "How Much of a Risk Taker Are You?",
  description: "Do you play it safe or bet it all on red? Let's find your risk tolerance!",
  questions: [
    {
      id: 1,
      text: "You're offered a 50/50 chance to double your money or lose it all. You:",
      options: [
        { text: "ALL IN! Let's goooo!", type: "daredevil" },
        { text: "Bet a portion - balance risk and reward", type: "calculated" },
        { text: "Maybe a small amount, just for fun", type: "cautious" },
        { text: "Absolutely not. I keep what I have", type: "safe" }
      ]
    },
    {
      id: 2,
      text: "A job opportunity comes up: way more money but less stability. You:",
      options: [
        { text: "Take it immediately - fortune favors the bold!", type: "daredevil" },
        { text: "Research it thoroughly, then probably go for it", type: "calculated" },
        { text: "Consider it but probably stick with what's secure", type: "cautious" },
        { text: "Stability over everything. Hard pass", type: "safe" }
      ]
    },
    {
      id: 3,
      text: "Your approach to extreme sports or adrenaline activities:",
      options: [
        { text: "Sign me up for all of them! YOLO!", type: "daredevil" },
        { text: "I'll try some with proper training and safety gear", type: "calculated" },
        { text: "Maybe something mild, like a zip line with triple-checked harnesses", type: "cautious" },
        { text: "I'll watch from the ground, thanks", type: "safe" }
      ]
    },
    {
      id: 4,
      text: "You see the 'check engine' light come on. Your response:",
      options: [
        { text: "Eh, probably fine. I'll deal with it when something actually breaks", type: "daredevil" },
        { text: "Monitor it and schedule a check-up soon", type: "calculated" },
        { text: "Going to the mechanic this week", type: "cautious" },
        { text: "Pulling over immediately to call for help", type: "safe" }
      ]
    },
    {
      id: 5,
      text: "A friend proposes a questionable but hilarious scheme. You:",
      options: [
        { text: "I'm the one who proposed it", type: "daredevil" },
        { text: "In if the reward outweighs potential consequences", type: "calculated" },
        { text: "Moral support only - I'll watch and laugh", type: "cautious" },
        { text: "Trying to talk everyone out of it", type: "safe" }
      ]
    },
    {
      id: 6,
      text: "How do you feel about trying food that looks... adventurous?",
      options: [
        { text: "The weirder the better! Where's the challenge?", type: "daredevil" },
        { text: "I'll try most things at least once", type: "calculated" },
        { text: "Cautious bite if someone I trust recommends it", type: "cautious" },
        { text: "I'll stick with what I know I like", type: "safe" }
      ]
    },
    {
      id: 7,
      text: "Your investment philosophy:",
      options: [
        { text: "High risk, high reward! Crypto? Meme stocks? I'm in", type: "daredevil" },
        { text: "Diversified portfolio with some growth opportunities", type: "calculated" },
        { text: "Mostly safe investments with maybe a small fun fund", type: "cautious" },
        { text: "Savings account and maybe some bonds", type: "safe" }
      ]
    },
    {
      id: 8,
      text: "Someone dares you to do something mildly embarrassing. You:",
      options: [
        { text: "Already doing it. No dare needed actually", type: "daredevil" },
        { text: "Depends on what and who's watching", type: "calculated" },
        { text: "Nervous laugh and probably chicken out", type: "cautious" },
        { text: "Absolutely not. My dignity isn't negotiable", type: "safe" }
      ]
    },
    {
      id: 9,
      text: "You're about to miss a flight. How fast do you run through the airport?",
      options: [
        { text: "I live for the drama of making it at the last second", type: "daredevil" },
        { text: "Sprinting but honestly shouldn't have cut it this close", type: "calculated" },
        { text: "I'm never in this situation - I arrive way too early", type: "cautious" },
        { text: "I would've left yesterday to avoid this exact scenario", type: "safe" }
      ]
    },
    {
      id: 10,
      text: "How do you feel when faced with uncertainty?",
      options: [
        { text: "EXCITED. Uncertainty means possibility!", type: "daredevil" },
        { text: "Curious. Let's see what happens", type: "calculated" },
        { text: "A little anxious but I can manage", type: "cautious" },
        { text: "I need to know all variables before proceeding", type: "safe" }
      ]
    }
  ],
  results: {
    daredevil: {
      type: "The Fearless Daredevil",
      description: "You laugh in the face of danger and probably have several wild stories that start with 'so there I was...' Risk is just spicy opportunity to you. You've either lived an incredible life or a very short one - probably the former since you're here taking this test!",
      traits: ["Fearless", "Thrill-seeking", "Bold", "Possibly immortal"],
      advice: "Your bravery is legendary, but remember: calculated risks beat random ones. The goal is to have amazing stories AND live to tell them. Sometimes the biggest risk is not knowing when to hold back!"
    },
    calculated: {
      type: "The Strategic Risk-Taker",
      description: "You're not afraid to take risks, but you're smart about which ones. You weigh odds, calculate potential outcomes, and then make bold moves with confidence. You're the person who wins at poker because you actually understand when to fold and when to go all in.",
      traits: ["Strategic", "Analytical", "Confident", "Balanced"],
      advice: "Your approach is genuinely ideal! You get the excitement of risk with the wisdom of analysis. Keep trusting your gut - it's clearly well-calibrated. Just don't overthink to the point of missing opportunities."
    },
    cautious: {
      type: "The Careful Explorer",
      description: "You're not opposed to adventure, you just prefer adventures with safety nets. You'll try new things when the conditions are right and the research has been done. You're the friend who reads all the reviews and asks about the return policy. Smart, honestly.",
      traits: ["Thoughtful", "Prudent", "Prepared", "Safety-conscious"],
      advice: "Your caution keeps you out of trouble, and that's valuable! But life's best moments often require a little leap of faith. Challenge yourself to say yes to something uncertain occasionally - you might surprise yourself."
    },
    safe: {
      type: "The Security Seeker",
      description: "Risk? No thanks, you've seen how that ends for other people. You prefer the known path, the sure thing, the predictable outcome. Your approach keeps life stable and your heart rate normal. Nothing wrong with playing it safe - someone has to be the responsible one!",
      traits: ["Secure", "Stable", "Predictable", "Risk-averse"],
      advice: "Your stability is an anchor in a chaotic world! But playing it too safe can mean missing out on growth and adventure. Remember: the biggest risk is sometimes not taking any risks at all. Small steps outside your comfort zone might lead somewhere beautiful."
    }
  }
};
