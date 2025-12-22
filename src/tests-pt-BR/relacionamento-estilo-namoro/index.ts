// Qual é seu Estilo de Namoro?
// Descubra como você se comporta nos relacionamentos amorosos!

export const questions = [
  {
    id: 1,
    question: "Como você prefere conhecer pessoas para namorar?",
    options: [
      { text: "Aplicativos de namoro", type: "A" },
      { text: "Através de amigos em comum", type: "B" },
      { text: "Pessoalmente em festas ou eventos", type: "C" },
      { text: "Deixo acontecer naturalmente", type: "D" },
    ],
  },
  {
    id: 2,
    question: "No início de um relacionamento, como você age?",
    options: [
      { text: "Vou direto ao ponto sobre intenções", type: "A" },
      { text: "Construo uma amizade primeiro", type: "B" },
      { text: "Flerto muito e demonstro interesse", type: "C" },
      { text: "Sou misterioso(a) e deixo rolar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual tipo de encontro você prefere?",
    options: [
      { text: "Jantar romântico a dois", type: "A" },
      { text: "Atividade tranquila como cinema ou café", type: "B" },
      { text: "Balada ou festa animada", type: "C" },
      { text: "Algo espontâneo e diferente", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quanto tempo você leva para oficializar um namoro?",
    options: [
      { text: "Rápido, quando sei que é a pessoa certa", type: "A" },
      { text: "Alguns meses de conhecimento", type: "B" },
      { text: "Depende da intensidade da paixão", type: "C" },
      { text: "Não gosto de rótulos, deixo fluir", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você demonstra interesse por alguém?",
    options: [
      { text: "Sou direto(a) e falo o que sinto", type: "A" },
      { text: "Mostro através de gestos de carinho", type: "B" },
      { text: "Flerto e provoco de forma divertida", type: "C" },
      { text: "Deixo a pessoa perceber sozinha", type: "D" },
    ],
  },
  {
    id: 6,
    question: "O que você mais valoriza em um encontro?",
    options: [
      { text: "Conversa profunda e conexão", type: "A" },
      { text: "Conforto e tranquilidade", type: "B" },
      { text: "Diversão e química", type: "C" },
      { text: "Momentos únicos e inesperados", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você lida com o período de 'ficar'?",
    options: [
      { text: "Prefiro pular direto pro namoro", type: "A" },
      { text: "Gosto de conhecer bem antes", type: "B" },
      { text: "Curto muito essa fase de descobertas", type: "C" },
      { text: "Sem pressa, o que tiver que ser, será", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual é sua frequência ideal de encontros no início?",
    options: [
      { text: "Todos os dias se possível", type: "A" },
      { text: "2-3 vezes por semana", type: "B" },
      { text: "Fins de semana intensos", type: "C" },
      { text: "Sem frequência fixa, quando der", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que te faz querer um segundo encontro?",
    options: [
      { text: "Sentir que há futuro na relação", type: "A" },
      { text: "Me sentir confortável e à vontade", type: "B" },
      { text: "Ter tido muita química e diversão", type: "C" },
      { text: "Curiosidade de conhecer mais", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você apresenta seu 'ficante' aos amigos?",
    options: [
      { text: "Logo cedo, já como alguém especial", type: "A" },
      { text: "Depois de um tempo, com calma", type: "B" },
      { text: "Em situações sociais, naturalmente", type: "C" },
      { text: "Só se perguntarem", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que mais te atrai em alguém no início?",
    options: [
      { text: "Maturidade e seriedade", type: "A" },
      { text: "Gentileza e cuidado", type: "B" },
      { text: "Beleza e carisma", type: "C" },
      { text: "Algo diferente e único", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você termina algo que não está funcionando?",
    options: [
      { text: "Converso abertamente sobre", type: "A" },
      { text: "Vou me afastando aos poucos", type: "B" },
      { text: "Depende de como estou me sentindo", type: "C" },
      { text: "Deixo morrer naturalmente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O(A) Determinado(a)",
    emoji: "🎯",
    description: "Você é direto(a) e sabe o que quer no amor! Não perde tempo com indecisões e busca relacionamentos sérios. Quando encontra alguém especial, investe de verdade.",
    traits: ["Decidido(a)", "Sério(a)", "Direto(a)", "Comprometido(a)"],
    strengths: ["Não perde tempo", "Sabe o que quer", "Investe em quem vale a pena", "Maduro(a) no amor"],
    weaknesses: ["Pode parecer intenso(a) demais", "Às vezes apressado(a)"],
    tips: ["Dê espaço para o outro também", "Curta o processo de conhecer", "Nem tudo precisa ser tão sério no início"],
  },
  B: {
    type: "B",
    title: "O(A) Tranquilo(a)",
    emoji: "☕",
    description: "Você prefere construir relacionamentos com calma e paciência! Valoriza a amizade como base do amor e não tem pressa em oficializar nada. Seu jeito tranquilo cria conexões verdadeiras.",
    traits: ["Paciente", "Cauteloso(a)", "Valoriza amizade", "Confortável"],
    strengths: ["Constrói bases sólidas", "Não se precipita", "Relacionamentos duradouros", "Escolhe bem"],
    weaknesses: ["Pode demorar demais", "Pode perder oportunidades por indecisão"],
    tips: ["Às vezes vale arriscar mais", "Não deixe a pessoa esperando demais", "Demonstre mais seu interesse"],
  },
  C: {
    type: "C",
    title: "O(A) Apaixonado(a)",
    emoji: "🔥",
    description: "Você vive o amor com intensidade e paixão! Adora a fase de conquista, o flerte e a química. Seus relacionamentos são emocionantes e cheios de energia.",
    traits: ["Apaixonado(a)", "Intenso(a)", "Carismático(a)", "Divertido(a)"],
    strengths: ["Relacionamentos emocionantes", "Muito envolvente", "Sabe conquistar", "Romântico(a)"],
    weaknesses: ["Pode se empolgar rápido demais", "A intensidade pode assustar alguns"],
    tips: ["Cuide para não se machucar", "Mantenha os pés no chão", "Veja além da paixão inicial"],
  },
  D: {
    type: "D",
    title: "O(A) Livre",
    emoji: "🦋",
    description: "Você vive o amor de forma leve e espontânea! Não gosta de rótulos ou pressões e deixa as coisas acontecerem naturalmente. Valoriza sua liberdade acima de tudo.",
    traits: ["Livre", "Espontâneo(a)", "Desapegado(a)", "Flexível"],
    strengths: ["Não sufoca o parceiro", "Vive o momento", "Sem pressões desnecessárias", "Adaptável"],
    weaknesses: ["Pode parecer desinteressado(a)", "Dificuldade em se comprometer"],
    tips: ["Às vezes é bom definir as coisas", "Comunique suas intenções", "Não fuja de compromissos por medo"],
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
