// Are You in a Situationship? - Viral relationship test for American English users

export const testData = {
  id: "relationship-situationship",
  title: "Are You in a Situationship?",
  description: "More than friends, less than partners. Is your 'thing' actually a situationship?",
  questions: [
    {
      id: 1,
      text: "What do you call this person when talking to friends?",
      options: [
        { text: "My boyfriend/girlfriend/partner - obviously", type: "relationship" },
        { text: "'This person I'm seeing' with air quotes", type: "situationship" },
        { text: "We just hang out, that's all", type: "casual" },
        { text: "Depends on who's asking honestly", type: "confused" }
      ]
    },
    {
      id: 2,
      text: "Have you had 'the talk' about what you are?",
      options: [
        { text: "Yes, we're officially together", type: "relationship" },
        { text: "We've danced around it but never clarified", type: "situationship" },
        { text: "No need - we both know it's casual", type: "casual" },
        { text: "I'm scared to bring it up", type: "confused" }
      ]
    },
    {
      id: 3,
      text: "Do you know if they're seeing other people?",
      options: [
        { text: "No, we're exclusive", type: "relationship" },
        { text: "I honestly don't know and I'm afraid to ask", type: "situationship" },
        { text: "Yes, and so am I - we're both free", type: "casual" },
        { text: "I assume not but we've never discussed it", type: "confused" }
      ]
    },
    {
      id: 4,
      text: "You see their Instagram story with another person. You feel...",
      options: [
        { text: "Nothing - I trust them completely", type: "relationship" },
        { text: "Jealous but I have no right to be... right?", type: "situationship" },
        { text: "Unbothered - we're not exclusive", type: "casual" },
        { text: "Confused about what I'm even allowed to feel", type: "confused" }
      ]
    },
    {
      id: 5,
      text: "How often do you see each other?",
      options: [
        { text: "Regularly - we make plans and keep them", type: "relationship" },
        { text: "Inconsistently - depends on their mood/schedule", type: "situationship" },
        { text: "When it's convenient for both of us", type: "casual" },
        { text: "I never know when I'll hear from them", type: "confused" }
      ]
    },
    {
      id: 6,
      text: "Have you met their friends/family?",
      options: [
        { text: "Yes, I'm part of their life", type: "relationship" },
        { text: "Some friends, but I feel like a secret", type: "situationship" },
        { text: "No, and that's fine - we're keeping it simple", type: "casual" },
        { text: "No, and I don't know why not", type: "confused" }
      ]
    },
    {
      id: 7,
      text: "You want to talk about the future. How does that go?",
      options: [
        { text: "We talk about it openly and plan together", type: "relationship" },
        { text: "They change the subject or get vague", type: "situationship" },
        { text: "Neither of us wants to - we're in the now", type: "casual" },
        { text: "I'm too scared to bring it up", type: "confused" }
      ]
    },
    {
      id: 8,
      text: "When you're upset, who do you call?",
      options: [
        { text: "Them - they're my support system", type: "relationship" },
        { text: "I want to call them but I don't know if I 'should'", type: "situationship" },
        { text: "My friends - we're not that deep", type: "casual" },
        { text: "I don't know what I'm 'allowed' to expect from them", type: "confused" }
      ]
    },
    {
      id: 9,
      text: "If someone asked if you're single, you'd say...",
      options: [
        { text: "No, I'm in a relationship", type: "relationship" },
        { text: "'It's complicated'", type: "situationship" },
        { text: "Technically yes", type: "casual" },
        { text: "I genuinely don't know how to answer", type: "confused" }
      ]
    },
    {
      id: 10,
      text: "Deep down, how do you feel about your 'thing'?",
      options: [
        { text: "Secure and happy", type: "relationship" },
        { text: "Anxious and uncertain but attached", type: "situationship" },
        { text: "Satisfied with the arrangement", type: "casual" },
        { text: "Like I'm waiting for something to change", type: "confused" }
      ]
    }
  ],
  results: {
    relationship: {
      type: "Actually in a Relationship",
      description: "Congrats, you're NOT in a situationship! You have clarity, labels, and mutual understanding about what you are. You've had the conversations, made it official, and you're both on the same page. This is what healthy communication looks like.",
      traits: ["Clear labels", "Mutual commitment", "Open communication", "Defined boundaries"],
      advice: "You're doing great! Keep that communication going and never take clarity for granted. You've built something healthy."
    },
    situationship: {
      type: "Certified Situationship",
      description: "Bestie, you're deep in situationship territory. All the feelings of a relationship with none of the security. You're emotionally invested but there are no labels, no clarity, and probably a lot of confusion. You deserve better than 'almost.'",
      traits: ["No clear labels", "Emotional investment", "Anxiety about status", "Afraid to ask for clarity"],
      advice: "Have the conversation. The ambiguity is hurting you more than a clear 'no' ever would. You deserve to know where you stand. If they can't give you clarity, that IS your answer."
    },
    casual: {
      type: "Keeping It Casual",
      description: "You're in a clear casual arrangement and you're fine with it. No confusion here - you both know what this is and what it isn't. You're getting what you want without the pressure of something more. This works as long as you're being honest with yourself.",
      traits: ["Clear expectations", "No strings attached", "Emotionally detached", "Honest about intentions"],
      advice: "As long as you're truly okay with casual and not just pretending to be, this is valid. Just check in with yourself regularly to make sure your needs aren't changing."
    },
    confused: {
      type: "Lost in the Undefined",
      description: "You're floating in relationship limbo and it's taking a toll on you. You don't know what you are, you're afraid to ask, and you're living in constant uncertainty. This ambiguity isn't fair to you. You deserve to know where you stand.",
      traits: ["Constant uncertainty", "Fear of asking questions", "Walking on eggshells", "Hoping they'll define it"],
      advice: "Stop waiting for them to decide your worth. Ask the hard question. Yes, you might not like the answer - but you'll finally be able to make a choice based on truth, not hope."
    }
  }
};
