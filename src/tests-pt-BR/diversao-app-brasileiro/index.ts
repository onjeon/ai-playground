// Qual App Mais Combina Com Você?
// Descubra seu perfil de aplicativos!

export const questions = [
  {
    id: 1,
    question: "Qual a primeira coisa que você faz ao acordar?",
    options: [
      { text: "Olho as redes sociais", type: "A" },
      { text: "Checo mensagens do WhatsApp", type: "B" },
      { text: "Vejo notícias ou e-mails", type: "C" },
      { text: "Ignoro o celular o máximo que posso", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual tipo de app você mais usa?",
    options: [
      { text: "Redes sociais e entretenimento", type: "A" },
      { text: "Mensagens e comunicação", type: "B" },
      { text: "Produtividade e trabalho", type: "C" },
      { text: "Só o essencial, banco e tal", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você pede delivery com que frequência?",
    options: [
      { text: "Todo dia, não sei cozinhar", type: "A" },
      { text: "Várias vezes por semana", type: "B" },
      { text: "Fins de semana ou ocasiões especiais", type: "C" },
      { text: "Raramente, prefiro cozinhar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quantas notificações você tem não lidas?",
    options: [
      { text: "Centenas, não dou conta", type: "A" },
      { text: "Algumas, vou limpando", type: "B" },
      { text: "Zero, leio tudo na hora", type: "C" },
      { text: "Desativo notificações", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você assina quantos serviços de streaming?",
    options: [
      { text: "Todos! Netflix, Prime, Disney+, HBO...", type: "A" },
      { text: "2-3, os principais", type: "B" },
      { text: "1, o que mais uso", type: "C" },
      { text: "Nenhum, uso outras formas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você usa app de transporte?",
    options: [
      { text: "Todo dia, não tenho carro", type: "A" },
      { text: "Frequentemente, é prático", type: "B" },
      { text: "Às vezes, quando preciso", type: "C" },
      { text: "Raramente, prefiro dirigir/transporte público", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você paga as coisas?",
    options: [
      { text: "Sempre pelo app do banco/carteira digital", type: "A" },
      { text: "PIX na maioria das vezes", type: "B" },
      { text: "Cartão físico ainda", type: "C" },
      { text: "Dinheiro quando possível", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você joga jogos no celular?",
    options: [
      { text: "Sim, vários! É meu passatempo", type: "A" },
      { text: "Alguns casuais de vez em quando", type: "B" },
      { text: "Raramente, não tenho paciência", type: "C" },
      { text: "Nunca, celular é pra outras coisas", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quanto tempo de tela você tem por dia?",
    options: [
      { text: "Mais de 8 horas, fácil", type: "A" },
      { text: "4-6 horas, normal", type: "B" },
      { text: "2-4 horas, o necessário", type: "C" },
      { text: "Menos de 2 horas, evito celular", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você usa app de namoro?",
    options: [
      { text: "Sim, todos eles!", type: "A" },
      { text: "Já usei, às vezes volto", type: "B" },
      { text: "Tentei mas não é pra mim", type: "C" },
      { text: "Nunca, prefiro conhecer pessoalmente", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você compra muito por apps?",
    options: [
      { text: "Compro tudo online!", type: "A" },
      { text: "Bastante, é mais prático", type: "B" },
      { text: "Algumas coisas, o essencial", type: "C" },
      { text: "Prefiro ir na loja física", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define com apps?",
    options: [
      { text: "'Tem app pra tudo, uso todos!'", type: "A" },
      { text: "'Apps facilitam minha vida'", type: "B" },
      { text: "'Uso o necessário, sem exagero'", type: "C" },
      { text: "'Sobrevivo bem sem eles'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Viciado em Apps",
    emoji: "📱",
    description: "Você é Viciado em Apps! Tem app pra tudo na sua vida. Delivery, transporte, namoro, jogos, banco... sua vida inteira está no celular. Sem bateria, sem vida!",
    traits: ["Conectado(a)", "Moderno(a)", "Dependente digital", "Prático(a)"],
    strengths: ["Atualizado", "Vida facilitada", "Praticidade máxima"],
    weaknesses: ["Dependência digital", "Gasta muito em apps", "Sem celular, perdido"],
    tips: ["Faça um detox digital às vezes", "Nem tudo precisa de app", "Cuidado com os gastos"],
  },
  B: {
    type: "B",
    title: "Usuário Equilibrado",
    emoji: "⚖️",
    description: "Você é o Usuário Equilibrado! Usa apps de forma inteligente, aproveitando o que facilitam sem se tornar dependente. O equilíbrio perfeito entre digital e real!",
    traits: ["Equilibrado(a)", "Inteligente", "Prático(a)", "Consciente"],
    strengths: ["Uso consciente", "Aproveita o melhor", "Não é dependente"],
    weaknesses: ["Pode perder novidades", "Às vezes antiquado"],
    tips: ["Ótimo equilíbrio", "Continue assim", "Teste apps novos às vezes"],
  },
  C: {
    type: "C",
    title: "Minimalista Digital",
    emoji: "📵",
    description: "Você é Minimalista Digital! Usa apenas o essencial e resiste às novidades. Seu celular tem poucos apps e você está bem assim. Menos é mais!",
    traits: ["Minimalista", "Focado(a)", "Resistente a novidades", "Essencial"],
    strengths: ["Menos distrações", "Foco", "Economia", "Privacidade"],
    weaknesses: ["Pode perder facilidades", "Parece antiquado", "Mais trabalho manual"],
    tips: ["Tá bom assim", "Mas alguns apps ajudam mesmo", "Seu foco é valioso"],
  },
  D: {
    type: "D",
    title: "Analógico Raiz",
    emoji: "📞",
    description: "Você é Analógico Raiz! Celular é só pra ligação e WhatsApp básico. Você resiste bravamente à digitalização da vida. Dinheiro no bolso, mapa na mão!",
    traits: ["Tradicional", "Analógico(a)", "Resistente", "Old school"],
    strengths: ["Independência digital", "Privacidade", "Menos gastos", "Presença real"],
    weaknesses: ["Perde facilidades", "Pode ser inconveniente", "Parece jurássico"],
    tips: ["Cada um no seu ritmo", "Mas PIX ajuda, viu", "Sua resistência é admirável"],
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
