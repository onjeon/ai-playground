// Qual Seu Tipo no Verão Brasileiro?
// Descubra como você curte a estação mais quente!

export const questions = [
  {
    id: 1,
    question: "Temperatura chegando nos 40 graus. Você...",
    options: [
      { text: "Amo! Quanto mais quente, melhor", type: "A" },
      { text: "Curto, mas com ar-condicionado por perto", type: "B" },
      { text: "Sofro um pouco, mas aguento", type: "C" },
      { text: "Morro! Prefiro mil vezes o frio", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Seu programa ideal de verão é...",
    options: [
      { text: "Praia! O dia todo na areia e no mar", type: "A" },
      { text: "Piscina ou clube com os amigos", type: "B" },
      { text: "Shopping ou lugares com ar-condicionado", type: "C" },
      { text: "Ficar em casa com ventilador/ar ligado", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sua relação com o sol é...",
    options: [
      { text: "Amo pegar sol, bronzeado é vida", type: "A" },
      { text: "Pego sol com proteção, moderadamente", type: "B" },
      { text: "Fujo do sol, prefiro sombra", type: "C" },
      { text: "Sol é inimigo, só saio de noite", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Chuva de verão forte. Você...",
    options: [
      { text: "Corro pra aproveitar, tomar banho de chuva!", type: "A" },
      { text: "Aprecio de longe, é refrescante", type: "B" },
      { text: "Espero passar pra continuar meu dia", type: "C" },
      { text: "Fico frustrado(a), atrapalha tudo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sua roupa de verão típica é...",
    options: [
      { text: "Biquíni/sunga e canga, roupa de praia sempre", type: "A" },
      { text: "Shorts, regata, chinelo, o mais leve possível", type: "B" },
      { text: "Roupas leves mas não tão expostas", type: "C" },
      { text: "Qualquer coisa que não me faça suar muito", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Comida de verão favorita:",
    options: [
      { text: "Açaí, sorvete, coisas geladas o dia todo", type: "A" },
      { text: "Saladas, frutas, comidas leves", type: "B" },
      { text: "Como normal, calor não muda minha dieta", type: "C" },
      { text: "Perco a fome com o calor", type: "D" },
    ],
  },
  {
    id: 7,
    question: "À noite no verão, você...",
    options: [
      { text: "Saio pra curtir, balada, bar, praia à noite", type: "A" },
      { text: "Encontro amigos em lugares ao ar livre", type: "B" },
      { text: "Fico em casa descansando do calor do dia", type: "C" },
      { text: "Finalmente consigo sair de casa sem morrer", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Carnaval (que é no verão) pra você é...",
    options: [
      { text: "O melhor momento do ano! Bloco, fantasia, folia", type: "A" },
      { text: "Curto alguns dias, mas com moderação", type: "B" },
      { text: "Prefiro viajar pra fugir da loucura", type: "C" },
      { text: "Feriadão pra ficar em casa e descansar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Férias de verão ideais:",
    options: [
      { text: "Praia do Nordeste, sol garantido!", type: "A" },
      { text: "Qualquer lugar com praia ou piscina", type: "B" },
      { text: "Serra ou lugares mais frescos", type: "C" },
      { text: "Exterior no inverno deles, fugir do calor", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Março chegou e o verão tá acabando. Você...",
    options: [
      { text: "Fico triste, queria verão eterno", type: "A" },
      { text: "Curti bastante, mas tô pronto(a) pro outono", type: "B" },
      { text: "Alívio, finalmente vai esfriar", type: "C" },
      { text: "Graças a Deus! Sobrevivi a mais um", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Filho do Sol",
    emoji: "☀️",
    percentage: 95,
    description: "Você é O Filho do Sol! Nasceu pra viver no verão brasileiro. Praia, calor, bronzeado... Você brilha nessa estação! Se pudesse, seria verão o ano todo!",
    characteristics: ["Energético(a)", "Extrovertido(a)", "Bronzeado(a)", "Festeiro(a)"],
    advice: "Sua energia de verão é contagiante! Só não esquece o protetor solar e de se hidratar. Amor ao sol é ótimo, mas com responsabilidade!",
  },
  B: {
    type: "B",
    title: "O Veranista Equilibrado",
    emoji: "🏖️",
    percentage: 80,
    description: "Você é O Veranista Equilibrado! Curte o verão brasileiro com moderação. Praia com guarda-sol, calor com ar-condicionado, sol com protetor. Você sabe aproveitar sem exagerar!",
    characteristics: ["Equilibrado(a)", "Sensato(a)", "Adaptável", "Curtidor(a)"],
    advice: "Você tem a fórmula certa pra aproveitar o verão! Continue assim, curtindo sem abusar. Verão bom é verão sem insolação!",
  },
  C: {
    type: "C",
    title: "O Sobrevivente do Calor",
    emoji: "🥵",
    percentage: 60,
    description: "Você é O Sobrevivente do Calor! Aguenta o verão brasileiro, mas não é fã. Prefere lugares frescos, sombra e ar-condicionado. Pra você, verão é época de resistência!",
    characteristics: ["Reservado(a)", "Cauteloso(a)", "Prático(a)", "Realista"],
    advice: "Tudo bem não amar o calor! Mas tenta aproveitar as coisas boas do verão também: frutas, dias mais longos, férias. Dá pra curtir do seu jeito!",
  },
  D: {
    type: "D",
    title: "O Time Inverno",
    emoji: "❄️",
    percentage: 40,
    description: "Você é do Time Inverno! Verão brasileiro é sua época menos favorita. O calor te derruba, o sol te queima, você conta os dias pro outono. Nasceu no país errado?",
    characteristics: ["Introspectivo(a)", "Caseiro(a)", "Sensível ao calor", "Diferentão"],
    advice: "Respeito sua preferência pelo frio! Mas talvez dê pra encontrar formas de sobreviver melhor ao verão. Serra, ar-condicionado, horários alternativos... tem como!",
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
