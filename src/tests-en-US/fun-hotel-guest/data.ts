// What Kind of Hotel Guest Are You? - Fun viral test

export const testData = {
  id: "fun-hotel-guest",
  title: "What Kind of Hotel Guest Are You?",
  description: "Your hotel behavior says a lot about you. Are you a dream guest or the housekeeping staff's nightmare?",
  questions: [
    {
      id: 1,
      text: "Check-in time is 3 PM. You arrive at 11 AM. You:",
      options: [
        { text: "Ask nicely if early check-in is possible, accept either answer", type: "respectful" },
        { text: "Leave luggage, explore the area, come back at 3", type: "explorer" },
        { text: "Wait in the lobby until 3 PM, the room will be perfect", type: "maximizer" },
        { text: "Demand an earlier time - I'm paying for this room!", type: "difficult" }
      ]
    },
    {
      id: 2,
      text: "The hotel breakfast buffet. Your approach:",
      options: [
        { text: "Take reasonable portions, maybe go back for seconds", type: "respectful" },
        { text: "Skip it - I want to explore local breakfast spots", type: "explorer" },
        { text: "Get my money's worth. Multiple plates. Strategy required", type: "maximizer" },
        { text: "Complain about selection while still eating everything", type: "difficult" }
      ]
    },
    {
      id: 3,
      text: "Your use of hotel toiletries and amenities:",
      options: [
        { text: "Use what I need, leave what I don't", type: "respectful" },
        { text: "Barely use them - I brought my own favorites", type: "explorer" },
        { text: "Take everything. ALL the tiny shampoos. It's included!", type: "maximizer" },
        { text: "Demand better brands than what's provided", type: "difficult" }
      ]
    },
    {
      id: 4,
      text: "Something in your room isn't quite right (minor issue). You:",
      options: [
        { text: "Call front desk, politely explain, accept their solution", type: "respectful" },
        { text: "Work around it - I'm barely in the room anyway", type: "explorer" },
        { text: "Document everything. Request compensation or upgrade", type: "maximizer" },
        { text: "March to the front desk and cause a scene", type: "difficult" }
      ]
    },
    {
      id: 5,
      text: "The 'Do Not Disturb' sign:",
      options: [
        { text: "Use it thoughtfully when I need privacy", type: "respectful" },
        { text: "Always up - I'm never in the room anyway", type: "explorer" },
        { text: "Up permanently. No housekeeping means more privacy AND I can request extra towels", type: "maximizer" },
        { text: "Call to complain when housekeeping ignores it", type: "difficult" }
      ]
    },
    {
      id: 6,
      text: "Your room when you check out:",
      options: [
        { text: "Reasonably tidy - trash gathered, towels in one spot", type: "respectful" },
        { text: "Basically untouched - I used it just for sleeping", type: "explorer" },
        { text: "Every amenity used, every service requested", type: "maximizer" },
        { text: "That's housekeeping's job, why would I clean?", type: "difficult" }
      ]
    },
    {
      id: 7,
      text: "The hotel pool/gym/amenities:",
      options: [
        { text: "Use them if convenient, follow the rules", type: "respectful" },
        { text: "Rarely use - too busy exploring outside", type: "explorer" },
        { text: "Use EVERYTHING. Gym, pool, business center, spa samples", type: "maximizer" },
        { text: "Complain about quality while using them daily", type: "difficult" }
      ]
    },
    {
      id: 8,
      text: "You want a late checkout. Your approach:",
      options: [
        { text: "Ask politely at check-in if it's possible", type: "respectful" },
        { text: "Don't need it - I'm out exploring by 7 AM", type: "explorer" },
        { text: "Push for maximum extension, use loyalty status if applicable", type: "maximizer" },
        { text: "Act shocked when they can't guarantee it", type: "difficult" }
      ]
    },
    {
      id: 9,
      text: "The minibar situation:",
      options: [
        { text: "Look but don't touch - those prices are criminal", type: "respectful" },
        { text: "Ignore it - I'm eating and drinking elsewhere", type: "explorer" },
        { text: "Empty it to make room for my own snacks from outside", type: "maximizer" },
        { text: "Eat items and dispute the charges later", type: "difficult" }
      ]
    },
    {
      id: 10,
      text: "Tipping housekeeping/hotel staff:",
      options: [
        { text: "Always tip housekeeping and helpful staff", type: "respectful" },
        { text: "Tip when I've actually used services", type: "explorer" },
        { text: "I already paid for the room, that covers it", type: "maximizer" },
        { text: "Why would I tip for service I'm entitled to?", type: "difficult" }
      ]
    }
  ],
  results: {
    respectful: {
      type: "The Dream Guest",
      description: "Hotel staff love you. You're polite, reasonable, and treat people like actual humans. You follow the rules, tip appropriately, and leave rooms in decent condition. You understand that hotels are someone's workplace. You probably leave positive reviews too. Bless you.",
      traits: ["Considerate", "Polite", "Reasonable", "Appreciative"],
      advice: "Keep being wonderful! Your respect for service workers doesn't go unnoticed. If you want upgrades, just politely ask - people like you tend to get them because staff actually want to help you."
    },
    explorer: {
      type: "The Adventure Seeker",
      description: "The hotel is just where you sleep - if that. You're out experiencing the destination from dawn until you collapse. Room service? Never heard of it. You've missed breakfast every day. Your room looks barely used because it IS barely used. Hotels are rest stops on your adventure.",
      traits: ["Adventurous", "Independent", "Minimal", "Curious"],
      advice: "Your travel style is efficient! But maybe use the hotel amenities once in a while - you're paying for them. A lazy morning at a hotel pool can be its own kind of adventure. Balance exploration with rest."
    },
    maximizer: {
      type: "The Value Maximizer",
      description: "You're getting EVERY dollar's worth out of this hotel stay. Buffet strategy planned, amenities all used, toiletries all taken home. You're not cheap - you're STRATEGIC. That room rate includes services, and you're using ALL of them. Loyalty points? You've calculated the optimal earning strategy.",
      traits: ["Strategic", "Thrifty", "Thorough", "Calculated"],
      advice: "Your optimization is impressive, but hotels remember guests. Being overly demanding can backfire on future stays. Sometimes leaving a little on the table creates goodwill that pays off later. Balance maximizing with being a pleasant guest."
    },
    difficult: {
      type: "The Challenging Guest",
      description: "There's a note about you at the front desk, and it's not a good one. You've demanded, complained, and escalated your way through hotel stays. Nothing ever meets your standards, and everyone knows it. Staff draw straws to avoid dealing with you. The manager has you memorized.",
      traits: ["Demanding", "Difficult", "Entitled", "Memorable"],
      advice: "Real talk: the energy you're spending on conflict rarely improves your experience. Try being nice first - you might be shocked how well hotels treat pleasant guests. Demanding treatment usually results in worse service, not better. Kindness is actually more effective."
    }
  }
};
