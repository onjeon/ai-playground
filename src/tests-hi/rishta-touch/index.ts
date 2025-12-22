// स्पर्श का प्यार - Physical Touch Love Language
// Physical Touch Test

export const questions = [
  { id: 1, question: "Physical touch importance?", options: [{ text: "बहुत ज्यादा, जरूरी है", type: "A" }, { text: "Important है", type: "B" }, { text: "Nice to have", type: "C" }, { text: "Less important", type: "D" }] },
  { id: 2, question: "Hugs कितने चाहिए?", options: [{ text: "बहुत सारे, रोज़", type: "A" }, { text: "Daily कुछ", type: "B" }, { text: "Occasionally", type: "C" }, { text: "Not much", type: "D" }] },
  { id: 3, question: "Hand holding?", options: [{ text: "Love it, हमेशा", type: "A" }, { text: "अच्छा लगता है", type: "B" }, { text: "Sometimes okay", type: "C" }, { text: "Not necessary", type: "D" }] },
  { id: 4, question: "Cuddles?", options: [{ text: "Essential, daily चाहिए", type: "A" }, { text: "Love them", type: "B" }, { text: "Sometimes nice", type: "C" }, { text: "Too much closeness", type: "D" }] },
  { id: 5, question: "PDA (Public Display)?", options: [{ text: "Comfortable, show love", type: "A" }, { text: "Subtle okay", type: "B" }, { text: "Private में better", type: "C" }, { text: "Not comfortable", type: "D" }] },
  { id: 6, question: "Massage/Physical care?", options: [{ text: "Love to give & receive", type: "A" }, { text: "अच्छा लगता है", type: "B" }, { text: "Sometimes", type: "C" }, { text: "Not my thing", type: "D" }] },
  { id: 7, question: "Touch से comfort?", options: [{ text: "सबसे ज्यादा", type: "A" }, { text: "हां, helps", type: "B" }, { text: "थोड़ा", type: "C" }, { text: "Words better", type: "D" }] },
  { id: 8, question: "Physical absence tough?", options: [{ text: "बहुत मुश्किल", type: "A" }, { text: "Miss करता/करती हूं", type: "B" }, { text: "Manage हो जाता है", type: "C" }, { text: "Okay without", type: "D" }] },
  { id: 9, question: "Random touches?", options: [{ text: "Love them, connected feel", type: "A" }, { text: "Nice gestures", type: "B" }, { text: "Sometimes okay", type: "C" }, { text: "Prefer space", type: "D" }] },
  { id: 10, question: "Sitting close?", options: [{ text: "Always, touching", type: "A" }, { text: "Usually close", type: "B" }, { text: "Depends on mood", type: "C" }, { text: "Own space prefer", type: "D" }] },
  { id: 11, question: "Physical affection showing love?", options: [{ text: "Primary way for me", type: "A" }, { text: "Important way", type: "B" }, { text: "One of ways", type: "C" }, { text: "Not my style", type: "D" }] },
  { id: 12, question: "Overall touch need?", options: [{ text: "Very high, love language", type: "A" }, { text: "Above average", type: "B" }, { text: "Average", type: "C" }, { text: "Low", type: "D" }] },
];

export const results = {
  A: { type: "A", title: "Touch Lover", emoji: "🤗", description: "Physical Touch आपकी love language है! स्पर्श से प्यार महसूस होता है।", traits: ["touch-loving", "physical", "affectionate"], strengths: ["expressive physically", "warm"], weaknesses: ["need constant touch"], tips: ["partner की comfort level भी देखें"] },
  B: { type: "B", title: "Affectionate Partner", emoji: "💑", description: "Physical touch important है, regularly चाहिए।", traits: ["affectionate", "warm", "physically expressive"], strengths: ["balanced affection"], weaknesses: ["may feel neglected without touch"], tips: ["communicate touch needs"] },
  C: { type: "C", title: "Balanced Toucher", emoji: "⚖️", description: "Touch अच्छा है पर other expressions भी equally matter।", traits: ["balanced", "flexible", "adaptable"], strengths: ["multi-modal love"], weaknesses: ["may not initiate touch"], tips: ["touch भी initiate करें कभी-कभी"] },
  D: { type: "D", title: "Space Preferrer", emoji: "🧘", description: "Physical space prefer करते हैं। Touch secondary है।", traits: ["space-loving", "independent", "non-physical"], strengths: ["respects boundaries"], weaknesses: ["partner को touch चाहिए maybe"], tips: ["partner की needs समझें, compromise करें"] },
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
