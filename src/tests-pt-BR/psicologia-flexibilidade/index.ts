// Teste de Flexibilidade Mental
// Descubra sua flexibilidade cognitiva e adaptabilidade!

export const questions = [
  {
    id: 1,
    question: "Como você reage quando seus planos mudam de última hora?",
    options: [
      { text: "Me adapto facilmente, às vezes até gosto", type: "A" },
      { text: "Aceito e me ajusto sem problema", type: "B" },
      { text: "Fico irritado mas me adapto", type: "C" },
      { text: "Fico muito perturbado e tenho dificuldade", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você está aberto a mudar de opinião com novos argumentos?",
    options: [
      { text: "Sim, adoro aprender e evoluir meu pensamento", type: "A" },
      { text: "Sim, se os argumentos forem bons", type: "B" },
      { text: "Tenho dificuldade, mas às vezes mudo", type: "C" },
      { text: "Raramente mudo de opinião", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com ambiguidade e incerteza?",
    options: [
      { text: "Bem, aceito que nem tudo é preto e branco", type: "A" },
      { text: "Razoavelmente, prefiro clareza mas aceito", type: "B" },
      { text: "Tenho dificuldade, prefiro certezas", type: "C" },
      { text: "Muito mal, preciso de respostas definitivas", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você experimenta novas formas de fazer as coisas?",
    options: [
      { text: "Sempre, adoro experimentar", type: "A" },
      { text: "Frequentemente, quando parece útil", type: "B" },
      { text: "Às vezes, mas prefiro o que conheço", type: "C" },
      { text: "Raramente, tenho meu jeito de fazer", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você consegue ver situações de diferentes perspectivas?",
    options: [
      { text: "Sim, naturalmente considero múltiplas visões", type: "A" },
      { text: "Geralmente consigo quando me esforço", type: "B" },
      { text: "Tenho dificuldade, mas tento", type: "C" },
      { text: "Não, minha perspectiva é a correta", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você reage a críticas ou sugestões?",
    options: [
      { text: "Agradeço e considero com mente aberta", type: "A" },
      { text: "Escuto e avalio se faz sentido", type: "B" },
      { text: "Fico na defensiva mas às vezes aceito", type: "C" },
      { text: "Rejeito, sei o que é melhor para mim", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você se adapta bem a novos ambientes ou culturas?",
    options: [
      { text: "Sim, adoro conhecer o novo", type: "A" },
      { text: "Geralmente me adapto bem", type: "B" },
      { text: "Demoro mas eventualmente me adapto", type: "C" },
      { text: "Tenho muita dificuldade com mudanças", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando uma estratégia não funciona, você:",
    options: [
      { text: "Mudo rapidamente para outra abordagem", type: "A" },
      { text: "Avalio e tento algo diferente", type: "B" },
      { text: "Insisto mais um pouco antes de mudar", type: "C" },
      { text: "Continuo tentando a mesma coisa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você consegue lidar bem com múltiplas tarefas simultaneamente?",
    options: [
      { text: "Sim, me adapto bem a mudanças de contexto", type: "A" },
      { text: "Razoavelmente bem", type: "B" },
      { text: "Tenho dificuldade em alternar", type: "C" },
      { text: "Prefiro fazer uma coisa de cada vez rigidamente", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você lida com pessoas que pensam diferente?",
    options: [
      { text: "Acho enriquecedor e aprendo com elas", type: "A" },
      { text: "Respeito e ouço suas perspectivas", type: "B" },
      { text: "Tolero mas prefiro quem pensa como eu", type: "C" },
      { text: "Evito ou tento convencê-las do meu ponto", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você questiona suas próprias crenças e hábitos?",
    options: [
      { text: "Sim, regularmente faço esse exercício", type: "A" },
      { text: "Às vezes, quando algo me faz pensar", type: "B" },
      { text: "Raramente, minhas crenças são sólidas", type: "C" },
      { text: "Nunca, sei no que acredito", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua mente?",
    options: [
      { text: "Aberta e adaptável", type: "A" },
      { text: "Razoavelmente flexível", type: "B" },
      { text: "Mais para o lado estruturado", type: "C" },
      { text: "Fixa e decidida", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Flexível",
    emoji: "🌊",
    description: "Você é altamente flexível mentalmente! Se adapta facilmente a mudanças, aceita diferentes perspectivas e está aberto a novas ideias. Isso é uma força enorme.",
    traits: ["Adaptável", "Aberto", "Curioso", "Resiliente"],
    strengths: ["Adaptação a mudanças", "Criatividade", "Resolução de problemas", "Relacionamentos diversos"],
    weaknesses: ["Pode parecer indeciso", "Pode faltar consistência às vezes"],
    tips: ["Use essa flexibilidade como diferencial", "Equilibre abertura com convicções", "Continue cultivando essa qualidade"],
  },
  B: {
    type: "B",
    title: "Flexível",
    emoji: "🌿",
    description: "Você tem boa flexibilidade mental. Consegue se adaptar a mudanças e considerar diferentes perspectivas, mantendo equilíbrio entre abertura e convicções.",
    traits: ["Equilibrado", "Adaptável", "Ponderado", "Aberto"],
    strengths: ["Bom equilíbrio", "Capacidade de mudança quando necessário", "Consideração de múltiplas perspectivas"],
    weaknesses: ["Algumas áreas de rigidez", "Pode melhorar em situações específicas"],
    tips: ["Identifique áreas de maior rigidez", "Continue desenvolvendo flexibilidade", "Pratique ver outros pontos de vista"],
  },
  C: {
    type: "C",
    title: "Rigidez Moderada",
    emoji: "🪨",
    description: "Você tem tendência à rigidez mental. Prefere previsibilidade e tem dificuldade com mudanças. Desenvolver mais flexibilidade pode melhorar sua vida.",
    traits: ["Estruturado", "Tradicional", "Previsível", "Cauteloso"],
    strengths: ["Consistência", "Convicções fortes", "Confiabilidade"],
    weaknesses: ["Dificuldade com mudanças", "Pode perder oportunidades", "Conflitos por diferenças de opinião"],
    tips: ["Pratique pequenas mudanças na rotina", "Exponha-se a pessoas diferentes", "Questione algumas crenças antigas"],
  },
  D: {
    type: "D",
    title: "Rigidez Alta",
    emoji: "🏔️",
    description: "Você apresenta alta rigidez mental. Mudanças são muito difíceis e você tem dificuldade em aceitar perspectivas diferentes. Isso pode estar limitando sua vida.",
    traits: ["Inflexível", "Rígido", "Fixo", "Resistente"],
    strengths: ["Convicções muito fortes", "Previsibilidade"],
    weaknesses: ["Dificuldade em se adaptar", "Conflitos frequentes", "Oportunidades perdidas", "Estresse com mudanças"],
    tips: ["Considere que flexibilidade é uma habilidade", "Comece com mudanças muito pequenas", "Terapia pode ajudar a desenvolver mais abertura"],
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
