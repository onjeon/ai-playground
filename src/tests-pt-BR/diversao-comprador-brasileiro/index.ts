// Qual Tipo de Comprador Você É?
// Descubra seu perfil de compras!

export const questions = [
  {
    id: 1,
    question: "Você faz lista antes de ir às compras?",
    options: [
      { text: "Sempre! Lista detalhada", type: "A" },
      { text: "Às vezes, uma lista mental", type: "B" },
      { text: "Raramente, vou vendo o que preciso", type: "C" },
      { text: "Nunca, compro o que der vontade", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você pesquisa preços antes de comprar?",
    options: [
      { text: "Muito! Em vários lugares", type: "A" },
      { text: "Dou uma olhada básica", type: "B" },
      { text: "Só em compras maiores", type: "C" },
      { text: "Não, compro onde encontrar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você compra por impulso?",
    options: [
      { text: "Nunca! Só o planejado", type: "A" },
      { text: "Raramente, me controlo", type: "B" },
      { text: "Às vezes, se gostar muito", type: "C" },
      { text: "Sempre! Não resisto", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você paga suas compras?",
    options: [
      { text: "À vista, com desconto", type: "A" },
      { text: "Cartão de débito ou PIX", type: "B" },
      { text: "Cartão de crédito, sem juros", type: "C" },
      { text: "Parcelo tudo, sempre", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você guarda notas fiscais?",
    options: [
      { text: "Todas! Organizadas por data", type: "A" },
      { text: "As mais importantes", type: "B" },
      { text: "Às vezes, quando lembro", type: "C" },
      { text: "Nunca, jogo fora", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você leva sacola de casa?",
    options: [
      { text: "Sempre! Ecologicamente correto", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Às vezes, quando lembro", type: "C" },
      { text: "Nunca, compro sacola lá", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você olha data de validade?",
    options: [
      { text: "Sempre! De tudo", type: "A" },
      { text: "Das coisas mais importantes", type: "B" },
      { text: "Às vezes", type: "C" },
      { text: "Quase nunca", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você compra marca ou genérico?",
    options: [
      { text: "Genérico, economia primeiro", type: "A" },
      { text: "Depende do produto", type: "B" },
      { text: "Prefiro marcas conhecidas", type: "C" },
      { text: "Só marca, qualidade importa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quanto tempo você leva fazendo compras?",
    options: [
      { text: "Rápido, sei o que quero", type: "A" },
      { text: "Tempo normal, tranquilo", type: "B" },
      { text: "Demoro, gosto de olhar", type: "C" },
      { text: "Horas! Adoro comprar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você experimenta antes de comprar?",
    options: [
      { text: "Sempre! Não compro sem provar", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Às vezes, quando dá", type: "C" },
      { text: "Raramente, levo e vejo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você se arrepende de compras?",
    options: [
      { text: "Quase nunca, planejo bem", type: "A" },
      { text: "Raramente", type: "B" },
      { text: "Às vezes acontece", type: "C" },
      { text: "Frequentemente, compro demais", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define nas compras?",
    options: [
      { text: "'Só o necessário'", type: "A" },
      { text: "'Equilíbrio é tudo'", type: "B" },
      { text: "'Se eu gostar, eu levo'", type: "C" },
      { text: "'Comprar é terapia!'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Comprador Planejado",
    emoji: "📋",
    description: "Você é o Comprador Planejado! Lista, pesquisa de preço, pagamento à vista. Você não é enganado e economiza. O consumidor consciente!",
    traits: ["Planejado(a)", "Econômico(a)", "Organizado(a)", "Consciente"],
    strengths: ["Economia", "Sem arrependimentos", "Organização", "Controle"],
    weaknesses: ["Pode perder oportunidades", "Muito rígido", "Sem espontaneidade"],
    tips: ["Ótimo controle", "Às vezes vale se dar um presente", "Continue planejando"],
  },
  B: {
    type: "B",
    title: "Comprador Equilibrado",
    emoji: "⚖️",
    description: "Você é o Comprador Equilibrado! Nem muito planejado, nem impulsivo. Você compra o que precisa com consciência, mas sabe aproveitar uma boa oferta!",
    traits: ["Equilibrado(a)", "Consciente", "Flexível", "Sensato(a)"],
    strengths: ["Equilíbrio", "Bom senso", "Flexibilidade"],
    weaknesses: ["Pode ceder às vezes", "Nem sempre pesquisa"],
    tips: ["Ótimo equilíbrio", "Continue assim", "Você é o ideal"],
  },
  C: {
    type: "C",
    title: "Comprador Emocional",
    emoji: "❤️",
    description: "Você é o Comprador Emocional! Compra pelo coração, não pela razão. Se gostar, se apaixonar, leva. Às vezes se arrepende, mas a emoção vale!",
    traits: ["Emocional", "Impulsivo(a)", "Apaixonado(a)", "Espontâneo(a)"],
    strengths: ["Aproveita a vida", "Sem arrependimentos do momento", "Espontaneidade"],
    weaknesses: ["Gastos desnecessários", "Arrependimento depois", "Sem controle"],
    tips: ["Cuidado com o cartão", "Pense antes de comprar", "Emoção é boa, mas..."],
  },
  D: {
    type: "D",
    title: "Comprador Compulsivo",
    emoji: "🛒",
    description: "Você é o Comprador Compulsivo! Comprar é terapia, prazer, vício. Você não resiste a uma vitrine ou promoção. O cartão que sofre!",
    traits: ["Compulsivo(a)", "Viciado(a) em compras", "Impulsivo(a)", "Gastador(a)"],
    strengths: ["Sempre tem coisas novas", "Generoso(a)", "Aproveita ofertas"],
    weaknesses: ["Dívidas", "Arrependimento", "Descontrole financeiro", "Casa cheia de coisas"],
    tips: ["Cuidado com as finanças", "Comprar não preenche vazios", "Busque ajuda se precisar"],
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
