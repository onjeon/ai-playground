// Seu Estilo na Padaria
// Descubra que tipo de cliente de padaria você é!

export const questions = [
  {
    id: 1,
    question: "Você chega na padaria de manhã. Primeiro pedido é...",
    options: [
      { text: "Pão francês quentinho, sempre", type: "A" },
      { text: "Pão de queijo com café", type: "B" },
      { text: "Aquele pão recheado ou folhado especial", type: "C" },
      { text: "Depende do que tiver de novidade hoje", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Na vitrine dos doces, você...",
    options: [
      { text: "Passo direto, vim só pro básico", type: "A" },
      { text: "Olho, mas resisto à tentação", type: "B" },
      { text: "Já escolho pelo menos dois ou três", type: "C" },
      { text: "Peço sugestão de qual tá mais fresco", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Seu pedido de café é...",
    options: [
      { text: "Café puro, simples e direto", type: "A" },
      { text: "Média ou pingado, clássico", type: "B" },
      { text: "Cappuccino, mocha ou algo elaborado", type: "C" },
      { text: "Experimento o especial da casa", type: "D" },
    ],
  },
  {
    id: 4,
    question: "A padaria tá lotada no domingo. Você...",
    options: [
      { text: "Reclamo da fila mas espero", type: "A" },
      { text: "Espero pacientemente, faz parte", type: "B" },
      { text: "Aproveito pra ver tudo que tem de bom", type: "C" },
      { text: "Vou em outra hora ou outra padaria", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O pão francês acabou. Sua reação?",
    options: [
      { text: "Que absurdo! Padaria sem pão?", type: "A" },
      { text: "Levo outro tipo, tranquilo", type: "B" },
      { text: "Oba! Desculpa pra experimentar outra coisa", type: "C" },
      { text: "Pergunto que horas sai a próxima fornada", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Na hora de pagar, você...",
    options: [
      { text: "Já tô com o dinheiro contado na mão", type: "A" },
      { text: "Pago tranquilo, sem pressa", type: "B" },
      { text: "Lembro de mais uma coisinha e peço", type: "C" },
      { text: "Uso o app de pontos ou cupom", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você conhece o pessoal da padaria?",
    options: [
      { text: "Não, vou lá e volto rápido", type: "A" },
      { text: "Cumprimento por educação", type: "B" },
      { text: "Conheço todo mundo pelo nome!", type: "C" },
      { text: "Só quem me atende regularmente", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sábado de manhã na padaria, você está...",
    options: [
      { text: "Pegando pão rápido pra voltar pra cama", type: "A" },
      { text: "Tomando café da manhã tranquilo", type: "B" },
      { text: "Montando uma mesa farta pra família", type: "C" },
      { text: "Experimentando algo diferente do dia a dia", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que não pode faltar na sua sacola da padaria?",
    options: [
      { text: "Pão francês, o suficiente pro dia", type: "A" },
      { text: "Pão de queijo, impossível resistir", type: "B" },
      { text: "Variedade: doce, salgado, pão...", type: "C" },
      { text: "O que tiver em promoção ou novidade", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sua padaria ideal seria...",
    options: [
      { text: "Rápida, barata e com pão quentinho", type: "A" },
      { text: "Aconchegante com bom café", type: "B" },
      { text: "Com variedade enorme e tudo gostoso", type: "C" },
      { text: "Artesanal com produtos especiais", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Tradicional do Pão Francês",
    emoji: "🥖",
    percentage: 80,
    description: "Você é O Tradicional do Pão Francês! Padaria pra você é coisa séria e rápida. Pão quentinho, café simples, sem frescura. O clássico que nunca falha - assim como você!",
    characteristics: ["Prático(a)", "Tradicional", "Objetivo(a)", "Simples"],
    advice: "O básico bem feito é perfeito! Mas de vez em quando, experimente um pão de queijo ou aquele folhado da vitrine. Você pode se surpreender!",
  },
  B: {
    type: "B",
    title: "O Equilibrado do Café da Manhã",
    emoji: "☕",
    percentage: 75,
    description: "Você é O Equilibrado do Café da Manhã! Gosta de qualidade sem exagero. Um bom pão de queijo, um café bem feito e um momento tranquilo. Você sabe apreciar as pequenas alegrias!",
    characteristics: ["Equilibrado(a)", "Tranquilo(a)", "Apreciador(a)", "Moderado(a)"],
    advice: "Seu equilíbrio é inspirador! Continue saboreando cada momento na padaria sem pressa. A vida é feita desses pequenos rituais.",
  },
  C: {
    type: "C",
    title: "O Festeiro da Padaria",
    emoji: "🎂",
    percentage: 95,
    description: "Você é O Festeiro da Padaria! Pra você, ir na padaria é um evento. Experimenta tudo, leva variedade, conhece todo mundo. Sua sacola parece de festa de aniversário e seu sorriso ilumina o balcão!",
    characteristics: ["Animado(a)", "Social", "Generoso(a)", "Guloso(a)"],
    advice: "Sua alegria na padaria é contagiante! Só cuidado com a conta no final do mês. Mas quem precisa de dieta quando tem tanto pão de queijo bom?",
  },
  D: {
    type: "D",
    title: "O Explorador de Padarias",
    emoji: "🔍",
    percentage: 85,
    description: "Você é O Explorador de Padarias! Sempre buscando novidades, padarias diferentes, receitas especiais. Você transforma cada visita numa aventura gastronômica!",
    characteristics: ["Curioso(a)", "Aventureiro(a)", "Exigente", "Conhecedor(a)"],
    advice: "Sua curiosidade gastronômica é admirável! Continue explorando, mas não esqueça da padaria do bairro - às vezes o melhor tá pertinho de casa.",
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
