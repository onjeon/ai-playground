// Seu Estilo de Trabalho em Equipe
// Descubra como você se comporta e contribui em um time!

export const questions = [
  {
    id: 1,
    question: "Em um projeto de grupo, qual papel você naturalmente assume?",
    options: [
      { text: "Organizo e coordeno as tarefas", type: "A" },
      { text: "Gero ideias e soluções criativas", type: "B" },
      { text: "Executo as tarefas com dedicação", type: "C" },
      { text: "Mantenho a harmonia entre todos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando há um desacordo na equipe, você:",
    options: [
      { text: "Tomo a frente e proponho uma solução", type: "A" },
      { text: "Sugiro alternativas diferentes", type: "B" },
      { text: "Sigo a decisão da maioria", type: "C" },
      { text: "Busco entender todos os lados", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que você mais valoriza em um ambiente de trabalho?",
    options: [
      { text: "Eficiência e resultados claros", type: "A" },
      { text: "Liberdade para inovar", type: "B" },
      { text: "Estabilidade e clareza nas funções", type: "C" },
      { text: "Bom relacionamento com colegas", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você reage quando a equipe está atrasada?",
    options: [
      { text: "Reorganizo as prioridades e prazos", type: "A" },
      { text: "Proponho formas diferentes de trabalhar", type: "B" },
      { text: "Faço horas extras para ajudar", type: "C" },
      { text: "Converso com todos para entender o problema", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual é sua maior contribuição para um time?",
    options: [
      { text: "Manter todos focados no objetivo", type: "A" },
      { text: "Trazer perspectivas inovadoras", type: "B" },
      { text: "Garantir que as tarefas sejam bem feitas", type: "C" },
      { text: "Criar um ambiente agradável", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você prefere receber tarefas?",
    options: [
      { text: "Com autonomia para definir como fazer", type: "A" },
      { text: "Com espaço para propor melhorias", type: "B" },
      { text: "Com instruções claras e detalhadas", type: "C" },
      { text: "Através de conversas e alinhamento", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Em brainstorms, você costuma:",
    options: [
      { text: "Filtrar ideias e definir as melhores", type: "A" },
      { text: "Propor ideias fora da caixa", type: "B" },
      { text: "Anotar e organizar as sugestões", type: "C" },
      { text: "Incentivar a participação de todos", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que mais te frustra trabalhando em equipe?",
    options: [
      { text: "Falta de foco e organização", type: "A" },
      { text: "Resistência a novas ideias", type: "B" },
      { text: "Mudanças constantes de direção", type: "C" },
      { text: "Conflitos e clima pesado", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quando um colega precisa de ajuda, você:",
    options: [
      { text: "Ajudo se não comprometer minhas entregas", type: "A" },
      { text: "Sugiro formas diferentes de resolver", type: "B" },
      { text: "Paro tudo e ajudo imediatamente", type: "C" },
      { text: "Ofereço apoio emocional primeiro", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você lida com críticas ao trabalho da equipe?",
    options: [
      { text: "Analiso e crio plano de melhoria", type: "A" },
      { text: "Vejo como oportunidade de inovar", type: "B" },
      { text: "Aceito e trabalho para corrigir", type: "C" },
      { text: "Defendo a equipe e busco entender", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Em uma celebração de equipe, você:",
    options: [
      { text: "Aproveito para planejar próximos passos", type: "A" },
      { text: "Proponho atividades diferentes", type: "B" },
      { text: "Participo do que for organizado", type: "C" },
      { text: "Cuido para que todos se divirtam", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase melhor te define em equipe?",
    options: [
      { text: "Alguém precisa manter o barco no rumo", type: "A" },
      { text: "Sempre há uma forma melhor de fazer", type: "B" },
      { text: "Conte comigo para o que precisar", type: "C" },
      { text: "Juntos vamos mais longe", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Coordenador",
    emoji: "📋",
    description: "Você é o pilar organizacional da equipe! Mantém todos focados, organiza processos e garante que os objetivos sejam alcançados. Sua liderança natural mantém o time no caminho certo.",
    traits: ["Organizado", "Focado", "Líder", "Estratégico"],
    strengths: ["Gestão de projetos", "Visão do todo", "Tomada de decisão", "Foco em resultados"],
    weaknesses: ["Pode ser controlador", "Dificuldade em delegar", "Impaciente com processos lentos"],
    tips: ["Confie mais nos colegas", "Aceite que há várias formas de fazer as coisas", "Relaxe um pouco o controle"],
  },
  B: {
    type: "B",
    title: "O Inovador",
    emoji: "💡",
    description: "Você é a mente criativa da equipe! Sempre trazendo ideias novas e perspectivas diferentes. Sua capacidade de pensar fora da caixa é essencial para a inovação do time.",
    traits: ["Criativo", "Visionário", "Curioso", "Original"],
    strengths: ["Geração de ideias", "Resolução criativa de problemas", "Visão de futuro", "Adaptabilidade"],
    weaknesses: ["Pode se entediar com rotina", "Ideias demais, execução de menos", "Impaciente com detalhes"],
    tips: ["Desenvolva suas ideias até o fim", "Valorize também a execução", "Aceite feedback das suas ideias"],
  },
  C: {
    type: "C",
    title: "O Executor",
    emoji: "⚙️",
    description: "Você é a força de trabalho confiável da equipe! Quando algo precisa ser feito, você entrega. Sua dedicação e comprometimento são fundamentais para transformar planos em realidade.",
    traits: ["Dedicado", "Confiável", "Detalhista", "Perseverante"],
    strengths: ["Entrega consistente", "Atenção aos detalhes", "Comprometimento", "Qualidade no trabalho"],
    weaknesses: ["Pode ter dificuldade em dizer não", "Resistência a mudanças", "Pouco protagonismo"],
    tips: ["Expresse mais suas opiniões", "Proponha melhorias", "Estabeleça limites saudáveis"],
  },
  D: {
    type: "D",
    title: "O Harmonizador",
    emoji: "🤗",
    description: "Você é o coração da equipe! Cuida do bem-estar de todos, resolve conflitos e cria um ambiente positivo. Sua inteligência emocional é essencial para a coesão do grupo.",
    traits: ["Empático", "Comunicativo", "Pacificador", "Acolhedor"],
    strengths: ["Gestão de conflitos", "Comunicação", "Inteligência emocional", "Construção de relacionamentos"],
    weaknesses: ["Pode evitar confrontos necessários", "Dificuldade em dar feedback duro", "Muito foco nas pessoas, pouco nos resultados"],
    tips: ["Seja mais assertivo quando necessário", "Não evite conflitos produtivos", "Equilibre pessoas e resultados"],
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
