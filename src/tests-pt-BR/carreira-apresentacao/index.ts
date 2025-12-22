// Seu Estilo de Apresentação
// Descubra como você se sai em apresentações profissionais!

export const questions = [
  {
    id: 1,
    question: "Como você se sente antes de uma apresentação importante?",
    options: [
      { text: "Animado e confiante", type: "A" },
      { text: "Um pouco nervoso mas preparado", type: "B" },
      { text: "Bastante ansioso", type: "C" },
      { text: "Aterrorizado, quero fugir", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você se prepara para apresentações?",
    options: [
      { text: "Estruturo bem e ensaio várias vezes", type: "A" },
      { text: "Preparo o conteúdo e reviso mentalmente", type: "B" },
      { text: "Faço slides e improviso na hora", type: "C" },
      { text: "Evito ao máximo ou preparo minimamente", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Durante a apresentação, você:",
    options: [
      { text: "Me conecto com a audiência naturalmente", type: "A" },
      { text: "Sigo o roteiro com ajustes quando necessário", type: "B" },
      { text: "Fico preso ao script, difícil improvisar", type: "C" },
      { text: "Travo e esqueço o que ia falar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você lida com perguntas difíceis da audiência?",
    options: [
      { text: "Adoro! Mostro domínio do assunto", type: "A" },
      { text: "Respondo com calma, mesmo se não souber tudo", type: "B" },
      { text: "Fico nervoso mas tento responder", type: "C" },
      { text: "Paraliso e não sei o que dizer", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual seu recurso visual preferido em apresentações?",
    options: [
      { text: "Slides minimalistas, sou o foco", type: "A" },
      { text: "Slides bem estruturados como guia", type: "B" },
      { text: "Slides detalhados para me apoiar", type: "C" },
      { text: "Muito texto para não esquecer nada", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você usa linguagem corporal ao apresentar?",
    options: [
      { text: "Naturalmente, gesticulo e me movimento", type: "A" },
      { text: "Conscientemente, uso para reforçar pontos", type: "B" },
      { text: "Fico meio travado, não sei o que fazer", type: "C" },
      { text: "Evito me mexer, fico parado", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você consegue adaptar a apresentação ao vivo?",
    options: [
      { text: "Sim, leio a sala e ajusto constantemente", type: "A" },
      { text: "Faço pequenos ajustes quando necessário", type: "B" },
      { text: "Difícil, prefiro seguir o planejado", type: "C" },
      { text: "Não, qualquer mudança me desestabiliza", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você começa suas apresentações?",
    options: [
      { text: "Com algo impactante que prende atenção", type: "A" },
      { text: "Com contexto claro do que será abordado", type: "B" },
      { text: "Direto ao ponto, sem introdução elaborada", type: "C" },
      { text: "Desculpas por estar nervoso", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você usa storytelling nas apresentações?",
    options: [
      { text: "Sempre, histórias conectam e engajam", type: "A" },
      { text: "Quando apropriado e bem encaixado", type: "B" },
      { text: "Pouco, prefiro ir direto aos dados", type: "C" },
      { text: "Não sei contar histórias bem", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Depois da apresentação, como você se sente?",
    options: [
      { text: "Energizado, adoro essa adrenalina", type: "A" },
      { text: "Satisfeito se foi bem", type: "B" },
      { text: "Aliviado que acabou", type: "C" },
      { text: "Exausto e ruminando erros", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Com que frequência você apresenta no trabalho?",
    options: [
      { text: "Sempre que posso, busco essas oportunidades", type: "A" },
      { text: "Regularmente, faz parte do meu trabalho", type: "B" },
      { text: "Quando não consigo evitar", type: "C" },
      { text: "Evito ao máximo, delego quando possível", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como os outros avaliariam suas apresentações?",
    options: [
      { text: "Excelentes, envolventes e claras", type: "A" },
      { text: "Boas, profissionais e informativas", type: "B" },
      { text: "Razoáveis, cumprem o objetivo", type: "C" },
      { text: "Fracas, perdem a audiência", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Apresentador Nato",
    emoji: "🎤",
    description: "Você brilha em apresentações! Confiante, envolvente e natural, você transforma qualquer apresentação em um momento impactante. É uma habilidade valiosa.",
    traits: ["Confiante", "Carismático", "Natural", "Impactante"],
    strengths: ["Prende atenção", "Adapta-se ao vivo", "Conexão com audiência", "Clareza na comunicação"],
    weaknesses: ["Pode parecer exibido", "Às vezes improvisa demais"],
    tips: ["Use seu talento estrategicamente", "Ajude colegas a melhorar", "Mantenha humildade"],
  },
  B: {
    type: "B",
    title: "Apresentador Competente",
    emoji: "📊",
    description: "Você apresenta bem! Preparado e profissional, você entrega apresentações sólidas. Com prática contínua, pode se tornar excelente.",
    traits: ["Preparado", "Profissional", "Claro", "Confiável"],
    strengths: ["Apresentações sólidas", "Conteúdo bem estruturado", "Profissionalismo"],
    weaknesses: ["Pode melhorar engajamento", "Às vezes previsível"],
    tips: ["Experimente mais storytelling", "Pratique improvisação", "Grave-se e analise"],
  },
  C: {
    type: "C",
    title: "Apresentador em Desenvolvimento",
    emoji: "📈",
    description: "Apresentações são desafiadoras para você. Você consegue mas com desconforto. Com prática e técnicas certas, pode melhorar significativamente.",
    traits: ["Nervoso", "Em desenvolvimento", "Potencial", "Esforçado"],
    strengths: ["Reconhece necessidade de melhoria", "Conhecimento técnico"],
    weaknesses: ["Nervosismo visível", "Dificuldade de conexão", "Dependência de slides"],
    tips: ["Pratique muito mais", "Faça cursos de oratória", "Comece com apresentações menores", "Ensaie em voz alta"],
  },
  D: {
    type: "D",
    title: "Avesso a Apresentações",
    emoji: "😰",
    description: "Apresentações são seu maior medo! Você evita e quando faz, sofre muito. Isso limita sua carreira. É possível melhorar com ajuda e prática.",
    traits: ["Ansioso", "Evitativo", "Travado", "Limitado"],
    strengths: ["Pode ter ótimo conteúdo"],
    weaknesses: ["Glossofobia impactante", "Carreira limitada", "Oportunidades perdidas"],
    tips: ["IMPORTANTE: Busque ajuda profissional", "Glossofobia é tratável", "Comece com grupos pequenos", "Sua carreira agradece"],
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
