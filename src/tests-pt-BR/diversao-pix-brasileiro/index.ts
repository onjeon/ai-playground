// Como Você Usa o PIX?
// Descubra seu perfil de PIX brasileiro!

export const questions = [
  {
    id: 1,
    question: "Como você divide a conta no restaurante?",
    options: [
      { text: "PIX instantâneo na hora, tudo certinho", type: "A" },
      { text: "Divido no olho, arredondo pra cima ou baixo", type: "B" },
      { text: "'Me paga depois' e esqueço de cobrar", type: "C" },
      { text: "Pago tudo e cobro no grupo do WhatsApp", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você cobra PIX de amigos?",
    options: [
      { text: "Sempre! Dinheiro é dinheiro", type: "A" },
      { text: "Depende do valor", type: "B" },
      { text: "Tenho vergonha de cobrar", type: "C" },
      { text: "Faço piada mas cobro sim", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual sua chave PIX?",
    options: [
      { text: "CPF, mais seguro", type: "A" },
      { text: "Telefone, mais prático", type: "B" },
      { text: "E-mail ou chave aleatória", type: "C" },
      { text: "Todas! Organizo por situação", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Um amigo deve R$5. Você...",
    options: [
      { text: "Cobra o PIX na mesma hora", type: "A" },
      { text: "Deixa pra cobrar junto com outra coisa", type: "B" },
      { text: "Esquece, R$5 não vale o constrangimento", type: "C" },
      { text: "'Me paga no próximo churrasco'", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você já mandou PIX errado?",
    options: [
      { text: "Nunca! Confiro tudo antes", type: "A" },
      { text: "Uma vez, mas resolvi", type: "B" },
      { text: "Sim, e tive que pedir de volta", type: "C" },
      { text: "Já, e virou história pra contar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você aceita PIX de desconhecidos?",
    options: [
      { text: "Só com identificação completa", type: "A" },
      { text: "Se vier do contato certo, sim", type: "B" },
      { text: "Aceito qualquer coisa", type: "C" },
      { text: "Faço piada sobre golpe antes", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você organiza seus PIX?",
    options: [
      { text: "Tenho controle de tudo no app", type: "A" },
      { text: "Dou uma olhada de vez em quando", type: "B" },
      { text: "Nem sei quanto já mandei esse mês", type: "C" },
      { text: "Print do comprovante e já era", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você usa PIX para quê?",
    options: [
      { text: "Tudo! É a única forma de pagamento", type: "A" },
      { text: "Transferências e pagamentos rápidos", type: "B" },
      { text: "Só quando pedem", type: "C" },
      { text: "Rachadas e pagamentos de amigos", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você salva comprovantes de PIX?",
    options: [
      { text: "Todos, organizados por mês", type: "A" },
      { text: "Os importantes sim", type: "B" },
      { text: "Não, confio no extrato", type: "C" },
      { text: "Só quando alguém fica devendo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você pede PIX?",
    options: [
      { text: "Mando a chave direta e clara", type: "A" },
      { text: "Peço com educação quando lembro", type: "B" },
      { text: "Demoro a pedir, tenho vergonha", type: "C" },
      { text: "'E aquele PIX hein?' no grupo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você conhece os limites do seu PIX?",
    options: [
      { text: "Sim, e ajustei no app do banco", type: "A" },
      { text: "Mais ou menos", type: "B" },
      { text: "Não faço ideia", type: "C" },
      { text: "Sei porque já bateram no limite", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase define seu uso de PIX?",
    options: [
      { text: "'PIX caiu? Confirma!'", type: "A" },
      { text: "'Manda o PIX que eu transfiro'", type: "B" },
      { text: "'Depois a gente acerta'", type: "C" },
      { text: "'PIIIIIX!' como os memes", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "PIX Organizado",
    emoji: "📊",
    description: "Você é o PIX Organizado! Controla tudo, cobra na hora e nunca perde o rastro do seu dinheiro. PIX pra você é ferramenta de organização financeira!",
    traits: ["Organizado(a)", "Metódico(a)", "Financeiro(a)", "Controlado(a)"],
    strengths: ["Controle total", "Nunca perde dinheiro", "Finanças em dia", "Sem dívidas"],
    weaknesses: ["Pode parecer mesquinho(a)", "Muito focado em dinheiro", "Inflexível"],
    tips: ["Às vezes deixa passar", "R$5 não vai te falir", "Relacionamentos também importam"],
  },
  B: {
    type: "B",
    title: "PIX Equilibrado",
    emoji: "⚖️",
    description: "Você é o PIX Equilibrado! Usa PIX com bom senso, cobra quando precisa mas não exagera. Você encontrou o equilíbrio entre controle e praticidade!",
    traits: ["Equilibrado(a)", "Prático(a)", "Sensato(a)", "Funcional"],
    strengths: ["Bom senso", "Praticidade", "Não se estressa", "Funcional"],
    weaknesses: ["Às vezes esquece de cobrar", "Pode perder controle", "Nem sempre organizado"],
    tips: ["Continue assim", "Um controle básico ajuda", "Equilibro é perfeito"],
  },
  C: {
    type: "C",
    title: "PIX Desapegado",
    emoji: "🤷",
    description: "Você é o PIX Desapegado! Esquece de cobrar, não sabe quanto gastou e vive tranquilo(a). Dinheiro vai e vem, o importante é a paz!",
    traits: ["Desapegado(a)", "Tranquilo(a)", "Generoso(a)", "Desorganizado(a)"],
    strengths: ["Sem estresse", "Generosidade", "Não briga por dinheiro", "Paz de espírito"],
    weaknesses: ["Perde dinheiro", "Desorganização", "Pode ser explorado(a)"],
    tips: ["Um mínimo de controle ajuda", "Pessoas se aproveitam", "Não seja trouxa"],
  },
  D: {
    type: "D",
    title: "PIX Zoeiro",
    emoji: "😂",
    description: "Você é o PIX Zoeiro! Faz meme de tudo, cobra com piada e transforma até dívida em entretenimento. PIX é só mais uma fonte de zoeira!",
    traits: ["Bem-humorado(a)", "Social", "Leve", "Criativo(a)"],
    strengths: ["Não cria clima", "Diversão garantida", "Cobra sem peso", "Criatividade"],
    weaknesses: ["Às vezes não levam a sério", "Pode esquecer de cobrar", "Piada demais"],
    tips: ["Às vezes seja direto", "Nem todo PIX é meme", "Cobrança clara também funciona"],
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
