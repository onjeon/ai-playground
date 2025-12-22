// Teste de QI: Inteligência Espacial
// Descubra sua capacidade de visualização espacial!

export const questions = [
  {
    id: 1,
    question: "Se você dobrar um papel ao meio 3 vezes e fizer um furo no centro, quantos furos haverá quando desdobrar?",
    options: [
      { text: "3 furos", score: 0 },
      { text: "6 furos", score: 0 },
      { text: "8 furos", score: 1 },
      { text: "4 furos", score: 0 },
    ],
  },
  {
    id: 2,
    question: "Um cubo tem quantas arestas?",
    options: [
      { text: "6", score: 0 },
      { text: "8", score: 0 },
      { text: "10", score: 0 },
      { text: "12", score: 1 },
    ],
  },
  {
    id: 3,
    question: "Se você girar a letra 'N' 90 graus no sentido horário, ela se parecerá com qual letra?",
    options: [
      { text: "Z", score: 1 },
      { text: "M", score: 0 },
      { text: "W", score: 0 },
      { text: "S", score: 0 },
    ],
  },
  {
    id: 4,
    question: "Quantos triângulos você pode ver em um triângulo dividido por linhas que conectam cada vértice ao ponto médio do lado oposto?",
    options: [
      { text: "4", score: 0 },
      { text: "6", score: 1 },
      { text: "8", score: 0 },
      { text: "10", score: 0 },
    ],
  },
  {
    id: 5,
    question: "Se uma caixa cúbica tem 6 faces, quantas faces tem uma pirâmide de base quadrada?",
    options: [
      { text: "4", score: 0 },
      { text: "5", score: 1 },
      { text: "6", score: 0 },
      { text: "8", score: 0 },
    ],
  },
  {
    id: 6,
    question: "Você está olhando para o norte. Vira 90° à direita, depois 180°, e finalmente 90° à esquerda. Para onde está olhando?",
    options: [
      { text: "Norte", score: 0 },
      { text: "Sul", score: 1 },
      { text: "Leste", score: 0 },
      { text: "Oeste", score: 0 },
    ],
  },
  {
    id: 7,
    question: "Qual forma você obtém ao cortar um cilindro horizontalmente?",
    options: [
      { text: "Retângulo", score: 0 },
      { text: "Círculo", score: 1 },
      { text: "Elipse", score: 0 },
      { text: "Triângulo", score: 0 },
    ],
  },
  {
    id: 8,
    question: "Se um dado mostra 6 na face superior, qual número está na face inferior?",
    options: [
      { text: "1", score: 1 },
      { text: "2", score: 0 },
      { text: "3", score: 0 },
      { text: "5", score: 0 },
    ],
  },
  {
    id: 9,
    question: "Quantos cubos menores são necessários para formar um cubo 3x3x3?",
    options: [
      { text: "9", score: 0 },
      { text: "18", score: 0 },
      { text: "27", score: 1 },
      { text: "36", score: 0 },
    ],
  },
  {
    id: 10,
    question: "Se você olha um relógio no espelho às 3:00, que horas parecem ser?",
    options: [
      { text: "9:00", score: 1 },
      { text: "3:00", score: 0 },
      { text: "12:00", score: 0 },
      { text: "6:00", score: 0 },
    ],
  },
  {
    id: 11,
    question: "Qual é a planificação de um cubo que NÃO forma um cubo quando dobrada?",
    options: [
      { text: "Cruz (4 em linha + 1 em cima + 1 em baixo)", score: 0 },
      { text: "T (3 em linha + 1 perpendicular)", score: 1 },
      { text: "Escada (2+2+2 alternados)", score: 0 },
      { text: "L (4 em linha + 2 no canto)", score: 0 },
    ],
  },
  {
    id: 12,
    question: "Em um cubo 3x3x3 pintado de vermelho, quantos cubos menores têm exatamente 2 faces pintadas?",
    options: [
      { text: "6", score: 0 },
      { text: "8", score: 0 },
      { text: "12", score: 1 },
      { text: "24", score: 0 },
    ],
  },
];

export const results = {
  genius: {
    type: "genius",
    title: "Gênio Espacial",
    emoji: "🎨",
    description: "Sua inteligência espacial é extraordinária! Você visualiza objetos em 3D com facilidade e tem excelente orientação espacial.",
    minScore: 10,
    traits: ["Visual", "Criativo", "Tridimensional", "Orientado"],
    strengths: ["Visualização 3D", "Rotação mental", "Orientação espacial", "Design e arquitetura"],
    weaknesses: [],
    tips: ["Explore arquitetura ou design 3D", "Pratique desenho técnico", "Considere carreiras em engenharia ou artes visuais"],
  },
  high: {
    type: "high",
    title: "Espacial Acima da Média",
    emoji: "🏗️",
    description: "Você tem excelente inteligência espacial! Sua capacidade de visualização e orientação é impressionante.",
    minScore: 7,
    traits: ["Visual", "Prático", "Orientado", "Criativo"],
    strengths: ["Boa visualização", "Orientação eficiente", "Pensamento tridimensional"],
    weaknesses: [],
    tips: ["Pratique quebra-cabeças 3D", "Explore software de modelagem", "Jogue jogos de construção"],
  },
  average: {
    type: "average",
    title: "Espacial na Média",
    emoji: "📐",
    description: "Sua inteligência espacial está na média! Com prática em visualização, você pode melhorar muito.",
    minScore: 4,
    traits: ["Prático", "Adaptável", "Aprendiz", "Focado"],
    strengths: ["Base sólida", "Capacidade de melhoria", "Orientação básica"],
    weaknesses: [],
    tips: ["Monte quebra-cabeças 3D", "Pratique leitura de mapas", "Desenhe objetos em perspectiva"],
  },
  developing: {
    type: "developing",
    title: "Espacial em Desenvolvimento",
    emoji: "🌱",
    description: "Sua inteligência espacial está em desenvolvimento! Prática com jogos e quebra-cabeças pode ajudar muito.",
    minScore: 0,
    traits: ["Em crescimento", "Verbal", "Prático", "Analítico"],
    strengths: ["Potencial de melhoria", "Outras inteligências fortes", "Persistência"],
    weaknesses: [],
    tips: ["Jogue Tetris ou jogos similares", "Monte LEGOs ou quebra-cabeças", "Pratique origami"],
  },
};

export function calculateResult(answers: number[]) {
  let totalScore = 0;
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      totalScore += question.options[answerIndex].score;
    }
  });

  if (totalScore >= 10) return results.genius;
  if (totalScore >= 7) return results.high;
  if (totalScore >= 4) return results.average;
  return results.developing;
}
