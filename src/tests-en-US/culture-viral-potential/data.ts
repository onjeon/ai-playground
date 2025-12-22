// Would You Go Viral? - Viral modern culture test for American English users

export const testData = {
  id: "culture-viral-potential",
  title: "Would You Go Viral?",
  description: "Do you have that viral energy or are you destined to stay at 12 views? Let's scientifically determine your internet fame potential.",
  questions: [
    {
      id: 1,
      text: "Something embarrassing happens to you in public. First thought:",
      options: [
        { text: "Please tell me no one recorded that", type: "private" },
        { text: "That would actually make great content", type: "viral" },
        { text: "Laugh it off and hope everyone forgets", type: "moderate" },
        { text: "I'm already crafting the tweet about it", type: "ready" }
      ]
    },
    {
      id: 2,
      text: "Your comfort level with being perceived by strangers:",
      options: [
        { text: "Strongly prefer to not exist on the internet", type: "private" },
        { text: "The more eyes the better honestly", type: "viral" },
        { text: "Fine if it's positive attention", type: "moderate" },
        { text: "Born to be perceived", type: "ready" }
      ]
    },
    {
      id: 3,
      text: "You witness something WILD in public. You:",
      options: [
        { text: "Take it in, tell friends later, that's it", type: "private" },
        { text: "Film it immediately, already writing caption", type: "viral" },
        { text: "Maybe take a quick video but probably won't post it", type: "moderate" },
        { text: "Live stream it while it's happening", type: "ready" }
      ]
    },
    {
      id: 4,
      text: "How often do you think 'this would do numbers'?",
      options: [
        { text: "Never, I don't think in content terms", type: "private" },
        { text: "Multiple times daily", type: "viral" },
        { text: "Occasionally when something funny happens", type: "moderate" },
        { text: "It's a constant background thought", type: "ready" }
      ]
    },
    {
      id: 5,
      text: "A video of you gets 1 million views. Reaction:",
      options: [
        { text: "Absolute nightmare, delete everything", type: "private" },
        { text: "FINALLY, let me capitalize on this", type: "viral" },
        { text: "Cool but also kind of scary", type: "moderate" },
        { text: "The beginning of my era", type: "ready" }
      ]
    },
    {
      id: 6,
      text: "Your willingness to do something embarrassing for views:",
      options: [
        { text: "Zero. My dignity stays intact.", type: "private" },
        { text: "Depends on how many views we're talking", type: "viral" },
        { text: "Only if it's actually funny", type: "moderate" },
        { text: "Embarrassment is a social construct", type: "ready" }
      ]
    },
    {
      id: 7,
      text: "How would you describe your personality?",
      options: [
        { text: "Reserved - I open up slowly", type: "private" },
        { text: "Whatever I'm feeling, I express it", type: "viral" },
        { text: "Depends on the situation and audience", type: "moderate" },
        { text: "Unhinged but make it charming", type: "ready" }
      ]
    },
    {
      id: 8,
      text: "Your hot take game is:",
      options: [
        { text: "I keep my opinions to myself mostly", type: "private" },
        { text: "Spicy enough to start discourse", type: "viral" },
        { text: "Sometimes I have thoughts", type: "moderate" },
        { text: "Weaponized, ready to deploy at any moment", type: "ready" }
      ]
    },
    {
      id: 9,
      text: "If you were going viral, it would be for:",
      options: [
        { text: "Hopefully nothing ever please", type: "private" },
        { text: "Something intentionally crafted", type: "viral" },
        { text: "Accidentally being in the right place at the right time", type: "moderate" },
        { text: "Being so authentically myself it resonates", type: "ready" }
      ]
    },
    {
      id: 10,
      text: "Your relationship with internet fame:",
      options: [
        { text: "Sounds like a nightmare, I choose peace", type: "private" },
        { text: "Actively pursuing it", type: "viral" },
        { text: "Wouldn't hate it but not seeking it", type: "moderate" },
        { text: "It's my destiny", type: "ready" }
      ]
    }
  ],
  results: {
    private: {
      type: "Anti-Viral Immunity",
      description: "You're internet famous' worst nightmare - you simply don't want it. While everyone's chasing clout, you're living your peaceful, unperceived life. Going viral sounds like a horror movie to you. You'd probably delete your account if you got too much attention. Valid, honestly.",
      traits: ["Privacy lover", "Chronically unbothered", "Lives offline", "Actually healthy"],
      advice: "Your peace is priceless and your boundaries are valid. In a world of oversharing, you're keeping life sacred. Just make sure you're not hiding from connection entirely - some visibility can be meaningful."
    },
    viral: {
      type: "Viral Energy Loading",
      description: "You SEE content everywhere. You THINK in captions. You have ideas but maybe haven't fully committed yet. The viral potential is there, bubbling under the surface. One day you'll post The One and everything will change. Keep filming.",
      traits: ["Content-brained", "Opportunity spotter", "Almost ready", "Algorithm understander"],
      advice: "You have the instincts - now you need the follow-through. Stop saving things for 'the right time' and start posting. The algorithm rewards consistency and you've got ideas to spare."
    },
    moderate: {
      type: "Accidental Viral Candidate",
      description: "You're not trying to go viral, which means you absolutely could. The internet loves authentic moments, and you're not calculating every post. If fame finds you, it'll be by accident - a candid moment, a perfect reaction, something unforced that captures the zeitgeist.",
      traits: ["Naturally authentic", "Accidentally funny", "Right place right time energy", "Relatable"],
      advice: "Keep being yourself - it's your greatest asset. Just make sure you're documenting moments occasionally. Your accidental viral moment needs to be captured somehow!"
    },
    ready: {
      type: "Main Character Energy",
      description: "You were BORN for this. Every moment is content. You're not cringe, you're ahead of the curve. Your confidence is your superpower. When (not if) you go viral, it'll be for something so authentically YOU that it couldn't have been anyone else. The algorithm is lucky to have you.",
      traits: ["Chronically confident", "Unapologetically yourself", "Born content creator", "Main character"],
      advice: "Your energy is unstoppable - channel it wisely. Not every thought needs to be shared, even when you're this iconic. Save the best stuff for when it'll really hit. Quality over quantity, even for main characters."
    }
  }
};
