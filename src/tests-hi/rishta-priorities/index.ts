// प्राथमिकताएं - रिश्ते में priorities
// Relationship Priorities Test

export const questions = [
  { id: 1, question: "Life में top priority?", options: [{ text: "Partner और relationship", type: "A" }, { text: "Family और loved ones", type: "B" }, { text: "Career और success", type: "C" }, { text: "खुद की growth", type: "D" }] },
  { id: 2, question: "Partner बीमार हो, meeting हो?", options: [{ text: "Partner के साथ रहूंगा/रहूंगी", type: "A" }, { text: "Meeting postpone try", type: "B" }, { text: "Meeting attend करूंगा/करूंगी", type: "C" }, { text: "Meeting जरूरी है", type: "D" }] },
  { id: 3, question: "Free time में?", options: [{ text: "Partner के साथ spend", type: "A" }, { text: "Family और partner दोनों", type: "B" }, { text: "Friends और hobbies भी", type: "C" }, { text: "खुद का time जरूरी", type: "D" }] },
  { id: 4, question: "Big decision लेना हो?", options: [{ text: "Partner की राय सबसे पहले", type: "A" }, { text: "Partner और family दोनों", type: "B" }, { text: "खुद decide, फिर बताऊंगा/बताऊंगी", type: "C" }, { text: "अपना decision अपना", type: "D" }] },
  { id: 5, question: "Financial priorities?", options: [{ text: "Couple goals पहले", type: "A" }, { text: "Family और couple balanced", type: "B" }, { text: "Personal goals important", type: "C" }, { text: "Individual finances first", type: "D" }] },
  { id: 6, question: "Weekend plans clash?", options: [{ text: "Partner की choice", type: "A" }, { text: "Turn by turn decide", type: "B" }, { text: "Discuss करके compromise", type: "C" }, { text: "अपना plan important", type: "D" }] },
  { id: 7, question: "Career opportunity abroad?", options: [{ text: "Partner के बिना नहीं", type: "A" }, { text: "साथ जाने का plan", type: "B" }, { text: "Long distance try", type: "C" }, { text: "Career opportunity miss नहीं", type: "D" }] },
  { id: 8, question: "Friends vs Partner time?", options: [{ text: "Partner always first", type: "A" }, { text: "Balance करता/करती हूं", type: "B" }, { text: "Friends भी important", type: "C" }, { text: "मेरी social life मेरी", type: "D" }] },
  { id: 9, question: "Dreams vs Relationship?", options: [{ text: "Relationship में dreams adjust", type: "A" }, { text: "दोनों साथ में pursue", type: "B" }, { text: "Dreams important", type: "C" }, { text: "Dreams पहले", type: "D" }] },
  { id: 10, question: "Health priorities?", options: [{ text: "Partner's health = mine", type: "A" }, { text: "Both important", type: "B" }, { text: "अपनी health first", type: "C" }, { text: "Individual responsibility", type: "D" }] },
  { id: 11, question: "Daily life में?", options: [{ text: "Partner's needs first", type: "A" }, { text: "Mutual care", type: "B" }, { text: "Balance everything", type: "C" }, { text: "Self-care first", type: "D" }] },
  { id: 12, question: "Overall priority?", options: [{ text: "Partner > Everything", type: "A" }, { text: "Partner + Family + Self", type: "B" }, { text: "Self + Partner + Others", type: "C" }, { text: "Self > All", type: "D" }] },
];

export const results = {
  A: { type: "A", title: "Partner Prioritizer", emoji: "💑", description: "Partner आपकी सबसे बड़ी priority है। Devoted और loving!", traits: ["devoted", "partner-focused", "loving"], strengths: ["partner feels valued", "strong bond"], weaknesses: ["खुद को neglect"], tips: ["self-care भी जरूरी"] },
  B: { type: "B", title: "Balanced Prioritizer", emoji: "⚖️", description: "Partner, family और self में healthy balance। Mature approach!", traits: ["balanced", "mature", "caring"], strengths: ["all areas covered"], weaknesses: ["sometimes stretched thin"], tips: ["ऐसे ही continue करें"] },
  C: { type: "C", title: "Self-Aware Prioritizer", emoji: "🌟", description: "Self और partner दोनों important। Healthy individualism।", traits: ["self-aware", "independent", "balanced"], strengths: ["self-care", "healthy boundaries"], weaknesses: ["partner को less priority feel"], tips: ["partner को भी valued feel कराएं"] },
  D: { type: "D", title: "Self-First Prioritizer", emoji: "👤", description: "Self priority। Individual growth और needs पहले।", traits: ["individualistic", "self-focused", "independent"], strengths: ["strong self"], weaknesses: ["relationship suffer हो सकती है"], tips: ["relationship भी invest जरूरी"] },
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
