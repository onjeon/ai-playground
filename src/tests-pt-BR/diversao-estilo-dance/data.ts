// Qual Seu Estilo de Dança Brasileiro?
// Descubra qual ritmo combina com sua personalidade!

export const questions = [
  {
    id: 1,
    question: "Como você se comporta em uma festa?",
    options: [
      { text: "Primeiro na pista, dançando a noite toda", type: "A" },
      { text: "Danço coladinho com alguém especial", type: "B" },
      { text: "Gosto de roda de amigos, dança animada", type: "C" },
      { text: "Fico no beat, curtindo no meu canto", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual cenário te atrai mais?",
    options: [
      { text: "Avenida no Carnaval, multidão e energia", type: "A" },
      { text: "Forrozinho num pé de serra", type: "B" },
      { text: "Roda de samba com pagode ao vivo", type: "C" },
      { text: "Baile funk com grave pesado", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que mais te motiva a dançar?",
    options: [
      { text: "Mostrar minhas habilidades e energia", type: "A" },
      { text: "Conexão romântica com o par", type: "B" },
      { text: "Alegria de estar com amigos", type: "C" },
      { text: "O grave batendo e a vibe contagiante", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual instrumento te anima mais?",
    options: [
      { text: "Bateria de escola de samba", type: "A" },
      { text: "Sanfona e triângulo", type: "B" },
      { text: "Cavaquinho e pandeiro", type: "C" },
      { text: "Grave do tamborzão", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você descreveria seu jeito de dançar?",
    options: [
      { text: "Expressivo, cheio de gingado e requebrado", type: "A" },
      { text: "Suave, próximo, com sintonia", type: "B" },
      { text: "Alegre, espontâneo, pé no chão", type: "C" },
      { text: "Intenso, sensual, no ritmo do beat", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual região do Brasil mais te atrai culturalmente?",
    options: [
      { text: "Rio de Janeiro - berço do samba e Carnaval", type: "A" },
      { text: "Nordeste - festas, São João, forró", type: "B" },
      { text: "Interior de São Paulo ou Minas - raiz", type: "C" },
      { text: "Favelas e periferias - cultura urbana", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Se fosse escolher uma fantasia, seria...",
    options: [
      { text: "Passista ou mestre-sala de escola", type: "A" },
      { text: "Cangaceiro ou traje de São João", type: "B" },
      { text: "Malandro carioca ou baiana", type: "C" },
      { text: "Look estiloso de baile", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual frase mais combina com você?",
    options: [
      { text: "O corpo fala, e o meu samba!", type: "A" },
      { text: "De dois em dois, a vida é mais gostosa", type: "B" },
      { text: "Samba no pé e alegria no coração", type: "C" },
      { text: "Deixa o grave bater que o corpo vai", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você prefere dançar...",
    options: [
      { text: "Sozinho(a), mostrando meu talento", type: "A" },
      { text: "Em dupla, com conexão", type: "B" },
      { text: "Em grupo, com galera animada", type: "C" },
      { text: "Na multidão, curtindo a energia coletiva", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual música te faz levantar na hora?",
    options: [
      { text: "Batucada de escola de samba", type: "A" },
      { text: "Xote ou baião clássico", type: "B" },
      { text: "Pagode animado dos anos 90", type: "C" },
      { text: "Funk carioca atual", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Samba de Passista",
    emoji: "💃",
    percentage: 95,
    description: "Você é Samba de Passista! Sua energia é explosiva e seu gingado é de dar inveja. Você nasceu pra brilhar no Carnaval e encantar multidões com seu talento!",
    characteristics: ["Expressivo(a)", "Carismático(a)", "Energético(a)", "Talentoso(a)"],
    advice: "Seu brilho é natural! Continue espalhando essa alegria contagiante, mas lembre-se que nem todo momento precisa ser um show. Às vezes a simplicidade também encanta.",
  },
  B: {
    type: "B",
    title: "Forró",
    emoji: "🎻",
    percentage: 85,
    description: "Você é Forró! Valoriza conexão, romance e proximidade. Sua dança é sobre sentir o outro, e você sabe que os melhores momentos são aqueles compartilhados de pertinho!",
    characteristics: ["Romântico(a)", "Sensível", "Acolhedor(a)", "Tradicional"],
    advice: "Sua capacidade de conexão é um presente raro. Continue valorizando relações genuínas e não tenha medo de se entregar aos sentimentos.",
  },
  C: {
    type: "C",
    title: "Pagode",
    emoji: "🎶",
    percentage: 80,
    description: "Você é Pagode! Alegria, amizade e boa energia te definem. Pra você, dançar é sobre celebrar a vida com quem você ama. Roda de samba é seu habitat natural!",
    characteristics: ["Alegre", "Social", "Espontâneo(a)", "Acolhedor(a)"],
    advice: "Sua alegria é contagiante e faz bem a todos ao redor. Continue reunindo pessoas e espalhando essa energia boa que só você tem!",
  },
  D: {
    type: "D",
    title: "Funk",
    emoji: "🔊",
    percentage: 90,
    description: "Você é Funk! Intenso, autêntico e conectado com a cultura urbana brasileira. O grave te move e você não tem medo de ser quem é na pista de dança!",
    characteristics: ["Intenso(a)", "Autêntico(a)", "Moderno(a)", "Ousado(a)"],
    advice: "Sua autenticidade é sua maior força. Continue sendo você mesmo(a) sem medo do julgamento. Quem dita as tendências é quem tem coragem de ser diferente!",
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
