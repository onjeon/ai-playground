// Comunicação no Casal
// Descubra como está a comunicação no seu relacionamento!

export const questions = [
  {
    id: 1,
    question: "Quando algo te incomoda no relacionamento, você...",
    options: [
      { text: "Converso na hora, de forma clara e respeitosa", type: "A" },
      { text: "Espero o momento certo e falo com jeitinho", type: "B" },
      { text: "Guardo pra mim, não gosto de conflito", type: "C" },
      { text: "Explodo de raiva ou faço indiretas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você reage quando seu par tenta conversar sobre um problema?",
    options: [
      { text: "Ouço com atenção e busco entender o ponto dele(a)", type: "A" },
      { text: "Ouço, mas às vezes me defendo demais", type: "B" },
      { text: "Fico na defensiva ou mudo de assunto", type: "C" },
      { text: "Me fecho completamente ou contra-ataco", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Vocês conseguem discordar sem brigar?",
    options: [
      { text: "Sim, respeitamos opiniões diferentes", type: "A" },
      { text: "Na maioria das vezes, mas às vezes esquenta", type: "B" },
      { text: "Difícil, sempre vira discussão", type: "C" },
      { text: "Impossível, toda discordância é briga", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você sente que seu par te escuta de verdade?",
    options: [
      { text: "Sim, sempre presta atenção no que falo", type: "A" },
      { text: "Geralmente sim, mas às vezes parece distraído(a)", type: "B" },
      { text: "Pouco, sinto que falo com as paredes", type: "C" },
      { text: "Nunca, me sinto ignorado(a)", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Vocês conversam sobre o futuro do relacionamento?",
    options: [
      { text: "Sim, planejamos juntos com frequência", type: "A" },
      { text: "Às vezes, quando surge o assunto", type: "B" },
      { text: "Raramente, evitamos esse tema", type: "C" },
      { text: "Nunca, parece tabu", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como é a comunicação no dia a dia?",
    options: [
      { text: "Conversamos sobre tudo, da rotina aos sentimentos", type: "A" },
      { text: "Falamos bastante, mas mais sobre coisas práticas", type: "B" },
      { text: "Conversamos pouco, só o básico", type: "C" },
      { text: "Quase não nos falamos direito", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você consegue dizer 'desculpa' quando erra?",
    options: [
      { text: "Sim, reconheço meus erros e peço desculpas", type: "A" },
      { text: "Consigo, mas demoro um pouco", type: "B" },
      { text: "Tenho dificuldade, orgulho atrapalha", type: "C" },
      { text: "Quase nunca, acho que nunca erro", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Vocês falam sobre sexo e intimidade abertamente?",
    options: [
      { text: "Sim, é um assunto tranquilo entre nós", type: "A" },
      { text: "Conversamos, mas com certa timidez", type: "B" },
      { text: "Pouco, é um tema constrangedor", type: "C" },
      { text: "Nunca falamos sobre isso", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quando brigam, como fica depois?",
    options: [
      { text: "Conversamos, resolvemos e seguimos em frente", type: "A" },
      { text: "Leva um tempo, mas conseguimos resolver", type: "B" },
      { text: "Fica um clima ruim por dias", type: "C" },
      { text: "Nunca resolvemos, os problemas se acumulam", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você se sente à vontade pra ser você mesmo(a) com seu par?",
    options: [
      { text: "Totalmente, posso ser eu sem filtros", type: "A" },
      { text: "Sim, mas escondo algumas coisas", type: "B" },
      { text: "Mais ou menos, me sinto julgado(a) às vezes", type: "C" },
      { text: "Não, sinto que preciso fingir", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Comunicação Excelente",
    emoji: "💬",
    percentage: 95,
    description: "A comunicação de vocês é excelente! Conseguem conversar sobre tudo com respeito e abertura. Isso é a base de um relacionamento saudável e duradouro!",
    characteristics: ["Abertos", "Respeitosos", "Conectados", "Maduros"],
    advice: "Vocês estão no caminho certo! Continuem cultivando esse diálogo aberto. Lembrem-se de sempre manter essa comunicação, mesmo quando as coisas estiverem bem.",
  },
  B: {
    type: "B",
    title: "Comunicação Boa",
    emoji: "💭",
    percentage: 75,
    description: "A comunicação de vocês é boa! Conseguem conversar na maioria das vezes, mas ainda há espaço pra melhorar em alguns aspectos. O importante é continuar praticando!",
    characteristics: ["Em evolução", "Esforçados", "Bem-intencionados", "Praticando"],
    advice: "Vocês estão indo bem! Trabalhem nas áreas que ainda têm dificuldade. Pratiquem a escuta ativa e lembrem-se: comunicação é uma habilidade que se desenvolve!",
  },
  C: {
    type: "C",
    title: "Comunicação Precisando de Atenção",
    emoji: "🔇",
    percentage: 50,
    description: "A comunicação de vocês precisa de atenção! Falta diálogo aberto e os problemas tendem a se acumular. É hora de trabalhar juntos pra melhorar isso.",
    characteristics: ["Reservados", "Evitando conflitos", "Acumulando problemas", "Desconectados"],
    advice: "Não deixem os problemas de comunicação crescerem! Comecem com pequenas conversas diárias sobre sentimentos. Considerem terapia de casal pra aprender técnicas de comunicação.",
  },
  D: {
    type: "D",
    title: "Comunicação em Crise",
    emoji: "🚫",
    percentage: 30,
    description: "A comunicação de vocês está em crise! Falta diálogo, sobra conflito e os problemas não são resolvidos. Isso pode comprometer seriamente o relacionamento.",
    characteristics: ["Desconectados", "Conflituosos", "Sem diálogo", "Em crise"],
    advice: "ATENÇÃO: Sem comunicação, o relacionamento não sobrevive. Busquem ajuda profissional urgentemente! Terapia de casal pode ajudar a reconstruir a ponte entre vocês. Não deixem pra depois!",
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
