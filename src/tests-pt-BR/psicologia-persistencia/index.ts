// Teste de Persistência
// Descubra seu nível de persistência e determinação!

export const questions = [
  {
    id: 1,
    question: "Quando enfrenta um obstáculo grande, você:",
    options: [
      { text: "Encontro formas de contornar e sigo em frente", type: "A" },
      { text: "Persisto mas às vezes fico desanimado", type: "B" },
      { text: "Frequentemente fico tentado a desistir", type: "C" },
      { text: "Geralmente desisto quando fica difícil", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você termina o que começa?",
    options: [
      { text: "Sim, sempre levo até o fim", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Às vezes abandono no meio", type: "C" },
      { text: "Frequentemente deixo coisas pela metade", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Após uma falha, você:",
    options: [
      { text: "Analiso, ajusto e tento de novo", type: "A" },
      { text: "Tento de novo após processar", type: "B" },
      { text: "Fico desmotivado por um bom tempo", type: "C" },
      { text: "Desisto e passo para outra coisa", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quanto tempo você persiste em objetivos difíceis?",
    options: [
      { text: "O tempo que for necessário", type: "A" },
      { text: "Bastante tempo, mas avalio periodicamente", type: "B" },
      { text: "Pouco tempo, perco interesse", type: "C" },
      { text: "Desisto rápido se não vejo resultados", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você consegue manter rotinas de longo prazo (exercícios, estudos)?",
    options: [
      { text: "Sim, tenho disciplina para manter", type: "A" },
      { text: "Geralmente consigo com esforço", type: "B" },
      { text: "Começo bem mas abandono frequentemente", type: "C" },
      { text: "Nunca consigo manter por muito tempo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando outros desistem de algo, você:",
    options: [
      { text: "Continuo se acredito no objetivo", type: "A" },
      { text: "Avalio se vale continuar", type: "B" },
      { text: "Tendo a desistir junto", type: "C" },
      { text: "Desisto logo também", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você já alcançou algo que parecia impossível através de persistência?",
    options: [
      { text: "Sim, várias vezes!", type: "A" },
      { text: "Algumas vezes", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Não, desisti antes de chegar lá", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando uma habilidade é difícil de aprender, você:",
    options: [
      { text: "Pratico até dominar", type: "A" },
      { text: "Persisto por um bom tempo", type: "B" },
      { text: "Desisto se não progredir rápido", type: "C" },
      { text: "Abandono e busco algo mais fácil", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você se considera uma pessoa determinada?",
    options: [
      { text: "Muito determinada", type: "A" },
      { text: "Razoavelmente determinada", type: "B" },
      { text: "Não muito", type: "C" },
      { text: "Nada determinada", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Quando está cansado de algo, você:",
    options: [
      { text: "Descanso e volto com mais força", type: "A" },
      { text: "Faço uma pausa e avalio", type: "B" },
      { text: "Uso como desculpa para parar", type: "C" },
      { text: "Paro e não volto mais", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você tem metas de longo prazo que está perseguindo?",
    options: [
      { text: "Sim, e trabalho nelas consistentemente", type: "A" },
      { text: "Tenho, e me esforço para avançar", type: "B" },
      { text: "Tenho mas não avanço muito", type: "C" },
      { text: "Não, desisti das metas de longo prazo", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase mais representa você?",
    options: [
      { text: "Nunca desisto", type: "A" },
      { text: "Persisto enquanto fizer sentido", type: "B" },
      { text: "Se está muito difícil, mudo de caminho", type: "C" },
      { text: "Desistir é inteligente, não desperdiço tempo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Persistente",
    emoji: "💎",
    description: "Você é altamente persistente! Não desiste facilmente e mantém o foco em seus objetivos apesar dos obstáculos. Essa é uma das qualidades mais importantes para o sucesso.",
    traits: ["Determinado", "Resiliente", "Focado", "Disciplinado"],
    strengths: ["Alcança objetivos difíceis", "Supera obstáculos", "Disciplina admirável", "Confiança dos outros"],
    weaknesses: ["Pode insistir demais em algo que não funciona", "Pode ignorar sinais de que deveria mudar"],
    tips: ["Continue cultivando sua determinação", "Saiba distinguir persistência de teimosia", "Use essa força para ajudar outros"],
  },
  B: {
    type: "B",
    title: "Persistente",
    emoji: "🌿",
    description: "Você é persistente na maioria das situações. Consegue manter o foco e superar obstáculos, embora às vezes questione se deve continuar.",
    traits: ["Determinado", "Ponderado", "Equilibrado", "Consistente"],
    strengths: ["Boa capacidade de persistir", "Avaliação adequada de quando continuar"],
    weaknesses: ["Pode desistir um pouco cedo às vezes", "Oscilações de motivação"],
    tips: ["Fortaleça sua determinação", "Lembre-se de por que começou", "Celebre pequenos progressos"],
  },
  C: {
    type: "C",
    title: "Persistência Baixa",
    emoji: "🌊",
    description: "Você tem dificuldade em persistir quando as coisas ficam difíceis. Tende a desistir antes de alcançar objetivos. Desenvolver mais persistência pode transformar sua vida.",
    traits: ["Desistente", "Inconstante", "Desmotivado", "Flutuante"],
    strengths: ["Flexibilidade para mudar de direção"],
    weaknesses: ["Objetivos não alcançados", "Potencial não realizado", "Frustração com falta de progresso"],
    tips: ["Comece com metas menores e alcançáveis", "Encontre seu 'porquê' forte", "Persistência é um músculo que se desenvolve"],
  },
  D: {
    type: "D",
    title: "Desiste Facilmente",
    emoji: "🚪",
    description: "Você tende a desistir muito facilmente. Isso está impedindo você de alcançar seu potencial. Desenvolver persistência é crucial para seu crescimento.",
    traits: ["Desistente crônico", "Impaciente com resultados", "Inconstante", "Frustrado"],
    strengths: ["Potencial não explorado"],
    weaknesses: ["Nunca alcança grandes objetivos", "Ciclo de começar e parar", "Autoestima pode ser afetada"],
    tips: ["Busque entender por que desiste", "Pode haver questões de autoestima envolvidas", "Considere acompanhamento profissional"],
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
