// Seu Estilo de Tomada de Decisão
// Descubra como você decide no ambiente profissional!

export const questions = [
  {
    id: 1,
    question: "Quando precisa tomar uma decisão importante, você:",
    options: [
      { text: "Decido rapidamente com as informações que tenho", type: "A" },
      { text: "Analiso dados e faço pesquisa detalhada", type: "B" },
      { text: "Consulto pessoas de confiança antes", type: "C" },
      { text: "Sigo minha intuição e feeling", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual sua maior preocupação ao decidir?",
    options: [
      { text: "Perder tempo demais analisando", type: "A" },
      { text: "Tomar uma decisão sem dados suficientes", type: "B" },
      { text: "Não considerar todas as opiniões", type: "C" },
      { text: "Ignorar minha intuição", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com decisões sob pressão?",
    options: [
      { text: "Adoro! Decido melhor com adrenalina", type: "A" },
      { text: "Fico desconfortável, preciso de mais tempo", type: "B" },
      { text: "Busco input rápido de quem confio", type: "C" },
      { text: "Confio no meu instinto e sigo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Após tomar uma decisão, você:",
    options: [
      { text: "Sigo em frente e não olho para trás", type: "A" },
      { text: "Monitoro resultados e ajusto se preciso", type: "B" },
      { text: "Verifico se todos estão confortáveis", type: "C" },
      { text: "Confio que foi a escolha certa", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que mais te ajuda a decidir?",
    options: [
      { text: "Deadline claro e pressão", type: "A" },
      { text: "Dados, análises e cenários", type: "B" },
      { text: "Conversa com pessoas experientes", type: "C" },
      { text: "Tempo para sentir o que é certo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando uma decisão dá errado, você:",
    options: [
      { text: "Ajusto rapidamente e sigo em frente", type: "A" },
      { text: "Analiso o que deu errado para aprender", type: "B" },
      { text: "Converso com a equipe sobre o que aconteceu", type: "C" },
      { text: "Aceito, às vezes não temos controle", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual sua relação com riscos em decisões?",
    options: [
      { text: "Alto risco, alta recompensa", type: "A" },
      { text: "Riscos calculados com base em dados", type: "B" },
      { text: "Prefiro decisões consensuais e seguras", type: "C" },
      { text: "Depende do feeling sobre a situação", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Em reuniões de decisão, você geralmente:",
    options: [
      { text: "Proponho e defendo uma posição clara", type: "A" },
      { text: "Apresento análise completa antes de opinar", type: "B" },
      { text: "Facilito a discussão e busco consenso", type: "C" },
      { text: "Espero sentir qual é a melhor opção", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você decide entre duas opções igualmente boas?",
    options: [
      { text: "Escolho uma e sigo, sem olhar para trás", type: "A" },
      { text: "Crio critérios objetivos para desempatar", type: "B" },
      { text: "Peço opinião de pessoas de confiança", type: "C" },
      { text: "Espero minha intuição indicar o caminho", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você pensa sobre análise paralisante?",
    options: [
      { text: "É meu maior medo, decido rápido para evitar", type: "A" },
      { text: "Às vezes caio nessa armadilha", type: "B" },
      { text: "Acontece quando falta consenso", type: "C" },
      { text: "Não acontece comigo, confio na intuição", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você comunica suas decisões?",
    options: [
      { text: "Direto: decidi X, vamos fazer", type: "A" },
      { text: "Com base: decidi X porque os dados mostram", type: "B" },
      { text: "Inclusivo: decidimos X juntos", type: "C" },
      { text: "Natural: sinto que X é o melhor caminho", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase define seu estilo de decisão?",
    options: [
      { text: "Feito é melhor que perfeito", type: "A" },
      { text: "Decisão boa é decisão informada", type: "B" },
      { text: "Duas cabeças pensam melhor que uma", type: "C" },
      { text: "Confie no processo e no seu feeling", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Decisor Rápido",
    emoji: "⚡",
    description: "Você decide com velocidade impressionante! Não se perde em análises e prefere agir rápido. Sua agilidade é valiosa em ambientes dinâmicos.",
    traits: ["Rápido", "Decisivo", "Ação", "Pragmático"],
    strengths: ["Velocidade", "Sem paralisia", "Execução rápida", "Bom sob pressão"],
    weaknesses: ["Pode errar por pressa", "Ignora dados importantes", "Pode parecer impulsivo"],
    tips: ["Às vezes vale esperar um pouco mais", "Considere mais opiniões", "Dados podem salvar de erros"],
  },
  B: {
    type: "B",
    title: "Decisor Analítico",
    emoji: "📊",
    description: "Você decide com base em dados e análise rigorosa! Cada decisão é fundamentada e bem pensada. Sua abordagem reduz riscos de erros.",
    traits: ["Analítico", "Metódico", "Racional", "Fundamentado"],
    strengths: ["Decisões bem embasadas", "Menos erros", "Previsibilidade", "Clareza"],
    weaknesses: ["Pode demorar demais", "Análise paralisante", "Perde oportunidades por lentidão"],
    tips: ["Defina limites de tempo para análise", "Às vezes bom é suficiente", "Ação imperfeita supera inação perfeita"],
  },
  C: {
    type: "C",
    title: "Decisor Colaborativo",
    emoji: "🤝",
    description: "Você decide em conjunto com seu time! Valoriza diferentes perspectivas e busca consenso. Suas decisões têm alto buy-in do grupo.",
    traits: ["Colaborativo", "Inclusivo", "Diplomático", "Consensual"],
    strengths: ["Decisões aceitas por todos", "Múltiplas perspectivas", "Engajamento do time"],
    weaknesses: ["Lento em decisões urgentes", "Difícil quando há divergência", "Pode diluir responsabilidade"],
    tips: ["Saiba quando decidir sozinho", "Nem tudo precisa de consenso", "Assuma a liderança quando necessário"],
  },
  D: {
    type: "D",
    title: "Decisor Intuitivo",
    emoji: "✨",
    description: "Você confia na sua intuição para decidir! Seu feeling desenvolvido ao longo dos anos guia suas escolhas. Capaz de ver o que os dados não mostram.",
    traits: ["Intuitivo", "Confiante", "Experiente", "Holístico"],
    strengths: ["Captura nuances invisíveis", "Rápido quando necessário", "Confiança em si mesmo"],
    weaknesses: ["Difícil de explicar decisões", "Pode errar o feeling", "Visto como pouco racional"],
    tips: ["Combine intuição com dados", "Aprenda a comunicar seu raciocínio", "Valide feeling com informação"],
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
