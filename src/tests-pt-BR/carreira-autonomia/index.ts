// Seu Nível de Autonomia Profissional
// Descubra quão autônomo você é no trabalho!

export const questions = [
  {
    id: 1,
    question: "Quando recebe uma tarefa sem instruções detalhadas, você:",
    options: [
      { text: "Adoro! Defino meu próprio caminho", type: "A" },
      { text: "Pesquiso, planejo e executo", type: "B" },
      { text: "Peço mais direcionamento antes de começar", type: "C" },
      { text: "Fico perdido sem instruções claras", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual nível de supervisão você prefere?",
    options: [
      { text: "Mínima, só me dê o objetivo", type: "A" },
      { text: "Alinhamentos periódicos são suficientes", type: "B" },
      { text: "Gosto de acompanhamento mais frequente", type: "C" },
      { text: "Preciso de direcionamento constante", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando encontra um problema no trabalho, você:",
    options: [
      { text: "Resolvo sozinho e depois informo", type: "A" },
      { text: "Tento resolver, peço ajuda se precisar", type: "B" },
      { text: "Consulto antes de tomar qualquer ação", type: "C" },
      { text: "Espero que alguém me diga o que fazer", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você define suas prioridades de trabalho?",
    options: [
      { text: "Autonomamente, com base nos objetivos", type: "A" },
      { text: "Combino minha visão com direcionamento", type: "B" },
      { text: "Sigo as prioridades definidas pelo gestor", type: "C" },
      { text: "Preciso que me digam o que é prioridade", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quando não tem trabalho definido, você:",
    options: [
      { text: "Busco proativamente o que fazer", type: "A" },
      { text: "Identifico oportunidades e proponho", type: "B" },
      { text: "Pergunto o que posso ajudar", type: "C" },
      { text: "Espero que me passem algo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você toma decisões no seu escopo sem pedir aprovação?",
    options: [
      { text: "Sim, frequentemente, é meu papel", type: "A" },
      { text: "Na maioria das vezes, depende do impacto", type: "B" },
      { text: "Prefiro validar antes de decidir", type: "C" },
      { text: "Quase nunca, tenho medo de errar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você lida com ambiguidade no trabalho?",
    options: [
      { text: "Navego bem, ambiguidade traz liberdade", type: "A" },
      { text: "Aceito, mas busco clarificar pontos-chave", type: "B" },
      { text: "Me incomoda, prefiro clareza", type: "C" },
      { text: "Paraliso sem diretrizes claras", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você sugere melhorias e iniciativas proativamente?",
    options: [
      { text: "Constantemente, é natural para mim", type: "A" },
      { text: "Frequentemente, quando vejo oportunidade", type: "B" },
      { text: "Às vezes, quando me pedem opinião", type: "C" },
      { text: "Raramente, não é meu papel", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como seu gestor descreveria sua autonomia?",
    options: [
      { text: "Altamente autônomo, não precisa de supervisão", type: "A" },
      { text: "Autônomo, com bom senso de quando consultar", type: "B" },
      { text: "Precisa de direcionamento frequente", type: "C" },
      { text: "Muito dependente, precisa de supervisão constante", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Quando erra em algo que decidiu sozinho, você:",
    options: [
      { text: "Assumo, corrijo e sigo em frente", type: "A" },
      { text: "Analiso o que deu errado e aprendo", type: "B" },
      { text: "Me arrependo de não ter consultado antes", type: "C" },
      { text: "Por isso evito decidir sozinho", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você se sente confortável trabalhando sem supervisão direta?",
    options: [
      { text: "Prefiro assim, rendo mais", type: "A" },
      { text: "Sim, desde que tenha objetivos claros", type: "B" },
      { text: "Fico um pouco inseguro", type: "C" },
      { text: "Me sinto perdido sem supervisão", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase melhor te define?",
    options: [
      { text: "Dono do meu trabalho e resultados", type: "A" },
      { text: "Autônomo com responsabilidade", type: "B" },
      { text: "Executor competente de diretrizes", type: "C" },
      { text: "Preciso de direção para funcionar", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Autônomo",
    emoji: "🦅",
    description: "Você é extremamente autônomo! Toma iniciativa, decide e executa sem precisar de supervisão. Essa independência é valiosa e te posiciona para liderança.",
    traits: ["Independente", "Proativo", "Decisor", "Dono"],
    strengths: ["Não precisa de supervisão", "Alta iniciativa", "Decisão rápida", "Senso de dono"],
    weaknesses: ["Pode parecer rebelde", "Às vezes age sem alinhar", "Pode errar sozinho"],
    tips: ["Mantenha alinhamento com stakeholders", "Comunique suas decisões", "Equilibre autonomia com colaboração"],
  },
  B: {
    type: "B",
    title: "Autonomia Equilibrada",
    emoji: "⚖️",
    description: "Você tem autonomia equilibrada! Sabe quando agir sozinho e quando buscar direcionamento. Esse equilíbrio é altamente valorizado.",
    traits: ["Equilibrado", "Responsável", "Consciente", "Adaptável"],
    strengths: ["Bom senso de quando consultar", "Autonomia responsável", "Confiança do gestor"],
    weaknesses: ["Pode ser mais autônomo em algumas áreas"],
    tips: ["Continue desenvolvendo autonomia", "Busque mais responsabilidade gradualmente", "Confie mais em si mesmo"],
  },
  C: {
    type: "C",
    title: "Dependente de Direção",
    emoji: "🧭",
    description: "Você precisa de mais direcionamento do que deveria. Isso pode limitar seu crescimento e como é percebido. Desenvolver mais autonomia é importante.",
    traits: ["Dependente", "Executor", "Cauteloso", "Orientado"],
    strengths: ["Segue bem instruções", "Baixo risco de erro por conta própria"],
    weaknesses: ["Pouca iniciativa", "Limitado a tarefas definidas", "Percepção de baixa senioridade"],
    tips: ["Desenvolva mais iniciativa", "Tome pequenas decisões sozinho", "Assuma mais responsabilidade gradualmente"],
  },
  D: {
    type: "D",
    title: "Baixa Autonomia",
    emoji: "🔗",
    description: "Você tem autonomia muito baixa. Precisa de supervisão constante e evita tomar decisões. Isso é um problema sério para crescimento profissional.",
    traits: ["Muito dependente", "Passivo", "Inseguro", "Executor básico"],
    strengths: ["Executa o que mandam"],
    weaknesses: ["Limitação severa de carreira", "Visto como júnior", "Não cresce sem direção", "Sobrecarrega gestores"],
    tips: ["IMPORTANTE: Isso limita muito sua carreira", "Desenvolva confiança em decisões", "Comece com autonomia em coisas pequenas", "Busque feedback e coaching"],
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
