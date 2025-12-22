// Your Coffee Addiction Level - Viral food test for American English users

export const testData = {
  id: "food-coffee-addiction",
  title: "Your Coffee Addiction Level",
  description: "Casual sipper or 'don't talk to me before coffee' energy? Let's measure!",
  questions: [
    {
      id: 1,
      text: "First thing you do when you wake up:",
      options: [
        { text: "Coffee. Before anything else. Autopilot to the machine", type: "addict" },
        { text: "Coffee is in my morning routine, definitely important", type: "dependent" },
        { text: "I enjoy coffee but don't NEED it immediately", type: "casual" },
        { text: "I could take or leave coffee honestly", type: "free" }
      ]
    },
    {
      id: 2,
      text: "Your daily coffee consumption:",
      options: [
        { text: "Lost count. Multiple cups throughout the day", type: "addict" },
        { text: "2-3 cups, pretty consistent habit", type: "dependent" },
        { text: "1 cup, maybe 2 on a rough day", type: "casual" },
        { text: "A few times a week at most", type: "free" }
      ]
    },
    {
      id: 3,
      text: "You haven't had coffee yet today. You're:",
      options: [
        { text: "Headache. Foggy. Useless. Don't speak to me", type: "addict" },
        { text: "A bit slow but I'll survive until I get some", type: "dependent" },
        { text: "Fine, might get one later if I want", type: "casual" },
        { text: "Don't even notice. It's not a requirement", type: "free" }
      ]
    },
    {
      id: 4,
      text: "Your coffee order:",
      options: [
        { text: "Strong. Black or minimal additions. Maximum caffeine", type: "addict" },
        { text: "My regular - I have a go-to that works", type: "dependent" },
        { text: "Varies - whatever sounds good today", type: "casual" },
        { text: "Whatever, or tea, or nothing. Flexible", type: "free" }
      ]
    },
    {
      id: 5,
      text: "The coffee machine at work breaks. Your reaction:",
      options: [
        { text: "EMERGENCY. I'm going to find coffee immediately", type: "addict" },
        { text: "Annoying, I'll have to get some elsewhere", type: "dependent" },
        { text: "Mildly inconvenient. I'll manage", type: "casual" },
        { text: "Oh, okay. Anyway...", type: "free" }
      ]
    },
    {
      id: 6,
      text: "Your relationship with afternoon coffee:",
      options: [
        { text: "Essential for surviving the day. 3pm cup is sacred", type: "addict" },
        { text: "Sometimes need a pick-me-up, depends on the day", type: "dependent" },
        { text: "Rarely - I don't want it affecting my sleep", type: "casual" },
        { text: "Not really something I think about", type: "free" }
      ]
    },
    {
      id: 7,
      text: "Someone suggests you cut back on coffee:",
      options: [
        { text: "I feel personally attacked and will not be doing that", type: "addict" },
        { text: "I've considered it... haven't done it though", type: "dependent" },
        { text: "I could easily, it's not a big deal", type: "casual" },
        { text: "Cut back from what? I barely drink it", type: "free" }
      ]
    },
    {
      id: 8,
      text: "Coffee spending habits:",
      options: [
        { text: "Don't ask. It's a necessary expense. No judgment", type: "addict" },
        { text: "Reasonable budget, mix of home and cafe", type: "dependent" },
        { text: "Occasional treat, mostly home-made if I want it", type: "casual" },
        { text: "Minimal - not a major expense for me", type: "free" }
      ]
    },
    {
      id: 9,
      text: "How do you feel about decaf?",
      options: [
        { text: "What's the POINT? Offensive suggestion", type: "addict" },
        { text: "For evening maybe, but morning needs the real stuff", type: "dependent" },
        { text: "Fine actually, I enjoy the taste even without caffeine", type: "casual" },
        { text: "Same as regular to me. It's all coffee", type: "free" }
      ]
    },
    {
      id: 10,
      text: "Your friends would describe your coffee relationship as:",
      options: [
        { text: "Concerning but consistent. They know not to interrupt", type: "addict" },
        { text: "A reliable habit. Part of who I am", type: "dependent" },
        { text: "Normal. I like coffee, who doesn't?", type: "casual" },
        { text: "Non-essential. I'm not defined by coffee", type: "free" }
      ]
    }
  ],
  results: {
    addict: {
      type: "Clinically Caffeine-Dependent",
      description: "You don't just drink coffee, you REQUIRE it to function as a human being. Without it, you're a husk of a person with a headache and zero patience. Your relationship with coffee is less 'habit' and more 'medical necessity.' The baristas know your order. Your blood is part espresso.",
      traits: ["Dependent", "High-tolerance", "Non-functional without it", "Coffee-motivated"],
      advice: "Your addiction is... impressive? But maybe check in with your body occasionally. Caffeine tolerance builds and you might be chasing a high that needs more and more. Or just embrace it. Coffee has antioxidants. Probably fine."
    },
    dependent: {
      type: "Comfortably Caffeinated",
      description: "You have a solid coffee habit - it's part of your routine, you'd notice if it was missing, and you enjoy it consistently. You're not DYING without it, but you're definitely better with it. A healthy-ish dependence, as these things go.",
      traits: ["Habitual", "Consistent", "Routine-based", "Comfortable"],
      advice: "Your coffee relationship seems balanced! You could probably cut back if you wanted to, but why would you? Enjoy your routine. Maybe try switching to half-caf occasionally to prove you can."
    },
    casual: {
      type: "The Casual Sipper",
      description: "Coffee is nice! But it's not running your life. You enjoy it when you want it, skip it when you don't, and you've never had caffeine withdrawal. You're the healthy, balanced coffee drinker that health articles describe. Boring, but healthy.",
      traits: ["Balanced", "Flexible", "No-dependence", "Take-it-or-leave-it"],
      advice: "Your casual relationship with coffee is enviable! You can enjoy it without needing it. Keep this balance - you're the control group in the coffee addiction study."
    },
    free: {
      type: "Caffeine-Free Living",
      description: "Coffee? You can take it or leave it - mostly leave it. You exist without caffeine dependence and honestly, you don't see what all the fuss is about. You're either very disciplined or your body just doesn't respond to caffeine like others. Either way, unicorn status.",
      traits: ["Independent", "Non-dependent", "Free", "Rare"],
      advice: "Living without coffee dependence is rare and valuable! Keep doing whatever natural energy thing works for you. But maybe try a really good coffee sometime - just to understand what everyone is on about."
    }
  }
};
