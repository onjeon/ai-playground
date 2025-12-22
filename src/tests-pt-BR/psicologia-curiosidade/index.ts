// Teste de Curiosidade
// Descubra seu nível de curiosidade intelectual!

export const questions = [
  {
    id: 1,
    question: "Você gosta de aprender coisas novas?",
    options: [
      { text: "Adoro! Aprender me energiza", type: "A" },
      { text: "Sim, especialmente sobre meus interesses", type: "B" },
      { text: "Às vezes, quando necessário", type: "C" },
      { text: "Não muito, prefiro o que já sei", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você faz muitas perguntas quando conhece algo novo?",
    options: [
      { text: "Sim, quero entender profundamente", type: "A" },
      { text: "Frequentemente pergunto", type: "B" },
      { text: "Às vezes, se for relevante", type: "C" },
      { text: "Raramente, aceito como é", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você se interessa por assuntos fora da sua área?",
    options: [
      { text: "Muito, sou curioso sobre tudo", type: "A" },
      { text: "Sim, vários assuntos me interessam", type: "B" },
      { text: "Alguns, mas foco no meu campo", type: "C" },
      { text: "Não, me interesso só pelo necessário", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você explora lugares novos quando viaja?",
    options: [
      { text: "Sempre, adoro descobrir", type: "A" },
      { text: "Frequentemente busco novidades", type: "B" },
      { text: "Às vezes, mas gosto do familiar", type: "C" },
      { text: "Prefiro lugares conhecidos e seguros", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você lê ou consome conteúdo variado?",
    options: [
      { text: "Sim, de muitos gêneros e tipos", type: "A" },
      { text: "Vario razoavelmente", type: "B" },
      { text: "Fico mais no mesmo tipo", type: "C" },
      { text: "Sempre as mesmas coisas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você gosta de conversas com pessoas muito diferentes de você?",
    options: [
      { text: "Adoro! Aprendo muito", type: "A" },
      { text: "Sim, é interessante", type: "B" },
      { text: "Às vezes é desconfortável", type: "C" },
      { text: "Prefiro pessoas parecidas comigo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você questiona crenças e ideias estabelecidas?",
    options: [
      { text: "Sempre, nada é inquestionável", type: "A" },
      { text: "Frequentemente questiono", type: "B" },
      { text: "Às vezes, mas respeito tradições", type: "C" },
      { text: "Não, aceito como as coisas são", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você experimenta comidas, músicas ou experiências novas?",
    options: [
      { text: "Sempre que tenho oportunidade", type: "A" },
      { text: "Frequentemente experimento", type: "B" },
      { text: "Às vezes, com resistência", type: "C" },
      { text: "Prefiro o que já conheço", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quando não entende algo, você busca descobrir?",
    options: [
      { text: "Sempre, não descanso até entender", type: "A" },
      { text: "Geralmente pesquiso", type: "B" },
      { text: "Às vezes, se for importante", type: "C" },
      { text: "Deixo para lá", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você se perde em assuntos de interesse por horas?",
    options: [
      { text: "Sim, frequentemente! É maravilhoso", type: "A" },
      { text: "Acontece com certa frequência", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Nunca, não me envolvo assim", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você fica animado com problemas complexos para resolver?",
    options: [
      { text: "Sim, é um desafio empolgante", type: "A" },
      { text: "Geralmente gosto do desafio", type: "B" },
      { text: "Prefiro problemas simples", type: "C" },
      { text: "Evito problemas quando posso", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua curiosidade?",
    options: [
      { text: "Insaciável, quero saber tudo", type: "A" },
      { text: "Alta, em minhas áreas de interesse", type: "B" },
      { text: "Moderada", type: "C" },
      { text: "Baixa, não sou muito curioso", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Curioso",
    emoji: "🔍",
    description: "Você é altamente curioso! Sua sede de conhecimento é insaciável e você está sempre aprendendo. Curiosidade é a base da inovação e do crescimento.",
    traits: ["Curioso", "Aprendiz", "Explorador", "Questionador"],
    strengths: ["Aprendizado constante", "Adaptabilidade", "Criatividade", "Conversas interessantes"],
    weaknesses: ["Pode se dispersar com muitos interesses", "Pode parecer inquieto"],
    tips: ["Continue alimentando sua curiosidade", "Equilibre exploração com profundidade", "Use curiosidade para conectar ideias"],
  },
  B: {
    type: "B",
    title: "Curioso",
    emoji: "💡",
    description: "Você tem boa curiosidade, especialmente em áreas que te interessam. Está aberto a aprender e explorar, que é uma qualidade valiosa.",
    traits: ["Interessado", "Aberto", "Aprendiz", "Engajado"],
    strengths: ["Conhecimento em áreas de interesse", "Abertura para novidades", "Boas conversas"],
    weaknesses: ["Pode limitar curiosidade a certas áreas"],
    tips: ["Expanda curiosidade para novas áreas", "Pergunte mais", "A curiosidade fortalece o cérebro"],
  },
  C: {
    type: "C",
    title: "Curiosidade Moderada",
    emoji: "🤔",
    description: "Você tem curiosidade moderada, preferindo o familiar ao novo. Há espaço para desenvolver mais essa qualidade que traz tantos benefícios.",
    traits: ["Moderado", "Confortável", "Estável", "Rotineiro"],
    strengths: ["Foco no que importa", "Estabilidade"],
    weaknesses: ["Pode perder oportunidades de aprendizado", "Vida pode ficar monótona"],
    tips: ["Experimente algo novo por semana", "Curiosidade pode ser desenvolvida", "Faça perguntas mais frequentemente"],
  },
  D: {
    type: "D",
    title: "Baixa Curiosidade",
    emoji: "😐",
    description: "Você tem baixa curiosidade, preferindo o conhecido ao novo. Isso pode estar limitando seu crescimento e experiências de vida.",
    traits: ["Não curioso", "Fechado", "Rotineiro", "Limitado"],
    strengths: ["Foco", "Estabilidade"],
    weaknesses: ["Crescimento limitado", "Experiências restritas", "Pode ficar para trás em mudanças"],
    tips: ["Curiosidade é a chave do aprendizado", "Comece perguntando por que em situações cotidianas", "O mundo tem muito a oferecer"],
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
