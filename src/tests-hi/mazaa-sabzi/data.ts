// सब्ज़ी टाइप टेस्ट - आप कौन सी सब्ज़ी हैं?
// Sabzi Preference Test

export const questions = [
  {
    id: 1,
    question: "Group project में आपका role?",
    options: [
      { text: "Leader, सब coordinate करता हूं", type: "A" },
      { text: "Supporter, जहां जरूरत हो help", type: "B" },
      { text: "Creative ideas देता हूं", type: "C" },
      { text: "अकेले अपना part करता हूं", type: "D" },
    ],
  },
  {
    id: 2,
    question: "सब्जी मंडी में कैसे shop करते हैं?",
    options: [
      { text: "Best quality चुनता हूं, price matter नहीं", type: "A" },
      { text: "Regular vendor से जो मिले", type: "B" },
      { text: "New vegetables try करता हूं", type: "C" },
      { text: "जल्दी-जल्दी लेकर निकल जाता हूं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Navratri कैसे मनाते हैं?",
    options: [
      { text: "Full fasting, proper व्रत", type: "A" },
      { text: "Family के साथ, जो हो जाए", type: "B" },
      { text: "Garba और dandiya का excitement", type: "C" },
      { text: "Normal routine, कुछ special नहीं", type: "D" },
    ],
  },
  {
    id: 4,
    question: "मम्मी की किस बात से खुश होते हैं?",
    options: [
      { text: "जब appreciate करें मेहनत", type: "A" },
      { text: "जब प्यार से खाना खिलाएं", type: "B" },
      { text: "जब free छोड़ दें decide करने के लिए", type: "C" },
      { text: "जब ज्यादा सवाल न पूछें", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Gym या exercise routine?",
    options: [
      { text: "Regular और disciplined", type: "A" },
      { text: "कभी-कभी, जब time मिले", type: "B" },
      { text: "Different activities try करता हूं", type: "C" },
      { text: "नहीं करता honestly", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Friends के बीच आप कौन हैं?",
    options: [
      { text: "Plan बनाने वाला, organizer", type: "A" },
      { text: "सबको जोड़ने वाला glue", type: "B" },
      { text: "Entertainment का source", type: "C" },
      { text: "Chill वाला, जो बोलो वो", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Bollywood hero में कौन सा trait पसंद?",
    options: [
      { text: "SRK जैसा romance", type: "A" },
      { text: "Salman जैसा bonding", type: "B" },
      { text: "Ranveer जैसा energy", type: "C" },
      { text: "Akshay जैसा practical", type: "D" },
    ],
  },
  {
    id: 8,
    question: "सब्जी खाने में preference?",
    options: [
      { text: "Rich gravy वाली", type: "A" },
      { text: "सादी सूखी सब्जी", type: "B" },
      { text: "कुछ नया recipe try", type: "C" },
      { text: "जो बन जाए वो खा लो", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Relatives से मिलना?",
    options: [
      { text: "हर festival पर जाता हूं", type: "A" },
      { text: "Close relatives से ही मिलता हूं", type: "B" },
      { text: "जब कुछ interesting हो", type: "C" },
      { text: "Avoid करता हूं mostly", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Life में success की परिभाषा?",
    options: [
      { text: "Top पर पहुंचना, recognition", type: "A" },
      { text: "Family खुश, सब ठीक", type: "B" },
      { text: "Passion follow करना", type: "C" },
      { text: "Peace of mind, no stress", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "पनीर",
    emoji: "🧀",
    percentage: 88,
    description: "आप पनीर हैं - premium, versatile और star of the dish! जैसे पनीर किसी भी सब्जी को special बना देता है, वैसे ही आप हर situation को elevate करते हैं। शादी हो या party, पनीर की तरह आप भी must-have!",
    characteristics: ["Premium personality", "Versatile skills", "Star presence", "High standards", "Leader quality"],
    advice: "Star बनना अच्छा है, पर supporting role भी accept करें कभी-कभी। हर dish में hero नहीं बनना है।",
  },
  B: {
    type: "B",
    title: "आलू",
    emoji: "🥔",
    percentage: 82,
    description: "आप आलू हैं - universal, reliable और everyone's buddy! जैसे आलू हर सब्जी में जा सकता है और खाली भी star बन सकता है, वैसे ही आप हर group में fit हो जाते हैं। India का favorite - आप भी!",
    characteristics: ["Universal appeal", "Adaptable", "Reliable friend", "Goes with everyone", "Comfort personality"],
    advice: "हर जगह fit होना अच्छा है, पर अपनी unique identity भी रखें। सबके साथ adjust करना हमेशा जरूरी नहीं।",
  },
  C: {
    type: "C",
    title: "शिमला मिर्च",
    emoji: "🫑",
    percentage: 76,
    description: "आप शिमला मिर्च हैं - colorful, crunchy और interesting! जैसे शिमला मिर्च dish में color और crunch लाती है, वैसे ही आप boring situations में excitement लाते हैं। Different और vibrant personality!",
    characteristics: ["Colorful personality", "Creative", "Adds excitement", "Different from crowd", "Vibrant energy"],
    advice: "Exciting होना great है, पर कभी-कभी calm भी रहें। हर जगह entertainment की जरूरत नहीं।",
  },
  D: {
    type: "D",
    title: "लौकी",
    emoji: "🥒",
    percentage: 70,
    description: "आप लौकी हैं - simple, healthy और no-fuss! जैसे लौकी drama-free और healthy option है, वैसे ही आप simple living prefer करते हैं। कोई हल्ला नहीं, शांति से life जीना है। Peaceful soul!",
    characteristics: ["Simple living", "Drama-free", "Low maintenance", "Peaceful nature", "Minimalist"],
    advice: "Simplicity अच्छी है, पर कभी-कभी life में थोड़ा spice भी add करें। बहुत bland भी boring हो जाता है।",
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
