// Your Work Email Personality - Viral career test for American English users

export const testData = {
  id: "career-email-style",
  title: "Your Work Email Personality",
  description: "Are you 'per my last email' or 'thanks so much!!!'? Let's find out who you really are in the inbox.",
  questions: [
    {
      id: 1,
      text: "Your email sign-off of choice:",
      options: [
        { text: "Best, [Name]", type: "professional" },
        { text: "Thanks! or Thanks so much!!", type: "friendly" },
        { text: "Just my name or nothing at all", type: "minimalist" },
        { text: "Varies wildly based on how I feel", type: "chaotic" }
      ]
    },
    {
      id: 2,
      text: "Someone doesn't reply to your email. You:",
      options: [
        { text: "Follow up with a polite, professionally worded nudge", type: "professional" },
        { text: "Send a friendly 'just bumping this up!' message", type: "friendly" },
        { text: "Send a one-liner: 'Any update on this?'", type: "minimalist" },
        { text: "'Per my last email...' with barely concealed frustration", type: "chaotic" }
      ]
    },
    {
      id: 3,
      text: "Your average email length:",
      options: [
        { text: "Well-structured paragraphs with clear action items", type: "professional" },
        { text: "Friendly with exclamation points and sometimes too long", type: "friendly" },
        { text: "Three sentences max. Get to the point", type: "minimalist" },
        { text: "Either a novel or two words - no in between", type: "chaotic" }
      ]
    },
    {
      id: 4,
      text: "You receive a passive-aggressive email. Your response:",
      options: [
        { text: "Kill them with professional kindness and CC their manager", type: "professional" },
        { text: "Overly nice response to shame them with my positivity", type: "friendly" },
        { text: "Brief, factual response ignoring the tone entirely", type: "minimalist" },
        { text: "Match their energy but make it plausibly deniable", type: "chaotic" }
      ]
    },
    {
      id: 5,
      text: "Your email drafts folder situation:",
      options: [
        { text: "Templates ready for common situations", type: "professional" },
        { text: "A few drafts I keep revising to sound friendlier", type: "friendly" },
        { text: "Empty - I write and send immediately", type: "minimalist" },
        { text: "Full of angry emails I wrote but never sent", type: "chaotic" }
      ]
    },
    {
      id: 6,
      text: "The phrase 'as per my previous email' makes you feel:",
      options: [
        { text: "It's a useful professional phrase when needed", type: "professional" },
        { text: "I'd never - too confrontational!", type: "friendly" },
        { text: "Efficient. They should've read it the first time", type: "minimalist" },
        { text: "My favorite weapon of choice", type: "chaotic" }
      ]
    },
    {
      id: 7,
      text: "How many exclamation points in a typical email?",
      options: [
        { text: "One, strategically placed", type: "professional" },
        { text: "Several! They make things feel warmer!", type: "friendly" },
        { text: "Zero. Periods convey professionalism", type: "minimalist" },
        { text: "Either none or way too many!!!", type: "chaotic" }
      ]
    },
    {
      id: 8,
      text: "You need to deliver bad news via email. Your approach:",
      options: [
        { text: "Clear, direct, with proposed solutions", type: "professional" },
        { text: "Sandwich it between positive statements", type: "friendly" },
        { text: "State the facts. Keep it brief", type: "minimalist" },
        { text: "Write it, delete it, rewrite it, send it too late", type: "chaotic" }
      ]
    },
    {
      id: 9,
      text: "Your feelings about 'Reply All':",
      options: [
        { text: "Use it appropriately when the group needs to know", type: "professional" },
        { text: "Sometimes overuse it to keep everyone in the loop!", type: "friendly" },
        { text: "Avoid it. Not everyone needs to see my response", type: "minimalist" },
        { text: "Either never or always at the wrong time", type: "chaotic" }
      ]
    },
    {
      id: 10,
      text: "Someone sends you a one-word reply ('Ok.'). You think:",
      options: [
        { text: "Efficient communication. Noted", type: "professional" },
        { text: "Are they mad at me?? What did I do?", type: "friendly" },
        { text: "Respect. That's how it should be done", type: "minimalist" },
        { text: "Time to overanalyze this for 3 hours", type: "chaotic" }
      ]
    }
  ],
  results: {
    professional: {
      type: "The Corporate Communicator",
      description: "Your emails are works of professional art. Clear subject lines, organized bullet points, appropriate salutations. You know when to CC and when to BCC. You're the reason HR doesn't have to do email training. If there were email awards, you'd win.",
      traits: ["Clear", "Organized", "Strategic", "Polished"],
      advice: "Your professionalism is pristine, but sometimes a little warmth goes a long way. Not every email needs to sound like a business proposal. Let your personality shine through occasionally - it builds better work relationships."
    },
    friendly: {
      type: "The Exclamation Enthusiast",
      description: "Your emails are WARM! Friendly! Full of gratitude! You're probably using 'hope you're having a great week!' even on Mondays. You want everyone to know you're nice and approachable. Your exclamation points have exclamation points. You're the sunshine of the inbox.",
      traits: ["Warm", "Personable", "Positive", "Sometimes too nice"],
      advice: "Your friendly energy is refreshing, but not every email needs to be a warm hug. Sometimes brevity is kindness too. And watch the exclamation point addiction - it can dilute your message when you actually are excited!"
    },
    minimalist: {
      type: "The Brief Boss",
      description: "Why use many words when few words do trick? Your emails are efficient, direct, and often just a few sentences. You respect everyone's time by not wasting it. Some might think you're cold, but you know you're just being effective. Your inbox is probably at zero.",
      traits: ["Efficient", "Direct", "No-nonsense", "Time-conscious"],
      advice: "Brevity is a virtue, but tone doesn't translate well in short emails. A period can feel like a period... or a death threat. Consider adding occasional warmth so colleagues don't think you're constantly annoyed at them."
    },
    chaotic: {
      type: "The Email Wildcard",
      description: "No one knows what they're getting when they open your email. A novel? Two words? Passive aggression? Excessive friendliness? It depends on your mood, the moon phase, and whether you've had coffee. Your email personality is unpredictable - which keeps things interesting.",
      traits: ["Unpredictable", "Mood-dependent", "Authentic", "Entertaining"],
      advice: "Your authenticity is refreshing, but consistency builds trust. Try to find a baseline professional tone so colleagues know what to expect. Save the chaotic energy for Slack where it belongs."
    }
  }
};
