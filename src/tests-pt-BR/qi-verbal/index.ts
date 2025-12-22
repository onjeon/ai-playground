// Teste de QI: Inteligência Verbal
// Descubra seu nível de inteligência verbal e linguística!

export const questions = [
  {
    id: 1,
    question: "Qual palavra é sinônimo de 'perspicaz'?",
    options: [
      { text: "Lento", score: 0 },
      { text: "Astuto", score: 1 },
      { text: "Tímido", score: 0 },
      { text: "Generoso", score: 0 },
    ],
  },
  {
    id: 2,
    question: "Qual é o antônimo de 'efêmero'?",
    options: [
      { text: "Breve", score: 0 },
      { text: "Passageiro", score: 0 },
      { text: "Permanente", score: 1 },
      { text: "Rápido", score: 0 },
    ],
  },
  {
    id: 3,
    question: "Complete a analogia: Livro está para biblioteca assim como peixe está para:",
    options: [
      { text: "Água", score: 0 },
      { text: "Cardume", score: 0 },
      { text: "Aquário", score: 1 },
      { text: "Mar", score: 0 },
    ],
  },
  {
    id: 4,
    question: "Qual palavra NÃO pertence ao grupo: cadeira, mesa, sofá, tapete?",
    options: [
      { text: "Cadeira", score: 0 },
      { text: "Mesa", score: 0 },
      { text: "Sofá", score: 0 },
      { text: "Tapete", score: 1 },
    ],
  },
  {
    id: 5,
    question: "O que significa a expressão 'dar com os burros n'água'?",
    options: [
      { text: "Ter sucesso inesperado", score: 0 },
      { text: "Fracassar em uma tentativa", score: 1 },
      { text: "Trabalhar muito", score: 0 },
      { text: "Fazer algo perigoso", score: 0 },
    ],
  },
  {
    id: 6,
    question: "Qual é o significado de 'ubíquo'?",
    options: [
      { text: "Raro", score: 0 },
      { text: "Único", score: 0 },
      { text: "Presente em toda parte", score: 1 },
      { text: "Antigo", score: 0 },
    ],
  },
  {
    id: 7,
    question: "Identifique a palavra com erro ortográfico:",
    options: [
      { text: "Exceção", score: 0 },
      { text: "Excessão", score: 1 },
      { text: "Excepcional", score: 0 },
      { text: "Exceto", score: 0 },
    ],
  },
  {
    id: 8,
    question: "Qual palavra completa a frase corretamente: 'Os alunos ___ os livros na biblioteca.'",
    options: [
      { text: "devolveu", score: 0 },
      { text: "devolveram", score: 1 },
      { text: "devolvia", score: 0 },
      { text: "devolvido", score: 0 },
    ],
  },
  {
    id: 9,
    question: "O que é um 'paradoxo'?",
    options: [
      { text: "Uma história antiga", score: 0 },
      { text: "Uma contradição aparente", score: 1 },
      { text: "Um tipo de poema", score: 0 },
      { text: "Uma regra gramatical", score: 0 },
    ],
  },
  {
    id: 10,
    question: "Qual palavra é um palíndromo?",
    options: [
      { text: "Casa", score: 0 },
      { text: "Arara", score: 1 },
      { text: "Mesa", score: 0 },
      { text: "Porta", score: 0 },
    ],
  },
  {
    id: 11,
    question: "Qual é o coletivo de lobos?",
    options: [
      { text: "Manada", score: 0 },
      { text: "Alcateia", score: 1 },
      { text: "Bando", score: 0 },
      { text: "Matilha", score: 0 },
    ],
  },
  {
    id: 12,
    question: "O que significa 'procrastinar'?",
    options: [
      { text: "Fazer rapidamente", score: 0 },
      { text: "Planejar com antecedência", score: 0 },
      { text: "Adiar uma tarefa", score: 1 },
      { text: "Trabalhar em equipe", score: 0 },
    ],
  },
];

export const results = {
  genius: {
    type: "genius",
    title: "Gênio Verbal",
    emoji: "📚",
    description: "Sua inteligência verbal é excepcional! Você domina a língua portuguesa com maestria e tem um vocabulário impressionante.",
    minScore: 10,
    traits: ["Eloquente", "Articulado", "Culto", "Expressivo"],
    strengths: ["Rico vocabulário", "Expressão clara", "Compreensão profunda", "Comunicação eficaz"],
    weaknesses: [],
    tips: ["Escreva um livro ou blog", "Explore a literatura clássica", "Considere carreiras em comunicação ou direito"],
  },
  high: {
    type: "high",
    title: "Habilidade Verbal Alta",
    emoji: "✍️",
    description: "Você tem excelente inteligência verbal! Comunica-se bem e tem ótima compreensão linguística.",
    minScore: 7,
    traits: ["Comunicativo", "Claro", "Preciso", "Leitor"],
    strengths: ["Boa comunicação", "Vocabulário amplo", "Compreensão de textos"],
    weaknesses: [],
    tips: ["Leia mais literatura variada", "Pratique escrita criativa", "Aprenda novas palavras diariamente"],
  },
  average: {
    type: "average",
    title: "Verbal na Média",
    emoji: "💬",
    description: "Sua inteligência verbal está na média! Com leitura e prática, pode expandir muito seu domínio linguístico.",
    minScore: 4,
    traits: ["Prático", "Comunicativo", "Aprendiz", "Curioso"],
    strengths: ["Base sólida", "Comunicação funcional", "Disposição para aprender"],
    weaknesses: [],
    tips: ["Leia livros regularmente", "Use dicionário para palavras novas", "Pratique redação"],
  },
  developing: {
    type: "developing",
    title: "Verbal em Desenvolvimento",
    emoji: "🌱",
    description: "Sua inteligência verbal está em desenvolvimento! Com leitura regular e prática, você pode melhorar muito.",
    minScore: 0,
    traits: ["Em crescimento", "Prático", "Direto", "Simples"],
    strengths: ["Potencial de melhoria", "Comunicação direta", "Simplicidade"],
    weaknesses: [],
    tips: ["Leia jornais e revistas", "Ouça podcasts educativos", "Pratique conversação"],
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
