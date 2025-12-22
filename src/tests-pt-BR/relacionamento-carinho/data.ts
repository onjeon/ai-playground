// Estilo de Carinho
// Descubra como você demonstra e recebe carinho no amor!

export const questions = [
  {
    id: 1,
    question: "Numa noite de filme em casa com seu amor, você prefere:",
    options: [
      { text: "Ficar abraçadinho(a) o filme inteiro, grudados no sofá", type: "A" },
      { text: "Sentar pertinho, mas cada um no seu canto confortável", type: "B" },
      { text: "Carinho ocasional - uma mão no joelho, um cafuné", type: "C" },
      { text: "Focar no filme, carinho fica pra depois", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Em público, com relação a demonstrações de afeto, você:",
    options: [
      { text: "Sou super carinhoso(a), não ligo pra quem tá vendo", type: "A" },
      { text: "Gosto de andar de mãos dadas e beijinhos discretos", type: "B" },
      { text: "Prefiro ser mais reservado(a), carinho é particular", type: "C" },
      { text: "Fico desconfortável com demonstrações públicas", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando você acorda ao lado da pessoa amada, o que você mais gosta?",
    options: [
      { text: "Ficar de conchinha até o último segundo possível", type: "A" },
      { text: "Um beijo de bom dia e carinho antes de levantar", type: "B" },
      { text: "Um bom dia carinhoso e cada um no seu ritmo", type: "C" },
      { text: "Levanto logo, não sou muito de chamego matinal", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Se seu parceiro(a) está ocupado(a) trabalhando em casa, você:",
    options: [
      { text: "Vou lá dar beijinho na testa de vez em quando", type: "A" },
      { text: "Respeito o momento, mas mando mensagem fofa", type: "B" },
      { text: "Deixo em paz, carinho quando terminar o trabalho", type: "C" },
      { text: "Cada um no seu, depois a gente se encontra", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual a frequência ideal de beijos e abraços no seu dia a dia de casal?",
    options: [
      { text: "Muita! Quanto mais carinho, melhor", type: "A" },
      { text: "Várias vezes ao dia, em momentos especiais", type: "B" },
      { text: "Algumas vezes, nos momentos certos", type: "C" },
      { text: "Não preciso de tanto, qualidade sobre quantidade", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando você está chateado(a) com o parceiro(a), você:",
    options: [
      { text: "Ainda assim aceito carinho, ajuda a resolver", type: "A" },
      { text: "Preciso de um tempo, mas depois quero carinho", type: "B" },
      { text: "Prefiro resolver conversando antes de carinho", type: "C" },
      { text: "Não consigo receber carinho quando estou chateado(a)", type: "D" },
    ],
  },
  {
    id: 7,
    question: "No relacionamento, você se considera:",
    options: [
      { text: "A pessoa mais carinhosa do casal, transborda amor", type: "A" },
      { text: "Carinhoso(a), mas no mesmo nível do parceiro(a)", type: "B" },
      { text: "Um pouco menos carinhoso(a), mas demonstro de outras formas", type: "C" },
      { text: "Não sou muito de demonstrações físicas de carinho", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando vocês passam um tempo sem se ver, no reencontro você:",
    options: [
      { text: "Pulo no colo, muitos beijos e abraços apertados", type: "A" },
      { text: "Abraço forte e beijo com saudade", type: "B" },
      { text: "Beijo e abraço normais, carinho vem depois", type: "C" },
      { text: "Cumprimento com carinho, mas nada exagerado", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que te faz sentir mais amado(a) no dia a dia?",
    options: [
      { text: "Carinho físico constante, toque é tudo", type: "A" },
      { text: "Um equilíbrio de carinho, palavras e atenção", type: "B" },
      { text: "Gestos de cuidado e atenção mais que toque", type: "C" },
      { text: "Respeito ao meu espaço e atitudes concretas", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Se pudesse escolher, seu nível ideal de contato físico diário seria:",
    options: [
      { text: "Alto! Mãos dadas, beijos, abraços o tempo todo", type: "A" },
      { text: "Moderado a alto, carinho frequente mas com pausas", type: "B" },
      { text: "Moderado, momentos específicos de carinho", type: "C" },
      { text: "Baixo, valorizo mais qualidade que quantidade", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Carinhoso(a) ao Extremo",
    emoji: "💕",
    percentage: 95,
    description: "Você é daqueles que o carinho nunca é demais! Adora contato físico constante, abraços apertados, beijos a todo momento. Pra você, amor se demonstra no toque e na proximidade física!",
    characteristics: ["Super afetuoso(a)", "Expressivo(a)", "Caloroso(a)", "Toque é sua linguagem"],
    advice: "Seu carinho é lindo, mas lembre-se que algumas pessoas têm necessidades diferentes de espaço. Converse com seu par sobre os níveis de carinho ideais para ambos!",
  },
  B: {
    type: "B",
    title: "Carinhoso(a) Equilibrado(a)",
    emoji: "🥰",
    percentage: 80,
    description: "Você tem um estilo de carinho equilibrado e saudável! Gosta de demonstrações de afeto frequentes, mas também sabe respeitar o espaço. Consegue dosar bem intimidade e individualidade!",
    characteristics: ["Afetuoso(a)", "Equilibrado(a)", "Adaptável", "Sintonizado(a)"],
    advice: "Você achou um bom equilíbrio! Continue atento(a) às necessidades do parceiro(a) e não tenha medo de pedir mais carinho quando precisar!",
  },
  C: {
    type: "C",
    title: "Carinhoso(a) Seletivo(a)",
    emoji: "🤗",
    percentage: 65,
    description: "Você gosta de carinho, mas nos momentos certos! Prefere qualidade sobre quantidade e valoriza quando o afeto físico acontece de forma mais especial e significativa!",
    characteristics: ["Seletivo(a)", "Valorizador(a)", "Reservado(a)", "Intenso(a) nos momentos certos"],
    advice: "Tudo bem ter seu estilo, mas se seu parceiro(a) precisa de mais carinho, tente se abrir um pouco mais. Às vezes um simples toque pode fazer toda diferença!",
  },
  D: {
    type: "D",
    title: "Carinho Reservado",
    emoji: "🙂",
    percentage: 45,
    description: "Você não é muito de demonstrações físicas de afeto e prefere mostrar amor de outras formas! Valoriza seu espaço pessoal e expressa carinho através de gestos, palavras ou atitudes!",
    characteristics: ["Reservado(a)", "Independente", "Expressão diferente de amor", "Valoriza espaço"],
    advice: "É válido ter seu estilo, mas atenção se o parceiro(a) precisa de mais contato físico. Comunicar suas necessidades e entender as do outro é fundamental!",
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
