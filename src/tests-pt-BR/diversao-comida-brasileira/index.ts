// Qual Comida Brasileira Você Seria?
// Descubra qual prato típico brasileiro representa sua personalidade!

export const questions = [
  {
    id: 1,
    question: "Como você é em um almoço de família?",
    options: [
      { text: "O centro das atenções, reunindo todos", type: "A" },
      { text: "Ajudando na cozinha e organizando", type: "B" },
      { text: "Curtindo de boa no canto", type: "C" },
      { text: "Animando a mesa com histórias", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual seu estilo de final de semana?",
    options: [
      { text: "Churrasco com a galera toda", type: "A" },
      { text: "Cozinhando algo especial em casa", type: "B" },
      { text: "Praia ou natureza, bem tranquilo", type: "C" },
      { text: "Festinha ou barzinho animado", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com situações difíceis?",
    options: [
      { text: "Enfrento com força e determinação", type: "A" },
      { text: "Com paciência e dedicação", type: "B" },
      { text: "Deixo fluir naturalmente", type: "C" },
      { text: "Com bom humor e leveza", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que mais valoriza nas pessoas?",
    options: [
      { text: "Generosidade e fartura", type: "A" },
      { text: "Cuidado e atenção aos detalhes", type: "B" },
      { text: "Simplicidade e naturalidade", type: "C" },
      { text: "Alegria e espontaneidade", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como é seu jeito de demonstrar carinho?",
    options: [
      { text: "Fazendo de tudo pelos outros", type: "A" },
      { text: "Preparando algo especial com amor", type: "B" },
      { text: "Estando presente nos momentos", type: "C" },
      { text: "Com abraços e palavras carinhosas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual ambiente você prefere?",
    options: [
      { text: "Mesa farta com muita gente", type: "A" },
      { text: "Cozinha aconchegante e organizada", type: "B" },
      { text: "Lugar calmo perto da natureza", type: "C" },
      { text: "Lugar animado e cheio de energia", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você descreveria seu temperamento?",
    options: [
      { text: "Forte e marcante", type: "A" },
      { text: "Dedicado e caprichoso", type: "B" },
      { text: "Calmo e refrescante", type: "C" },
      { text: "Leve e animado", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que te faz mais feliz?",
    options: [
      { text: "Ver as pessoas satisfeitas", type: "A" },
      { text: "Fazer algo bem feito", type: "B" },
      { text: "Momentos de paz e tranquilidade", type: "C" },
      { text: "Risadas e momentos divertidos", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você é no trabalho?",
    options: [
      { text: "Entrego sempre além do esperado", type: "A" },
      { text: "Meticuloso(a) e organizado(a)", type: "B" },
      { text: "Tranquilo(a) e no meu ritmo", type: "C" },
      { text: "Criativo(a) e dinâmico(a)", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual seu ponto forte?",
    options: [
      { text: "Sou completo(a) e versátil", type: "A" },
      { text: "Minha dedicação e carinho", type: "B" },
      { text: "Minha energia positiva e saúde", type: "C" },
      { text: "Minha alegria contagiante", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que combina mais com você?",
    options: [
      { text: "Tradição e família", type: "A" },
      { text: "Conforto e aconchego", type: "B" },
      { text: "Natureza e bem-estar", type: "C" },
      { text: "Festa e celebração", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você gosta de ser lembrado(a)?",
    options: [
      { text: "Como alguém que sempre deu o máximo", type: "A" },
      { text: "Como alguém carinhoso e dedicado", type: "B" },
      { text: "Como alguém leve e natural", type: "C" },
      { text: "Como alguém alegre e divertido", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Feijoada Completa",
    emoji: "🫘",
    description: "Você é a feijoada! Completo(a), substancioso(a) e capaz de reunir todo mundo ao redor. Assim como o prato mais tradicional do Brasil, você é generoso(a), forte e sempre entrega mais do que prometeu!",
    traits: ["Generoso(a)", "Completo(a)", "Tradicional", "Acolhedor(a)"],
    strengths: ["Capacidade de reunir pessoas", "Substância e profundidade", "Generosidade natural", "Presença marcante"],
    weaknesses: ["Pode ser intenso demais", "Às vezes pesado(a)", "Dificuldade em ser leve"],
    tips: ["Equilibre intensidade com leveza", "Nem sempre precisa dar tudo", "Cuide de si também"],
  },
  B: {
    type: "B",
    title: "Pão de Queijo Quentinho",
    emoji: "🧀",
    description: "Você é o pão de queijo! Aconchegante, irresistível e feito com amor. Assim como essa delícia mineira, você traz conforto e carinho para todos que estão por perto!",
    traits: ["Aconchegante", "Carinhoso(a)", "Caprichoso(a)", "Irresistível"],
    strengths: ["Capacidade de acolher", "Atenção aos detalhes", "Faz as pessoas se sentirem bem", "Dedicação"],
    weaknesses: ["Pode ser muito focado nos outros", "Às vezes esquece de si", "Muito apegado às coisas"],
    tips: ["Cuide de si mesmo(a)", "Está tudo bem não agradar a todos", "Reserve tempo para você"],
  },
  C: {
    type: "C",
    title: "Açaí na Tigela",
    emoji: "🍇",
    description: "Você é o açaí! Refrescante, energético(a) e natural. Assim como essa fruta amazônica que conquistou o Brasil, você traz energia positiva e frescor para qualquer ambiente!",
    traits: ["Refrescante", "Natural", "Energético(a)", "Saudável"],
    strengths: ["Energia positiva", "Conexão com a natureza", "Leveza e frescor", "Vitalidade"],
    weaknesses: ["Pode parecer distante", "Às vezes muito alternativo(a)", "Dificuldade com tradições"],
    tips: ["Abraçe também as tradições", "Nem sempre precisa ser diferente", "Conecte-se mais com os outros"],
  },
  D: {
    type: "D",
    title: "Coxinha de Festa",
    emoji: "🍗",
    description: "Você é a coxinha! Alegre, popular e sempre presente nos melhores momentos. Assim como esse salgadinho que todo brasileiro ama, você traz alegria e é a estrela de qualquer festa!",
    traits: ["Alegre", "Popular", "Festivo(a)", "Carismático(a)"],
    strengths: ["Facilidade em socializar", "Presença animada", "Faz todos sorrirem", "Energia contagiante"],
    weaknesses: ["Pode ser superficial", "Dificuldade em momentos sérios", "Busca aprovação demais"],
    tips: ["Cultive relações mais profundas", "Está tudo bem ser sério às vezes", "Não dependa tanto da aprovação"],
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
