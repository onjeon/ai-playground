// Role Adik-Beradik
// Test viral tentang sibling dynamics

export const questions = [
  {
    id: 1,
    question: "Position kau dalam family?",
    options: [
      { text: "Sulung - leader of the pack!", type: "A" },
      { text: "Tengah - the mediator", type: "B" },
      { text: "Bongsu - baby of family!", type: "C" },
      { text: "Anak tunggal atau only je", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Bila gaduh dengan adik beradik, kau...",
    options: [
      { text: "Settle it, I'm the mature one", type: "A" },
      { text: "Fight back tapi eventually make up", type: "B" },
      { text: "Report ke parents terus!", type: "C" },
      { text: "Silent treatment sampai lupa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sharing barang dengan siblings...",
    options: [
      { text: "My things are everyone's things!", type: "A" },
      { text: "Ask first, then okay", type: "B" },
      { text: "Touch my stuff and DIE!", type: "C" },
      { text: "We have boundaries", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Parents compare dengan siblings, feeling?",
    options: [
      { text: "Use to push myself harder!", type: "A" },
      { text: "Annoying but understand la", type: "B" },
      { text: "Hate it! We're different people!", type: "C" },
      { text: "Immune dah to comparison", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Secret sharing dengan adik beradik?",
    options: [
      { text: "They know everything!", type: "A" },
      { text: "Some things je", type: "B" },
      { text: "No way, they'll spill!", type: "C" },
      { text: "We're not that close", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila seorang adik beradik dalam trouble...",
    options: [
      { text: "Defend them no matter what!", type: "A" },
      { text: "Help kalau they're right", type: "B" },
      { text: "Stay neutral, not my problem", type: "C" },
      { text: "Depends on situation", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Family dinner table dynamics?",
    options: [
      { text: "I lead the conversation!", type: "A" },
      { text: "Join in when topic interesting", type: "B" },
      { text: "Makan cepat, excuse diri", type: "C" },
      { text: "Listen more, talk less", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sibling group chat vibe macam mana?",
    options: [
      { text: "Active! Memes dan gossip semua!", type: "A" },
      { text: "Moderate activity, check regularly", type: "B" },
      { text: "Read but rarely reply", type: "C" },
      { text: "Ada group chat ke?", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Berkongsi memories dengan siblings...",
    options: [
      { text: "Best memories are with them!", type: "A" },
      { text: "Good times dan bad times", type: "B" },
      { text: "Some memories best forgotten", type: "C" },
      { text: "Not that many together", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Future family, siblings still important?",
    options: [
      { text: "Forever! Family reunion every year!", type: "A" },
      { text: "Will stay connected always", type: "B" },
      { text: "Each will have own life, natural", type: "C" },
      { text: "We'll see how it goes", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Protector",
    emoji: "🛡️",
    description: "Kau protective sibling! Always looking out for adik beradik, lead by example, dan family bond is everything. The glue of sibling group!",
    traits: ["Protective", "Leader", "Responsible", "Family-oriented"],
    strengths: ["Strong bonds", "Reliable", "Always there"],
    weaknesses: ["Maybe too controlling?", "Need to let siblings grow"],
    tips: ["Let them make mistakes", "Support don't control!"],
  },
  B: {
    type: "B",
    title: "The Diplomat",
    emoji: "🕊️",
    description: "Kau middle ground sibling! Balance between all, keep peace, dan connect everyone together. The mediator everyone needs!",
    traits: ["Diplomatic", "Balanced", "Peacekeeper", "Connector"],
    strengths: ["Resolve conflicts", "Understand everyone", "Flexible"],
    weaknesses: ["Sometimes lost in middle", "Own voice might be quiet"],
    tips: ["Your needs matter too", "Speak up for yourself!"],
  },
  C: {
    type: "C",
    title: "The Baby",
    emoji: "👶",
    description: "Kau the beloved youngest atau pampered sibling! Maybe spoiled sikit tapi loved by all. Got away with a lot growing up!",
    traits: ["Charming", "Loved", "Carefree", "Playful"],
    strengths: ["Close with family", "Bring joy", "Light-hearted"],
    weaknesses: ["Might be immature", "Dependent sometimes"],
    tips: ["Time to adult too", "Show responsibility!"],
  },
  D: {
    type: "D",
    title: "The Independent",
    emoji: "🌟",
    description: "Kau do your own thing! Maybe only child atau just independent sibling. Family ada tapi kau punya own path. Self-reliant!",
    traits: ["Independent", "Self-reliant", "Mature", "Own path"],
    strengths: ["Strong identity", "Self-sufficient", "Not clingy"],
    weaknesses: ["Might miss family bonding", "Could be closer"],
    tips: ["Reach out sometimes", "Siblings can be friends!"],
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
