// How Much Dad Joke Energy Do You Have? - Viral humor test for American English users

export const testData = {
  id: "humor-dad-joke",
  title: "How Much Dad Joke Energy Do You Have?",
  description: "Puns. Groaners. 'Hi Hungry, I'm Dad.' We're measuring your corny joke capacity regardless of your actual dad status.",
  questions: [
    {
      id: 1,
      text: "Someone says 'I'm tired.' Your brain immediately:",
      options: [
        { text: "Responds with genuine sympathy", type: "low" },
        { text: "Briefly considers a joke but doesn't say it", type: "moderate" },
        { text: "'Hi Tired, I'm [your name]' - I can't help it", type: "high" },
        { text: "Has 3 variations ready and I'm using all of them", type: "maximum" }
      ]
    },
    {
      id: 2,
      text: "Your relationship with puns:",
      options: [
        { text: "Not really my thing", type: "low" },
        { text: "I appreciate a good one but don't make them", type: "moderate" },
        { text: "I make them constantly and enjoy the groans", type: "high" },
        { text: "My brain auto-generates puns I cannot control", type: "maximum" }
      ]
    },
    {
      id: 3,
      text: "How do you feel when a joke gets a groan instead of a laugh?",
      options: [
        { text: "Embarrassed - I'd rather not", type: "low" },
        { text: "A little uncomfortable but I move on", type: "moderate" },
        { text: "The groan IS the laugh, that's the whole point", type: "high" },
        { text: "I feel POWERFUL. The worse the better.", type: "maximum" }
      ]
    },
    {
      id: 4,
      text: "You see an obvious setup for a corny joke. You:",
      options: [
        { text: "Let it pass - not my style", type: "low" },
        { text: "Think it but don't say it out loud", type: "moderate" },
        { text: "HAVE to say it, it's compulsory", type: "high" },
        { text: "Already said it before they finished their sentence", type: "maximum" }
      ]
    },
    {
      id: 5,
      text: "Your opinion on wordplay:",
      options: [
        { text: "Not interested, prefer other types of humor", type: "low" },
        { text: "It's fine, clever when done well", type: "moderate" },
        { text: "It's my favorite form of comedy", type: "high" },
        { text: "It's not just comedy, it's a way of life", type: "maximum" }
      ]
    },
    {
      id: 6,
      text: "Someone rolls their eyes at your joke. Reaction:",
      options: [
        { text: "I don't really make those jokes anyway", type: "low" },
        { text: "Fair, I'll tone it down", type: "moderate" },
        { text: "Perfect response, joke landed", type: "high" },
        { text: "Time for another one, establish dominance", type: "maximum" }
      ]
    },
    {
      id: 7,
      text: "Your text message style includes:",
      options: [
        { text: "Normal conversation, straightforward", type: "low" },
        { text: "Occasional jokes but nothing too cheesy", type: "moderate" },
        { text: "Puns that I type then have to send even if they're bad", type: "high" },
        { text: "Groaner after groaner, my friends are suffering", type: "maximum" }
      ]
    },
    {
      id: 8,
      text: "At a barbecue, you're most likely to:",
      options: [
        { text: "Have normal conversations like a normal person", type: "low" },
        { text: "Tell a regular joke or two", type: "moderate" },
        { text: "Make at least one 'grilling' pun, it's unavoidable", type: "high" },
        { text: "I AM the barbecue dad now, this is my domain", type: "maximum" }
      ]
    },
    {
      id: 9,
      text: "Kids (or younger people) react to your humor with:",
      options: [
        { text: "I don't really do the corny thing", type: "low" },
        { text: "Sometimes an eye roll, sometimes a laugh", type: "moderate" },
        { text: "Exaggerated groans which I love", type: "high" },
        { text: "'Please stop' which is actually encouragement", type: "maximum" }
      ]
    },
    {
      id: 10,
      text: "Finish this sentence: 'What do you call a...'",
      options: [
        { text: "I don't do joke setups like this", type: "low" },
        { text: "I know a few but don't use them much", type: "moderate" },
        { text: "I have a COLLECTION and I'm ready", type: "high" },
        { text: "I'm already writing new material as we speak", type: "maximum" }
      ]
    }
  ],
  results: {
    low: {
      type: "Zero Dad Energy",
      description: "You prefer your humor sophisticated, thank you very much. Puns make you cringe, and 'Hi Hungry, I'm Dad' jokes make you want to leave the room. You're not here for corny - you're here for actually funny. And honestly? That's valid.",
      traits: ["Pun-resistant", "Cringe-averse", "Prefers clever humor", "Anti-corny"],
      advice: "Your standards are high and that's fine. But consider: the best dad jokes know they're bad. That's the point. Try embracing the groan - there's a weird joy in being so unfunny it's funny. Or don't. Keep your dignity."
    },
    moderate: {
      type: "Dad Joke Appreciator",
      description: "You can appreciate a good dad joke but you're not constantly generating them. You'll laugh (or groan) at others' puns and maybe toss one out occasionally. You have restraint. You know when to hold back. You're the reasonable middle ground.",
      traits: ["Balanced", "Selective punner", "Can hang with dads", "Knows when to stop"],
      advice: "Your moderation is admirable. You can enjoy the genre without being consumed by it. Keep that balance - the world needs people who can laugh at dad jokes without becoming their entire personality."
    },
    high: {
      type: "Full Dad Energy",
      description: "You've got it. The dad joke gene is STRONG. Puns flow from you like water. You see setups everywhere and you MUST deliver the punchline. The groans fuel you. You don't need children to be a dad - you were born for this.",
      traits: ["Natural punster", "Groan collector", "Setup spotter", "Proudly corny"],
      advice: "Embrace your gift. Your dad jokes bring a specific joy to the world - the joy of collective groaning. Just read the room occasionally. Not every moment needs a pun. But most moments? They do."
    },
    maximum: {
      type: "Maximum Dad Levels",
      description: "You're not just dad joke energy - you ARE a dad joke. You've transcended. Your brain runs on puns. People see you coming and prepare their groan faces. You've probably made a joke so bad that someone literally walked away from you. This is your legacy. Own it.",
      traits: ["Terminal punner", "Cannot be stopped", "The groans are life force", "Legendary corny"],
      advice: "You've reached the peak. There's nowhere else to go but... wait for it... DOWN (that's a stairway pun, you get it). Keep being aggressively corny. The world needs people who don't care about being cool. You are a gift."
    }
  }
};
