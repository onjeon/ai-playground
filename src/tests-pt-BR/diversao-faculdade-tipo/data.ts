// Qual Seu Tipo na Faculdade?
// Descubra qual perfil universitário combina com você!

export const questions = [
  {
    id: 1,
    question: "Como você lida com as aulas na faculdade?",
    options: [
      { text: "Não perco uma, sento na frente e anoto tudo", type: "A" },
      { text: "Vou nas importantes, o resto estudo em casa", type: "B" },
      { text: "Apareço quando dá, xerox salva", type: "C" },
      { text: "Priorizo eventos e networking", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual sua relação com a biblioteca?",
    options: [
      { text: "Minha segunda casa, tenho lugar fixo", type: "A" },
      { text: "Vou quando preciso focar em provas", type: "B" },
      { text: "Só pra pegar livro emprestado mesmo", type: "C" },
      { text: "Biblioteca? Prefiro o bandejão", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que você faz no intervalo das aulas?",
    options: [
      { text: "Reviso a matéria ou adianto trabalhos", type: "A" },
      { text: "Tomo café e converso com colegas", type: "B" },
      { text: "Cochilo no gramado ou jogo conversa fora", type: "C" },
      { text: "Organizo eventos ou reuniões de grupos", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você se prepara para as provas?",
    options: [
      { text: "Estudo desde o primeiro dia de aula", type: "A" },
      { text: "Uma semana antes com método", type: "B" },
      { text: "Madrugada anterior, café e desespero", type: "C" },
      { text: "Confio na lábia e no que sei da vida", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual sua participação em festas universitárias?",
    options: [
      { text: "Vou pouco, prefiro focar nos estudos", type: "A" },
      { text: "Vou nas principais, com moderação", type: "B" },
      { text: "Não perco uma, conheço todos os bares", type: "C" },
      { text: "Sou quem organiza ou está na comissão", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual seu envolvimento com atividades extras?",
    options: [
      { text: "Iniciação científica e monitoria", type: "A" },
      { text: "Alguns projetos que agregam ao currículo", type: "B" },
      { text: "Só o obrigatório, nem mais nem menos", type: "C" },
      { text: "Atlética, empresa júnior, centro acadêmico", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como é seu grupo de amigos na faculdade?",
    options: [
      { text: "Pequeno, focado em estudar junto", type: "A" },
      { text: "Equilibrado, estudo e diversão", type: "B" },
      { text: "Grande, mais pra zoeira que estudo", type: "C" },
      { text: "Conheço todo mundo, sou popular", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Seu TCC provavelmente será...",
    options: [
      { text: "Nota máxima, já estou pesquisando", type: "A" },
      { text: "Bom, vou me dedicar no tempo certo", type: "B" },
      { text: "Feito nas últimas semanas, mas passa", type: "C" },
      { text: "Com tema que já tenho contatos", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que você mais valoriza na experiência universitária?",
    options: [
      { text: "Conhecimento e formação acadêmica", type: "A" },
      { text: "Crescimento pessoal equilibrado", type: "B" },
      { text: "Diversão e histórias pra contar", type: "C" },
      { text: "Networking e oportunidades", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você imagina sua carreira depois da faculdade?",
    options: [
      { text: "Mestrado, doutorado, vida acadêmica", type: "A" },
      { text: "Emprego estável na minha área", type: "B" },
      { text: "Ainda não sei, vou ver o que rola", type: "C" },
      { text: "Empreender ou cargo de liderança", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Acadêmico",
    emoji: "📚",
    percentage: 95,
    description: "Você é O Acadêmico! A faculdade é levada a sério, e como! Seu foco é conhecimento, pesquisa e excelência. Provavelmente já está planejando o mestrado!",
    characteristics: ["Dedicado(a)", "Focado(a)", "Intelectual", "Disciplinado(a)"],
    advice: "Sua dedicação é admirável! Mas lembre-se que a faculdade também é sobre experiências de vida. Permita-se algumas festas e amizades fora do círculo acadêmico.",
  },
  B: {
    type: "B",
    title: "O Equilibrado",
    emoji: "⚖️",
    percentage: 80,
    description: "Você é O Equilibrado! Sabe dosar estudo e diversão como ninguém. Tira boas notas, tem amigos e aproveita a experiência universitária completa!",
    characteristics: ["Sensato(a)", "Adaptável", "Social", "Organizado(a)"],
    advice: "Você encontrou a fórmula perfeita! Continue assim, aproveitando cada aspecto da vida universitária sem extremos. Esse equilíbrio vai te levar longe.",
  },
  C: {
    type: "C",
    title: "O Curtidor",
    emoji: "🎉",
    percentage: 60,
    description: "Você é O Curtidor! Pra você, faculdade é sobre viver intensamente. Festas, amigos e histórias inesquecíveis são sua prioridade. O diploma vem, mas com calma!",
    characteristics: ["Sociável", "Descontraído(a)", "Aventureiro(a)", "Carismático(a)"],
    advice: "Suas memórias serão épicas! Mas cuidado para não deixar o diploma escapar. Um pouco mais de foco nos estudos pode garantir que você aproveite a festa E o sucesso.",
  },
  D: {
    type: "D",
    title: "O Networker",
    emoji: "🤝",
    percentage: 85,
    description: "Você é O Networker! Entendeu que faculdade é sobre conexões. Está em tudo: atlética, empresa júnior, eventos. Seu LinkedIn já tem mais contatos que seu caderno tem anotações!",
    characteristics: ["Conectado(a)", "Empreendedor(a)", "Líder", "Estratégico(a)"],
    advice: "Seu networking é invejável! Mas não esqueça que conhecimento técnico também importa. Equilibre as conexões com aprofundamento na sua área.",
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
