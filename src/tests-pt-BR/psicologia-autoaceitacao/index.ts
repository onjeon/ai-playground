// Teste de Autoaceitação
// Descubra seu nível de autoaceitação!

export const questions = [
  {
    id: 1,
    question: "Você aceita suas imperfeições?",
    options: [
      { text: "Sim, fazem parte de quem sou", type: "A" },
      { text: "Geralmente aceito, com trabalho", type: "B" },
      { text: "Tenho dificuldade em aceitar defeitos", type: "C" },
      { text: "Não, me odeio por elas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você é gentil consigo mesmo quando erra?",
    options: [
      { text: "Sim, me trato com compaixão", type: "A" },
      { text: "Tento ser, nem sempre consigo", type: "B" },
      { text: "Sou duro comigo na maioria das vezes", type: "C" },
      { text: "Me ataco e critico severamente", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você se compara negativamente com outros?",
    options: [
      { text: "Raramente, valorizo minha jornada", type: "A" },
      { text: "Às vezes, mas tento evitar", type: "B" },
      { text: "Frequentemente me sinto inferior", type: "C" },
      { text: "Sempre, nunca sou bom o suficiente", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você aceita seu corpo como ele é?",
    options: [
      { text: "Sim, me cuido com amor e aceitação", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Tenho muita dificuldade em aceitar", type: "C" },
      { text: "Não, detesto meu corpo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você aceita sua história e seu passado?",
    options: [
      { text: "Sim, me trouxe até aqui", type: "A" },
      { text: "Geralmente, com algumas ressalvas", type: "B" },
      { text: "Tenho dificuldade, muito arrependimento", type: "C" },
      { text: "Não, me envergonho do meu passado", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você se sente digno de amor e respeito?",
    options: [
      { text: "Absolutamente", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Tenho dúvidas frequentes", type: "C" },
      { text: "Não, não mereço", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você aceita suas emoções sem julgamento?",
    options: [
      { text: "Sim, todas são válidas", type: "A" },
      { text: "Tento aceitar, às vezes julgo", type: "B" },
      { text: "Julgo muitas das minhas emoções", type: "C" },
      { text: "Me critico por sentir certas coisas", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você sente que precisa provar seu valor constantemente?",
    options: [
      { text: "Não, sei meu valor independente de provas", type: "A" },
      { text: "Às vezes sinto essa necessidade", type: "B" },
      { text: "Frequentemente, preciso de validação", type: "C" },
      { text: "Sempre, nunca me sinto suficiente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você aceita suas limitações?",
    options: [
      { text: "Sim, ninguém pode tudo", type: "A" },
      { text: "Geralmente aceito", type: "B" },
      { text: "Tenho dificuldade, me cobro demais", type: "C" },
      { text: "Não, deveria ser capaz de tudo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você consegue celebrar quem você é?",
    options: [
      { text: "Sim, me orgulho de mim", type: "A" },
      { text: "Às vezes consigo celebrar", type: "B" },
      { text: "Raramente, foco mais nos defeitos", type: "C" },
      { text: "Nunca, não há nada para celebrar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você se perdoa por erros passados?",
    options: [
      { text: "Sim, errar é humano", type: "A" },
      { text: "Geralmente consigo me perdoar", type: "B" },
      { text: "Tenho muita dificuldade em me perdoar", type: "C" },
      { text: "Nunca, carrego culpa sempre", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua relação consigo mesmo?",
    options: [
      { text: "Amorosa e compassiva", type: "A" },
      { text: "Razoável, com espaço para melhorar", type: "B" },
      { text: "Crítica e difícil", type: "C" },
      { text: "Hostil, não gosto de mim", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Alta Autoaceitação",
    emoji: "💖",
    description: "Você tem alta autoaceitação! Se aceita como é, com imperfeições e qualidades. Trata-se com compaixão e reconhece seu valor inerente.",
    traits: ["Autocompassivo", "Autoaceitador", "Equilibrado", "Amoroso consigo"],
    strengths: ["Saúde mental sólida", "Resiliência", "Relacionamentos saudáveis", "Bem-estar"],
    weaknesses: ["Pode parecer presunçoso para alguns", "Pode não ver necessidade de mudança"],
    tips: ["Continue cultivando amor próprio", "Ajude outros a se aceitarem", "Mantenha equilíbrio entre aceitação e crescimento"],
  },
  B: {
    type: "B",
    title: "Autoaceitação em Desenvolvimento",
    emoji: "🌸",
    description: "Você está desenvolvendo autoaceitação. Há momentos de aceitação e momentos de autocrítica. Está no caminho certo.",
    traits: ["Em progresso", "Consciente", "Esforçado", "Crescendo"],
    strengths: ["Consciência da jornada", "Capacidade de melhora", "Momentos de autocompaixão"],
    weaknesses: ["Autocrítica ocasional", "Comparação com outros", "Dificuldade em celebrar-se"],
    tips: ["Pratique autocompaixão diariamente", "Celebre pequenas vitórias", "Lembre-se que é uma jornada"],
  },
  C: {
    type: "C",
    title: "Dificuldade de Autoaceitação",
    emoji: "💔",
    description: "Você tem dificuldade em se aceitar. A autocrítica é frequente e intensa. Isso está afetando sua qualidade de vida e relacionamentos.",
    traits: ["Autocrítico", "Perfeccionista negativo", "Insatisfeito", "Duro consigo"],
    strengths: ["Desejo de melhorar", "Padrões elevados"],
    weaknesses: ["Saúde mental afetada", "Felicidade reduzida", "Autoestima baixa"],
    tips: ["Busque ajuda de um psicólogo", "Autocompaixão pode ser aprendida", "Você merece se tratar melhor"],
  },
  D: {
    type: "D",
    title: "Autorrejeição",
    emoji: "🆘",
    description: "Você está em estado de autorrejeição. A relação consigo mesmo é hostil e causa muito sofrimento. Ajuda profissional é urgente e necessária.",
    traits: ["Autodepreciativo", "Hostil consigo", "Em sofrimento", "Rejeitador de si"],
    strengths: ["Reconhecimento da necessidade de mudança"],
    weaknesses: ["Grande sofrimento", "Vida severamente afetada", "Possível depressão"],
    tips: ["Procure um profissional de saúde mental urgentemente", "Isso pode ser tratado", "Você merece amor, inclusive de si mesmo"],
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
