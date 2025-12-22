// Qual Tipo de Trabalhador Brasileiro Você É?
// Descubra seu perfil no mercado de trabalho!

export const questions = [
  {
    id: 1,
    question: "Segunda-feira de manhã. Você...",
    options: [
      { text: "Chego animado(a), pronto(a) pra semana", type: "A" },
      { text: "Normal, trabalho é trabalho", type: "B" },
      { text: "Já começo contando os dias pro fim de semana", type: "C" },
      { text: "Modo automático: café, reclamar, sobreviver", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sobre hora extra, você...",
    options: [
      { text: "Faço se precisar, comprometido com resultado", type: "A" },
      { text: "Faço se pagar bem, senão nem pensar", type: "B" },
      { text: "Evito ao máximo, vida além do trabalho", type: "C" },
      { text: "Banco de horas virou piada, nunca folgo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Almoço no trabalho. Você...",
    options: [
      { text: "Rápido na mesa, volto pra render mais", type: "A" },
      { text: "Minha hora sagrada de descanso", type: "B" },
      { text: "Estico o máximo possível", type: "C" },
      { text: "Como qualquer coisa enquanto trabalho", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sobre puxar saco do chefe, você...",
    options: [
      { text: "Não preciso, meu trabalho fala por mim", type: "A" },
      { text: "Mantenho boa relação, normal", type: "B" },
      { text: "Evito interação, fico na minha", type: "C" },
      { text: "Às vezes é necessário pra sobreviver", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Reunião no trabalho. Você...",
    options: [
      { text: "Participo ativamente, dou ideias, engajo", type: "A" },
      { text: "Presto atenção, falo quando necessário", type: "B" },
      { text: "Fico no celular disfarçadamente", type: "C" },
      { text: "Penso: isso podia ser um e-mail", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Seu sonho profissional é...",
    options: [
      { text: "Crescer na carreira, virar líder/diretor", type: "A" },
      { text: "Estabilidade, bom salário, qualidade de vida", type: "B" },
      { text: "Trabalhar menos, viver mais", type: "C" },
      { text: "Ganhar na loteria e nunca mais trabalhar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sobre o grupo de WhatsApp do trabalho, você...",
    options: [
      { text: "Participo, ajuda na comunicação", type: "A" },
      { text: "Olho quando precisa, não exagero", type: "B" },
      { text: "Silenciado eternamente", type: "C" },
      { text: "Saí, vida pessoal é sagrada", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Home office pra você é...",
    options: [
      { text: "Produtivo, mas sinto falta do escritório", type: "A" },
      { text: "Perfeito! Trabalho melhor de casa", type: "B" },
      { text: "Trabalho de pijama, vida boa", type: "C" },
      { text: "Misturou tudo, não sei mais quando paro", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Fofoca no trabalho. Você...",
    options: [
      { text: "Não participo, foco no profissional", type: "A" },
      { text: "Ouço mas não espalho", type: "B" },
      { text: "Amo saber das novidades, só não conto", type: "C" },
      { text: "Fonte oficial de informações extraoficiais", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Seu lema no trabalho é...",
    options: [
      { text: "Trabalho é realização, dou meu melhor", type: "A" },
      { text: "Trabalho pra viver, não vivo pra trabalhar", type: "B" },
      { text: "Faço o mínimo pro máximo resultado", type: "C" },
      { text: "Sobreviver até sexta é a meta", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Workaholic Brasileiro",
    emoji: "💪",
    percentage: 95,
    description: "Você é O Workaholic Brasileiro! Trabalho é prioridade, quer crescer, dar resultado. Comprometido(a), ambicioso(a), o primeiro a chegar e último a sair!",
    characteristics: ["Dedicado(a)", "Ambicioso(a)", "Comprometido(a)", "Focado(a)"],
    advice: "Sua dedicação é admirável! Mas lembra de equilibrar com vida pessoal. Burnout é real, cuida da saúde mental também!",
  },
  B: {
    type: "B",
    title: "O Trabalhador Equilibrado",
    emoji: "⚖️",
    percentage: 80,
    description: "Você é O Trabalhador Equilibrado! Faz seu trabalho bem feito, mas sabe separar profissional do pessoal. Vida além do escritório é prioridade!",
    characteristics: ["Equilibrado(a)", "Profissional", "Sensato(a)", "Organizado(a)"],
    advice: "Ótimo equilíbrio! Você entendeu que trabalho é meio, não fim. Continue assim, produzindo bem sem abrir mão da qualidade de vida!",
  },
  C: {
    type: "C",
    title: "O Trabalhador Minimalista",
    emoji: "🏖️",
    percentage: 65,
    description: "Você é O Trabalhador Minimalista! Faz o necessário, nem mais nem menos. Trabalho é obrigação, a vida de verdade acontece fora do escritório!",
    characteristics: ["Prático(a)", "Desapegado(a)", "Relaxado(a)", "Eficiente"],
    advice: "Cada um tem seu ritmo! Mas cuidado pra não perder oportunidades. Um pouquinho mais de empenho pode abrir portas!",
  },
  D: {
    type: "D",
    title: "O Trabalhador Sobrevivente",
    emoji: "😴",
    percentage: 50,
    description: "Você é O Trabalhador Sobrevivente! Trabalho é mal necessário pra pagar as contas. Seu corpo vai, mas a mente sonha com aposentadoria!",
    characteristics: ["Realista", "Cansado(a)", "Honesto(a)", "Sonhador(a)"],
    advice: "A vida é muito curta pra sofrer no trabalho! Talvez seja hora de repensar a carreira. Busca algo que te motive mais!",
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
