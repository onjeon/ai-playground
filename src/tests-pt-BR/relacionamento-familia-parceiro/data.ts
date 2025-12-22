// Família do Parceiro
// Descubra como você lida com a família do seu par!

export const questions = [
  {
    id: 1,
    question: "Como você se sente antes de um almoço na casa dos sogros?",
    options: [
      { text: "Animado(a), gosto de encontrar eles", type: "A" },
      { text: "Tranquilo(a), é só um almoço normal", type: "B" },
      { text: "Um pouco ansioso(a), mas vou de boa", type: "C" },
      { text: "Estressado(a), preferia não ir", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sua sogra dá uma opinião sobre algo que não foi pedida. Você...",
    options: [
      { text: "Agradeço e considero, ela quer ajudar", type: "A" },
      { text: "Ouço educadamente e sigo minha vida", type: "B" },
      { text: "Fico incomodado(a), mas não falo nada", type: "C" },
      { text: "Me irrito muito, é intromissão", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Seu(sua) parceiro(a) prioriza a família sobre vocês. Você...",
    options: [
      { text: "Entendo, família é importante", type: "A" },
      { text: "Converso pra equilibrar as prioridades", type: "B" },
      { text: "Fico ressentido(a), mas não falo muito", type: "C" },
      { text: "Brigo, acho que deveria ser ao contrário", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como é sua relação com a família do seu par?",
    options: [
      { text: "Ótima, me sinto parte da família", type: "A" },
      { text: "Boa, nos damos bem", type: "B" },
      { text: "Cordial, mas sem muita intimidade", type: "C" },
      { text: "Difícil, tem muita tensão", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Os pais do seu par moram perto. Isso te...",
    options: [
      { text: "Alegra, é bom ter família por perto", type: "A" },
      { text: "Não me afeta muito", type: "B" },
      { text: "Incomoda um pouco, menos privacidade", type: "C" },
      { text: "Estressa muito, queria distância", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Seu(sua) parceiro(a) conta problemas do casal pra família. Você...",
    options: [
      { text: "Entendo, precisa desabafar", type: "A" },
      { text: "Preferia que não contasse tudo, mas ok", type: "B" },
      { text: "Fico chateado(a), é nossa privacidade", type: "C" },
      { text: "Fico muito irritado(a), é falta de respeito", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Feriados em família são...",
    options: [
      { text: "Maravilhosos, adoro essa união", type: "A" },
      { text: "Legais, gosto de participar", type: "B" },
      { text: "Cansativos, mas faz parte", type: "C" },
      { text: "Um pesadelo, evito quando posso", type: "D" },
    ],
  },
  {
    id: 8,
    question: "A família do seu par interfere nas decisões de vocês?",
    options: [
      { text: "Não, respeitam nossa autonomia", type: "A" },
      { text: "Às vezes opinam, mas não decidem", type: "B" },
      { text: "Frequentemente, e isso me incomoda", type: "C" },
      { text: "Sempre, controlam tudo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Se a família do seu par não gosta de você, como fica?",
    options: [
      { text: "Tento conquistar eles com o tempo", type: "A" },
      { text: "Foco no meu par, a opinião deles é secundária", type: "B" },
      { text: "Me afeta bastante, fico inseguro(a)", type: "C" },
      { text: "É um problema sério que pode afetar a relação", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual frase combina mais com você sobre família do par?",
    options: [
      { text: "Família do meu amor é minha família também", type: "A" },
      { text: "Respeito e convivo bem, cada um no seu espaço", type: "B" },
      { text: "Tolero por amor ao meu par", type: "C" },
      { text: "É a parte mais difícil do relacionamento", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Genro/Nora Perfeito(a)",
    emoji: "👨‍👩‍👧‍👦",
    percentage: 95,
    description: "Você é o(a) genro/nora perfeito(a)! Se dá super bem com a família do seu par, se sente acolhido(a) e faz questão de participar. Eles te amam de volta!",
    characteristics: ["Acolhedor(a)", "Familiar", "Adaptável", "Carinhoso(a)"],
    advice: "Que sorte ter uma relação tão boa com a família do par! Continue cultivando esses laços, mas não se esqueça de manter limites saudáveis quando necessário.",
  },
  B: {
    type: "B",
    title: "Equilibrado(a) com a Família",
    emoji: "⚖️",
    percentage: 75,
    description: "Você tem uma relação equilibrada com a família do seu par! Convive bem, respeita, mas sabe manter seus limites. Não deixa interferências atrapalharem.",
    characteristics: ["Diplomático(a)", "Respeitoso(a)", "Independente", "Maduro(a)"],
    advice: "Você achou o equilíbrio! Continue assim - participando quando possível, mas mantendo sua individualidade e a autonomia do casal.",
  },
  C: {
    type: "C",
    title: "Tolerando por Amor",
    emoji: "😅",
    percentage: 50,
    description: "Você tolera a família do seu par por amor! A relação não é das melhores, você se esforça mas é desafiador. Às vezes se sente desconfortável ou incomodado(a).",
    characteristics: ["Esforçado(a)", "Paciente", "Desconfortável", "Resiliente"],
    advice: "Relacionamento com a família do par pode ser difícil mesmo! Converse com seu par sobre seus limites. Vocês precisam estar unidos e proteger a relação de interferências excessivas.",
  },
  D: {
    type: "D",
    title: "Em Guerra com os Sogros",
    emoji: "⚔️",
    percentage: 30,
    description: "A relação com a família do seu par é muito difícil! Há muita tensão, conflitos e estresse. Isso pode estar afetando seriamente seu relacionamento.",
    characteristics: ["Estressado(a)", "Em conflito", "Frustrado(a)", "Precisando de apoio"],
    advice: "Essa situação é insustentável! Converse seriamente com seu par - vocês precisam estabelecer limites claros juntos. Se necessário, terapia de casal pode ajudar a navegar essa questão delicada.",
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
