// चाय का प्रकार टेस्ट - आप कौन सी चाय हैं?
// Chai Type Test

export const questions = [
  {
    id: 1,
    question: "सुबह की शुरुआत कैसी होनी चाहिए?",
    options: [
      { text: "Strong kick चाहिए wake up के लिए", type: "A" },
      { text: "Slow और relaxed start", type: "B" },
      { text: "Sweet और comforting", type: "C" },
      { text: "Special और unique", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Stress में क्या चाहिए?",
    options: [
      { text: "कुछ strong जो energy दे", type: "A" },
      { text: "कुछ soothing जो calm करे", type: "B" },
      { text: "कुछ sweet जो comfort दे", type: "C" },
      { text: "कुछ different जो mood change करे", type: "D" },
    ],
  },
  {
    id: 3,
    question: "आपकी personality?",
    options: [
      { text: "Bold और straightforward", type: "A" },
      { text: "Calm और balanced", type: "B" },
      { text: "Sweet और caring", type: "C" },
      { text: "Unique और experimental", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Perfect chai partner?",
    options: [
      { text: "Samosa या pakora", type: "A" },
      { text: "Biscuits या toast", type: "B" },
      { text: "Cake या mithai", type: "C" },
      { text: "Something new हर बार", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Weather preference?",
    options: [
      { text: "Monsoon में garam chai", type: "A" },
      { text: "Any weather, any time", type: "B" },
      { text: "Winter में cozy chai", type: "C" },
      { text: "Summer में iced version", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Social में आप?",
    options: [
      { text: "Leader जो सबको जगाए", type: "A" },
      { text: "Peaceful presence", type: "B" },
      { text: "Warm और welcoming", type: "C" },
      { text: "Life of the party", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Work style?",
    options: [
      { text: "High energy, full power", type: "A" },
      { text: "Steady और consistent", type: "B" },
      { text: "Team harmony important", type: "C" },
      { text: "Creative और innovative", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Evening में क्या पसंद?",
    options: [
      { text: "Strong cutting chai", type: "A" },
      { text: "Light herbal tea", type: "B" },
      { text: "Masala chai with snacks", type: "C" },
      { text: "Something different try करना", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Life approach?",
    options: [
      { text: "No nonsense, direct", type: "A" },
      { text: "Go with the flow", type: "B" },
      { text: "Nurture और care", type: "C" },
      { text: "Adventure और explore", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Chai कहां पीना पसंद?",
    options: [
      { text: "Tapri पर standing", type: "A" },
      { text: "Balcony में relax करके", type: "B" },
      { text: "Family के साथ बैठकर", type: "C" },
      { text: "New cafe explore करके", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Problems solve कैसे करते हैं?",
    options: [
      { text: "Head on attack", type: "A" },
      { text: "Patiently और calmly", type: "B" },
      { text: "Support लेकर", type: "C" },
      { text: "Creative solutions", type: "D" },
    ],
  },
  {
    id: 12,
    question: "आपका motto?",
    options: [
      { text: "जागो और जगाओ", type: "A" },
      { text: "शांति सबसे बड़ी", type: "B" },
      { text: "मिठास बांटो", type: "C" },
      { text: "नया try करो", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "कड़क चाय",
    emoji: "💪",
    description: "आप कड़क चाय हैं - Strong, bold और no-nonsense! सुबह की पहली चाय जो सबको जगा दे। आपकी presence powerful है, आप energy और motivation लाते हैं हर जगह!",
    traits: ["Strong", "Bold", "Energetic", "Direct"],
    strengths: ["Leadership", "Motivation", "Energy", "Directness"],
    weaknesses: ["Too intense कभी-कभी", "Overwhelming for some"],
    tips: ["कभी-कभी soft भी होना ठीक है", "Patience रखें"],
  },
  B: {
    type: "B",
    title: "अदरक वाली चाय",
    emoji: "🫚",
    description: "आप अदरक वाली चाय हैं - Soothing, healing और balanced! थोड़ा kick भी और comfort भी। हर मौसम में साथ देने वाले, problems को heal करने की power है आपमें!",
    traits: ["Balanced", "Healing", "Soothing", "Reliable"],
    strengths: ["Balance", "Consistency", "Comfort", "Reliability"],
    weaknesses: ["Too predictable कभी-कभी", "Risk averse"],
    tips: ["कभी-कभी bold moves लें", "Change embrace करें"],
  },
  C: {
    type: "C",
    title: "मसाला चाय",
    emoji: "🫖",
    description: "आप मसाला चाय हैं - Sweet, aromatic और comforting! घर की याद दिलाने वाली, सबको एक साथ लाने वाली। Warmth और love आपकी identity है, सबके favourite!",
    traits: ["Sweet", "Comforting", "Warm", "Nurturing"],
    strengths: ["Caring", "Warmth", "Bringing people together", "Comfort"],
    weaknesses: ["Too sweet कभी-कभी", "Hard to say no"],
    tips: ["अपना भी ख्याल रखें", "Boundaries set करें"],
  },
  D: {
    type: "D",
    title: "इरानी चाय",
    emoji: "✨",
    description: "आप इरानी चाय हैं - Unique, special और unforgettable! Regular से हटकर, अपनी अलग पहचान। Creative और experimental, जो भी try करे याद रखे। Limited edition personality!",
    traits: ["Unique", "Creative", "Special", "Experimental"],
    strengths: ["Creativity", "Uniqueness", "Innovation", "Memorability"],
    weaknesses: ["Too different कभी-कभी", "Not everyone's cup of tea"],
    tips: ["Mainstream को भी समझें", "Connection बनाएं"],
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
