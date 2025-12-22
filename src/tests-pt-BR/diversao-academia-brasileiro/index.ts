// Qual Seu Perfil de Academia?
// Descubra como você é na academia!

export const questions = [
  {
    id: 1,
    question: "Com que frequência você vai à academia?",
    options: [
      { text: "Todo dia, religiosamente", type: "A" },
      { text: "3-4 vezes por semana, bem disciplinado", type: "B" },
      { text: "Quando lembro, tipo 1x por semana", type: "C" },
      { text: "Pago mas quase não vou", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que te motiva a malhar?",
    options: [
      { text: "Ficar gigante/sarado(a)", type: "A" },
      { text: "Saúde e bem-estar", type: "B" },
      { text: "O shape pro verão", type: "C" },
      { text: "Culpa de ter pago", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como é seu treino?",
    options: [
      { text: "Planilha completa, séries e reps controladas", type: "A" },
      { text: "Sigo uma rotina mas flexível", type: "B" },
      { text: "Faço o que der vontade no dia", type: "C" },
      { text: "Esteira e tchau", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você toma suplementos?",
    options: [
      { text: "Whey, creatina, pré-treino, tudo", type: "A" },
      { text: "O básico, whey às vezes", type: "B" },
      { text: "Já comprei mas venceu", type: "C" },
      { text: "Nem sei o que é isso", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você posta treino nas redes?",
    options: [
      { text: "Todo treino tem story e foto", type: "A" },
      { text: "Às vezes, quando tô bem", type: "B" },
      { text: "Raramente, só marcos especiais", type: "C" },
      { text: "Nunca, ninguém precisa saber", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual sua relação com o espelho da academia?",
    options: [
      { text: "Meu melhor amigo, sempre olhando", type: "A" },
      { text: "Olho pra ver a postura do exercício", type: "B" },
      { text: "Evito olhar muito", type: "C" },
      { text: "Nem reparo que tem espelho", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que você faz entre as séries?",
    options: [
      { text: "Fico focado, controlando tempo", type: "A" },
      { text: "Descanso e observo o ambiente", type: "B" },
      { text: "Mexo no celular", type: "C" },
      { text: "Converso com todo mundo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como é sua alimentação pra academia?",
    options: [
      { text: "Dieta rigorosa, tudo pesado e medido", type: "A" },
      { text: "Tento comer bem, mas flexível", type: "B" },
      { text: "Como normal, depois treino", type: "C" },
      { text: "Pizza antes de malhar? Já fiz isso", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você conhece os funcionários e frequentadores?",
    options: [
      { text: "Conheço todos, sou da família", type: "A" },
      { text: "Alguns, os mais próximos", type: "B" },
      { text: "De vista, não falo muito", type: "C" },
      { text: "Nem sei quem é quem", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual desculpa você mais usa pra faltar?",
    options: [
      { text: "Não falto nunca", type: "A" },
      { text: "Só quando realmente não dá", type: "B" },
      { text: "Chuva, frio, cansaço...", type: "C" },
      { text: "Qualquer uma serve", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você se sente depois de malhar?",
    options: [
      { text: "Vivo pra isso, sensação incrível", type: "A" },
      { text: "Bem, valeu a pena", type: "B" },
      { text: "Aliviado que acabou", type: "C" },
      { text: "Destruído, por que faço isso?", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define na academia?",
    options: [
      { text: "'No pain, no gain!'", type: "A" },
      { text: "'Equilíbrio é tudo'", type: "B" },
      { text: "'Melhor do que nada'", type: "C" },
      { text: "'Pelo menos eu pago'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Marombeiro Raiz",
    emoji: "💪",
    description: "Você é Marombeiro Raiz! A academia é sua segunda casa. Você vive, respira e sonha com treino. Shape é vida e o frango com batata doce é sua comida favorita!",
    traits: ["Dedicado(a)", "Disciplinado(a)", "Focado(a)", "Intenso(a)"],
    strengths: ["Comprometimento", "Resultados visíveis", "Disciplina", "Conhecimento"],
    weaknesses: ["Pode exagerar", "Obsessão", "Vida social afetada"],
    tips: ["Descanse também", "Viva além da academia", "Equilíbrio é importante"],
  },
  B: {
    type: "B",
    title: "Saudável Equilibrado",
    emoji: "🏃",
    description: "Você é Saudável Equilibrado! Treina com consistência mas não é obcecado. A academia é parte da sua rotina saudável, não sua vida inteira. Parabéns pelo equilíbrio!",
    traits: ["Equilibrado(a)", "Consistente", "Saudável", "Consciente"],
    strengths: ["Equilíbrio", "Sustentável", "Saúde em dia", "Boa rotina"],
    weaknesses: ["Pode estagnar", "Sem grandes resultados", "Zona de conforto"],
    tips: ["Continue assim", "Desafie-se às vezes", "Você está no caminho certo"],
  },
  C: {
    type: "C",
    title: "Atleta de Verão",
    emoji: "🏖️",
    description: "Você é Atleta de Verão! Sua motivação vem e vai, geralmente chegando forte em setembro. Você malha quando lembra, focado no shape do momento!",
    traits: ["Sazonal", "Motivado(a) por vaidade", "Flexível", "Inconstante"],
    strengths: ["Quando foca, foca", "Não é obcecado", "Vida equilibrada"],
    weaknesses: ["Inconstância", "Resultados limitados", "Dependente de motivação"],
    tips: ["Tente criar o hábito", "Pequenas metas ajudam", "Consistência > intensidade"],
  },
  D: {
    type: "D",
    title: "Sócio Fantasma",
    emoji: "👻",
    description: "Você é Sócio Fantasma! A academia agradece sua contribuição financeira mensal. Você tem boas intenções mas a execução é outra história. O plano anual ainda tá valendo!",
    traits: ["Bem intencionado(a)", "Procrastinador(a)", "Pagador(a) fiel", "Cheio(a) de desculpas"],
    strengths: ["Pelo menos paga", "Não desiste totalmente", "Boas intenções"],
    weaknesses: ["Não vai", "Dinheiro desperdiçado", "Sempre 'amanhã começo'"],
    tips: ["Cancele ou vá", "Comece devagar", "Qualquer movimento conta"],
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
