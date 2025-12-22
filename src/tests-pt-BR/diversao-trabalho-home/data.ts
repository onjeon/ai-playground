// Qual Seu Estilo no Home Office?
// Descubra como você trabalha de casa!

export const questions = [
  {
    id: 1,
    question: "Seu dress code no home office é...",
    options: [
      { text: "Arrumado(a) como se fosse pro escritório", type: "A" },
      { text: "Casual mas apresentável pra reuniões", type: "B" },
      { text: "Pijama na parte de baixo, camisa em cima", type: "C" },
      { text: "Pijama o dia todo, sem vergonha", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Onde você trabalha em casa?",
    options: [
      { text: "Home office montado com mesa e cadeira certas", type: "A" },
      { text: "Mesa da sala ou quarto, organizadinho", type: "B" },
      { text: "Sofá, cama, onde der vontade", type: "C" },
      { text: "Cada dia em um lugar diferente", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Reunião por vídeo. Você...",
    options: [
      { text: "Câmera ligada, cenário arrumado, microfone bom", type: "A" },
      { text: "Câmera ligada quando precisa", type: "B" },
      { text: "Câmera desligada sempre que possível", type: "C" },
      { text: "Participo pelo celular do sofá", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como são seus horários de trabalho?",
    options: [
      { text: "Fixos, como no escritório", type: "A" },
      { text: "Flexíveis mas dentro do expediente", type: "B" },
      { text: "Faço quando dá, compenso depois", type: "C" },
      { text: "Trabalho de madrugada, durmo de tarde", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual sua maior distração em casa?",
    options: [
      { text: "Consigo focar bem, poucas distrações", type: "A" },
      { text: "Celular e redes sociais às vezes", type: "B" },
      { text: "Geladeira, Netflix, cama...", type: "C" },
      { text: "Tudo me distrai, é um desafio constante", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Hora do almoço no home office:",
    options: [
      { text: "Almoço em horário certo, depois volto ao trabalho", type: "A" },
      { text: "Como algo rápido e continuo trabalhando", type: "B" },
      { text: "Almoço, descanso, assisto algo, demora...", type: "C" },
      { text: "Que horário de almoço? Como quando lembro", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você separa trabalho e vida pessoal?",
    options: [
      { text: "Muito bem! Horário de trabalho é trabalho", type: "A" },
      { text: "Relativamente bem, com algumas exceções", type: "B" },
      { text: "É meio misturado, confesso", type: "C" },
      { text: "Que separação? Virou tudo uma coisa só", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Seu maior desafio no home office é...",
    options: [
      { text: "Desligar do trabalho no fim do dia", type: "A" },
      { text: "Comunicação com a equipe à distância", type: "B" },
      { text: "Manter o foco e a produtividade", type: "C" },
      { text: "Não cair na cama pra tirar um cochilo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Café no home office:",
    options: [
      { text: "Faço um bom café como se estivesse no escritório", type: "A" },
      { text: "Sempre com café do lado, essencial", type: "B" },
      { text: "Às vezes café, às vezes outras coisas", type: "C" },
      { text: "Esqueço de tomar, de comer... de tudo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sinceramente, você prefere...",
    options: [
      { text: "Escritório presencial, sinto falta", type: "A" },
      { text: "Híbrido: alguns dias em casa, outros no escritório", type: "B" },
      { text: "Home office pra sempre!", type: "C" },
      { text: "Trabalhar de qualquer lugar, nem em casa", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Profissional Home Office",
    emoji: "💼",
    percentage: 95,
    description: "Você é O Profissional Home Office! Mesmo em casa, você mantém a disciplina de escritório. Setup organizado, horários fixos, produtividade em alta. Você prova que home office pode ser sério!",
    characteristics: ["Disciplinado(a)", "Organizado(a)", "Profissional", "Focado(a)"],
    advice: "Sua disciplina é admirável! Mas lembre-se de aproveitar a flexibilidade do home office também. Às vezes trabalhar de pijama faz bem!",
  },
  B: {
    type: "B",
    title: "O Equilibrista do Lar",
    emoji: "⚖️",
    percentage: 85,
    description: "Você é O Equilibrista do Lar! Encontrou o meio-termo perfeito entre produtividade e conforto de casa. Trabalha bem, mas também aproveita as vantagens do home office. Equilíbrio é a chave!",
    characteristics: ["Equilibrado(a)", "Adaptável", "Prático(a)", "Flexível"],
    advice: "Você achou a fórmula certa! Continue mantendo esse equilíbrio saudável entre trabalho e vida em casa. É assim que se faz!",
  },
  C: {
    type: "C",
    title: "O Confortável Produtivo",
    emoji: "🛋️",
    percentage: 70,
    description: "Você é O Confortável Produtivo! Trabalha no seu ritmo, no seu conforto. Pode demorar mais, pode ter distrações, mas no final entrega. Pra você, home office é sobre flexibilidade!",
    characteristics: ["Relaxado(a)", "Flexível", "Autêntico(a)", "Adaptável"],
    advice: "Seu estilo descontraído funciona pra você, e tá tudo bem! Só fique atento(a) aos prazos e tente ter um cantinho mais produtivo pra dias importantes.",
  },
  D: {
    type: "D",
    title: "O Caótico Criativo",
    emoji: "🌀",
    percentage: 55,
    description: "Você é O Caótico Criativo! Home office pra você é um desafio constante. Horários malucos, distrações infinitas, mas de algum jeito você faz acontecer. Seu estilo é imprevisível!",
    characteristics: ["Espontâneo(a)", "Criativo(a)", "Desorganizado(a)", "Único(a)"],
    advice: "Seu caos tem seu charme, mas cuidado pra não atrapalhar sua vida! Tenta criar pelo menos uma rotina básica. Seu eu do futuro agradece!",
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
