// पराठा पर्सनैलिटी टेस्ट - आप कौन सा पराठा हैं?
// Paratha Personality Test

export const questions = [
  {
    id: 1,
    question: "सुबह का नाश्ता कैसा चाहिए?",
    options: [
      { text: "भरपूर और filling, energy पूरे दिन की", type: "A" },
      { text: "Light और quick, time नहीं है", type: "B" },
      { text: "Healthy और nutritious", type: "C" },
      { text: "कुछ भी चलेगा, mood पर depend", type: "D" },
    ],
  },
  {
    id: 2,
    question: "दोस्तों के साथ plan बने तो?",
    options: [
      { text: "सब कुछ detailed plan करो", type: "A" },
      { text: "Simple meet-up ही काफी", type: "B" },
      { text: "Health-friendly activities prefer", type: "C" },
      { text: "Spontaneous, जो हो जाए", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Office में conflict हो तो?",
    options: [
      { text: "पूरी बात समझकर solution निकालो", type: "A" },
      { text: "Direct conversation, जल्दी solve करो", type: "B" },
      { text: "शांति से सबकी बात सुनो", type: "C" },
      { text: "जैसा माहौल हो उसके हिसाब से", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Weekend getaway कैसी हो?",
    options: [
      { text: "Full itinerary, सब जगह घूमना है", type: "A" },
      { text: "Nearby कहीं, simple trip", type: "B" },
      { text: "Nature retreat, healthy vibes", type: "C" },
      { text: "Last minute decide करेंगे", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Raksha Bandhan पर बहन को gift?",
    options: [
      { text: "पूरा research करके perfect gift", type: "A" },
      { text: "Cash या gift card, simple", type: "B" },
      { text: "Handmade या meaningful कुछ", type: "C" },
      { text: "उसी दिन shopping निकल जाऊंगा", type: "D" },
    ],
  },
  {
    id: 6,
    question: "नई skills सीखने का तरीका?",
    options: [
      { text: "Structured course join करो", type: "A" },
      { text: "YouTube se quick tutorials", type: "B" },
      { text: "धीरे-धीरे practice करके", type: "C" },
      { text: "जब जरूरत हो तब सीखो", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Movie night का plan?",
    options: [
      { text: "Epic movie, 3 घंटे की", type: "A" },
      { text: "Comedy, short और fun", type: "B" },
      { text: "Documentary या meaningful film", type: "C" },
      { text: "जो suggestions आए वो देख लो", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Argument में जीतने का तरीका?",
    options: [
      { text: "Facts और data से prove करो", type: "A" },
      { text: "Short points, direct बात", type: "B" },
      { text: "Patience से explain करो", type: "C" },
      { text: "मूड देखकर, कभी छोड़ भी दो", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Home decor style?",
    options: [
      { text: "Grand और impressive", type: "A" },
      { text: "Minimal और clean", type: "B" },
      { text: "Natural और green plants", type: "C" },
      { text: "Mix और match, eclectic", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Life का mantra?",
    options: [
      { text: "Go big or go home", type: "A" },
      { text: "Keep it simple", type: "B" },
      { text: "Health is wealth", type: "C" },
      { text: "Go with the flow", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "आलू पराठा",
    emoji: "🥔",
    percentage: 88,
    description: "आप आलू पराठा हैं - classic, filling और सबकी पहली choice! जैसे आलू पराठे के बिना Punjab अधूरा है, वैसे ही कोई भी plan आपके बिना अधूरा। भरपूर personality, दही और अचार के साथ perfect - आप भी सबके साथ gel हो जाते हैं!",
    characteristics: ["Satisfying personality", "Complete और thorough", "Universal favorite", "Reliable friend", "Go-to person"],
    advice: "हर काम में fullness देना अच्छा है, पर कभी-कभी light रहना भी सीखें। हर चीज़ epic नहीं होनी चाहिए।",
  },
  B: {
    type: "B",
    title: "सादा पराठा",
    emoji: "🫓",
    percentage: 75,
    description: "आप सादा पराठा हैं - simple, no-nonsense और efficient! जैसे सादा पराठा जल्दी बन जाता है और किसी भी सब्जी के साथ चल जाता है, वैसे ही आप practical और adaptable हैं। No drama, just quality!",
    characteristics: ["Simple approach", "Practical mindset", "No drama personality", "Efficient", "Versatile"],
    advice: "Simple रहना virtue है, पर life में थोड़ा spice भी add करें। Plain से special बनने में कोई बुराई नहीं।",
  },
  C: {
    type: "C",
    title: "पालक पराठा",
    emoji: "🥬",
    percentage: 78,
    description: "आप पालक पराठा हैं - healthy, nutritious और caring! जैसे मां पालक खिलाने के लिए पराठे में छुपा देती है, वैसे ही आप सबका ख्याल रखते हैं। Health-conscious और thoughtful personality!",
    characteristics: ["Health-conscious", "Caring nature", "Thoughtful", "Nurturing personality", "Wellness advocate"],
    advice: "दूसरों का ख्याल अच्छा है, पर खुद को भी indulge करने दें। हमेशा healthy रहना जरूरी नहीं।",
  },
  D: {
    type: "D",
    title: "मिक्स पराठा",
    emoji: "🎨",
    percentage: 80,
    description: "आप मिक्स पराठा हैं - unpredictable, versatile और interesting! जैसे मिक्स पराठे में कभी पनीर, कभी गोभी, कभी कुछ और - वैसे ही आप हर दिन different हैं। Monotony आपको पसंद नहीं!",
    characteristics: ["Versatile nature", "Spontaneous", "Interesting personality", "Unpredictable", "Flexible"],
    advice: "Flexible होना great है, पर कुछ consistency भी maintain करें। लोग कभी-कभी predictability भी appreciate करते हैं।",
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
