// Qual Seu Tipo de Vizinho?
// Descubra que tipo de vizinho você é no Brasil!

export const questions = [
  {
    id: 1,
    question: "Você conhece seus vizinhos?",
    options: [
      { text: "Todos! Sei nome, história, profissão...", type: "A" },
      { text: "Os mais próximos, cumprimento sempre", type: "B" },
      { text: "De vista, um aceno de longe", type: "C" },
      { text: "Faço questão de não conhecer ninguém", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Vizinho novo se muda pro prédio/rua. Você...",
    options: [
      { text: "Vou me apresentar e levo um bolo", type: "A" },
      { text: "Cumprimento quando encontrar no corredor", type: "B" },
      { text: "Espero ele vir falar comigo", type: "C" },
      { text: "Ignoro, mais um pra lista de estranhos", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Vizinho fazendo barulho às 23h. Você...",
    options: [
      { text: "Vou lá conversar, resolver na boa", type: "A" },
      { text: "Mando mensagem educada no grupo", type: "B" },
      { text: "Reclamo pro síndico/bato na parede", type: "C" },
      { text: "Coloco fone e finjo que não ouço", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sobre grupos de WhatsApp do condomínio/rua:",
    options: [
      { text: "Participo ativamente, opino em tudo", type: "A" },
      { text: "Leio mas só falo quando necessário", type: "B" },
      { text: "Silenciado, olho uma vez por semana", type: "C" },
      { text: "Saí ou nunca entrei", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Vizinho pede pra receber encomenda. Você...",
    options: [
      { text: "Claro! Ajudo sempre que posso", type: "A" },
      { text: "Se não for muito grande, sem problema", type: "B" },
      { text: "Prefiro não me comprometer", type: "C" },
      { text: "Não, nem abre a porta", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Festa no apartamento/casa de vizinho. Você...",
    options: [
      { text: "Adoro! Quem sabe não rola um convite", type: "A" },
      { text: "Tudo bem se for em horário razoável", type: "B" },
      { text: "Fico de olho no horário pra reclamar", type: "C" },
      { text: "Já fico irritado(a) de antemão", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você empresta coisas pros vizinhos?",
    options: [
      { text: "Sempre! Açúcar, ferramentas, o que precisar", type: "A" },
      { text: "Coisas pequenas, sem problema", type: "B" },
      { text: "Depende do que é e pra quem", type: "C" },
      { text: "Não empresto nada pra ninguém", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Reunião de condomínio. Você...",
    options: [
      { text: "Vou em todas, tenho opinião sobre tudo", type: "A" },
      { text: "Vou quando tem pauta importante", type: "B" },
      { text: "Dou procuração e não apareço", type: "C" },
      { text: "Nem sabia que tinha reunião", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Elevador/Portaria: você puxa assunto com vizinhos?",
    options: [
      { text: "Sempre! Converso sobre tudo", type: "A" },
      { text: "Um papo casual sobre o tempo/novidades", type: "B" },
      { text: "Só 'bom dia' e olho pro celular", type: "C" },
      { text: "Finjo que não vi, zero interação", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Seu vizinho ideal seria alguém que...",
    options: [
      { text: "Virasse amigo(a), faz churrasco junto", type: "A" },
      { text: "É cordial e respeita limites", type: "B" },
      { text: "Não faz barulho e não aparece", type: "C" },
      { text: "Mora em outro andar/rua, bem longe", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Vizinho Amigão",
    emoji: "🤝",
    percentage: 95,
    description: "Você é O Vizinho Amigão! Conhece todo mundo, participa de tudo, empresta açúcar e recebe encomendas. Seu prédio/rua é uma extensão da sua família. Você é a alma do lugar!",
    characteristics: ["Sociável", "Prestativo(a)", "Comunicativo(a)", "Comunitário(a)"],
    advice: "Sua simpatia é um presente pro condomínio! Só cuidado pra não se meter demais na vida alheia. Nem todo mundo quer tanta intimidade!",
  },
  B: {
    type: "B",
    title: "O Vizinho Educado",
    emoji: "😊",
    percentage: 80,
    description: "Você é O Vizinho Educado! Cumprimenta, ajuda quando precisa, respeita limites. Você é cordial sem ser invasivo. O tipo de vizinho que todo mundo gostaria de ter!",
    characteristics: ["Respeitoso(a)", "Equilibrado(a)", "Cordial", "Sensato(a)"],
    advice: "Você tem a dose certa de vizinhança! Continue assim, mantendo relações saudáveis sem perder sua privacidade. Equilíbrio perfeito!",
  },
  C: {
    type: "C",
    title: "O Vizinho Reservado",
    emoji: "🚪",
    percentage: 65,
    description: "Você é O Vizinho Reservado! Mantém distância educada, não se mete, não dá trabalho. Pra você, bom vizinho é vizinho invisível. Privacidade acima de tudo!",
    characteristics: ["Discreto(a)", "Reservado(a)", "Independente", "Tranquilo(a)"],
    advice: "Respeito sua privacidade! Mas às vezes uma boa relação com vizinhos pode ser útil. Um aceno mais caloroso não compromete sua paz!",
  },
  D: {
    type: "D",
    title: "O Vizinho Invisível",
    emoji: "👻",
    percentage: 45,
    description: "Você é O Vizinho Invisível! Ninguém sabe quem você é, você não sabe quem são eles, e tá ótimo assim. Sua casa é seu castelo e a ponte levadiça tá sempre levantada!",
    characteristics: ["Introspectivo(a)", "Solitário(a)", "Desapegado(a)", "Misterioso(a)"],
    advice: "Tudo bem ser reservado, mas zero interação pode ser problemático. Um mínimo de relação ajuda em emergências e evita mal-entendidos!",
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
