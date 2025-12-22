// Qual Personagem de Festa Junina Você Seria?
// Descubra qual figura típica das festas de São João combina com você!

export const questions = [
  {
    id: 1,
    question: "O que você mais gosta na festa junina?",
    options: [
      { text: "A quadrilha e as danças típicas", type: "A" },
      { text: "As comidas: paçoca, pé de moleque, quentão", type: "B" },
      { text: "As brincadeiras: pescaria, correio elegante", type: "C" },
      { text: "A fogueira e os fogos de artifício", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você se vestiria para a festa?",
    options: [
      { text: "Roupa de caipira bem caprichada", type: "A" },
      { text: "Algo simples, foco é comer!", type: "B" },
      { text: "Fantasia divertida pras brincadeiras", type: "C" },
      { text: "Chapéu de palha e camisa xadrez básicos", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual seu papel em uma festa junina?",
    options: [
      { text: "Puxo a quadrilha e animo todo mundo", type: "A" },
      { text: "Fico na barraca de comida provando tudo", type: "B" },
      { text: "Participo de todas as brincadeiras", type: "C" },
      { text: "Curto o clima, a música e a fogueira", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual comida junina é sua cara?",
    options: [
      { text: "Quentão - forte e esquenta todo mundo", type: "A" },
      { text: "Canjica - doce, tradicional e aconchegante", type: "B" },
      { text: "Pipoca - leve, alegre e pra todo mundo", type: "C" },
      { text: "Milho assado - simples e autêntico", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que você mais valoriza nas tradições?",
    options: [
      { text: "A união e celebração em grupo", type: "A" },
      { text: "As receitas passadas de geração", type: "B" },
      { text: "A diversão e alegria que proporcionam", type: "C" },
      { text: "A conexão com as raízes", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você é em relacionamentos?",
    options: [
      { text: "Apaixonado(a) e intenso(a)", type: "A" },
      { text: "Carinhoso(a) e dedicado(a)", type: "B" },
      { text: "Divertido(a) e espontâneo(a)", type: "C" },
      { text: "Fiel e tradicional", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual brincadeira de festa junina mais te atrai?",
    options: [
      { text: "Casamento na roça - drama e diversão!", type: "A" },
      { text: "Pescaria - relaxante e recompensadora", type: "B" },
      { text: "Corrida do saco - competição e risadas", type: "C" },
      { text: "Fogueira de São João - contemplação", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você descreveria seu humor?",
    options: [
      { text: "Expansivo e contagiante", type: "A" },
      { text: "Doce e acolhedor", type: "B" },
      { text: "Brincalhão e divertido", type: "C" },
      { text: "Calmo e reconfortante", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual música de festa junina mais te anima?",
    options: [
      { text: "Forró pé de serra bem animado", type: "A" },
      { text: "Músicas tradicionais de quadrilha", type: "B" },
      { text: "Qualquer uma que faça dançar", type: "C" },
      { text: "Canções de viola, mais calmas", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você faria em uma noite de São João?",
    options: [
      { text: "Dançar a noite toda", type: "A" },
      { text: "Comer e conversar com a família", type: "B" },
      { text: "Brincar e se divertir com amigos", type: "C" },
      { text: "Apreciar a fogueira e o céu estrelado", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual elemento junino mais te representa?",
    options: [
      { text: "Balão colorido - chamativo e alegre", type: "A" },
      { text: "Espiga de milho - nutritivo e essencial", type: "B" },
      { text: "Bandeirinhas - festivas e decorativas", type: "C" },
      { text: "Fogueira - acolhedora e tradicional", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase junina mais combina com você?",
    options: [
      { text: "Olha a cobra! É mentira!", type: "A" },
      { text: "Tá bom demais, sô!", type: "B" },
      { text: "Arraiá bão é esse!", type: "C" },
      { text: "São João abençoou essa noite!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Noivo/A Noiva da Quadrilha",
    emoji: "💒",
    description: "Você é o protagonista da festa! Assim como os noivos do casamento caipira, você adora estar no centro das atenções, é apaixonado(a) e faz qualquer evento ficar mais animado!",
    traits: ["Carismático(a)", "Apaixonado(a)", "Animador(a)", "Protagonista"],
    strengths: ["Capacidade de animar", "Paixão pelo que faz", "Presença marcante", "Energia contagiante"],
    weaknesses: ["Gosta demais de atenção", "Pode ser dramático(a)", "Dificuldade em ficar nos bastidores"],
    tips: ["Deixe outros brilharem também", "A simplicidade tem seu charme", "Nem sempre precisa ser o centro"],
  },
  B: {
    type: "B",
    title: "A Tia/O Tio da Cozinha",
    emoji: "🍿",
    description: "Você é o coração da festa! Assim como quem prepara as delícias juninas, você cuida de todos com carinho e faz as pessoas se sentirem em casa com seu acolhimento!",
    traits: ["Acolhedor(a)", "Dedicado(a)", "Tradicional", "Carinhoso(a)"],
    strengths: ["Capacidade de cuidar", "Manter tradições vivas", "Fazer todos felizes", "Generosidade"],
    weaknesses: ["Pode esquecer de si", "Dificuldade em pedir ajuda", "Muito focado(a) nos outros"],
    tips: ["Cuide de você também", "Aceite ajuda", "Participe da festa, não só trabalhe nela"],
  },
  C: {
    type: "C",
    title: "A Criança Animada",
    emoji: "🎈",
    description: "Você é a alegria da festa! Assim como as crianças que correm entre as brincadeiras, você mantém a energia leve, divertida e faz todos lembrarem que festa é pra se divertir!",
    traits: ["Alegre", "Brincalhão(ona)", "Espontâneo(a)", "Energético(a)"],
    strengths: ["Manter o clima leve", "Diversão garantida", "Espontaneidade", "Fazer todos rirem"],
    weaknesses: ["Pode ser disperso(a)", "Dificuldade em levar coisas a sério", "Impaciente às vezes"],
    tips: ["Momentos sérios também são importantes", "Cultive também a calma", "Nem tudo é brincadeira"],
  },
  D: {
    type: "D",
    title: "O Violeiro/A Matriarca",
    emoji: "🔥",
    description: "Você é a alma da festa! Assim como o violeiro que toca junto à fogueira ou a matriarca que guarda as tradições, você traz profundidade, sabedoria e conecta todos às raízes!",
    traits: ["Sábio(a)", "Tradicional", "Contemplativo(a)", "Profundo(a)"],
    strengths: ["Conexão com raízes", "Sabedoria de vida", "Capacidade de contemplar", "Serenidade"],
    weaknesses: ["Pode parecer distante", "Dificuldade em se soltar", "Muito apegado ao passado"],
    tips: ["Permita-se mais diversão", "O novo também é bom", "Dance um pouco mais"],
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
