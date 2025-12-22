// Qual Seu Nível de Saudade?
// Descubra como você lida com a saudade brasileira!

export const questions = [
  {
    id: 1,
    question: "Você sente saudade com frequência?",
    options: [
      { text: "Sempre! Sou muito saudosista", type: "A" },
      { text: "Às vezes, de coisas importantes", type: "B" },
      { text: "Raramente, vivo o presente", type: "C" },
      { text: "Depende da fase da vida", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que te dá mais saudade?",
    options: [
      { text: "Pessoas que não vejo mais", type: "A" },
      { text: "Momentos e fases da vida", type: "B" },
      { text: "Lugares que visitei", type: "C" },
      { text: "Comidas e sensações", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com a saudade?",
    options: [
      { text: "Choro, fico triste, sinto profundamente", type: "A" },
      { text: "Revivo memórias e agradeço", type: "B" },
      { text: "Ocupo a mente com outras coisas", type: "C" },
      { text: "Entro em contato com quem sinto falta", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você guarda coisas que dão saudade?",
    options: [
      { text: "Tenho uma caixa de memórias", type: "A" },
      { text: "Algumas coisas especiais", type: "B" },
      { text: "Não, o passado passou", type: "C" },
      { text: "Fotos e mensagens no celular", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Músicas antigas te emocionam?",
    options: [
      { text: "Muito! Choro com facilidade", type: "A" },
      { text: "Às vezes, depende da música", type: "B" },
      { text: "Não, música é música", type: "C" },
      { text: "Se estiver ligada a alguém especial", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você sente saudade de quem está vivo e perto?",
    options: [
      { text: "Sim, sinto falta mesmo vendo sempre", type: "A" },
      { text: "Às vezes, de momentos específicos", type: "B" },
      { text: "Não faz sentido, a pessoa está ali", type: "C" },
      { text: "Da versão antiga da pessoa, sim", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Fotos antigas te afetam como?",
    options: [
      { text: "Me emocionam muito, revivo tudo", type: "A" },
      { text: "Gosto de ver, traz boas memórias", type: "B" },
      { text: "Olho rapidamente e sigo", type: "C" },
      { text: "Depende do que está na foto", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você fala 'saudade' com frequência?",
    options: [
      { text: "O tempo todo! Minha palavra favorita", type: "A" },
      { text: "Quando sinto de verdade", type: "B" },
      { text: "Raramente uso essa palavra", type: "C" },
      { text: "Quando faz sentido no contexto", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você tem saudade de épocas que não viveu?",
    options: [
      { text: "Sim! Gostaria de ter vivido outras épocas", type: "A" },
      { text: "Um pouco, idealizo o passado", type: "B" },
      { text: "Não, cada época tem seus problemas", type: "C" },
      { text: "Das histórias que ouvi, sim", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você reage a despedidas?",
    options: [
      { text: "Choro, abraço forte, é muito difícil", type: "A" },
      { text: "Fico emocionado mas controlo", type: "B" },
      { text: "Normal, vamos nos ver de novo", type: "C" },
      { text: "Depende de quem está partindo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você acha saudade algo bom ou ruim?",
    options: [
      { text: "Doce e amargo ao mesmo tempo", type: "A" },
      { text: "Bom, mostra que amamos", type: "B" },
      { text: "Ruim, prefiro não sentir", type: "C" },
      { text: "Neutro, faz parte da vida", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define?",
    options: [
      { text: "'A saudade é a presença da ausência'", type: "A" },
      { text: "'Saudade é amor que fica'", type: "B" },
      { text: "'Viver o presente é melhor'", type: "C" },
      { text: "'Saudade faz parte'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Saudosista Nato",
    emoji: "💔",
    description: "Você é o Saudosista Nato! Sente saudade de tudo e de todos, o passado te emociona profundamente. A saudade brasileira mora em você!",
    traits: ["Saudosista", "Emotivo(a)", "Nostálgico(a)", "Sensível"],
    strengths: ["Valoriza memórias", "Conexões profundas", "Sensibilidade", "Amor pelo vivido"],
    weaknesses: ["Pode viver no passado", "Tristeza frequente", "Dificuldade em seguir"],
    tips: ["O presente também é lindo", "Crie novas memórias", "Saudade não pode paralisar"],
  },
  B: {
    type: "B",
    title: "Saudade Equilibrada",
    emoji: "💭",
    description: "Você é a Saudade Equilibrada! Sente quando faz sentido, mas não deixa dominar. Você sabe que saudade é parte da vida sem deixar ela te definir!",
    traits: ["Equilibrado(a)", "Emocional saudável", "Presente", "Grato(a)"],
    strengths: ["Equilíbrio emocional", "Gratidão", "Viver o presente", "Valorizar o passado"],
    weaknesses: ["Às vezes suprime emoções", "Pode parecer frio(a)", "Controlado demais"],
    tips: ["Seu equilíbrio é bom", "Permita-se sentir mais", "Continue agradecendo"],
  },
  C: {
    type: "C",
    title: "Presente Total",
    emoji: "🌟",
    description: "Você é o Presente Total! Saudade não te domina, você vive o agora. O passado foi bom mas o presente e futuro te interessam mais!",
    traits: ["Presente", "Prático(a)", "Focado(a)", "Desapegado(a)"],
    strengths: ["Viver o agora", "Não se prender", "Foco no futuro", "Liberdade emocional"],
    weaknesses: ["Pode parecer frio(a)", "Perde conexão com raízes", "Falta de sensibilidade"],
    tips: ["Memórias também são importantes", "Saudade é humano", "Valorize quem passou por você"],
  },
  D: {
    type: "D",
    title: "Saudade Prática",
    emoji: "📞",
    description: "Você é a Saudade Prática! Quando sente falta, age: liga, visita, faz acontecer. Você transforma saudade em ação!",
    traits: ["Prático(a)", "Ativo(a)", "Conectado(a)", "Resolutivo(a)"],
    strengths: ["Transforma em ação", "Mantém conexões", "Praticidade", "Presença ativa"],
    weaknesses: ["Pode parecer insistente", "Nem sempre dá pra resolver", "Dificuldade com perdas"],
    tips: ["Às vezes só sentir é válido", "Nem toda saudade se resolve", "Aceite o que não pode mudar"],
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
