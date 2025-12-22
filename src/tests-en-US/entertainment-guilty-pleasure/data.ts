// What's Your Guilty Pleasure? - Viral entertainment test for American English users

export const testData = {
  id: "entertainment-guilty-pleasure",
  title: "What's Your Guilty Pleasure Entertainment?",
  description: "We all have that content we won't admit to watching. What's yours?",
  questions: [
    {
      id: 1,
      text: "When alone with no judgment, you watch:",
      options: [
        { text: "Reality TV drama - the messier the better", type: "reality" },
        { text: "Cheesy rom-coms or Hallmark movies", type: "romance" },
        { text: "Trashy content I'd never recommend publicly", type: "trash" },
        { text: "YouTube rabbit holes and random content", type: "random" }
      ]
    },
    {
      id: 2,
      text: "Your 'incognito mode' entertainment involves:",
      options: [
        { text: "Following reality TV drama and gossip", type: "reality" },
        { text: "Predictable romance content that always ends happy", type: "romance" },
        { text: "Stuff I know is bad but can't stop watching", type: "trash" },
        { text: "Hours-long rabbit holes about random topics", type: "random" }
      ]
    },
    {
      id: 3,
      text: "What would you be embarrassed to admit you've binged?",
      options: [
        { text: "Multiple seasons of reality dating/drama shows", type: "reality" },
        { text: "50+ Hallmark Christmas movies unironically", type: "romance" },
        { text: "That show everyone says is terrible but I love", type: "trash" },
        { text: "8 hours of video essays about a topic I'll never use", type: "random" }
      ]
    },
    {
      id: 4,
      text: "The content you'd hide from your search history:",
      options: [
        { text: "Reality TV recaps and drama accounts", type: "reality" },
        { text: "Cheesy romance novel adaptations", type: "romance" },
        { text: "Shows with 2-star ratings I unironically enjoy", type: "trash" },
        { text: "Why I watched 3 hours about a topic at 2am", type: "random" }
      ]
    },
    {
      id: 5,
      text: "Your guilty pleasure satisfies a need for:",
      options: [
        { text: "Drama and mess in others' lives, not mine", type: "reality" },
        { text: "Guaranteed happy endings and warm feelings", type: "romance" },
        { text: "Entertainment without caring about quality", type: "trash" },
        { text: "Absorbing random information endlessly", type: "random" }
      ]
    },
    {
      id: 6,
      text: "When someone catches you watching your guilty pleasure:",
      options: [
        { text: "'It's actually really interesting, the dynamics...'", type: "reality" },
        { text: "'It's comforting, okay? Don't judge me'", type: "romance" },
        { text: "'I know it's bad, I don't care, leave me alone'", type: "trash" },
        { text: "'I don't know how I got here but it's fascinating'", type: "random" }
      ]
    },
    {
      id: 7,
      text: "Your guilty pleasure pattern:",
      options: [
        { text: "Following every season of shows I 'hate-watch'", type: "reality" },
        { text: "Same type of predictable content on repeat", type: "romance" },
        { text: "Finishing things just to see how bad they get", type: "trash" },
        { text: "Going deeper and deeper into niche content", type: "random" }
      ]
    },
    {
      id: 8,
      text: "If your guilty pleasure was a secret, the stakes are:",
      options: [
        { text: "People thinking I'm basic/obsessed with drama", type: "reality" },
        { text: "People thinking I have unrealistic romantic expectations", type: "romance" },
        { text: "People questioning my taste and judgment", type: "trash" },
        { text: "People wondering what I do with my time", type: "random" }
      ]
    },
    {
      id: 9,
      text: "You consume guilty pleasure content because:",
      options: [
        { text: "Other people's chaos is entertaining", type: "reality" },
        { text: "Predictable comfort when real life is uncertain", type: "romance" },
        { text: "Something in my brain finds it satisfying", type: "trash" },
        { text: "Curiosity that spirals out of control", type: "random" }
      ]
    },
    {
      id: 10,
      text: "Honestly, do you feel guilty about your guilty pleasure?",
      options: [
        { text: "A little - I know it's 'junk food' content", type: "reality" },
        { text: "Sometimes - I know it's cheesy but I love it", type: "romance" },
        { text: "Not anymore - I've embraced my trash taste", type: "trash" },
        { text: "More confused than guilty about how I got here", type: "random" }
      ]
    }
  ],
  results: {
    reality: {
      type: "The Drama Spectator",
      description: "Your guilty pleasure is watching OTHER PEOPLE'S DRAMA unfold. Reality TV, influencer beef, celebrity gossip - you're here for the mess that isn't yours. It's entertaining, it's absorbing, and it makes your own life seem very calm and reasonable by comparison.",
      traits: ["Drama-loving", "Spectator", "Invested in chaos", "Escape through mess"],
      advice: "Your reality TV habit is shared by millions! There's something therapeutic about watching chaos you're not part of. Just remember it's edited for drama - not a reflection of real relationships or behavior."
    },
    romance: {
      type: "The Secret Romantic",
      description: "Your guilty pleasure is CHEESE. Rom-coms with predictable endings, Hallmark movies where love conquers all, romance content that you know exactly how it'll end. You want the guaranteed happy ending, the warm feelings, the escape into a world where love is simple.",
      traits: ["Romantic", "Comfort-seeking", "Predictability-loving", "Warm-fuzzy-feeling chaser"],
      advice: "Your love of love is beautiful! Predictable romance content serves a real emotional need. Don't be embarrassed - everyone deserves content that makes them feel good. Keep watching, keep feeling, keep believing in happy endings."
    },
    trash: {
      type: "The Trash TV Connoisseur",
      description: "Your guilty pleasure is stuff you KNOW is bad. Shows with terrible reviews, content everyone mocks, things you'd never recommend but can't stop watching. You've moved past shame into full acceptance of your trash taste. Quality is subjective anyway.",
      traits: ["Unashamed", "Trash-accepting", "Entertainment-focused", "Judgment-free"],
      advice: "Your embrace of 'bad' content is actually evolved! Not everything needs to be prestige TV. If it entertains you, it's doing its job. Keep enjoying your trash - you're not hurting anyone and you're having fun."
    },
    random: {
      type: "The Rabbit Hole Diver",
      description: "Your guilty pleasure is FALLING INTO CONTENT BLACK HOLES. You start watching one thing and emerge hours later an expert on a topic you never meant to learn about. YouTube rabbit holes, Wikipedia spirals, documentary deep-dives - your curiosity has no off switch.",
      traits: ["Curious", "Easily absorbed", "Information-seeking", "Time-blind"],
      advice: "Your curiosity is a gift! Sure, you meant to watch one video and watched twelve, but you learned things. Set timers if you need boundaries, but don't feel guilty about your active, curious brain."
    }
  }
};
