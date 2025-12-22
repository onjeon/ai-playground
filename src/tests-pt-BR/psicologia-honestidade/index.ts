// Teste de Honestidade
// Descubra seu nível de honestidade e integridade!

export const questions = [
  {
    id: 1,
    question: "Você fala a verdade mesmo quando difícil?",
    options: [
      { text: "Sempre, honestidade é fundamental", type: "A" },
      { text: "Geralmente sim, com tato", type: "B" },
      { text: "Às vezes omito ou suavizo", type: "C" },
      { text: "Minto quando conveniente", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você cumpre suas promessas?",
    options: [
      { text: "Sempre, minha palavra é minha honra", type: "A" },
      { text: "Na grande maioria das vezes", type: "B" },
      { text: "Às vezes não consigo cumprir", type: "C" },
      { text: "Prometo sem intenção de cumprir", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você admite quando está errado?",
    options: [
      { text: "Sim, assumir erros é importante", type: "A" },
      { text: "Geralmente admito", type: "B" },
      { text: "Tenho dificuldade em admitir", type: "C" },
      { text: "Raramente assumo erros", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você seria honesto mesmo se ninguém descobrisse a mentira?",
    options: [
      { text: "Sim, minha integridade é interna", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Depende da situação", type: "C" },
      { text: "Se não descobrissem, não vejo problema", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você é honesto em suas relações?",
    options: [
      { text: "Sim, transparência é fundamental", type: "A" },
      { text: "Geralmente sou honesto", type: "B" },
      { text: "Às vezes escondo coisas", type: "C" },
      { text: "Frequentemente omito ou minto", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você devolveria dinheiro encontrado?",
    options: [
      { text: "Sim, faria o possível para devolver", type: "A" },
      { text: "Provavelmente sim", type: "B" },
      { text: "Depende da quantia", type: "C" },
      { text: "Não, achado não é roubado", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você é honesto em ambientes profissionais?",
    options: [
      { text: "Sempre, mesmo quando prejudicial para mim", type: "A" },
      { text: "Geralmente mantenho integridade", type: "B" },
      { text: "Às vezes flexibilizo a verdade", type: "C" },
      { text: "Faço o necessário para me dar bem", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você é honesto consigo mesmo?",
    options: [
      { text: "Sim, autoengano é perigoso", type: "A" },
      { text: "Geralmente sou honesto comigo", type: "B" },
      { text: "Às vezes me engano", type: "C" },
      { text: "Frequentemente evito verdades difíceis", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você daria feedback honesto mesmo que doesse?",
    options: [
      { text: "Sim, com tato mas honestamente", type: "A" },
      { text: "Geralmente sim, quando importante", type: "B" },
      { text: "Prefiro evitar para não magoar", type: "C" },
      { text: "Digo o que querem ouvir", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você declararia todos os impostos corretamente?",
    options: [
      { text: "Sim, é minha obrigação", type: "A" },
      { text: "Geralmente sou correto", type: "B" },
      { text: "Procuro brechas legais", type: "C" },
      { text: "Declaro o mínimo possível", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você conta mentiras sociais?",
    options: [
      { text: "Evito ao máximo, prefiro ser diplomático", type: "A" },
      { text: "Às vezes, para não magoar", type: "B" },
      { text: "Frequentemente, para facilitar", type: "C" },
      { text: "Sempre, é necessário socialmente", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua honestidade?",
    options: [
      { text: "Muito alta, integridade é meu valor", type: "A" },
      { text: "Alta, me esforço para ser honesto", type: "B" },
      { text: "Moderada, depende da situação", type: "C" },
      { text: "Variável, adapto conforme necessário", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Honesto",
    emoji: "💎",
    description: "Você é altamente honesto e íntegro! A verdade é um valor fundamental para você, mesmo quando inconveniente. Isso gera confiança e respeito.",
    traits: ["Honesto", "Íntegro", "Confiável", "Verdadeiro"],
    strengths: ["Confiança dos outros", "Paz de consciência", "Relacionamentos sólidos", "Reputação impecável"],
    weaknesses: ["Pode ser visto como inflexível", "Verdade às vezes machuca"],
    tips: ["Continue com sua integridade", "Equilibre honestidade com compaixão", "Sua honestidade é rara e valiosa"],
  },
  B: {
    type: "B",
    title: "Honesto",
    emoji: "🌟",
    description: "Você é honesto na maioria das situações. Valoriza a verdade mas às vezes flexibiliza por diplomacia. Um equilíbrio funcional.",
    traits: ["Honesto", "Diplomático", "Equilibrado", "Confiável"],
    strengths: ["Boa reputação", "Relacionamentos de confiança", "Equilíbrio entre verdade e tato"],
    weaknesses: ["Algumas áreas podem melhorar"],
    tips: ["Fortaleça sua integridade", "Honestidade com compaixão é o ideal", "Pequenas mentiras podem crescer"],
  },
  C: {
    type: "C",
    title: "Honestidade Variável",
    emoji: "⚖️",
    description: "Sua honestidade varia conforme a situação. Você flexibiliza a verdade com frequência, o que pode estar afetando sua integridade e relacionamentos.",
    traits: ["Adaptável", "Flexível demais", "Situacional", "Inconsistente"],
    strengths: ["Adaptabilidade social"],
    weaknesses: ["Confiança pode ser comprometida", "Autoengano possível", "Integridade questionável"],
    tips: ["Reflita sobre o impacto das mentiras", "Honestidade constrói, mentira destrói", "Considere fortalecer sua integridade"],
  },
  D: {
    type: "D",
    title: "Honestidade Baixa",
    emoji: "😔",
    description: "Você tem baixa honestidade, mentindo ou omitindo frequentemente. Isso pode estar afetando relacionamentos e sua própria paz interior.",
    traits: ["Desonesto", "Manipulador", "Inconsistente", "Não confiável"],
    strengths: ["Habilidade social (às custas de outros)"],
    weaknesses: ["Relacionamentos comprometidos", "Confiança inexistente", "Possível vazio interior"],
    tips: ["Reflita sobre por que mente tanto", "Honestidade liberta", "Considere os custos das mentiras a longo prazo"],
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
