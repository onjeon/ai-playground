// एकल परिवार - Nuclear family preference
// Nuclear Family Test

export const questions = [
  {
    id: 1,
    question: "Nuclear family क्यों prefer?",
    options: [
      { text: "Privacy और independence", type: "A" },
      { text: "Less conflicts", type: "B" },
      { text: "Modern lifestyle suit करता है", type: "C" },
      { text: "Partner के साथ alone time", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Parents से दूर रहना?",
    options: [
      { text: "Okay, अपनी life बनानी है", type: "A" },
      { text: "थोड़ा miss करेंगे पर okay", type: "B" },
      { text: "Close by रहेंगे", type: "C" },
      { text: "Guilt feel होता है", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Household responsibilities alone?",
    options: [
      { text: "Handle कर लूंगा/लूंगी", type: "A" },
      { text: "Partner के साथ divide", type: "B" },
      { text: "थोड़ा challenging", type: "C" },
      { text: "Help चाहिए", type: "D" },
    ],
  },
  {
    id: 4,
    question: "बच्चों की देखभाल?",
    options: [
      { text: "खुद manage, daycare", type: "A" },
      { text: "Parents occasional help", type: "B" },
      { text: "Nanny या help", type: "C" },
      { text: "बिना family मुश्किल है", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Emergency में?",
    options: [
      { text: "Plan होगा, manage", type: "A" },
      { text: "Friends या neighbors से help", type: "B" },
      { text: "Family को बुलाना पड़ेगा", type: "C" },
      { text: "Scary है alone", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Parents का visit?",
    options: [
      { text: "Welcome, short visits", type: "A" },
      { text: "Regular visits अच्छे हैं", type: "B" },
      { text: "कभी-कभी okay", type: "C" },
      { text: "ज्यादा time नहीं", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Financial pressure alone?",
    options: [
      { text: "Ready हूं, manage करूंगा/करूंगी", type: "A" },
      { text: "थोड़ा pressure पर doable", type: "B" },
      { text: "Challenging होगा", type: "C" },
      { text: "बहुत मुश्किल", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Loneliness?",
    options: [
      { text: "Partner है, enough", type: "A" },
      { text: "Friends circle maintain", type: "B" },
      { text: "कभी-कभी miss family", type: "C" },
      { text: "बहुत lonely feel", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Festivals alone?",
    options: [
      { text: "अपना celebration, fun", type: "A" },
      { text: "Parents को बुला लेंगे", type: "B" },
      { text: "Miss करेंगे family", type: "C" },
      { text: "Sad लगता है alone", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Cooking daily?",
    options: [
      { text: "Okay, सीख लिया/लेंगे", type: "A" },
      { text: "Manage करते हैं", type: "B" },
      { text: "Tiring है daily", type: "C" },
      { text: "मां का खाना miss", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Growing old in nuclear setup?",
    options: [
      { text: "Planning करेंगे retirement", type: "A" },
      { text: "देखा जाएगा future में", type: "B" },
      { text: "Concern है", type: "C" },
      { text: "बच्चे साथ रहें तो better", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall nuclear family confidence?",
    options: [
      { text: "पूरा confident", type: "A" },
      { text: "Ready हूं", type: "B" },
      { text: "थोड़ी चिंता है", type: "C" },
      { text: "Sure नहीं हूं", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nuclear Ready",
    emoji: "🏠",
    description: "आप nuclear family के लिए पूरी तरह ready हैं! Independent, capable और confident।",
    traits: ["independent", "self-reliant", "confident", "modern"],
    strengths: ["can manage alone", "privacy", "own decisions"],
    weaknesses: ["कभी-कभी overwhelming"],
    tips: ["support system बनाएं", "family से connected रहें"],
  },
  B: {
    type: "B",
    title: "अडैप्टेड Independent",
    emoji: "👫",
    description: "Nuclear family में रह सकते हैं। Balance बनाएंगे family और independence में।",
    traits: ["adaptable", "balanced", "practical", "connected"],
    strengths: ["manages well", "maintains ties"],
    weaknesses: ["transition period challenging"],
    tips: ["slow transition करें", "regular contact maintain करें"],
  },
  C: {
    type: "C",
    title: "Apprehensive Independent",
    emoji: "🤔",
    description: "Nuclear setup के बारे में concerns हैं। Support की जरूरत महसूस होती है।",
    traits: ["concerned", "dependent somewhat", "worried", "attached"],
    strengths: ["aware of needs"],
    weaknesses: ["may struggle alone"],
    tips: ["gradually adjust करें", "support network build करें"],
  },
  D: {
    type: "D",
    title: "Family Dependent",
    emoji: "👨‍👩‍👧‍👦",
    description: "Alone nuclear setup मुश्किल है। Family support जरूरी लगता है।",
    traits: ["family-dependent", "attached", "needing support", "traditional"],
    strengths: ["strong family bonds"],
    weaknesses: ["independence में struggle"],
    tips: ["joint family consider करें", "या nearby रहें family के"],
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
