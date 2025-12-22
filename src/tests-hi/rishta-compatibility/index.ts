// अनुकूलता जांच - Compatibility Check
// Relationship Compatibility Test

export const questions = [
  { id: 1, question: "Life goals match?", options: [{ text: "Perfectly aligned", type: "A" }, { text: "Mostly match", type: "B" }, { text: "कुछ different", type: "C" }, { text: "Very different", type: "D" }] },
  { id: 2, question: "Communication style?", options: [{ text: "बहुत similar, smooth", type: "A" }, { text: "Compatible", type: "B" }, { text: "कुछ mismatch", type: "C" }, { text: "Very different", type: "D" }] },
  { id: 3, question: "Values और beliefs?", options: [{ text: "Same values", type: "A" }, { text: "Core values match", type: "B" }, { text: "Some differences", type: "C" }, { text: "Conflicting values", type: "D" }] },
  { id: 4, question: "Conflict resolution?", options: [{ text: "Same approach, easy", type: "A" }, { text: "Work it out well", type: "B" }, { text: "Struggle sometimes", type: "C" }, { text: "Very challenging", type: "D" }] },
  { id: 5, question: "Social preferences?", options: [{ text: "Same level social", type: "A" }, { text: "Mostly compatible", type: "B" }, { text: "Different needs", type: "C" }, { text: "Opposite preferences", type: "D" }] },
  { id: 6, question: "Financial approach?", options: [{ text: "Same money habits", type: "A" }, { text: "Similar approach", type: "B" }, { text: "Some differences", type: "C" }, { text: "Very different", type: "D" }] },
  { id: 7, question: "Family expectations?", options: [{ text: "Aligned completely", type: "A" }, { text: "Mostly same", type: "B" }, { text: "Discuss needed", type: "C" }, { text: "Different expectations", type: "D" }] },
  { id: 8, question: "Emotional needs?", options: [{ text: "Perfect match", type: "A" }, { text: "Mostly met", type: "B" }, { text: "Some gaps", type: "C" }, { text: "Mismatch", type: "D" }] },
  { id: 9, question: "Lifestyle preferences?", options: [{ text: "Same lifestyle", type: "A" }, { text: "Compatible", type: "B" }, { text: "Adjustments needed", type: "C" }, { text: "Very different", type: "D" }] },
  { id: 10, question: "Physical intimacy?", options: [{ text: "Perfect match", type: "A" }, { text: "Good compatibility", type: "B" }, { text: "Work needed", type: "C" }, { text: "Mismatch", type: "D" }] },
  { id: 11, question: "Humor और interests?", options: [{ text: "Same sense, shared interests", type: "A" }, { text: "Mostly similar", type: "B" }, { text: "Some overlap", type: "C" }, { text: "Very different", type: "D" }] },
  { id: 12, question: "Overall compatibility?", options: [{ text: "Highly compatible", type: "A" }, { text: "Good compatibility", type: "B" }, { text: "Moderate", type: "C" }, { text: "Challenging", type: "D" }] },
];

export const results = {
  A: { type: "A", title: "परफेक्ट मैच", emoji: "💯", description: "बहुत high compatibility! Values, goals और lifestyle aligned। Soulmate level!", traits: ["highly compatible", "aligned", "matched"], strengths: ["natural harmony", "easy relationship"], weaknesses: ["may take for granted"], tips: ["appreciate और nurture करें"] },
  B: { type: "B", title: "अच्छी जोड़ी", emoji: "💕", description: "Good compatibility! कुछ differences पर core में match। Strong foundation!", traits: ["compatible", "good match", "balanced"], strengths: ["solid foundation", "room for growth"], weaknesses: ["minor adjustments needed"], tips: ["differences पर communicate करें"] },
  C: { type: "C", title: "वर्क इन प्रोग्रेस", emoji: "🔧", description: "Moderate compatibility। कुछ areas में work जरूरी।", traits: ["moderate match", "work needed", "potential"], strengths: ["aware of differences"], weaknesses: ["challenges present"], tips: ["openly discuss और compromise", "effort लगाएं"] },
  D: { type: "D", title: "चुनौतीपूर्ण मिलान", emoji: "⚠️", description: "Compatibility में challenges हैं। Serious evaluation जरूरी।", traits: ["low compatibility", "challenging", "different"], strengths: ["awareness है"], weaknesses: ["major differences", "effort intensive"], tips: ["honest evaluation करें", "counseling consider करें"] },
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
