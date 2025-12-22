// Teste de Nível de Estresse
// Descubra seu nível atual de estresse!

export const questions = [
  {
    id: 1,
    question: "Com que frequência você se sente sobrecarregado?",
    options: [
      { text: "Raramente ou nunca", type: "A" },
      { text: "Ocasionalmente", type: "B" },
      { text: "Frequentemente", type: "C" },
      { text: "Quase sempre", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como está seu nível de energia?",
    options: [
      { text: "Alto, me sinto energizado", type: "A" },
      { text: "Normal, com altos e baixos", type: "B" },
      { text: "Frequentemente cansado", type: "C" },
      { text: "Exausto constantemente", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você consegue desconectar do trabalho/responsabilidades?",
    options: [
      { text: "Sim, tenho bom equilíbrio", type: "A" },
      { text: "Geralmente consigo", type: "B" },
      { text: "Tenho dificuldade em desligar", type: "C" },
      { text: "Nunca consigo parar de pensar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você tem sintomas físicos como dores de cabeça ou tensão muscular?",
    options: [
      { text: "Raramente", type: "A" },
      { text: "Ocasionalmente", type: "B" },
      { text: "Frequentemente", type: "C" },
      { text: "Constantemente", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Seu sono tem sido afetado?",
    options: [
      { text: "Não, durmo bem", type: "A" },
      { text: "Às vezes tenho dificuldade", type: "B" },
      { text: "Frequentemente sono ruim", type: "C" },
      { text: "Insônia ou sono terrível constantemente", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você está mais irritado ou impaciente que o normal?",
    options: [
      { text: "Não, estou normal", type: "A" },
      { text: "Um pouco mais que o usual", type: "B" },
      { text: "Sim, ando bem irritado", type: "C" },
      { text: "Explodo com qualquer coisa", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você tem conseguido tempo para lazer e autocuidado?",
    options: [
      { text: "Sim, priorizo isso", type: "A" },
      { text: "Às vezes, quando dá", type: "B" },
      { text: "Raramente, não tenho tempo", type: "C" },
      { text: "Nunca, minha vida é só obrigações", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sua alimentação tem sido afetada?",
    options: [
      { text: "Não, como normalmente", type: "A" },
      { text: "Um pouco alterada", type: "B" },
      { text: "Sim, como demais ou de menos", type: "C" },
      { text: "Completamente desregulada", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você sente que consegue lidar com suas responsabilidades?",
    options: [
      { text: "Sim, me sinto no controle", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Estou tendo dificuldade", type: "C" },
      { text: "Sinto que vou desabar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você tem sentido ansiedade ou preocupação excessiva?",
    options: [
      { text: "Não mais que o normal", type: "A" },
      { text: "Um pouco mais que o usual", type: "B" },
      { text: "Sim, bastante ansiosa", type: "C" },
      { text: "Ansiedade constante e intensa", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você tem conseguido se concentrar em suas tarefas?",
    options: [
      { text: "Sim, normalmente", type: "A" },
      { text: "Com alguma dificuldade", type: "B" },
      { text: "Tenho muita dificuldade", type: "C" },
      { text: "Não consigo me concentrar em nada", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria seu estado emocional atual?",
    options: [
      { text: "Equilibrado e tranquilo", type: "A" },
      { text: "Razoável, com algumas oscilações", type: "B" },
      { text: "Instável e frequentemente mal", type: "C" },
      { text: "Muito mal, no limite", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Estresse Baixo",
    emoji: "😌",
    description: "Você está com baixo nível de estresse! Consegue equilibrar suas responsabilidades e cuidar de si mesmo. Continue com suas práticas saudáveis.",
    traits: ["Equilibrado", "Tranquilo", "No controle", "Saudável"],
    strengths: ["Boa gestão do estresse", "Equilíbrio vida-trabalho", "Saúde preservada"],
    weaknesses: ["Pode não perceber estresse de outros", "Pode parecer despreocupado"],
    tips: ["Mantenha seus hábitos saudáveis", "Continue priorizando autocuidado", "Ajude outros que estão estressados"],
  },
  B: {
    type: "B",
    title: "Estresse Moderado",
    emoji: "😊",
    description: "Você está com nível moderado de estresse, comum na vida moderna. Algumas áreas precisam de atenção, mas você está funcionando bem.",
    traits: ["Funcional", "Adaptável", "Consciente", "Normal"],
    strengths: ["Funcionamento adequado", "Capacidade de lidar", "Consciência do estresse"],
    weaknesses: ["Algumas áreas afetadas", "Potencial de piora se não cuidar"],
    tips: ["Implemente técnicas de relaxamento", "Revise sua carga de responsabilidades", "Não ignore os sinais"],
  },
  C: {
    type: "C",
    title: "Estresse Alto",
    emoji: "😰",
    description: "Você está com nível alto de estresse! Isso está afetando sua saúde física e mental. É importante tomar medidas para reduzir esse estresse.",
    traits: ["Sobrecarregado", "Cansado", "Tenso", "Preocupado"],
    strengths: ["Reconhecimento do problema", "Ainda funcionando"],
    weaknesses: ["Saúde sendo afetada", "Produtividade comprometida", "Relacionamentos podem sofrer"],
    tips: ["Reduza responsabilidades se possível", "Busque apoio profissional", "Priorize descanso e autocuidado urgentemente"],
  },
  D: {
    type: "D",
    title: "Estresse Severo / Burnout",
    emoji: "🆘",
    description: "Você está com estresse severo, possivelmente em burnout! Sua saúde está em risco. Buscar ajuda profissional é urgente e necessário.",
    traits: ["Exausto", "No limite", "Esgotado", "Em crise"],
    strengths: ["Reconhecimento da gravidade"],
    weaknesses: ["Saúde seriamente comprometida", "Funcionamento prejudicado", "Risco de colapso"],
    tips: ["Procure um médico ou psicólogo imediatamente", "Considere afastamento se possível", "Você precisa de ajuda, não hesite em buscar"],
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
