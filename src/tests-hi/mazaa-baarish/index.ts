// बारिश प्रेमी टेस्ट - बारिश में आप कैसे हैं?
// Monsoon Personality Test

export const questions = [
  {
    id: 1,
    question: "पहली बारिश की बूंद गिरे तो?",
    options: [
      { text: "बाहर भागकर भीगना", type: "A" },
      { text: "Window से देखते हुए chai", type: "B" },
      { text: "AC on, work continue", type: "C" },
      { text: "Romantic song सुनना", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Monsoon craving?",
    options: [
      { text: "पकोड़े और chai mandatory", type: "A" },
      { text: "Garam soup या maggi", type: "B" },
      { text: "Normal खाना, diet follow", type: "C" },
      { text: "Partner के साथ dinner date", type: "D" },
    ],
  },
  {
    id: 3,
    question: "बारिश में traffic jam?",
    options: [
      { text: "Music लगाकर enjoy करता हूं", type: "A" },
      { text: "WFH बेहतर option", type: "B" },
      { text: "Frustrated, time waste", type: "C" },
      { text: "Partner को call करके बात", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Umbrella situation?",
    options: [
      { text: "कभी-कभी जानबूझकर भूल जाता हूं", type: "A" },
      { text: "हमेशा prepared रहता हूं", type: "B" },
      { text: "Multiple umbrellas, office और घर", type: "C" },
      { text: "Sharing umbrella best feeling", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Waterlogging?",
    options: [
      { text: "Adventure! पानी में चलना", type: "A" },
      { text: "Photos लेकर social media", type: "B" },
      { text: "घर से बाहर नहीं निकलता", type: "C" },
      { text: "Partner को pick करने जाता हूं", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Monsoon wardrobe?",
    options: [
      { text: "जो भीगे वो पहनो", type: "A" },
      { text: "Raincoat और waterproof shoes", type: "B" },
      { text: "Office appropriate, no compromise", type: "C" },
      { text: "Couple matching rainwear", type: "D" },
    ],
  },
  {
    id: 7,
    question: "पूरा दिन बारिश?",
    options: [
      { text: "Best day ever!", type: "A" },
      { text: "Cozy घर में movies", type: "B" },
      { text: "Productivity down, annoying", type: "C" },
      { text: "Cuddle weather!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Monsoon memories?",
    options: [
      { text: "बचपन में भीगना और खेलना", type: "A" },
      { text: "Family के साथ window से देखना", type: "B" },
      { text: "School/college miss करना", type: "C" },
      { text: "First rain date", type: "D" },
    ],
  },
  {
    id: 9,
    question: "बारिश में गाने?",
    options: [
      { text: "Tip tip barsa paani type peppy", type: "A" },
      { text: "Soft romantic old songs", type: "B" },
      { text: "Lo-fi beats, work के साथ", type: "C" },
      { text: "Tum hi ho type romantic", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Thunder और lightning?",
    options: [
      { text: "Exciting! Drama in the sky", type: "A" },
      { text: "थोड़ा डर लगता है honestly", type: "B" },
      { text: "Power cut tension", type: "C" },
      { text: "Partner के पास जाना है", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Petrichor (मिट्टी की खुशबू)?",
    options: [
      { text: "दीवाना हूं इसका", type: "A" },
      { text: "Pleasant है, like करता हूं", type: "B" },
      { text: "Notice नहीं करता", type: "C" },
      { text: "Romantic feel आती है", type: "D" },
    ],
  },
  {
    id: 12,
    question: "आपके लिए बारिश?",
    options: [
      { text: "Pure joy और childhood", type: "A" },
      { text: "Comfort और relaxation", type: "B" },
      { text: "Inconvenience mostly", type: "C" },
      { text: "Romance और love", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "बारिश का दीवाना",
    emoji: "🌧️",
    description: "आप True Rain Lover हैं! पहली बूंद में बाहर भागने वाले, पकोड़े mandatory, भीगना life है। Monsoon = Best season। Inner child alive and kicking!",
    traits: ["Joyful", "Childlike", "Spontaneous", "Nature-lover"],
    strengths: ["Joy", "Spontaneity", "Connection with nature", "Positivity"],
    weaknesses: ["Impractical कभी-कभी", "Ignoring health"],
    tips: ["Health का भी ध्यान रखें", "Practical भी बनें"],
  },
  B: {
    type: "B",
    title: "Cozy Rain Person",
    emoji: "☕",
    description: "आप Monsoon Comfort Seeker हैं! Window से देखना, chai पीना, blanket में movies। बारिश = Relaxation time। Perfect balance of enjoying and staying dry!",
    traits: ["Cozy", "Balanced", "Appreciative", "Comfortable"],
    strengths: ["Balance", "Appreciation", "Comfort-seeking", "Practical joy"],
    weaknesses: ["Miss the adventure", "Too comfortable"],
    tips: ["कभी-कभी भीगें भी", "Adventure try करें"],
  },
  C: {
    type: "C",
    title: "Practical Rain Person",
    emoji: "☔",
    description: "आप Rain-Tolerant Person हैं! बारिश = Inconvenience। Traffic, water-logging, productivity down। Necessary evil, जो झेलना पड़ता है। Practical mindset!",
    traits: ["Practical", "Work-focused", "Prepared", "Realistic"],
    strengths: ["Preparedness", "Focus", "Practicality", "Resilience"],
    weaknesses: ["Miss the joy", "Too serious"],
    tips: ["Joy भी find करें", "Relax कभी-कभी"],
  },
  D: {
    type: "D",
    title: "Romantic Rain Lover",
    emoji: "💕",
    description: "आप Monsoon Romantic हैं! बारिश = Love season। Partner के साथ भीगना, chai share करना, romantic songs। Bollywood style rain romance in real life!",
    traits: ["Romantic", "Emotional", "Loving", "Dreamy"],
    strengths: ["Romance", "Connection", "Emotion", "Love expression"],
    weaknesses: ["Too filmy", "Need partner for enjoyment"],
    tips: ["Solo rain fun भी enjoy करें", "Independent joy find करें"],
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
