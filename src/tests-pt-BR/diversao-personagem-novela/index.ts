// Qual Personagem de Novela Você Seria?
// Descubra qual tipo de personagem das novelas brasileiras combina com você!

export const questions = [
  {
    id: 1,
    question: "Como você reage quando descobre um segredo bombástico?",
    options: [
      { text: "Guardo pra usar na hora certa", type: "A" },
      { text: "Conto pra todo mundo!", type: "B" },
      { text: "Fico em choque e choro muito", type: "C" },
      { text: "Analiso a situação com calma", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual seria seu papel em uma trama de novela?",
    options: [
      { text: "O/A vilão/vilã que arma todas", type: "A" },
      { text: "O/A fofoqueiro(a) da cidade", type: "B" },
      { text: "O mocinho/mocinha sofredora", type: "C" },
      { text: "O/A conselheiro(a) sábio(a)", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lidaria com um triângulo amoroso?",
    options: [
      { text: "Manipulo os dois a meu favor", type: "A" },
      { text: "Faço o maior barraco!", type: "B" },
      { text: "Sofro em silêncio pelo amor", type: "C" },
      { text: "Converso civilizadamente", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual sua reação favorita de novela?",
    options: [
      { text: "O sorriso maldoso do vilão", type: "A" },
      { text: "O grito de surpresa", type: "B" },
      { text: "O choro dramático", type: "C" },
      { text: "O olhar profundo e sério", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Em uma festa de novela, você estaria...",
    options: [
      { text: "Tramando algo nos bastidores", type: "A" },
      { text: "No centro, sendo o assunto", type: "B" },
      { text: "Chorando no banheiro", type: "C" },
      { text: "Observando tudo discretamente", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual frase você mais diria?",
    options: [
      { text: "Você vai se arrepender!", type: "A" },
      { text: "Ai, meu Deus! Você não sabe da última!", type: "B" },
      { text: "Por que isso acontece comigo?", type: "C" },
      { text: "Calma, vamos resolver isso juntos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como seria seu figurino de novela?",
    options: [
      { text: "Elegante e poderoso, todo de preto", type: "A" },
      { text: "Colorido e chamativo", type: "B" },
      { text: "Simples e delicado", type: "C" },
      { text: "Clássico e discreto", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual cenário de novela combina com você?",
    options: [
      { text: "Mansão luxuosa com escritório secreto", type: "A" },
      { text: "Salão de beleza cheio de fofocas", type: "B" },
      { text: "Casinha humilde mas aconchegante", type: "C" },
      { text: "Fazenda tranquila no interior", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que você faria se descobrisse um filho perdido?",
    options: [
      { text: "Uso isso pra conseguir herança", type: "A" },
      { text: "Espalho a notícia pra cidade toda", type: "B" },
      { text: "Choro de emoção e abraço forte", type: "C" },
      { text: "Faço teste de DNA primeiro", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você terminaria um relacionamento na novela?",
    options: [
      { text: "Com uma vingança elaborada", type: "A" },
      { text: "Com um barraco épico em público", type: "B" },
      { text: "Chorando e pedindo mais uma chance", type: "C" },
      { text: "Conversando de forma madura", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual seria seu bordão de novela?",
    options: [
      { text: "Isso não vai ficar assim!", type: "A" },
      { text: "Menina, você não vai acreditar!", type: "B" },
      { text: "Meu Deus, por que eu?", type: "C" },
      { text: "Tudo tem seu tempo", type: "D" },
    ],
  },
  {
    id: 12,
    question: "No último capítulo, você estaria...",
    options: [
      { text: "Na cadeia ou fugindo do país", type: "A" },
      { text: "Contando tudo no programa de fofoca", type: "B" },
      { text: "Casando com o amor da vida", type: "C" },
      { text: "Em paz, curtindo a família", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Vilão/Vilã de Novela",
    emoji: "😈",
    description: "Você é o tipo que adora um drama e sabe como manipular situações! Inteligente e estratégico(a), você seria aquele personagem que todo mundo ama odiar. Suas cenas de maldade seriam icônicas!",
    traits: ["Estratégico(a)", "Calculista", "Carismático(a)", "Determinado(a)"],
    strengths: ["Inteligência emocional", "Capacidade de planejamento", "Presença marcante", "Resiliência"],
    weaknesses: ["Dificuldade em confiar", "Tendência à manipulação", "Orgulho excessivo"],
    tips: ["Use sua inteligência para o bem", "Aprenda a se abrir mais", "Nem tudo precisa ser uma competição"],
  },
  B: {
    type: "B",
    title: "Fofoqueiro(a) da Cidade",
    emoji: "📢",
    description: "Você é o coração da novela! Comunicativo(a) e sempre por dentro de tudo, você seria aquele personagem que faz a trama andar com suas descobertas. Nada acontece sem você saber!",
    traits: ["Comunicativo(a)", "Sociável", "Curioso(a)", "Expressivo(a)"],
    strengths: ["Networking natural", "Boa memória", "Habilidade social", "Entretenimento garantido"],
    weaknesses: ["Fala demais às vezes", "Dificuldade em guardar segredos", "Pode ser invasivo(a)"],
    tips: ["Aprenda a filtrar informações", "Respeite a privacidade alheia", "Use sua rede para ajudar os outros"],
  },
  C: {
    type: "C",
    title: "Mocinho/Mocinha Sofredora",
    emoji: "😢",
    description: "Você é puro coração e emoção! Sensível e romântico(a), você seria aquele personagem que conquista o público com sua história de superação. Seu amor verdadeiro é o foco da trama!",
    traits: ["Sensível", "Romântico(a)", "Resiliente", "Empático(a)"],
    strengths: ["Capacidade de amar", "Empatia profunda", "Força interior", "Pureza de coração"],
    weaknesses: ["Muito emotivo(a)", "Ingênuo(a) às vezes", "Demora a reagir"],
    tips: ["Confie mais em si mesmo(a)", "Não tenha medo de se impor", "Seu coração bom merece proteção"],
  },
  D: {
    type: "D",
    title: "Sábio(a) Conselheiro(a)",
    emoji: "🦉",
    description: "Você é a voz da razão na novela! Equilibrado(a) e sensato(a), você seria aquele personagem que todos procuram para conselhos. Sua sabedoria ajuda a resolver os maiores conflitos!",
    traits: ["Equilibrado(a)", "Sábio(a)", "Paciente", "Confiável"],
    strengths: ["Visão clara das situações", "Capacidade de mediação", "Confiança dos outros", "Estabilidade emocional"],
    weaknesses: ["Pode parecer distante", "Às vezes passivo(a) demais", "Dificuldade em se envolver"],
    tips: ["Permita-se viver mais emoções", "Nem sempre precisa ser o adulto da situação", "Divirta-se um pouco mais"],
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
