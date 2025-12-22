// Seu Estilo de Aprendizado Profissional
// Descubra como você aprende melhor no trabalho!

export const questions = [
  {
    id: 1,
    question: "Como você prefere aprender uma nova habilidade?",
    options: [
      { text: "Fazendo, na prática", type: "A" },
      { text: "Assistindo vídeos ou demonstrações", type: "B" },
      { text: "Lendo documentação ou livros", type: "C" },
      { text: "Discutindo com colegas ou mentores", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando precisa dominar algo novo, você:",
    options: [
      { text: "Mergulho e aprendo fazendo", type: "A" },
      { text: "Assisto tutoriais e sigo exemplos", type: "B" },
      { text: "Estudo a teoria primeiro profundamente", type: "C" },
      { text: "Busco alguém que possa me ensinar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual tipo de treinamento você mais aproveita?",
    options: [
      { text: "Workshops práticos e hands-on", type: "A" },
      { text: "Vídeo-aulas com demonstrações", type: "B" },
      { text: "Cursos teóricos e leituras", type: "C" },
      { text: "Mentorias e conversas", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você fixa melhor novos conhecimentos?",
    options: [
      { text: "Aplicando imediatamente em projetos", type: "A" },
      { text: "Revendo exemplos e visualizações", type: "B" },
      { text: "Fazendo resumos e anotações", type: "C" },
      { text: "Explicando para outras pessoas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que te frustra em processos de aprendizado?",
    options: [
      { text: "Muita teoria sem prática", type: "A" },
      { text: "Falta de exemplos visuais claros", type: "B" },
      { text: "Conteúdo superficial sem profundidade", type: "C" },
      { text: "Aprender sozinho sem interação", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você explora uma ferramenta nova?",
    options: [
      { text: "Sento e começo a usar, vou descobrindo", type: "A" },
      { text: "Assisto overview em vídeo primeiro", type: "B" },
      { text: "Leio a documentação antes de começar", type: "C" },
      { text: "Peço para alguém me mostrar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quando está aprendendo em grupo, você:",
    options: [
      { text: "Quero logo botar a mão na massa", type: "A" },
      { text: "Presto atenção nas demonstrações", type: "B" },
      { text: "Anoto tudo para estudar depois", type: "C" },
      { text: "Faço muitas perguntas e discuto", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você se mantém atualizado na profissão?",
    options: [
      { text: "Projetos práticos e experimentação", type: "A" },
      { text: "YouTube, podcasts e vídeos", type: "B" },
      { text: "Artigos, livros e newsletters", type: "C" },
      { text: "Conversas, eventos e comunidades", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você aprende melhor com:",
    options: [
      { text: "Erros e tentativa e erro", type: "A" },
      { text: "Exemplos e casos demonstrados", type: "B" },
      { text: "Conceitos e frameworks teóricos", type: "C" },
      { text: "Feedback e orientação de outros", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual ambiente de aprendizado você prefere?",
    options: [
      { text: "Laboratório ou ambiente de teste", type: "A" },
      { text: "Em frente a telas com conteúdo visual", type: "B" },
      { text: "Biblioteca ou local silencioso", type: "C" },
      { text: "Sala de aula ou grupos de estudo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Quando não entende algo, você:",
    options: [
      { text: "Tento de diferentes formas até funcionar", type: "A" },
      { text: "Busco vídeos explicando de outro jeito", type: "B" },
      { text: "Leio mais fontes sobre o assunto", type: "C" },
      { text: "Pergunto para alguém que saiba", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase melhor descreve seu aprendizado?",
    options: [
      { text: "Aprendo fazendo", type: "A" },
      { text: "Preciso ver para entender", type: "B" },
      { text: "Preciso entender a fundo a teoria", type: "C" },
      { text: "Aprendo melhor com pessoas", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Aprendiz Cinestésico",
    emoji: "🛠️",
    description: "Você aprende fazendo! Mão na massa é seu lema. A prática é sua melhor professora, e você retém conhecimento aplicando-o imediatamente.",
    traits: ["Prático", "Hands-on", "Experimentador", "Ativo"],
    strengths: ["Aprendizado rápido na prática", "Retenção através da ação", "Adaptabilidade"],
    weaknesses: ["Pode pular teoria importante", "Impaciente com explicações longas"],
    tips: ["Busque projetos práticos para aprender", "Mas não negligencie a teoria", "Use simulações e laboratórios"],
  },
  B: {
    type: "B",
    title: "Aprendiz Visual",
    emoji: "👁️",
    description: "Você aprende vendo! Vídeos, demonstrações e exemplos visuais são sua melhor forma de absorver conhecimento. Ver é compreender.",
    traits: ["Visual", "Observador", "Exemplo-driven", "Demonstrativo"],
    strengths: ["Absorve bem conteúdo visual", "Memória de exemplos", "Aprendizado por demonstração"],
    weaknesses: ["Pode depender demais de visuais", "Dificuldade com conteúdo só textual"],
    tips: ["Use YouTube e vídeo-cursos", "Crie mapas mentais e diagramas", "Peça demonstrações quando possível"],
  },
  C: {
    type: "C",
    title: "Aprendiz Teórico",
    emoji: "📚",
    description: "Você aprende lendo e estudando! Precisa entender a teoria e conceitos antes de aplicar. Seu aprendizado é profundo e fundamentado.",
    traits: ["Estudioso", "Analítico", "Profundo", "Conceitual"],
    strengths: ["Entendimento profundo", "Fundamentação sólida", "Aprendizado estruturado"],
    weaknesses: ["Pode demorar a aplicar", "Paralisia por análise"],
    tips: ["Equilibre teoria com prática", "Não espere saber tudo para começar", "Documentação é sua amiga"],
  },
  D: {
    type: "D",
    title: "Aprendiz Social",
    emoji: "👥",
    description: "Você aprende com pessoas! Discussões, mentorias e colaboração são sua melhor forma de absorver conhecimento. Aprender é um esporte coletivo.",
    traits: ["Colaborativo", "Comunicativo", "Interativo", "Relacional"],
    strengths: ["Aprende bem em grupos", "Networking integrado", "Feedback constante"],
    weaknesses: ["Pode depender demais de outros", "Dificuldade em aprender sozinho"],
    tips: ["Busque comunidades e grupos de estudo", "Encontre mentores", "Aprenda a também estudar solo"],
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
