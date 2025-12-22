// सेवा का प्यार - Acts of Service Love Language
// Acts of Service Test

export const questions = [
  { id: 1, question: "Partner मदद करे तो?", options: [{ text: "सबसे ज्यादा प्यार लगता है", type: "A" }, { text: "बहुत अच्छा लगता है", type: "B" }, { text: "Nice gesture", type: "C" }, { text: "खुद कर लेता/लेती हूं", type: "D" }] },
  { id: 2, question: "Partner के लिए काम करना?", options: [{ text: "Love करता/करती हूं, प्यार है", type: "A" }, { text: "खुशी से करता/करती हूं", type: "B" }, { text: "जब जरूरी हो", type: "C" }, { text: "Fifty-fifty better", type: "D" }] },
  { id: 3, question: "Partner बिना बोले help करे?", options: [{ text: "Most loving feeling", type: "A" }, { text: "बहुत special", type: "B" }, { text: "Nice of them", type: "C" }, { text: "Okay है", type: "D" }] },
  { id: 4, question: "Household chores?", options: [{ text: "Sharing = love", type: "A" }, { text: "Team work important", type: "B" }, { text: "Divide करते हैं", type: "C" }, { text: "Individual responsibility", type: "D" }] },
  { id: 5, question: "Partner कुछ fix करे आपके लिए?", options: [{ text: "सबसे romantic gesture", type: "A" }, { text: "बहुत अच्छा लगता है", type: "B" }, { text: "Helpful", type: "C" }, { text: "खुद भी कर सकता/सकती हूं", type: "D" }] },
  { id: 6, question: "Taking care when sick?", options: [{ text: "सबसे ज्यादा प्यार feel", type: "A" }, { text: "बहुत important", type: "B" }, { text: "Nice to have", type: "C" }, { text: "Space चाहिए", type: "D" }] },
  { id: 7, question: "Partner errands करे?", options: [{ text: "Love expression है", type: "A" }, { text: "Thoughtful है", type: "B" }, { text: "Helpful", type: "C" }, { text: "जरूरी नहीं", type: "D" }] },
  { id: 8, question: "Cooking for partner?", options: [{ text: "प्यार से बनाता/बनाती हूं", type: "A" }, { text: "अच्छा लगता है", type: "B" }, { text: "Sometimes", type: "C" }, { text: "Not my thing", type: "D" }] },
  { id: 9, question: "Partner चाय/coffee बना कर लाए?", options: [{ text: "Heart melt हो जाता है", type: "A" }, { text: "Sweet gesture", type: "B" }, { text: "Nice", type: "C" }, { text: "खुद बना लेता/लेती हूं", type: "D" }] },
  { id: 10, question: "Helping with work/projects?", options: [{ text: "Love feeling", type: "A" }, { text: "बहुत helpful", type: "B" }, { text: "Okay", type: "C" }, { text: "Prefer doing alone", type: "D" }] },
  { id: 11, question: "Small acts of care?", options: [{ text: "Matter the most", type: "A" }, { text: "बहुत important", type: "B" }, { text: "Nice gestures", type: "C" }, { text: "Words matter more", type: "D" }] },
  { id: 12, question: "Acts of service overall?", options: [{ text: "My love language", type: "A" }, { text: "Very important", type: "B" }, { text: "One of expressions", type: "C" }, { text: "Not primary", type: "D" }] },
];

export const results = {
  A: { type: "A", title: "Service Lover", emoji: "🛠️", description: "Acts of Service आपकी love language है! मदद और सेवा से प्यार महसूस होता है।", traits: ["service-oriented", "caring", "helpful"], strengths: ["practical love", "actions speak"], weaknesses: ["may overdo for others"], tips: ["receive भी करना सीखें"] },
  B: { type: "B", title: "Caring Partner", emoji: "💪", description: "Acts of service बहुत matter करते हैं। Helpful होना love है।", traits: ["caring", "helpful", "practical"], strengths: ["supportive", "team player"], weaknesses: ["may expect same level"], tips: ["appreciate other expressions too"] },
  C: { type: "C", title: "Balanced Helper", emoji: "⚖️", description: "Help अच्छी है पर other expressions भी equally valid।", traits: ["balanced", "flexible", "multi-modal"], strengths: ["appreciates all forms"], weaknesses: ["may not initiate help"], tips: ["small acts try करें expressing love"] },
  D: { type: "D", title: "Independent Lover", emoji: "🦅", description: "Self-reliant हैं। Other love languages prefer करते हैं।", traits: ["independent", "self-sufficient", "non-service"], strengths: ["not dependent"], weaknesses: ["partner को acts चाहिए maybe"], tips: ["partner के लिए small acts try करें"] },
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
