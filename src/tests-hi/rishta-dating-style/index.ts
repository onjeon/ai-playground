// डेटिंग स्टाइल - Your Dating Style
// Dating Style Test

export const questions = [
  { id: 1, question: "First date preference?", options: [{ text: "Fancy dinner, dressed up", type: "A" }, { text: "Coffee और conversation", type: "B" }, { text: "Adventure activity", type: "C" }, { text: "Chill hangout", type: "D" }] },
  { id: 2, question: "Dating pace?", options: [{ text: "Slow, जानना जरूरी", type: "A" }, { text: "Moderate, organic", type: "B" }, { text: "Fast, chemistry हो तो go", type: "C" }, { text: "Depends on person", type: "D" }] },
  { id: 3, question: "कौन पहले message करे?", options: [{ text: "Traditional way, वो करें", type: "A" }, { text: "कोई भी, matter नहीं", type: "B" }, { text: "मैं ही करता/करती हूं usually", type: "C" }, { text: "Depends on vibe", type: "D" }] },
  { id: 4, question: "Multiple dating?", options: [{ text: "एक समय एक person", type: "A" }, { text: "Initial stage में okay", type: "B" }, { text: "Until exclusive बोले", type: "C" }, { text: "Explore all options", type: "D" }] },
  { id: 5, question: "Physical intimacy timing?", options: [{ text: "बहुत बाद में, connection पहले", type: "A" }, { text: "जब ready feel हो", type: "B" }, { text: "Chemistry हो तो जल्दी", type: "C" }, { text: "Casual about it", type: "D" }] },
  { id: 6, question: "Planning dates?", options: [{ text: "Love planning, grand dates", type: "A" }, { text: "Thoughtful planning", type: "B" }, { text: "Spontaneous better", type: "C" }, { text: "Whatever works", type: "D" }] },
  { id: 7, question: "Communication between dates?", options: [{ text: "Constant, miss करता/करती हूं", type: "A" }, { text: "Regular, healthy", type: "B" }, { text: "Minimal, space", type: "C" }, { text: "As needed", type: "D" }] },
  { id: 8, question: "DTR (Define the relationship)?", options: [{ text: "जल्दी clear करना है", type: "A" }, { text: "When feels right", type: "B" }, { text: "They should ask", type: "C" }, { text: "Labels जरूरी नहीं", type: "D" }] },
  { id: 9, question: "Meeting friends/family?", options: [{ text: "जल्दी, important है", type: "A" }, { text: "After some time", type: "B" }, { text: "Much later", type: "C" }, { text: "Only if serious", type: "D" }] },
  { id: 10, question: "Red flags approach?", options: [{ text: "Immediate exit", type: "A" }, { text: "Discuss करके देखते हैं", type: "B" }, { text: "देखते हैं, chance देते हैं", type: "C" }, { text: "Ignore करते हैं अक्सर", type: "D" }] },
  { id: 11, question: "Who pays on dates?", options: [{ text: "Traditional, they pay", type: "A" }, { text: "Split या alternate", type: "B" }, { text: "मैं pay करता/करती हूं often", type: "C" }, { text: "Doesn't matter", type: "D" }] },
  { id: 12, question: "Dating style overall?", options: [{ text: "Traditional romantic", type: "A" }, { text: "Modern balanced", type: "B" }, { text: "Bold initiator", type: "C" }, { text: "Casual explorer", type: "D" }] },
];

export const results = {
  A: { type: "A", title: "Traditional Romantic", emoji: "🌹", description: "Classic romantic style! Slow, meaningful dating prefer करते हैं।", traits: ["traditional", "romantic", "patient", "intentional"], strengths: ["deep connections", "clear intentions"], weaknesses: ["may miss opportunities being too slow"], tips: ["थोड़ा flexibility भी okay है"] },
  B: { type: "B", title: "Modern Dater", emoji: "☕", description: "Balanced, modern dating approach। Organic और healthy।", traits: ["balanced", "modern", "healthy", "communicative"], strengths: ["good balance", "clear communication"], weaknesses: ["may overthink"], tips: ["enjoy the process"] },
  C: { type: "C", title: "Bold Initiator", emoji: "🔥", description: "Bold और confident! Initiative लेने में comfortable।", traits: ["bold", "confident", "initiating", "fast"], strengths: ["knows what wants", "takes action"], weaknesses: ["may rush things"], tips: ["slow down कभी-कभी, connection build होने दें"] },
  D: { type: "D", title: "Casual Explorer", emoji: "🦋", description: "Casual, go with flow dating style।", traits: ["casual", "relaxed", "exploratory", "non-committed"], strengths: ["no pressure", "open"], weaknesses: ["may miss serious connections"], tips: ["serious होना भी try करें when right person"] },
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
