// Linguagem do Afeto
// Descubra como você expressa e recebe amor!

export const questions = [
  {
    id: 1,
    question: "Depois de um dia difícil, o que mais te faz sentir amado(a)?",
    options: [
      { text: "Ouvir 'eu te amo' e palavras de carinho", type: "A" },
      { text: "Um abraço apertado e aconchego no sofá", type: "B" },
      { text: "Quando a pessoa faz algo por mim sem eu pedir", type: "C" },
      { text: "Ganhar algo especial, mesmo que simples", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você demonstra amor para quem você gosta?",
    options: [
      { text: "Mando mensagens carinhosas durante o dia", type: "A" },
      { text: "Faço carinho, abraço, beijo bastante", type: "B" },
      { text: "Cuido das coisas práticas, ajudo no dia a dia", type: "C" },
      { text: "Preparo surpresas e presentinhos", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que te magoa mais em um relacionamento?",
    options: [
      { text: "Quando a pessoa não elogia ou não fala o que sente", type: "A" },
      { text: "Quando falta carinho físico e proximidade", type: "B" },
      { text: "Quando preciso fazer tudo sozinho(a)", type: "C" },
      { text: "Quando esquecem datas importantes", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual atitude do(a) parceiro(a) mais te conquista?",
    options: [
      { text: "Quando me diz coisas bonitas e sinceras", type: "A" },
      { text: "Quando me abraça do nada, só porque sim", type: "B" },
      { text: "Quando resolve algo que estava me preocupando", type: "C" },
      { text: "Quando lembra de algo que comentei e me surpreende", type: "D" },
    ],
  },
  {
    id: 5,
    question: "No Dia dos Namorados, o que você mais valorizaria?",
    options: [
      { text: "Uma carta escrita à mão com declaração", type: "A" },
      { text: "Um dia inteiro de chamego e carinho", type: "B" },
      { text: "A pessoa organizar tudo e eu só curtir", type: "C" },
      { text: "Um presente pensado especialmente pra mim", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando você está triste, o que te conforta mais?",
    options: [
      { text: "Palavras de apoio e incentivo", type: "A" },
      { text: "Um abraço silencioso e acolhedor", type: "B" },
      { text: "A pessoa assumir minhas tarefas pra eu descansar", type: "C" },
      { text: "Ganhar minha comida favorita ou algo especial", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você prefere passar tempo de qualidade com quem ama?",
    options: [
      { text: "Conversando sobre a vida, sonhos e sentimentos", type: "A" },
      { text: "Assistindo filme abraçadinhos no sofá", type: "B" },
      { text: "Fazendo atividades juntos, como cozinhar ou arrumar a casa", type: "C" },
      { text: "Saindo para lugares especiais", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que te faz sentir mais valorizado(a) no relacionamento?",
    options: [
      { text: "Ser elogiado(a) na frente dos outros", type: "A" },
      { text: "Receber carinho espontâneo o tempo todo", type: "B" },
      { text: "Ver que a pessoa faz coisas pensando em mim", type: "C" },
      { text: "Receber lembrancinhas e mimos", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual dessas atitudes te irritaria mais se faltasse?",
    options: [
      { text: "A pessoa nunca dizer que me ama ou elogiar", type: "A" },
      { text: "A pessoa evitar contato físico", type: "B" },
      { text: "A pessoa nunca ajudar nas tarefas", type: "C" },
      { text: "A pessoa nunca lembrar de datas ou dar presentes", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual frase mais combina com você?",
    options: [
      { text: "Preciso ouvir que sou amado(a)", type: "A" },
      { text: "Um abraço vale mais que mil palavras", type: "B" },
      { text: "Ações falam mais alto que palavras", type: "C" },
      { text: "Um presente mostra que a pessoa pensou em mim", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Palavras de Afirmação",
    emoji: "💬",
    percentage: 92,
    description: "Sua linguagem do afeto é Palavras de Afirmação! Você precisa ouvir que é amado(a), receber elogios sinceros e palavras de carinho. Um 'eu te amo' no momento certo vale ouro pra você!",
    characteristics: ["Comunicativo(a)", "Expressivo(a)", "Sensível às palavras", "Valoriza declarações"],
    advice: "Comunique ao seu par que você precisa ouvir o amor. Nem todo mundo sabe expressar sentimentos verbalmente, mas você pode ensinar. E lembre-se de também falar o que sente!",
  },
  B: {
    type: "B",
    title: "Toque Físico",
    emoji: "🤗",
    percentage: 88,
    description: "Sua linguagem do afeto é Toque Físico! Abraços, beijos, carinho - você precisa de proximidade física pra se sentir conectado(a). Um cafuné no cabelo te derrete!",
    characteristics: ["Carinhoso(a)", "Afetuoso(a)", "Precisa de proximidade", "Expressivo(a) pelo toque"],
    advice: "Explique pro seu par a importância do contato físico. Não precisa ser nada demais - às vezes só segurar a mão já faz toda diferença. E respeite também o espaço do outro!",
  },
  C: {
    type: "C",
    title: "Atos de Serviço",
    emoji: "🛠️",
    percentage: 85,
    description: "Sua linguagem do afeto é Atos de Serviço! Pra você, amor é quando a pessoa faz algo por você - lava a louça, resolve um problema, cuida de você. Ações valem mais que palavras!",
    characteristics: ["Prático(a)", "Atencioso(a)", "Prestativo(a)", "Valoriza atitudes"],
    advice: "Você demonstra amor fazendo coisas e espera o mesmo. Converse sobre divisão de tarefas e mostre como pequenos gestos te fazem sentir amado(a). E agradeça quando o outro ajuda!",
  },
  D: {
    type: "D",
    title: "Presentes",
    emoji: "🎁",
    percentage: 80,
    description: "Sua linguagem do afeto é Presentes! Não é sobre o valor, é sobre o gesto. Quando alguém lembra de você e traz algo especial, você se sente amado(a) e valorizado(a)!",
    characteristics: ["Simbólico(a)", "Detalhista", "Valoriza gestos", "Atento(a) a lembranças"],
    advice: "Explique que presentes são símbolos de amor pra você. Não precisa ser caro - uma flor do caminho, um chocolate, uma lembrancinha de viagem. O importante é o pensamento por trás!",
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
