// What Mythical Creature Are You? - Viral quirky test for American English users

export const testData = {
  id: "quirky-mythical-creature",
  title: "What Mythical Creature Are You?",
  description: "Dragons, unicorns, phoenixes, or something else? Find your mythical match!",
  questions: [
    {
      id: 1,
      text: "Your core personality trait:",
      options: [
        { text: "Fierce and powerful - I'm not to be messed with", type: "dragon" },
        { text: "Magical and rare - there's something special about me", type: "unicorn" },
        { text: "Transformative - I keep rising from hard times", type: "phoenix" },
        { text: "Wise and observant - I see what others miss", type: "griffin" }
      ]
    },
    {
      id: 2,
      text: "How do you handle conflict?",
      options: [
        { text: "Face it head-on with full force", type: "dragon" },
        { text: "Rise above it - not worth my pure energy", type: "unicorn" },
        { text: "Let it burn me and come back stronger", type: "phoenix" },
        { text: "Strategically assess before acting", type: "griffin" }
      ]
    },
    {
      id: 3,
      text: "Your ideal habitat:",
      options: [
        { text: "A fortress where I guard what's mine", type: "dragon" },
        { text: "An enchanted forest or magical space", type: "unicorn" },
        { text: "Somewhere warm where I can be reborn", type: "phoenix" },
        { text: "A high place where I can see everything", type: "griffin" }
      ]
    },
    {
      id: 4,
      text: "People are drawn to you because:",
      options: [
        { text: "My power and intensity are magnetic", type: "dragon" },
        { text: "I'm rare and there's something magical about me", type: "unicorn" },
        { text: "My ability to transform and inspire", type: "phoenix" },
        { text: "My wisdom and unique perspective", type: "griffin" }
      ]
    },
    {
      id: 5,
      text: "Your biggest weakness:",
      options: [
        { text: "My temper and territorial nature", type: "dragon" },
        { text: "Being too trusting of good intentions", type: "unicorn" },
        { text: "Burning too bright and burning out", type: "phoenix" },
        { text: "Being too watchful and not participating", type: "griffin" }
      ]
    },
    {
      id: 6,
      text: "Your superpower would be:",
      options: [
        { text: "Breathing fire - destruction and creation", type: "dragon" },
        { text: "Healing and purifying energy", type: "unicorn" },
        { text: "Rebirth - dying and being reborn", type: "phoenix" },
        { text: "Flight and enhanced vision - seeing all", type: "griffin" }
      ]
    },
    {
      id: 7,
      text: "What you guard most fiercely:",
      options: [
        { text: "My treasures - things I've collected and earned", type: "dragon" },
        { text: "My purity - my values and innocence", type: "unicorn" },
        { text: "My ability to transform - my resilience", type: "phoenix" },
        { text: "My knowledge - what I've learned and seen", type: "griffin" }
      ]
    },
    {
      id: 8,
      text: "When threatened, you:",
      options: [
        { text: "Attack with everything I have", type: "dragon" },
        { text: "Flee to preserve my energy for worthy battles", type: "unicorn" },
        { text: "Let it happen knowing I'll rise again", type: "phoenix" },
        { text: "Observe and plan my response carefully", type: "griffin" }
      ]
    },
    {
      id: 9,
      text: "Your relationship with others:",
      options: [
        { text: "Respected and feared in equal measure", type: "dragon" },
        { text: "Beloved by the pure, avoided by the corrupt", type: "unicorn" },
        { text: "Inspiring to those who've faced hard times", type: "phoenix" },
        { text: "Sought for wisdom but somewhat distant", type: "griffin" }
      ]
    },
    {
      id: 10,
      text: "Your mythical energy attracts:",
      options: [
        { text: "Those who want protection or power", type: "dragon" },
        { text: "Those who believe in magic and purity", type: "unicorn" },
        { text: "Those in transformation who need hope", type: "phoenix" },
        { text: "Those seeking wisdom and truth", type: "griffin" }
      ]
    }
  ],
  results: {
    dragon: {
      type: "Dragon",
      description: "You're a DRAGON - powerful, fierce, and territorial. You guard what's yours, command respect, and aren't afraid to breathe fire when needed. Your intensity can be intimidating, but those in your inner circle know you're fiercely loyal. You don't do anything small.",
      traits: ["Powerful", "Protective", "Intense", "Commanding"],
      advice: "Your dragon energy is impressive but can burn others. Learn when to breathe fire and when to keep it in. Not every slight requires full destruction. Your treasure isn't just physical - protect relationships too."
    },
    unicorn: {
      type: "Unicorn",
      description: "You're a UNICORN - rare, magical, and pure. There's something special about you that draws people in. You believe in good, you heal what you touch, and you maintain your values even when the world is dark. You're not naive - you're choosing light.",
      traits: ["Magical", "Pure-hearted", "Rare", "Healing"],
      advice: "Your unicorn energy is beautiful but can be isolating. Not everyone deserves your light, but don't hide it entirely. The world needs your magic. Just make sure you're not being hunted for what you offer - protect yourself too."
    },
    phoenix: {
      type: "Phoenix",
      description: "You're a PHOENIX - constantly transforming through fire and rising from ashes. You've been through things that would destroy others and you came back. Reinvention is your nature. Every ending is a beginning for you. You know that destruction precedes creation.",
      traits: ["Resilient", "Transformative", "Reborn", "Inspiring"],
      advice: "Your phoenix energy means you're no stranger to hard times, but don't romanticize the burning. Not everything needs to be destroyed to grow. Sometimes you can evolve without immolation. Save the rebirth energy for when you truly need it."
    },
    griffin: {
      type: "Griffin",
      description: "You're a GRIFFIN - wise, watchful, and majestic. Part eagle, part lion - you combine vision with strength. You see what others miss from your high perspective. People come to you for wisdom, though you can seem distant. You guard treasures of knowledge.",
      traits: ["Wise", "Observant", "Noble", "Guardian of knowledge"],
      advice: "Your griffin energy gives you perspective others lack, but don't stay in the sky forever. Come down and participate in the messiness of life. Your wisdom is most valuable when shared, not hoarded. Connection requires proximity."
    }
  }
};
