// Seu Estilo de Negociação
// Descubra como você negocia no ambiente profissional!

export const questions = [
  {
    id: 1,
    question: "Qual sua primeira reação ao iniciar uma negociação?",
    options: [
      { text: "Vou firme e começo com proposta agressiva", type: "A" },
      { text: "Analiso todos os dados antes de falar", type: "B" },
      { text: "Busco entender o que o outro lado quer", type: "C" },
      { text: "Evito confronto e busco harmonia logo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você se prepara para uma negociação importante?",
    options: [
      { text: "Defino meu mínimo aceitável e vou para guerra", type: "A" },
      { text: "Pesquiso tudo sobre o outro lado e mercado", type: "B" },
      { text: "Penso em opções que beneficiem ambos", type: "C" },
      { text: "Espero para ver como a conversa evolui", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando o outro lado faz uma proposta ruim, você:",
    options: [
      { text: "Rejeito imediatamente e faço contraproposta forte", type: "A" },
      { text: "Peço tempo para analisar os números", type: "B" },
      { text: "Pergunto o que levou a essa proposta", type: "C" },
      { text: "Aceito parcialmente para não criar conflito", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que você considera mais importante em uma negociação?",
    options: [
      { text: "Ganhar e sair com o melhor acordo possível", type: "A" },
      { text: "Ter dados que sustentem minha posição", type: "B" },
      { text: "Manter o relacionamento para o futuro", type: "C" },
      { text: "Resolver logo e evitar stress", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você lida com silêncios durante uma negociação?",
    options: [
      { text: "Uso a meu favor para pressionar", type: "A" },
      { text: "Aproveito para organizar meus pensamentos", type: "B" },
      { text: "Pergunto o que o outro está pensando", type: "C" },
      { text: "Fico desconfortável e quebro o silêncio", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando a negociação empaca, você:",
    options: [
      { text: "Aumento a pressão ou ameaço ir embora", type: "A" },
      { text: "Proponho uma pausa para reanalisar", type: "B" },
      { text: "Busco entender o que está travando", type: "C" },
      { text: "Cedo um pouco para destravar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual sua maior força em negociações?",
    options: [
      { text: "Assertividade e firmeza", type: "A" },
      { text: "Preparação e conhecimento", type: "B" },
      { text: "Empatia e criação de rapport", type: "C" },
      { text: "Flexibilidade e adaptação", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que mais te irrita em uma negociação?",
    options: [
      { text: "Quando o outro é fraco e não defende posição", type: "A" },
      { text: "Quando usam emoção em vez de fatos", type: "B" },
      { text: "Quando não há boa-fé ou honestidade", type: "C" },
      { text: "Quando se arrasta por muito tempo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você fecha um acordo?",
    options: [
      { text: "Quando sinto que extraí o máximo possível", type: "A" },
      { text: "Quando os números fazem sentido", type: "B" },
      { text: "Quando ambos estão satisfeitos", type: "C" },
      { text: "Quando aparece qualquer solução razoável", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Após uma negociação difícil, você:",
    options: [
      { text: "Comemoro minha vitória", type: "A" },
      { text: "Analiso o que poderia ter feito melhor", type: "B" },
      { text: "Verifico se o relacionamento está bem", type: "C" },
      { text: "Fico aliviado por ter acabado", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual tática você mais usa?",
    options: [
      { text: "Ancoragem com proposta inicial forte", type: "A" },
      { text: "Apresentação de dados e benchmarks", type: "B" },
      { text: "Construção de relacionamento e confiança", type: "C" },
      { text: "Evito táticas, sou natural e direto", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você vê o resultado ideal de uma negociação?",
    options: [
      { text: "Eu ganho mais que o outro", type: "A" },
      { text: "Acordo justo baseado em critérios objetivos", type: "B" },
      { text: "Ganha-ganha, ambos saem satisfeitos", type: "C" },
      { text: "Qualquer acordo que evite conflito", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Negociador Competitivo",
    emoji: "🦈",
    description: "Você é um negociador agressivo e focado em vencer! Sua assertividade e firmeza impressionam, e você não tem medo de ir atrás do que quer.",
    traits: ["Assertivo", "Competitivo", "Firme", "Estratégico"],
    strengths: ["Alta capacidade de pressão", "Consegue bons acordos", "Difícil de intimidar", "Foco em resultados"],
    weaknesses: ["Pode prejudicar relacionamentos", "Visto como agressivo", "Ganha batalhas, perde guerras"],
    tips: ["Considere o longo prazo", "Desenvolva empatia", "Às vezes ceder é ganhar"],
  },
  B: {
    type: "B",
    title: "Negociador Analítico",
    emoji: "📈",
    description: "Você negocia com dados e preparação impecável! Sua força está na pesquisa e nos argumentos objetivos. Difícil argumentar contra seus números.",
    traits: ["Preparado", "Lógico", "Objetivo", "Detalhista"],
    strengths: ["Argumentos sólidos", "Difícil de contestar", "Decisões racionais", "Benchmarks e dados"],
    weaknesses: ["Pode parecer frio", "Lento em decisões rápidas", "Ignora fatores emocionais"],
    tips: ["Considere aspectos humanos", "Seja mais flexível", "Nem tudo são números"],
  },
  C: {
    type: "C",
    title: "Negociador Colaborativo",
    emoji: "🤝",
    description: "Você busca o ganha-ganha em toda negociação! Sua força está em construir relacionamentos e encontrar soluções que beneficiem todos.",
    traits: ["Empático", "Criativo", "Relacional", "Justo"],
    strengths: ["Relacionamentos duradouros", "Soluções criativas", "Confiança do outro lado", "Acordos sustentáveis"],
    weaknesses: ["Pode ceder demais", "Demora para fechar", "Vulnerável a negociadores agressivos"],
    tips: ["Defina seus limites claramente", "Não tenha medo de defender seus interesses", "Colaboração não é submissão"],
  },
  D: {
    type: "D",
    title: "Negociador Evitativo",
    emoji: "🕊️",
    description: "Você prefere evitar conflitos e busca acordos rápidos! Valoriza harmonia e não gosta de negociações longas e desgastantes.",
    traits: ["Flexível", "Harmonioso", "Rápido", "Adaptável"],
    strengths: ["Fecha acordos rápido", "Evita desgastes", "Mantém a paz", "Adaptável"],
    weaknesses: ["Pode deixar dinheiro na mesa", "Visto como fraco", "Não defende bem interesses"],
    tips: ["Prepare-se mais antes de negociar", "Defenda suas posições", "Conflito às vezes é necessário"],
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
