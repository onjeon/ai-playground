// बॉलीवुड हीरो टेस्ट - आप कौन से बॉलीवुड हीरो हैं?
// Bollywood Hero Test

export const questions = [
  {
    id: 1,
    question: "मुश्किल situation में आप क्या करते हैं?",
    options: [
      { text: "सबको बचाने की कोशिश करता हूं", type: "A" },
      { text: "Cool रहते हुए smart तरीके से handle", type: "B" },
      { text: "Comedy करके माहौल हल्का", type: "C" },
      { text: "Intense होकर action लेता हूं", type: "D" },
    ],
  },
  {
    id: 2,
    question: "प्यार का इज़हार कैसे करेंगे?",
    options: [
      { text: "गाने और डायलॉग्स के साथ dramatic style", type: "A" },
      { text: "Charming smile के साथ casually", type: "B" },
      { text: "हंसी-मज़ाक में छुपाकर", type: "C" },
      { text: "एक intense look से", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Party में आप कैसे होते हैं?",
    options: [
      { text: "सबका ध्यान अपनी ओर खींचता हूं", type: "A" },
      { text: "Coolly मिलता हूं, charm करता हूं", type: "B" },
      { text: "सबको हंसाता रहता हूं", type: "C" },
      { text: "Mysterious corner में खड़ा रहता हूं", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Villain से कैसे deal करेंगे?",
    options: [
      { text: "Powerful dialogue मारकर", type: "A" },
      { text: "Smart plan से outsmart करके", type: "B" },
      { text: "Confusion create करके", type: "C" },
      { text: "Action से सीधा सबक सिखाकर", type: "D" },
    ],
  },
  {
    id: 5,
    question: "आपका style statement क्या है?",
    options: [
      { text: "Classic और royal look", type: "A" },
      { text: "Trendy और stylish", type: "B" },
      { text: "Casual और fun", type: "C" },
      { text: "Rugged और intense", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Family के लिए आप?",
    options: [
      { text: "कुछ भी कर सकता हूं", type: "A" },
      { text: "Balance रखता हूं", type: "B" },
      { text: "हंसी-खुशी का माहौल बनाता हूं", type: "C" },
      { text: "Protect करने को तैयार", type: "D" },
    ],
  },
  {
    id: 7,
    question: "दोस्तों के साथ?",
    options: [
      { text: "Leader हूं group का", type: "A" },
      { text: "Cool buddy जो सबको impress करे", type: "B" },
      { text: "Entertainment का centre", type: "C" },
      { text: "Loyal और protective", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Emotional scene में?",
    options: [
      { text: "आंखों में आंसू, powerful dialogue", type: "A" },
      { text: "Cool रहते हुए भी feel दिखाता हूं", type: "B" },
      { text: "Comedy से emotional touch", type: "C" },
      { text: "Intense silence और expressions", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Dream date कैसी होगी?",
    options: [
      { text: "Grand romantic gesture के साथ", type: "A" },
      { text: "Fancy restaurant में smooth talk", type: "B" },
      { text: "Fun activity और हंसी-मज़ाक", type: "C" },
      { text: "Long drive और deep conversations", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Life का motto?",
    options: [
      { text: "रिश्ते निभाना सबसे बड़ा", type: "A" },
      { text: "Life को enjoy करो style से", type: "B" },
      { text: "हंसो, हंसाओ, जियो", type: "C" },
      { text: "Justice और truth हमेशा", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Signature move क्या है?",
    options: [
      { text: "Arms spread करके dramatic pose", type: "A" },
      { text: "Cool wink और smile", type: "B" },
      { text: "Funny face expressions", type: "C" },
      { text: "Intense stare", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Success कैसे celebrate करेंगे?",
    options: [
      { text: "Family के साथ grand celebration", type: "A" },
      { text: "Party में entry मारके", type: "B" },
      { text: "दोस्तों के साथ masti करके", type: "C" },
      { text: "Quietly अपनी जीत enjoy करके", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "शाहरुख खान",
    emoji: "👑",
    description: "आप King Khan हैं! Romantic, dramatic और larger than life personality। आपके dialogues दिल को छू जाते हैं और arms spread करके आप सबका दिल जीत लेते हैं। प्यार और family सबसे ऊपर!",
    traits: ["Romantic", "Dramatic", "Charismatic", "Family-oriented"],
    strengths: ["Great communicator", "Emotional depth", "Natural leader", "Charming"],
    weaknesses: ["Over-dramatic कभी-कभी", "Too intense"],
    tips: ["अपना charm बनाए रखें", "Balance रखें emotions में"],
  },
  B: {
    type: "B",
    title: "रणबीर कपूर",
    emoji: "😎",
    description: "आप cool, charming और versatile हैं! Effortlessly stylish, हर situation में adapt कर लेते हैं। Deep thinker हैं और अपनी charm से सबको impress कर देते हैं।",
    traits: ["Charming", "Versatile", "Stylish", "Thoughtful"],
    strengths: ["Adaptable", "Great style", "Smooth talker", "Intelligent"],
    weaknesses: ["कभी-कभी detached", "Too cool to show emotions"],
    tips: ["Emotions openly share करें", "Connections deep बनाएं"],
  },
  C: {
    type: "C",
    title: "वरुण धवन",
    emoji: "😄",
    description: "आप entertainment का powerhouse हैं! हमेशा energetic, funny और life of the party। आपकी comedy timing perfect है और आप सबको खुश कर देते हैं। Fun आपके साथ guaranteed!",
    traits: ["Funny", "Energetic", "Entertaining", "Loveable"],
    strengths: ["Great humor", "Positive vibes", "Approachable", "Fun to be around"],
    weaknesses: ["कभी-कभी too childish", "Serious नहीं हो पाते"],
    tips: ["Serious moments handle करना सीखें", "Depth भी दिखाएं"],
  },
  D: {
    type: "D",
    title: "हृतिक रोशन",
    emoji: "🔥",
    description: "आप intense, powerful और action hero हैं! Strong personality, killer looks और determination। जब action में आते हैं, तो सब देखते रह जाते हैं। Greek God of Bollywood!",
    traits: ["Intense", "Powerful", "Determined", "Strong"],
    strengths: ["Great focus", "Physical presence", "Dedication", "Passionate"],
    weaknesses: ["Too intense कभी-कभी", "Emotions छुपाते हैं"],
    tips: ["Lighten up sometimes", "Emotions share करें"],
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
