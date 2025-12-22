// Qual Tipo de Estudante Você Era na Escola?
// Descubra qual era seu perfil nos tempos de colégio!

export const questions = [
  {
    id: 1,
    question: "Como você chegava na escola?",
    options: [
      { text: "Sempre pontual, na primeira fileira", type: "A" },
      { text: "No horário, mas sem pressa", type: "B" },
      { text: "Atrasado(a), inventando desculpa", type: "C" },
      { text: "Só ia quando não tinha jeito", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Na hora da prova, você...",
    options: [
      { text: "Já tinha estudado tudo, tranquilo(a)", type: "A" },
      { text: "Dava uma revisada básica na véspera", type: "B" },
      { text: "Rezava e contava com a sorte", type: "C" },
      { text: "Olhava pro lado discretamente", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual era sua relação com os professores?",
    options: [
      { text: "Eles me amavam, eu participava de tudo", type: "A" },
      { text: "Boa, respeitosa e tranquila", type: "B" },
      { text: "Neutro(a), nem amava nem odiava", type: "C" },
      { text: "Sempre sendo chamado(a) atenção", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que você fazia no recreio?",
    options: [
      { text: "Adiantava lição ou lia um livro", type: "A" },
      { text: "Conversava com os amigos", type: "B" },
      { text: "Jogava bola ou corria pelo pátio", type: "C" },
      { text: "Aprontava alguma coisa", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como era seu caderno?",
    options: [
      { text: "Impecável, letra bonita, tudo organizado", type: "A" },
      { text: "Razoável, dava pra entender", type: "B" },
      { text: "Cheio de desenhos nas margens", type: "C" },
      { text: "Caderno? Que caderno?", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Na feira de ciências, você...",
    options: [
      { text: "Fazia o melhor projeto da turma", type: "A" },
      { text: "Contribuía com a equipe", type: "B" },
      { text: "Deixava os outros fazerem", type: "C" },
      { text: "Aparecia só na apresentação", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você lidava com trabalho em grupo?",
    options: [
      { text: "Eu fazia tudo, não confiava em ninguém", type: "A" },
      { text: "Dividia as tarefas certinho", type: "B" },
      { text: "Fazia minha parte no último dia", type: "C" },
      { text: "Colocava meu nome e pronto", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual matéria você mais gostava?",
    options: [
      { text: "Matemática ou Ciências", type: "A" },
      { text: "Português ou História", type: "B" },
      { text: "Educação Física", type: "C" },
      { text: "Artes ou nenhuma", type: "D" },
    ],
  },
  {
    id: 9,
    question: "No dia da foto da turma, você...",
    options: [
      { text: "Estava arrumado(a) e sorridente", type: "A" },
      { text: "Normal, só mais uma foto", type: "B" },
      { text: "Fazia careta ou pose engraçada", type: "C" },
      { text: "Tentava fugir da foto", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sua mochila era...",
    options: [
      { text: "Organizada com tudo separadinho", type: "A" },
      { text: "Normal, com o necessário", type: "B" },
      { text: "Cheia de coisa inútil e bagunçada", type: "C" },
      { text: "Quase vazia, só o lanche", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O CDF",
    emoji: "🤓",
    percentage: 85,
    description: "Você era o CDF da turma! Sempre com as lições em dia, sentava na frente e os professores te amavam. Provavelmente emprestava caderno pra turma toda!",
    characteristics: ["Estudioso(a)", "Organizado(a)", "Responsável", "Perfeccionista"],
    advice: "Sua dedicação te trouxe até aqui! Mas lembre-se que a vida não é só sobre notas. Às vezes, vale relaxar e curtir o momento sem se preocupar tanto.",
  },
  B: {
    type: "B",
    title: "O Equilibrado",
    emoji: "😊",
    percentage: 70,
    description: "Você era o estudante equilibrado! Nem CDF demais, nem bagunceiro. Tirava notas boas, tinha amigos e sabia aproveitar a escola sem estresse.",
    characteristics: ["Tranquilo(a)", "Social", "Adaptável", "Sensato(a)"],
    advice: "Esse equilíbrio é uma qualidade rara! Continue assim, sabendo dosar responsabilidade com diversão. Você sempre soube viver bem.",
  },
  C: {
    type: "C",
    title: "O Enrolado",
    emoji: "😅",
    percentage: 55,
    description: "Você era o enrolado clássico! Estudava na véspera, esquecia material, mas sempre dava um jeito. A criatividade pra inventar desculpa era nota 10!",
    characteristics: ["Criativo(a)", "Improvisador(a)", "Sociável", "Despreocupado(a)"],
    advice: "Sua capacidade de se virar em qualquer situação é um talento! Mas às vezes um pouquinho de planejamento pode evitar aquele desespero de última hora.",
  },
  D: {
    type: "D",
    title: "O Rebelde",
    emoji: "😎",
    percentage: 40,
    description: "Você era o rebelde da turma! A escola não era sua praia, mas você tinha outras qualidades. Provavelmente era popular e sabia se divertir!",
    characteristics: ["Independente", "Questionador(a)", "Carismático(a)", "Livre"],
    advice: "Nem todo mundo se encaixa no sistema tradicional, e tudo bem! Sua independência e espírito livre são qualidades valiosas no mundo real.",
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
