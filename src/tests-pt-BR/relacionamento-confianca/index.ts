// Qual é seu Nível de Confiança no Amor?
// Descubra como você confia nos relacionamentos amorosos!

export const questions = [
  {
    id: 1,
    question: "Quando você começa um relacionamento, como se sente sobre confiar na pessoa?",
    options: [
      { text: "Confio naturalmente desde o início", type: "A" },
      { text: "Confio aos poucos conforme conheço", type: "B" },
      { text: "Demoro muito pra confiar", type: "C" },
      { text: "Tenho muita dificuldade em confiar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Seu parceiro precisa cancelar um encontro de última hora. O que você pensa?",
    options: [
      { text: "Deve ter um bom motivo, entendo", type: "A" },
      { text: "Fico um pouco desconfiado(a) mas aceito", type: "B" },
      { text: "Peço explicações detalhadas", type: "C" },
      { text: "Já imagino que está mentindo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você já foi traído(a) ou magoado(a) em relacionamentos anteriores?",
    options: [
      { text: "Não, e isso me ajuda a confiar", type: "A" },
      { text: "Sim, mas superei e confio novamente", type: "B" },
      { text: "Sim, e isso me deixou mais cauteloso(a)", type: "C" },
      { text: "Sim, e tenho muita dificuldade de superar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Seu parceiro tem acesso livre ao seu celular?",
    options: [
      { text: "Sim, não tenho nada a esconder", type: "A" },
      { text: "Sim, mas espero o mesmo dele(a)", type: "B" },
      { text: "Prefiro manter minha privacidade", type: "C" },
      { text: "Não, e também não confio no dele(a)", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você lida quando descobre que seu parceiro mentiu sobre algo pequeno?",
    options: [
      { text: "Relevou, todos cometem erros", type: "A" },
      { text: "Converso e espero que não se repita", type: "B" },
      { text: "Fico muito desconfiado(a) de tudo", type: "C" },
      { text: "Perco a confiança completamente", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você conta seus segredos mais íntimos para seu parceiro?",
    options: [
      { text: "Sim, conto tudo sem medo", type: "A" },
      { text: "Conto a maioria das coisas", type: "B" },
      { text: "Guardo algumas coisas só pra mim", type: "C" },
      { text: "Não, tenho medo de ser magoado(a)", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Seu parceiro viaja sozinho a trabalho. Como você se sente?",
    options: [
      { text: "Totalmente tranquilo(a)", type: "A" },
      { text: "Confio, mas sinto um pouco de falta", type: "B" },
      { text: "Fico preocupado(a) e peço atualizações", type: "C" },
      { text: "Muito ansioso(a) e desconfiado(a)", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quanto tempo você leva para se abrir emocionalmente com alguém?",
    options: [
      { text: "Me abro rapidamente quando me sinto bem", type: "A" },
      { text: "Levo algumas semanas ou meses", type: "B" },
      { text: "Demoro muito, preciso de muito tempo", type: "C" },
      { text: "Quase nunca me abro completamente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você acredita que seu parceiro seria honesto se algo ruim acontecesse?",
    options: [
      { text: "Sim, confio que seria transparente", type: "A" },
      { text: "Provavelmente sim, mas depende", type: "B" },
      { text: "Tenho minhas dúvidas", type: "C" },
      { text: "Não, acho que esconderia de mim", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você reage quando seu parceiro esquece algo importante?",
    options: [
      { text: "Entendo, todos temos dias ruins", type: "A" },
      { text: "Fico chateado(a) mas perdoo", type: "B" },
      { text: "Questiono se realmente se importa comigo", type: "C" },
      { text: "Vejo como prova de que não me valoriza", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você consegue dormir tranquilo(a) quando seu parceiro sai à noite?",
    options: [
      { text: "Sim, durmo tranquilamente", type: "A" },
      { text: "Fico acordado(a) até ele(a) chegar", type: "B" },
      { text: "Fico ansioso(a) e checo o celular", type: "C" },
      { text: "Não consigo relaxar de jeito nenhum", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Se seu parceiro elogiasse muito outra pessoa, o que você pensaria?",
    options: [
      { text: "Normal, reconhecer beleza não é problema", type: "A" },
      { text: "Ficaria um pouco incomodado(a)", type: "B" },
      { text: "Questionaria seus sentimentos por mim", type: "C" },
      { text: "Veria como sinal de interesse", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Confiança Plena",
    emoji: "💎",
    description: "Você tem uma capacidade incrível de confiar! Se entrega aos relacionamentos de coração aberto e acredita no melhor das pessoas. Essa confiança cria relacionamentos sólidos e saudáveis.",
    traits: ["Muito confiante", "Coração aberto", "Otimista no amor", "Seguro(a) de si"],
    strengths: ["Cria laços profundos", "Não sofre por antecipação", "Relacionamentos leves", "Transmite segurança"],
    weaknesses: ["Pode ser ingênuo(a) às vezes", "Pode ignorar sinais de alerta"],
    tips: ["Mantenha essa confiança saudável", "Mas não ignore red flags reais", "Continue sendo você mesmo(a)"],
  },
  B: {
    type: "B",
    title: "Confiança Equilibrada",
    emoji: "⚖️",
    description: "Você tem um equilíbrio saudável entre confiar e se proteger! Confia nas pessoas depois de conhecê-las melhor e sabe perdoar pequenos erros. Essa abordagem é muito madura.",
    traits: ["Equilibrado(a)", "Cauteloso(a) no início", "Sabe perdoar", "Maduro(a) emocionalmente"],
    strengths: ["Protege seu coração", "Confia quando vale a pena", "Supera mágoas", "Dá segundas chances"],
    weaknesses: ["Pode demorar pra se abrir", "Às vezes guarda pequenas mágoas"],
    tips: ["Continue cultivando esse equilíbrio", "Não tenha medo de se abrir", "Confie no seu instinto"],
  },
  C: {
    type: "C",
    title: "Confiança Cautelosa",
    emoji: "🛡️",
    description: "Você tem dificuldade em confiar plenamente nos relacionamentos. Experiências passadas podem ter criado barreiras. Você se protege muito, mas isso pode impedir conexões profundas.",
    traits: ["Muito cauteloso(a)", "Protetor(a) do próprio coração", "Desconfiado(a)", "Reservado(a)"],
    strengths: ["Não se magoa facilmente", "Analítico(a)", "Protegido(a) de pessoas ruins"],
    weaknesses: ["Dificuldade em criar laços", "Pode afastar pessoas boas", "Relacionamentos superficiais"],
    tips: ["Trabalhe suas feridas do passado", "Dê chances às pessoas", "Busque ajuda se necessário"],
  },
  D: {
    type: "D",
    title: "Confiança Ferida",
    emoji: "💔",
    description: "Você tem muita dificuldade em confiar devido a experiências dolorosas. Vive em constante alerta e isso pode sabotar seus relacionamentos. É importante trabalhar essas feridas.",
    traits: ["Muito desconfiado(a)", "Ferido(a) emocionalmente", "Sempre em alerta", "Medo de se machucar"],
    strengths: ["Muito atento(a) a detalhes", "Proteção máxima do coração"],
    weaknesses: ["Pode ser tóxico(a) por medo", "Afasta pessoas que amam você", "Não consegue ser feliz no amor"],
    tips: ["Procure terapia ou ajuda profissional", "Trabalhe suas feridas do passado", "Nem todos vão te machucar", "Você merece amar e ser amado(a)"],
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
