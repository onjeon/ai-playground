// Seu Estilo de Gestão de Conflitos
// Descubra como você lida com conflitos no trabalho!

export const questions = [
  {
    id: 1,
    question: "Quando surge um conflito com colega, sua primeira reação é:",
    options: [
      { text: "Confronto direto para resolver logo", type: "A" },
      { text: "Busco entender o lado do outro primeiro", type: "B" },
      { text: "Tento achar um meio-termo rápido", type: "C" },
      { text: "Evito e espero passar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que você mais valoriza na resolução de conflitos?",
    options: [
      { text: "Que minha posição prevaleça", type: "A" },
      { text: "Que todos saiam satisfeitos", type: "B" },
      { text: "Que termine rápido e bem", type: "C" },
      { text: "Que não haja mais tensão", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando discorda do seu chefe, você:",
    options: [
      { text: "Defendo minha posição com firmeza", type: "A" },
      { text: "Expresso minha visão e busco consenso", type: "B" },
      { text: "Aceito mas proponho ajustes", type: "C" },
      { text: "Geralmente aceito sem questionar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você se sente em ambientes de conflito?",
    options: [
      { text: "Confortável, conflito traz clareza", type: "A" },
      { text: "Bem, se for construtivo", type: "B" },
      { text: "Desconfortável mas lido", type: "C" },
      { text: "Muito desconfortável, evito ao máximo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quando duas pessoas da equipe estão em conflito, você:",
    options: [
      { text: "Intervenho e ajudo a resolver", type: "A" },
      { text: "Facilito a conversa entre eles", type: "B" },
      { text: "Sugiro que encontrem um acordo", type: "C" },
      { text: "Deixo eles resolverem sozinhos", type: "D" },
    ],
  },
  {
    id: 6,
    question: "O que você faz quando sabe que está errado em um conflito?",
    options: [
      { text: "Difícil admitir, mas faço se for claro", type: "A" },
      { text: "Reconheço e busco solução conjunta", type: "B" },
      { text: "Cedo e proponho resolver", type: "C" },
      { text: "Deixo passar sem discutir", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você lida com conflitos que envolvem emoções fortes?",
    options: [
      { text: "Foco no racional, emoções atrapalham", type: "A" },
      { text: "Reconheço as emoções e trabalho com elas", type: "B" },
      { text: "Tento acalmar os ânimos primeiro", type: "C" },
      { text: "Evito até as emoções esfriarem", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual sua relação com conflitos de ideias em reuniões?",
    options: [
      { text: "Adoro debate intenso de ideias", type: "A" },
      { text: "Gosto quando é respeitoso e construtivo", type: "B" },
      { text: "Prefiro consenso rápido", type: "C" },
      { text: "Me incomoda, prefiro harmonia", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Depois de um conflito resolvido, você:",
    options: [
      { text: "Sigo em frente sem olhar para trás", type: "A" },
      { text: "Verifico se o relacionamento está bem", type: "B" },
      { text: "Fico aliviado e espero não repetir", type: "C" },
      { text: "Fico processando por um tempo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Quando o conflito é com alguém de quem você gosta:",
    options: [
      { text: "Trato igual, conflito é conflito", type: "A" },
      { text: "Tenho mais cuidado mas não evito", type: "B" },
      { text: "Tento resolver rapidamente", type: "C" },
      { text: "Evito o conflito para não prejudicar a relação", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que você pensa sobre conflitos no trabalho?",
    options: [
      { text: "São necessários para melhores decisões", type: "A" },
      { text: "Podem ser produtivos se bem gerenciados", type: "B" },
      { text: "Às vezes inevitáveis", type: "C" },
      { text: "Sempre negativos, devem ser evitados", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como os outros descreveriam seu estilo em conflitos?",
    options: [
      { text: "Firme e direto", type: "A" },
      { text: "Justo e equilibrado", type: "B" },
      { text: "Flexível e conciliador", type: "C" },
      { text: "Evita confronto", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Competidor",
    emoji: "🥊",
    description: "Você enfrenta conflitos de frente e luta pela sua posição! Assertivo e direto, você não foge de confrontos. Isso é útil mas pode prejudicar relacionamentos.",
    traits: ["Assertivo", "Direto", "Competitivo", "Firme"],
    strengths: ["Não evita conflitos", "Posição clara", "Resolve rápido quando ganha"],
    weaknesses: ["Pode prejudicar relacionamentos", "Visto como agressivo", "Nem sempre o melhor resultado"],
    tips: ["Desenvolva mais empatia", "Nem todo conflito precisa de vencedor", "Considere o impacto nos relacionamentos"],
  },
  B: {
    type: "B",
    title: "Colaborador",
    emoji: "🤝",
    description: "Você busca soluções ganha-ganha! Enfrenta conflitos mas priorizando que todos saiam satisfeitos. Seu estilo constrói relacionamentos e melhores soluções.",
    traits: ["Colaborativo", "Empático", "Criativo", "Equilibrado"],
    strengths: ["Soluções sustentáveis", "Relacionamentos preservados", "Todos se sentem ouvidos"],
    weaknesses: ["Pode demorar mais", "Nem sempre possível agradar todos"],
    tips: ["Continue com esse estilo!", "Saiba quando ser mais assertivo", "Às vezes decisões difíceis são necessárias"],
  },
  C: {
    type: "C",
    title: "Conciliador",
    emoji: "⚖️",
    description: "Você busca o meio-termo rapidamente! Prefere acordos que resolvam o conflito mesmo que ninguém saia 100% satisfeito. Eficiente mas nem sempre ideal.",
    traits: ["Pragmático", "Flexível", "Rápido", "Justo"],
    strengths: ["Resolve conflitos rapidamente", "Todos cedem um pouco", "Mantém harmonia"],
    weaknesses: ["Soluções podem ser superficiais", "Ninguém totalmente satisfeito", "Pode não resolver raiz"],
    tips: ["Às vezes vale aprofundar", "Não aceite qualquer acordo", "Investigue causas raízes"],
  },
  D: {
    type: "D",
    title: "Evitador",
    emoji: "🕊️",
    description: "Você evita conflitos ao máximo! Prefere harmonia a confronto. Isso mantém a paz superficial mas pode deixar problemas sem solução.",
    traits: ["Pacífico", "Evitativo", "Harmonioso", "Passivo"],
    strengths: ["Mantém paz imediata", "Não escala conflitos"],
    weaknesses: ["Problemas não resolvidos", "Ressentimentos acumulados", "Visto como fraco", "Conflitos maiores depois"],
    tips: ["IMPORTANTE: Evitar conflitos não os resolve", "Desenvolva habilidades de assertividade", "Conflitos bem gerenciados são saudáveis"],
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
