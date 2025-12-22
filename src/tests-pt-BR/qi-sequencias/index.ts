// Teste de QI: Sequências
// Descubra sua capacidade de identificar sequências!

export const questions = [
  {
    id: 1,
    question: "Qual é o próximo número: 1, 3, 6, 10, 15, __?",
    options: [
      { text: "18", score: 0 },
      { text: "20", score: 0 },
      { text: "21", score: 1 },
      { text: "25", score: 0 },
    ],
  },
  {
    id: 2,
    question: "Complete a sequência: 2, 4, 8, 16, 32, __?",
    options: [
      { text: "48", score: 0 },
      { text: "64", score: 1 },
      { text: "62", score: 0 },
      { text: "56", score: 0 },
    ],
  },
  {
    id: 3,
    question: "Qual número falta: 3, 6, 11, 18, __, 38?",
    options: [
      { text: "25", score: 0 },
      { text: "27", score: 1 },
      { text: "29", score: 0 },
      { text: "31", score: 0 },
    ],
  },
  {
    id: 4,
    question: "Próximo na série: 1, 4, 27, 256, __?",
    options: [
      { text: "625", score: 0 },
      { text: "1024", score: 0 },
      { text: "3125", score: 1 },
      { text: "4096", score: 0 },
    ],
  },
  {
    id: 5,
    question: "Complete: 5, 10, 20, 35, 55, __?",
    options: [
      { text: "70", score: 0 },
      { text: "75", score: 0 },
      { text: "80", score: 1 },
      { text: "85", score: 0 },
    ],
  },
  {
    id: 6,
    question: "Qual é o próximo: 2, 3, 5, 7, 11, 13, __?",
    options: [
      { text: "15", score: 0 },
      { text: "17", score: 1 },
      { text: "19", score: 0 },
      { text: "21", score: 0 },
    ],
  },
  {
    id: 7,
    question: "Complete a série: 1, 1, 2, 6, 24, __?",
    options: [
      { text: "48", score: 0 },
      { text: "72", score: 0 },
      { text: "120", score: 1 },
      { text: "144", score: 0 },
    ],
  },
  {
    id: 8,
    question: "Qual é o próximo número: 0, 1, 1, 2, 3, 5, 8, __?",
    options: [
      { text: "11", score: 0 },
      { text: "12", score: 0 },
      { text: "13", score: 1 },
      { text: "14", score: 0 },
    ],
  },
  {
    id: 9,
    question: "Complete: 7, 14, 28, 56, __?",
    options: [
      { text: "84", score: 0 },
      { text: "98", score: 0 },
      { text: "112", score: 1 },
      { text: "126", score: 0 },
    ],
  },
  {
    id: 10,
    question: "Qual número falta: 99, 92, 86, 81, __, 74?",
    options: [
      { text: "75", score: 0 },
      { text: "76", score: 0 },
      { text: "77", score: 1 },
      { text: "78", score: 0 },
    ],
  },
  {
    id: 11,
    question: "Próximo na série: 1, 8, 27, 64, 125, __?",
    options: [
      { text: "196", score: 0 },
      { text: "216", score: 1 },
      { text: "225", score: 0 },
      { text: "256", score: 0 },
    ],
  },
  {
    id: 12,
    question: "Complete: 2, 6, 12, 20, 30, __?",
    options: [
      { text: "40", score: 0 },
      { text: "42", score: 1 },
      { text: "44", score: 0 },
      { text: "46", score: 0 },
    ],
  },
];

export const results = {
  genius: {
    type: "genius",
    title: "Mestre das Sequências",
    emoji: "🔢",
    description: "Sua capacidade de identificar sequências é excepcional! Você reconhece padrões numéricos complexos com facilidade impressionante.",
    minScore: 10,
    traits: ["Analítico", "Matemático", "Padrão", "Sistemático"],
    strengths: ["Identificação de padrões", "Previsão de sequências", "Análise matemática", "Pensamento sistemático"],
    weaknesses: [],
    tips: ["Explore sequências matemáticas avançadas", "Estude teoria dos números", "Participe de competições matemáticas"],
  },
  high: {
    type: "high",
    title: "Sequenciador Avançado",
    emoji: "📊",
    description: "Você tem excelente capacidade para sequências! Identifica padrões numéricos de forma rápida e precisa.",
    minScore: 7,
    traits: ["Lógico", "Preciso", "Atento", "Metódico"],
    strengths: ["Bom reconhecimento de padrões", "Análise numérica", "Pensamento sequencial"],
    weaknesses: [],
    tips: ["Pratique com sequências mais complexas", "Explore progressões aritméticas e geométricas", "Resolva problemas de olimpíadas"],
  },
  average: {
    type: "average",
    title: "Sequências na Média",
    emoji: "🎯",
    description: "Sua capacidade com sequências está na média! Com prática regular, você pode melhorar muito.",
    minScore: 4,
    traits: ["Prático", "Persistente", "Aprendiz", "Focado"],
    strengths: ["Base sólida", "Capacidade de aprender", "Persistência"],
    weaknesses: [],
    tips: ["Pratique sequências básicas diariamente", "Estude progressões simples", "Use aplicativos de matemática"],
  },
  developing: {
    type: "developing",
    title: "Sequências em Desenvolvimento",
    emoji: "🌱",
    description: "Sua habilidade com sequências está em desenvolvimento! Prática constante pode melhorar muito sua capacidade.",
    minScore: 0,
    traits: ["Em crescimento", "Determinado", "Curioso", "Prático"],
    strengths: ["Potencial de melhoria", "Determinação", "Mente aberta"],
    weaknesses: [],
    tips: ["Comece com sequências simples", "Identifique a diferença entre números", "Pratique regularmente"],
  },
};

export function calculateResult(answers: number[]) {
  let totalScore = 0;
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  if (totalScore >= 10) return results.genius;
  if (totalScore >= 7) return results.high;
  if (totalScore >= 4) return results.average;
  return results.developing;
}
