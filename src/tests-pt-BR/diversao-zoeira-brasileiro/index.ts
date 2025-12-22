// Qual Seu Nível de Zoeira?
// Descubra como você é na arte brasileira de zoar!

export const questions = [
  {
    id: 1,
    question: "Seu amigo faz algo vergonhoso. Você...",
    options: [
      { text: "Guardo pra zoar pelo resto da vida", type: "A" },
      { text: "Faço piada na hora e sigo", type: "B" },
      { text: "Fico quieto, não quero constranger", type: "C" },
      { text: "Depende se ele vai levar na boa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "No grupo do WhatsApp você é...",
    options: [
      { text: "O que manda os melhores memes", type: "A" },
      { text: "O que comenta zoando às vezes", type: "B" },
      { text: "Mais observador, rio das piadas", type: "C" },
      { text: "O que zoa quando o momento é certo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você reage quando te zoam?",
    options: [
      { text: "Rio junto e já planejo a vingança", type: "A" },
      { text: "Rio junto, faz parte", type: "B" },
      { text: "Fico meio sem graça", type: "C" },
      { text: "Depende da zoeira", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual seu tipo de humor favorito?",
    options: [
      { text: "Zoeira pesada entre amigos", type: "A" },
      { text: "Piadas e trocadilhos leves", type: "B" },
      { text: "Humor mais inteligente, irônico", type: "C" },
      { text: "Qualquer um que faça rir", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você zoa pessoas que acabou de conhecer?",
    options: [
      { text: "Sim! É meu jeito de fazer amizade", type: "A" },
      { text: "Depois de um tempo, quando conheço melhor", type: "B" },
      { text: "Raramente, preciso de muita intimidade", type: "C" },
      { text: "Se a pessoa der abertura, sim", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você tem apelidos zoeiros pros amigos?",
    options: [
      { text: "Sim, criei apelido pra todo mundo", type: "A" },
      { text: "Alguns, os mais óbvios", type: "B" },
      { text: "Não, chamo pelo nome", type: "C" },
      { text: "Só pros amigos mais próximos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Alguém faz uma pergunta boba. Você...",
    options: [
      { text: "Zoeira imediata e sem dó", type: "A" },
      { text: "Faço uma piadinha leve", type: "B" },
      { text: "Respondo sério, nem todo mundo é igual", type: "C" },
      { text: "Depende de quem perguntou", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você já passou do limite na zoeira?",
    options: [
      { text: "Várias vezes, faz parte", type: "A" },
      { text: "Algumas vezes, me desculpei", type: "B" },
      { text: "Raramente, tomo cuidado", type: "C" },
      { text: "Só quando não conhecia bem a pessoa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual seu papel na roda de amigos?",
    options: [
      { text: "O que faz todo mundo rir", type: "A" },
      { text: "Contribuo com a zoeira geral", type: "B" },
      { text: "Rio mais do que falo", type: "C" },
      { text: "Entro na zoeira quando tá boa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você guarda histórias vergonhosas dos amigos?",
    options: [
      { text: "Tenho um arquivo completo", type: "A" },
      { text: "Algumas, as mais engraçadas", type: "B" },
      { text: "Não, acho desnecessário", type: "C" },
      { text: "Só as que eles permitem contar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você zoa até em situações sérias?",
    options: [
      { text: "Especialmente em situações sérias", type: "A" },
      { text: "Às vezes, pra descontrair", type: "B" },
      { text: "Não, sei a hora de ser sério", type: "C" },
      { text: "Depende muito do contexto", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define?",
    options: [
      { text: "'Aqui ninguém escapa da zoeira'", type: "A" },
      { text: "'Rir é o melhor remédio'", type: "B" },
      { text: "'Cada coisa no seu lugar'", type: "C" },
      { text: "'Zoeira tem limite'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mestre da Zoeira",
    emoji: "🤣",
    description: "Você é o Mestre da Zoeira! Ninguém escapa, tudo vira piada e você tem arquivo de vergonhas de todo mundo. Você é a alegria (e o terror) do grupo!",
    traits: ["Zoeiro(a)", "Criativo(a)", "Implacável", "Carismático(a)"],
    strengths: ["Fazer todos rirem", "Memórias hilarias", "Descontrair qualquer ambiente", "Criatividade"],
    weaknesses: ["Pode passar do limite", "Nem todos aguentam", "Pode magoar sem querer"],
    tips: ["Saiba quando parar", "Nem todo mundo leva na esportiva", "Cuidado com limites"],
  },
  B: {
    type: "B",
    title: "Zoeiro(a) Equilibrado(a)",
    emoji: "😄",
    description: "Você é o Zoeiro Equilibrado! Entra na zoeira, contribui, mas sabe a hora de parar. Você encontrou o ponto perfeito entre diversão e respeito!",
    traits: ["Divertido(a)", "Equilibrado(a)", "Respeitoso(a)", "Social"],
    strengths: ["Bom senso", "Diversão sem exagero", "Respeita limites", "Querido por todos"],
    weaknesses: ["Às vezes contido demais", "Perde chances de zoeira épica", "Muito calculado"],
    tips: ["Seu equilíbrio é perfeito", "Às vezes pode se soltar mais", "Continue assim"],
  },
  C: {
    type: "C",
    title: "Anti-Zoeira",
    emoji: "😐",
    description: "Você é o Anti-Zoeira! Prefere não zoar, ri das piadas mas não participa muito. Você é sério, respeita os outros e acha zoeira pesada desnecessária!",
    traits: ["Sério(a)", "Respeitoso(a)", "Discreto(a)", "Observador(a)"],
    strengths: ["Nunca magoa ninguém", "Respeito constante", "Tranquilidade", "Confiável"],
    weaknesses: ["Pode parecer chato(a)", "Perde conexões de humor", "Muito sério(a)"],
    tips: ["Solte-se um pouco", "Zoeira leve aproxima", "Nem toda zoeira é pesada"],
  },
  D: {
    type: "D",
    title: "Zoeiro(a) Consciente",
    emoji: "🎯",
    description: "Você é o Zoeiro Consciente! Zoa quando sabe que vai ser bem recebido. Você lê o ambiente, conhece os limites e acerta na hora certa!",
    traits: ["Perceptivo(a)", "Inteligente", "Estratégico(a)", "Empático(a)"],
    strengths: ["Zoeira certeira", "Lê o ambiente", "Nunca erra o timing", "Querido por todos"],
    weaknesses: ["Às vezes calculado demais", "Pode perder espontaneidade", "Muito cuidadoso"],
    tips: ["Às vezes se joga", "Errar faz parte", "Espontaneidade também vale"],
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
