// Teste de Satisfação na Carreira
// Descubra como está sua relação com sua carreira!

export const questions = [
  {
    id: 1,
    question: "Você se sente realizado com seu trabalho atual?",
    options: [
      { text: "Sim, amo o que faço", type: "A" },
      { text: "Em grande parte, sim", type: "B" },
      { text: "Mais ou menos, tem seus problemas", type: "C" },
      { text: "Não, estou infeliz profissionalmente", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Seu trabalho está alinhado com seus valores?",
    options: [
      { text: "Totalmente alinhado", type: "A" },
      { text: "Em grande parte", type: "B" },
      { text: "Parcialmente", type: "C" },
      { text: "Não, trabalho só pelo dinheiro", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você vê propósito no que faz?",
    options: [
      { text: "Sim, meu trabalho tem significado", type: "A" },
      { text: "Na maior parte do tempo", type: "B" },
      { text: "Às vezes me pergunto o sentido", type: "C" },
      { text: "Não, é só um emprego", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você se sente domingo à noite pensando na segunda?",
    options: [
      { text: "Animado ou neutro", type: "A" },
      { text: "Normal, pronto para a semana", type: "B" },
      { text: "Ansioso e desanimado", type: "C" },
      { text: "Terrível, temo a semana", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você tem oportunidades de crescimento onde está?",
    options: [
      { text: "Sim, muitas possibilidades", type: "A" },
      { text: "Algumas oportunidades", type: "B" },
      { text: "Poucas, me sinto estagnado", type: "C" },
      { text: "Nenhuma, estou preso", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Seu trabalho usa suas habilidades e talentos?",
    options: [
      { text: "Sim, plenamente", type: "A" },
      { text: "Em boa parte", type: "B" },
      { text: "Parcialmente", type: "C" },
      { text: "Não, sinto meu potencial desperdiçado", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O ambiente de trabalho é saudável?",
    options: [
      { text: "Sim, excelente ambiente", type: "A" },
      { text: "Bom, com alguns desafios", type: "B" },
      { text: "Problemático em vários aspectos", type: "C" },
      { text: "Tóxico, me faz mal", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você está satisfeito com sua remuneração?",
    options: [
      { text: "Sim, sou bem recompensado", type: "A" },
      { text: "Razoavelmente satisfeito", type: "B" },
      { text: "Poderia ser melhor", type: "C" },
      { text: "Não, sou mal pago pelo que faço", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você tem equilíbrio entre trabalho e vida pessoal?",
    options: [
      { text: "Sim, consigo equilibrar bem", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Tenho dificuldade com isso", type: "C" },
      { text: "Não, trabalho consome minha vida", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você se sente valorizado no trabalho?",
    options: [
      { text: "Sim, muito valorizado", type: "A" },
      { text: "Em geral, sim", type: "B" },
      { text: "Não me sinto muito reconhecido", type: "C" },
      { text: "Não, sou ignorado ou desvalorizado", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você pensou em mudar de carreira recentemente?",
    options: [
      { text: "Não, estou onde quero estar", type: "A" },
      { text: "Ocasionalmente penso", type: "B" },
      { text: "Frequentemente considero", type: "C" },
      { text: "Constantemente, quero sair o quanto antes", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua situação profissional?",
    options: [
      { text: "Muito satisfatória", type: "A" },
      { text: "Satisfatória com ressalvas", type: "B" },
      { text: "Insatisfatória", type: "C" },
      { text: "Muito insatisfatória, em crise", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Realização Profissional",
    emoji: "🌟",
    description: "Você está realizado profissionalmente! Seu trabalho tem propósito, está alinhado com seus valores e você se sente valorizado. Continue cultivando essa satisfação.",
    traits: ["Realizado", "Alinhado", "Motivado", "Satisfeito"],
    strengths: ["Alta satisfação", "Propósito claro", "Equilíbrio saudável", "Crescimento"],
    weaknesses: ["Pode se acomodar", "Pode não ver oportunidades fora"],
    tips: ["Continue evoluindo", "Ajude outros a encontrarem realização", "Não se acomode totalmente"],
  },
  B: {
    type: "B",
    title: "Satisfação Moderada",
    emoji: "🌿",
    description: "Você tem satisfação moderada na carreira. Há aspectos positivos mas também áreas que poderiam melhorar. Avalie o que poderia mudar.",
    traits: ["Satisfeito parcialmente", "Consciente", "Funcional", "Com ressalvas"],
    strengths: ["Funcionamento adequado", "Consciência das lacunas", "Base para melhorar"],
    weaknesses: ["Algumas insatisfações", "Potencial não totalmente usado"],
    tips: ["Identifique o que mudaria", "Busque crescimento nas áreas fracas", "Não se acomode com o razoável"],
  },
  C: {
    type: "C",
    title: "Insatisfação Profissional",
    emoji: "😟",
    description: "Você está insatisfeito com sua carreira. Muitos aspectos não estão funcionando e isso está afetando sua qualidade de vida. É hora de avaliar mudanças.",
    traits: ["Insatisfeito", "Estagnado", "Desmotivado", "Questionando"],
    strengths: ["Consciência da insatisfação", "Potencial de mudança"],
    weaknesses: ["Motivação baixa", "Qualidade de vida afetada", "Potencial desperdiçado"],
    tips: ["Avalie seriamente uma mudança", "Busque orientação de carreira", "Você merece trabalhar com satisfação"],
  },
  D: {
    type: "D",
    title: "Crise Profissional",
    emoji: "🆘",
    description: "Você está em crise profissional. Seu trabalho está te fazendo muito mal e afetando sua saúde e vida. Uma mudança significativa pode ser necessária.",
    traits: ["Em crise", "Infeliz", "Esgotado", "Desesperado"],
    strengths: ["Clareza de que algo precisa mudar"],
    weaknesses: ["Saúde mental em risco", "Vida severamente afetada", "Possível burnout"],
    tips: ["Priorize sua saúde mental", "Planeje uma transição", "Nenhum trabalho vale sua saúde"],
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
