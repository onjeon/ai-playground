// Finanças do Casal
// Descubra como você lida com dinheiro no relacionamento!

export const questions = [
  {
    id: 1,
    question: "Sobre as finanças do casal, você acredita em:",
    options: [
      { text: "Juntar tudo numa conta só, o que é meu é nosso", type: "A" },
      { text: "Conta conjunta pra despesas comuns, mas cada um com a sua também", type: "B" },
      { text: "Cada um cuida do seu, dividimos as despesas", type: "C" },
      { text: "Depende muito da situação e acordo do casal", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando a conta do restaurante chega:",
    options: [
      { text: "Tanto faz quem paga, é tudo nosso mesmo", type: "A" },
      { text: "Geralmente um paga, depois o outro paga outra coisa", type: "B" },
      { text: "Dividimos no meio ou cada um paga o que pediu", type: "C" },
      { text: "Combinamos antes como vai ser", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Se um dos dois ganha muito mais que o outro:",
    options: [
      { text: "Natural que o que ganha mais contribua mais", type: "A" },
      { text: "Divide proporcional à renda de cada um", type: "B" },
      { text: "Ainda assim cada um paga sua parte igual", type: "C" },
      { text: "Conversamos e achamos o jeito que funciona", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sobre conversar sobre dinheiro com o parceiro(a):",
    options: [
      { text: "Total transparência, sabemos tudo um do outro", type: "A" },
      { text: "Conversamos sobre o essencial e despesas conjuntas", type: "B" },
      { text: "Cada um sabe do seu, não entramos muito em detalhes", type: "C" },
      { text: "Só quando necessário, não é nosso assunto favorito", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Se seu amor quisesse fazer uma compra grande sem te consultar:",
    options: [
      { text: "Ficaria chateado(a), deveria ter consultado", type: "A" },
      { text: "Depende do valor, mas prefiro ser informado(a)", type: "B" },
      { text: "É o dinheiro dele(a), não precisa me consultar", type: "C" },
      { text: "Conversaria sobre pra entender a situação", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sobre dívidas do parceiro(a):",
    options: [
      { text: "Viram minhas também, ajudo a pagar", type: "A" },
      { text: "Ajudo se puder, mas não é obrigação", type: "B" },
      { text: "São dele(a), não me envolvo financeiramente", type: "C" },
      { text: "Depende de como e quando contraiu as dívidas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Pra você, falar sobre dinheiro no relacionamento é:",
    options: [
      { text: "Fundamental e natural, não tem tabu", type: "A" },
      { text: "Importante, mas às vezes desconfortável", type: "B" },
      { text: "Necessário só quando envolve os dois", type: "C" },
      { text: "Delicado, prefiro evitar quando possível", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sobre poupar e investir juntos:",
    options: [
      { text: "Temos metas financeiras conjuntas definidas", type: "A" },
      { text: "Conversamos sobre futuro, mas cada um poupa o seu", type: "B" },
      { text: "Cada um cuida da própria poupança", type: "C" },
      { text: "Não pensamos muito sobre isso ainda", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Se o casal passasse por dificuldade financeira:",
    options: [
      { text: "Enfrentamos juntos, o problema é dos dois", type: "A" },
      { text: "Cada um faz o que pode, mas apoiamos um ao outro", type: "B" },
      { text: "Cada um resolve sua parte da melhor forma", type: "C" },
      { text: "Conversamos sobre como dividir as responsabilidades", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sua filosofia sobre finanças no amor é:",
    options: [
      { text: "Quando se ama, o dinheiro também é compartilhado", type: "A" },
      { text: "Equilíbrio entre união financeira e independência", type: "B" },
      { text: "Amor é amor, dinheiro é dinheiro - coisas separadas", type: "C" },
      { text: "Cada casal encontra seu jeito, não tem regra", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "União Total Financeira",
    emoji: "💑",
    percentage: 92,
    description: "Você acredita em unir completamente as finanças no relacionamento! O que é seu é do casal, total transparência e responsabilidade compartilhada. Pra você, amor e dinheiro andam juntos!",
    characteristics: ["União total", "Transparente", "Compartilha tudo", "Generoso(a)"],
    advice: "Sua visão é romântica! Mas mantenha conversas regulares sobre finanças e assegure que ambos têm a mesma visão. E ter uma reserva pessoal pequena também é saudável!",
  },
  B: {
    type: "B",
    title: "Equilíbrio Financeiro",
    emoji: "⚖️",
    percentage: 75,
    description: "Você busca equilíbrio entre união e independência financeira! Compartilha despesas e tem conta conjunta, mas também preserva sua individualidade. O melhor dos dois mundos!",
    characteristics: ["Equilibrado(a)", "Organizado(a)", "Prático(a)", "Independente parcialmente"],
    advice: "Você achou um modelo saudável! Continue mantendo transparência sobre as finanças compartilhadas e respeite o espaço individual de cada um. Comunicação é a chave!",
  },
  C: {
    type: "C",
    title: "Independência Financeira",
    emoji: "💪",
    percentage: 55,
    description: "Você prefere manter independência financeira no relacionamento! Cada um cuida do seu dinheiro e dividem as despesas comuns. Amor não significa misturar contas bancárias!",
    characteristics: ["Independente", "Autogestão", "Prático(a)", "Separado financeiramente"],
    advice: "Sua independência é válida! Só não deixe que a separação financeira crie distância emocional. Conversar sobre dinheiro e ter alguns objetivos comuns pode fortalecer a relação!",
  },
  D: {
    type: "D",
    title: "Flexível Caso a Caso",
    emoji: "🔄",
    percentage: 60,
    description: "Você não tem uma posição rígida sobre finanças no casal! Acredita que cada relacionamento encontra seu jeito e prefere adaptar conforme a situação. Conversa é mais importante que regras!",
    characteristics: ["Flexível", "Adaptável", "Comunicativo(a)", "Sem posição fixa"],
    advice: "Flexibilidade é boa! Mas é importante definir acordos claros pra evitar mal-entendidos. Sente com seu par e definam juntos como vai funcionar pra vocês!",
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
