// Seu Risco de Burnout
// Descubra qual é seu nível de risco para esgotamento profissional!

export const questions = [
  {
    id: 1,
    question: "Com que frequência você pensa em trabalho fora do expediente?",
    options: [
      { text: "Raramente, desligo completamente", type: "A" },
      { text: "Às vezes, quando há algo urgente", type: "B" },
      { text: "Frequentemente, difícil desconectar", type: "C" },
      { text: "Sempre, trabalho nunca sai da cabeça", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você se sente na segunda-feira de manhã?",
    options: [
      { text: "Animado e energizado para a semana", type: "A" },
      { text: "Normal, pronto para trabalhar", type: "B" },
      { text: "Cansado, mas vou em frente", type: "C" },
      { text: "Exausto e com vontade de fugir", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quantas horas você trabalha por semana em média?",
    options: [
      { text: "40 horas ou menos", type: "A" },
      { text: "Entre 40 e 50 horas", type: "B" },
      { text: "Entre 50 e 60 horas", type: "C" },
      { text: "Mais de 60 horas", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como está seu sono ultimamente?",
    options: [
      { text: "Ótimo, durmo bem e acordo descansado", type: "A" },
      { text: "Razoável, com algumas noites ruins", type: "B" },
      { text: "Ruim, acordo cansado frequentemente", type: "C" },
      { text: "Péssimo, insônia ou sono não reparador", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual sua relação com férias e folgas?",
    options: [
      { text: "Tiro todas as férias e desligo totalmente", type: "A" },
      { text: "Tiro férias, mas às vezes olho e-mails", type: "B" },
      { text: "Tenho dificuldade em tirar férias", type: "C" },
      { text: "Não lembro a última vez que tirei férias de verdade", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você lida com a carga de trabalho?",
    options: [
      { text: "Gerenciável, consigo dar conta de tudo", type: "A" },
      { text: "Alta mas administrável na maior parte", type: "B" },
      { text: "Pesada, frequentemente me sinto sobrecarregado", type: "C" },
      { text: "Impossível, sempre afogado em tarefas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você consegue dizer 'não' no trabalho?",
    options: [
      { text: "Sim, estabeleço limites claros", type: "A" },
      { text: "Na maioria das vezes, quando necessário", type: "B" },
      { text: "Tenho dificuldade, aceito mais do que deveria", type: "C" },
      { text: "Nunca, aceito tudo que vem", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como está sua motivação com o trabalho?",
    options: [
      { text: "Alta, adoro o que faço", type: "A" },
      { text: "Boa, com altos e baixos normais", type: "B" },
      { text: "Baixa, trabalho no automático", type: "C" },
      { text: "Inexistente, cada dia é uma luta", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como está sua saúde física ultimamente?",
    options: [
      { text: "Ótima, me exercito e cuido da alimentação", type: "A" },
      { text: "Razoável, poderia cuidar mais", type: "B" },
      { text: "Negligenciada, não tenho tempo para mim", type: "C" },
      { text: "Péssima, sintomas físicos de estresse", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como está sua vida social fora do trabalho?",
    options: [
      { text: "Ativa, vejo amigos e família regularmente", type: "A" },
      { text: "Razoável, às vezes me isolo", type: "B" },
      { text: "Prejudicada, trabalho consome meu tempo", type: "C" },
      { text: "Inexistente, não tenho mais vida social", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você se sente em relação às suas conquistas?",
    options: [
      { text: "Satisfeito e orgulhoso do que construí", type: "A" },
      { text: "Bem, mas sempre buscando mais", type: "B" },
      { text: "Nunca é suficiente, sempre falta algo", type: "C" },
      { text: "Vazio, nada parece valer a pena", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Se pudesse mudar algo no trabalho agora, seria:",
    options: [
      { text: "Nada significativo, está bom assim", type: "A" },
      { text: "Alguns ajustes pontuais", type: "B" },
      { text: "Reduzir significativamente a carga", type: "C" },
      { text: "Largar tudo e começar do zero", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Equilibrado e Saudável",
    emoji: "💚",
    description: "Parabéns! Você tem um equilíbrio saudável entre trabalho e vida pessoal. Sabe estabelecer limites e cuidar de si mesmo. Continue assim!",
    traits: ["Equilibrado", "Consciente", "Saudável", "Limites claros"],
    strengths: ["Autoconhecimento", "Gestão de energia", "Produtividade sustentável", "Qualidade de vida"],
    weaknesses: ["Pode ser visto como pouco comprometido", "Risco de acomodação"],
    tips: ["Continue mantendo seus limites", "Ajude colegas a encontrar equilíbrio", "Não se culpe por cuidar de si"],
  },
  B: {
    type: "B",
    title: "Risco Baixo",
    emoji: "💛",
    description: "Você está bem, mas alguns sinais merecem atenção. Há momentos de sobrecarga que precisam ser monitorados. Fique atento aos primeiros sinais.",
    traits: ["Atento", "Em alerta", "Funcional", "Gerenciável"],
    strengths: ["Consegue administrar", "Consciência dos limites", "Ainda tem energia"],
    weaknesses: ["Pode subestimar cansaço", "Tendência a aceitar mais do que deveria"],
    tips: ["Estabeleça limites mais claros", "Não normalize a sobrecarga", "Priorize descanso nos fins de semana"],
  },
  C: {
    type: "C",
    title: "Risco Moderado",
    emoji: "🧡",
    description: "Atenção! Você apresenta vários sinais de esgotamento. A carga está pesada e seu corpo e mente estão pedindo descanso. É hora de agir.",
    traits: ["Sobrecarregado", "Cansado", "Pressionado", "Desgastado"],
    strengths: ["Ainda funciona", "Percebe o problema", "Pode reverter"],
    weaknesses: ["Limites ultrapassados", "Saúde comprometida", "Qualidade de vida baixa"],
    tips: ["Converse com seu gestor sobre carga", "Tire férias ou folgas urgentemente", "Busque ajuda profissional se necessário"],
  },
  D: {
    type: "D",
    title: "Risco Alto - Burnout",
    emoji: "🔴",
    description: "ALERTA! Você está em burnout ou muito próximo. Os sinais são claros: exaustão extrema, desconexão e falta de realização. Procure ajuda agora.",
    traits: ["Exausto", "Desconectado", "Esgotado", "Em crise"],
    strengths: ["Reconhece o problema", "Pode buscar ajuda"],
    weaknesses: ["Saúde em risco", "Capacidade comprometida", "Precisa de intervenção"],
    tips: ["PROCURE AJUDA PROFISSIONAL AGORA", "Converse com RH ou gestor", "Considere licença médica se necessário", "Sua saúde vem primeiro"],
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
