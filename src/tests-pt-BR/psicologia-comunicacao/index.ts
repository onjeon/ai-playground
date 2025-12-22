// Teste de Estilo de Comunicação
// Descubra seu estilo de comunicação interpessoal!

export const questions = [
  {
    id: 1,
    question: "Quando discorda de alguém, você geralmente:",
    options: [
      { text: "Expresso minha opinião de forma clara e direta", type: "A" },
      { text: "Busco um meio termo respeitando ambos os lados", type: "B" },
      { text: "Evito confronto e guardo minha opinião", type: "C" },
      { text: "Me irrito e posso ficar agressivo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você pede algo que precisa?",
    options: [
      { text: "Peço diretamente e claramente", type: "A" },
      { text: "Peço educadamente explicando a situação", type: "B" },
      { text: "Dou indiretas esperando que entendam", type: "C" },
      { text: "Exijo de forma firme, às vezes ríspida", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando alguém te interrompe, você:",
    options: [
      { text: "Peço educadamente para terminar de falar", type: "A" },
      { text: "Espero minha vez e retomo o assunto", type: "B" },
      { text: "Me calo e deixo a pessoa falar", type: "C" },
      { text: "Fico irritado e interrompo de volta", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você expressa desconforto com uma situação?",
    options: [
      { text: "Falo abertamente o que me incomoda", type: "A" },
      { text: "Explico como me sinto buscando solução", type: "B" },
      { text: "Fico quieto mas fico remoendo por dentro", type: "C" },
      { text: "Explodo quando não aguento mais", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Em uma reunião de trabalho, você:",
    options: [
      { text: "Participo ativamente com minhas ideias", type: "A" },
      { text: "Contribuo quando tenho algo relevante", type: "B" },
      { text: "Prefiro ouvir e raramente falo", type: "C" },
      { text: "Domino a conversa e interrompo outros", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando recebe uma crítica injusta, você:",
    options: [
      { text: "Me defendo com argumentos claros", type: "A" },
      { text: "Peço esclarecimentos e explico meu lado", type: "B" },
      { text: "Aceito calado mesmo discordando", type: "C" },
      { text: "Ataco de volta com mais força", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você dá feedback negativo a alguém?",
    options: [
      { text: "De forma direta mas respeitosa", type: "A" },
      { text: "Com cuidado, focando em melhorias", type: "B" },
      { text: "Evito dar feedback negativo", type: "C" },
      { text: "Sem rodeios, digo na lata", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando alguém invade seu espaço ou tempo, você:",
    options: [
      { text: "Estabeleço limites claros e educados", type: "A" },
      { text: "Explico minhas necessidades gentilmente", type: "B" },
      { text: "Permito a invasão para não criar conflito", type: "C" },
      { text: "Reajo com irritação e agressividade", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Em conflitos, qual é sua tendência?",
    options: [
      { text: "Resolver através de diálogo franco", type: "A" },
      { text: "Buscar consenso e harmonia", type: "B" },
      { text: "Evitar o conflito a todo custo", type: "C" },
      { text: "Vencer a discussão, não importa como", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você se sente após uma conversa difícil?",
    options: [
      { text: "Satisfeito por ter me expressado bem", type: "A" },
      { text: "Aliviado por ter encontrado uma solução", type: "B" },
      { text: "Ansioso e remoendo o que deveria ter dito", type: "C" },
      { text: "Vitorioso ou ainda com raiva", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você consegue dizer 'não' quando necessário?",
    options: [
      { text: "Sim, de forma clara e firme", type: "A" },
      { text: "Sim, explicando meus motivos", type: "B" },
      { text: "Tenho muita dificuldade com isso", type: "C" },
      { text: "Digo não de forma ríspida ou rude", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como as pessoas geralmente descrevem sua comunicação?",
    options: [
      { text: "Clara, direta e confiante", type: "A" },
      { text: "Gentil, diplomática e equilibrada", type: "B" },
      { text: "Quieta, reservada ou tímida", type: "C" },
      { text: "Intensa, dominante ou intimidadora", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Comunicador Assertivo",
    emoji: "🎯",
    description: "Você tem comunicação assertiva! Expressa suas opiniões e necessidades de forma clara e respeitosa, sem ser passivo nem agressivo. Este é o estilo mais saudável.",
    traits: ["Claro", "Respeitoso", "Confiante", "Equilibrado"],
    strengths: ["Comunicação efetiva", "Respeita a si e aos outros", "Resolve conflitos bem", "Estabelece limites saudáveis"],
    weaknesses: ["Pode parecer muito direto para alguns", "Nem todos estão prontos para assertividade"],
    tips: ["Continue praticando comunicação assertiva", "Adapte o tom ao contexto", "Ensine outros por exemplo"],
  },
  B: {
    type: "B",
    title: "Comunicador Diplomático",
    emoji: "🕊️",
    description: "Você é um comunicador diplomático! Busca harmonia e consenso em suas interações. É gentil e considerado, mas às vezes pode sacrificar suas necessidades.",
    traits: ["Diplomático", "Gentil", "Harmonizador", "Empático"],
    strengths: ["Excelente em mediação", "Cria ambiente positivo", "Evita conflitos desnecessários"],
    weaknesses: ["Pode não expressar necessidades próprias", "Às vezes muito conciliador"],
    tips: ["Pratique ser mais direto quando necessário", "Suas necessidades também importam", "Não confunda diplomacia com passividade"],
  },
  C: {
    type: "C",
    title: "Comunicador Passivo",
    emoji: "🙊",
    description: "Você tem comunicação passiva. Tende a evitar conflitos, guardar opiniões e priorizar os outros sobre si mesmo. Isso pode causar ressentimento e frustração.",
    traits: ["Evitativo", "Reservado", "Ansioso", "Acomodado"],
    strengths: ["Evita conflitos", "Considerado com outros", "Bom ouvinte"],
    weaknesses: ["Necessidades não atendidas", "Acúmulo de ressentimento", "Baixa autoexpressão", "Pode ser ignorado"],
    tips: ["Pratique expressar pequenas opiniões", "Seus sentimentos são válidos", "Considere terapia para assertividade"],
  },
  D: {
    type: "D",
    title: "Comunicador Agressivo",
    emoji: "🔥",
    description: "Você tem comunicação agressiva. Tende a impor suas opiniões, interromper outros e reagir com hostilidade. Isso prejudica relacionamentos e sua imagem.",
    traits: ["Dominante", "Impositivo", "Reativo", "Intimidador"],
    strengths: ["Consegue o que quer às vezes", "Não é ignorado"],
    weaknesses: ["Prejudica relacionamentos", "Causa medo nos outros", "Não resolve conflitos realmente", "Afasta pessoas"],
    tips: ["Pratique escuta ativa", "Conte até 10 antes de reagir", "Busque ajuda para manejo da raiva"],
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
