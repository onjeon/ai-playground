// Teste de Perfeccionismo
// Descubra seu nível de perfeccionismo!

export const questions = [
  {
    id: 1,
    question: "Quando você termina um trabalho, como se sente?",
    options: [
      { text: "Satisfeito se fiz o meu melhor", type: "A" },
      { text: "Geralmente satisfeito, mas vejo melhorias", type: "B" },
      { text: "Sempre acho que poderia ter sido melhor", type: "C" },
      { text: "Nunca estou satisfeito, sempre há falhas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você lida com erros?",
    options: [
      { text: "Aceito como parte do processo de aprendizado", type: "A" },
      { text: "Fico um pouco frustrado mas sigo em frente", type: "B" },
      { text: "Me culpo muito e penso nisso por dias", type: "C" },
      { text: "Erros são inaceitáveis, me destroem", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você costuma procrastinar por medo de não fazer perfeito?",
    options: [
      { text: "Não, prefiro fazer e ajustar depois", type: "A" },
      { text: "Às vezes adio por insegurança", type: "B" },
      { text: "Frequentemente adio até ter certeza", type: "C" },
      { text: "Sempre procrastino, o medo de falhar paralisa", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quanto tempo você gasta em detalhes pequenos?",
    options: [
      { text: "O necessário, sem exageros", type: "A" },
      { text: "Um pouco mais do que deveria", type: "B" },
      { text: "Muito tempo, me perco nos detalhes", type: "C" },
      { text: "Horas infinitas, nunca está bom o suficiente", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você reage quando outros fazem algo de forma diferente?",
    options: [
      { text: "Aceito que existem várias formas válidas", type: "A" },
      { text: "Prefiro do meu jeito mas aceito", type: "B" },
      { text: "Tenho dificuldade em aceitar outros métodos", type: "C" },
      { text: "Fico irritado se não fizerem do jeito certo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você se compara com os melhores da sua área?",
    options: [
      { text: "Me inspiro neles sem me diminuir", type: "A" },
      { text: "Às vezes me comparo de forma construtiva", type: "B" },
      { text: "Constantemente e me sinto inferior", type: "C" },
      { text: "Sempre, e nunca me sinto à altura", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você define sucesso?",
    options: [
      { text: "Fazer o meu melhor e crescer", type: "A" },
      { text: "Atingir metas importantes para mim", type: "B" },
      { text: "Não cometer erros e ser reconhecido", type: "C" },
      { text: "Ser perfeito em tudo que faço", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você consegue celebrar suas conquistas?",
    options: [
      { text: "Sim, reconheço e comemoro minhas vitórias", type: "A" },
      { text: "Às vezes, mas logo penso no próximo desafio", type: "B" },
      { text: "Dificilmente, sempre foco no que faltou", type: "C" },
      { text: "Nunca, nenhuma conquista parece suficiente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você lida com feedback construtivo?",
    options: [
      { text: "Agradeço e uso para melhorar", type: "A" },
      { text: "Aceito mas fico um pouco incomodado", type: "B" },
      { text: "Me sinto criticado e inadequado", type: "C" },
      { text: "Fico devastado, confirma que não sou bom", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você tem dificuldade em delegar tarefas?",
    options: [
      { text: "Não, confio nos outros e delego bem", type: "A" },
      { text: "Um pouco, mas estou melhorando", type: "B" },
      { text: "Sim, acho que ninguém faz tão bem quanto eu", type: "C" },
      { text: "Impossível, só eu faço do jeito certo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Quanto o medo de falhar afeta suas decisões?",
    options: [
      { text: "Pouco, entendo que falhar faz parte", type: "A" },
      { text: "Às vezes influencia minhas escolhas", type: "B" },
      { text: "Muito, evito riscos por medo de errar", type: "C" },
      { text: "Totalmente, paralisa minhas ações", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Você se cobra muito em relação à aparência/comportamento?",
    options: [
      { text: "Cuido de mim sem obsessão", type: "A" },
      { text: "Me preocupo mais do que deveria", type: "B" },
      { text: "Sou muito crítico com minha imagem", type: "C" },
      { text: "Nunca estou bom o suficiente em nada", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Perfeccionismo Saudável",
    emoji: "✨",
    description: "Você tem padrões elevados mas realistas! Busca excelência sem se destruir no processo. Sabe equilibrar qualidade com praticidade e aceita imperfeições como parte da vida.",
    traits: ["Equilibrado", "Realista", "Autocompassivo", "Flexível"],
    strengths: ["Busca excelência sem sofrimento", "Aceita erros como aprendizado", "Boa autoestima", "Produtividade saudável"],
    weaknesses: ["Pode parecer despreocupado para perfeccionistas", "Às vezes poderia se esforçar mais"],
    tips: ["Continue mantendo esse equilíbrio saudável", "Inspire outros com sua abordagem", "Cultive a autocompaixão"],
  },
  B: {
    type: "B",
    title: "Perfeccionismo Moderado",
    emoji: "⚖️",
    description: "Você tem tendências perfeccionistas mas consegue se controlar na maioria das vezes. Há espaço para desenvolver mais autocompaixão e flexibilidade.",
    traits: ["Dedicado", "Autocrítico moderado", "Esforçado", "Em equilíbrio"],
    strengths: ["Padrões de qualidade", "Consciência das tendências", "Capacidade de adaptação"],
    weaknesses: ["Autocrítica ocasional excessiva", "Dificuldade em relaxar às vezes"],
    tips: ["Pratique celebrar pequenas vitórias", "Estabeleça prazos para perfeccionismo", "Lembre-se que feito é melhor que perfeito"],
  },
  C: {
    type: "C",
    title: "Perfeccionismo Disfuncional",
    emoji: "😰",
    description: "Seu perfeccionismo está prejudicando sua qualidade de vida. A busca por padrões impossíveis causa ansiedade, procrastinação e insatisfação constante.",
    traits: ["Autocrítico severo", "Ansioso", "Procrastinador", "Insatisfeito"],
    strengths: ["Alto padrão de qualidade", "Atenção aos detalhes", "Desejo de excelência"],
    weaknesses: ["Ansiedade constante", "Dificuldade em finalizar tarefas", "Baixa autoestima", "Burnout"],
    tips: ["Pratique a imperfeição intencional", "Defina limites de tempo para tarefas", "Considere terapia cognitivo-comportamental"],
  },
  D: {
    type: "D",
    title: "Perfeccionismo Paralisante",
    emoji: "🚫",
    description: "Seu perfeccionismo é extremo e está sabotando sua vida. O medo de não ser perfeito impede você de agir, criando um ciclo de sofrimento. Ajuda profissional é urgente.",
    traits: ["Paralisado", "Autocrítico extremo", "Ansioso crônico", "Evitativo"],
    strengths: ["Potencial de excelência", "Capacidade de ver detalhes"],
    weaknesses: ["Incapacidade de agir", "Sofrimento constante", "Relacionamentos prejudicados", "Saúde mental em risco"],
    tips: ["Procure um psicólogo urgentemente", "Entenda que perfeição é impossível", "Comece com pequenos passos imperfeitos"],
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
