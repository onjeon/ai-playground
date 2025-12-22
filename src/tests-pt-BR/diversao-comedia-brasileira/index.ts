// Qual Comediante Brasileiro Você É?
// Descubra qual humorista combina com você!

export const questions = [
  {
    id: 1,
    question: "Qual seu estilo de humor?",
    options: [
      { text: "Inteligente e crítico, faz pensar", type: "A" },
      { text: "Observacional, do cotidiano", type: "B" },
      { text: "Físico e expressivo, caras e bocas", type: "C" },
      { text: "Ácido e polêmico, sem limites", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você ri de piadas sobre política?",
    options: [
      { text: "Sim! Adoro humor político", type: "A" },
      { text: "Às vezes, se for bem feito", type: "B" },
      { text: "Prefiro humor mais leve", type: "C" },
      { text: "Sim, quanto mais ácido melhor", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que te faz rir mais?",
    options: [
      { text: "Sátira social e ironia", type: "A" },
      { text: "Situações do dia a dia", type: "B" },
      { text: "Palhaçada e personagens malucos", type: "C" },
      { text: "Piadas pesadas e provocativas", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você gosta de stand-up comedy?",
    options: [
      { text: "Sim, especialmente os mais inteligentes", type: "A" },
      { text: "Gosto, especialmente sobre o cotidiano", type: "B" },
      { text: "Prefiro programas de humor", type: "C" },
      { text: "Sim, quanto mais pesado melhor", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você faz piadas em grupo?",
    options: [
      { text: "Sim, piadas com duplo sentido e inteligentes", type: "A" },
      { text: "Sim, sobre coisas que todo mundo vive", type: "B" },
      { text: "Sim, gosto de fazer palhaçada", type: "C" },
      { text: "Sim, piadas pesadas que chocam", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual programa de humor você mais gostava?",
    options: [
      { text: "Programas de crítica como CQC", type: "A" },
      { text: "Casseta e Planeta, Zorra", type: "B" },
      { text: "Os Trapalhões, A Praça é Nossa", type: "C" },
      { text: "Pânico, programas provocativos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você acha que humor tem limites?",
    options: [
      { text: "Sim, mas pode cutucar feridas", type: "A" },
      { text: "Sim, precisa ter bom senso", type: "B" },
      { text: "Sim, humor deve ser leve", type: "C" },
      { text: "Não! Humor é livre", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você reage a piadas sobre você?",
    options: [
      { text: "Rio e devolvo com inteligência", type: "A" },
      { text: "Rio de boa, faz parte", type: "B" },
      { text: "Rio se for de brincadeira", type: "C" },
      { text: "Rio e faço piada pior de volta", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você prefere comédia de...",
    options: [
      { text: "Crítica social e sátira", type: "A" },
      { text: "Personagens e imitações", type: "B" },
      { text: "Pastelão e física", type: "C" },
      { text: "Choque e provocação", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você acha de comédia romântica?",
    options: [
      { text: "Muito superficial", type: "A" },
      { text: "Gosto, é divertida", type: "B" },
      { text: "Adoro, é leve e engraçada", type: "C" },
      { text: "Acho sem graça", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você segue comediantes nas redes?",
    options: [
      { text: "Os mais inteligentes e críticos", type: "A" },
      { text: "Vários, os que me fazem rir", type: "B" },
      { text: "Os mais populares e família", type: "C" },
      { text: "Os mais polêmicos", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase define seu humor?",
    options: [
      { text: "'Rir para não chorar'", type: "A" },
      { text: "'A vida já é engraçada sozinha'", type: "B" },
      { text: "'Rir é o melhor remédio'", type: "C" },
      { text: "'Se ofendeu? Problema seu'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Gregório Duvivier",
    emoji: "🎭",
    description: "Você é o Gregório Duvivier! Humor inteligente, crítico, político. Você faz rir e pensar ao mesmo tempo. Sátira social é sua especialidade!",
    traits: ["Inteligente", "Crítico(a)", "Político(a)", "Irônico(a)"],
    strengths: ["Humor refinado", "Faz pensar", "Crítica social"],
    weaknesses: ["Pode parecer pedante", "Nem todos entendem", "Politizado demais"],
    tips: ["Seu humor é necessário", "Continue provocando", "Nem todos vão gostar"],
  },
  B: {
    type: "B",
    title: "Paulo Gustavo",
    emoji: "👩",
    description: "Você é o Paulo Gustavo! Humor observacional, personagens icônicos, situações do cotidiano brasileiro. Você faz todo mundo se identificar e rir!",
    traits: ["Carismático(a)", "Observador(a)", "Popular", "Versátil"],
    strengths: ["Conexão com público", "Personagens marcantes", "Humor universal"],
    weaknesses: ["Pode repetir fórmulas", "Muito mainstream"],
    tips: ["Seu talento é raro", "Continue fazendo rir", "Você é amado"],
  },
  C: {
    type: "C",
    title: "Renato Aragão",
    emoji: "🤡",
    description: "Você é o Renato Aragão! Humor físico, pastelão, leve e familiar. Você alegra gerações inteiras com palhaçadas e expressividade. Eterno!",
    traits: ["Expressivo(a)", "Familiar", "Leve", "Clássico(a)"],
    strengths: ["Agrada todas as idades", "Humor universal", "Legado eterno"],
    weaknesses: ["Pode parecer datado", "Menos provocativo"],
    tips: ["Seu humor é atemporal", "Alegria é seu dom", "Continue sorrindo"],
  },
  D: {
    type: "D",
    title: "Danilo Gentili",
    emoji: "🔥",
    description: "Você é o Danilo Gentili! Humor ácido, provocativo, sem limites. Você não tem medo de chocar e dividir opiniões. Polêmica é seu combustível!",
    traits: ["Polêmico(a)", "Ácido(a)", "Provocador(a)", "Intenso(a)"],
    strengths: ["Autêntico", "Sem filtro", "Corajoso(a)"],
    weaknesses: ["Muito polêmico", "Divide opiniões", "Pode ofender"],
    tips: ["Sua coragem é rara", "Mas pense nas consequências", "Nem toda piada vale"],
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
