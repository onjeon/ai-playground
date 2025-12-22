// Seu Nível de Organização Profissional
// Descubra como está sua organização no trabalho!

export const questions = [
  {
    id: 1,
    question: "Como está sua mesa/ambiente de trabalho?",
    options: [
      { text: "Impecavelmente organizado", type: "A" },
      { text: "Bem organizado na maior parte", type: "B" },
      { text: "Um pouco bagunçado mas sei onde está tudo", type: "C" },
      { text: "Caos total, não acho nada", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você usa sistema para organizar tarefas?",
    options: [
      { text: "Sim, rigoroso e atualizado", type: "A" },
      { text: "Sim, uso consistentemente", type: "B" },
      { text: "Às vezes, não muito consistente", type: "C" },
      { text: "Não, está tudo na minha cabeça", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você esquece compromissos ou tarefas importantes?",
    options: [
      { text: "Nunca, está tudo no sistema", type: "A" },
      { text: "Raramente, meu sistema funciona", type: "B" },
      { text: "Às vezes, mais do que gostaria", type: "C" },
      { text: "Frequentemente, é um problema", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você organiza arquivos digitais?",
    options: [
      { text: "Sistema de pastas rigoroso e nomenclatura padrão", type: "A" },
      { text: "Bem organizado, encontro o que preciso", type: "B" },
      { text: "Mais ou menos, às vezes perco coisas", type: "C" },
      { text: "Bagunça total, vivo pesquisando", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você planeja seu dia/semana?",
    options: [
      { text: "Sempre, com blocos de tempo definidos", type: "A" },
      { text: "Sim, tenho uma rotina de planejamento", type: "B" },
      { text: "Às vezes, quando lembro", type: "C" },
      { text: "Não, vou resolvendo o que aparece", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como está sua caixa de e-mails?",
    options: [
      { text: "Inbox zero ou muito próximo", type: "A" },
      { text: "Sob controle, processo regularmente", type: "B" },
      { text: "Cheia mas dou conta", type: "C" },
      { text: "Centenas de não lidos, caos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você consegue encontrar informações rapidamente?",
    options: [
      { text: "Sempre, sei exatamente onde está tudo", type: "A" },
      { text: "Na maioria das vezes sim", type: "B" },
      { text: "Às vezes demoro para achar", type: "C" },
      { text: "Perco muito tempo procurando coisas", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Seus projetos têm documentação organizada?",
    options: [
      { text: "Sempre, tudo documentado e atualizado", type: "A" },
      { text: "Na maioria sim", type: "B" },
      { text: "Só o essencial, quando dá tempo", type: "C" },
      { text: "Quase nada documentado", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você mantém controle de prazos e deadlines?",
    options: [
      { text: "Rigorosamente, nunca perco prazo", type: "A" },
      { text: "Sim, raramente tenho problemas", type: "B" },
      { text: "Às vezes aperto, mas entrego", type: "C" },
      { text: "Frequentemente perco ou aperto prazos", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você lida com múltiplos projetos simultaneamente?",
    options: [
      { text: "Tenho sistema para acompanhar todos", type: "A" },
      { text: "Gerencio bem com algumas ferramentas", type: "B" },
      { text: "Difícil, às vezes confundo ou esqueço", type: "C" },
      { text: "Caos, sempre me perco", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você faz revisões periódicas do que precisa fazer?",
    options: [
      { text: "Sim, diária, semanal e mensal", type: "A" },
      { text: "Semanalmente sim", type: "B" },
      { text: "Esporadicamente", type: "C" },
      { text: "Nunca, vou na onda", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como os colegas veem sua organização?",
    options: [
      { text: "Referência de organização", type: "A" },
      { text: "Organizado e confiável", type: "B" },
      { text: "Mais ou menos, às vezes desorganizado", type: "C" },
      { text: "Desorganizado e caótico", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Super Organizado",
    emoji: "📁",
    description: "Você é extremamente organizado! Sistemas, processos e controles são sua força. Nada escapa e tudo está no lugar certo. Isso é um diferencial valioso.",
    traits: ["Meticuloso", "Sistemático", "Confiável", "Controlado"],
    strengths: ["Nunca perde nada", "Encontra tudo rápido", "Cumpre prazos sempre", "Projetos sob controle"],
    weaknesses: ["Pode ser inflexível", "Pode gastar muito tempo organizando"],
    tips: ["Continue assim!", "Equilibre organização com flexibilidade", "Ajude outros a se organizarem"],
  },
  B: {
    type: "B",
    title: "Bem Organizado",
    emoji: "✅",
    description: "Você tem boa organização! Usa sistemas, cumpre prazos e mantém controle. Há espaço para melhorar mas está bem.",
    traits: ["Organizado", "Funcional", "Consistente", "Prático"],
    strengths: ["Boa organização geral", "Prazos cumpridos", "Confiável"],
    weaknesses: ["Alguns pontos podem melhorar"],
    tips: ["Continue refinando seus sistemas", "Automatize o que puder", "Busque consistência"],
  },
  C: {
    type: "C",
    title: "Organização em Desenvolvimento",
    emoji: "🌱",
    description: "Sua organização precisa de trabalho. Você dá conta mas com esforço e às vezes falha. Isso afeta sua produtividade e confiabilidade.",
    traits: ["Desorganizado", "Improvisador", "Caótico funcional", "Potencial"],
    strengths: ["Adaptável", "Se vira"],
    weaknesses: ["Perde tempo procurando", "Esquece coisas", "Prazos apertados", "Estresse desnecessário"],
    tips: ["Invista em organização!", "Comece com um sistema simples", "Organização economiza muito tempo"],
  },
  D: {
    type: "D",
    title: "Desorganizado",
    emoji: "🌪️",
    description: "Você é muito desorganizado! Isso está impactando seriamente sua produtividade, confiabilidade e carreira. Mudança urgente é necessária.",
    traits: ["Muito desorganizado", "Caótico", "Esquecido", "Não confiável"],
    strengths: ["Talvez criatividade"],
    weaknesses: ["Prazos perdidos", "Coisas esquecidas", "Não confiável", "Muito stress", "Tempo desperdiçado"],
    tips: ["URGENTE: Isso precisa mudar!", "Busque ajuda ou ferramentas", "Organização é habilidade essencial", "Comece pelo básico hoje"],
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
