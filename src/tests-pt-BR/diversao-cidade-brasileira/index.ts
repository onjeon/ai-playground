// Qual Cidade Brasileira Combina com Você?
// Descubra em qual cidade do Brasil você deveria morar!

export const questions = [
  {
    id: 1,
    question: "Qual seu ritmo de vida ideal?",
    options: [
      { text: "Intenso, sempre com algo acontecendo", type: "A" },
      { text: "Animado mas com praias e natureza", type: "B" },
      { text: "Tranquilo, com qualidade de vida", type: "C" },
      { text: "Cultural e histórico", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que você mais valoriza em uma cidade?",
    options: [
      { text: "Oportunidades e vida noturna", type: "A" },
      { text: "Praias e beleza natural", type: "B" },
      { text: "Segurança e organização", type: "C" },
      { text: "História e tradições", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual clima você prefere?",
    options: [
      { text: "Variado, com todas as estações", type: "A" },
      { text: "Quente o ano todo", type: "B" },
      { text: "Ameno, com friozinho no inverno", type: "C" },
      { text: "Tropical, mas sem exageros", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como é seu lazer ideal?",
    options: [
      { text: "Shows, restaurantes, baladas", type: "A" },
      { text: "Praia, trilhas, esportes ao ar livre", type: "B" },
      { text: "Parques, vinícolas, gastronomia", type: "C" },
      { text: "Museus, igrejas, centros culturais", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual sua relação com trânsito?",
    options: [
      { text: "Aceito como parte da vida urbana", type: "A" },
      { text: "Prefiro ir de bike ou a pé", type: "B" },
      { text: "Prefiro cidades organizadas", type: "C" },
      { text: "Gosto de andar pelo centro histórico", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual seu estilo gastronômico?",
    options: [
      { text: "De tudo! Quanto mais opções melhor", type: "A" },
      { text: "Frutos do mar e comida de praia", type: "B" },
      { text: "Churrasco, massas, fondue", type: "C" },
      { text: "Comida mineira, tradicional", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você se relaciona com pessoas?",
    options: [
      { text: "Muitos contatos, networking", type: "A" },
      { text: "Amizades leves e festivas", type: "B" },
      { text: "Poucos amigos mas verdadeiros", type: "C" },
      { text: "Relações baseadas em tradição", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que te faz feliz?",
    options: [
      { text: "Sucesso profissional e oportunidades", type: "A" },
      { text: "Sol, praia e vida leve", type: "B" },
      { text: "Qualidade de vida e conforto", type: "C" },
      { text: "Cultura, arte e história", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como é seu final de semana ideal?",
    options: [
      { text: "Eventos, restaurantes, agitação", type: "A" },
      { text: "Praia, churrasco, cerveja gelada", type: "B" },
      { text: "Passeio tranquilo, natureza", type: "C" },
      { text: "Visita a lugares históricos", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual seu estilo de moradia?",
    options: [
      { text: "Apartamento moderno, bem localizado", type: "A" },
      { text: "Perto da praia, luz natural", type: "B" },
      { text: "Casa com jardim, bairro tranquilo", type: "C" },
      { text: "Casarão histórico ou bairro tradicional", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que você não suporta?",
    options: [
      { text: "Tédio e falta de opções", type: "A" },
      { text: "Frio e falta de sol", type: "B" },
      { text: "Caos e desorganização", type: "C" },
      { text: "Falta de cultura e superficialidade", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você quer envelhecer?",
    options: [
      { text: "Ativo(a), no centro de tudo", type: "A" },
      { text: "Na praia, curtindo o sol", type: "B" },
      { text: "Com conforto e qualidade", type: "C" },
      { text: "Cercado(a) de história e cultura", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "São Paulo",
    emoji: "🏙️",
    description: "Sua cidade é São Paulo! Você combina com a energia, as oportunidades infinitas e a diversidade da maior cidade do Brasil. Para você, quanto mais opções melhor!",
    traits: ["Ambicioso(a)", "Urbano(a)", "Versátil", "Dinâmico(a)"],
    strengths: ["Aproveita oportunidades", "Lida bem com correria", "Gosta de diversidade", "Ama cultura urbana"],
    weaknesses: ["Pode se estressar", "Dificuldade em relaxar", "Às vezes workaholic"],
    tips: ["Reserve tempo para natureza", "Cuide da saúde mental", "São Paulo tem praias perto, use!"],
  },
  B: {
    type: "B",
    title: "Rio de Janeiro",
    emoji: "🏖️",
    description: "Sua cidade é o Rio de Janeiro! Você combina com a alegria carioca, as praias paradisíacas e o estilo de vida solar. Afinal, é preciso saber viver!",
    traits: ["Alegre", "Praiano(a)", "Festivo(a)", "Descontraído(a)"],
    strengths: ["Sabe curtir a vida", "Energia positiva", "Ama natureza e cidade", "Sociável"],
    weaknesses: ["Pode deixar pra depois", "Às vezes relaxado demais", "Dificuldade com frio"],
    tips: ["Equilibre trabalho e lazer", "Nem tudo é praia", "Cuide das responsabilidades"],
  },
  C: {
    type: "C",
    title: "Curitiba/Sul",
    emoji: "🌲",
    description: "Sua cidade é Curitiba ou região Sul! Você valoriza organização, qualidade de vida e um clima mais ameno. Eficiência e conforto são suas prioridades!",
    traits: ["Organizado(a)", "Eficiente", "Reservado(a)", "Exigente"],
    strengths: ["Valoriza qualidade", "Organização natural", "Gosta de conforto", "Vida equilibrada"],
    weaknesses: ["Pode parecer frio(a)", "Dificuldade com improviso", "Às vezes exigente demais"],
    tips: ["Solte-se um pouco mais", "O improviso pode ser bom", "Nem tudo precisa de plano"],
  },
  D: {
    type: "D",
    title: "Minas Gerais/Interior",
    emoji: "⛪",
    description: "Sua cidade é em Minas Gerais ou cidades históricas! Você valoriza tradição, cultura e raízes. Para você, história e autenticidade são mais importantes que modernidade!",
    traits: ["Tradicional", "Cultural", "Acolhedor(a)", "Autêntico(a)"],
    strengths: ["Valoriza tradições", "Conexão com história", "Hospitalidade", "Autenticidade"],
    weaknesses: ["Pode resistir a mudanças", "Às vezes conservador(a)", "Dificuldade com modernidade"],
    tips: ["Abra-se para o novo", "Tradição e modernidade podem coexistir", "Viaje para ver outras culturas"],
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
