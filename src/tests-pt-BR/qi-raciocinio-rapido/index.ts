// Teste de QI: Raciocínio Rápido
// Descubra sua velocidade de processamento mental!

export const questions = [
  {
    id: 1,
    question: "Qual é o dobro de metade de 100?",
    options: [
      { text: "25", score: 0 },
      { text: "50", score: 0 },
      { text: "100", score: 1 },
      { text: "200", score: 0 },
    ],
  },
  {
    id: 2,
    question: "Se há 3 maçãs e você tira 2, quantas você tem?",
    options: [
      { text: "1", score: 0 },
      { text: "2", score: 1 },
      { text: "3", score: 0 },
      { text: "0", score: 0 },
    ],
  },
  {
    id: 3,
    question: "Um fazendeiro tem 17 ovelhas. Todas menos 9 morrem. Quantas restam?",
    options: [
      { text: "8", score: 0 },
      { text: "9", score: 1 },
      { text: "17", score: 0 },
      { text: "0", score: 0 },
    ],
  },
  {
    id: 4,
    question: "Quanto é 111 dividido por 3?",
    options: [
      { text: "33", score: 0 },
      { text: "37", score: 1 },
      { text: "36", score: 0 },
      { text: "39", score: 0 },
    ],
  },
  {
    id: 5,
    question: "Se um médico te dá 3 comprimidos para tomar um a cada meia hora, em quanto tempo você toma todos?",
    options: [
      { text: "30 minutos", score: 0 },
      { text: "1 hora", score: 1 },
      { text: "1,5 horas", score: 0 },
      { text: "2 horas", score: 0 },
    ],
  },
  {
    id: 6,
    question: "O pai de Maria tem 5 filhas: Lala, Lele, Lili, Lolo e...?",
    options: [
      { text: "Lulu", score: 0 },
      { text: "Maria", score: 1 },
      { text: "Ana", score: 0 },
      { text: "Lola", score: 0 },
    ],
  },
  {
    id: 7,
    question: "Quantos meses têm 28 dias?",
    options: [
      { text: "1", score: 0 },
      { text: "2", score: 0 },
      { text: "12", score: 1 },
      { text: "Depende do ano", score: 0 },
    ],
  },
  {
    id: 8,
    question: "Quanto é 15 + 15 ÷ 15?",
    options: [
      { text: "2", score: 0 },
      { text: "16", score: 1 },
      { text: "30", score: 0 },
      { text: "1", score: 0 },
    ],
  },
  {
    id: 9,
    question: "Um trem elétrico vai para o norte. Para que lado vai a fumaça?",
    options: [
      { text: "Norte", score: 0 },
      { text: "Sul", score: 0 },
      { text: "Não há fumaça", score: 1 },
      { text: "Depende do vento", score: 0 },
    ],
  },
  {
    id: 10,
    question: "Você participa de uma corrida e ultrapassa o último colocado. Em que posição você está?",
    options: [
      { text: "Último", score: 0 },
      { text: "Penúltimo", score: 0 },
      { text: "Não é possível ultrapassar o último", score: 1 },
      { text: "Primeiro", score: 0 },
    ],
  },
  {
    id: 11,
    question: "Se 5 máquinas fazem 5 widgets em 5 minutos, quanto tempo 100 máquinas levam para fazer 100 widgets?",
    options: [
      { text: "5 minutos", score: 1 },
      { text: "100 minutos", score: 0 },
      { text: "20 minutos", score: 0 },
      { text: "1 minuto", score: 0 },
    ],
  },
  {
    id: 12,
    question: "Em um lago, há uma área com lírios que dobra de tamanho a cada dia. Se leva 48 dias para cobrir todo o lago, quantos dias leva para cobrir metade?",
    options: [
      { text: "24 dias", score: 0 },
      { text: "47 dias", score: 1 },
      { text: "36 dias", score: 0 },
      { text: "12 dias", score: 0 },
    ],
  },
];

export const results = {
  genius: {
    type: "genius",
    title: "Raciocínio Veloz",
    emoji: "⚡",
    description: "Seu processamento mental é extraordinariamente rápido! Você analisa e resolve problemas com velocidade impressionante.",
    minScore: 10,
    traits: ["Rápido", "Ágil", "Intuitivo", "Eficiente"],
    strengths: ["Processamento rápido", "Decisões ágeis", "Análise instantânea", "Reflexos mentais aguçados"],
    weaknesses: [],
    tips: ["Desafie-se com jogos de velocidade", "Pratique cálculo mental avançado", "Explore competições de quiz"],
  },
  high: {
    type: "high",
    title: "Raciocínio Acelerado",
    emoji: "🚀",
    description: "Você tem excelente velocidade de raciocínio! Processa informações rapidamente e toma decisões eficientes.",
    minScore: 7,
    traits: ["Ágil", "Eficiente", "Atento", "Decisivo"],
    strengths: ["Boa velocidade mental", "Processamento eficiente", "Respostas rápidas"],
    weaknesses: [],
    tips: ["Pratique jogos de raciocínio rápido", "Faça cálculos mentais diários", "Jogue xadrez com tempo limitado"],
  },
  average: {
    type: "average",
    title: "Raciocínio na Média",
    emoji: "🎯",
    description: "Sua velocidade de raciocínio está na média! Com prática, você pode acelerar seu processamento mental.",
    minScore: 4,
    traits: ["Equilibrado", "Cuidadoso", "Metódico", "Reflexivo"],
    strengths: ["Pensamento cuidadoso", "Análise completa", "Decisões ponderadas"],
    weaknesses: [],
    tips: ["Pratique jogos de velocidade", "Faça exercícios de cálculo mental", "Desafie-se com limites de tempo"],
  },
  developing: {
    type: "developing",
    title: "Raciocínio em Desenvolvimento",
    emoji: "🌱",
    description: "Sua velocidade de raciocínio está em desenvolvimento! Prática regular pode melhorar muito seu tempo de resposta.",
    minScore: 0,
    traits: ["Reflexivo", "Cuidadoso", "Detalhista", "Analítico"],
    strengths: ["Análise profunda", "Atenção aos detalhes", "Pensamento completo"],
    weaknesses: [],
    tips: ["Comece com exercícios simples cronometrados", "Jogue jogos de memória", "Pratique regularmente"],
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
