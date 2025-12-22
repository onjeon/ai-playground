// Qual Estado Brasileiro Você Seria?
// Descubra qual estado do Brasil combina mais com sua personalidade!

export const questions = [
  {
    id: 1,
    question: "Qual clima você prefere?",
    options: [
      { text: "Calor o ano todo, praia sempre", type: "A" },
      { text: "Clima ameno, nem muito quente nem frio", type: "B" },
      { text: "Calor intenso, sol forte", type: "C" },
      { text: "Frio no inverno, quatro estações", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que você mais valoriza na vida?",
    options: [
      { text: "Beleza, cultura e agitação", type: "A" },
      { text: "Trabalho, progresso e oportunidades", type: "B" },
      { text: "Tradição, simplicidade e raízes", type: "C" },
      { text: "Qualidade de vida e natureza", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como é seu ritmo de vida?",
    options: [
      { text: "Intenso mas com tempo pra curtir", type: "A" },
      { text: "Acelerado, sempre correndo", type: "B" },
      { text: "Tranquilo, sem pressa", type: "C" },
      { text: "Equilibrado, trabalho e lazer", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual tipo de festa você prefere?",
    options: [
      { text: "Carnaval de rua, blocos e samba", type: "A" },
      { text: "Baladas, restaurantes modernos", type: "B" },
      { text: "Forró, festas tradicionais", type: "C" },
      { text: "Festas gastronômicas, vinhos", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual comida mais te atrai?",
    options: [
      { text: "Frutos do mar, açaí, tapioca", type: "A" },
      { text: "Comida internacional, variedade", type: "B" },
      { text: "Carne de sol, baião de dois", type: "C" },
      { text: "Churrasco, polenta, fondue", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você se relaciona com as pessoas?",
    options: [
      { text: "Sou muito caloroso(a) e receptivo(a)", type: "A" },
      { text: "Sou objetivo(a) e direto(a)", type: "B" },
      { text: "Sou acolhedor(a) e hospitaleiro(a)", type: "C" },
      { text: "Sou reservado(a) mas amigável", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que você faz no tempo livre?",
    options: [
      { text: "Praia, esportes ao ar livre", type: "A" },
      { text: "Cinema, teatro, exposições", type: "B" },
      { text: "Reunir a família, conversar", type: "C" },
      { text: "Trilhas, vinícolas, gastronomia", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual é sua maior qualidade?",
    options: [
      { text: "Alegria e bom humor", type: "A" },
      { text: "Ambição e determinação", type: "B" },
      { text: "Força e resiliência", type: "C" },
      { text: "Organização e eficiência", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Que tipo de paisagem te encanta?",
    options: [
      { text: "Praias paradisíacas e morros", type: "A" },
      { text: "Metrópole, arranha-céus", type: "B" },
      { text: "Sertão, caatinga, rio São Francisco", type: "C" },
      { text: "Serras, vales, campos verdes", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você lida com desafios?",
    options: [
      { text: "Com jeitinho e criatividade", type: "A" },
      { text: "Com planejamento e recursos", type: "B" },
      { text: "Com fé e persistência", type: "C" },
      { text: "Com calma e estratégia", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual música mais te representa?",
    options: [
      { text: "Samba, funk, bossa nova", type: "A" },
      { text: "MPB, rock nacional, indie", type: "B" },
      { text: "Forró, sertanejo, xote", type: "C" },
      { text: "Música gaúcha, tradicionalista", type: "D" },
    ],
  },
  {
    id: 12,
    question: "O que você busca para o futuro?",
    options: [
      { text: "Viver bem, curtir cada momento", type: "A" },
      { text: "Sucesso profissional e financeiro", type: "B" },
      { text: "Manter minhas raízes e tradições", type: "C" },
      { text: "Qualidade de vida e tranquilidade", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Rio de Janeiro",
    emoji: "🏖️",
    description: "Você é o Rio de Janeiro! Carismático(a), alegre e cheio(a) de vida. Assim como a Cidade Maravilhosa, você sabe equilibrar trabalho e diversão, e sua energia contagia todos ao redor!",
    traits: ["Carismático(a)", "Alegre", "Caloroso(a)", "Criativo(a)"],
    strengths: ["Carisma natural", "Capacidade de se adaptar", "Alegria contagiante", "Hospitalidade"],
    weaknesses: ["Pode deixar para depois", "Às vezes muito relaxado(a)", "Dificuldade com rotina rígida"],
    tips: ["Equilibre mais diversão e responsabilidade", "Nem tudo se resolve com jeitinho", "Mantenha o foco nos objetivos"],
  },
  B: {
    type: "B",
    title: "São Paulo",
    emoji: "🌆",
    description: "Você é São Paulo! Determinado(a), ambicioso(a) e sempre em movimento. Assim como a maior metrópole do Brasil, você está sempre buscando crescer e não para nunca!",
    traits: ["Ambicioso(a)", "Determinado(a)", "Versátil", "Cosmopolita"],
    strengths: ["Foco em resultados", "Diversidade de interesses", "Capacidade de trabalho", "Mentalidade global"],
    weaknesses: ["Pode ser workaholic", "Estresse frequente", "Dificuldade em relaxar"],
    tips: ["Tire tempo para descansar", "A vida não é só trabalho", "Conecte-se mais com a natureza"],
  },
  C: {
    type: "C",
    title: "Bahia/Nordeste",
    emoji: "☀️",
    description: "Você é a Bahia! Acolhedor(a), forte e cheio(a) de axé. Assim como o coração do Nordeste, você tem uma força interior incrível e uma capacidade de alegrar qualquer ambiente!",
    traits: ["Acolhedor(a)", "Forte", "Festivo(a)", "Resiliente"],
    strengths: ["Força interior", "Hospitalidade genuína", "Conexão com tradições", "Alegria natural"],
    weaknesses: ["Às vezes acomodado(a)", "Pode ser teimoso(a)", "Resistência a mudanças"],
    tips: ["Abra-se para o novo", "Busque novas oportunidades", "Mantenha a força mas seja flexível"],
  },
  D: {
    type: "D",
    title: "Sul do Brasil",
    emoji: "🍷",
    description: "Você é o Sul! Organizado(a), eficiente e com alta qualidade de vida. Assim como os estados sulistas, você valoriza a ordem, as tradições europeias e o equilíbrio!",
    traits: ["Organizado(a)", "Eficiente", "Tradicional", "Equilibrado(a)"],
    strengths: ["Capacidade de planejamento", "Valorização da qualidade", "Equilíbrio na vida", "Trabalho bem feito"],
    weaknesses: ["Pode ser reservado demais", "Às vezes inflexível", "Dificuldade em improvisar"],
    tips: ["Solte-se um pouco mais", "Experimente a espontaneidade", "Nem tudo precisa de plano"],
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
