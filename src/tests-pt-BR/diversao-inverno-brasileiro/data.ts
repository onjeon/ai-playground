// Qual Seu Tipo no Inverno Brasileiro?
// Descubra como você curte o friozinho!

export const questions = [
  {
    id: 1,
    question: "O inverno chegou! Sua primeira reação é...",
    options: [
      { text: "Vou pra Serra, quero ver neblina e lareira", type: "A" },
      { text: "Casaco, cobertor, sofá e série", type: "B" },
      { text: "Continuo normal, nem é tão frio assim", type: "C" },
      { text: "Reclamo muito, odeio frio", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Comida de inverno pra você é...",
    options: [
      { text: "Fondue, chocolate quente, vinho", type: "A" },
      { text: "Sopão, caldo verde, café quentinho", type: "B" },
      { text: "Como a mesma coisa o ano todo", type: "C" },
      { text: "Qualquer coisa quente pra sobreviver", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Seu guarda-roupa de inverno tem...",
    options: [
      { text: "Casacos estilosos, botas, cachecóis", type: "A" },
      { text: "O básico: moletom, blusa de frio, meias grossas", type: "B" },
      { text: "Praticamente nada, improviso", type: "C" },
      { text: "Tudo que existe, ainda assim passo frio", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Manhã gelada de inverno. Você...",
    options: [
      { text: "Levanto animado(a), adoro esse clima", type: "A" },
      { text: "Fico mais 5 minutinhos na cama quentinha", type: "B" },
      { text: "Levanto normal, nem percebo diferença", type: "C" },
      { text: "Só saio da cama por obrigação absoluta", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Programa ideal de inverno pra você é...",
    options: [
      { text: "Viagem pra Gramado, Campos do Jordão, serra", type: "A" },
      { text: "Ficar em casa, cobertor, filme, pipoca", type: "B" },
      { text: "Os mesmos de sempre, independente do clima", type: "C" },
      { text: "Qualquer lugar com aquecedor", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Banho no inverno. Você...",
    options: [
      { text: "Adoro banho quente demorado, é o melhor", type: "A" },
      { text: "Normal, só capricho mais na água quente", type: "B" },
      { text: "Rápido como sempre, não muda nada", type: "C" },
      { text: "Sofro pra entrar e sofro pra sair", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sobre usar camadas de roupa, você...",
    options: [
      { text: "Amo! Blusa, casaco, jaqueta, cachecol", type: "A" },
      { text: "Uso o necessário pra ficar confortável", type: "B" },
      { text: "Acho exagero, uma blusa resolve", type: "C" },
      { text: "Uso todas e ainda sinto frio", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Ar-condicionado/aquecedor no inverno. Você...",
    options: [
      { text: "Nem preciso, adoro o frio natural", type: "A" },
      { text: "Uso moderadamente quando aperta", type: "B" },
      { text: "Não tenho e me viro bem", type: "C" },
      { text: "Ligado 24h, é questão de sobrevivência", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Friozinho de inverno + chuva. Você...",
    options: [
      { text: "Perfeito! Melhor combinação do mundo", type: "A" },
      { text: "Gosto, dá vontade de ficar de moleza", type: "B" },
      { text: "Tanto faz, vida segue normal", type: "C" },
      { text: "Pior cenário possível, só quero verão", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sua frase sobre o inverno brasileiro é...",
    options: [
      { text: "Melhor estação do ano, queria que durasse mais!", type: "A" },
      { text: "Tem seu charme, gosto do aconchego", type: "B" },
      { text: "É leve, nem dá pra chamar de inverno", type: "C" },
      { text: "Quando acaba? Já quero calor de volta!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Apaixonado pelo Frio",
    emoji: "❄️",
    percentage: 95,
    description: "Você é O Apaixonado pelo Frio! Inverno é sua estação favorita. Viagens pra serra, fondue, lareira - você vive intensamente cada dia gelado!",
    characteristics: ["Aconchegante", "Romântico(a)", "Estiloso(a)", "Aventureiro(a)"],
    advice: "Aproveita cada momento do inverno brasileiro! Mas lembra que são só alguns meses, então curte sem moderação enquanto dura!",
  },
  B: {
    type: "B",
    title: "O Caseiro de Inverno",
    emoji: "🛋️",
    percentage: 80,
    description: "Você é O Caseiro de Inverno! Frio pra você é sinônimo de ficar em casa, cobertor, série e comida quente. Aconchego é sua palavra do inverno!",
    characteristics: ["Caseiro(a)", "Relaxado(a)", "Confortável", "Prático(a)"],
    advice: "Nada melhor que um sofá quentinho! Só não deixa o inverno passar sem sair de casa nenhuma vez. Um passeio no frio também é gostoso!",
  },
  C: {
    type: "C",
    title: "O Indiferente Climático",
    emoji: "😐",
    percentage: 65,
    description: "Você é O Indiferente Climático! Faz frio? Legal. Faz calor? Legal também. Você não muda muito a rotina por causa do clima, vida que segue!",
    characteristics: ["Adaptável", "Prático(a)", "Equilibrado(a)", "Desapegado(a)"],
    advice: "Sua praticidade é ótima! Mas às vezes vale aproveitar as particularidades de cada estação. O inverno tem seus encantos!",
  },
  D: {
    type: "D",
    title: "O Inimigo do Frio",
    emoji: "🥶",
    percentage: 45,
    description: "Você é O Inimigo do Frio! Inverno é sofrimento puro pra você. Sair da cama, tomar banho, sair de casa - tudo vira uma batalha contra o frio!",
    characteristics: ["Friorento(a)", "Sensível", "Dramático(a)", "Impaciente"],
    advice: "O inverno brasileiro nem é tão rigoroso assim! Investe em boas roupas e aprende a curtir o friozinho. Senão, muda pra praia!",
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
