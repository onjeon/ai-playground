// Qual Seu Tipo de Leitor?
// Descubra seu perfil de leitura!

export const questions = [
  {
    id: 1,
    question: "Quantos livros você lê por ano?",
    options: [
      { text: "Mais de 20, perdi a conta", type: "A" },
      { text: "Entre 5 e 15, quando dá tempo", type: "B" },
      { text: "1 ou 2, com muita dificuldade", type: "C" },
      { text: "Livro? Só se for obrigatório", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Onde você mais lê?",
    options: [
      { text: "Em qualquer lugar, sempre tenho um livro", type: "A" },
      { text: "Em casa, no sofá ou na cama", type: "B" },
      { text: "No transporte, quando não tem Wi-Fi", type: "C" },
      { text: "No banheiro, é o único momento", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Livro físico ou e-book?",
    options: [
      { text: "Físico sempre, amo cheiro de livro", type: "A" },
      { text: "Os dois, depende da situação", type: "B" },
      { text: "E-book, mais prático", type: "C" },
      { text: "Audiobook ou resumo no YouTube", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você marca/grifa livros?",
    options: [
      { text: "Claro! Cheio de anotações e marcações", type: "A" },
      { text: "Às vezes, trechos importantes", type: "B" },
      { text: "Nunca, livro é sagrado", type: "C" },
      { text: "Não leio o suficiente pra isso", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sobre comprar livros, você...",
    options: [
      { text: "Compro mais do que consigo ler", type: "A" },
      { text: "Compro quando vou ler em breve", type: "B" },
      { text: "Empresto ou baixo na internet", type: "C" },
      { text: "Raramente compro, não é prioridade", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você consegue ler mais de um livro ao mesmo tempo?",
    options: [
      { text: "Sempre! Tenho vários em andamento", type: "A" },
      { text: "Às vezes, um de cada gênero", type: "B" },
      { text: "Não, preciso terminar um pra começar outro", type: "C" },
      { text: "Mal consigo terminar um", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Filme/série baseado em livro. Você...",
    options: [
      { text: "Leio o livro antes, sempre", type: "A" },
      { text: "Depende, às vezes vejo o filme primeiro", type: "B" },
      { text: "Vejo só o filme, mais rápido", type: "C" },
      { text: "Nem sabia que era baseado em livro", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sua estante de livros é...",
    options: [
      { text: "Enorme, organizada por gênero/autor", type: "A" },
      { text: "Razoável, alguns títulos queridos", type: "B" },
      { text: "Pequena, só o essencial", type: "C" },
      { text: "Inexistente ou decorativa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Indicação de livro. Você...",
    options: [
      { text: "Adoro receber e dar indicações", type: "A" },
      { text: "Aceito bem, mas sigo meu ritmo", type: "B" },
      { text: "Anoto mas raramente leio", type: "C" },
      { text: "Falo que vou ler mas nunca leio", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual frase mais combina com você?",
    options: [
      { text: "Um dia sem ler é um dia perdido", type: "A" },
      { text: "Leitura é um prazer quando dá tempo", type: "B" },
      { text: "Queria ler mais, mas não consigo", type: "C" },
      { text: "Prefiro outras formas de entretenimento", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Devorador de Livros",
    emoji: "📚",
    percentage: 95,
    description: "Você é O Devorador de Livros! Leitura é parte essencial da sua vida. Tem sempre um livro na bolsa, uma pilha pra ler, e indicações na ponta da língua!",
    characteristics: ["Culto(a)", "Curioso(a)", "Dedicado(a)", "Inspirador(a)"],
    advice: "Sua paixão por livros é admirável! Continue espalhando esse amor pela leitura e inspirando outras pessoas a descobrirem esse universo!",
  },
  B: {
    type: "B",
    title: "O Leitor Equilibrado",
    emoji: "📖",
    percentage: 80,
    description: "Você é O Leitor Equilibrado! Gosta de ler, tem seus gêneros favoritos, mas equilibra com outras atividades. Leitura é prazer, não obrigação!",
    characteristics: ["Equilibrado(a)", "Seletivo(a)", "Consistente", "Organizado(a)"],
    advice: "Ótimo equilíbrio! Você curte ler sem pressão. Continue assim, escolhendo livros que te interessam de verdade!",
  },
  C: {
    type: "C",
    title: "O Leitor Aspirante",
    emoji: "🤔",
    percentage: 60,
    description: "Você é O Leitor Aspirante! Sabe que deveria ler mais, tem vontade, mas sempre aparece algo mais urgente. A intenção é boa, mas a execução emperra!",
    characteristics: ["Bem-intencionado(a)", "Distraído(a)", "Ocupado(a)", "Sonhador(a)"],
    advice: "A vontade já é um começo! Tenta reservar 15 minutos por dia, escolhe livros que te prendam. Aos poucos o hábito vem!",
  },
  D: {
    type: "D",
    title: "O Não-Leitor Assumido",
    emoji: "📱",
    percentage: 40,
    description: "Você é O Não-Leitor Assumido! Livros não são sua praia, e tudo bem. Você prefere outras formas de consumir conteúdo e entretenimento!",
    characteristics: ["Honesto(a)", "Prático(a)", "Digital", "Objetivo(a)"],
    advice: "Cada um tem seu jeito de aprender e se divertir! Mas quem sabe um dia você não encontra aquele livro que muda tudo?",
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
