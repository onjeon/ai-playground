// Qual Sua Música de Carnaval?
// Descubra qual ritmo carnavalesco combina com você!

export const questions = [
  {
    id: 1,
    question: "Quando você ouve 'Carnaval', o que vem na cabeça?",
    options: [
      { text: "Desfile de escola de samba, bateria, avenida", type: "A" },
      { text: "Trio elétrico, axé, pular no bloco", type: "B" },
      { text: "Marchinha antiga, fantasia, serpentina", type: "C" },
      { text: "Funk, piseiro, o hit do momento", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Seu instrumento preferido no Carnaval é...",
    options: [
      { text: "Surdo, caixa, tamborim - bateria de escola", type: "A" },
      { text: "Guitarra baiana, timbau - trio elétrico", type: "B" },
      { text: "Piano, saxofone - som de marchinha", type: "C" },
      { text: "Grave pesado, sintetizador - eletrônico", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual Carnaval mais combina com você?",
    options: [
      { text: "Rio de Janeiro - Sapucaí e desfiles", type: "A" },
      { text: "Salvador - circuitos e blocos", type: "B" },
      { text: "Olinda/Recife - frevo e cultura", type: "C" },
      { text: "Carnaval de rua alternativo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sobre samba-enredo, você...",
    options: [
      { text: "Decoro a letra, acompanho o ano todo", type: "A" },
      { text: "Curto, mas prefiro outros ritmos", type: "B" },
      { text: "Gosto do clássico, das marchinhas", type: "C" },
      { text: "Não é minha praia", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ivete Sangalo, Claudia Leitte, Chiclete... Você...",
    options: [
      { text: "Respeito, mas prefiro samba", type: "A" },
      { text: "Amo! É a cara do Carnaval pra mim", type: "B" },
      { text: "Prefiro os clássicos, mais antigos", type: "C" },
      { text: "Curto, mas quero coisa nova", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Marchinha de Carnaval pra você é...",
    options: [
      { text: "Nostalgia boa, mas prefiro samba", type: "A" },
      { text: "Legal, mas axé me anima mais", type: "B" },
      { text: "O verdadeiro Carnaval, tradição!", type: "C" },
      { text: "Coisa do passado, quero novidade", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você conhece 'O Abre Alas', 'Mamãe Eu Quero'?",
    options: [
      { text: "Conheço e canto junto, mas prefiro samba", type: "A" },
      { text: "Sei algumas, mas não são minhas favoritas", type: "B" },
      { text: "Claro! São clássicos eternos", type: "C" },
      { text: "Não muito, prefiro música atual", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Funk e piseiro no Carnaval. Você acha que...",
    options: [
      { text: "Não combina, Carnaval é samba", type: "A" },
      { text: "Pode ter de tudo, é festa!", type: "B" },
      { text: "Carnaval perdeu a essência", type: "C" },
      { text: "Ótimo! Música boa é o que importa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual artista você mais quer ver no Carnaval?",
    options: [
      { text: "Mestre-sala e porta-bandeira, bateria", type: "A" },
      { text: "Cantores de axé no trio", type: "B" },
      { text: "Bandas de frevo e marchinha", type: "C" },
      { text: "DJs e artistas atuais", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sua playlist de Carnaval tem mais...",
    options: [
      { text: "Sambas-enredo de todas as épocas", type: "A" },
      { text: "Axé music e hits baianos", type: "B" },
      { text: "Marchinhas e frevo tradicional", type: "C" },
      { text: "Hits atuais que estão bombando", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Apaixonado(a) por Samba",
    emoji: "🥁",
    percentage: 95,
    description: "Você é Apaixonado(a) por Samba! Seu Carnaval é na Sapucaí, com samba-enredo no coração e bateria na alma. A tradição das escolas de samba é o que te move!",
    characteristics: ["Tradicional", "Apaixonado(a)", "Cultural", "Raiz"],
    advice: "O samba é a alma do Carnaval brasileiro! Continue honrando essa tradição linda e passando esse amor pras próximas gerações!",
  },
  B: {
    type: "B",
    title: "Axé no Sangue",
    emoji: "🎸",
    percentage: 85,
    description: "Você tem Axé no Sangue! Trio elétrico, abadá, pular no bloco - seu Carnaval é energia pura! A Bahia mora no seu coração carnavalesco!",
    characteristics: ["Animado(a)", "Energético(a)", "Festeiro(a)", "Alegre"],
    advice: "Sua energia é contagiante! O axé nasceu pra fazer todo mundo dançar. Continue espalhando essa alegria baiana!",
  },
  C: {
    type: "C",
    title: "Alma de Marchinha",
    emoji: "🎭",
    percentage: 75,
    description: "Você tem Alma de Marchinha! Carnaval pra você é tradição, fantasia, serpentina e músicas que atravessam gerações. O charme do Carnaval antigo te encanta!",
    characteristics: ["Nostálgico(a)", "Clássico(a)", "Cultural", "Romântico(a)"],
    advice: "As marchinhas são patrimônio do Carnaval brasileiro! Continue mantendo viva essa tradição que alegra há mais de um século!",
  },
  D: {
    type: "D",
    title: "Carnavalesco Moderno",
    emoji: "🎧",
    percentage: 70,
    description: "Você é um Carnavalesco Moderno! Pra você, Carnaval evolui com o tempo. Funk, piseiro, eletrônico - o importante é a festa, não a tradição!",
    characteristics: ["Atual", "Aberto(a)", "Inovador(a)", "Descolado(a)"],
    advice: "O Carnaval se reinventa todo ano! Curte as novidades, mas dá uma chance pros clássicos também. Tem muita coisa boa que você pode descobrir!",
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
