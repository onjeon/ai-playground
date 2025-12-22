// पान स्टाइल टेस्ट - आप कौन सा पान हैं?
// Paan Style Test - Cultural Significance

export const questions = [
  {
    id: 1,
    question: "खुशी के मौके पर?",
    options: [
      { text: "Full celebration, कुछ कमी नहीं", type: "A" },
      { text: "Close लोगों के साथ intimate", type: "B" },
      { text: "Traditional rituals important", type: "C" },
      { text: "कुछ unique करना है", type: "D" },
    ],
  },
  {
    id: 2,
    question: "शादी में guest list?",
    options: [
      { text: "जितने ज्यादा उतना अच्छा, grand", type: "A" },
      { text: "Only close family और friends", type: "B" },
      { text: "Traditional relatives must", type: "C" },
      { text: "Theme wedding, selective invite", type: "D" },
    ],
  },
  {
    id: 3,
    question: "After dinner का routine?",
    options: [
      { text: "कुछ मीठा तो बनता है boss", type: "A" },
      { text: "Light walk या family time", type: "B" },
      { text: "TV देखना, simple evening", type: "C" },
      { text: "कुछ creative, music या reading", type: "D" },
    ],
  },
  {
    id: 4,
    question: "किसी की मदद कैसे करते हैं?",
    options: [
      { text: "Grand gesture, पूरी मदद", type: "A" },
      { text: "Personal touch, emotional support", type: "B" },
      { text: "जैसे परंपरा है वैसे", type: "C" },
      { text: "Unique way में help", type: "D" },
    ],
  },
  {
    id: 5,
    question: "बनारस, लखनऊ या बिहार?",
    options: [
      { text: "बनारस - spiritual और vibrant", type: "A" },
      { text: "लखनऊ - तहज़ीब और adab", type: "B" },
      { text: "बिहार - roots और simplicity", type: "C" },
      { text: "कहीं भी जहां कुछ नया मिले", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Gift देने का style?",
    options: [
      { text: "Expensive और impressive", type: "A" },
      { text: "Thoughtful और personal", type: "B" },
      { text: "Traditional, जैसे चाहिए वैसे", type: "C" },
      { text: "Unique, कुछ हटकर", type: "D" },
    ],
  },
  {
    id: 7,
    question: "जब mood खराब हो?",
    options: [
      { text: "कुछ मीठा खाओ, सब ठीक", type: "A" },
      { text: "किसी अपने से बात करो", type: "B" },
      { text: "Temple जाओ, शांति मिलेगी", type: "C" },
      { text: "कुछ नया try करो, change", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dinner party host करना है?",
    options: [
      { text: "Full feast, 10 dishes minimum", type: "A" },
      { text: "Cozy dinner, 4-5 लोग", type: "B" },
      { text: "Traditional Indian meal", type: "C" },
      { text: "Theme night, fusion menu", type: "D" },
    ],
  },
  {
    id: 9,
    question: "पान खाने का मौका?",
    options: [
      { text: "बड़ी party के बाद, celebration", type: "A" },
      { text: "किसी special के साथ", type: "B" },
      { text: "Pooja या शुभ काम के बाद", type: "C" },
      { text: "जब कुछ different करने का मन", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Life को कैसे describe करेंगे?",
    options: [
      { text: "Sweet और fulfilling", type: "A" },
      { text: "Personal और meaningful", type: "B" },
      { text: "Traditional और grounded", type: "C" },
      { text: "Refreshing और experimental", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "मीठा पान",
    emoji: "🍬",
    percentage: 85,
    description: "आप मीठा पान हैं - sweet, celebratory और सबकी पसंद! जैसे मीठा पान हर खुशी के मौके पर जरूरी है, वैसे ही आप हर celebration को complete करते हैं। गुलकंद और सुपारी की तरह - rich और satisfying personality!",
    characteristics: ["Sweet personality", "Celebration lover", "Generous nature", "Popular among all", "Life of the party"],
    advice: "Sweet होना lovely है, पर हमेशा please करने की जरूरत नहीं। कभी-कभी no कहना भी सीखें।",
  },
  B: {
    type: "B",
    title: "सादा पान",
    emoji: "🌿",
    percentage: 78,
    description: "आप सादा पान हैं - pure, elegant और refined! जैसे सादा पान में betel leaf की natural खुशबू main है, वैसे ही आप genuine और authentic हैं। कोई दिखावा नहीं, pure class!",
    characteristics: ["Authentic personality", "Elegant taste", "Refined nature", "Quality over quantity", "Genuine connections"],
    advice: "Simplicity में beauty है, पर कभी-कभी थोड़ा elaborate होना भी ठीक है। Surprise करें लोगों को।",
  },
  C: {
    type: "C",
    title: "बनारसी पान",
    emoji: "🕉️",
    percentage: 82,
    description: "आप बनारसी पान हैं - traditional, cultural और spiritual! जैसे बनारसी पान गंगा किनारे की परंपरा का हिस्सा है, वैसे ही आप roots और traditions को value करते हैं। पूजा-पाठ से लेकर family तक - सब important!",
    characteristics: ["Traditional values", "Cultural connection", "Spiritual nature", "Family-oriented", "Rooted personality"],
    advice: "Traditions अच्छी हैं, पर time के साथ कुछ नया adopt करना भी जरूरी है। Evolution important है।",
  },
  D: {
    type: "D",
    title: "फायर पान",
    emoji: "🔥",
    percentage: 80,
    description: "आप फायर पान हैं - dramatic, unique और unforgettable! जैसे fire पान का burning effect सबको wow करता है, वैसे ही आप हर जगह memorable impression छोड़ते हैं। Ordinary से दूर, extraordinary personality!",
    characteristics: ["Show-stopper", "Unique approach", "Memorable presence", "Risk-taker", "Trend-setter"],
    advice: "Unique होना amazing है, पर हर situation में fire नहीं जलानी। कभी-कभी simple भी effective है।",
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
