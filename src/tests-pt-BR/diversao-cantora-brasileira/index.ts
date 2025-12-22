// Qual Cantora Brasileira Você É?
// Descubra qual diva da música combina com você!

export const questions = [
  {
    id: 1,
    question: "Como você lida com críticas?",
    options: [
      { text: "Ignoro e sigo em frente, forte", type: "A" },
      { text: "Reflito, mas não me abalo", type: "B" },
      { text: "Uso como inspiração pra criar", type: "C" },
      { text: "Respondo com trabalho e sucesso", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual seu estilo de se vestir?",
    options: [
      { text: "Ousado, chamativo, sem medo", type: "A" },
      { text: "Elegante, clássico com personalidade", type: "B" },
      { text: "Artístico, único, diferente", type: "C" },
      { text: "Moderno, na moda, versátil", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que te move na vida?",
    options: [
      { text: "Paixão e intensidade em tudo", type: "A" },
      { text: "Amor e conexões verdadeiras", type: "B" },
      { text: "Arte e expressão autêntica", type: "C" },
      { text: "Sucesso e conquistas", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você é num relacionamento?",
    options: [
      { text: "Intensa, entrego tudo", type: "A" },
      { text: "Romântica, valorizo o amor", type: "B" },
      { text: "Profunda, busco conexão real", type: "C" },
      { text: "Parceira, mas independente", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual tipo de música você mais gosta?",
    options: [
      { text: "Funk, pop brasileiro, agito", type: "A" },
      { text: "MPB, samba, música brasileira", type: "B" },
      { text: "Alternativo, indie, experimental", type: "C" },
      { text: "Sertanejo, pop, o que tá tocando", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você se posiciona em questões sociais?",
    options: [
      { text: "Vocal e combativa, sem medo", type: "A" },
      { text: "Presente, mas com elegância", type: "B" },
      { text: "Através da arte e mensagens sutis", type: "C" },
      { text: "Apoio, mas prefiro não me expor muito", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual sua maior qualidade?",
    options: [
      { text: "Coragem e autenticidade", type: "A" },
      { text: "Talento e versatilidade", type: "B" },
      { text: "Criatividade e profundidade", type: "C" },
      { text: "Dedicação e profissionalismo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você lida com fama/atenção?",
    options: [
      { text: "Amo! Nasci pra brilhar", type: "A" },
      { text: "Aceito bem, faz parte", type: "B" },
      { text: "Prefiro que foquem no trabalho", type: "C" },
      { text: "Aproveito mas mantenho privacidade", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual seu lema de vida?",
    options: [
      { text: "'Seja você mesma, sem pedir licença'", type: "A" },
      { text: "'O amor e a arte salvam'", type: "B" },
      { text: "'Seja autêntico, seja diferente'", type: "C" },
      { text: "'Trabalho duro traz resultados'", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você celebra conquistas?",
    options: [
      { text: "Festa grande, ostentação!", type: "A" },
      { text: "Com pessoas queridas, intimidade", type: "B" },
      { text: "Momento de reflexão e gratidão", type: "C" },
      { text: "Já pensando no próximo passo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual palavra te define?",
    options: [
      { text: "Poderosa", type: "A" },
      { text: "Talentosa", type: "B" },
      { text: "Artista", type: "C" },
      { text: "Determinada", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase você diria?",
    options: [
      { text: "'Elas não sabem que eu sou a patroa'", type: "A" },
      { text: "'A música é minha forma de amar'", type: "B" },
      { text: "'Minha arte fala por mim'", type: "C" },
      { text: "'Foco, força e fé'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Anitta",
    emoji: "👑",
    description: "Você é a Anitta! Poderosa, sem medo de ser você, quebra barreiras e não pede permissão. Você brilha, incomoda quem tem que incomodar e conquista o mundo!",
    traits: ["Poderosa", "Autêntica", "Ousada", "Determinada"],
    strengths: ["Coragem", "Autenticidade", "Ambição", "Presença"],
    weaknesses: ["Pode parecer arrogante", "Polêmica", "Intensa demais"],
    tips: ["Continue conquistando", "Sua força inspira", "O mundo é seu"],
  },
  B: {
    type: "B",
    title: "Ivete Sangalo",
    emoji: "🎤",
    description: "Você é a Ivete Sangalo! Alegria contagiante, talento imenso, carisma que encanta multidões. Você é amor, energia e a definição de artista completa!",
    traits: ["Carismática", "Talentosa", "Alegre", "Amorosa"],
    strengths: ["Carisma", "Versatilidade", "Energia positiva", "Conexão com público"],
    weaknesses: ["Pode se doar demais", "Dificuldade em dizer não"],
    tips: ["Sua alegria é remédio", "Continue espalhando amor", "Você é luz"],
  },
  C: {
    type: "C",
    title: "Marisa Monte",
    emoji: "🎨",
    description: "Você é a Marisa Monte! Artista de verdade, profunda, criativa, única. Você não segue tendências, você cria arte. Sofisticação e autenticidade em pessoa!",
    traits: ["Artista", "Profunda", "Criativa", "Sofisticada"],
    strengths: ["Originalidade", "Profundidade artística", "Elegância", "Autenticidade"],
    weaknesses: ["Pode parecer distante", "Muito introspectiva"],
    tips: ["Sua arte é eterna", "Continue criando", "Você inspira gerações"],
  },
  D: {
    type: "D",
    title: "Marília Mendonça",
    emoji: "🌟",
    description: "Você é a Marília Mendonça! Guerreira, trabalhadora, voz do povo. Você representa milhões, emociona com verdade e conquista com talento e dedicação!",
    traits: ["Guerreira", "Autêntica", "Popular", "Dedicada"],
    strengths: ["Conexão real", "Talento", "Humildade", "Trabalho duro"],
    weaknesses: ["Pode se cobrar demais", "Dificuldade em desacelerar"],
    tips: ["Sua verdade toca corações", "Você é inspiração", "Seu legado é eterno"],
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
