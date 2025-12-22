// Are You a Social Media Lurker? - Fun viral test

export const testData = {
  id: "fun-social-media-lurker",
  title: "Are You a Social Media Lurker?",
  description: "Some post, some scroll. Some watch from the shadows. Which kind of social media creature are you?",
  questions: [
    {
      id: 1,
      text: "Your posting frequency on social media:",
      options: [
        { text: "Daily, sometimes multiple times a day", type: "poster" },
        { text: "Few times a week when something's worth sharing", type: "balanced" },
        { text: "Once every few months, maybe less", type: "lurker" },
        { text: "My last post was during the Obama administration", type: "ghost" }
      ]
    },
    {
      id: 2,
      text: "You see a meme that perfectly describes your life. You:",
      options: [
        { text: "Share it immediately with a relatable caption", type: "poster" },
        { text: "Send it to specific friends who'd get it", type: "balanced" },
        { text: "Laugh, screenshot it, never share it", type: "lurker" },
        { text: "Quietly appreciate it and scroll on", type: "ghost" }
      ]
    },
    {
      id: 3,
      text: "When you open Instagram/TikTok, you typically:",
      options: [
        { text: "Post something I've been planning", type: "poster" },
        { text: "Check notifications, browse, maybe engage", type: "balanced" },
        { text: "Scroll for an hour, leave no trace", type: "lurker" },
        { text: "Watch stories without ever reacting", type: "ghost" }
      ]
    },
    {
      id: 4,
      text: "Someone you barely know follows you. You:",
      options: [
        { text: "Follow back, more followers = more reach", type: "poster" },
        { text: "Check their profile, follow if interesting", type: "balanced" },
        { text: "Ignore it. My account is practically abandoned anyway", type: "lurker" },
        { text: "Who is looking at my page? Now I'm nervous", type: "ghost" }
      ]
    },
    {
      id: 5,
      text: "Your relationship with 'stories':",
      options: [
        { text: "Post multiple daily, they're my main content", type: "poster" },
        { text: "Occasional posts when I'm doing something fun", type: "balanced" },
        { text: "Watch everyone else's, never post my own", type: "lurker" },
        { text: "Have watched exactly 3 stories in my life", type: "ghost" }
      ]
    },
    {
      id: 6,
      text: "A friend posts about a big life event. You:",
      options: [
        { text: "Like, comment, share to my story, hype them UP", type: "poster" },
        { text: "Like and leave a nice comment", type: "balanced" },
        { text: "See it, think 'good for them', scroll past", type: "lurker" },
        { text: "Find out 3 weeks later through someone else", type: "ghost" }
      ]
    },
    {
      id: 7,
      text: "Your profile bio and photo are:",
      options: [
        { text: "Regularly updated, curated, on brand", type: "poster" },
        { text: "Current enough, updated when needed", type: "balanced" },
        { text: "From 2018 and I'm not changing it", type: "lurker" },
        { text: "Bio is blank, photo is a landscape or my cat", type: "ghost" }
      ]
    },
    {
      id: 8,
      text: "You went on an amazing vacation. Your social presence:",
      options: [
        { text: "Real-time updates, stories, posts, the works", type: "poster" },
        { text: "A few posts during or a dump after", type: "balanced" },
        { text: "Tell close friends in person, maybe one post weeks later", type: "lurker" },
        { text: "Nobody on social media knew I was gone", type: "ghost" }
      ]
    },
    {
      id: 9,
      text: "When someone mentions something you posted, you feel:",
      options: [
        { text: "Happy! That's the point of posting", type: "poster" },
        { text: "Nice that they noticed, no big deal", type: "balanced" },
        { text: "Surprised - I forgot I even posted that", type: "lurker" },
        { text: "Wait, people see my posts? I have 3 followers", type: "ghost" }
      ]
    },
    {
      id: 10,
      text: "Social media to you is mostly for:",
      options: [
        { text: "Sharing my life and connecting with people", type: "poster" },
        { text: "Keeping up with friends and interests", type: "balanced" },
        { text: "Silently watching what everyone else is doing", type: "lurker" },
        { text: "Honestly not sure why I still have accounts", type: "ghost" }
      ]
    }
  ],
  results: {
    poster: {
      type: "The Active Poster",
      description: "Your social media is ALIVE. You post, you engage, you're probably thinking about content right now. Your followers know what you had for breakfast and how you feel about it. You're building a brand, sharing your life, and absolutely crushing the algorithm. Your screen time report is... concerning.",
      traits: ["Expressive", "Connected", "Creative", "Present"],
      advice: "Your online presence is impressive! Just remember to live some moments without documenting them. The best experiences sometimes shouldn't become content. And check that screen time..."
    },
    balanced: {
      type: "The Healthy User",
      description: "You've somehow figured out social media without letting it consume you. You share when you want to, engage when it matters, and log off without feeling like you're missing out. You're the unicorn of social media users. Scientists should study you.",
      traits: ["Balanced", "Intentional", "Present", "Selective"],
      advice: "You've cracked the code! Keep this healthy relationship. Share your wisdom with those lost in the endless scroll. You're living the dream."
    },
    lurker: {
      type: "The Silent Observer",
      description: "You see EVERYTHING but reveal nothing. You know what everyone's doing, who's dating who, and which friends went where - all without leaving a single like. You're the social media equivalent of a nature documentarian: observing, never interfering. Your viewing history is extensive; your activity is nonexistent.",
      traits: ["Observant", "Private", "Informed", "Stealthy"],
      advice: "Your lurking is valid, but consider: a like or comment costs nothing and might make someone's day. You don't have to post, but engaging once in a while won't hurt. We know you're there..."
    },
    ghost: {
      type: "The Social Media Ghost",
      description: "Do you even have social media? Technically yes, but functionally no. Your accounts exist as digital ghosts - created, forgotten, occasionally haunted. You find out about trends months late and honestly prefer it that way. You're either extremely at peace or missing some important event invites.",
      traits: ["Disconnected", "Private", "Independent", "Unbothered"],
      advice: "Your offline lifestyle is admirable, but make sure important info reaches you! Maybe check in occasionally so you don't miss life events. That said, your mental health is probably better than most of ours."
    }
  }
};
