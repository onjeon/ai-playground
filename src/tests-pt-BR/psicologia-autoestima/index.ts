// Teste de Autoestima
// Descubra como está sua autoestima e amor próprio!

export const questions = [
  {
    id: 1,
    question: "Como você se sente quando recebe um elogio?",
    options: [
      { text: "Aceito com gratidão e me sinto bem", type: "A" },
      { text: "Fico um pouco desconfortável, mas agradeço", type: "B" },
      { text: "Tendo a minimizar ou desacreditar", type: "C" },
      { text: "Não acredito e acho que estão sendo falsos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando você comete um erro, qual é sua reação típica?",
    options: [
      { text: "Aprendo com o erro e sigo em frente", type: "A" },
      { text: "Fico chateado mas tento superar", type: "B" },
      { text: "Me culpo bastante por um bom tempo", type: "C" },
      { text: "Penso que sou incapaz e não sirvo para nada", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você se compara com outras pessoas?",
    options: [
      { text: "Reconheço minhas qualidades únicas", type: "A" },
      { text: "Às vezes me comparo, mas tento evitar", type: "B" },
      { text: "Frequentemente me sinto inferior aos outros", type: "C" },
      { text: "Sempre acho que os outros são melhores", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quando você olha no espelho, o que pensa?",
    options: [
      { text: "Gosto do que vejo e me aceito", type: "A" },
      { text: "Tenho dias bons e ruins", type: "B" },
      { text: "Foco mais nos defeitos do que nas qualidades", type: "C" },
      { text: "Evito me olhar porque não gosto", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você lida com críticas?",
    options: [
      { text: "Avalio se são construtivas e aprendo", type: "A" },
      { text: "Fico um pouco abalado mas processo", type: "B" },
      { text: "Me sinto muito mal e levo para o pessoal", type: "C" },
      { text: "Confirma o que já penso de mim mesmo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você consegue dizer 'não' quando necessário?",
    options: [
      { text: "Sim, respeito meus limites", type: "A" },
      { text: "Na maioria das vezes consigo", type: "B" },
      { text: "Tenho dificuldade, acabo cedendo", type: "C" },
      { text: "Nunca consigo, tenho medo de desagradar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você se sente sobre suas conquistas?",
    options: [
      { text: "Tenho orgulho e reconheço meu mérito", type: "A" },
      { text: "Fico feliz mas acho que poderia ser melhor", type: "B" },
      { text: "Minimizo, acho que foi sorte ou fácil", type: "C" },
      { text: "Não me sinto merecedor das minhas conquistas", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando enfrenta um novo desafio, você pensa:",
    options: [
      { text: "Sou capaz de aprender e conseguir", type: "A" },
      { text: "Vou tentar, mesmo com algumas dúvidas", type: "B" },
      { text: "Provavelmente não vou conseguir", type: "C" },
      { text: "Nem vale a pena tentar, vou falhar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você cuida de si mesmo?",
    options: [
      { text: "Priorizo meu bem-estar e autocuidado", type: "A" },
      { text: "Tento cuidar de mim quando dá", type: "B" },
      { text: "Coloco os outros sempre em primeiro lugar", type: "C" },
      { text: "Não mereço dedicar tempo para mim", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Em uma discussão, como você defende suas opiniões?",
    options: [
      { text: "Expresso minha opinião com confiança", type: "A" },
      { text: "Falo, mas às vezes duvido de mim", type: "B" },
      { text: "Geralmente cedo para evitar conflito", type: "C" },
      { text: "Minhas opiniões não são importantes", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você se sente em grupos sociais?",
    options: [
      { text: "Confortável e participo naturalmente", type: "A" },
      { text: "Um pouco nervoso mas me adapto", type: "B" },
      { text: "Inseguro, acho que não pertenço", type: "C" },
      { text: "Evito grupos, sinto que não sou aceito", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase mais representa você?",
    options: [
      { text: "Eu sou suficiente exatamente como sou", type: "A" },
      { text: "Estou trabalhando para me aceitar melhor", type: "B" },
      { text: "Preciso mudar muita coisa em mim", type: "C" },
      { text: "Nunca vou ser bom o suficiente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Autoestima Elevada",
    emoji: "⭐",
    description: "Você possui uma autoestima saudável e equilibrada! Reconhece seu valor, aceita suas imperfeições e se trata com respeito. Você sabe que merece coisas boas e não tem medo de buscar o que deseja.",
    traits: ["Autoconfiante", "Autoaceitação", "Resiliente", "Assertivo"],
    strengths: ["Sabe reconhecer seu valor", "Lida bem com críticas", "Estabelece limites saudáveis", "Não depende da aprovação dos outros"],
    weaknesses: ["Pode parecer arrogante para alguns", "Às vezes subestima dificuldades"],
    tips: ["Continue cultivando o amor próprio", "Ajude outros a desenvolverem autoestima", "Mantenha a humildade junto com a confiança"],
  },
  B: {
    type: "B",
    title: "Autoestima em Desenvolvimento",
    emoji: "🌱",
    description: "Sua autoestima está em construção! Você tem momentos de confiança mas também de dúvida. Está no caminho certo, reconhecendo suas qualidades enquanto trabalha nos pontos de melhoria.",
    traits: ["Em evolução", "Consciente", "Esforçado", "Realista"],
    strengths: ["Autoconsciência desenvolvida", "Abertura para crescimento", "Equilíbrio entre confiança e humildade"],
    weaknesses: ["Oscilação de autoconfiança", "Comparação ocasional com outros", "Dúvidas em momentos de pressão"],
    tips: ["Pratique afirmações positivas diárias", "Celebre pequenas vitórias", "Cerque-se de pessoas que te apoiam"],
  },
  C: {
    type: "C",
    title: "Autoestima Fragilizada",
    emoji: "💔",
    description: "Sua autoestima precisa de atenção e cuidado. Você tende a ser muito crítico consigo mesmo e tem dificuldade em reconhecer suas qualidades. É hora de começar a se tratar com mais gentileza.",
    traits: ["Autocrítico", "Perfeccionista", "Sensível", "Inseguro"],
    strengths: ["Empatia com os outros", "Desejo de melhorar", "Sensibilidade emocional"],
    weaknesses: ["Autocrítica excessiva", "Dificuldade em aceitar elogios", "Tendência a se comparar negativamente"],
    tips: ["Busque ajuda profissional se necessário", "Faça uma lista de suas qualidades", "Pratique a autocompaixão diariamente"],
  },
  D: {
    type: "D",
    title: "Autoestima Muito Baixa",
    emoji: "🆘",
    description: "Você está enfrentando sérias dificuldades com sua autoestima. Seus pensamentos negativos sobre si mesmo estão afetando sua qualidade de vida. É muito importante buscar apoio e cuidado especializado.",
    traits: ["Autodepreciativo", "Vulnerável", "Pessimista", "Autocrítico severo"],
    strengths: ["Reconhecimento da necessidade de ajuda", "Potencial para grande transformação"],
    weaknesses: ["Pensamentos negativos constantes", "Isolamento social", "Dificuldade em ver qualidades próprias"],
    tips: ["Procure um psicólogo ou terapeuta", "Não se isole, converse com pessoas de confiança", "Lembre-se: você merece amor e respeito, inclusive de si mesmo"],
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
