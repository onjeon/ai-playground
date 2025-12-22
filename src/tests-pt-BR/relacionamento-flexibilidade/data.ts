// Flexibilidade no Amor
// Descubra seu nível de flexibilidade nos relacionamentos!

export const questions = [
  {
    id: 1,
    question: "Quando os planos do casal mudam de última hora, você:",
    options: [
      { text: "Me adapto numa boa, imprevistos acontecem", type: "A" },
      { text: "Fico um pouco frustrado(a), mas aceito", type: "B" },
      { text: "Depende muito do que era o plano original", type: "C" },
      { text: "Fico bem chateado(a), não gosto de mudanças", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sobre as manias e jeitos do parceiro(a) que você não curte:",
    options: [
      { text: "Aceito de boa, ninguém é perfeito", type: "A" },
      { text: "Tolero a maioria, mas comento algumas", type: "B" },
      { text: "Algumas me incomodam bastante e eu falo", type: "C" },
      { text: "Tenho dificuldade em aceitar, preciso que mude", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Se seu amor propuser algo bem diferente do que você imaginava:",
    options: [
      { text: "Topo experimentar, pode ser legal", type: "A" },
      { text: "Considero com mente aberta antes de decidir", type: "B" },
      { text: "Tenho resistência inicial, mas posso ceder", type: "C" },
      { text: "Prefiro manter o que já tinha pensado", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sobre abrir mão de preferências pessoais pelo relacionamento:",
    options: [
      { text: "Faço isso naturalmente, o nós é mais importante", type: "A" },
      { text: "Abro mão de algumas coisas quando faz sentido", type: "B" },
      { text: "Penso bem antes de abrir mão de algo importante", type: "C" },
      { text: "Tenho dificuldade, minhas preferências são importantes", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Se vocês têm opiniões muito diferentes sobre algo:",
    options: [
      { text: "Busco um meio termo, não preciso estar certo(a)", type: "A" },
      { text: "Debato, mas consigo ceder em alguns pontos", type: "B" },
      { text: "Defendo minha posição, mas ouço a dele(a)", type: "C" },
      { text: "É difícil ceder quando acho que estou certo(a)", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sobre a rotina do casal, você:",
    options: [
      { text: "Sou super flexível, cada dia é diferente", type: "A" },
      { text: "Gosto de rotina, mas aceito variações", type: "B" },
      { text: "Prefiro ter uma rotina estabelecida", type: "C" },
      { text: "Preciso de rotina e previsibilidade", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quando o parceiro(a) quer fazer algo sozinho(a) que vocês costumam fazer juntos:",
    options: [
      { text: "Tudo bem, cada um precisa de espaço", type: "A" },
      { text: "Entendo, mas confesso que preferia junto", type: "B" },
      { text: "Depende do que é, algumas coisas me incomodariam", type: "C" },
      { text: "Fico chateado(a), gosto de fazer junto", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sobre mudar de opinião durante uma discussão:",
    options: [
      { text: "Faço isso quando percebo que faz sentido", type: "A" },
      { text: "Consigo, mas preciso de bons argumentos", type: "B" },
      { text: "É difícil, mas acontece às vezes", type: "C" },
      { text: "Raramente mudo, mantenho minha posição", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Se o relacionamento exigir mudanças no seu estilo de vida:",
    options: [
      { text: "Mudo de boa se for pelo bem da relação", type: "A" },
      { text: "Estou disposto(a), mas com equilíbrio", type: "B" },
      { text: "Preciso avaliar se as mudanças valem a pena", type: "C" },
      { text: "Tenho dificuldade em mudar meu estilo de vida", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual frase mais te representa no amor?",
    options: [
      { text: "Me adapto fácil, o importante é estar junto", type: "A" },
      { text: "Sou flexível na maioria das coisas", type: "B" },
      { text: "Tenho minhas posições, mas negocio", type: "C" },
      { text: "Sei o que quero e não abro mão fácil", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Super Flexível",
    emoji: "🌊",
    percentage: 95,
    description: "Você é extremamente flexível nos relacionamentos! Se adapta fácil, não bate cabeça por detalhes e coloca a harmonia do casal acima de preferências pessoais. Flui como água!",
    characteristics: ["Adaptável", "Desapegado(a)", "Harmonioso(a)", "Fácil de lidar"],
    advice: "Sua flexibilidade é maravilhosa! Só cuide pra não se anular. É ok ter posições firmes em coisas importantes. Ser flexível não significa abrir mão de tudo!",
  },
  B: {
    type: "B",
    title: "Flexibilidade Equilibrada",
    emoji: "⚖️",
    percentage: 75,
    description: "Você tem flexibilidade equilibrada! Sabe ceder quando faz sentido, mas também mantém posições importantes. O equilíbrio entre adaptar e manter a própria essência!",
    characteristics: ["Equilibrado(a)", "Adaptável com limites", "Negociador(a)", "Maduro(a)"],
    advice: "Você achou um bom equilíbrio! Continue flexibilizando o que não é essencial e mantendo firme no que importa. Comunicação clara ajuda muito nesse processo!",
  },
  C: {
    type: "C",
    title: "Flexibilidade Seletiva",
    emoji: "🎯",
    percentage: 55,
    description: "Você é flexível em algumas coisas, mas tem posições firmes em outras! Sabe o que é importante pra você e não cede fácil. Precisa de bons motivos pra mudar de ideia!",
    characteristics: ["Seletivo(a)", "Posições claras", "Avaliador(a)", "Decidido(a)"],
    advice: "Ter posições firmes é válido! Mas avalie se a rigidez não está atrapalhando. Às vezes ceder um pouco pode trazer mais harmonia sem perder sua essência!",
  },
  D: {
    type: "D",
    title: "Posições Firmes",
    emoji: "🪨",
    percentage: 35,
    description: "Você tem dificuldade em ser flexível nos relacionamentos! Sabe o que quer, tem posições claras e não muda fácil. Estabilidade e previsibilidade são importantes pra você!",
    characteristics: ["Rígido(a)", "Decidido(a)", "Forte em posições", "Pouco adaptável"],
    advice: "Saber o que quer é bom, mas relacionamentos pedem flexibilidade. Avalie se a rigidez não está criando conflitos desnecessários. Ceder às vezes não é fraqueza!",
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
