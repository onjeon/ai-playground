// Qual Seu YouTuber Interior?
// Descubra que tipo de criador de conteúdo você seria!

export const questions = [
  {
    id: 1,
    question: "Se você tivesse um canal, seria sobre o quê?",
    options: [
      { text: "Games, tecnologia ou reviews", type: "A" },
      { text: "Vlogs do dia a dia e lifestyle", type: "B" },
      { text: "Humor, esquetes e entretenimento", type: "C" },
      { text: "Conteúdo educativo ou tutorial", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual seria a duração dos seus vídeos?",
    options: [
      { text: "Longos, conteúdo completo e detalhado", type: "A" },
      { text: "Médios, entre 10-20 minutos", type: "B" },
      { text: "Curtos e direto ao ponto", type: "C" },
      { text: "Varia muito conforme o assunto", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como seria sua edição de vídeo?",
    options: [
      { text: "Super produzida, efeitos, cortes profissionais", type: "A" },
      { text: "Clean e bem feita, sem exageros", type: "B" },
      { text: "Cheia de memes, zoeiras e cortes rápidos", type: "C" },
      { text: "Simples, foco no conteúdo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Comentário hate no seu vídeo. Você...",
    options: [
      { text: "Ignoro, faz parte do jogo", type: "A" },
      { text: "Respondo educadamente ou com humor", type: "B" },
      { text: "Faço um vídeo zoando os haters", type: "C" },
      { text: "Fico mal mas não demonstro", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Seu diferencial como YouTuber seria...",
    options: [
      { text: "Conhecimento técnico e qualidade", type: "A" },
      { text: "Conexão genuína com a audiência", type: "B" },
      { text: "Ser muito engraçado(a) e carismático(a)", type: "C" },
      { text: "Ensinar de forma clara e acessível", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Com que frequência você postaria?",
    options: [
      { text: "Rotina fixa, dias e horários certos", type: "A" },
      { text: "Semanalmente, sem data fixa", type: "B" },
      { text: "Quando der, sem pressão", type: "C" },
      { text: "Quando tiver conteúdo bom pra postar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Thumbnails dos seus vídeos seriam...",
    options: [
      { text: "Profissionais, chamativas, bem trabalhadas", type: "A" },
      { text: "Bonitas e coerentes com minha marca", type: "B" },
      { text: "Engraçadas, com caretas e textos chamativos", type: "C" },
      { text: "Simples, sem muita firula", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você faria collab com outros YouTubers?",
    options: [
      { text: "Sim, com canais do mesmo nicho", type: "A" },
      { text: "Adoraria, faz parte de crescer", type: "B" },
      { text: "Só com quem eu admiro de verdade", type: "C" },
      { text: "Prefiro fazer conteúdo solo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Publi e patrocínios. Você...",
    options: [
      { text: "Aceito de marcas que fazem sentido pro canal", type: "A" },
      { text: "Sou aberto(a), mas transparente com a galera", type: "B" },
      { text: "Faço de forma engraçada pra não ficar chato", type: "C" },
      { text: "Só de produtos que eu realmente uso", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Seu sonho como YouTuber seria...",
    options: [
      { text: "Placa de 1 milhão e reconhecimento", type: "A" },
      { text: "Viver do canal e ter liberdade", type: "B" },
      { text: "Fazer as pessoas rirem e me divertirem", type: "C" },
      { text: "Ajudar pessoas com meu conhecimento", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O YouTuber Profissional",
    emoji: "🎬",
    percentage: 95,
    description: "Você seria O YouTuber Profissional! Canal sério, conteúdo de qualidade, produção impecável. Você trataria YouTube como carreira e buscaria crescer com consistência e dedicação!",
    characteristics: ["Dedicado(a)", "Profissional", "Consistente", "Ambicioso(a)"],
    advice: "Sua seriedade te levaria longe! Só não esquece de mostrar personalidade. Os melhores canais combinam qualidade com autenticidade!",
  },
  B: {
    type: "B",
    title: "O Vlogger Conectado",
    emoji: "📹",
    percentage: 85,
    description: "Você seria O Vlogger Conectado! Seu canal seria sobre você, sua vida, suas experiências. A galera te acompanharia pela sua personalidade genuína e pela conexão real!",
    characteristics: ["Autêntico(a)", "Carismático(a)", "Acessível", "Relatable"],
    advice: "Sua autenticidade é seu maior trunfo! Continue sendo você mesmo(a) e criando essa conexão especial com quem te assiste.",
  },
  C: {
    type: "C",
    title: "O Comediante Digital",
    emoji: "😂",
    percentage: 80,
    description: "Você seria O Comediante Digital! Seu canal seria pra fazer rir. Esquetes, paródias, humor brasileiro... A galera assinaria o sino pra garantir risadas diárias!",
    characteristics: ["Engraçado(a)", "Criativo(a)", "Espontâneo(a)", "Carismático(a)"],
    advice: "Seu humor é um dom! Continue fazendo a galera rir, mas diversifique formatos pra não ficar repetitivo. Humor inteligente dura mais!",
  },
  D: {
    type: "D",
    title: "O Professor do YouTube",
    emoji: "📚",
    percentage: 75,
    description: "Você seria O Professor do YouTube! Seu canal seria sobre compartilhar conhecimento. Tutoriais, explicações, dicas... Você ajudaria milhares de pessoas aprendendo coisas novas!",
    characteristics: ["Didático(a)", "Paciente", "Conhecedor(a)", "Generoso(a)"],
    advice: "Seu conhecimento é valioso! Continue ensinando de forma acessível. Os melhores professores do YouTube são aqueles que tornam o difícil simples!",
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
