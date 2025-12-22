// तोहफे - Gift giving style
// Gift Giving Test

export const questions = [
  { id: 1, question: "Gifts का importance?", options: [{ text: "बहुत ज्यादा, love expression", type: "A" }, { text: "Important हैं", type: "B" }, { text: "Nice to have", type: "C" }, { text: "Materialistic नहीं हूं", type: "D" }] },
  { id: 2, question: "Gift देने में?", options: [{ text: "बहुत enjoy करता/करती हूं", type: "A" }, { text: "अच्छा लगता है", type: "B" }, { text: "Occasions पर देता/देती हूं", type: "C" }, { text: "ज्यादा नहीं देता/देती", type: "D" }] },
  { id: 3, question: "Surprise gifts?", options: [{ text: "Regularly देता/देती हूं", type: "A" }, { text: "कभी-कभी", type: "B" }, { text: "Special occasions पर", type: "C" }, { text: "Rarely", type: "D" }] },
  { id: 4, question: "Gift का budget?", options: [{ text: "No budget, best चाहिए", type: "A" }, { text: "अच्छा budget रखता/रखती हूं", type: "B" }, { text: "Reasonable budget", type: "C" }, { text: "Spend ज्यादा नहीं करता/करती", type: "D" }] },
  { id: 5, question: "Gift selection?", options: [{ text: "बहुत carefully, perfect होना चाहिए", type: "A" }, { text: "Thoughtful selection", type: "B" }, { text: "Something nice", type: "C" }, { text: "Whatever works", type: "D" }] },
  { id: 6, question: "Gift लेना?", options: [{ text: "Love करता/करती हूं, special feel", type: "A" }, { text: "अच्छा लगता है", type: "B" }, { text: "Okay है", type: "C" }, { text: "जरूरी नहीं लगता", type: "D" }] },
  { id: 7, question: "Partner gift भूल जाए?", options: [{ text: "बहुत hurt होऊंगा/होऊंगी", type: "A" }, { text: "थोड़ा sad", type: "B" }, { text: "Okay है, happens", type: "C" }, { text: "कोई बात नहीं", type: "D" }] },
  { id: 8, question: "Gift का thought vs price?", options: [{ text: "दोनों जरूरी", type: "A" }, { text: "Thought ज्यादा important", type: "B" }, { text: "Thought enough", type: "C" }, { text: "Presence > Presents", type: "D" }] },
  { id: 9, question: "Anniversary gifts?", options: [{ text: "Grand, memorable", type: "A" }, { text: "Special, thoughtful", type: "B" }, { text: "Something nice", type: "C" }, { text: "Optional है", type: "D" }] },
  { id: 10, question: "Homemade vs Bought?", options: [{ text: "दोनों equally special", type: "A" }, { text: "Homemade extra special", type: "B" }, { text: "Bought easier", type: "C" }, { text: "Whatever", type: "D" }] },
  { id: 11, question: "Gift expectations?", options: [{ text: "Regular gifts चाहिए", type: "A" }, { text: "Special occasions पर", type: "B" }, { text: "कभी-कभी okay", type: "C" }, { text: "No expectations", type: "D" }] },
  { id: 12, question: "Overall gift importance?", options: [{ text: "Love language है मेरी", type: "A" }, { text: "Important expressions", type: "B" }, { text: "Nice gestures", type: "C" }, { text: "Not my thing", type: "D" }] },
];

export const results = {
  A: { type: "A", title: "Gift Lover", emoji: "🎁", description: "Gifts आपकी love language है! देना और लेना दोनों से खुशी मिलती है।", traits: ["gift-oriented", "thoughtful", "expressive"], strengths: ["partner feels special", "memorable gestures"], weaknesses: ["materialistic लग सकता है"], tips: ["other love languages भी explore करें"] },
  B: { type: "B", title: "Thoughtful Gifter", emoji: "🎀", description: "Gifts important हैं। Thoughtful और meaningful gifts देते हैं।", traits: ["thoughtful", "meaningful", "balanced"], strengths: ["perfect gifts", "appreciative"], weaknesses: ["expectations कभी-कभी"], tips: ["balance बनाए रखें"] },
  C: { type: "C", title: "Occasional Gifter", emoji: "🎈", description: "Gifts occasional हैं। Presence ज्यादा matter करती है।", traits: ["practical", "occasional", "presence-focused"], strengths: ["not materialistic"], weaknesses: ["partner को miss हो सकता है"], tips: ["small gestures भी matter करते हैं"] },
  D: { type: "D", title: "Non-Material Lover", emoji: "💝", description: "Material gifts आपके लिए नहीं। Love अन्य तरीकों से express करते हैं।", traits: ["non-material", "experience-focused", "simple"], strengths: ["authentic love"], weaknesses: ["partner को different needs हों"], tips: ["partner की love language जानें"] },
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
