// सीमाएं - रिश्ते में boundaries
// Relationship Boundaries Test

export const questions = [
  { id: 1, question: "Personal space?", options: [{ text: "सब share, कोई boundary नहीं", type: "A" }, { text: "Mostly open, कुछ private", type: "B" }, { text: "Clear boundaries हैं", type: "C" }, { text: "Strong boundaries जरूरी", type: "D" }] },
  { id: 2, question: "Phone/Social media access?", options: [{ text: "Full access, no secrets", type: "A" }, { text: "Open पर individual space", type: "B" }, { text: "Limited access", type: "C" }, { text: "Private है मेरा phone", type: "D" }] },
  { id: 3, question: "Partner's friends?", options: [{ text: "सब मेरे भी friends", type: "A" }, { text: "Friendly, respectful", type: "B" }, { text: "उनके friends उनके", type: "C" }, { text: "Clear separation", type: "D" }] },
  { id: 4, question: "Financial boundaries?", options: [{ text: "पूरा joint, no boundaries", type: "A" }, { text: "Mostly joint, कुछ personal", type: "B" }, { text: "Clear financial boundaries", type: "C" }, { text: "Completely separate", type: "D" }] },
  { id: 5, question: "Time with others?", options: [{ text: "साथ में ही जाते हैं", type: "A" }, { text: "Balance करते हैं", type: "B" }, { text: "Individual time जरूरी", type: "C" }, { text: "Separate social lives", type: "D" }] },
  { id: 6, question: "Work-life boundary?", options: [{ text: "सब कुछ share work की", type: "A" }, { text: "Share करते हैं mostly", type: "B" }, { text: "Work और home separate", type: "C" }, { text: "Work private है", type: "D" }] },
  { id: 7, question: "Family involvement?", options: [{ text: "Family सब में involved", type: "A" }, { text: "Family जरूरत पर", type: "B" }, { text: "Limited involvement", type: "C" }, { text: "Family separate रखते हैं", type: "D" }] },
  { id: 8, question: "Past relationships?", options: [{ text: "सब कुछ बताया है", type: "A" }, { text: "Important बातें share", type: "B" }, { text: "Past is past", type: "C" }, { text: "Very private", type: "D" }] },
  { id: 9, question: "Hobbies और interests?", options: [{ text: "सब कुछ साथ में", type: "A" }, { text: "कुछ साथ, कुछ अकेले", type: "B" }, { text: "Individual hobbies important", type: "C" }, { text: "Separate interests prefer", type: "D" }] },
  { id: 10, question: "Emotional boundaries?", options: [{ text: "पूरी तरह open, सब share", type: "A" }, { text: "Mostly open", type: "B" }, { text: "कुछ चीज़ें personal", type: "C" }, { text: "Emotional privacy जरूरी", type: "D" }] },
  { id: 11, question: "Decision making?", options: [{ text: "सब decisions साथ में", type: "A" }, { text: "Big decisions together", type: "B" }, { text: "Autonomy भी जरूरी", type: "C" }, { text: "Individual decisions individual", type: "D" }] },
  { id: 12, question: "Overall boundaries?", options: [{ text: "No boundaries, merged lives", type: "A" }, { text: "Some boundaries", type: "B" }, { text: "Healthy boundaries", type: "C" }, { text: "Strong boundaries", type: "D" }] },
];

export const results = {
  A: { type: "A", title: "Boundary-Free", emoji: "🔓", description: "आप merged lives prefer करते हैं। Complete openness।", traits: ["open", "merged", "trusting", "sharing"], strengths: ["complete trust", "no secrets"], weaknesses: ["codependency risk", "no individual identity"], tips: ["कुछ boundaries healthy हैं"] },
  B: { type: "B", title: "Flexible Boundaries", emoji: "🚪", description: "Mostly open पर कुछ boundaries। Good balance!", traits: ["balanced", "flexible", "reasonable"], strengths: ["closeness + space", "trust + privacy"], weaknesses: ["may blur sometimes"], tips: ["boundaries clear रखें"] },
  C: { type: "C", title: "Healthy Boundaries", emoji: "✅", description: "Clear और healthy boundaries। Individual identity बनाए रखते हैं।", traits: ["boundaried", "individual", "healthy", "clear"], strengths: ["individual identity", "healthy relationship"], weaknesses: ["partner को distant लग सकता है"], tips: ["boundaries को communicate करें"] },
  D: { type: "D", title: "Strong Boundaries", emoji: "🛡️", description: "बहुत strong boundaries। Privacy और independence जरूरी।", traits: ["very private", "independent", "protected"], strengths: ["strong individual identity"], weaknesses: ["intimacy में barrier", "partner disconnected"], tips: ["थोड़ा open up करें", "trust build करें"] },
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
