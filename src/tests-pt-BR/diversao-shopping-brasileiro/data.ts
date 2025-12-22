// Tipo no Shopping
// Descubra seu estilo no shopping brasileiro!

export const questions = [
  {
    id: 1,
    question: "Você entra no shopping pra...",
    options: [
      { text: "Comprar algo específico e sair", type: "A" },
      { text: "Passear, ver vitrines, tomar um café", type: "B" },
      { text: "Aproveitar o ar-condicionado e a praça de alimentação", type: "C" },
      { text: "Ir ao cinema ou algum evento", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Na praça de alimentação, você...",
    options: [
      { text: "Como rápido e volto às compras", type: "A" },
      { text: "Escolho com calma, dou umas voltas antes", type: "B" },
      { text: "Vou no favorito de sempre", type: "C" },
      { text: "É o motivo principal de eu estar aqui", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Uma loja tem promoção de 50%. Você...",
    options: [
      { text: "Entro só se precisar de algo de lá", type: "A" },
      { text: "Dou uma olhada, vai que acho algo bom", type: "B" },
      { text: "Entro correndo, promoção é meu chamado", type: "C" },
      { text: "Desconfio, promoção assim tem pegadinha", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O estacionamento tá lotado. Você...",
    options: [
      { text: "Fico rodando até achar vaga perto", type: "A" },
      { text: "Estaciono longe mesmo, preciso andar", type: "B" },
      { text: "Vou de Uber/transporte pra não ter esse problema", type: "C" },
      { text: "Desisto e vou outro dia", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você prova roupa na loja e não gosta. Você...",
    options: [
      { text: "Deixo na cabine mesmo, alguém vai guardar", type: "A" },
      { text: "Devolvo pro vendedor educadamente", type: "B" },
      { text: "Tento pendurar de volta no lugar", type: "C" },
      { text: "Nem provo, já sei meu tamanho", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Vendedor insistente te aborda. Sua reação?",
    options: [
      { text: "'Só olhando, obrigado' e sigo em frente", type: "A" },
      { text: "Ouço o que ele tem a dizer, vai que interessa", type: "B" },
      { text: "Finjo que tô no celular ou com pressa", type: "C" },
      { text: "Converso, às vezes descubro coisas boas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você tá no shopping há 2 horas. Como se sente?",
    options: [
      { text: "Já quero ir embora, cansativo demais", type: "A" },
      { text: "Ainda tenho energia, bora mais lojas", type: "B" },
      { text: "Hora de uma pausa pro café", type: "C" },
      { text: "Nem vi o tempo passar, tô feliz aqui", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Black Friday no shopping. Você...",
    options: [
      { text: "Evito, muito cheio e loucura", type: "A" },
      { text: "Vou cedo pra pegar as melhores ofertas", type: "B" },
      { text: "Vou online, mais prático", type: "C" },
      { text: "Adoro a energia, é quase um esporte", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Passa pela loja de eletrônicos. Você...",
    options: [
      { text: "Entro só se precisar de algo", type: "A" },
      { text: "Dou uma olhada nas novidades sempre", type: "B" },
      { text: "Fico testando os produtos por diversão", type: "C" },
      { text: "Pesquiso online antes de ir presencial", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pra você, shopping é...",
    options: [
      { text: "Lugar de resolver compras necessárias", type: "A" },
      { text: "Passeio e entretenimento", type: "B" },
      { text: "Refúgio do calor com ar-condicionado", type: "C" },
      { text: "Ponto de encontro com amigos e família", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Objetivo do Shopping",
    emoji: "🎯",
    percentage: 75,
    description: "Você é O Objetivo do Shopping! Entra, compra o que precisa e sai. Sem passeio, sem volta, sem distração. Seu tempo é precioso e shopping não é parque de diversões!",
    characteristics: ["Prático(a)", "Focado(a)", "Eficiente", "Decidido(a)"],
    advice: "Sua eficiência é admirável! Mas às vezes um passeio sem compromisso pode ser relaxante. Deixe-se surpreender por uma vitrine diferente!",
  },
  B: {
    type: "B",
    title: "O Explorador de Shopping",
    emoji: "🛍️",
    percentage: 85,
    description: "Você é O Explorador de Shopping! Adora ver vitrines, descobrir lojas novas e passear pelos corredores. O shopping é seu parque de diversões particular!",
    characteristics: ["Curioso(a)", "Paciente", "Aventureiro(a)", "Eclético(a)"],
    advice: "Continue explorando! Sua capacidade de descobrir tesouros escondidos é um dom. Só cuida do cartão de crédito nas promoções!",
  },
  C: {
    type: "C",
    title: "O Confortável do Shopping",
    emoji: "❄️",
    percentage: 80,
    description: "Você é O Confortável do Shopping! Ar-condicionado, praça de alimentação, wifi grátis... O shopping é seu oásis urbano! Compras são opcionais, conforto é obrigatório!",
    characteristics: ["Relaxado(a)", "Prático(a)", "Esperto(a)", "Confortável"],
    advice: "Você descobriu o segredo: shopping é sobre conforto! Aproveite esse espaço climatizado e as comidinhas, você merece!",
  },
  D: {
    type: "D",
    title: "O Social do Shopping",
    emoji: "👥",
    percentage: 90,
    description: "Você é O Social do Shopping! Pra você, shopping é ponto de encontro. Cinema, café, comida e muita conversa. As compras são só desculpa pra estar junto!",
    characteristics: ["Sociável", "Comunicativo(a)", "Alegre", "Conectado(a)"],
    advice: "Sua energia social transforma qualquer ida ao shopping numa festa! Continue reunindo as pessoas - você é o coração do grupo!",
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
