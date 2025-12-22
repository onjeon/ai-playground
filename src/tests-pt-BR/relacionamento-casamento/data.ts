// Visão de Casamento
// Descubra como você enxerga o casamento!

export const questions = [
  {
    id: 1,
    question: "Pra você, casamento é:",
    options: [
      { text: "O sonho da vida, marco fundamental da relação", type: "A" },
      { text: "Importante, mas não essencial pra ser feliz", type: "B" },
      { text: "Uma opção entre várias formas de compromisso", type: "C" },
      { text: "Uma instituição ultrapassada, prefiro outras formas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sobre a cerimônia de casamento, você pensa:",
    options: [
      { text: "Sonho com uma festa grande e inesquecível", type: "A" },
      { text: "Algo bonito, mas não precisa ser muito elaborado", type: "B" },
      { text: "Prefiro algo íntimo só com pessoas queridas", type: "C" },
      { text: "Dispensaria cerimônia, o importante é a união", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual a importância do papel assinado (certidão de casamento)?",
    options: [
      { text: "Muito importante, oficializa e dá segurança", type: "A" },
      { text: "Tem sua importância legal e simbólica", type: "B" },
      { text: "É prático pra questões burocráticas apenas", type: "C" },
      { text: "Não faz diferença, o amor não precisa de papel", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quando você pensa no futuro de um relacionamento sério:",
    options: [
      { text: "Casamento é o objetivo natural e esperado", type: "A" },
      { text: "Casamento pode acontecer se fizer sentido", type: "B" },
      { text: "Construir vida junto importa mais que casar", type: "C" },
      { text: "Não penso em casamento como meta", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sobre morar junto antes de casar, você acha:",
    options: [
      { text: "Prefiro casar primeiro, faz parte da tradição", type: "A" },
      { text: "Pode morar junto, mas casamento vem logo depois", type: "B" },
      { text: "Essencial testar a convivência antes de qualquer compromisso formal", type: "C" },
      { text: "Morar junto já é suficiente, não precisa casar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "A família e tradição influenciam sua visão de casamento?",
    options: [
      { text: "Muito! Valorizo a tradição familiar e religiosa", type: "A" },
      { text: "Um pouco, mas adapto ao que faz sentido pra mim", type: "B" },
      { text: "Pouco, minhas decisões são mais individuais", type: "C" },
      { text: "Nada, não me guio por tradições", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que mais te atrai na ideia de casamento?",
    options: [
      { text: "A celebração do amor perante todos", type: "A" },
      { text: "A construção de uma família e lar juntos", type: "B" },
      { text: "A parceria e companheirismo do dia a dia", type: "C" },
      { text: "Honestamente, nada me atrai muito na ideia", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sobre alianças de casamento, você pensa:",
    options: [
      { text: "Amo! Símbolo lindo de compromisso eterno", type: "A" },
      { text: "Gosto, mas não precisa ser nada caro", type: "B" },
      { text: "Tanto faz, é só um símbolo", type: "C" },
      { text: "Não vejo necessidade de usar aliança", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Casamento é pra sempre na sua visão?",
    options: [
      { text: "Sim, é um compromisso pra vida toda", type: "A" },
      { text: "É a intenção, mas entendo que pode não dar certo", type: "B" },
      { text: "É enquanto fizer sentido pra ambos", type: "C" },
      { text: "Nada é pra sempre, inclusive casamento", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Se seu parceiro(a) não quisesse casar formalmente, você:",
    options: [
      { text: "Seria muito difícil, casamento é fundamental pra mim", type: "A" },
      { text: "Conversaria pra entender e tentar chegar num acordo", type: "B" },
      { text: "Tudo bem, o importante é estarmos juntos", type: "C" },
      { text: "Até prefiro assim, não ligo pra formalidades", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tradicional Romântico(a)",
    emoji: "💒",
    percentage: 95,
    description: "Você tem uma visão tradicional e romântica do casamento! Valoriza a cerimônia, os símbolos e o compromisso formal. Pra você, casar é um marco fundamental na vida e no amor!",
    characteristics: ["Tradicional", "Romântico(a)", "Valoriza cerimônias", "Compromisso formal"],
    advice: "Sua visão é linda! Só lembre-se de que o mais importante é a qualidade da relação, não apenas o casamento em si. E respeite se o parceiro(a) tiver uma visão diferente!",
  },
  B: {
    type: "B",
    title: "Moderno(a) Flexível",
    emoji: "💑",
    percentage: 75,
    description: "Você valoriza o casamento mas de forma flexível e moderna! Gosta da ideia, mas adapta às suas necessidades e realidade. O importante é a união, a forma pode variar!",
    characteristics: ["Flexível", "Adaptável", "Equilibrado(a)", "Pragmático(a)"],
    advice: "Você tem uma visão saudável e equilibrada! Continue aberto(a) ao diálogo com seu parceiro(a) pra construírem juntos o modelo de união que funcione pra vocês!",
  },
  C: {
    type: "C",
    title: "Pragmático(a) Independente",
    emoji: "🤝",
    percentage: 55,
    description: "Você vê o casamento de forma pragmática! O que importa é a parceria e construção de vida juntos, não necessariamente a formalização. O amor não precisa de papel pra ser real!",
    characteristics: ["Pragmático(a)", "Independente", "Foco na essência", "Desapegado(a) de formas"],
    advice: "Sua visão é válida! Só comunique bem ao parceiro(a) pra não haver expectativas desencontradas. O importante é que ambos estejam alinhados!",
  },
  D: {
    type: "D",
    title: "Livre Pensador(a)",
    emoji: "🦋",
    percentage: 35,
    description: "Você não vê o casamento como necessidade ou objetivo! Prefere formas alternativas de compromisso e não se guia por tradições. O amor pra você transcende instituições!",
    characteristics: ["Não-convencional", "Livre", "Questionador(a)", "Individualista"],
    advice: "Tudo bem ter sua visão! Mas se for se relacionar com alguém que valoriza casamento, a conversa franca é essencial. Encontrem um modelo que funcione pra ambos!",
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
