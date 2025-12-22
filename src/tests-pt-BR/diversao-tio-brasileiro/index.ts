// Que Tipo de Tio(a) Brasileiro Você É?
// Descubra seu perfil de tio(a)!

export const questions = [
  {
    id: 1,
    question: "Como você é com seus sobrinhos?",
    options: [
      { text: "Parceiro de bagunça, brinco muito", type: "A" },
      { text: "Referência de sucesso e conselhos", type: "B" },
      { text: "Presente mas discreto", type: "C" },
      { text: "O que dá presentes incríveis", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que você faz com os sobrinhos?",
    options: [
      { text: "Levo pra sair, brinco, faço bagunça", type: "A" },
      { text: "Ensino coisas, dou conselhos de vida", type: "B" },
      { text: "Visito de vez em quando", type: "C" },
      { text: "Levo em lugares legais e compro coisas", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Nas reuniões de família, você...",
    options: [
      { text: "Sou o que brinca com as crianças", type: "A" },
      { text: "Converso com todos, incluindo os jovens", type: "B" },
      { text: "Fico mais com os adultos", type: "C" },
      { text: "Trago presentes e alegria", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Seu irmão/irmã precisa de ajuda com os filhos. Você...",
    options: [
      { text: "Adoro! Fico o tempo que precisar", type: "A" },
      { text: "Ajudo e aproveito pra ensinar algo", type: "B" },
      { text: "Ajudo se não tiver outro jeito", type: "C" },
      { text: "Levo pra passear e compro coisas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você dá o que de presente pro sobrinho?",
    options: [
      { text: "Brinquedos barulhentos que irritam os pais", type: "A" },
      { text: "Livros e coisas educativas", type: "B" },
      { text: "Dinheiro ou o que pedirem", type: "C" },
      { text: "Os melhores presentes, não importa o preço", type: "D" },
    ],
  },
  {
    id: 6,
    question: "O sobrinho te conta um segredo. Você...",
    options: [
      { text: "Guardo e sou parceiro de segredos", type: "A" },
      { text: "Oriento e conto pros pais se for grave", type: "B" },
      { text: "Não me envolvo muito", type: "C" },
      { text: "Tento resolver sem drama", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como os sobrinhos te chamam?",
    options: [
      { text: "Pelo apelido ou nome, somos íntimos", type: "A" },
      { text: "Tio/Tia com respeito", type: "B" },
      { text: "Tio/Tia formalmente", type: "C" },
      { text: "Tio/Tia [nome] com carinho", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você sabe tudo sobre a vida dos sobrinhos?",
    options: [
      { text: "Sim! Escola, amigos, paixões", type: "A" },
      { text: "O importante, acompanho de longe", type: "B" },
      { text: "O básico apenas", type: "C" },
      { text: "Me atualizo quando visito", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O sobrinho fez algo errado. Você...",
    options: [
      { text: "Defendo e amenizo pros pais", type: "A" },
      { text: "Converso sobre consequências", type: "B" },
      { text: "Deixo os pais resolverem", type: "C" },
      { text: "Distraio com outra coisa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você tem filhos?",
    options: [
      { text: "Não, sobrinhos são meus filhos de coração", type: "A" },
      { text: "Sim, e trato sobrinhos como filhos", type: "B" },
      { text: "Sim/Não, cada família no seu quadrado", type: "C" },
      { text: "Não, e por isso mimo os sobrinhos", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que você ensina aos sobrinhos?",
    options: [
      { text: "Como se divertir e curtir a vida", type: "A" },
      { text: "Valores, educação, coisas da vida", type: "B" },
      { text: "Nada específico, deixo pros pais", type: "C" },
      { text: "Que eles merecem o melhor", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define como tio(a)?",
    options: [
      { text: "'Vem com o tio, vamos aprontar!'", type: "A" },
      { text: "'Se precisar, pode contar comigo'", type: "B" },
      { text: "'Respeito o espaço da família'", type: "C" },
      { text: "'O que você quer de presente?'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Tio(a) Parceiro de Bagunça",
    emoji: "🎮",
    description: "Você é o Tio Parceiro! O melhor amigo que é adulto. Brinca, faz bagunça, guarda segredos e é o herói dos sobrinhos!",
    traits: ["Divertido(a)", "Parceiro(a)", "Brincalhão(ona)", "Íntimo(a)"],
    strengths: ["Conexão forte", "Diversão garantida", "Confidente", "Presença alegre"],
    weaknesses: ["Pode minar autoridade dos pais", "Às vezes irresponsável", "Não sabe ser sério"],
    tips: ["Às vezes apoie os pais", "Limite também é amor", "Saiba a hora de ser adulto"],
  },
  B: {
    type: "B",
    title: "Tio(a) Conselheiro",
    emoji: "🎓",
    description: "Você é o Tio Conselheiro! Referência de vida, sabedoria e sucesso. Os sobrinhos te admiram e buscam seus conselhos!",
    traits: ["Sábio(a)", "Mentor(a)", "Respeitado(a)", "Exemplo"],
    strengths: ["Influência positiva", "Conselhos valiosos", "Admiração", "Guia de vida"],
    weaknesses: ["Pode parecer distante", "Muito sério às vezes", "Pressão de ser exemplo"],
    tips: ["Seja divertido também", "Nem tudo precisa ser lição", "Conexão também é importante"],
  },
  C: {
    type: "C",
    title: "Tio(a) Distante",
    emoji: "👋",
    description: "Você é o Tio Distante! Presente nas reuniões, mas cada família no seu quadrado. Você respeita limites e não se intromete!",
    traits: ["Reservado(a)", "Respeitoso(a)", "Independente", "Discreto(a)"],
    strengths: ["Não se intromete", "Respeita limites", "Sem drama", "Independência"],
    weaknesses: ["Conexão fraca", "Pouca influência", "Pode parecer frio(a)"],
    tips: ["Aproxime-se mais", "Sobrinhos crescem rápido", "Memórias são importantes"],
  },
  D: {
    type: "D",
    title: "Tio(a) Presente",
    emoji: "🎁",
    description: "Você é o Tio Presente! Literalmente - você dá os melhores presentes. Generoso(a), quer ver os sobrinhos felizes e realiza sonhos!",
    traits: ["Generoso(a)", "Carinhoso(a)", "Presente", "Querido(a)"],
    strengths: ["Generosidade", "Alegria que traz", "Presentes incríveis", "Amor demonstrado"],
    weaknesses: ["Compra amor", "Pode estragar", "Presença além de presentes"],
    tips: ["Tempo vale mais que presentes", "Não precisa sempre dar coisas", "Presença é o melhor presente"],
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
