// How Are You at Small Talk? - Viral personality test for American English users

export const testData = {
  id: "personality-small-talk",
  title: "How Are You at Small Talk?",
  description: "Master conversationalist or awkward silence champion? Let's rate your small talk skills!",
  questions: [
    {
      id: 1,
      text: "You're in an elevator with a stranger. You:",
      options: [
        { text: "Strike up a friendly conversation about anything", type: "natural" },
        { text: "Maybe comment on the weather, keep it brief", type: "capable" },
        { text: "Stare at my phone to avoid interaction", type: "awkward" },
        { text: "Pray they don't try to talk to me", type: "allergic" }
      ]
    },
    {
      id: 2,
      text: "At a party where you don't know many people. Your strategy:",
      options: [
        { text: "Work the room! Everyone's a potential new friend", type: "natural" },
        { text: "Find someone who looks approachable and introduce myself", type: "capable" },
        { text: "Find one person I know and stay close to them", type: "awkward" },
        { text: "Hide near the snacks and hope no one notices me", type: "allergic" }
      ]
    },
    {
      id: 3,
      text: "Someone asks 'How was your weekend?' Your response:",
      options: [
        { text: "Full story with follow-up questions for them too", type: "natural" },
        { text: "Brief but friendly answer, return the question", type: "capable" },
        { text: "'Good, you?' - as short as possible", type: "awkward" },
        { text: "Panic briefly, say 'fine,' end conversation fast", type: "allergic" }
      ]
    },
    {
      id: 4,
      text: "There's an awkward silence in conversation. You:",
      options: [
        { text: "Barely notice - always have something to say", type: "natural" },
        { text: "Jump in with a topic to fill it", type: "capable" },
        { text: "Suffer through it, hoping they'll say something", type: "awkward" },
        { text: "Use it as an exit opportunity: 'Well, nice talking to you!'", type: "allergic" }
      ]
    },
    {
      id: 5,
      text: "Your Uber driver wants to chat. You:",
      options: [
        { text: "Love it! Learn their whole life story", type: "natural" },
        { text: "Chat politely but might wind down eventually", type: "capable" },
        { text: "One-word answers and hope they get the hint", type: "awkward" },
        { text: "Put in headphones the moment I get in", type: "allergic" }
      ]
    },
    {
      id: 6,
      text: "You run into an acquaintance at the grocery store. You:",
      options: [
        { text: "Catch up for 20 minutes blocking the aisle", type: "natural" },
        { text: "Quick friendly chat then move on", type: "capable" },
        { text: "Brief hello, hope it doesn't get awkward", type: "awkward" },
        { text: "Hide in another aisle until they leave", type: "allergic" }
      ]
    },
    {
      id: 7,
      text: "Networking events make you feel:",
      options: [
        { text: "Excited! Love meeting new people", type: "natural" },
        { text: "Slightly nervous but I can handle it", type: "capable" },
        { text: "Dread but I'll force myself through it", type: "awkward" },
        { text: "Like I need to reschedule immediately", type: "allergic" }
      ]
    },
    {
      id: 8,
      text: "Someone compliments something you're wearing. You:",
      options: [
        { text: "Thank them and turn it into a conversation", type: "natural" },
        { text: "Thank them warmly and maybe compliment back", type: "capable" },
        { text: "Awkward thanks, unsure what to say next", type: "awkward" },
        { text: "Forget how words work momentarily", type: "allergic" }
      ]
    },
    {
      id: 9,
      text: "The hairdresser/barber asks about your plans. You:",
      options: [
        { text: "Full conversation the entire appointment", type: "natural" },
        { text: "Chat pleasantly, some quiet moments are fine", type: "capable" },
        { text: "Minimal responses, prefer quiet", type: "awkward" },
        { text: "Why must they do this to me every time", type: "allergic" }
      ]
    },
    {
      id: 10,
      text: "How would you rate your small talk abilities overall?",
      options: [
        { text: "Expert level. I can talk to anyone about anything", type: "natural" },
        { text: "Pretty good when I need to be", type: "capable" },
        { text: "Struggling. It doesn't come naturally", type: "awkward" },
        { text: "Nonexistent. Please don't make me prove it", type: "allergic" }
      ]
    }
  ],
  results: {
    natural: {
      type: "The Conversation Maestro",
      description: "Small talk? You call it connecting with fellow humans! You could chat with a brick wall and make it interesting. Elevator rides become friendships, networking events become parties, and strangers become contacts in your phone. You're the social glue the world needs.",
      traits: ["Chatty", "Friendly", "Naturally social", "Connection-oriented"],
      advice: "Your social skills are a superpower! Just make sure you're reading cues when someone wants quiet time. Not everyone matches your conversational energy, and that's okay. Sometimes listening is the best form of connection."
    },
    capable: {
      type: "The Functional Socializer",
      description: "You can small talk when needed and do it well enough. You're not out there seeking random conversations, but you handle them gracefully when they happen. You've mastered the art of 'pleasant but not endless' chatting. Professionally social, you might say.",
      traits: ["Adaptable", "Socially skilled", "Balanced", "Pleasant"],
      advice: "Your social skills are well-calibrated! You engage when appropriate and can step back when needed. This balance serves you well in both personal and professional contexts. Keep being the social chameleon you are."
    },
    awkward: {
      type: "The Reluctant Talker",
      description: "Small talk exists and you participate in it... reluctantly. You know you're supposed to do it, you just haven't quite mastered the art. Conversations have weird pauses, exits are awkward, and you replay everything later thinking of better responses. It's fine. It builds character.",
      traits: ["Introverted", "Overthinking", "Trying their best", "Authentically awkward"],
      advice: "Your awkwardness is relatable and honestly endearing to the right people! Small talk is a learnable skill - try preparing a few go-to topics. And remember: most people are too worried about themselves to notice your awkwardness. You're doing better than you think!"
    },
    allergic: {
      type: "The Small Talk Escapist",
      description: "If small talk were a physical substance, you'd be allergic to it. You've mastered the art of avoiding eye contact, finding exits, and wearing headphones as a social shield. Deep conversations? Great. Weather chat? A personal hell. You're not antisocial - you're selectively social.",
      traits: ["Introverted", "Deep thinker", "Energy-conserving", "Socially selective"],
      advice: "It's valid to find small talk draining! But some basic social interaction lubricates life's gears. Try reframing it as a brief game with simple rules. You don't have to love it - just survive it gracefully. Save your energy for the conversations that matter to you."
    }
  }
};
