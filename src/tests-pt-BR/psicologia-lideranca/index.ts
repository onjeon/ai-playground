// Teste de Estilo de Liderança
// Descubra seu estilo de liderança!

export const questions = [
  {
    id: 1,
    question: "Quando sua equipe precisa tomar uma decisão importante, você:",
    options: [
      { text: "Consulto todos e decidimos juntos", type: "A" },
      { text: "Inspiro a equipe com uma visão clara", type: "B" },
      { text: "Analiso dados e tomo a melhor decisão", type: "C" },
      { text: "Decido rapidamente e comunico", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você motiva sua equipe?",
    options: [
      { text: "Criando ambiente colaborativo e acolhedor", type: "A" },
      { text: "Compartilhando uma visão inspiradora", type: "B" },
      { text: "Estabelecendo metas claras e métricas", type: "C" },
      { text: "Oferecendo recompensas e consequências", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando um membro da equipe comete um erro, você:",
    options: [
      { text: "Apoio e ajudo a pessoa a aprender", type: "A" },
      { text: "Uso como oportunidade de crescimento", type: "B" },
      { text: "Analiso o que deu errado sistematicamente", type: "C" },
      { text: "Corrijo imediatamente e sigo em frente", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual é sua prioridade como líder?",
    options: [
      { text: "O bem-estar e desenvolvimento da equipe", type: "A" },
      { text: "Criar mudanças positivas e inovação", type: "B" },
      { text: "Eficiência e resultados mensuráveis", type: "C" },
      { text: "Cumprir objetivos rapidamente", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você lida com conflitos na equipe?",
    options: [
      { text: "Facilito diálogo e busco consenso", type: "A" },
      { text: "Mostro como superar diferenças pelo objetivo maior", type: "B" },
      { text: "Analiso os fatos e proponho solução lógica", type: "C" },
      { text: "Resolvo rapidamente com minha autoridade", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quanto você delega tarefas?",
    options: [
      { text: "Muito, confio na capacidade de cada um", type: "A" },
      { text: "Delego dando autonomia para inovar", type: "B" },
      { text: "Delego com instruções claras e acompanhamento", type: "C" },
      { text: "Prefiro fazer eu mesmo ou supervisionar de perto", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você comunica expectativas?",
    options: [
      { text: "Através de conversas abertas e feedback contínuo", type: "A" },
      { text: "Pintando uma visão do que podemos alcançar", type: "B" },
      { text: "Com objetivos específicos e mensuráveis", type: "C" },
      { text: "De forma direta e sem rodeios", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual frase mais representa seu estilo?",
    options: [
      { text: "Juntos somos mais fortes", type: "A" },
      { text: "Vamos mudar o mundo", type: "B" },
      { text: "Dados não mentem", type: "C" },
      { text: "Vamos fazer acontecer", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você desenvolve talentos na equipe?",
    options: [
      { text: "Mentoria próxima e apoio emocional", type: "A" },
      { text: "Desafiando com projetos inspiradores", type: "B" },
      { text: "Treinamentos estruturados e feedback objetivo", type: "C" },
      { text: "Na prática, aprender fazendo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Em momentos de crise, você:",
    options: [
      { text: "Reúno a equipe e enfrentamos juntos", type: "A" },
      { text: "Mantenho a calma e inspiro confiança", type: "B" },
      { text: "Analiso opções e implemento plano de ação", type: "C" },
      { text: "Tomo controle e dou ordens claras", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você celebra conquistas da equipe?",
    options: [
      { text: "Reconheço cada pessoa individualmente", type: "A" },
      { text: "Mostro como isso nos aproxima da visão maior", type: "B" },
      { text: "Analiso os resultados e planejo próximos passos", type: "C" },
      { text: "Comemoro rápido e já foco no próximo objetivo", type: "D" },
    ],
  },
  {
    id: 12,
    question: "O que você mais valoriza em um liderado?",
    options: [
      { text: "Colaboração e espírito de equipe", type: "A" },
      { text: "Criatividade e iniciativa", type: "B" },
      { text: "Competência técnica e confiabilidade", type: "C" },
      { text: "Obediência e execução rápida", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Líder Servidor",
    emoji: "🤝",
    description: "Você é um líder servidor! Coloca as necessidades da equipe em primeiro lugar, cria ambiente acolhedor e desenvolve pessoas. Seu time te admira e confia em você.",
    traits: ["Empático", "Colaborativo", "Apoiador", "Humilde"],
    strengths: ["Alta lealdade da equipe", "Ambiente positivo", "Desenvolvimento de pessoas", "Baixa rotatividade"],
    weaknesses: ["Pode ser lento em decisões", "Dificuldade com funcionários de baixo desempenho"],
    tips: ["Mantenha o equilíbrio entre apoio e resultados", "Não negligencie suas próprias necessidades", "Saiba ser firme quando necessário"],
  },
  B: {
    type: "B",
    title: "Líder Transformacional",
    emoji: "🚀",
    description: "Você é um líder transformacional! Inspira pessoas com visões grandiosas e motiva mudanças. Sua equipe se sente parte de algo maior e dá o melhor de si.",
    traits: ["Inspirador", "Visionário", "Carismático", "Inovador"],
    strengths: ["Alta motivação da equipe", "Inovação constante", "Mudanças positivas", "Engajamento profundo"],
    weaknesses: ["Pode ser irrealista às vezes", "Detalhes operacionais podem ser negligenciados"],
    tips: ["Equilibre visão com execução prática", "Nem todos se motivam por grandes visões", "Celebre pequenas vitórias também"],
  },
  C: {
    type: "C",
    title: "Líder Analítico",
    emoji: "📊",
    description: "Você é um líder analítico! Toma decisões baseadas em dados e fatos, estabelece processos claros e busca eficiência. Sua equipe sabe exatamente o que esperar.",
    traits: ["Lógico", "Organizado", "Objetivo", "Sistemático"],
    strengths: ["Decisões bem fundamentadas", "Processos eficientes", "Clareza de expectativas", "Resultados mensuráveis"],
    weaknesses: ["Pode parecer frio ou distante", "Pode ignorar fatores emocionais"],
    tips: ["Desenvolva mais conexão emocional", "Nem tudo pode ser medido", "Valorize intuição também"],
  },
  D: {
    type: "D",
    title: "Líder Diretivo",
    emoji: "⚡",
    description: "Você é um líder diretivo! Toma decisões rápidas, dá ordens claras e espera execução imediata. Funciona bem em crises, mas pode sufocar autonomia.",
    traits: ["Decisivo", "Autoritário", "Rápido", "Controlador"],
    strengths: ["Eficiente em crises", "Decisões rápidas", "Clareza de comando"],
    weaknesses: ["Pode desmotivar equipe", "Baixa inovação", "Dependência do líder", "Alta rotatividade possível"],
    tips: ["Desenvolva mais escuta", "Delegue e confie mais", "Considere que outros podem ter boas ideias"],
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
