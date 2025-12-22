// Teste de Paciência
// Descubra seu nível de paciência!

export const questions = [
  {
    id: 1,
    question: "Como você reage em filas longas?",
    options: [
      { text: "Tranquilo, aproveito para relaxar ou ler", type: "A" },
      { text: "Um pouco impaciente mas aguento", type: "B" },
      { text: "Fico irritado e inquieto", type: "C" },
      { text: "Fico furioso, às vezes vou embora", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando o computador ou internet está lento, você:",
    options: [
      { text: "Espero calmamente, faz parte", type: "A" },
      { text: "Fico um pouco frustrado mas espero", type: "B" },
      { text: "Fico muito irritado rapidamente", type: "C" },
      { text: "Perco a cabeça, às vezes forço a máquina", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você consegue ensinar algo para alguém que demora a aprender?",
    options: [
      { text: "Sim, com toda paciência necessária", type: "A" },
      { text: "Geralmente sim, me esforço", type: "B" },
      { text: "Tenho dificuldade, fico impaciente", type: "C" },
      { text: "Não, me irrito muito rápido", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você lida com o trânsito congestionado?",
    options: [
      { text: "Com calma, escuto música ou podcast", type: "A" },
      { text: "Um pouco tenso mas lido bem", type: "B" },
      { text: "Fico muito estressado e irritado", type: "C" },
      { text: "Fico furioso, buzino e xingo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você consegue esperar por recompensas de longo prazo?",
    options: [
      { text: "Sim, tenho boa capacidade de espera", type: "A" },
      { text: "Geralmente consigo", type: "B" },
      { text: "Tenho dificuldade, quero resultados rápidos", type: "C" },
      { text: "Não consigo, preciso de gratificação imediata", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando alguém fala muito devagar, você:",
    options: [
      { text: "Escuto com atenção, sem problema", type: "A" },
      { text: "Escuto mas às vezes me distrai", type: "B" },
      { text: "Fico inquieto e quero que acelere", type: "C" },
      { text: "Interrompo para acelerar a conversa", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você consegue trabalhar em projetos longos sem ver resultados rápidos?",
    options: [
      { text: "Sim, mantenho o foco no objetivo final", type: "A" },
      { text: "Geralmente sim, com esforço", type: "B" },
      { text: "Tenho dificuldade, perco motivação", type: "C" },
      { text: "Não, preciso de resultados constantes", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você reage quando um pedido/entrega atrasa?",
    options: [
      { text: "Entendo, imprevistos acontecem", type: "A" },
      { text: "Fico um pouco frustrado mas aceito", type: "B" },
      { text: "Fico bem irritado", type: "C" },
      { text: "Fico furioso e reclamo agressivamente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você costuma interromper pessoas que estão falando?",
    options: [
      { text: "Raramente, deixo terminar", type: "A" },
      { text: "Às vezes, quando é relevante", type: "B" },
      { text: "Frequentemente, mal espero acabar", type: "C" },
      { text: "Sempre, não aguento esperar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você consegue meditar ou ficar parado em silêncio?",
    options: [
      { text: "Sim, gosto de momentos de quietude", type: "A" },
      { text: "Consigo por algum tempo", type: "B" },
      { text: "Tenho muita dificuldade em ficar parado", type: "C" },
      { text: "Impossível, não consigo parar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Quando uma criança faz muitas perguntas, você:",
    options: [
      { text: "Respondo todas com paciência", type: "A" },
      { text: "Respondo a maioria, às vezes canso", type: "B" },
      { text: "Fico impaciente rapidamente", type: "C" },
      { text: "Peço para parar logo", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua paciência?",
    options: [
      { text: "Muito paciente", type: "A" },
      { text: "Razoavelmente paciente", type: "B" },
      { text: "Impaciente", type: "C" },
      { text: "Muito impaciente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Muito Paciente",
    emoji: "🧘",
    description: "Você é muito paciente! Consegue esperar, lidar com atrasos e tolerar situações frustrantes com calma. Isso é uma virtude valiosa.",
    traits: ["Calmo", "Tolerante", "Sereno", "Equilibrado"],
    strengths: ["Menos estresse", "Melhores relacionamentos", "Tomada de decisão mais sábia", "Capacidade de ensinar"],
    weaknesses: ["Pode parecer lento ou passivo", "Pode tolerar demais"],
    tips: ["Continue cultivando essa virtude", "Use sua paciência para ajudar outros", "Saiba quando paciência vira passividade"],
  },
  B: {
    type: "B",
    title: "Paciente",
    emoji: "😊",
    description: "Você tem boa paciência na maioria das situações. Consegue esperar e lidar com frustrações, embora tenha seus momentos de impaciência.",
    traits: ["Equilibrado", "Adaptável", "Funcional", "Tolerante"],
    strengths: ["Funciona bem na maioria das situações", "Bom equilíbrio"],
    weaknesses: ["Algumas situações testam sua paciência", "Pode melhorar em áreas específicas"],
    tips: ["Identifique seus gatilhos de impaciência", "Pratique técnicas de calma", "Continue desenvolvendo paciência"],
  },
  C: {
    type: "C",
    title: "Impaciente",
    emoji: "⏰",
    description: "Você é impaciente, tendo dificuldade em esperar e ficando facilmente irritado com atrasos e lentidão. Isso pode estar causando estresse desnecessário.",
    traits: ["Inquieto", "Frustrado", "Apressado", "Irritável"],
    strengths: ["Senso de urgência", "Pode ser produtivo"],
    weaknesses: ["Estresse aumentado", "Relacionamentos podem sofrer", "Decisões apressadas"],
    tips: ["Pratique respiração profunda", "Questione a urgência real das coisas", "Mindfulness pode ajudar muito"],
  },
  D: {
    type: "D",
    title: "Muito Impaciente",
    emoji: "😤",
    description: "Você é muito impaciente, com baixa tolerância a espera e frustrações. Isso está provavelmente causando muito estresse e problemas interpessoais.",
    traits: ["Muito inquieto", "Explosivo", "Intolerante", "Frustrado"],
    strengths: ["Alto senso de urgência"],
    weaknesses: ["Estresse crônico", "Relacionamentos prejudicados", "Saúde pode ser afetada", "Decisões impulsivas"],
    tips: ["Considere buscar ajuda profissional", "Paciência pode ser desenvolvida com prática", "Sua qualidade de vida pode melhorar muito"],
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
