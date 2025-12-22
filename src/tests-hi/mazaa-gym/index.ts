// जिम टाइप टेस्ट - आप कैसे gym जाने वाले हैं?
// Gym Personality Type Test

export const questions = [
  {
    id: 1,
    question: "Gym membership लिया?",
    options: [
      { text: "हां, daily जाता हूं", type: "A" },
      { text: "हां, weekly 3-4 बार", type: "B" },
      { text: "हां, पर irregularly", type: "C" },
      { text: "New Year resolution, unused", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Gym में workout?",
    options: [
      { text: "Strict routine follow", type: "A" },
      { text: "Mix of cardio और weights", type: "B" },
      { text: "जो मन करे", type: "C" },
      { text: "Treadmill पर walk करके photo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Gym outfit?",
    options: [
      { text: "Performance gear, proper", type: "A" },
      { text: "Comfortable sportswear", type: "B" },
      { text: "जो भी clean मिले", type: "C" },
      { text: "Brand show-off, matching set", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Protein shake?",
    options: [
      { text: "Calculated macros, post-workout", type: "A" },
      { text: "कभी-कभी लेता हूं", type: "B" },
      { text: "Normal khana ही काफी", type: "C" },
      { text: "Photo के लिए hold करता हूं", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Mirror selfie?",
    options: [
      { text: "Progress track करने के लिए", type: "A" },
      { text: "Occasionally, motivation के लिए", type: "B" },
      { text: "कभी नहीं लेता", type: "C" },
      { text: "हर visit पर mandatory", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Trainer से relation?",
    options: [
      { text: "Personal trainer, strict schedule", type: "A" },
      { text: "Guidance लेता हूं जरूरत पर", type: "B" },
      { text: "YouTube se सीखा, खुद करता हूं", type: "C" },
      { text: "Trainer से बातें करने जाता हूं", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Rest day?",
    options: [
      { text: "Planned, muscle recovery", type: "A" },
      { text: "Weekend usually", type: "B" },
      { text: "हर दूसरा दिन rest", type: "C" },
      { text: "ज्यादातर दिन rest ही है", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Gym time?",
    options: [
      { text: "सुबह 5-6 बजे, dedicated slot", type: "A" },
      { text: "Evening, work के बाद", type: "B" },
      { text: "जब time मिले", type: "C" },
      { text: "जब Instagram post करना हो", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Diet के साथ gym?",
    options: [
      { text: "Strict diet plan follow", type: "A" },
      { text: "Healthy eating try करता हूं", type: "B" },
      { text: "Gym जाता हूं ताकि खा सकूं", type: "C" },
      { text: "Post-gym Maggi mandatory", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Gym buddy?",
    options: [
      { text: "Solo workout preferred", type: "A" },
      { text: "Friend के साथ motivating", type: "B" },
      { text: "कोई भी चलेगा", type: "C" },
      { text: "Photo लेने वाला चाहिए", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Goals?",
    options: [
      { text: "Competition level fitness", type: "A" },
      { text: "Healthy lifestyle", type: "B" },
      { text: "Weight loss/gain", type: "C" },
      { text: "Instagram worthy body", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Gym का मतलब?",
    options: [
      { text: "Lifestyle और discipline", type: "A" },
      { text: "Health investment", type: "B" },
      { text: "Guilt free eating", type: "C" },
      { text: "Social status और photos", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Fitness Freak",
    emoji: "💪",
    description: "आप Serious Gym-goer हैं! Discipline, diet, dedication - सब है। Results show करते हैं। Fitness lifestyle adopted। Beast mode on!",
    traits: ["Disciplined", "Dedicated", "Serious", "Results-oriented"],
    strengths: ["Discipline", "Results", "Knowledge", "Commitment"],
    weaknesses: ["Too strict", "Obsessive कभी-कभी"],
    tips: ["Balance भी important है", "Rest भी लें"],
  },
  B: {
    type: "B",
    title: "Balanced Gym-goer",
    emoji: "🏋️",
    description: "आप Balanced Fitness Enthusiast हैं! Regular workouts, healthy approach। Not obsessive, not lazy। Perfect middle ground!",
    traits: ["Balanced", "Healthy", "Regular", "Motivated"],
    strengths: ["Balance", "Consistency", "Healthy approach", "Sustainability"],
    weaknesses: ["Could push harder कभी-कभी", "Plateaus"],
    tips: ["कभी-कभी challenge खुद को", "Goals update करते रहें"],
  },
  C: {
    type: "C",
    title: "Casual Gym-goer",
    emoji: "🏃",
    description: "आप On-Off Gym Member हैं! Membership है, पर consistency struggle। Intentions अच्छी हैं, execution कम। Work in progress!",
    traits: ["Casual", "Inconsistent", "Good intentions", "Relaxed"],
    strengths: ["No pressure", "Self-aware", "Starting point"],
    weaknesses: ["Inconsistent", "Excuses", "Money waste"],
    tips: ["Schedule fix करें", "Accountability partner खोजें"],
  },
  D: {
    type: "D",
    title: "Instagram Gym-goer",
    emoji: "📸",
    description: "आप Gym Influencer Wannabe हैं! Outfit matching, selfie angle perfect, workout secondary। Looking fit > Being fit। Content is king!",
    traits: ["Showy", "Social media focused", "Appearance-oriented", "Trendy"],
    strengths: ["Motivation through vanity", "Community building", "Consistency for photos"],
    weaknesses: ["Surface level fitness", "No real progress"],
    tips: ["Actual workout भी करें", "Results पर focus करें"],
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
