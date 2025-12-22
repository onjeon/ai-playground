// Qual Carro Brasileiro Você É?
// Descubra qual carro combina com sua personalidade!

export const questions = [
  {
    id: 1,
    question: "Como você se descreve?",
    options: [
      { text: "Prático e econômico", type: "A" },
      { text: "Aventureiro e versátil", type: "B" },
      { text: "Sofisticado e elegante", type: "C" },
      { text: "Potente e esportivo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que você mais valoriza?",
    options: [
      { text: "Economia e custo-benefício", type: "A" },
      { text: "Liberdade e aventura", type: "B" },
      { text: "Conforto e status", type: "C" },
      { text: "Desempenho e velocidade", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Seu estilo de vida é mais...",
    options: [
      { text: "Urbano, cidade grande", type: "A" },
      { text: "Misto, cidade e estrada", type: "B" },
      { text: "Sofisticado, eventos e negócios", type: "C" },
      { text: "Dinâmico, sempre em movimento", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você dirige?",
    options: [
      { text: "Tranquilo, sem pressa", type: "A" },
      { text: "Seguro mas gosto de estrada", type: "B" },
      { text: "Com elegância e cuidado", type: "C" },
      { text: "Rápido, gosto de acelerar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que não pode faltar no carro?",
    options: [
      { text: "Economia de combustível", type: "A" },
      { text: "Espaço e versatilidade", type: "B" },
      { text: "Ar condicionado e conforto", type: "C" },
      { text: "Motor potente", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você usa o carro mais pra...",
    options: [
      { text: "Ir ao trabalho e mercado", type: "A" },
      { text: "Viagens e passeios", type: "B" },
      { text: "Reuniões e eventos", type: "C" },
      { text: "Curtir a direção mesmo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Seu carro ideal tem quantas portas?",
    options: [
      { text: "4 portas, prático pra família", type: "A" },
      { text: "5 portas, SUV/hatch espaçoso", type: "B" },
      { text: "4 portas, sedan elegante", type: "C" },
      { text: "2 portas, esportivo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual cor você escolheria?",
    options: [
      { text: "Prata ou branco, clássico", type: "A" },
      { text: "Preto ou cinza, versátil", type: "B" },
      { text: "Preto ou azul escuro, elegante", type: "C" },
      { text: "Vermelho ou amarelo, chamativo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quanto você gastaria em combustível?",
    options: [
      { text: "O mínimo possível", type: "A" },
      { text: "Normal, não me preocupo tanto", type: "B" },
      { text: "O necessário pro conforto", type: "C" },
      { text: "Vale o prazer de dirigir", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você gosta de tecnologia no carro?",
    options: [
      { text: "O básico funciona bem", type: "A" },
      { text: "Gosto de algumas conveniências", type: "B" },
      { text: "Quanto mais, melhor", type: "C" },
      { text: "Foco no desempenho, resto é extra", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que os outros pensam do seu estilo?",
    options: [
      { text: "Prático e pé no chão", type: "A" },
      { text: "Aventureiro e descolado", type: "B" },
      { text: "Bem-sucedido e elegante", type: "C" },
      { text: "Ousado e intenso", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define ao volante?",
    options: [
      { text: "'Me leva do A ao B, tá ótimo'", type: "A" },
      { text: "'A estrada me chama'", type: "B" },
      { text: "'Chegando com estilo'", type: "C" },
      { text: "'Acelera que a vida é curta!'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Gol/Uno",
    emoji: "🚗",
    description: "Você é o Gol/Uno! Clássico, popular, econômico e prático. Você não precisa de frescura, funcionalidade é o que importa. O brasileiro raiz dos carros!",
    traits: ["Prático(a)", "Econômico(a)", "Popular", "Funcional"],
    strengths: ["Economia", "Praticidade", "Confiabilidade", "Custo baixo"],
    weaknesses: ["Sem luxo", "Básico", "Pode parecer simples demais"],
    tips: ["Praticidade é virtude", "Você resolve a vida", "Simples e eficiente"],
  },
  B: {
    type: "B",
    title: "SUV/Crossover",
    emoji: "🚙",
    description: "Você é o SUV/Crossover! Versátil, aventureiro, pronto pra tudo. Cidade ou estrada, você se adapta. Liberdade e espaço são suas marcas!",
    traits: ["Versátil", "Aventureiro(a)", "Adaptável", "Espaçoso(a)"],
    strengths: ["Versatilidade", "Espaço", "Presença", "Conforto em viagem"],
    weaknesses: ["Consome mais", "Grande demais pra cidade"],
    tips: ["A estrada te espera", "Sua versatilidade é rara", "Explore o mundo"],
  },
  C: {
    type: "C",
    title: "Sedan Executivo",
    emoji: "🚘",
    description: "Você é o Sedan Executivo! Elegante, sofisticado, confortável. Você valoriza qualidade e status. Chegando sempre com classe e presença!",
    traits: ["Elegante", "Sofisticado(a)", "Confortável", "Bem-sucedido(a)"],
    strengths: ["Elegância", "Conforto", "Status", "Presença"],
    weaknesses: ["Caro", "Manutenção alta", "Pode parecer ostentação"],
    tips: ["Você merece o melhor", "Continue brilhando", "Classe não se compra"],
  },
  D: {
    type: "D",
    title: "Esportivo",
    emoji: "🏎️",
    description: "Você é o Esportivo! Potência, velocidade, adrenalina. Você não anda, você voa! A vida é curta demais pra andar devagar. Emoção no sangue!",
    traits: ["Potente", "Veloz", "Intenso(a)", "Ousado(a)"],
    strengths: ["Desempenho", "Emoção", "Presença marcante", "Intensidade"],
    weaknesses: ["Impraticável", "Caro", "Consome muito", "Multas"],
    tips: ["Viva intensamente", "Mas com responsabilidade", "Sua energia é contagiante"],
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
