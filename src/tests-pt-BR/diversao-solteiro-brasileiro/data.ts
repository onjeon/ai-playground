// Qual Tipo de Solteiro Brasileiro Você É?
// Descubra seu perfil na solteirice!

export const questions = [
  {
    id: 1,
    question: "Você está solteiro(a) porque...",
    options: [
      { text: "Escolhi! Curtindo a liberdade", type: "A" },
      { text: "Ainda não achei a pessoa certa", type: "B" },
      { text: "Saí de um relacionamento recentemente", type: "C" },
      { text: "Ninguém me aguenta... brincadeira!", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Apps de relacionamento pra você são...",
    options: [
      { text: "Passatempo divertido, sem compromisso", type: "A" },
      { text: "Ferramenta útil pra conhecer gente", type: "B" },
      { text: "Tentei, mas não é minha praia", type: "C" },
      { text: "Desinstalei 500 vezes, mas volto sempre", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sábado à noite sozinho(a). Você...",
    options: [
      { text: "Curto! Netflix, vinho, minha própria companhia", type: "A" },
      { text: "Chamo amigos, saio pra balada, agito", type: "B" },
      { text: "Fico em casa, às vezes bate uma saudade", type: "C" },
      { text: "Maratona de apps procurando match", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quando perguntam 'e o namorado(a)?', você...",
    options: [
      { text: "Respondo tranquilo(a), não me incomoda", type: "A" },
      { text: "Digo que tô procurando, numa boa", type: "B" },
      { text: "Fico meio incomodado(a) com a pergunta", type: "C" },
      { text: "Conto uma história elaborada pra escapar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sobre encontros casuais, você pensa que...",
    options: [
      { text: "Faz parte da solteirice, curto sem culpa", type: "A" },
      { text: "Ok quando rola, mas prefiro algo mais sério", type: "B" },
      { text: "Não é muito minha praia, quero conexão", type: "C" },
      { text: "É isso que tem, então vamos que vamos", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Casamento dos amigos. Você...",
    options: [
      { text: "Vou feliz, danço, curto, sem drama", type: "A" },
      { text: "Fico feliz por eles, quem sabe não é o próximo", type: "B" },
      { text: "Fico um pouco pensativo(a), mas vou", type: "C" },
      { text: "Já começo a pensar se vou conhecer alguém lá", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sobre morar sozinho(a), você...",
    options: [
      { text: "Amo! Minha casa, minhas regras", type: "A" },
      { text: "Gosto, mas dividir com alguém seria legal", type: "B" },
      { text: "Às vezes bate uma solidão", type: "C" },
      { text: "É o que tem pra hoje, né", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dia dos Namorados. Você...",
    options: [
      { text: "Dia normal, não me afeta", type: "A" },
      { text: "Curto com amigos solteiros, 'festa dos singles'", type: "B" },
      { text: "Prefiro ignorar essa data", type: "C" },
      { text: "Tento garantir um encontro de última hora", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que você mais gosta na solteirice?",
    options: [
      { text: "Liberdade total, fazer o que quiser", type: "A" },
      { text: "Conhecer pessoas diferentes", type: "B" },
      { text: "Tempo pra me conhecer melhor", type: "C" },
      { text: "Gosto? Tô esperando acabar logo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Se aparecer a pessoa certa, você...",
    options: [
      { text: "Avalio bem antes de abrir mão da liberdade", type: "A" },
      { text: "Invisto de verdade, quero algo sério", type: "B" },
      { text: "Me jogo, faz tempo que espero", type: "C" },
      { text: "Corro o risco de assustar de tão empolgado(a)", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Solteiro(a) por Opção",
    emoji: "👑",
    percentage: 95,
    description: "Você é Solteiro(a) por Opção! Ama sua liberdade, curte sua própria companhia, não tem pressa. A solteirice é um estilo de vida escolhido com orgulho!",
    characteristics: ["Independente", "Seguro(a)", "Livre", "Realizado(a)"],
    advice: "Parabéns por estar bem consigo mesmo(a)! Essa segurança é muito atraente. Quando/se quiser, vai encontrar alguém à altura!",
  },
  B: {
    type: "B",
    title: "Solteiro(a) em Busca",
    emoji: "🔍",
    percentage: 80,
    description: "Você é Solteiro(a) em Busca! Curte a solteirice, mas está aberto(a) e buscando ativamente. Otimista, acredita que a pessoa certa vai aparecer!",
    characteristics: ["Otimista", "Aberto(a)", "Sociável", "Esperançoso(a)"],
    advice: "Sua atitude positiva é ótima! Continue conhecendo pessoas, se divertindo, mas sem desespero. O amor vem quando a gente menos espera!",
  },
  C: {
    type: "C",
    title: "Solteiro(a) Reflexivo(a)",
    emoji: "🤔",
    percentage: 65,
    description: "Você é Solteiro(a) Reflexivo(a)! Não odeia estar solteiro(a), mas sente falta de uma conexão mais profunda. Está num momento de autoconhecimento!",
    characteristics: ["Introspectivo(a)", "Sensível", "Profundo(a)", "Honesto(a)"],
    advice: "Esse momento de reflexão é importante! Use pra se conhecer melhor, entender o que quer. A solteirice pode ser transformadora!",
  },
  D: {
    type: "D",
    title: "Solteiro(a) Desesperado(a)",
    emoji: "😅",
    percentage: 50,
    description: "Você é Solteiro(a) Desesperado(a)! A solteirice pesa um pouco, você queria muito estar em um relacionamento. A busca às vezes parece cansativa!",
    characteristics: ["Ansioso(a)", "Romântico(a)", "Intenso(a)", "Persistente"],
    advice: "Respira! A pressa é inimiga do amor. Foca em você, curte sua vida, o desespero espanta. Quando relaxar, a pessoa certa aparece!",
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
