// ससुराल प्रबंधन - In-laws management style
// In-Laws Management Test

export const questions = [
  {
    id: 1,
    question: "ससुराल के साथ रहना?",
    options: [
      { text: "खुशी से, joint family अच्छी", type: "A" },
      { text: "Initial years okay", type: "B" },
      { text: "Nearby पर separate", type: "C" },
      { text: "अलग ही रहना है", type: "D" },
    ],
  },
  {
    id: 2,
    question: "सास-ससुर के decisions?",
    options: [
      { text: "मानते हैं, experience है", type: "A" },
      { text: "Discuss करके decide", type: "B" },
      { text: "कुछ मानते, कुछ नहीं", type: "C" },
      { text: "अपना decision अपना", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Partner और parents में conflict?",
    options: [
      { text: "Parents की side usually", type: "A" },
      { text: "Neutral रहने की कोशिश", type: "B" },
      { text: "Partner की side mostly", type: "C" },
      { text: "जो सही हो उसकी", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Festival celebrations?",
    options: [
      { text: "ससुराल में साथ में", type: "A" },
      { text: "Rotate करते हैं", type: "B" },
      { text: "अपने-अपने घर", type: "C" },
      { text: "जहां मन हो", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Financial support to in-laws?",
    options: [
      { text: "ज़िम्मेदारी है, करते हैं", type: "A" },
      { text: "जरूरत पर help", type: "B" },
      { text: "Limited support", type: "C" },
      { text: "अपनी financial priority", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Privacy in joint family?",
    options: [
      { text: "Adjust कर लेते हैं", type: "A" },
      { text: "Balance बनाते हैं", type: "B" },
      { text: "Privacy जरूरी है", type: "C" },
      { text: "Without privacy नहीं चलेगा", type: "D" },
    ],
  },
  {
    id: 7,
    question: "In-laws की expectations?",
    options: [
      { text: "पूरी करने की कोशिश", type: "A" },
      { text: "Reasonable ones पूरी", type: "B" },
      { text: "कुछ ही पूरी करते हैं", type: "C" },
      { text: "अपनी life अपने तरीके से", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Kitchen sharing/साथ में खाना?",
    options: [
      { text: "एक साथ, no problem", type: "A" },
      { text: "Okay पर boundaries", type: "B" },
      { text: "Prefer separate", type: "C" },
      { text: "Definitely separate", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Parenting में in-laws का role?",
    options: [
      { text: "Welcome है, help", type: "A" },
      { text: "Some involvement okay", type: "B" },
      { text: "Limited involvement", type: "C" },
      { text: "मेरे बच्चे मेरी responsibility", type: "D" },
    ],
  },
  {
    id: 10,
    question: "In-laws से disagreement?",
    options: [
      { text: "Avoid करते हैं, respect", type: "A" },
      { text: "Politely express", type: "B" },
      { text: "बताते हैं clearly", type: "C" },
      { text: "Conflict हो जाता है", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Partner की sibling issues?",
    options: [
      { text: "Handle करते हैं gracefully", type: "A" },
      { text: "Neutral रहते हैं", type: "B" },
      { text: "Distance रखते हैं", type: "C" },
      { text: "Involvement नहीं चाहते", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall in-laws relationship?",
    options: [
      { text: "Priority, family है", type: "A" },
      { text: "Important, maintain करते हैं", type: "B" },
      { text: "Polite distance", type: "C" },
      { text: "Minimal interaction prefer", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "आदर्श बहू/दामाद",
    emoji: "🏠",
    description: "आप in-laws को अपना मानते हैं। Joint family में comfortable हैं। Traditional values strong!",
    traits: ["traditional", "family-oriented", "adaptable", "respectful"],
    strengths: ["family harmony", "support system", "loved by all"],
    weaknesses: ["individual space कम", "pressure कभी"],
    tips: ["boundaries भी important हैं", "खुद का ख्याल रखें"],
  },
  B: {
    type: "B",
    title: "बैलेंस्ड मैनेजर",
    emoji: "⚖️",
    description: "In-laws के साथ balanced approach। Respect और boundaries दोनों maintain।",
    traits: ["balanced", "diplomatic", "respectful", "boundaried"],
    strengths: ["healthy dynamics", "respect + space"],
    weaknesses: ["pleasing everyone hard"],
    tips: ["ऐसे ही maintain करें"],
  },
  C: {
    type: "C",
    title: "इंडिपेंडेंट स्टाइल",
    emoji: "🔗",
    description: "In-laws से respectful distance। Nuclear family preference with good relations।",
    traits: ["independent", "boundaried", "respectful", "distant"],
    strengths: ["clear boundaries", "privacy"],
    weaknesses: ["cold लग सकता है"],
    tips: ["warmth भी दिखाएं", "balance बनाएं"],
  },
  D: {
    type: "D",
    title: "अलग रहना पसंद",
    emoji: "🏡",
    description: "In-laws से distance prefer करते हैं। Own space और life जरूरी।",
    traits: ["very independent", "separate", "private", "autonomous"],
    strengths: ["clear about needs"],
    weaknesses: ["family tensions possible"],
    tips: ["minimum cordial रहें", "partner की help लें manage करने में"],
  },
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
