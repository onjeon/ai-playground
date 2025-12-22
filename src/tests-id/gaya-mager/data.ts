// Gaya Mager (Malas Gerak) Kamu
// Tes ini mengungkap personality kamu saat dalam mode mager!

export const questions = [
  {
    id: 1,
    question: "Weekend mager biasanya spent...",
    options: [
      { text: "Full day di kasur, serial marathon", type: "A" },
      { text: "Sofa dengan snacks dan entertainment", type: "B" },
      { text: "Mager produktif: scroll, read, light tasks", type: "C" },
      { text: "Eventually get up, can't mager full day", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Outfit mager...",
    options: [
      { text: "Piyama all day, why change?", type: "A" },
      { text: "Comfy clothes, presentable jika perlu", type: "B" },
      { text: "Whatever I slept in", type: "C" },
      { text: "Change eventually, feel weird kalau ga", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Food situation saat mager...",
    options: [
      { text: "Order delivery, no cooking", type: "A" },
      { text: "Snacks dan easy food", type: "B" },
      { text: "Whatever's in the fridge", type: "C" },
      { text: "Cook something, need proper meal", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Entertainment saat mager...",
    options: [
      { text: "Binge watch series", type: "A" },
      { text: "YouTube/TikTok rabbit holes", type: "B" },
      { text: "Gaming session", type: "C" },
      { text: "Read atau music", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Guilt level saat mager seharian...",
    options: [
      { text: "Zero guilt, I deserve this", type: "A" },
      { text: "Little guilt, balance is okay", type: "B" },
      { text: "Some guilt, should be productive", type: "C" },
      { text: "High guilt, can't enjoy fully", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Social interaction saat mager...",
    options: [
      { text: "Phone on silent, leave me alone", type: "A" },
      { text: "Reply chats eventually", type: "B" },
      { text: "Online socializing okay", type: "C" },
      { text: "Still responsive, can't ignore", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Frequency of mager days...",
    options: [
      { text: "Every chance I get", type: "A" },
      { text: "Weekly ritual", type: "B" },
      { text: "Occasional, when exhausted", type: "C" },
      { text: "Rare, hard to fully mager", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Getting up for necessities (bathroom, water)...",
    options: [
      { text: "Delay as long as possible", type: "A" },
      { text: "Quick trip, back to position", type: "B" },
      { text: "Normal, not that lazy", type: "C" },
      { text: "Move around a bit while up", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Invitation to go out saat mager mode...",
    options: [
      { text: "Hard no, committed to mager", type: "A" },
      { text: "Depends on what and who", type: "B" },
      { text: "Maybe, if convincing enough", type: "C" },
      { text: "Might go, can't stay in too long", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Shower schedule on mager day...",
    options: [
      { text: "Skip or very late", type: "A" },
      { text: "Eventually, after a while", type: "B" },
      { text: "Normal time, habit", type: "C" },
      { text: "Need shower to feel human", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Productivity on mager day...",
    options: [
      { text: "Zero, that's the point", type: "A" },
      { text: "Minimal, light tasks only", type: "B" },
      { text: "Some, guilt kicks in", type: "C" },
      { text: "Can't be fully unproductive", type: "D" },
    ],
  },
  {
    id: 12,
    question: "End of mager day feeling...",
    options: [
      { text: "Recharged and satisfied", type: "A" },
      { text: "Relaxed, ready for week", type: "B" },
      { text: "Mixed, wasted time?", type: "C" },
      { text: "Wish I did more", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "The Professional Mager",
    emoji: "🦥",
    description: "Mager adalah art form untuk kamu! Full commitment, zero guilt, dan maximum laziness achieved. Bed/sofa is your kingdom!",
    traits: ["Expert rester", "Zero guilt", "Fully committed", "Self-care champion"],
    strengths: ["True relaxation", "Recharge completely", "Know how to rest"],
    weaknesses: ["Might overdo it", "Hard to get back to routine"],
    tips: ["Balance is key eventually", "Some movement is healthy", "But rest is also productive!"],
  },
  B: {
    type: "B",
    title: "The Balanced Mager",
    emoji: "😴",
    description: "Kamu tau cara mager dengan balance! Enjoy rest tanpa going overboard. Recharge without the guilt. Healthy lazy!",
    traits: ["Balanced", "Guilt-free", "Moderate", "Self-aware"],
    strengths: ["Sustainable rest pattern", "Know your limits", "Productive AND restful"],
    weaknesses: ["Could push boundaries sometimes"],
    tips: ["Perfect balance!", "You're doing rest right"],
  },
  C: {
    type: "C",
    title: "The Restless Mager",
    emoji: "📱",
    description: "Mager with productivity guilt! Can't fully switch off, always doing something even minimal. Your mager is still kinda active!",
    traits: ["Semi-productive", "Guilty rester", "Active mind", "Can't switch off"],
    strengths: ["Still get things done", "Never truly wasting time"],
    weaknesses: ["Don't fully recharge", "Guilt reduces rest quality"],
    tips: ["True rest is valuable", "Give yourself permission", "Doing nothing is okay!"],
  },
  D: {
    type: "D",
    title: "The Reluctant Mager",
    emoji: "🏃",
    description: "Mager is hard for you! Can't sit still too long, guilt kicks in quickly. Active soul even on rest days!",
    traits: ["Restless", "Productive", "Active", "Can't sit still"],
    strengths: ["Always productive", "Active lifestyle"],
    weaknesses: ["Might burn out", "Don't know how to rest", "Need to learn to chill"],
    tips: ["Rest is productive too!", "Learn the art of doing nothing", "Your body needs real rest"],
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
