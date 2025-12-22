// Qual Tipo de Estudante Brasileiro Você É?
// Descubra seu perfil de estudante!

export const questions = [
  {
    id: 1,
    question: "Como você estuda pra provas?",
    options: [
      { text: "Estudos organizados, semanas antes", type: "A" },
      { text: "Uma semana antes, focado", type: "B" },
      { text: "Na véspera, intensivão", type: "C" },
      { text: "Na hora, confio na sorte", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você faz todas as tarefas de casa?",
    options: [
      { text: "Todas, sempre em dia", type: "A" },
      { text: "A maioria, às vezes atraso", type: "B" },
      { text: "As importantes, algumas esqueço", type: "C" },
      { text: "Copio do colega antes da aula", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você presta atenção na aula?",
    options: [
      { text: "100%, faço anotações", type: "A" },
      { text: "Maioria do tempo", type: "B" },
      { text: "Quando o assunto interessa", type: "C" },
      { text: "Fico no celular/sonhando", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você senta onde na sala?",
    options: [
      { text: "Na frente, perto do professor", type: "A" },
      { text: "No meio, equilibrado", type: "B" },
      { text: "No fundo, mais tranquilo", type: "C" },
      { text: "Onde tiver lugar/perto dos amigos", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você participa das aulas?",
    options: [
      { text: "Sempre, pergunto e respondo", type: "A" },
      { text: "Quando sei a resposta", type: "B" },
      { text: "Raramente, só se chamarem", type: "C" },
      { text: "Nunca, prefiro invisibilidade", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como são suas notas?",
    options: [
      { text: "Altas, tiro acima da média", type: "A" },
      { text: "Boas, suficientes", type: "B" },
      { text: "Irregulares, depende da matéria", type: "C" },
      { text: "Baixas, passo raspando", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você faz trabalho em grupo como?",
    options: [
      { text: "Organizo tudo, faço a maior parte", type: "A" },
      { text: "Faço minha parte bem feita", type: "B" },
      { text: "Faço o mínimo necessário", type: "C" },
      { text: "Coloco meu nome e torço", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você falta às aulas?",
    options: [
      { text: "Quase nunca, só se passar mal", type: "A" },
      { text: "Raramente, quando precisa", type: "B" },
      { text: "Às vezes, quando não quero ir", type: "C" },
      { text: "Frequentemente, qualquer desculpa serve", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você já colou em prova?",
    options: [
      { text: "Nunca! Contra meus princípios", type: "A" },
      { text: "Raramente, em emergência", type: "B" },
      { text: "Às vezes, quando precisa", type: "C" },
      { text: "Cole é meu sobrenome", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você lê os livros/materiais obrigatórios?",
    options: [
      { text: "Todos, completos", type: "A" },
      { text: "Os mais importantes", type: "B" },
      { text: "Resumos e resenhas", type: "C" },
      { text: "Nada, confio na aula", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você se preocupa com o boletim?",
    options: [
      { text: "Muito! Notas são importantes", type: "A" },
      { text: "Sim, quero passar bem", type: "B" },
      { text: "Só se for reprovar", type: "C" },
      { text: "Nem olho, o que vier tá bom", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define como estudante?",
    options: [
      { text: "'Estudar é investir no futuro'", type: "A" },
      { text: "'Faço o que precisa pra passar'", type: "B" },
      { text: "'Só estudo o que gosto'", type: "C" },
      { text: "'Sobrevivo no sistema'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "CDF Dedicado",
    emoji: "📚",
    description: "Você é o CDF Dedicado! Estudos em dia, notas altas, participação ativa. Os professores te amam, os colegas pedem suas anotações. Futuro brilhante!",
    traits: ["Dedicado(a)", "Organizado(a)", "Responsável", "Exemplar"],
    strengths: ["Boas notas", "Conhecimento sólido", "Futuro promissor"],
    weaknesses: ["Pode estressar demais", "Menos vida social", "Pressão alta"],
    tips: ["Ótimo trabalho!", "Mas aproveite também", "Equilíbrio é importante"],
  },
  B: {
    type: "B",
    title: "Estudante Equilibrado",
    emoji: "⚖️",
    description: "Você é o Estudante Equilibrado! Faz o necessário, passa bem, mas sem obsessão. Estuda e vive. O equilíbrio que todo mundo deveria ter!",
    traits: ["Equilibrado(a)", "Prático(a)", "Eficiente", "Realista"],
    strengths: ["Equilíbrio", "Notas boas", "Vida social preservada"],
    weaknesses: ["Poderia ir além", "Zona de conforto"],
    tips: ["Bom equilíbrio", "Continue assim", "Desafie-se às vezes"],
  },
  C: {
    type: "C",
    title: "Estudante Seletivo",
    emoji: "🎯",
    description: "Você é o Estudante Seletivo! Estuda o que gosta, ignora o resto. Suas notas são um montanha-russa. Quando interessa, você brilha!",
    traits: ["Seletivo(a)", "Apaixonado(a)", "Irregular", "Autêntico(a)"],
    strengths: ["Excelente no que gosta", "Autenticidade", "Paixão"],
    weaknesses: ["Notas irregulares", "Risco de reprovar", "Lacunas de conhecimento"],
    tips: ["Tudo é importante", "Tente se interessar mais", "Disciplina ajuda"],
  },
  D: {
    type: "D",
    title: "Estudante Sobrevivente",
    emoji: "🏊",
    description: "Você é o Estudante Sobrevivente! Cole, cópia, sorte, jeitinho brasileiro. Você passa (às vezes raspando), mas o diploma vem. Criatividade pra sobreviver!",
    traits: ["Criativo(a)", "Sobrevivente", "Adaptável", "Arriscado(a)"],
    strengths: ["Resiliência", "Jeitinho", "Criatividade"],
    weaknesses: ["Conhecimento superficial", "Risco de reprovar", "Base fraca"],
    tips: ["Funciona até funcionar", "Considere estudar de verdade", "O futuro cobra"],
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
