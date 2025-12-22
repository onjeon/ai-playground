// Qual Seu Perfil de Bar?
// Descubra como você é no boteco!

export const questions = [
  {
    id: 1,
    question: "Com que frequência você vai ao bar?",
    options: [
      { text: "Todo fim de semana, religiosamente", type: "A" },
      { text: "Algumas vezes por mês", type: "B" },
      { text: "De vez em quando, quando chamam", type: "C" },
      { text: "Raramente, não sou muito de bar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual sua bebida no bar?",
    options: [
      { text: "Cerveja bem gelada, sempre", type: "A" },
      { text: "Depende do dia, vario bastante", type: "B" },
      { text: "Caipirinha ou drinks", type: "C" },
      { text: "Refrigerante ou suco", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você pede petiscos?",
    options: [
      { text: "Sempre! Porção, espetinho, tudo", type: "A" },
      { text: "Alguns, pra beliscar", type: "B" },
      { text: "Só se tiver com fome", type: "C" },
      { text: "Não, só bebo mesmo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você é de rachar a conta ou pagar o seu?",
    options: [
      { text: "Rachar sempre, é mais justo", type: "A" },
      { text: "Depende, às vezes racho, às vezes pago só o meu", type: "B" },
      { text: "Prefiro pagar só o que consumi", type: "C" },
      { text: "Pago tudo pro pessoal de vez em quando", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você conversa com desconhecidos no bar?",
    options: [
      { text: "Sim! Faço amizade fácil", type: "A" },
      { text: "Às vezes, se a pessoa for simpática", type: "B" },
      { text: "Raramente, fico na minha turma", type: "C" },
      { text: "Nunca, não gosto de interagir", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Até que horas você fica no bar?",
    options: [
      { text: "Até fechar! Sou o último a sair", type: "A" },
      { text: "Umas 2-3h, tempo suficiente", type: "B" },
      { text: "Poucas horas, depois vou embora", type: "C" },
      { text: "O mínimo possível", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você canta no karaokê do bar?",
    options: [
      { text: "Sempre! Sou o rei/rainha do karaokê", type: "A" },
      { text: "Às vezes, quando tô no clima", type: "B" },
      { text: "Só muito bêbado(a)", type: "C" },
      { text: "Nunca, tenho vergonha", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você prefere bar de que tipo?",
    options: [
      { text: "Boteco raiz, cerveja barata e petisco", type: "A" },
      { text: "Bar legal com ambiente agradável", type: "B" },
      { text: "Lugar mais sofisticado, drinks bons", type: "C" },
      { text: "Qualquer um, tanto faz", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você assiste jogo no bar?",
    options: [
      { text: "Sempre! Bar é lugar de ver jogo", type: "A" },
      { text: "Às vezes, quando é jogo importante", type: "B" },
      { text: "Não muito, prefiro em casa", type: "C" },
      { text: "Nem gosto de futebol", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você já 'passou do ponto' no bar?",
    options: [
      { text: "Várias vezes, faz parte", type: "A" },
      { text: "Algumas vezes aconteceu", type: "B" },
      { text: "Raramente, controlo bem", type: "C" },
      { text: "Nunca, não bebo muito", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você é de pagar rodada pros amigos?",
    options: [
      { text: "Sempre! Adoro pagar rodada", type: "A" },
      { text: "De vez em quando, normal", type: "B" },
      { text: "Raramente, cada um paga o seu", type: "C" },
      { text: "Nunca, dinheiro é dinheiro", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define no bar?",
    options: [
      { text: "'Mais uma rodada aqui!'", type: "A" },
      { text: "'Cerveja gelada e boa conversa'", type: "B" },
      { text: "'Só mais uma e vou embora'", type: "C" },
      { text: "'Quanto tá a conta?'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Rei/Rainha do Boteco",
    emoji: "🍺",
    description: "Você é Rei/Rainha do Boteco! O bar é sua segunda casa. Conhece todo mundo, fica até fechar, paga rodada, canta no karaokê. A vida boa é no bar!",
    traits: ["Festeiro(a)", "Sociável", "Generoso(a)", "Animado(a)"],
    strengths: ["Faz amigos fácil", "Anima qualquer bar", "Generosidade"],
    weaknesses: ["Gasta muito", "Pode exagerar na bebida", "Ressaca frequente"],
    tips: ["Aproveite mas com moderação", "Seu fígado agradece", "A vida não é só bar"],
  },
  B: {
    type: "B",
    title: "Frequentador Equilibrado",
    emoji: "🍻",
    description: "Você é o Frequentador Equilibrado! Gosta de um bar, mas com moderação. Curte a cerveja, a conversa, mas sabe a hora de ir embora. Equilíbrio perfeito!",
    traits: ["Equilibrado(a)", "Sociável", "Moderado(a)", "Consciente"],
    strengths: ["Aproveita sem exagerar", "Boa companhia", "Sabe a hora de parar"],
    weaknesses: ["Pode parecer sem graça pros festeiros", "Às vezes quer ir embora cedo"],
    tips: ["Ótimo equilíbrio", "Continue assim", "Aproveite os momentos"],
  },
  C: {
    type: "C",
    title: "Visitante Ocasional",
    emoji: "🥂",
    description: "Você é o Visitante Ocasional! Vai ao bar quando chamam, mas não é seu programa favorito. Prefere lugares mais calmos ou outros tipos de diversão!",
    traits: ["Seletivo(a)", "Moderado(a)", "Introvertido(a)", "Casual"],
    strengths: ["Não gasta muito", "Saúde preservada", "Outros interesses"],
    weaknesses: ["Pode perder momentos com amigos", "Parece antissocial", "Fora do grupo"],
    tips: ["Tudo bem não gostar muito", "Vá quando quiser", "Cada um tem seu estilo"],
  },
  D: {
    type: "D",
    title: "Anti-Bar",
    emoji: "🏠",
    description: "Você é Anti-Bar! Bar não é sua praia. Prefere outros programas, outros ambientes. E tá tudo bem! Nem todo mundo precisa gostar de bar!",
    traits: ["Caseiro(a)", "Sóbrio(a)", "Econômico(a)", "Diferente"],
    strengths: ["Economia", "Saúde", "Outros hobbies", "Clareza mental"],
    weaknesses: ["Pode parecer chato", "Perde interações sociais", "Os amigos reclamam"],
    tips: ["Tá tudo bem ser assim", "Proponha outros programas", "Cada um é cada um"],
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
