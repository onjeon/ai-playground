// What Kind of Uber Passenger Are You? - Fun viral test

export const testData = {
  id: "fun-uber-passenger",
  title: "What Kind of Uber Passenger Are You?",
  description: "Your driver is rating you too... Are you a 5-star rider or are you the reason drivers cancel?",
  questions: [
    {
      id: 1,
      text: "Your Uber is 2 minutes away. Where are you?",
      options: [
        { text: "Already outside waiting at the exact pin location", type: "perfect" },
        { text: "Grabbing my stuff, I'll be down when they arrive", type: "chill" },
        { text: "Still deciding if I really need these shoes or the other ones", type: "chaotic" },
        { text: "Wait, I thought I had 5 more minutes", type: "mess" }
      ]
    },
    {
      id: 2,
      text: "The driver takes a different route than Google Maps suggests. You:",
      options: [
        { text: "Trust them - they probably know shortcuts", type: "chill" },
        { text: "Politely mention the usual route in case they want to try it", type: "perfect" },
        { text: "Stare at my phone intensely tracking every turn", type: "chaotic" },
        { text: "Already drafting my 1-star review in my head", type: "mess" }
      ]
    },
    {
      id: 3,
      text: "Your approach to conversation with drivers:",
      options: [
        { text: "Friendly small talk that matches their energy", type: "perfect" },
        { text: "Headphones in, polite nod, we both get it", type: "chill" },
        { text: "Either dead silence or my entire life story, no in between", type: "chaotic" },
        { text: "I'll talk their ear off whether they want it or not", type: "mess" }
      ]
    },
    {
      id: 4,
      text: "You realize you left something in the Uber. You:",
      options: [
        { text: "Contact support immediately with all relevant details", type: "perfect" },
        { text: "Eh, it wasn't that important anyway", type: "chill" },
        { text: "Panic-call the driver 47 times in 3 minutes", type: "chaotic" },
        { text: "Blame the driver even though I watched myself leave it", type: "mess" }
      ]
    },
    {
      id: 5,
      text: "Surge pricing hits at 2.4x. Your reaction:",
      options: [
        { text: "Plan ahead and avoid peak times when possible", type: "perfect" },
        { text: "Accept it - I chose this lifestyle", type: "chill" },
        { text: "Refresh the app 50 times hoping it goes down", type: "chaotic" },
        { text: "Take the ride and complain about it the whole way", type: "mess" }
      ]
    },
    {
      id: 6,
      text: "You need to make a quick stop. How do you handle it?",
      options: [
        { text: "Add the stop in the app properly and communicate with the driver", type: "perfect" },
        { text: "Ask nicely and tip extra for the inconvenience", type: "chill" },
        { text: "Jump out mid-ride yelling 'I'll be right back!'", type: "chaotic" },
        { text: "What do you mean I can't get drive-thru on a 5-minute trip?", type: "mess" }
      ]
    },
    {
      id: 7,
      text: "The car arrives and it's not the cleanest. You:",
      options: [
        { text: "Not a big deal, I've seen worse. Get in and go", type: "chill" },
        { text: "Note it in the review but don't make a scene", type: "perfect" },
        { text: "Take pictures for evidence then complain to everyone later", type: "chaotic" },
        { text: "Demand a new car immediately and rate 1 star before even riding", type: "mess" }
      ]
    },
    {
      id: 8,
      text: "Your pickup location is wrong. What happened?",
      options: [
        { text: "Never happens - I always double-check and adjust the pin", type: "perfect" },
        { text: "Oops, my bad. I'll walk to them", type: "chill" },
        { text: "HOW DID THE GPS BETRAY ME AGAIN", type: "chaotic" },
        { text: "The driver should figure it out, that's their job", type: "mess" }
      ]
    },
    {
      id: 9,
      text: "Your friend wants to squeeze in a 5th person. You:",
      options: [
        { text: "Absolutely not - order an XL or a second car", type: "perfect" },
        { text: "Ask the driver first and respect their answer", type: "chill" },
        { text: "We've done worse things. Let's just try it", type: "chaotic" },
        { text: "Already in the car before anyone can say no", type: "mess" }
      ]
    },
    {
      id: 10,
      text: "After the ride, you remember to rate and tip:",
      options: [
        { text: "Always! Good service deserves recognition", type: "perfect" },
        { text: "Usually, unless I genuinely forget", type: "chill" },
        { text: "Only if I remember 3 days later when I open the app again", type: "chaotic" },
        { text: "Rate? Tip? They got paid already, right?", type: "mess" }
      ]
    }
  ],
  results: {
    perfect: {
      type: "The 5-Star Rider",
      description: "Drivers fight over your ride requests. You're punctual, polite, and probably already have your address saved correctly. Your rating is immaculate, and you tip like someone who understands the gig economy. You're basically a mythical creature in the rideshare world.",
      traits: ["Punctual", "Considerate", "Well-prepared", "High tipper"],
      advice: "Keep being you - you're making drivers' days easier one ride at a time. Maybe teach a class on how to be a decent passenger?"
    },
    chill: {
      type: "The Easy Rider",
      description: "You're the passenger every driver hopes for: no drama, no weird requests, just vibes. You adapt to whatever the ride throws at you. Music too loud? You're fine. Wrong turn? No stress. You're basically a golden retriever in human form, and drivers appreciate you.",
      traits: ["Easygoing", "Adaptable", "Low-maintenance", "Pleasant"],
      advice: "Your chill energy is a gift. Just remember to rate and tip when you remember - your laid-back nature sometimes means forgetting the little things."
    },
    chaotic: {
      type: "The Unpredictable Passenger",
      description: "Every ride with you is an adventure - and not always the fun kind. You mean well, but chaos follows you. Late to the pickup, mysterious stops, accidentally slamming doors... drivers see your name and take a deep breath. At least you're entertaining?",
      traits: ["Spontaneous", "Scattered", "Entertaining", "Unpredictable"],
      advice: "Maybe set an alarm 5 minutes earlier? And double-check that pin location? Your driver's sanity (and your rating) will thank you."
    },
    mess: {
      type: "The Hot Mess Express",
      description: "Be honest: how many drivers have canceled on you? Your rating is... let's call it 'character building.' You treat Ubers like personal chauffeur services and wonder why drivers seem tense. The audacity is almost impressive, honestly.",
      traits: ["High-maintenance", "Demanding", "Oblivious", "Bold"],
      advice: "Remember: drivers are people, not NPCs. A little consideration goes a long way. Start with showing up on time and saying 'thank you' - revolutionary, I know."
    }
  }
};
