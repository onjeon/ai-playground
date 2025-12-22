// Teste de Confiança nos Outros
// Descubra como você confia nas pessoas!

export const questions = [
  {
    id: 1,
    question: "Você acredita que as pessoas são essencialmente boas?",
    options: [
      { text: "Sim, a maioria tem boas intenções", type: "A" },
      { text: "Em geral sim, com exceções", type: "B" },
      { text: "Tenho dúvidas sobre isso", type: "C" },
      { text: "Não, pessoas são egoístas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você confia em pessoas que acabou de conhecer?",
    options: [
      { text: "Dou o benefício da dúvida inicial", type: "A" },
      { text: "Confiança gradual conforme conheço", type: "B" },
      { text: "Desconfio até provarem que merecem", type: "C" },
      { text: "Não confio em desconhecidos", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você compartilha segredos com amigos?",
    options: [
      { text: "Sim, confio nos meus amigos", type: "A" },
      { text: "Com alguns amigos selecionados", type: "B" },
      { text: "Raramente, tenho medo de vazamento", type: "C" },
      { text: "Nunca, não confio em ninguém com segredos", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quando alguém te decepciona, você:",
    options: [
      { text: "Perdoo e mantenho a capacidade de confiar", type: "A" },
      { text: "Perdoo mas fico mais cauteloso com essa pessoa", type: "B" },
      { text: "Perco confiança nessa pessoa e em outras", type: "C" },
      { text: "Confirma que não devo confiar em ninguém", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você delega tarefas importantes para outros?",
    options: [
      { text: "Sim, confio que farão bem", type: "A" },
      { text: "Delego com acompanhamento", type: "B" },
      { text: "Tenho dificuldade em delegar", type: "C" },
      { text: "Prefiro fazer tudo sozinho", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você acredita quando alguém diz que te ama?",
    options: [
      { text: "Sim, não tenho razão para duvidar", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Tenho dúvidas, será verdade?", type: "C" },
      { text: "Não, amor é só interesse", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você acha que colegas de trabalho querem seu bem?",
    options: [
      { text: "A maioria sim, somos uma equipe", type: "A" },
      { text: "Alguns sim, outros nem tanto", type: "B" },
      { text: "Desconfio, todos pensam em si", type: "C" },
      { text: "Não, é cada um por si", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você confia em profissionais (médicos, advogados)?",
    options: [
      { text: "Sim, confio na expertise deles", type: "A" },
      { text: "Geralmente sim, mas busco segundas opiniões", type: "B" },
      { text: "Tenho desconfiança, verifico tudo", type: "C" },
      { text: "Não, acho que todos querem ganhar dinheiro", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você empresta dinheiro para amigos?",
    options: [
      { text: "Sim, quando posso e precisam", type: "A" },
      { text: "Para amigos de muita confiança", type: "B" },
      { text: "Raramente, já me decepcionei", type: "C" },
      { text: "Nunca, dinheiro acaba com amizades", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você se vulnerabiliza emocionalmente com outros?",
    options: [
      { text: "Sim, com pessoas de confiança", type: "A" },
      { text: "Às vezes, com cautela", type: "B" },
      { text: "Raramente, tenho medo", type: "C" },
      { text: "Nunca, é muito perigoso", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Quando recebe um elogio, você acredita?",
    options: [
      { text: "Sim, por que duvidar?", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Desconfio se é sincero", type: "C" },
      { text: "Não, deve ter segundas intenções", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua capacidade de confiar?",
    options: [
      { text: "Confio bem nas pessoas", type: "A" },
      { text: "Confiança seletiva e gradual", type: "B" },
      { text: "Tenho dificuldade em confiar", type: "C" },
      { text: "Não confio em quase ninguém", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Alta Confiança",
    emoji: "💚",
    description: "Você tem alta capacidade de confiar! Acredita na bondade das pessoas e se abre para relacionamentos. Isso permite conexões profundas.",
    traits: ["Confiante", "Aberto", "Vulnerável", "Conectado"],
    strengths: ["Relacionamentos profundos", "Conexões facilitadas", "Bem-estar social"],
    weaknesses: ["Pode ser ingênuo às vezes", "Pode se decepcionar mais"],
    tips: ["Mantenha confiança com sabedoria", "Não ignore red flags", "Equilibre abertura com discernimento"],
  },
  B: {
    type: "B",
    title: "Confiança Equilibrada",
    emoji: "⚖️",
    description: "Você tem confiança equilibrada. Confia nas pessoas gradualmente e de forma seletiva. Este é um equilíbrio saudável e funcional.",
    traits: ["Cauteloso", "Equilibrado", "Sábio", "Funcional"],
    strengths: ["Confiança com discernimento", "Proteção adequada", "Relacionamentos sólidos quando construídos"],
    weaknesses: ["Pode demorar para se abrir"],
    tips: ["Continue com equilíbrio", "Nem todos precisam provar tudo", "Confie um pouco mais quando apropriado"],
  },
  C: {
    type: "C",
    title: "Dificuldade em Confiar",
    emoji: "🛡️",
    description: "Você tem dificuldade em confiar. A desconfiança pode estar te protegendo, mas também limitando conexões e oportunidades.",
    traits: ["Desconfiado", "Defensivo", "Cauteloso demais", "Fechado"],
    strengths: ["Autoproteção", "Difícil de enganar"],
    weaknesses: ["Relacionamentos superficiais", "Solidão possível", "Oportunidades perdidas"],
    tips: ["Explore por que é difícil confiar", "Pode haver feridas do passado", "Terapia pode ajudar muito"],
  },
  D: {
    type: "D",
    title: "Desconfiança Extrema",
    emoji: "🔒",
    description: "Você tem desconfiança extrema. Isso está provavelmente isolando você e impedindo conexões genuínas. Pode haver traumas ou experiências que levaram a isso.",
    traits: ["Muito desconfiado", "Isolado", "Cínico", "Defensivo extremo"],
    strengths: ["Proteção máxima"],
    weaknesses: ["Isolamento severo", "Relacionamentos impossíveis", "Visão negativa do mundo", "Solidão"],
    tips: ["Busque ajuda profissional", "Desconfiança extrema não é proteção, é prisão", "Você pode aprender a confiar de forma saudável"],
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
