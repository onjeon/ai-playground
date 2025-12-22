// डोसा स्टाइल टेस्ट - आप कौन सा डोसा हैं?
// Dosa Style Test

export const questions = [
  {
    id: 1,
    question: "सुबह उठने का style?",
    options: [
      { text: "जल्दी उठकर full routine follow", type: "A" },
      { text: "जब alarm बजे तब उठो", type: "B" },
      { text: "आराम से, जब नींद पूरी हो", type: "C" },
      { text: "हर दिन different timing", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Meeting में presentation?",
    options: [
      { text: "Well-prepared, point by point", type: "A" },
      { text: "Short और crisp, direct to point", type: "B" },
      { text: "Detailed और elaborate", type: "C" },
      { text: "Creative और unconventional", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Shopping कैसे करते हैं?",
    options: [
      { text: "List बनाकर, planned", type: "A" },
      { text: "Quick shopping, जो दिखे लो", type: "B" },
      { text: "Time लेकर, सब देखकर", type: "C" },
      { text: "Unique items ढूंढते हैं", type: "D" },
    ],
  },
  {
    id: 4,
    question: "IPL match देखते वक्त?",
    options: [
      { text: "Strategy analyze करते हुए", type: "A" },
      { text: "Exciting moments के लिए live", type: "B" },
      { text: "Full match enjoy करते हुए", type: "C" },
      { text: "Commentary और memes साथ में", type: "D" },
    ],
  },
  {
    id: 5,
    question: "WhatsApp reply style?",
    options: [
      { text: "Proper sentences, grammar correct", type: "A" },
      { text: "Quick reply, short texts", type: "B" },
      { text: "Long voice notes या detailed texts", type: "C" },
      { text: "Memes और GIFs से communicate", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Restaurant में order?",
    options: [
      { text: "हमेशा tried and tested", type: "A" },
      { text: "जल्दी decide, कुछ भी चलेगा", type: "B" },
      { text: "पूरा menu देखकर सोच के", type: "C" },
      { text: "Chef's special या कुछ नया", type: "D" },
    ],
  },
  {
    id: 7,
    question: "होली कैसे खेलते हैं?",
    options: [
      { text: "Organic colors, safe खेलना", type: "A" },
      { text: "पानी की बाल्टी उठाओ और भागो", type: "B" },
      { text: "पूरे दिन family के साथ", type: "C" },
      { text: "Different themes try करना", type: "D" },
    ],
  },
  {
    id: 8,
    question: "नौकरी में क्या देखते हैं?",
    options: [
      { text: "Clear growth path और stability", type: "A" },
      { text: "Good salary और perks", type: "B" },
      { text: "Work culture और learning", type: "C" },
      { text: "Innovation और creativity scope", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Travel planning?",
    options: [
      { text: "Everything pre-booked और planned", type: "A" },
      { text: "Ticket book, बाकी देखेंगे", type: "B" },
      { text: "Relaxed itinerary, no rush", type: "C" },
      { text: "Offbeat destinations prefer", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Problem solving approach?",
    options: [
      { text: "Step by step logical approach", type: "A" },
      { text: "Quick fix, jugaad se karo", type: "B" },
      { text: "Root cause find करो पहले", type: "C" },
      { text: "Out of box thinking", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "मसाला डोसा",
    emoji: "🥔",
    percentage: 85,
    description: "आप मसाला डोसा हैं - complete package, classic और reliable! जैसे मसाला डोसा में आलू, सांभर, चटनी सब आता है, वैसे ही आप हर चीज़ में well-prepared रहते हैं। South से North तक, सब जगह popular - आप भी universally loved!",
    characteristics: ["Well-organized", "Complete package", "Reliable और dependable", "Classic choice", "Universal appeal"],
    advice: "Perfect होने की कोशिश अच्छी है, पर कभी-कभी imperfection भी charm है। Relax करना सीखें।",
  },
  B: {
    type: "B",
    title: "पेपर डोसा",
    emoji: "📜",
    percentage: 78,
    description: "आप पेपर डोसा हैं - thin, crispy और impressive! जैसे पेपर डोसा की लंबाई सबको wow करती है, वैसे ही आपका quick और sharp approach सबको impress करता है। Less is more - आपका mantra!",
    characteristics: ["Sharp और crisp", "Impressive personality", "Quick decision maker", "Efficient", "Minimal but impactful"],
    advice: "Crisp रहना good है, पर कभी-कभी depth भी add करें। हर चीज़ quick नहीं होनी चाहिए।",
  },
  C: {
    type: "C",
    title: "रवा डोसा",
    emoji: "🌾",
    percentage: 76,
    description: "आप रवा डोसा हैं - unique texture, detailed और interesting! जैसे रवा डोसा regular से different है और बनाने में थोड़ा time लगता है, वैसे ही आप detail-oriented और thorough हैं। आपका approach हमेशा thoughtful!",
    characteristics: ["Detail-oriented", "Thorough approach", "Patient personality", "Quality over speed", "Thoughtful decisions"],
    advice: "Detail अच्छी है, पर कभी-कभी big picture भी देखें। Overthinking से बचें।",
  },
  D: {
    type: "D",
    title: "स्प्रिंग डोसा",
    emoji: "🌀",
    percentage: 80,
    description: "आप स्प्रिंग डोसा हैं - creative, unique और trendy! जैसे spring डोसा traditional को modern twist देता है, वैसे ही आप हर चीज़ में innovation लाते हैं। Status quo को challenge करना आपकी आदत!",
    characteristics: ["Creative thinker", "Trend setter", "Unconventional approach", "Innovation lover", "Unique perspective"],
    advice: "Creative होना amazing है, पर basics भी important हैं। Foundation strong रखें।",
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
