// Que Tipo de Cozinheiro(a) Você É?
// Descubra seu perfil na cozinha!

export const questions = [
  {
    id: 1,
    question: "Com que frequência você cozinha?",
    options: [
      { text: "Todo dia, adoro cozinhar", type: "A" },
      { text: "Algumas vezes por semana", type: "B" },
      { text: "Raramente, só quando precisa", type: "C" },
      { text: "Quase nunca, prefiro pedir ou comer fora", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você escolhe o que fazer?",
    options: [
      { text: "Invento receitas, criatividade pura", type: "A" },
      { text: "Sigo receitas com adaptações", type: "B" },
      { text: "Faço sempre as mesmas coisas", type: "C" },
      { text: "O que for mais rápido e fácil", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como está sua cozinha?",
    options: [
      { text: "Equipada com tudo, sou chef!", type: "A" },
      { text: "O básico bem organizado", type: "B" },
      { text: "Só o essencial", type: "C" },
      { text: "Vazia, quase não uso", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você segue receitas à risca?",
    options: [
      { text: "Não! Improviso e adapto tudo", type: "A" },
      { text: "Sigo mas faço ajustes", type: "B" },
      { text: "Sim, passo a passo", type: "C" },
      { text: "Nem leio receita, faço o básico", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quando tem visita, você...",
    options: [
      { text: "Preparo um banquete elaborado", type: "A" },
      { text: "Faço algo especial mas prático", type: "B" },
      { text: "Peço pra trazerem algo", type: "C" },
      { text: "Peço delivery ou vamos comer fora", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual sua especialidade?",
    options: [
      { text: "Várias! Sou versátil na cozinha", type: "A" },
      { text: "Alguns pratos que faço bem", type: "B" },
      { text: "Arroz, feijão e carne", type: "C" },
      { text: "Miojo e ovo frito", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você gosta de experimentar receitas novas?",
    options: [
      { text: "Sempre! Adoro desafios culinários", type: "A" },
      { text: "De vez em quando, se parecer fácil", type: "B" },
      { text: "Raramente, prefiro o que sei fazer", type: "C" },
      { text: "Não, pra que complicar?", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você lida com as sobras?",
    options: [
      { text: "Transformo em outro prato criativo", type: "A" },
      { text: "Guardo e como no dia seguinte", type: "B" },
      { text: "Não sobra muito, faço pouco", type: "C" },
      { text: "Às vezes jogo fora, infelizmente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você assiste programas de culinária?",
    options: [
      { text: "Sim! MasterChef, canais de receita, tudo", type: "A" },
      { text: "Às vezes, pra pegar ideias", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Não, prefiro delivery", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você sente quando cozinha?",
    options: [
      { text: "Prazer, é minha terapia", type: "A" },
      { text: "Satisfação de fazer algo gostoso", type: "B" },
      { text: "Obrigação, tem que comer", type: "C" },
      { text: "Preguiça, preferia não ter que fazer", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como é a apresentação dos seus pratos?",
    options: [
      { text: "Caprichada, digna de foto", type: "A" },
      { text: "Razoável, bonito mas sem exagero", type: "B" },
      { text: "Normal, o que importa é o sabor", type: "C" },
      { text: "Sem apresentação, direto no prato", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define na cozinha?",
    options: [
      { text: "'Cozinhar é arte!'", type: "A" },
      { text: "'Feito em casa é sempre melhor'", type: "B" },
      { text: "'O básico bem feito'", type: "C" },
      { text: "'Delivery é meu chef favorito'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chef de Cozinha",
    emoji: "👨‍🍳",
    description: "Você é o Chef! A cozinha é seu reino, onde você cria, experimenta e transforma ingredientes em arte. Cozinhar é sua paixão e terapia!",
    traits: ["Criativo(a)", "Apaixonado(a)", "Habilidoso(a)", "Dedicado(a)"],
    strengths: ["Habilidade culinária", "Criatividade", "Comida deliciosa", "Economia"],
    weaknesses: ["Gasta muito tempo", "Perfeccionismo", "Cozinha suja"],
    tips: ["Às vezes delivery é ok", "Não precisa ser perfeito sempre", "Ensine outros a cozinhar"],
  },
  B: {
    type: "B",
    title: "Cozinheiro(a) do Dia a Dia",
    emoji: "🍳",
    description: "Você é o Cozinheiro do Dia a Dia! Faz comida gostosa e prática, equilibrando sabor e tempo. Você alimenta bem sem complicação!",
    traits: ["Prático(a)", "Equilibrado(a)", "Competente", "Funcional"],
    strengths: ["Equilíbrio tempo/qualidade", "Comida caseira", "Praticidade", "Economia"],
    weaknesses: ["Pode ficar na rotina", "Menos criatividade", "Cansa de cozinhar às vezes"],
    tips: ["Experimente coisas novas", "Você é melhor do que pensa", "Varie o cardápio"],
  },
  C: {
    type: "C",
    title: "Sobrevivente da Cozinha",
    emoji: "🍚",
    description: "Você é o Sobrevivente! Cozinha porque precisa comer, não por prazer. O básico bem feito: arroz, feijão e proteína resolvem!",
    traits: ["Básico(a)", "Funcional", "Prático(a)", "Minimalista"],
    strengths: ["Não perde tempo", "Come o necessário", "Simples e funcional", "Sem frescura"],
    weaknesses: ["Alimentação monótona", "Perde experiências", "Depende de repetição"],
    tips: ["Tente uma receita nova por mês", "Cozinhar pode ser divertido", "Varie um pouco"],
  },
  D: {
    type: "D",
    title: "Anti-Cozinha",
    emoji: "📱",
    description: "Você é o Anti-Cozinha! Delivery, restaurante ou alguém que cozinhe pra você. A cozinha é só um cômodo onde fica a geladeira!",
    traits: ["Avesso(a) à cozinha", "Prático(a)", "Consumidor(a)", "Delegador(a)"],
    strengths: ["Tempo livre", "Variedade de comidas", "Sem louça", "Apoia comércio local"],
    weaknesses: ["Gasta muito", "Menos saudável", "Dependência de terceiros"],
    tips: ["Aprenda pelo menos o básico", "Cozinhar economiza", "É uma habilidade de vida"],
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
