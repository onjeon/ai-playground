// Você é Feito para Home Office?
// Descubra se trabalhar de casa combina com seu perfil!

export const questions = [
  {
    id: 1,
    question: "Como é sua disciplina para trabalhar sem supervisão?",
    options: [
      { text: "Excelente, sou muito disciplinado", type: "A" },
      { text: "Boa, mas preciso de alguma estrutura", type: "B" },
      { text: "Razoável, às vezes me distraio", type: "C" },
      { text: "Preciso de alguém cobrando para render", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você lida com a solidão de trabalhar sozinho?",
    options: [
      { text: "Adoro! Trabalho melhor em silêncio", type: "A" },
      { text: "Gosto, mas preciso de interações pontuais", type: "B" },
      { text: "Sinto falta de colegas ao redor", type: "C" },
      { text: "Odeio ficar sozinho, preciso de gente", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como é sua comunicação escrita?",
    options: [
      { text: "Clara e eficiente, prefiro escrever", type: "A" },
      { text: "Boa, consigo me expressar bem", type: "B" },
      { text: "Razoável, prefiro falar do que escrever", type: "C" },
      { text: "Difícil, preciso de comunicação presencial", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você consegue separar trabalho de vida pessoal em casa?",
    options: [
      { text: "Sim, tenho horários e espaço definidos", type: "A" },
      { text: "Na maioria das vezes sim", type: "B" },
      { text: "Tenho dificuldade com isso", type: "C" },
      { text: "Impossível, tudo se mistura", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como é seu espaço para trabalhar em casa?",
    options: [
      { text: "Tenho escritório dedicado e equipado", type: "A" },
      { text: "Tenho um cantinho organizado", type: "B" },
      { text: "Trabalho onde dá, não tenho espaço fixo", type: "C" },
      { text: "Não tenho espaço adequado", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você gerencia seu tempo trabalhando remotamente?",
    options: [
      { text: "Uso técnicas de produtividade rigorosas", type: "A" },
      { text: "Tenho uma rotina, mas flexível", type: "B" },
      { text: "Depende do dia, às vezes procrastino", type: "C" },
      { text: "Perco noção do tempo facilmente", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual sua relação com tecnologia de comunicação remota?",
    options: [
      { text: "Domino todas as ferramentas", type: "A" },
      { text: "Uso bem as principais ferramentas", type: "B" },
      { text: "Uso o básico, mas não sou expert", type: "C" },
      { text: "Tenho dificuldade com tecnologia", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você se sente sobre não ter colegas por perto?",
    options: [
      { text: "Aliviado, prefiro trabalhar em paz", type: "A" },
      { text: "Confortável, mas sinto falta às vezes", type: "B" },
      { text: "Sinto falta da energia do escritório", type: "C" },
      { text: "Preciso de pessoas para me motivar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você lida com distrações em casa?",
    options: [
      { text: "Bloqueio tudo e foco totalmente", type: "A" },
      { text: "Gerencio bem na maior parte do tempo", type: "B" },
      { text: "Me distraio com frequência", type: "C" },
      { text: "É praticamente impossível focar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você pensa sobre flexibilidade de horário?",
    options: [
      { text: "Adoro, mas mantenho disciplina", type: "A" },
      { text: "Gosto de flexibilidade com alguma estrutura", type: "B" },
      { text: "Prefiro horários mais definidos", type: "C" },
      { text: "Preciso de horários fixos para funcionar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você se mantém visível trabalhando remotamente?",
    options: [
      { text: "Comunico proativamente meus resultados", type: "A" },
      { text: "Participo ativamente de reuniões e canais", type: "B" },
      { text: "Espero ser procurado ou perguntado", type: "C" },
      { text: "Tenho medo de ser esquecido", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual modelo de trabalho ideal para você?",
    options: [
      { text: "100% remoto, para sempre", type: "A" },
      { text: "Híbrido, com alguns dias presenciais", type: "B" },
      { text: "Mais presencial que remoto", type: "C" },
      { text: "100% presencial, sem dúvida", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nômade Digital Nato",
    emoji: "🌍",
    description: "Você nasceu para o home office! Tem disciplina, foco e todas as habilidades para trabalhar remotamente de qualquer lugar do mundo. O escritório é opcional para você.",
    traits: ["Disciplinado", "Independente", "Organizado", "Tecnológico"],
    strengths: ["Autogestão", "Foco", "Comunicação assíncrona", "Produtividade solo"],
    weaknesses: ["Pode se isolar demais", "Workaholic em potencial", "Desconectado da equipe"],
    tips: ["Mantenha contato social regular", "Defina limites de horário", "Cuide da saúde mental"],
  },
  B: {
    type: "B",
    title: "Híbrido Ideal",
    emoji: "🏠",
    description: "Você se adapta bem ao home office mas valoriza interações presenciais! O modelo híbrido é perfeito para você, combinando o melhor dos dois mundos.",
    traits: ["Adaptável", "Equilibrado", "Social", "Flexível"],
    strengths: ["Versatilidade", "Equilíbrio", "Boa comunicação", "Relacionamentos"],
    weaknesses: ["Pode precisar de mais estrutura", "Oscila entre modos"],
    tips: ["Estabeleça rotinas claras", "Aproveite os dias presenciais para networking", "Crie um bom espaço em casa"],
  },
  C: {
    type: "C",
    title: "Presencial de Coração",
    emoji: "🏢",
    description: "Você consegue trabalhar de casa, mas prefere o escritório! A energia dos colegas, a estrutura e a separação clara entre casa e trabalho são importantes para você.",
    traits: ["Social", "Colaborativo", "Estruturado", "Presencial"],
    strengths: ["Trabalho em equipe", "Energia do grupo", "Separação clara", "Networking"],
    weaknesses: ["Dificuldade com isolamento", "Menos produtivo sozinho", "Distração em casa"],
    tips: ["Se precisar de home office, crie estrutura rígida", "Use coworkings", "Mantenha muitas videochamadas"],
  },
  D: {
    type: "D",
    title: "Escritório ou Nada",
    emoji: "👔",
    description: "Home office não é para você, e tudo bem! Você rende muito mais no ambiente de escritório, com colegas ao redor e estrutura definida. Valorize isso na escolha de emprego.",
    traits: ["Gregário", "Tradicional", "Supervisionado", "Presencial"],
    strengths: ["Colaboração presencial", "Resposta a estrutura", "Energia em grupo"],
    weaknesses: ["Difícil autogestão", "Precisa de supervisão", "Problemas com isolamento"],
    tips: ["Priorize vagas presenciais", "Se tiver que fazer home office, vá para coworking", "Seja honesto sobre suas necessidades"],
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
