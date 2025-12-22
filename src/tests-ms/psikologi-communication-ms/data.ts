// Gaya Komunikasi Kau
// Macam mana kau communicate dengan orang?

export const questions = [
  {
    id: 1,
    question: "Bila ada sesuatu yang kau tak puas hati, kau...",
    options: [
      { text: "Cakap terus, straight to the point", type: "A" },
      { text: "Discuss dengan cara yang diplomatic", type: "B" },
      { text: "Hint-hint, hope dia catch on", type: "C" },
      { text: "Simpan je, tak nak conflict", type: "D" },
    ],
  },
  {
    id: 2,
    question: "In group discussions, kau biasanya...",
    options: [
      { text: "Voice out opinions dengan confident", type: "A" },
      { text: "Contribute thoughtfully bila appropriate", type: "B" },
      { text: "Listen mostly, share bila comfortable", type: "C" },
      { text: "Stay quiet, let others lead", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila disagree dengan someone, kau...",
    options: [
      { text: "Say it directly - 'I disagree because...'", type: "A" },
      { text: "Express different view diplomatically", type: "B" },
      { text: "Softly mention your perspective", type: "C" },
      { text: "Nod along, keep disagreement inside", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Gaya texting kau macam mana?",
    options: [
      { text: "Short, to the point", type: "A" },
      { text: "Clear but dengan context", type: "B" },
      { text: "Lots of emojis, softening language", type: "C" },
      { text: "Overthink every message", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila nak something dari orang, kau...",
    options: [
      { text: "Ask directly apa yang kau nak", type: "A" },
      { text: "Explain situation then ask nicely", type: "B" },
      { text: "Beat around the bush, hope they offer", type: "C" },
      { text: "Struggle nak ask, usually dont", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila orang salah faham kau, kau...",
    options: [
      { text: "Correct them immediately", type: "A" },
      { text: "Clarify dengan patience", type: "B" },
      { text: "Feel hurt tapi tak sure nak address", type: "C" },
      { text: "Let it go, tak nak confrontation", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Cara kau give feedback?",
    options: [
      { text: "Direct dan honest, no sugar coating", type: "A" },
      { text: "Constructive dengan kindness", type: "B" },
      { text: "Very gentle, maybe too soft", type: "C" },
      { text: "Avoid giving negative feedback", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Bila ada awkward silence, kau...",
    options: [
      { text: "Fill it dengan whatever topic", type: "A" },
      { text: "Make comfortable small talk", type: "B" },
      { text: "Feel anxious tapi try to talk", type: "C" },
      { text: "Let it be awkward, tak tahu nak cakap apa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Orang describe communication kau as...",
    options: [
      { text: "Blunt dan straightforward", type: "A" },
      { text: "Clear dan effective", type: "B" },
      { text: "Nice tapi sometimes unclear", type: "C" },
      { text: "Quiet atau hard to read", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Kau more comfortable dengan...",
    options: [
      { text: "Speaking up in any situation", type: "A" },
      { text: "Communicating when necessary", type: "B" },
      { text: "One-on-one conversations", type: "C" },
      { text: "Written communication over verbal", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Direct Communicator",
    emoji: "🎯",
    description: "Kau super direct! No beating around the bush, cakap terus apa dalam hati. People always know where they stand dengan kau. Efficient tapi sometimes intense!",
    traits: ["Direct", "Honest", "Confident", "Assertive"],
    strengths: ["No miscommunication", "Get things done", "Respected for honesty"],
    weaknesses: ["May come across harsh", "Can hurt feelings", "Others may feel attacked"],
    tips: ["Add some softening language", "Read the room", "Direct doesnt mean harsh"],
  },
  B: {
    type: "B",
    title: "The Diplomatic Communicator",
    emoji: "🕊️",
    description: "Kau the balanced communicator! Clear tapi dengan tact. People feel heard dan respected bila talk dengan kau. Great at navigating conversations!",
    traits: ["Diplomatic", "Thoughtful", "Clear", "Respectful"],
    strengths: ["Effective communication", "Maintain relationships", "Good conflict resolver"],
    weaknesses: ["Sometimes too careful", "May take longer to get point across"],
    tips: ["Perfect balance, keep it up", "Be direct bila situation calls for it"],
  },
  C: {
    type: "C",
    title: "The Gentle Communicator",
    emoji: "🌸",
    description: "Kau communicate dengan gentle approach. Very considerate of others feelings, maybe too much sometimes. People love your kindness tapi may not always get your point!",
    traits: ["Gentle", "Considerate", "Soft", "Careful"],
    strengths: ["People feel safe dengan you", "Non-threatening", "Kind"],
    weaknesses: ["Message may not get across", "People may overlook you", "Needs not met"],
    tips: ["Practice being clearer", "Your voice matters", "Kindness + clarity is possible"],
  },
  D: {
    type: "D",
    title: "The Reserved Communicator",
    emoji: "🤫",
    description: "Kau more reserved dalam communication. Prefer listen than talk, struggle nak voice out. Theres wisdom in listening tapi your voice deserves to be heard too!",
    traits: ["Quiet", "Reserved", "Listener", "Internal processor"],
    strengths: ["Great listener", "Thoughtful when speak", "Non-intrusive"],
    weaknesses: ["Needs unheard", "May seem disengaged", "Miss out on connections"],
    tips: ["Practice speaking up in safe spaces", "Your opinions matter", "Start small"],
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
