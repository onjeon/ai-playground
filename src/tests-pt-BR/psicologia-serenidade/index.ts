// Teste de Serenidade
// Descubra seu nível de paz interior e serenidade!

export const questions = [
  {
    id: 1,
    question: "Você consegue manter a calma em situações estressantes?",
    options: [
      { text: "Sim, mantenho a serenidade", type: "A" },
      { text: "Geralmente consigo", type: "B" },
      { text: "Tenho dificuldade, me estresso fácil", type: "C" },
      { text: "Não, perco a calma rapidamente", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você sente paz interior no dia a dia?",
    options: [
      { text: "Sim, tenho tranquilidade interna", type: "A" },
      { text: "Na maioria dos dias", type: "B" },
      { text: "Às vezes, mas frequentemente inquieto", type: "C" },
      { text: "Raramente, vivo agitado", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você aceita o que não pode mudar?",
    options: [
      { text: "Sim, com serenidade", type: "A" },
      { text: "Geralmente aceito", type: "B" },
      { text: "Tenho dificuldade em aceitar", type: "C" },
      { text: "Não, luto contra tudo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você rumina preocupações constantemente?",
    options: [
      { text: "Não, deixo ir o que não posso resolver", type: "A" },
      { text: "Às vezes, mas controlo", type: "B" },
      { text: "Frequentemente fico ruminando", type: "C" },
      { text: "Sempre, minha mente não para", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você consegue relaxar de verdade?",
    options: [
      { text: "Sim, sei desligar completamente", type: "A" },
      { text: "Geralmente consigo relaxar", type: "B" },
      { text: "Tenho dificuldade em relaxar", type: "C" },
      { text: "Não sei mais o que é relaxar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você vive o momento presente?",
    options: [
      { text: "Sim, pratico presença", type: "A" },
      { text: "Frequentemente estou presente", type: "B" },
      { text: "Frequentemente perdido em pensamentos", type: "C" },
      { text: "Quase nunca no presente", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pequenos contratempos te desestabilizam?",
    options: [
      { text: "Não, mantenho a perspectiva", type: "A" },
      { text: "Raramente me afetam muito", type: "B" },
      { text: "Frequentemente me perturbam", type: "C" },
      { text: "Sim, qualquer coisa me desestabiliza", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você tem práticas que trazem paz (meditação, natureza, etc)?",
    options: [
      { text: "Sim, cultivo paz regularmente", type: "A" },
      { text: "Algumas práticas que ajudam", type: "B" },
      { text: "Poucas, não tenho tempo", type: "C" },
      { text: "Nenhuma, não sei como encontrar paz", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Seu sono é tranquilo e reparador?",
    options: [
      { text: "Sim, durmo bem e acordo descansado", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Frequentemente sono ruim", type: "C" },
      { text: "Terrível, não descanso", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você consegue desapegar de resultados?",
    options: [
      { text: "Sim, faço meu melhor e aceito", type: "A" },
      { text: "Geralmente consigo", type: "B" },
      { text: "Tenho dificuldade em desapegar", type: "C" },
      { text: "Não, me apego a tudo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você sente gratidão pelas coisas simples?",
    options: [
      { text: "Sim, agradeço diariamente", type: "A" },
      { text: "Frequentemente", type: "B" },
      { text: "Às vezes", type: "C" },
      { text: "Raramente, foco no que falta", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria seu nível de serenidade?",
    options: [
      { text: "Alto, tenho paz interior", type: "A" },
      { text: "Bom, com momentos de agitação", type: "B" },
      { text: "Baixo, frequentemente inquieto", type: "C" },
      { text: "Muito baixo, vivo estressado", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Sereno",
    emoji: "🧘",
    description: "Você é sereno! Mantém paz interior mesmo em turbulências, aceita o que não pode mudar e vive com tranquilidade. Isso é um dom valioso.",
    traits: ["Sereno", "Calmo", "Em paz", "Equilibrado"],
    strengths: ["Paz interior", "Boas decisões sob pressão", "Saúde mental", "Inspira calma nos outros"],
    weaknesses: ["Pode parecer passivo demais"],
    tips: ["Continue cultivando serenidade", "Compartilhe suas práticas", "Serenidade não é indiferença"],
  },
  B: {
    type: "B",
    title: "Razoavelmente Sereno",
    emoji: "🌊",
    description: "Você tem boa serenidade, com momentos de agitação. Consegue manter paz na maioria das situações, com espaço para aprofundar.",
    traits: ["Calmo", "Equilibrado", "Funcional", "Em progresso"],
    strengths: ["Boa base de serenidade", "Capacidade de recuperação"],
    weaknesses: ["Algumas situações ainda perturbam"],
    tips: ["Desenvolva práticas de paz", "Identifique seus gatilhos de agitação", "Serenidade pode ser cultivada"],
  },
  C: {
    type: "C",
    title: "Inquieto",
    emoji: "🌀",
    description: "Você vive frequentemente inquieto e agitado. A paz interior é rara e o estresse é comum. Cultivar serenidade pode transformar sua qualidade de vida.",
    traits: ["Inquieto", "Agitado", "Estressado", "Tenso"],
    strengths: ["Energia para mudança"],
    weaknesses: ["Saúde mental afetada", "Dificuldade em relaxar", "Decisões sob estresse"],
    tips: ["Experimente meditação ou mindfulness", "Serenidade é uma habilidade", "Comece com pequenas práticas diárias"],
  },
  D: {
    type: "D",
    title: "Sem Serenidade",
    emoji: "🔥",
    description: "Você está sem serenidade, vivendo em estresse constante. Isso está afetando sua saúde e qualidade de vida. Buscar paz é urgente.",
    traits: ["Muito estressado", "Sem paz", "Esgotado", "Agitado"],
    strengths: ["Reconhecimento do problema"],
    weaknesses: ["Saúde em risco", "Relacionamentos afetados", "Qualidade de vida severamente comprometida"],
    tips: ["Busque ajuda profissional", "Serenidade pode ser aprendida", "Você merece paz interior"],
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
