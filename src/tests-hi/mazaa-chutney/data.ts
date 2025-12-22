// चटनी टाइप टेस्ट - आप कौन सी चटनी हैं?
// Chutney Type Test

export const questions = [
  {
    id: 1,
    question: "किसी की बात अच्छी नहीं लगी तो?",
    options: [
      { text: "तीखा जवाब दे दूंगा सीधे", type: "A" },
      { text: "मीठे में बात घुमा दूंगा", type: "B" },
      { text: "चुपचाप सुनकर निकल लूंगा", type: "C" },
      { text: "थोड़ा सोचूंगा फिर balanced reply", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Party में आप कैसे हैं?",
    options: [
      { text: "Life of the party, सबसे loud", type: "A" },
      { text: "Sweet और charming, सबको पसंद", type: "B" },
      { text: "Side में बैठकर observe करता हूं", type: "C" },
      { text: "Selective लोगों से बात करता हूं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cricket match हार गई India?",
    options: [
      { text: "TV तोड़ने का मन करता है!", type: "A" },
      { text: "कोई नहीं, अगली बार जीतेंगे", type: "B" },
      { text: "चुपचाप channel बदल देता हूं", type: "C" },
      { text: "Analysis करता हूं क्या गलत हुआ", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Office में deadline miss हो गई?",
    options: [
      { text: "Boss से directly बात करूंगा", type: "A" },
      { text: "मीठी बातों से manage कर लूंगा", type: "B" },
      { text: "Quietly extra काम करके cover करूंगा", type: "C" },
      { text: "Proper excuse और backup plan", type: "D" },
    ],
  },
  {
    id: 5,
    question: "दोस्त ने पैसे नहीं लौटाए?",
    options: [
      { text: "Direct पूछ लूंगा, शर्म कैसी", type: "A" },
      { text: "Hint देकर याद दिला दूंगा", type: "B" },
      { text: "छोड़ो, friendship ज्यादा important", type: "C" },
      { text: "Right time का wait करूंगा", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Family function में रिश्तेदार taunt मारे?",
    options: [
      { text: "Counter taunt ready है मेरा भी", type: "A" },
      { text: "हंसकर टाल देता हूं", type: "B" },
      { text: "Ignore करके खाने पर focus", type: "C" },
      { text: "Smart reply जो सोचने पर मजबूर करे", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bollywood movies में कौन सा genre पसंद?",
    options: [
      { text: "Action और drama, full masala", type: "A" },
      { text: "Romance और comedy, feel good", type: "B" },
      { text: "Art films और meaningful cinema", type: "C" },
      { text: "Thriller और suspense", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Traffic jam में कैसे react करते हैं?",
    options: [
      { text: "Horn और gaali साथ-साथ", type: "A" },
      { text: "Music लगाकर enjoy करता हूं", type: "B" },
      { text: "Patience से wait करता हूं", type: "C" },
      { text: "Alternate route सोचता हूं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "WhatsApp group में politics discuss हो रही?",
    options: [
      { text: "Opinion देना है तो दूंगा boldly", type: "A" },
      { text: "Funny memes भेजकर topic change", type: "B" },
      { text: "Mute करके निकल लेता हूं", type: "C" },
      { text: "Facts share करता हूं neutral रहकर", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Life का approach क्या है?",
    options: [
      { text: "बोलना है तो बोलो, छुपाना क्या", type: "A" },
      { text: "हर situation में positivity लाओ", type: "B" },
      { text: "शांति से जियो, drama से दूर", type: "C" },
      { text: "हर चीज़ balanced रखो", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "हरी मिर्च की चटनी",
    emoji: "🌶️",
    percentage: 85,
    description: "आप हरी मिर्च की चटनी हैं - तीखे, direct और दमदार! जैसे समोसे के साथ ये चटनी जरूरी है, वैसे ही आप हर gathering में ज़रूरी हैं। बात सीधी करते हैं, मन में कुछ नहीं रखते। कुछ लोगों को ये तीखापन ज्यादा लगता है, पर आप बिना flavor के खाना accept नहीं करते!",
    characteristics: ["Direct communicator", "Bold और fearless", "हर बात में spice", "Strong opinions", "Natural leader"],
    advice: "कभी-कभी थोड़ा mild होना भी ठीक है। हर बात में तीखापन जरूरी नहीं। दूसरों की sensitivity का ख्याल रखें।",
  },
  B: {
    type: "B",
    title: "इमली की मीठी चटनी",
    emoji: "🤎",
    percentage: 78,
    description: "आप इमली की मीठी चटनी हैं - sweet, tangy और सबके favorite! जैसे गोलगप्पे के बिना इमली अधूरी है, वैसे ही कोई भी gathering आपके बिना अधूरी। हर situation को sweet बना देते हैं। थोड़ी tanginess है जो interesting बनाती है!",
    characteristics: ["Sweet talker", "Positive vibes", "सबसे बनाकर रखते हैं", "Diplomat nature", "Likeable personality"],
    advice: "मीठे होना अच्छा है, लेकिन कभी-कभी honest feedback भी जरूरी है। सब कुछ sugar-coat करने से बचें।",
  },
  C: {
    type: "C",
    title: "पुदीना चटनी",
    emoji: "🌿",
    percentage: 72,
    description: "आप पुदीना चटनी हैं - cool, refreshing और calming! जैसे गर्मी में पुदीना ठंडक देता है, वैसे ही आप हर तनाव वाली situation में शांति लाते हैं। Low-key रहना पसंद है, drama से दूर। आपकी presence soothing है!",
    characteristics: ["Calm और composed", "Drama-free zone", "Good listener", "Introverted nature", "Refreshing presence"],
    advice: "कभी-कभी अपनी आवाज़ उठाना भी जरूरी है। हमेशा पीछे रहने से opportunity miss हो सकती है।",
  },
  D: {
    type: "D",
    title: "धनिया चटनी",
    emoji: "🥬",
    percentage: 80,
    description: "आप धनिया चटनी हैं - balanced, versatile और हर dish के साथ match! जैसे धनिया हर खाने में जा सकती है, वैसे ही आप हर situation में fit हो जाते हैं। न ज्यादा तीखे, न ज्यादा मीठे - perfect balance!",
    characteristics: ["Well-balanced", "Adaptable", "Versatile personality", "Thoughtful", "Middle-ground finder"],
    advice: "Balance अच्छा है, लेकिन कभी-कभी strong stand लेना भी जरूरी है। हमेशा neutral रहना भी ठीक नहीं।",
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
