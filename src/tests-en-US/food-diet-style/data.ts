// Your Diet Personality - Viral food test for American English users

export const testData = {
  id: "food-diet-style",
  title: "Your Diet Personality",
  description: "Strict tracker or 'I eat what I want' energy? What's your food philosophy?",
  questions: [
    {
      id: 1,
      text: "Your relationship with tracking food/calories:",
      options: [
        { text: "I track everything - MyFitnessPal is my companion", type: "tracker" },
        { text: "General awareness but not obsessive logging", type: "mindful" },
        { text: "Nah, I eat intuitively based on hunger", type: "intuitive" },
        { text: "Track? I eat what I want when I want", type: "free" }
      ]
    },
    {
      id: 2,
      text: "How do you approach 'unhealthy' foods?",
      options: [
        { text: "Budget them into my plan strategically", type: "tracker" },
        { text: "Enjoy occasionally without guilt, balance matters", type: "mindful" },
        { text: "My body tells me what it needs, including treats", type: "intuitive" },
        { text: "No food is unhealthy, just delicious", type: "free" }
      ]
    },
    {
      id: 3,
      text: "Someone offers you unexpected cake at work:",
      options: [
        { text: "Check if it fits my macros. Maybe a small piece", type: "tracker" },
        { text: "Sure! Special occasions are for enjoying", type: "mindful" },
        { text: "If I want it, I'll have it. If not, I won't", type: "intuitive" },
        { text: "Obviously yes. Free cake is always yes", type: "free" }
      ]
    },
    {
      id: 4,
      text: "Your grocery shopping is guided by:",
      options: [
        { text: "My meal plan and macro requirements", type: "tracker" },
        { text: "Healthy basics plus some treats, balanced", type: "mindful" },
        { text: "What sounds good and what I'm craving", type: "intuitive" },
        { text: "Whatever catches my eye and looks delicious", type: "free" }
      ]
    },
    {
      id: 5,
      text: "When eating out, you:",
      options: [
        { text: "Check the menu nutritional info beforehand", type: "tracker" },
        { text: "Make a reasonably healthy choice, enjoy it", type: "mindful" },
        { text: "Order what appeals to me in the moment", type: "intuitive" },
        { text: "This is a restaurant - I'm getting what I WANT", type: "free" }
      ]
    },
    {
      id: 6,
      text: "Your feelings about diet trends (keto, paleo, etc.):",
      options: [
        { text: "I've researched and follow what works for my goals", type: "tracker" },
        { text: "Interesting ideas but I prefer balanced approach", type: "mindful" },
        { text: "My body knows better than diet trends", type: "intuitive" },
        { text: "Diets are prisons. Eat freely. Live fully", type: "free" }
      ]
    },
    {
      id: 7,
      text: "How do you feel after eating something 'indulgent'?",
      options: [
        { text: "Check how it affects my daily totals, adjust if needed", type: "tracker" },
        { text: "Fine! It was a choice and I don't regret it", type: "mindful" },
        { text: "Good if I was craving it, satisfied if my body wanted it", type: "intuitive" },
        { text: "Great! That was delicious and I have no guilt", type: "free" }
      ]
    },
    {
      id: 8,
      text: "Your approach to meal portions:",
      options: [
        { text: "Measured and consistent with my goals", type: "tracker" },
        { text: "Reasonable sizes, I pay attention but don't obsess", type: "mindful" },
        { text: "Eat until satisfied, my body knows", type: "intuitive" },
        { text: "However much I want. Who's measuring?", type: "free" }
      ]
    },
    {
      id: 9,
      text: "If you overeat one day, the next day you:",
      options: [
        { text: "Adjust to stay on track for the week", type: "tracker" },
        { text: "Return to normal eating, don't punish myself", type: "mindful" },
        { text: "Eat according to my hunger, might be less naturally", type: "intuitive" },
        { text: "What overeating? I just ate. Normal day", type: "free" }
      ]
    },
    {
      id: 10,
      text: "Your food philosophy in three words:",
      options: [
        { text: "Track, plan, achieve", type: "tracker" },
        { text: "Balance, moderation, enjoyment", type: "mindful" },
        { text: "Listen, honor, nourish", type: "intuitive" },
        { text: "Eat, enjoy, repeat", type: "free" }
      ]
    }
  ],
  results: {
    tracker: {
      type: "The Data-Driven Dieter",
      description: "If you can't measure it, you can't manage it - and you MANAGE your nutrition. Calories tracked, macros balanced, meals planned. You have goals and you're using data to achieve them. This is serious business and you're serious about it.",
      traits: ["Disciplined", "Goal-oriented", "Data-loving", "Controlled"],
      advice: "Your dedication is impressive! Just make sure tracking stays a tool, not an obsession. Sometimes a meal without numbers is okay. Your mental health around food matters as much as the macros."
    },
    mindful: {
      type: "The Balanced Eater",
      description: "You've found the sweet spot - aware enough to make good choices, relaxed enough to enjoy food. You eat mostly healthy, indulge without guilt, and don't stress about occasional splurges. This is the sustainable, healthy relationship with food everyone talks about.",
      traits: ["Balanced", "Aware", "Guilt-free", "Sustainable"],
      advice: "You've nailed it! This balanced approach is gold. Keep trusting yourself and enjoying food without extremes. You're the example other people should follow."
    },
    intuitive: {
      type: "The Intuitive Eater",
      description: "Your body knows what it needs, and you trust it. No tracking, no rules - just listening to hunger cues, cravings, and satisfaction. You've rejected diet culture and embraced body trust. Your relationship with food is about nourishment, not numbers.",
      traits: ["Body-trusting", "Cue-based", "Anti-diet", "Self-aware"],
      advice: "Your intuitive approach is freeing! Just make sure you're actually listening to your body and not just rationalizing. True intuition takes practice and honest self-reflection."
    },
    free: {
      type: "The Food Freedom Fighter",
      description: "Food is for EATING and ENJOYING. No guilt, no tracking, no restrictions. You refuse to let food stress you out or take up mental energy. Diets are a scam, food is delicious, and life is short. You're eating the cake and sleeping well at night.",
      traits: ["Free-spirited", "Guilt-free", "Unapologetic", "Joy-focused"],
      advice: "Your freedom is enviable! Just make sure 'eating whatever' includes some vegetables occasionally. Food freedom doesn't have to mean ignoring nutrition entirely. But you do you - you seem happy."
    }
  }
};
