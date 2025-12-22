// Que Tipo de Turista Brasileiro Você É?
// Descubra seu estilo de viajar!

export const questions = [
  {
    id: 1,
    question: "Como você planeja suas viagens?",
    options: [
      { text: "Roteiro completo, hora por hora", type: "A" },
      { text: "Só o essencial: passagem e hotel", type: "B" },
      { text: "Não planejo, deixo acontecer", type: "C" },
      { text: "Pesquiso preços por meses até achar promoção", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que você mais faz nas viagens?",
    options: [
      { text: "Visito todos os pontos turísticos", type: "A" },
      { text: "Relaxo e curto o momento", type: "B" },
      { text: "Me perco pelas ruas descobrindo coisas", type: "C" },
      { text: "Busco as opções mais baratas", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quantas fotos você tira por dia de viagem?",
    options: [
      { text: "Centenas! Registro tudo", type: "A" },
      { text: "Algumas, das coisas importantes", type: "B" },
      { text: "Poucas, prefiro viver o momento", type: "C" },
      { text: "Só as necessárias pra postar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você escolhe restaurantes na viagem?",
    options: [
      { text: "Pesquiso os mais bem avaliados", type: "A" },
      { text: "Recomendações ou que parecer bom", type: "B" },
      { text: "O que aparecer no caminho", type: "C" },
      { text: "O mais barato e com boa nota", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você compra lembrancinhas?",
    options: [
      { text: "Sim! Pra todo mundo, tenho lista", type: "A" },
      { text: "Algumas, pros mais próximos", type: "B" },
      { text: "Quase nunca, não gosto de carregar peso", type: "C" },
      { text: "Só se for muito barato", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como é seu ritmo de viagem?",
    options: [
      { text: "Intenso, aproveito cada minuto", type: "A" },
      { text: "Equilibrado, passeio e descanso", type: "B" },
      { text: "Tranquilo, sem pressa", type: "C" },
      { text: "Depende do que couber no orçamento", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você fala com os locais?",
    options: [
      { text: "Sim, pergunto dicas e recomendações", type: "A" },
      { text: "Quando necessário", type: "B" },
      { text: "Adoro! Quero conhecer a cultura", type: "C" },
      { text: "Se for pra economizar, sim", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que você leva na mala?",
    options: [
      { text: "Tudo organizado, inclusive remédios e adaptadores", type: "A" },
      { text: "O essencial, bem escolhido", type: "B" },
      { text: "O mínimo possível, mochila pequena", type: "C" },
      { text: "O que der pra levar sem pagar excesso", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você se informa sobre o destino?",
    options: [
      { text: "Guias, blogs, vídeos, tudo!", type: "A" },
      { text: "O básico antes de ir", type: "B" },
      { text: "Descubro lá na hora", type: "C" },
      { text: "Procuro dicas de economia", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você segue o roteiro à risca?",
    options: [
      { text: "Sim, cada detalhe planejado", type: "A" },
      { text: "Na maioria, com alguma flexibilidade", type: "B" },
      { text: "Não, deixo fluir", type: "C" },
      { text: "Só o que for gratuito ou barato", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que te estressa em viagens?",
    options: [
      { text: "Perder algum lugar importante", type: "A" },
      { text: "Imprevistos graves", type: "B" },
      { text: "Roteiros muito rígidos", type: "C" },
      { text: "Gastar mais que o planejado", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Depois da viagem, você...",
    options: [
      { text: "Organizo todas as fotos e posto", type: "A" },
      { text: "Curto as memórias com calma", type: "B" },
      { text: "Já penso na próxima aventura", type: "C" },
      { text: "Calculo quanto gastei exatamente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Turista Planejador",
    emoji: "📋",
    description: "Você é o Turista Planejador! Roteiro detalhado, tudo pesquisado e nada deixado ao acaso. Você aproveita cada segundo porque planejou cada segundo!",
    traits: ["Organizado(a)", "Detalhista", "Preparado(a)", "Eficiente"],
    strengths: ["Não perde nada", "Viagem otimizada", "Sem surpresas ruins", "Fotos de tudo"],
    weaknesses: ["Estresse se algo sai do plano", "Pouca espontaneidade", "Cansaço de tanto programar"],
    tips: ["Deixe espaço pro improviso", "Nem tudo precisa estar no roteiro", "Relaxe um pouco"],
  },
  B: {
    type: "B",
    title: "Turista Equilibrado",
    emoji: "😌",
    description: "Você é o Turista Equilibrado! Planeja o essencial mas deixa espaço pra descobertas. Você encontrou o ponto perfeito entre roteiro e aventura!",
    traits: ["Equilibrado(a)", "Flexível", "Prático(a)", "Tranquilo(a)"],
    strengths: ["Melhor dos dois mundos", "Sem estresse", "Aproveita bem", "Adaptável"],
    weaknesses: ["Pode perder alguns lugares", "Às vezes indeciso(a)", "Nem muito nem pouco"],
    tips: ["Seu estilo é ideal", "Continue assim", "Talvez arrisque um pouco mais"],
  },
  C: {
    type: "C",
    title: "Turista Mochileiro",
    emoji: "🎒",
    description: "Você é o Mochileiro! Sem roteiro, sem pressa, só a estrada e as descobertas. Você viaja pra viver experiências autênticas, não pra fazer checklist!",
    traits: ["Aventureiro(a)", "Espontâneo(a)", "Livre", "Curioso(a)"],
    strengths: ["Experiências únicas", "Flexibilidade total", "Descobertas incríveis", "Liberdade"],
    weaknesses: ["Pode perder atrações importantes", "Às vezes fica perdido(a)", "Sem estrutura"],
    tips: ["Algum planejamento ajuda", "Pesquise o mínimo", "Segurança primeiro"],
  },
  D: {
    type: "D",
    title: "Turista Econômico",
    emoji: "💰",
    description: "Você é o Turista Econômico! Viaja sem quebrar o banco. Promoções, hostel, comida barata - você prova que dá pra conhecer o mundo sem gastar fortuna!",
    traits: ["Econômico(a)", "Esperto(a)", "Planejador(a)", "Prático(a)"],
    strengths: ["Viaja mais gastando menos", "Conhece truques", "Sustentável", "Não se endivida"],
    weaknesses: ["Pode perder experiências", "Às vezes perrengue", "Muito focado em preço"],
    tips: ["Algumas coisas valem o investimento", "Experiência também é valor", "Não economize em segurança"],
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
