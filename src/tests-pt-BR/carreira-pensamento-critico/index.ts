// Seu Pensamento Crítico
// Descubra como você analisa e questiona informações no trabalho!

export const questions = [
  {
    id: 1,
    question: "Quando recebe uma informação, você:",
    options: [
      { text: "Questiono a fonte e verifico antes de aceitar", type: "A" },
      { text: "Avalio se faz sentido e busco confirmação", type: "B" },
      { text: "Geralmente aceito se vem de fonte confiável", type: "C" },
      { text: "Aceito como verdade sem questionar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você forma opiniões sobre assuntos do trabalho?",
    options: [
      { text: "Analiso múltiplas perspectivas e evidências", type: "A" },
      { text: "Considero diferentes visões antes de concluir", type: "B" },
      { text: "Baseio em poucas fontes de confiança", type: "C" },
      { text: "Sigo a opinião dominante ou do chefe", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você identifica falácias e argumentos fracos?",
    options: [
      { text: "Facilmente, saltam aos meus olhos", type: "A" },
      { text: "Frequentemente, quando presto atenção", type: "B" },
      { text: "Às vezes, quando é muito óbvio", type: "C" },
      { text: "Raramente, não penso nisso", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você reage a informações que contradizem suas crenças?",
    options: [
      { text: "Investigo com curiosidade e abertura", type: "A" },
      { text: "Considero seriamente antes de rejeitar", type: "B" },
      { text: "Tendo a rejeitar mas às vezes reflito", type: "C" },
      { text: "Rejeito, já tenho minha opinião formada", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você separa fatos de opiniões?",
    options: [
      { text: "Sempre, é fundamental", type: "A" },
      { text: "Na maioria das vezes sim", type: "B" },
      { text: "Às vezes confundo", type: "C" },
      { text: "Não penso muito nisso", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando todos concordam com algo, você:",
    options: [
      { text: "Questiono se pode haver groupthink", type: "A" },
      { text: "Verifico se minha opinião coincide genuinamente", type: "B" },
      { text: "Geralmente sigo o consenso", type: "C" },
      { text: "Se todos concordam, deve estar certo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você considera pontos de vista opostos ao seu?",
    options: [
      { text: "Sempre, é essencial para boas decisões", type: "A" },
      { text: "Frequentemente, vale a pena", type: "B" },
      { text: "Às vezes, se tiver tempo", type: "C" },
      { text: "Raramente, já sei o que penso", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você analisa dados e estatísticas?",
    options: [
      { text: "Criticamente, procuro vieses e limitações", type: "A" },
      { text: "Com cuidado, verifico contexto", type: "B" },
      { text: "Aceito se parecem corretos", type: "C" },
      { text: "Números são números, aceito como verdade", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você reconhece seus próprios vieses?",
    options: [
      { text: "Sim, trabalho ativamente para minimizá-los", type: "A" },
      { text: "Tenho consciência de alguns", type: "B" },
      { text: "Provavelmente tenho mas não penso nisso", type: "C" },
      { text: "Sou objetivo, não tenho vieses", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você muda de opinião quando apresentam bons argumentos?",
    options: [
      { text: "Sim, evidências mudam minhas posições", type: "A" },
      { text: "Às vezes, quando são muito convincentes", type: "B" },
      { text: "Raramente, sou consistente nas minhas visões", type: "C" },
      { text: "Não, mantenho minhas posições", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você faz perguntas de aprofundamento em reuniões?",
    options: [
      { text: "Sempre, para entender a fundo", type: "A" },
      { text: "Frequentemente, quando necessário", type: "B" },
      { text: "Às vezes, se algo parecer estranho", type: "C" },
      { text: "Raramente, aceito o que é apresentado", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como os outros descreveriam seu pensamento crítico?",
    options: [
      { text: "Muito crítico e analítico", type: "A" },
      { text: "Bom questionador", type: "B" },
      { text: "Aceita as coisas razoavelmente", type: "C" },
      { text: "Não questiona muito", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pensador Crítico Avançado",
    emoji: "🧠",
    description: "Você tem pensamento crítico excepcional! Questiona, analisa e avalia informações rigorosamente. Isso te protege de erros e leva a melhores decisões.",
    traits: ["Analítico", "Questionador", "Objetivo", "Criterioso"],
    strengths: ["Decisões bem fundamentadas", "Não é manipulado facilmente", "Identifica problemas", "Análise profunda"],
    weaknesses: ["Pode parecer cético demais", "Pode demorar a decidir"],
    tips: ["Continue assim!", "Equilibre análise com ação", "Ajude outros a pensar criticamente"],
  },
  B: {
    type: "B",
    title: "Bom Pensador Crítico",
    emoji: "🔍",
    description: "Você tem bom pensamento crítico! Questiona e analisa na maioria das situações. Está bem posicionado para boas decisões.",
    traits: ["Analítico", "Consciente", "Equilibrado", "Reflexivo"],
    strengths: ["Boa análise", "Questiona quando necessário", "Decisões fundamentadas"],
    weaknesses: ["Pode desenvolver ainda mais"],
    tips: ["Continue desenvolvendo", "Questione mais suas próprias premissas", "Busque mais perspectivas diversas"],
  },
  C: {
    type: "C",
    title: "Pensamento Crítico em Desenvolvimento",
    emoji: "🌱",
    description: "Seu pensamento crítico precisa de desenvolvimento. Você tende a aceitar informações sem questionar muito. Isso pode levar a decisões baseadas em premissas falsas.",
    traits: ["Aceitador", "Confiante demais", "Superficial", "Potencial"],
    strengths: ["Decide rápido", "Não complica"],
    weaknesses: ["Vulnerável a manipulação", "Decisões mal fundamentadas", "Aceita informações falsas"],
    tips: ["Desenvolva mais ceticismo saudável", "Questione fontes e premissas", "Pensamento crítico é habilidade essencial"],
  },
  D: {
    type: "D",
    title: "Baixo Pensamento Crítico",
    emoji: "⚠️",
    description: "Você tem pensamento crítico muito baixo! Aceita informações sem questionar e segue opiniões dominantes. Isso é arriscado no mundo atual.",
    traits: ["Aceita tudo", "Não questiona", "Seguidor", "Vulnerável"],
    strengths: ["Fácil de trabalhar junto"],
    weaknesses: ["Muito vulnerável a manipulação", "Decisões ruins", "Aceita fake news", "Não pensa por si mesmo"],
    tips: ["URGENTE: Desenvolva pensamento crítico!", "Questione tudo antes de aceitar", "Essa habilidade é essencial hoje"],
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
