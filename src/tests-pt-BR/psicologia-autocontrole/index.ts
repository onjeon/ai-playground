// Teste de Autocontrole
// Descubra seu nível de autocontrole!

export const questions = [
  {
    id: 1,
    question: "Você consegue resistir a tentações imediatas por benefícios futuros?",
    options: [
      { text: "Sim, facilmente", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Tenho dificuldade", type: "C" },
      { text: "Não consigo resistir", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você lida com impulsos de compra?",
    options: [
      { text: "Penso bem antes de comprar qualquer coisa", type: "A" },
      { text: "Geralmente controlo, com exceções", type: "B" },
      { text: "Frequentemente compro por impulso", type: "C" },
      { text: "Não consigo controlar minhas compras", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você consegue manter uma dieta ou hábito saudável?",
    options: [
      { text: "Sim, tenho disciplina", type: "A" },
      { text: "Consigo manter com esforço", type: "B" },
      { text: "Começo bem mas abandono logo", type: "C" },
      { text: "Nunca consigo manter", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quando está com raiva, você:",
    options: [
      { text: "Controlo bem e escolho como reagir", type: "A" },
      { text: "Me controlo na maioria das vezes", type: "B" },
      { text: "Às vezes perco a cabeça", type: "C" },
      { text: "Frequentemente explodo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você consegue focar em tarefas sem se distrair?",
    options: [
      { text: "Sim, tenho boa concentração", type: "A" },
      { text: "Geralmente consigo focar", type: "B" },
      { text: "Me distraio com facilidade", type: "C" },
      { text: "Não consigo focar de jeito nenhum", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você lida com vícios ou hábitos ruins?",
    options: [
      { text: "Consigo parar quando decido", type: "A" },
      { text: "Preciso de esforço mas consigo", type: "B" },
      { text: "Tenho muita dificuldade em parar", type: "C" },
      { text: "Não consigo controlar meus vícios", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você fala coisas das quais se arrepende depois?",
    options: [
      { text: "Raramente, penso antes de falar", type: "A" },
      { text: "Às vezes, mas não frequentemente", type: "B" },
      { text: "Com frequência me arrependo", type: "C" },
      { text: "Sempre falo sem pensar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você consegue acordar quando o despertador toca?",
    options: [
      { text: "Sim, levanto na primeira vez", type: "A" },
      { text: "Uso soneca uma ou duas vezes", type: "B" },
      { text: "Muitas sonecas e às vezes atraso", type: "C" },
      { text: "Não consigo acordar, sempre atraso", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você lida com o celular e redes sociais?",
    options: [
      { text: "Uso de forma controlada e intencional", type: "A" },
      { text: "Geralmente controlo o uso", type: "B" },
      { text: "Passo mais tempo do que gostaria", type: "C" },
      { text: "Sou viciado, não consigo largar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você consegue economizar dinheiro regularmente?",
    options: [
      { text: "Sim, tenho disciplina financeira", type: "A" },
      { text: "Consigo economizar com esforço", type: "B" },
      { text: "Tenho dificuldade em guardar dinheiro", type: "C" },
      { text: "Nunca consigo economizar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você consegue parar de comer quando satisfeito?",
    options: [
      { text: "Sim, respeito minha saciedade", type: "A" },
      { text: "Geralmente paro no ponto certo", type: "B" },
      { text: "Frequentemente como demais", type: "C" },
      { text: "Sempre como em excesso", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria seu autocontrole geral?",
    options: [
      { text: "Excelente, tenho muita disciplina", type: "A" },
      { text: "Bom, com algumas falhas", type: "B" },
      { text: "Fraco, preciso melhorar muito", type: "C" },
      { text: "Quase inexistente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Autocontrole Excelente",
    emoji: "🎯",
    description: "Você tem excelente autocontrole! Consegue resistir a impulsos, manter hábitos e fazer escolhas alinhadas com seus objetivos de longo prazo.",
    traits: ["Disciplinado", "Focado", "Determinado", "Paciente"],
    strengths: ["Alcança objetivos facilmente", "Hábitos saudáveis", "Estabilidade financeira", "Relacionamentos estáveis"],
    weaknesses: ["Pode ser muito rígido", "Dificuldade em se permitir prazeres"],
    tips: ["Equilibre disciplina com flexibilidade", "Permita-se prazer moderado", "Use suas habilidades para ajudar outros"],
  },
  B: {
    type: "B",
    title: "Bom Autocontrole",
    emoji: "💪",
    description: "Você tem bom autocontrole na maioria das situações. Consegue se disciplinar, embora tenha algumas áreas onde pode melhorar.",
    traits: ["Equilibrado", "Funcional", "Consciente", "Em evolução"],
    strengths: ["Funciona bem na maioria das áreas", "Capacidade de melhoria", "Autoconhecimento"],
    weaknesses: ["Algumas áreas de vulnerabilidade", "Inconsistência ocasional"],
    tips: ["Identifique suas áreas fracas", "Desenvolva estratégias específicas", "Continue praticando disciplina"],
  },
  C: {
    type: "C",
    title: "Autocontrole Fraco",
    emoji: "😅",
    description: "Seu autocontrole precisa de desenvolvimento. Você frequentemente cede a impulsos e tem dificuldade em manter hábitos. Isso está afetando seus objetivos.",
    traits: ["Impulsivo", "Inconsistente", "Desafiado", "Em luta"],
    strengths: ["Espontaneidade", "Flexibilidade", "Consciência do problema"],
    weaknesses: ["Objetivos não alcançados", "Hábitos ruins persistentes", "Possíveis problemas financeiros ou de saúde"],
    tips: ["Comece com mudanças pequenas", "Use técnicas como compromissos públicos", "Considere ajuda profissional"],
  },
  D: {
    type: "D",
    title: "Autocontrole Muito Baixo",
    emoji: "🆘",
    description: "Você está enfrentando sérias dificuldades de autocontrole. Impulsos dominam suas decisões e isso está prejudicando sua vida. Ajuda profissional é recomendada.",
    traits: ["Descontrolado", "Impulsivo", "Compulsivo", "Em dificuldade"],
    strengths: ["Potencial de transformação com ajuda"],
    weaknesses: ["Vida afetada em múltiplas áreas", "Possíveis vícios", "Relacionamentos prejudicados"],
    tips: ["Procure ajuda profissional urgentemente", "Pode haver questões de saúde mental envolvidas", "Você pode melhorar com suporte adequado"],
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
