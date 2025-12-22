// Qual Petisco de Boteco Você É?
// Descubra qual comida de bar combina com você!

export const questions = [
  {
    id: 1,
    question: "Como você é numa roda de amigos?",
    options: [
      { text: "O centro das atenções, animo todo mundo", type: "A" },
      { text: "Converso bem, mas sem exagero", type: "B" },
      { text: "Quieto mas presente, observo mais", type: "C" },
      { text: "Diferente, gosto de surpreender", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual seu estilo de humor?",
    options: [
      { text: "Extrovertido, faço piada de tudo", type: "A" },
      { text: "Equilibrado, rio e faço rir na medida", type: "B" },
      { text: "Sutil, humor inteligente", type: "C" },
      { text: "Inesperado, surpreendo as pessoas", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você se comporta num primeiro encontro?",
    options: [
      { text: "Falo muito, sou animado(a)", type: "A" },
      { text: "Conversa boa, equilibrada", type: "B" },
      { text: "Mais na minha, espero a pessoa se abrir", type: "C" },
      { text: "Surpreendo com lugares/assuntos diferentes", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual sua bebida favorita?",
    options: [
      { text: "Cerveja bem gelada, sempre", type: "A" },
      { text: "Chopp ou cerveja artesanal", type: "B" },
      { text: "Caipirinha ou drinks suaves", type: "C" },
      { text: "Algo diferente, gosto de experimentar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como é seu final de semana ideal?",
    options: [
      { text: "Agitado, com muita gente e festa", type: "A" },
      { text: "Equilibrado, um pouco de tudo", type: "B" },
      { text: "Tranquilo, descanso merecido", type: "C" },
      { text: "Diferente, experiências novas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você lida com problemas?",
    options: [
      { text: "Enfrento de frente, sem medo", type: "A" },
      { text: "Penso bem antes de agir", type: "B" },
      { text: "Processo devagar, no meu tempo", type: "C" },
      { text: "Busco soluções criativas e diferentes", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual seu estilo de se vestir?",
    options: [
      { text: "Chamativo, gosto de aparecer", type: "A" },
      { text: "Clássico, bem arrumado", type: "B" },
      { text: "Confortável e simples", type: "C" },
      { text: "Único, estilo próprio", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você é no trabalho?",
    options: [
      { text: "Líder natural, tomo a frente", type: "A" },
      { text: "Colaborativo, trabalho bem em equipe", type: "B" },
      { text: "Focado no meu, faço bem feito", type: "C" },
      { text: "Criativo, trago ideias diferentes", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que te irrita facilmente?",
    options: [
      { text: "Gente parada, sem atitude", type: "A" },
      { text: "Falta de respeito e educação", type: "B" },
      { text: "Barulho e agitação demais", type: "C" },
      { text: "Mesmice e rotina", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você celebra conquistas?",
    options: [
      { text: "Festa! Chamo todo mundo", type: "A" },
      { text: "Jantar especial com pessoas queridas", type: "B" },
      { text: "Momento pessoal de gratidão", type: "C" },
      { text: "Algo diferente e memorável", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual seu papel no grupo de amigos?",
    options: [
      { text: "O animador, sempre agitando", type: "A" },
      { text: "O conselheiro, equilibrado", type: "B" },
      { text: "O ouvinte, sempre presente", type: "C" },
      { text: "O diferente, traz novidades", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define?",
    options: [
      { text: "'A vida é uma festa!'", type: "A" },
      { text: "'Equilíbrio é tudo'", type: "B" },
      { text: "'Na paz e na tranquilidade'", type: "C" },
      { text: "'Ser diferente é ser autêntico'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Coxinha de Boteco",
    emoji: "🍗",
    description: "Você é a Coxinha de Boteco! Popular, querido por todos, presença garantida em qualquer rolê. Assim como a coxinha, você é clássico, animado e todo mundo quer por perto!",
    traits: ["Popular", "Animado(a)", "Extrovertido(a)", "Clássico(a)"],
    strengths: ["Todo mundo gosta", "Presença marcante", "Energia contagiante"],
    weaknesses: ["Pode cansar", "Às vezes exagera", "Precisa de atenção"],
    tips: ["Seu carisma é raro", "Dosе a energia", "Continue sendo você"],
  },
  B: {
    type: "B",
    title: "Bolinho de Bacalhau",
    emoji: "🐟",
    description: "Você é o Bolinho de Bacalhau! Clássico com sofisticação. Você tem aquele equilíbrio perfeito: querido, respeitado, e sempre bem-vindo. Qualidade garantida!",
    traits: ["Equilibrado(a)", "Sofisticado(a)", "Confiável", "Respeitado(a)"],
    strengths: ["Equilíbrio", "Respeito de todos", "Presença de qualidade"],
    weaknesses: ["Pode parecer sério demais", "Às vezes reservado"],
    tips: ["Seu equilíbrio é admirável", "Se solte mais às vezes", "Ótima referência"],
  },
  C: {
    type: "C",
    title: "Batata Frita",
    emoji: "🍟",
    description: "Você é a Batata Frita! Simples, confortável e essencial. Você não precisa de holofotes, mas é indispensável. Presença tranquila que faz toda diferença!",
    traits: ["Simples", "Essencial", "Tranquilo(a)", "Confiável"],
    strengths: ["Presença constante", "Conforto pros outros", "Simplicidade que encanta"],
    weaknesses: ["Pode passar despercebido(a)", "Muito na sua"],
    tips: ["Sua presença importa", "Você é essencial", "Simples é bom"],
  },
  D: {
    type: "D",
    title: "Isca de Tilápia",
    emoji: "🎣",
    description: "Você é a Isca de Tilápia! Diferente, surpreendente, não convencional. Você não é o óbvio, mas quem conhece, aprecia muito. Autenticidade pura!",
    traits: ["Único(a)", "Surpreendente", "Autêntico(a)", "Diferente"],
    strengths: ["Originalidade", "Surpreende positivamente", "Autenticidade"],
    weaknesses: ["Nem todos entendem", "Pode parecer estranho(a)"],
    tips: ["Sua diferença é força", "Continue surpreendendo", "Quem te conhece, te ama"],
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
