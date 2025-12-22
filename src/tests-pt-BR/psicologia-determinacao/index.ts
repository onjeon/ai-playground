// Teste de Determinação
// Descubra seu nível de determinação e garra!

export const questions = [
  {
    id: 1,
    question: "Quando você define um objetivo, você:",
    options: [
      { text: "Persigo até alcançar, não importa o que", type: "A" },
      { text: "Me esforço muito para alcançar", type: "B" },
      { text: "Tento por um tempo mas posso desistir", type: "C" },
      { text: "Frequentemente mudo de objetivo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Diante de obstáculos grandes, você:",
    options: [
      { text: "Encontro formas de superar", type: "A" },
      { text: "Persisto com determinação", type: "B" },
      { text: "Fico desanimado mas tento", type: "C" },
      { text: "Considero desistir ou mudo de caminho", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você é paciente com objetivos de longo prazo?",
    options: [
      { text: "Sim, sei que boas coisas levam tempo", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Tenho dificuldade com a espera", type: "C" },
      { text: "Preciso de resultados rápidos", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Após um fracasso significativo, você:",
    options: [
      { text: "Analiso, ajusto e tento de novo", type: "A" },
      { text: "Processo e volto a tentar", type: "B" },
      { text: "Fico abalado por muito tempo", type: "C" },
      { text: "Desisto e mudo de direção", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você trabalha duro mesmo quando ninguém vê?",
    options: [
      { text: "Sim, meu compromisso é comigo mesmo", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Às vezes perco a motivação", type: "C" },
      { text: "Preciso de reconhecimento externo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você continua mesmo quando está cansado?",
    options: [
      { text: "Sim, quando o objetivo importa", type: "A" },
      { text: "Geralmente persisto", type: "B" },
      { text: "O cansaço frequentemente me para", type: "C" },
      { text: "Paro assim que canso", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você mantém a disciplina por longos períodos?",
    options: [
      { text: "Sim, disciplina é fundamental", type: "A" },
      { text: "Geralmente consigo manter", type: "B" },
      { text: "Tenho dificuldade em ser consistente", type: "C" },
      { text: "Não consigo manter disciplina", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando outros desistem, você:",
    options: [
      { text: "Continuo, se acredito no objetivo", type: "A" },
      { text: "Avalio e geralmente persisto", type: "B" },
      { text: "Fico em dúvida se devo continuar", type: "C" },
      { text: "Tendo a desistir também", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você sacrifica prazeres imediatos por objetivos maiores?",
    options: [
      { text: "Sim, o futuro vale o sacrifício", type: "A" },
      { text: "Frequentemente faço isso", type: "B" },
      { text: "Tenho dificuldade com isso", type: "C" },
      { text: "Não, vivo o presente", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você já alcançou algo que parecia impossível?",
    options: [
      { text: "Sim, várias vezes através de persistência", type: "A" },
      { text: "Algumas conquistas difíceis", type: "B" },
      { text: "Poucas, geralmente desisti antes", type: "C" },
      { text: "Não, nunca cheguei tão longe", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você se recupera rápido de reveses?",
    options: [
      { text: "Sim, são parte do processo", type: "A" },
      { text: "Razoavelmente rápido", type: "B" },
      { text: "Demoro mas eventualmente volto", type: "C" },
      { text: "Reveses me paralisam", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua determinação?",
    options: [
      { text: "Inabalável, sou pessoa de garra", type: "A" },
      { text: "Alta, me esforço muito", type: "B" },
      { text: "Moderada, depende do objetivo", type: "C" },
      { text: "Baixa, desisto facilmente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Extremamente Determinado",
    emoji: "🔥",
    description: "Você é extremamente determinado! Sua garra te leva a alcançar objetivos que outros considerariam impossíveis. Esta é uma das qualidades mais importantes para o sucesso.",
    traits: ["Determinado", "Incansável", "Focado", "Resiliente"],
    strengths: ["Alcança grandes objetivos", "Supera obstáculos", "Inspira outros", "Resultados extraordinários"],
    weaknesses: ["Pode ignorar sinais de esgotamento", "Pode ser inflexível"],
    tips: ["Continue com sua determinação", "Cuide da saúde no processo", "Saiba quando ajustar o curso"],
  },
  B: {
    type: "B",
    title: "Determinado",
    emoji: "💪",
    description: "Você é determinado e persiste em seus objetivos. Consegue superar dificuldades e alcançar metas importantes, com espaço para fortalecer ainda mais.",
    traits: ["Determinado", "Persistente", "Focado", "Resiliente"],
    strengths: ["Alcança objetivos", "Boa resiliência", "Disciplina funcional"],
    weaknesses: ["Pode melhorar em algumas áreas", "Oscilações ocasionais"],
    tips: ["Fortaleça sua determinação", "Lembre-se de por que começou", "Cada desafio superado fortalece"],
  },
  C: {
    type: "C",
    title: "Determinação Moderada",
    emoji: "🌱",
    description: "Você tem determinação moderada, conseguindo persistir em alguns objetivos mas desistindo de outros. Desenvolver mais garra pode transformar seus resultados.",
    traits: ["Inconsistente", "Variável", "Oscilante", "Potencial"],
    strengths: ["Persistência em algumas áreas", "Potencial de crescimento"],
    weaknesses: ["Objetivos abandonados", "Resultados inconsistentes", "Potencial não realizado"],
    tips: ["Encontre seu porquê forte", "Comece com objetivos menores", "Determinação se desenvolve com prática"],
  },
  D: {
    type: "D",
    title: "Baixa Determinação",
    emoji: "😔",
    description: "Você tem baixa determinação, desistindo facilmente de objetivos. Isso pode estar relacionado a questões mais profundas e está impedindo seu progresso.",
    traits: ["Desistente", "Inconstante", "Sem garra", "Frustrado"],
    strengths: ["Flexibilidade"],
    weaknesses: ["Objetivos nunca alcançados", "Frustração crônica", "Autoestima afetada"],
    tips: ["Explore por que desiste", "Pode haver questões de autoestima envolvidas", "Determinação pode ser desenvolvida com ajuda"],
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
