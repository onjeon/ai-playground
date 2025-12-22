// Teste de Tomada de Decisão
// Descubra seu estilo de tomada de decisão!

export const questions = [
  {
    id: 1,
    question: "Quanto tempo você leva para tomar decisões importantes?",
    options: [
      { text: "Decido rapidamente após avaliar o essencial", type: "A" },
      { text: "Levo um tempo razoável para analisar", type: "B" },
      { text: "Demoro bastante, pondero muito", type: "C" },
      { text: "Muito tempo, às vezes fico paralisado", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você se arrepende frequentemente das suas decisões?",
    options: [
      { text: "Raramente, aceito minhas escolhas", type: "A" },
      { text: "Às vezes, mas aprendo com isso", type: "B" },
      { text: "Frequentemente me questiono", type: "C" },
      { text: "Sempre me arrependo e remoendo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você pede muitas opiniões antes de decidir?",
    options: [
      { text: "Não, confio no meu julgamento", type: "A" },
      { text: "Algumas opiniões importantes", type: "B" },
      { text: "Muitas, preciso de validação", type: "C" },
      { text: "Todas que puder, não consigo decidir só", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você lida com decisões irreversíveis?",
    options: [
      { text: "Decido e sigo em frente sem olhar para trás", type: "A" },
      { text: "Avalio bem, decido e aceito", type: "B" },
      { text: "Fico muito ansioso com esse tipo de decisão", type: "C" },
      { text: "Evito ao máximo ter que tomar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você usa mais razão ou emoção para decidir?",
    options: [
      { text: "Equilíbrio saudável entre ambos", type: "A" },
      { text: "Mais razão, mas considero emoções", type: "B" },
      { text: "Deixo a emoção dominar frequentemente", type: "C" },
      { text: "Sou dominado pela ansiedade e medo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você fica confortável com incertezas após decidir?",
    options: [
      { text: "Sim, sei que não há garantias", type: "A" },
      { text: "Razoavelmente, aceito a incerteza", type: "B" },
      { text: "Tenho dificuldade com a incerteza", type: "C" },
      { text: "Não suporto incertezas, me paralisa", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você considera consequências de longo prazo?",
    options: [
      { text: "Sim, penso no impacto futuro", type: "A" },
      { text: "Geralmente considero", type: "B" },
      { text: "Às vezes esqueço de pensar no futuro", type: "C" },
      { text: "Foco só no imediato", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando não há informação suficiente, você:",
    options: [
      { text: "Decido com o que tenho, é a vida", type: "A" },
      { text: "Busco mais informação até um ponto razoável", type: "B" },
      { text: "Fico buscando informação indefinidamente", type: "C" },
      { text: "Não consigo decidir sem informação completa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você assume a responsabilidade pelas suas decisões?",
    options: [
      { text: "Sim, para o bem ou para o mal", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Às vezes culpo circunstâncias ou outros", type: "C" },
      { text: "Prefiro que outros decidam por mim", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Diante de muitas opções, você:",
    options: [
      { text: "Filtro rapidamente e decido", type: "A" },
      { text: "Analiso as principais e escolho", type: "B" },
      { text: "Fico sobrecarregado com tantas opções", type: "C" },
      { text: "Paraliso e não consigo escolher", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você posterga decisões importantes?",
    options: [
      { text: "Não, enfrento quando necessário", type: "A" },
      { text: "Às vezes adio um pouco", type: "B" },
      { text: "Frequentemente postergo", type: "C" },
      { text: "Sempre, até ser forçado a decidir", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua tomada de decisão?",
    options: [
      { text: "Decisivo e confiante", type: "A" },
      { text: "Ponderado e funcional", type: "B" },
      { text: "Indeciso e ansioso", type: "C" },
      { text: "Paralisado e evitativo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Decisor Confiante",
    emoji: "⚡",
    description: "Você é um tomador de decisão confiante! Avalia rapidamente, decide com convicção e assume responsabilidade. Não fica paralisado por dúvidas.",
    traits: ["Decisivo", "Confiante", "Responsável", "Ágil"],
    strengths: ["Decisões rápidas e boas", "Não paralisa", "Assume responsabilidade", "Progresso constante"],
    weaknesses: ["Pode decidir rápido demais às vezes", "Pode parecer inflexível"],
    tips: ["Continue confiando no seu julgamento", "Quando apropriado, dê tempo extra", "Ajude indecisos a ganharem confiança"],
  },
  B: {
    type: "B",
    title: "Decisor Ponderado",
    emoji: "⚖️",
    description: "Você é um tomador de decisão ponderado. Analisa com cuidado, busca informação relevante e decide em tempo razoável. Um equilíbrio saudável.",
    traits: ["Ponderado", "Analítico", "Equilibrado", "Funcional"],
    strengths: ["Decisões bem fundamentadas", "Equilíbrio entre análise e ação", "Bom uso de informação"],
    weaknesses: ["Pode demorar um pouco mais em urgências"],
    tips: ["Continue seu processo equilibrado", "Pratique decisões mais rápidas quando necessário", "Confie mais na sua análise inicial"],
  },
  C: {
    type: "C",
    title: "Indeciso",
    emoji: "🤔",
    description: "Você tem dificuldade com tomada de decisão. Fica ansioso, busca muita validação e demora a decidir. Isso pode estar travando sua vida.",
    traits: ["Indeciso", "Ansioso", "Dependente", "Inseguro"],
    strengths: ["Análise cuidadosa", "Considera muitas perspectivas"],
    weaknesses: ["Decisões demoradas", "Ansiedade excessiva", "Oportunidades perdidas", "Dependência de outros"],
    tips: ["Pratique decisões pequenas rapidamente", "Aceite que não há decisão perfeita", "Desenvolva confiança no seu julgamento"],
  },
  D: {
    type: "D",
    title: "Paralisia Decisória",
    emoji: "🚫",
    description: "Você sofre de paralisia decisória. Decisões te causam ansiedade extrema e frequentemente você evita ou posterga indefinidamente. Isso está afetando sua vida.",
    traits: ["Paralisado", "Evitativo", "Muito ansioso", "Dependente extremo"],
    strengths: ["Grande potencial de melhoria com ajuda"],
    weaknesses: ["Vida travada por indecisões", "Ansiedade severa", "Dependência total de outros", "Oportunidades constantemente perdidas"],
    tips: ["Busque ajuda profissional", "Isso pode ser sintoma de ansiedade tratável", "Você pode aprender a decidir com mais confiança"],
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
