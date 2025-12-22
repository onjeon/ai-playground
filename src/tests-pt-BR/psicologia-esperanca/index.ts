// Teste de Esperança
// Descubra seu nível de esperança e fé no futuro!

export const questions = [
  {
    id: 1,
    question: "Você acredita que seu futuro será bom?",
    options: [
      { text: "Sim, tenho muita esperança", type: "A" },
      { text: "Geralmente acredito que sim", type: "B" },
      { text: "Tenho dúvidas frequentes", type: "C" },
      { text: "Não, espero o pior", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando enfrenta dificuldades, você acredita que vai superar?",
    options: [
      { text: "Sim, sempre encontro um caminho", type: "A" },
      { text: "Geralmente acredito que vou superar", type: "B" },
      { text: "Tenho dúvidas se vou conseguir", type: "C" },
      { text: "Não, acho que vou fracassar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você vê possibilidades mesmo em situações difíceis?",
    options: [
      { text: "Sim, sempre há esperança", type: "A" },
      { text: "Frequentemente vejo saídas", type: "B" },
      { text: "Às vezes, mas é difícil", type: "C" },
      { text: "Não, situações ruins são becos sem saída", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você acredita que coisas boas virão?",
    options: [
      { text: "Sim, o melhor ainda está por vir", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Tenho dúvidas", type: "C" },
      { text: "Não, só piorará", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você consegue encontrar razões para ter esperança?",
    options: [
      { text: "Sempre, há muito pelo que esperar", type: "A" },
      { text: "Frequentemente encontro", type: "B" },
      { text: "Às vezes é difícil", type: "C" },
      { text: "Não vejo razões para esperança", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você planeja o futuro com otimismo?",
    options: [
      { text: "Sim, faço planos com entusiasmo", type: "A" },
      { text: "Geralmente planejo positivamente", type: "B" },
      { text: "Tenho dificuldade em planejar o futuro", type: "C" },
      { text: "Não planejo, não vejo sentido", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você acredita que pode realizar seus sonhos?",
    options: [
      { text: "Sim, com esforço posso alcançá-los", type: "A" },
      { text: "Acredito em muitos deles", type: "B" },
      { text: "Tenho dúvidas se são possíveis", type: "C" },
      { text: "Não, sonhos são ilusões", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você acredita no potencial de mudança positiva?",
    options: [
      { text: "Sim, pessoas e situações podem mudar", type: "A" },
      { text: "Geralmente acredito", type: "B" },
      { text: "Tenho dúvidas sobre mudanças", type: "C" },
      { text: "Não, as coisas são como são", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quando está triste, você acredita que vai melhorar?",
    options: [
      { text: "Sim, tristeza é temporária", type: "A" },
      { text: "Geralmente acredito que passará", type: "B" },
      { text: "Tenho dificuldade em ver melhora", type: "C" },
      { text: "Não, sempre me sinto assim", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você acredita que o mundo pode ser melhor?",
    options: [
      { text: "Sim, podemos construir um futuro melhor", type: "A" },
      { text: "Acredito que há esperança", type: "B" },
      { text: "Tenho dúvidas sobre o futuro do mundo", type: "C" },
      { text: "Não, o mundo está perdido", type: "D" },
    ],
  },
  {
    id: 11,
    question: "A esperança te motiva a agir?",
    options: [
      { text: "Sim, esperança me move", type: "A" },
      { text: "Frequentemente me inspira", type: "B" },
      { text: "Às vezes, mas nem sempre", type: "C" },
      { text: "Não, não sinto esperança", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria seu nível de esperança?",
    options: [
      { text: "Muito alto, sou esperançoso", type: "A" },
      { text: "Bom, tenho esperança", type: "B" },
      { text: "Baixo, falta esperança", type: "C" },
      { text: "Inexistente, perdi a esperança", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Esperançoso",
    emoji: "🌟",
    description: "Você é cheio de esperança! Acredita no futuro, em si mesmo e nas possibilidades. Essa esperança te motiva e te ajuda a superar dificuldades.",
    traits: ["Esperançoso", "Otimista", "Motivado", "Resiliente"],
    strengths: ["Resiliência", "Motivação", "Bem-estar mental", "Inspira outros"],
    weaknesses: ["Pode parecer ingênuo para céticos"],
    tips: ["Continue cultivando esperança", "Use-a como combustível para ação", "Compartilhe esperança com outros"],
  },
  B: {
    type: "B",
    title: "Esperança Moderada",
    emoji: "🌱",
    description: "Você tem esperança moderada. Acredita em possibilidades, embora às vezes duvide. Um equilíbrio saudável entre realismo e otimismo.",
    traits: ["Esperançoso", "Realista", "Equilibrado", "Funcional"],
    strengths: ["Equilíbrio saudável", "Esperança com realismo"],
    weaknesses: ["Pode vacilar em momentos difíceis"],
    tips: ["Cultive mais esperança", "Lembre-se de superações passadas", "Esperança é uma escolha diária"],
  },
  C: {
    type: "C",
    title: "Falta de Esperança",
    emoji: "🌧️",
    description: "Você está com falta de esperança. É difícil ver um futuro bom ou acreditar em mudanças. Isso pode estar afetando sua motivação e bem-estar.",
    traits: ["Desesperançado", "Pessimista", "Desmotivado", "Cansado"],
    strengths: ["Realismo (em excesso)"],
    weaknesses: ["Motivação comprometida", "Bem-estar afetado", "Dificuldade em agir"],
    tips: ["Esperança pode ser cultivada", "Busque pequenas vitórias", "Considere ajuda profissional"],
  },
  D: {
    type: "D",
    title: "Desesperança",
    emoji: "🆘",
    description: "Você está em estado de desesperança. Isso é muito sério e pode estar relacionado a depressão. Buscar ajuda profissional é urgente.",
    traits: ["Desesperado", "Sem esperança", "Desanimado", "Em sofrimento"],
    strengths: ["Reconhecimento do problema"],
    weaknesses: ["Grande sofrimento", "Funcionamento comprometido", "Possível depressão"],
    tips: ["Procure ajuda profissional urgentemente", "Você não precisa se sentir assim", "Esperança pode ser restaurada com tratamento"],
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
