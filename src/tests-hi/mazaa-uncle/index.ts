// अंकल टाइप टेस्ट - आप कौन से अंकल हैं?
// Indian Uncle Type Test

export const questions = [
  {
    id: 1,
    question: "Morning routine?",
    options: [
      { text: "Park में walk और politics discuss", type: "A" },
      { text: "Newspaper और chai", type: "B" },
      { text: "Yoga और meditation", type: "C" },
      { text: "Late उठना, Netflix", type: "D" },
    ],
  },
  {
    id: 2,
    question: "बच्चों को क्या advice देते हैं?",
    options: [
      { text: "मेरे ज़माने में...", type: "A" },
      { text: "पढ़ाई करो, नौकरी लगो", type: "B" },
      { text: "Health सबसे पहले", type: "C" },
      { text: "Enjoy life, follow passion", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Function में?",
    options: [
      { text: "सबको lecture देते हुए", type: "A" },
      { text: "खाने पर focus", type: "B" },
      { text: "Exercise routine discuss", type: "C" },
      { text: "Dance floor पर", type: "D" },
    ],
  },
  {
    id: 4,
    question: "WhatsApp पर क्या share करते हैं?",
    options: [
      { text: "Political forwards और opinions", type: "A" },
      { text: "Good morning और family photos", type: "B" },
      { text: "Health tips और yoga videos", type: "C" },
      { text: "Memes और funny videos", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Cricket match के दौरान?",
    options: [
      { text: "Commentary करते हुए, expert opinion", type: "A" },
      { text: "Family के साथ देखना", type: "B" },
      { text: "Heart rate check करते हुए", type: "C" },
      { text: "Fantasy league पर bet", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Investment advice?",
    options: [
      { text: "FD और gold ही सही है", type: "A" },
      { text: "Balanced portfolio", type: "B" },
      { text: "Health insurance first", type: "C" },
      { text: "Crypto और stocks try करो", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Technology के साथ?",
    options: [
      { text: "Smartphone चलाना मुश्किल", type: "A" },
      { text: "Basic use आता है", type: "B" },
      { text: "Health apps master", type: "C" },
      { text: "Latest gadgets में interest", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Retirement plans?",
    options: [
      { text: "Temple tours और spiritual", type: "A" },
      { text: "पोते-पोतियों के साथ", type: "B" },
      { text: "Active और healthy रहना", type: "C" },
      { text: "Travel और new experiences", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Young generation को देखकर?",
    options: [
      { text: "ये generation बर्बाद है", type: "A" },
      { text: "Proud feel करते हैं", type: "B" },
      { text: "Health पर ध्यान नहीं देते", type: "C" },
      { text: "उनसे कुछ सीखता हूं", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Favorite topic of discussion?",
    options: [
      { text: "Politics और economy", type: "A" },
      { text: "Family और relationships", type: "B" },
      { text: "Diet और exercise", type: "C" },
      { text: "Latest trends और tech", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Fashion sense?",
    options: [
      { text: "Safari suit और sandals", type: "A" },
      { text: "Comfortable और practical", type: "B" },
      { text: "Track suit और sports shoes", type: "C" },
      { text: "Trendy और updated", type: "D" },
    ],
  },
  {
    id: 12,
    question: "आपका motto?",
    options: [
      { text: "मेरे ज़माने में ऐसा नहीं था", type: "A" },
      { text: "Family सबसे पहले", type: "B" },
      { text: "Health is wealth", type: "C" },
      { text: "Age is just a number", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Classic अंकल",
    emoji: "📰",
    description: "आप Traditional Uncle हैं! मेरे ज़माने में... आपका favorite dialogue। Politics, cricket, और life lessons देना hobby। Park ka president, society ka chairman!",
    traits: ["Traditional", "Opinionated", "Nostalgic", "Experienced"],
    strengths: ["Experience", "Wisdom", "Stories", "Knowledge"],
    weaknesses: ["Too preachy", "Resistant to change"],
    tips: ["New ideas भी सुनें", "Change accept करें"],
  },
  B: {
    type: "B",
    title: "Family Man अंकल",
    emoji: "👨‍👩‍👧‍👦",
    description: "आप Family-Focused Uncle हैं! Family comes first, हमेशा। हर occasion पर present, हर problem में support। Reliable और loving patriarch!",
    traits: ["Family-focused", "Caring", "Reliable", "Traditional"],
    strengths: ["Family values", "Reliability", "Support", "Love"],
    weaknesses: ["Over-protective", "Limited outside interests"],
    tips: ["Personal interests भी रखें", "बच्चों को space दें"],
  },
  C: {
    type: "C",
    title: "Fitness अंकल",
    emoji: "🏃",
    description: "आप Health-Conscious Uncle हैं! Sugar नहीं, oil कम, walk daily। 60 की age में 40 का fitness। Health tips देना और follow करना both expert!",
    traits: ["Health-conscious", "Disciplined", "Active", "Inspiring"],
    strengths: ["Fitness", "Discipline", "Motivation", "Health knowledge"],
    weaknesses: ["Too obsessed", "Preachy about health"],
    tips: ["कभी-कभी indulge भी करें", "दूसरों के choices respect करें"],
  },
  D: {
    type: "D",
    title: "Cool अंकल",
    emoji: "😎",
    description: "आप Modern Cool Uncle हैं! Memes share करते हैं, Netflix discuss करते हैं, GenZ slang जानते हैं। Age is just a number! Young at heart forever!",
    traits: ["Cool", "Modern", "Open-minded", "Fun"],
    strengths: ["Adaptability", "Fun", "Connection with youth", "Open mind"],
    weaknesses: ["Trying too hard कभी-कभी", "Not taken seriously"],
    tips: ["Balance रखें modern और mature में", "Experience share करें"],
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
