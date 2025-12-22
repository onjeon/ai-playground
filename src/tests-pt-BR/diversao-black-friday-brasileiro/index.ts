// Qual Seu Perfil de Black Friday?
// Descubra como você é nas promoções!

export const questions = [
  {
    id: 1,
    question: "Você se prepara pra Black Friday?",
    options: [
      { text: "Sim! Lista, comparador de preços, tudo", type: "A" },
      { text: "Dou uma olhada no que pode interessar", type: "B" },
      { text: "Vejo na hora se tem algo bom", type: "C" },
      { text: "Ignoro completamente", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você acorda cedo/fica acordado pra Black Friday?",
    options: [
      { text: "Sim! Madrugada no site esperando", type: "A" },
      { text: "Acordo um pouco mais cedo", type: "B" },
      { text: "Vejo em horário normal", type: "C" },
      { text: "Nem lembro quando é", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você compra coisas que não precisa por causa do desconto?",
    options: [
      { text: "Sim, se tá barato eu compro!", type: "A" },
      { text: "Às vezes me deixo levar", type: "B" },
      { text: "Raramente, sou controlado", type: "C" },
      { text: "Nunca, só compro o necessário", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você verifica se o desconto é real?",
    options: [
      { text: "Sempre! Comparo preços antes", type: "A" },
      { text: "Às vezes verifico", type: "B" },
      { text: "Confio na loja", type: "C" },
      { text: "Nem compro, então não preciso", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quanto você gasta na Black Friday?",
    options: [
      { text: "Muito! É o momento de comprar", type: "A" },
      { text: "Um valor considerável, planejado", type: "B" },
      { text: "Pouco, só algo específico", type: "C" },
      { text: "Nada, não compro nessa época", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você vai a lojas físicas na Black Friday?",
    options: [
      { text: "Sim! Enfrento fila e tudo", type: "A" },
      { text: "Prefiro online, mas vou se precisar", type: "B" },
      { text: "Só online, odeio multidão", type: "C" },
      { text: "Não vou a lugar nenhum", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você já se arrependeu de compra de Black Friday?",
    options: [
      { text: "Várias vezes, comprei besteira", type: "A" },
      { text: "Uma ou outra vez", type: "B" },
      { text: "Raramente, compro pensado", type: "C" },
      { text: "Não compro, não me arrependo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você acompanha preços semanas antes?",
    options: [
      { text: "Sim, pra pegar a 'Black Fraude'", type: "A" },
      { text: "De alguns produtos específicos", type: "B" },
      { text: "Não muito", type: "C" },
      { text: "Não me interesso", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que você mais compra na Black Friday?",
    options: [
      { text: "Eletrônicos, TV, celular", type: "A" },
      { text: "Eletrodomésticos e coisas de casa", type: "B" },
      { text: "Roupas e acessórios", type: "C" },
      { text: "Nada, é tudo golpe", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você parcela as compras de Black Friday?",
    options: [
      { text: "Sim, 12x sem juros!", type: "A" },
      { text: "Às vezes, se valer a pena", type: "B" },
      { text: "Prefiro à vista com desconto", type: "C" },
      { text: "Não compro parcelado", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você indica promoções pros amigos?",
    options: [
      { text: "Sim! Mando tudo no grupo", type: "A" },
      { text: "Às vezes, quando é muito bom", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Não, cada um cuida do seu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define na Black Friday?",
    options: [
      { text: "'Compra agora, pensa depois!'", type: "A" },
      { text: "'Vou aproveitar com planejamento'", type: "B" },
      { text: "'Só se for muito bom mesmo'", type: "C" },
      { text: "'Black Friday é golpe'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Maratonista da Black Friday",
    emoji: "🛒",
    description: "Você é Maratonista da Black Friday! Vive pra esse dia. Lista, alarme, madrugada no site, carrinho cheio. Você é o consumidor que as lojas amam!",
    traits: ["Compulsivo(a)", "Preparado(a)", "Ansioso(a)", "Consumista"],
    strengths: ["Pega boas ofertas", "Preparado", "Não perde nada"],
    weaknesses: ["Gasta demais", "Compra besteira", "Pode cair em golpe"],
    tips: ["Faça lista do que PRECISA", "Nem tudo é desconto real", "Controle o impulso"],
  },
  B: {
    type: "B",
    title: "Comprador Estratégico",
    emoji: "🎯",
    description: "Você é o Comprador Estratégico! Aproveita a Black Friday com planejamento. Sabe o que quer, compara preços e faz boas compras sem exagero!",
    traits: ["Planejado(a)", "Inteligente", "Controlado(a)", "Esperto(a)"],
    strengths: ["Compras inteligentes", "Economia real", "Sem arrependimento"],
    weaknesses: ["Pode deixar passar oportunidades", "Muito racional"],
    tips: ["Ótima estratégia", "Continue assim", "Você sabe aproveitar"],
  },
  C: {
    type: "C",
    title: "Comprador Casual",
    emoji: "🤷",
    description: "Você é o Comprador Casual! A Black Friday não te empolga muito. Compra se tiver algo realmente bom, mas não faz questão. Tem outras prioridades!",
    traits: ["Desapegado(a)", "Casual", "Controlado(a)", "Indiferente"],
    strengths: ["Não gasta à toa", "Imune a propaganda", "Controlado"],
    weaknesses: ["Pode perder boas ofertas", "Desatualizado"],
    tips: ["Tá bom assim", "Às vezes tem coisa boa", "Você não precisa participar"],
  },
  D: {
    type: "D",
    title: "Cético da Black Friday",
    emoji: "🚫",
    description: "Você é o Cético da Black Friday! Não acredita nas promoções, acha tudo golpe e se recusa a participar. 'Metade do dobro' não te engana!",
    traits: ["Cético(a)", "Resistente", "Desconfiado(a)", "Econômico(a)"],
    strengths: ["Não cai em golpe", "Economia garantida", "Imune ao consumismo"],
    weaknesses: ["Pode perder ofertas reais", "Muito desconfiado", "Fecha oportunidades"],
    tips: ["Tem razão em desconfiar", "Mas nem tudo é golpe", "Pesquise antes de descartar"],
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
