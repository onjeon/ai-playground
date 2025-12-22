// Sua Capacidade de Influência
// Descubra como você influencia pessoas no trabalho!

export const questions = [
  {
    id: 1,
    question: "Você consegue convencer colegas a adotarem suas ideias?",
    options: [
      { text: "Frequentemente, sou muito persuasivo", type: "A" },
      { text: "Na maioria das vezes sim", type: "B" },
      { text: "Às vezes, depende da situação", type: "C" },
      { text: "Raramente, tenho dificuldade em convencer", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você apresenta propostas para stakeholders?",
    options: [
      { text: "Com estratégia clara de persuasão", type: "A" },
      { text: "De forma estruturada e convincente", type: "B" },
      { text: "Apresento os fatos e espero aceitação", type: "C" },
      { text: "Tenho dificuldade em apresentar bem", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pessoas buscam sua opinião em decisões importantes?",
    options: [
      { text: "Sempre, sou referência", type: "A" },
      { text: "Frequentemente sim", type: "B" },
      { text: "Às vezes", type: "C" },
      { text: "Raramente ou nunca", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você consegue mudar a opinião de alguém com argumentos?",
    options: [
      { text: "Frequentemente, mesmo em temas difíceis", type: "A" },
      { text: "Às vezes, com bons argumentos", type: "B" },
      { text: "Raramente, é muito difícil", type: "C" },
      { text: "Quase nunca", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como está sua rede de aliados e apoiadores no trabalho?",
    options: [
      { text: "Ampla e estratégica", type: "A" },
      { text: "Boa, tenho apoiadores importantes", type: "B" },
      { text: "Básica, alguns aliados", type: "C" },
      { text: "Fraca ou inexistente", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você sabe adaptar sua comunicação ao interlocutor?",
    options: [
      { text: "Perfeitamente, ajusto estilo e argumentos", type: "A" },
      { text: "Bem, consigo me adaptar", type: "B" },
      { text: "Mais ou menos, nem sempre acerto", type: "C" },
      { text: "Não, comunico sempre da mesma forma", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você consegue mobilizar pessoas para uma causa?",
    options: [
      { text: "Sim, inspiro e engajo naturalmente", type: "A" },
      { text: "Frequentemente consigo", type: "B" },
      { text: "Às vezes, com esforço", type: "C" },
      { text: "Tenho muita dificuldade", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você lida com resistência às suas ideias?",
    options: [
      { text: "Persisto de formas diferentes até convencer", type: "A" },
      { text: "Tento entender e adaptar a abordagem", type: "B" },
      { text: "Insisto um pouco mas desisto fácil", type: "C" },
      { text: "Desisto rapidamente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você consegue influenciar pessoas sem autoridade formal sobre elas?",
    options: [
      { text: "Sim, influência vai além de hierarquia", type: "A" },
      { text: "Frequentemente sim", type: "B" },
      { text: "Tenho dificuldade sem autoridade", type: "C" },
      { text: "Não, preciso de autoridade para influenciar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você constrói credibilidade?",
    options: [
      { text: "Estrategicamente, sei o que gera confiança", type: "A" },
      { text: "Através de resultados e relacionamentos", type: "B" },
      { text: "Naturalmente, pelo trabalho", type: "C" },
      { text: "Não penso muito nisso", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você sabe usar storytelling para influenciar?",
    options: [
      { text: "Sim, histórias são minha ferramenta favorita", type: "A" },
      { text: "Às vezes uso e funciona bem", type: "B" },
      { text: "Pouco, prefiro fatos e dados", type: "C" },
      { text: "Não sei usar histórias para isso", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como os outros descreveriam sua capacidade de influência?",
    options: [
      { text: "Alta, sou muito influente", type: "A" },
      { text: "Boa, consigo influenciar quando preciso", type: "B" },
      { text: "Moderada, às vezes funciona", type: "C" },
      { text: "Baixa, não sou muito influente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Influente",
    emoji: "🌟",
    description: "Você tem alta capacidade de influência! Persuade, inspira e mobiliza pessoas naturalmente. Isso é fundamental para posições de liderança.",
    traits: ["Persuasivo", "Inspirador", "Estratégico", "Carismático"],
    strengths: ["Alta persuasão", "Mobiliza pessoas", "Constrói aliados", "Faz coisas acontecerem"],
    weaknesses: ["Pode ser visto como manipulador", "Pode usar influência negativamente"],
    tips: ["Use sua influência eticamente", "Ajude causas e pessoas", "Influência é responsabilidade"],
  },
  B: {
    type: "B",
    title: "Influente",
    emoji: "✨",
    description: "Você tem boa capacidade de influência! Consegue persuadir e engajar quando necessário. Está bem posicionado para crescimento.",
    traits: ["Persuasivo", "Comunicativo", "Confiável", "Respeitado"],
    strengths: ["Boa persuasão", "Credibilidade", "Relacionamentos fortes"],
    weaknesses: ["Pode desenvolver ainda mais"],
    tips: ["Continue desenvolvendo", "Pratique mais storytelling", "Expanda sua rede de influência"],
  },
  C: {
    type: "C",
    title: "Influência em Desenvolvimento",
    emoji: "🌱",
    description: "Sua capacidade de influência é moderada. Você consegue em algumas situações mas tem espaço para desenvolvimento significativo.",
    traits: ["Em desenvolvimento", "Potencial", "Tímido", "Técnico"],
    strengths: ["Base para desenvolver", "Potencial"],
    weaknesses: ["Dificuldade em persuadir", "Rede de aliados limitada", "Ideias boas podem não ser aceitas"],
    tips: ["Desenvolva habilidades de persuasão", "Construa mais relacionamentos estratégicos", "Influência é habilidade que se aprende"],
  },
  D: {
    type: "D",
    title: "Baixa Influência",
    emoji: "📉",
    description: "Sua capacidade de influência é baixa. Você tem dificuldade em persuadir e mobilizar pessoas. Isso limita significativamente sua carreira.",
    traits: ["Pouco influente", "Passivo", "Isolado", "Sem rede"],
    strengths: ["Talvez competência técnica"],
    weaknesses: ["Ideias não são aceitas", "Sem aliados", "Crescimento limitado", "Voz não ouvida"],
    tips: ["IMPORTANTE: Desenvolva influência!", "Ela é essencial para crescer", "Busque treinamento ou mentoria nisso"],
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
