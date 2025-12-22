// Seu Estilo de Comunicação Profissional
// Descubra como você se comunica no ambiente de trabalho!

export const questions = [
  {
    id: 1,
    question: "Como você prefere receber informações no trabalho?",
    options: [
      { text: "E-mail detalhado com todos os pontos", type: "A" },
      { text: "Conversa rápida e objetiva", type: "B" },
      { text: "Apresentação visual com gráficos", type: "C" },
      { text: "Discussão em grupo para alinhar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando precisa dar uma notícia difícil, você:",
    options: [
      { text: "Preparo um documento explicando tudo", type: "A" },
      { text: "Vou direto ao ponto, sem rodeios", type: "B" },
      { text: "Uso exemplos e analogias para suavizar", type: "C" },
      { text: "Converso pessoalmente com empatia", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Em reuniões, você costuma:",
    options: [
      { text: "Anotar tudo e enviar resumo depois", type: "A" },
      { text: "Ir direto aos pontos de decisão", type: "B" },
      { text: "Usar quadros e visuais para explicar", type: "C" },
      { text: "Garantir que todos tenham voz", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual seu maior incômodo em comunicação no trabalho?",
    options: [
      { text: "Informações incompletas ou vagas", type: "A" },
      { text: "Enrolação e falta de objetividade", type: "B" },
      { text: "Textos longos sem elementos visuais", type: "C" },
      { text: "Falta de consideração pelo outro", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você apresenta uma ideia nova?",
    options: [
      { text: "Com relatório completo e dados", type: "A" },
      { text: "Em uma frase de impacto", type: "B" },
      { text: "Com protótipo ou apresentação visual", type: "C" },
      { text: "Conversando para construir junto", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando não entende algo, você:",
    options: [
      { text: "Pesquiso antes de perguntar", type: "A" },
      { text: "Peço explicação direta e rápida", type: "B" },
      { text: "Peço para me mostrarem um exemplo", type: "C" },
      { text: "Converso até entender o contexto todo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Seu e-mail ideal de trabalho é:",
    options: [
      { text: "Completo, com contexto e próximos passos", type: "A" },
      { text: "Curto: assunto, pedido, prazo", type: "B" },
      { text: "Com bullet points e destaques visuais", type: "C" },
      { text: "Com tom pessoal e cordial", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você lida com conflitos de comunicação?",
    options: [
      { text: "Documento tudo para esclarecer", type: "A" },
      { text: "Confronto direto para resolver logo", type: "B" },
      { text: "Uso diagramas para mostrar o mal-entendido", type: "C" },
      { text: "Converso para entender o lado do outro", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual ferramenta você mais usa para se comunicar?",
    options: [
      { text: "E-mail e documentos compartilhados", type: "A" },
      { text: "Mensagens rápidas (Slack, WhatsApp)", type: "B" },
      { text: "Apresentações e ferramentas visuais", type: "C" },
      { text: "Videochamadas e reuniões", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você se prepara para uma apresentação?",
    options: [
      { text: "Pesquiso muito e preparo material completo", type: "A" },
      { text: "Defino os pontos-chave e vou direto", type: "B" },
      { text: "Foco nos visuais e no impacto", type: "C" },
      { text: "Ensaio pensando na conexão com a audiência", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que você prioriza em uma mensagem?",
    options: [
      { text: "Precisão e completude", type: "A" },
      { text: "Clareza e brevidade", type: "B" },
      { text: "Impacto visual e memorabilidade", type: "C" },
      { text: "Tom adequado e empatia", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual feedback você mais recebe sobre sua comunicação?",
    options: [
      { text: "Muito detalhado, às vezes demais", type: "A" },
      { text: "Muito direto, pode soar seco", type: "B" },
      { text: "Criativo, mas às vezes falta profundidade", type: "C" },
      { text: "Empático, mas às vezes enrola", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Comunicador Analítico",
    emoji: "📊",
    description: "Você é detalhista e completo na comunicação! Valoriza precisão, contexto e documentação. Suas mensagens são ricas em informação e bem fundamentadas.",
    traits: ["Detalhista", "Preciso", "Documentador", "Completo"],
    strengths: ["Comunicação escrita", "Documentação", "Clareza técnica", "Registro"],
    weaknesses: ["Pode ser muito extenso", "Demora a chegar ao ponto", "Menos eficaz verbalmente"],
    tips: ["Comece com o resumo executivo", "Use bullet points", "Adapte o nível de detalhe ao público"],
  },
  B: {
    type: "B",
    title: "Comunicador Direto",
    emoji: "🎯",
    description: "Você vai direto ao ponto! Valoriza objetividade e eficiência. Suas mensagens são curtas, claras e focadas no que importa.",
    traits: ["Objetivo", "Eficiente", "Assertivo", "Conciso"],
    strengths: ["Clareza", "Rapidez", "Foco", "Decisão"],
    weaknesses: ["Pode parecer frio ou rude", "Falta contexto às vezes", "Menos diplomático"],
    tips: ["Adicione um toque de cordialidade", "Considere o impacto emocional", "Dê mais contexto quando necessário"],
  },
  C: {
    type: "C",
    title: "Comunicador Visual",
    emoji: "🎨",
    description: "Você pensa e comunica visualmente! Adora usar imagens, gráficos e apresentações para transmitir ideias. Suas mensagens são memoráveis e impactantes.",
    traits: ["Visual", "Criativo", "Impactante", "Inovador"],
    strengths: ["Apresentações", "Síntese visual", "Memorabilidade", "Engajamento"],
    weaknesses: ["Pode faltar profundidade", "Dependente de recursos visuais", "Menos eficaz por texto"],
    tips: ["Equilibre visual com conteúdo", "Desenvolva comunicação escrita", "Nem sempre há tempo para criar visuais"],
  },
  D: {
    type: "D",
    title: "Comunicador Relacional",
    emoji: "🤝",
    description: "Você comunica com empatia e conexão! Valoriza o relacionamento e o tom adequado. Suas mensagens consideram sempre o outro lado.",
    traits: ["Empático", "Diplomático", "Colaborativo", "Cuidadoso"],
    strengths: ["Inteligência emocional", "Construção de relacionamentos", "Gestão de conflitos", "Tom adequado"],
    weaknesses: ["Pode demorar demais", "Evita confrontos necessários", "Às vezes indireto"],
    tips: ["Seja mais direto quando necessário", "Não sacrifique clareza por diplomacia", "Equilibre empatia com objetividade"],
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
