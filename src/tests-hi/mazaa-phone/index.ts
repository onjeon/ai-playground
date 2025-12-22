// फ़ोन यूज़र टेस्ट - आप कैसे Phone user हैं?
// Phone Usage Personality Test

export const questions = [
  {
    id: 1,
    question: "सुबह उठते ही?",
    options: [
      { text: "Phone check before eyes open", type: "A" },
      { text: "Alarm off, थोड़ी देर बाद phone", type: "B" },
      { text: "Morning routine पहले", type: "C" },
      { text: "Phone कहां है खोजना", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Screen time average?",
    options: [
      { text: "6+ hours, proud of it", type: "A" },
      { text: "4-5 hours, aware हूं", type: "B" },
      { text: "2-3 hours, controlled", type: "C" },
      { text: "पता नहीं, check नहीं किया", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Notifications?",
    options: [
      { text: "All on, instant reply", type: "A" },
      { text: "Important ones only", type: "B" },
      { text: "Mostly silent", type: "C" },
      { text: "कुछ भी set नहीं किया properly", type: "D" },
    ],
  },
  {
    id: 4,
    question: "बिना phone एक दिन?",
    options: [
      { text: "Impossible, anxiety", type: "A" },
      { text: "मुश्किल होगा पर manage", type: "B" },
      { text: "Actually refreshing होगा", type: "C" },
      { text: "हो जाता है कभी-कभी", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Storage full?",
    options: [
      { text: "हमेशा, delete करते रहना पड़ता है", type: "A" },
      { text: "Manage करता हूं time to time", type: "B" },
      { text: "Rarely, ज्यादा save नहीं करता", type: "C" },
      { text: "Cloud क्या है?", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Apps count?",
    options: [
      { text: "100+ apps, folder organized", type: "A" },
      { text: "50-ish, useful ones", type: "B" },
      { text: "Essential only, 20-30", type: "C" },
      { text: "जो आया वो है, delete नहीं किया", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Battery anxiety?",
    options: [
      { text: "20% पर panic, charger कहां?", type: "A" },
      { text: "Power bank साथ रखता हूं", type: "B" },
      { text: "Die हो जाए तो चलेगा", type: "C" },
      { text: "Charge करना भूल जाता हूं", type: "D" },
    ],
  },
  {
    id: 8,
    question: "New phone upgrade?",
    options: [
      { text: "हर साल, latest चाहिए", type: "A" },
      { text: "2-3 साल में, जब जरूरत हो", type: "B" },
      { text: "जब तक चले use करता हूं", type: "C" },
      { text: "कोई दे दे तो ले लेता हूं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "खाना खाते वक्त phone?",
    options: [
      { text: "हमेशा, video चलता रहता है", type: "A" },
      { text: "Sometimes scroll करता हूं", type: "B" },
      { text: "खाने पर focus, phone away", type: "C" },
      { text: "Depends, कभी-कभी", type: "D" },
    ],
  },
  {
    id: 10,
    question: "रात को सोने से पहले?",
    options: [
      { text: "Last scroll, 1-2 घंटे और", type: "A" },
      { text: "थोड़ा देख लेता हूं", type: "B" },
      { text: "Phone दूर रखता हूं bed से", type: "C" },
      { text: "जब नींद आए तब रख देता हूं", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Important conversation?",
    options: [
      { text: "Phone पर ही prefer करता हूं", type: "A" },
      { text: "Call कर लेता हूं", type: "B" },
      { text: "In person best", type: "C" },
      { text: "जैसे हो जाए", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Phone means?",
    options: [
      { text: "Life, everything is here", type: "A" },
      { text: "Useful tool", type: "B" },
      { text: "Necessary evil", type: "C" },
      { text: "बस phone है", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Phone Addict",
    emoji: "📱",
    description: "आप Phone-aholic हैं! Life = Phone। Without it, withdrawal symptoms। Digital native, always connected। Screen is second home!",
    traits: ["Addicted", "Connected", "Digital-native", "Dependent"],
    strengths: ["Connectivity", "Information access", "Quick responses", "Tech-savvy"],
    weaknesses: ["Addiction", "Less present", "Health issues"],
    tips: ["Digital detox try करें", "Real life connections बढ़ाएं"],
  },
  B: {
    type: "B",
    title: "Balanced Phone User",
    emoji: "⚖️",
    description: "आप Balanced User हैं! Phone use करते हैं but controlled। Aware of screen time। Healthy relationship with technology!",
    traits: ["Balanced", "Aware", "Controlled", "Practical"],
    strengths: ["Balance", "Awareness", "Control", "Productivity"],
    weaknesses: ["Could reduce more", "Occasionally slip"],
    tips: ["Balance बनाए रखें", "Good habits continue करें"],
  },
  C: {
    type: "C",
    title: "Mindful Phone User",
    emoji: "🧘",
    description: "आप Minimalist Phone User हैं! Phone is tool, not life। Present in real moments। Digital wellness champion!",
    traits: ["Mindful", "Present", "Minimalist", "Healthy"],
    strengths: ["Presence", "Health", "Real connections", "Mindfulness"],
    weaknesses: ["Miss updates कभी-कभी", "Less reachable"],
    tips: ["Available भी रहें थोड़ा", "Balance maintain करें"],
  },
  D: {
    type: "D",
    title: "Old School Phone User",
    emoji: "📞",
    description: "आप Casual Phone User हैं! Phone है but relationship casual। Call और text enough। Not attached, just functional!",
    traits: ["Casual", "Functional", "Old-school", "Detached"],
    strengths: ["Freedom", "No dependency", "Simple life", "Battery lasts"],
    weaknesses: ["Miss conveniences", "Less connected"],
    tips: ["Useful features explore करें", "Connected रहें थोड़ा"],
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
