// Sua Habilidade de Delegação
// Descubra como você delega tarefas no trabalho!

export const questions = [
  {
    id: 1,
    question: "Quando tem uma tarefa que poderia delegar, você:",
    options: [
      { text: "Delego facilmente e confio no resultado", type: "A" },
      { text: "Delego com instruções claras e acompanhamento", type: "B" },
      { text: "Prefiro fazer eu mesmo, é mais rápido", type: "C" },
      { text: "Delegar me dá muita ansiedade", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você se sente quando alguém faz algo diferente do seu jeito?",
    options: [
      { text: "Normal, há várias formas de fazer bem", type: "A" },
      { text: "Avalio se o resultado está bom", type: "B" },
      { text: "Me incomoda, deveria ser do meu jeito", type: "C" },
      { text: "Refaço do meu jeito depois", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando delega algo importante, você:",
    options: [
      { text: "Confio e só verifico no final", type: "A" },
      { text: "Faço check-ins periódicos sem microgerenciar", type: "B" },
      { text: "Acompanho de perto cada etapa", type: "C" },
      { text: "Fico tão ansioso que prefiro fazer eu mesmo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que você pensa sobre delegar?",
    options: [
      { text: "Essencial para multiplicar resultados", type: "A" },
      { text: "Importante para desenvolver a equipe", type: "B" },
      { text: "Arriscado, podem fazer errado", type: "C" },
      { text: "Se quer bem feito, faça você mesmo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quando a pessoa entrega diferente do esperado, você:",
    options: [
      { text: "Avalio se está bom o suficiente e aceito", type: "A" },
      { text: "Dou feedback construtivo para próxima vez", type: "B" },
      { text: "Fico frustrado e corrijo tudo", type: "C" },
      { text: "Nunca mais delego para essa pessoa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você delega tarefas para desenvolver pessoas?",
    options: [
      { text: "Sim, sempre com essa intenção", type: "A" },
      { text: "Às vezes, quando faz sentido", type: "B" },
      { text: "Não penso nisso ao delegar", type: "C" },
      { text: "Não delego o suficiente para desenvolver", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você escolhe o que delegar?",
    options: [
      { text: "Tudo que não exige minha expertise única", type: "A" },
      { text: "Tarefas que outros podem fazer bem", type: "B" },
      { text: "Só o que não é muito importante", type: "C" },
      { text: "Quase nada, faço a maioria eu mesmo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual sua principal barreira para delegar?",
    options: [
      { text: "Nenhuma grande barreira", type: "A" },
      { text: "Tempo para explicar bem", type: "B" },
      { text: "Medo de não ficar como quero", type: "C" },
      { text: "Não confio que façam bem", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quando você está sobrecarregado:",
    options: [
      { text: "Delego rapidamente para desafogar", type: "A" },
      { text: "Avalio o que pode ser delegado", type: "B" },
      { text: "Tento dar conta de tudo sozinho", type: "C" },
      { text: "Sofro mas não consigo delegar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como sua equipe/colegas veem sua delegação?",
    options: [
      { text: "Delego bem e desenvolvo pessoas", type: "A" },
      { text: "Delego adequadamente", type: "B" },
      { text: "Centralizo demais", type: "C" },
      { text: "Não delego quase nada", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você já recebeu feedback de que centraliza demais?",
    options: [
      { text: "Não, sou conhecido por delegar bem", type: "A" },
      { text: "Raramente, trabalho nisso", type: "B" },
      { text: "Sim, algumas vezes", type: "C" },
      { text: "Frequentemente, é um problema", type: "D" },
    ],
  },
  {
    id: 12,
    question: "O que acontece quando você tira férias?",
    options: [
      { text: "Tudo funciona normalmente sem mim", type: "A" },
      { text: "Deixo tudo organizado e funciona bem", type: "B" },
      { text: "Algumas coisas ficam paradas me esperando", type: "C" },
      { text: "Tudo para até eu voltar", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Delegador Nato",
    emoji: "🎯",
    description: "Você delega com maestria! Confia em outros, comunica bem e foca no que só você pode fazer. Isso multiplica sua capacidade e desenvolve pessoas.",
    traits: ["Confiante", "Multiplicador", "Estratégico", "Desenvolvedor"],
    strengths: ["Multiplica resultados", "Desenvolve equipe", "Foco estratégico", "Não é gargalo"],
    weaknesses: ["Pode delegar demais", "Pode parecer distante"],
    tips: ["Continue assim!", "Equilibre delegação com envolvimento", "Mantenha visibilidade das entregas"],
  },
  B: {
    type: "B",
    title: "Delegador Consciente",
    emoji: "✅",
    description: "Você delega de forma equilibrada! Sabe quando e o que delegar, com acompanhamento adequado. Tem espaço para confiar ainda mais.",
    traits: ["Equilibrado", "Organizado", "Acompanhador", "Consciente"],
    strengths: ["Delegação estruturada", "Acompanhamento saudável", "Desenvolvimento da equipe"],
    weaknesses: ["Pode acompanhar demais", "Ainda centraliza algumas coisas"],
    tips: ["Experimente confiar mais", "Reduza check-ins gradualmente", "Delege também o como, não só o quê"],
  },
  C: {
    type: "C",
    title: "Centralizador",
    emoji: "🔒",
    description: "Você centraliza demais! Prefere fazer você mesmo a delegar. Isso limita sua escala, sobrecarrega você e não desenvolve outros.",
    traits: ["Centralizador", "Controlador", "Sobrecarregado", "Perfeccionista"],
    strengths: ["Qualidade das suas entregas", "Conhecimento profundo"],
    weaknesses: ["Gargalo", "Não desenvolve equipe", "Sobrecarga", "Não escala"],
    tips: ["Você não escala! Delegação é essencial", "Aceite que outros farão diferente", "Comece delegando coisas menores"],
  },
  D: {
    type: "D",
    title: "Incapaz de Delegar",
    emoji: "⛓️",
    description: "Você não consegue delegar! Isso é um problema sério. Você está sobrecarregado, é gargalo e não desenvolve ninguém. Sua carreira sofre com isso.",
    traits: ["Incapaz de delegar", "Gargalo total", "Controlador extremo", "Sobrecarregado"],
    strengths: ["Talvez conheça tudo em detalhe"],
    weaknesses: ["Gargalo crítico", "Burnout garantido", "Equipe não se desenvolve", "Carreira limitada"],
    tips: ["URGENTE: Isso precisa mudar!", "Busque ajuda profissional se necessário", "Comece delegando uma coisa hoje", "Sua saúde e carreira dependem disso"],
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
