// Qual Seu Papel nas Reuniões de Família?
// Descubra como você é quando a família toda se reúne!

export const questions = [
  {
    id: 1,
    question: "Quando tem reunião de família, você...",
    options: [
      { text: "Sou o primeiro a chegar e último a sair", type: "A" },
      { text: "Ajudo a organizar tudo", type: "B" },
      { text: "Chego, como e vou embora cedo", type: "C" },
      { text: "Animo todo mundo com piadas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você se relaciona com os parentes?",
    options: [
      { text: "Amo todos, converso com cada um", type: "A" },
      { text: "Cuido de quem precisa de ajuda", type: "B" },
      { text: "Falo o mínimo necessário", type: "C" },
      { text: "Faço todo mundo rir", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que você faz durante a reunião?",
    options: [
      { text: "Circulo conversando com todos", type: "A" },
      { text: "Ajudo na cozinha ou organização", type: "B" },
      { text: "Fico no celular ou num canto", type: "C" },
      { text: "Conto histórias e faço zoeiras", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você lida com aquela tia perguntadeira?",
    options: [
      { text: "Adoro! Conto tudo da minha vida", type: "A" },
      { text: "Respondo educadamente e mudo de assunto", type: "B" },
      { text: "Evito ao máximo", type: "C" },
      { text: "Invento histórias absurdas pra zoar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "E quando começam as discussões políticas?",
    options: [
      { text: "Participo, tenho opinião!", type: "A" },
      { text: "Tento apaziguar e mudar de assunto", type: "B" },
      { text: "Aproveito pra ir embora", type: "C" },
      { text: "Faço piada pra quebrar o clima", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual sua relação com as crianças da família?",
    options: [
      { text: "Adoro brincar com elas", type: "A" },
      { text: "Cuido quando os pais precisam", type: "B" },
      { text: "Evito, são muito barulhentas", type: "C" },
      { text: "Sou a criança grande que bagunça junto", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que você leva pra reunião?",
    options: [
      { text: "Várias coisas, gosto de contribuir", type: "A" },
      { text: "O que pedirem, faço questão de ajudar", type: "B" },
      { text: "Nada, só apareço", type: "C" },
      { text: "Bebida e boa vontade pra animar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você se sente depois da reunião?",
    options: [
      { text: "Feliz, já quero a próxima", type: "A" },
      { text: "Satisfeito por ter ajudado", type: "B" },
      { text: "Aliviado que acabou", type: "C" },
      { text: "Com material novo pra contar pros amigos", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual sua posição na mesa?",
    options: [
      { text: "No meio, perto de todo mundo", type: "A" },
      { text: "Perto da cozinha, pra ajudar", type: "B" },
      { text: "Na ponta, perto da saída", type: "C" },
      { text: "Onde der mais risada", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você trata os parentes que não gosta muito?",
    options: [
      { text: "Trato bem, família é família", type: "A" },
      { text: "Sou educado mas evito assuntos polêmicos", type: "B" },
      { text: "Ignoro completamente", type: "C" },
      { text: "Zoar é a melhor forma de conviver", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que mais te irrita nas reuniões?",
    options: [
      { text: "Quando acaba cedo demais", type: "A" },
      { text: "Quando ninguém ajuda", type: "B" },
      { text: "Ter que ir", type: "C" },
      { text: "Quando o clima fica pesado", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase você mais ouve na reunião?",
    options: [
      { text: "'Que bom te ver! Como você está?'", type: "A" },
      { text: "'Pode me ajudar aqui?'", type: "B" },
      { text: "'Você já vai embora?'", type: "C" },
      { text: "'Para de fazer a gente rir!'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O/A Agregador(a) da Família",
    emoji: "🤗",
    description: "Você é o Agregador! Ama reuniões de família, conversa com todos e é o elo que mantém a família unida. Sem você, as reuniões não seriam as mesmas!",
    traits: ["Sociável", "Amoroso(a)", "Unificador(a)", "Presente"],
    strengths: ["Manter família unida", "Conversar com todos", "Criar memórias", "Presença constante"],
    weaknesses: ["Pode se sobrecarregar", "Às vezes invasivo(a)", "Difícil dizer não"],
    tips: ["Cuide de você também", "Nem todos querem conversar", "Respeite limites alheios"],
  },
  B: {
    type: "B",
    title: "O/A Cuidador(a) da Família",
    emoji: "🍳",
    description: "Você é o Cuidador! Ajuda na cozinha, cuida das crianças e garante que tudo funcione. Você é o herói silencioso das reuniões de família!",
    traits: ["Prestativo(a)", "Organizado(a)", "Cuidadoso(a)", "Responsável"],
    strengths: ["Fazer tudo funcionar", "Cuidar de todos", "Organização", "Ser indispensável"],
    weaknesses: ["Esquece de curtir", "Trabalha demais", "Pode se sentir usado(a)"],
    tips: ["Sente e curta também!", "Peça ajuda aos outros", "Você merece descansar"],
  },
  C: {
    type: "C",
    title: "O/A Antissocial da Família",
    emoji: "📱",
    description: "Você é o Antissocial! Vai porque tem que ir, fica o mínimo possível e já está planejando a desculpa pra ir embora. Reunião de família não é sua praia!",
    traits: ["Reservado(a)", "Introvertido(a)", "Prático(a)", "Independente"],
    strengths: ["Economiza energia social", "Sem hipocrisia", "Honesto(a) consigo", "Limites claros"],
    weaknesses: ["Perde conexões", "Pode parecer rude", "Afastamento familiar"],
    tips: ["Dê uma chance às reuniões", "Família tem seu valor", "Nem sempre precisa ir, mas quando for, curta"],
  },
  D: {
    type: "D",
    title: "O/A Palhaço da Família",
    emoji: "🤡",
    description: "Você é o Palhaço! Sua função é fazer todo mundo rir, contar histórias e quebrar qualquer clima pesado. As reuniões dependem do seu bom humor!",
    traits: ["Engraçado(a)", "Carismático(a)", "Leve", "Animador(a)"],
    strengths: ["Alegrar reuniões", "Quebrar tensões", "Criar memórias divertidas", "Ser adorado por todos"],
    weaknesses: ["Pode não ser levado a sério", "Às vezes passa do limite", "Foge de assuntos sérios"],
    tips: ["Saiba a hora de ser sério", "Algumas conversas são importantes", "Você não precisa sempre entreter"],
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
