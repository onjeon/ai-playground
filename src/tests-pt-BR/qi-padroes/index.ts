// Teste de QI: Reconhecimento de Padrões
// Descubra sua capacidade de identificar padrões!

export const questions = [
  {
    id: 1,
    question: "Qual número completa a sequência: 2, 6, 18, 54, __?",
    options: [
      { text: "108", score: 0 },
      { text: "162", score: 1 },
      { text: "180", score: 0 },
      { text: "216", score: 0 },
    ],
  },
  {
    id: 2,
    question: "Qual letra completa a sequência: A, C, F, J, __?",
    options: [
      { text: "M", score: 0 },
      { text: "N", score: 0 },
      { text: "O", score: 1 },
      { text: "P", score: 0 },
    ],
  },
  {
    id: 3,
    question: "Complete: 1, 4, 9, 16, 25, __?",
    options: [
      { text: "30", score: 0 },
      { text: "32", score: 0 },
      { text: "36", score: 1 },
      { text: "49", score: 0 },
    ],
  },
  {
    id: 4,
    question: "Qual é o próximo na série: ▲, ▲▲, ▲▲▲, ▲▲▲▲▲, __?",
    options: [
      { text: "▲▲▲▲▲▲", score: 0 },
      { text: "▲▲▲▲▲▲▲", score: 0 },
      { text: "▲▲▲▲▲▲▲▲", score: 1 },
      { text: "▲▲▲▲▲▲▲▲▲", score: 0 },
    ],
  },
  {
    id: 5,
    question: "Complete a sequência: 3, 5, 9, 15, 23, __?",
    options: [
      { text: "31", score: 0 },
      { text: "33", score: 1 },
      { text: "35", score: 0 },
      { text: "37", score: 0 },
    ],
  },
  {
    id: 6,
    question: "Qual número não pertence à série: 2, 3, 5, 7, 9, 11?",
    options: [
      { text: "3", score: 0 },
      { text: "7", score: 0 },
      { text: "9", score: 1 },
      { text: "11", score: 0 },
    ],
  },
  {
    id: 7,
    question: "Complete: AB, CD, EF, GH, __?",
    options: [
      { text: "HI", score: 0 },
      { text: "IJ", score: 1 },
      { text: "JK", score: 0 },
      { text: "KL", score: 0 },
    ],
  },
  {
    id: 8,
    question: "Qual é o padrão? 1, 1, 2, 3, 5, 8, __?",
    options: [
      { text: "11", score: 0 },
      { text: "12", score: 0 },
      { text: "13", score: 1 },
      { text: "14", score: 0 },
    ],
  },
  {
    id: 9,
    question: "Complete: 100, 50, 25, 12.5, __?",
    options: [
      { text: "5", score: 0 },
      { text: "6", score: 0 },
      { text: "6.25", score: 1 },
      { text: "7.5", score: 0 },
    ],
  },
  {
    id: 10,
    question: "Qual é o próximo: AZ, BY, CX, DW, __?",
    options: [
      { text: "EU", score: 0 },
      { text: "EV", score: 1 },
      { text: "EW", score: 0 },
      { text: "FV", score: 0 },
    ],
  },
  {
    id: 11,
    question: "Complete a série: 2, 8, 18, 32, __?",
    options: [
      { text: "48", score: 0 },
      { text: "50", score: 1 },
      { text: "52", score: 0 },
      { text: "54", score: 0 },
    ],
  },
  {
    id: 12,
    question: "Qual número completa: 64, 32, 16, 8, 4, __?",
    options: [
      { text: "1", score: 0 },
      { text: "2", score: 1 },
      { text: "3", score: 0 },
      { text: "0", score: 0 },
    ],
  },
];

export const results = {
  genius: {
    type: "genius",
    title: "Mestre dos Padrões",
    emoji: "🔮",
    description: "Você tem uma capacidade excepcional de identificar padrões! Sua mente analítica enxerga conexões que outros não percebem.",
    minScore: 10,
    traits: ["Observador", "Analítico", "Intuitivo", "Sistemático"],
    strengths: ["Identificação rápida de padrões", "Previsão de sequências", "Análise de dados", "Pensamento abstrato"],
    weaknesses: [],
    tips: ["Explore análise de dados", "Estude estatística e probabilidade", "Aplique sua habilidade em investimentos ou ciência"],
  },
  high: {
    type: "high",
    title: "Reconhecimento Avançado",
    emoji: "🎯",
    description: "Você tem excelente capacidade de reconhecimento de padrões! Consegue identificar sequências e relações com facilidade.",
    minScore: 7,
    traits: ["Atento", "Perspicaz", "Metódico", "Detalhista"],
    strengths: ["Bom olho para detalhes", "Análise de sequências", "Identificação de tendências"],
    weaknesses: [],
    tips: ["Pratique com séries mais complexas", "Explore puzzles matemáticos", "Treine com jogos de padrões"],
  },
  average: {
    type: "average",
    title: "Padrões na Média",
    emoji: "🔍",
    description: "Você tem boa capacidade básica de reconhecimento de padrões! Com prática, pode aprimorar essa habilidade.",
    minScore: 4,
    traits: ["Curioso", "Persistente", "Atento", "Prático"],
    strengths: ["Base sólida", "Capacidade de aprendizado", "Observação"],
    weaknesses: [],
    tips: ["Jogue Sudoku regularmente", "Pratique quebra-cabeças", "Observe padrões no dia a dia"],
  },
  developing: {
    type: "developing",
    title: "Padrões em Desenvolvimento",
    emoji: "🌱",
    description: "Sua capacidade de reconhecimento de padrões está se desenvolvendo! Pratique regularmente para melhorar.",
    minScore: 0,
    traits: ["Criativo", "Aberto", "Intuitivo", "Em crescimento"],
    strengths: ["Potencial de melhoria", "Criatividade", "Mente aberta"],
    weaknesses: [],
    tips: ["Comece com padrões simples", "Use jogos educativos", "Pratique um pouco cada dia"],
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
