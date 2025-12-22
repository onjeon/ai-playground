// शब्दों का प्यार - Words of Affirmation
// Words of Affirmation Test

export const questions = [
  { id: 1, question: "'I love you' सुनना कितना जरूरी?", options: [{ text: "रोज़ चाहिए, बहुत important", type: "A" }, { text: "Regularly अच्छा लगता है", type: "B" }, { text: "कभी-कभी okay", type: "C" }, { text: "Actions matter more", type: "D" }] },
  { id: 2, question: "Compliments receive करना?", options: [{ text: "Love करता/करती हूं", type: "A" }, { text: "अच्छा लगता है", type: "B" }, { text: "Okay है", type: "C" }, { text: "Awkward लगता है", type: "D" }] },
  { id: 3, question: "Verbal appreciation?", options: [{ text: "बहुत जरूरी, validate करता है", type: "A" }, { text: "Important है", type: "B" }, { text: "Nice to have", type: "C" }, { text: "Actions enough हैं", type: "D" }] },
  { id: 4, question: "Partner कुछ harsh बोले?", options: [{ text: "बहुत hurt होता है", type: "A" }, { text: "Hurt होता है", type: "B" }, { text: "थोड़ा affect", type: "C" }, { text: "शब्द शब्द हैं बस", type: "D" }] },
  { id: 5, question: "Love letters/messages?", options: [{ text: "Treasure करता/करती हूं", type: "A" }, { text: "बहुत special लगते हैं", type: "B" }, { text: "अच्छे हैं", type: "C" }, { text: "Verbal better", type: "D" }] },
  { id: 6, question: "Public praise?", options: [{ text: "Love it, proud feel", type: "A" }, { text: "अच्छा लगता है", type: "B" }, { text: "Okay है", type: "C" }, { text: "Private better", type: "D" }] },
  { id: 7, question: "Encouraging words?", options: [{ text: "बहुत motivate करते हैं", type: "A" }, { text: "Help करते हैं", type: "B" }, { text: "Nice", type: "C" }, { text: "खुद को motivate करता/करती हूं", type: "D" }] },
  { id: 8, question: "Sweet texts during day?", options: [{ text: "दिन बना देते हैं", type: "A" }, { text: "अच्छा लगता है", type: "B" }, { text: "Sometimes nice", type: "C" }, { text: "जरूरी नहीं", type: "D" }] },
  { id: 9, question: "Partner silent रहे?", options: [{ text: "बहुत bother करता है", type: "A" }, { text: "Uncomfortable है", type: "B" }, { text: "थोड़ा odd", type: "C" }, { text: "Okay, alone time", type: "D" }] },
  { id: 10, question: "'Thank you' और 'Sorry'?", options: [{ text: "बहुत important, always say", type: "A" }, { text: "जरूरी हैं", type: "B" }, { text: "Nice gestures", type: "C" }, { text: "Actions show enough", type: "D" }] },
  { id: 11, question: "Pet names और endearments?", options: [{ text: "Love them, special feel", type: "A" }, { text: "अच्छे लगते हैं", type: "B" }, { text: "Okay हैं", type: "C" }, { text: "Prefer name only", type: "D" }] },
  { id: 12, question: "Words overall importance?", options: [{ text: "Love language है मेरी", type: "A" }, { text: "बहुत important", type: "B" }, { text: "One of expressions", type: "C" }, { text: "Not primary", type: "D" }] },
];

export const results = {
  A: { type: "A", title: "Words Lover", emoji: "💬", description: "Words of Affirmation आपकी love language है! प्यार भरे शब्द आपको special feel कराते हैं।", traits: ["verbal-loving", "affirmation-needing", "expressive"], strengths: ["clear about needs", "appreciates expressions"], weaknesses: ["words hurt deeply"], tips: ["partner को बताएं ये need"] },
  B: { type: "B", title: "Appreciative Listener", emoji: "👂", description: "Words important हैं आपके लिए। Verbal expressions value करते हैं।", traits: ["appreciative", "listening", "verbal"], strengths: ["values expressions", "reciprocates"], weaknesses: ["may need reassurance"], tips: ["balance with other languages"] },
  C: { type: "C", title: "Balanced Communicator", emoji: "💭", description: "Words अच्छे हैं पर other expressions भी equally valid।", traits: ["balanced", "multi-modal", "flexible"], strengths: ["appreciates all forms"], weaknesses: ["may not express verbally much"], tips: ["words भी use करें expressing love"] },
  D: { type: "D", title: "Action Believer", emoji: "💪", description: "Actions speak louder। Words secondary हैं आपके लिए।", traits: ["action-oriented", "practical", "non-verbal"], strengths: ["values genuine actions"], weaknesses: ["partner को words चाहिए maybe"], tips: ["verbal expression भी try करें"] },
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
