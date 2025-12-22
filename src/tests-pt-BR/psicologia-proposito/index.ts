// Teste de Propósito de Vida
// Descubra seu senso de propósito!

export const questions = [
  {
    id: 1,
    question: "Você sente que sua vida tem significado?",
    options: [
      { text: "Sim, tenho clareza do meu propósito", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Às vezes me pergunto qual é", type: "C" },
      { text: "Não, minha vida parece sem sentido", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você acorda com motivação para o dia?",
    options: [
      { text: "Sim, tenho razões para levantar", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Às vezes, depende do dia", type: "C" },
      { text: "Não, não vejo motivo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você sabe o que quer deixar como legado?",
    options: [
      { text: "Sim, tenho clareza do impacto que quero ter", type: "A" },
      { text: "Tenho uma ideia", type: "B" },
      { text: "Nunca pensei muito nisso", type: "C" },
      { text: "Não, minha vida não deixará marca", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Suas atividades diárias se conectam com algo maior?",
    options: [
      { text: "Sim, tudo tem significado", type: "A" },
      { text: "Boa parte sim", type: "B" },
      { text: "Pouco, é só rotina", type: "C" },
      { text: "Não, é só sobrevivência", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você sente que contribui para algo importante?",
    options: [
      { text: "Sim, meu trabalho/ações importam", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Às vezes duvido", type: "C" },
      { text: "Não, sou insignificante", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você tem objetivos de vida claros?",
    options: [
      { text: "Sim, sei para onde estou indo", type: "A" },
      { text: "Tenho alguns objetivos", type: "B" },
      { text: "Estou meio perdido", type: "C" },
      { text: "Não, vivo sem direção", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você se sente realizado com sua trajetória?",
    options: [
      { text: "Sim, estou no caminho certo", type: "A" },
      { text: "Em boa parte", type: "B" },
      { text: "Tenho muitas dúvidas", type: "C" },
      { text: "Não, sinto que desperdicei minha vida", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Seus valores guiam suas decisões?",
    options: [
      { text: "Sim, vivo alinhado com meus valores", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Às vezes me perco", type: "C" },
      { text: "Não sei quais são meus valores", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você sente que está usando seus talentos?",
    options: [
      { text: "Sim, estou no meu elemento", type: "A" },
      { text: "Boa parte deles", type: "B" },
      { text: "Pouco, sinto potencial desperdiçado", type: "C" },
      { text: "Não, meus talentos estão enterrados", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você se sente parte de algo maior que você?",
    options: [
      { text: "Sim, faço parte de uma missão maior", type: "A" },
      { text: "De algumas coisas importantes", type: "B" },
      { text: "Pouco, me sinto isolado", type: "C" },
      { text: "Não, estou sozinho nisso", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você encontra significado mesmo em dificuldades?",
    options: [
      { text: "Sim, tudo tem propósito", type: "A" },
      { text: "Às vezes consigo ver", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Não, dificuldades são só sofrimento", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria seu senso de propósito?",
    options: [
      { text: "Forte e claro", type: "A" },
      { text: "Presente, em construção", type: "B" },
      { text: "Fraco, em busca", type: "C" },
      { text: "Inexistente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Propósito Claro",
    emoji: "🎯",
    description: "Você tem senso de propósito claro! Sabe por que vive, o que quer alcançar e como contribuir. Isso traz significado e motivação.",
    traits: ["Direcionado", "Motivado", "Significativo", "Realizado"],
    strengths: ["Alta motivação", "Resiliência", "Satisfação com a vida", "Direção clara"],
    weaknesses: ["Pode ser inflexível sobre o caminho"],
    tips: ["Continue vivendo com propósito", "Esteja aberto a evoluções do propósito", "Ajude outros a encontrarem o deles"],
  },
  B: {
    type: "B",
    title: "Propósito em Construção",
    emoji: "🌱",
    description: "Você tem senso de propósito em construção. Há direção e significado, com espaço para clarear e fortalecer ainda mais.",
    traits: ["Buscando", "Direcionado", "Em evolução", "Consciente"],
    strengths: ["Boa base de significado", "Abertura para crescimento"],
    weaknesses: ["Algumas áreas ainda nebulosas"],
    tips: ["Continue explorando seu propósito", "Pergunte-se o que te faz sentir vivo", "Propósito evolui com a vida"],
  },
  C: {
    type: "C",
    title: "Falta de Propósito",
    emoji: "🔍",
    description: "Você está com falta de propósito claro. A vida pode parecer sem direção ou significado. Encontrar propósito pode transformar sua experiência.",
    traits: ["Perdido", "Sem direção", "Questionando", "Buscando"],
    strengths: ["Consciência da busca", "Potencial de descoberta"],
    weaknesses: ["Desmotivação", "Vida pode parecer vazia", "Satisfação reduzida"],
    tips: ["Explore o que te dá significado", "Experimente coisas novas", "Propósito pode ser encontrado em qualquer fase"],
  },
  D: {
    type: "D",
    title: "Crise de Propósito",
    emoji: "🆘",
    description: "Você está em crise de propósito, com a vida parecendo sem sentido. Isso é sério e pode estar relacionado a questões de saúde mental. Ajuda é importante.",
    traits: ["Sem propósito", "Desesperançado", "Vazio", "Em crise"],
    strengths: ["Reconhecimento do problema"],
    weaknesses: ["Grande sofrimento existencial", "Desmotivação severa", "Possível depressão"],
    tips: ["Busque ajuda profissional", "Falta de propósito pode ser sintoma de depressão", "Propósito pode ser reconstruído"],
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
