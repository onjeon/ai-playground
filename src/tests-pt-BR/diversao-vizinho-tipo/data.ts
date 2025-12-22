// Qual Tipo de Vizinho Você Atrai?
// Descubra que tipo de vizinho sempre aparece na sua vida!

export const questions = [
  {
    id: 1,
    question: "Você mora em qual tipo de lugar?",
    options: [
      { text: "Prédio grande, muitos apartamentos", type: "A" },
      { text: "Condomínio de casas, vizinhos próximos", type: "B" },
      { text: "Casa de rua, bairro tradicional", type: "C" },
      { text: "Lugar mais isolado, poucos vizinhos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando você se muda, geralmente o primeiro vizinho que conhece é...",
    options: [
      { text: "O curioso que já quer saber tudo da sua vida", type: "A" },
      { text: "O simpático que vem dar boas-vindas", type: "B" },
      { text: "O que reclama de alguma coisa logo de cara", type: "C" },
      { text: "Demora pra conhecer alguém", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sobre barulho de vizinhos, você...",
    options: [
      { text: "Sempre tenho vizinho barulhento, é sina", type: "A" },
      { text: "Normal, às vezes incomoda, às vezes eu que faço", type: "B" },
      { text: "Geralmente são tranquilos, tenho sorte", type: "C" },
      { text: "Não ouço nada, paredes grossas/distância", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Vizinho pedindo favor é comum na sua vida?",
    options: [
      { text: "Toda hora! Receber encomenda, emprestar algo...", type: "A" },
      { text: "De vez em quando, normal de vizinhança", type: "B" },
      { text: "Raramente, cada um na sua", type: "C" },
      { text: "Nunca, nem sei quem são meus vizinhos", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sobre festas/reuniões de vizinhos, você...",
    options: [
      { text: "Sempre rola, animação não falta", type: "A" },
      { text: "Ocasionalmente, datas comemorativas", type: "B" },
      { text: "Raro, cada um fica na sua", type: "C" },
      { text: "Nunca acontece por aqui", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Já teve problema sério com vizinho?",
    options: [
      { text: "Vários! Poderia escrever um livro", type: "A" },
      { text: "Um ou outro desentendimento, resolvido", type: "B" },
      { text: "Nada grave, convivência tranquila", type: "C" },
      { text: "Zero interação, zero problema", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Seu vizinho mais marcante foi...",
    options: [
      { text: "O fofoqueiro(a) que sabia de tudo de todos", type: "A" },
      { text: "O gente boa que virou amigo(a)", type: "B" },
      { text: "O estranho que ninguém sabia nada sobre", type: "C" },
      { text: "Nenhum, não lembro de vizinho marcante", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Animal de estimação de vizinho já te afetou?",
    options: [
      { text: "Cachorro latindo toda hora, é tortura", type: "A" },
      { text: "Às vezes incomoda, mas tolero", type: "B" },
      { text: "Não, são bem cuidados por aqui", type: "C" },
      { text: "Nem sei se têm pets", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Se pudesse escolher seus vizinhos, seriam...",
    options: [
      { text: "Pessoas animadas, que interagem", type: "A" },
      { text: "Gente educada, que respeita limites", type: "B" },
      { text: "Pessoas discretas, quase invisíveis", type: "C" },
      { text: "Nenhum vizinho, casa isolada", type: "D" },
    ],
  },
  {
    id: 10,
    question: "No geral, você acha que atrai vizinhos...",
    options: [
      { text: "Intensos, sempre tem história pra contar", type: "A" },
      { text: "Normais, gente comum como eu", type: "B" },
      { text: "Tranquilos, sem muito drama", type: "C" },
      { text: "Nem sei, não interajo o suficiente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Atrai Vizinhos Intensos",
    emoji: "🎭",
    percentage: 85,
    description: "Você atrai Vizinhos Intensos! Sua vida de vizinhança é uma novela. Sempre tem drama, história, personagens marcantes. Nunca é entediante!",
    characteristics: ["Movimentado(a)", "Social", "Centro das atenções", "Histórias pra contar"],
    advice: "Sua energia atrai gente intensa! Pode ser cansativo, mas também gera memórias. Aprenda a estabelecer limites quando precisar!",
  },
  B: {
    type: "B",
    title: "Atrai Vizinhos Comuns",
    emoji: "🏠",
    percentage: 75,
    description: "Você atrai Vizinhos Comuns! Gente normal, educada, com quem você tem relação saudável. Nem melhor amigo, nem inimigo - o equilíbrio perfeito!",
    characteristics: ["Equilibrado(a)", "Normal", "Estável", "Harmonioso(a)"],
    advice: "A normalidade é subestimada! Vizinhança tranquila é privilégio. Continue cultivando essa boa energia!",
  },
  C: {
    type: "C",
    title: "Atrai Vizinhos Discretos",
    emoji: "🤫",
    percentage: 65,
    description: "Você atrai Vizinhos Discretos! Gente que fica na dela, não incomoda, mal você percebe que existem. Paz e sossego garantidos!",
    characteristics: ["Tranquilo(a)", "Reservado(a)", "Pacífico(a)", "Sossegado(a)"],
    advice: "Que sorte ter vizinhos assim! Aproveite o sossego, mas não feche portas - às vezes um vizinho pode se tornar grande amigo!",
  },
  D: {
    type: "D",
    title: "Atrai... Ninguém?",
    emoji: "🏝️",
    percentage: 50,
    description: "Você atrai... Ninguém? Seja por escolha ou acaso, sua vida de vizinhança é praticamente inexistente. Solidão não é problema pra você!",
    characteristics: ["Isolado(a)", "Independente", "Autossuficiente", "Solitário(a)"],
    advice: "Paz e silêncio têm seu valor! Mas lembra que em emergências, conhecer o vizinho pode ser importante. Um mínimo de contato não faz mal!",
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
