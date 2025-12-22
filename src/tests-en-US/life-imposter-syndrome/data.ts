// Your Imposter Syndrome Level - Viral life test for American English users

export const testData = {
  id: "life-imposter-syndrome",
  title: "Your Imposter Syndrome Level",
  description: "Secretly convinced you've fooled everyone? Let's measure that imposter feeling!",
  questions: [
    {
      id: 1,
      text: "When you receive a compliment on your work, you think:",
      options: [
        { text: "They don't see the full picture - I got lucky", type: "high" },
        { text: "Thanks but I could have done better", type: "moderate" },
        { text: "I appreciate it - I did work hard on that", type: "low" },
        { text: "Thanks! I'm proud of what I accomplished", type: "none" }
      ]
    },
    {
      id: 2,
      text: "In meetings or group settings, you often feel:",
      options: [
        { text: "Like everyone knows more than me and I'll be exposed", type: "high" },
        { text: "Slightly underprepared compared to others", type: "moderate" },
        { text: "Reasonably confident in my contributions", type: "low" },
        { text: "Comfortable sharing my expertise", type: "none" }
      ]
    },
    {
      id: 3,
      text: "When you succeed at something challenging:",
      options: [
        { text: "I got lucky. Anyone could have done it. Next time I'll fail", type: "high" },
        { text: "Relieved I didn't mess up, but it wasn't that hard", type: "moderate" },
        { text: "Proud but aware there's always more to learn", type: "low" },
        { text: "Validation of my skills and effort", type: "none" }
      ]
    },
    {
      id: 4,
      text: "Your relationship with being 'found out':",
      options: [
        { text: "Constant fear - one day they'll realize I don't know what I'm doing", type: "high" },
        { text: "Sometimes worry people expect more than I can deliver", type: "moderate" },
        { text: "Occasional worry but mostly feel secure", type: "low" },
        { text: "I know my worth and don't fear being 'exposed'", type: "none" }
      ]
    },
    {
      id: 5,
      text: "When comparing yourself to peers:",
      options: [
        { text: "Everyone seems to have it together except me", type: "high" },
        { text: "Others seem more confident but I'm probably fine", type: "moderate" },
        { text: "We all have different strengths", type: "low" },
        { text: "I compare to myself, not others", type: "none" }
      ]
    },
    {
      id: 6,
      text: "Your inner critic says:",
      options: [
        { text: "You don't deserve to be here. You're a fraud", type: "high" },
        { text: "You should be better at this by now", type: "moderate" },
        { text: "Room for improvement but you're doing okay", type: "low" },
        { text: "Keep going. You've got this", type: "none" }
      ]
    },
    {
      id: 7,
      text: "Asking for a raise/promotion makes you feel:",
      options: [
        { text: "Terrified - what if they realize I'm not worth it?", type: "high" },
        { text: "Nervous - am I really ready for more responsibility?", type: "moderate" },
        { text: "Normal negotiation - I know my value", type: "low" },
        { text: "Confident - I deserve it and can articulate why", type: "none" }
      ]
    },
    {
      id: 8,
      text: "When you make a mistake:",
      options: [
        { text: "Proof that I don't belong here. This is the end", type: "high" },
        { text: "Frustrated with myself - I should have known better", type: "moderate" },
        { text: "Learn from it and move on - everyone makes mistakes", type: "low" },
        { text: "Part of growth - adjust and continue", type: "none" }
      ]
    },
    {
      id: 9,
      text: "Being called an 'expert' makes you feel:",
      options: [
        { text: "Panic - I'm definitely not an expert, don't call me that", type: "high" },
        { text: "Uncomfortable - I know some things but not everything", type: "moderate" },
        { text: "Fair enough - I've worked hard in this area", type: "low" },
        { text: "Accurate - I've earned that through experience", type: "none" }
      ]
    },
    {
      id: 10,
      text: "Your honest assessment of your abilities:",
      options: [
        { text: "Others are competent, I just fake it well", type: "high" },
        { text: "I'm okay but constantly feel like I should be better", type: "moderate" },
        { text: "I have real skills even if I have doubts sometimes", type: "low" },
        { text: "I know what I'm good at and where I'm still learning", type: "none" }
      ]
    }
  ],
  results: {
    high: {
      type: "High-Level Imposter Syndrome",
      description: "You're experiencing SIGNIFICANT imposter syndrome. Every success feels like luck, every compliment feels undeserved, and you're constantly waiting to be 'exposed.' The secret? Most successful people feel this way sometimes. You're not a fraud - you're just human with high standards.",
      traits: ["Self-doubting", "Success-dismissing", "Fraud-fearing", "Perfectionist"],
      advice: "Your imposter syndrome is lying to you. Keep a file of positive feedback and accomplishments. Talk to mentors and peers - you'll find they feel this too. Consider therapy if it's significantly impacting your life. You belong where you are."
    },
    moderate: {
      type: "Moderate Imposter Vibes",
      description: "You experience imposter syndrome but not constantly. Some situations trigger it more than others. You can accept success sometimes but often minimize it. This is incredibly common and actually shows self-awareness - the trick is not letting it hold you back.",
      traits: ["Occasionally doubting", "Self-aware", "Modest", "Learning"],
      advice: "Your self-doubt is manageable but worth addressing. When imposter feelings arise, reality-check them against actual evidence. You're probably more capable than you give yourself credit for. Trust the people who trust you."
    },
    low: {
      type: "Healthy Confidence with Humility",
      description: "You experience some self-doubt but it doesn't dominate your thinking. You can accept compliments, acknowledge your skills, and still remain humble about growth areas. This is a healthy balance that many people aspire to.",
      traits: ["Reasonably confident", "Growth-minded", "Balanced", "Self-accepting"],
      advice: "You've found a healthy balance! Maintain this by continuing to grow while acknowledging what you've already accomplished. Your humility is an asset as long as it doesn't become self-doubt."
    },
    none: {
      type: "Secure and Self-Assured",
      description: "You have strong confidence in your abilities. You know your worth, can accept success as earned, and don't spend energy worrying about being 'found out.' Either you've done serious work on imposter syndrome, or you're naturally secure. Either way, impressive.",
      traits: ["Confident", "Self-assured", "Grounded", "Secure"],
      advice: "Your self-assurance is valuable! Make sure confidence stays humble and doesn't tip into arrogance. Use your security to support others who struggle with imposter syndrome - they need your perspective."
    }
  }
};
