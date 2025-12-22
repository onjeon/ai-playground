// रायता टाइप टेस्ट - Raita Personality Type
// What kind of Raita are you? (Also a fun Indian slang - "Raita failana" = making a mess!)

export const questions = [
  {
    id: 1,
    question: "कोई काम बिगड़ जाए तो आप?",
    options: [
      { text: "Calmly fix करता हूं, रायता नहीं फैलाता", type: "A" },
      { text: "थोड़ा panic करता हूं, फिर संभालता हूं", type: "B" },
      { text: "दूसरों की help लेता हूं", type: "C" },
      { text: "Full रायता! Drama और chaos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Group project में आपका role?",
    options: [
      { text: "Organizer - सबको track पर रखता हूं", type: "A" },
      { text: "Contributor - अपना part कर देता हूं", type: "B" },
      { text: "Supporter - जहां help चाहिए", type: "C" },
      { text: "रायता Master - deadlines miss, confusion create", type: "D" },
    ],
  },
  {
    id: 3,
    question: "अचानक guests आ गए घर पर?",
    options: [
      { text: "Cool, जो है वो serve कर देता हूं", type: "A" },
      { text: "थोड़ा stress, पर manage कर लेता हूं", type: "B" },
      { text: "Mom/Partner को बोल देता हूं", type: "C" },
      { text: "Panic mode! कुछ नहीं है घर में!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Secret रखने में कैसे हो?",
    options: [
      { text: "बहुत अच्छा, मुंह बंद रहता है", type: "A" },
      { text: "Try करता हूं, कभी-कभी slip हो जाता है", type: "B" },
      { text: "Close लोगों को बता देता हूं बस", type: "C" },
      { text: "रायता guaranteed! Secret? What secret?", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Traffic में late हो रहे हो?",
    options: [
      { text: "शांति से alternative route निकालता हूं", type: "A" },
      { text: "थोड़ा irritate होता हूं, पर cope कर लेता हूं", type: "B" },
      { text: "जो होगा देखा जाएगा", type: "C" },
      { text: "Full horn, गाली-गलौच, BP high!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Online shopping का order गलत आया?",
    options: [
      { text: "Return process follow करता हूं calmly", type: "A" },
      { text: "Customer care को call, थोड़ा frustrated", type: "B" },
      { text: "Adjust कर लेता हूं, चलता है", type: "C" },
      { text: "Social media पर complaint, drama!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Meeting में presentation देना है?",
    options: [
      { text: "Well prepared, smooth delivery", type: "A" },
      { text: "Nervous पर manage कर लेता हूं", type: "B" },
      { text: "Team के साथ मिलकर", type: "C" },
      { text: "Last minute prep, slides में गड़बड़!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "किसी ने आपकी बात गलत समझी?",
    options: [
      { text: "Calmly explain करता हूं", type: "A" },
      { text: "Clarify करने की कोशिश करता हूं", type: "B" },
      { text: "छोड़ देता हूं, time के साथ समझ जाएंगे", type: "C" },
      { text: "Argue! मैं सही हूं, वो गलत!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Plan बदल गया suddenly?",
    options: [
      { text: "Adapt कर लेता हूं easily", type: "A" },
      { text: "थोड़ा adjust करने में time लगता है", type: "B" },
      { text: "दूसरों को follow करता हूं", type: "C" },
      { text: "Mood off! Plan तो ये था!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "रायता आपके लिए क्या है?",
    options: [
      { text: "Dahi + boondi = tasty side dish", type: "A" },
      { text: "कभी-कभी खाता हूं, ठीक-ठाक", type: "B" },
      { text: "जो मिले खा लेता हूं", type: "C" },
      { text: "मैं तो खुद रायता हूं! Life = Chaos", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Boondi Raita - Cool & Composed",
    emoji: "😎",
    description: "आप Boondi Raita हैं - Cool, composed, और sabka favourite! कोई भी situation हो, आप calm रहते हो। रायता फैलाना? आपके dictionary में नहीं! लोग आपसे सीखते हैं crisis management!",
    traits: ["Calm", "Composed", "Reliable", "Problem-solver"],
    strengths: ["Crisis management", "Patience", "Stability"],
    weaknesses: ["कभी-कभी too controlled", "Emotions express कम करते हो"],
    tips: ["कभी-कभी थोड़ा chaos भी okay है", "Feel करो, control मत करो हमेशा"],
  },
  B: {
    type: "B",
    title: "Mix Veg Raita - Balanced",
    emoji: "🥗",
    description: "आप Mix Veg Raita हैं - थोड़ा stress, थोड़ा calm, balanced mix! Perfect नहीं पर try करते हो। कभी-कभी spill होता है, पर mostly manage। Realistic और relatable personality!",
    traits: ["Balanced", "Realistic", "Adaptable", "Human"],
    strengths: ["Adaptability", "Self-awareness", "Balance"],
    weaknesses: ["कभी-कभी stress ले लेते हो", "Overthinking"],
    tips: ["Perfection की जरूरत नहीं", "You're doing great!"],
  },
  C: {
    type: "C",
    title: "Plain Dahi - Go with Flow",
    emoji: "🥛",
    description: "आप Plain Dahi हैं - Simple, flexible, go with the flow। जो हो जाए, चलता है attitude। Neither create raita, nor fix it - बस adjust कर लेते हो। Chill life!",
    traits: ["Flexible", "Easy-going", "Adaptable", "Peaceful"],
    strengths: ["Flexibility", "Peace of mind", "Low stress"],
    weaknesses: ["कभी-कभी too passive", "Initiative कम"],
    tips: ["कभी lead भी करो", "अपनी voice रखो"],
  },
  D: {
    type: "D",
    title: "Full Raita - Chaos Champion",
    emoji: "🌀",
    description: "आप Full Raita हैं - Life = Exciting Chaos! Drama, confusion, फिर fix करना। 'Raita faila दिया' - ये आपका signature move है। Boring नहीं, unpredictable! At least life exciting है!",
    traits: ["Dramatic", "Unpredictable", "Entertaining", "Chaotic"],
    strengths: ["Entertainment value", "Life of the party", "Resilience"],
    weaknesses: ["Chaos creates stress for others", "Organization issues"],
    tips: ["थोड़ा planning try करो", "Chaos से break भी लो कभी"],
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
