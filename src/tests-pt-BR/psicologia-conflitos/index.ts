// Teste de Gestão de Conflitos
// Descubra como você lida com conflitos!

export const questions = [
  {
    id: 1,
    question: "Quando surge um conflito, sua primeira reação é:",
    options: [
      { text: "Buscar entender todos os lados", type: "A" },
      { text: "Tentar encontrar um meio termo", type: "B" },
      { text: "Evitar a situação se possível", type: "C" },
      { text: "Defender minha posição com firmeza", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Em uma discussão acalorada, você:",
    options: [
      { text: "Mantenho a calma e ouço o outro", type: "A" },
      { text: "Proponho que ambos cedam um pouco", type: "B" },
      { text: "Me retiro para evitar escalada", type: "C" },
      { text: "Fico mais determinado a vencer", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você acha que conflitos podem ser positivos?",
    options: [
      { text: "Sim, se bem gerenciados trazem crescimento", type: "A" },
      { text: "Podem ser, se todos cederem", type: "B" },
      { text: "Não, prefiro harmonia sempre", type: "C" },
      { text: "Só se eu ganhar a discussão", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quando você discorda do seu chefe, você:",
    options: [
      { text: "Expresso minha visão com respeito e argumentos", type: "A" },
      { text: "Busco um compromisso que funcione", type: "B" },
      { text: "Geralmente aceito para evitar problemas", type: "C" },
      { text: "Defendo minha posição com força", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você se sente após um conflito resolvido?",
    options: [
      { text: "Satisfeito quando há entendimento mútuo", type: "A" },
      { text: "Aliviado quando chegamos a um acordo", type: "B" },
      { text: "Aliviado que acabou, independente do resultado", type: "C" },
      { text: "Bem quando saí por cima", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Em conflitos familiares, você geralmente:",
    options: [
      { text: "Facilito o diálogo entre todos", type: "A" },
      { text: "Tento fazer todos cederem um pouco", type: "B" },
      { text: "Me afasto até as coisas acalmarem", type: "C" },
      { text: "Defendo firmemente o que acredito", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você consegue ver o ponto de vista do outro em conflitos?",
    options: [
      { text: "Sim, mesmo discordando completamente", type: "A" },
      { text: "Geralmente tento entender", type: "B" },
      { text: "Às vezes, mas é difícil", type: "C" },
      { text: "Não, se eu estou certo, o outro está errado", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando duas pessoas brigam na sua frente, você:",
    options: [
      { text: "Tento mediar e ajudar a resolver", type: "A" },
      { text: "Sugiro que encontrem um meio termo", type: "B" },
      { text: "Fico quieto e espero passar", type: "C" },
      { text: "Tomo um lado e defendo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você guarda ressentimento após conflitos?",
    options: [
      { text: "Não, processo e sigo em frente", type: "A" },
      { text: "Um pouco, mas supero relativamente rápido", type: "B" },
      { text: "Sim, fico remoendo por muito tempo", type: "C" },
      { text: "Depende se ganhei ou perdi", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual é seu objetivo principal em conflitos?",
    options: [
      { text: "Entendimento mútuo e solução criativa", type: "A" },
      { text: "Acordo que funcione para todos", type: "B" },
      { text: "Que termine o mais rápido possível", type: "C" },
      { text: "Que minha posição prevaleça", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você confronta problemas diretamente?",
    options: [
      { text: "Sim, acredito que é a melhor forma", type: "A" },
      { text: "Quando necessário, mas com diplomacia", type: "B" },
      { text: "Raramente, prefiro evitar", type: "C" },
      { text: "Sempre, de forma direta e firme", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como as pessoas descreveriam você em conflitos?",
    options: [
      { text: "Mediador e justo", type: "A" },
      { text: "Conciliador e diplomático", type: "B" },
      { text: "Evitativo e pacífico", type: "C" },
      { text: "Competitivo e determinado", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Colaborativo",
    emoji: "🤝",
    description: "Você busca colaboração em conflitos! Tenta entender todos os lados e encontrar soluções que atendam a todos. Valoriza relacionamentos e resultados justos.",
    traits: ["Empático", "Solucionador", "Comunicativo", "Justo"],
    strengths: ["Soluções criativas", "Relacionamentos preservados", "Confiança dos outros", "Resultados duradouros"],
    weaknesses: ["Pode demorar para resolver", "Às vezes nem todos querem colaborar"],
    tips: ["Reconheça quando outros estilos são necessários", "Nem todo conflito precisa de solução perfeita", "Continue desenvolvendo suas habilidades de mediação"],
  },
  B: {
    type: "B",
    title: "Conciliador",
    emoji: "⚖️",
    description: "Você busca compromisso em conflitos! Tenta fazer todos cederem um pouco para chegar a um acordo. Valoriza harmonia e soluções práticas.",
    traits: ["Diplomático", "Pragmático", "Flexível", "Moderado"],
    strengths: ["Conflitos resolvidos rapidamente", "Todos saem com algo", "Harmonia mantida"],
    weaknesses: ["Soluções podem ser medianas", "Questões importantes podem não ser resolvidas totalmente"],
    tips: ["Às vezes vale lutar por questões importantes", "Compromisso nem sempre é a melhor solução", "Equilibre com colaboração quando possível"],
  },
  C: {
    type: "C",
    title: "Evitativo",
    emoji: "🕊️",
    description: "Você tende a evitar conflitos! Prefere harmonia e paz a confrontos. Isso pode manter a paz, mas também deixar problemas não resolvidos.",
    traits: ["Pacífico", "Evitativo", "Acomodado", "Ansioso com conflitos"],
    strengths: ["Ambiente tranquilo", "Não escala conflitos", "Fácil de conviver"],
    weaknesses: ["Problemas não resolvidos", "Ressentimento acumulado", "Necessidades não atendidas"],
    tips: ["Alguns conflitos precisam ser enfrentados", "Evitar nem sempre é a solução", "Pratique comunicação assertiva"],
  },
  D: {
    type: "D",
    title: "Competitivo",
    emoji: "🏆",
    description: "Você é competitivo em conflitos! Busca vencer e fazer sua posição prevalecer. Isso pode ser útil em situações críticas, mas pode prejudicar relacionamentos.",
    traits: ["Determinado", "Firme", "Assertivo", "Confrontador"],
    strengths: ["Defende suas posições", "Consegue resultados", "Não é ignorado"],
    weaknesses: ["Relacionamentos podem sofrer", "Outros podem se ressentir", "Soluções podem não ser as melhores"],
    tips: ["Considere o impacto nos relacionamentos", "Nem todo conflito precisa de vencedor", "Às vezes ceder é sabedoria"],
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
