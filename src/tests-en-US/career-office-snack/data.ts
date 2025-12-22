// What Office Snacker Are You? - Viral career test for American English users

export const testData = {
  id: "career-office-snack",
  title: "What Office Snacker Are You?",
  description: "Your snacking habits at work reveal your TRUE personality. Let's discover your desk drawer secrets!",
  questions: [
    {
      id: 1,
      text: "Your desk snack situation:",
      options: [
        { text: "A curated selection of healthy snacks, always stocked", type: "prepared" },
        { text: "Emergency chocolate for stressful moments", type: "stress" },
        { text: "I raid the office snack supply or nearby coworkers", type: "scavenger" },
        { text: "I forget to eat until I'm starving", type: "forgetter" }
      ]
    },
    {
      id: 2,
      text: "There's free food in the break room. Your move:",
      options: [
        { text: "Check what it is, take some if it fits my preferences", type: "prepared" },
        { text: "Immediately grab some - free food is free food", type: "stress" },
        { text: "First one there, first choice of the good stuff", type: "scavenger" },
        { text: "Someone tells me hours later and it's gone", type: "forgetter" }
      ]
    },
    {
      id: 3,
      text: "It's 3 PM, the afternoon slump hits. You reach for:",
      options: [
        { text: "A healthy snack I planned for this exact moment", type: "prepared" },
        { text: "Caffeine and something sweet to power through", type: "stress" },
        { text: "Whatever I can find - vending machine, coworker's desk...", type: "scavenger" },
        { text: "Nothing - I push through and regret it later", type: "forgetter" }
      ]
    },
    {
      id: 4,
      text: "Your relationship with the office vending machine:",
      options: [
        { text: "I don't need it - I bring my own snacks", type: "prepared" },
        { text: "We have a complicated, regular relationship", type: "stress" },
        { text: "I've tried everything in there at least twice", type: "scavenger" },
        { text: "I forget it exists until I'm desperate", type: "forgetter" }
      ]
    },
    {
      id: 5,
      text: "A stressful deadline approaches. Your snacking:",
      options: [
        { text: "Same as usual - stress doesn't change my eating", type: "prepared" },
        { text: "Dramatically increases. Stress eating is real", type: "stress" },
        { text: "I start wandering the office looking for fuel", type: "scavenger" },
        { text: "I completely forget to eat until I'm hangry", type: "forgetter" }
      ]
    },
    {
      id: 6,
      text: "Someone asks to share your snacks. You:",
      options: [
        { text: "Happily share - I always have extra", type: "prepared" },
        { text: "Share but silently mourn my comfort food", type: "stress" },
        { text: "Of course! They share with me all the time", type: "scavenger" },
        { text: "I don't have snacks to share...", type: "forgetter" }
      ]
    },
    {
      id: 7,
      text: "Your meeting snack approach:",
      options: [
        { text: "I ate beforehand, no snacks needed", type: "prepared" },
        { text: "Definitely bringing a discreet snack if it's long", type: "stress" },
        { text: "I scope out if there will be meeting snacks provided", type: "scavenger" },
        { text: "I realize I'm hungry during the meeting and suffer", type: "forgetter" }
      ]
    },
    {
      id: 8,
      text: "Your lunch break eating style:",
      options: [
        { text: "Planned meal, eaten at a proper time", type: "prepared" },
        { text: "Eating at my desk while still working", type: "stress" },
        { text: "Whatever looks good in the area that day", type: "scavenger" },
        { text: "Skip it by accident and eat dinner early", type: "forgetter" }
      ]
    },
    {
      id: 9,
      text: "End of the workday. Your snack inventory is:",
      options: [
        { text: "Still stocked - I plan ahead", type: "prepared" },
        { text: "Depleted from stress eating throughout the day", type: "stress" },
        { text: "I don't have inventory - I hunt fresh daily", type: "scavenger" },
        { text: "I forgot I even brought snacks", type: "forgetter" }
      ]
    },
    {
      id: 10,
      text: "The noise your snacking makes during calls:",
      options: [
        { text: "Non-existent - I eat quietly or not during calls", type: "prepared" },
        { text: "I mute strategically while eating", type: "stress" },
        { text: "Oops, sometimes I forget I'm not on mute", type: "scavenger" },
        { text: "No snacks, no problem", type: "forgetter" }
      ]
    }
  ],
  results: {
    prepared: {
      type: "The Snack Prepper",
      description: "You have SNACKS. Organized, nutritious, portion-controlled snacks. Your desk drawer is a well-curated selection of brain fuel. You never get hangry because you PLAN. You're the coworker everyone asks for snacks when they're desperate - because you always have them.",
      traits: ["Prepared", "Organized", "Health-conscious", "Snack reliable"],
      advice: "Your snack game is elite! Keep being the prepared legend you are. Just remember it's okay to have an unplanned treat sometimes - spontaneity won't ruin your snack system."
    },
    stress: {
      type: "The Emotional Eater",
      description: "Stress = snacks. Deadlines = chocolate. Bad meeting = vending machine visit. You've found that food makes work bearable, and honestly, same. Your snacking correlates directly with your stress levels, and your coworkers can gauge project intensity by your desk candy consumption.",
      traits: ["Stress-snacker", "Mood eater", "Comfort seeker", "Relatable"],
      advice: "Comfort eating is valid, but be mindful when it becomes your only coping mechanism. Try adding other stress relief - walks, breaks, breathing - alongside the snacks. But also, sometimes you just need that chocolate. We get it."
    },
    scavenger: {
      type: "The Office Forager",
      description: "Why bring snacks when there's a whole office ecosystem to explore? Free food alerts are your love language. You know who has the good snacks, where the vending machine deals are, and exactly when the break room restocks. You're basically a hunter-gatherer in corporate clothing.",
      traits: ["Resourceful", "Opportunistic", "Socially snacking", "Never brings but always eats"],
      advice: "Your foraging skills are impressive, but maybe contribute to the snack ecosystem sometimes? Bring treats to share occasionally so you're not always the taker. The office snack karma will balance out."
    },
    forgetter: {
      type: "The Accidental Faster",
      description: "You don't snack because you FORGET. Not intentionally, just... work happens and suddenly it's 4 PM and you've had coffee and vibes. You're either deeply focused or in denial about physical needs. Your coworkers worry about you. Please eat something.",
      traits: ["Forgetful", "Hyperfocused", "Probably hangry", "Needs reminders"],
      advice: "Set snack alarms! Seriously. Forgetting to eat leads to low energy, bad decisions, and hangry moments. Keep easy snacks visible so you remember they exist. Your brain and body will thank you for the fuel."
    }
  }
};
