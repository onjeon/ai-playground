// Como Você É na Sexta-Feira?
// Descubra seu perfil de sexta-feira!

export const questions = [
  {
    id: 1,
    question: "Qual sua energia na sexta de manhã?",
    options: [
      { text: "Já animado(a) pro fim de semana", type: "A" },
      { text: "Normal, ainda é dia de trabalho", type: "B" },
      { text: "Cansado(a), a semana pesou", type: "C" },
      { text: "Já mandando memes de sexta pros amigos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você já tem planos pro fim de semana?",
    options: [
      { text: "Sim! Tudo organizado desde quarta", type: "A" },
      { text: "Alguns, mas nada muito definido", type: "B" },
      { text: "Descansar em casa, só isso", type: "C" },
      { text: "Deixo rolar, vejo na hora", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como é sua produtividade na sexta?",
    options: [
      { text: "Acelero pra terminar tudo e curtir", type: "A" },
      { text: "Normal, trabalho é trabalho", type: "B" },
      { text: "Baixa, só penso em descanso", type: "C" },
      { text: "Zero, só conto as horas", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que você faz na sexta à noite?",
    options: [
      { text: "Saio! Bar, balada, encontros", type: "A" },
      { text: "Depende da semana, às vezes saio", type: "B" },
      { text: "Fico em casa recuperando energias", type: "C" },
      { text: "Encontro os amigos pra zoar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual sua bebida de sexta?",
    options: [
      { text: "Várias! A noite é longa", type: "A" },
      { text: "Uma ou duas cervejas com moderação", type: "B" },
      { text: "Chá ou algo relaxante em casa", type: "C" },
      { text: "O que tiver, o importante é brindar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você responde mensagens de trabalho na sexta à noite?",
    options: [
      { text: "Não! Sexta é sagrada", type: "A" },
      { text: "Se for urgente, sim", type: "B" },
      { text: "Às vezes, pra deixar tudo em ordem", type: "C" },
      { text: "Ignoro e mando meme de 'sexta-feira'", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que você pensa às 18h de sexta?",
    options: [
      { text: "Liberdade! Fim de semana começou!", type: "A" },
      { text: "Bom, posso relaxar um pouco", type: "B" },
      { text: "Finalmente posso descansar", type: "C" },
      { text: "SEXTOOOU!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sexta-feira combina com...",
    options: [
      { text: "Festa, amigos e diversão", type: "A" },
      { text: "Descanso merecido após a semana", type: "B" },
      { text: "Sofá, Netflix e comida delivery", type: "C" },
      { text: "Zoeira e bons momentos", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você fica até tarde na sexta?",
    options: [
      { text: "Sempre! A noite é uma criança", type: "A" },
      { text: "Às vezes, depende dos planos", type: "B" },
      { text: "Raramente, durmo cedo mesmo", type: "C" },
      { text: "Depende se a zoeira tá boa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você acorda no sábado?",
    options: [
      { text: "Tarde, mas animado(a) pra mais", type: "A" },
      { text: "Em horário normal, sem exageros", type: "B" },
      { text: "Descansado(a) e pronto(a) pra nada", type: "C" },
      { text: "Rindo das fotos da noite anterior", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sexta é seu dia favorito?",
    options: [
      { text: "Com certeza! É o melhor dia", type: "A" },
      { text: "Gosto, mas não é o favorito", type: "B" },
      { text: "Prefiro sábado pra descansar", type: "C" },
      { text: "É o dia dos melhores memes!", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase define sua sexta?",
    options: [
      { text: "Sextou! Bora aproveitar!", type: "A" },
      { text: "Bom fim de semana pra todos", type: "B" },
      { text: "Finalmente posso descansar", type: "C" },
      { text: "Sexta-feira, seu linnnda!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Party Animal de Sexta",
    emoji: "🎉",
    description: "Você é o Party Animal! Sexta é sagrada, dia de sair, curtir e aproveitar. A semana foi feita pra você poder chegar na sexta e se jogar!",
    traits: ["Festeiro(a)", "Animado(a)", "Social", "Energético(a)"],
    strengths: ["Aproveitar a vida", "Socialização", "Energia pra curtir", "Criar memórias"],
    weaknesses: ["Pode exagerar", "Ressaca frequente", "Gasta muito"],
    tips: ["Modere às vezes", "Sábado também existe", "Cuide da saúde"],
  },
  B: {
    type: "B",
    title: "Equilibrado de Sexta",
    emoji: "⚖️",
    description: "Você é o Equilibrado! Sexta é boa, mas você não enlouquece. Sabe curtir mas também sabe que precisa de descanso. Maturidade em pessoa!",
    traits: ["Equilibrado(a)", "Maduro(a)", "Prático(a)", "Consciente"],
    strengths: ["Equilíbrio saudável", "Decisões conscientes", "Aproveitar sem exagerar", "Autocuidado"],
    weaknesses: ["Pode parecer careta", "Perde algumas oportunidades", "Muito racional"],
    tips: ["Solte-se mais às vezes", "Uma noite louca não faz mal", "Viva um pouco!"],
  },
  C: {
    type: "C",
    title: "Caseiro de Sexta",
    emoji: "🛋️",
    description: "Você é o Caseiro! Sexta é dia de recuperar as energias da semana. Sofá, série e delivery são seu programa perfeito. E está tudo bem!",
    traits: ["Caseiro(a)", "Introvertido(a)", "Relaxado(a)", "Autossuficiente"],
    strengths: ["Saber descansar", "Economia", "Paz interior", "Não precisar de validação"],
    weaknesses: ["Pode perder experiências", "Isolamento", "Rotina demais"],
    tips: ["Saia de vez em quando", "Experiências sociais são boas", "Quebre a rotina às vezes"],
  },
  D: {
    type: "D",
    title: "Memeiro de Sexta",
    emoji: "😆",
    description: "Você é o Memeiro! Sexta é dia de celebrar com humor, mandar figurinhas e espalhar a alegria do fim de semana. Seus grupos dependem de você!",
    traits: ["Bem-humorado(a)", "Social", "Leve", "Carismático(a)"],
    strengths: ["Alegrar os outros", "Conexão social", "Bom humor", "Criar momento bom"],
    weaknesses: ["Planos vagos", "Às vezes sem rumo", "Depende dos outros"],
    tips: ["Faça planos concretos também", "Nem sempre espere os outros", "Tome iniciativa"],
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
