// Teste de QI: Matemática
// Descubra seu nível de raciocínio matemático!

export const questions = [
  {
    id: 1,
    question: "Qual é o resultado de 15% de 200?",
    options: [
      { text: "25", score: 0 },
      { text: "30", score: 1 },
      { text: "35", score: 0 },
      { text: "40", score: 0 },
    ],
  },
  {
    id: 2,
    question: "Se 3x + 7 = 22, qual é o valor de x?",
    options: [
      { text: "3", score: 0 },
      { text: "4", score: 0 },
      { text: "5", score: 1 },
      { text: "6", score: 0 },
    ],
  },
  {
    id: 3,
    question: "Qual é a raiz quadrada de 144?",
    options: [
      { text: "11", score: 0 },
      { text: "12", score: 1 },
      { text: "13", score: 0 },
      { text: "14", score: 0 },
    ],
  },
  {
    id: 4,
    question: "Um produto custava R$80 e teve 25% de desconto. Qual é o novo preço?",
    options: [
      { text: "R$55", score: 0 },
      { text: "R$60", score: 1 },
      { text: "R$65", score: 0 },
      { text: "R$70", score: 0 },
    ],
  },
  {
    id: 5,
    question: "Quanto é 2³ + 3²?",
    options: [
      { text: "13", score: 0 },
      { text: "15", score: 0 },
      { text: "17", score: 1 },
      { text: "19", score: 0 },
    ],
  },
  {
    id: 6,
    question: "Se um carro percorre 90km em 1 hora e meia, qual é sua velocidade média em km/h?",
    options: [
      { text: "45 km/h", score: 0 },
      { text: "60 km/h", score: 1 },
      { text: "75 km/h", score: 0 },
      { text: "90 km/h", score: 0 },
    ],
  },
  {
    id: 7,
    question: "Qual é o MMC (mínimo múltiplo comum) entre 4 e 6?",
    options: [
      { text: "8", score: 0 },
      { text: "12", score: 1 },
      { text: "18", score: 0 },
      { text: "24", score: 0 },
    ],
  },
  {
    id: 8,
    question: "Um retângulo tem perímetro de 24cm. Se o comprimento é o dobro da largura, qual é a área?",
    options: [
      { text: "24 cm²", score: 0 },
      { text: "28 cm²", score: 0 },
      { text: "32 cm²", score: 1 },
      { text: "36 cm²", score: 0 },
    ],
  },
  {
    id: 9,
    question: "Quanto é 0,25 × 0,4?",
    options: [
      { text: "0,1", score: 1 },
      { text: "0,01", score: 0 },
      { text: "1,0", score: 0 },
      { text: "0,65", score: 0 },
    ],
  },
  {
    id: 10,
    question: "Se 5 máquinas produzem 5 peças em 5 minutos, quantas peças 100 máquinas produzem em 100 minutos?",
    options: [
      { text: "100 peças", score: 0 },
      { text: "500 peças", score: 0 },
      { text: "1000 peças", score: 0 },
      { text: "2000 peças", score: 1 },
    ],
  },
  {
    id: 11,
    question: "Qual é o valor de x se x/4 + x/2 = 6?",
    options: [
      { text: "6", score: 0 },
      { text: "8", score: 1 },
      { text: "10", score: 0 },
      { text: "12", score: 0 },
    ],
  },
  {
    id: 12,
    question: "Um triângulo tem lados de 3cm, 4cm e 5cm. Qual é sua área?",
    options: [
      { text: "4 cm²", score: 0 },
      { text: "5 cm²", score: 0 },
      { text: "6 cm²", score: 1 },
      { text: "7 cm²", score: 0 },
    ],
  },
];

export const results = {
  genius: {
    type: "genius",
    title: "Gênio Matemático",
    emoji: "🧮",
    description: "Sua habilidade matemática é extraordinária! Você domina conceitos complexos e resolve cálculos com impressionante facilidade.",
    minScore: 10,
    traits: ["Calculista", "Preciso", "Analítico", "Lógico"],
    strengths: ["Cálculos mentais rápidos", "Resolução de equações", "Geometria", "Pensamento abstrato"],
    weaknesses: [],
    tips: ["Explore matemática avançada", "Considere áreas como engenharia ou física", "Participe de olimpíadas matemáticas"],
  },
  high: {
    type: "high",
    title: "Habilidade Matemática Alta",
    emoji: "📐",
    description: "Você tem excelente aptidão para matemática! Seu raciocínio numérico é sólido e você lida bem com problemas quantitativos.",
    minScore: 7,
    traits: ["Numérico", "Metódico", "Preciso", "Focado"],
    strengths: ["Bom com números", "Resolução de problemas", "Cálculos precisos"],
    weaknesses: [],
    tips: ["Pratique problemas mais desafiadores", "Estude álgebra avançada", "Use matemática em situações do dia a dia"],
  },
  average: {
    type: "average",
    title: "Matemática na Média",
    emoji: "🔢",
    description: "Você tem uma base sólida em matemática! Com prática constante, pode desenvolver ainda mais suas habilidades numéricas.",
    minScore: 4,
    traits: ["Prático", "Persistente", "Adaptável", "Esforçado"],
    strengths: ["Conhecimento básico sólido", "Vontade de aprender", "Aplicação prática"],
    weaknesses: [],
    tips: ["Revise conceitos fundamentais", "Pratique cálculos diariamente", "Use aplicativos de matemática"],
  },
  developing: {
    type: "developing",
    title: "Matemática em Desenvolvimento",
    emoji: "🌱",
    description: "Suas habilidades matemáticas estão em desenvolvimento! Com dedicação e prática regular, você pode melhorar muito.",
    minScore: 0,
    traits: ["Criativo", "Intuitivo", "Visual", "Prático"],
    strengths: ["Potencial de crescimento", "Mente aberta", "Perseverança"],
    weaknesses: [],
    tips: ["Comece pelos fundamentos", "Use recursos visuais", "Pratique um pouco todos os dias"],
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
