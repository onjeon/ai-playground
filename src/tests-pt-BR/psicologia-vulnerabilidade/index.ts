// Teste de Vulnerabilidade
// Descubra como você lida com a vulnerabilidade emocional!

export const questions = [
  {
    id: 1,
    question: "Você consegue admitir quando não sabe algo?",
    options: [
      { text: "Sim, sem problemas", type: "A" },
      { text: "Geralmente consigo admitir", type: "B" },
      { text: "Tenho dificuldade, prefiro disfarçar", type: "C" },
      { text: "Nunca admito, pareço fraco", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você compartilha seus medos e inseguranças com pessoas próximas?",
    options: [
      { text: "Sim, é importante para conexão", type: "A" },
      { text: "Com algumas pessoas de confiança", type: "B" },
      { text: "Raramente, me sinto exposto", type: "C" },
      { text: "Nunca, ninguém vê minhas fraquezas", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você chora ou demonstra emoções intensas na frente de outros?",
    options: [
      { text: "Sim, quando é natural e saudável", type: "A" },
      { text: "Às vezes, com pessoas próximas", type: "B" },
      { text: "Raramente, me contenho", type: "C" },
      { text: "Nunca, isso é fraqueza", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você pede ajuda quando precisa?",
    options: [
      { text: "Sim, sei que não preciso fazer tudo sozinho", type: "A" },
      { text: "Geralmente peço quando necessário", type: "B" },
      { text: "Tenho muita dificuldade em pedir", type: "C" },
      { text: "Nunca peço, resolvo sozinho sempre", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você admite seus erros para os outros?",
    options: [
      { text: "Sim, faz parte de ser humano", type: "A" },
      { text: "Geralmente consigo admitir", type: "B" },
      { text: "Tenho dificuldade, me sinto julgado", type: "C" },
      { text: "Não, minha imagem é importante demais", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você expressa amor e carinho abertamente?",
    options: [
      { text: "Sim, sem medo de rejeição", type: "A" },
      { text: "Geralmente consigo expressar", type: "B" },
      { text: "Tenho dificuldade em ser tão aberto", type: "C" },
      { text: "Não, me protejo de possível rejeição", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você fala sobre suas dificuldades financeiras ou profissionais?",
    options: [
      { text: "Sim, quando apropriado e necessário", type: "A" },
      { text: "Com pessoas de muita confiança", type: "B" },
      { text: "Raramente, me sinto envergonhado", type: "C" },
      { text: "Nunca, aparento sucesso sempre", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você consegue dizer 'não sei' ou 'preciso pensar'?",
    options: [
      { text: "Sim, tranquilamente", type: "A" },
      { text: "Geralmente consigo", type: "B" },
      { text: "Tenho dificuldade, invento respostas", type: "C" },
      { text: "Não, sempre tenho que ter resposta", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você permite que outros vejam seu lado imperfeito?",
    options: [
      { text: "Sim, somos todos imperfeitos", type: "A" },
      { text: "Com pessoas próximas, sim", type: "B" },
      { text: "Prefiro mostrar só meu melhor lado", type: "C" },
      { text: "Nunca, mantenho uma imagem perfeita", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você acha que vulnerabilidade é fraqueza?",
    options: [
      { text: "Não, é coragem e autenticidade", type: "A" },
      { text: "Não exatamente, mas é desconfortável", type: "B" },
      { text: "Um pouco, prefiro me proteger", type: "C" },
      { text: "Sim, vulnerabilidade é perigosa", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você se abre em relacionamentos íntimos?",
    options: [
      { text: "Sim, intimidade requer abertura", type: "A" },
      { text: "Gradualmente, com confiança", type: "B" },
      { text: "Tenho dificuldade em me abrir totalmente", type: "C" },
      { text: "Não, mantenho paredes sempre", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua relação com vulnerabilidade?",
    options: [
      { text: "Abraço como parte da vida", type: "A" },
      { text: "Aceito quando necessário", type: "B" },
      { text: "Evito quando possível", type: "C" },
      { text: "Fujo dela a todo custo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Vulnerabilidade Saudável",
    emoji: "💜",
    description: "Você abraça a vulnerabilidade de forma saudável! Sabe que se abrir é força, não fraqueza. Isso permite conexões profundas e autenticidade.",
    traits: ["Autêntico", "Corajoso", "Conectado", "Aberto"],
    strengths: ["Relacionamentos profundos", "Autenticidade", "Conexões genuínas", "Saúde emocional"],
    weaknesses: ["Pode se abrir com pessoas erradas", "Pode ser visto como muito emocional"],
    tips: ["Continue abraçando vulnerabilidade", "Escolha bem com quem se abrir", "Ajude outros a se abrirem"],
  },
  B: {
    type: "B",
    title: "Vulnerabilidade Moderada",
    emoji: "🌸",
    description: "Você consegue ser vulnerável com pessoas de confiança. Há equilíbrio entre proteção e abertura, embora possa se abrir mais.",
    traits: ["Cauteloso", "Seletivo", "Equilibrado", "Funcional"],
    strengths: ["Vulnerabilidade com limites", "Escolha de confiança", "Proteção quando necessário"],
    weaknesses: ["Pode perder oportunidades de conexão", "Às vezes se fecha demais"],
    tips: ["Experimente se abrir um pouco mais", "Vulnerabilidade é coragem", "Conexão profunda requer abertura"],
  },
  C: {
    type: "C",
    title: "Dificuldade com Vulnerabilidade",
    emoji: "🛡️",
    description: "Você tem dificuldade em ser vulnerável. Se protege demais, o que pode estar impedindo conexões profundas e autenticidade nos relacionamentos.",
    traits: ["Protetor", "Fechado", "Defensivo", "Controlador"],
    strengths: ["Autoproteção", "Aparência de força"],
    weaknesses: ["Relacionamentos superficiais", "Solidão emocional", "Falta de autenticidade"],
    tips: ["Vulnerabilidade não é fraqueza, é coragem", "Comece com pequenas aberturas", "Considere por que se protege tanto"],
  },
  D: {
    type: "D",
    title: "Evita Vulnerabilidade",
    emoji: "🏰",
    description: "Você evita vulnerabilidade a todo custo. Suas paredes estão sempre erguidas, impedindo conexões genuínas. Isso pode estar causando solidão profunda.",
    traits: ["Blindado", "Isolado", "Controlador", "Defensivo extremo"],
    strengths: ["Proteção contra machucados superficiais"],
    weaknesses: ["Solidão profunda", "Relacionamentos impossíveis de aprofundar", "Desconexão de si mesmo"],
    tips: ["Considere terapia para explorar isso", "Você pode ter sido muito machucado no passado", "Vulnerabilidade controlada é possível e libertadora"],
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
