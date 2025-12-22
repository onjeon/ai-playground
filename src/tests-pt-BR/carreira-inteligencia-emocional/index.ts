// Sua Inteligência Emocional no Trabalho
// Descubra seu nível de inteligência emocional profissional!

export const questions = [
  {
    id: 1,
    question: "Quando um colega está claramente irritado, você:",
    options: [
      { text: "Percebo imediatamente e ajudo", type: "A" },
      { text: "Noto e dou espaço se precisar", type: "B" },
      { text: "Às vezes percebo, às vezes não", type: "C" },
      { text: "Raramente noto o estado emocional dos outros", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você lida com suas próprias emoções negativas no trabalho?",
    options: [
      { text: "Reconheço, processo e sigo em frente", type: "A" },
      { text: "Tento controlar e não deixar afetar", type: "B" },
      { text: "Às vezes deixo transparecer demais", type: "C" },
      { text: "Tenho dificuldade em controlar emoções", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Em situações de tensão com colegas, você:",
    options: [
      { text: "Busco entender a perspectiva do outro", type: "A" },
      { text: "Tento manter a calma e resolver", type: "B" },
      { text: "Fico tenso mas não explodo", type: "C" },
      { text: "Tendo a reagir emocionalmente", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você percebe suas próprias emoções?",
    options: [
      { text: "Sou muito consciente do que sinto e por quê", type: "A" },
      { text: "Geralmente sei como estou me sentindo", type: "B" },
      { text: "Às vezes me surpreendo com minhas reações", type: "C" },
      { text: "Tenho dificuldade em identificar o que sinto", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quando precisa dar uma notícia difícil, você:",
    options: [
      { text: "Escolho momento, tom e palavras com cuidado", type: "A" },
      { text: "Tento ser sensível mas direto", type: "B" },
      { text: "Vou direto, a mensagem é o que importa", type: "C" },
      { text: "Evito ou delego a tarefa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você motiva colegas desmotivados?",
    options: [
      { text: "Entendo o que está causando e ajudo", type: "A" },
      { text: "Ofereço apoio e palavras de incentivo", type: "B" },
      { text: "Digo para se animar e seguir em frente", type: "C" },
      { text: "Não é minha responsabilidade motivar outros", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quando você está frustrado no trabalho:",
    options: [
      { text: "Identifico a causa e busco solução", type: "A" },
      { text: "Respiro fundo e tento não reagir", type: "B" },
      { text: "Reclamo com colegas próximos", type: "C" },
      { text: "Deixo transparecer minha frustração", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você lê o clima de uma reunião?",
    options: [
      { text: "Percebo nuances e adapto minha abordagem", type: "A" },
      { text: "Consigo sentir se está tenso ou relaxado", type: "B" },
      { text: "Foco mais no conteúdo que no clima", type: "C" },
      { text: "Não presto atenção no clima", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sua capacidade de influenciar positivamente outros é:",
    options: [
      { text: "Alta, conecto bem e inspiro mudanças", type: "A" },
      { text: "Boa, consigo persuadir quando necessário", type: "B" },
      { text: "Moderada, depende da situação", type: "C" },
      { text: "Baixa, tenho dificuldade em influenciar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você lida com conflitos emocionais no time?",
    options: [
      { text: "Facilito a conversa e ajudo a resolver", type: "A" },
      { text: "Tento apaziguar e mediar", type: "B" },
      { text: "Evito me envolver em conflitos alheios", type: "C" },
      { text: "Conflitos emocionais me incomodam muito", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você consegue manter a calma sob pressão extrema?",
    options: [
      { text: "Sim, mantenho o foco e a clareza", type: "A" },
      { text: "Na maioria das vezes sim", type: "B" },
      { text: "Às vezes perco a compostura", type: "C" },
      { text: "Pressão me afeta muito emocionalmente", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como os outros descreveriam sua inteligência emocional?",
    options: [
      { text: "Muito alta, sou referência nisso", type: "A" },
      { text: "Boa, equilibrado emocionalmente", type: "B" },
      { text: "Razoável, às vezes exagero", type: "C" },
      { text: "Baixa, sou muito reativo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Alta Inteligência Emocional",
    emoji: "🧠",
    description: "Você tem inteligência emocional excepcional! Compreende suas emoções e as dos outros com clareza. Isso te torna um profissional diferenciado.",
    traits: ["Empático", "Autoconsciente", "Equilibrado", "Influente"],
    strengths: ["Leitura emocional precisa", "Autocontrole", "Influência positiva", "Gestão de conflitos"],
    weaknesses: ["Pode absorver emoções dos outros", "Às vezes foca demais em emoções"],
    tips: ["Use seu dom para liderar e ajudar", "Proteja-se de absorver demais", "Ensine outros a desenvolver IE"],
  },
  B: {
    type: "B",
    title: "Boa Inteligência Emocional",
    emoji: "⚖️",
    description: "Você tem boa inteligência emocional! Equilibra razão e emoção de forma saudável. Consegue navegar bem situações emocionais no trabalho.",
    traits: ["Equilibrado", "Consciente", "Adaptável", "Respeitoso"],
    strengths: ["Bom autocontrole", "Empatia funcional", "Relacionamentos saudáveis"],
    weaknesses: ["Pode melhorar em leitura de nuances", "Às vezes demora a perceber"],
    tips: ["Continue desenvolvendo", "Pratique mais escuta ativa", "Observe linguagem corporal"],
  },
  C: {
    type: "C",
    title: "Inteligência Emocional em Desenvolvimento",
    emoji: "🌱",
    description: "Sua inteligência emocional precisa de desenvolvimento. Você tem consciência mas ainda reage de forma inconsistente. Há muito potencial a desenvolver.",
    traits: ["Em desenvolvimento", "Inconsistente", "Reativo", "Potencial"],
    strengths: ["Consciência do que precisa melhorar", "Autenticidade"],
    weaknesses: ["Reações emocionais descontroladas", "Dificuldade em ler outros", "Conflitos frequentes"],
    tips: ["Pratique pausa antes de reagir", "Desenvolva autoconhecimento", "Considere coaching ou terapia"],
  },
  D: {
    type: "D",
    title: "Baixa Inteligência Emocional",
    emoji: "🔴",
    description: "Sua inteligência emocional é baixa e isso impacta significativamente sua vida profissional. Relacionamentos e carreira sofrem com isso.",
    traits: ["Reativo", "Desatento", "Impulsivo", "Desconectado"],
    strengths: ["Autenticidade (embora mal canalizada)"],
    weaknesses: ["Conflitos frequentes", "Relacionamentos prejudicados", "Baixa influência", "Reações inadequadas"],
    tips: ["URGENTE: Busque desenvolver IE", "Considere terapia ou coaching", "Sua carreira depende disso"],
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
