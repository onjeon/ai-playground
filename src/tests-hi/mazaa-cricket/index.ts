// क्रिकेट खिलाड़ी टेस्ट - आप कौन से क्रिकेट खिलाड़ी हैं?
// Cricket Player Type Test

export const questions = [
  {
    id: 1,
    question: "Match में pressure में आप?",
    options: [
      { text: "Cool रहता हूं, finish करता हूं", type: "A" },
      { text: "Aggressive हो जाता हूं", type: "B" },
      { text: "Technical approach से handle", type: "C" },
      { text: "Team के लिए anchor बनता हूं", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Team में आपका role?",
    options: [
      { text: "Leader और match winner", type: "A" },
      { text: "Explosive performer", type: "B" },
      { text: "Reliable और consistent", type: "C" },
      { text: "Wall, never give up", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Critics को कैसे handle करते हैं?",
    options: [
      { text: "Performance से जवाब देता हूं", type: "A" },
      { text: "Boldly सामना करता हूं", type: "B" },
      { text: "Quietly prove करता हूं", type: "C" },
      { text: "Ignore करके focus रखता हूं", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Success celebrate कैसे करते हैं?",
    options: [
      { text: "Calmly, अगले goal पर focus", type: "A" },
      { text: "Grand celebration, enjoy!", type: "B" },
      { text: "Humble acknowledgment", type: "C" },
      { text: "Team के साथ share करके", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Training का approach?",
    options: [
      { text: "Perfect practice, leave nothing", type: "A" },
      { text: "Power और aggression build", type: "B" },
      { text: "Technical perfection", type: "C" },
      { text: "Mental strength और patience", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bad form में आप?",
    options: [
      { text: "Extra hard work करता हूं", type: "A" },
      { text: "Approach change करता हूं", type: "B" },
      { text: "Basics पर वापस जाता हूं", type: "C" },
      { text: "Patient रहता हूं, time लगता है", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Fitness के बारे में?",
    options: [
      { text: "Top priority, no compromise", type: "A" },
      { text: "Power और strength focus", type: "B" },
      { text: "Balance और flexibility", type: "C" },
      { text: "Endurance और stamina", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Last over, 10 runs चाहिए?",
    options: [
      { text: "मुझे strike दो, finish करता हूं", type: "A" },
      { text: "Sixes मारके खत्म करता हूं", type: "B" },
      { text: "Smart cricket खेलता हूं", type: "C" },
      { text: "Singles और doubles rotate", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Junior players को advice?",
    options: [
      { text: "Dedication सब कुछ है", type: "A" },
      { text: "Express yourself boldly", type: "B" },
      { text: "Technique perfect करो", type: "C" },
      { text: "Patience और hard work", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Off the field आप?",
    options: [
      { text: "Business minded, multiple ventures", type: "A" },
      { text: "Entertainment और fun", type: "B" },
      { text: "Low profile, private", type: "C" },
      { text: "Family और spiritual", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Big match से पहले रात?",
    options: [
      { text: "Visualize victory", type: "A" },
      { text: "Relaxed, confident", type: "B" },
      { text: "Plan और analyze", type: "C" },
      { text: "Good sleep, fresh mind", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Legacy क्या छोड़ना चाहते हैं?",
    options: [
      { text: "Greatest ever", type: "A" },
      { text: "Entertainer और match winner", type: "B" },
      { text: "Master of craft", type: "C" },
      { text: "Inspiration for generations", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "विराट कोहली",
    emoji: "🏏",
    description: "आप aggressive, passionate और winner हैं! Fitness freak, never-give-up attitude। Pressure में best perform करते हैं। Chase master और team का leader। King Kohli की तरह!",
    traits: ["Aggressive", "Passionate", "Winner", "Leader"],
    strengths: ["Pressure handling", "Consistency", "Fitness", "Leadership"],
    weaknesses: ["Too intense कभी-कभी", "Impatient"],
    tips: ["Calm भी रहना सीखें", "Others को space दें"],
  },
  B: {
    type: "B",
    title: "रोहित शर्मा",
    emoji: "🎯",
    description: "आप relaxed, talented और effortless हैं! Natural genius, जब चलते हैं तो records तोड़ते हैं। Big match player, sixes की बारिश! Hitman की तरह lazy elegance!",
    traits: ["Relaxed", "Talented", "Explosive", "Natural"],
    strengths: ["Natural talent", "Big match player", "Six-hitting", "Calm"],
    weaknesses: ["Inconsistent starts कभी-कभी", "Lazy tag"],
    tips: ["Consistency बढ़ाएं", "Every match big treat करें"],
  },
  C: {
    type: "C",
    title: "राहुल द्रविड़",
    emoji: "🧱",
    description: "आप technical, reliable और humble हैं! The Wall जैसी solid foundation। क्लासिक style, हर role में खुद को ढालने की ability। True gentleman of the game!",
    traits: ["Technical", "Reliable", "Humble", "Versatile"],
    strengths: ["Technique", "Adaptability", "Consistency", "Team player"],
    weaknesses: ["Too conservative कभी-कभी", "Underrated"],
    tips: ["अपनी value recognize करें", "Bold moves भी लें"],
  },
  D: {
    type: "D",
    title: "सचिन तेंदुलकर",
    emoji: "🙏",
    description: "आप dedicated, passionate और God-level हैं! Cricket का भगवान, pure love for the game। Humble despite success, inspiration for millions। Master Blaster की तरह legendary!",
    traits: ["Dedicated", "Passionate", "Humble", "Legendary"],
    strengths: ["Longevity", "Passion", "Skill", "Inspiration"],
    weaknesses: ["Perfectionist", "Too much pressure on self"],
    tips: ["Enjoy the journey", "Balance life और passion"],
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
