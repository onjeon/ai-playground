// Qual Tipo de Primo Você É?
// Descubra seu perfil nas reuniões de família!

export const questions = [
  {
    id: 1,
    question: "Reunião de família na casa da vó. Você...",
    options: [
      { text: "Chego primeiro, ajudo a organizar tudo", type: "A" },
      { text: "Chego na hora, cumprimento todo mundo", type: "B" },
      { text: "Chego atrasado(a), mas chego animado(a)", type: "C" },
      { text: "Só vou se for obrigatório", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Com os primos mais novos, você...",
    options: [
      { text: "Sou referência, me adoram, pedem conselho", type: "A" },
      { text: "Brinco, converso, dou atenção", type: "B" },
      { text: "Curto mas prefiro ficar com os da minha idade", type: "C" },
      { text: "Evito, criança cansa demais", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sobre saber a vida dos primos, você...",
    options: [
      { text: "Sei tudo! Namorando, trabalhando, estudando...", type: "A" },
      { text: "Sei das coisas importantes", type: "B" },
      { text: "Só quando encontro pessoalmente", type: "C" },
      { text: "Não faço ideia do que acontece com eles", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Grupo de WhatsApp da família. Você...",
    options: [
      { text: "Participo ativamente, mando foto, mensagem", type: "A" },
      { text: "Leio e respondo quando falam comigo", type: "B" },
      { text: "Silenciado, olho às vezes", type: "C" },
      { text: "Saí ou nunca entrei", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Seu primo(a) preferido(a) é aquele que...",
    options: [
      { text: "Conheço desde sempre, somos irmãos de coração", type: "A" },
      { text: "Tenho mais afinidade, papo bom", type: "B" },
      { text: "Vejo nas festas e me dou bem", type: "C" },
      { text: "Não tenho favorito, sou igual com todos", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando um primo precisa de ajuda, você...",
    options: [
      { text: "Sou o primeiro a aparecer, família é prioridade", type: "A" },
      { text: "Ajudo se puder, dentro das minhas possibilidades", type: "B" },
      { text: "Depende de qual primo e que tipo de ajuda", type: "C" },
      { text: "Cada um cuida da sua vida", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Natal/Ano Novo com os primos. Você...",
    options: [
      { text: "Adoro! Melhor parte das festas", type: "A" },
      { text: "Curto, é legal ver todo mundo", type: "B" },
      { text: "Vou mais pela comida e pelos tios", type: "C" },
      { text: "Preferia ficar só com minha família nuclear", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sobre contar segredos pros primos, você...",
    options: [
      { text: "Conto tudo, são meus confidentes", type: "A" },
      { text: "Alguns, os mais próximos", type: "B" },
      { text: "Prefiro não, família fofoca muito", type: "C" },
      { text: "Nunca, zero confiança", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Primo(a) que você não vê há anos aparece. Você...",
    options: [
      { text: "Abraço apertado, mato a saudade na hora", type: "A" },
      { text: "Cumprimento bem, converso pra saber novidades", type: "B" },
      { text: "Educado(a), mas meio estranho no início", type: "C" },
      { text: "Quase não reconheço, papo genérico", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pra você, ser primo significa...",
    options: [
      { text: "Irmão de outro pai, laço pra vida toda", type: "A" },
      { text: "Família que você escolhe manter por perto", type: "B" },
      { text: "Parente que você vê de vez em quando", type: "C" },
      { text: "Só mais um parente, sangue não é tudo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Primo Pilar",
    emoji: "🤗",
    percentage: 95,
    description: "Você é O Primo Pilar! Família é tudo pra você. Sabe de todo mundo, ajuda quando precisa, é referência pros mais novos. O primo que todo mundo quer ter!",
    characteristics: ["Família", "Presente", "Carinhoso(a)", "Confiável"],
    advice: "Sua dedicação à família é admirável! Continue sendo esse elo de união entre os primos. Vocês têm sorte de ter você!",
  },
  B: {
    type: "B",
    title: "O Primo Equilibrado",
    emoji: "😊",
    percentage: 80,
    description: "Você é O Primo Equilibrado! Mantém relação saudável com os primos, participa das reuniões, ajuda quando pode. Presente sem ser grudado!",
    characteristics: ["Equilibrado(a)", "Sociável", "Flexível", "Agradável"],
    advice: "Ótimo equilíbrio! Você valoriza família sem perder sua individualidade. Continue assim, mantendo laços sem pressão!",
  },
  C: {
    type: "C",
    title: "O Primo Casual",
    emoji: "👋",
    percentage: 65,
    description: "Você é O Primo Casual! Curte os primos quando encontra, mas não faz questão de manter contato frequente. Festa de família? Legal, mas não imprescindível!",
    characteristics: ["Independente", "Tranquilo(a)", "Seletivo(a)", "Desapegado(a)"],
    advice: "Tudo bem ter seu espaço! Mas às vezes um contato mais próximo fortalece laços que podem ser importantes no futuro!",
  },
  D: {
    type: "D",
    title: "O Primo Distante",
    emoji: "🚶",
    percentage: 45,
    description: "Você é O Primo Distante! Família extensa não é prioridade. Você aparece quando precisa, mas não faz questão de manter relações próximas com os primos!",
    characteristics: ["Reservado(a)", "Independente", "Solitário(a)", "Objetivo(a)"],
    advice: "Cada um tem seu jeito de lidar com família! Mas lembra que às vezes os primos podem ser grandes aliados. Dá uma chance!",
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
