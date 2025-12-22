// Sua Marca Pessoal Profissional
// Descubra como está sua marca pessoal no mercado!

export const questions = [
  {
    id: 1,
    question: "Você sabe pelo que quer ser conhecido profissionalmente?",
    options: [
      { text: "Sim, tenho posicionamento claro", type: "A" },
      { text: "Tenho uma boa ideia", type: "B" },
      { text: "Mais ou menos, ainda definindo", type: "C" },
      { text: "Não penso nisso", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você é lembrado por alguma expertise específica?",
    options: [
      { text: "Sim, sou referência em algo", type: "A" },
      { text: "Em algumas áreas sim", type: "B" },
      { text: "Não tenho certeza", type: "C" },
      { text: "Não, sou genérico", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual sua presença em redes profissionais?",
    options: [
      { text: "Forte, posto e engajo regularmente", type: "A" },
      { text: "Boa, tenho perfil ativo", type: "B" },
      { text: "Básica, perfil existe mas inativo", type: "C" },
      { text: "Inexistente ou abandonada", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Pessoas te procuram por sua expertise?",
    options: [
      { text: "Frequentemente, sou procurado", type: "A" },
      { text: "Às vezes, quando sabem o que faço", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Nunca, não sou conhecido", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você produz conteúdo sobre sua área?",
    options: [
      { text: "Sim, regularmente (posts, artigos, vídeos)", type: "A" },
      { text: "Às vezes, quando tenho algo a dizer", type: "B" },
      { text: "Raramente ou nunca", type: "C" },
      { text: "Não, consumo apenas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você palestra, ensina ou compartilha conhecimento publicamente?",
    options: [
      { text: "Sim, frequentemente", type: "A" },
      { text: "Às vezes, quando surge oportunidade", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Nunca", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como está sua rede de contatos profissionais?",
    options: [
      { text: "Ampla, diversa e cultivada", type: "A" },
      { text: "Boa, com conexões relevantes", type: "B" },
      { text: "Básica, colegas próximos apenas", type: "C" },
      { text: "Praticamente inexistente", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você já foi indicado para oportunidades por sua reputação?",
    options: [
      { text: "Frequentemente, oportunidades me encontram", type: "A" },
      { text: "Algumas vezes sim", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Nunca, sempre busco ativamente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Se pesquisarem seu nome no Google, o que encontram?",
    options: [
      { text: "Conteúdo profissional relevante sobre mim", type: "A" },
      { text: "Meu LinkedIn e algumas menções", type: "B" },
      { text: "Quase nada profissional", type: "C" },
      { text: "Nada ou coisas que preferia não mostrar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você cuida da consistência da sua imagem profissional?",
    options: [
      { text: "Sim, é estratégico e consistente", type: "A" },
      { text: "Razoavelmente, presto atenção", type: "B" },
      { text: "Não muito, é natural", type: "C" },
      { text: "Não penso nisso", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você diferencia seu posicionamento de outros na sua área?",
    options: [
      { text: "Sim, tenho posicionamento único", type: "A" },
      { text: "Tento me diferenciar em alguns aspectos", type: "B" },
      { text: "Sou similar aos outros", type: "C" },
      { text: "Não penso em diferenciação", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua marca pessoal profissional?",
    options: [
      { text: "Forte e reconhecida no mercado", type: "A" },
      { text: "Em construção, crescendo", type: "B" },
      { text: "Fraca ou inexistente", type: "C" },
      { text: "Nunca pensei nisso", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Marca Pessoal Forte",
    emoji: "🌟",
    description: "Você tem marca pessoal forte! É reconhecido, procurado e tem posicionamento claro. Isso abre portas e gera oportunidades naturalmente.",
    traits: ["Reconhecido", "Posicionado", "Influente", "Diferenciado"],
    strengths: ["Oportunidades te encontram", "Referência em algo", "Rede forte", "Visibilidade"],
    weaknesses: ["Manter relevância exige esforço constante"],
    tips: ["Continue cultivando!", "Evolua seu posicionamento", "Ajude a construir marcas de outros"],
  },
  B: {
    type: "B",
    title: "Marca em Construção",
    emoji: "📈",
    description: "Sua marca pessoal está em construção! Você tem consciência da importância e está desenvolvendo. Continue investindo.",
    traits: ["Em desenvolvimento", "Consciente", "Crescendo", "Investindo"],
    strengths: ["Consciência da importância", "Base para crescer"],
    weaknesses: ["Ainda não é referência", "Precisa de mais visibilidade"],
    tips: ["Acelere o desenvolvimento", "Produza mais conteúdo", "Expanda sua rede", "Defina melhor seu posicionamento"],
  },
  C: {
    type: "C",
    title: "Marca Pessoal Fraca",
    emoji: "🌱",
    description: "Sua marca pessoal é fraca ou inexistente. Você não é conhecido ou reconhecido no mercado. Isso limita oportunidades.",
    traits: ["Desconhecido", "Genérico", "Sem posicionamento", "Invisível"],
    strengths: ["Pode começar a construir"],
    weaknesses: ["Não é lembrado", "Não é procurado", "Oportunidades limitadas"],
    tips: ["Comece a investir em marca pessoal!", "Defina pelo que quer ser conhecido", "Produza conteúdo e construa rede"],
  },
  D: {
    type: "D",
    title: "Sem Marca Pessoal",
    emoji: "❓",
    description: "Você não tem marca pessoal profissional! É completamente desconhecido no mercado. Isso é uma desvantagem séria na carreira moderna.",
    traits: ["Inexistente", "Invisível", "Sem presença", "Oportunidades perdidas"],
    strengths: ["Tela em branco para construir"],
    weaknesses: ["Totalmente desconhecido", "Depende 100% de processos formais", "Muito limitado"],
    tips: ["IMPORTANTE: Marca pessoal é essencial hoje!", "Comece pelo básico: LinkedIn atualizado", "Você está perdendo oportunidades por ser invisível"],
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
