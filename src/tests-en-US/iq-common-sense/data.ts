// How Much Common Sense Do You Have? - Viral IQ test for American English users

export const testData = {
  id: "iq-common-sense",
  title: "How Much Common Sense Do You Have?",
  description: "Book smarts are one thing, but do you have the practical wisdom to navigate everyday life? Find out!",
  questions: [
    {
      id: 1,
      text: "Your phone falls in water. First thing you do?",
      options: [
        { text: "Turn it off immediately and don't plug it in", type: "wise" },
        { text: "Put it in rice right away", type: "practical" },
        { text: "Try to turn it on to see if it still works", type: "unwise" },
        { text: "Use a hair dryer on high heat", type: "unwise" }
      ]
    },
    {
      id: 2,
      text: "You're cooking and a grease fire starts in the pan. You should:",
      options: [
        { text: "Cover it with a lid or use baking soda - never water", type: "wise" },
        { text: "Throw water on it immediately", type: "unwise" },
        { text: "Move the pan outside quickly", type: "unwise" },
        { text: "Blow on it to put it out", type: "unwise" }
      ]
    },
    {
      id: 3,
      text: "A stranger online wants your help moving money for a big reward. You:",
      options: [
        { text: "Recognize this as an obvious scam", type: "wise" },
        { text: "Ask them for more details first", type: "practical" },
        { text: "Consider it if they seem legitimate", type: "unwise" },
        { text: "This could be my lucky day!", type: "unwise" }
      ]
    },
    {
      id: 4,
      text: "You're lost in an unfamiliar area late at night. Best move?",
      options: [
        { text: "Find a well-lit public place and figure out directions safely", type: "wise" },
        { text: "Ask the first person you see for help", type: "practical" },
        { text: "Keep walking until something looks familiar", type: "unwise" },
        { text: "Take a shortcut through the dark alley", type: "unwise" }
      ]
    },
    {
      id: 5,
      text: "Your car starts making a weird noise. You:",
      options: [
        { text: "Get it checked out soon before it becomes a bigger problem", type: "wise" },
        { text: "Turn up the radio and hope it goes away", type: "unwise" },
        { text: "Keep driving until something actually breaks", type: "unwise" },
        { text: "Check online for what it might be, then decide", type: "practical" }
      ]
    },
    {
      id: 6,
      text: "Someone's bleeding badly from a cut. While waiting for help, you should:",
      options: [
        { text: "Apply firm pressure with a clean cloth", type: "wise" },
        { text: "Put the wound under cold water", type: "practical" },
        { text: "Leave it uncovered so it can 'breathe'", type: "unwise" },
        { text: "Put butter or toothpaste on it", type: "unwise" }
      ]
    },
    {
      id: 7,
      text: "You're offered a deal that sounds too good to be true. Your reaction:",
      options: [
        { text: "If it sounds too good to be true, it probably is", type: "wise" },
        { text: "Research it thoroughly before committing", type: "practical" },
        { text: "Jump on it before the opportunity disappears", type: "unwise" },
        { text: "Just a little suspicious but mostly excited", type: "unwise" }
      ]
    },
    {
      id: 8,
      text: "You smell gas in your house. The smart move is to:",
      options: [
        { text: "Leave immediately, don't flip switches, call from outside", type: "wise" },
        { text: "Open all windows and investigate the source", type: "practical" },
        { text: "Light a candle to see better", type: "unwise" },
        { text: "Ignore it, it's probably nothing", type: "unwise" }
      ]
    },
    {
      id: 9,
      text: "A friend asks to 'borrow' your credit card info. You:",
      options: [
        { text: "Say no - even for friends, this is a bad idea", type: "wise" },
        { text: "Help them find a different solution", type: "practical" },
        { text: "Share it if I really trust them", type: "unwise" },
        { text: "Sure, what could go wrong?", type: "unwise" }
      ]
    },
    {
      id: 10,
      text: "You've been awake for 20+ hours but need to drive somewhere. You:",
      options: [
        { text: "Don't drive - drowsy driving is as dangerous as drunk driving", type: "wise" },
        { text: "Drink coffee and roll down the windows", type: "unwise" },
        { text: "Power through, it's just a short drive", type: "unwise" },
        { text: "Take a quick nap first, even if it delays me", type: "practical" }
      ]
    }
  ],
  results: {
    wise: {
      type: "Common Sense Champion",
      description: "You're the person everyone should call in a crisis! Your practical wisdom and street smarts are exceptional. You make smart decisions quickly, avoid obvious traps, and generally navigate life with impressive practical intelligence. This kind of wisdom can't be learned from books!",
      traits: ["Quick practical judgment", "Safety-conscious", "Scam-resistant", "Crisis-capable"],
      advice: "Your common sense is a gift! Help others learn from your practical wisdom - many people lack these instincts."
    },
    practical: {
      type: "Sensible Soul",
      description: "You've got good practical sense! While you might not always make the perfect choice instantly, you generally approach situations sensibly and avoid major pitfalls. You think before acting and learn from your experiences.",
      traits: ["Thoughtful approach", "Generally cautious", "Learns from mistakes", "Reasonable judgment"],
      advice: "Your practical instincts are solid! Trust them more often and you'll develop even stronger common sense."
    },
    average: {
      type: "Room for Wisdom",
      description: "Your common sense is hit or miss - sometimes you make great calls, sometimes you miss obvious red flags. This is actually pretty normal! Life experience tends to sharpen these instincts over time.",
      traits: ["Inconsistent judgment", "Still learning", "Some blind spots", "Developing wisdom"],
      advice: "Pay attention to when things go wrong and ask 'what should I have noticed?' This builds better instincts over time!"
    },
    unwise: {
      type: "Book Smart, Street Naive",
      description: "You might be brilliant in many ways, but practical wisdom isn't your strong suit! You're vulnerable to scams, might make impulsive decisions, and sometimes ignore common safety knowledge. The good news? Common sense can definitely be learned!",
      traits: ["Naive to dangers", "Optimistic to a fault", "Impulsive decisions", "Needs more caution"],
      advice: "Before big decisions, ask: 'What could go wrong?' and 'What would a skeptic say?' This pause can save you from many mistakes!"
    }
  }
};
