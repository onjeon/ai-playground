// How Do You Act in Lines? - Fun viral test

export const testData = {
  id: "fun-queue-behavior",
  title: "How Do You Act in Lines?",
  description: "Your queue behavior reveals your true personality. Are you a patient waiter or a line vigilante?",
  questions: [
    {
      id: 1,
      text: "You're in a long line. Your natural state is:",
      options: [
        { text: "Phone out, catching up on content, zen mode", type: "zen" },
        { text: "Mentally calculating wait times and optimizing position", type: "strategist" },
        { text: "Anxious, checking the time, sighing audibly", type: "impatient" },
        { text: "Chatting with the person next to me", type: "social" }
      ]
    },
    {
      id: 2,
      text: "Someone cuts in line. Your reaction:",
      options: [
        { text: "Politely but firmly point out that there's a line", type: "strategist" },
        { text: "Silently stew, fantasize about saying something", type: "impatient" },
        { text: "Whatever, it's not worth the conflict", type: "zen" },
        { text: "Turn to the person next to me: 'Can you believe that?'", type: "social" }
      ]
    },
    {
      id: 3,
      text: "You realize you're in the slow line/wrong queue. You:",
      options: [
        { text: "Stay - switching might make it worse", type: "zen" },
        { text: "Analyze all lines and strategically relocate", type: "strategist" },
        { text: "Immediately switch. Any action is better than waiting", type: "impatient" },
        { text: "Ask the person next to me their opinion", type: "social" }
      ]
    },
    {
      id: 4,
      text: "The line hasn't moved in 5 minutes. You:",
      options: [
        { text: "It's fine. Lines move when they move", type: "zen" },
        { text: "Try to see what's causing the delay", type: "strategist" },
        { text: "Consider leaving. This is ridiculous", type: "impatient" },
        { text: "Start a conversation about the shared suffering", type: "social" }
      ]
    },
    {
      id: 5,
      text: "A new register/line opens. You:",
      options: [
        { text: "Let others go - I'm fine where I am", type: "zen" },
        { text: "Already calculated this possibility and positioned accordingly", type: "strategist" },
        { text: "SPRINT. First come, first served", type: "impatient" },
        { text: "Organize who should go based on original position", type: "social" }
      ]
    },
    {
      id: 6,
      text: "You're almost at the front when someone asks to cut because they're in a hurry. You:",
      options: [
        { text: "Let them - it's not a big deal in the grand scheme", type: "zen" },
        { text: "Politely decline - everyone's time is valuable", type: "strategist" },
        { text: "Absolutely not. I waited, they can too", type: "impatient" },
        { text: "Ask the people behind me if they're okay with it", type: "social" }
      ]
    },
    {
      id: 7,
      text: "Your preferred way to pass time in line:",
      options: [
        { text: "Phone, music, podcast - in my own world", type: "zen" },
        { text: "People-watching and line dynamics analysis", type: "strategist" },
        { text: "Checking how fast the line is moving every 30 seconds", type: "impatient" },
        { text: "Making small talk with fellow line-waiters", type: "social" }
      ]
    },
    {
      id: 8,
      text: "You're waiting in line and someone behind you is complaining loudly. You:",
      options: [
        { text: "Ignore them completely - not my problem", type: "zen" },
        { text: "Agree silently but stay focused on my position", type: "strategist" },
        { text: "Feel validated - this IS ridiculous!", type: "impatient" },
        { text: "Turn around and engage with their frustration", type: "social" }
      ]
    },
    {
      id: 9,
      text: "There's no clear line, just a crowd. You:",
      options: [
        { text: "Find a spot and wait my turn peacefully", type: "zen" },
        { text: "Position myself strategically near where service happens", type: "strategist" },
        { text: "Aggressively work my way forward. Chaos is opportunity", type: "impatient" },
        { text: "Start coordinating: 'Who was here first?'", type: "social" }
      ]
    },
    {
      id: 10,
      text: "Your philosophy on waiting in lines:",
      options: [
        { text: "It's part of life. Accept it, bring entertainment", type: "zen" },
        { text: "Lines can be optimized - choose wisely, position well", type: "strategist" },
        { text: "Every second waiting is a second wasted", type: "impatient" },
        { text: "Lines are just opportunities to meet people", type: "social" }
      ]
    }
  ],
  results: {
    zen: {
      type: "The Zen Waiter",
      description: "Lines don't bother you because nothing really bothers you. You've achieved a level of patience that others envy. Phone ready, attitude calm, fully prepared to wait as long as necessary. You're basically meditating while everyone else stresses. Line cutting? Not your problem. Your peace is unshakeable.",
      traits: ["Patient", "Calm", "Unbothered", "Self-sufficient"],
      advice: "Your zen is admirable! Just make sure 'peaceful' doesn't become 'pushover.' It's okay to speak up when someone genuinely wrongs you or the line. Being calm doesn't mean being invisible."
    },
    strategist: {
      type: "The Line Strategist",
      description: "You've turned waiting in line into a competitive sport. Which line is moving fastest? Which cashier is most efficient? Where's the optimal position for when a new register opens? You see patterns, you calculate odds, and you almost always end up in a good spot. Your brain never rests.",
      traits: ["Analytical", "Strategic", "Observant", "Competitive"],
      advice: "Your optimization is impressive but exhausting. Sometimes just... wait. Not every line needs to be beaten. Save your mental energy for problems that actually matter. The extra 2 minutes rarely changes your life."
    },
    impatient: {
      type: "The Antsy Waiter",
      description: "Lines are your nemesis. Every second feels like an hour, every pause is a personal offense. You check your phone, check the line, check your phone again. Why is this taking so long? WHY? You're not proud of it, but waiting genuinely challenges your soul.",
      traits: ["Impatient", "Restless", "Time-conscious", "Frustrated"],
      advice: "Deep breaths! Time spent in line is still time you exist, and stress doesn't make lines move faster. Download a good podcast, practice mindfulness, or accept that some things can't be rushed. Your blood pressure will thank you."
    },
    social: {
      type: "The Line Socializer",
      description: "Lines aren't waiting - they're networking opportunities! You'll chat with strangers, organize confused crowds, and leave having made a temporary friend. You turn shared suffering into shared experience. By the time you reach the front, everyone around you knows your name.",
      traits: ["Social", "Friendly", "Organizing", "Connector"],
      advice: "Your friendliness is a gift! Just read the room - not everyone wants to chat while waiting, and that's okay. Some people's headphones are there for a reason. Keep being social, but respect the zen waiters too."
    }
  }
};
