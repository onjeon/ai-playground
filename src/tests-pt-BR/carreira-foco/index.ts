// Seu Nível de Foco Profissional
// Descubra como está sua capacidade de concentração no trabalho!

export const questions = [
  {
    id: 1,
    question: "Quanto tempo você consegue trabalhar focado sem distrações?",
    options: [
      { text: "Horas seguidas sem problema", type: "A" },
      { text: "Blocos de 45-90 minutos", type: "B" },
      { text: "Máximo 20-30 minutos", type: "C" },
      { text: "Poucos minutos, me distraio fácil", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como é sua relação com notificações durante o trabalho?",
    options: [
      { text: "Desativo todas quando preciso focar", type: "A" },
      { text: "Controlo quais recebo e quando", type: "B" },
      { text: "Deixo ligadas mas tento ignorar", type: "C" },
      { text: "Olho todas assim que chegam", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando está focado e alguém interrompe, você:",
    options: [
      { text: "Peço para esperar, estou no meio de algo", type: "A" },
      { text: "Verifico se é urgente, senão volto depois", type: "B" },
      { text: "Atendo mas fico frustrado", type: "C" },
      { text: "Atendo sempre, não consigo ignorar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você lida com tarefas que exigem concentração profunda?",
    options: [
      { text: "Adoro! Entro em flow facilmente", type: "A" },
      { text: "Consigo bem se tiver ambiente adequado", type: "B" },
      { text: "Tenho dificuldade, preciso me forçar", type: "C" },
      { text: "Evito, prefiro tarefas mais leves", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual sua relação com o celular durante o trabalho?",
    options: [
      { text: "Fica no silencioso ou em outro cômodo", type: "A" },
      { text: "Controlo os momentos que olho", type: "B" },
      { text: "Olho frequentemente mesmo sem notificação", type: "C" },
      { text: "É uma distração constante para mim", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como é seu ambiente de trabalho ideal para foco?",
    options: [
      { text: "Silêncio total, zero distrações", type: "A" },
      { text: "Organizado, com música ou ruído controlado", type: "B" },
      { text: "Não penso muito nisso, trabalho onde der", type: "C" },
      { text: "Qualquer ambiente me distrai igual", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você usa técnicas de foco como Pomodoro ou time blocking?",
    options: [
      { text: "Sim, são essenciais para minha produtividade", type: "A" },
      { text: "Às vezes, quando preciso de mais estrutura", type: "B" },
      { text: "Já tentei mas não consigo manter", type: "C" },
      { text: "Não, prefiro deixar fluir", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você se sente sobre deep work (trabalho profundo)?",
    options: [
      { text: "É quando faço meu melhor trabalho", type: "A" },
      { text: "Valorizo e busco ter momentos assim", type: "B" },
      { text: "Difícil conseguir mas sei que é importante", type: "C" },
      { text: "Não sei o que é ou não consigo fazer", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quantas abas você costuma ter abertas no navegador?",
    options: [
      { text: "Poucas, fecho o que não estou usando", type: "A" },
      { text: "Algumas, organizadas por contexto", type: "B" },
      { text: "Muitas, perco o controle às vezes", type: "C" },
      { text: "Dezenas ou centenas", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Quando termina uma tarefa, você:",
    options: [
      { text: "Passo para a próxima com foco", type: "A" },
      { text: "Faço uma pausa breve e volto", type: "B" },
      { text: "Acabo me distraindo antes da próxima", type: "C" },
      { text: "Fico vagando sem direção", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como está sua capacidade de foco comparado a 5 anos atrás?",
    options: [
      { text: "Melhor, desenvolvi técnicas", type: "A" },
      { text: "Igual, sempre foi boa", type: "B" },
      { text: "Pior, distrações aumentaram", type: "C" },
      { text: "Muito pior, quase não consigo focar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "O que melhor descreve seu foco no trabalho?",
    options: [
      { text: "Laser - consigo foco intenso quando preciso", type: "A" },
      { text: "Bom - foco é geralmente adequado", type: "B" },
      { text: "Disperso - luto contra distrações", type: "C" },
      { text: "Caótico - foco é meu maior desafio", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Foco de Laser",
    emoji: "🎯",
    description: "Você tem capacidade de foco excepcional! Consegue entrar em estado de flow e produzir trabalho de alta qualidade. Essa habilidade é cada vez mais rara e valiosa.",
    traits: ["Focado", "Disciplinado", "Produtivo", "Intencional"],
    strengths: ["Deep work", "Alta produtividade", "Qualidade do trabalho", "Controle das distrações"],
    weaknesses: ["Pode parecer antissocial", "Difícil interromper para urgências"],
    tips: ["Continue protegendo seu foco", "Ensine outros suas técnicas", "Equilibre foco com disponibilidade"],
  },
  B: {
    type: "B",
    title: "Foco Saudável",
    emoji: "✅",
    description: "Você tem bom nível de foco! Consegue se concentrar quando necessário e gerencia bem as distrações. Está no caminho certo para produtividade sustentável.",
    traits: ["Equilibrado", "Consciente", "Produtivo", "Adaptável"],
    strengths: ["Foco quando necessário", "Gerenciamento de distrações", "Flexibilidade"],
    weaknesses: ["Pode melhorar em momentos específicos", "Às vezes se dispersa"],
    tips: ["Continue desenvolvendo técnicas", "Proteja seus melhores momentos para deep work", "Experimente novas ferramentas de foco"],
  },
  C: {
    type: "C",
    title: "Foco Desafiado",
    emoji: "📱",
    description: "Seu foco está sendo desafiado! As distrações estão vencendo a batalha. Isso impacta sua produtividade e qualidade do trabalho. É hora de agir.",
    traits: ["Disperso", "Distraído", "Lutando", "Afetado"],
    strengths: ["Consciência do problema", "Adaptabilidade"],
    weaknesses: ["Produtividade comprometida", "Qualidade afetada", "Trabalho superficial"],
    tips: ["Tome ação agora!", "Desative notificações não essenciais", "Experimente técnicas como Pomodoro", "Considere apps de bloqueio"],
  },
  D: {
    type: "D",
    title: "Foco em Crise",
    emoji: "🆘",
    description: "Seu foco está em crise! Você mal consegue se concentrar e as distrações dominam seu dia. Isso é sério e precisa de intervenção imediata.",
    traits: ["Muito disperso", "Improdutivo", "Sobrecarregado", "Viciado em distração"],
    strengths: ["Reconhece o problema (primeiro passo)"],
    weaknesses: ["Produtividade muito baixa", "Qualidade sofrendo", "Pode estar afetando carreira"],
    tips: ["URGENTE: Isso precisa mudar!", "Considere detox digital", "Busque ajuda profissional se necessário", "Faça mudanças drásticas no ambiente"],
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
