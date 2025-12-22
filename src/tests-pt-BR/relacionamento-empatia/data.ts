// Empatia no Relacionamento
// Descubra seu nível de empatia no amor!

export const questions = [
  {
    id: 1,
    question: "Quando seu parceiro(a) chega chateado(a), você naturalmente:",
    options: [
      { text: "Sinto a energia e já percebo que algo está errado", type: "A" },
      { text: "Pergunto o que houve e presto atenção nos sinais", type: "B" },
      { text: "Espero que me conte, não gosto de presumir", type: "C" },
      { text: "Às vezes demoro pra perceber que tem algo errado", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando seu amor passa por um problema no trabalho, você:",
    options: [
      { text: "Sinto como se fosse meu problema também", type: "A" },
      { text: "Me preocupo e faço o que posso pra ajudar", type: "B" },
      { text: "Ofereço apoio, mas é problema dele(a)", type: "C" },
      { text: "Cada um lida com seus próprios problemas", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você consegue entender o ponto de vista do seu par mesmo quando discordam?",
    options: [
      { text: "Sim, mesmo discordando consigo ver pelos olhos dele(a)", type: "A" },
      { text: "Geralmente sim, faço esforço pra entender", type: "B" },
      { text: "Às vezes, depende do assunto", type: "C" },
      { text: "É difícil quando acho que estou certo(a)", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Se seu parceiro(a) está triste por algo que você acha bobagem:",
    options: [
      { text: "Respeito o sentimento, pra ele(a) é real e importante", type: "A" },
      { text: "Tento acolher mesmo não entendendo direito", type: "B" },
      { text: "Acabo deixando transparecer que acho exagero", type: "C" },
      { text: "Digo que não é pra tanto, tento fazer ver razão", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quando vocês brigam, você consegue se colocar no lugar do outro?",
    options: [
      { text: "Sim, mesmo com raiva tento entender o lado dele(a)", type: "A" },
      { text: "Depois que esfria a cabeça, sim", type: "B" },
      { text: "É difícil no calor do momento", type: "C" },
      { text: "Geralmente estou focado(a) no meu ponto", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você percebe quando seu amor está fingindo que está bem?",
    options: [
      { text: "Sempre, conheço cada expressão e tom de voz", type: "A" },
      { text: "Na maioria das vezes sim", type: "B" },
      { text: "Às vezes demoro mas acabo percebendo", type: "C" },
      { text: "Se não me contar, dificilmente percebo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quando seu parceiro(a) comete um erro, você:",
    options: [
      { text: "Tento entender o contexto antes de qualquer julgamento", type: "A" },
      { text: "Fico chateado(a), mas procuro conversar com calma", type: "B" },
      { text: "Aponto o erro, mas acabo entendendo depois", type: "C" },
      { text: "Foco no erro e cobro explicações", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sobre sentir as emoções do seu parceiro(a):",
    options: [
      { text: "Absorvo muito, às vezes até demais", type: "A" },
      { text: "Sinto junto, mas consigo separar do que é meu", type: "B" },
      { text: "Percebo, mas não afeta tanto meu humor", type: "C" },
      { text: "Cada um sente o seu, não misturo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quando seu amor tem uma reação que você não entende:",
    options: [
      { text: "Busco entender a história por trás, deve ter um motivo", type: "A" },
      { text: "Pergunto com cuidado pra tentar compreender", type: "B" },
      { text: "Fico confuso(a), mas respeito", type: "C" },
      { text: "Acho estranho e às vezes questiono", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você descreveria sua capacidade empática no amor?",
    options: [
      { text: "Alta - sinto junto, sofro junto, me alegro junto", type: "A" },
      { text: "Boa - me esforço pra entender e acolher", type: "B" },
      { text: "Média - nem sempre consigo me colocar no lugar", type: "C" },
      { text: "Em desenvolvimento - é algo que preciso trabalhar", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Empata Profundo(a)",
    emoji: "💗",
    percentage: 95,
    description: "Você tem empatia profunda nos relacionamentos! Sente junto, percebe nuances e se coloca naturalmente no lugar do outro. Seu parceiro(a) se sente verdadeiramente compreendido(a) com você!",
    characteristics: ["Altamente empático(a)", "Sensível", "Acolhedor(a)", "Intuitivo(a)"],
    advice: "Sua empatia é um dom! Só cuide pra não absorver demais a dor do outro e esquecer de você. Estabeleça limites saudáveis pra não se sobrecarregar emocionalmente!",
  },
  B: {
    type: "B",
    title: "Empata Consciente",
    emoji: "🤲",
    percentage: 78,
    description: "Você tem boa empatia e se esforça conscientemente pra entender seu parceiro(a)! Sabe separar o que é seu do que é do outro, mas ainda assim oferece acolhimento genuíno!",
    characteristics: ["Empático(a)", "Equilibrado(a)", "Esforçado(a)", "Presente"],
    advice: "Você está num bom lugar! Continue praticando a escuta ativa e buscando entender antes de reagir. Sua empatia pode crescer ainda mais com a prática!",
  },
  C: {
    type: "C",
    title: "Empata em Construção",
    emoji: "🌱",
    percentage: 55,
    description: "Sua empatia está em desenvolvimento! Você tem boas intenções, mas nem sempre consegue se colocar completamente no lugar do outro. É algo que pode ser trabalhado!",
    characteristics: ["Em desenvolvimento", "Às vezes distante", "Racional primeiro", "Potencial de crescimento"],
    advice: "A empatia pode ser desenvolvida! Pratique pausar antes de reagir e genuinamente perguntar: 'Como será que ele(a) está se sentindo?' Isso transforma relacionamentos!",
  },
  D: {
    type: "D",
    title: "Empata em Aprendizado",
    emoji: "📚",
    percentage: 35,
    description: "Você reconhece que empatia é uma área pra crescer! Tende a focar mais no seu ponto de vista e às vezes tem dificuldade em entender as emoções do outro. Mas o importante é ter consciência!",
    characteristics: ["Focado(a) em si", "Racional", "Direto(a)", "Aprendendo"],
    advice: "Empatia é uma habilidade que pode ser desenvolvida! Comece prestando mais atenção nas expressões e tons de voz do seu par. Pergunte mais e julgue menos. Vale muito o esforço!",
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
