// Ujian Kecerdasan Emosi
// Sejauh mana EQ anda?

export const questions = [
  { id: 1, question: "Soalan 1 tentang Ujian Kecerdasan Emosi?", options: [
    { text: "Pilihan A - sangat setuju", type: "A" },
    { text: "Pilihan B - setuju", type: "B" },
    { text: "Pilihan C - neutral", type: "C" },
    { text: "Pilihan D - tidak setuju", type: "D" },
  ]},
  { id: 2, question: "Soalan 2?", options: [
    { text: "Pilihan A", type: "A" }, { text: "Pilihan B", type: "B" },
    { text: "Pilihan C", type: "C" }, { text: "Pilihan D", type: "D" },
  ]},
  { id: 3, question: "Soalan 3?", options: [
    { text: "Pilihan A", type: "A" }, { text: "Pilihan B", type: "B" },
    { text: "Pilihan C", type: "C" }, { text: "Pilihan D", type: "D" },
  ]},
  { id: 4, question: "Soalan 4?", options: [
    { text: "Pilihan A", type: "A" }, { text: "Pilihan B", type: "B" },
    { text: "Pilihan C", type: "C" }, { text: "Pilihan D", type: "D" },
  ]},
  { id: 5, question: "Soalan 5?", options: [
    { text: "Pilihan A", type: "A" }, { text: "Pilihan B", type: "B" },
    { text: "Pilihan C", type: "C" }, { text: "Pilihan D", type: "D" },
  ]},
  { id: 6, question: "Soalan 6?", options: [
    { text: "Pilihan A", type: "A" }, { text: "Pilihan B", type: "B" },
    { text: "Pilihan C", type: "C" }, { text: "Pilihan D", type: "D" },
  ]},
  { id: 7, question: "Soalan 7?", options: [
    { text: "Pilihan A", type: "A" }, { text: "Pilihan B", type: "B" },
    { text: "Pilihan C", type: "C" }, { text: "Pilihan D", type: "D" },
  ]},
  { id: 8, question: "Soalan 8?", options: [
    { text: "Pilihan A", type: "A" }, { text: "Pilihan B", type: "B" },
    { text: "Pilihan C", type: "C" }, { text: "Pilihan D", type: "D" },
  ]},
  { id: 9, question: "Soalan 9?", options: [
    { text: "Pilihan A", type: "A" }, { text: "Pilihan B", type: "B" },
    { text: "Pilihan C", type: "C" }, { text: "Pilihan D", type: "D" },
  ]},
  { id: 10, question: "Soalan 10?", options: [
    { text: "Pilihan A", type: "A" }, { text: "Pilihan B", type: "B" },
    { text: "Pilihan C", type: "C" }, { text: "Pilihan D", type: "D" },
  ]},
];

export const results = {
  A: { type: "A", title: "Jenis A", emoji: "🧠", description: "Anda mempunyai tahap yang tinggi!", traits: ["Trait 1", "Trait 2"], strengths: ["Strength 1"], weaknesses: ["Weakness 1"], tips: ["Tip 1"] },
  B: { type: "B", title: "Jenis B", emoji: "💭", description: "Anda mempunyai tahap yang baik!", traits: ["Trait 1", "Trait 2"], strengths: ["Strength 1"], weaknesses: ["Weakness 1"], tips: ["Tip 1"] },
  C: { type: "C", title: "Jenis C", emoji: "🌱", description: "Anda ada potensi untuk berkembang!", traits: ["Trait 1", "Trait 2"], strengths: ["Strength 1"], weaknesses: ["Weakness 1"], tips: ["Tip 1"] },
  D: { type: "D", title: "Jenis D", emoji: "🔄", description: "Anda boleh improve dengan latihan!", traits: ["Trait 1", "Trait 2"], strengths: ["Strength 1"], weaknesses: ["Weakness 1"], tips: ["Tip 1"] },
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
