// Seu Estilo de Planejamento de Carreira
// Descubra como você planeja sua trajetória profissional!

export const questions = [
  {
    id: 1,
    question: "Você tem um plano de carreira definido?",
    options: [
      { text: "Sim, detalhado com metas de curto, médio e longo prazo", type: "A" },
      { text: "Tenho uma direção geral, mas flexível", type: "B" },
      { text: "Mais ou menos, vou ajustando conforme surge", type: "C" },
      { text: "Não, deixo a vida me levar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Com que frequência você revisa seus objetivos de carreira?",
    options: [
      { text: "Regularmente, pelo menos a cada trimestre", type: "A" },
      { text: "Algumas vezes por ano", type: "B" },
      { text: "Quando algo significativo acontece", type: "C" },
      { text: "Nunca penso nisso", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você investe em desenvolvimento profissional?",
    options: [
      { text: "Constantemente, tenho orçamento e tempo reservados", type: "A" },
      { text: "Regularmente, busco cursos e aprendizado", type: "B" },
      { text: "Às vezes, quando aparece algo interessante", type: "C" },
      { text: "Raramente ou nunca", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você toma decisões sobre mudanças de emprego?",
    options: [
      { text: "Estrategicamente, alinhado aos meus objetivos", type: "A" },
      { text: "Avalio se faz sentido para minha carreira", type: "B" },
      { text: "Baseado em oportunidade e feeling", type: "C" },
      { text: "Impulso ou necessidade imediata", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você tem mentores ou busca orientação de carreira?",
    options: [
      { text: "Sim, cultivo relacionamentos de mentoria ativamente", type: "A" },
      { text: "Tenho algumas pessoas que me orientam", type: "B" },
      { text: "Às vezes peço conselho quando preciso", type: "C" },
      { text: "Não, me viro sozinho", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você sabe onde quer estar profissionalmente em 5 anos?",
    options: [
      { text: "Sim, tenho uma visão clara", type: "A" },
      { text: "Tenho uma ideia geral", type: "B" },
      { text: "Mais ou menos, depende de muita coisa", type: "C" },
      { text: "Não faço ideia", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você identifica oportunidades de carreira?",
    options: [
      { text: "Proativamente, estou sempre atento e networking", type: "A" },
      { text: "Mantenho olhos abertos e relacionamentos", type: "B" },
      { text: "Espero aparecerem oportunidades", type: "C" },
      { text: "Não busco, espero ser encontrado", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você conhece suas lacunas de competência para crescer?",
    options: [
      { text: "Sim, e tenho plano para desenvolvê-las", type: "A" },
      { text: "Tenho consciência de algumas", type: "B" },
      { text: "Mais ou menos, não penso muito nisso", type: "C" },
      { text: "Não sei quais são", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Seu currículo e LinkedIn estão atualizados?",
    options: [
      { text: "Sempre, é prioridade", type: "A" },
      { text: "Relativamente atualizados", type: "B" },
      { text: "Desatualizados, atualizo quando preciso", type: "C" },
      { text: "Muito desatualizados ou inexistentes", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você tem reserva financeira para transições de carreira?",
    options: [
      { text: "Sim, planejada para dar liberdade de escolha", type: "A" },
      { text: "Tenho alguma reserva", type: "B" },
      { text: "Pouca ou nenhuma reserva", type: "C" },
      { text: "Vivo no limite, sem margem", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você acompanha tendências do seu mercado?",
    options: [
      { text: "Constantemente, é essencial", type: "A" },
      { text: "Regularmente, me mantenho informado", type: "B" },
      { text: "Às vezes, quando aparece algo", type: "C" },
      { text: "Não, foco no meu trabalho atual", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Se perdesse o emprego amanhã, você estaria preparado?",
    options: [
      { text: "Sim, totalmente, já tenho plano B", type: "A" },
      { text: "Razoavelmente, conseguiria me recolocar", type: "B" },
      { text: "Ficaria em apuros, mas sobreviveria", type: "C" },
      { text: "Seria catastrófico, não estou preparado", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Estrategista de Carreira",
    emoji: "🎯",
    description: "Você planeja sua carreira como um profissional! Tem visão clara, investe em desenvolvimento e está sempre preparado. Isso maximiza suas chances de sucesso.",
    traits: ["Estratégico", "Preparado", "Visionário", "Proativo"],
    strengths: ["Carreira sob controle", "Preparado para oportunidades", "Desenvolvimento contínuo", "Visão de longo prazo"],
    weaknesses: ["Pode ser inflexível aos planos", "Pode perder oportunidades inesperadas"],
    tips: ["Mantenha alguma flexibilidade", "Continue assim!", "Ajude outros a planejar"],
  },
  B: {
    type: "B",
    title: "Planejador Consciente",
    emoji: "📈",
    description: "Você tem bom nível de planejamento! Pensa na carreira mas com flexibilidade. Está no caminho certo, pode ser ainda mais intencional.",
    traits: ["Consciente", "Flexível", "Equilibrado", "Atento"],
    strengths: ["Direção clara", "Adaptável", "Investe em si"],
    weaknesses: ["Pode ser mais estratégico", "Às vezes reativo"],
    tips: ["Formalize mais seus objetivos", "Invista mais em networking", "Tenha plano B mais sólido"],
  },
  C: {
    type: "C",
    title: "Navegador Reativo",
    emoji: "🌊",
    description: "Você navega sua carreira de forma reativa. Sem plano claro, deixa as coisas acontecerem. Isso limita seu potencial e te deixa vulnerável.",
    traits: ["Reativo", "Sem plano", "Flexível demais", "Vulnerável"],
    strengths: ["Adaptável", "Sem stress de planejamento"],
    weaknesses: ["Carreira ao acaso", "Pouco controle", "Oportunidades perdidas", "Vulnerável a crises"],
    tips: ["Comece a planejar!", "Defina ao menos direção geral", "Invista em você", "Não deixe sua carreira ao acaso"],
  },
  D: {
    type: "D",
    title: "Sem Plano",
    emoji: "❓",
    description: "Você não planeja sua carreira em nada! Vive o presente sem pensar no futuro profissional. Isso é arriscado e limita severamente seu potencial.",
    traits: ["Sem direção", "Despreparado", "Vulnerável", "Presente demais"],
    strengths: ["Vive o momento (nem sempre bom)"],
    weaknesses: ["Carreira totalmente ao acaso", "Vulnerável a qualquer crise", "Potencial desperdiçado", "Sem desenvolvimento"],
    tips: ["URGENTE: Comece a pensar na carreira!", "Sua vida profissional merece planejamento", "Busque mentoria ou coaching", "Sua empregabilidade está em risco"],
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
