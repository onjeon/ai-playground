// Qual Seu Estilo de Páscoa?
// Descubra como você curte a Páscoa brasileira!

export const questions = [
  {
    id: 1,
    question: "Ovo de Páscoa pra você é...",
    options: [
      { text: "Tradição! Compro de marca, sabor especial", type: "A" },
      { text: "Faço em casa, caseiro é melhor", type: "B" },
      { text: "Qualquer um serve, é só chocolate", type: "C" },
      { text: "Nem ligo muito, prefiro barra normal", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quanto você gasta em ovos de Páscoa?",
    options: [
      { text: "Bastante! Páscoa é especial, vale o investimento", type: "A" },
      { text: "Moderado, alguns ovos pros mais próximos", type: "B" },
      { text: "O mínimo possível, aproveito promoção", type: "C" },
      { text: "Zero, não entro nessa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Almoço de Páscoa na sua casa é...",
    options: [
      { text: "Tradicional: bacalhau, peixe, família reunida", type: "A" },
      { text: "Faço algo especial, mas não necessariamente peixe", type: "B" },
      { text: "Normal, como qualquer domingo", type: "C" },
      { text: "Nem celebro muito", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Caça aos ovos com crianças. Você...",
    options: [
      { text: "Organizo com carinho, escondo em todo canto", type: "A" },
      { text: "Participo, é divertido ver a alegria deles", type: "B" },
      { text: "Deixo outros organizarem, só assisto", type: "C" },
      { text: "Acho bobagem, dou o ovo direto", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Páscoa é feriado religioso pra você?",
    options: [
      { text: "Sim! Igreja, reflexão, significado espiritual", type: "A" },
      { text: "Um pouco, penso no significado", type: "B" },
      { text: "Mais sobre chocolate e família", type: "C" },
      { text: "Só feriado prolongado mesmo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sobre ovos artesanais vs industrializados...",
    options: [
      { text: "Artesanal sempre, muito melhor", type: "A" },
      { text: "Gosto dos dois, depende da ocasião", type: "B" },
      { text: "Industrializado, mais prático", type: "C" },
      { text: "Tanto faz, chocolate é chocolate", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você dá ovo de Páscoa pra quem?",
    options: [
      { text: "Família, amigos, colegas - lista grande!", type: "A" },
      { text: "Família próxima e alguns amigos", type: "B" },
      { text: "Só filhos ou sobrinhos", type: "C" },
      { text: "Ninguém, ou só se ganhei antes", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sexta-feira Santa pra você é...",
    options: [
      { text: "Dia de jejum, peixe e reflexão", type: "A" },
      { text: "Respeito, evito carne", type: "B" },
      { text: "Dia normal, como o que tiver", type: "C" },
      { text: "Churrasco de carne mesmo!", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Decoração de Páscoa na sua casa...",
    options: [
      { text: "Coelhinho, ovinhos, tudo decorado", type: "A" },
      { text: "Algo simples, só pra marcar a data", type: "B" },
      { text: "Nada de decoração", type: "C" },
      { text: "Nem lembro que é Páscoa até ver os ovos", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você mais gosta na Páscoa?",
    options: [
      { text: "A tradição, família reunida, significado", type: "A" },
      { text: "Chocolate e momentos em família", type: "B" },
      { text: "O feriado prolongado", type: "C" },
      { text: "Quando as promoções de ovo começam depois", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Pascólogo Tradicional",
    emoji: "🐰",
    percentage: 95,
    description: "Você é O Pascólogo Tradicional! Páscoa é coisa séria: família, bacalhau, ovos especiais, significado religioso. Você mantém viva a tradição com amor!",
    characteristics: ["Tradicional", "Família", "Religioso(a)", "Dedicado(a)"],
    advice: "Sua dedicação à Páscoa é linda! Continue passando essas tradições pras próximas gerações. A família agradece!",
  },
  B: {
    type: "B",
    title: "O Pascólogo Moderado",
    emoji: "🥚",
    percentage: 80,
    description: "Você é O Pascólogo Moderado! Curte a Páscoa sem exageros: alguns ovos, almoço especial, família reunida. Equilíbrio entre tradição e praticidade!",
    characteristics: ["Equilibrado(a)", "Afetuoso(a)", "Prático(a)", "Flexível"],
    advice: "Ótimo equilíbrio! Você aproveita o melhor da Páscoa sem se estressar. Continue assim, curtindo sem pressão!",
  },
  C: {
    type: "C",
    title: "O Pascólogo Prático",
    emoji: "🍫",
    percentage: 65,
    description: "Você é O Pascólogo Prático! Páscoa é mais sobre chocolate e feriado do que tradição. Você curte sem muita produção, de boa!",
    characteristics: ["Descontraído(a)", "Simples", "Objetivo(a)", "Relaxado(a)"],
    advice: "Nada errado em curtir a Páscoa de forma simples! Mas às vezes vale criar memórias especiais com quem você ama!",
  },
  D: {
    type: "D",
    title: "O Anti-Páscoa",
    emoji: "😴",
    percentage: 45,
    description: "Você é O Anti-Páscoa! Pra você é só mais um feriado. Ovo caro, tradição inventada pelo comércio. Você espera a promoção pós-Páscoa!",
    characteristics: ["Cético(a)", "Econômico(a)", "Independente", "Realista"],
    advice: "Respeito sua opinião! Mas às vezes participar das tradições fortalece laços. Quem sabe não faz diferente ano que vem?",
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
