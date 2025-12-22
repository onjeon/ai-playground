// Qual Seu Perfil de Delivery?
// Descubra como você é quando pede comida por aplicativo!

export const questions = [
  {
    id: 1,
    question: "Com que frequência você pede delivery?",
    options: [
      { text: "Quase todo dia, sou cliente VIP", type: "A" },
      { text: "Fins de semana e ocasiões especiais", type: "B" },
      { text: "Raramente, prefiro cozinhar", type: "C" },
      { text: "Quando tenho cupom ou promoção", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que você mais pede?",
    options: [
      { text: "Sempre algo diferente, exploro opções", type: "A" },
      { text: "Meus restaurantes favoritos de sempre", type: "B" },
      { text: "Comida saudável quando não posso cozinhar", type: "C" },
      { text: "O que estiver mais barato ou em promoção", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você trata o entregador?",
    options: [
      { text: "Conheço vários pelo nome, dou gorjeta", type: "A" },
      { text: "Sempre educado e agradeço", type: "B" },
      { text: "Interação mínima, pego e agradeço", type: "C" },
      { text: "Depende se chegou rápido e certo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O pedido atrasou. Você...",
    options: [
      { text: "Já estou no chat reclamando", type: "A" },
      { text: "Espero mais um pouco, pode acontecer", type: "B" },
      { text: "Por isso prefiro cozinhar...", type: "C" },
      { text: "Vou pedir reembolso ou cupom", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como é seu carrinho de compras?",
    options: [
      { text: "Cheio, peço pra semana toda", type: "A" },
      { text: "Certinho, só o que vou comer", type: "B" },
      { text: "Mínimo, peço só quando muito necessário", type: "C" },
      { text: "Calculado pra fechar frete grátis", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual sua relação com avaliações?",
    options: [
      { text: "Avalio tudo, sempre dou opinião", type: "A" },
      { text: "Avalio quando é muito bom ou muito ruim", type: "B" },
      { text: "Raramente avalio", type: "C" },
      { text: "Avalio se der cupom de desconto", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Veio algo errado no pedido. Você...",
    options: [
      { text: "Reclamo imediatamente no app", type: "A" },
      { text: "Reclamo se for muito grave", type: "B" },
      { text: "Aceito e como assim mesmo", type: "C" },
      { text: "Peço reembolso total", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quanto tempo você passa escolhendo?",
    options: [
      { text: "Bastante, gosto de ver todas as opções", type: "A" },
      { text: "Pouco, sei o que quero", type: "B" },
      { text: "Mínimo, qualquer coisa serve", type: "C" },
      { text: "Até achar a melhor promoção", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que mais influencia sua escolha?",
    options: [
      { text: "Novidades e variedade", type: "A" },
      { text: "Qualidade e confiança", type: "B" },
      { text: "Praticidade e rapidez", type: "C" },
      { text: "Preço e promoções", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Quantos apps de delivery você tem?",
    options: [
      { text: "Todos! Cada um tem vantagens", type: "A" },
      { text: "2 ou 3 que uso regularmente", type: "B" },
      { text: "1 só, o mais prático", type: "C" },
      { text: "Vários, pra comparar preços", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que você faz enquanto espera?",
    options: [
      { text: "Fico rastreando o entregador", type: "A" },
      { text: "Faço outras coisas normalmente", type: "B" },
      { text: "Arrumo a mesa e preparo o ambiente", type: "C" },
      { text: "Verifico se não tinha opção mais barata", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual sua relação com gorjetas?",
    options: [
      { text: "Sempre dou, é justo", type: "A" },
      { text: "Dou quando o serviço é bom", type: "B" },
      { text: "Às vezes, quando lembro", type: "C" },
      { text: "Só se estiver incluso no preço", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Heavy User de Delivery",
    emoji: "🛵",
    description: "Você é o Heavy User! Delivery é estilo de vida pra você. Conhece todos os restaurantes, entregadores te conhecem pelo nome e seus apps estão sempre abertos!",
    traits: ["Frequente", "Explorador(a)", "Engajado(a)", "Exigente"],
    strengths: ["Conhecimento de opções", "Apoio ao comércio local", "Praticidade", "Feedbacks úteis"],
    weaknesses: ["Gasta muito", "Pouco saudável", "Dependência de apps"],
    tips: ["Cozinhe às vezes", "Controle os gastos", "Nem sempre delivery é a melhor opção"],
  },
  B: {
    type: "B",
    title: "Usuário Equilibrado",
    emoji: "⚖️",
    description: "Você é o usuário equilibrado! Usa delivery quando faz sentido, tem seus favoritos e não depende disso. Delivery é conveniência, não necessidade!",
    traits: ["Equilibrado(a)", "Seletivo(a)", "Prático(a)", "Consciente"],
    strengths: ["Uso consciente", "Bom equilíbrio", "Escolhas certeiras", "Controle financeiro"],
    weaknesses: ["Pode perder promoções", "Às vezes previsível", "Menos explorativo"],
    tips: ["Experimente coisas novas", "Às vezes vale a pena gastar mais", "Explore mais opções"],
  },
  C: {
    type: "C",
    title: "Anti-Delivery",
    emoji: "🍳",
    description: "Você é o Anti-Delivery! Prefere cozinhar e só pede quando realmente não tem jeito. Delivery é último recurso, não primeira opção!",
    traits: ["Autossuficiente", "Caseiro(a)", "Econômico(a)", "Saudável"],
    strengths: ["Economia", "Alimentação saudável", "Independência", "Habilidades culinárias"],
    weaknesses: ["Perde conveniências", "Às vezes inflexível", "Trabalho excessivo"],
    tips: ["Delivery não é pecado", "Descanse às vezes", "A praticidade tem seu valor"],
  },
  D: {
    type: "D",
    title: "Caçador de Promoções",
    emoji: "💰",
    description: "Você é o caçador de promoções! Só pede com cupom, compara preços em todos os apps e conhece todas as táticas para economizar. Se não tiver desconto, não pede!",
    traits: ["Econômico(a)", "Estratégico(a)", "Paciente", "Calculista"],
    strengths: ["Economia garantida", "Conhecimento de táticas", "Paciência", "Controle financeiro"],
    weaknesses: ["Perde boas opções por preço", "Muito calculista", "Às vezes obsessivo"],
    tips: ["Às vezes vale pagar mais", "Tempo também é dinheiro", "Qualidade tem seu preço"],
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
