// Sua Capacidade de Execução
// Descubra como você transforma planos em resultados!

export const questions = [
  {
    id: 1,
    question: "Você é melhor em planejar ou executar?",
    options: [
      { text: "Executo excelentemente, faço acontecer", type: "A" },
      { text: "Bom em ambos, equilibrado", type: "B" },
      { text: "Melhor em planejar que executar", type: "C" },
      { text: "Tenho dificuldade em ambos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando define uma meta, você:",
    options: [
      { text: "Começo imediatamente a trabalhar nela", type: "A" },
      { text: "Planejo e executo de forma estruturada", type: "B" },
      { text: "Planejo muito e executo pouco", type: "C" },
      { text: "Defino mas raramente alcanço", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual sua taxa de conclusão de projetos?",
    options: [
      { text: "Altíssima, concluo quase tudo", type: "A" },
      { text: "Alta, termino a grande maioria", type: "B" },
      { text: "Moderada, deixo algumas coisas incompletas", type: "C" },
      { text: "Baixa, tenho muita coisa inacabada", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você lida com obstáculos na execução?",
    options: [
      { text: "Contorno e sigo em frente, nada me para", type: "A" },
      { text: "Analiso e busco soluções", type: "B" },
      { text: "Às vezes travo e demoro", type: "C" },
      { text: "Obstáculos frequentemente me fazem desistir", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você consegue manter momentum em projetos longos?",
    options: [
      { text: "Sim, mantenho energia até o fim", type: "A" },
      { text: "Na maioria das vezes sim", type: "B" },
      { text: "Tenho dificuldade, perco gás", type: "C" },
      { text: "Projetos longos sempre morrem no meio", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você entrega o que promete?",
    options: [
      { text: "Sempre, minha palavra é lei", type: "A" },
      { text: "Na grande maioria das vezes", type: "B" },
      { text: "Às vezes não consigo cumprir", type: "C" },
      { text: "Frequentemente não entrego o prometido", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você se descreveria em termos de execução?",
    options: [
      { text: "Executor implacável, faço acontecer", type: "A" },
      { text: "Bom executor, entrego resultados", type: "B" },
      { text: "Execução não é minha maior força", type: "C" },
      { text: "Tenho sérios problemas de execução", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você quebra grandes metas em tarefas menores?",
    options: [
      { text: "Sempre, é assim que faço acontecer", type: "A" },
      { text: "Frequentemente, ajuda muito", type: "B" },
      { text: "Às vezes, quando lembro", type: "C" },
      { text: "Não, olho para a meta e fico paralisado", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como está seu histórico de entregas no trabalho?",
    options: [
      { text: "Impecável, sempre entrego", type: "A" },
      { text: "Muito bom, raramente falho", type: "B" },
      { text: "Razoável, algumas falhas", type: "C" },
      { text: "Problemático, muitas falhas", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você trabalha bem com prazos?",
    options: [
      { text: "Sim, prazos me energizam e entrego antes", type: "A" },
      { text: "Sim, geralmente cumpro", type: "B" },
      { text: "Às vezes aperto mas entrego", type: "C" },
      { text: "Prazos me paralisam", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você sabe a diferença entre estar ocupado e ser produtivo?",
    options: [
      { text: "Perfeitamente, foco no que gera resultado", type: "A" },
      { text: "Sim, busco produtividade real", type: "B" },
      { text: "Às vezes confundo os dois", type: "C" },
      { text: "Estou sempre ocupado mas não sei se produtivo", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como seu gestor avaliaria sua capacidade de execução?",
    options: [
      { text: "Excepcional, referência de execução", type: "A" },
      { text: "Muito boa, confiável", type: "B" },
      { text: "Razoável, precisa melhorar", type: "C" },
      { text: "Problemática, entrega pouco", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Executor Implacável",
    emoji: "⚡",
    description: "Você é um executor excepcional! Transforma planos em resultados de forma consistente. Sua capacidade de fazer acontecer é seu maior diferencial.",
    traits: ["Executor", "Confiável", "Resultados", "Consistente"],
    strengths: ["Alta taxa de conclusão", "Entrega o prometido", "Contorna obstáculos", "Faz acontecer"],
    weaknesses: ["Pode sacrificar qualidade por velocidade", "Pode executar sem questionar"],
    tips: ["Continue assim!", "Equilibre execução com reflexão estratégica", "Ajude outros a melhorar execução"],
  },
  B: {
    type: "B",
    title: "Bom Executor",
    emoji: "✅",
    description: "Você tem boa capacidade de execução! Entrega resultados de forma consistente. Está bem posicionado profissionalmente.",
    traits: ["Confiável", "Consistente", "Equilibrado", "Produtivo"],
    strengths: ["Boa taxa de entrega", "Confiabilidade", "Resultados consistentes"],
    weaknesses: ["Pode melhorar ainda mais"],
    tips: ["Continue desenvolvendo", "Busque otimizar sua execução", "Foque no que gera mais impacto"],
  },
  C: {
    type: "C",
    title: "Execução em Desenvolvimento",
    emoji: "🌱",
    description: "Sua capacidade de execução precisa de desenvolvimento. Você planeja mais do que executa e deixa coisas incompletas. Isso afeta resultados e percepção.",
    traits: ["Planejador", "Incompleto", "Potencial", "Inconsistente"],
    strengths: ["Talvez bom em planejar"],
    weaknesses: ["Baixa taxa de conclusão", "Promete mais do que entrega", "Projetos inacabados"],
    tips: ["Foque em execução!", "Comece pequeno e complete", "Execução é o que gera resultados"],
  },
  D: {
    type: "D",
    title: "Problema de Execução",
    emoji: "🚨",
    description: "Você tem sérios problemas de execução! Não consegue transformar planos em resultados. Isso é um problema grave que afeta toda sua vida profissional.",
    traits: ["Não executor", "Inconclusivo", "Não confiável", "Improdutivo"],
    strengths: ["Talvez criativo com ideias"],
    weaknesses: ["Nada se concretiza", "Não entrega", "Não é confiável", "Carreira severamente afetada"],
    tips: ["URGENTE: Isso precisa mudar!", "Execução é tudo na carreira", "Busque ajuda para desenvolver essa habilidade"],
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
