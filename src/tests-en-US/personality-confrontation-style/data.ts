// How Do You Handle Confrontation? - Viral personality test for American English users

export const testData = {
  id: "personality-confrontation-style",
  title: "How Do You Handle Confrontation?",
  description: "Fight, flight, or freeze? Let's discover your conflict style!",
  questions: [
    {
      id: 1,
      text: "Someone cuts in line right in front of you. You:",
      options: [
        { text: "Immediately call them out: 'Excuse me, the line is back there'", type: "direct" },
        { text: "Say something if they don't move, but give them a moment first", type: "assertive" },
        { text: "Shoot them a look but probably stay quiet", type: "passive" },
        { text: "Let it go completely. Not worth the conflict", type: "avoider" }
      ]
    },
    {
      id: 2,
      text: "A friend says something that hurts your feelings. You:",
      options: [
        { text: "Tell them right away that wasn't okay", type: "direct" },
        { text: "Bring it up later in a calm conversation", type: "assertive" },
        { text: "Act weird until they notice something's wrong", type: "passive" },
        { text: "Keep it inside and try to forget about it", type: "avoider" }
      ]
    },
    {
      id: 3,
      text: "You receive terrible service at a restaurant. Your response:",
      options: [
        { text: "Speak to the manager, honestly", type: "direct" },
        { text: "Politely address it with the server first", type: "assertive" },
        { text: "Leave a smaller tip and maybe a Yelp review later", type: "passive" },
        { text: "Just deal with it. It's one meal", type: "avoider" }
      ]
    },
    {
      id: 4,
      text: "Someone at work takes credit for your idea. You:",
      options: [
        { text: "Call it out right there: 'Actually, that was my idea'", type: "direct" },
        { text: "Address it privately with them or your boss later", type: "assertive" },
        { text: "Resent them silently but never say anything", type: "passive" },
        { text: "Let it go - ideas don't need ownership", type: "avoider" }
      ]
    },
    {
      id: 5,
      text: "You disagree strongly with someone's opinion. You:",
      options: [
        { text: "Tell them exactly why they're wrong", type: "direct" },
        { text: "Share my perspective respectfully", type: "assertive" },
        { text: "Nod along to avoid argument, disagree internally", type: "passive" },
        { text: "Change the subject entirely", type: "avoider" }
      ]
    },
    {
      id: 6,
      text: "A neighbor's noise is keeping you awake. Your move:",
      options: [
        { text: "Go knock on their door right now", type: "direct" },
        { text: "Leave a polite note or catch them tomorrow", type: "assertive" },
        { text: "Suffer in silence, maybe complain to others", type: "passive" },
        { text: "Get earplugs. Not worth the potential drama", type: "avoider" }
      ]
    },
    {
      id: 7,
      text: "Someone makes a problematic joke. You:",
      options: [
        { text: "Call it out immediately, even if it's awkward", type: "direct" },
        { text: "Say 'I don't think that's funny' or pull them aside", type: "assertive" },
        { text: "Don't laugh but don't say anything either", type: "passive" },
        { text: "Just ignore it and move on", type: "avoider" }
      ]
    },
    {
      id: 8,
      text: "Your partner/roommate isn't pulling their weight with chores. You:",
      options: [
        { text: "Direct conversation: 'We need to talk about this'", type: "direct" },
        { text: "Bring it up gently when the moment's right", type: "assertive" },
        { text: "Do it yourself with visible frustration", type: "passive" },
        { text: "Just do it yourself. Easier than fighting", type: "avoider" }
      ]
    },
    {
      id: 9,
      text: "An argument is brewing in a group setting. Your role:",
      options: [
        { text: "Jump in with my opinion, let's hash it out", type: "direct" },
        { text: "Try to mediate and find common ground", type: "assertive" },
        { text: "Stay quiet but have strong opinions I share later", type: "passive" },
        { text: "Physically or mentally exit the situation", type: "avoider" }
      ]
    },
    {
      id: 10,
      text: "How does confrontation make you feel?",
      options: [
        { text: "Energized, honestly. I don't back down", type: "direct" },
        { text: "Uncomfortable but necessary sometimes", type: "assertive" },
        { text: "Anxious. I'd rather handle it indirectly", type: "passive" },
        { text: "Terrified. I avoid it at all costs", type: "avoider" }
      ]
    }
  ],
  results: {
    direct: {
      type: "The Direct Confronter",
      description: "You don't let things slide. If there's a problem, you address it head-on, immediately. Some call you aggressive; you call it honest. You'd rather have an uncomfortable conversation than let resentment build. People always know where they stand with you - whether they like it or not.",
      traits: ["Direct", "Honest", "Unafraid", "Sometimes intense"],
      advice: "Your directness is admirable and clears the air quickly! But consider timing and delivery - being right doesn't help if you've alienated everyone. Sometimes letting small things go preserves relationships. Pick your battles wisely."
    },
    assertive: {
      type: "The Healthy Communicator",
      description: "You've mastered the art of standing up for yourself without starting wars. You address issues calmly and constructively. You're not a pushover, but you're not aggressive either. People can disagree with you and still feel respected. This is genuinely impressive!",
      traits: ["Balanced", "Respectful", "Clear", "Mature"],
      advice: "Your communication style is genuinely healthy! Keep modeling this behavior for others. Make sure you're not suppressing feelings to seem mature though - it's okay to feel strongly and express it. Stay authentic."
    },
    passive: {
      type: "The Indirect Handler",
      description: "You have feelings about conflicts... you just don't express them directly. You might drop hints, make faces, vent to others, or hope people psychically understand you're upset. It's not ideal, but direct confrontation feels impossible. The feelings come out eventually - just sideways.",
      traits: ["Indirect", "Hint-dropping", "Non-confrontational", "Internally frustrated"],
      advice: "Your feelings are valid even if expressing them feels scary! But indirect communication often backfires. Try small steps toward directness - 'I felt hurt when...' is a good start. People can't fix what they don't know is broken."
    },
    avoider: {
      type: "The Peace-Keeper",
      description: "Confrontation? Don't know her. You'll do almost anything to avoid conflict - including swallowing your feelings entirely. You tell yourself it's not a big deal, but sometimes it is. Your peace is precious to you, even if it costs you some self-advocacy.",
      traits: ["Conflict-averse", "Peaceful", "Self-sacrificing", "Anxious about confrontation"],
      advice: "Your desire for peace is understandable, but avoiding all conflict means your needs often go unmet. Practice small boundary-setting in low-stakes situations. Remember: healthy relationships can survive and even grow from respectful disagreements."
    }
  }
};
