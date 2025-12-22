// Startup ou Corporação?
// Descubra em qual ambiente de trabalho você se encaixa melhor!

export const questions = [
  {
    id: 1,
    question: "Como você se sente em relação à estabilidade no trabalho?",
    options: [
      { text: "Preciso de segurança e previsibilidade", type: "A" },
      { text: "Gosto de um equilíbrio entre estabilidade e desafios", type: "B" },
      { text: "Aceito riscos em troca de oportunidades", type: "C" },
      { text: "Adoro a adrenalina da incerteza", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual ambiente de trabalho te atrai mais?",
    options: [
      { text: "Escritório estruturado com processos definidos", type: "A" },
      { text: "Ambiente profissional mas com flexibilidade", type: "B" },
      { text: "Espaço colaborativo e informal", type: "C" },
      { text: "Qualquer lugar, desde que tenha internet", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você prefere crescer na carreira?",
    options: [
      { text: "Plano de carreira claro e progressivo", type: "A" },
      { text: "Oportunidades de desenvolvimento com alguma estrutura", type: "B" },
      { text: "Crescimento rápido baseado em performance", type: "C" },
      { text: "Criar meu próprio caminho e oportunidades", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual sua relação com hierarquia?",
    options: [
      { text: "Respeito e valorizo estruturas hierárquicas", type: "A" },
      { text: "Aceito hierarquia com acesso a decisores", type: "B" },
      { text: "Prefiro estruturas mais horizontais", type: "C" },
      { text: "Hierarquia? Todos devem ser iguais", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que te motiva mais no trabalho?",
    options: [
      { text: "Benefícios, salário fixo e segurança", type: "A" },
      { text: "Equilíbrio entre remuneração e propósito", type: "B" },
      { text: "Impacto e possibilidade de crescimento", type: "C" },
      { text: "Liberdade e participação nos resultados", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você lida com mudanças de direção no trabalho?",
    options: [
      { text: "Prefiro estabilidade e consistência", type: "A" },
      { text: "Aceito mudanças desde que bem comunicadas", type: "B" },
      { text: "Adapto-me rapidamente a novas direções", type: "C" },
      { text: "Adoro pivotar e experimentar coisas novas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual seu estilo de trabalhar?",
    options: [
      { text: "Focado na minha especialidade definida", type: "A" },
      { text: "Especialista com interesse em outras áreas", type: "B" },
      { text: "Multitarefas e envolvido em várias frentes", type: "C" },
      { text: "Faço de tudo um pouco, o que precisar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você vê o equilíbrio vida-trabalho?",
    options: [
      { text: "Horário fixo e vida pessoal preservada", type: "A" },
      { text: "Flexibilidade com limites saudáveis", type: "B" },
      { text: "Aceito períodos intensos por objetivos", type: "C" },
      { text: "Trabalho e vida se misturam naturalmente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que você pensa sobre trabalhar em algo que pode falhar?",
    options: [
      { text: "Prefiro projetos com chances altas de sucesso", type: "A" },
      { text: "Aceito riscos calculados e bem planejados", type: "B" },
      { text: "Falhar faz parte, o importante é aprender", type: "C" },
      { text: "Risco alto = recompensa alta, topo dentro!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual benefício você mais valoriza?",
    options: [
      { text: "Plano de saúde top e previdência privada", type: "A" },
      { text: "Pacote completo com flexibilidade", type: "B" },
      { text: "Stock options e bônus por performance", type: "C" },
      { text: "Participação societária e liberdade total", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você prefere que decisões sejam tomadas?",
    options: [
      { text: "Por comitês e processos de aprovação", type: "A" },
      { text: "Com consulta mas agilidade razoável", type: "B" },
      { text: "Rápido, mesmo que nem todos concordem", type: "C" },
      { text: "Instantâneo, testar é melhor que planejar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase mais combina com você?",
    options: [
      { text: "Devagar e sempre, construindo solidamente", type: "A" },
      { text: "Evolução constante com bases firmes", type: "B" },
      { text: "Mova rápido e quebre coisas", type: "C" },
      { text: "Vamos mudar o mundo!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Perfil Corporativo",
    emoji: "🏢",
    description: "Você se encaixa perfeitamente em grandes empresas! Valoriza estabilidade, processos estruturados e plano de carreira claro. Empresas consolidadas são seu ambiente ideal.",
    traits: ["Organizado", "Estável", "Metódico", "Tradicional"],
    strengths: ["Consistência", "Foco em especialização", "Respeito a processos", "Visão de longo prazo"],
    weaknesses: ["Pode resistir a mudanças", "Menos adaptável", "Desconforto com incertezas"],
    tips: ["Explore projetos de inovação dentro da empresa", "Mantenha-se atualizado com tendências", "Desenvolva adaptabilidade"],
  },
  B: {
    type: "B",
    title: "Perfil Empresa Média",
    emoji: "🏛️",
    description: "Você se dá bem em empresas médias em crescimento! Busca o equilíbrio entre estrutura e agilidade. Scaleups e empresas em expansão são perfeitas para você.",
    traits: ["Equilibrado", "Adaptável", "Versátil", "Pragmático"],
    strengths: ["Flexibilidade com estrutura", "Bom em transições", "Visão ampla", "Colaborativo"],
    weaknesses: ["Pode ficar em cima do muro", "Indeciso entre estabilidade e risco"],
    tips: ["Defina o que mais valoriza", "Busque empresas em fase de profissionalização", "Seja agente de mudança"],
  },
  C: {
    type: "C",
    title: "Perfil Startup Early Stage",
    emoji: "🚀",
    description: "Você nasceu para startups em crescimento! Gosta de ambientes dinâmicos, crescimento rápido e impacto visível. Startups que já validaram o produto são ideais.",
    traits: ["Dinâmico", "Ambicioso", "Resiliente", "Multitarefa"],
    strengths: ["Adaptabilidade", "Alta energia", "Foco em resultados", "Aprende rápido"],
    weaknesses: ["Pode se frustrar com burocracia", "Impaciente", "Risco de burnout"],
    tips: ["Escolha startups com fundadores experientes", "Negocie equity", "Cuide da sua saúde mental"],
  },
  D: {
    type: "D",
    title: "Perfil Empreendedor",
    emoji: "🔥",
    description: "Você tem alma empreendedora! Quer criar algo do zero, assumir riscos e construir seu próprio caminho. Ser fundador ou early employee de startup é seu destino.",
    traits: ["Visionário", "Arrojado", "Inovador", "Independente"],
    strengths: ["Criação do zero", "Tolerância ao risco", "Liderança", "Paixão"],
    weaknesses: ["Dificuldade com estruturas", "Pode subestimar riscos", "Impaciente com processos"],
    tips: ["Cerque-se de pessoas complementares", "Tenha reserva financeira", "Aprenda a lidar com fracassos"],
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
