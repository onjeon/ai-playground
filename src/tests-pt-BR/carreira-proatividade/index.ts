// Seu Nível de Proatividade
// Descubra quão proativo você é no trabalho!

export const questions = [
  {
    id: 1,
    question: "Quando vê um problema no trabalho, você:",
    options: [
      { text: "Resolvo sem ninguém pedir", type: "A" },
      { text: "Proponho solução e executo se aprovado", type: "B" },
      { text: "Reporto e espero direcionamento", type: "C" },
      { text: "Espero alguém notar e resolver", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você antecipa necessidades do seu gestor/equipe?",
    options: [
      { text: "Sempre, me antecipo às demandas", type: "A" },
      { text: "Frequentemente, tento prever", type: "B" },
      { text: "Às vezes, quando é óbvio", type: "C" },
      { text: "Não, espero ser demandado", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você busca novas responsabilidades?",
    options: [
      { text: "Ativamente, sempre quero mais", type: "A" },
      { text: "Proponho quando vejo oportunidade", type: "B" },
      { text: "Aceito quando oferecem", type: "C" },
      { text: "Evito, já tenho o suficiente", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quando termina suas tarefas, você:",
    options: [
      { text: "Busco mais trabalho proativamente", type: "A" },
      { text: "Ofereço ajuda aos colegas", type: "B" },
      { text: "Espero a próxima demanda", type: "C" },
      { text: "Descanso até me pedirem algo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você sugere melhorias sem ser perguntado?",
    options: [
      { text: "Constantemente, é natural", type: "A" },
      { text: "Frequentemente, quando vejo espaço", type: "B" },
      { text: "Às vezes, se for muito óbvio", type: "C" },
      { text: "Raramente, não é meu papel", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você lida com zonas cinzentas de responsabilidade?",
    options: [
      { text: "Assumo e resolvo", type: "A" },
      { text: "Verifico e executo se ninguém está fazendo", type: "B" },
      { text: "Pergunto de quem é a responsabilidade", type: "C" },
      { text: "Não é minha área, ignoro", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você se prepara para reuniões além do básico?",
    options: [
      { text: "Sempre, pesquiso e preparo contribuições", type: "A" },
      { text: "Frequentemente, quando é importante", type: "B" },
      { text: "Às vezes, o básico na maioria", type: "C" },
      { text: "Não, vou e vejo o que rola", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você identifica oportunidades de melhoria no seu trabalho?",
    options: [
      { text: "Constantemente, sempre otimizando", type: "A" },
      { text: "Frequentemente, busco melhorar", type: "B" },
      { text: "Às vezes, quando salta aos olhos", type: "C" },
      { text: "Raramente penso nisso", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual sua postura sobre ownership (senso de dono)?",
    options: [
      { text: "Total, trato como se fosse meu", type: "A" },
      { text: "Alto, me importo com resultados", type: "B" },
      { text: "Moderado, faço minha parte", type: "C" },
      { text: "Baixo, sou funcionário, não dono", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você se voluntaria para projetos desafiadores?",
    options: [
      { text: "Sempre, busco essas oportunidades", type: "A" },
      { text: "Frequentemente, quando faz sentido", type: "B" },
      { text: "Às vezes, se for conveniente", type: "C" },
      { text: "Evito, prefiro minha rotina", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como seu gestor descreveria sua proatividade?",
    options: [
      { text: "Excepcional, referência de proatividade", type: "A" },
      { text: "Alta, posso contar com iniciativas", type: "B" },
      { text: "Moderada, faz o que pedem bem", type: "C" },
      { text: "Baixa, precisa ser direcionado sempre", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase mais te define?",
    options: [
      { text: "Vejo, resolvo, depois conto", type: "A" },
      { text: "Proponho e executo se fizer sentido", type: "B" },
      { text: "Faço bem o que me pedem", type: "C" },
      { text: "Esperando instruções", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Super Proativo",
    emoji: "🚀",
    description: "Você é extremamente proativo! Antecipa, propõe e executa sem esperar ser mandado. Essa atitude te diferencia e acelera sua carreira.",
    traits: ["Proativo", "Dono", "Antecipatório", "Executivo"],
    strengths: ["Alta iniciativa", "Senso de dono", "Resolve antes de pedirem", "Carreira acelerada"],
    weaknesses: ["Pode passar por cima de outros", "Pode assumir demais"],
    tips: ["Continue assim!", "Equilibre iniciativa com alinhamento", "Não queime etapas políticas"],
  },
  B: {
    type: "B",
    title: "Proativo Equilibrado",
    emoji: "✅",
    description: "Você tem boa proatividade! Toma iniciativa mas com consciência de contexto. Propõe e executa quando faz sentido.",
    traits: ["Proativo", "Consciente", "Equilibrado", "Responsável"],
    strengths: ["Boa iniciativa", "Responsabilidade", "Melhoria contínua"],
    weaknesses: ["Poderia ser ainda mais proativo em algumas áreas"],
    tips: ["Continue desenvolvendo", "Busque mais oportunidades de iniciativa", "Sua proatividade te diferencia"],
  },
  C: {
    type: "C",
    title: "Reativo",
    emoji: "⏳",
    description: "Você é mais reativo que proativo. Faz bem o que pedem mas raramente antecipa ou propõe. Isso pode limitar seu crescimento.",
    traits: ["Reativo", "Executor", "Passivo", "Esperando"],
    strengths: ["Executa bem o que pedem"],
    weaknesses: ["Pouca iniciativa", "Não se diferencia", "Crescimento limitado", "Percebido como passivo"],
    tips: ["Desenvolva mais iniciativa", "Comece propondo pequenas melhorias", "Proatividade é diferencial de carreira"],
  },
  D: {
    type: "D",
    title: "Passivo",
    emoji: "😴",
    description: "Você é passivo no trabalho. Espera demandas e evita tomar iniciativa. Isso é um problema sério para crescimento e empregabilidade.",
    traits: ["Passivo", "Esperando", "Sem iniciativa", "Limitado"],
    strengths: ["Segue instruções"],
    weaknesses: ["Nenhuma iniciativa", "Carreira estagnada", "Primeiro a ser cortado", "Sem diferencial"],
    tips: ["ATENÇÃO: Sua empregabilidade está em risco!", "Passividade não é valorizada", "Comece a tomar pequenas iniciativas hoje"],
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
