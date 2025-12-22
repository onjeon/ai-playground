// आंटी टाइप टेस्ट - आप कौन सी आंटी हैं?
// Indian Aunty Type Test

export const questions = [
  {
    id: 1,
    question: "पड़ोसी के बच्चे के marks पूछने का style?",
    options: [
      { text: "Directly पूछती हूं और compare करती हूं", type: "A" },
      { text: "Indirectly पता लगाती हूं", type: "B" },
      { text: "मुझे कोई interest नहीं", type: "C" },
      { text: "Encourage करती हूं सबको", type: "D" },
    ],
  },
  {
    id: 2,
    question: "किसी की शादी में?",
    options: [
      { text: "दुल्हन की dress और jewelry judge", type: "A" },
      { text: "खाने पर focus", type: "B" },
      { text: "Quietly attend करती हूं", type: "C" },
      { text: "हर किसी से मिलना-जुलना", type: "D" },
    ],
  },
  {
    id: 3,
    question: "मोहल्ले में क्या role है?",
    options: [
      { text: "Information center", type: "A" },
      { text: "Cooking expert", type: "B" },
      { text: "Mind my own business", type: "C" },
      { text: "Problem solver", type: "D" },
    ],
  },
  {
    id: 4,
    question: "WhatsApp group में?",
    options: [
      { text: "Good morning images और forwards", type: "A" },
      { text: "Recipes share करती हूं", type: "B" },
      { text: "Mute पर रखती हूं", type: "C" },
      { text: "Helpful information share", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Young girls को देखकर?",
    options: [
      { text: "Dress comment करती हूं", type: "A" },
      { text: "Cooking सिखाने की offer", type: "B" },
      { text: "कोई reaction नहीं", type: "C" },
      { text: "Friendly बात करती हूं", type: "D" },
    ],
  },
  {
    id: 6,
    question: "TV serials के बारे में?",
    options: [
      { text: "हर episode discuss करती हूं", type: "A" },
      { text: "Cooking shows ही देखती हूं", type: "B" },
      { text: "Netflix prefer करती हूं", type: "C" },
      { text: "Family के साथ देखती हूं कुछ भी", type: "D" },
    ],
  },
  {
    id: 7,
    question: "बहू के बारे में राय?",
    options: [
      { text: "हर बात पर opinion", type: "A" },
      { text: "Cooking evaluate करती हूं", type: "B" },
      { text: "उसकी life उसकी choice", type: "C" },
      { text: "Support करती हूं", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Function में पहनावा?",
    options: [
      { text: "Heavy jewellery और silk saree", type: "A" },
      { text: "Comfortable और practical", type: "B" },
      { text: "Simple और elegant", type: "C" },
      { text: "जो बच्चे बोलें", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Unmarried लड़का/लड़की दिखे तो?",
    options: [
      { text: "Rishta सोचने लगती हूं", type: "A" },
      { text: "खाना खिलाने का मन", type: "B" },
      { text: "कोई concern नहीं", type: "C" },
      { text: "Career पूछती हूं", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Morning routine?",
    options: [
      { text: "Balcony से सब देखना", type: "A" },
      { text: "Kitchen में busy", type: "B" },
      { text: "Yoga या walk", type: "C" },
      { text: "Temple और prayers", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Money matters में?",
    options: [
      { text: "सबके finances पता है", type: "A" },
      { text: "Bargaining expert", type: "B" },
      { text: "अपना ही देखती हूं", type: "C" },
      { text: "सबकी help करती हूं", type: "D" },
    ],
  },
  {
    id: 12,
    question: "आपका motto?",
    options: [
      { text: "मुझे सब पता है", type: "A" },
      { text: "खाना ही सब कुछ है", type: "B" },
      { text: "Live and let live", type: "C" },
      { text: "सबकी भलाई में भलाई", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Gossip आंटी",
    emoji: "🗣️",
    description: "आप Classic Gossip Aunty हैं! मोहल्ले की हर खबर आपके पास। कौन कहां गया, किसने क्या पहना, किसकी शादी टूटी - सब पता है। Information hub of the locality!",
    traits: ["Curious", "Social", "Informative", "Judgmental"],
    strengths: ["Social networking", "Memory", "Observation", "Communication"],
    weaknesses: ["Too nosy", "Judgmental"],
    tips: ["Privacy respect करें", "Positive बातें share करें"],
  },
  B: {
    type: "B",
    title: "Khana-Khilao आंटी",
    emoji: "🍛",
    description: "आप Cooking Expert Aunty हैं! सबको खाना खिलाना आपका mission। Recipe के encyclopedia, kitchen की queen। भूखा कोई ना जाए घर से!",
    traits: ["Nurturing", "Cooking expert", "Caring", "Traditional"],
    strengths: ["Cooking", "Nurturing", "Hospitality", "Care"],
    weaknesses: ["Force feeding", "Food-obsessed"],
    tips: ["बाकी interests भी रखें", "Dietary choices respect करें"],
  },
  C: {
    type: "C",
    title: "Modern आंटी",
    emoji: "✨",
    description: "आप Cool Modern Aunty हैं! Young mindset, open thinking। Netflix देखती हैं, yoga करती हैं, दूसरों के matter में नहीं पड़तीं। Gen-Z approved aunty!",
    traits: ["Modern", "Open-minded", "Independent", "Cool"],
    strengths: ["Adaptability", "Open mind", "Independence", "Relevance"],
    weaknesses: ["Disconnected कभी-कभी", "Too aloof"],
    tips: ["Community से connect रहें", "Wisdom share करें"],
  },
  D: {
    type: "D",
    title: "Helper आंटी",
    emoji: "💝",
    description: "आप Supportive Aunty हैं! सबकी मदद करना आपका nature। Problems solve करती हैं, advice देती हैं, comfort zone बनाती हैं। Everyone's favorite aunty!",
    traits: ["Supportive", "Helpful", "Kind", "Wise"],
    strengths: ["Support", "Wisdom", "Kindness", "Reliability"],
    weaknesses: ["Over-helping", "Burnout"],
    tips: ["अपना भी ख्याल रखें", "Boundaries set करें"],
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
