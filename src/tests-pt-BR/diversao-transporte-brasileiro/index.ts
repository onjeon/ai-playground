// Qual Transporte Brasileiro Você Seria?
// Descubra qual meio de transporte do Brasil representa sua personalidade!

export const questions = [
  {
    id: 1,
    question: "Qual seu ritmo de vida?",
    options: [
      { text: "Rápido, sempre com pressa", type: "A" },
      { text: "Moderado, equilibro velocidade e conforto", type: "B" },
      { text: "Tranquilo, curto a jornada", type: "C" },
      { text: "Variável, depende do momento", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você prefere se locomover?",
    options: [
      { text: "O mais rápido possível", type: "A" },
      { text: "Com conforto e privacidade", type: "B" },
      { text: "Curtindo a paisagem", type: "C" },
      { text: "Praticidade é o que importa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que você mais valoriza em um trajeto?",
    options: [
      { text: "Velocidade e eficiência", type: "A" },
      { text: "Conforto e controle", type: "B" },
      { text: "A experiência e a viagem", type: "C" },
      { text: "Economia e praticidade", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você lida com trânsito?",
    options: [
      { text: "Fico extremamente impaciente", type: "A" },
      { text: "Prefiro ter controle da situação", type: "B" },
      { text: "Aproveito pra relaxar ou pensar", type: "C" },
      { text: "Busco alternativas criativas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual sua relação com horários?",
    options: [
      { text: "Sou pontual ao extremo", type: "A" },
      { text: "Chego na hora, com margem de segurança", type: "B" },
      { text: "Flexível, as coisas acontecem", type: "C" },
      { text: "Depende da importância do compromisso", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você se sente em multidões?",
    options: [
      { text: "Incomodado(a), quero meu espaço", type: "A" },
      { text: "Prefiro evitar, mas lido bem", type: "B" },
      { text: "Normal, faz parte da vida", type: "C" },
      { text: "Gosto da energia coletiva", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que você faz durante viagens?",
    options: [
      { text: "Trabalho ou planejo coisas", type: "A" },
      { text: "Ouço música ou podcast", type: "B" },
      { text: "Aprecio a paisagem e relaxo", type: "C" },
      { text: "Converso ou conheço pessoas", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual fator mais influencia sua escolha de transporte?",
    options: [
      { text: "Tempo - o mais rápido", type: "A" },
      { text: "Autonomia - ter controle", type: "B" },
      { text: "Custo-benefício", type: "C" },
      { text: "Conveniência do momento", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você é como passageiro(a)?",
    options: [
      { text: "Impaciente, queria estar dirigindo", type: "A" },
      { text: "Crítico(a) da condução", type: "B" },
      { text: "Relaxado(a), aproveito pra descansar", type: "C" },
      { text: "Conversador(a), faço amizade", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que te define melhor?",
    options: [
      { text: "Eficiência e rapidez", type: "A" },
      { text: "Independência e conforto", type: "B" },
      { text: "Paciência e contemplação", type: "C" },
      { text: "Adaptabilidade e flexibilidade", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Em viagens longas, você...",
    options: [
      { text: "Prefiro avião, mais rápido", type: "A" },
      { text: "Prefiro carro, tenho controle", type: "B" },
      { text: "Prefiro ônibus, curto a estrada", type: "C" },
      { text: "Qualquer um, depende do custo", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase mais combina com você?",
    options: [
      { text: "Tempo é dinheiro!", type: "A" },
      { text: "Quem dirige é quem decide", type: "B" },
      { text: "O importante é a jornada, não o destino", type: "C" },
      { text: "Cada situação, uma solução", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Avião / Metrô",
    emoji: "✈️",
    description: "Você é o Avião/Metrô! Rápido, eficiente e sem tempo a perder. Assim como esses transportes velozes, você valoriza eficiência acima de tudo e não suporta enrolação!",
    traits: ["Eficiente", "Pontual", "Rápido(a)", "Impaciente"],
    strengths: ["Produtividade", "Respeito ao tempo", "Foco em resultados", "Organização"],
    weaknesses: ["Impaciência", "Estresse", "Dificuldade em relaxar"],
    tips: ["Às vezes o caminho importa", "Respire e relaxe", "Nem tudo precisa ser rápido"],
  },
  B: {
    type: "B",
    title: "Carro Próprio",
    emoji: "🚗",
    description: "Você é o Carro Próprio! Independente, confortável e no controle. Assim como quem dirige seu próprio veículo, você gosta de decidir seu caminho e ter autonomia!",
    traits: ["Independente", "Confortável", "Controlador(a)", "Prático(a)"],
    strengths: ["Autonomia", "Conforto pessoal", "Flexibilidade de horários", "Privacidade"],
    weaknesses: ["Dificuldade em ceder controle", "Custo alto", "Impaciência com outros"],
    tips: ["Confie mais nos outros", "Divida o volante às vezes", "Tente transporte público"],
  },
  C: {
    type: "C",
    title: "Ônibus / Trem",
    emoji: "🚌",
    description: "Você é o Ônibus/Trem! Tranquilo(a), contemplativo(a) e aprecia a jornada. Assim como esses transportes tradicionais, você sabe que chegar é importante, mas o caminho também!",
    traits: ["Tranquilo(a)", "Paciente", "Contemplativo(a)", "Econômico(a)"],
    strengths: ["Paciência", "Aproveitar a viagem", "Economia", "Capacidade de relaxar"],
    weaknesses: ["Pode ser lento(a)", "Dificuldade com urgências", "Às vezes passivo(a)"],
    tips: ["Às vezes velocidade é necessária", "Seja mais proativo(a)", "Equilibre contemplação e ação"],
  },
  D: {
    type: "D",
    title: "App de Transporte / Bike",
    emoji: "📱",
    description: "Você é o App de Transporte/Bike! Flexível, moderno(a) e adaptável. Assim como as novas formas de mobilidade, você se adapta a cada situação e encontra soluções criativas!",
    traits: ["Flexível", "Adaptável", "Moderno(a)", "Prático(a)"],
    strengths: ["Adaptabilidade", "Criatividade", "Economia", "Praticidade"],
    weaknesses: ["Falta de consistência", "Dependência de tecnologia", "Pode parecer instável"],
    tips: ["Tenha também rotinas fixas", "Planeje mais", "Consistência também importa"],
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
