// How Would You Handle Being Canceled? - Viral modern culture test for American English users

export const testData = {
  id: "culture-cancel-culture",
  title: "How Would You Handle Being Canceled?",
  description: "The internet found your 2014 tweets. What happens next? Take this totally-not-stressful quiz to find out!",
  questions: [
    {
      id: 1,
      text: "You wake up to 47 notifications. First thought:",
      options: [
        { text: "Oh god. What did I do. What's happening.", type: "panicker" },
        { text: "Time to log off for approximately forever", type: "hider" },
        { text: "Let me assess the situation before reacting", type: "strategist" },
        { text: "Fight me, Twitter", type: "fighter" }
      ]
    },
    {
      id: 2,
      text: "The 'controversy' is actually a misunderstanding. You:",
      options: [
        { text: "Panic-tweet an apology that somehow makes it worse", type: "panicker" },
        { text: "Say nothing and wait for it to blow over", type: "hider" },
        { text: "Post a clear, calm explanation with receipts", type: "strategist" },
        { text: "Go OFF on everyone who got it wrong", type: "fighter" }
      ]
    },
    {
      id: 3,
      text: "Someone who was once your friend publicly turns on you. Reaction:",
      options: [
        { text: "Spiral. Cry. Spiral more.", type: "panicker" },
        { text: "Note it, stay silent, cut them out privately", type: "hider" },
        { text: "Reach out privately to understand before responding publicly", type: "strategist" },
        { text: "Expose their hypocrisy immediately", type: "fighter" }
      ]
    },
    {
      id: 4,
      text: "Your ideal Notes App apology:",
      options: [
        { text: "15 paragraphs, overly apologetic, slightly unhinged", type: "panicker" },
        { text: "I wouldn't post one. Silence is golden.", type: "hider" },
        { text: "Brief, sincere, addresses specifics, promises action", type: "strategist" },
        { text: "I'm not apologizing for something I didn't do wrong", type: "fighter" }
      ]
    },
    {
      id: 5,
      text: "A brand you work with drops you. Feelings:",
      options: [
        { text: "Devastated. Everything is ruined.", type: "panicker" },
        { text: "Honestly, understandable. I get it.", type: "hider" },
        { text: "Disappointing but I'll rebuild elsewhere", type: "strategist" },
        { text: "I'll call them out for their cowardice", type: "fighter" }
      ]
    },
    {
      id: 6,
      text: "Someone is making a YouTube video about your 'downfall.' You:",
      options: [
        { text: "Watch it through my fingers in horror", type: "panicker" },
        { text: "Refuse to watch, don't need that energy", type: "hider" },
        { text: "Watch to understand the narrative being built", type: "strategist" },
        { text: "Comment on it defending myself", type: "fighter" }
      ]
    },
    {
      id: 7,
      text: "It's been a week. Things are dying down. Next move:",
      options: [
        { text: "Still not okay, still spiraling, will never recover", type: "panicker" },
        { text: "Stay quiet for another month minimum", type: "hider" },
        { text: "Slowly return to normal content, address nothing further", type: "strategist" },
        { text: "Post like nothing happened (power move)", type: "fighter" }
      ]
    },
    {
      id: 8,
      text: "Your friends want to discuss the situation. You:",
      options: [
        { text: "Vent for 3 hours straight, I need to PROCESS", type: "panicker" },
        { text: "Rather not talk about it honestly", type: "hider" },
        { text: "Appreciate their support, discuss strategically", type: "strategist" },
        { text: "Use them to help build my counter-attack", type: "fighter" }
      ]
    },
    {
      id: 9,
      text: "Looking back in a year, your takeaway would be:",
      options: [
        { text: "Trauma. Just trauma.", type: "panicker" },
        { text: "Glad it's over, moving on quietly", type: "hider" },
        { text: "Learned a lot about crisis management and myself", type: "strategist" },
        { text: "I survived and I'm stronger and pettier for it", type: "fighter" }
      ]
    },
    {
      id: 10,
      text: "Best piece of advice for the canceled?",
      options: [
        { text: "DON'T look at the comments (I definitely will though)", type: "panicker" },
        { text: "Time heals, silence helps", type: "hider" },
        { text: "Control the narrative with clarity and patience", type: "strategist" },
        { text: "Never apologize if you did nothing wrong", type: "fighter" }
      ]
    }
  ],
  results: {
    panicker: {
      type: "The Spiral Queen",
      description: "You would absolutely NOT handle this well. Every notification would feel like a heart attack. You'd write 17 drafts of an apology and post the worst one at 3am. Your friends would have to physically take your phone. You'd age 10 years in 48 hours. Honestly? Relatable.",
      traits: ["Overthinker", "Emotionally reactive", "Anxiety spiral pro", "Too online for this"],
      advice: "STEP AWAY FROM THE PHONE. Seriously. Nothing good comes from refreshing your mentions at 2am. You need a crisis buddy who will take your devices and remind you this too shall pass."
    },
    hider: {
      type: "The Digital Hermit",
      description: "Your survival strategy: become invisible. Log off, lock down, and let the storm pass. You'd delete apps, go touch grass, and pretend the internet doesn't exist. Honestly? This might be the healthiest response. The internet has a short memory and you know it.",
      traits: ["Self-preservation expert", "Patience haver", "Grass toucher", "Smart about it"],
      advice: "Your instinct to disappear is often smart - the news cycle moves fast. Just make sure you're not running from legitimate accountability. Sometimes silence is golden, sometimes it makes things worse."
    },
    strategist: {
      type: "The PR Crisis Manager",
      description: "You're built for this. While everyone's panicking, you're assessing, planning, and executing. You'd have receipts organized, a statement drafted, and a comeback timeline mapped out. You'd survive AND somehow come out looking better. Teach us your ways.",
      traits: ["Cool under pressure", "Strategic mind", "Clear communicator", "Comebacks in your DNA"],
      advice: "Your calm is your superpower, but don't be so strategic that you seem robotic. People respond to genuine emotion. Let yourself be human in the process - vulnerability is strategic too."
    },
    fighter: {
      type: "The Unbothered Warrior",
      description: "Cancel you? YOU'LL CANCEL THEM. You're not going down without a fight, and you've got the receipts to prove it. Your response video would be iconic. You'd turn enemies into content and haters into engagement. Chaotic? Yes. Effective? Sometimes!",
      traits: ["Fearless energy", "Never backs down", "Petty when necessary", "Main character"],
      advice: "Your fight instinct is powerful but not always helpful. Sometimes fighting back makes things worse, even when you're right. Know when to swing and when to let them tire themselves out."
    }
  }
};
