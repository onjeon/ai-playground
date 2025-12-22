// Teste de QI: Memória
// Descubra seu nível de memória e retenção!

export const questions = [
  {
    id: 1,
    question: "Memorize esta sequência: 7, 3, 9, 1, 5. Qual é o terceiro número?",
    options: [
      { text: "3", score: 0 },
      { text: "7", score: 0 },
      { text: "9", score: 1 },
      { text: "1", score: 0 },
    ],
  },
  {
    id: 2,
    question: "Lembre-se: CASA, BOLA, MESA, FLOR, LIVRO. Qual palavra vem depois de MESA?",
    options: [
      { text: "BOLA", score: 0 },
      { text: "FLOR", score: 1 },
      { text: "LIVRO", score: 0 },
      { text: "CASA", score: 0 },
    ],
  },
  {
    id: 3,
    question: "Memorize: Vermelho, Azul, Verde, Amarelo, Roxo. Qual é a segunda cor?",
    options: [
      { text: "Vermelho", score: 0 },
      { text: "Verde", score: 0 },
      { text: "Azul", score: 1 },
      { text: "Amarelo", score: 0 },
    ],
  },
  {
    id: 4,
    question: "Sequência: 42, 17, 83, 56, 29. Qual é o primeiro número?",
    options: [
      { text: "17", score: 0 },
      { text: "29", score: 0 },
      { text: "42", score: 1 },
      { text: "83", score: 0 },
    ],
  },
  {
    id: 5,
    question: "Palavras: JANELA, PORTA, TELHADO, PAREDE, CHÃO. Qual é a última palavra?",
    options: [
      { text: "PAREDE", score: 0 },
      { text: "TELHADO", score: 0 },
      { text: "PORTA", score: 0 },
      { text: "CHÃO", score: 1 },
    ],
  },
  {
    id: 6,
    question: "Memorize: Segunda, Terça, Quarta, Quinta, Sexta. Qual dia vem antes de Quinta?",
    options: [
      { text: "Segunda", score: 0 },
      { text: "Terça", score: 0 },
      { text: "Quarta", score: 1 },
      { text: "Sexta", score: 0 },
    ],
  },
  {
    id: 7,
    question: "Números: 15, 28, 33, 47, 52. Quantos números têm mais de 30?",
    options: [
      { text: "2", score: 0 },
      { text: "3", score: 1 },
      { text: "4", score: 0 },
      { text: "5", score: 0 },
    ],
  },
  {
    id: 8,
    question: "Lista: Maçã, Banana, Laranja, Uva, Manga. Qual fruta está no meio?",
    options: [
      { text: "Banana", score: 0 },
      { text: "Laranja", score: 1 },
      { text: "Uva", score: 0 },
      { text: "Manga", score: 0 },
    ],
  },
  {
    id: 9,
    question: "Sequência: A, E, I, O, U. Se invertermos, qual é a segunda letra?",
    options: [
      { text: "A", score: 0 },
      { text: "E", score: 0 },
      { text: "I", score: 0 },
      { text: "O", score: 1 },
    ],
  },
  {
    id: 10,
    question: "Memorize: 8, 4, 2, 1, 0.5. Qual é a soma do primeiro e último número?",
    options: [
      { text: "7.5", score: 0 },
      { text: "8", score: 0 },
      { text: "8.5", score: 1 },
      { text: "9", score: 0 },
    ],
  },
  {
    id: 11,
    question: "Palavras: SOL, LUA, ESTRELA, PLANETA, COMETA. Qual tem mais letras?",
    options: [
      { text: "ESTRELA", score: 1 },
      { text: "PLANETA", score: 0 },
      { text: "COMETA", score: 0 },
      { text: "Todas têm o mesmo", score: 0 },
    ],
  },
  {
    id: 12,
    question: "Números: 91, 82, 73, 64, 55. Qual é o padrão de subtração?",
    options: [
      { text: "8", score: 0 },
      { text: "9", score: 1 },
      { text: "10", score: 0 },
      { text: "11", score: 0 },
    ],
  },
];

export const results = {
  genius: {
    type: "genius",
    title: "Memória Fotográfica",
    emoji: "🧠",
    description: "Sua memória é excepcional! Você retém informações com facilidade impressionante e tem excelente capacidade de recordação.",
    minScore: 10,
    traits: ["Memorioso", "Atento", "Detalhista", "Focado"],
    strengths: ["Retenção de informações", "Recordação rápida", "Atenção aos detalhes", "Aprendizado eficiente"],
    weaknesses: [],
    tips: ["Use técnicas de memória avançadas", "Aprenda um novo idioma", "Explore memorização competitiva"],
  },
  high: {
    type: "high",
    title: "Memória Acima da Média",
    emoji: "📝",
    description: "Você tem excelente memória! Consegue reter e recuperar informações de forma eficiente e confiável.",
    minScore: 7,
    traits: ["Organizado", "Atento", "Confiável", "Preciso"],
    strengths: ["Boa retenção", "Recuperação eficiente", "Atenção a detalhes"],
    weaknesses: [],
    tips: ["Pratique técnicas de memorização", "Use associações visuais", "Revise informações regularmente"],
  },
  average: {
    type: "average",
    title: "Memória na Média",
    emoji: "🎯",
    description: "Sua memória está na média! Com técnicas adequadas, você pode melhorar significativamente sua capacidade de retenção.",
    minScore: 4,
    traits: ["Normal", "Prático", "Adaptável", "Esforçado"],
    strengths: ["Base sólida", "Capacidade de melhoria", "Persistência"],
    weaknesses: [],
    tips: ["Use mnemônicos", "Faça anotações", "Pratique repetição espaçada"],
  },
  developing: {
    type: "developing",
    title: "Memória em Desenvolvimento",
    emoji: "🌱",
    description: "Sua memória está em fase de desenvolvimento! Com prática e técnicas adequadas, você pode melhorar muito.",
    minScore: 0,
    traits: ["Em crescimento", "Criativo", "Aberto", "Persistente"],
    strengths: ["Potencial de melhoria", "Mente aberta", "Disposição para aprender"],
    weaknesses: [],
    tips: ["Comece com listas curtas", "Use cores e imagens", "Pratique diariamente"],
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
