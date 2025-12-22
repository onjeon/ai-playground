// Que Tipo de Participante de BBB Você Seria?
// Descubra como você se comportaria no Big Brother Brasil!

export const questions = [
  {
    id: 1,
    question: "Como você reagiria na primeira semana do BBB?",
    options: [
      { text: "Observando e montando estratégias", type: "A" },
      { text: "Fazendo amizade com todo mundo", type: "B" },
      { text: "Já armando confusão e sendo polêmico", type: "C" },
      { text: "Curtindo a casa e ficando de boa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que te levaria ao paredão?",
    options: [
      { text: "Ser visto como ameaça estratégica", type: "A" },
      { text: "Me envolver demais nas brigas dos outros", type: "B" },
      { text: "Falar demais e criar inimigos", type: "C" },
      { text: "Passar despercebido e não ter aliados", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você formaria alianças?",
    options: [
      { text: "Com cálculo, escolhendo os mais úteis", type: "A" },
      { text: "Naturalmente, com quem me identifico", type: "B" },
      { text: "Sendo o líder do grupo", type: "C" },
      { text: "Ficando neutro e me dando bem com todos", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual seria sua estratégia de jogo?",
    options: [
      { text: "Jogo silencioso, movimentos calculados", type: "A" },
      { text: "Conquistar o público com autenticidade", type: "B" },
      { text: "Dominar o jogo, ser protagonista", type: "C" },
      { text: "Sobreviver semana a semana", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você seria nas provas?",
    options: [
      { text: "Focado(a) e competitivo(a)", type: "A" },
      { text: "Torcendo pelos amigos também", type: "B" },
      { text: "Dando tudo de mim pra vencer", type: "C" },
      { text: "Participando mas sem desespero", type: "D" },
    ],
  },
  {
    id: 6,
    question: "O que você faria com a liderança?",
    options: [
      { text: "Usaria estrategicamente para meu jogo", type: "A" },
      { text: "Protegeria meus amigos", type: "B" },
      { text: "Faria a festa mais épica da edição", type: "C" },
      { text: "Tentaria não criar inimigos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você lidaria com fofocas sobre você?",
    options: [
      { text: "Guardaria pra usar na hora certa", type: "A" },
      { text: "Ficaria magoado(a) mas tentaria resolver", type: "B" },
      { text: "Confrontaria na mesma hora", type: "C" },
      { text: "Deixaria pra lá e seguiria", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual seria seu papel no confessionário?",
    options: [
      { text: "Analisando o jogo friamente", type: "A" },
      { text: "Desabafando e sendo emocional", type: "B" },
      { text: "Dando entretenimento e polêmicas", type: "C" },
      { text: "Conversando tranquilo sobre tudo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que te eliminaria do jogo?",
    options: [
      { text: "Ser descoberto em minhas estratégias", type: "A" },
      { text: "Me envolver em conflitos desnecessários", type: "B" },
      { text: "O público cansar das polêmicas", type: "C" },
      { text: "Não ter destaque suficiente", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você se comportaria nas festas?",
    options: [
      { text: "Observando e pegando informações", type: "A" },
      { text: "Dançando e curtindo com os amigos", type: "B" },
      { text: "Sendo o centro das atenções", type: "C" },
      { text: "Curtindo de boa no meu canto", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que você diria no discurso de eliminação?",
    options: [
      { text: "Exporia o jogo dos adversários", type: "A" },
      { text: "Agradeceria a experiência e amigos", type: "B" },
      { text: "Faria um discurso memorável e polêmico", type: "C" },
      { text: "Desejaria boa sorte a todos", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você quer ser lembrado(a) no BBB?",
    options: [
      { text: "Como um jogador(a) estratégico(a)", type: "A" },
      { text: "Como alguém autêntico(a) e querido(a)", type: "B" },
      { text: "Como protagonista da edição", type: "C" },
      { text: "Como alguém tranquilo(a) e íntegro(a)", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O/A Estrategista",
    emoji: "🧠",
    description: "Você seria o estrategista do BBB! Calculista, observador(a) e sempre dois passos à frente. Como os grandes jogadores do programa, você joga xadrez enquanto outros jogam damas!",
    traits: ["Estratégico(a)", "Calculista", "Observador(a)", "Inteligente"],
    strengths: ["Visão de jogo", "Capacidade de planejamento", "Leitura de pessoas", "Frieza nas decisões"],
    weaknesses: ["Pode parecer falso(a)", "Dificuldade em fazer amigos reais", "Muito racional"],
    tips: ["Mostre seu lado humano", "Nem tudo é estratégia", "Conexões genuínas também importam"],
  },
  B: {
    type: "B",
    title: "O/A Planta Querida",
    emoji: "🌿",
    description: "Você seria a planta querida do BBB! Amigável, autêntico(a) e conquistador(a) do público. Como os favoritos do Brasil, você ganha pelo coração e não pelo jogo!",
    traits: ["Autêntico(a)", "Amigável", "Emocional", "Querido(a)"],
    strengths: ["Conquistar o público", "Fazer amizades verdadeiras", "Autenticidade", "Carisma natural"],
    weaknesses: ["Pode ser manipulado(a)", "Ingênuo(a) às vezes", "Dificuldade com conflitos"],
    tips: ["Fique mais atento(a) ao jogo", "Nem todos são amigos", "Um pouco de estratégia ajuda"],
  },
  C: {
    type: "C",
    title: "O/A Protagonista Polêmico(a)",
    emoji: "🔥",
    description: "Você seria o protagonista polêmico do BBB! Intenso(a), opinativo(a) e impossível de ignorar. Como os participantes que dominam a edição, você está sempre no centro de tudo!",
    traits: ["Polêmico(a)", "Intenso(a)", "Carismático(a)", "Protagonista"],
    strengths: ["Entretenimento garantido", "Presença marcante", "Não passa despercebido(a)", "Carisma forte"],
    weaknesses: ["Faz muitos inimigos", "Pode ser cancelado(a)", "Exagera às vezes"],
    tips: ["Escolha suas batalhas", "Nem toda briga vale a pena", "O público também cansa"],
  },
  D: {
    type: "D",
    title: "O/A Furniture (Móvel)",
    emoji: "🛋️",
    description: "Você seria o móvel do BBB! Tranquilo(a), discreto(a) e sem drama. Como os participantes que passam pelo reality sem se envolver em polêmicas, você joga na paz!",
    traits: ["Tranquilo(a)", "Discreto(a)", "Pacífico(a)", "Neutro(a)"],
    strengths: ["Não faz inimigos", "Vida tranquila na casa", "Equilíbrio emocional", "Integridade"],
    weaknesses: ["Pode ser eliminado cedo", "Falta de protagonismo", "Passa despercebido(a)"],
    tips: ["Se posicione mais", "Mostre sua personalidade", "Um pouco de drama não faz mal"],
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
