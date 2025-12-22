// Qual é seu Nível de Ciúmes?
// Descubra como você lida com o ciúme no relacionamento!

export const questions = [
  {
    id: 1,
    question: "Seu parceiro recebe uma mensagem de um(a) ex. Como você reage?",
    options: [
      { text: "Nem ligo, confio totalmente", type: "A" },
      { text: "Fico curioso(a) mas não pergunto", type: "B" },
      { text: "Pergunto quem é e o que quer", type: "C" },
      { text: "Fico muito incomodado(a) e preciso ver", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Seu parceiro elogia a aparência de outra pessoa. O que você sente?",
    options: [
      { text: "Normal, todo mundo pode elogiar", type: "A" },
      { text: "Um leve desconforto, mas supero", type: "B" },
      { text: "Fico comparando se sou melhor", type: "C" },
      { text: "Fico muito mal e questiono a relação", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Seu parceiro sai com amigos e não responde mensagens por horas. Como você fica?",
    options: [
      { text: "Tranquilo(a), ele(a) está se divertindo", type: "A" },
      { text: "Fico um pouco ansioso(a) mas aguardo", type: "B" },
      { text: "Mando várias mensagens perguntando", type: "C" },
      { text: "Ligo insistentemente até atender", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você descobre que seu parceiro ainda segue pessoas atraentes nas redes. O que faz?",
    options: [
      { text: "Nada, é normal e não me afeta", type: "A" },
      { text: "Ignoro mas fico um pouco chateado(a)", type: "B" },
      { text: "Peço pra deixar de seguir", type: "C" },
      { text: "Fico stalkeando todos os perfis", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Uma pessoa bonita puxa conversa com seu parceiro na sua frente. O que você faz?",
    options: [
      { text: "Deixo conversar tranquilamente", type: "A" },
      { text: "Fico observando de longe", type: "B" },
      { text: "Me aproximo e marco presença", type: "C" },
      { text: "Interrompo e tiro ele(a) de lá", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Seu parceiro menciona frequentemente um(a) colega de trabalho. Como você se sente?",
    options: [
      { text: "Normal, faz parte da rotina", type: "A" },
      { text: "Fico atento(a) mas não demonstro", type: "B" },
      { text: "Começo a fazer perguntas sobre essa pessoa", type: "C" },
      { text: "Já quero conhecer e vigiar de perto", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você tem vontade de olhar o celular do seu parceiro?",
    options: [
      { text: "Nunca, respeito a privacidade", type: "A" },
      { text: "Às vezes a curiosidade bate", type: "B" },
      { text: "Já olhei algumas vezes escondido(a)", type: "C" },
      { text: "Olho sempre que tenho chance", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Seu parceiro vai a uma festa sem você. O que você sente?",
    options: [
      { text: "Tranquilo(a), ele(a) merece se divertir", type: "A" },
      { text: "Fico um pouco inseguro(a) mas confio", type: "B" },
      { text: "Peço pra mandar foto e localização", type: "C" },
      { text: "Não gosto e prefiro que não vá", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você vê seu parceiro curtindo fotos de alguém atraente. Qual sua reação?",
    options: [
      { text: "Não me importo, é só uma curtida", type: "A" },
      { text: "Finjo que não vi mas fico pensando", type: "B" },
      { text: "Faço um comentário passivo-agressivo", type: "C" },
      { text: "Brigo e questiono o que significa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você lida quando seu parceiro tem amigos do sexo oposto?",
    options: [
      { text: "Normal, amizade não tem gênero", type: "A" },
      { text: "Aceito mas fico mais atento(a)", type: "B" },
      { text: "Prefiro conhecer todos e acompanhar", type: "C" },
      { text: "Não gosto e deixo isso claro", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Seu parceiro demora pra responder suas mensagens. O que passa na sua cabeça?",
    options: [
      { text: "Deve estar ocupado(a), normal", type: "A" },
      { text: "Fico um pouco ansioso(a) esperando", type: "B" },
      { text: "Começo a imaginar o que está fazendo", type: "C" },
      { text: "Já penso que está com outra pessoa", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você se sentiria se seu parceiro tivesse um melhor amigo do sexo oposto?",
    options: [
      { text: "Totalmente ok, amizade é saudável", type: "A" },
      { text: "Aceitaria mas ficaria de olho", type: "B" },
      { text: "Ficaria desconfortável e inseguro(a)", type: "C" },
      { text: "Não aceitaria essa amizade", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Zen Total",
    emoji: "😌",
    description: "Você é extremamente seguro(a) e confiante no relacionamento! Praticamente não sente ciúmes e confia plenamente no parceiro. Sua autoestima elevada te permite viver o amor com tranquilidade.",
    traits: ["Muito confiante", "Seguro(a) de si", "Respeita privacidade", "Autoestima elevada"],
    strengths: ["Não sufoca o parceiro", "Relacionamento leve", "Confiança mútua", "Paz de espírito"],
    weaknesses: ["Pode parecer desinteressado(a)", "Às vezes ignora sinais de alerta reais"],
    tips: ["Continue cultivando essa confiança", "Mantenha a comunicação aberta", "Não confunda confiança com indiferença"],
  },
  B: {
    type: "B",
    title: "Ciúme Saudável",
    emoji: "💚",
    description: "Você tem um nível saudável de ciúmes! Sente uma pontinha de insegurança às vezes, mas sabe controlar e não deixa afetar o relacionamento. Esse equilíbrio é muito positivo.",
    traits: ["Equilibrado(a)", "Sabe se controlar", "Inseguranças normais", "Maduro(a) emocionalmente"],
    strengths: ["Ciúme na medida certa", "Não sufoca o parceiro", "Sabe lidar com inseguranças", "Comunicativo(a)"],
    weaknesses: ["Às vezes guarda sentimentos", "Pode acumular pequenas mágoas"],
    tips: ["Continue trabalhando sua segurança", "Converse quando algo te incomodar", "Confie mais em si mesmo(a)"],
  },
  C: {
    type: "C",
    title: "Ciumento(a) Assumido(a)",
    emoji: "😤",
    description: "Você é bem ciumento(a) e não esconde! Precisa de constante reafirmação do amor do parceiro e tende a controlar algumas situações. É importante trabalhar essas inseguranças.",
    traits: ["Possessivo(a)", "Precisa de reafirmação", "Controlador(a)", "Inseguro(a)"],
    strengths: ["Valoriza muito o relacionamento", "Demonstra que se importa", "Atento(a) ao parceiro"],
    weaknesses: ["Pode sufocar o parceiro", "Inseguranças afetam a relação", "Tendência a controlar"],
    tips: ["Trabalhe sua autoestima", "Confie mais no parceiro", "Busque ajuda se necessário", "Comunique seus medos"],
  },
  D: {
    type: "D",
    title: "Ciúme Intenso",
    emoji: "🔥",
    description: "Seu ciúme é muito intenso e pode ser prejudicial ao relacionamento. A insegurança te leva a comportamentos controladores que podem afastar o parceiro. É importante buscar autoconhecimento.",
    traits: ["Muito ciumento(a)", "Controlador(a)", "Inseguro(a)", "Possessivo(a)"],
    strengths: ["Ama intensamente", "Se importa muito com a relação"],
    weaknesses: ["Pode ser tóxico(a)", "Sufoca o parceiro", "Desconfiança constante", "Pode afastar quem ama"],
    tips: ["Procure terapia ou ajuda profissional", "Trabalhe suas inseguranças", "Aprenda a confiar", "Cuide da sua autoestima"],
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
