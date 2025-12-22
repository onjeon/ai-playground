// जोड़ी मिलान - आप और पार्टनर कितने compatible हैं?
// Compatibility Test

export const questions = [
  {
    id: 1,
    question: "बड़े फैसलों में आप दोनों?",
    options: [
      { text: "हमेशा एक राय", type: "A" },
      { text: "discuss करके agree", type: "B" },
      { text: "कभी-कभी disagree", type: "C" },
      { text: "अक्सर clash", type: "D" },
    ],
  },
  {
    id: 2,
    question: "पैसों को लेकर approach?",
    options: [
      { text: "एक जैसी सोच", type: "A" },
      { text: "मिलती-जुलती", type: "B" },
      { text: "थोड़ा अलग", type: "C" },
      { text: "बिल्कुल opposite", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Future goals में?",
    options: [
      { text: "same vision", type: "A" },
      { text: "similar direction", type: "B" },
      { text: "कुछ different", type: "C" },
      { text: "totally different paths", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Communication style?",
    options: [
      { text: "बहुत अच्छी, खुलकर बात", type: "A" },
      { text: "अच्छी, समझ लेते हैं", type: "B" },
      { text: "कभी-कभी miscommunication", type: "C" },
      { text: "बात ही नहीं होती ठीक से", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Interests और hobbies?",
    options: [
      { text: "बहुत common हैं", type: "A" },
      { text: "कुछ common, कुछ अलग", type: "B" },
      { text: "ज्यादातर different", type: "C" },
      { text: "कुछ भी common नहीं", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Conflict resolution?",
    options: [
      { text: "जल्दी और healthy तरीके से", type: "A" },
      { text: "थोड़ा time लगता है पर solve", type: "B" },
      { text: "लंबे झगड़े होते हैं", type: "C" },
      { text: "issues pending रहते हैं", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Family values?",
    options: [
      { text: "same background और values", type: "A" },
      { text: "similar approach", type: "B" },
      { text: "कुछ differences", type: "C" },
      { text: "बहुत different families", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Physical intimacy में?",
    options: [
      { text: "perfect match", type: "A" },
      { text: "mostly satisfied", type: "B" },
      { text: "कुछ mismatch", type: "C" },
      { text: "बड़ी gap है", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Social life?",
    options: [
      { text: "same level की socializing पसंद", type: "A" },
      { text: "adjust करते हैं दोनों", type: "B" },
      { text: "एक ज्यादा social, एक कम", type: "C" },
      { text: "opposite personalities", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Life priorities?",
    options: [
      { text: "एक जैसी priorities", type: "A" },
      { text: "mostly aligned", type: "B" },
      { text: "कुछ चीज़ों में अलग", type: "C" },
      { text: "completely different priorities", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Emotional support?",
    options: [
      { text: "हमेशा एक-दूसरे के साथ", type: "A" },
      { text: "mostly supportive", type: "B" },
      { text: "कभी-कभी disconnect", type: "C" },
      { text: "support कम मिलता है", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall satisfaction?",
    options: [
      { text: "बहुत खुश, perfect match", type: "A" },
      { text: "खुश हूं, minor issues", type: "B" },
      { text: "ठीक-ठाक, काम चल रहा", type: "C" },
      { text: "satisfied नहीं हूं", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "परफेक्ट जोड़ी",
    emoji: "💑",
    description: "आप दोनों made for each other हैं! Values, goals और personalities perfectly match करती हैं। ये rare और beautiful है।",
    traits: ["highly compatible", "same wavelength", "strong bond", "mutual understanding"],
    strengths: ["natural compatibility", "less conflicts", "shared vision", "strong foundation"],
    weaknesses: ["कभी-कभी too comfortable हो जाते हैं"],
    tips: ["excitement बनाए रखें", "grow together", "don't take each other for granted"],
  },
  B: {
    type: "B",
    title: "अच्छी जोड़ी",
    emoji: "💕",
    description: "आप दोनों में अच्छी compatibility है। Minor differences हैं पर overall relation strong है।",
    traits: ["good match", "adjustable", "respectful", "understanding"],
    strengths: ["healthy relationship", "good communication", "mutual growth"],
    weaknesses: ["कुछ areas में work needed"],
    tips: ["differences पर काम करें", "communication और improve करें"],
  },
  C: {
    type: "C",
    title: "काम जारी है",
    emoji: "🔧",
    description: "आप दोनों में compatibility issues हैं। Relationship में effort लगाना पड़ेगा।",
    traits: ["work in progress", "some challenges", "differences present", "effort needed"],
    strengths: ["अगर काम करें तो improve हो सकता है"],
    weaknesses: ["communication gaps", "different priorities", "conflicts"],
    tips: ["open communication", "compromise सीखें", "counseling consider करें"],
  },
  D: {
    type: "D",
    title: "मुश्किल मिलान",
    emoji: "⚠️",
    description: "Compatibility में serious challenges हैं। Relationship पर गहराई से सोचने की जरूरत है।",
    traits: ["low compatibility", "frequent conflicts", "different values", "struggling"],
    strengths: ["awareness है कि issues हैं"],
    weaknesses: ["major differences", "unhappiness", "communication breakdown"],
    tips: ["professional help लें", "honestly evaluate करें", "changes discuss करें"],
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
