// Seu Nível de Perfeccionismo
// Descubra como o perfeccionismo afeta seu trabalho!

export const questions = [
  {
    id: 1,
    question: "Quando você termina uma tarefa, você:",
    options: [
      { text: "Entrego quando está bom o suficiente", type: "A" },
      { text: "Reviso uma vez e entrego", type: "B" },
      { text: "Reviso várias vezes até ficar bom", type: "C" },
      { text: "Nunca está perfeito, sempre encontro algo para melhorar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você lida com pequenos erros no seu trabalho?",
    options: [
      { text: "Normal, erros acontecem", type: "A" },
      { text: "Corrijo e sigo em frente", type: "B" },
      { text: "Me incomodam bastante", type: "C" },
      { text: "Me torturam, não tolero erros", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você costuma perder prazos por querer fazer perfeito?",
    options: [
      { text: "Nunca, prazo é mais importante", type: "A" },
      { text: "Raramente, sei quando parar", type: "B" },
      { text: "Às vezes, quando é importante", type: "C" },
      { text: "Frequentemente, não consigo entregar imperfeito", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você reage quando alguém critica seu trabalho?",
    options: [
      { text: "Agradeço e uso para melhorar", type: "A" },
      { text: "Avalio se faz sentido e ajusto", type: "B" },
      { text: "Fico chateado mas aceito", type: "C" },
      { text: "Devastado, deveria estar perfeito", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você delega tarefas facilmente?",
    options: [
      { text: "Sim, confio nos outros", type: "A" },
      { text: "Sim, com orientação adequada", type: "B" },
      { text: "Tenho dificuldade, ninguém faz como eu", type: "C" },
      { text: "Quase nunca, só eu faço direito", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quanto tempo você gasta em detalhes que talvez ninguém note?",
    options: [
      { text: "Pouco, foco no que importa", type: "A" },
      { text: "O necessário para qualidade", type: "B" },
      { text: "Bastante, detalhes me importam", type: "C" },
      { text: "Muito tempo, mesmo que ninguém veja", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você procrastina por medo de não fazer perfeito?",
    options: [
      { text: "Não, começo sem me preocupar", type: "A" },
      { text: "Raramente, geralmente começo bem", type: "B" },
      { text: "Às vezes, quando é algo importante", type: "C" },
      { text: "Frequentemente, paraliso com a pressão", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você se sente sobre 'feito é melhor que perfeito'?",
    options: [
      { text: "Concordo totalmente, é meu lema", type: "A" },
      { text: "Concordo na maioria das vezes", type: "B" },
      { text: "Discordo em muitos casos", type: "C" },
      { text: "Discordo completamente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você fica ruminando sobre erros do passado?",
    options: [
      { text: "Não, aprendo e sigo em frente", type: "A" },
      { text: "Às vezes, mas supero rápido", type: "B" },
      { text: "Frequentemente, me incomodam", type: "C" },
      { text: "Sempre, me assombram", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Seus padrões de qualidade são:",
    options: [
      { text: "Realistas e alcançáveis", type: "A" },
      { text: "Altos mas razoáveis", type: "B" },
      { text: "Muito altos, difíceis de atingir", type: "C" },
      { text: "Impossíveis, nunca estou satisfeito", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você compara constantemente seu trabalho com o dos outros?",
    options: [
      { text: "Não, foco no meu próprio padrão", type: "A" },
      { text: "Às vezes, como referência", type: "B" },
      { text: "Frequentemente, quero ser o melhor", type: "C" },
      { text: "Sempre, e nunca me sinto suficiente", type: "D" },
    ],
  },
  {
    id: 12,
    question: "O perfeccionismo te ajuda ou atrapalha mais?",
    options: [
      { text: "Nem tenho, sou pragmático", type: "A" },
      { text: "Ajuda mais, é bem dosado", type: "B" },
      { text: "Às vezes atrapalha", type: "C" },
      { text: "Atrapalha muito, é um problema", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pragmático",
    emoji: "⚡",
    description: "Você é pragmático e orientado a resultados! Não se perde em detalhes desnecessários. 'Feito é melhor que perfeito' é seu lema.",
    traits: ["Pragmático", "Eficiente", "Realista", "Rápido"],
    strengths: ["Alta produtividade", "Entregas consistentes", "Não procrastina", "Foco no que importa"],
    weaknesses: ["Pode entregar abaixo do padrão às vezes", "Pode parecer descuidado"],
    tips: ["Mantenha qualidade mínima", "Em alguns casos, vale caprichar mais", "Equilibre velocidade com qualidade"],
  },
  B: {
    type: "B",
    title: "Perfeccionismo Saudável",
    emoji: "✨",
    description: "Você tem perfeccionismo saudável! Busca excelência mas sabe a hora de parar. Equilibra qualidade com entrega de forma admirável.",
    traits: ["Equilibrado", "Exigente saudável", "Eficiente", "Qualidade"],
    strengths: ["Alta qualidade de trabalho", "Entregas no prazo", "Padrões alcançáveis", "Satisfação profissional"],
    weaknesses: ["Às vezes pode querer mais"],
    tips: ["Está no ponto ideal!", "Mantenha esse equilíbrio", "Ajude outros a encontrar esse ponto"],
  },
  C: {
    type: "C",
    title: "Perfeccionista Exigente",
    emoji: "🔍",
    description: "Seu perfeccionismo está elevado. Você busca excelência mas frequentemente isso vira problema. Prazos, delegação e satisfação sofrem.",
    traits: ["Exigente demais", "Detalhista", "Insatisfeito", "Lento"],
    strengths: ["Trabalho de alta qualidade quando entrega"],
    weaknesses: ["Prazos em risco", "Dificuldade em delegar", "Procrastinação", "Estresse"],
    tips: ["Seus padrões precisam ser mais realistas", "Aprenda a aceitar 'bom o suficiente'", "Perfeccionismo excessivo é contraproducente"],
  },
  D: {
    type: "D",
    title: "Perfeccionismo Disfuncional",
    emoji: "🆘",
    description: "Seu perfeccionismo está em nível disfuncional! Paralisia, procrastinação e insatisfação crônica dominam. Isso precisa de atenção urgente.",
    traits: ["Paralisado", "Nunca satisfeito", "Ansioso", "Disfuncional"],
    strengths: ["Potencial para alta qualidade (se conseguir entregar)"],
    weaknesses: ["Paralisia por análise", "Saúde mental em risco", "Produtividade muito baixa", "Insatisfação crônica"],
    tips: ["IMPORTANTE: Busque ajuda profissional", "Perfeccionismo extremo é tratável", "Sua qualidade de vida está em jogo"],
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
