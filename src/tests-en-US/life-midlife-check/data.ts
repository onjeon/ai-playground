// Early Midlife Check - Viral life test for American English users

export const testData = {
  id: "life-midlife-check",
  title: "Early Midlife Vibe Check",
  description: "How's life treating you in the middle chapters? Time for a check-in!",
  questions: [
    {
      id: 1,
      text: "When you think about your life so far:",
      options: [
        { text: "Proud of what I've built and learned", type: "content" },
        { text: "It's okay but there's more I wanted to do", type: "reflecting" },
        { text: "Where did the time go? How did I get here?", type: "questioning" },
        { text: "Ready for a major change or reinvention", type: "restless" }
      ]
    },
    {
      id: 2,
      text: "Your current career situation:",
      options: [
        { text: "Established in something meaningful to me", type: "content" },
        { text: "Stable but wondering if this is it", type: "reflecting" },
        { text: "Feeling stuck or underutilized", type: "questioning" },
        { text: "Considering a major pivot or new direction", type: "restless" }
      ]
    },
    {
      id: 3,
      text: "How do you feel about getting older?",
      options: [
        { text: "Comfortable - wisdom comes with time", type: "content" },
        { text: "Mixed feelings - some things are better, some harder", type: "reflecting" },
        { text: "Anxious about time passing and mortality", type: "questioning" },
        { text: "Urgent - need to make changes while I can", type: "restless" }
      ]
    },
    {
      id: 4,
      text: "Your relationship with past dreams and goals:",
      options: [
        { text: "Many achieved, new ones formed", type: "content" },
        { text: "Some achieved, some I'm still working toward", type: "reflecting" },
        { text: "Grieving some that didn't work out", type: "questioning" },
        { text: "Time to finally pursue the ones I set aside", type: "restless" }
      ]
    },
    {
      id: 5,
      text: "Your current relationship/family life:",
      options: [
        { text: "Fulfilling and I've built something meaningful", type: "content" },
        { text: "Good but could use some attention", type: "reflecting" },
        { text: "Wondering if I made the right choices", type: "questioning" },
        { text: "Ready for a change or new chapter", type: "restless" }
      ]
    },
    {
      id: 6,
      text: "When you see younger people starting out:",
      options: [
        { text: "I have wisdom to share and enjoy mentoring", type: "content" },
        { text: "I remember that energy, things are different now", type: "reflecting" },
        { text: "Slightly envious of their options and time", type: "questioning" },
        { text: "Inspired to embrace my own new beginnings", type: "restless" }
      ]
    },
    {
      id: 7,
      text: "Your bucket list situation:",
      options: [
        { text: "Been checking things off regularly", type: "content" },
        { text: "Have one but need to prioritize it more", type: "reflecting" },
        { text: "So many things I haven't done - will I ever?", type: "questioning" },
        { text: "Time to start crossing things off NOW", type: "restless" }
      ]
    },
    {
      id: 8,
      text: "How connected do you feel to your authentic self?",
      options: [
        { text: "Very - I know who I am now", type: "content" },
        { text: "More than before, still evolving", type: "reflecting" },
        { text: "Lost touch somewhere along the way", type: "questioning" },
        { text: "Reconnecting and ready to prioritize me", type: "restless" }
      ]
    },
    {
      id: 9,
      text: "Your current energy and motivation levels:",
      options: [
        { text: "Steady - I pace myself and feel capable", type: "content" },
        { text: "Variable - good days and tired days", type: "reflecting" },
        { text: "Lower than I'd like - feeling drained", type: "questioning" },
        { text: "Renewed - feeling ready for something new", type: "restless" }
      ]
    },
    {
      id: 10,
      text: "The next decade looks like:",
      options: [
        { text: "Continued growth on a good path", type: "content" },
        { text: "Time to be more intentional about what I want", type: "reflecting" },
        { text: "Uncertain and that concerns me", type: "questioning" },
        { text: "The decade I finally do what I really want", type: "restless" }
      ]
    }
  ],
  results: {
    content: {
      type: "Peacefully Progressing",
      description: "You're in a good place! The foundation you've built feels solid, you have clarity about who you are, and you're continuing to grow without crisis. The middle of life feels like a comfortable seat, not an uncomfortable middle. Well done on building a life you're content with.",
      traits: ["Content", "Grounded", "Wise", "Stable"],
      advice: "Your stability is valuable - don't take it for granted! Stay curious and keep growing, but also appreciate what you've built. Share your wisdom with those still figuring it out. And make sure 'content' doesn't become 'stagnant.'"
    },
    reflecting: {
      type: "Thoughtfully Reassessing",
      description: "You're in reflection mode - looking at where you've been, where you are, and where you want to go. Things are okay but you're aware there might be adjustments needed. This is healthy and normal. The examined life is worth living.",
      traits: ["Reflective", "Self-aware", "Evaluating", "Open to growth"],
      advice: "Your reflection is healthy! Use this time to identify what you want more of and less of. Small intentional changes can create big impact. You don't need a crisis to make positive changes - just thoughtful action."
    },
    questioning: {
      type: "Deep Questioning Phase",
      description: "You're experiencing some classic midlife questioning. Time feels like it's slipping, past choices are being examined, and there's uncertainty about the future. This is uncomfortable but it's also an invitation to make changes you might have been avoiding.",
      traits: ["Questioning", "Uncertain", "Searching", "Potentially transforming"],
      advice: "This discomfort is actually data - it's showing you what needs attention. Consider therapy, coaching, or honest conversations with trusted people. The questioning phase often leads to meaningful change. You're not stuck - you're at a decision point."
    },
    restless: {
      type: "Reinvention Energy",
      description: "You're feeling the pull toward major change. Whether it's career, lifestyle, relationships, or identity - you're ready for a new chapter. This restlessness is energy that wants to be directed somewhere. You're not having a breakdown, you're building up to a breakthrough.",
      traits: ["Restless", "Ready for change", "Energized", "Transforming"],
      advice: "Channel this energy wisely! Make changes thoughtfully rather than impulsively. A new chapter is possible at any age. Just make sure you're running toward something, not just away from something. Directed restlessness becomes powerful momentum."
    }
  }
};
