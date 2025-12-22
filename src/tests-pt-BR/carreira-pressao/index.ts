// Seu Desempenho Sob Pressão
// Descubra como você se sai em situações de alta pressão!

export const questions = [
  {
    id: 1,
    question: "Quando tem um prazo muito apertado, você:",
    options: [
      { text: "Funciono melhor, a adrenalina me energiza", type: "A" },
      { text: "Me organizo e dou conta", type: "B" },
      { text: "Fico ansioso mas entrego", type: "C" },
      { text: "Paraliso e não consigo produzir", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Em uma crise no trabalho, você:",
    options: [
      { text: "Assumo a liderança e resolvo", type: "A" },
      { text: "Mantenho a calma e contribuo", type: "B" },
      { text: "Fico estressado mas faço minha parte", type: "C" },
      { text: "Me desespero e não sei o que fazer", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual sua performance em apresentações de última hora?",
    options: [
      { text: "Brilho! Improviso muito bem", type: "A" },
      { text: "Dou conta, me viro bem", type: "B" },
      { text: "Sofrível, preciso de preparação", type: "C" },
      { text: "Péssima, não consigo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quando várias coisas urgentes acontecem juntas:",
    options: [
      { text: "Priorizo rápido e ataco uma por uma", type: "A" },
      { text: "Respiro, organizo e resolvo", type: "B" },
      { text: "Fico sobrecarregado mas vou em frente", type: "C" },
      { text: "Entro em pânico e não resolvo nada", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como é sua clareza mental sob pressão?",
    options: [
      { text: "Fica mais aguçada, penso melhor", type: "A" },
      { text: "Se mantém, consigo raciocinar", type: "B" },
      { text: "Diminui um pouco, preciso me esforçar", type: "C" },
      { text: "Desaparece, não consigo pensar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você voluntaria-se para projetos de alta pressão?",
    options: [
      { text: "Sempre, adoro o desafio", type: "A" },
      { text: "Às vezes, quando faz sentido", type: "B" },
      { text: "Prefiro evitar, mas aceito se preciso", type: "C" },
      { text: "Nunca, evito ao máximo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você dorme antes de um dia de alta pressão?",
    options: [
      { text: "Normal ou até melhor, motivado", type: "A" },
      { text: "Razoável, com alguma ansiedade", type: "B" },
      { text: "Mal, preocupado e ansioso", type: "C" },
      { text: "Não durmo, insônia total", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual é seu maior desafio sob pressão?",
    options: [
      { text: "Nenhum grande, funciono bem", type: "A" },
      { text: "Manter equilíbrio emocional", type: "B" },
      { text: "Ansiedade e estresse", type: "C" },
      { text: "Paralisia total", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Após um período de alta pressão, você:",
    options: [
      { text: "Saio energizado, quero mais", type: "A" },
      { text: "Preciso de descanso normal", type: "B" },
      { text: "Fico exausto e preciso de recuperação longa", type: "C" },
      { text: "Fico destruído, levo semanas para me recuperar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como está sua tomada de decisão sob pressão?",
    options: [
      { text: "Excelente, decido rápido e bem", type: "A" },
      { text: "Boa, mantenho qualidade", type: "B" },
      { text: "Comprometida, tendo a errar mais", type: "C" },
      { text: "Péssima, não consigo decidir", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você consegue liderar outros sob pressão?",
    options: [
      { text: "Sim, é quando mais me destaco", type: "A" },
      { text: "Consigo manter a equipe organizada", type: "B" },
      { text: "Tenho dificuldade, foco em mim", type: "C" },
      { text: "Não, nem a mim mesmo consigo liderar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como os outros te veem sob pressão?",
    options: [
      { text: "Como rocha, referência de calma", type: "A" },
      { text: "Confiável e competente", type: "B" },
      { text: "Estressado mas funcional", type: "C" },
      { text: "Em pânico, parte do problema", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mestre da Pressão",
    emoji: "💎",
    description: "Você brilha sob pressão! Enquanto outros desmoronam, você se destaca. A adrenalina te energiza e você produz seu melhor trabalho em momentos críticos.",
    traits: ["Calmo", "Decisivo", "Líder nato", "Energizado pela pressão"],
    strengths: ["Performance elevada em crises", "Liderança sob pressão", "Tomada de decisão rápida", "Clareza mental"],
    weaknesses: ["Pode buscar pressão desnecessariamente", "Pode parecer insensível"],
    tips: ["Use seu dom estrategicamente", "Ajude outros a lidar com pressão", "Cuide para não viciar em adrenalina"],
  },
  B: {
    type: "B",
    title: "Resiliente sob Pressão",
    emoji: "🛡️",
    description: "Você lida bem com pressão! Mantém compostura e entrega resultados mesmo em momentos difíceis. Você é confiável quando as coisas apertam.",
    traits: ["Resiliente", "Consistente", "Confiável", "Equilibrado"],
    strengths: ["Performance mantida", "Equilíbrio emocional", "Confiabilidade"],
    weaknesses: ["Pode sentir o impacto depois", "Não é seu ambiente ideal"],
    tips: ["Continue desenvolvendo técnicas de gestão de stress", "Equilibre desafio com descanso", "Reconheça seus limites"],
  },
  C: {
    type: "C",
    title: "Vulnerável à Pressão",
    emoji: "😰",
    description: "Pressão te afeta significativamente. Você consegue entregar mas com custo alto de estresse e ansiedade. Isso impacta sua performance e saúde.",
    traits: ["Ansioso", "Estressado", "Funcional mas sofrendo", "Vulnerável"],
    strengths: ["Ainda entrega apesar da dificuldade", "Consciência do problema"],
    weaknesses: ["Performance comprometida", "Saúde afetada", "Recuperação lenta"],
    tips: ["Desenvolva técnicas de gestão de stress", "Busque ajuda profissional se necessário", "Evite posições de alta pressão constante"],
  },
  D: {
    type: "D",
    title: "Incapacitado por Pressão",
    emoji: "🆘",
    description: "Pressão te paralisa completamente. Você não consegue funcionar em situações de alta demanda. Isso é um problema sério que limita sua carreira.",
    traits: ["Paralisado", "Em pânico", "Incapaz sob pressão", "Disfuncional"],
    strengths: ["Talvez funcione bem em ambientes calmos"],
    weaknesses: ["Totalmente incapacitado sob pressão", "Carreira severamente limitada", "Pode ser visto como não confiável"],
    tips: ["URGENTE: Busque ajuda profissional", "Isso é tratável com terapia", "Evite posições de alta pressão por enquanto", "Sua saúde mental é prioridade"],
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
