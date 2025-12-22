// Teste de Equilíbrio de Vida
// Descubra como está seu equilíbrio entre diferentes áreas da vida!

export const questions = [
  {
    id: 1,
    question: "Você consegue equilibrar trabalho e vida pessoal?",
    options: [
      { text: "Sim, mantenho bom equilíbrio", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Tenho dificuldade, uma área domina", type: "C" },
      { text: "Não, trabalho consome tudo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você dedica tempo para autocuidado?",
    options: [
      { text: "Sim, é prioridade", type: "A" },
      { text: "Frequentemente, quando possível", type: "B" },
      { text: "Raramente, sempre falta tempo", type: "C" },
      { text: "Nunca, outras coisas são mais importantes", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Seus relacionamentos recebem atenção adequada?",
    options: [
      { text: "Sim, priorizo pessoas importantes", type: "A" },
      { text: "Geralmente consigo manter", type: "B" },
      { text: "Frequentemente negligencio", type: "C" },
      { text: "Meus relacionamentos estão abandonados", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você tem hobbies ou atividades de lazer?",
    options: [
      { text: "Sim, e dedico tempo regular a eles", type: "A" },
      { text: "Tenho, mas nem sempre consigo praticar", type: "B" },
      { text: "Quase não tenho tempo para isso", type: "C" },
      { text: "Não tenho hobbies, só trabalho", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você cuida da sua saúde física?",
    options: [
      { text: "Sim, exercício e alimentação são prioridade", type: "A" },
      { text: "Tento cuidar, com algumas falhas", type: "B" },
      { text: "Frequentemente negligencio", type: "C" },
      { text: "Não cuido, não tenho tempo/energia", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você tem tempo para reflexão e crescimento pessoal?",
    options: [
      { text: "Sim, dedico tempo regularmente", type: "A" },
      { text: "De vez em quando", type: "B" },
      { text: "Raramente paro para refletir", type: "C" },
      { text: "Nunca, estou sempre ocupado demais", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você consegue descansar e relaxar adequadamente?",
    options: [
      { text: "Sim, descanso é essencial", type: "A" },
      { text: "Geralmente consigo", type: "B" },
      { text: "Tenho dificuldade em relaxar", type: "C" },
      { text: "Não sei mais o que é relaxar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Suas finanças estão em ordem?",
    options: [
      { text: "Sim, tenho controle e planejamento", type: "A" },
      { text: "Razoavelmente organizadas", type: "B" },
      { text: "Desorganizadas, causa estresse", type: "C" },
      { text: "Caóticas, grande fonte de preocupação", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você sente que está vivendo alinhado com seus valores?",
    options: [
      { text: "Sim, minha vida reflete meus valores", type: "A" },
      { text: "Em grande parte", type: "B" },
      { text: "Parcialmente, há desalinhamentos", type: "C" },
      { text: "Não, vivo em conflito com meus valores", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você tem energia para as coisas importantes?",
    options: [
      { text: "Sim, gerencio bem minha energia", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Frequentemente esgotado", type: "C" },
      { text: "Sempre exausto, sem energia para nada", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você sente que está progredindo na vida?",
    options: [
      { text: "Sim, em várias áreas importantes", type: "A" },
      { text: "Em algumas áreas sim", type: "B" },
      { text: "Estagnado na maioria", type: "C" },
      { text: "Regredindo ou totalmente parado", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria o equilíbrio da sua vida?",
    options: [
      { text: "Bem equilibrada", type: "A" },
      { text: "Razoavelmente equilibrada", type: "B" },
      { text: "Desequilibrada", type: "C" },
      { text: "Muito desequilibrada, em crise", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Vida Equilibrada",
    emoji: "⚖️",
    description: "Você tem uma vida equilibrada! Consegue dedicar atenção às diferentes áreas importantes: trabalho, relacionamentos, saúde e lazer. Continue assim!",
    traits: ["Equilibrado", "Organizado", "Consciente", "Saudável"],
    strengths: ["Bem-estar geral", "Sustentabilidade", "Satisfação em várias áreas", "Energia adequada"],
    weaknesses: ["Manter equilíbrio requer esforço constante"],
    tips: ["Continue priorizando equilíbrio", "Ajuste quando algo sair do lugar", "Inspire outros com seu exemplo"],
  },
  B: {
    type: "B",
    title: "Equilíbrio Razoável",
    emoji: "🌿",
    description: "Você tem equilíbrio razoável, com algumas áreas bem atendidas e outras precisando de mais atenção. Há espaço para melhorar.",
    traits: ["Funcional", "Consciente", "Em ajuste", "Esforçado"],
    strengths: ["Funcionamento adequado", "Consciência das necessidades", "Base para melhorar"],
    weaknesses: ["Algumas áreas negligenciadas", "Risco de desgaste"],
    tips: ["Identifique áreas negligenciadas", "Faça ajustes graduais", "Não espere o esgotamento para agir"],
  },
  C: {
    type: "C",
    title: "Vida Desequilibrada",
    emoji: "😰",
    description: "Sua vida está desequilibrada, com algumas áreas dominando enquanto outras são negligenciadas. Isso pode estar causando estresse e insatisfação.",
    traits: ["Desequilibrado", "Estressado", "Negligenciando áreas", "Em desgaste"],
    strengths: ["Provavelmente forte em uma área"],
    weaknesses: ["Outras áreas sofrendo", "Risco de burnout", "Relacionamentos ou saúde podem estar em perigo"],
    tips: ["Avalie urgentemente o que está negligenciando", "Faça mudanças antes de um colapso", "Equilíbrio é sustentabilidade"],
  },
  D: {
    type: "D",
    title: "Desequilíbrio Severo",
    emoji: "🆘",
    description: "Você está com desequilíbrio severo na vida. Múltiplas áreas estão negligenciadas e você provavelmente está esgotado. Mudanças urgentes são necessárias.",
    traits: ["Muito desequilibrado", "Esgotado", "Em crise", "Negligenciando tudo"],
    strengths: ["Reconhecimento da necessidade de mudança"],
    weaknesses: ["Saúde em risco", "Relacionamentos em risco", "Qualidade de vida severamente comprometida"],
    tips: ["Busque ajuda profissional", "Faça mudanças urgentes", "Sua saúde e bem-estar são prioridade máxima"],
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
