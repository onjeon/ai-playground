// Visão sobre Filhos
// Descubra como você enxerga a questão de ter filhos!

export const questions = [
  {
    id: 1,
    question: "Quando você pensa em ter filhos, sente:",
    options: [
      { text: "Muita vontade, é um sonho de vida", type: "A" },
      { text: "Vontade, mas com calma e planejamento", type: "B" },
      { text: "Dúvida, ainda não tenho certeza", type: "C" },
      { text: "Não quero ter filhos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sobre o momento ideal pra ter filhos:",
    options: [
      { text: "Quanto antes melhor, se a relação for boa", type: "A" },
      { text: "Quando estiver estável financeira e emocionalmente", type: "B" },
      { text: "Ainda não penso nisso, talvez no futuro", type: "C" },
      { text: "Não existe momento ideal porque não quero", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quantos filhos você imagina ter?",
    options: [
      { text: "Dois ou mais, quero uma família grande", type: "A" },
      { text: "Um ou dois, número equilibrado", type: "B" },
      { text: "Talvez um, se um dia decidir que quero", type: "C" },
      { text: "Nenhum, minha escolha é não ter", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Se seu parceiro(a) tiver visão diferente sobre filhos:",
    options: [
      { text: "Seria muito difícil, é fundamental pra mim", type: "A" },
      { text: "Conversaríamos pra chegar num acordo", type: "B" },
      { text: "Estou flexível, poderia repensar minha posição", type: "C" },
      { text: "Não abro mão, é uma decisão importante demais", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sobre adoção, você pensa:",
    options: [
      { text: "Considero fortemente, filhos biológicos ou adotados são família", type: "A" },
      { text: "É uma opção válida, estou aberto(a)", type: "B" },
      { text: "Teria que pensar muito antes", type: "C" },
      { text: "Não muda minha posição sobre não ter filhos", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando você vê crianças, naturalmente:",
    options: [
      { text: "Fico encantado(a), adoro interagir", type: "A" },
      { text: "Gosto, mas em doses moderadas", type: "B" },
      { text: "Fico neutro(a), não me afeta muito", type: "C" },
      { text: "Prefiro distância, não tenho muita paciência", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sobre as mudanças de vida que filhos trazem:",
    options: [
      { text: "Estou animado(a) pra viver essa transformação", type: "A" },
      { text: "Entendo que muda muito, estou disposto(a)", type: "B" },
      { text: "Tenho receio das mudanças, ainda penso nisso", type: "C" },
      { text: "Justamente por isso prefiro não ter", type: "D" },
    ],
  },
  {
    id: 8,
    question: "A maternidade/paternidade na sua visão é:",
    options: [
      { text: "Uma das experiências mais lindas da vida", type: "A" },
      { text: "Uma escolha importante que pode ser muito boa", type: "B" },
      { text: "Uma opção entre muitas, não é pra todo mundo", type: "C" },
      { text: "Uma escolha válida, mas não pra mim", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Se descobrisse uma gravidez não planejada, você:",
    options: [
      { text: "Ficaria feliz, mesmo que não fosse o plano", type: "A" },
      { text: "Aceitaria e faria o melhor possível", type: "B" },
      { text: "Entraria em conflito, precisaria de tempo", type: "C" },
      { text: "Seria muito complicado pra mim lidar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual frase mais te representa sobre filhos?",
    options: [
      { text: "Sonho em construir uma família com filhos", type: "A" },
      { text: "Quero ter filhos quando a vida permitir", type: "B" },
      { text: "Ainda estou descobrindo se quero ou não", type: "C" },
      { text: "Escolhi conscientemente não ter filhos", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Sonhador(a) de Família",
    emoji: "👶",
    percentage: 95,
    description: "Você sonha em ter filhos e construir uma família! É um desejo forte e importante na sua vida. Imagina a experiência da maternidade/paternidade como algo lindo e transformador!",
    characteristics: ["Desejo forte de ser pai/mãe", "Familiar", "Acolhedor(a)", "Voltado(a) pra família"],
    advice: "Seu sonho é lindo! Só lembre-se de respeitar o tempo certo e estar emocionalmente e financeiramente preparado(a). E comunique claramente essa visão ao seu parceiro(a)!",
  },
  B: {
    type: "B",
    title: "Planejador(a) Consciente",
    emoji: "📋",
    percentage: 75,
    description: "Você quer ter filhos, mas de forma planejada e consciente! Valoriza a preparação e quer esperar o momento certo. Sabe que é uma grande responsabilidade e quer estar pronto(a)!",
    characteristics: ["Planejador(a)", "Responsável", "Equilibrado(a)", "Consciente"],
    advice: "Seu planejamento é sábio! Só cuidado pra não esperar o momento 'perfeito' que nunca chega. Equilibre planejamento com flexibilidade. E converse abertamente com seu par!",
  },
  C: {
    type: "C",
    title: "Indeciso(a) Reflexivo(a)",
    emoji: "🤔",
    percentage: 50,
    description: "Você ainda está descobrindo se quer ter filhos! Tem dúvidas, questões e está refletindo sobre esse grande passo. É uma decisão importante e você quer ter certeza!",
    characteristics: ["Reflexivo(a)", "Indeciso(a)", "Cauteloso(a)", "Em processo de descoberta"],
    advice: "Tudo bem ainda não saber! Essa é uma decisão que merece reflexão. Converse com pessoas que fizeram diferentes escolhas, reflita sobre seus valores e não se pressione. A clareza virá!",
  },
  D: {
    type: "D",
    title: "Childfree Convicto(a)",
    emoji: "🦋",
    percentage: 30,
    description: "Você escolheu conscientemente não ter filhos! Sabe que não é o caminho pra você e está em paz com essa decisão. Valoriza sua vida e liberdade de outras formas!",
    characteristics: ["Decidido(a)", "Autoconhecimento", "Livre", "Convicto(a)"],
    advice: "Sua escolha é válida e respeitável! O importante é estar em paz com ela. Comunique claramente essa posição a parceiros desde o início pra evitar conflitos futuros!",
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
