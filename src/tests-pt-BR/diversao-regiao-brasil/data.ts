// Qual Sua Personalidade Regional Brasileira?
// Descubra qual região do Brasil combina mais com seu jeito!

export const questions = [
  {
    id: 1,
    question: "Seu ritmo de vida é mais...",
    options: [
      { text: "Acelerado, sempre correndo, tempo é dinheiro", type: "A" },
      { text: "Tranquilo, sem pressa, a vida é boa demais", type: "B" },
      { text: "Equilibrado, trabalho duro mas curto a vida", type: "C" },
      { text: "Intenso, família, tradição e trabalho juntos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Clima ideal pra você é...",
    options: [
      { text: "Frio! Preciso de casaco e chimarrão", type: "A" },
      { text: "Calor tropical, praia e sol o ano todo", type: "B" },
      { text: "Variado, gosto das quatro estações", type: "C" },
      { text: "Quente mas seco, calor com brisa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Na hora de comer, você prefere...",
    options: [
      { text: "Churrasco! Carne de qualidade é essencial", type: "A" },
      { text: "Frutos do mar, peixe, comida leve", type: "B" },
      { text: "Pizza, sushi, culinária diversa", type: "C" },
      { text: "Comida caseira, feijão tropeiro, pequi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Seu jeito de falar é mais...",
    options: [
      { text: "Direto, sem muita enrolação, objetivo", type: "A" },
      { text: "Cantado, cheio de expressões e sotaque forte", type: "B" },
      { text: "Neutro, sotaque mais suave", type: "C" },
      { text: "Mineiro: devagar, 'uai', 'sô', pausado", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Fim de semana perfeito pra você:",
    options: [
      { text: "Churrasco com família, chimarrão e prosa", type: "A" },
      { text: "Praia, forró, curtir com os amigos", type: "B" },
      { text: "Shopping, restaurante, balada ou cultura", type: "C" },
      { text: "Fazenda, cachoeira, natureza e tranquilidade", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sobre receptividade com estranhos:",
    options: [
      { text: "Sou reservado(a) no início, depois abro", type: "A" },
      { text: "Super acolhedor(a), já convido pra casa", type: "B" },
      { text: "Educado(a) mas sem intimidade rápida", type: "C" },
      { text: "Desconfiado(a) mas amoroso(a) quando conheço", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sua relação com tradições é...",
    options: [
      { text: "Forte! Honro minhas raízes e cultura", type: "A" },
      { text: "Vivo intensamente, festa é identidade", type: "B" },
      { text: "Cosmopolita, misturo várias influências", type: "C" },
      { text: "Familiar, tradições passadas de geração", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Trabalho pra você significa...",
    options: [
      { text: "Sustento, honra e dedicação total", type: "A" },
      { text: "Importante, mas não mais que viver bem", type: "B" },
      { text: "Carreira, crescimento, oportunidades", type: "C" },
      { text: "Dever, mas família vem primeiro", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Na hora de resolver problemas, você...",
    options: [
      { text: "Enfrento de frente, sem rodeios", type: "A" },
      { text: "Levo na maciota, dou um jeitinho", type: "B" },
      { text: "Analiso, planejo e executo", type: "C" },
      { text: "Converso bastante antes de decidir", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que mais te define:",
    options: [
      { text: "Orgulho das minhas raízes e trabalho duro", type: "A" },
      { text: "Alegria, música e saber curtir a vida", type: "B" },
      { text: "Versatilidade e abertura ao novo", type: "C" },
      { text: "Simplicidade, fé e amor pela família", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Alma Sulista",
    emoji: "🧉",
    percentage: 90,
    description: "Você tem Alma Sulista! Trabalho duro, orgulho das raízes, tradição forte. Churrasco, chimarrão e família são sagrados. Você é direto, honesto e valoriza suas origens acima de tudo!",
    characteristics: ["Trabalhador(a)", "Tradicional", "Direto(a)", "Orgulhoso(a)"],
    advice: "Seu orgulho e dedicação são admiráveis! Continue honrando suas raízes, mas mantenha a mente aberta pra outras culturas. O Brasil é diverso!",
  },
  B: {
    type: "B",
    title: "Coração Nordestino",
    emoji: "🌴",
    percentage: 85,
    description: "Você tem Coração Nordestino! Alegria, acolhimento, ritmo na veia. Pra você, a vida é pra ser curtida, com praia, forró e muita festa. Sua hospitalidade é lendária!",
    characteristics: ["Acolhedor(a)", "Festeiro(a)", "Resiliente", "Alegre"],
    advice: "Sua alegria de viver é contagiante! Continue espalhando essa energia boa. O Brasil precisa da sua luz e do seu axé!",
  },
  C: {
    type: "C",
    title: "Espírito Sudestino",
    emoji: "🌆",
    percentage: 80,
    description: "Você tem Espírito Sudestino! Cosmopolita, versátil, aberto às influências. Você valoriza oportunidades, cultura diversa e um ritmo de vida mais urbano. Metrópole é seu habitat!",
    characteristics: ["Versátil", "Urbano(a)", "Ambicioso(a)", "Cosmopolita"],
    advice: "Sua versatilidade te leva longe! Continue aproveitando a diversidade ao seu redor, mas não esqueça de desacelerar às vezes. Qualidade de vida importa!",
  },
  D: {
    type: "D",
    title: "Jeito Centro-Oeste/Mineiro",
    emoji: "🏔️",
    percentage: 75,
    description: "Você tem Jeito Centro-Oeste/Mineiro! Família, tradição, simplicidade. Você fala devagar, pensa bem antes de agir e valoriza as coisas simples da vida. Seu 'uai' é cheio de sabedoria!",
    characteristics: ["Familiar", "Ponderado(a)", "Simples", "Acolhedor(a)"],
    advice: "Sua sabedoria e simplicidade são refrescantes! Continue valorizando o que importa de verdade. Num mundo acelerado, seu jeito é um presente!",
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
