// Gaya Handle Stress
// Kau ni zen master atau panic attack champion?

export const questions = [
  {
    id: 1,
    question: "Deadline tomorrow, kerja banyak. Kau?",
    options: [
      { text: "Stay calm, prioritize, get it done!", type: "A" },
      { text: "Stress sikit tapi manage", type: "B" },
      { text: "Panic mode, stress eating!", type: "C" },
      { text: "FULL MELTDOWN! Can't function!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Stress relief activity kau?",
    options: [
      { text: "Exercise, meditation, healthy stuff", type: "A" },
      { text: "Hang out dengan kawan, relax", type: "B" },
      { text: "Eat, shop, entertainment binge!", type: "C" },
      { text: "Sleep/cry/avoid everything!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Something unexpected goes wrong. Kau?",
    options: [
      { text: "Assess, adapt, solve! No panic", type: "A" },
      { text: "Brief worry, then problem solve", type: "B" },
      { text: "Stress out first, solve later", type: "C" },
      { text: "Complete shutdown, can't handle!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Rate stress level kau on normal day (1-10)?",
    options: [
      { text: "1-3, pretty chill", type: "A" },
      { text: "4-5, normal manageable", type: "B" },
      { text: "6-7, quite stressed regularly", type: "C" },
      { text: "8-10, constantly stressed!", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bila stress, physical symptoms kau?",
    options: [
      { text: "Minimal, body stays fine", type: "A" },
      { text: "Minor - headache, tired sikit", type: "B" },
      { text: "Noticeable - can't eat/sleep properly", type: "C" },
      { text: "Major - sick, shutdown completely!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Multiple problems at once. Kau handle macam mana?",
    options: [
      { text: "List priorities, tackle one by one!", type: "A" },
      { text: "Handle dengan sikit stress", type: "B" },
      { text: "Overwhelmed, hard to focus!", type: "C" },
      { text: "Completely overwhelmed, give up!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Kawan stressed out. Kau?",
    options: [
      { text: "Help them calm down, give advice", type: "A" },
      { text: "Support them, listen", type: "B" },
      { text: "Feel stressed too from their stress!", type: "C" },
      { text: "Their stress makes me MORE stressed!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Exam/presentation tomorrow. Night before kau?",
    options: [
      { text: "Prepared, good sleep!", type: "A" },
      { text: "Quick review, then rest", type: "B" },
      { text: "Cramming all night, anxious!", type: "C" },
      { text: "Too stressed to study OR sleep!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "How long stress affect kau after situation resolved?",
    options: [
      { text: "Immediately fine once resolved!", type: "A" },
      { text: "Few hours then okay", type: "B" },
      { text: "Days, still thinking about it", type: "C" },
      { text: "Weeks/months, trauma stays!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "General stress management skills kau?",
    options: [
      { text: "Excellent! Got healthy coping mechanisms", type: "A" },
      { text: "Good, manage okay", type: "B" },
      { text: "Poor, stress controls me", type: "C" },
      { text: "Non-existent, always overwhelmed!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Zen Master - Stress? What Stress? 🧘",
    emoji: "🧘",
    description: "KAU NI ZEN MASTER! Stress tak affect kau! Cool as cucumber dalam any situation. Problems datang, kau solve tanpa panic. Orang wonder macam mana kau boleh so calm. Teach us sensei!",
    traits: ["Extremely calm", "Great coping skills", "Problem solver", "Unshakeable"],
    strengths: ["Handle anything", "Calming presence", "Clear thinking under pressure"],
    weaknesses: ["May seem emotionless", "Others envy you (that's not really a weakness!)"],
    tips: ["Share your secrets with others!", "Your calm is a superpower"],
  },
  B: {
    type: "B",
    title: "Normal Human - Stress But Manage 💪",
    emoji: "💪",
    description: "Kau ni NORMAL stress level! Feel stress tapi can manage. Healthy coping mechanisms in place. Gets overwhelmed sometimes tapi bounces back. This is healthy human response!",
    traits: ["Normal stress response", "Manages okay", "Healthy coping", "Resilient"],
    strengths: ["Balanced response", "Can handle most situations", "Bounces back"],
    weaknesses: ["Still affected by stress", "May need breaks"],
    tips: ["Continue good habits!", "Self-care is important"],
  },
  C: {
    type: "C",
    title: "Stress Sponge - Absorbs Everything 😰",
    emoji: "😰",
    description: "KAU NI STRESS SPONGE! Stress dari everywhere absorbed. Small things pun can overwhelm. Coping mechanisms need work. Stress eating, stress shopping, stress everything!",
    traits: ["Easily stressed", "Absorbs others' stress", "Poor coping", "Overwhelmed often"],
    strengths: ["Empathetic", "Aware of stress", "Sensitive to surroundings"],
    weaknesses: ["Easily overwhelmed", "Unhealthy coping", "Affects health"],
    tips: ["Learn healthy coping!", "Exercise helps!", "Consider talking to someone"],
  },
  D: {
    type: "D",
    title: "Panic Attack Pro - Everything is Crisis 🆘",
    emoji: "🆘",
    description: "STRESS CONTROLS YOUR LIFE! Everything feels like crisis! Small problems = major meltdown. Coping mechanisms are shutdown and avoidance. Daily functioning affected. This is serious!",
    traits: ["Extreme stress response", "Panic attacks", "Cannot cope", "Shutdown mode"],
    strengths: ["Sensitive", "Aware something needs to change", "Honest about struggles"],
    weaknesses: ["Cannot function under stress", "Health severely affected", "Life impacted"],
    tips: ["PLEASE seek professional help!", "You don't have to suffer alone!", "Mental health matters!"],
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
