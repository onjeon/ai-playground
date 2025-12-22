// Teste de Mindfulness
// Descubra seu nível de atenção plena no dia a dia!

export const questions = [
  {
    id: 1,
    question: "Você costuma estar presente no momento ou pensando no passado/futuro?",
    options: [
      { text: "Geralmente presente, consciente do agora", type: "A" },
      { text: "Frequentemente presente, às vezes divago", type: "B" },
      { text: "Frequentemente pensando em outras coisas", type: "C" },
      { text: "Quase sempre perdido em pensamentos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você pratica meditação ou exercícios de atenção plena?",
    options: [
      { text: "Sim, regularmente", type: "A" },
      { text: "Às vezes, quando lembro", type: "B" },
      { text: "Já tentei mas não mantive", type: "C" },
      { text: "Nunca, não vejo necessidade", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando come, você presta atenção na comida?",
    options: [
      { text: "Sim, saboreio cada mordida", type: "A" },
      { text: "Frequentemente, mas às vezes distraído", type: "B" },
      { text: "Geralmente comendo enquanto faz outras coisas", type: "C" },
      { text: "Quase sempre distraído, mal percebo que comi", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você percebe sensações no seu corpo durante o dia?",
    options: [
      { text: "Sim, tenho boa consciência corporal", type: "A" },
      { text: "Às vezes percebo, principalmente desconfortos", type: "B" },
      { text: "Raramente, só quando é muito intenso", type: "C" },
      { text: "Quase nunca presto atenção no corpo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você faz atividades no piloto automático?",
    options: [
      { text: "Raramente, estou consciente do que faço", type: "A" },
      { text: "Às vezes, em tarefas muito rotineiras", type: "B" },
      { text: "Frequentemente, muitas coisas são automáticas", type: "C" },
      { text: "Quase sempre, mal lembro do que fiz", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você observa seus pensamentos sem se identificar com eles?",
    options: [
      { text: "Sim, consigo observá-los com distância", type: "A" },
      { text: "Às vezes consigo me distanciar", type: "B" },
      { text: "Tenho dificuldade, me perco nos pensamentos", type: "C" },
      { text: "Não entendo o que isso significa", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você aprecia momentos simples como um pôr do sol?",
    options: [
      { text: "Muito, paro para apreciar regularmente", type: "A" },
      { text: "Às vezes, quando noto", type: "B" },
      { text: "Raramente, estou sempre ocupado", type: "C" },
      { text: "Não presto atenção nessas coisas", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você escuta atentamente quando alguém fala?",
    options: [
      { text: "Sim, dou atenção plena à pessoa", type: "A" },
      { text: "Geralmente, embora às vezes divague", type: "B" },
      { text: "Frequentemente pensando na resposta ou em outras coisas", type: "C" },
      { text: "Admito que geralmente não escuto bem", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você percebe sua respiração durante o dia?",
    options: [
      { text: "Sim, uso como âncora para o presente", type: "A" },
      { text: "Às vezes, especialmente quando estressado", type: "B" },
      { text: "Raramente penso na minha respiração", type: "C" },
      { text: "Nunca, respiro automaticamente", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você reage impulsivamente ou responde conscientemente?",
    options: [
      { text: "Geralmente faço uma pausa antes de responder", type: "A" },
      { text: "Tento, mas às vezes reajo no impulso", type: "B" },
      { text: "Frequentemente reajo sem pensar", type: "C" },
      { text: "Quase sempre reajo impulsivamente", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você aceita o momento presente como ele é?",
    options: [
      { text: "Sim, pratico aceitação do que não posso mudar", type: "A" },
      { text: "Geralmente, embora às vezes resista", type: "B" },
      { text: "Tenho dificuldade em aceitar situações", type: "C" },
      { text: "Não, sempre quero que seja diferente", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua atenção no dia a dia?",
    options: [
      { text: "Presente e consciente na maior parte do tempo", type: "A" },
      { text: "Razoavelmente atento, com distrações", type: "B" },
      { text: "Frequentemente distraído e no automático", type: "C" },
      { text: "Quase sempre perdido em pensamentos", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Alto Mindfulness",
    emoji: "🧘",
    description: "Você pratica atenção plena de forma consistente! Está presente no momento, consciente de si mesmo e do ambiente. Isso traz grandes benefícios para sua saúde mental.",
    traits: ["Presente", "Consciente", "Calmo", "Atento"],
    strengths: ["Redução de estresse", "Melhor tomada de decisão", "Apreciação da vida", "Equilíbrio emocional"],
    weaknesses: ["Pode parecer lento para pessoas impacientes", "Às vezes difícil em ambientes muito agitados"],
    tips: ["Continue sua prática de mindfulness", "Compartilhe essa habilidade com outros", "Adapte às diferentes situações"],
  },
  B: {
    type: "B",
    title: "Mindfulness Moderado",
    emoji: "🌸",
    description: "Você tem boa capacidade de atenção plena, com espaço para desenvolvimento. Consegue estar presente, mas se distrai com frequência. Mais prática pode ajudar.",
    traits: ["Parcialmente presente", "Consciente", "Em desenvolvimento", "Interessado"],
    strengths: ["Boa base de atenção", "Capacidade de melhorar", "Momentos de presença"],
    weaknesses: ["Distrações frequentes", "Inconsistência na prática"],
    tips: ["Estabeleça uma prática diária, mesmo que breve", "Use lembretes para voltar ao presente", "Pratique durante atividades rotineiras"],
  },
  C: {
    type: "C",
    title: "Mindfulness Baixo",
    emoji: "💭",
    description: "Você passa muito tempo no piloto automático ou perdido em pensamentos. Isso pode causar estresse e perda de momentos preciosos. Desenvolver mindfulness pode transformar sua vida.",
    traits: ["Distraído", "Automático", "Reativo", "Desatento"],
    strengths: ["Pode funcionar bem em tarefas habituais"],
    weaknesses: ["Perda de momentos da vida", "Estresse aumentado", "Reações impulsivas", "Menos apreciação do presente"],
    tips: ["Comece com práticas muito simples", "Experimente apps de meditação guiada", "Pequenas pausas durante o dia ajudam"],
  },
  D: {
    type: "D",
    title: "Desconectado do Presente",
    emoji: "🌫️",
    description: "Você está muito desconectado do momento presente, vivendo no piloto automático. Isso pode estar afetando sua qualidade de vida significativamente.",
    traits: ["Desconectado", "No automático", "Perdido em pensamentos", "Reativo"],
    strengths: ["Grande potencial de melhoria com prática"],
    weaknesses: ["Vida passando despercebida", "Estresse crônico possível", "Relacionamentos superficiais", "Falta de presença"],
    tips: ["Mindfulness é uma habilidade que se desenvolve", "Comece com 5 minutos por dia", "Considere um curso ou terapia com foco em presença"],
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
