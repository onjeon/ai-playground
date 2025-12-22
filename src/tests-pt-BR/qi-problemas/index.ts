// Teste de QI: Resolução de Problemas
// Descubra sua capacidade de resolver problemas!

export const questions = [
  {
    id: 1,
    question: "João é mais velho que Maria. Maria é mais velha que Pedro. Pedro é mais velho que Ana. Quem é o mais novo?",
    options: [
      { text: "João", score: 0 },
      { text: "Maria", score: 0 },
      { text: "Pedro", score: 0 },
      { text: "Ana", score: 1 },
    ],
  },
  {
    id: 2,
    question: "Se uma camisa custa R$60 com 20% de desconto, qual era o preço original?",
    options: [
      { text: "R$70", score: 0 },
      { text: "R$72", score: 0 },
      { text: "R$75", score: 1 },
      { text: "R$80", score: 0 },
    ],
  },
  {
    id: 3,
    question: "Em uma sala há 6 cadeiras. Chegam 8 pessoas. Quantas pessoas ficam em pé?",
    options: [
      { text: "2", score: 1 },
      { text: "6", score: 0 },
      { text: "8", score: 0 },
      { text: "14", score: 0 },
    ],
  },
  {
    id: 4,
    question: "Um relógio atrasa 5 minutos por hora. Se for acertado às 12:00, que horas ele mostrará quando forem 18:00?",
    options: [
      { text: "17:00", score: 0 },
      { text: "17:30", score: 1 },
      { text: "18:00", score: 0 },
      { text: "18:30", score: 0 },
    ],
  },
  {
    id: 5,
    question: "Três amigos dividem igualmente uma conta de R$90. Quanto cada um paga?",
    options: [
      { text: "R$25", score: 0 },
      { text: "R$30", score: 1 },
      { text: "R$35", score: 0 },
      { text: "R$45", score: 0 },
    ],
  },
  {
    id: 6,
    question: "Se Maria tem o dobro da idade de João, e juntos eles têm 36 anos, quantos anos tem Maria?",
    options: [
      { text: "18 anos", score: 0 },
      { text: "20 anos", score: 0 },
      { text: "24 anos", score: 1 },
      { text: "12 anos", score: 0 },
    ],
  },
  {
    id: 7,
    question: "Um trem sai de São Paulo às 9:00 e chega no Rio às 14:30. Qual é a duração da viagem?",
    options: [
      { text: "4 horas e 30 minutos", score: 0 },
      { text: "5 horas", score: 0 },
      { text: "5 horas e 30 minutos", score: 1 },
      { text: "6 horas", score: 0 },
    ],
  },
  {
    id: 8,
    question: "Uma piscina enche em 6 horas com uma torneira. Com duas torneiras iguais, em quanto tempo enche?",
    options: [
      { text: "2 horas", score: 0 },
      { text: "3 horas", score: 1 },
      { text: "4 horas", score: 0 },
      { text: "12 horas", score: 0 },
    ],
  },
  {
    id: 9,
    question: "Se 3 pintores pintam uma casa em 12 dias, quantos dias levam 6 pintores para pintar a mesma casa?",
    options: [
      { text: "4 dias", score: 0 },
      { text: "6 dias", score: 1 },
      { text: "8 dias", score: 0 },
      { text: "24 dias", score: 0 },
    ],
  },
  {
    id: 10,
    question: "Uma loja vende 3 produtos por R$10 ou 7 por R$20. Qual é a melhor opção para comprar 21 produtos?",
    options: [
      { text: "7 compras de 3 (R$70)", score: 0 },
      { text: "3 compras de 7 (R$60)", score: 1 },
      { text: "Ambas custam igual", score: 0 },
      { text: "Comprar 2 de 7 e 2 de 3 (R$60)", score: 0 },
    ],
  },
  {
    id: 11,
    question: "Um caracol sobe 3m durante o dia e desce 2m à noite. Quantos dias leva para sair de um poço de 10m?",
    options: [
      { text: "7 dias", score: 0 },
      { text: "8 dias", score: 1 },
      { text: "9 dias", score: 0 },
      { text: "10 dias", score: 0 },
    ],
  },
  {
    id: 12,
    question: "Se um livro tem 300 páginas e você lê 25 páginas por dia, quantos dias precisa para terminar?",
    options: [
      { text: "10 dias", score: 0 },
      { text: "11 dias", score: 0 },
      { text: "12 dias", score: 1 },
      { text: "13 dias", score: 0 },
    ],
  },
];

export const results = {
  genius: {
    type: "genius",
    title: "Solucionador Genial",
    emoji: "🏆",
    description: "Sua capacidade de resolver problemas é excepcional! Você analisa situações complexas e encontra soluções eficientes com maestria.",
    minScore: 10,
    traits: ["Analítico", "Estratégico", "Criativo", "Eficiente"],
    strengths: ["Resolução de problemas complexos", "Pensamento estratégico", "Análise de situações", "Soluções criativas"],
    weaknesses: [],
    tips: ["Explore problemas de olimpíadas", "Considere carreiras em consultoria ou engenharia", "Desafie-se com puzzles avançados"],
  },
  high: {
    type: "high",
    title: "Solucionador Avançado",
    emoji: "💡",
    description: "Você tem excelente capacidade para resolver problemas! Analisa situações de forma lógica e encontra boas soluções.",
    minScore: 7,
    traits: ["Lógico", "Prático", "Metódico", "Focado"],
    strengths: ["Boa análise de problemas", "Soluções práticas", "Pensamento lógico"],
    weaknesses: [],
    tips: ["Pratique problemas mais desafiadores", "Estude técnicas de resolução", "Aplique lógica em situações do dia a dia"],
  },
  average: {
    type: "average",
    title: "Resolução na Média",
    emoji: "🎯",
    description: "Sua capacidade de resolução de problemas está na média! Com prática e técnicas, você pode melhorar muito.",
    minScore: 4,
    traits: ["Prático", "Persistente", "Adaptável", "Esforçado"],
    strengths: ["Base sólida", "Persistência", "Capacidade de aprender"],
    weaknesses: [],
    tips: ["Divida problemas em partes menores", "Pratique regularmente", "Use o método de tentativa e erro"],
  },
  developing: {
    type: "developing",
    title: "Resolução em Desenvolvimento",
    emoji: "🌱",
    description: "Sua capacidade de resolver problemas está em desenvolvimento! Com prática constante, você pode melhorar significativamente.",
    minScore: 0,
    traits: ["Em crescimento", "Determinado", "Aberto", "Prático"],
    strengths: ["Potencial de melhoria", "Determinação", "Mente aberta"],
    weaknesses: [],
    tips: ["Comece com problemas simples", "Peça ajuda quando precisar", "Não desista - prática traz melhoria"],
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
