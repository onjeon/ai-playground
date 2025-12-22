// Qual Seu Tipo de Passageiro de Uber?
// Descubra como você se comporta nas corridas!

export const questions = [
  {
    id: 1,
    question: "O motorista puxa assunto. Você...",
    options: [
      { text: "Converso animado(a) a viagem toda", type: "A" },
      { text: "Respondo educadamente mas não puxo papo", type: "B" },
      { text: "Dou respostas curtas e coloco fone", type: "C" },
      { text: "Finjo que tô no celular desde o início", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você espera o Uber chegar?",
    options: [
      { text: "Já na calçada, pronto(a) pra entrar", type: "A" },
      { text: "Desço quando ele tá chegando", type: "B" },
      { text: "Peço e depois me arrumo com calma", type: "C" },
      { text: "Faço ele esperar enquanto termino algo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sobre o ar-condicionado do carro:",
    options: [
      { text: "Peço pra ajustar se precisar, educadamente", type: "A" },
      { text: "Aguento como está, não quero incomodar", type: "B" },
      { text: "Mexo eu mesmo(a) se for óbvio que pode", type: "C" },
      { text: "Sofro em silêncio mesmo passando calor/frio", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O motorista pega um caminho diferente do app. Você...",
    options: [
      { text: "Pergunto educadamente por que mudou a rota", type: "A" },
      { text: "Confio que ele sabe o que tá fazendo", type: "B" },
      { text: "Fico de olho mas não falo nada", type: "C" },
      { text: "Já fico nervoso(a), medo de golpe", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você sempre dá gorjeta?",
    options: [
      { text: "Sempre, já deixo como padrão", type: "A" },
      { text: "Quando o motorista é especialmente bom", type: "B" },
      { text: "Raramente, só se for excepcional", type: "C" },
      { text: "Nunca, já pago a corrida né", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sobre pedir parada no caminho:",
    options: [
      { text: "Aviso antes de chamar, combino certinho", type: "A" },
      { text: "Peço durante a corrida se precisar", type: "B" },
      { text: "Evito ao máximo, dá trabalho", type: "C" },
      { text: "Faço paradas surpresa toda hora", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O motorista está com música alta. Você...",
    options: [
      { text: "Peço gentilmente pra abaixar", type: "A" },
      { text: "Curto junto se for boa", type: "B" },
      { text: "Coloco fone e ignoro", type: "C" },
      { text: "Aguento mesmo incomodado(a)", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como são suas avaliações de motoristas?",
    options: [
      { text: "Avalio sempre, com comentário quando necessário", type: "A" },
      { text: "5 estrelas padrão, menos se for ruim", type: "B" },
      { text: "Esqueço de avaliar na maioria das vezes", type: "C" },
      { text: "Só avalio se for muito bom ou muito ruim", type: "D" },
    ],
  },
  {
    id: 9,
    question: "No banco de trás, você senta...",
    options: [
      { text: "Atrás do carona, mais espaço pra pernas", type: "A" },
      { text: "No meio, pra conversar melhor", type: "B" },
      { text: "Onde cair, tanto faz", type: "C" },
      { text: "Atrás do motorista, mais privacidade", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Chegou no destino. Você...",
    options: [
      { text: "Agradeço, desejo bom trabalho e saio", type: "A" },
      { text: "Agradeço e saio rapidinho", type: "B" },
      { text: "Saio sem falar nada, normal", type: "C" },
      { text: "Demoro pra juntar minhas coisas e sair", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Passageiro 5 Estrelas",
    emoji: "⭐",
    percentage: 95,
    description: "Você é O Passageiro 5 Estrelas! Educado(a), pontual, comunicativo(a) na medida certa. Todo motorista quer você como passageiro. Sua nota no app deve ser altíssima!",
    characteristics: ["Educado(a)", "Pontual", "Respeitoso(a)", "Comunicativo(a)"],
    advice: "Você é o passageiro ideal! Continue assim, espalhando boas vibes nas corridas. Motoristas com certeza te elogiam depois!",
  },
  B: {
    type: "B",
    title: "O Passageiro Tranquilo",
    emoji: "😌",
    percentage: 80,
    description: "Você é O Passageiro Tranquilo! Não dá trabalho, não reclama, segue o fluxo. Você é aquele passageiro que todo motorista espera: sem dramas, sem estresse!",
    characteristics: ["Tranquilo(a)", "Flexível", "Fácil de lidar", "Discreto(a)"],
    advice: "Sua tranquilidade é ótima! Só não deixe de se posicionar quando algo te incomodar. Você também merece uma corrida confortável!",
  },
  C: {
    type: "C",
    title: "O Passageiro Introspectivo",
    emoji: "🎧",
    percentage: 70,
    description: "Você é O Passageiro Introspectivo! Uber pra você é momento de silêncio e reflexão (ou de mexer no celular). Você prefere uma corrida quieta e sem interação!",
    characteristics: ["Reservado(a)", "Independente", "Focado(a)", "Prático(a)"],
    advice: "Tudo bem preferir silêncio! Mas um 'oi' e um 'obrigado' fazem diferença. Pequenas gentilezas custam pouco e valem muito.",
  },
  D: {
    type: "D",
    title: "O Passageiro Peculiar",
    emoji: "🤷",
    percentage: 50,
    description: "Você é O Passageiro Peculiar! Suas corridas são sempre uma aventura - pro motorista principalmente. Atrasos, paradas surpresa, silêncio absoluto... Você é imprevisível!",
    characteristics: ["Imprevisível", "Distraído(a)", "Único(a)", "Desorganizado(a)"],
    advice: "Ser único é legal, mas respeitar o tempo do motorista também é importante! Tenta ser mais pontual e comunicativo(a). Todo mundo ganha!",
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
