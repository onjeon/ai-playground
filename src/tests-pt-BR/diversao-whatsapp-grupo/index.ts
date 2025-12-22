// Qual Seu Papel no Grupo de WhatsApp?
// Descubra como você se comporta nos grupos do WhatsApp!

export const questions = [
  {
    id: 1,
    question: "Quantas mensagens você manda por dia nos grupos?",
    options: [
      { text: "Muitas! Participo de todas as conversas", type: "A" },
      { text: "Algumas, quando tenho algo a dizer", type: "B" },
      { text: "Poucas, só leio na maioria", type: "C" },
      { text: "Só memes e figurinhas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que você mais manda nos grupos?",
    options: [
      { text: "Novidades, fofocas e informações", type: "A" },
      { text: "Opiniões e contribuições úteis", type: "B" },
      { text: "Quase nada, só leio", type: "C" },
      { text: "Memes, stickers e zoeiras", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você reage a discussões no grupo?",
    options: [
      { text: "Entro na discussão com opinião", type: "A" },
      { text: "Tento apaziguar ou resolver", type: "B" },
      { text: "Silencio e espero passar", type: "C" },
      { text: "Mando meme pra descontrair", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual sua relação com áudios no grupo?",
    options: [
      { text: "Mando vários, é mais fácil falar", type: "A" },
      { text: "Mando quando necessário", type: "B" },
      { text: "Nunca mando, odeio áudio", type: "C" },
      { text: "Só mando áudio zoando", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Alguém mandou fake news. Você...",
    options: [
      { text: "Corrijo imediatamente com a fonte", type: "A" },
      { text: "Sugiro que verifiquem antes de compartilhar", type: "B" },
      { text: "Ignoro, não vale a pena", type: "C" },
      { text: "Faço piada sobre a fake news", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quantas notificações você tem não lidas?",
    options: [
      { text: "Zero, leio tudo em tempo real", type: "A" },
      { text: "Algumas, leio quando posso", type: "B" },
      { text: "Centenas, silenciei quase tudo", type: "C" },
      { text: "Muitas, só abro pra mandar meme", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual tipo de grupo você prefere?",
    options: [
      { text: "Grupos ativos e com muita interação", type: "A" },
      { text: "Grupos com propósito e organização", type: "B" },
      { text: "Grupos silenciosos, só quando precisa", type: "C" },
      { text: "Grupos de memes e zoeira", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você usa o 'Bom dia' no grupo?",
    options: [
      { text: "Mando todos os dias, com imagens", type: "A" },
      { text: "Às vezes, quando lembro", type: "B" },
      { text: "Nunca, acho desnecessário", type: "C" },
      { text: "Só ironicamente, como piada", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Alguém te adicionou em grupo sem perguntar. Você...",
    options: [
      { text: "Fico, pode ser interessante", type: "A" },
      { text: "Vejo do que se trata antes de decidir", type: "B" },
      { text: "Saio imediatamente", type: "C" },
      { text: "Mando um meme e decido depois", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O grupo está parado há dias. Você...",
    options: [
      { text: "Mando algo pra movimentar", type: "A" },
      { text: "Aproveito o silêncio", type: "B" },
      { text: "Normal, quanto menos melhor", type: "C" },
      { text: "Mando meme pra ver se alguém responde", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você reage a correntes e PIX?",
    options: [
      { text: "Compartilho se achar válido", type: "A" },
      { text: "Ignoro educadamente", type: "B" },
      { text: "Odeio, penso em sair do grupo", type: "C" },
      { text: "Faço piada sobre", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual sua função ideal no grupo?",
    options: [
      { text: "O informante, sempre com novidades", type: "A" },
      { text: "O moderador, mantendo a ordem", type: "B" },
      { text: "O fantasma, presente mas invisível", type: "C" },
      { text: "O humorista oficial", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O/A Tagarela do Grupo",
    emoji: "💬",
    description: "Você é o Tagarela! Participa de todas as conversas, sempre tem algo a dizer e mantém o grupo ativo. Sem você, o grupo morreria de silêncio!",
    traits: ["Comunicativo(a)", "Ativo(a)", "Informado(a)", "Social"],
    strengths: ["Mantém conversas vivas", "Compartilha informações", "Conecta pessoas", "Presença constante"],
    weaknesses: ["Pode ser cansativo(a)", "Às vezes fala demais", "Notificações infinitas"],
    tips: ["Dê espaço aos outros", "Nem tudo precisa de resposta", "Às vezes o silêncio é bom"],
  },
  B: {
    type: "B",
    title: "O/A Moderador(a) Natural",
    emoji: "⚖️",
    description: "Você é o Moderador Natural! Participa quando faz sentido, apazigua discussões e traz equilíbrio. Você é a voz da razão nos grupos!",
    traits: ["Equilibrado(a)", "Sensato(a)", "Respeitado(a)", "Organizado(a)"],
    strengths: ["Bom senso", "Resolver conflitos", "Contribuições úteis", "Respeito de todos"],
    weaknesses: ["Pode ser sério demais", "Às vezes passivo(a)", "Falta de espontaneidade"],
    tips: ["Relaxe mais", "Nem tudo precisa ser útil", "Diversão também vale"],
  },
  C: {
    type: "C",
    title: "O/A Fantasma/Lurker",
    emoji: "👻",
    description: "Você é o Fantasma! Está no grupo, lê tudo, mas raramente se manifesta. Sua presença é silenciosa mas você sabe de tudo que acontece!",
    traits: ["Discreto(a)", "Observador(a)", "Silencioso(a)", "Seletivo(a)"],
    strengths: ["Não incomoda ninguém", "Sabe de tudo", "Filtra informações", "Paz de espírito"],
    weaknesses: ["Pode parecer desinteressado(a)", "Perde conexões", "Falta de participação"],
    tips: ["Participe mais às vezes", "Conexões precisam de interação", "Sua opinião também importa"],
  },
  D: {
    type: "D",
    title: "O/A Humorista/Memeiro(a)",
    emoji: "😂",
    description: "Você é o Humorista! Sua função é fazer todo mundo rir com memes, stickers e zoeiras. O grupo seria muito sério sem você!",
    traits: ["Engraçado(a)", "Criativo(a)", "Leve", "Carismático(a)"],
    strengths: ["Alegrar o grupo", "Descontrair tensões", "Criatividade", "Popularidade"],
    weaknesses: ["Às vezes fora de hora", "Pode não levar nada a sério", "Piadas repetitivas"],
    tips: ["Saiba a hora de ser sério", "Nem tudo é piada", "Contribua de outras formas também"],
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
