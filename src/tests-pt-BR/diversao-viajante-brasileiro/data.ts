// Qual Seu Tipo de Viajante?
// Descubra como você viaja pelo Brasil e pelo mundo!

export const questions = [
  {
    id: 1,
    question: "Como você planeja suas viagens?",
    options: [
      { text: "Roteiro completo, dia por dia, horário por horário", type: "A" },
      { text: "Reservo o básico e deixo espaço pra improvisar", type: "B" },
      { text: "Só compro a passagem, o resto resolvo lá", type: "C" },
      { text: "Viagem? Prefiro ficar em casa mesmo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sua mala de viagem geralmente fica...",
    options: [
      { text: "Organizada com lista, tudo no lugarzinho", type: "A" },
      { text: "Cheia mas funcional, levo o necessário", type: "B" },
      { text: "Bagunçada, jogo tudo de última hora", type: "C" },
      { text: "Mínima, levo só o essencial mesmo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Chegou no destino. Primeira coisa que você faz:",
    options: [
      { text: "Sigo o roteiro, não posso perder tempo!", type: "A" },
      { text: "Exploro a área do hotel pra me ambientar", type: "B" },
      { text: "Descanso primeiro, viagem cansa", type: "C" },
      { text: "Procuro onde comer algo local", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sobre pontos turísticos famosos:",
    options: [
      { text: "Visito todos, veio de longe pra isso!", type: "A" },
      { text: "Os principais sim, mas sem neura", type: "B" },
      { text: "Prefiro lugares menos conhecidos", type: "C" },
      { text: "Só se der vontade na hora", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você registra suas viagens?",
    options: [
      { text: "Milhares de fotos e vídeos de tudo", type: "A" },
      { text: "Algumas fotos dos momentos especiais", type: "B" },
      { text: "Poucas fotos, prefiro viver o momento", type: "C" },
      { text: "Esqueço de tirar foto, volto sem registro", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Imprevistos na viagem. Você...",
    options: [
      { text: "Fico estressado(a), tinha tudo planejado!", type: "A" },
      { text: "Adapto o plano e sigo em frente", type: "B" },
      { text: "Curto! Imprevistos são a graça da viagem", type: "C" },
      { text: "É por isso que prefiro não viajar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sua hospedagem preferida é...",
    options: [
      { text: "Hotel com boa estrutura e café incluído", type: "A" },
      { text: "Airbnb pra ter experiência mais local", type: "B" },
      { text: "Hostel pra conhecer gente nova", type: "C" },
      { text: "Onde for mais barato e tranquilo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Comida na viagem: você...",
    options: [
      { text: "Pesquiso os melhores restaurantes antes", type: "A" },
      { text: "Misturo: alguns famosos, outros achados", type: "B" },
      { text: "Como onde os locais comem, autêntico", type: "C" },
      { text: "Qualquer coisa serve, não sou exigente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Voltando de viagem, você...",
    options: [
      { text: "Já planejo a próxima!", type: "A" },
      { text: "Fico na saudade mas feliz de voltar", type: "B" },
      { text: "Preciso de uma semana pra me recuperar", type: "C" },
      { text: "Alívio de estar em casa de novo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Seu destino dos sonhos é...",
    options: [
      { text: "Europa: muita história e cultura pra absorver", type: "A" },
      { text: "Praias paradisíacas, Caribe ou Maldivas", type: "B" },
      { text: "Lugares inusitados, fora do roteiro comum", type: "C" },
      { text: "Qualquer lugar tranquilo e sem multidão", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Turista Planejador",
    emoji: "📋",
    percentage: 95,
    description: "Você é O Turista Planejador! Roteiro na mão, GPS ligado, lista de restaurantes pesquisada. Você extrai o máximo de cada viagem porque planeja cada detalhe. Nada escapa do seu radar!",
    characteristics: ["Organizado(a)", "Eficiente", "Detalhista", "Aproveitador(a)"],
    advice: "Seu planejamento é admirável! Mas às vezes os melhores momentos vêm do imprevisto. Deixa um espacinho na agenda pra surpresas!",
  },
  B: {
    type: "B",
    title: "O Viajante Equilibrado",
    emoji: "🧳",
    percentage: 85,
    description: "Você é O Viajante Equilibrado! Planeja o básico mas deixa espaço pro inesperado. Você sabe que viajar é sobre experiências, não sobre marcar pontos turísticos!",
    characteristics: ["Flexível", "Adaptável", "Curioso(a)", "Experiente"],
    advice: "Você encontrou o equilíbrio perfeito! Continue misturando planejamento com espontaneidade. É assim que se faz viagens memoráveis!",
  },
  C: {
    type: "C",
    title: "O Mochileiro de Alma",
    emoji: "🎒",
    percentage: 75,
    description: "Você é O Mochileiro de Alma! Pra você, viajar é sobre a jornada, não o destino. Improvisar, conhecer locais, fugir do óbvio... Suas viagens são aventuras autênticas!",
    characteristics: ["Aventureiro(a)", "Espontâneo(a)", "Autêntico(a)", "Desapegado(a)"],
    advice: "Sua abordagem é libertadora! Só lembra de ter um plano B pra emergências. Aventura é ótimo, mas segurança também importa!",
  },
  D: {
    type: "D",
    title: "O Viajante Relutante",
    emoji: "🏠",
    percentage: 50,
    description: "Você é O Viajante Relutante! Viajar não é sua praia (literalmente). Você prefere o conforto de casa, a rotina conhecida. Quando viaja, é no seu ritmo bem tranquilo!",
    characteristics: ["Caseiro(a)", "Tranquilo(a)", "Introspectivo(a)", "Confortável"],
    advice: "Tudo bem preferir sua casinha! Mas de vez em quando uma viagenzinha pode surpreender. Começa devagar, destinos perto, sem pressa. Quem sabe você não se descobre viajante?",
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
