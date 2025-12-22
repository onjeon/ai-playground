// Seu Estilo com Feedback
// Descubra como você dá e recebe feedback no trabalho!

export const questions = [
  {
    id: 1,
    question: "Quando recebe feedback negativo, sua primeira reação é:",
    options: [
      { text: "Agradeço e busco entender mais detalhes", type: "A" },
      { text: "Escuto com atenção e reflito depois", type: "B" },
      { text: "Fico na defensiva inicialmente", type: "C" },
      { text: "Me sinto muito mal e levo para o pessoal", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Com que frequência você pede feedback?",
    options: [
      { text: "Regularmente, busco ativamente", type: "A" },
      { text: "Ocasionalmente, quando sinto necessidade", type: "B" },
      { text: "Raramente, espero que venha", type: "C" },
      { text: "Nunca, prefiro não saber", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você dá feedback a colegas?",
    options: [
      { text: "De forma direta, clara e construtiva", type: "A" },
      { text: "Com cuidado, equilibrando positivo e negativo", type: "B" },
      { text: "Evito dar feedback negativo", type: "C" },
      { text: "Quase nunca dou feedback", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual tipo de feedback você prefere receber?",
    options: [
      { text: "Direto e sem rodeios, mesmo se doer", type: "A" },
      { text: "Construtivo, com contexto e sugestões", type: "B" },
      { text: "Suavizado, focando no positivo", type: "C" },
      { text: "Prefiro só elogios, críticas me abalam", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que você faz com feedback que discorda?",
    options: [
      { text: "Considero mesmo assim, pode ter algo válido", type: "A" },
      { text: "Avalio com calma se faz sentido", type: "B" },
      { text: "Geralmente descarto se não concordo", type: "C" },
      { text: "Fico ruminando se estou errado ou a pessoa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você reage a elogios no trabalho?",
    options: [
      { text: "Agradeço e pergunto o que especificamente gostaram", type: "A" },
      { text: "Fico feliz e agradeço", type: "B" },
      { text: "Minimizo, acho que não fiz nada demais", type: "C" },
      { text: "Desconfio da sinceridade", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quando precisa dar feedback difícil, você:",
    options: [
      { text: "Dou de forma clara e respeitosa", type: "A" },
      { text: "Preparo bem e escolho o momento", type: "B" },
      { text: "Adio o máximo possível", type: "C" },
      { text: "Evito ou peço para outro dar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você se sente em avaliações de desempenho?",
    options: [
      { text: "Ansioso para ouvir e aprender", type: "A" },
      { text: "Um pouco nervoso mas aberto", type: "B" },
      { text: "Muito ansioso, espero só críticas", type: "C" },
      { text: "Evito se possível, é muito desconfortável", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que você faz após receber feedback?",
    options: [
      { text: "Crio plano de ação imediatamente", type: "A" },
      { text: "Reflito e implemento o que faz sentido", type: "B" },
      { text: "Penso a respeito mas raramente mudo algo", type: "C" },
      { text: "Ignoro, feedback é só opinião", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você lida com feedback público?",
    options: [
      { text: "Sem problema, elogio ou crítica", type: "A" },
      { text: "Prefiro em privado mas lido bem", type: "B" },
      { text: "Fico desconfortável, especialmente críticas", type: "C" },
      { text: "Odeio, me sinto exposto e julgado", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você consegue separar feedback do trabalho da sua pessoa?",
    options: [
      { text: "Sim, feedback é sobre comportamento, não sobre mim", type: "A" },
      { text: "Na maioria das vezes sim", type: "B" },
      { text: "Tenho dificuldade, levo para o pessoal", type: "C" },
      { text: "Não, qualquer crítica me atinge pessoalmente", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual sua relação com feedback 360?",
    options: [
      { text: "Adoro! Quanto mais feedback, melhor", type: "A" },
      { text: "Acho útil e participo bem", type: "B" },
      { text: "Acho desconfortável mas faço", type: "C" },
      { text: "Evito ou dou/recebo o mínimo possível", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Campeão de Feedback",
    emoji: "🏆",
    description: "Você tem relação exemplar com feedback! Busca ativamente, recebe com maturidade e dá de forma construtiva. Isso acelera muito seu desenvolvimento.",
    traits: ["Aberto", "Maduro", "Construtivo", "Desenvolvimentista"],
    strengths: ["Crescimento contínuo", "Dá feedback útil", "Não leva para o pessoal", "Busca melhoria"],
    weaknesses: ["Pode parecer intenso para quem não está no mesmo nível", "Às vezes feedback demais cansa"],
    tips: ["Continue assim!", "Ajude outros a desenvolver essa habilidade", "Equilibre busca por feedback com autoconfiança"],
  },
  B: {
    type: "B",
    title: "Receptivo ao Feedback",
    emoji: "👂",
    description: "Você lida bem com feedback! Recebe com maturidade e dá quando necessário. Há espaço para buscar ainda mais ativamente.",
    traits: ["Receptivo", "Equilibrado", "Reflexivo", "Respeitoso"],
    strengths: ["Boa receptividade", "Feedback construtivo", "Maturidade emocional"],
    weaknesses: ["Poderia buscar mais ativamente", "Às vezes evita dar feedback difícil"],
    tips: ["Busque feedback mais frequentemente", "Pratique dar feedback direto", "Use feedback para acelerar desenvolvimento"],
  },
  C: {
    type: "C",
    title: "Desconfortável com Feedback",
    emoji: "😬",
    description: "Feedback te deixa desconfortável. Você evita dar e receber, e quando recebe tende a se defender ou levar para o pessoal. Isso limita seu crescimento.",
    traits: ["Defensivo", "Evitativo", "Sensível", "Resistente"],
    strengths: ["Consciência do desconforto", "Potencial de desenvolvimento"],
    weaknesses: ["Perde oportunidades de crescimento", "Dificulta relacionamentos", "Evita conversas importantes"],
    tips: ["Trabalhe sua mentalidade sobre feedback", "Comece pedindo feedback específico", "Lembre: feedback é presente, não ataque"],
  },
  D: {
    type: "D",
    title: "Avesso ao Feedback",
    emoji: "🙈",
    description: "Você tem grande dificuldade com feedback. Evita ao máximo e quando recebe, impacta muito. Isso é uma barreira séria para seu desenvolvimento profissional.",
    traits: ["Avesso", "Vulnerável", "Defensivo", "Fechado"],
    strengths: ["Proteção emocional (a curto prazo)"],
    weaknesses: ["Crescimento estagnado", "Pontos cegos", "Relacionamentos prejudicados", "Parece não aceitar críticas"],
    tips: ["IMPORTANTE: Isso limita muito sua carreira", "Busque ajuda para desenvolver essa habilidade", "Feedback é essencial para crescer"],
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
