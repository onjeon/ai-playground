// Qual Seu Estilo de Férias Brasileiro?
// Descubra como você curte suas férias!

export const questions = [
  {
    id: 1,
    question: "Quando as férias chegam, você...",
    options: [
      { text: "Já tem tudo planejado há meses", type: "A" },
      { text: "Vai pra casa de parentes no interior", type: "B" },
      { text: "Decide na hora, pega a estrada", type: "C" },
      { text: "Fica em casa mesmo, maratonando séries", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Destino ideal de férias?",
    options: [
      { text: "Nordeste - praias paradisíacas", type: "A" },
      { text: "Interior - sítio ou fazenda da família", type: "B" },
      { text: "Qualquer lugar com estrada e aventura", type: "C" },
      { text: "Minha cama - ar-condicionado ligado", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que não pode faltar nas suas férias?",
    options: [
      { text: "Fotos incríveis pra postar", type: "A" },
      { text: "Comida caseira da vó", type: "B" },
      { text: "Liberdade e zero compromissos", type: "C" },
      { text: "Wi-Fi bom e streaming", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você lida com o orçamento de férias?",
    options: [
      { text: "Junto dinheiro o ano todo pra isso", type: "A" },
      { text: "Viajo barato, fico na casa de conhecidos", type: "B" },
      { text: "Vou no improviso, dá um jeito", type: "C" },
      { text: "Gasto pouco, férias em casa é econômico", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Férias em família pra você é...",
    options: [
      { text: "Legal, mas preciso de momentos só meus", type: "A" },
      { text: "O melhor! Família reunida é tudo", type: "B" },
      { text: "Prefiro com amigos ou sozinho(a)", type: "C" },
      { text: "Amo todo mundo, mas de longe", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual atividade combina mais com suas férias?",
    options: [
      { text: "Passeios turísticos e experiências", type: "A" },
      { text: "Churrasco, piscina e prosa", type: "B" },
      { text: "Trilhas, camping ou road trip", type: "C" },
      { text: "Dormir até tarde e não fazer nada", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você volta das férias?",
    options: [
      { text: "Cheio(a) de histórias e fotos", type: "A" },
      { text: "Mais gordo(a) e feliz", type: "B" },
      { text: "Com saudade da estrada", type: "C" },
      { text: "Descansado(a) de verdade", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sua mala de férias é...",
    options: [
      { text: "Organizada com lista de tudo", type: "A" },
      { text: "Básica, vou de chinelo e shorts", type: "B" },
      { text: "Uma mochila pequena, só o essencial", type: "C" },
      { text: "Nem faço mala, fico em casa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Nas férias, seu celular serve pra...",
    options: [
      { text: "Tirar fotos incríveis e postar tudo", type: "A" },
      { text: "Ligar pra família e mandar fotos", type: "B" },
      { text: "GPS e emergências apenas", type: "C" },
      { text: "Maratonar séries e jogos", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual é o lema das suas férias?",
    options: [
      { text: "Viver experiências inesquecíveis", type: "A" },
      { text: "Família e raízes sempre", type: "B" },
      { text: "Liberdade é o destino", type: "C" },
      { text: "Descanso é sagrado", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Turista Raiz",
    emoji: "✈️",
    percentage: 90,
    description: "Você é O Turista Raiz! Suas férias são planejadas, fotografadas e postadas. Nordeste, Sul, praias ou serras - você quer conhecer o Brasil e fazer memórias!",
    characteristics: ["Planejado(a)", "Aventureiro(a)", "Fotogênico(a)", "Curioso(a)"],
    advice: "Suas viagens são incríveis! Mas às vezes guarda o celular e viva o momento sem pensar no post. As melhores memórias nem sempre estão no Instagram.",
  },
  B: {
    type: "B",
    title: "O Familiar",
    emoji: "👨‍👩‍👧‍👦",
    percentage: 85,
    description: "Você é O Familiar! Férias pra você é voltar pras raízes, comer comida de vó, ver os primos e renovar os laços. O interior te chama e você atende com alegria!",
    characteristics: ["Família-orientado(a)", "Tradicional", "Acolhedor(a)", "Saudosista"],
    advice: "Essa conexão familiar é preciosa! Continue cultivando esses laços, mas permita-se também descobrir lugares novos de vez em quando.",
  },
  C: {
    type: "C",
    title: "O Aventureiro",
    emoji: "🚗",
    percentage: 80,
    description: "Você é O Aventureiro! Pegar a estrada, descobrir lugares novos, dormir onde der - essa é sua vibe. Suas férias são sobre liberdade e histórias únicas!",
    characteristics: ["Espontâneo(a)", "Livre", "Desapegado(a)", "Corajoso(a)"],
    advice: "Sua sede de aventura é inspiradora! Mas um mínimo de planejamento pode evitar perrengues. Às vezes o conforto também faz parte da diversão.",
  },
  D: {
    type: "D",
    title: "O Caseiro",
    emoji: "🛋️",
    percentage: 75,
    description: "Você é O Caseiro! Férias é sinônimo de descanso real: sua cama, seu sofá, suas séries. Você sabe que às vezes o melhor destino é não ir a lugar nenhum!",
    characteristics: ["Caseiro(a)", "Relaxado(a)", "Prático(a)", "Introvertido(a)"],
    advice: "Descanso é importante mesmo! Mas de vez em quando, uma mudança de ares pode renovar as energias de um jeito diferente. Experimente sair da zona de conforto.",
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
