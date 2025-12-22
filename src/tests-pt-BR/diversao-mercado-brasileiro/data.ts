// Seu Estilo no Mercado
// Descubra que tipo de consumidor brasileiro você é!

export const questions = [
  {
    id: 1,
    question: "Você entra no supermercado pra comprar pão. Sai com...",
    options: [
      { text: "Só o pão, conforme planejado", type: "A" },
      { text: "Pão, queijo, presunto e uma coca", type: "B" },
      { text: "Carrinho cheio, nem sei como aconteceu", type: "C" },
      { text: "Nada, porque o pão tava caro demais", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sua relação com lista de compras é...",
    options: [
      { text: "Faço e sigo à risca, item por item", type: "A" },
      { text: "Faço, mas acabo comprando outras coisas também", type: "B" },
      { text: "Lista? Vou no feeling", type: "C" },
      { text: "Faço lista comparando preços de vários mercados", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Na seção de ofertas, você...",
    options: [
      { text: "Passo reto, só compro o que preciso", type: "A" },
      { text: "Dou uma olhadinha rápida", type: "B" },
      { text: "É minha primeira parada obrigatória", type: "C" },
      { text: "Analiso se a oferta é boa mesmo ou cilada", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quando vê aquela promoção 'leve 3 pague 2'...",
    options: [
      { text: "Só levo se realmente precisar de 3", type: "A" },
      { text: "Levo, sempre dá pra usar depois", type: "B" },
      { text: "Levo 6 pra pagar 4, melhor ainda!", type: "C" },
      { text: "Calculo o preço unitário pra ver se vale", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Na seção de hortifruti, você...",
    options: [
      { text: "Pego o que precisa, sem muita análise", type: "A" },
      { text: "Escolho as frutas uma por uma", type: "B" },
      { text: "Levo mais porque tava tudo bonito", type: "C" },
      { text: "Comparo preço por quilo e qualidade", type: "D" },
    ],
  },
  {
    id: 6,
    question: "O carrinho ou a cestinha?",
    options: [
      { text: "Cestinha, sei que vou comprar pouco", type: "A" },
      { text: "Carrinho pequeno, vai que preciso", type: "B" },
      { text: "Carrinhão, nunca se sabe", type: "C" },
      { text: "Depende do que vou comprar, planejo antes", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Produtos de marca vs genéricos...",
    options: [
      { text: "Compro a marca que gosto, sem discussão", type: "A" },
      { text: "Misturo, depende do produto", type: "B" },
      { text: "Se tá na promoção, levo qualquer um", type: "C" },
      { text: "Sempre o mais barato, marca não importa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Na fila do caixa, você...",
    options: [
      { text: "Vou pro caixa rápido, tenho pressa", type: "A" },
      { text: "Fico olhando as guloseimas na prateleira", type: "B" },
      { text: "Acabo levando mais umas coisinhas ali", type: "C" },
      { text: "Confiro se não esqueci nada da lista", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Encontra um produto novo interessante. Você...",
    options: [
      { text: "Deixo pra próxima, hoje não tá na lista", type: "A" },
      { text: "Levo pra experimentar, por que não?", type: "B" },
      { text: "Levo dois, vai que acaba!", type: "C" },
      { text: "Pesquiso o preço no celular antes", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Seu carrinho ideal seria cheio de...",
    options: [
      { text: "O básico: arroz, feijão, carne e verduras", type: "A" },
      { text: "Coisas gostosas pra semana toda", type: "B" },
      { text: "De tudo um pouco, adoro variedade!", type: "C" },
      { text: "Só ofertas e economia", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Focado",
    emoji: "🎯",
    percentage: 80,
    description: "Você é O Focado! Entra no mercado com missão definida e sai só com o necessário. Seu carrinho é enxuto, seu tempo é precioso. Não cai em tentação de oferta nenhuma!",
    characteristics: ["Objetivo(a)", "Disciplinado(a)", "Prático(a)", "Decidido(a)"],
    advice: "Sua disciplina é admirável! Mas de vez em quando, permita-se uma coisinha fora da lista. A vida também é feita de pequenos prazeres inesperados!",
  },
  B: {
    type: "B",
    title: "O Equilibrado",
    emoji: "⚖️",
    percentage: 75,
    description: "Você é O Equilibrado! Vai com lista mas sabe aproveitar uma boa oportunidade. Não exagera, mas também não se priva. O carrinho sempre tem o necessário e um agradinho!",
    characteristics: ["Sensato(a)", "Flexível", "Moderado(a)", "Consciente"],
    advice: "Você encontrou o equilíbrio perfeito! Continue assim, sabendo dosar planejamento e espontaneidade nas compras.",
  },
  C: {
    type: "C",
    title: "O Comprador Empolgado",
    emoji: "🛒",
    percentage: 90,
    description: "Você é O Comprador Empolgado! O supermercado é seu parque de diversões. Cada corredor é uma nova aventura, cada oferta uma oportunidade. Seu carrinho sempre sai transbordando de surpresas!",
    characteristics: ["Impulsivo(a)", "Entusiasmado(a)", "Generoso(a)", "Espontâneo(a)"],
    advice: "Sua energia é contagiante! Mas talvez uma listinha ajude a controlar um pouco o orçamento. Guarde a empolgação pras coisas realmente especiais!",
  },
  D: {
    type: "D",
    title: "O Caçador de Ofertas",
    emoji: "🔍",
    percentage: 85,
    description: "Você é O Caçador de Ofertas! Conhece o preço de tudo, compara mercados e nunca paga mais caro. Seu celular é sua arma e o folheto de ofertas é sua bíblia. Economia é seu segundo nome!",
    characteristics: ["Econômico(a)", "Atento(a)", "Pesquisador(a)", "Estratégico(a)"],
    advice: "Sua habilidade de economizar é impressionante! Só não deixe de aproveitar a vida por causa de alguns reais. Às vezes vale pagar um pouco mais pela conveniência.",
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
