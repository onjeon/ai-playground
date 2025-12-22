// Qual Estação do Ano Você É?
// Descubra qual estação combina com sua personalidade!

export const questions = [
  {
    id: 1,
    question: "Qual programa de final de semana te atrai mais?",
    options: [
      { text: "Praia, piscina e sol", type: "A" },
      { text: "Café, cobertor e filme em casa", type: "B" },
      { text: "Trilha na natureza ou parque", type: "C" },
      { text: "Festa junina ou evento ao ar livre", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual bebida combina mais com você?",
    options: [
      { text: "Água de coco gelada ou caipirinha", type: "A" },
      { text: "Chocolate quente ou vinho", type: "B" },
      { text: "Suco natural ou chá gelado", type: "C" },
      { text: "Quentão ou café com bolo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você se sente com calor intenso?",
    options: [
      { text: "Amo! Quanto mais quente, melhor", type: "A" },
      { text: "Sofro demais, prefiro frio", type: "B" },
      { text: "Gosto de clima ameno, nem muito quente", type: "C" },
      { text: "Aguento bem, mas prefiro friozinho", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual roupa você mais gosta de usar?",
    options: [
      { text: "Shorts, regata e chinelo", type: "A" },
      { text: "Moletom, casaco e botas", type: "B" },
      { text: "Roupas leves mas confortáveis", type: "C" },
      { text: "Jeans, camiseta e jaqueta", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual comida te dá mais vontade?",
    options: [
      { text: "Açaí, sorvete e frutas geladas", type: "A" },
      { text: "Fondue, sopas e caldos", type: "B" },
      { text: "Saladas frescas e comidas leves", type: "C" },
      { text: "Pipoca, pamonha e comidas de festa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como é sua energia no dia a dia?",
    options: [
      { text: "Alta! Gosto de agitação e movimento", type: "A" },
      { text: "Mais baixa, prefiro calma e aconchego", type: "B" },
      { text: "Equilibrada, gosto de renovação", type: "C" },
      { text: "Variável, depende do dia", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual cenário te faz mais feliz?",
    options: [
      { text: "Praia lotada com sol forte", type: "A" },
      { text: "Lareira acesa em dia de chuva", type: "B" },
      { text: "Campos floridos e árvores verdes", type: "C" },
      { text: "Fogueira com céu estrelado", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você lida com dias chuvosos?",
    options: [
      { text: "Odeio! Estraga meus planos", type: "A" },
      { text: "Adoro! Perfeito pra ficar em casa", type: "B" },
      { text: "Gosto quando traz renovação", type: "C" },
      { text: "Depende, às vezes é aconchegante", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual feriado você mais curte?",
    options: [
      { text: "Carnaval ou Ano Novo na praia", type: "A" },
      { text: "Natal ou Dia dos Namorados", type: "B" },
      { text: "Páscoa ou feriados de outono", type: "C" },
      { text: "Festa Junina ou São João", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que te incomoda mais?",
    options: [
      { text: "Frio intenso e dias cinzas", type: "A" },
      { text: "Calor extremo e suor", type: "B" },
      { text: "Extremos de temperatura", type: "C" },
      { text: "Monotonia climática", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Verão",
    emoji: "☀️",
    percentage: 90,
    description: "Você é puro Verão! Sua energia é contagiante, você ama sol, praia e agitação. Pessoas como você iluminam qualquer ambiente e trazem calor humano por onde passam!",
    characteristics: ["Energético(a)", "Extrovertido(a)", "Alegre", "Aventureiro(a)"],
    advice: "Sua energia solar é maravilhosa, mas lembre-se de descansar às vezes. Nem todo dia precisa ser uma festa - momentos de calma também recarregam.",
  },
  B: {
    type: "B",
    title: "Inverno",
    emoji: "❄️",
    percentage: 75,
    description: "Você é Inverno! Valoriza aconchego, introspecção e momentos íntimos. Sua profundidade emocional e capacidade de reflexão são qualidades raras e preciosas!",
    characteristics: ["Introspectivo(a)", "Acolhedor(a)", "Profundo(a)", "Sensível"],
    advice: "Seu mundo interior é rico, mas não se isole demais. Às vezes sair da zona de conforto e pegar um sol pode fazer muito bem para a alma.",
  },
  C: {
    type: "C",
    title: "Primavera",
    emoji: "🌸",
    percentage: 80,
    description: "Você é Primavera! Representa renovação, equilíbrio e esperança. Assim como a estação, você traz frescor e novos começos para a vida das pessoas ao seu redor!",
    characteristics: ["Otimista", "Equilibrado(a)", "Renovador(a)", "Gentil"],
    advice: "Sua capacidade de renovação é inspiradora! Continue florescendo e ajudando outros a encontrarem seus novos começos também.",
  },
  D: {
    type: "D",
    title: "Outono",
    emoji: "🍂",
    percentage: 70,
    description: "Você é Outono! Uma mistura perfeita de aconchego e movimento. Assim como a estação das colheitas, você sabe aproveitar os frutos do trabalho e curtir a vida!",
    characteristics: ["Aconchegante", "Nostálgico(a)", "Festivo(a)", "Versátil"],
    advice: "Você sabe apreciar as transições da vida como ninguém. Continue celebrando cada fase e compartilhando esse calor com quem está por perto.",
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
