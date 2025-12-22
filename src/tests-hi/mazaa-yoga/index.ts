// योग प्रकार टेस्ट - आप कौन सा योग हैं?
// Yoga Type Personality Test

export const questions = [
  {
    id: 1,
    question: "सुबह की शुरुआत कैसी?",
    options: [
      { text: "Energetic workout से", type: "A" },
      { text: "Peaceful meditation से", type: "B" },
      { text: "Stretching और flexibility", type: "C" },
      { text: "Breathing exercises से", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Exercise का goal?",
    options: [
      { text: "Strength और power", type: "A" },
      { text: "Inner peace", type: "B" },
      { text: "Flexibility और balance", type: "C" },
      { text: "Mind-body connection", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Stress handle कैसे करते हैं?",
    options: [
      { text: "Physical activity से", type: "A" },
      { text: "Meditation और silence", type: "B" },
      { text: "Gentle movement से", type: "C" },
      { text: "Deep breathing से", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ideal yoga class?",
    options: [
      { text: "Challenging और sweaty", type: "A" },
      { text: "Quiet और meditative", type: "B" },
      { text: "Slow और therapeutic", type: "C" },
      { text: "Focused और precise", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Fitness level?",
    options: [
      { text: "Athlete level", type: "A" },
      { text: "Moderate, spiritual focus", type: "B" },
      { text: "Beginner friendly", type: "C" },
      { text: "Advanced techniques", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Yoga से क्या चाहिए?",
    options: [
      { text: "Physical transformation", type: "A" },
      { text: "Spiritual growth", type: "B" },
      { text: "Pain relief और healing", type: "C" },
      { text: "Breath control और awareness", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Favorite time for yoga?",
    options: [
      { text: "Morning, energizing", type: "A" },
      { text: "Sunrise या sunset, peaceful", type: "B" },
      { text: "Evening, relaxing", type: "C" },
      { text: "Anytime, depends on mood", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Music during yoga?",
    options: [
      { text: "Upbeat और motivating", type: "A" },
      { text: "Silence या soft chants", type: "B" },
      { text: "Relaxing instrumental", type: "C" },
      { text: "Focus sounds", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Yoga philosophy?",
    options: [
      { text: "Physical discipline", type: "A" },
      { text: "Spiritual journey", type: "B" },
      { text: "Healing और restoration", type: "C" },
      { text: "Science of breath", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Challenge preference?",
    options: [
      { text: "Difficult poses", type: "A" },
      { text: "Long meditations", type: "B" },
      { text: "Deep stretches", type: "C" },
      { text: "Breath retention", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Yoga teacher quality?",
    options: [
      { text: "Fit और inspiring", type: "A" },
      { text: "Calm और spiritual", type: "B" },
      { text: "Gentle और supportive", type: "C" },
      { text: "Knowledgeable और precise", type: "D" },
    ],
  },
  {
    id: 12,
    question: "योग का मतलब?",
    options: [
      { text: "शारीरिक शक्ति", type: "A" },
      { text: "आत्मिक जागरण", type: "B" },
      { text: "शांति और आराम", type: "C" },
      { text: "प्राण और जीवन", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "पावर योग",
    emoji: "💪",
    description: "आप Power Yoga हैं - Intense, challenging और transformative! Gym और yoga का perfect combo। Sweat करके results चाहते हैं। Modern yogi जो physical transformation में believe करे!",
    traits: ["Intense", "Physical", "Challenging", "Transformative"],
    strengths: ["Strength", "Discipline", "Physical fitness", "Determination"],
    weaknesses: ["Too intense कभी-कभी", "Miss spiritual aspect"],
    tips: ["Spiritual side भी explore करें", "Rest भी important है"],
  },
  B: {
    type: "B",
    title: "ध्यान योग",
    emoji: "🧘",
    description: "आप Dhyan Yoga हैं - Meditative, peaceful और spiritual! Inner journey पर focused। Silence में power देखते हैं। Traditional yogi जो enlightenment seek करे!",
    traits: ["Peaceful", "Spiritual", "Meditative", "Deep"],
    strengths: ["Inner peace", "Spirituality", "Mindfulness", "Patience"],
    weaknesses: ["Less physical activity", "Too detached कभी-कभी"],
    tips: ["Physical aspects भी include करें", "Balance रखें"],
  },
  C: {
    type: "C",
    title: "हठ योग",
    emoji: "🌿",
    description: "आप Hatha Yoga हैं - Gentle, therapeutic और healing! Traditional poses, slow movements। Body को heal करना और balance लाना है goal। Classic yogi!",
    traits: ["Gentle", "Therapeutic", "Healing", "Balanced"],
    strengths: ["Flexibility", "Healing", "Balance", "Accessibility"],
    weaknesses: ["Too slow कभी-कभी", "Less challenging"],
    tips: ["Challenge भी add करें", "Progress track करें"],
  },
  D: {
    type: "D",
    title: "प्राणायाम",
    emoji: "🌬️",
    description: "आप Pranayama Yogi हैं - Breath-focused, precise और scientific! Breathing is everything। Prana को control करके life को control। Advanced और knowledgeable practitioner!",
    traits: ["Precise", "Scientific", "Breath-focused", "Advanced"],
    strengths: ["Breath control", "Focus", "Awareness", "Knowledge"],
    weaknesses: ["Too technical कभी-कभी", "Less movement"],
    tips: ["Asanas भी practice करें", "Holistic approach लें"],
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
