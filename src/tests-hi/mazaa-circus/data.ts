// सर्कस में आप कौन? - Who are you in the circus?
// Circus Personality Test

export const questions = [
  {
    id: 1,
    question: "सर्कस का टेंट लगाना है, आप क्या करेंगे?",
    options: [
      { text: "सबको organize करूंगा, leader बनकर", type: "A" },
      { text: "मैं तो perform करूंगा, setup दूसरे करें", type: "B" },
      { text: "Quietly काम करूंगा, background में", type: "C" },
      { text: "सबको हंसाता रहूंगा काम करते-करते", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Crowd के सामने perform करना हो तो?",
    options: [
      { text: "मैं तो star हूं, spotlight मेरी!", type: "A" },
      { text: "Thrilling stunt करूंगा, सबके होश उड़ा दूं", type: "B" },
      { text: "Behind the scenes रहना better है", type: "C" },
      { text: "Comedy करूंगा, हंसी में डुबो दूंगा", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Risk लेने में कैसे हैं आप?",
    options: [
      { text: "Calculated risk, planned तरीके से", type: "A" },
      { text: "Full on daredevil, डर किस बात का!", type: "B" },
      { text: "Safe रहना prefer करता हूं", type: "C" },
      { text: "Risk भी fun होना चाहिए", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Team में आपका role?",
    options: [
      { text: "Ringmaster - सब मेरे इशारे पर", type: "A" },
      { text: "Star performer - सबकी नज़रें मुझ पर", type: "B" },
      { text: "Support team - show चलता रहे", type: "C" },
      { text: "Entertainment - माहौल बनाना", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Pressure में कैसे handle करते हैं?",
    options: [
      { text: "Cool रहकर, सबको direct करता हूं", type: "A" },
      { text: "Pressure तो fuel है मेरे लिए!", type: "B" },
      { text: "Quietly काम करता हूं, drama नहीं", type: "C" },
      { text: "Tension को हंसी में उड़ा देता हूं", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Success का celebration कैसे?",
    options: [
      { text: "Grand party, बड़ा celebration", type: "A" },
      { text: "Next bigger challenge की तैयारी", type: "B" },
      { text: "Simple thanks और move on", type: "C" },
      { text: "Jokes और fun के साथ celebrate", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Failure हो जाए तो?",
    options: [
      { text: "Analyze करूंगा, better plan बनाऊंगा", type: "A" },
      { text: "गिरा तो क्या, फिर उठूंगा!", type: "B" },
      { text: "Quietly सीखूंगा और आगे बढ़ूंगा", type: "C" },
      { text: "Failure पर भी हंस लूंगा", type: "D" },
    ],
  },
  {
    id: 8,
    question: "नए लोगों से मिलना?",
    options: [
      { text: "Networking, connections बनाना", type: "A" },
      { text: "Impress करना, याद रहना", type: "B" },
      { text: "धीरे-धीरे comfortable होता हूं", type: "C" },
      { text: "Jokes से ice break करता हूं", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Life का show कैसा होना चाहिए?",
    options: [
      { text: "Grand और well-organized", type: "A" },
      { text: "Thrilling और unforgettable", type: "B" },
      { text: "Smooth और problem-free", type: "C" },
      { text: "Full of fun और laughter", type: "D" },
    ],
  },
  {
    id: 10,
    question: "आपकी superpower?",
    options: [
      { text: "Leadership और control", type: "A" },
      { text: "Courage और daring", type: "B" },
      { text: "Reliability और dedication", type: "C" },
      { text: "Humor और entertainment", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "रिंगमास्टर",
    emoji: "🎩",
    description: "आप सर्कस के रिंगमास्टर हैं! शो चलाने वाले, सबको organize करने वाले। आपके बिना सर्कस अधूरा है। Natural leader जो सबको एक direction में ले जाता है। चाहे office हो या घर, आप ही boss हैं!",
    traits: ["Leader", "Organizer", "Commanding", "Visionary"],
    strengths: ["Leadership", "Planning", "Control", "Charisma"],
    weaknesses: ["कभी-कभी too controlling", "Delegation में problem"],
    tips: ["दूसरों को भी shine करने दें", "Micromanage कम करें"],
  },
  B: {
    type: "B",
    title: "Trapeze Artist",
    emoji: "🎪",
    description: "आप trapeze artist हैं - Daredevil, risk-taker, thrill-seeker! उड़ान भरने वाले, limits push करने वाले। जहां भी जाते हैं, excitement लाते हैं। Boring life? Not your style!",
    traits: ["Daring", "Exciting", "Adventurous", "Fearless"],
    strengths: ["Courage", "Risk-taking", "Entertainment", "Inspiration"],
    weaknesses: ["कभी-कभी over-confident", "Safety ignore करना"],
    tips: ["थोड़ा caution भी रखें", "Plan B भी सोचें"],
  },
  C: {
    type: "C",
    title: "Stage Hand",
    emoji: "🔧",
    description: "आप stage hand हैं - Unsung hero, backbone of the show! Spotlight में नहीं, पर show आपके बिना नहीं चलता। Reliable, hardworking, dedicated। Real heroes don't need capes!",
    traits: ["Reliable", "Dedicated", "Humble", "Hardworking"],
    strengths: ["Dependability", "Skill", "Consistency", "Support"],
    weaknesses: ["Credit नहीं लेते", "Too much background में रहते हैं"],
    tips: ["अपना contribution highlight करें", "आगे आना भी सीखें"],
  },
  D: {
    type: "D",
    title: "जोकर",
    emoji: "🤡",
    description: "आप जोकर हैं - Entertainment king/queen! हंसाने वाले, माहौल बनाने वाले। दुख में भी हंसी लाते हैं, tension को comedy में बदलते हैं। Life का real star जो सबके दिल जीतता है!",
    traits: ["Funny", "Entertaining", "Positive", "Lovable"],
    strengths: ["Humor", "Positivity", "Social skills", "Resilience"],
    weaknesses: ["serious moments में भी funny", "अपनी feelings छुपाते हैं"],
    tips: ["कभी-कभी serious भी हो जाएं", "अपने emotions share करें"],
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
