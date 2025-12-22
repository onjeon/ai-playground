// Seu Estilo de Colaboração
// Descubra como você colabora com colegas de trabalho!

export const questions = [
  {
    id: 1,
    question: "Você prefere trabalhar sozinho ou em equipe?",
    options: [
      { text: "Em equipe, sempre", type: "A" },
      { text: "Equipe na maioria das vezes", type: "B" },
      { text: "Sozinho na maioria das vezes", type: "C" },
      { text: "Sozinho, sempre", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você compartilha conhecimento com colegas?",
    options: [
      { text: "Proativamente, adoro ensinar", type: "A" },
      { text: "Quando pedem ou vejo necessidade", type: "B" },
      { text: "Quando é estritamente necessário", type: "C" },
      { text: "Guardo para mim, é meu diferencial", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando um colega precisa de ajuda, você:",
    options: [
      { text: "Paro tudo e ajudo", type: "A" },
      { text: "Ajudo quando consigo sem prejudicar minhas tarefas", type: "B" },
      { text: "Ajudo se for rápido e fácil", type: "C" },
      { text: "Foco nas minhas coisas", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você divide crédito por trabalhos em equipe?",
    options: [
      { text: "Sempre destaco a contribuição de todos", type: "A" },
      { text: "Menciono a equipe", type: "B" },
      { text: "Foco na minha contribuição", type: "C" },
      { text: "Busco o crédito para mim", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você participa de projetos que beneficiam outros além de você?",
    options: [
      { text: "Frequentemente, gosto de contribuir", type: "A" },
      { text: "Às vezes, quando faz sentido", type: "B" },
      { text: "Raramente, priorizo o que me beneficia", type: "C" },
      { text: "Nunca, meu tempo é para minhas coisas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você lida com diferentes opiniões em grupo?",
    options: [
      { text: "Valorizo diversidade e busco integrar", type: "A" },
      { text: "Considero e busco consenso", type: "B" },
      { text: "Defendo minha posição firmemente", type: "C" },
      { text: "Imponho minha visão se puder", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você comemora vitórias de colegas?",
    options: [
      { text: "Sim, genuinamente me alegro", type: "A" },
      { text: "Sim, parabenizo", type: "B" },
      { text: "Indiferente, não é comigo", type: "C" },
      { text: "Sinto inveja ou competição", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual sua postura sobre informação e transparência?",
    options: [
      { text: "Compartilho tudo que pode ajudar outros", type: "A" },
      { text: "Compartilho o relevante", type: "B" },
      { text: "Compartilho o mínimo necessário", type: "C" },
      { text: "Informação é poder, guardo para mim", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você contribui para o sucesso de outros?",
    options: [
      { text: "Ativamente, o sucesso deles é meu também", type: "A" },
      { text: "Quando posso e faz sentido", type: "B" },
      { text: "Foco no meu próprio sucesso primeiro", type: "C" },
      { text: "Cada um por si", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você vê colaboração vs. competição?",
    options: [
      { text: "Colaboração sempre, crescemos juntos", type: "A" },
      { text: "Mais colaboração que competição", type: "B" },
      { text: "Equilíbrio, depende do contexto", type: "C" },
      { text: "Competição, cada um por si", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você constrói relacionamentos além do necessário para o trabalho?",
    options: [
      { text: "Sim, valorizo conexões genuínas", type: "A" },
      { text: "Com algumas pessoas sim", type: "B" },
      { text: "Só o necessário para trabalhar", type: "C" },
      { text: "Não misturo trabalho com relacionamentos", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como os colegas te veem como colaborador?",
    options: [
      { text: "Referência de colaboração e ajuda", type: "A" },
      { text: "Bom colega, colaborativo", type: "B" },
      { text: "Focado em si mesmo", type: "C" },
      { text: "Competitivo e individualista", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Super Colaborador",
    emoji: "🤝",
    description: "Você é extremamente colaborativo! Prioriza o sucesso coletivo, compartilha conhecimento e ajuda genuinamente. Você é o tipo de colega que todos querem ter.",
    traits: ["Colaborativo", "Generoso", "Team player", "Conector"],
    strengths: ["Excelente relacionamento", "Multiplica resultados", "Querido pelos colegas", "Constrói times fortes"],
    weaknesses: ["Pode se sacrificar demais", "Pode ser aproveitado por individualistas"],
    tips: ["Continue assim!", "Mas cuide para não sacrificar demais suas próprias necessidades", "Estabeleça limites saudáveis"],
  },
  B: {
    type: "B",
    title: "Colaborador Equilibrado",
    emoji: "✨",
    description: "Você colabora bem! Equilibra ajudar outros com cuidar das suas responsabilidades. Bom colega de equipe sem perder de vista seus objetivos.",
    traits: ["Equilibrado", "Cooperativo", "Responsável", "Team player"],
    strengths: ["Bom equilíbrio", "Relacionamentos saudáveis", "Colaboração eficiente"],
    weaknesses: ["Poderia colaborar um pouco mais em algumas situações"],
    tips: ["Está bem equilibrado!", "Continue desenvolvendo colaboração", "Busque oportunidades de ajudar mais"],
  },
  C: {
    type: "C",
    title: "Individualista",
    emoji: "🏃",
    description: "Você é mais individualista que colaborativo. Prioriza suas próprias tarefas e objetivos. Isso pode limitar relacionamentos e oportunidades.",
    traits: ["Individualista", "Focado em si", "Independente", "Competitivo"],
    strengths: ["Foco em resultados próprios", "Independência"],
    weaknesses: ["Relacionamentos limitados", "Pode ser visto negativamente", "Perde oportunidades de sinergia"],
    tips: ["Desenvolva mais colaboração", "Ajudar outros também te beneficia", "Relacionamentos são fundamentais na carreira"],
  },
  D: {
    type: "D",
    title: "Altamente Individualista",
    emoji: "🐺",
    description: "Você é muito individualista, quase egoísta no trabalho. Foca apenas em si e não contribui para outros. Isso prejudica relacionamentos e carreira.",
    traits: ["Egoísta", "Competitivo demais", "Isolado", "Não colaborativo"],
    strengths: ["Foco extremo em si mesmo"],
    weaknesses: ["Relacionamentos prejudicados", "Visto negativamente", "Ambiente tóxico ao redor", "Carreira limitada por falta de aliados"],
    tips: ["ATENÇÃO: Isso prejudica muito sua carreira!", "Ninguém cresce sozinho", "Desenvolva colaboração urgentemente"],
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
