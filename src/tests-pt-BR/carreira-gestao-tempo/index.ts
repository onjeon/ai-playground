// Sua Gestão de Tempo Profissional
// Descubra como você administra seu tempo no trabalho!

export const questions = [
  {
    id: 1,
    question: "Como você começa seu dia de trabalho?",
    options: [
      { text: "Com rotina definida e lista de prioridades", type: "A" },
      { text: "Reviso o que precisa ser feito e organizo", type: "B" },
      { text: "Vejo o que aparece e vou resolvendo", type: "C" },
      { text: "Depende do dia, não tenho padrão", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual sua relação com prazos?",
    options: [
      { text: "Sempre entrego antes do prazo", type: "A" },
      { text: "Geralmente cumpro, com planejamento", type: "B" },
      { text: "Às vezes aperto, mas entrego no limite", type: "C" },
      { text: "Frequentemente atraso ou peço mais tempo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com interrupções?",
    options: [
      { text: "Bloqueio horários e evito ao máximo", type: "A" },
      { text: "Gerencio bem, tenho estratégias para isso", type: "B" },
      { text: "Me atrapalham bastante, mas é normal", type: "C" },
      { text: "Meu dia é feito de interrupções", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você usa ferramentas de produtividade?",
    options: [
      { text: "Sim, várias! Agenda, apps, técnicas", type: "A" },
      { text: "Uso algumas que me ajudam", type: "B" },
      { text: "Uso o básico, nada muito elaborado", type: "C" },
      { text: "Não uso, prefiro deixar fluir", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você prioriza tarefas?",
    options: [
      { text: "Método estruturado (matriz, categorização)", type: "A" },
      { text: "Avalio importância e urgência", type: "B" },
      { text: "Faço o que parece mais importante", type: "C" },
      { text: "Faço o que aparece na frente", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual sua relação com multitarefa?",
    options: [
      { text: "Evito totalmente, foco em uma coisa", type: "A" },
      { text: "Minimizo, mas às vezes é inevitável", type: "B" },
      { text: "Faço bastante, parece eficiente", type: "C" },
      { text: "É meu modo normal de trabalhar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você estima o tempo das tarefas?",
    options: [
      { text: "Com precisão, baseado em experiência", type: "A" },
      { text: "Razoavelmente bem, com margem de erro", type: "B" },
      { text: "Geralmente subestimo o tempo necessário", type: "C" },
      { text: "Não estimo, vou fazendo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que acontece quando você tem muito a fazer?",
    options: [
      { text: "Reorganizo prioridades e negocio prazos", type: "A" },
      { text: "Trabalho mais focado e corto distrações", type: "B" },
      { text: "Fico ansioso e trabalho mais horas", type: "C" },
      { text: "Me paraliso sem saber por onde começar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você consegue dizer não a novas demandas?",
    options: [
      { text: "Sim, protejo meu tempo e prioridades", type: "A" },
      { text: "Na maioria das vezes, quando necessário", type: "B" },
      { text: "Tenho dificuldade, aceito mais que deveria", type: "C" },
      { text: "Nunca, aceito tudo que vem", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como está sua caixa de e-mails?",
    options: [
      { text: "Zerada ou muito organizada", type: "A" },
      { text: "Sob controle, processo regularmente", type: "B" },
      { text: "Sempre cheia, mas dou conta", type: "C" },
      { text: "Caos total, centenas não lidos", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você termina seu dia de trabalho?",
    options: [
      { text: "No horário, com tudo organizado pro dia seguinte", type: "A" },
      { text: "Razoavelmente no horário, fazendo fechamento", type: "B" },
      { text: "Quando dá, às vezes fico até tarde", type: "C" },
      { text: "Nunca termino de verdade, sempre há mais", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você se sente sobre sua produtividade?",
    options: [
      { text: "Muito produtivo e eficiente", type: "A" },
      { text: "Produtivo na maioria dos dias", type: "B" },
      { text: "Poderia ser mais produtivo", type: "C" },
      { text: "Sinto que não produzo o suficiente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mestre do Tempo",
    emoji: "⏱️",
    description: "Você domina a gestão de tempo! Sua organização e disciplina são exemplares. Usa técnicas e ferramentas para maximizar cada minuto do seu dia.",
    traits: ["Organizado", "Disciplinado", "Eficiente", "Estratégico"],
    strengths: ["Alta produtividade", "Entregas consistentes", "Controle do dia", "Sem sobrecarga"],
    weaknesses: ["Pode ser inflexível", "Dificuldade com imprevistos", "Pode parecer robótico"],
    tips: ["Permita alguma flexibilidade", "Nem tudo precisa ser otimizado", "Espontaneidade também tem valor"],
  },
  B: {
    type: "B",
    title: "Gestor Competente",
    emoji: "📅",
    description: "Você gerencia bem seu tempo! Equilibra estrutura com flexibilidade. Consegue entregar suas demandas sem se estressar demais.",
    traits: ["Equilibrado", "Adaptável", "Competente", "Consciente"],
    strengths: ["Bom equilíbrio", "Entregas confiáveis", "Adaptação a mudanças"],
    weaknesses: ["Pode melhorar em alguns aspectos", "Às vezes se dispersa"],
    tips: ["Continue desenvolvendo bons hábitos", "Experimente novas técnicas", "Identifique seus maiores desperdiçadores de tempo"],
  },
  C: {
    type: "C",
    title: "Gestor em Desenvolvimento",
    emoji: "🌱",
    description: "Você tem potencial mas precisa melhorar sua gestão de tempo. Há espaço para desenvolvimento que pode transformar sua produtividade.",
    traits: ["Em desenvolvimento", "Reativo", "Sobrecarregado", "Potencial"],
    strengths: ["Reconhece a necessidade de melhoria", "Flexível", "Esforçado"],
    weaknesses: ["Estimativas ruins", "Dificuldade com limites", "Procrastinação"],
    tips: ["Comece com hábitos pequenos", "Use uma ferramenta simples de lista", "Aprenda a priorizar"],
  },
  D: {
    type: "D",
    title: "Caos Controlado",
    emoji: "🌪️",
    description: "Gestão de tempo não é seu forte! Você opera em modo reativo e perde muito tempo com distrações e falta de foco. Há muito a melhorar.",
    traits: ["Caótico", "Reativo", "Disperso", "Sobrecarregado"],
    strengths: ["Flexibilidade extrema", "Lida com imprevistos"],
    weaknesses: ["Baixa produtividade", "Estresse constante", "Prazos perdidos", "Falta de controle"],
    tips: ["URGENTE: Busque ajuda com gestão de tempo", "Comece pelo básico: lista e agenda", "Sua qualidade de vida vai melhorar muito"],
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
