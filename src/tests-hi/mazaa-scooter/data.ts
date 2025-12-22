// स्कूटर/बाइक राइडर टाइप - Scooter/Bike Rider Personality
// Your two-wheeler riding style reveals your personality!

export const questions = [
  {
    id: 1,
    question: "Traffic signal पर आप?",
    options: [
      { text: "First row में, green होते ही zoom", type: "A" },
      { text: "Chill, जब हरा होगा तब निकलूंगा", type: "B" },
      { text: "Lane में properly रुकता हूं", type: "C" },
      { text: "Mobile check कर लेता हूं wait में", type: "D" },
    ],
  },
  {
    id: 2,
    question: "बारिश में ride करना?",
    options: [
      { text: "Raincoat पहनो और निकलो, रुकना नहीं!", type: "A" },
      { text: "Chai की tapri पर रुक जाता हूं", type: "B" },
      { text: "धीरे-धीरे safely निकलूंगा", type: "C" },
      { text: "Auto/cab ले लेता हूं ऐसे में", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Helmet का matter?",
    options: [
      { text: "पहनता हूं, but style वाला branded", type: "A" },
      { text: "जब याद आए, या police दिखे", type: "B" },
      { text: "Always पहनता हूं, safety first", type: "C" },
      { text: "Hair खराब हो जाते हैं यार", type: "D" },
    ],
  },
  {
    id: 4,
    question: "पीछे बैठने वाले को?",
    options: [
      { text: "Tight पकड़, speed में thrill है!", type: "A" },
      { text: "Comfortable ride, no tension", type: "B" },
      { text: "पूछता हूं - ठीक है? धीरे चलूं?", type: "C" },
      { text: "बातें करते-करते ride करता हूं", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Shortcut/गली से जाना?",
    options: [
      { text: "Expert हूं, हर shortcut पता है", type: "A" },
      { text: "Main road ही ठीक है, simple", type: "B" },
      { text: "Google Maps follow करता हूं", type: "C" },
      { text: "Adventure है, नई जगह explore", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bike/Scooter की सफाई?",
    options: [
      { text: "Sparkling clean, daily dhulta हूं", type: "A" },
      { text: "जब मन करे, weekly maybe", type: "B" },
      { text: "Regular service करवाता हूं", type: "C" },
      { text: "चलती है तो ठीक है बाबा", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Road पर गाना बजाना?",
    options: [
      { text: "Bluetooth speaker full volume!", type: "A" },
      { text: "Earphones लगाकर धीरे-धीरे", type: "B" },
      { text: "Riding में focus रहता हूं", type: "C" },
      { text: "Humming करता हूं खुद ही", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Long ride का plan?",
    options: [
      { text: "Adventure calling! चलो निकलते हैं", type: "A" },
      { text: "Mileage देखो, break points तय करो", type: "B" },
      { text: "Proper plan बनाऊंगा, safety kit साथ", type: "C" },
      { text: "Friends के साथ ही जाना है तो", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Overtake करना?",
    options: [
      { text: "Skill है, smoothly निकल जाता हूं", type: "A" },
      { text: "जब safe हो तभी", type: "B" },
      { text: "Indicator देकर, properly", type: "C" },
      { text: "Traffic में patience रखता हूं", type: "D" },
    ],
  },
  {
    id: 10,
    question: "New bike/scooter देखी market में?",
    options: [
      { text: "Test ride बुक करो, देखना है!", type: "A" },
      { text: "Chalo dekhते हैं showroom", type: "B" },
      { text: "Reviews पढ़ूंगा पहले online", type: "C" },
      { text: "Current वाली चल रही है बढ़िया", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Road का राजा/रानी",
    emoji: "🏍️",
    description: "आप Road के Raja/Rani हैं! Speed, thrill, adventure - यही life है! हर shortcut पता, हर signal पर first। Bike/Scooter आपकी extension है। 'Vroom vroom' is your anthem!",
    traits: ["Adventurous", "Confident", "Skilled", "Thrill-seeker"],
    strengths: ["Riding skills", "Road knowledge", "Quick reflexes"],
    weaknesses: ["Over-confidence कभी-कभी", "Speed limits ignore करना"],
    tips: ["Safety को priority दो", "Patience भी रखो road पर"],
  },
  B: {
    type: "B",
    title: "Chill Rider",
    emoji: "🛵",
    description: "आप Chill Rider हैं! No rush, no tension। Ride means relaxation, destination से ज्यादा journey important। Tapri पर chai, traffic में music - life को enjoy करते हो!",
    traits: ["Relaxed", "Easy-going", "Patient", "Zen-like"],
    strengths: ["Stress-free riding", "Patience", "Enjoyment"],
    weaknesses: ["कभी-कभी late होना", "Urgency कम"],
    tips: ["Time management सीखो", "कभी-कभी speed भी okay है"],
  },
  C: {
    type: "C",
    title: "Safety First Rider",
    emoji: "🛡️",
    description: "आप Safety First Rider हैं! Helmet always, rules follow, proper signals। Insurance updated, service on time। 'Beta, helmet!' - ये आपकी favourite dialogue है दोस्तों के लिए!",
    traits: ["Responsible", "Careful", "Rule-follower", "Prepared"],
    strengths: ["Safety record", "Reliability", "Responsibility"],
    weaknesses: ["कभी-कभी too cautious", "Thrill कम"],
    tips: ["थोड़ा loosen up भी करो", "Fun भी important है"],
  },
  D: {
    type: "D",
    title: "Social Rider",
    emoji: "🎉",
    description: "आप Social Rider हैं! Ride means company, friends के साथ घूमना। Destination से ज्यादा dost important। Group ride? Count me in! Bike se ज्यादा memories बनाते हो!",
    traits: ["Social", "Fun-loving", "Friendly", "Easy-going"],
    strengths: ["Making memories", "Group bonding", "Positive vibes"],
    weaknesses: ["Solo ride में bored", "Maintenance ignore करना"],
    tips: ["अपनी vehicle की care करो", "Solo rides भी try करो कभी"],
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
