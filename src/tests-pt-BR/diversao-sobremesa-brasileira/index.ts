// Qual Sobremesa Brasileira Você Seria?
// Descubra qual doce brasileiro representa sua doce personalidade!

export const questions = [
  {
    id: 1,
    question: "Como você é em uma festa?",
    options: [
      { text: "Sou o destaque, impossível não notar", type: "A" },
      { text: "Sou acolhedor(a) e faço todos se sentirem bem", type: "B" },
      { text: "Sou simples mas muito apreciado(a)", type: "C" },
      { text: "Sou a surpresa que ninguém esperava", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual sua característica mais marcante?",
    options: [
      { text: "Minha intensidade e presença", type: "A" },
      { text: "Minha doçura e carinho", type: "B" },
      { text: "Minha simplicidade genuína", type: "C" },
      { text: "Minha complexidade interessante", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você prefere ser consumido... digo, apreciado?",
    options: [
      { text: "Em grandes celebrações", type: "A" },
      { text: "Em momentos de conforto", type: "B" },
      { text: "No dia a dia, sempre presente", type: "C" },
      { text: "Em ocasiões especiais e únicas", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que melhor descreve seu humor?",
    options: [
      { text: "Cremoso e envolvente", type: "A" },
      { text: "Doce e reconfortante", type: "B" },
      { text: "Leve e alegre", type: "C" },
      { text: "Complexo e surpreendente", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Em relacionamentos, você é...",
    options: [
      { text: "Intenso(a) e inesquecível", type: "A" },
      { text: "Carinhoso(a) e aconchegante", type: "B" },
      { text: "Simples e verdadeiro(a)", type: "C" },
      { text: "Misterioso(a) e intrigante", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual textura mais te representa?",
    options: [
      { text: "Cremosa e suave", type: "A" },
      { text: "Fofa e macia", type: "B" },
      { text: "Crocante e alegre", type: "C" },
      { text: "Camadas múltiplas e complexas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que as pessoas mais elogiam em você?",
    options: [
      { text: "Minha elegância e sofisticação", type: "A" },
      { text: "Meu carinho e acolhimento", type: "B" },
      { text: "Minha alegria contagiante", type: "C" },
      { text: "Minha originalidade", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você lida com o calor?",
    options: [
      { text: "Derreto de tão intenso(a)", type: "A" },
      { text: "Fico ainda mais aconchegante", type: "B" },
      { text: "Continuo firme e alegre", type: "C" },
      { text: "Me adapto à temperatura", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual é seu ambiente ideal?",
    options: [
      { text: "Elegante e sofisticado", type: "A" },
      { text: "Caseiro e acolhedor", type: "B" },
      { text: "Festivo e animado", type: "C" },
      { text: "Alternativo e criativo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que combina melhor com você?",
    options: [
      { text: "Café forte ou champanhe", type: "A" },
      { text: "Café com leite ou chá", type: "B" },
      { text: "Refrigerante ou suco", type: "C" },
      { text: "Algo inesperado e diferente", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você quer ser lembrado(a)?",
    options: [
      { text: "Como algo especial e marcante", type: "A" },
      { text: "Como algo que traz boas memórias", type: "B" },
      { text: "Como algo alegre e divertido", type: "C" },
      { text: "Como algo único e original", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual sua origem mais provável?",
    options: [
      { text: "De uma tradição refinada", type: "A" },
      { text: "Da cozinha de vó, com amor", type: "B" },
      { text: "De uma festa popular", type: "C" },
      { text: "De uma criação artística", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pudim de Leite Condensado",
    emoji: "🍮",
    description: "Você é o Pudim! Elegante, cremoso e impossível de resistir. Assim como a sobremesa mais amada do Brasil, você é o destaque de qualquer ocasião e deixa todos querendo mais!",
    traits: ["Elegante", "Intenso(a)", "Irresistível", "Sofisticado(a)"],
    strengths: ["Presença marcante", "Carisma natural", "Memorável", "Refinamento"],
    weaknesses: ["Pode ser intenso demais", "Às vezes pesado(a)", "Dificuldade em ser simples"],
    tips: ["Nem sempre precisa ser o centro", "A simplicidade tem seu charme", "Seja leve às vezes"],
  },
  B: {
    type: "B",
    title: "Bolo de Cenoura com Cobertura",
    emoji: "🍰",
    description: "Você é o Bolo de Cenoura! Aconchegante, caseiro e cheio de amor. Assim como o bolo favorito de todo brasileiro, você traz conforto e boas memórias para todos!",
    traits: ["Aconchegante", "Carinhoso(a)", "Caseiro(a)", "Reconfortante"],
    strengths: ["Fazer as pessoas se sentirem em casa", "Simplicidade genuína", "Amor no que faz", "Confiabilidade"],
    weaknesses: ["Pode ser previsível", "Dificuldade em se modernizar", "Muito humilde às vezes"],
    tips: ["Experimente coisas novas", "Você merece mais destaque", "Aceite elogios com graça"],
  },
  C: {
    type: "C",
    title: "Brigadeiro",
    emoji: "🍫",
    description: "Você é o Brigadeiro! Alegre, popular e amado por todos. Assim como o docinho mais famoso do Brasil, você é presença garantida em qualquer festa e faz todos sorrirem!",
    traits: ["Alegre", "Popular", "Festivo(a)", "Democrático(a)"],
    strengths: ["Aceito por todos", "Facilidade de socializar", "Alegria natural", "Versatilidade"],
    weaknesses: ["Pode ser comum demais", "Dificuldade em se destacar", "Às vezes superficial"],
    tips: ["Cultive sua originalidade", "Você pode ser especial também", "Profundidade também importa"],
  },
  D: {
    type: "D",
    title: "Romeu e Julieta",
    emoji: "🧀",
    description: "Você é o Romeu e Julieta! Único, surpreendente e cheio de contrastes. Assim como essa combinação tipicamente brasileira de queijo com goiabada, você é uma mistura deliciosa e inesperada!",
    traits: ["Original", "Surpreendente", "Complexo(a)", "Único(a)"],
    strengths: ["Originalidade", "Ser memorável", "Criatividade", "Combinar o inesperado"],
    weaknesses: ["Pode ser incompreendido(a)", "Nem todos apreciam", "Às vezes confuso(a)"],
    tips: ["Nem todos vão te entender, e tá tudo bem", "Seja você mesmo(a)", "Sua singularidade é seu valor"],
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
