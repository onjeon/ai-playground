// What Fantasy World Should You Live In? - Viral quirky test for American English users

export const testData = {
  id: "quirky-fantasy-world",
  title: "What Fantasy World Should You Live In?",
  description: "Hogwarts? Middle Earth? A galaxy far, far away? Find your fictional home!",
  questions: [
    {
      id: 1,
      text: "Your preferred mode of travel:",
      options: [
        { text: "Magic - teleportation, flying brooms, portkeys", type: "magical" },
        { text: "Epic journey - walking across beautiful landscapes", type: "epic" },
        { text: "Technology - spaceships and hyperdrive", type: "scifi" },
        { text: "Dragon, mythical beast, or magical creature", type: "creature" }
      ]
    },
    {
      id: 2,
      text: "Your ideal fantasy skill:",
      options: [
        { text: "Magic spells and wizardry", type: "magical" },
        { text: "Sword fighting and heroic skills", type: "epic" },
        { text: "Advanced technology and space navigation", type: "scifi" },
        { text: "Bond with magical creatures", type: "creature" }
      ]
    },
    {
      id: 3,
      text: "Your fantasy conflict preference:",
      options: [
        { text: "Good vs. evil with magic battles", type: "magical" },
        { text: "Epic quests against ancient darkness", type: "epic" },
        { text: "Political intrigue across galaxies", type: "scifi" },
        { text: "Protecting and freeing magical beings", type: "creature" }
      ]
    },
    {
      id: 4,
      text: "Your ideal fantasy home:",
      options: [
        { text: "A magical castle or hidden wizard school", type: "magical" },
        { text: "A cozy cottage in a peaceful land (with adventure nearby)", type: "epic" },
        { text: "A sleek spaceship or space station", type: "scifi" },
        { text: "A haven where dragons/creatures roam free", type: "creature" }
      ]
    },
    {
      id: 5,
      text: "The fantasy friend group you'd want:",
      options: [
        { text: "Fellow magic users learning together", type: "magical" },
        { text: "A fellowship of diverse heroes", type: "epic" },
        { text: "A ragtag crew of space adventurers", type: "scifi" },
        { text: "Magical creatures who become family", type: "creature" }
      ]
    },
    {
      id: 6,
      text: "Your fantasy world aesthetics:",
      options: [
        { text: "Whimsical magic, floating candles, hidden doors", type: "magical" },
        { text: "Majestic mountains, ancient forests, medieval glory", type: "epic" },
        { text: "Sleek technology, alien planets, futuristic cities", type: "scifi" },
        { text: "Magical creatures, elemental beauty, creature bonds", type: "creature" }
      ]
    },
    {
      id: 7,
      text: "Your fantasy power fantasy:",
      options: [
        { text: "Being the most powerful witch/wizard", type: "magical" },
        { text: "Being the hero who saves the world", type: "epic" },
        { text: "Mastering the galaxy and its mysteries", type: "scifi" },
        { text: "Being chosen by the most powerful creature", type: "creature" }
      ]
    },
    {
      id: 8,
      text: "The franchise that resonates most:",
      options: [
        { text: "Harry Potter / magical school stories", type: "magical" },
        { text: "Lord of the Rings / epic quest stories", type: "epic" },
        { text: "Star Wars / Star Trek / space adventures", type: "scifi" },
        { text: "How to Train Your Dragon / creature bonds", type: "creature" }
      ]
    },
    {
      id: 9,
      text: "What draws you to fantasy worlds:",
      options: [
        { text: "Magic making impossible things possible", type: "magical" },
        { text: "Heroes rising to face great evil", type: "epic" },
        { text: "Exploring the unknown universe", type: "scifi" },
        { text: "Connections with magical creatures", type: "creature" }
      ]
    },
    {
      id: 10,
      text: "Your fantasy world escape need:",
      options: [
        { text: "To feel special and discover hidden powers", type: "magical" },
        { text: "To go on meaningful adventures with purpose", type: "epic" },
        { text: "To explore beyond the limits of this world", type: "scifi" },
        { text: "To bond with beings who truly understand me", type: "creature" }
      ]
    }
  ],
  results: {
    magical: {
      type: "The Wizarding World",
      description: "You belong at HOGWARTS! Or some magical school/society where spells are real, magic is learned, and you're special in ways the muggle world never recognized. You want whimsy, wonder, and the revelation that there's more to the world than meets the eye. Your letter is coming.",
      traits: ["Magic-seeking", "Wonder-loving", "Special", "Whimsical"],
      advice: "Your love of magical worlds speaks to wanting to feel special and discover hidden potential. In real life, seek communities that feel magical, learn skills that feel like powers, and never lose that sense of wonder. Magic is where you find it."
    },
    epic: {
      type: "Middle Earth / Epic Fantasy Realm",
      description: "You belong on an EPIC QUEST! Middle Earth, Narnia, or any world where heroes rise, journeys matter, and good can triumph over ancient evil. You want purpose, adventure with meaning, and the chance to be part of something legendary. Your fellowship awaits.",
      traits: ["Heroic", "Purpose-driven", "Adventure-seeking", "Epic-loving"],
      advice: "Your love of epic fantasy speaks to wanting meaningful purpose and adventure. In real life, seek quests that matter to you, build your fellowship of trusted companions, and remember that small actions can change the world."
    },
    scifi: {
      type: "A Galaxy Far, Far Away",
      description: "You belong among the STARS! Star Wars, Star Trek, or any universe where spaceships fly, aliens befriend humans, and the galaxy is full of mysteries. You want to explore beyond limits, discover the unknown, and find your place in something vast.",
      traits: ["Exploratory", "Future-focused", "Curious", "Boundary-pushing"],
      advice: "Your love of space fantasy speaks to wanting to push boundaries and explore the unknown. In real life, stay curious, embrace technology and future possibilities, and remember that we're all on a spaceship (Earth) hurtling through space."
    },
    creature: {
      type: "A World of Dragons and Creatures",
      description: "You belong in a world with MAGICAL CREATURES! Whether dragons, phoenixes, or beings that only exist in stories - you want to bond with something beyond human. You crave the loyalty and understanding that transcends species. Your dragon is waiting.",
      traits: ["Animal-bonding", "Magical connection", "Creature-loving", "Beyond human"],
      advice: "Your love of creature fantasy speaks to wanting deep, loyal connections and bonds that transcend ordinary relationships. In real life, animals may be your path to this magic. The bonds you seek are possible - just not with dragons (yet)."
    }
  }
};
