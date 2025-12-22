// Qual Programa de TV Brasileiro Você Seria?
// Descubra qual tipo de programa da TV brasileira representa sua personalidade!

export const questions = [
  {
    id: 1,
    question: "O que você mais gosta de fazer nos fins de semana?",
    options: [
      { text: "Assistir a fofocas e entretenimento", type: "A" },
      { text: "Ver competições e reality shows", type: "B" },
      { text: "Assistir jornal e se informar", type: "C" },
      { text: "Maratonar séries e novelas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você se comporta em grupo?",
    options: [
      { text: "Conto as últimas novidades e fofocas", type: "A" },
      { text: "Gosto de competir e me destacar", type: "B" },
      { text: "Trago informações relevantes e debates", type: "C" },
      { text: "Conto histórias e prendendo a atenção", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que mais te atrai na TV?",
    options: [
      { text: "Variedades e entretenimento leve", type: "A" },
      { text: "Emoção de competições", type: "B" },
      { text: "Informação de qualidade", type: "C" },
      { text: "Boas tramas e personagens", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual seu papel em uma festa?",
    options: [
      { text: "O/A que sabe de tudo sobre todos", type: "A" },
      { text: "O/A competitivo(a) dos jogos", type: "B" },
      { text: "O/A que puxa debates interessantes", type: "C" },
      { text: "O/A que conta histórias fascinantes", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você lida com novidades?",
    options: [
      { text: "Espalho rapidamente!", type: "A" },
      { text: "Uso pra ter vantagem", type: "B" },
      { text: "Analiso antes de compartilhar", type: "C" },
      { text: "Guardo pra contar na hora certa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual horário da TV você mais curte?",
    options: [
      { text: "Tarde - programas de auditório", type: "A" },
      { text: "Noite - realities e competições", type: "B" },
      { text: "Manhã - jornais e debates", type: "C" },
      { text: "Noite - novelas e séries", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que te faz ligar a TV?",
    options: [
      { text: "Entretenimento e descontração", type: "A" },
      { text: "Emoção e adrenalina", type: "B" },
      { text: "Informação e atualidades", type: "C" },
      { text: "Boas histórias e emoção", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você descreveria sua personalidade?",
    options: [
      { text: "Comunicativa e popular", type: "A" },
      { text: "Competitiva e determinada", type: "B" },
      { text: "Informada e crítica", type: "C" },
      { text: "Envolvente e emocional", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual apresentador(a) mais te representa?",
    options: [
      { text: "Fátima Bernardes, Patrícia Abravanel", type: "A" },
      { text: "Tadeu Schmidt, Marcos Mion", type: "B" },
      { text: "William Bonner, Renata Vasconcellos", type: "C" },
      { text: "Glória Perez (autora), Silvio Santos", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que mais valoriza em conteúdo?",
    options: [
      { text: "Ser divertido e leve", type: "A" },
      { text: "Ser emocionante e competitivo", type: "B" },
      { text: "Ser informativo e relevante", type: "C" },
      { text: "Ser envolvente e bem contado", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você gosta de passar o tempo?",
    options: [
      { text: "Conversando sobre celebridades", type: "A" },
      { text: "Competindo em jogos ou esportes", type: "B" },
      { text: "Lendo notícias e me informando", type: "C" },
      { text: "Acompanhando histórias de ficção", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual seria sua catchphrase?",
    options: [
      { text: "'Você não vai acreditar nisso!'", type: "A" },
      { text: "'Vamos ver quem ganha!'", type: "B" },
      { text: "'É preciso analisar os fatos'", type: "C" },
      { text: "'Essa história vai te emocionar'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Programa de Variedades/Auditório",
    emoji: "📺",
    description: "Você é um Programa de Variedades! Como os grandes programas de auditório da TV brasileira, você é versátil, comunicativo(a) e sabe de tudo sobre todos!",
    traits: ["Comunicativo(a)", "Popular", "Versátil", "Sociável"],
    strengths: ["Fazer conversação", "Saber das novidades", "Entreter", "Conectar pessoas"],
    weaknesses: ["Pode ser fofoqueiro(a)", "Superficial às vezes", "Dependência de aprovação"],
    tips: ["Guarde alguns segredos", "Profundidade também importa", "Nem tudo precisa ser compartilhado"],
  },
  B: {
    type: "B",
    title: "Reality Show/Competição",
    emoji: "🏆",
    description: "Você é um Reality Show! Como BBB, MasterChef ou The Voice, você é competitivo(a), intenso(a) e adora a emoção de uma boa disputa!",
    traits: ["Competitivo(a)", "Intenso(a)", "Determinado(a)", "Estratégico(a)"],
    strengths: ["Determinação", "Foco em resultados", "Capacidade competitiva", "Entretenimento"],
    weaknesses: ["Pode ser agressivo(a)", "Dificuldade em perder", "Muito focado em ganhar"],
    tips: ["Perder faz parte", "Cooperação também funciona", "Nem tudo é competição"],
  },
  C: {
    type: "C",
    title: "Telejornal/Programa de Debates",
    emoji: "📰",
    description: "Você é um Telejornal! Como o Jornal Nacional ou programas de debates, você valoriza informação, verdade e análise crítica dos fatos!",
    traits: ["Informado(a)", "Crítico(a)", "Sério(a)", "Confiável"],
    strengths: ["Conhecimento amplo", "Pensamento crítico", "Credibilidade", "Análise apurada"],
    weaknesses: ["Pode ser chato(a)", "Muito sério(a)", "Dificuldade em descontrair"],
    tips: ["Relaxe às vezes", "Entretenimento também é válido", "Nem tudo é sobre fatos"],
  },
  D: {
    type: "D",
    title: "Novela/Série Brasileira",
    emoji: "🎭",
    description: "Você é uma Novela! Como as grandes produções da TV brasileira, você é envolvente, emocional e sabe contar histórias que prendem a atenção!",
    traits: ["Envolvente", "Emocional", "Dramático(a)", "Cativante"],
    strengths: ["Contar histórias", "Envolver pessoas", "Criar emoção", "Manter interesse"],
    weaknesses: ["Pode ser dramático(a) demais", "Tendência ao melodrama", "Às vezes exagerado(a)"],
    tips: ["Nem tudo precisa de drama", "Simplicidade também funciona", "Equilibre emoção e razão"],
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
