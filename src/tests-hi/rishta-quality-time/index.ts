// क्वालिटी टाइम - साथ में समय बिताना
// Quality Time Test

export const questions = [
  { id: 1, question: "Ideal date night?", options: [{ text: "Romantic dinner, बातें", type: "A" }, { text: "Movie और cuddling", type: "B" }, { text: "Adventure activity", type: "C" }, { text: "घर पर chill", type: "D" }] },
  { id: 2, question: "Daily quality time?", options: [{ text: "बहुत जरूरी, daily", type: "A" }, { text: "जितना हो सके", type: "B" }, { text: "Weekends पर enough", type: "C" }, { text: "जब मिल जाए", type: "D" }] },
  { id: 3, question: "Phone during couple time?", options: [{ text: "बिल्कुल नहीं", type: "A" }, { text: "Minimize करते हैं", type: "B" }, { text: "Urgent calls okay", type: "C" }, { text: "Normal use", type: "D" }] },
  { id: 4, question: "Activities together?", options: [{ text: "बहुत important, साथ में करते हैं", type: "A" }, { text: "कुछ साथ में, कुछ अकेले", type: "B" }, { text: "Individual activities ज्यादा", type: "C" }, { text: "Separate interests okay", type: "D" }] },
  { id: 5, question: "Conversation importance?", options: [{ text: "Deep talks daily", type: "A" }, { text: "Regular meaningful बातें", type: "B" }, { text: "When needed", type: "C" }, { text: "Actions > words", type: "D" }] },
  { id: 6, question: "Vacation together?", options: [{ text: "हर vacation साथ में", type: "A" }, { text: "Most vacations साथ", type: "B" }, { text: "कुछ साथ, कुछ separate", type: "C" }, { text: "Individual trips भी okay", type: "D" }] },
  { id: 7, question: "Weekend routine?", options: [{ text: "पूरा weekend couple time", type: "A" }, { text: "Majority time साथ में", type: "B" }, { text: "Some time साथ", type: "C" }, { text: "Flexible, जो हो", type: "D" }] },
  { id: 8, question: "New experiences together?", options: [{ text: "Regularly try नई चीज़ें", type: "A" }, { text: "कभी-कभी explore", type: "B" }, { text: "Comfort zone पसंद", type: "C" }, { text: "Individual exploration", type: "D" }] },
  { id: 9, question: "Presence vs Quantity?", options: [{ text: "Both important", type: "A" }, { text: "Quality > Quantity", type: "B" }, { text: "Whatever works", type: "C" }, { text: "Not particular", type: "D" }] },
  { id: 10, question: "Work से आने के बाद?", options: [{ text: "तुरंत partner के साथ", type: "A" }, { text: "थोड़ा rest, फिर time", type: "B" }, { text: "अपना-अपना routine", type: "C" }, { text: "Individual decompress", type: "D" }] },
  { id: 11, question: "Shared hobbies?", options: [{ text: "बहुत जरूरी हैं", type: "A" }, { text: "Nice to have", type: "B" }, { text: "Individual hobbies better", type: "C" }, { text: "Not necessary", type: "D" }] },
  { id: 12, question: "Quality time priority?", options: [{ text: "Top priority", type: "A" }, { text: "Very important", type: "B" }, { text: "Important among many", type: "C" }, { text: "One of things", type: "D" }] },
];

export const results = {
  A: { type: "A", title: "Quality Time Lover", emoji: "⏰", description: "Quality time आपकी love language है! साथ में time सबसे जरूरी।", traits: ["togetherness", "presence-loving", "connected"], strengths: ["strong bond", "memories created"], weaknesses: ["partner पर dependent"], tips: ["individual time भी healthy है"] },
  B: { type: "B", title: "Balanced Timer", emoji: "⚖️", description: "Quality time important है पर balanced। Individual और couple time दोनों।", traits: ["balanced", "reasonable", "healthy"], strengths: ["good balance", "healthy approach"], weaknesses: ["may want more sometimes"], tips: ["continue this balance"] },
  C: { type: "C", title: "Independent Together", emoji: "🔗", description: "Individual space prefer पर connection भी। Healthy independence।", traits: ["independent", "individual", "connected"], strengths: ["strong individual identity"], weaknesses: ["partner को less feel"], tips: ["quality time भी prioritize करें"] },
  D: { type: "D", title: "Space Seeker", emoji: "🦅", description: "Individual space ज्यादा जरूरी। Together time secondary।", traits: ["independent", "space-needing", "autonomous"], strengths: ["self-sufficient"], weaknesses: ["partner disconnected"], tips: ["togetherness भी relationship के लिए जरूरी"] },
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
