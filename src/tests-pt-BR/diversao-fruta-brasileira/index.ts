// Qual Fruta Brasileira Você Seria?
// Descubra qual fruta típica do Brasil representa sua personalidade!

export const questions = [
  {
    id: 1,
    question: "Como você é percebido(a) pelas pessoas?",
    options: [
      { text: "Exótico(a) e intrigante", type: "A" },
      { text: "Refrescante e energizante", type: "B" },
      { text: "Doce e irresistível", type: "C" },
      { text: "Versátil e adaptável", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual sua característica mais marcante?",
    options: [
      { text: "Minha singularidade e raridade", type: "A" },
      { text: "Minha energia e vitalidade", type: "B" },
      { text: "Minha doçura e amabilidade", type: "C" },
      { text: "Minha praticidade e utilidade", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você é em relacionamentos?",
    options: [
      { text: "Único(a) e inesquecível", type: "A" },
      { text: "Energizante e revigorante", type: "B" },
      { text: "Doce e carinhoso(a)", type: "C" },
      { text: "Prático(a) e presente", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual ambiente combina mais com você?",
    options: [
      { text: "Amazônia, lugares selvagens", type: "A" },
      { text: "Praias do Nordeste", type: "B" },
      { text: "Interior de Minas ou São Paulo", type: "C" },
      { text: "Qualquer lugar do Brasil", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que as pessoas mais gostam em você?",
    options: [
      { text: "Minha exclusividade", type: "A" },
      { text: "A energia que transmito", type: "B" },
      { text: "Minha doçura natural", type: "C" },
      { text: "Minha versatilidade", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você lida com o calor?",
    options: [
      { text: "Floreio ainda mais!", type: "A" },
      { text: "Sou a solução refrescante perfeita", type: "B" },
      { text: "Fico ainda mais doce", type: "C" },
      { text: "Me adapto a qualquer clima", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual sua relação com a saúde?",
    options: [
      { text: "Tenho propriedades únicas e especiais", type: "A" },
      { text: "Sou fonte de energia e disposição", type: "B" },
      { text: "Faço bem ao coração e ao humor", type: "C" },
      { text: "Sou nutritivo e prático", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você prefere ser consumido... digo, apreciado?",
    options: [
      { text: "Por quem sabe valorizar coisas raras", type: "A" },
      { text: "Depois de atividades físicas", type: "B" },
      { text: "Em momentos doces da vida", type: "C" },
      { text: "No dia a dia, sempre presente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que te define?",
    options: [
      { text: "Sou para poucos e especiais", type: "A" },
      { text: "Sou energia pura!", type: "B" },
      { text: "Sou felicidade em forma de sabor", type: "C" },
      { text: "Sou para todos os momentos", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual sua cor predominante?",
    options: [
      { text: "Cores exóticas e diferentes", type: "A" },
      { text: "Roxo vibrante", type: "B" },
      { text: "Amarelo ou laranja alegre", type: "C" },
      { text: "Verde por fora, surpresa por dentro", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você é no trabalho?",
    options: [
      { text: "Entrego algo único e diferenciado", type: "A" },
      { text: "Trago energia para a equipe", type: "B" },
      { text: "Adoço o ambiente", type: "C" },
      { text: "Sou útil em todas as situações", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual sua maior qualidade?",
    options: [
      { text: "Minha exclusividade", type: "A" },
      { text: "Minha energia inesgotável", type: "B" },
      { text: "Minha capacidade de adoçar vidas", type: "C" },
      { text: "Minha adaptabilidade", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cupuaçu",
    emoji: "🤎",
    description: "Você é o Cupuaçu! Raro, exótico e valorizado por quem te conhece. Assim como essa fruta amazônica especial, você é único(a) e tem qualidades que poucos apreciam de verdade!",
    traits: ["Único(a)", "Raro(a)", "Especial", "Valorizado(a)"],
    strengths: ["Singularidade", "Valor especial", "Qualidades únicas", "Profundidade"],
    weaknesses: ["Pode ser difícil de acessar", "Nem todos entendem", "Às vezes exclusivo demais"],
    tips: ["Seja mais acessível", "Compartilhe suas qualidades", "Nem todos precisam ser especiais"],
  },
  B: {
    type: "B",
    title: "Açaí",
    emoji: "🫐",
    description: "Você é o Açaí! Energético(a), popular e essencial. Assim como essa fruta que conquistou o Brasil, você traz energia e vitalidade para todos ao seu redor!",
    traits: ["Energético(a)", "Popular", "Vitalizante", "Moderno(a)"],
    strengths: ["Energia contagiante", "Popularidade", "Vitalidade", "Saúde"],
    weaknesses: ["Pode ser modismo", "Às vezes intenso demais", "Nem todos aguentam sua energia"],
    tips: ["Equilibre energia e descanso", "Nem todo mundo é fitness", "Modere a intensidade"],
  },
  C: {
    type: "C",
    title: "Manga ou Goiaba",
    emoji: "🥭",
    description: "Você é a Manga ou Goiaba! Doce, saboroso(a) e amado(a) por todos. Assim como essas frutas brasileiras clássicas, você traz felicidade e doçura para a vida das pessoas!",
    traits: ["Doce", "Amável", "Popular", "Reconfortante"],
    strengths: ["Adoçar a vida", "Ser amado(a)", "Reconfortar", "Fazer feliz"],
    weaknesses: ["Pode ser enjoativo(a)", "Às vezes previsível", "Doçura em excesso"],
    tips: ["Um pouco de acidez é bom", "Surpreenda às vezes", "Nem sempre seja tão doce"],
  },
  D: {
    type: "D",
    title: "Banana ou Maracujá",
    emoji: "🍌",
    description: "Você é a Banana ou Maracujá! Versátil, prático(a) e sempre útil. Assim como essas frutas que estão em tudo, você é indispensável e se adapta a qualquer situação!",
    traits: ["Versátil", "Prático(a)", "Útil", "Adaptável"],
    strengths: ["Versatilidade", "Praticidade", "Estar sempre presente", "Utilidade"],
    weaknesses: ["Pode parecer comum", "Às vezes subestimado(a)", "Falta de destaque"],
    tips: ["Você é mais especial do que pensa", "Valorize suas qualidades", "Versatilidade é poder"],
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
