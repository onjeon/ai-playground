// Your Birthday Celebration Style - Fun viral test

export const testData = {
  id: "fun-birthday-celebration",
  title: "Your Birthday Celebration Style",
  description: "How do you handle YOUR special day? Big party energy or birthday hiding? Let's find out your celebration style.",
  questions: [
    {
      id: 1,
      text: "It's your birthday morning. Your first thought:",
      options: [
        { text: "IT'S MY DAY! Time to celebrate ME!", type: "diva" },
        { text: "Nice! Wonder what's planned", type: "lowkey" },
        { text: "Please don't make a big deal out of this", type: "hider" },
        { text: "Perfect excuse to gather my people", type: "host" }
      ]
    },
    {
      id: 2,
      text: "Your ideal birthday celebration:",
      options: [
        { text: "Big party - the more people celebrating me, the better", type: "diva" },
        { text: "Intimate gathering with closest friends", type: "lowkey" },
        { text: "Maybe dinner with one or two people, if anything", type: "hider" },
        { text: "I plan a great event where everyone has fun", type: "host" }
      ]
    },
    {
      id: 3,
      text: "Birthday posts on social media:",
      options: [
        { text: "I post AND expect everyone to wish me happy birthday", type: "diva" },
        { text: "Maybe share a story, keep it casual", type: "lowkey" },
        { text: "Hide my birthday so no one knows", type: "hider" },
        { text: "Post about the event I'm hosting more than myself", type: "host" }
      ]
    },
    {
      id: 4,
      text: "Someone forgets your birthday. You:",
      options: [
        { text: "Notice immediately, bring it up, remember forever", type: "diva" },
        { text: "Notice, maybe a little hurt, don't make it weird", type: "lowkey" },
        { text: "Relief - one less awkward interaction", type: "hider" },
        { text: "Didn't really notice - I was busy hosting", type: "host" }
      ]
    },
    {
      id: 5,
      text: "Birthday gifts. Your expectations:",
      options: [
        { text: "Curated wishlist shared in advance. Hints dropped", type: "diva" },
        { text: "Nice if it happens, not necessary", type: "lowkey" },
        { text: "Please don't - I hate the attention", type: "hider" },
        { text: "I usually end up buying stuff for my own party", type: "host" }
      ]
    },
    {
      id: 6,
      text: "Birthday week or birthday day?",
      options: [
        { text: "BIRTHDAY MONTH. Multiple celebrations", type: "diva" },
        { text: "Just the day, maybe a dinner the weekend around it", type: "lowkey" },
        { text: "Just the day, and even that feels like a lot", type: "hider" },
        { text: "Usually a weekend event so more people can come", type: "host" }
      ]
    },
    {
      id: 7,
      text: "The 'happy birthday' song is sung. You:",
      options: [
        { text: "BASK in it. Main character moment", type: "diva" },
        { text: "Smile awkwardly but appreciate the gesture", type: "lowkey" },
        { text: "Wish for the sweet release of invisibility", type: "hider" },
        { text: "Conduct the song to make sure it sounds good", type: "host" }
      ]
    },
    {
      id: 8,
      text: "Planning your own birthday celebration:",
      options: [
        { text: "Absolutely - no one knows what I want like me", type: "diva" },
        { text: "Maybe suggest things, let others organize", type: "lowkey" },
        { text: "Please just let the day pass quietly", type: "hider" },
        { text: "I plan elaborate events, that's half the fun", type: "host" }
      ]
    },
    {
      id: 9,
      text: "At a restaurant, someone tells the server it's your birthday. You:",
      options: [
        { text: "YES! Free dessert and attention!", type: "diva" },
        { text: "Embarrassed but roll with it", type: "lowkey" },
        { text: "Immediately want to crawl under the table", type: "hider" },
        { text: "Make sure the experience is fun for everyone at the table", type: "host" }
      ]
    },
    {
      id: 10,
      text: "Your birthday philosophy:",
      options: [
        { text: "My birthday is important and should be celebrated accordingly", type: "diva" },
        { text: "Nice to acknowledge, no need to overdo it", type: "lowkey" },
        { text: "It's just another day, I don't see the big deal", type: "hider" },
        { text: "Great excuse to bring people together and have fun", type: "host" }
      ]
    }
  ],
  results: {
    diva: {
      type: "The Birthday Royalty",
      description: "Your birthday is a HOLIDAY and you treat it as such. Birthday week? Birthday month? Honestly, why not both? You expect celebration, you orchestrate the vibes, and you're not ashamed of it. It's YOUR day and everyone should know. The confidence is honestly admirable.",
      traits: ["Confident", "Celebratory", "Extra", "Unapologetic"],
      advice: "Your birthday energy is iconic! Just remember: people celebrate you because they love you, not because they have to. Make sure to appreciate those who show up, and maybe reciprocate the energy on their birthdays too."
    },
    lowkey: {
      type: "The Casual Celebrator",
      description: "Birthdays are nice, but you're not making a production. A nice dinner, some loved ones, maybe a cake - that's enough. You appreciate the acknowledgment without needing a parade. You're the healthy middle ground that doesn't stress anyone out, including yourself.",
      traits: ["Balanced", "Appreciative", "Easy-going", "Moderate"],
      advice: "Your chill approach is refreshing! But occasionally let people go all out for you - they WANT to celebrate you. It's okay to feel special for a day. Let yourself be spoiled once in a while."
    },
    hider: {
      type: "The Birthday Hider",
      description: "If you could skip your birthday entirely, you would. The attention feels uncomfortable, the 'happy birthday' song is torture, and you've definitely considered hiding your birthday on social media. You're not anti-fun - you're anti-being-the-center-of-attention.",
      traits: ["Private", "Humble", "Uncomfortable", "Low-profile"],
      advice: "Your discomfort with attention is valid! But birthdays can be celebrated on your own terms. A quiet dinner, a solo treat, a day of doing exactly what you want - you deserve that without the spotlight."
    },
    host: {
      type: "The Birthday Host",
      description: "Your birthday is really about creating an experience for others. You plan events, coordinate logistics, and make sure everyone's having a good time - including yourself, but often secondarily. You turn your special day into an occasion for everyone. Very selfless, slightly chaotic.",
      traits: ["Generous", "Organized", "Giving", "Social"],
      advice: "Your hosting instincts are beautiful! But remember: it's YOUR birthday. Let someone else handle logistics for once. You deserve to be celebrated, not to be catering the celebration. Sit back and receive for a change."
    }
  }
};
