// Você Está Pronto para uma Transição de Carreira?
// Descubra se é hora de mudar de carreira!

export const questions = [
  {
    id: 1,
    question: "Com que frequência você pensa em mudar de carreira?",
    options: [
      { text: "Raramente, estou satisfeito onde estou", type: "A" },
      { text: "Às vezes, é curiosidade normal", type: "B" },
      { text: "Frequentemente, penso muito nisso", type: "C" },
      { text: "Constantemente, é uma obsessão", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você se vê crescendo na sua área atual?",
    options: [
      { text: "Sim, há muito potencial ainda", type: "A" },
      { text: "Há algum espaço para crescer", type: "B" },
      { text: "Pouco, sinto estagnação", type: "C" },
      { text: "Não, cheguei ao limite", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você sente que está desperdiçando talentos?",
    options: [
      { text: "Não, uso bem minhas habilidades", type: "A" },
      { text: "Parcialmente, algumas não são usadas", type: "B" },
      { text: "Sim, tenho potencial não aproveitado", type: "C" },
      { text: "Muito, estou no lugar errado", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que te motiva a levantar para trabalhar?",
    options: [
      { text: "Paixão pelo que faço", type: "A" },
      { text: "Gosto do trabalho e do ambiente", type: "B" },
      { text: "Principalmente a necessidade financeira", type: "C" },
      { text: "Nada além da obrigação", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você tem interesse genuíno em outras áreas?",
    options: [
      { text: "Não particularmente, gosto do que faço", type: "A" },
      { text: "Algumas curiosidades normais", type: "B" },
      { text: "Sim, me interesso por outras áreas", type: "C" },
      { text: "Muito, já pesquiso ativamente sobre transição", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você se identifica com os valores da sua profissão?",
    options: [
      { text: "Totalmente, é quem eu sou", type: "A" },
      { text: "Em grande parte sim", type: "B" },
      { text: "Parcialmente, há dissonâncias", type: "C" },
      { text: "Não, estou no lugar errado", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você já pesquisou sobre outras carreiras?",
    options: [
      { text: "Não, estou bem onde estou", type: "A" },
      { text: "Superficialmente, por curiosidade", type: "B" },
      { text: "Sim, com alguma profundidade", type: "C" },
      { text: "Muito, já tenho planos", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você se sente no domingo à noite?",
    options: [
      { text: "Bem, pronto para a semana", type: "A" },
      { text: "Normal, sem grande ansiedade", type: "B" },
      { text: "Ansioso com a segunda-feira", type: "C" },
      { text: "Angustiado, não quero voltar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você se imagina fazendo isso pelos próximos 10 anos?",
    options: [
      { text: "Sim, com prazer", type: "A" },
      { text: "Provavelmente sim, com evoluções", type: "B" },
      { text: "Tenho dúvidas sérias", type: "C" },
      { text: "De jeito nenhum", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você sente que sua carreira combina com quem você é?",
    options: [
      { text: "Perfeitamente, é minha vocação", type: "A" },
      { text: "Em boa parte sim", type: "B" },
      { text: "Parcialmente, há desconexões", type: "C" },
      { text: "Não, estou vivendo a vida de outro", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Se pudesse começar de novo, escolheria a mesma carreira?",
    options: [
      { text: "Sim, sem dúvida", type: "A" },
      { text: "Provavelmente, com alguns ajustes", type: "B" },
      { text: "Não tenho certeza", type: "C" },
      { text: "Definitivamente não", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Você tem tolerância para o período de transição?",
    options: [
      { text: "Não preciso, estou bem", type: "A" },
      { text: "Teria se fosse necessário", type: "B" },
      { text: "Sim, estou disposto a sacrificar", type: "C" },
      { text: "Totalmente, já me preparando", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bem Posicionado",
    emoji: "✅",
    description: "Você está bem na sua carreira! Satisfeito, alinhado e com perspectivas. Não há sinais de necessidade de transição. Continue desenvolvendo onde está.",
    traits: ["Satisfeito", "Alinhado", "Estável", "Realizado"],
    strengths: ["Carreira alinhada", "Motivação intrínseca", "Perspectivas claras"],
    weaknesses: ["Pode se acomodar"],
    tips: ["Continue se desenvolvendo!", "Mantenha-se atualizado", "Não precisa mudar, mas nunca pare de crescer"],
  },
  B: {
    type: "B",
    title: "Estável com Curiosidades",
    emoji: "🤔",
    description: "Você está bem mas tem algumas curiosidades sobre outras áreas. Isso é normal e saudável. Avalie se são apenas curiosidades ou sinais mais profundos.",
    traits: ["Estável", "Curioso", "Reflexivo", "Normal"],
    strengths: ["Carreira funcional", "Mente aberta"],
    weaknesses: ["Algumas dúvidas"],
    tips: ["Explore curiosidades sem pressão", "Pode ser desenvolvimento, não necessariamente mudança", "Avalie o que realmente está buscando"],
  },
  C: {
    type: "C",
    title: "Considerando Transição",
    emoji: "🔄",
    description: "Você está seriamente considerando uma transição de carreira! Os sinais são claros: insatisfação, desalinhamento e interesse em outras áreas. Vale investigar.",
    traits: ["Insatisfeito", "Questionando", "Buscando", "Em transição"],
    strengths: ["Consciência do problema", "Abertura para mudança"],
    weaknesses: ["Decisão difícil pela frente", "Incerteza"],
    tips: ["Investigue seriamente a transição", "Converse com pessoas da nova área", "Planeje financeiramente", "Transição pode ser gradual"],
  },
  D: {
    type: "D",
    title: "Transição Urgente",
    emoji: "🚨",
    description: "Você precisa mudar de carreira! A insatisfação é profunda e está afetando sua vida. Ficar onde está é prejudicial. Comece a planejar a transição agora.",
    traits: ["Muito insatisfeito", "Desalinhado", "Urgente", "Precisando mudar"],
    strengths: ["Clareza sobre a necessidade de mudança"],
    weaknesses: ["Situação insustentável", "Saúde mental em risco", "Cada dia conta"],
    tips: ["NÃO IGNORE: Você precisa mudar!", "Comece a planejar a transição hoje", "Busque ajuda de coach ou mentor", "Sua felicidade e saúde dependem disso"],
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
