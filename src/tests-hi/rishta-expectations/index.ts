// उम्मीदें - रिश्ते में expectations
// Relationship Expectations Test

export const questions = [
  { id: 1, question: "Partner से कितनी उम्मीदें?", options: [{ text: "बहुत ज्यादा, सब कुछ चाहिए", type: "A" }, { text: "अच्छी-खासी उम्मीदें", type: "B" }, { text: "Reasonable, balanced", type: "C" }, { text: "कम उम्मीदें रखता/रखती हूं", type: "D" }] },
  { id: 2, question: "Partner mind read करे?", options: [{ text: "हां, समझना चाहिए", type: "A" }, { text: "कुछ हद तक", type: "B" }, { text: "बताना पड़ेगा clearly", type: "C" }, { text: "Unrealistic है ये", type: "D" }] },
  { id: 3, question: "Daily communication?", options: [{ text: "Constant contact चाहिए", type: "A" }, { text: "Regular updates", type: "B" }, { text: "जब free हों तब", type: "C" }, { text: "Flexible है मेरे लिए", type: "D" }] },
  { id: 4, question: "Romantic gestures?", options: [{ text: "Regularly चाहिए", type: "A" }, { text: "Special occasions पर", type: "B" }, { text: "Nice to have", type: "C" }, { text: "जरूरी नहीं", type: "D" }] },
  { id: 5, question: "Partner change करे?", options: [{ text: "कुछ चीज़ें बदलें जरूर", type: "A" }, { text: "कुछ adjustments", type: "B" }, { text: "जैसे हैं वैसे accept", type: "C" }, { text: "कोई expectation नहीं", type: "D" }] },
  { id: 6, question: "Time together?", options: [{ text: "Maximum time साथ", type: "A" }, { text: "Quality time जरूरी", type: "B" }, { text: "जितना हो सके", type: "C" }, { text: "Space भी जरूरी", type: "D" }] },
  { id: 7, question: "Support level?", options: [{ text: "100% support हर चीज़ में", type: "A" }, { text: "Mostly supportive", type: "B" }, { text: "जहां सही हो वहां", type: "C" }, { text: "Independent रहते हैं", type: "D" }] },
  { id: 8, question: "Surprise और efforts?", options: [{ text: "Regularly चाहिए", type: "A" }, { text: "कभी-कभी अच्छा लगता है", type: "B" }, { text: "Optional है", type: "C" }, { text: "Materialistic नहीं हूं", type: "D" }] },
  { id: 9, question: "Partner's priorities?", options: [{ text: "मैं first priority हूं", type: "A" }, { text: "Important priorities में हूं", type: "B" }, { text: "Equal priority", type: "C" }, { text: "Realistic उम्मीदें", type: "D" }] },
  { id: 10, question: "Future planning?", options: [{ text: "Detailed plans together", type: "A" }, { text: "Broad plans", type: "B" }, { text: "Flexible approach", type: "C" }, { text: "देखा जाएगा", type: "D" }] },
  { id: 11, question: "Partner's attention?", options: [{ text: "Undivided attention चाहिए", type: "A" }, { text: "Good attention", type: "B" }, { text: "Reasonable", type: "C" }, { text: "Low maintenance हूं", type: "D" }] },
  { id: 12, question: "Overall expectations?", options: [{ text: "Very high", type: "A" }, { text: "Above average", type: "B" }, { text: "Balanced", type: "C" }, { text: "Low/Realistic", type: "D" }] },
];

export const results = {
  A: { type: "A", title: "High Expectations", emoji: "👑", description: "आपकी उम्मीदें बहुत ज्यादा हैं। Partner से बहुत कुछ चाहते हैं।", traits: ["demanding", "high standards", "specific"], strengths: ["know what you want"], weaknesses: ["partner pressured", "disappointments"], tips: ["realistic expectations रखें", "appreciate small things"] },
  B: { type: "B", title: "Good Expectations", emoji: "✨", description: "अच्छी-खासी उम्मीदें हैं पर reasonable भी। Balanced approach।", traits: ["reasonable", "balanced", "caring"], strengths: ["clear expectations", "communicative"], weaknesses: ["sometimes high"], tips: ["communicate expectations clearly"] },
  C: { type: "C", title: "Moderate Expectations", emoji: "⚖️", description: "Moderate और realistic expectations। Mature approach!", traits: ["realistic", "mature", "understanding"], strengths: ["less disappointments", "peaceful"], weaknesses: ["may settle for less कभी"], tips: ["standards भी रखें"] },
  D: { type: "D", title: "Low Maintenance", emoji: "🌿", description: "कम उम्मीदें, easy going। Independent और content।", traits: ["low maintenance", "independent", "content"], strengths: ["partner comfortable", "less conflicts"], weaknesses: ["needs may go unmet"], tips: ["अपनी needs भी बताएं"] },
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
