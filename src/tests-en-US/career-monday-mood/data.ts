// Your Monday Mood Type - Viral career test for American English users

export const testData = {
  id: "career-monday-mood",
  title: "Your Monday Mood Type",
  description: "How do you really feel about the start of the workweek? Be honest... we've all been there.",
  questions: [
    {
      id: 1,
      text: "Your alarm goes off on Monday morning. Your first thought:",
      options: [
        { text: "Let's do this! Fresh start, new opportunities", type: "enthusiast" },
        { text: "Coffee first, then we can discuss consciousness", type: "realist" },
        { text: "Snooze, snooze, snooze, panic, rush", type: "struggler" },
        { text: "Existential dread about the meaning of work", type: "dreader" }
      ]
    },
    {
      id: 2,
      text: "Getting ready for work on Monday morning:",
      options: [
        { text: "I actually picked out my outfit last night", type: "enthusiast" },
        { text: "Normal routine, nothing special", type: "realist" },
        { text: "Whatever's clean-ish and close to the bed", type: "struggler" },
        { text: "Debate calling in sick for 20 minutes", type: "dreader" }
      ]
    },
    {
      id: 3,
      text: "First thing you check Monday morning:",
      options: [
        { text: "My to-do list and calendar to plan the week", type: "enthusiast" },
        { text: "Email to see if anything exploded over the weekend", type: "realist" },
        { text: "My phone while still lying in bed", type: "struggler" },
        { text: "How many days until Friday", type: "dreader" }
      ]
    },
    {
      id: 4,
      text: "Your Monday commute/walk to your desk:",
      options: [
        { text: "Listening to a motivating podcast or upbeat music", type: "enthusiast" },
        { text: "Just getting there, whatever it takes", type: "realist" },
        { text: "Running late, stressed, spilled coffee somewhere", type: "struggler" },
        { text: "Contemplating how I got here and if there's an escape", type: "dreader" }
      ]
    },
    {
      id: 5,
      text: "A coworker asks 'How was your weekend?' You say:",
      options: [
        { text: "Great! Tell them all about it enthusiastically", type: "enthusiast" },
        { text: "'Good, yours?' - keep it moving", type: "realist" },
        { text: "'Too short' with a nervous laugh", type: "struggler" },
        { text: "'A cruel reminder of what life could be'", type: "dreader" }
      ]
    },
    {
      id: 6,
      text: "First meeting of the week. Your energy:",
      options: [
        { text: "Engaged, taking notes, contributing ideas", type: "enthusiast" },
        { text: "Professional and present, doing my job", type: "realist" },
        { text: "Camera off, vibing on low power mode", type: "struggler" },
        { text: "Questioning why this meeting exists and life choices", type: "dreader" }
      ]
    },
    {
      id: 7,
      text: "It's 2 PM on Monday. Your status:",
      options: [
        { text: "Already knocked out half my to-do list!", type: "enthusiast" },
        { text: "Making progress, on track for the day", type: "realist" },
        { text: "Finally feeling awake, starting to function", type: "struggler" },
        { text: "How is it only 2 PM? Time is a lie", type: "dreader" }
      ]
    },
    {
      id: 8,
      text: "Someone schedules an unexpected Monday meeting. You feel:",
      options: [
        { text: "Fine! Love connecting with the team", type: "enthusiast" },
        { text: "Slight annoyance but it's part of the job", type: "realist" },
        { text: "Stress - I'm barely keeping up as is", type: "struggler" },
        { text: "Deep sigh and adding it to my list of grievances", type: "dreader" }
      ]
    },
    {
      id: 9,
      text: "End of Monday. You're thinking:",
      options: [
        { text: "Great start to the week! Momentum is building", type: "enthusiast" },
        { text: "One down, four to go. Solid day", type: "realist" },
        { text: "Survived. Need to recover before Tuesday hits", type: "struggler" },
        { text: "Only 4 more days until I can be myself again", type: "dreader" }
      ]
    },
    {
      id: 10,
      text: "Sunday night before Monday arrives:",
      options: [
        { text: "Prepping for the week ahead with excitement", type: "enthusiast" },
        { text: "Mild acceptance, maybe some light prep", type: "realist" },
        { text: "Actively trying not to think about tomorrow", type: "struggler" },
        { text: "The Sunday Scaries are my only personality trait", type: "dreader" }
      ]
    }
  ],
  results: {
    enthusiast: {
      type: "The Monday Motivator",
      description: "You actually LIKE Mondays? In this economy? You're either living your dream job, have mastered the art of toxic positivity, or you're just wired differently. Either way, your enthusiasm is either inspiring or annoying to the rest of us. Probably both.",
      traits: ["Optimistic", "Energetic", "Productive", "Possibly concerning"],
      advice: "Your Monday energy is a gift, but read the room. Not everyone is ready for your sunshine at 9 AM. Channel that enthusiasm into getting things done, and maybe wait until 10 AM before being TOO peppy around your coffee-dependent coworkers."
    },
    realist: {
      type: "The Functioning Adult",
      description: "Mondays are just... Mondays to you. Not great, not terrible, just a day that needs to be gotten through. You've made peace with the workweek and approach it with mature acceptance. You're the emotional stability the office needs but doesn't appreciate enough.",
      traits: ["Balanced", "Practical", "Steady", "Emotionally regulated"],
      advice: "Your healthy approach to Mondays is genuinely admirable. Keep modeling that balanced energy for your colleagues. Just make sure you're not burying negative feelings under practicality - it's okay to admit Mondays can be rough sometimes."
    },
    struggler: {
      type: "The Monday Survivor",
      description: "Mondays hit you hard, but you show up anyway. Running late, barely caffeinated, making it by the skin of your teeth - but you're THERE. You're not thriving on Mondays, but you're surviving, and honestly? That counts. You relate to every Monday meme ever posted.",
      traits: ["Resilient", "Relatable", "Running on fumes", "Getting through it"],
      advice: "Monday doesn't have to be a battle. Try prepping a little on Sunday - lay out clothes, prep lunch, set multiple alarms. Small changes can transform Monday from a crisis into just another day. You're capable of more than survival mode."
    },
    dreader: {
      type: "The Monday Existentialist",
      description: "Mondays make you question every life decision that led you here. The Sunday Scaries are your weekly companion. You're not just tired on Monday - you're philosophically opposed to the concept. Each week, you briefly consider running away to start a farm somewhere.",
      traits: ["Deep thinker", "Potentially in wrong job", "Honest about struggles", "Sunday Scaries veteran"],
      advice: "Your Monday dread might be a sign that something needs to change - not just your attitude, but maybe your job, industry, or work situation. Chronic dread isn't sustainable. Take your feelings seriously and explore what would make work feel less soul-crushing."
    }
  }
};
