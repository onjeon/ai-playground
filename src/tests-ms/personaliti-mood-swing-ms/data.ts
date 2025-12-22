// Gaya Mood Swing Kau
// Mood kau macam weather Malaysia ke macam air conditioner?

export const questions = [
  {
    id: 1,
    question: "Pagi ni mood kau okay. Petang macam mana?",
    options: [
      { text: "Still okay, consistent je", type: "A" },
      { text: "Depends on what happens", type: "B" },
      { text: "Dah tukar 3 kali dah", type: "C" },
      { text: "Pagi happy, tengahari sedih, petang marah!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Kawan batal plan last minute. Kau?",
    options: [
      { text: "Okay je, faham", type: "A" },
      { text: "Sikit kecewa tapi move on", type: "B" },
      { text: "Mood terus jatuh untuk whole day", type: "C" },
      { text: "Emotional rollercoaster - sedih, marah, then okay balik!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Dengar lagu sedih. Kau...",
    options: [
      { text: "Enjoy je, tak affect mood", type: "A" },
      { text: "Sikit touched tapi okay", type: "B" },
      { text: "Terus masuk sad mood for hours", type: "C" },
      { text: "Full on emotional, mungkin nangis sekali!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Hari biasa, berapa kali mood kau tukar?",
    options: [
      { text: "Sama je sepanjang hari", type: "A" },
      { text: "1-2 kali based on events", type: "B" },
      { text: "Multiple times, ikut situation", type: "C" },
      { text: "Every hour pun boleh tukar!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Benda kecil go wrong (spill coffee etc). Reaction kau?",
    options: [
      { text: "Clean up, move on", type: "A" },
      { text: "Annoyed kejap then okay", type: "B" },
      { text: "Ruins the next few hours", type: "C" },
      { text: "Could ruin the WHOLE day!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Someone compliment kau. How long the good mood lasts?",
    options: [
      { text: "Nice tapi tak lama effect", type: "A" },
      { text: "Happy for a bit", type: "B" },
      { text: "On cloud nine for hours!", type: "C" },
      { text: "EXTREMELY happy! Then crash bila overthink!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Period PMS / Stress time, mood kau macam mana?",
    options: [
      { text: "Tak beza sangat actually", type: "A" },
      { text: "Sikit more sensitive", type: "B" },
      { text: "Definitely more mood swings", type: "C" },
      { text: "COMPLETE emotional chaos!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dalam sehari, kau boleh go from happy to angry to sad?",
    options: [
      { text: "Rarely, very stable", type: "A" },
      { text: "Kalau ada major trigger je", type: "B" },
      { text: "Sometimes, depends on the day", type: "C" },
      { text: "YES that's literally every day!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Orang describe mood kau as...",
    options: [
      { text: "Steady, predictable", type: "A" },
      { text: "Normal, reasonable", type: "B" },
      { text: "Changeable, unpredictable sikit", type: "C" },
      { text: "Rollercoaster! Never know what to expect!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Weather/cuaca affect mood kau tak?",
    options: [
      { text: "Tak pun", type: "A" },
      { text: "Sikit je", type: "B" },
      { text: "Definitely! Hujan = mood turun", type: "C" },
      { text: "HUGELY! Weather literally controls my emotions!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mood Stable - Air Conditioner Set 24°C 🧊",
    emoji: "🧊",
    description: "Mood kau SUPER stable! Macam air conditioner yang dah set - consistent temperature. Tak easily affected by small things. Orang suka hang out dengan kau sebab kau predictable dan calming presence!",
    traits: ["Emotionally stable", "Predictable mood", "Not easily triggered", "Calm presence"],
    strengths: ["Reliable emotional state", "Good under pressure", "Calming to others"],
    weaknesses: ["May seem emotionless", "Could connect more with feelings"],
    tips: ["It's okay to feel things!", "Your stability is a strength"],
  },
  B: {
    type: "B",
    title: "Mood Normal - Weather Biasa 🌤️",
    emoji: "🌤️",
    description: "Mood kau normal healthy range! Ada ups and downs tapi reasonable. Kau react to things appropriately - happy bila good things happen, sikit down bila bad things. This is healthy emotional range!",
    traits: ["Healthy emotional range", "Appropriate reactions", "Balanced mood", "Normal sensitivity"],
    strengths: ["Emotionally healthy", "Reasonable reactions", "Good emotional intelligence"],
    weaknesses: ["Can be affected by situations", "Normal human emotions!"],
    tips: ["You're doing great!", "Continue being aware of feelings"],
  },
  C: {
    type: "C",
    title: "Mood Changeable - Weather Malaysia ⛈️",
    emoji: "⛈️",
    description: "Mood kau macam weather Malaysia - boleh sunny kejap, hujan kejap! Quite changeable tapi still manageable. Kau feel things deeply dan react strongly to situations. Emotional person!",
    traits: ["Changeable moods", "Feels deeply", "Reactive to situations", "Emotional nature"],
    strengths: ["In touch with emotions", "Empathetic", "Passionate about things"],
    weaknesses: ["Can be unpredictable", "Mood affects productivity"],
    tips: ["Track what triggers mood changes", "Self-care helps regulate"],
  },
  D: {
    type: "D",
    title: "Mood Extreme - Rollercoaster Genting 🎢",
    emoji: "🎢",
    description: "MOOD KAU MACAM ROLLERCOASTER! Up down up down sepanjang hari! Kau feel EVERYTHING intensely. Happy gila bila happy, sedih gila bila sedih. Living life at full emotional capacity!",
    traits: ["Extreme mood swings", "Intense emotions", "Unpredictable", "Full emotional spectrum"],
    strengths: ["Feel things deeply", "Very passionate", "Authentic emotions"],
    weaknesses: ["Exhausting for self and others", "Hard to regulate", "Can be overwhelming"],
    tips: ["Consider talking to someone if it affects daily life", "Journaling helps!", "Find healthy outlets"],
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
