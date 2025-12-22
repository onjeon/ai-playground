// Qual Seu Tipo de Streamador?
// Descubra que tipo de criador de lives você seria!

export const questions = [
  {
    id: 1,
    question: "Você vai fazer uma live. Qual o conteúdo?",
    options: [
      { text: "Jogando algum game competitivo ou hypad", type: "A" },
      { text: "Batendo papo e respondendo perguntas", type: "B" },
      { text: "Fazendo algo criativo: arte, música, culinária", type: "C" },
      { text: "Reagindo a vídeos e memes da internet", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você reagiria a um troll no chat?",
    options: [
      { text: "Bano na hora, sem dó nem piedade", type: "A" },
      { text: "Tento converter em fã com simpatia", type: "B" },
      { text: "Ignoro e sigo com o conteúdo", type: "C" },
      { text: "Zoaria de volta, viraria entretenimento", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual seria seu horário ideal de live?",
    options: [
      { text: "De noite, quando a galera tá online", type: "A" },
      { text: "De tarde, pra pegar todo mundo", type: "B" },
      { text: "De madrugada, só os coruja mesmo", type: "C" },
      { text: "Qualquer hora, quando der vontade", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quanto tempo suas lives durariam?",
    options: [
      { text: "Horas! Maratona completa", type: "A" },
      { text: "Umas 2-3 horas, tempo ideal", type: "B" },
      { text: "1 hora focada e objetiva", type: "C" },
      { text: "Até cansar, sem tempo definido", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Alguém manda um donate. Você...",
    options: [
      { text: "Agradeço efusivamente e dou atenção especial", type: "A" },
      { text: "Leio a mensagem e agradeço com carinho", type: "B" },
      { text: "Agradeço rápido e volto pro conteúdo", type: "C" },
      { text: "Faço uma zoeira ou meme personalizado", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual seria seu setup de stream?",
    options: [
      { text: "Profissional: várias telas, LED, microfone top", type: "A" },
      { text: "Organizado e aconchegante, bem decorado", type: "B" },
      { text: "Minimalista, só o essencial", type: "C" },
      { text: "Bagunçado mas autêntico, jeitinho brasileiro", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sua reação quando o número de viewers sobe:",
    options: [
      { text: "Fico empolgado(a) e aumento a energia", type: "A" },
      { text: "Dou boas-vindas e integro os novos", type: "B" },
      { text: "Continuo normalmente, não muda nada", type: "C" },
      { text: "Faço alguma zueira pra comemorar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que você mais curtiria em ser streamer?",
    options: [
      { text: "A fama e reconhecimento", type: "A" },
      { text: "A comunidade e as amizades", type: "B" },
      { text: "Poder criar conteúdo do meu jeito", type: "C" },
      { text: "A diversão e a zueira", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você lidaria com hate?",
    options: [
      { text: "Uso como motivação pra crescer mais", type: "A" },
      { text: "Fico mal mas sigo em frente", type: "B" },
      { text: "Não ligo muito, faz parte", type: "C" },
      { text: "Transformaria em conteúdo de humor", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Seu diferencial como streamer seria...",
    options: [
      { text: "Ser muito bom no que faço", type: "A" },
      { text: "Conexão genuína com a audiência", type: "B" },
      { text: "Conteúdo único e original", type: "C" },
      { text: "Carisma e entretenimento puro", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Pro Player",
    emoji: "🎮",
    percentage: 95,
    description: "Você seria O Pro Player! Streamer focado em performance, competitivo e dedicado. Suas lives seriam de gameplay de alto nível, treinos e ranqueadas. A galera te assistiria pra aprender e se impressionar!",
    characteristics: ["Competitivo(a)", "Dedicado(a)", "Profissional", "Ambicioso(a)"],
    advice: "Seu foco é admirável! Só não esquece que entretenimento também importa. Equilibre skill com carisma e você vai longe!",
  },
  B: {
    type: "B",
    title: "O Chat é Tudo",
    emoji: "💬",
    percentage: 85,
    description: "Você seria O Chat é Tudo! Streamer que valoriza a comunidade acima de tudo. Suas lives seriam sobre conexão, conversa e criar um espaço acolhedor. Viewers voltam pelo ambiente, não só pelo conteúdo!",
    characteristics: ["Acolhedor(a)", "Comunicativo(a)", "Empático(a)", "Carismático(a)"],
    advice: "Sua habilidade de criar comunidade é rara! Continue valorizando seu público, mas lembre-se de também investir em conteúdo de qualidade.",
  },
  C: {
    type: "C",
    title: "O Criador de Conteúdo",
    emoji: "🎨",
    percentage: 80,
    description: "Você seria O Criador de Conteúdo! Streamer focado em produzir algo único e interessante. Suas lives teriam propósito, estrutura e criatividade. A galera assistiria pela qualidade e originalidade!",
    characteristics: ["Criativo(a)", "Focado(a)", "Original", "Organizado(a)"],
    advice: "Sua criatividade te diferencia! Continue inovando, mas não esqueça de interagir com o público. Conteúdo + comunidade = sucesso.",
  },
  D: {
    type: "D",
    title: "O Zoeiro Nato",
    emoji: "😂",
    percentage: 75,
    description: "Você seria O Zoeiro Nato! Streamer que transforma tudo em entretenimento. Suas lives seriam caóticas, engraçadas e imprevisíveis. A galera assistiria pra dar risada e se divertir!",
    characteristics: ["Engraçado(a)", "Espontâneo(a)", "Carismático(a)", "Autêntico(a)"],
    advice: "Seu carisma é natural! A zueira é ótima, mas cuidado pra não passar dos limites. Com um pouco de estrutura, você seria imbatível!",
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
