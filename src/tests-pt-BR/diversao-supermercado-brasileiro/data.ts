// Qual Seu Tipo no Supermercado?
// Descubra como você se comporta nas compras!

export const questions = [
  {
    id: 1,
    question: "Você vai ao supermercado. Leva lista?",
    options: [
      { text: "Sim, lista detalhada e organizada por corredor", type: "A" },
      { text: "Lista básica no celular, só o essencial", type: "B" },
      { text: "Lista? Vou lembrando conforme ando", type: "C" },
      { text: "Vou no feeling, compro o que der vontade", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Promoção de 'leve 3 pague 2'. Você...",
    options: [
      { text: "Compro só se estava na minha lista", type: "A" },
      { text: "Analiso se realmente vale a pena", type: "B" },
      { text: "Levo! Promoção é promoção", type: "C" },
      { text: "Já estou colocando no carrinho", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você escolhe frutas e verduras?",
    options: [
      { text: "Aperto, cheiro, analiso cada uma com cuidado", type: "A" },
      { text: "Olho rapidamente e pego as melhores", type: "B" },
      { text: "Pego as primeiras que vejo", type: "C" },
      { text: "Compro pronto/cortado pra não ter trabalho", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Chegou na fila do caixa e lembrou de algo. Você...",
    options: [
      { text: "Fico na fila, não vale a pena sair", type: "A" },
      { text: "Peço pra pessoa de trás guardar o lugar", type: "B" },
      { text: "Saio correndo pra pegar rapidinho", type: "C" },
      { text: "Mando mensagem pra alguém buscar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sua relação com as amostras grátis:",
    options: [
      { text: "Ignoro, não caio nessa", type: "A" },
      { text: "Provo se parecer bom", type: "B" },
      { text: "Provo tudo que oferecem", type: "C" },
      { text: "Volto umas 3 vezes de boas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você compara preços?",
    options: [
      { text: "Olho preço por kg/ml de tudo", type: "A" },
      { text: "Comparo as principais marcas", type: "B" },
      { text: "Pego o mais barato ou a marca conhecida", type: "C" },
      { text: "Não comparo, pego o que já sei que gosto", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Na hora de pagar, você...",
    options: [
      { text: "Confiro todos os preços no visor", type: "A" },
      { text: "Dou uma olhada geral no total", type: "B" },
      { text: "Confio no sistema e pago logo", type: "C" },
      { text: "Já estou pensando no que vou comer", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Seu carrinho geralmente fica...",
    options: [
      { text: "Organizado: pesados embaixo, frágeis em cima", type: "A" },
      { text: "Relativamente arrumado", type: "B" },
      { text: "Um monte de coisa jogada", type: "C" },
      { text: "Transbordando de coisas", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quanto tempo você leva no mercado?",
    options: [
      { text: "O mínimo possível, sou eficiente", type: "A" },
      { text: "O necessário, sem pressa nem enrolação", type: "B" },
      { text: "Bastante tempo, gosto de olhar tudo", type: "C" },
      { text: "Perco a noção do tempo lá dentro", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Chegou em casa e percebeu que esqueceu algo. Você...",
    options: [
      { text: "Impossível, minha lista é perfeita", type: "A" },
      { text: "Fico irritado(a), mas anoto pra próxima", type: "B" },
      { text: "Acontece toda vez, normal", type: "C" },
      { text: "Peço delivery ou improviso na cozinha", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Planejador Master",
    emoji: "📋",
    percentage: 95,
    description: "Você é O Planejador Master! Vai ao mercado com missão definida, lista na mão e foco total. Não cai em promoção cilada, não demora e não esquece nada. Você é o terror do marketing do supermercado!",
    characteristics: ["Organizado(a)", "Eficiente", "Focado(a)", "Econômico(a)"],
    advice: "Sua organização é invejável! Mas às vezes vale relaxar e se permitir uma compra por impulso. Não precisa ser sempre tão certinho(a)!",
  },
  B: {
    type: "B",
    title: "O Comprador Equilibrado",
    emoji: "⚖️",
    percentage: 80,
    description: "Você é O Comprador Equilibrado! Tem noção do que precisa, compara preços mas não neuroticamente. Às vezes leva algo extra, mas nada absurdo. Você é o brasileiro médio do supermercado!",
    characteristics: ["Equilibrado(a)", "Prático(a)", "Sensato(a)", "Flexível"],
    advice: "Você achou o equilíbrio perfeito! Continue assim, sem neura mas também sem descontrole. Sua praticidade te leva longe.",
  },
  C: {
    type: "C",
    title: "O Passeador de Corredores",
    emoji: "🛒",
    percentage: 70,
    description: "Você é O Passeador de Corredores! Ir ao mercado é um programa, não uma tarefa. Anda por todos os corredores, olha as novidades, prova as amostras. Às vezes esquece o que foi buscar!",
    characteristics: ["Curioso(a)", "Descontraído(a)", "Distraído(a)", "Explorador(a)"],
    advice: "Que bom que você curte fazer compras! Mas talvez uma listinha ajudasse a não voltar pra casa sem o essencial. Só uma sugestão!",
  },
  D: {
    type: "D",
    title: "O Comprador por Impulso",
    emoji: "🤑",
    percentage: 60,
    description: "Você é O Comprador por Impulso! Vai comprar pão e volta com o carrinho cheio. Promoção? Leva. Lançamento? Experimenta. Amostra grátis? Repete. O supermercado ama você!",
    characteristics: ["Espontâneo(a)", "Impulsivo(a)", "Generoso(a)", "Desorganizado(a)"],
    advice: "Sua espontaneidade é divertida, mas cuidado com o orçamento! Tenta ir ao mercado com um limite em mente. Seu cartão de crédito agradece!",
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
