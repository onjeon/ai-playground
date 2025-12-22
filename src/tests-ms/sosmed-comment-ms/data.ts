// Jenis Pengomen Kau
// Test viral tentang commenting behavior online

export const questions = [
  {
    id: 1,
    question: "Kau comment kat post orang berapa kerap?",
    options: [
      { text: "Every post kawan-kawan aku support!", type: "A" },
      { text: "Bila genuinely ada benda nak cakap", type: "B" },
      { text: "Jarang, like je cukup", type: "C" },
      { text: "Almost never, lurker lifestyle", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Style comment kau macam mana?",
    options: [
      { text: "Emoji spam! 😍🔥💯💯💯", type: "A" },
      { text: "Genuine compliments dengan details", type: "B" },
      { text: "Short and sweet je", type: "C" },
      { text: "Tag kawan untuk tengok", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Bila influencer post, kau...",
    options: [
      { text: "Comment hoping dapat notice!", type: "A" },
      { text: "Read comments orang lain je", type: "B" },
      { text: "Like dan move on", type: "C" },
      { text: "Tak follow influencer pun", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Pernah terlibat dalam comment war tak?",
    options: [
      { text: "Banyak kali! Keyboard warrior!", type: "A" },
      { text: "Sekali dua bila triggered", type: "B" },
      { text: "Never, peace is priority", type: "C" },
      { text: "Read drama je, tak involve", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Comment yang kau leave biasanya...",
    options: [
      { text: "Positive dan supportive!", type: "A" },
      { text: "Honest opinion", type: "B" },
      { text: "Neutral je", type: "C" },
      { text: "Funny dan sarcastic", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Bila orang reply comment kau, feeling macam mana?",
    options: [
      { text: "Excited! Conversation started!", type: "A" },
      { text: "Nice, engage balik", type: "B" },
      { text: "Okay, depends on reply", type: "C" },
      { text: "Awkward, dunno how to respond", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kau baca semua comments kat post viral tak?",
    options: [
      { text: "Scroll sampai habis! That's the content!", type: "A" },
      { text: "Top comments je", type: "B" },
      { text: "Skim through briefly", type: "C" },
      { text: "Post je, skip comments", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Pernah delete comment sendiri tak?",
    options: [
      { text: "Never! Stand by everything!", type: "A" },
      { text: "Bila typo or regret", type: "B" },
      { text: "Selalu, overthink lepas post", type: "C" },
      { text: "Tak ingat, jarang comment pun", type: "D" },
    ],
  },
  {
    id: 9,
    question: "First to comment penting tak untuk kau?",
    options: [
      { text: "Yes! First comment satisfaction!", type: "A" },
      { text: "Sometimes bila excited", type: "B" },
      { text: "Tak kisah bila comment", type: "C" },
      { text: "Usually late to the party pun", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Comment on food posts, kau...",
    options: [
      { text: "'Nampak sedap! Where is this?!'", type: "A" },
      { text: "'Looks good!' simple je", type: "B" },
      { text: "Save location, tak comment", type: "C" },
      { text: "Scroll past je", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Hype Machine",
    emoji: "🎉",
    description: "Kau the ultimate supporter! Every friend punya post dapat love dari kau. Comment section warrior, spreading positivity everywhere!",
    traits: ["Supportive", "Enthusiastic", "Social", "Hype person"],
    strengths: ["Make people feel good", "Active engagement", "Good friend"],
    weaknesses: ["Maybe too much sometimes", "Comments might seem generic"],
    tips: ["Quality comments are more meaningful", "But keep spreading love!"],
  },
  B: {
    type: "B",
    title: "Thoughtful Commenter",
    emoji: "💭",
    description: "Kau comment bila ada substance! Your comments are meaningful, specific, dan genuine. People appreciate your engagement!",
    traits: ["Thoughtful", "Genuine", "Meaningful", "Quality-focused"],
    strengths: ["Valuable feedback", "Real engagement", "Stand out comments"],
    weaknesses: ["Sometimes overthink before commenting", "Less frequent"],
    tips: ["Keep being authentic", "Your words matter!"],
  },
  C: {
    type: "C",
    title: "Silent Supporter",
    emoji: "👍",
    description: "Kau show support through likes! Words are hard, but kau tetap engage dengan cara kau sendiri. Quiet but present!",
    traits: ["Reserved", "Supportive silently", "Low-key", "Present"],
    strengths: ["Not overwhelming", "Consistent support", "No drama"],
    weaknesses: ["Miss deeper connections", "Friends might want more"],
    tips: ["Try commenting more", "Words mean a lot to people!"],
  },
  D: {
    type: "D",
    title: "Comment Ghost",
    emoji: "👻",
    description: "Kau scroll, kau observe, tapi comment jarang. Maybe introvert online, maybe just prefer watching. The silent majority!",
    traits: ["Observer", "Private", "Scroll-only", "Mysterious"],
    strengths: ["No digital footprint", "Drama-free", "Efficient scrolling"],
    weaknesses: ["Miss interactions", "Friends dunno you care"],
    tips: ["A simple comment can make someone's day", "Try it!"],
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
