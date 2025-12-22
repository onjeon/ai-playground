// Teste de QI: Analogias
// Descubra sua capacidade de fazer analogias e conexões!

export const questions = [
  {
    id: 1,
    question: "Pássaro está para ninho assim como pessoa está para:",
    options: [
      { text: "Cidade", score: 0 },
      { text: "Casa", score: 1 },
      { text: "Família", score: 0 },
      { text: "Trabalho", score: 0 },
    ],
  },
  {
    id: 2,
    question: "Quente está para frio assim como alto está para:",
    options: [
      { text: "Grande", score: 0 },
      { text: "Largo", score: 0 },
      { text: "Baixo", score: 1 },
      { text: "Pequeno", score: 0 },
    ],
  },
  {
    id: 3,
    question: "Médico está para paciente assim como professor está para:",
    options: [
      { text: "Escola", score: 0 },
      { text: "Livro", score: 0 },
      { text: "Aluno", score: 1 },
      { text: "Aula", score: 0 },
    ],
  },
  {
    id: 4,
    question: "Pincel está para pintor assim como bisturi está para:",
    options: [
      { text: "Hospital", score: 0 },
      { text: "Cirurgião", score: 1 },
      { text: "Paciente", score: 0 },
      { text: "Operação", score: 0 },
    ],
  },
  {
    id: 5,
    question: "Ovelha está para rebanho assim como abelha está para:",
    options: [
      { text: "Colmeia", score: 0 },
      { text: "Mel", score: 0 },
      { text: "Enxame", score: 1 },
      { text: "Flor", score: 0 },
    ],
  },
  {
    id: 6,
    question: "Página está para livro assim como frame está para:",
    options: [
      { text: "Pintura", score: 0 },
      { text: "Filme", score: 1 },
      { text: "Quadro", score: 0 },
      { text: "Arte", score: 0 },
    ],
  },
  {
    id: 7,
    question: "Dia está para noite assim como trabalho está para:",
    options: [
      { text: "Salário", score: 0 },
      { text: "Escritório", score: 0 },
      { text: "Descanso", score: 1 },
      { text: "Dinheiro", score: 0 },
    ],
  },
  {
    id: 8,
    question: "Semente está para árvore assim como ovo está para:",
    options: [
      { text: "Galinha", score: 1 },
      { text: "Ninho", score: 0 },
      { text: "Fazenda", score: 0 },
      { text: "Comida", score: 0 },
    ],
  },
  {
    id: 9,
    question: "Capitão está para navio assim como piloto está para:",
    options: [
      { text: "Carro", score: 0 },
      { text: "Avião", score: 1 },
      { text: "Corrida", score: 0 },
      { text: "Viagem", score: 0 },
    ],
  },
  {
    id: 10,
    question: "Água está para sede assim como comida está para:",
    options: [
      { text: "Cozinha", score: 0 },
      { text: "Restaurante", score: 0 },
      { text: "Fome", score: 1 },
      { text: "Prato", score: 0 },
    ],
  },
  {
    id: 11,
    question: "Espelho está para reflexo assim como eco está para:",
    options: [
      { text: "Montanha", score: 0 },
      { text: "Som", score: 1 },
      { text: "Voz", score: 0 },
      { text: "Caverna", score: 0 },
    ],
  },
  {
    id: 12,
    question: "Cego está para visão assim como surdo está para:",
    options: [
      { text: "Ouvido", score: 0 },
      { text: "Audição", score: 1 },
      { text: "Som", score: 0 },
      { text: "Silêncio", score: 0 },
    ],
  },
];

export const results = {
  genius: {
    type: "genius",
    title: "Mestre das Analogias",
    emoji: "🔗",
    description: "Sua capacidade de fazer analogias é excepcional! Você enxerga conexões e relações que outros não percebem.",
    minScore: 10,
    traits: ["Conectivo", "Relacional", "Analítico", "Criativo"],
    strengths: ["Identificação de relações", "Pensamento abstrato", "Conexões criativas", "Compreensão profunda"],
    weaknesses: [],
    tips: ["Explore filosofia e lógica", "Pratique pensamento lateral", "Use analogias para ensinar e explicar"],
  },
  high: {
    type: "high",
    title: "Analogista Avançado",
    emoji: "🎯",
    description: "Você tem excelente capacidade para analogias! Faz conexões lógicas de forma rápida e precisa.",
    minScore: 7,
    traits: ["Lógico", "Relacional", "Perspicaz", "Atento"],
    strengths: ["Bom pensamento relacional", "Conexões lógicas", "Compreensão de padrões"],
    weaknesses: [],
    tips: ["Pratique com analogias mais complexas", "Leia sobre lógica formal", "Explore metáforas na literatura"],
  },
  average: {
    type: "average",
    title: "Analogias na Média",
    emoji: "💡",
    description: "Sua capacidade com analogias está na média! Com prática, você pode melhorar sua habilidade de fazer conexões.",
    minScore: 4,
    traits: ["Prático", "Lógico", "Aprendiz", "Curioso"],
    strengths: ["Base sólida", "Pensamento prático", "Capacidade de aprender"],
    weaknesses: [],
    tips: ["Pratique analogias simples", "Observe relações no dia a dia", "Leia variados gêneros"],
  },
  developing: {
    type: "developing",
    title: "Analogias em Desenvolvimento",
    emoji: "🌱",
    description: "Sua habilidade com analogias está em desenvolvimento! Prática regular ajudará você a fazer melhores conexões.",
    minScore: 0,
    traits: ["Em crescimento", "Concreto", "Prático", "Direto"],
    strengths: ["Pensamento concreto", "Praticidade", "Potencial de melhoria"],
    weaknesses: [],
    tips: ["Comece com analogias simples", "Pense em 'isso é para aquilo como'", "Pratique com jogos de associação"],
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
