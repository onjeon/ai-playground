// Qual Tipo de Cliente Brasileiro Você É?
// Descubra seu perfil como consumidor!

export const questions = [
  {
    id: 1,
    question: "Você reclama quando algo está errado?",
    options: [
      { text: "Sempre! Pago, exijo qualidade", type: "A" },
      { text: "Sim, de forma educada", type: "B" },
      { text: "Às vezes, depende da situação", type: "C" },
      { text: "Raramente, não gosto de confusão", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você pechincha/pede desconto?",
    options: [
      { text: "Sempre! Nunca pago o preço cheio", type: "A" },
      { text: "Às vezes, quando faz sentido", type: "B" },
      { text: "Raramente, tenho vergonha", type: "C" },
      { text: "Nunca, pago o que tá marcado", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você trata funcionários de loja/restaurante?",
    options: [
      { text: "Exijo bom atendimento, sou cliente", type: "A" },
      { text: "Com respeito, mas cobro quando precisa", type: "B" },
      { text: "Sempre gentil e compreensivo", type: "C" },
      { text: "Nem interajo muito", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você deixa gorjeta?",
    options: [
      { text: "Só se o atendimento for excepcional", type: "A" },
      { text: "Geralmente sim, 10% normal", type: "B" },
      { text: "Sempre, independente do serviço", type: "C" },
      { text: "Não costumo dar gorjeta", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você pesquisa preço antes de comprar?",
    options: [
      { text: "Muito! Comparo em vários lugares", type: "A" },
      { text: "Pesquiso o básico", type: "B" },
      { text: "Às vezes, se for caro", type: "C" },
      { text: "Compro onde achar primeiro", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você usa cupom de desconto?",
    options: [
      { text: "Sempre! Tenho app de cupom", type: "A" },
      { text: "Quando lembro, sim", type: "B" },
      { text: "Às vezes, se aparecer", type: "C" },
      { text: "Nunca, dá trabalho", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você volta a um lugar com atendimento ruim?",
    options: [
      { text: "Nunca! E ainda aviso os outros", type: "A" },
      { text: "Dou outra chance, mas fico de olho", type: "B" },
      { text: "Às vezes, se o produto for bom", type: "C" },
      { text: "Sim, não ligo muito pra atendimento", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você faz avaliação online de lugares?",
    options: [
      { text: "Sempre! Especialmente se for ruim", type: "A" },
      { text: "Às vezes, quando é muito bom ou ruim", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Nunca", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você compra no impulso?",
    options: [
      { text: "Não! Só compro o que planejei", type: "A" },
      { text: "Às vezes escapole algo", type: "B" },
      { text: "Frequentemente, se gostar", type: "C" },
      { text: "Sempre, não resisto", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você lê os termos/contratos antes de assinar?",
    options: [
      { text: "Sempre, palavra por palavra", type: "A" },
      { text: "Dou uma olhada geral", type: "B" },
      { text: "Só se for muito importante", type: "C" },
      { text: "Nunca, assino logo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você troca produto com defeito?",
    options: [
      { text: "Sempre! É meu direito", type: "A" },
      { text: "Sim, quando vale a pena", type: "B" },
      { text: "Às vezes, se não der trabalho", type: "C" },
      { text: "Deixo pra lá, dá trabalho", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define como cliente?",
    options: [
      { text: "'O cliente tem sempre razão'", type: "A" },
      { text: "'Pago bem, exijo qualidade'", type: "B" },
      { text: "'Não quero confusão'", type: "C" },
      { text: "'Tanto faz, só quero o produto'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cliente Exigente",
    emoji: "👑",
    description: "Você é o Cliente Exigente! Conhece seus direitos, pesquisa preços, reclama quando precisa. As empresas tremem, mas você garante qualidade pelo seu dinheiro!",
    traits: ["Exigente", "Informado(a)", "Crítico(a)", "Assertivo(a)"],
    strengths: ["Não é enganado", "Garante qualidade", "Conhece direitos", "Economiza"],
    weaknesses: ["Pode ser difícil de agradar", "Estressante", "Funcionários temem"],
    tips: ["Seus direitos importam", "Mas seja gentil também", "Nem tudo é batalha"],
  },
  B: {
    type: "B",
    title: "Cliente Consciente",
    emoji: "⚖️",
    description: "Você é o Cliente Consciente! Sabe o que quer, cobra quando precisa mas com educação. Você equilibra exigência com respeito. O cliente ideal!",
    traits: ["Consciente", "Equilibrado(a)", "Respeitoso(a)", "Justo(a)"],
    strengths: ["Respeito mútuo", "Consegue o que quer", "Bom relacionamento"],
    weaknesses: ["Pode deixar passar algumas coisas"],
    tips: ["Ótimo equilíbrio", "Continue assim", "Você é o cliente ideal"],
  },
  C: {
    type: "C",
    title: "Cliente Bonzinho",
    emoji: "😊",
    description: "Você é o Cliente Bonzinho! Evita confusão, aceita o que vier, não gosta de reclamar. Você é fácil de agradar, mas pode estar perdendo dinheiro e qualidade!",
    traits: ["Pacífico(a)", "Compreensivo(a)", "Passivo(a)", "Bonzinho(a)"],
    strengths: ["Sem estresse", "Fácil de lidar", "Paz de espírito"],
    weaknesses: ["Pode ser enganado", "Não exerce direitos", "Aceita qualquer coisa"],
    tips: ["Seus direitos são importantes", "Reclamar não é ser chato", "Você merece qualidade"],
  },
  D: {
    type: "D",
    title: "Cliente Indiferente",
    emoji: "🤷",
    description: "Você é o Cliente Indiferente! Não liga muito pra nada, compra e vai embora. Não pesquisa, não reclama, não avalia. Simples e direto!",
    traits: ["Indiferente", "Prático(a)", "Desligado(a)", "Simples"],
    strengths: ["Sem estresse", "Rápido", "Não perde tempo"],
    weaknesses: ["Pode ser lesado", "Não aproveita descontos", "Zero noção de direitos"],
    tips: ["Cuidado com golpes", "Pesquisar às vezes vale", "Seus direitos existem"],
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
