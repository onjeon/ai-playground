// Teste de Assertividade
// Descubra seu nível de assertividade!

export const questions = [
  {
    id: 1,
    question: "Quando alguém fura a fila na sua frente, você:",
    options: [
      { text: "Educadamente peço para ir para o final", type: "A" },
      { text: "Fico incomodado mas não falo nada", type: "B" },
      { text: "Ignoro completamente", type: "C" },
      { text: "Fico com raiva e reclamo alto", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você consegue recusar pedidos que não quer atender?",
    options: [
      { text: "Sim, digo não de forma clara e educada", type: "A" },
      { text: "Às vezes, mas me sinto culpado", type: "B" },
      { text: "Raramente, geralmente cedo", type: "C" },
      { text: "Recuso de forma ríspida e dura", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você expressa suas opiniões em grupos?",
    options: [
      { text: "Compartilho de forma clara e respeitosa", type: "A" },
      { text: "Falo quando me sinto seguro sobre o tema", type: "B" },
      { text: "Prefiro guardar para mim", type: "C" },
      { text: "Imponho minha opinião sobre os outros", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quando discorda do seu chefe, você:",
    options: [
      { text: "Expresso minha discordância com argumentos", type: "A" },
      { text: "Às vezes falo, depende da situação", type: "B" },
      { text: "Aceito calado mesmo discordando", type: "C" },
      { text: "Confronto de forma agressiva", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você defende seus direitos como consumidor?",
    options: [
      { text: "Sim, reclamo educadamente quando necessário", type: "A" },
      { text: "Às vezes, quando é algo importante", type: "B" },
      { text: "Raramente, evito confrontos", type: "C" },
      { text: "Sempre reclamo, às vezes exageradamente", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você pede aumento ou promoção?",
    options: [
      { text: "Apresento meus argumentos com confiança", type: "A" },
      { text: "Peço mas fico nervoso", type: "B" },
      { text: "Espero que percebam meu mérito", type: "C" },
      { text: "Exijo de forma confrontacional", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quando alguém te interrompe, você:",
    options: [
      { text: "Peço educadamente para terminar", type: "A" },
      { text: "Às vezes peço, às vezes deixo", type: "B" },
      { text: "Me calo e deixo a pessoa falar", type: "C" },
      { text: "Interrompo de volta com mais força", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você consegue expressar sentimentos positivos?",
    options: [
      { text: "Sim, elogio e agradeço naturalmente", type: "A" },
      { text: "Na maioria das vezes consigo", type: "B" },
      { text: "Tenho dificuldade, fico constrangido", type: "C" },
      { text: "Sim, mas de forma exagerada às vezes", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quando alguém te magoa, você:",
    options: [
      { text: "Expresso como me senti de forma calma", type: "A" },
      { text: "Às vezes falo, às vezes guardo", type: "B" },
      { text: "Guardo para mim e remoendo", type: "C" },
      { text: "Ataco de volta imediatamente", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você estabelece limites claros nos relacionamentos?",
    options: [
      { text: "Sim, comunico meus limites claramente", type: "A" },
      { text: "Tento, mas nem sempre consigo", type: "B" },
      { text: "Raramente, deixo os outros decidirem", type: "C" },
      { text: "Imponho limites de forma rígida e inflexível", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você inicia conversas com desconhecidos?",
    options: [
      { text: "Naturalmente, sem problema", type: "A" },
      { text: "Com algum esforço, mas consigo", type: "B" },
      { text: "Muito difícil, prefiro evitar", type: "C" },
      { text: "Domino a conversa desde o início", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como as pessoas descrevem sua forma de se comunicar?",
    options: [
      { text: "Clara, direta e respeitosa", type: "A" },
      { text: "Educada mas às vezes hesitante", type: "B" },
      { text: "Quieta, reservada ou tímida", type: "C" },
      { text: "Forte, dominante ou intimidadora", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Assertivo",
    emoji: "💪",
    description: "Você é assertivo! Expressa suas necessidades e opiniões de forma clara, direta e respeitosa. Este é o estilo de comunicação mais saudável e eficaz.",
    traits: ["Direto", "Respeitoso", "Confiante", "Equilibrado"],
    strengths: ["Comunicação efetiva", "Relacionamentos saudáveis", "Autoestima elevada", "Respeito mútuo"],
    weaknesses: ["Pode parecer muito direto para culturas mais indiretas"],
    tips: ["Continue praticando assertividade", "Adapte o estilo ao contexto cultural", "Ensine outros por exemplo"],
  },
  B: {
    type: "B",
    title: "Parcialmente Assertivo",
    emoji: "🌱",
    description: "Você tem alguns comportamentos assertivos mas ainda pode desenvolver mais essa habilidade. Em algumas situações você se expressa bem, em outras ainda hesita.",
    traits: ["Adaptável", "Cauteloso", "Em desenvolvimento", "Consciente"],
    strengths: ["Consciência das dificuldades", "Capacidade de melhora", "Flexibilidade"],
    weaknesses: ["Inconsistência na assertividade", "Hesitação em situações importantes"],
    tips: ["Pratique em situações de baixo risco", "Use técnicas como ensaio mental", "Celebre pequenas vitórias assertivas"],
  },
  C: {
    type: "C",
    title: "Passivo",
    emoji: "🙈",
    description: "Você tem comportamento passivo, evitando expressar suas necessidades e opiniões. Isso pode levar a ressentimento e relacionamentos desequilibrados.",
    traits: ["Evitativo", "Acomodado", "Inseguro", "Submisso"],
    strengths: ["Evita conflitos", "Considerado com outros"],
    weaknesses: ["Necessidades não atendidas", "Acúmulo de frustração", "Baixa autoestima", "Relacionamentos desequilibrados"],
    tips: ["Comece expressando preferências pequenas", "Pratique dizer não em situações seguras", "Considere terapia para desenvolver assertividade"],
  },
  D: {
    type: "D",
    title: "Agressivo",
    emoji: "🔥",
    description: "Você tem comportamento agressivo, impondo suas necessidades sobre os outros. Isso pode conseguir resultados a curto prazo mas prejudica relacionamentos.",
    traits: ["Dominante", "Impositivo", "Confrontacional", "Intimidador"],
    strengths: ["Consegue o que quer frequentemente", "Não é ignorado"],
    weaknesses: ["Relacionamentos prejudicados", "Cria inimigos", "Estresse constante", "Não resolve conflitos realmente"],
    tips: ["Pratique escuta ativa", "Considere o impacto nos outros", "Busque ajuda para manejo da raiva"],
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
