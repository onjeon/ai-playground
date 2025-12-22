// तंदूर से क्या ऑर्डर करते हो? - Tandoor Order Personality
// What you order from the Tandoor reveals your personality!

export const questions = [
  {
    id: 1,
    question: "तंदूर से favourite order?",
    options: [
      { text: "Butter Naan - classic और creamy", type: "A" },
      { text: "Tandoori Roti - simple और healthy", type: "B" },
      { text: "Garlic Naan - bold और flavorful", type: "C" },
      { text: "Kulcha/Parantha - stuffed और heavy", type: "D" },
    ],
  },
  {
    id: 2,
    question: "तंदूर वाले से बात करने का style?",
    options: [
      { text: "Politely order करता हूं, thank you बोलता हूं", type: "A" },
      { text: "Short और direct - 'दो रोटी देना'", type: "B" },
      { text: "'भैया, एक्स्ट्रा butter लगाना!'", type: "C" },
      { text: "Chat करता हूं, 'आज कैसा chal रहा?'", type: "D" },
    ],
  },
  {
    id: 3,
    question: "नया तंदूर खुला मोहल्ले में?",
    options: [
      { text: "Try करूंगा, review दूंगा दोस्तों को", type: "A" },
      { text: "पुराना वाला ठीक है, क्यों बदलें", type: "B" },
      { text: "Definitely! नया explore करना है", type: "C" },
      { text: "सबके साथ जाऊंगा try करने", type: "D" },
    ],
  },
  {
    id: 4,
    question: "रोटी की quantity कैसी?",
    options: [
      { text: "Moderate, जितना खाना है उतना", type: "A" },
      { text: "Less, diet का ध्यान रखता हूं", type: "B" },
      { text: "Extra लेता हूं, कम पड़ जाए तो?", type: "C" },
      { text: "जितने लोग उतना, sharing is caring", type: "D" },
    ],
  },
  {
    id: 5,
    question: "तंदूर से निकली गर्मागर्म रोटी?",
    options: [
      { text: "तुरंत खाता हूं, fresh taste!", type: "A" },
      { text: "Pack करवाता हूं, घर ले जाऊंगा", type: "B" },
      { text: "वहीं खड़े-खड़े खा लेता हूं!", type: "C" },
      { text: "सबको distribute करता हूं पहले", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Credit खाता तंदूर पर?",
    options: [
      { text: "कभी-कभी, पर जल्दी clear कर देता हूं", type: "A" },
      { text: "नहीं, cash ही देता हूं हमेशा", type: "B" },
      { text: "चलता है, regular हूं तो adjust", type: "C" },
      { text: "'लिख ले भाई, महीने में दूंगा!'", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sabzi के साथ क्या खाते हो?",
    options: [
      { text: "Naan/Roti जो भी घर में है", type: "A" },
      { text: "Roti ही, healthy option", type: "B" },
      { text: "Butter Naan only, taste matter करता है", type: "C" },
      { text: "Mix - थोड़ा roti, थोड़ा naan, सब कुछ!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Rate बढ़ गया तंदूर का?",
    options: [
      { text: "समझता हूं, inflation है", type: "A" },
      { text: "दूसरा option देखूंगा सस्ता", type: "B" },
      { text: "थोड़ा negotiate करता हूं", type: "C" },
      { text: "Chalo yaar, quality अच्छी है तो ठीक", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sunday special order?",
    options: [
      { text: "Regular order, special क्या करना", type: "A" },
      { text: "घर पर बनाता हूं Sunday को", type: "B" },
      { text: "Extra order - Naan, Kulcha, Parantha सब!", type: "C" },
      { text: "Family के लिए mixed platter", type: "D" },
    ],
  },
  {
    id: 10,
    question: "तंदूर बंद है आज?",
    options: [
      { text: "कोई बात नहीं, कल ले लूंगा", type: "A" },
      { text: "घर पर tawa roti बना लूंगा", type: "B" },
      { text: "दूसरा तंदूर ढूंढूंगा, without रोटी नहीं चलेगा!", type: "C" },
      { text: "Maggi बना लेते हैं आज, चलता है", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Butter Naan - Classic Personality",
    emoji: "🧈",
    description: "आप Butter Naan हैं - Classic, smooth, और sabka favourite! Polite, balanced, और quality appreciate करने वाले। न ज्यादा drama, न कम - बस perfect। जैसे butter naan सब को पसंद, वैसे आप भी!",
    traits: ["Classic", "Balanced", "Polite", "Appreciated"],
    strengths: ["Likeability", "Balance", "Quality consciousness"],
    weaknesses: ["कभी-कभी too safe", "Risk avoid करते हो"],
    tips: ["कभी-कभी bold भी हो जाओ", "Experiment करना try करो"],
  },
  B: {
    type: "B",
    title: "Tandoori Roti - Simple & Grounded",
    emoji: "🫓",
    description: "आप Tandoori Roti हैं - Simple, practical, और healthy! No-nonsense approach to life। Budget conscious, health conscious। जो चाहिए वो, extra drama नहीं। Real और authentic personality!",
    traits: ["Simple", "Practical", "Grounded", "Health-conscious"],
    strengths: ["Practicality", "Simplicity", "Discipline"],
    weaknesses: ["कभी-कभी too strict", "Indulgence से दूर"],
    tips: ["कभी-कभी treat yourself", "Flexibility भी रखो"],
  },
  C: {
    type: "C",
    title: "Garlic Naan - Bold & Flavorful",
    emoji: "🧄",
    description: "आप Garlic Naan हैं - Bold, flavorful, और unforgettable! Extra butter, extra garlic - life में भी extra! कुछ भी करो, full intensity से। जो मिले वो पूरा enjoy करो!",
    traits: ["Bold", "Flavorful", "Intense", "Memorable"],
    strengths: ["Passion", "Living life fully", "Making an impact"],
    weaknesses: ["कभी-कभी too much", "Moderation में problem"],
    tips: ["Balance भी रखो", "Subtle भी powerful होता है"],
  },
  D: {
    type: "D",
    title: "Stuffed Kulcha - Sharing Personality",
    emoji: "🥟",
    description: "आप Stuffed Kulcha हैं - Full of surprises और sharing nature! अंदर बहुत कुछ है - प्यार, care, friendship। Family person, social person। सबके साथ share करना पसंद है - खाना हो या खुशियां!",
    traits: ["Generous", "Social", "Caring", "Full of surprises"],
    strengths: ["Generosity", "Social bonds", "Warmth"],
    weaknesses: ["खुद के लिए कम रखते हो", "Over-giving कभी-कभी"],
    tips: ["अपने लिए भी रखो", "Self-care important है"],
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
