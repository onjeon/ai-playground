// Gaya Regulasi Emosi Kamu
// Tes ini mengungkap bagaimana cara kamu mengelola dan meregulasi emosi!

export const questions = [
  {
    id: 1,
    question: "Saat merasakan emosi negatif yang kuat...",
    options: [
      { text: "Acknowledge, process, lalu release", type: "A" },
      { text: "Try to calm down dengan berbagai cara", type: "B" },
      { text: "Suppress dan pretend fine", type: "C" },
      { text: "Overwhelmed, tidak tau harus apa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Awareness terhadap emosi yang sedang dirasakan...",
    options: [
      { text: "Sangat aware, bisa name specific emotions", type: "A" },
      { text: "Cukup aware, tau broad feelings", type: "B" },
      { text: "Kadang confuse tentang apa yang dirasa", type: "C" },
      { text: "Tidak terlalu aware atau disconnected", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Reaksi saat marah...",
    options: [
      { text: "Feel it, express appropriately, lalu process", type: "A" },
      { text: "Try to cool down sebelum react", type: "B" },
      { text: "Explode atau suppress completely", type: "C" },
      { text: "Rage atau complete shutdown", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Durasi emosi negatif biasanya...",
    options: [
      { text: "Relatif cepat reda dengan processing", type: "A" },
      { text: "Beberapa jam sampai sehari", type: "B" },
      { text: "Bisa berhari-hari", type: "C" },
      { text: "Sangat lama, kadang berminggu-minggu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Coping mechanisms yang biasa digunakan...",
    options: [
      { text: "Healthy mix: exercise, talk, journal, etc", type: "A" },
      { text: "Beberapa yang work, mostly healthy", type: "B" },
      { text: "Mix healthy dan unhealthy", type: "C" },
      { text: "Mostly unhealthy atau none", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Expressing emotions to others...",
    options: [
      { text: "Comfortable, can be vulnerable", type: "A" },
      { text: "Dengan orang tertentu saja", type: "B" },
      { text: "Susah, prefer keep to myself", type: "C" },
      { text: "Almost never, too vulnerable", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Saat stress level tinggi...",
    options: [
      { text: "Have strategies yang work", type: "A" },
      { text: "Struggle tapi eventually cope", type: "B" },
      { text: "Overwhelmed, coping terbatas", type: "C" },
      { text: "Complete breakdown", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Emotional triggers...",
    options: [
      { text: "Aware dan have strategies to handle", type: "A" },
      { text: "Know some, learning to manage", type: "B" },
      { text: "Often caught off guard", type: "C" },
      { text: "Tidak aware sampai sudah triggered", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Bouncing back from emotional distress...",
    options: [
      { text: "Relatively quick, have resilience", type: "A" },
      { text: "Takes some time but get there", type: "B" },
      { text: "Struggle, takes long", type: "C" },
      { text: "Very difficult, often stuck", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Mindfulness atau present moment awareness...",
    options: [
      { text: "Practice regularly, helps a lot", type: "A" },
      { text: "Sometimes, trying to develop", type: "B" },
      { text: "Rarely, mind often elsewhere", type: "C" },
      { text: "Never, don't know how", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Impact emosi pada decision making...",
    options: [
      { text: "Aware dan can separate when needed", type: "A" },
      { text: "Sometimes influenced, try to be objective", type: "B" },
      { text: "Often make emotional decisions", type: "C" },
      { text: "Completely driven by emotions", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Overall emotional regulation...",
    options: [
      { text: "Strong, healthy relationship with emotions", type: "A" },
      { text: "Developing, getting better", type: "B" },
      { text: "Struggling, need improvement", type: "C" },
      { text: "Very poor, emotions control me", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Emotionally Regulated",
    emoji: "🧘",
    description: "Kamu memiliki emotional regulation yang sangat baik! Kamu aware, can process, dan regulate emotions effectively. Ini adalah skill yang sangat valuable.",
    traits: ["Aware", "Balanced", "Healthy processing", "Resilient"],
    strengths: ["Stable relationships", "Good decision making", "Mental health maintained"],
    weaknesses: ["Bisa terlihat too composed"],
    tips: ["Continue practicing", "Share skills dengan others", "Stay connected to emotions"],
  },
  B: {
    type: "B",
    title: "Developing Regulation",
    emoji: "🌿",
    description: "Emotional regulation kamu dalam proses berkembang! Ada awareness dan effort yang baik, dengan beberapa areas yang masih perlu strengthening.",
    traits: ["Learning", "Aware", "Progressing", "Trying"],
    strengths: ["Self-aware", "Building skills", "Making progress"],
    weaknesses: ["Inconsistent", "Some triggers still challenging"],
    tips: ["Keep practicing", "Learn more techniques", "Be patient with self"],
  },
  C: {
    type: "C",
    title: "Struggling with Regulation",
    emoji: "🌊",
    description: "Emotional regulation adalah area yang perlu banyak work. Emosi sering overwhelming dan coping strategies terbatas. Ini bisa dipelajari dan ditingkatkan.",
    traits: ["Struggling", "Reactive", "Overwhelmed", "Learning needed"],
    strengths: ["Aware ada masalah", "Potential for improvement"],
    weaknesses: ["Emotions often control", "Poor coping", "Relationship impacts"],
    tips: ["Consider therapy", "Learn basic techniques", "Start with awareness"],
  },
  D: {
    type: "D",
    title: "Emotional Regulation Crisis",
    emoji: "🆘",
    description: "Emotional regulation sedang dalam krisis. Emosi terasa out of control dan sangat affecting your life. Professional help sangat disarankan.",
    traits: ["In crisis", "Dysregulated", "Overwhelmed", "Need help"],
    strengths: ["Taking this test shows awareness"],
    weaknesses: ["Severely impacting life", "May have other conditions"],
    tips: ["Seek professional help", "This is treatable", "DBT therapy very effective", "You can learn these skills"],
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
