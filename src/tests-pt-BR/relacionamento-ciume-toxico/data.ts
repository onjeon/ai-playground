// Ciúme Tóxico?
// Descubra se seu ciúme está em um nível saudável ou preocupante!

export const questions = [
  {
    id: 1,
    question: "Seu(sua) parceiro(a) recebe mensagem de alguém do passado. Você...",
    options: [
      { text: "Não me preocupo, confio nele(a)", type: "A" },
      { text: "Fico curioso(a), mas não faço drama", type: "B" },
      { text: "Quero saber tudo: quem é, o que quer", type: "C" },
      { text: "Fico com raiva, exijo que bloqueie", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você já olhou o celular do seu par escondido?",
    options: [
      { text: "Nunca, respeito a privacidade", type: "A" },
      { text: "Uma ou outra vez, mas me arrependi", type: "B" },
      { text: "Às vezes, quando fico desconfiado(a)", type: "C" },
      { text: "Frequentemente, preciso saber o que acontece", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você reage quando seu par elogia outra pessoa?",
    options: [
      { text: "Normal, todo mundo pode achar outras pessoas bonitas", type: "A" },
      { text: "Fico um pouco incomodado(a), mas deixo passar", type: "B" },
      { text: "Não gosto nada, fico comparando comigo", type: "C" },
      { text: "Fico com muita raiva, é falta de respeito!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Seu(sua) parceiro(a) vai sair com amigos sem você. Você...",
    options: [
      { text: "Desejo que se divirta, aproveito meu tempo", type: "A" },
      { text: "Fico um pouco inseguro(a), mas deixo ir", type: "B" },
      { text: "Peço pra mandar localização e updates", type: "C" },
      { text: "Fico ligando, mandando mensagem toda hora", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você já deixou de ir a algum lugar porque seu par iria estar lá alguém que você tem ciúmes?",
    options: [
      { text: "Nunca, não deixo ciúmes controlarem minha vida", type: "A" },
      { text: "Já pensei, mas fui mesmo assim", type: "B" },
      { text: "Já deixei de ir algumas vezes", type: "C" },
      { text: "Evito sempre, ou faço meu par evitar também", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você já brigou por causa de curtidas ou comentários em redes sociais?",
    options: [
      { text: "Nunca, isso é bobagem", type: "A" },
      { text: "Comentei uma vez ou outra, mas de boa", type: "B" },
      { text: "Já discutimos sobre isso algumas vezes", type: "C" },
      { text: "Brigamos muito por causa disso", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você controla as amizades do seu(sua) parceiro(a)?",
    options: [
      { text: "De jeito nenhum, cada um tem suas amizades", type: "A" },
      { text: "Não controlo, mas opino sobre algumas", type: "B" },
      { text: "Peço pra evitar certas pessoas", type: "C" },
      { text: "Decido com quem ele(a) pode ou não andar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você se sente quando seu par demora pra responder mensagem?",
    options: [
      { text: "Tranquilo(a), pessoas têm suas vidas", type: "A" },
      { text: "Um pouco ansioso(a), mas espero", type: "B" },
      { text: "Fico criando cenários na cabeça", type: "C" },
      { text: "Mando várias mensagens, ligo, fico desesperado(a)", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você já acusou seu par de algo sem ter provas?",
    options: [
      { text: "Nunca, não faço acusações sem fundamento", type: "A" },
      { text: "Já perguntei com jeitinho sobre suspeitas", type: "B" },
      { text: "Já acusei algumas vezes por desconfiar", type: "C" },
      { text: "Frequentemente, minha intuição nunca erra", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual frase mais combina com você?",
    options: [
      { text: "Confiança é a base de tudo", type: "A" },
      { text: "Confio, mas fico de olho", type: "B" },
      { text: "Quem ama cuida e vigia", type: "C" },
      { text: "Se duvidar, é porque tem motivo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ciúme Zero",
    emoji: "😌",
    percentage: 95,
    description: "Você tem um nível saudável de ciúmes - quase zero! Confia no seu par e não deixa inseguranças atrapalharem o relacionamento. Isso é ótimo pra uma relação equilibrada!",
    characteristics: ["Confiante", "Seguro(a)", "Equilibrado(a)", "Maduro(a)"],
    advice: "Parabéns pela maturidade emocional! Continue cultivando essa confiança. Só fique atento(a) pra não ignorar sinais reais de problemas no relacionamento.",
  },
  B: {
    type: "B",
    title: "Ciúme Saudável",
    emoji: "💚",
    percentage: 75,
    description: "Você tem um ciúme saudável e normal. Sente uma pontinha de ciúmes às vezes, mas sabe controlar e não deixa atrapalhar o relacionamento. É humano!",
    characteristics: ["Equilibrado(a)", "Consciente", "Controlado(a)", "Comunicativo(a)"],
    advice: "Seu nível de ciúme é normal e até pode ser visto como carinho. Continue trabalhando a comunicação e a confiança. Quando sentir ciúmes, converse sobre isso!",
  },
  C: {
    type: "C",
    title: "Ciúme Preocupante",
    emoji: "⚠️",
    percentage: 50,
    description: "Seu ciúme está num nível preocupante. Você tende a controlar e desconfiar sem necessidade. Isso pode sufocar o relacionamento e criar problemas sérios.",
    characteristics: ["Controlador(a)", "Desconfiado(a)", "Inseguro(a)", "Ansioso(a)"],
    advice: "É hora de trabalhar essas inseguranças! O ciúme excessivo geralmente vem de feridas do passado. Considere terapia pra entender a origem e aprender a confiar mais.",
  },
  D: {
    type: "D",
    title: "Ciúme Tóxico",
    emoji: "🚨",
    percentage: 30,
    description: "Seu ciúme está em nível tóxico. Comportamentos de controle e desconfiança constante podem destruir relacionamentos e prejudicar você e seu par. É urgente buscar ajuda!",
    characteristics: ["Controlador(a) extremo(a)", "Possessivo(a)", "Agressivo(a) emocionalmente", "Obsessivo(a)"],
    advice: "ATENÇÃO: Esse nível de ciúme é prejudicial pra você e pra quem está com você. Procure ajuda profissional urgentemente. Ciúme tóxico pode levar a relacionamentos abusivos. Você merece e pode ser mais saudável!",
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
