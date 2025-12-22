// Teste de Senso de Humor
// Descubra seu estilo de humor!

export const questions = [
  {
    id: 1,
    question: "Em situações difíceis, você consegue rir?",
    options: [
      { text: "Sim, o humor me ajuda a lidar", type: "A" },
      { text: "Às vezes, quando apropriado", type: "B" },
      { text: "Raramente, levo as coisas a sério", type: "C" },
      { text: "Nunca, não vejo graça em momentos difíceis", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você ri de si mesmo quando faz algo bobo?",
    options: [
      { text: "Sempre, é o melhor tipo de humor", type: "A" },
      { text: "Frequentemente, sem problemas", type: "B" },
      { text: "Às vezes, depende da situação", type: "C" },
      { text: "Não, fico constrangido", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como as pessoas descrevem seu humor?",
    options: [
      { text: "Muito engraçado, sempre fazendo piadas", type: "A" },
      { text: "Tem um bom senso de humor", type: "B" },
      { text: "Mais sério, ri ocasionalmente", type: "C" },
      { text: "Muito sério, raramente ri", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você usa humor para aliviar tensões?",
    options: [
      { text: "Sempre, é minha estratégia principal", type: "A" },
      { text: "Frequentemente, quando vejo oportunidade", type: "B" },
      { text: "Às vezes, mas prefiro abordagem séria", type: "C" },
      { text: "Raramente, acho inapropriado", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Que tipo de humor você mais aprecia?",
    options: [
      { text: "De todos os tipos, adoro rir", type: "A" },
      { text: "Humor inteligente e situacional", type: "B" },
      { text: "Humor mais leve e inofensivo", type: "C" },
      { text: "Não tenho preferência, não ligo muito", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você faz piadas no trabalho?",
    options: [
      { text: "Sempre, deixo o ambiente mais leve", type: "A" },
      { text: "Frequentemente, mas profissionalmente", type: "B" },
      { text: "Raramente, prefiro ser sério", type: "C" },
      { text: "Nunca, trabalho é coisa séria", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você assiste comédias e conteúdo humorístico?",
    options: [
      { text: "Adoro! É meu gênero favorito", type: "A" },
      { text: "Frequentemente, gosto de rir", type: "B" },
      { text: "Às vezes, prefiro outros gêneros", type: "C" },
      { text: "Raramente, não me atraem", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você conta histórias engraçadas?",
    options: [
      { text: "Sempre, tenho várias!", type: "A" },
      { text: "De vez em quando, quando são boas", type: "B" },
      { text: "Raramente, não sou bom nisso", type: "C" },
      { text: "Nunca, não é meu estilo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você reage a piadas às suas custas?",
    options: [
      { text: "Rio junto, não me ofendo", type: "A" },
      { text: "Depende, se for de bom grado, tudo bem", type: "B" },
      { text: "Fico um pouco incomodado", type: "C" },
      { text: "Não gosto nada, me ofendo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você consegue manter a seriedade quando necessário?",
    options: [
      { text: "Às vezes tenho dificuldade, rio fácil", type: "A" },
      { text: "Sim, mas gosto de adicionar leveza", type: "B" },
      { text: "Sim, geralmente sou sério", type: "C" },
      { text: "Sempre, não tenho problema com isso", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você acredita que rir é importante para a saúde?",
    options: [
      { text: "Absolutamente! Rir é fundamental", type: "A" },
      { text: "Sim, ajuda bastante", type: "B" },
      { text: "Talvez, mas há coisas mais importantes", type: "C" },
      { text: "Não acho tão relevante", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Com que frequência você dá risadas genuínas?",
    options: [
      { text: "Várias vezes ao dia", type: "A" },
      { text: "Diariamente", type: "B" },
      { text: "Algumas vezes por semana", type: "C" },
      { text: "Raramente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bem-Humorado Nato",
    emoji: "😂",
    description: "Você tem excelente senso de humor! O riso é central na sua vida e você sabe usar humor para lidar com situações, conectar com pessoas e trazer alegria.",
    traits: ["Engraçado", "Leve", "Conectivo", "Resiliente"],
    strengths: ["Ambiente mais leve ao redor", "Facilidade em conexões", "Resiliência através do humor", "Saúde mental beneficiada"],
    weaknesses: ["Pode parecer não levar as coisas a sério", "Às vezes humor em hora errada"],
    tips: ["Continue trazendo alegria aos outros", "Saiba quando ser sério", "Use seu dom para ajudar pessoas"],
  },
  B: {
    type: "B",
    title: "Humor Equilibrado",
    emoji: "😊",
    description: "Você tem bom senso de humor equilibrado. Sabe apreciar e usar humor apropriadamente, mantendo equilíbrio entre leveza e seriedade.",
    traits: ["Equilibrado", "Apreciativo", "Apropriado", "Flexível"],
    strengths: ["Humor no momento certo", "Boa leitura social", "Equilíbrio saudável"],
    weaknesses: ["Poderia se permitir mais leveza às vezes"],
    tips: ["Continue mantendo o equilíbrio", "Não tenha medo de ser mais leve", "Aprecie mais momentos de riso"],
  },
  C: {
    type: "C",
    title: "Mais Sério",
    emoji: "🤔",
    description: "Você tende a ser mais sério, com humor em segundo plano. Isso pode ser sua personalidade, mas incorporar mais leveza pode beneficiar seu bem-estar.",
    traits: ["Sério", "Focado", "Prático", "Reservado"],
    strengths: ["Confiabilidade", "Foco em resultados", "Seriedade quando necessário"],
    weaknesses: ["Pode perder conexões através do humor", "Estresse pode se acumular", "Ambiente pode ficar pesado"],
    tips: ["Experimente assistir mais comédias", "Permita-se rir de si mesmo", "Humor é bom para a saúde"],
  },
  D: {
    type: "D",
    title: "Humor Limitado",
    emoji: "😐",
    description: "Você tem pouco espaço para humor na vida. Isso pode ser personalidade ou sinal de estresse/tristeza. Incorporar mais riso pode melhorar sua qualidade de vida.",
    traits: ["Muito sério", "Contido", "Reservado", "Pesado"],
    strengths: ["Levado a sério pelos outros", "Foco intenso"],
    weaknesses: ["Perde benefícios do riso", "Conexões podem ser mais difíceis", "Pode indicar questões emocionais"],
    tips: ["Considere se há razões emocionais para isso", "Tente incorporar momentos de leveza", "Rir é bom para saúde física e mental"],
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
