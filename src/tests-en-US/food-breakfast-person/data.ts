// What Kind of Breakfast Person Are You? - Viral food test for American English users

export const testData = {
  id: "food-breakfast-person",
  title: "What Kind of Breakfast Person Are You?",
  description: "Early riser breakfast champion or 'coffee is a meal' person? Let's see!",
  questions: [
    {
      id: 1,
      text: "Your typical weekday morning:",
      options: [
        { text: "Full breakfast - eggs, toast, the works", type: "champion" },
        { text: "Quick but real food - yogurt, toast, fruit", type: "practical" },
        { text: "Coffee/tea first, maybe food if I remember", type: "caffeine" },
        { text: "Skip it entirely, first meal is lunch", type: "skipper" }
      ]
    },
    {
      id: 2,
      text: "Your relationship with breakfast food:",
      options: [
        { text: "The best food group! I'd eat breakfast for every meal", type: "champion" },
        { text: "It's nice, gets me through the morning", type: "practical" },
        { text: "Take it or leave it honestly", type: "caffeine" },
        { text: "Morning food? In this economy? Before noon?", type: "skipper" }
      ]
    },
    {
      id: 3,
      text: "Weekend brunch:",
      options: [
        { text: "MY FAVORITE. I live for a good brunch", type: "champion" },
        { text: "Enjoyable occasionally, nice way to socialize", type: "practical" },
        { text: "For the mimosas, not really the food", type: "caffeine" },
        { text: "Brunch is just late breakfast and I skip both", type: "skipper" }
      ]
    },
    {
      id: 4,
      text: "If you eat breakfast, your go-to is:",
      options: [
        { text: "Hot, prepared, proper breakfast food", type: "champion" },
        { text: "Something quick and reasonably nutritious", type: "practical" },
        { text: "Whatever's near the coffee machine", type: "caffeine" },
        { text: "Bold of you to assume I eat breakfast", type: "skipper" }
      ]
    },
    {
      id: 5,
      text: "Your morning hunger level:",
      options: [
        { text: "Starving when I wake up. NEED food immediately", type: "champion" },
        { text: "Reasonably hungry, ready for something", type: "practical" },
        { text: "Not hungry until the caffeine kicks in", type: "caffeine" },
        { text: "What is morning hunger? I don't know her", type: "skipper" }
      ]
    },
    {
      id: 6,
      text: "Making breakfast takes time. Your response:",
      options: [
        { text: "Worth it! I wake up early enough to cook", type: "champion" },
        { text: "That's why I do quick prep stuff", type: "practical" },
        { text: "That's why I don't make breakfast", type: "caffeine" },
        { text: "Time saved by not eating breakfast at all", type: "skipper" }
      ]
    },
    {
      id: 7,
      text: "Someone offers to make you breakfast:",
      options: [
        { text: "YES! What are we having?!", type: "champion" },
        { text: "Sure, that's really nice of them", type: "practical" },
        { text: "Can they also make coffee? That's what I need", type: "caffeine" },
        { text: "They can make it but I might not be hungry", type: "skipper" }
      ]
    },
    {
      id: 8,
      text: "Breakfast for dinner:",
      options: [
        { text: "BRILLIANT. Pancakes and eggs at 7pm? Perfect", type: "champion" },
        { text: "Occasionally hits the spot", type: "practical" },
        { text: "Sure, food is food I guess", type: "caffeine" },
        { text: "Breakfast any time of day is weird to me", type: "skipper" }
      ]
    },
    {
      id: 9,
      text: "Your stance on 'breakfast is the most important meal':",
      options: [
        { text: "Absolutely true! Sets up the whole day", type: "champion" },
        { text: "Probably good advice, I try to eat something", type: "practical" },
        { text: "Debatable. Coffee seems more important", type: "caffeine" },
        { text: "Propaganda from Big Cereal", type: "skipper" }
      ]
    },
    {
      id: 10,
      text: "How do you feel about people who don't eat breakfast?",
      options: [
        { text: "Confused and concerned for their wellbeing", type: "champion" },
        { text: "Their choice, though I think they're missing out", type: "practical" },
        { text: "I get it, mornings are hard", type: "caffeine" },
        { text: "Finally, my people! We exist!", type: "skipper" }
      ]
    }
  ],
  results: {
    champion: {
      type: "The Breakfast Champion",
      description: "You don't just eat breakfast, you BELIEVE in breakfast. It's the best meal, the most important meal, and you wake up ready to EAT. Your morning routine includes actual cooking and you judge people who skip breakfast (lovingly, but you judge).",
      traits: ["Morning person", "Food-motivated", "Traditional", "Energized"],
      advice: "Your breakfast commitment is admirable! Keep fueling your mornings. Maybe accept that not everyone shares your breakfast passion though - some people function differently. More eggs for you!"
    },
    practical: {
      type: "The Practical Eater",
      description: "Breakfast is fuel and you fuel up reasonably. Nothing fancy, nothing skipped - just sensible morning nutrition. You've probably figured out a quick routine that works and you stick to it. Efficient, healthy, no drama.",
      traits: ["Practical", "Efficient", "Health-conscious", "Routine-based"],
      advice: "Your practical approach is great! Maybe treat yourself to a fancy brunch occasionally though - breakfast can be an experience, not just fuel. You've earned a Belgian waffle."
    },
    caffeine: {
      type: "The Caffeine-First Person",
      description: "Coffee IS breakfast. Or tea. Whatever wakes you up. Food is secondary to the sacred ritual of caffeination. You might eat eventually, but nothing happens until the caffeine kicks in. You're not skipping breakfast, you're just... delaying it indefinitely.",
      traits: ["Caffeine-dependent", "Slow-morning", "Eventually hungry", "Beverage-focused"],
      advice: "Your caffeine loyalty is understood! But maybe a small something with that coffee? Your body might appreciate some actual fuel. Even a banana. We're just saying - options exist besides just liquid."
    },
    skipper: {
      type: "The Breakfast Skipper",
      description: "Breakfast? In the morning? When you just woke up? Sounds fake. You've successfully avoided the 'most important meal' for years and you're FINE. First meal is lunch and that's just how your body works. Intermittent fasting without even trying.",
      traits: ["Anti-breakfast", "Lunch-first", "Non-conformist", "Morning-averse"],
      advice: "Your body, your rules! But if you're dragging by 10am, maybe breakfast isn't the enemy. Or maybe you're just not a morning person and that's valid too. Keep doing what works for you, breakfast rebel."
    }
  }
};
