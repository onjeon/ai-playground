// थाली टाइप टेस्ट - आप कौन सी थाली हैं?
// Thali Type Test

export const questions = [
  {
    id: 1,
    question: "Life में balance कैसा है?",
    options: [
      { text: "बहुत balanced, सब manage करता हूं", type: "A" },
      { text: "Spicy और exciting prefer करता हूं", type: "B" },
      { text: "Simple और structured रखता हूं", type: "C" },
      { text: "Royal और grand पसंद है", type: "D" },
    ],
  },
  {
    id: 2,
    question: "शादी में dress-up?",
    options: [
      { text: "Perfect coordination, head to toe", type: "A" },
      { text: "Bold colors और heavy jewelry", type: "B" },
      { text: "Elegant और understated", type: "C" },
      { text: "Designer, most expensive", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Career vs Family?",
    options: [
      { text: "Both equally important, balance", type: "A" },
      { text: "Career में passion, family support", type: "B" },
      { text: "Family first, career secondary", type: "C" },
      { text: "Both grand scale पर", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Friend circle कैसा है?",
    options: [
      { text: "Diverse, different types के लोग", type: "A" },
      { text: "Fun और energetic लोग", type: "B" },
      { text: "Few लेकिन close और reliable", type: "C" },
      { text: "Influential और successful लोग", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ideal vacation?",
    options: [
      { text: "Mix of adventure और relaxation", type: "A" },
      { text: "Beach party या adventure sports", type: "B" },
      { text: "Heritage sites और culture", type: "C" },
      { text: "5-star luxury resort", type: "D" },
    ],
  },
  {
    id: 6,
    question: "घर का माहौल?",
    options: [
      { text: "Organized और systematic", type: "A" },
      { text: "Music और energy से भरा", type: "B" },
      { text: "Traditional और peaceful", type: "C" },
      { text: "Luxurious और impressive", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ganesh Chaturthi कैसे मनाते हैं?",
    options: [
      { text: "सब rituals proper से, family together", type: "A" },
      { text: "Visarjan procession का excitement", type: "B" },
      { text: "घर में शांति से पूजा", type: "C" },
      { text: "Grand pandal, big celebration", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Phone में कौन सा app सबसे ज्यादा use?",
    options: [
      { text: "Productivity apps और calendar", type: "A" },
      { text: "Instagram और reels", type: "B" },
      { text: "WhatsApp family groups", type: "C" },
      { text: "LinkedIn और finance apps", type: "D" },
    ],
  },
  {
    id: 9,
    question: "किसी ने आपको late night call किया?",
    options: [
      { text: "उठकर सुनूंगा, कुछ urgent होगा", type: "A" },
      { text: "अरे party का plan होगा!", type: "B" },
      { text: "Worried हो जाता हूं, क्या हुआ", type: "C" },
      { text: "Important लोगों के लिए ही फोन on", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Restaurant में order करते वक्त?",
    options: [
      { text: "थाली या combo order करता हूं", type: "A" },
      { text: "Spiciest dish try करता हूं", type: "B" },
      { text: "Simple familiar dish", type: "C" },
      { text: "Chef's special या premium", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "गुजराती थाली",
    emoji: "🍱",
    percentage: 85,
    description: "आप गुजराती थाली हैं - complete, balanced और systematically arranged! जैसे गुजराती थाली में मीठा-नमकीन-खट्टा सब perfect proportion में होता है, वैसे ही आप life में balance maintain करते हैं। हर काम में organization!",
    characteristics: ["Well-balanced", "Systematic approach", "Complete personality", "Organized mind", "Harmony seeker"],
    advice: "Balance बहुत अच्छा है, पर कभी-कभी किसी एक चीज़ में extreme जाना भी exciting होता है। थोड़ा wild होकर देखें!",
  },
  B: {
    type: "B",
    title: "राजस्थानी थाली",
    emoji: "🌶️",
    percentage: 82,
    description: "आप राजस्थानी थाली हैं - spicy, colorful और full of flavor! जैसे राजस्थानी खाना desert की तरह bold और unforgettable होता है, वैसे ही आपकी personality मारवाड़ी तेज मिर्ची की तरह याद रहती है। Daal baati churma life!",
    characteristics: ["Bold personality", "Full of energy", "Colorful life", "Memorable presence", "Spicy attitude"],
    advice: "Spicy रहना मजेदार है, पर सबको इतना तीखापन handle नहीं होता। कभी-कभी mild version भी दिखाएं।",
  },
  C: {
    type: "C",
    title: "बंगाली थाली",
    emoji: "🐟",
    percentage: 78,
    description: "आप बंगाली थाली हैं - traditional, cultured और emotionally rich! जैसे बंगाली खाने में माछ-भात की simplicity में भी depth है, वैसे ही आप traditional values और emotions को importance देते हैं। Mishti doi जैसी मिठास!",
    characteristics: ["Culturally rich", "Traditional values", "Emotional depth", "Family-oriented", "Artistic soul"],
    advice: "Traditional होना beautiful है, पर नए experiences के लिए भी खुले रहें। कभी-कभी fusion try करें।",
  },
  D: {
    type: "D",
    title: "मुगलई थाली",
    emoji: "👑",
    percentage: 88,
    description: "आप मुगलई थाली हैं - royal, rich और grand! जैसे मुगलई खाना nawabi शान से भरा होता है - biryani, kebabs, korma, वैसे ही आपकी lifestyle premium और luxurious है। Nothing but the best!",
    characteristics: ["Royal lifestyle", "Premium taste", "Grand personality", "Influential presence", "High standards"],
    advice: "Royal रहना अच्छा है, पर कभी-कभी simple pleasures भी enjoy करें। ठेले की chai भी मज़ेदार होती है!",
  },
};

export function calculateResult(answers: number[]): typeof results.A {
  const typeCount: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeCount[type] = (typeCount[type] || 0) + 1;
    }
  });
  const dominantType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0][0];
  return results[dominantType as keyof typeof results];
}
