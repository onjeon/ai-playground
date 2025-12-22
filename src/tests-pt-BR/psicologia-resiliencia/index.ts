// Teste de Resiliência
// Descubra seu nível de resiliência emocional!

export const questions = [
  {
    id: 1,
    question: "Quando enfrenta um grande obstáculo, você geralmente:",
    options: [
      { text: "Vejo como oportunidade de crescimento", type: "A" },
      { text: "Enfrento com determinação, mesmo sendo difícil", type: "B" },
      { text: "Fico abalado mas tento superar", type: "C" },
      { text: "Me sinto derrotado e quero desistir", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Após uma grande decepção, quanto tempo você leva para se recuperar?",
    options: [
      { text: "Processo rápido e sigo em frente", type: "A" },
      { text: "Alguns dias e já estou melhor", type: "B" },
      { text: "Semanas, às vezes meses", type: "C" },
      { text: "Muito tempo, às vezes nunca supero", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com mudanças inesperadas?",
    options: [
      { text: "Me adapto facilmente e até gosto", type: "A" },
      { text: "Preciso de tempo mas me adapto", type: "B" },
      { text: "Tenho muita dificuldade com mudanças", type: "C" },
      { text: "Mudanças me paralisam completamente", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quando você falha em algo importante, o que pensa?",
    options: [
      { text: "Aprendi algo valioso para a próxima vez", type: "A" },
      { text: "Foi difícil, mas vou tentar de novo", type: "B" },
      { text: "Talvez eu não seja capaz disso", type: "C" },
      { text: "Sou um fracasso, não adianta tentar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você consegue manter a calma em crises?",
    options: [
      { text: "Sim, fico focado e encontro soluções", type: "A" },
      { text: "Na maioria das vezes consigo", type: "B" },
      { text: "Tenho dificuldade em manter a calma", type: "C" },
      { text: "Entro em pânico e não funciono", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você vê os problemas em geral?",
    options: [
      { text: "Como desafios para resolver", type: "A" },
      { text: "Obstáculos que posso superar", type: "B" },
      { text: "Dificuldades que me atrapalham", type: "C" },
      { text: "Provas de que a vida é injusta comigo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você busca apoio quando está passando por dificuldades?",
    options: [
      { text: "Sim, sei que não preciso enfrentar sozinho", type: "A" },
      { text: "Às vezes peço ajuda quando necessário", type: "B" },
      { text: "Tenho dificuldade em pedir ajuda", type: "C" },
      { text: "Nunca peço ajuda, sofro sozinho", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando algo dá errado, você tende a:",
    options: [
      { text: "Focar no que pode ser feito agora", type: "A" },
      { text: "Analisar e planejar próximos passos", type: "B" },
      { text: "Ficar remoendo o que aconteceu", type: "C" },
      { text: "Me culpar indefinidamente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você acredita que pode superar dificuldades?",
    options: [
      { text: "Absolutamente, já superei muitas", type: "A" },
      { text: "Na maioria das vezes, sim", type: "B" },
      { text: "Tenho dúvidas sobre minha capacidade", type: "C" },
      { text: "Não, sinto que sempre serei derrotado", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você cuida de si mesmo em momentos difíceis?",
    options: [
      { text: "Tenho práticas de autocuidado estabelecidas", type: "A" },
      { text: "Tento me cuidar, nem sempre consigo", type: "B" },
      { text: "Negligencio meu bem-estar quando estressado", type: "C" },
      { text: "Me abandono completamente em crises", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você consegue encontrar significado em experiências difíceis?",
    options: [
      { text: "Sim, crescimento vem das dificuldades", type: "A" },
      { text: "Às vezes consigo ver o lado positivo", type: "B" },
      { text: "Raramente vejo algo de bom em sofrimento", type: "C" },
      { text: "Dificuldades só servem para me destruir", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Após passar por uma crise, você se sente:",
    options: [
      { text: "Mais forte e preparado para o futuro", type: "A" },
      { text: "Aliviado e com lições aprendidas", type: "B" },
      { text: "Esgotado e com medo do próximo problema", type: "C" },
      { text: "Traumatizado e incapaz de continuar", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Resiliente",
    emoji: "💎",
    description: "Você é extremamente resiliente! Enfrenta adversidades com força, aprende com dificuldades e se recupera rapidamente. Você vê desafios como oportunidades de crescimento.",
    traits: ["Forte", "Adaptável", "Otimista", "Determinado"],
    strengths: ["Recuperação rápida", "Visão positiva", "Adaptabilidade", "Autoconfiança em crises"],
    weaknesses: ["Pode minimizar problemas", "Expectativa alta dos outros"],
    tips: ["Continue cultivando sua resiliência", "Ajude outros a desenvolverem essa força", "Não ignore sinais de que precisa descansar"],
  },
  B: {
    type: "B",
    title: "Resiliência Funcional",
    emoji: "🌿",
    description: "Você tem boa capacidade de resiliência! Consegue enfrentar a maioria das adversidades, mesmo que precise de tempo para se recuperar. Está no caminho certo.",
    traits: ["Persistente", "Equilibrado", "Realista", "Adaptável"],
    strengths: ["Boa recuperação", "Visão equilibrada", "Busca de apoio quando necessário"],
    weaknesses: ["Pode demorar a se recuperar", "Oscilações em situações extremas"],
    tips: ["Desenvolva mais estratégias de enfrentamento", "Pratique gratidão e mindfulness", "Fortaleça sua rede de apoio"],
  },
  C: {
    type: "C",
    title: "Resiliência em Desenvolvimento",
    emoji: "🌱",
    description: "Sua resiliência precisa ser fortalecida. Você tem dificuldade em lidar com adversidades e demora para se recuperar. Com prática, pode desenvolver essa habilidade.",
    traits: ["Sensível", "Vulnerável", "Ansioso", "Aprendiz"],
    strengths: ["Sensibilidade emocional", "Consciência das dificuldades", "Potencial de crescimento"],
    weaknesses: ["Demora na recuperação", "Visão pessimista", "Dificuldade em buscar ajuda"],
    tips: ["Comece com pequenos desafios", "Busque apoio profissional", "Pratique autocompaixão"],
  },
  D: {
    type: "D",
    title: "Resiliência Baixa",
    emoji: "🆘",
    description: "Você está com dificuldades significativas de resiliência. Adversidades te afetam profundamente e a recuperação é muito difícil. Buscar ajuda profissional é importante.",
    traits: ["Fragilizado", "Desesperançoso", "Esgotado", "Vulnerável"],
    strengths: ["Reconhecimento da necessidade de ajuda", "Sensibilidade"],
    weaknesses: ["Dificuldade extrema em lidar com problemas", "Visão muito negativa", "Isolamento"],
    tips: ["Procure um psicólogo urgentemente", "Você não precisa enfrentar tudo sozinho", "Pequenos passos são válidos"],
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
