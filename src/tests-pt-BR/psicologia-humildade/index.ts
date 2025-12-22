// Teste de Humildade
// Descubra seu nível de humildade!

export const questions = [
  {
    id: 1,
    question: "Você reconhece suas limitações?",
    options: [
      { text: "Sim, ninguém sabe tudo", type: "A" },
      { text: "Geralmente reconheço", type: "B" },
      { text: "Tenho dificuldade em admitir", type: "C" },
      { text: "Não gosto de mostrar fraquezas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você aceita críticas construtivas?",
    options: [
      { text: "Sim, agradeço feedbacks", type: "A" },
      { text: "Geralmente aceito bem", type: "B" },
      { text: "Fico na defensiva às vezes", type: "C" },
      { text: "Não gosto de ser criticado", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você dá crédito aos outros por suas contribuições?",
    options: [
      { text: "Sempre, mérito deve ser compartilhado", type: "A" },
      { text: "Geralmente dou crédito", type: "B" },
      { text: "Às vezes esqueço de reconhecer", type: "C" },
      { text: "Prefiro ficar com o crédito", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você se acha melhor que os outros?",
    options: [
      { text: "Não, todos têm valor igual", type: "A" },
      { text: "Não em geral, todos têm qualidades", type: "B" },
      { text: "Às vezes me sinto superior", type: "C" },
      { text: "Sim, sou especial", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você pede desculpas quando erra?",
    options: [
      { text: "Sempre, é o correto", type: "A" },
      { text: "Geralmente peço", type: "B" },
      { text: "Tenho dificuldade em pedir", type: "C" },
      { text: "Raramente, não gosto de me rebaixar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você aprende com pessoas de todos os níveis?",
    options: [
      { text: "Sim, qualquer um pode me ensinar algo", type: "A" },
      { text: "Geralmente estou aberto", type: "B" },
      { text: "Prefiro aprender com especialistas", type: "C" },
      { text: "Não tenho muito a aprender", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você fala mais sobre si ou ouve os outros?",
    options: [
      { text: "Equilibro, mas priorizo ouvir", type: "A" },
      { text: "Tento equilibrar", type: "B" },
      { text: "Falo mais sobre mim", type: "C" },
      { text: "Adoro falar de mim e minhas conquistas", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você aceita que pode estar errado?",
    options: [
      { text: "Sim, sempre considero essa possibilidade", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Tenho dificuldade com isso", type: "C" },
      { text: "Não, geralmente estou certo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você se compara positivamente com os outros?",
    options: [
      { text: "Não, cada um tem sua jornada", type: "A" },
      { text: "Às vezes, mas evito", type: "B" },
      { text: "Frequentemente me acho melhor", type: "C" },
      { text: "Sempre, sou superior em muitas coisas", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você ajuda sem esperar reconhecimento?",
    options: [
      { text: "Sim, ajudar é a recompensa", type: "A" },
      { text: "Geralmente não espero nada", type: "B" },
      { text: "Gosto de ser reconhecido", type: "C" },
      { text: "Só ajudo se houver benefício", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você admira qualidades nos outros?",
    options: [
      { text: "Sim, celebro o sucesso alheio", type: "A" },
      { text: "Geralmente admiro", type: "B" },
      { text: "Às vezes sinto inveja", type: "C" },
      { text: "O sucesso dos outros me incomoda", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua humildade?",
    options: [
      { text: "Alta, valorizo essa virtude", type: "A" },
      { text: "Boa, me esforço para ser humilde", type: "B" },
      { text: "Moderada, tenho orgulho também", type: "C" },
      { text: "Baixa, sou confiante em mim", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Humilde",
    emoji: "🙏",
    description: "Você é genuinamente humilde! Reconhece limitações, aprende com todos e não se coloca acima dos outros. Humildade verdadeira é força, não fraqueza.",
    traits: ["Humilde", "Acessível", "Aprendiz", "Sábio"],
    strengths: ["Relacionamentos saudáveis", "Aprendizado constante", "Confiança dos outros", "Crescimento contínuo"],
    weaknesses: ["Pode ser subestimado", "Pode não se valorizar o suficiente"],
    tips: ["Continue cultivando humildade", "Equilibre com autoconfiança saudável", "Humildade não é se diminuir"],
  },
  B: {
    type: "B",
    title: "Razoavelmente Humilde",
    emoji: "🌿",
    description: "Você tem boa dose de humildade. Reconhece suas limitações e respeita os outros, com espaço para desenvolver mais essa virtude.",
    traits: ["Equilibrado", "Respeitoso", "Aberto", "Funcional"],
    strengths: ["Bom equilíbrio", "Relacionamentos saudáveis", "Abertura para aprender"],
    weaknesses: ["Algumas áreas de orgulho"],
    tips: ["Continue desenvolvendo humildade", "Ela é compatível com autoconfiança", "Observe pessoas humildes e aprenda"],
  },
  C: {
    type: "C",
    title: "Orgulhoso",
    emoji: "👑",
    description: "Você tem mais orgulho que humildade. Tende a se achar superior e tem dificuldade em aceitar críticas. Isso pode estar afetando relacionamentos.",
    traits: ["Orgulhoso", "Defensivo", "Superior", "Fechado"],
    strengths: ["Autoconfiança (em excesso)"],
    weaknesses: ["Relacionamentos afetados", "Aprendizado limitado", "Pode parecer arrogante"],
    tips: ["Reflita sobre o impacto do orgulho", "Humildade não é fraqueza", "Tente ouvir mais e falar menos"],
  },
  D: {
    type: "D",
    title: "Arrogante",
    emoji: "🦚",
    description: "Você demonstra arrogância significativa. Se coloca acima dos outros e tem dificuldade em aceitar limitações. Isso está provavelmente prejudicando suas relações.",
    traits: ["Arrogante", "Superior", "Fechado", "Egocêntrico"],
    strengths: ["Alta autoconfiança"],
    weaknesses: ["Relacionamentos prejudicados", "Não aprende", "Isolamento possível", "Cegueira para próprias falhas"],
    tips: ["Arrogância frequentemente esconde insegurança", "Considere por que precisa se sentir superior", "Humildade é libertadora"],
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
