// Tipo de Passageiro de Ônibus
// Descubra seu estilo no busão brasileiro!

export const questions = [
  {
    id: 1,
    question: "O ônibus tá chegando lotado. Você...",
    options: [
      { text: "Entro empurrando, não perco esse não", type: "A" },
      { text: "Espero o próximo, prefiro ir sentado", type: "B" },
      { text: "Entro e já puxo papo com alguém", type: "C" },
      { text: "Entro de boa, ponho o fone e viajo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Conseguiu um lugar pra sentar. Como você fica?",
    options: [
      { text: "Esparramado, ocupando o máximo de espaço", type: "A" },
      { text: "Certinho, deixando espaço pro lado", type: "B" },
      { text: "Olhando pela janela ou pro celular do vizinho", type: "C" },
      { text: "De olho fechado, aproveitando pra descansar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Uma pessoa idosa entra no ônibus. Você...",
    options: [
      { text: "Finjo que não vi, tô muito cansado", type: "A" },
      { text: "Levanto na hora e ofereço o lugar", type: "B" },
      { text: "Cutuco a pessoa do lado pra ela levantar", type: "C" },
      { text: "Só levanto se ninguém mais levantar antes", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O cobrador errou seu troco. Qual sua reação?",
    options: [
      { text: "Reclamo na hora, meu direito!", type: "A" },
      { text: "Peço educadamente pra conferir de novo", type: "B" },
      { text: "Falo brincando: 'Opa, faltou aí hein!'", type: "C" },
      { text: "Se for pouco, deixo quieto", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Alguém tá ouvindo funk no celular sem fone. Você...",
    options: [
      { text: "Peço pra abaixar, isso é falta de respeito", type: "A" },
      { text: "Ponho meu fone e ignoro", type: "B" },
      { text: "Começo a rebolar discretamente", type: "C" },
      { text: "Aguento calado até descer", type: "D" },
    ],
  },
  {
    id: 6,
    question: "O motorista freia bruscamente. Sua reação?",
    options: [
      { text: "Xingo baixinho e olho feio pra cabine", type: "A" },
      { text: "Seguro firme e continuo de boa", type: "B" },
      { text: "Rio da situação e comento com quem tiver perto", type: "C" },
      { text: "Nem percebi, tava no mundo da lua", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tá apertado e sua parada tá chegando. Você...",
    options: [
      { text: "Vou abrindo caminho: 'Dá licença, desce!'", type: "A" },
      { text: "Peço com jeitinho: 'Por favor, desce na próxima'", type: "B" },
      { text: "Vou conversando e pedindo passagem", type: "C" },
      { text: "Vou me espremendo em silêncio", type: "D" },
    ],
  },
  {
    id: 8,
    question: "No ponto, o ônibus passa direto. Você...",
    options: [
      { text: "Xingo, corro atrás fazendo gesto", type: "A" },
      { text: "Suspiro e espero o próximo", type: "B" },
      { text: "Comento a situação com quem tiver no ponto", type: "C" },
      { text: "Fico pensando se sinalizei direito", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Uma criança tá chorando muito no ônibus. Você...",
    options: [
      { text: "Olho feio pros pais, pelo amor né", type: "A" },
      { text: "Entendo, criança é assim mesmo", type: "B" },
      { text: "Tento distrair a criança com gracinhas", type: "C" },
      { text: "Aumento o volume do fone e ignoro", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você define a viagem de ônibus como...",
    options: [
      { text: "Um mal necessário da vida brasileira", type: "A" },
      { text: "Parte tranquila do meu dia", type: "B" },
      { text: "Oportunidade de observar pessoas", type: "C" },
      { text: "Meu momento de paz com fone de ouvido", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Guerreiro do Busão",
    emoji: "💪",
    percentage: 85,
    description: "Você é O Guerreiro do Busão! O transporte público é uma batalha diária e você veio pra vencer. Não leva desaforo, não perde ônibus e não deixa ninguém passar por cima. O busão é selva e você é o leão!",
    characteristics: ["Combativo(a)", "Assertivo(a)", "Impaciente", "Sobrevivente"],
    advice: "Sua determinação é admirável, mas nem toda viagem precisa ser uma guerra. Às vezes um sorriso e paciência fazem o trajeto mais leve!",
  },
  B: {
    type: "B",
    title: "O Cidadão Exemplar",
    emoji: "😇",
    percentage: 80,
    description: "Você é O Cidadão Exemplar! Educado, paciente e sempre pronto a ceder o lugar. Você acredita que a civilidade começa no transporte público. Se todo mundo fosse como você, o busão seria um paraíso!",
    characteristics: ["Educado(a)", "Paciente", "Solidário(a)", "Respeitoso(a)"],
    advice: "Você é um exemplo! Continue espalhando educação por aí. Só não deixe os folgados abusarem da sua boa vontade.",
  },
  C: {
    type: "C",
    title: "O Sociável do Busão",
    emoji: "🗣️",
    percentage: 90,
    description: "Você é O Sociável do Busão! Pra você, o ônibus é uma extensão da sala de casa. Conversa com o motorista, faz amizade com desconhecidos e transforma qualquer viagem numa experiência social!",
    characteristics: ["Comunicativo(a)", "Extrovertido(a)", "Bem-humorado(a)", "Curioso(a)"],
    advice: "Sua energia social é contagiante! Só respeite quem tá com fone de ouvido - às vezes a pessoa só quer silêncio mesmo.",
  },
  D: {
    type: "D",
    title: "O Viajante Introspectivo",
    emoji: "🎧",
    percentage: 75,
    description: "Você é O Viajante Introspectivo! Fone de ouvido no máximo, olhar perdido na janela, e um mundo próprio dentro do busão. A viagem é seu momento de desconectar do mundo e viajar também por dentro!",
    characteristics: ["Introspectivo(a)", "Calmo(a)", "Observador(a)", "Independente"],
    advice: "Seu mundinho interior é precioso! Mas de vez em quando, tire o fone e observe o que acontece ao redor. O busão tem histórias incríveis!",
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
