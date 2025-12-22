// Como Você É na Segunda-Feira?
// Descubra seu perfil de segunda-feira!

export const questions = [
  {
    id: 1,
    question: "Qual sua primeira reação ao acordar na segunda?",
    options: [
      { text: "Ânimo! Nova semana, novas oportunidades", type: "A" },
      { text: "Normal, faz parte da rotina", type: "B" },
      { text: "Desespero, quero voltar a dormir", type: "C" },
      { text: "Faço piada sobre odiar segunda", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como é seu café da manhã de segunda?",
    options: [
      { text: "Completo, preciso de energia", type: "A" },
      { text: "O de sempre, rotina normal", type: "B" },
      { text: "Café forte, muito café", type: "C" },
      { text: "Compartilho meme de segunda enquanto como", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você planeja a semana na segunda?",
    options: [
      { text: "Sim! Já domingo à noite organizo tudo", type: "A" },
      { text: "Tenho uma rotina, não precisa planejar muito", type: "B" },
      { text: "Só penso em sobreviver ao dia", type: "C" },
      { text: "Planejar? Deixa a semana me surpreender", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você chega no trabalho/estudos?",
    options: [
      { text: "Motivado(a) e pronto(a) pra produzir", type: "A" },
      { text: "Normal, como qualquer outro dia", type: "B" },
      { text: "Arrastando, querendo voltar pra cama", type: "C" },
      { text: "Fazendo piada sobre ser segunda", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que você pensa durante a segunda?",
    options: [
      { text: "Nas metas e no que vou conquistar", type: "A" },
      { text: "Nas tarefas do dia, focado(a)", type: "B" },
      { text: "Em como falta muito pra sexta", type: "C" },
      { text: "Em memes e piadas sobre segunda", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como é sua produtividade na segunda?",
    options: [
      { text: "Alta! É meu dia mais produtivo", type: "A" },
      { text: "Normal, igual aos outros dias", type: "B" },
      { text: "Baixíssima, só faço o mínimo", type: "C" },
      { text: "Alterna entre trabalhar e mandar memes", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que te ajuda a passar a segunda?",
    options: [
      { text: "Minhas metas e objetivos claros", type: "A" },
      { text: "A rotina que já conheço bem", type: "B" },
      { text: "Muito café e a esperança de acabar", type: "C" },
      { text: "Rir com os colegas sobre ser segunda", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você termina a segunda-feira?",
    options: [
      { text: "Satisfeito(a), produzir é bom", type: "A" },
      { text: "Normal, foi mais um dia", type: "B" },
      { text: "Exausto(a), só quero sofá e cama", type: "C" },
      { text: "Postando meme de 'sobrevivi à segunda'", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Domingo à noite você já pensa na segunda?",
    options: [
      { text: "Sim, com animação pra semana", type: "A" },
      { text: "Um pouco, mas sem drama", type: "B" },
      { text: "Sim, com pavor e angústia", type: "C" },
      { text: "Sim, já preparando os memes", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Se pudesse, você eliminaria a segunda?",
    options: [
      { text: "Não! Gosto de começar a semana", type: "A" },
      { text: "Não, é só mais um dia", type: "B" },
      { text: "Com certeza absoluta!", type: "C" },
      { text: "Não, sem segunda não teria memes de segunda", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que te motiva na segunda?",
    options: [
      { text: "As possibilidades da semana", type: "A" },
      { text: "Cumprir minhas responsabilidades", type: "B" },
      { text: "Nada, sobrevivo apenas", type: "C" },
      { text: "A zoeira com os amigos sobre segunda", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase define sua segunda?",
    options: [
      { text: "Nova semana, novas conquistas!", type: "A" },
      { text: "Vamos lá, mais uma semana", type: "B" },
      { text: "Por que segunda existe?", type: "C" },
      { text: "Segunda-feira: dia oficial de sofrer em grupo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Amante de Segunda-Feira",
    emoji: "🚀",
    description: "Você é o Amante de Segunda! Enquanto outros sofrem, você vê oportunidades. Segunda é seu dia de brilhar, planejar e conquistar. Você é raro e inspirador!",
    traits: ["Motivado(a)", "Positivo(a)", "Produtivo(a)", "Energético(a)"],
    strengths: ["Alta motivação", "Produtividade", "Positividade", "Inspirar outros"],
    weaknesses: ["Pode irritar quem odeia segunda", "Às vezes forçado demais", "Pressão por performance"],
    tips: ["Respeite quem não curte segunda", "Nem todo mundo é matinal", "Descanso também é importante"],
  },
  B: {
    type: "B",
    title: "Neutro de Segunda-Feira",
    emoji: "😐",
    description: "Você é o Neutro! Segunda é só mais um dia pra você. Sem drama, sem ânimo exagerado, apenas mais um dia de trabalho. Equilíbrio é sua marca!",
    traits: ["Equilibrado(a)", "Prático(a)", "Estável", "Maduro(a)"],
    strengths: ["Estabilidade emocional", "Sem drama", "Consistência", "Maturidade"],
    weaknesses: ["Pode parecer apático(a)", "Falta de entusiasmo", "Rotina demais"],
    tips: ["Um pouco de entusiasmo não faz mal", "Celebre pequenas vitórias", "Quebre a rotina às vezes"],
  },
  C: {
    type: "C",
    title: "Odiador de Segunda-Feira",
    emoji: "😩",
    description: "Você é o Odiador de Segunda! O fim de semana nunca é longo o suficiente e segunda chega cedo demais. Você representa milhões de brasileiros!",
    traits: ["Cansado(a)", "Relutante", "Nostálgico(a) de fim de semana", "Honesto(a)"],
    strengths: ["Honestidade sobre sentimentos", "Representatividade", "Saber o que quer", "Valorizar descanso"],
    weaknesses: ["Negatividade", "Baixa produtividade", "Energia drenada"],
    tips: ["Encontre algo bom na segunda", "Pequenas recompensas ajudam", "Mude a perspectiva aos poucos"],
  },
  D: {
    type: "D",
    title: "Humorista de Segunda-Feira",
    emoji: "😂",
    description: "Você é o Humorista de Segunda! Transforma o sofrimento coletivo em piada. Seus memes de segunda alegram os grupos e fazem todos rirem da desgraça!",
    traits: ["Bem-humorado(a)", "Criativo(a)", "Social", "Resiliente"],
    strengths: ["Alegrar os outros", "Transformar negativo em positivo", "Conexão social", "Criatividade"],
    weaknesses: ["Usa humor pra evitar problemas", "Pode não resolver questões", "Distração constante"],
    tips: ["Humor é ótimo, mas enfrente a segunda de verdade", "Produtividade também importa", "Equilibre diversão e foco"],
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
