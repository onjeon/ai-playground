// What's Your Role at Parties? - Fun viral test

export const testData = {
  id: "fun-party-role",
  title: "What's Your Role at Parties?",
  description: "Every party has its cast of characters. Which one are you? (Be honest - your friends already know.)",
  questions: [
    {
      id: 1,
      text: "You walk into a party. Your first move:",
      options: [
        { text: "Find the friend I came with and stick close", type: "wallflower" },
        { text: "Scope out the vibe, then start mingling", type: "connector" },
        { text: "Head straight to wherever the energy is highest", type: "life" },
        { text: "Check out the food/drink situation immediately", type: "host" }
      ]
    },
    {
      id: 2,
      text: "Someone you don't know joins your conversation. You:",
      options: [
        { text: "Welcome them and introduce myself warmly", type: "connector" },
        { text: "Include them by being extra entertaining", type: "life" },
        { text: "Step back slightly and let others lead", type: "wallflower" },
        { text: "Make sure they have a drink and feel comfortable", type: "host" }
      ]
    },
    {
      id: 3,
      text: "The party playlist is terrible. You:",
      options: [
        { text: "Suffer in silence, music isn't worth a confrontation", type: "wallflower" },
        { text: "Subtly suggest to the host or find the aux", type: "connector" },
        { text: "Loudly campaign for better music until someone changes it", type: "life" },
        { text: "Take over DJ duties without being asked", type: "host" }
      ]
    },
    {
      id: 4,
      text: "It's midnight and you notice someone looking uncomfortable. You:",
      options: [
        { text: "Go check on them, ask if they need anything", type: "host" },
        { text: "Introduce them to someone they might vibe with", type: "connector" },
        { text: "Pull them into whatever fun I'm having", type: "life" },
        { text: "Make sympathetic eye contact but don't approach", type: "wallflower" }
      ]
    },
    {
      id: 5,
      text: "Your ideal party conversation:",
      options: [
        { text: "Deep 1-on-1 chats in a quiet corner", type: "wallflower" },
        { text: "Moving between groups, checking in on everyone", type: "connector" },
        { text: "Center of a big group telling stories", type: "life" },
        { text: "Making sure everyone's having a good time", type: "host" }
      ]
    },
    {
      id: 6,
      text: "The host runs out of ice. You:",
      options: [
        { text: "Volunteer to make a store run without being asked", type: "host" },
        { text: "Help figure out a solution with others", type: "connector" },
        { text: "Didn't notice, too busy leading a dance circle", type: "life" },
        { text: "Quietly drink my warm beverage without complaint", type: "wallflower" }
      ]
    },
    {
      id: 7,
      text: "How many new people do you typically talk to at a party?",
      options: [
        { text: "0-2, I stick with people I know", type: "wallflower" },
        { text: "As many as possible! I love meeting people", type: "connector" },
        { text: "Everyone I'm around ends up in my circle somehow", type: "life" },
        { text: "A few, but I'm usually too busy managing things", type: "host" }
      ]
    },
    {
      id: 8,
      text: "Someone suggests a group activity (games, karaoke, etc.). You:",
      options: [
        { text: "Watch enthusiastically from the sidelines", type: "wallflower" },
        { text: "Help organize and get everyone involved", type: "connector" },
        { text: "First one in, probably leading it within minutes", type: "life" },
        { text: "Set it up and make sure everyone has what they need", type: "host" }
      ]
    },
    {
      id: 9,
      text: "It's getting late. When do you leave?",
      options: [
        { text: "Already left 2 hours ago (Irish goodbye)", type: "wallflower" },
        { text: "When my people are ready, I flow with the group", type: "connector" },
        { text: "Last one standing, carrying the party energy", type: "life" },
        { text: "After I've helped clean up a bit", type: "host" }
      ]
    },
    {
      id: 10,
      text: "The day after a party, people usually remember you as:",
      options: [
        { text: "That chill person they had a nice conversation with", type: "wallflower" },
        { text: "The social glue who introduced everyone", type: "connector" },
        { text: "The hilarious center of attention", type: "life" },
        { text: "The one who kept things running smoothly", type: "host" }
      ]
    }
  ],
  results: {
    life: {
      type: "The Life of the Party",
      description: "The party doesn't start until you arrive, and everyone knows it. You're magnetic, loud in the best way, and always where the fun is. Dance floor? You're starting it. Karaoke? You're the headliner. You leave every party with 5 new best friends and stories that become legends.",
      traits: ["Energetic", "Entertaining", "Magnetic", "Memorable"],
      advice: "Your energy is a gift, but remember: sometimes the quieter moments make the best connections. Let others shine too - a true life of the party knows how to share the spotlight."
    },
    connector: {
      type: "The Social Connector",
      description: "You're the person who somehow knows everyone and makes sure everyone knows each other. 'Oh, you two HAVE to meet!' is your catchphrase. You move through parties like a skilled diplomat, creating connections and keeping energy flowing. You're basically a one-person networking event.",
      traits: ["Social", "Inclusive", "Warm", "Intuitive"],
      advice: "You're amazing at connecting others, but don't forget to make your own deep connections too. Sometimes stay in one conversation a little longer - you deserve real moments, not just facilitated ones."
    },
    host: {
      type: "The Secret Host",
      description: "Even when it's not your party, it kind of is. You're refilling chips, watching the temperature, making sure wallflowers are included. You can't help it - you're a natural caretaker who shows love through hospitality. Hosts love you because you basically co-host without being asked.",
      traits: ["Caring", "Attentive", "Selfless", "Responsible"],
      advice: "Your thoughtfulness is beautiful, but remember: you're a guest too! Let yourself enjoy the party sometimes. The chips can run out for 10 minutes while you have fun."
    },
    wallflower: {
      type: "The Quality Connection Seeker",
      description: "Big groups exhaust you, but you're not antisocial - you're selective. You'd rather have one incredible conversation than ten surface-level ones. You observe, you listen, and when you do engage, it's meaningful. You're the person people remember for actually listening.",
      traits: ["Thoughtful", "Genuine", "Observant", "Deep"],
      advice: "Your depth is valuable, but sometimes push yourself slightly outside your comfort zone. That stranger might become a great friend. And it's okay to leave early - protecting your energy is valid."
    }
  }
};
