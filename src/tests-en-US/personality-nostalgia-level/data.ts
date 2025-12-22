// How Nostalgic Are You? - Viral personality test for American English users

export const testData = {
  id: "personality-nostalgia-level",
  title: "How Nostalgic Are You?",
  description: "Do you live in the past or barely remember yesterday? Let's explore your relationship with memories!",
  questions: [
    {
      id: 1,
      text: "A song from your childhood comes on. Your reaction:",
      options: [
        { text: "Full emotional flashback, possibly tearing up", type: "ultra" },
        { text: "Warm fuzzy feelings and good memories", type: "nostalgic" },
        { text: "Nice throwback! Then I move on with my day", type: "balanced" },
        { text: "Oh yeah, I remember this. Anyway...", type: "present" }
      ]
    },
    {
      id: 2,
      text: "You find a box of old photos from years ago. You:",
      options: [
        { text: "Cancel plans to go through every single one", type: "ultra" },
        { text: "Spend a good hour reminiscing happily", type: "nostalgic" },
        { text: "Flip through with a smile, then put it away", type: "balanced" },
        { text: "Maybe glance at a few, not super interested", type: "present" }
      ]
    },
    {
      id: 3,
      text: "How often do you think 'things were better back when...'?",
      options: [
        { text: "Daily. The past was genuinely better", type: "ultra" },
        { text: "Sometimes, especially about specific things", type: "nostalgic" },
        { text: "Occasionally, but I know it's rose-colored glasses", type: "balanced" },
        { text: "Rarely or never. Now is what matters", type: "present" }
      ]
    },
    {
      id: 4,
      text: "A place from your past gets demolished or closes. You feel:",
      options: [
        { text: "Genuinely heartbroken, like losing a piece of myself", type: "ultra" },
        { text: "Sad and sentimental, lots of memories there", type: "nostalgic" },
        { text: "A little bummed but change happens", type: "balanced" },
        { text: "Everything has its time. Barely affects me", type: "present" }
      ]
    },
    {
      id: 5,
      text: "You run into someone from your past you haven't seen in years. You:",
      options: [
        { text: "Want to reconnect and relive old times together", type: "ultra" },
        { text: "Enjoy catching up and reminiscing", type: "nostalgic" },
        { text: "Pleasant chat, maybe exchange numbers, might not follow up", type: "balanced" },
        { text: "Brief hello, not particularly interested in revisiting the past", type: "present" }
      ]
    },
    {
      id: 6,
      text: "How do you feel about your old room/childhood home?",
      options: [
        { text: "Sacred space. I'd cry if I couldn't visit it", type: "ultra" },
        { text: "Special to me, I like visiting when I can", type: "nostalgic" },
        { text: "Nice memories but I've moved on", type: "balanced" },
        { text: "Just a building. My home is where I am now", type: "present" }
      ]
    },
    {
      id: 7,
      text: "Rewatching movies/shows from your childhood:",
      options: [
        { text: "Essential self-care. I do it regularly", type: "ultra" },
        { text: "A comforting treat I enjoy sometimes", type: "nostalgic" },
        { text: "Occasionally fun but I prefer new content", type: "balanced" },
        { text: "Why rewatch when there's new stuff?", type: "present" }
      ]
    },
    {
      id: 8,
      text: "Your relationship with keeping physical mementos:",
      options: [
        { text: "I keep EVERYTHING. Each item tells a story", type: "ultra" },
        { text: "I have a collection of meaningful items", type: "nostalgic" },
        { text: "A few special things, but I don't hoard", type: "balanced" },
        { text: "Minimal stuff. Memories don't need objects", type: "present" }
      ]
    },
    {
      id: 9,
      text: "Someone brings up your 'glory days' (school, early career, etc.). You:",
      options: [
        { text: "Light up! I could talk about those times for hours", type: "ultra" },
        { text: "Enjoy reminiscing about good memories", type: "nostalgic" },
        { text: "Happy to chat briefly but don't dwell there", type: "balanced" },
        { text: "The past is the past. I'm focused on now", type: "present" }
      ]
    },
    {
      id: 10,
      text: "How would you describe your relationship with the past?",
      options: [
        { text: "I visit it often and it feels like home", type: "ultra" },
        { text: "Fond attachment, I value my memories", type: "nostalgic" },
        { text: "Appreciate it but live in the present", type: "balanced" },
        { text: "Mostly irrelevant to who I am now", type: "present" }
      ]
    }
  ],
  results: {
    ultra: {
      type: "The Eternal Reminiscer",
      description: "The past isn't just a place you visit - it's basically where you live. You feel everything deeply and those memories never fade. You've got playlists for specific eras of your life and could write novels about your childhood summers. Your memories are vivid, precious, and always with you.",
      traits: ["Sentimental", "Memory-rich", "Emotionally connected", "Past-focused"],
      advice: "Your deep connection to memories is beautiful and gives your life rich meaning! But make sure you're creating new memories too, not just reliving old ones. The present moment is also worth your full attention. The best is not always behind you."
    },
    nostalgic: {
      type: "The Fond Memory Keeper",
      description: "You have a healthy appreciation for the past without being stuck there. Nostalgia gives you comfort and joy but doesn't consume you. You've kept meaningful mementos and love a good throwback, but you're also living your current life fully. Perfect balance.",
      traits: ["Sentimental", "Grounded", "Memory-appreciating", "Balanced"],
      advice: "Your relationship with the past is wonderfully healthy! You honor where you've been while embracing where you're going. Keep cherishing those memories while staying open to making new ones."
    },
    balanced: {
      type: "The Present-Grounded Rememberer",
      description: "You can appreciate a good memory but you're not defined by them. The past is nice to visit occasionally but you're mainly focused on what's in front of you. You're practical about what you keep and what you let go of. Your energy is in the now.",
      traits: ["Practical", "Present-focused", "Selective", "Forward-moving"],
      advice: "Your groundedness in the present serves you well! Just don't dismiss nostalgia entirely - looking back sometimes offers valuable perspective and comfort. Those memories are part of your story too."
    },
    present: {
      type: "The Forward-Focus Free Spirit",
      description: "Yesterday? Don't know her. You're all about the now and what's next. The past is over and you don't see much point in dwelling there. You travel light emotionally and physically - no baggage, just forward momentum. Some might call it detached; you call it efficient.",
      traits: ["Present-focused", "Unburdened", "Forward-moving", "Detached"],
      advice: "Your forward focus keeps you light and adaptable! But memories have value beyond nostalgia - they're how we learn and connect. Take time occasionally to reflect on where you've been. It might offer wisdom for where you're going."
    }
  }
};
