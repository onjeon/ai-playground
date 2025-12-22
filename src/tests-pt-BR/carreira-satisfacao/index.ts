// Sua Satisfação Profissional
// Descubra seu nível de satisfação com sua carreira atual!

export const questions = [
  {
    id: 1,
    question: "Você acorda animado para ir trabalhar?",
    options: [
      { text: "Na maioria das vezes, sim!", type: "A" },
      { text: "Frequentemente, com dias melhores e piores", type: "B" },
      { text: "Raramente, vou por obrigação", type: "C" },
      { text: "Nunca, detesto ir trabalhar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você se sente realizado com o que faz?",
    options: [
      { text: "Muito, encontrei minha vocação", type: "A" },
      { text: "Em boa parte sim", type: "B" },
      { text: "Pouco, falta algo", type: "C" },
      { text: "Nada, é só pelo salário", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você se vê fazendo isso por mais 5 anos?",
    options: [
      { text: "Com certeza, é o que quero", type: "A" },
      { text: "Provavelmente sim", type: "B" },
      { text: "Não sei, talvez mude", type: "C" },
      { text: "De jeito nenhum, preciso sair", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você recomendaria sua empresa para amigos?",
    options: [
      { text: "Sim, entusiasticamente", type: "A" },
      { text: "Sim, com algumas ressalvas", type: "B" },
      { text: "Provavelmente não", type: "C" },
      { text: "Nunca, avisaria para ficar longe", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você sente que suas habilidades são bem utilizadas?",
    options: [
      { text: "Sim, estou no meu melhor", type: "A" },
      { text: "Em grande parte sim", type: "B" },
      { text: "Sinto que poderia contribuir mais", type: "C" },
      { text: "Não, estou desperdiçando meu potencial", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como está sua relação com sua liderança?",
    options: [
      { text: "Excelente, tenho apoio e confiança", type: "A" },
      { text: "Boa, funciona bem", type: "B" },
      { text: "Problemática, tem tensões", type: "C" },
      { text: "Péssima, é uma tortura", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você sente que está crescendo profissionalmente?",
    options: [
      { text: "Muito, evoluo constantemente", type: "A" },
      { text: "Sim, em ritmo adequado", type: "B" },
      { text: "Pouco, sinto estagnação", type: "C" },
      { text: "Nada, estou parado há muito tempo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você se sente no domingo à noite?",
    options: [
      { text: "Bem, pronto para a semana", type: "A" },
      { text: "Normal, sem grande ansiedade", type: "B" },
      { text: "Com ansiedade pela segunda-feira", type: "C" },
      { text: "Terrível, síndrome do domingo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você tem orgulho de falar sobre seu trabalho?",
    options: [
      { text: "Muito orgulho, falo com entusiasmo", type: "A" },
      { text: "Sim, gosto do que faço", type: "B" },
      { text: "Indiferente, é só um trabalho", type: "C" },
      { text: "Tenho vergonha ou evito falar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você sente que sua remuneração é justa?",
    options: [
      { text: "Sim, me sinto bem valorizado", type: "A" },
      { text: "Razoável, poderia ser melhor", type: "B" },
      { text: "Não, mereço mais", type: "C" },
      { text: "Totalmente injusta", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Seu trabalho permite equilíbrio com vida pessoal?",
    options: [
      { text: "Sim, tenho ótimo equilíbrio", type: "A" },
      { text: "Na maioria das vezes sim", type: "B" },
      { text: "Difícil, trabalho consome muito", type: "C" },
      { text: "Não tenho vida pessoal por causa do trabalho", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Se pudesse começar de novo, escolheria o mesmo caminho?",
    options: [
      { text: "Sim, sem dúvida!", type: "A" },
      { text: "Provavelmente sim, com ajustes", type: "B" },
      { text: "Não tenho certeza", type: "C" },
      { text: "Não, faria tudo diferente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Satisfeito",
    emoji: "🌟",
    description: "Você está muito satisfeito com sua carreira! Encontrou algo que te realiza, te desafia e te recompensa. Parabéns, isso é raro e precioso.",
    traits: ["Realizado", "Motivado", "Engajado", "Feliz"],
    strengths: ["Alta motivação", "Engajamento genuíno", "Performance elevada", "Equilíbrio"],
    weaknesses: ["Pode se acomodar", "Pode perder outras oportunidades"],
    tips: ["Aproveite e valorize!", "Continue se desenvolvendo", "Ajude outros a encontrarem isso"],
  },
  B: {
    type: "B",
    title: "Satisfeito com Ressalvas",
    emoji: "👍",
    description: "Você está satisfeito na maior parte! Há aspectos a melhorar, mas no geral sua carreira te traz realização. Está em boa posição.",
    traits: ["Satisfeito", "Realista", "Equilibrado", "Consciente"],
    strengths: ["Boa satisfação geral", "Consciência do que pode melhorar"],
    weaknesses: ["Alguns pontos de insatisfação", "Poderia estar ainda melhor"],
    tips: ["Trabalhe nos pontos de melhoria", "Comunique necessidades", "Busque ajustes antes de mudanças drásticas"],
  },
  C: {
    type: "C",
    title: "Insatisfeito",
    emoji: "😔",
    description: "Você está insatisfeito com sua carreira. Vários aspectos não te agradam e isso afeta sua motivação e qualidade de vida. É hora de refletir e agir.",
    traits: ["Insatisfeito", "Desmotivado", "Inquieto", "Buscando mudança"],
    strengths: ["Consciência do problema", "Potencial para mudar"],
    weaknesses: ["Baixa motivação", "Performance possivelmente afetada", "Qualidade de vida comprometida"],
    tips: ["Avalie o que precisa mudar", "Pode ser hora de buscar algo novo", "Não deixe a insatisfação se arrastar"],
  },
  D: {
    type: "D",
    title: "Muito Insatisfeito",
    emoji: "😞",
    description: "Você está muito insatisfeito com sua carreira! Isso está afetando seriamente sua vida. Mudança urgente é necessária para sua saúde e felicidade.",
    traits: ["Muito insatisfeito", "Infeliz", "Desmotivado", "Precisando de mudança"],
    strengths: ["Sabe que algo está errado"],
    weaknesses: ["Qualidade de vida muito baixa", "Saúde mental possivelmente afetada", "Performance comprometida"],
    tips: ["URGENTE: Não continue assim!", "Comece a planejar uma mudança", "Busque ajuda profissional se necessário", "Sua felicidade importa"],
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
