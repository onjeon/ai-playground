// Qual Tipo de Colega de Trabalho Você É?
// Descubra seu perfil no escritório!

export const questions = [
  {
    id: 1,
    question: "Como é sua relação com os colegas?",
    options: [
      { text: "Ótima! Somos amigos de verdade", type: "A" },
      { text: "Boa, profissional e cordial", type: "B" },
      { text: "Normal, cada um no seu", type: "C" },
      { text: "Distante, prefiro assim", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você participa dos happy hours?",
    options: [
      { text: "Sempre! Sou o organizador", type: "A" },
      { text: "Frequentemente, quando dá", type: "B" },
      { text: "Às vezes, depende de quem vai", type: "C" },
      { text: "Nunca, trabalho é trabalho", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você sabe da vida pessoal dos colegas?",
    options: [
      { text: "Tudo! Somos muito próximos", type: "A" },
      { text: "O básico, o que compartilham", type: "B" },
      { text: "Quase nada, não me meto", type: "C" },
      { text: "Nada, nem quero saber", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você ajuda colegas com trabalho deles?",
    options: [
      { text: "Sempre! Adoro ajudar", type: "A" },
      { text: "Quando pedem e eu posso", type: "B" },
      { text: "Raramente, cada um com o seu", type: "C" },
      { text: "Não, é problema deles", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você faz fofoca no trabalho?",
    options: [
      { text: "Confesso que sim, faz parte", type: "A" },
      { text: "Escuto mas não espalho", type: "B" },
      { text: "Evito, não gosto de fofoca", type: "C" },
      { text: "Nunca, não me envolvo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você é nas reuniões?",
    options: [
      { text: "Participativo, falo bastante", type: "A" },
      { text: "Contribuo quando faz sentido", type: "B" },
      { text: "Quieto, só quando perguntam", type: "C" },
      { text: "Conto os minutos pra acabar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você divide comida/lanche com colegas?",
    options: [
      { text: "Sempre! Trago pra todo mundo", type: "A" },
      { text: "Às vezes, ofereco o que tenho", type: "B" },
      { text: "Raramente, como o meu", type: "C" },
      { text: "Nunca, cada um com sua comida", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você puxa assunto no elevador/café?",
    options: [
      { text: "Sempre! Adoro conversar", type: "A" },
      { text: "Sim, papo normal", type: "B" },
      { text: "Só se a pessoa começar", type: "C" },
      { text: "Evito, fico no celular", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você lembra aniversário dos colegas?",
    options: [
      { text: "Todos! Organizo a festa", type: "A" },
      { text: "Dos mais próximos, sim", type: "B" },
      { text: "Só quando alguém avisa", type: "C" },
      { text: "Não, nem lembro do meu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você adicionou colegas nas redes sociais?",
    options: [
      { text: "Todos! Somos amigos", type: "A" },
      { text: "Alguns, os mais próximos", type: "B" },
      { text: "Poucos, prefiro separar", type: "C" },
      { text: "Nenhum, vida pessoal é pessoal", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você reclama do trabalho pros colegas?",
    options: [
      { text: "Sempre, desabafamos juntos", type: "A" },
      { text: "Às vezes, quando precisa", type: "B" },
      { text: "Raramente, guardo pra mim", type: "C" },
      { text: "Nunca, não confio em ninguém", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define no trabalho?",
    options: [
      { text: "'Meus colegas são minha família!'", type: "A" },
      { text: "'Bom ambiente de trabalho'", type: "B" },
      { text: "'Trabalho é trabalho'", type: "C" },
      { text: "'Vim trabalhar, não fazer amigos'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Colega Amigão",
    emoji: "🤗",
    description: "Você é o Colega Amigão! O trabalho é sua segunda família. Conhece todo mundo, organiza happy hour, sabe da vida de todos. O escritório não seria o mesmo sem você!",
    traits: ["Sociável", "Amigável", "Participativo(a)", "Integrador(a)"],
    strengths: ["Rede de relacionamentos", "Ambiente agradável", "Apoio mútuo"],
    weaknesses: ["Pode misturar demais", "Fofoca", "Distração do trabalho"],
    tips: ["Sua energia é ótima", "Mas mantenha limites", "Nem todo mundo quer proximidade"],
  },
  B: {
    type: "B",
    title: "Colega Equilibrado",
    emoji: "👔",
    description: "Você é o Colega Equilibrado! Profissional mas humano. Você mantém boas relações sem exagero, sabe separar mas também sabe socializar. O equilíbrio perfeito!",
    traits: ["Equilibrado(a)", "Profissional", "Cordial", "Respeitoso(a)"],
    strengths: ["Boa reputação", "Relações saudáveis", "Profissionalismo"],
    weaknesses: ["Pode parecer distante", "Não é o mais próximo"],
    tips: ["Ótimo equilíbrio", "Continue assim", "Você é referência"],
  },
  C: {
    type: "C",
    title: "Colega Reservado",
    emoji: "🔇",
    description: "Você é o Colega Reservado! Trabalho é trabalho, vida pessoal é vida pessoal. Você é educado mas mantém distância. Foca no que veio fazer!",
    traits: ["Reservado(a)", "Focado(a)", "Discreto(a)", "Profissional"],
    strengths: ["Foco no trabalho", "Sem drama", "Privacidade"],
    weaknesses: ["Pode parecer antipático", "Perde networking", "Isolamento"],
    tips: ["Tá tudo bem ser assim", "Mas conexões ajudam", "Tente se abrir um pouco"],
  },
  D: {
    type: "D",
    title: "Colega Ilha",
    emoji: "🏝️",
    description: "Você é o Colega Ilha! Totalmente isolado, trabalho é obrigação e só. Não quer amizade, não quer papo, quer fazer seu trabalho e ir embora!",
    traits: ["Isolado(a)", "Antissocial", "Focado(a)", "Independente"],
    strengths: ["Zero distração", "Foco total", "Sem política de escritório"],
    weaknesses: ["Sem rede de apoio", "Pode prejudicar carreira", "Solidão no trabalho"],
    tips: ["Colegas podem ajudar", "Networking é importante", "Um pouco de conexão não faz mal"],
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
