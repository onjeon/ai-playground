// Qual Seu Tipo no Carnaval?
// Descubra seu perfil na maior festa brasileira!

export const questions = [
  {
    id: 1,
    question: "Como você curte o Carnaval?",
    options: [
      { text: "Na avenida, desfilando ou assistindo", type: "A" },
      { text: "Bloquinho de rua, cerveja na mão", type: "B" },
      { text: "Camarote ou festa fechada", type: "C" },
      { text: "Netflix e ar-condicionado", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sua fantasia de Carnaval é...",
    options: [
      { text: "Elaborada, penso o ano todo", type: "A" },
      { text: "Criativa e improvisada na hora", type: "B" },
      { text: "Estilosa, combino com os amigos", type: "C" },
      { text: "Não uso fantasia", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sexta de Carnaval, você está...",
    options: [
      { text: "No ensaio da escola ou já na concentração", type: "A" },
      { text: "Buscando o melhor bloco pra cair", type: "B" },
      { text: "Chegando no destino de viagem", type: "C" },
      { text: "Comemorando o feriado em casa", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual música de Carnaval te define?",
    options: [
      { text: "Samba-enredo da minha escola", type: "A" },
      { text: "Marchinha clássica ou axé", type: "B" },
      { text: "Hit do momento que tá tocando", type: "C" },
      { text: "Prefiro minhas playlists normais", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Bebida oficial do seu Carnaval?",
    options: [
      { text: "Água! Preciso aguentar o desfile", type: "A" },
      { text: "Cerveja gelada, muita cerveja", type: "B" },
      { text: "Drinks elaborados ou champagne", type: "C" },
      { text: "O que tiver na geladeira de casa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você se prepara pro Carnaval?",
    options: [
      { text: "Ensaios, academia, dieta", type: "A" },
      { text: "Pesquiso blocos e monto roteiro", type: "B" },
      { text: "Compro ingresso e escolho looks", type: "C" },
      { text: "Não me preparo, não vou", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quarta-feira de cinzas, você...",
    options: [
      { text: "Ainda estou na avenida ou bloco", type: "A" },
      { text: "De ressaca, mas feliz", type: "B" },
      { text: "Voltando da viagem, descansado(a)", type: "C" },
      { text: "Finalmente posso sair de casa em paz", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sua relação com as escolas de samba é...",
    options: [
      { text: "Tenho escola do coração, vou aos ensaios", type: "A" },
      { text: "Assisto os desfiles pela TV com interesse", type: "B" },
      { text: "Curto mais os blocos e festas", type: "C" },
      { text: "Não acompanho muito", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Se pudesse passar Carnaval em qualquer lugar, seria...",
    options: [
      { text: "Rio de Janeiro - Sapucaí é meu lugar", type: "A" },
      { text: "Olinda ou Salvador - bloco de rua", type: "B" },
      { text: "Praia deserta ou resort", type: "C" },
      { text: "Qualquer lugar sem Carnaval", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você mais gosta no Carnaval?",
    options: [
      { text: "A arte, cultura e tradição", type: "A" },
      { text: "A festa, a música e a alegria", type: "B" },
      { text: "O feriado prolongado", type: "C" },
      { text: "Quando acaba", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Folião Raiz",
    emoji: "🎭",
    percentage: 95,
    description: "Você é O Folião Raiz! Carnaval é coisa séria pra você. Escola de samba, desfile, tradição - você vive e respira a maior festa brasileira o ano inteiro!",
    characteristics: ["Apaixonado(a)", "Tradicional", "Dedicado(a)", "Cultural"],
    advice: "Sua paixão pelo Carnaval é linda e ajuda a manter viva nossa cultura! Continue espalhando essa alegria e ensinando as tradições às novas gerações.",
  },
  B: {
    type: "B",
    title: "O Folião de Bloco",
    emoji: "🍺",
    percentage: 85,
    description: "Você é O Folião de Bloco! Carnaval pra você é rua, cerveja, amigos e marchinha. Você sabe que os melhores carnavais são os mais simples e espontâneos!",
    characteristics: ["Animado(a)", "Social", "Descontraído(a)", "Festeiro(a)"],
    advice: "Sua energia de bloco é contagiante! Continue curtindo essa festa com responsabilidade e levando alegria por onde passar.",
  },
  C: {
    type: "C",
    title: "O Folião VIP",
    emoji: "✨",
    percentage: 70,
    description: "Você é O Folião VIP! Curte Carnaval, mas com conforto. Camarote, festa fechada ou uma praia exclusiva - você quer aproveitar sem perrengue!",
    characteristics: ["Seletivo(a)", "Confortável", "Estiloso(a)", "Prático(a)"],
    advice: "Não há nada errado em querer conforto! Mas às vezes o caos da rua traz experiências inesquecíveis. Que tal se jogar num bloquinho?",
  },
  D: {
    type: "D",
    title: "O Anti-Carnaval",
    emoji: "😴",
    percentage: 40,
    description: "Você é O Anti-Carnaval! A maior festa do Brasil? Pra você, é a maior oportunidade de ficar em casa em paz. E tudo bem, nem todo mundo precisa sambar!",
    characteristics: ["Caseiro(a)", "Tranquilo(a)", "Independente", "Sincero(a)"],
    advice: "Respeite seu ritmo! Mas quem sabe um dia você não se deixa levar pela energia do Carnaval? Às vezes a festa te surpreende.",
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
