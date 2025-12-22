// Como Você É Durante a Copa do Mundo?
// Descubra seu perfil de torcedor durante o maior evento do futebol!

export const questions = [
  {
    id: 1,
    question: "Quando começa a Copa, você...",
    options: [
      { text: "Já tenho a tabela decorada e calendário bloqueado", type: "A" },
      { text: "Organizo churrascos e encontros pra cada jogo", type: "B" },
      { text: "Assisto quando dá, sem neura", type: "C" },
      { text: "Aproveito pra conhecer outras culturas e times", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que você veste nos jogos do Brasil?",
    options: [
      { text: "Camisa oficial da seleção, sempre!", type: "A" },
      { text: "Amarelo, verde, qualquer coisa BR", type: "B" },
      { text: "A roupa que estiver usando", type: "C" },
      { text: "Algo que represente a cultura do adversário", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você reage a um gol do Brasil?",
    options: [
      { text: "Grito, pulo, abraço desconhecidos", type: "A" },
      { text: "Comemoro muito com os amigos", type: "B" },
      { text: "Fico feliz, dou um sorriso", type: "C" },
      { text: "Comemoro e já penso no próximo jogo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que você faz no intervalo?",
    options: [
      { text: "Analiso o jogo e dou palpites", type: "A" },
      { text: "Vou pegar mais comida e bebida", type: "B" },
      { text: "Confiro o celular ou faço outras coisas", type: "C" },
      { text: "Pesquiso sobre o time adversário", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Se o Brasil perder, você...",
    options: [
      { text: "Fico arrasado(a) por dias", type: "A" },
      { text: "Fico triste mas o churrasco continua", type: "B" },
      { text: "Vida que segue, nem era tão importante", type: "C" },
      { text: "Passo a torcer pra outro time interessante", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual sua relação com superstições na Copa?",
    options: [
      { text: "Tenho várias! Camisa da sorte, lugar fixo", type: "A" },
      { text: "Algumas, tipo estar no mesmo lugar", type: "B" },
      { text: "Não acredito nisso", type: "C" },
      { text: "Acho curioso as superstições de outros países", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que você faz durante jogos de outros países?",
    options: [
      { text: "Assisto pra analisar possíveis adversários", type: "A" },
      { text: "Se tiver festa, assisto junto", type: "B" },
      { text: "Raramente assisto", type: "C" },
      { text: "Adoro! Descubro times e jogadores novos", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual sua comida de Copa?",
    options: [
      { text: "Churrasco brasileiro completo", type: "A" },
      { text: "Pizza, salgadinhos, o que tiver", type: "B" },
      { text: "O que estiver na geladeira", type: "C" },
      { text: "Experimentar comidas do país que está jogando", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você acompanha os jogos?",
    options: [
      { text: "TV grande, som alto, como se fosse estádio", type: "A" },
      { text: "Com amigos, em casa ou bar", type: "B" },
      { text: "Pelo celular ou onde der", type: "C" },
      { text: "Assistindo a cobertura internacional também", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você pensa sobre o técnico da seleção?",
    options: [
      { text: "Tenho opinião forte! Concordo ou discordo muito", type: "A" },
      { text: "Confio no trabalho, torço pra dar certo", type: "B" },
      { text: "Não acompanho muito essas questões", type: "C" },
      { text: "Comparo com técnicos de outras seleções", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Depois da Copa, você...",
    options: [
      { text: "Fico com saudade até a próxima", type: "A" },
      { text: "Volto à rotina normal aos poucos", type: "B" },
      { text: "Nem percebo que acabou", type: "C" },
      { text: "Continuo acompanhando futebol mundial", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual sua memória favorita de Copa?",
    options: [
      { text: "Os títulos brasileiros, cada detalhe", type: "A" },
      { text: "Os encontros com família e amigos", type: "B" },
      { text: "Não tenho uma específica", type: "C" },
      { text: "Grandes jogos, mesmo sem o Brasil", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Torcedor Fanático de Copa",
    emoji: "🏆",
    description: "Você é o torcedor fanático de Copa! Vive cada minuto intensamente, sabe todas as estatísticas e sofre/comemora como se estivesse em campo. Copa é coisa séria!",
    traits: ["Apaixonado(a)", "Intenso(a)", "Conhecedor(a)", "Nacionalista"],
    strengths: ["Paixão genuína", "Conhecimento profundo", "Viver intensamente", "Patriotismo"],
    weaknesses: ["Sofre demais", "Pode estragar encontros", "Leva muito a sério"],
    tips: ["Curta também a companhia", "É só um jogo no fim das contas", "Perdas acontecem"],
  },
  B: {
    type: "B",
    title: "Torcedor Social de Copa",
    emoji: "🍺",
    description: "Você é o torcedor social! Copa é desculpa para reunir a galera, fazer churrasco e criar memórias. O resultado importa, mas a companhia mais ainda!",
    traits: ["Sociável", "Festeiro(a)", "Equilibrado(a)", "Integrador(a)"],
    strengths: ["Criar encontros", "Equilibrar torcer e curtir", "Boas memórias", "Unir pessoas"],
    weaknesses: ["Pode perder o foco do jogo", "Às vezes superficial", "Mais festa que futebol"],
    tips: ["Preste atenção nos jogos também", "O futebol em si é legal", "Equilibre festa e foco"],
  },
  C: {
    type: "C",
    title: "Torcedor Casual de Copa",
    emoji: "📱",
    description: "Você é o torcedor casual! Assiste quando dá, não sofre nem comemora demais. Copa é legal, mas a vida continua normalmente!",
    traits: ["Tranquilo(a)", "Equilibrado(a)", "Desapegado(a)", "Prático(a)"],
    strengths: ["Não sofrer por jogo", "Vida equilibrada", "Saúde emocional", "Praticidade"],
    weaknesses: ["Pode parecer desinteressado(a)", "Perde a experiência coletiva", "Não entende a emoção"],
    tips: ["Se permita mais emoção", "A experiência coletiva é boa", "Entre no clima às vezes"],
  },
  D: {
    type: "D",
    title: "Torcedor Globalizado de Copa",
    emoji: "🌍",
    description: "Você é o torcedor globalizado! Ama o futebol mundial, conhece times de todos os países e usa a Copa para expandir seus horizontes culturais!",
    traits: ["Curioso(a)", "Cultural", "Globalizado(a)", "Aberto(a)"],
    strengths: ["Visão ampla", "Conhecimento mundial", "Curiosidade cultural", "Imparcialidade"],
    weaknesses: ["Pode parecer não torcer pro Brasil", "Às vezes intelectual demais", "Falta paixão local"],
    tips: ["O Brasil também é legal!", "Paixão pelo país é válida", "Equilibre global e local"],
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
