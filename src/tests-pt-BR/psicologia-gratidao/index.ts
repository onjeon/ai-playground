// Teste de Gratidão
// Descubra seu nível de gratidão e apreciação!

export const questions = [
  {
    id: 1,
    question: "Com que frequência você sente gratidão pelas coisas boas da vida?",
    options: [
      { text: "Diariamente, é um hábito", type: "A" },
      { text: "Frequentemente, quando paro para pensar", type: "B" },
      { text: "Às vezes, em momentos especiais", type: "C" },
      { text: "Raramente penso nisso", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você expressa agradecimento às pessoas ao seu redor?",
    options: [
      { text: "Sim, sempre que apropriado", type: "A" },
      { text: "Frequentemente, para coisas importantes", type: "B" },
      { text: "Às vezes, quando lembro", type: "C" },
      { text: "Raramente, não é meu jeito", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você consegue encontrar algo positivo mesmo em dias difíceis?",
    options: [
      { text: "Sim, sempre há algo pelo que agradecer", type: "A" },
      { text: "Geralmente consigo ver o lado bom", type: "B" },
      { text: "Tenho dificuldade em dias ruins", type: "C" },
      { text: "Não, dias ruins são só ruins", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você aprecia as pequenas coisas da vida?",
    options: [
      { text: "Muito, são o que mais importa", type: "A" },
      { text: "Sim, tento prestar atenção nelas", type: "B" },
      { text: "Às vezes, quando estão muito evidentes", type: "C" },
      { text: "Não, foco em coisas maiores", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você mantém um diário de gratidão ou prática similar?",
    options: [
      { text: "Sim, é parte da minha rotina", type: "A" },
      { text: "Às vezes pratico algum exercício de gratidão", type: "B" },
      { text: "Já tentei mas não mantive", type: "C" },
      { text: "Nunca fiz isso", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você se compara com quem tem menos para se sentir grato?",
    options: [
      { text: "Sim, mas também agradeço sem comparar", type: "A" },
      { text: "Às vezes, ajuda a ter perspectiva", type: "B" },
      { text: "Não muito, foco mais em mim", type: "C" },
      { text: "Geralmente me comparo com quem tem mais", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você agradece mentalmente antes de refeições ou ao deitar?",
    options: [
      { text: "Sim, tenho esse ritual", type: "A" },
      { text: "Às vezes, quando lembro", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Nunca", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você reconhece e agradece o trabalho de pessoas que te servem?",
    options: [
      { text: "Sempre, com atenção e respeito", type: "A" },
      { text: "Geralmente agradeço", type: "B" },
      { text: "Às vezes, quando é algo especial", type: "C" },
      { text: "Não presto muita atenção", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você sente gratidão por sua saúde?",
    options: [
      { text: "Sim, todos os dias", type: "A" },
      { text: "Frequentemente, especialmente quando vejo doentes", type: "B" },
      { text: "Às vezes, não penso muito nisso", type: "C" },
      { text: "Só quando estou doente", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você envia mensagens de agradecimento espontâneas?",
    options: [
      { text: "Sim, frequentemente", type: "A" },
      { text: "Às vezes, quando algo me inspira", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Nunca", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você agradece por experiências difíceis que te ensinaram algo?",
    options: [
      { text: "Sim, agradeço pelo crescimento", type: "A" },
      { text: "Às vezes consigo ver dessa forma", type: "B" },
      { text: "Raramente, ainda sinto ressentimento", type: "C" },
      { text: "Não, experiências ruins são só ruins", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua relação com gratidão?",
    options: [
      { text: "É central na minha vida", type: "A" },
      { text: "Importante, pratico quando posso", type: "B" },
      { text: "Poderia melhorar nessa área", type: "C" },
      { text: "Não penso muito sobre isso", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Grato",
    emoji: "🙏",
    description: "Você tem alto nível de gratidão! A apreciação pelas coisas boas da vida é central em sua existência. Isso contribui muito para sua felicidade e bem-estar.",
    traits: ["Grato", "Positivo", "Apreciativo", "Contente"],
    strengths: ["Maior felicidade", "Melhor saúde mental", "Relacionamentos mais fortes", "Resiliência"],
    weaknesses: ["Pode parecer ingênuo para céticos", "Pode ignorar problemas reais"],
    tips: ["Continue cultivando gratidão", "Compartilhe essa perspectiva com outros", "Equilibre gratidão com ação para melhorar"],
  },
  B: {
    type: "B",
    title: "Gratidão Moderada",
    emoji: "😊",
    description: "Você tem boa capacidade de gratidão. Aprecia as coisas boas da vida, especialmente quando para para pensar. Há espaço para desenvolver mais essa qualidade.",
    traits: ["Apreciativo", "Equilibrado", "Consciente", "Positivo"],
    strengths: ["Boa perspectiva de vida", "Capacidade de apreciação", "Equilíbrio emocional"],
    weaknesses: ["Poderia praticar mais regularmente", "Às vezes foca mais nos problemas"],
    tips: ["Estabeleça uma prática diária de gratidão", "Expresse mais agradecimento aos outros", "Foque nas pequenas coisas"],
  },
  C: {
    type: "C",
    title: "Gratidão em Desenvolvimento",
    emoji: "🌱",
    description: "Sua capacidade de gratidão pode ser mais desenvolvida. Você tende a focar mais nos problemas do que nas bênçãos. Cultivar gratidão pode transformar sua vida.",
    traits: ["Focado em problemas", "Prático", "Crítico", "Potencial"],
    strengths: ["Senso de realidade", "Identificação de problemas"],
    weaknesses: ["Pode perder alegrias da vida", "Felicidade comprometida", "Foco excessivo no negativo"],
    tips: ["Comece um diário de gratidão simples", "Liste 3 coisas boas antes de dormir", "Pratique dizer obrigado mais frequentemente"],
  },
  D: {
    type: "D",
    title: "Baixa Gratidão",
    emoji: "😔",
    description: "Você tem baixo nível de gratidão, focando mais no que falta do que no que tem. Isso pode estar afetando sua felicidade e bem-estar. Cultivar gratidão pode ajudar muito.",
    traits: ["Focado no negativo", "Insatisfeito", "Crítico", "Carente"],
    strengths: ["Potencial de melhoria com prática"],
    weaknesses: ["Felicidade reduzida", "Dificuldade em apreciar a vida", "Relacionamentos podem sofrer"],
    tips: ["Pesquisas mostram que gratidão pode ser desenvolvida", "Comece com algo muito simples", "Considere que pode estar ligado a outros temas emocionais"],
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
