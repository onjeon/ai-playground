// शादी में भूमिका टेस्ट - शादी में आप क्या होंगे?
// Wedding Role Test

export const questions = [
  {
    id: 1,
    question: "शादी की तैयारी में आप?",
    options: [
      { text: "सब कुछ organize करता हूं", type: "A" },
      { text: "Dance practice में busy", type: "B" },
      { text: "खाने की quality check", type: "C" },
      { text: "Drama और gossip में", type: "D" },
    ],
  },
  {
    id: 2,
    question: "बारात में?",
    options: [
      { text: "सबको manage कर रहा हूं", type: "A" },
      { text: "सबसे आगे नाच रहा हूं", type: "B" },
      { text: "DJ को instructions दे रहा हूं", type: "C" },
      { text: "रो रहा हूं या रुला रहा हूं", type: "D" },
    ],
  },
  {
    id: 3,
    question: "मेहंदी की रात?",
    options: [
      { text: "Program smoothly चलाना", type: "A" },
      { text: "Performance का center", type: "B" },
      { text: "बढ़िया खाना ढूंढना", type: "C" },
      { text: "Emotional moments capture करना", type: "D" },
    ],
  },
  {
    id: 4,
    question: "शादी के खर्चे पर?",
    options: [
      { text: "Budget और planning मेरा काम", type: "A" },
      { text: "मुझे बस fun चाहिए", type: "B" },
      { text: "Good food पर खर्च हो", type: "C" },
      { text: "Emotional value matter करती है", type: "D" },
    ],
  },
  {
    id: 5,
    question: "रिश्तेदारों के साथ?",
    options: [
      { text: "Coordination करता हूं", type: "A" },
      { text: "Entertainment करता हूं", type: "B" },
      { text: "खाने पर discuss करता हूं", type: "C" },
      { text: "Old stories share करता हूं", type: "D" },
    ],
  },
  {
    id: 6,
    question: "विदाई के समय?",
    options: [
      { text: "Logistics handle कर रहा हूं", type: "A" },
      { text: "माहौल light कर रहा हूं", type: "B" },
      { text: "Doli में snacks रखवा रहा हूं", type: "C" },
      { text: "सबसे ज्यादा रो रहा हूं", type: "D" },
    ],
  },
  {
    id: 7,
    question: "शादी में outfit?",
    options: [
      { text: "Professional और neat", type: "A" },
      { text: "Flashy और stylish", type: "B" },
      { text: "Comfortable जिसमें खा सकूं", type: "C" },
      { text: "Traditional और emotional", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Photography में?",
    options: [
      { text: "Photographer को guide करता हूं", type: "A" },
      { text: "हर photo में pose दे रहा हूं", type: "B" },
      { text: "खाना खाते हुए candid", type: "C" },
      { text: "Emotional moments में", type: "D" },
    ],
  },
  {
    id: 9,
    question: "शादी के बाद क्या याद रहेगा?",
    options: [
      { text: "कैसे सब smooth रहा", type: "A" },
      { text: "कितना मज़ा किया", type: "B" },
      { text: "क्या-क्या खाया", type: "C" },
      { text: "कितने emotional moments थे", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Problem आए तो?",
    options: [
      { text: "तुरंत solve करता हूं", type: "A" },
      { text: "माहौल हल्का करता हूं", type: "B" },
      { text: "चाय-नाश्ता मंगवाता हूं", type: "C" },
      { text: "Emotional support देता हूं", type: "D" },
    ],
  },
  {
    id: 11,
    question: "शादी की सबसे important चीज़?",
    options: [
      { text: "Organization और planning", type: "A" },
      { text: "Music और dance", type: "B" },
      { text: "Food और hospitality", type: "C" },
      { text: "Love और emotions", type: "D" },
    ],
  },
  {
    id: 12,
    question: "अगली सुबह?",
    options: [
      { text: "Cleanup coordinate कर रहा हूं", type: "A" },
      { text: "Dance videos देख रहा हूं", type: "B" },
      { text: "Leftover खाना खा रहा हूं", type: "C" },
      { text: "रात की memories में खोया हूं", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "शादी का इवेंट मैनेजर",
    emoji: "📋",
    description: "आप शादी के असली Hero हैं! बिना आपके कुछ नहीं होता। Organizing, coordinating और problem-solving आपके DNA में है। हर detail पर नज़र, हर काम समय पर!",
    traits: ["Organized", "Responsible", "Problem-solver", "Leader"],
    strengths: ["Planning", "Coordination", "Crisis management", "Attention to detail"],
    weaknesses: ["खुद enjoy नहीं कर पाते", "Too stressed"],
    tips: ["कुछ देर के लिए relax भी करें", "Delegate करना सीखें"],
  },
  B: {
    type: "B",
    title: "डांस फ्लोर का बादशाह",
    emoji: "💃",
    description: "शादी में आप entertainment का center हैं! आपके बिना बारात फीकी, संगीत boring। आपके moves देखकर सब नाचने लगते हैं। Life of every function!",
    traits: ["Entertaining", "Energetic", "Fun", "Social"],
    strengths: ["Energy", "Entertainment", "Making memories", "Spreading joy"],
    weaknesses: ["Responsibility से भागते हैं", "Too much attention seeking"],
    tips: ["कुछ serious काम भी लें", "Others को भी shine करने दें"],
  },
  C: {
    type: "C",
    title: "खाने का शौकीन",
    emoji: "🍛",
    description: "आप शादी में खाने के expert हैं! कौन सा counter अच्छा है, कहां line कम है, कौन सी sweet best है - सब पता है। Food critic और guide दोनों!",
    traits: ["Foodie", "Practical", "Advisory", "Content"],
    strengths: ["Food knowledge", "Practical thinking", "Contentment", "Good taste"],
    weaknesses: ["Functions miss हो जाते हैं", "Too focused on food"],
    tips: ["Functions में भी participate करें", "Balance रखें"],
  },
  D: {
    type: "D",
    title: "इमोशनल एंकर",
    emoji: "😭",
    description: "आप शादी की emotional soul हैं! विदाई में सबसे पहले रोते हैं, हर moment को feel करते हैं। सबको emotional support देते हैं और memories preserve करते हैं।",
    traits: ["Emotional", "Sentimental", "Supportive", "Memorable"],
    strengths: ["Empathy", "Connection", "Memory keeping", "Emotional depth"],
    weaknesses: ["Too emotional कभी-कभी", "Crying too much"],
    tips: ["Happy moments भी enjoy करें", "Emotions balance करें"],
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
