// Qual Tipo de Brasileiro no Exterior Você É?
// Descubra seu perfil de brasileirinho fora do país!

export const questions = [
  {
    id: 1,
    question: "O que você mais sente falta do Brasil?",
    options: [
      { text: "A comida! Feijão, pão de queijo, tudo", type: "A" },
      { text: "A família e os amigos", type: "B" },
      { text: "O calor humano, o jeitinho brasileiro", type: "C" },
      { text: "Nada, tô bem aqui", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você anda com outros brasileiros lá fora?",
    options: [
      { text: "Só! Minha turma é toda BR", type: "A" },
      { text: "Bastante, mas misturo", type: "B" },
      { text: "Alguns, mas prefiro me integrar", type: "C" },
      { text: "Evito, quero praticar a língua", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você cozinha comida brasileira?",
    options: [
      { text: "Todo dia! Não vivo sem", type: "A" },
      { text: "Frequentemente, mata a saudade", type: "B" },
      { text: "De vez em quando, em ocasiões especiais", type: "C" },
      { text: "Raramente, me adaptei à comida local", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você assiste futebol brasileiro mesmo de longe?",
    options: [
      { text: "Não perco um jogo do meu time!", type: "A" },
      { text: "Os principais, Libertadores e tal", type: "B" },
      { text: "Às vezes, quando dá", type: "C" },
      { text: "Parei de acompanhar, segui em frente", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você reage quando encontra brasileiro na rua?",
    options: [
      { text: "Viro amigo na hora!", type: "A" },
      { text: "Cumprimento, converso um pouco", type: "B" },
      { text: "Um aceno, sigo em frente", type: "C" },
      { text: "Finjo que não vi", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você manda dinheiro pro Brasil?",
    options: [
      { text: "Sempre! Ajudo a família", type: "A" },
      { text: "Regularmente, quando dá", type: "B" },
      { text: "Às vezes, em emergências", type: "C" },
      { text: "Não, cada um cuida do seu", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você planeja voltar pro Brasil?",
    options: [
      { text: "Sim! Tô juntando pra voltar", type: "A" },
      { text: "Talvez, um dia quem sabe", type: "B" },
      { text: "Visitar sim, morar não sei", type: "C" },
      { text: "Não, minha vida é aqui agora", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você celebra festas brasileiras lá fora?",
    options: [
      { text: "Todas! Carnaval, festa junina, tudo", type: "A" },
      { text: "As principais, com amigos BR", type: "B" },
      { text: "Às vezes, quando rola", type: "C" },
      { text: "Não muito, prefiro as festas locais", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você fala português em casa?",
    options: [
      { text: "Sempre! Não perco a língua", type: "A" },
      { text: "Sim, mas misturo com a língua local", type: "B" },
      { text: "Com alguns, depende", type: "C" },
      { text: "Quase nunca, preciso praticar a outra", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você defende o Brasil em discussões?",
    options: [
      { text: "Sempre! Patriota demais", type: "A" },
      { text: "Depende, se for justo defendo", type: "B" },
      { text: "Às vezes, mas sei os problemas", type: "C" },
      { text: "Não muito, reconheço os defeitos", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você tem saudade do quê?",
    options: [
      { text: "De tudo! Do Brasil inteiro", type: "A" },
      { text: "Das pessoas principalmente", type: "B" },
      { text: "De algumas coisas específicas", type: "C" },
      { text: "Pouca saudade, me adaptei bem", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define como brasileiro no exterior?",
    options: [
      { text: "'Brasil acima de tudo, mesmo de longe!'", type: "A" },
      { text: "'Brasileiro por onde for'", type: "B" },
      { text: "'Raízes brasileiras, asas internacionais'", type: "C" },
      { text: "'Cidadão do mundo'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Brasileiro Raiz no Exterior",
    emoji: "🇧🇷",
    description: "Você é Brasileiro Raiz no Exterior! O Brasil está no coração e na rotina. Comida brasileira todo dia, grupo de BR, saudade eterna. Mesmo longe, o Brasil nunca sai de você!",
    traits: ["Patriota", "Saudosista", "Conectado às raízes", "Comunitário"],
    strengths: ["Identidade forte", "Rede de apoio BR", "Nunca esquece de onde veio"],
    weaknesses: ["Dificuldade de integração", "Pode criar bolha", "Saudade demais"],
    tips: ["Sua conexão é linda", "Mas experimente a cultura local também", "Equilíbrio é bom"],
  },
  B: {
    type: "B",
    title: "Brasileiro Equilibrado",
    emoji: "⚖️",
    description: "Você é o Brasileiro Equilibrado! Mantém as raízes mas se integra bem. Come feijão mas experimenta a culinária local. O melhor dos dois mundos!",
    traits: ["Equilibrado(a)", "Adaptável", "Bicultural", "Inteligente"],
    strengths: ["Melhor dos dois mundos", "Integração saudável", "Flexibilidade"],
    weaknesses: ["Pode parecer indeciso", "Nem lá nem cá às vezes"],
    tips: ["Ótimo equilíbrio", "Continue assim", "Você sabe navegar os dois mundos"],
  },
  C: {
    type: "C",
    title: "Brasileiro Cosmopolita",
    emoji: "🌍",
    description: "Você é o Brasileiro Cosmopolita! Valoriza as raízes mas prioriza a experiência internacional. Quer absorver tudo do novo país sem esquecer de onde veio!",
    traits: ["Cosmopolita", "Curioso(a)", "Experiencial", "Aberto(a)"],
    strengths: ["Crescimento pessoal", "Experiências ricas", "Mente aberta"],
    weaknesses: ["Pode perder conexão BR", "Família sente falta"],
    tips: ["Explore o mundo", "Mas não esqueça as raízes", "Equilíbrio é importante"],
  },
  D: {
    type: "D",
    title: "Cidadão do Mundo",
    emoji: "🛂",
    description: "Você é Cidadão do Mundo! O Brasil é passado, o mundo é seu lar. Integração total, foco no futuro, raízes guardadas mas não determinantes. Uma nova vida!",
    traits: ["Adaptado(a)", "Internacional", "Focado(a) no futuro", "Pragmático(a)"],
    strengths: ["Integração total", "Novas oportunidades", "Sem saudosismo"],
    weaknesses: ["Pode parecer desconectado", "Família pode não entender"],
    tips: ["Sua adaptação é impressionante", "Visite o Brasil de vez em quando", "As raízes também importam"],
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
