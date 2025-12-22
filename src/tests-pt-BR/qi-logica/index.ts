// Teste de QI: Lógica
// Descubra seu nível de raciocínio lógico!

export const questions = [
  {
    id: 1,
    question: "Se todos os gatos são animais e alguns animais são pretos, então:",
    options: [
      { text: "Todos os gatos são pretos", score: 0 },
      { text: "Alguns gatos podem ser pretos", score: 1 },
      { text: "Nenhum gato é preto", score: 0 },
      { text: "Todos os animais pretos são gatos", score: 0 },
    ],
  },
  {
    id: 2,
    question: "Maria é mais alta que João. João é mais alto que Pedro. Quem é o mais baixo?",
    options: [
      { text: "Maria", score: 0 },
      { text: "João", score: 0 },
      { text: "Pedro", score: 1 },
      { text: "Não é possível determinar", score: 0 },
    ],
  },
  {
    id: 3,
    question: "Se chove, a rua fica molhada. A rua está molhada. Podemos concluir que:",
    options: [
      { text: "Choveu com certeza", score: 0 },
      { text: "Não choveu", score: 0 },
      { text: "Pode ter chovido ou não", score: 1 },
      { text: "Vai chover em breve", score: 0 },
    ],
  },
  {
    id: 4,
    question: "Em uma fila, Ana está na 4ª posição contando do início e na 6ª posição contando do fim. Quantas pessoas há na fila?",
    options: [
      { text: "8 pessoas", score: 0 },
      { text: "9 pessoas", score: 1 },
      { text: "10 pessoas", score: 0 },
      { text: "11 pessoas", score: 0 },
    ],
  },
  {
    id: 5,
    question: "Se A = 1, B = 2, C = 3, qual é o valor de CAB?",
    options: [
      { text: "6", score: 1 },
      { text: "312", score: 0 },
      { text: "123", score: 0 },
      { text: "321", score: 0 },
    ],
  },
  {
    id: 6,
    question: "Um relógio marca 3:15. Qual é o ângulo entre os ponteiros das horas e dos minutos?",
    options: [
      { text: "0 graus", score: 0 },
      { text: "7,5 graus", score: 1 },
      { text: "15 graus", score: 0 },
      { text: "90 graus", score: 0 },
    ],
  },
  {
    id: 7,
    question: "Se 2 gatos comem 2 ratos em 2 minutos, quantos gatos são necessários para comer 100 ratos em 100 minutos?",
    options: [
      { text: "100 gatos", score: 0 },
      { text: "50 gatos", score: 0 },
      { text: "2 gatos", score: 1 },
      { text: "200 gatos", score: 0 },
    ],
  },
  {
    id: 8,
    question: "Qual número não pertence à série: 2, 5, 10, 17, 26, __(37)__?",
    options: [
      { text: "Todos pertencem", score: 0 },
      { text: "O 5 não pertence", score: 0 },
      { text: "O 17 não pertence", score: 0 },
      { text: "Nenhuma das alternativas - o próximo seria 37", score: 1 },
    ],
  },
  {
    id: 9,
    question: "Se ontem foi dois dias depois de segunda-feira, que dia será amanhã?",
    options: [
      { text: "Quinta-feira", score: 0 },
      { text: "Sexta-feira", score: 1 },
      { text: "Sábado", score: 0 },
      { text: "Domingo", score: 0 },
    ],
  },
  {
    id: 10,
    question: "Um tijolo pesa 1kg mais meio tijolo. Quanto pesa o tijolo inteiro?",
    options: [
      { text: "1,5 kg", score: 0 },
      { text: "2 kg", score: 1 },
      { text: "1 kg", score: 0 },
      { text: "3 kg", score: 0 },
    ],
  },
  {
    id: 11,
    question: "Se você me tem, quer compartilhar. Se você me compartilha, não me tem mais. O que sou eu?",
    options: [
      { text: "Um segredo", score: 1 },
      { text: "Um sonho", score: 0 },
      { text: "Uma ideia", score: 0 },
      { text: "Um presente", score: 0 },
    ],
  },
  {
    id: 12,
    question: "Em uma corrida, você ultrapassa o segundo colocado. Em que posição você fica?",
    options: [
      { text: "Primeiro lugar", score: 0 },
      { text: "Segundo lugar", score: 1 },
      { text: "Terceiro lugar", score: 0 },
      { text: "Depende da velocidade", score: 0 },
    ],
  },
];

export const results = {
  genius: {
    type: "genius",
    title: "Gênio da Lógica",
    emoji: "🧠",
    description: "Sua capacidade de raciocínio lógico é excepcional! Você consegue resolver problemas complexos com facilidade e tem uma mente analítica impressionante.",
    minScore: 10,
    traits: ["Analítico", "Dedutivo", "Perspicaz", "Sistemático"],
    strengths: ["Resolução de problemas complexos", "Pensamento crítico", "Análise dedutiva", "Identificação de padrões"],
    weaknesses: [],
    tips: ["Continue desafiando sua mente com quebra-cabeças", "Compartilhe seu conhecimento ensinando outros", "Explore áreas como programação e matemática avançada"],
  },
  high: {
    type: "high",
    title: "Raciocínio Acima da Média",
    emoji: "📚",
    description: "Você tem uma excelente capacidade lógica! Seu raciocínio dedutivo é sólido e você consegue analisar situações de forma eficiente.",
    minScore: 7,
    traits: ["Racional", "Organizado", "Atento", "Metódico"],
    strengths: ["Bom pensamento lógico", "Capacidade analítica", "Resolução metódica de problemas"],
    weaknesses: [],
    tips: ["Pratique mais exercícios de lógica", "Tente problemas mais desafiadores", "Leia sobre filosofia e lógica formal"],
  },
  average: {
    type: "average",
    title: "Lógica na Média",
    emoji: "🎯",
    description: "Você tem uma boa base de raciocínio lógico! Com prática, pode desenvolver ainda mais suas habilidades analíticas.",
    minScore: 4,
    traits: ["Prático", "Equilibrado", "Adaptável", "Curioso"],
    strengths: ["Pensamento básico sólido", "Capacidade de aprender", "Abordagem prática"],
    weaknesses: [],
    tips: ["Pratique jogos de lógica regularmente", "Resolva sudokus e palavras cruzadas", "Estude conceitos básicos de lógica"],
  },
  developing: {
    type: "developing",
    title: "Lógica em Desenvolvimento",
    emoji: "🌱",
    description: "Seu raciocínio lógico está em fase de desenvolvimento! Com dedicação e prática, você pode melhorar significativamente suas habilidades.",
    minScore: 0,
    traits: ["Intuitivo", "Criativo", "Emocional", "Espontâneo"],
    strengths: ["Potencial para crescer", "Mente aberta", "Criatividade"],
    weaknesses: [],
    tips: ["Comece com exercícios simples de lógica", "Pratique diariamente", "Não desanime - a lógica pode ser aprendida"],
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
