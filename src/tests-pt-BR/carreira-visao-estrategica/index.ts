// Sua Visão Estratégica
// Descubra como você pensa estrategicamente no trabalho!

export const questions = [
  {
    id: 1,
    question: "Você consegue ver o quadro geral além das tarefas do dia a dia?",
    options: [
      { text: "Sempre, é natural para mim", type: "A" },
      { text: "Frequentemente, busco essa visão", type: "B" },
      { text: "Às vezes, quando paro para pensar", type: "C" },
      { text: "Raramente, foco no operacional", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você pensa em como suas decisões afetam o longo prazo?",
    options: [
      { text: "Sempre, é meu foco principal", type: "A" },
      { text: "Frequentemente, considero impactos futuros", type: "B" },
      { text: "Às vezes, quando lembro", type: "C" },
      { text: "Foco no curto prazo, depois vejo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você entende como sua área se conecta com a estratégia da empresa?",
    options: [
      { text: "Perfeitamente, alinho tudo à estratégia", type: "A" },
      { text: "Bem, tenho boa visão da conexão", type: "B" },
      { text: "Mais ou menos, sei o básico", type: "C" },
      { text: "Não muito, foco no meu trabalho", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você antecipa tendências e mudanças no mercado?",
    options: [
      { text: "Sim, estou sempre de olho", type: "A" },
      { text: "Frequentemente, me mantenho informado", type: "B" },
      { text: "Às vezes, quando é muito óbvio", type: "C" },
      { text: "Não penso muito nisso", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você consegue identificar oportunidades antes dos outros?",
    options: [
      { text: "Frequentemente, é uma força minha", type: "A" },
      { text: "Às vezes, quando estou atento", type: "B" },
      { text: "Raramente, outros percebem antes", type: "C" },
      { text: "Não, só vejo quando é óbvio", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você pensa em cenários e possibilidades futuras?",
    options: [
      { text: "Sempre, planejo para diferentes cenários", type: "A" },
      { text: "Frequentemente, considero alternativas", type: "B" },
      { text: "Às vezes, quando forçado", type: "C" },
      { text: "Não, lido com o que aparecer", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você consegue priorizar estrategicamente?",
    options: [
      { text: "Sim, foco no que traz mais impacto", type: "A" },
      { text: "Na maioria das vezes sim", type: "B" },
      { text: "Às vezes priorizo o urgente não importante", type: "C" },
      { text: "Faço o que aparece na frente", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você entende os trade-offs das decisões?",
    options: [
      { text: "Sempre analiso o que ganhamos e perdemos", type: "A" },
      { text: "Frequentemente considero", type: "B" },
      { text: "Às vezes penso nisso", type: "C" },
      { text: "Não penso em trade-offs", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você acompanha competidores e mercado?",
    options: [
      { text: "Constantemente, é essencial", type: "A" },
      { text: "Regularmente, me mantenho informado", type: "B" },
      { text: "Às vezes, quando aparece algo", type: "C" },
      { text: "Não é minha área", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você consegue simplificar complexidade em direção clara?",
    options: [
      { text: "Sim, é uma das minhas forças", type: "A" },
      { text: "Frequentemente consigo", type: "B" },
      { text: "Tenho dificuldade com isso", type: "C" },
      { text: "Complexidade me confunde", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você pensa em como construir vantagens competitivas?",
    options: [
      { text: "Constantemente, é meu foco", type: "A" },
      { text: "Frequentemente, quando relevante", type: "B" },
      { text: "Às vezes, superficialmente", type: "C" },
      { text: "Não é algo que penso", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como os outros descreveriam sua visão estratégica?",
    options: [
      { text: "Altamente estratégico e visionário", type: "A" },
      { text: "Bom pensador estratégico", type: "B" },
      { text: "Mais operacional que estratégico", type: "C" },
      { text: "Focado só no dia a dia", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Estrategista Nato",
    emoji: "🎯",
    description: "Você tem visão estratégica excepcional! Vê o quadro geral, antecipa tendências e pensa no longo prazo. Isso te posiciona para liderança e posições estratégicas.",
    traits: ["Estratégico", "Visionário", "Antecipador", "Big picture"],
    strengths: ["Visão de longo prazo", "Antecipa oportunidades", "Priorização estratégica", "Direção clara"],
    weaknesses: ["Pode perder detalhes operacionais", "Pode parecer desconectado do dia a dia"],
    tips: ["Continue assim!", "Equilibre estratégia com execução", "Mentore outros em pensamento estratégico"],
  },
  B: {
    type: "B",
    title: "Bom Pensador Estratégico",
    emoji: "📈",
    description: "Você tem boa visão estratégica! Consegue ver além do operacional e pensar no futuro. Está bem posicionado para crescimento.",
    traits: ["Estratégico", "Equilibrado", "Visionário", "Consciente"],
    strengths: ["Boa visão geral", "Pensa no futuro", "Conecta operacional e estratégico"],
    weaknesses: ["Pode desenvolver ainda mais"],
    tips: ["Continue desenvolvendo", "Busque mais exposição a decisões estratégicas", "Estude estratégia e negócios"],
  },
  C: {
    type: "C",
    title: "Visão Estratégica em Desenvolvimento",
    emoji: "🌱",
    description: "Sua visão estratégica precisa de desenvolvimento. Você foca mais no operacional e perde o quadro geral. Isso pode limitar seu crescimento para posições seniores.",
    traits: ["Operacional", "Tático", "Curto prazo", "Potencial"],
    strengths: ["Bom em execução"],
    weaknesses: ["Falta visão de longo prazo", "Não antecipa mudanças", "Limitado para posições seniores"],
    tips: ["Desenvolva pensamento estratégico!", "Leia sobre estratégia e negócios", "Busque entender o porquê das coisas"],
  },
  D: {
    type: "D",
    title: "Foco Operacional",
    emoji: "⚙️",
    description: "Você tem foco quase totalmente operacional, sem visão estratégica. Isso limita severamente seu crescimento para posições de liderança.",
    traits: ["Operacional", "Dia a dia", "Sem visão ampla", "Limitado"],
    strengths: ["Executa o operacional"],
    weaknesses: ["Sem visão estratégica", "Não cresce para posições seniores", "Não antecipa nada", "Decisões míopes"],
    tips: ["IMPORTANTE: Desenvolva visão estratégica!", "Ela é essencial para cargos seniores", "Comece a pensar no porquê e no longo prazo"],
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
