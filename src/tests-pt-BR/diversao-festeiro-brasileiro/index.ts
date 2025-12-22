// Que Tipo de Festeiro(a) Você É?
// Descubra seu perfil em festas e baladas!

export const questions = [
  {
    id: 1,
    question: "Que horas você chega na festa?",
    options: [
      { text: "Cedo, pra aproveitar tudo", type: "A" },
      { text: "Na hora que combinou", type: "B" },
      { text: "Atrasado, fashionably late", type: "C" },
      { text: "Só se for arrastado(a)", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Onde você fica na festa?",
    options: [
      { text: "Na pista, dançando o tempo todo", type: "A" },
      { text: "Circulando, conversando com todos", type: "B" },
      { text: "No bar ou em um canto", type: "C" },
      { text: "Perto da saída, esperando ir embora", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quantos drinks você toma?",
    options: [
      { text: "Muitos! A noite é longa", type: "A" },
      { text: "Alguns, com moderação", type: "B" },
      { text: "Poucos, prefiro lucidez", type: "C" },
      { text: "Só água ou refrigerante", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você dança?",
    options: [
      { text: "Sim! Não paro um minuto", type: "A" },
      { text: "Quando toca algo que gosto", type: "B" },
      { text: "Raramente, tenho vergonha", type: "C" },
      { text: "Nunca, nem morto(a)", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Que horas você vai embora?",
    options: [
      { text: "Último a sair, fecho o lugar", type: "A" },
      { text: "Quando a festa esfria", type: "B" },
      { text: "Cedo, já cumpri minha obrigação social", type: "C" },
      { text: "O mais rápido possível", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você acorda no dia seguinte?",
    options: [
      { text: "De ressaca, mas valeu a pena", type: "A" },
      { text: "Um pouco cansado(a), normal", type: "B" },
      { text: "Bem, porque fui embora cedo", type: "C" },
      { text: "Bem, porque nem fui ou fui por pouco tempo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você conhece gente nova em festas?",
    options: [
      { text: "Sempre! Falo com todo mundo", type: "A" },
      { text: "Às vezes, se aparecer oportunidade", type: "B" },
      { text: "Raramente, fico com meu grupo", type: "C" },
      { text: "Não, mal falo com quem já conheço", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que você mais gosta em festas?",
    options: [
      { text: "A energia, a música, a diversão", type: "A" },
      { text: "Encontrar os amigos", type: "B" },
      { text: "A comida e as conversas", type: "C" },
      { text: "Nada, vou por obrigação", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você organiza festas?",
    options: [
      { text: "Sim! Adoro ser anfitrião(ã)", type: "A" },
      { text: "Às vezes, quando faz sentido", type: "B" },
      { text: "Prefiro ir nas dos outros", type: "C" },
      { text: "Nunca, muito trabalho", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual tipo de festa você prefere?",
    options: [
      { text: "Balada/festa grande com muita gente", type: "A" },
      { text: "Festa em casa com amigos", type: "B" },
      { text: "Jantar ou reunião pequena", type: "C" },
      { text: "Ficar em casa mesmo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você tira muitas fotos em festas?",
    options: [
      { text: "Sim! Registro tudo", type: "A" },
      { text: "Algumas, dos momentos legais", type: "B" },
      { text: "Poucas, prefiro viver o momento", type: "C" },
      { text: "Nenhuma, nem estou lá direito", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define em festas?",
    options: [
      { text: "'Bora! A noite é uma criança!'", type: "A" },
      { text: "'Tá bom, mas não exagera'", type: "B" },
      { text: "'Mais um pouco e já vou'", type: "C" },
      { text: "'Por que vim mesmo?'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Party Animal",
    emoji: "🎉",
    description: "Você é o Party Animal! Festas são sua vida, você é o primeiro a chegar e último a sair. A pista é sua casa e a noite é sua melhor amiga!",
    traits: ["Festeiro(a)", "Energético(a)", "Sociável", "Intenso(a)"],
    strengths: ["Animar qualquer festa", "Energia inesgotável", "Fazer amigos", "Criar memórias"],
    weaknesses: ["Ressaca frequente", "Pode exagerar", "Difícil saber a hora de parar"],
    tips: ["Modere às vezes", "Cuide da saúde", "Amanhã existe"],
  },
  B: {
    type: "B",
    title: "Festeiro(a) Equilibrado(a)",
    emoji: "🍹",
    description: "Você é o Festeiro Equilibrado! Curte festas mas sabe a hora de parar. Você encontrou o equilíbrio perfeito entre diversão e responsabilidade!",
    traits: ["Equilibrado(a)", "Sociável", "Consciente", "Divertido(a)"],
    strengths: ["Curtir com moderação", "Sem arrependimentos", "Bom julgamento", "Energia renovada"],
    weaknesses: ["Pode parecer careta", "Perde alguns momentos épicos", "Às vezes racional demais"],
    tips: ["Seu equilíbrio é perfeito", "Às vezes vale se jogar", "Continue assim"],
  },
  C: {
    type: "C",
    title: "Festeiro(a) Relutante",
    emoji: "🙃",
    description: "Você é o Festeiro Relutante! Vai quando tem que ir, fica o mínimo necessário e já está pensando em casa. Festas são ok, mas não são sua praia!",
    traits: ["Reservado(a)", "Seletivo(a)", "Caseiro(a)", "Introvertido(a)"],
    strengths: ["Sem ressaca", "Economia", "Descanso garantido", "Autenticidade"],
    weaknesses: ["Perde experiências", "Pode parecer antissocial", "Isolamento"],
    tips: ["Dê mais chances às festas", "Nem toda festa é igual", "Tente se soltar mais"],
  },
  D: {
    type: "D",
    title: "Anti-Festa",
    emoji: "🏠",
    description: "Você é o Anti-Festa! Festas não são pra você e está tudo bem. Sua ideia de diversão é completamente diferente e você é honesto sobre isso!",
    traits: ["Caseiro(a)", "Introvertido(a)", "Honesto(a)", "Independente"],
    strengths: ["Autoconhecimento", "Sem hipocrisia", "Outros hobbies", "Paz interior"],
    weaknesses: ["Perde conexões", "Pode parecer rude", "Limita experiências"],
    tips: ["Tente pelo menos uma vez por ano", "Amizades precisam de presença", "Nem toda festa é barulhenta"],
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
