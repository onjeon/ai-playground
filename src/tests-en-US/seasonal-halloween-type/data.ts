// What Halloween Person Are You? - Viral seasonal test for American English users

export const testData = {
  id: "seasonal-halloween-type",
  title: "What Halloween Person Are You?",
  description: "Spooky season enthusiast or reluctant candy-giver? Find your Halloween identity!",
  questions: [
    {
      id: 1,
      text: "When do you start preparing for Halloween?",
      options: [
        { text: "September 1st. Decorations going UP", type: "obsessed" },
        { text: "Early October like a normal person", type: "enthusiast" },
        { text: "Week of Halloween, panic mode", type: "casual" },
        { text: "I don't really prepare, it just happens", type: "reluctant" }
      ]
    },
    {
      id: 2,
      text: "Your costume approach:",
      options: [
        { text: "Been planning since last November, full commitment", type: "obsessed" },
        { text: "Something fun and themed I work on for a while", type: "enthusiast" },
        { text: "Last minute Amazon order or closet costume", type: "casual" },
        { text: "I'll wear cat ears and call it a costume", type: "reluctant" }
      ]
    },
    {
      id: 3,
      text: "Your relationship with horror movies:",
      options: [
        { text: "I watch them year-round but October is PEAK", type: "obsessed" },
        { text: "Love a good scary movie marathon", type: "enthusiast" },
        { text: "Only the fun scary ones, nothing too intense", type: "casual" },
        { text: "No thanks, I enjoy sleeping at night", type: "reluctant" }
      ]
    },
    {
      id: 4,
      text: "Halloween decorations at your place:",
      options: [
        { text: "Full haunted house experience. Neighbors are concerned", type: "obsessed" },
        { text: "Nice mix of spooky and fun decorations", type: "enthusiast" },
        { text: "A pumpkin and maybe some fake spiderwebs", type: "casual" },
        { text: "What decorations?", type: "reluctant" }
      ]
    },
    {
      id: 5,
      text: "Trick-or-treaters ring your doorbell. You:",
      options: [
        { text: "Answer in full costume with theatrical flair", type: "obsessed" },
        { text: "Happily give out candy and compliment costumes", type: "enthusiast" },
        { text: "Hand out candy, back to my show", type: "casual" },
        { text: "Lights off, pretending I'm not home", type: "reluctant" }
      ]
    },
    {
      id: 6,
      text: "Halloween parties are:",
      options: [
        { text: "THE highlight of my social calendar", type: "obsessed" },
        { text: "Fun! Love seeing everyone's costumes", type: "enthusiast" },
        { text: "I'll go if invited, sure", type: "casual" },
        { text: "An excuse to stay home instead", type: "reluctant" }
      ]
    },
    {
      id: 7,
      text: "Pumpkin carving:",
      options: [
        { text: "I create MASTERPIECES. Multiple pumpkins", type: "obsessed" },
        { text: "Fun tradition! I do a nice design each year", type: "enthusiast" },
        { text: "Simple face, gets the job done", type: "casual" },
        { text: "Too much effort. I'll buy a fake one", type: "reluctant" }
      ]
    },
    {
      id: 8,
      text: "Halloween candy strategy:",
      options: [
        { text: "Full size bars. I want to be the cool house", type: "obsessed" },
        { text: "Good variety of brand-name candy", type: "enthusiast" },
        { text: "Whatever's on sale at Costco", type: "casual" },
        { text: "I forget to buy it every year", type: "reluctant" }
      ]
    },
    {
      id: 9,
      text: "Your ideal Halloween night:",
      options: [
        { text: "Haunted houses, costume contest, full experience", type: "obsessed" },
        { text: "Party with friends or fun Halloween activities", type: "enthusiast" },
        { text: "Handing out candy, watching Hocus Pocus", type: "casual" },
        { text: "Treat it like any other Thursday", type: "reluctant" }
      ]
    },
    {
      id: 10,
      text: "November 1st arrives. You feel:",
      options: [
        { text: "Already mourning. Counting down to next year", type: "obsessed" },
        { text: "Happy but ready to transition to next holiday", type: "enthusiast" },
        { text: "Relief that I can eat the leftover candy in peace", type: "casual" },
        { text: "Didn't notice. Is Halloween over?", type: "reluctant" }
      ]
    }
  ],
  results: {
    obsessed: {
      type: "The Halloween Fanatic",
      description: "Halloween isn't a holiday to you - it's a LIFESTYLE. You've probably been called 'too much' and wear it as a badge of honor. Your decorations could be in a magazine, your costumes are legendary, and October is basically your Super Bowl. You might be slightly goth year-round.",
      traits: ["Dedicated", "Creative", "Spooky year-round", "Extra (in the best way)"],
      advice: "Never change! But maybe give your non-Halloween friends some grace. Not everyone can match your energy, and that's okay. Keep being the Halloween ambassador we all need."
    },
    enthusiast: {
      type: "The Halloween Enthusiast",
      description: "You LOVE Halloween but in a healthy, balanced way. You participate enthusiastically, your costume game is solid, and you genuinely enjoy the season. You're not over-the-top but you're definitely not phoning it in. Halloween is better because you're in it.",
      traits: ["Festive", "Fun", "Balanced", "Celebratory"],
      advice: "You've got the perfect Halloween approach! Maybe push yourself slightly out of your comfort zone this year - level up one aspect of your celebration. You've earned it."
    },
    casual: {
      type: "The Casual Celebrator",
      description: "Halloween is fine. You participate enough to not be a buzzkill but you're not losing sleep over costume planning. You'll hand out candy, maybe watch a spooky movie, and call it a successful Halloween. Low effort, reasonable enjoyment.",
      traits: ["Laid-back", "Minimal effort", "Goes with the flow", "Candy-motivated"],
      advice: "Your approach is valid! But maybe try ONE new Halloween thing this year. You might discover you enjoy it more than expected. Or not - and that's fine too."
    },
    reluctant: {
      type: "The Halloween Hesitant",
      description: "Look, Halloween just isn't your thing. You're not anti-Halloween, you're just... not participating beyond the absolute minimum. And honestly? That's a choice. Not everyone needs to love spooky season. You do you, non-costumedly.",
      traits: ["Indifferent", "Non-participatory", "Honest", "Not a joiner"],
      advice: "Fair enough! But consider that Halloween is really about fun and candy - not an obligation. Maybe find one small thing to enjoy? Or continue your noble tradition of sitting this one out."
    }
  }
};
