// Your Airplane Behavior - Fun viral test

export const testData = {
  id: "fun-airplane-behavior",
  title: "Your Airplane Behavior",
  description: "35,000 feet in the air reveals who you really are. Are you a dream seatmate or a flying nightmare?",
  questions: [
    {
      id: 1,
      text: "The armrest situation. What's your stance?",
      options: [
        { text: "Middle seat gets both armrests - I don't make the rules", type: "angel" },
        { text: "First come, first served. I'll take what I can get", type: "normal" },
        { text: "I paid for this seat, I'm using MY armrest", type: "menace" },
        { text: "I spread out and see what I can claim", type: "chaos" }
      ]
    },
    {
      id: 2,
      text: "You need to use the bathroom but the person next to you is asleep. You:",
      options: [
        { text: "Hold it until they wake up naturally", type: "angel" },
        { text: "Gently tap them and apologize profusely", type: "normal" },
        { text: "Climb over them like a ninja", type: "chaos" },
        { text: "Loudly announce 'EXCUSE ME' until they move", type: "menace" }
      ]
    },
    {
      id: 3,
      text: "Your in-flight entertainment strategy:",
      options: [
        { text: "Headphones in, watching movies at reasonable volume", type: "normal" },
        { text: "Bring my own entertainment, don't need the screen", type: "angel" },
        { text: "Watch whatever I want without headphones - it's fine, right?", type: "menace" },
        { text: "Fall asleep and snore through 4 hours", type: "chaos" }
      ]
    },
    {
      id: 4,
      text: "The seat in front of you reclines into your space. You:",
      options: [
        { text: "It's their right. I adjust my tray table and deal", type: "angel" },
        { text: "Sigh internally but say nothing", type: "normal" },
        { text: "Aggressively push my knees into their seat", type: "menace" },
        { text: "Recline mine immediately in revenge domino effect", type: "chaos" }
      ]
    },
    {
      id: 5,
      text: "How do you handle the overhead bin?",
      options: [
        { text: "Put my bag above my seat, help others if needed", type: "angel" },
        { text: "Find space near my seat, adjust as needed", type: "normal" },
        { text: "Board early and claim prime real estate wherever", type: "menace" },
        { text: "Gate-check? What's that? *shoves oversized bag*", type: "chaos" }
      ]
    },
    {
      id: 6,
      text: "The drink cart is coming. Your approach:",
      options: [
        { text: "Wait patiently, order quickly, say thank you", type: "angel" },
        { text: "Have my order ready, normal transaction", type: "normal" },
        { text: "Order 3 drinks and ask for extra snacks", type: "chaos" },
        { text: "Complain about the selection and ask for substitutions", type: "menace" }
      ]
    },
    {
      id: 7,
      text: "Turbulence hits. Your reaction:",
      options: [
        { text: "Stay calm, seatbelt on, trust the pilots", type: "angel" },
        { text: "Grip the armrest and pretend I'm fine", type: "normal" },
        { text: "Dramatic gasps and grabbing strangers", type: "chaos" },
        { text: "Demand information from the flight attendants", type: "menace" }
      ]
    },
    {
      id: 8,
      text: "The plane lands. The seatbelt sign is still on. You:",
      options: [
        { text: "Stay seated until it's off, then wait my turn", type: "angel" },
        { text: "Stand up as soon as we stop, but wait in place", type: "normal" },
        { text: "Already in the aisle with my bag before we stop", type: "menace" },
        { text: "Somehow already have all my things and am 5 rows ahead", type: "chaos" }
      ]
    },
    {
      id: 9,
      text: "You're in the window seat and it's a beautiful view. You:",
      options: [
        { text: "Look when I want, close shade when others are sleeping", type: "angel" },
        { text: "Keep it open most of the time, it's the window seat perk", type: "normal" },
        { text: "Shade stays open THE ENTIRE FLIGHT", type: "menace" },
        { text: "Open it just to take 47 blurry photos of clouds", type: "chaos" }
      ]
    },
    {
      id: 10,
      text: "A baby is crying on the flight. Your internal reaction:",
      options: [
        { text: "Poor parents, poor baby. I have headphones, it's fine", type: "angel" },
        { text: "Annoying but unavoidable. Life happens", type: "normal" },
        { text: "Visible frustration and dramatic sighing", type: "menace" },
        { text: "Start a conversation with the baby to help", type: "chaos" }
      ]
    }
  ],
  results: {
    angel: {
      type: "Flight Angel",
      description: "You're the passenger flight attendants write thank-you notes about. Considerate, calm, and radiating main character energy without being annoying. You probably let people merge in traffic too. The world doesn't deserve you, but the skies are better because you fly.",
      traits: ["Considerate", "Patient", "Self-aware", "Kind"],
      advice: "Keep being amazing. Maybe teach a masterclass on basic human decency at 35,000 feet? The world needs more of you."
    },
    normal: {
      type: "Regular Flyer",
      description: "You're perfectly normal! Not a hero, not a villain - just a person trying to get from A to B without incident. You follow the unwritten rules of flying and only slightly judge those who don't. You're the reasonable majority keeping air travel civilized.",
      traits: ["Reasonable", "Adaptive", "Neutral", "Balanced"],
      advice: "You're doing fine! Maybe level up to Flight Angel by helping a stressed parent or letting someone go ahead of you in the bathroom line."
    },
    menace: {
      type: "Sky Menace",
      description: "Somewhere, a flight attendant is telling their friends about you. You're not breaking rules exactly... but you're definitely bending the social contract. Your comfort comes first, and you've mastered the art of plausible deniability. Bold strategy.",
      traits: ["Self-focused", "Assertive", "Unapologetic", "Territorial"],
      advice: "Consider: what if everyone acted like you? Now imagine that flight. Exactly. Maybe dial it back 20% and discover the joy of not being glared at."
    },
    chaos: {
      type: "Chaos Agent",
      description: "You don't mean to cause problems, but problems seem to find you at cruising altitude. You're the wild card of the skies - sometimes helpful, sometimes confusing, always memorable. Flight attendants share your stories in hushed tones.",
      traits: ["Unpredictable", "Eccentric", "Memorable", "Unintentional"],
      advice: "Your heart's in the right place, but maybe read the room (or cabin) a bit more? That said, never lose your spark. You make flights interesting."
    }
  }
};
