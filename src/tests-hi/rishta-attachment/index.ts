// लगाव शैली - Attachment Style Test
// Attachment Style in Relationships

export const questions = [
  { id: 1, question: "Partner से दूर होने पर?", options: [{ text: "बहुत anxiety होती है", type: "A" }, { text: "Miss करता/करती हूं पर okay", type: "B" }, { text: "Comfortable हूं अकेले", type: "C" }, { text: "Relief जैसा लगता है", type: "D" }] },
  { id: 2, question: "Closeness के बारे में?", options: [{ text: "बहुत ज्यादा चाहिए", type: "A" }, { text: "Healthy closeness", type: "B" }, { text: "थोड़ी distance prefer", type: "C" }, { text: "Space जरूरी है", type: "D" }] },
  { id: 3, question: "Partner reply late करे?", options: [{ text: "Panic हो जाता/जाती हूं", type: "A" }, { text: "थोड़ा wonder, पर okay", type: "B" }, { text: "कोई issue नहीं", type: "C" }, { text: "मुझे भी prefer है space", type: "D" }] },
  { id: 4, question: "Reassurance की जरूरत?", options: [{ text: "Constantly चाहिए", type: "A" }, { text: "कभी-कभी", type: "B" }, { text: "बहुत कम", type: "C" }, { text: "Independent हूं", type: "D" }] },
  { id: 5, question: "Vulnerability sharing?", options: [{ text: "बहुत share, needy feel कभी", type: "A" }, { text: "Comfortable share करने में", type: "B" }, { text: "मुश्किल है", type: "C" }, { text: "Avoid करता/करती हूं", type: "D" }] },
  { id: 6, question: "Conflict में?", options: [{ text: "बहुत anxious, fix करना है तुरंत", type: "A" }, { text: "Discuss करके solve", type: "B" }, { text: "Space लेता/लेती हूं", type: "C" }, { text: "Withdraw हो जाता/जाती हूं", type: "D" }] },
  { id: 7, question: "Partner को trust करना?", options: [{ text: "बहुत trust, कभी-कभी blind", type: "A" }, { text: "Healthy trust", type: "B" }, { text: "Trust slowly build", type: "C" }, { text: "Trust मुश्किल है", type: "D" }] },
  { id: 8, question: "Independence vs Togetherness?", options: [{ text: "Togetherness ज्यादा", type: "A" }, { text: "Healthy balance", type: "B" }, { text: "Independence prefer", type: "C" }, { text: "बहुत independent", type: "D" }] },
  { id: 9, question: "Relationship में fear?", options: [{ text: "Abandonment का डर", type: "A" }, { text: "कोई major fear नहीं", type: "B" }, { text: "Too close होने का", type: "C" }, { text: "Trapped होने का", type: "D" }] },
  { id: 10, question: "Partner's needs first?", options: [{ text: "हां, हमेशा उनकी पहले", type: "A" }, { text: "Balance करते हैं", type: "B" }, { text: "अपनी needs भी important", type: "C" }, { text: "Self-first", type: "D" }] },
  { id: 11, question: "Emotional dependency?", options: [{ text: "High, partner पर निर्भर", type: "A" }, { text: "Interdependent", type: "B" }, { text: "Mostly self-reliant", type: "C" }, { text: "Very self-reliant", type: "D" }] },
  { id: 12, question: "Overall attachment?", options: [{ text: "Anxious, clingy कभी", type: "A" }, { text: "Secure, balanced", type: "B" }, { text: "Avoidant tendencies", type: "C" }, { text: "Dismissive, very independent", type: "D" }] },
];

export const results = {
  A: { type: "A", title: "चिंतित लगाव (Anxious)", emoji: "😰", description: "Anxious attachment style। Closeness और reassurance बहुत चाहिए।", traits: ["anxious", "clingy", "reassurance-seeking"], strengths: ["caring", "invested"], weaknesses: ["overwhelming sometimes", "fear of abandonment"], tips: ["self-soothe सीखें", "therapy helpful"] },
  B: { type: "B", title: "सुरक्षित लगाव (Secure)", emoji: "💚", description: "Secure attachment style! Healthy balance और trust।", traits: ["secure", "trusting", "balanced", "comfortable"], strengths: ["healthy relationships", "good boundaries"], weaknesses: ["may attract insecure partners"], tips: ["ऐसे ही रहें, great job!"] },
  C: { type: "C", title: "टालने वाला लगाव (Avoidant)", emoji: "🚶", description: "Avoidant attachment। Independence और space prefer।", traits: ["avoidant", "independent", "space-needing"], strengths: ["self-reliant", "not needy"], weaknesses: ["intimacy से दूर", "partner को cold लगता है"], tips: ["vulnerability try करें", "closeness okay है"] },
  D: { type: "D", title: "खारिज करने वाला (Dismissive)", emoji: "🔒", description: "Dismissive-avoidant। बहुत independent, emotional distance।", traits: ["dismissive", "very independent", "distant"], strengths: ["extremely self-reliant"], weaknesses: ["intimacy avoid", "cold perception"], tips: ["connection important है", "therapy consider करें"] },
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
