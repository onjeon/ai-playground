// अचार टाइप टेस्ट - आप कौन सा अचार हैं?
// Pickle/Achaar Personality Test

export const questions = [
  {
    id: 1,
    question: "कोई आपकी बुराई करे तो?",
    options: [
      { text: "गुस्सा आता है, रख लेता हूं याद", type: "A" },
      { text: "थोड़ी तकलीफ होती है पर भूल जाता हूं", type: "B" },
      { text: "उनसे दूरी बना लेता हूं चुपचाप", type: "C" },
      { text: "मिठास से जवाब देता हूं", type: "D" },
    ],
  },
  {
    id: 2,
    question: "पुरानी यादें?",
    options: [
      { text: "हर चीज़ याद है, अच्छी और बुरी", type: "A" },
      { text: "Special moments याद रहते हैं", type: "B" },
      { text: "जो गया सो गया", type: "C" },
      { text: "मीठी यादें ही store करता हूं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "बचपन का दोस्त मिले तो?",
    options: [
      { text: "पूरा flashback, सारी stories याद", type: "A" },
      { text: "खुशी होती है, कुछ बातें याद आती हैं", type: "B" },
      { text: "Politely मिलकर निकल जाता हूं", type: "C" },
      { text: "नई बातें करता हूं, पुराना छोड़ो", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Criticism कैसे handle करते हैं?",
    options: [
      { text: "दिल पर ले लेता हूं, भूलता नहीं", type: "A" },
      { text: "सुनता हूं, valid हो तो improve करता हूं", type: "B" },
      { text: "Ignore कर देता हूं mostly", type: "C" },
      { text: "Positively ले लेता हूं", type: "D" },
    ],
  },
  {
    id: 5,
    question: "नाना-नानी के घर का खाना?",
    options: [
      { text: "हर dish याद है, recipe भी", type: "A" },
      { text: "कुछ special dishes याद हैं", type: "B" },
      { text: "ज्यादा याद नहीं honestly", type: "C" },
      { text: "Feeling याद है, taste भूल गया", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Office politics में?",
    options: [
      { text: "सबकी history पता है मुझे", type: "A" },
      { text: "थोड़ा-बहुत aware रहता हूं", type: "B" },
      { text: "दूर रहता हूं इन सब से", type: "C" },
      { text: "Positive environment बनाने की कोशिश", type: "D" },
    ],
  },
  {
    id: 7,
    question: "पुराने photos देखने पर?",
    options: [
      { text: "हर photo की story बता सकता हूं", type: "A" },
      { text: "Nostalgia होता है, अच्छा लगता है", type: "B" },
      { text: "बहुत कम देखता हूं पुराने photos", type: "C" },
      { text: "हंसी आती है, move on कर लिया है", type: "D" },
    ],
  },
  {
    id: 8,
    question: "किसी ने धोखा दिया तो?",
    options: [
      { text: "कभी नहीं भूलूंगा, माफ करना मुश्किल", type: "A" },
      { text: "Time लेता है पर forgive कर देता हूं", type: "B" },
      { text: "उस person को cut कर देता हूं life से", type: "C" },
      { text: "माफ करके आगे बढ़ जाता हूं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Family traditions?",
    options: [
      { text: "सब traditions follow करता हूं strictly", type: "A" },
      { text: "Important ones तो करता हूं", type: "B" },
      { text: "ज्यादा interested नहीं honestly", type: "C" },
      { text: "New traditions बनाने में believe करता हूं", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Grudges रखते हैं?",
    options: [
      { text: "हां, मेरी memory strong है", type: "A" },
      { text: "कभी-कभी, depend करता है", type: "B" },
      { text: "नहीं, waste of energy", type: "C" },
      { text: "बिल्कुल नहीं, life is short", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "आम का अचार",
    emoji: "🥭",
    percentage: 85,
    description: "आप आम का अचार हैं - intense, long-lasting और unforgettable! जैसे आम का अचार सालों तक store रहता है और taste और बेहतर होता जाता है, वैसे ही आप हर experience को deeply feel करते हैं। Memory king/queen!",
    characteristics: ["Strong memory", "Deep connections", "Traditional values", "Intense personality", "Long-lasting impressions"],
    advice: "सब याद रखना अच्छा है, पर कभी-कभी let go करना भी सीखें। बुरी यादें store करने से खुद को ही तकलीफ होती है।",
  },
  B: {
    type: "B",
    title: "नींबू का अचार",
    emoji: "🍋",
    percentage: 78,
    description: "आप नींबू का अचार हैं - tangy, refreshing और balanced! जैसे नींबू का अचार खट्टा-मीठा-तीखा सब है, वैसे ही आप life के हर flavor को accept करते हैं। Balanced approach to memories!",
    characteristics: ["Balanced perspective", "Selective memory", "Refreshing presence", "Adaptable", "Good judgment"],
    advice: "Balance अच्छा है, पर कभी-कभी fully commit भी करें किसी emotion को। Neutral हमेशा best नहीं।",
  },
  C: {
    type: "C",
    title: "लहसुन का अचार",
    emoji: "🧄",
    percentage: 72,
    description: "आप लहसुन का अचार हैं - strong, protective और no-nonsense! जैसे लहसुन immunity boost करता है और bacteria से बचाता है, वैसे ही आप toxic लोगों से distance रखते हैं। Self-protection first!",
    characteristics: ["Self-protective", "Strong boundaries", "Practical approach", "No-nonsense attitude", "Independent"],
    advice: "Boundaries अच्छी हैं, पर हर किसी को दूर रखना भी अच्छा नहीं। कुछ लोग trust के लायक होते हैं।",
  },
  D: {
    type: "D",
    title: "मीठा अचार",
    emoji: "🍯",
    percentage: 80,
    description: "आप मीठा अचार हैं - sweet, forgiving और positive! जैसे मीठा अचार सबको surprising sweetness देता है, वैसे ही आप हर situation में positivity लाते हैं। Forgive और forget आपका mantra!",
    characteristics: ["Forgiving nature", "Positive outlook", "Sweet personality", "Forward-looking", "Light-hearted"],
    advice: "मीठे रहना अच्छा है, पर कभी-कभी stern होना भी जरूरी है। सब माफ करने से कुछ लोग advantage ले सकते हैं।",
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
