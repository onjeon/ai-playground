// Teste de Empatia
// Descubra seu nível de empatia!

export const questions = [
  {
    id: 1,
    question: "Quando um amigo está triste, você:",
    options: [
      { text: "Sinto a dor dele como se fosse minha", type: "A" },
      { text: "Me compadeço e ofereço apoio", type: "B" },
      { text: "Tento ajudar com soluções práticas", type: "C" },
      { text: "Fico desconfortável e não sei reagir", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você consegue perceber como as pessoas estão se sentindo?",
    options: [
      { text: "Sim, mesmo quando tentam esconder", type: "A" },
      { text: "Geralmente percebo os sinais mais claros", type: "B" },
      { text: "Às vezes percebo, às vezes não", type: "C" },
      { text: "Raramente noto os sentimentos alheios", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Filmes ou livros emocionantes fazem você:",
    options: [
      { text: "Chorar ou sentir intensamente", type: "A" },
      { text: "Me emocionar mas controladamente", type: "B" },
      { text: "Apenas apreciar a história", type: "C" },
      { text: "Não me afetam emocionalmente", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você consegue se colocar no lugar dos outros?",
    options: [
      { text: "Facilmente, quase automaticamente", type: "A" },
      { text: "Sim, quando me esforço para isso", type: "B" },
      { text: "Às vezes, mas é difícil", type: "C" },
      { text: "Tenho muita dificuldade com isso", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quando vê alguém em sofrimento (pedinte, doente, etc), você:",
    options: [
      { text: "Sinto um aperto no coração e quero ajudar", type: "A" },
      { text: "Sinto compaixão e ajudo quando posso", type: "B" },
      { text: "Noto mas nem sempre me afeta", type: "C" },
      { text: "Fico indiferente na maioria das vezes", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Em discussões, você consegue entender o ponto de vista oposto?",
    options: [
      { text: "Sim, mesmo discordando completamente", type: "A" },
      { text: "Tento entender antes de argumentar", type: "B" },
      { text: "Às vezes, mas foco mais na minha posição", type: "C" },
      { text: "Não vejo sentido em entender quem está errado", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você absorve as emoções das pessoas ao seu redor?",
    options: [
      { text: "Sim, muito! Às vezes é até problemático", type: "A" },
      { text: "Um pouco, sou afetado pelo clima emocional", type: "B" },
      { text: "Minimamente, mantenho meu estado", type: "C" },
      { text: "Não, as emoções dos outros não me afetam", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você reage quando alguém compartilha uma conquista?",
    options: [
      { text: "Fico genuinamente feliz, como se fosse comigo", type: "A" },
      { text: "Parabenizo e me alegro por ela", type: "B" },
      { text: "Dou os parabéns educadamente", type: "C" },
      { text: "Não entendo por que deveria me importar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você consegue perdoar pessoas que te magoaram?",
    options: [
      { text: "Sim, entendo que todos têm suas razões", type: "A" },
      { text: "Eventualmente, quando processo a situação", type: "B" },
      { text: "Tenho dificuldade, mas tento", type: "C" },
      { text: "Raramente perdoo, guardo ressentimento", type: "D" },
    ],
  },
  {
    id: 10,
    question: "As pessoas costumam desabafar com você?",
    options: [
      { text: "Sim, frequentemente sou procurado para isso", type: "A" },
      { text: "Às vezes, alguns amigos próximos", type: "B" },
      { text: "Raramente, não pareço ser esse tipo de pessoa", type: "C" },
      { text: "Nunca, e prefiro assim", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você se preocupa com o impacto de suas ações nos outros?",
    options: [
      { text: "Muito, penso nisso antes de agir", type: "A" },
      { text: "Sim, tento ser consciente", type: "B" },
      { text: "Às vezes, quando é mais óbvio", type: "C" },
      { text: "Não muito, cada um cuida de si", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua sensibilidade emocional?",
    options: [
      { text: "Muito alta, sinto tudo intensamente", type: "A" },
      { text: "Boa, sou sensível mas equilibrado", type: "B" },
      { text: "Moderada, não sou muito emotivo", type: "C" },
      { text: "Baixa, sou mais racional que emocional", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Hiper-Empático",
    emoji: "💗",
    description: "Você é extremamente empático! Sente as emoções dos outros profundamente, às vezes até demais. Esse dom precisa ser gerenciado para não te sobrecarregar.",
    traits: ["Sensível", "Compassivo", "Intuitivo", "Conectado"],
    strengths: ["Conexões profundas", "Excelente ouvinte", "Compreensão única dos outros", "Capacidade de cura emocional"],
    weaknesses: ["Pode absorver dor alheia demais", "Risco de burnout emocional", "Dificuldade em estabelecer limites"],
    tips: ["Aprenda a proteger sua energia", "Estabeleça limites saudáveis", "Pratique autocuidado regularmente"],
  },
  B: {
    type: "B",
    title: "Empático Equilibrado",
    emoji: "🤗",
    description: "Você tem empatia saudável e equilibrada! Consegue se conectar com os outros e compreender seus sentimentos sem perder sua própria estabilidade emocional.",
    traits: ["Compreensivo", "Equilibrado", "Solidário", "Perceptivo"],
    strengths: ["Relacionamentos saudáveis", "Boa leitura emocional", "Apoio adequado aos outros"],
    weaknesses: ["Pode não ser tão intenso quanto hiper-empáticos", "Às vezes precisa se esforçar mais"],
    tips: ["Continue cultivando sua empatia", "Use essa habilidade em sua carreira", "Ajude a desenvolver empatia em outros"],
  },
  C: {
    type: "C",
    title: "Empatia em Desenvolvimento",
    emoji: "🌱",
    description: "Sua empatia pode ser mais desenvolvida. Você tem capacidade de compreender outros, mas nem sempre se conecta emocionalmente. Isso pode ser trabalhado.",
    traits: ["Racional", "Prático", "Observador", "Potencial"],
    strengths: ["Objetividade", "Não se sobrecarrega com emoções alheias"],
    weaknesses: ["Pode parecer frio ou distante", "Conexões podem ser superficiais", "Dificuldade em apoiar emocionalmente"],
    tips: ["Pratique escuta ativa", "Tente se imaginar na situação do outro", "Pergunte sobre sentimentos, não só fatos"],
  },
  D: {
    type: "D",
    title: "Empatia Baixa",
    emoji: "🤔",
    description: "Você tem baixa empatia, o que pode dificultar conexões emocionais. Isso não significa que é uma pessoa má, mas desenvolver empatia pode melhorar seus relacionamentos.",
    traits: ["Distante", "Racional extremo", "Individualista", "Desconectado"],
    strengths: ["Não é afetado por drama emocional", "Objetividade em decisões"],
    weaknesses: ["Relacionamentos podem sofrer", "Dificuldade em compreender outros", "Pode parecer insensível"],
    tips: ["Considere que isso pode afetar relacionamentos", "Pratique exercícios de perspectiva", "Se extremo, avalie com profissional"],
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
