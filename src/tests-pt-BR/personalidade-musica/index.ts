// Sua personalidade Musical
// Descubra sua personalidade musical!

export const questions = [
  {
    id: 1,
    question: "Qual sua relação com música?",
    options: [
      { text: "Sempre ouvindo, o dia todo", type: "A" },
      { text: "Em momentos específicos", type: "B" },
      { text: "Só ao vivo, shows e festas", type: "C" },
      { text: "Prefiro silêncio", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você lida com os desafios da vida?",
    options: [
      { text: "Enfrento de frente, sem medo", type: "A" },
      { text: "Planejo cuidadosamente antes de agir", type: "B" },
      { text: "Deixo as coisas fluírem naturalmente", type: "C" },
      { text: "Prefiro evitar conflitos", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que é mais importante para você?",
    options: [
      { text: "Sucesso e conquistas", type: "A" },
      { text: "Relacionamentos e conexões", type: "B" },
      { text: "Paz de espírito e felicidade", type: "C" },
      { text: "Liberdade e independência", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você toma decisões?",
    options: [
      { text: "Rápido e decisivo", type: "A" },
      { text: "Com calma e planejamento", type: "B" },
      { text: "Baseado nos sentimentos", type: "C" },
      { text: "Improviso na hora", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Em situações sociais, qual é o seu papel?",
    options: [
      { text: "O líder e organizador", type: "A" },
      { text: "O mediador e pacificador", type: "B" },
      { text: "O observador quieto", type: "C" },
      { text: "Sigo o fluxo do grupo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual é sua abordagem para resolver problemas?",
    options: [
      { text: "Resolver imediatamente", type: "A" },
      { text: "Analisar antes de agir", type: "B" },
      { text: "Deixar para depois", type: "C" },
      { text: "Deixar o tempo resolver", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como é seu estilo de comunicação?",
    options: [
      { text: "Direto e objetivo", type: "A" },
      { text: "Diplomático e cuidadoso", type: "B" },
      { text: "Quieto e reservado", type: "C" },
      { text: "Casual e espontâneo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você lida com o estresse?",
    options: [
      { text: "Ação imediata para resolver", type: "A" },
      { text: "Organização e planejamento", type: "B" },
      { text: "Relaxamento e autocuidado", type: "C" },
      { text: "Ignoro e sigo em frente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você se vê daqui a 5 anos?",
    options: [
      { text: "No topo, bem-sucedido", type: "A" },
      { text: "Estável e seguro", type: "B" },
      { text: "Feliz e realizado", type: "C" },
      { text: "Livre e aventureiro", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você expressa suas emoções?",
    options: [
      { text: "Abertamente e sem filtro", type: "A" },
      { text: "Com palavras escolhidas", type: "B" },
      { text: "Através de ações", type: "C" },
      { text: "Guardo para mim mesmo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual é seu fim de semana ideal?",
    options: [
      { text: "Atividades produtivas e aventuras", type: "A" },
      { text: "Tempo de qualidade com a família", type: "B" },
      { text: "Descanso e relaxamento", type: "C" },
      { text: "Sem planos, deixo rolar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual é o seu lema de vida?",
    options: [
      { text: "Vai com tudo ou vai pra casa!", type: "A" },
      { text: "Devagar se vai longe", type: "B" },
      { text: "Aproveite a jornada", type: "C" },
      { text: "O que será, será", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Melômano",
    emoji: "🔥",
    description: "Você é corajoso, decisivo e orientado para a ação! Líder nato que não tem medo de agir. Tem uma forte motivação na vida e é focado em objetivos. Apaixonado por tudo que faz!",
    traits: ["Corajoso", "Líder", "Decisivo", "Ação"],
    strengths: ["Liderança natural", "Tomada de decisão rápida", "Realiza as coisas"],
    weaknesses: ["Às vezes muito agressivo", "Pode sobrecarregar os outros"],
    tips: ["Equilibre ação com reflexão", "Ouça mais os outros"],
  },
  B: {
    type: "B",
    title: "Ouvinte Casual",
    emoji: "⚖️",
    description: "Você é organizado, pensativo e equilibrado! Sua abordagem na vida é cuidadosa e considerada. Pensador estratégico e ótimo planejador. Confiável e consistente!",
    traits: ["Organizado", "Pensativo", "Equilibrado", "Estratégico"],
    strengths: ["Excelente planejador", "Confiável e consistente", "Bom em análise"],
    weaknesses: ["Às vezes pensa demais", "Muito cauteloso"],
    tips: ["Confie mais nos instintos", "Assuma riscos calculados"],
  },
  C: {
    type: "C",
    title: "Fã de Show",
    emoji: "😌",
    description: "Você é tranquilo, pacífico e contente! Sua prioridade é a paz de espírito e felicidade. Sabe aproveitar as coisas simples. Descontraído e sem estresse!",
    traits: ["Tranquilo", "Pacífico", "Contente", "Descontraído"],
    strengths: ["Mentalidade sem estresse", "Aprecia alegrias simples", "Equilíbrio emocional"],
    weaknesses: ["Às vezes falta ambição", "Muito passivo"],
    tips: ["Defina algumas metas", "Desafie-se às vezes"],
  },
  D: {
    type: "D",
    title: "Silencioso",
    emoji: "🌊",
    description: "Você é flexível, adaptável e espontâneo! Vai com o fluxo e não se estressa com planos. Independente e confortável com incertezas. Espírito livre e aventureiro!",
    traits: ["Flexível", "Adaptável", "Espontâneo", "Independente"],
    strengths: ["Altamente adaptável", "Baixo nível de estresse", "Aberto a possibilidades"],
    weaknesses: ["Às vezes sem direção", "Inconsistente"],
    tips: ["Crie alguma estrutura", "Cumpra seus compromissos"],
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
