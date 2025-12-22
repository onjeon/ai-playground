// Teste de Procrastinação
// Descubra seu nível de procrastinação!

export const questions = [
  {
    id: 1,
    question: "Quando você tem uma tarefa importante, você geralmente:",
    options: [
      { text: "Começo imediatamente para terminar logo", type: "A" },
      { text: "Planejo e começo em tempo razoável", type: "B" },
      { text: "Adio até se tornar urgente", type: "C" },
      { text: "Deixo para o último minuto possível", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você se sente quando adia uma tarefa?",
    options: [
      { text: "Raramente adio, não sei como me sentiria", type: "A" },
      { text: "Um pouco culpado mas geralmente me organizo", type: "B" },
      { text: "Ansioso e culpado, mas ainda assim adio", type: "C" },
      { text: "Mal, mas não consigo mudar esse padrão", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você costuma se distrair com outras coisas quando deveria trabalhar?",
    options: [
      { text: "Raramente, mantenho o foco", type: "A" },
      { text: "Às vezes, mas volto ao trabalho", type: "B" },
      { text: "Frequentemente me perco em distrações", type: "C" },
      { text: "Sempre, as distrações sempre vencem", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você lida com prazos?",
    options: [
      { text: "Termino bem antes do prazo", type: "A" },
      { text: "Entrego no prazo com tranquilidade", type: "B" },
      { text: "Geralmente entrego no limite do prazo", type: "C" },
      { text: "Frequentemente perco prazos", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual é seu maior motivo para adiar tarefas?",
    options: [
      { text: "Não costumo adiar tarefas", type: "A" },
      { text: "Espero o momento certo para começar", type: "B" },
      { text: "Medo de não fazer bem feito", type: "C" },
      { text: "Simplesmente não tenho vontade", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você costuma fazer listas de tarefas?",
    options: [
      { text: "Sim, e sigo elas rigorosamente", type: "A" },
      { text: "Faço listas e cumpro a maioria", type: "B" },
      { text: "Faço listas mas raramente sigo", type: "C" },
      { text: "Não vejo sentido, nunca funciona", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você se sente sobre tarefas chatas ou difíceis?",
    options: [
      { text: "Faço primeiro para tirar do caminho", type: "A" },
      { text: "Tento equilibrar com tarefas mais fáceis", type: "B" },
      { text: "Adio o máximo que posso", type: "C" },
      { text: "Evito até não ter mais escolha", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você já perdeu oportunidades por procrastinar?",
    options: [
      { text: "Nunca ou muito raramente", type: "A" },
      { text: "Uma ou duas vezes na vida", type: "B" },
      { text: "Algumas vezes já aconteceu", type: "C" },
      { text: "Muitas vezes, é um padrão", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quando você finalmente começa uma tarefa adiada, você pensa:",
    options: [
      { text: "Não costumo adiar, então não sei", type: "A" },
      { text: "Que bom que comecei, não era tão difícil", type: "B" },
      { text: "Por que não comecei antes?", type: "C" },
      { text: "Vou ter que fazer às pressas de novo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "A procrastinação afeta sua qualidade de vida?",
    options: [
      { text: "Não, tenho boa gestão do tempo", type: "A" },
      { text: "Minimamente, consigo controlar", type: "B" },
      { text: "Sim, causa estresse frequente", type: "C" },
      { text: "Muito, está arruinando minha vida", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você consegue se motivar para fazer coisas que não quer?",
    options: [
      { text: "Sim, disciplina supera motivação", type: "A" },
      { text: "Na maioria das vezes consigo", type: "B" },
      { text: "Tenho muita dificuldade com isso", type: "C" },
      { text: "Só faço o que tenho vontade", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua relação com o tempo?",
    options: [
      { text: "Uso meu tempo de forma eficiente", type: "A" },
      { text: "Geralmente organizado com alguns deslizes", type: "B" },
      { text: "Sempre parece que o tempo foge de mim", type: "C" },
      { text: "O tempo é meu maior inimigo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Produtivo e Disciplinado",
    emoji: "⚡",
    description: "Você tem excelente gestão do tempo! Raramente procrastina e quando o faz, é de forma controlada. Sua disciplina te permite alcançar objetivos de forma consistente.",
    traits: ["Disciplinado", "Organizado", "Proativo", "Focado"],
    strengths: ["Excelente gestão do tempo", "Cumpre prazos facilmente", "Alta produtividade", "Baixo estresse com tarefas"],
    weaknesses: ["Pode ser inflexível", "Dificuldade em relaxar"],
    tips: ["Permita-se descansar sem culpa", "Mantenha seu sistema funcionando", "Ajude outros a se organizarem"],
  },
  B: {
    type: "B",
    title: "Procrastinador Ocasional",
    emoji: "⏰",
    description: "Você tem uma relação saudável com procrastinação. Às vezes adia coisas, mas consegue se recuperar e entregar suas responsabilidades. Um equilíbrio funcional.",
    traits: ["Equilibrado", "Funcional", "Adaptável", "Realista"],
    strengths: ["Flexibilidade saudável", "Entrega no prazo", "Sabe quando relaxar"],
    weaknesses: ["Procrastinação ocasional", "Poderia ser mais eficiente"],
    tips: ["Identifique seus gatilhos de procrastinação", "Use técnicas como Pomodoro", "Continue monitorando seus hábitos"],
  },
  C: {
    type: "C",
    title: "Procrastinador Crônico",
    emoji: "😰",
    description: "A procrastinação é um problema significativo na sua vida. Você frequentemente adia tarefas, causando estresse e afetando sua produtividade e bem-estar.",
    traits: ["Ansioso", "Evitativo", "Estressado", "Desorganizado"],
    strengths: ["Criatividade sob pressão", "Consciência do problema"],
    weaknesses: ["Estresse constante", "Prazos perdidos", "Qualidade comprometida", "Autoestima afetada"],
    tips: ["Divida tarefas em partes menores", "Use a regra dos 2 minutos", "Considere buscar ajuda profissional"],
  },
  D: {
    type: "D",
    title: "Procrastinação Severa",
    emoji: "🚨",
    description: "Você sofre de procrastinação severa que está prejudicando seriamente sua vida. Este padrão pode estar ligado a questões emocionais mais profundas. Buscar ajuda é urgente.",
    traits: ["Paralisado", "Evitativo", "Desesperançoso", "Sobrecarregado"],
    strengths: ["Potencial de melhoria", "Reconhecimento do problema"],
    weaknesses: ["Perda de oportunidades", "Relações prejudicadas", "Saúde mental afetada", "Ciclo de culpa"],
    tips: ["Procure um psicólogo especializado", "Pode haver TDAH ou ansiedade por trás", "Pequenos passos são válidos, não se julgue"],
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
