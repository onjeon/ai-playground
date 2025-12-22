// Que Tipo de Influenciador Digital Você Seria?
// Descubra qual seria seu nicho nas redes sociais!

export const questions = [
  {
    id: 1,
    question: "Qual conteúdo você mais consome nas redes?",
    options: [
      { text: "Humor, memes e entretenimento", type: "A" },
      { text: "Lifestyle, moda e beleza", type: "B" },
      { text: "Conhecimento, dicas e tutoriais", type: "C" },
      { text: "Fitness, saúde e bem-estar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você se comporta em fotos?",
    options: [
      { text: "Faço careta, caretas e poses engraçadas", type: "A" },
      { text: "Cuido da luz, cenário e look", type: "B" },
      { text: "Prefiro algo mais natural e informativo", type: "C" },
      { text: "Mostro meu treino ou vida ativa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que mais te motiva a postar?",
    options: [
      { text: "Fazer as pessoas rirem", type: "A" },
      { text: "Inspirar com meu estilo de vida", type: "B" },
      { text: "Ensinar algo útil", type: "C" },
      { text: "Motivar as pessoas", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual seria seu diferencial?",
    options: [
      { text: "Criatividade e humor único", type: "A" },
      { text: "Estética impecável e bom gosto", type: "B" },
      { text: "Conteúdo de valor e conhecimento", type: "C" },
      { text: "Disciplina e resultados reais", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você lida com haters?",
    options: [
      { text: "Faço piada e transformo em conteúdo", type: "A" },
      { text: "Ignoro, foco no meu trabalho", type: "B" },
      { text: "Respondo com argumentos", type: "C" },
      { text: "Não deixo afetar, foco nos meus objetivos", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual rede social mais combina com você?",
    options: [
      { text: "TikTok - vídeos curtos e virais", type: "A" },
      { text: "Instagram - fotos bonitas e estilo", type: "B" },
      { text: "YouTube - conteúdo mais longo e educativo", type: "C" },
      { text: "Stories - dia a dia de treinos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual marca você gostaria de representar?",
    options: [
      { text: "Netflix, marcas de snacks, games", type: "A" },
      { text: "Marcas de luxo, moda, cosméticos", type: "B" },
      { text: "Marcas educacionais, tecnologia", type: "C" },
      { text: "Marcas fitness, suplementos, sportswear", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que seus seguidores mais comentariam?",
    options: [
      { text: "'Morri de rir!', 'Você é muito engraçado(a)'", type: "A" },
      { text: "'Que look lindo!', 'Meta de vida'", type: "B" },
      { text: "'Muito útil!', 'Aprendi demais'", type: "C" },
      { text: "'Me motivou demais!', 'Inspiração'", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como seria sua rotina de criação de conteúdo?",
    options: [
      { text: "Quando a inspiração vem, improviso", type: "A" },
      { text: "Planejada, com produção elaborada", type: "B" },
      { text: "Organizada, pesquisando bem os temas", type: "C" },
      { text: "Constante, disciplina é tudo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual seria seu maior desafio?",
    options: [
      { text: "Manter a criatividade sempre", type: "A" },
      { text: "Equilibrar autenticidade e patrocínios", type: "B" },
      { text: "Simplificar conteúdos complexos", type: "C" },
      { text: "Manter a disciplina em dia", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que você não faria por views?",
    options: [
      { text: "Algo sem graça ou forçado", type: "A" },
      { text: "Algo que prejudique minha imagem", type: "B" },
      { text: "Espalhar desinformação", type: "C" },
      { text: "Promover algo em que não acredito", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual seu objetivo final com as redes?",
    options: [
      { text: "Entretenimento e fazer as pessoas felizes", type: "A" },
      { text: "Construir uma marca pessoal forte", type: "B" },
      { text: "Educar e transformar vidas", type: "C" },
      { text: "Inspirar pessoas a serem melhores", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Influencer de Humor/Entretenimento",
    emoji: "🤣",
    description: "Você seria o influencer de humor! Com seu carisma e criatividade, você faz todo mundo rir. Como os grandes humoristas digitais, seu dom é transformar o cotidiano em diversão!",
    traits: ["Engraçado(a)", "Criativo(a)", "Carismático(a)", "Espontâneo(a)"],
    strengths: ["Fazer rir", "Viralizar conteúdos", "Conectar com público", "Criatividade inesgotável"],
    weaknesses: ["Pressão por ser sempre engraçado(a)", "Dificuldade com assuntos sérios", "Burnout criativo"],
    tips: ["Cuide da sua saúde mental", "Não precisa ser engraçado sempre", "Diversifique seu conteúdo"],
  },
  B: {
    type: "B",
    title: "Influencer de Lifestyle/Moda",
    emoji: "✨",
    description: "Você seria o influencer de lifestyle! Com seu bom gosto e estética apurada, você inspira pessoas com seu estilo de vida. Como os grandes influencers de moda, você é referência!",
    traits: ["Estiloso(a)", "Sofisticado(a)", "Inspirador(a)", "Visual"],
    strengths: ["Senso estético", "Criar tendências", "Parcerias premium", "Influência aspiracional"],
    weaknesses: ["Pressão por perfeição", "Críticas sobre autenticidade", "Alto custo de produção"],
    tips: ["Mostre seu lado real", "Perfeição não existe", "Vulnerabilidade conecta"],
  },
  C: {
    type: "C",
    title: "Influencer Educacional/Conhecimento",
    emoji: "📚",
    description: "Você seria o influencer educacional! Com seu conhecimento e didática, você transforma vidas ensinando. Como os grandes criadores de conteúdo educativo, você agrega valor real!",
    traits: ["Inteligente", "Didático(a)", "Confiável", "Informativo(a)"],
    strengths: ["Conteúdo de valor", "Autoridade no assunto", "Impacto positivo", "Audiência engajada"],
    weaknesses: ["Pode ser visto como chato(a)", "Conteúdo menos viral", "Demanda muita pesquisa"],
    tips: ["Torne o conteúdo leve também", "Entretenimento e educação combinam", "Humanize seu perfil"],
  },
  D: {
    type: "D",
    title: "Influencer Fitness/Wellness",
    emoji: "💪",
    description: "Você seria o influencer fitness! Com sua disciplina e resultados, você motiva pessoas a serem melhores. Como os grandes influencers de saúde, você transforma vidas!",
    traits: ["Disciplinado(a)", "Motivador(a)", "Focado(a)", "Inspirador(a)"],
    strengths: ["Resultados reais", "Motivação constante", "Autoridade em saúde", "Comunidade engajada"],
    weaknesses: ["Pressão por corpo perfeito", "Cobrança constante", "Risco de overtraining"],
    tips: ["Mostre também seus dias ruins", "Saúde mental importa", "Equilíbrio é tudo"],
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
